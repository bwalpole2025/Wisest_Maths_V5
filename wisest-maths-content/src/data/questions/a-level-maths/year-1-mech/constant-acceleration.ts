import { Question } from "@/lib/types";

export const questions: Question[] = [
{
  "id": "al.y1.mech.constant-acceleration.q001",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "equation-selection", "final-velocity"],
  "questionText": "A particle moves with constant acceleration. Its initial velocity is $u = 4\\ \\text{m s}^{-1}$, its acceleration is $a = 2\\ \\text{m s}^{-2}$ and it moves for $t = 5\\ \\text{s}$. Using $v = u + at$, find its final velocity $v$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the quantities we know and the one we want.",
        "workingLatex": "u = 4,\\quad a = 2,\\quad t = 5,\\quad v = \\text{?}",
        "explanation": "Writing down what is given and what is asked for keeps the problem organised and makes it easy to see which suvat equation will fit.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Notice which variable is not involved.",
        "workingLatex": "s\\ \\text{is neither given nor required}",
        "explanation": "Each suvat equation leaves out exactly one of the five variables. Here displacement $s$ is not mentioned, so we want the equation that does not contain $s$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose the equation that links u, a, t and v.",
        "workingLatex": "v = u + at",
        "explanation": "This is the only suvat equation that uses $u$, $a$, $t$ and $v$ while leaving out $s$, so it matches exactly what we know and want.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the known values.",
        "workingLatex": "v = 4 + 2\\times 5",
        "explanation": "Replace each letter with its number so the calculation is ready to evaluate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Do the multiplication first.",
        "workingLatex": "2\\times 5 = 10",
        "explanation": "Order of operations tells us to multiply before we add, so we work out $at$ first.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Add to find v.",
        "workingLatex": "v = 4 + 10 = 14",
        "explanation": "Adding the starting velocity to the extra velocity gained gives the final velocity.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the answer with units.",
        "workingLatex": "v = 14\\ \\text{m s}^{-1}",
        "explanation": "Velocity is measured in metres per second, so we always finish by attaching the correct units.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 14\\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q002",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "from-rest", "final-velocity"],
  "questionText": "A car starts from rest and accelerates uniformly at $3\\ \\text{m s}^{-2}$ for $6\\ \\text{s}$. Find its final velocity.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Read \"starts from rest\" as a value for u.",
        "workingLatex": "u = 0",
        "explanation": "\"From rest\" always means the initial velocity is zero, which is one of our known quantities.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the knowns and the unknown.",
        "workingLatex": "u = 0,\\quad a = 3,\\quad t = 6,\\quad v = \\text{?}",
        "explanation": "Collecting the information first makes it clear which equation we need.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose the equation without s.",
        "workingLatex": "v = u + at",
        "explanation": "Displacement is not given or wanted, so we pick the suvat equation that omits $s$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "v = 0 + 3\\times 6",
        "explanation": "Putting the numbers in for the letters sets up the arithmetic.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate.",
        "workingLatex": "v = 0 + 18 = 18",
        "explanation": "Starting from zero, the car simply gains $18\\ \\text{m s}^{-1}$ over the six seconds.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer with units.",
        "workingLatex": "v = 18\\ \\text{m s}^{-1}",
        "explanation": "We finish with the correct velocity units to make the answer complete.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 18\\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q003",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "displacement", "from-rest"],
  "questionText": "A particle starts with velocity $u = 0$ and accelerates at $a = 2\\ \\text{m s}^{-2}$ for $t = 4\\ \\text{s}$. Using $s = ut + \\tfrac{1}{2}at^2$, find the displacement $s$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the known quantities and the unknown.",
        "workingLatex": "u = 0,\\quad a = 2,\\quad t = 4,\\quad s = \\text{?}",
        "explanation": "Laying out the values shows that we have $u$, $a$ and $t$ and want $s$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm the given equation fits.",
        "workingLatex": "s = ut + \\tfrac{1}{2}at^2",
        "explanation": "This equation uses exactly $u$, $a$, $t$ and $s$ and leaves out the final velocity $v$, which we do not know, so it is the right choice.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "s = 0\\times 4 + \\tfrac{1}{2}\\times 2\\times 4^2",
        "explanation": "Replace each letter with its number, keeping the squared term $t^2$ ready to evaluate.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Square the time.",
        "workingLatex": "4^2 = 16",
        "explanation": "We deal with the power first, as order of operations requires.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Work out each term.",
        "workingLatex": "s = 0 + \\tfrac{1}{2}\\times 2\\times 16 = 0 + 16",
        "explanation": "The first term is zero because the particle starts from rest; the second term is half of $2\\times 16$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Add the terms.",
        "workingLatex": "s = 16",
        "explanation": "Combining the two terms gives the total displacement travelled.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the answer with units.",
        "workingLatex": "s = 16\\ \\text{m}",
        "explanation": "Displacement is a distance, so it is measured in metres.",
        "diagram": null
      }
    ],
    "finalAnswer": "$s = 16\\ \\text{m}$"
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q004",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "displacement", "average-velocity"],
  "questionText": "A particle's velocity increases uniformly from $u = 3\\ \\text{m s}^{-1}$ to $v = 11\\ \\text{m s}^{-1}$ over $t = 5\\ \\text{s}$. Using $s = \\tfrac{1}{2}(u + v)t$, find the displacement $s$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the known quantities and the unknown.",
        "workingLatex": "u = 3,\\quad v = 11,\\quad t = 5,\\quad s = \\text{?}",
        "explanation": "We have both velocities and the time, and we want the displacement.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm the given equation fits.",
        "workingLatex": "s = \\tfrac{1}{2}(u + v)t",
        "explanation": "This equation uses $u$, $v$, $t$ and $s$ and leaves out acceleration $a$, which we do not need, so it is ideal here.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "s = \\tfrac{1}{2}(3 + 11)\\times 5",
        "explanation": "Replace the letters with their numbers, keeping the bracket to be worked out first.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Add inside the bracket.",
        "workingLatex": "3 + 11 = 14",
        "explanation": "The bracket gives the sum of the two velocities; halving it later gives the average velocity.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Halve the sum to get the average velocity.",
        "workingLatex": "\\tfrac{1}{2}\\times 14 = 7",
        "explanation": "For constant acceleration the average velocity is simply halfway between the start and end velocities.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Multiply by the time.",
        "workingLatex": "s = 7\\times 5 = 35",
        "explanation": "Distance equals average velocity multiplied by time, giving the displacement.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the answer with units.",
        "workingLatex": "s = 35\\ \\text{m}",
        "explanation": "The result is a displacement, so we give it in metres.",
        "diagram": null
      }
    ],
    "finalAnswer": "$s = 35\\ \\text{m}$"
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q005",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "no-time", "final-velocity"],
  "questionText": "A particle starts from rest ($u = 0$) and accelerates at $a = 5\\ \\text{m s}^{-2}$ over a displacement of $s = 10\\ \\text{m}$. Using $v^2 = u^2 + 2as$, find its final velocity $v$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the known quantities and the unknown.",
        "workingLatex": "u = 0,\\quad a = 5,\\quad s = 10,\\quad v = \\text{?}",
        "explanation": "We know the start velocity, acceleration and displacement, and we want the final velocity.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm the given equation fits.",
        "workingLatex": "v^2 = u^2 + 2as",
        "explanation": "This equation leaves out the time $t$, which we are not given, so it is exactly the tool for this problem.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "v^2 = 0^2 + 2\\times 5\\times 10",
        "explanation": "Put the numbers in place of the letters, remembering to square the initial velocity.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate the right-hand side.",
        "workingLatex": "v^2 = 0 + 100 = 100",
        "explanation": "The first term vanishes because the particle starts from rest, leaving $2\\times 5\\times 10 = 100$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Take the square root to find v.",
        "workingLatex": "v = \\sqrt{100} = 10",
        "explanation": "We solved for $v^2$, so square-rooting undoes the square and gives the velocity itself.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Choose the positive root.",
        "workingLatex": "v = 10\\ \\ (\\text{taking the positive value})",
        "explanation": "The particle moves forwards in the direction of the acceleration, so we take the positive square root.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the answer with units.",
        "workingLatex": "v = 10\\ \\text{m s}^{-1}",
        "explanation": "Velocity is measured in metres per second, completing the answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 10\\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q006",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "rearranging", "acceleration"],
  "questionText": "A particle's velocity increases from $u = 2\\ \\text{m s}^{-1}$ to $v = 20\\ \\text{m s}^{-1}$ in $t = 6\\ \\text{s}$. By rearranging $v = u + at$, find the acceleration $a$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the known quantities and the unknown.",
        "workingLatex": "u = 2,\\quad v = 20,\\quad t = 6,\\quad a = \\text{?}",
        "explanation": "We know both velocities and the time; the acceleration is what we want.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Choose the equation without s.",
        "workingLatex": "v = u + at",
        "explanation": "Displacement is not involved, so the equation linking $u$, $v$, $a$ and $t$ is the right one.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rearrange to make a the subject.",
        "workingLatex": "a = \\dfrac{v - u}{t}",
        "explanation": "Subtracting $u$ from both sides isolates $at$, and dividing by $t$ leaves $a$ on its own.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "a = \\dfrac{20 - 2}{6}",
        "explanation": "Replace the letters with their numbers ready to evaluate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Work out the numerator.",
        "workingLatex": "20 - 2 = 18",
        "explanation": "This is the total change in velocity over the six seconds.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Divide by the time.",
        "workingLatex": "a = \\dfrac{18}{6} = 3",
        "explanation": "Acceleration is the change in velocity per second, so we divide the velocity change by the time.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the answer with units.",
        "workingLatex": "a = 3\\ \\text{m s}^{-2}",
        "explanation": "Acceleration is measured in metres per second squared, completing the answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 3\\ \\text{m s}^{-2}$"
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q007",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "from-rest", "final-speed"],
  "questionText": "A car accelerates uniformly from rest at $2.5\\ \\text{m s}^{-2}$ for $8\\ \\text{s}$. Find its final speed.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Read \"from rest\" as a value for u.",
        "workingLatex": "u = 0",
        "explanation": "Starting from rest means the initial speed is zero.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the knowns and the unknown.",
        "workingLatex": "u = 0,\\quad a = 2.5,\\quad t = 8,\\quad v = \\text{?}",
        "explanation": "Gathering the values shows we have $u$, $a$ and $t$ and want the final speed $v$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose the equation without s.",
        "workingLatex": "v = u + at",
        "explanation": "There is no displacement in the problem, so the equation that omits $s$ is the one to use.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "v = 0 + 2.5\\times 8",
        "explanation": "Replace the letters with their numbers ready to calculate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate.",
        "workingLatex": "v = 0 + 20 = 20",
        "explanation": "Gaining $2.5\\ \\text{m s}^{-1}$ each second for eight seconds adds $20\\ \\text{m s}^{-1}$ to a start of zero.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer with units.",
        "workingLatex": "v = 20\\ \\text{m s}^{-1}",
        "explanation": "Speed is measured in metres per second, giving the finished answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 20\\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q008",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "vertical-motion", "gravity"],
  "questionText": "A ball is dropped from rest and falls freely under gravity. Taking $g = 9.8\\ \\text{m s}^{-2}$ downward as the positive direction, use $v = u + at$ to find its speed after $2\\ \\text{s}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Choose a positive direction and read off u.",
        "workingLatex": "\\text{take downward as positive},\\quad u = 0",
        "explanation": "Taking downward as positive makes gravity a positive acceleration; \"dropped\" means it starts from rest, so $u = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the acceleration.",
        "workingLatex": "a = g = 9.8",
        "explanation": "In free fall the only acceleration is gravity, and it acts in our chosen positive (downward) direction.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "List the knowns and the unknown.",
        "workingLatex": "u = 0,\\quad a = 9.8,\\quad t = 2,\\quad v = \\text{?}",
        "explanation": "Collecting the values shows the equation $v = u + at$ fits, since displacement is not needed.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "v = 0 + 9.8\\times 2",
        "explanation": "Replace the letters with their numbers ready to evaluate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate.",
        "workingLatex": "v = 0 + 19.6 = 19.6",
        "explanation": "Each second the ball gains $9.8\\ \\text{m s}^{-1}$, so after two seconds it has gained $19.6\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer with units.",
        "workingLatex": "v = 19.6\\ \\text{m s}^{-1}",
        "explanation": "The positive value confirms the ball moves downward, and speed is given in metres per second.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 19.6\\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q009",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "displacement", "substitution"],
  "questionText": "A particle has initial velocity $u = 6\\ \\text{m s}^{-1}$ and constant acceleration $a = 1.5\\ \\text{m s}^{-2}$. Using $s = ut + \\tfrac{1}{2}at^2$, find the displacement after $t = 4\\ \\text{s}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the known quantities and the unknown.",
        "workingLatex": "u = 6,\\quad a = 1.5,\\quad t = 4,\\quad s = \\text{?}",
        "explanation": "We have $u$, $a$ and $t$ and want the displacement $s$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Confirm the given equation fits.",
        "workingLatex": "s = ut + \\tfrac{1}{2}at^2",
        "explanation": "This equation uses $u$, $a$, $t$ and $s$ and leaves out $v$, which we do not know, so it is the right choice.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "s = 6\\times 4 + \\tfrac{1}{2}\\times 1.5\\times 4^2",
        "explanation": "Replace each letter with its number, keeping the squared time to evaluate first.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Square the time.",
        "workingLatex": "4^2 = 16",
        "explanation": "Powers come before multiplication in the order of operations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Work out each term.",
        "workingLatex": "s = 24 + \\tfrac{1}{2}\\times 1.5\\times 16 = 24 + 12",
        "explanation": "The first term is $6\\times 4 = 24$ and the second is half of $1.5\\times 16 = 24$, giving $12$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Add the terms.",
        "workingLatex": "s = 36",
        "explanation": "Combining the steady-velocity part and the extra distance from acceleration gives the total displacement.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the answer with units.",
        "workingLatex": "s = 36\\ \\text{m}",
        "explanation": "Displacement is a distance, so it is measured in metres.",
        "diagram": null
      }
    ],
    "finalAnswer": "$s = 36\\ \\text{m}$"
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q010",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "deceleration", "time"],
  "questionText": "A car moving at $10\\ \\text{m s}^{-1}$ decelerates uniformly at $2\\ \\text{m s}^{-2}$ until it comes to rest. Using $v = u + at$, find the time taken to stop.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the values, treating deceleration as negative acceleration.",
        "workingLatex": "u = 10,\\quad v = 0,\\quad a = -2,\\quad t = \\text{?}",
        "explanation": "Slowing down means the acceleration opposes the motion, so we take $a = -2$; coming to rest means the final velocity is $v = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Choose the equation without s.",
        "workingLatex": "v = u + at",
        "explanation": "Displacement is not needed, so the equation linking $u$, $v$, $a$ and $t$ is the one to use.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "0 = 10 + (-2)t",
        "explanation": "Putting the numbers in gives an equation with $t$ as the only unknown.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the equation.",
        "workingLatex": "0 = 10 - 2t",
        "explanation": "Adding a negative acceleration is the same as subtracting, which tidies the equation.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Rearrange for the t-term.",
        "workingLatex": "2t = 10",
        "explanation": "Moving the $2t$ term to the other side balances the equation ready to solve for $t$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Divide to find t.",
        "workingLatex": "t = \\dfrac{10}{2} = 5",
        "explanation": "Losing $2\\ \\text{m s}^{-1}$ each second, the car takes five seconds to lose all $10\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the answer with units.",
        "workingLatex": "t = 5\\ \\text{s}",
        "explanation": "Time is measured in seconds, completing the answer.",
        "diagram": null
      }
    ],
    "finalAnswer": "$t = 5\\ \\text{s}$"
  }
},
  {
    "id": "al.y1.mech.constant-acceleration.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["suvat", "braking-distance", "constant-acceleration", "kinematics"],
    "questionText": "A car is braking and comes to rest. Its initial speed is $u = 8 \\ \\text{m s}^{-1}$, its final speed is $v = 0 \\ \\text{m s}^{-1}$ and its acceleration is $a = -4 \\ \\text{m s}^{-2}$. Using $v^2 = u^2 + 2as$, find the braking distance $s$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the quantities we know and the one we want.",
          "workingLatex": "u = 8, \\quad v = 0, \\quad a = -4, \\quad s = \\ ?",
          "explanation": "Writing out the suvat list first makes the problem clear at a glance. We have three of the five quantities and we are hunting for the distance $s$. Notice that time $t$ is neither given nor asked for.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the equation that avoids time.",
          "workingLatex": "v^2 = u^2 + 2as",
          "explanation": "Because $t$ is the missing variable we neither know nor want, we pick the one suvat equation that does not contain $t$. This links $u$, $v$, $a$ and $s$ together directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values.",
          "workingLatex": "0^2 = 8^2 + 2(-4)s",
          "explanation": "We replace each letter with its number, keeping the negative sign on the acceleration because the car is slowing down. Careful substitution now prevents mistakes later.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the fixed numbers.",
          "workingLatex": "0 = 64 - 8s",
          "explanation": "Squaring gives $0$ on the left and $64$ on the right, and $2 \\times (-4) = -8$, so the term becomes $-8s$. This tidies the equation into a simple linear form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to isolate the distance term.",
          "workingLatex": "8s = 64",
          "explanation": "Adding $8s$ to both sides moves the unknown to one side on its own. This is the standard move for solving a simple linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $s$.",
          "workingLatex": "s = \\frac{64}{8} = 8 \\ \\text{m}",
          "explanation": "Dividing both sides by $8$ gives the distance. A braking distance of $8 \\ \\text{m}$ is a sensible, positive length for a car slowing from a modest speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 8 \\ \\text{m}$"
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["suvat", "vertical-motion", "gravity", "free-fall"],
    "questionText": "A stone is dropped from rest and falls freely under gravity, where $g = 9.8 \\ \\text{m s}^{-2}$. Taking downwards as positive, use $s = ut + \\tfrac{1}{2}at^2$ to find how far the stone falls in $3 \\ \\text{s}$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A stone released from a hand at the top, with a downward arrow labelled g = 9.8 m s^-2 showing the direction of acceleration, and a dashed vertical line marking the distance s fallen after 3 seconds.",
      "alt": "A stone falling straight down with a downward gravity arrow and the fall distance marked."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the positive direction and list the values.",
          "workingLatex": "u = 0, \\quad a = 9.8, \\quad t = 3, \\quad s = \\ ?",
          "explanation": "\"Dropped\" means it starts at rest, so $u = 0$. Choosing downwards as positive makes gravity a positive acceleration, $a = +9.8$, which keeps every number positive and easy to handle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the equation to use.",
          "workingLatex": "s = ut + \\tfrac{1}{2}at^2",
          "explanation": "This equation gives displacement directly from the starting speed, the acceleration and the time, which are exactly the three things we know.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "s = (0)(3) + \\tfrac{1}{2}(9.8)(3)^2",
          "explanation": "Putting the numbers in carefully, the first term uses $u = 0$ and the second uses the acceleration and time. Keeping the structure clear helps avoid slips.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the first term and the square.",
          "workingLatex": "s = 0 + \\tfrac{1}{2}(9.8)(9)",
          "explanation": "Since the stone starts from rest, the $ut$ term vanishes. Squaring the time gives $3^2 = 9$, so all the falling is captured by the acceleration term.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out the remaining term.",
          "workingLatex": "s = 4.9 \\times 9",
          "explanation": "Half of $9.8$ is $4.9$, which is the familiar $\\tfrac{1}{2}g$ factor for objects falling from rest. Now it is a single multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the distance fallen.",
          "workingLatex": "s = 44.1 \\ \\text{m}",
          "explanation": "$4.9 \\times 9 = 44.1$, so the stone falls $44.1 \\ \\text{m}$ in three seconds. This large distance reflects how quickly free-falling objects pick up speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 44.1 \\ \\text{m}$"
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["suvat", "average-velocity", "deceleration", "kinematics"],
    "questionText": "A train decelerates uniformly from $30 \\ \\text{m s}^{-1}$ to $10 \\ \\text{m s}^{-1}$ over a time of $8 \\ \\text{s}$. Using $s = \\tfrac{1}{2}(u + v)t$, find the distance the train travels during this time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities.",
          "workingLatex": "u = 30, \\quad v = 10, \\quad t = 8, \\quad s = \\ ?",
          "explanation": "We know both the starting and finishing speeds and the time taken. That is exactly the information the average-velocity equation needs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the equation to use.",
          "workingLatex": "s = \\tfrac{1}{2}(u + v)t",
          "explanation": "For constant acceleration, distance equals the average of the start and end speeds multiplied by the time. This avoids needing the acceleration at all.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "s = \\tfrac{1}{2}(30 + 10)(8)",
          "explanation": "We drop each number into its place. Adding the two speeds inside the bracket is the first thing to tidy up.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the speeds inside the bracket.",
          "workingLatex": "s = \\tfrac{1}{2}(40)(8)",
          "explanation": "$30 + 10 = 40$, so the sum of the speeds is $40 \\ \\text{m s}^{-1}$. Half of this will be the average speed of the train.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take half of the bracket.",
          "workingLatex": "s = 20 \\times 8",
          "explanation": "Half of $40$ is $20$, the average speed. Multiplying an average speed by the time is just like the familiar distance = speed $\\times$ time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the distance.",
          "workingLatex": "s = 160 \\ \\text{m}",
          "explanation": "$20 \\times 8 = 160$, so the train covers $160 \\ \\text{m}$ while slowing down. The answer sits neatly between what it would travel at a steady $30$ or a steady $10 \\ \\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 160 \\ \\text{m}$"
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["suvat", "final-velocity", "deceleration", "kinematics"],
    "questionText": "A particle moves in a straight line with initial velocity $u = 15 \\ \\text{m s}^{-1}$ and constant acceleration $a = -3 \\ \\text{m s}^{-2}$. Using $v = u + at$, find its velocity after $t = 2 \\ \\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
                "stepNumber": 1,
                "description": "List the known quantities",
                "workingLatex": "u = 15,\\quad a = -3,\\quad t = 2,\\quad v = \\ ?",
                "explanation": "We have the starting velocity, the acceleration and the time, and we want the new velocity. The negative acceleration tells us the particle is slowing down.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "Choose the right suvat equation",
                "workingLatex": "v = u + at",
                "explanation": "With distance neither known nor wanted, the equation linking velocity, acceleration and time is the natural choice.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "Substitute the values",
                "workingLatex": "v = 15 + (-3)(2)",
                "explanation": "We replace each symbol with its number, keeping the minus sign on the acceleration so the change comes out as a reduction in speed.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Evaluate the acceleration term",
                "workingLatex": "(-3)(2) = -6",
                "explanation": "Over the two seconds the acceleration changes the velocity by $-6\\ \\text{m s}^{-1}$ — a loss of 6 m/s.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Combine the terms",
                "workingLatex": "v = 15 - 6",
                "explanation": "Adding a negative change is the same as subtracting, so we take 6 away from the starting 15.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Compute the final velocity",
                "workingLatex": "v = 9\\ \\text{m s}^{-1}",
                "explanation": "$15 - 6 = 9$, so after two seconds the particle is moving at $9\\ \\text{m s}^{-1}$.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Interpret the sign and check",
                "workingLatex": "v = 9 > 0 \\;\\Rightarrow\\; \\text{same direction, slower}",
                "explanation": "The answer is positive, so the particle still travels in its original direction, just more slowly. As a check, losing $3\\ \\text{m s}^{-1}$ each second for 2 s loses 6, matching $15 \\to 9$.",
                "diagram": null
        }
],
      "finalAnswer": "$v = 9 \\ \\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["suvat", "vertical-motion", "gravity", "highest-point"],
    "questionText": "A ball is thrown straight up into the air with an initial speed of $14 \\ \\text{m s}^{-1}$, where $g = 9.8 \\ \\text{m s}^{-2}$. Taking upwards as positive, at the highest point $v = 0$. Use $v = u + at$ to find the time taken to reach the highest point.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A ball launched upward from ground level with an upward velocity arrow labelled 14 m s^-1, a downward gravity arrow labelled g = 9.8 m s^-2, and the top of the path marked as the highest point where v = 0.",
      "alt": "A ball thrown vertically upward, showing the launch speed, gravity acting downward, and the highest point of its path."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a positive direction and list the values.",
          "workingLatex": "u = 14, \\quad v = 0, \\quad a = -9.8, \\quad t = \\ ?",
          "explanation": "Taking upwards as positive, the ball starts at $14 \\ \\text{m s}^{-1}$ upward, but gravity pulls downward, so $a = -9.8$. The negative sign is what eventually brings the ball to a stop.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the condition at the highest point.",
          "workingLatex": "v = 0 \\ \\text{at the top}",
          "explanation": "At the very top of its flight the ball is momentarily still before falling back, so its velocity there is exactly zero. This key fact gives us the value of $v$ to use.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the equation.",
          "workingLatex": "v = u + at",
          "explanation": "This equation links velocity, acceleration and time without needing distance, which is perfect since we only care about how long it takes to stop rising.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values.",
          "workingLatex": "0 = 14 + (-9.8)t",
          "explanation": "We set the final velocity to zero and put in the launch speed and gravity. This leaves a simple equation with only $t$ unknown.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for the time term.",
          "workingLatex": "9.8t = 14",
          "explanation": "Moving the $9.8t$ term to the other side makes both sides positive and isolates the unknown, ready to divide.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the time.",
          "workingLatex": "t = \\frac{14}{9.8} = 1.43 \\ \\text{s} \\ (\\text{3 s.f.})",
          "explanation": "Dividing gives $t \\approx 1.43 \\ \\text{s}$ (exactly $\\tfrac{10}{7} \\ \\text{s}$). A little under a second and a half to reach the top is a reasonable time for a throw at this speed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = \\dfrac{14}{9.8} \\approx 1.43 \\ \\text{s}$"
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["suvat", "displacement", "deceleration", "kinematics"],
    "questionText": "A particle moves in a straight line with initial velocity $u = 20 \\ \\text{m s}^{-1}$ and constant acceleration $a = -10 \\ \\text{m s}^{-2}$. Using $s = ut + \\tfrac{1}{2}at^2$, find its displacement after $t = 1.5 \\ \\text{s}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities.",
          "workingLatex": "u = 20, \\quad a = -10, \\quad t = 1.5, \\quad s = \\ ?",
          "explanation": "We know the starting velocity, the acceleration and the time, and we want the displacement. The negative acceleration means the particle is slowing as it moves forward.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the equation.",
          "workingLatex": "s = ut + \\tfrac{1}{2}at^2",
          "explanation": "This equation gives displacement directly from $u$, $a$ and $t$, the three quantities we have, without needing the final velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "s = (20)(1.5) + \\tfrac{1}{2}(-10)(1.5)^2",
          "explanation": "Each symbol is replaced by its number, keeping the acceleration negative. Splitting the calculation into two terms keeps it manageable.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out each part.",
          "workingLatex": "s = 30 + (-5)(2.25)",
          "explanation": "The first term is $20 \\times 1.5 = 30$. In the second, half of $-10$ is $-5$ and $1.5^2 = 2.25$, so we now just multiply these together.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply out the second term.",
          "workingLatex": "s = 30 - 11.25",
          "explanation": "$(-5)(2.25) = -11.25$. This negative contribution represents how the deceleration reduces the distance travelled compared with moving at a steady speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the displacement.",
          "workingLatex": "s = 18.75 \\ \\text{m}",
          "explanation": "$30 - 11.25 = 18.75$, so the particle is $18.75 \\ \\text{m}$ from where it started after $1.5 \\ \\text{s}$. The value being positive tells us it is still ahead of its starting point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 18.75 \\ \\text{m}$"
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["suvat", "final-velocity", "acceleration", "kinematics"],
    "questionText": "A particle accelerates from an initial velocity $u = 5 \\ \\text{m s}^{-1}$ with constant acceleration $a = 2 \\ \\text{m s}^{-2}$ over a displacement of $s = 24 \\ \\text{m}$. Using $v^2 = u^2 + 2as$, find its final velocity $v$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities.",
          "workingLatex": "u = 5, \\quad a = 2, \\quad s = 24, \\quad v = \\ ?",
          "explanation": "We know the starting velocity, the acceleration and the distance covered, and we want the final velocity. Time is neither given nor needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the equation that avoids time.",
          "workingLatex": "v^2 = u^2 + 2as",
          "explanation": "Since $t$ is the variable we do not have, we pick the suvat equation that leaves it out and connects $v$ to $u$, $a$ and $s$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "v^2 = 5^2 + 2(2)(24)",
          "explanation": "Each quantity is dropped into place. Working out the right-hand side will give the square of the velocity first.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate each term.",
          "workingLatex": "v^2 = 25 + 96",
          "explanation": "Here $5^2 = 25$ and $2 \\times 2 \\times 24 = 96$. Both terms are positive because the particle is speeding up in the direction of motion.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add to find $v^2$.",
          "workingLatex": "v^2 = 121",
          "explanation": "Adding the two terms gives $121$. Remember this is the square of the velocity, so one more step is needed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root.",
          "workingLatex": "v = \\sqrt{121} = 11 \\ \\text{m s}^{-1}",
          "explanation": "The positive square root of $121$ is $11$. We take the positive value because the particle continues moving forwards, so its final speed is $11 \\ \\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 11 \\ \\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["suvat", "acceleration", "final-velocity", "kinematics"],
    "questionText": "A car speeds up from $12 \\ \\text{m s}^{-1}$ to $30 \\ \\text{m s}^{-1}$ while travelling $60 \\ \\text{m}$. Using $v^2 = u^2 + 2as$, find the constant acceleration $a$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities.",
          "workingLatex": "u = 12, \\quad v = 30, \\quad s = 60, \\quad a = \\ ?",
          "explanation": "We are given both speeds and the distance covered, and we want the acceleration. Time is not involved here.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the equation without time.",
          "workingLatex": "v^2 = u^2 + 2as",
          "explanation": "Because $t$ is missing and unwanted, this is the equation that ties together the two speeds, the distance and the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "30^2 = 12^2 + 2a(60)",
          "explanation": "Putting the numbers in leaves the acceleration $a$ as the only unknown. Everything else is a fixed value we can compute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the squares.",
          "workingLatex": "900 = 144 + 120a",
          "explanation": "Here $30^2 = 900$ and $12^2 = 144$, while $2 \\times 60 = 120$ multiplies the acceleration. This tidies the equation into a simple linear form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the acceleration term.",
          "workingLatex": "120a = 900 - 144 = 756",
          "explanation": "Subtracting $144$ from both sides gathers the constants on the right. The difference $756$ is what the acceleration term must equal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for $a$.",
          "workingLatex": "a = \\frac{756}{120} = 6.3 \\ \\text{m s}^{-2}",
          "explanation": "Dividing by $120$ gives $a = 6.3 \\ \\text{m s}^{-2}$. The positive result confirms the car is speeding up, matching the fact that its speed increased.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 6.3 \\ \\text{m s}^{-2}$"
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["suvat", "vertical-motion", "gravity", "free-fall"],
    "questionText": "An object is dropped from rest from a height and hits the ground moving at $24.5 \\ \\text{m s}^{-1}$, where $g = 9.8 \\ \\text{m s}^{-2}$. Taking downwards as positive, use $v = u + at$ to find the time of fall.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "An object released from rest at the top of a cliff, a downward gravity arrow labelled g = 9.8 m s^-2, and the ground below where the object arrives with speed 24.5 m s^-1.",
      "alt": "An object falling from a cliff to the ground, with gravity acting downward and the landing speed marked."
    },
    "workedSolution": {
      "steps": [
        {
                "stepNumber": 1,
                "description": "Choose the positive direction and list the values",
                "workingLatex": "u = 0,\\quad v = 24.5,\\quad a = 9.8,\\quad t = \\ ?",
                "explanation": "The object is dropped, so it starts at rest with $u = 0$. Taking downwards as positive makes gravity and the landing speed both positive, which keeps the working simple.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "Decide which equation to use",
                "workingLatex": "v = u + at",
                "explanation": "We know the start and end velocities and the acceleration, and we want the time; the distance fallen is neither given nor needed, so this is the equation to choose.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "Substitute the values",
                "workingLatex": "24.5 = 0 + (9.8)t",
                "explanation": "Putting the numbers in leaves the time as the only unknown.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Simplify the right-hand side",
                "workingLatex": "24.5 = 9.8t",
                "explanation": "The zero starting velocity drops out, so the landing speed is simply gravity acting over the fall time.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Rearrange to make t the subject",
                "workingLatex": "t = \\frac{24.5}{9.8}",
                "explanation": "Dividing both sides by 9.8 isolates the time.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Evaluate the time",
                "workingLatex": "t = 2.5\\ \\text{s}",
                "explanation": "Carrying out the division gives 2.5 s.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Sense-check the answer",
                "workingLatex": "9.8 \\times 2.5 = 24.5\\ \\text{m s}^{-1}",
                "explanation": "Each second of falling adds $9.8\\ \\text{m s}^{-1}$, so two and a half seconds gives exactly $24.5\\ \\text{m s}^{-1}$, confirming the time.",
                "diagram": null
        }
],
      "finalAnswer": "$t = 2.5 \\ \\text{s}$"
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["suvat", "average-velocity", "final-velocity", "kinematics"],
    "questionText": "A particle travels $100 \\ \\text{m}$ in $5 \\ \\text{s}$ while accelerating uniformly from an initial velocity of $10 \\ \\text{m s}^{-1}$. Using $s = \\tfrac{1}{2}(u + v)t$, find its final velocity $v$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities.",
          "workingLatex": "s = 100, \\quad u = 10, \\quad t = 5, \\quad v = \\ ?",
          "explanation": "We know the distance, the starting velocity and the time, and we want the final velocity. The average-velocity equation uses exactly these.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the equation.",
          "workingLatex": "s = \\tfrac{1}{2}(u + v)t",
          "explanation": "For constant acceleration, distance equals the average of the two velocities times the time, so knowing $s$, $u$ and $t$ lets us solve for $v$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "100 = \\tfrac{1}{2}(10 + v)(5)",
          "explanation": "We put in the known numbers, leaving $v$ inside the bracket as the only unknown. Now we unwind the equation step by step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the constants on the right.",
          "workingLatex": "100 = 2.5(10 + v)",
          "explanation": "Multiplying $\\tfrac{1}{2}$ by $5$ gives $2.5$, which groups the fixed numbers together and makes the bracket easier to deal with.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide to free the bracket.",
          "workingLatex": "40 = 10 + v",
          "explanation": "Dividing both sides by $2.5$ gives $100 \\div 2.5 = 40$. This removes the multiplier and leaves a simple equation for $v$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the final velocity.",
          "workingLatex": "v = 40 - 10 = 30 \\ \\text{m s}^{-1}",
          "explanation": "Subtracting $10$ from both sides gives $v = 30 \\ \\text{m s}^{-1}$. Since it is larger than the starting $10 \\ \\text{m s}^{-1}$, the particle has indeed sped up, as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 30 \\ \\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["suvat", "acceleration", "constant-acceleration", "kinematics"],
    "questionText": "A cyclist accelerates uniformly from $4\\ \\text{m s}^{-1}$ to $10\\ \\text{m s}^{-1}$ in $3\\ \\text{s}$. Find the acceleration and the distance covered during this time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the quantities we know and what we want.",
          "workingLatex": "u = 4\\ \\text{m s}^{-1},\\quad v = 10\\ \\text{m s}^{-1},\\quad t = 3\\ \\text{s},\\quad a = ?,\\quad s = ?",
          "explanation": "Writing out the suvat letters first turns a wordy problem into a tidy checklist. We have the start speed, the end speed and the time, and we are hunting for the acceleration $a$ and the distance $s$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the equation that finds $a$ without needing $s$.",
          "workingLatex": "v = u + at",
          "explanation": "We do not yet know $s$, so we pick the equation that leaves $s$ out entirely. That way an unknown we have not found cannot get in the way.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to make $a$ the subject.",
          "workingLatex": "a = \\dfrac{v - u}{t}",
          "explanation": "Acceleration is simply how much the velocity changes each second, so we take the change in velocity $v-u$ and share it over the time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the numbers to find $a$.",
          "workingLatex": "a = \\dfrac{10 - 4}{3} = \\dfrac{6}{3} = 2\\ \\text{m s}^{-2}",
          "explanation": "The speed climbs by $6\\ \\text{m s}^{-1}$ over $3\\ \\text{s}$, which is a steady gain of $2\\ \\text{m s}^{-1}$ every second.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose an equation for the distance $s$.",
          "workingLatex": "s = \\tfrac12 (u + v)t",
          "explanation": "Because the acceleration is uniform, the average speed is just the midpoint of the start and end speeds. Multiplying that average by the time gives the distance directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and evaluate.",
          "workingLatex": "s = \\tfrac12 (4 + 10)(3) = \\tfrac12 (14)(3) = 21\\ \\text{m}",
          "explanation": "The average speed is $7\\ \\text{m s}^{-1}$, and travelling at that average for $3\\ \\text{s}$ covers $21\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer.",
          "workingLatex": "a = 2\\ \\text{m s}^{-2},\\qquad s = 21\\ \\text{m}",
          "explanation": "Both results are positive and modest, which fits a cyclist gently speeding up over a few seconds.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2\\ \\text{m s}^{-2}$ and the distance covered is $s = 21\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["vertical-motion", "gravity", "free-fall", "suvat"],
    "questionText": "A ball is dropped from rest. Taking $g = 9.8\\ \\text{m s}^{-2}$, find how far it falls in the first $2\\ \\text{s}$ and its speed at that moment.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the known quantities, taking downward as positive.",
          "workingLatex": "u = 0,\\quad a = g = 9.8\\ \\text{m s}^{-2},\\quad t = 2\\ \\text{s}",
          "explanation": "\\\"Dropped from rest\\\" tells us the starting speed is $u = 0$. Since the ball moves downward, taking down as positive keeps gravity a positive $9.8\\ \\text{m s}^{-2}$ and avoids stray minus signs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the equation for distance fallen.",
          "workingLatex": "s = ut + \\tfrac12 at^2",
          "explanation": "We know $u$, $a$ and $t$ and we want $s$, so this equation fits perfectly: it links distance to those three quantities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "s = 0(2) + \\tfrac12 (9.8)(2)^2 = \\tfrac12 (9.8)(4)",
          "explanation": "The $ut$ term vanishes because the ball starts at rest, so all of the distance comes from the acceleration building up speed over time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the distance.",
          "workingLatex": "s = 19.6\\ \\text{m}",
          "explanation": "In two seconds gravity has pulled the ball down almost twenty metres, which is why even short falls can be surprisingly large.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the equation for the speed.",
          "workingLatex": "v = u + at",
          "explanation": "Speed grows steadily from the acceleration, so we add the gained velocity $at$ onto the starting velocity $u$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and evaluate.",
          "workingLatex": "v = 0 + 9.8(2) = 19.6\\ \\text{m s}^{-1}",
          "explanation": "Each second adds $9.8\\ \\text{m s}^{-1}$, so after two seconds the ball is moving at $19.6\\ \\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer.",
          "workingLatex": "s = 19.6\\ \\text{m},\\qquad v = 19.6\\ \\text{m s}^{-1}",
          "explanation": "The distance and speed share the same number here only by coincidence of $t = 2$; they are different quantities with different units.",
          "diagram": null
        }
      ],
      "finalAnswer": "The ball falls $19.6\\ \\text{m}$ and is moving at $19.6\\ \\text{m s}^{-1}$ after $2\\ \\text{s}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["suvat", "acceleration", "constant-acceleration", "kinematics"],
    "questionText": "A car accelerates uniformly from $8\\ \\text{m s}^{-1}$, covering $200\\ \\text{m}$ in $10\\ \\text{s}$. Find the acceleration and the final velocity.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities and the unknowns.",
          "workingLatex": "u = 8\\ \\text{m s}^{-1},\\quad s = 200\\ \\text{m},\\quad t = 10\\ \\text{s},\\quad a = ?,\\quad v = ?",
          "explanation": "We are given the start speed, the distance and the time, and we want the acceleration $a$ and the final speed $v$. Laying them out shows which equation will reach $a$ first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the equation linking $s$, $u$, $t$ and $a$.",
          "workingLatex": "s = ut + \\tfrac12 at^2",
          "explanation": "This is the only suvat equation that connects everything we know ($s$, $u$, $t$) to the acceleration we want, while leaving the still-unknown $v$ out.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values.",
          "workingLatex": "200 = 8(10) + \\tfrac12 a(10)^2",
          "explanation": "Putting the numbers in turns the equation into a single equation in the one unknown $a$, which we can now solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the arithmetic terms.",
          "workingLatex": "200 = 80 + 50a",
          "explanation": "The $8(10) = 80$ is the distance the car would cover at its starting speed alone; the $50a$ is the extra distance the acceleration adds on.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Isolate the term containing $a$.",
          "workingLatex": "200 - 80 = 50a \\ \\Rightarrow\\ 120 = 50a",
          "explanation": "Subtracting the constant-speed part leaves exactly the $120\\ \\text{m}$ of extra distance that the acceleration is responsible for.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the acceleration.",
          "workingLatex": "a = \\dfrac{120}{50} = 2.4\\ \\text{m s}^{-2}",
          "explanation": "Dividing gives a steady acceleration of $2.4\\ \\text{m s}^{-1}$ gained every second, a sensible figure for a car pulling away.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose an equation for the final velocity.",
          "workingLatex": "v = u + at",
          "explanation": "Now that $a$ is known, the simplest route to $v$ is to add the velocity gained, $at$, to the starting velocity $u$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values.",
          "workingLatex": "v = 8 + 2.4(10)",
          "explanation": "Over the full $10\\ \\text{s}$ the acceleration contributes an extra $2.4 \\times 10 = 24\\ \\text{m s}^{-1}$ on top of the starting speed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the final velocity.",
          "workingLatex": "v = 8 + 24 = 32\\ \\text{m s}^{-1}",
          "explanation": "The car ends up at $32\\ \\text{m s}^{-1}$, comfortably faster than it started, as expected while accelerating.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer.",
          "workingLatex": "a = 2.4\\ \\text{m s}^{-2},\\qquad v = 32\\ \\text{m s}^{-1}",
          "explanation": "Both values are positive and consistent: a positive acceleration has indeed raised the speed from $8$ to $32\\ \\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 2.4\\ \\text{m s}^{-2}$ and the final velocity is $v = 32\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["vertical-motion", "gravity", "projectile", "suvat", "symmetry"],
    "questionText": "A stone is thrown vertically upwards at $21\\ \\text{m s}^{-1}$. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the maximum height reached and the total time of flight until it returns to the throwing point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up a sign convention and list the knowns.",
          "workingLatex": "\\text{up positive:}\\quad u = 21\\ \\text{m s}^{-1},\\quad a = -9.8\\ \\text{m s}^{-2}",
          "explanation": "Taking upward as positive means gravity, which pulls the stone back down, acts as a negative acceleration. This single choice keeps every sign in the problem consistent.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the key fact about the highest point.",
          "workingLatex": "\\text{at the top: } v = 0",
          "explanation": "At the very top of its flight the stone is momentarily at rest before falling back, so its velocity there is exactly zero. This is what pins down the maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the equation for height that avoids time.",
          "workingLatex": "v^2 = u^2 + 2as",
          "explanation": "We want the height $s$ but do not yet know the time to reach the top, so we pick the equation that has no $t$ in it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values.",
          "workingLatex": "0 = (21)^2 + 2(-9.8)s",
          "explanation": "Putting $v = 0$ at the top and the negative acceleration in leaves a single equation for the maximum height $s$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the equation.",
          "workingLatex": "0 = 441 - 19.6s",
          "explanation": "The $441$ is the square of the launch speed, and the $-19.6s$ shows how gravity steadily eats away that energy as the stone climbs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the maximum height.",
          "workingLatex": "s = \\dfrac{441}{19.6} = 22.5\\ \\text{m}",
          "explanation": "Rearranging gives a maximum height of $22.5\\ \\text{m}$, the point where all the upward motion has been cancelled by gravity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the time to reach the top.",
          "workingLatex": "v = u + at \\ \\Rightarrow\\ 0 = 21 - 9.8t",
          "explanation": "Gravity removes $9.8\\ \\text{m s}^{-1}$ of upward speed each second, so we find how long it takes to strip away all $21\\ \\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the time up.",
          "workingLatex": "t = \\dfrac{21}{9.8} = 2.142857\\ldots \\approx 2.14\\ \\text{s}",
          "explanation": "It takes about $2.14\\ \\text{s}$ to slow to a stop at the top of the flight.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use symmetry for the return journey.",
          "workingLatex": "T = 2 \\times \\dfrac{21}{9.8}",
          "explanation": "The path up and the path back down to the same point are mirror images, so the fall takes exactly as long as the rise. The total flight time is therefore double the time to the top.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the total time of flight.",
          "workingLatex": "T = 2 \\times 2.142857\\ldots = 4.285714\\ldots \\approx 4.29\\ \\text{s}",
          "explanation": "Doubling the time up gives about $4.29\\ \\text{s}$ for the stone to rise and return to the level it was thrown from.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer.",
          "workingLatex": "s_{\\max} = 22.5\\ \\text{m},\\qquad T \\approx 4.29\\ \\text{s}",
          "explanation": "A stone launched at $21\\ \\text{m s}^{-1}$ rises $22.5\\ \\text{m}$ and is back down after about $4.29\\ \\text{s}$, matching the up-and-down symmetry we used.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum height $= 22.5\\ \\text{m}$; total time of flight $\\approx 4.29\\ \\text{s}$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["suvat", "deceleration", "constant-acceleration", "kinematics"],
    "questionText": "A train decelerates uniformly from $40\\ \\text{m s}^{-1}$ to rest over a distance of $500\\ \\text{m}$. Find the deceleration and the time taken to stop.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities.",
          "workingLatex": "u = 40\\ \\text{m s}^{-1},\\quad v = 0,\\quad s = 500\\ \\text{m},\\quad a = ?,\\quad t = ?",
          "explanation": "\\\"To rest\\\" means the final velocity is $v = 0$. We know the start speed and the stopping distance, and we want the acceleration and the time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the equation without $t$ to find $a$.",
          "workingLatex": "v^2 = u^2 + 2as",
          "explanation": "The time is still unknown, so we start with the equation that connects the two speeds and the distance to the acceleration, leaving $t$ out.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "0 = (40)^2 + 2a(500)",
          "explanation": "With the final speed zero, the whole of the initial $40^2$ must be removed by the acceleration acting over the $500\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify.",
          "workingLatex": "0 = 1600 + 1000a",
          "explanation": "The equation now cleanly links the starting energy term $1600$ to the acceleration term $1000a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the acceleration.",
          "workingLatex": "a = -\\dfrac{1600}{1000} = -1.6\\ \\text{m s}^{-2}",
          "explanation": "The negative value confirms the train is slowing: the acceleration points backwards against the motion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the sign as a deceleration.",
          "workingLatex": "\\text{deceleration} = 1.6\\ \\text{m s}^{-2}",
          "explanation": "Because the question asks for the deceleration, we report the magnitude, $1.6\\ \\text{m s}^{-2}$, understanding it acts opposite to the direction of travel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Choose an equation for the time.",
          "workingLatex": "v = u + at \\ \\Rightarrow\\ 0 = 40 + (-1.6)t",
          "explanation": "With $a$ now known, the velocity equation is the quickest way to the stopping time: we find how long it takes to shed all $40\\ \\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the time.",
          "workingLatex": "1.6t = 40 \\ \\Rightarrow\\ t = \\dfrac{40}{1.6} = 25\\ \\text{s}",
          "explanation": "Losing $1.6\\ \\text{m s}^{-1}$ each second, the train needs $25\\ \\text{s}$ to come fully to rest.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer.",
          "workingLatex": "\\text{deceleration} = 1.6\\ \\text{m s}^{-2},\\qquad t = 25\\ \\text{s}",
          "explanation": "A gentle deceleration over half a kilometre taking $25\\ \\text{s}$ is entirely realistic for a train braking smoothly to a stop.",
          "diagram": null
        }
      ],
      "finalAnswer": "The deceleration is $1.6\\ \\text{m s}^{-2}$ and the time taken to stop is $25\\ \\text{s}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["vertical-motion", "gravity", "quadratic", "suvat", "projectile"],
    "questionText": "A ball is projected vertically upwards from ground level at $24.5\\ \\text{m s}^{-1}$. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the two times at which the ball is at a height of $19.6\\ \\text{m}$, and explain what each root represents.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the sign convention and knowns.",
          "workingLatex": "\\text{up positive:}\\quad u = 24.5\\ \\text{m s}^{-1},\\quad a = -9.8\\ \\text{m s}^{-2},\\quad s = 19.6\\ \\text{m}",
          "explanation": "Taking up as positive makes gravity negative. Because a height is specified rather than a speed, we expect this to become an equation for the time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the equation linking position and time.",
          "workingLatex": "s = ut + \\tfrac12 at^2",
          "explanation": "This equation gives the height at any time $t$. Since the ball passes a given height on the way up and again on the way down, we expect two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "19.6 = 24.5t + \\tfrac12 (-9.8)t^2 = 24.5t - 4.9t^2",
          "explanation": "Putting in the numbers produces a relationship between height and time that is quadratic in $t$ because of the $t^2$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange into standard quadratic form.",
          "workingLatex": "4.9t^2 - 24.5t + 19.6 = 0",
          "explanation": "Gathering everything on one side gives the familiar $at^2 + bt + c = 0$ shape, ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide through by the common factor $4.9$.",
          "workingLatex": "t^2 - 5t + 4 = 0",
          "explanation": "Every term is divisible by $4.9$, and dividing it out leaves small whole-number coefficients that factorise easily.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factorise the quadratic.",
          "workingLatex": "(t - 1)(t - 4) = 0",
          "explanation": "We need two numbers that multiply to $4$ and add to $5$, namely $1$ and $4$, giving this neat factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read off the two roots.",
          "workingLatex": "t = 1\\ \\text{s} \\quad \\text{or} \\quad t = 4\\ \\text{s}",
          "explanation": "Both roots are positive, so both are physically valid times during the flight.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the first root.",
          "workingLatex": "t = 1\\ \\text{s}: \\ \\text{ball rising through } 19.6\\ \\text{m}",
          "explanation": "The smaller time is the first pass: on the way up the ball reaches $19.6\\ \\text{m}$ after just $1\\ \\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the second root.",
          "workingLatex": "t = 4\\ \\text{s}: \\ \\text{ball falling back through } 19.6\\ \\text{m}",
          "explanation": "After passing the top, the ball descends and returns to the same height at $t = 4\\ \\text{s}$. The height $19.6\\ \\text{m}$ is visited twice, once going up and once coming down.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer.",
          "workingLatex": "t = 1\\ \\text{s}\\ (\\text{up}),\\qquad t = 4\\ \\text{s}\\ (\\text{down})",
          "explanation": "The two roots neatly bracket the highest point, which by symmetry occurs at the midpoint $t = 2.5\\ \\text{s}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "The ball is at $19.6\\ \\text{m}$ at $t = 1\\ \\text{s}$ (rising) and again at $t = 4\\ \\text{s}$ (falling)."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["suvat", "nth-second", "constant-acceleration", "kinematics"],
    "questionText": "A particle moves with initial velocity $u = 6\\ \\text{m s}^{-1}$ and constant acceleration $2\\ \\text{m s}^{-2}$. Find the distance it travels during the 5th second of its motion.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities.",
          "workingLatex": "u = 6\\ \\text{m s}^{-1},\\quad a = 2\\ \\text{m s}^{-2}",
          "explanation": "We are given the starting speed and the constant acceleration, and asked about one particular second of the motion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Clarify what \\\"the 5th second\\\" means.",
          "workingLatex": "\\text{distance in 5th second} = s(5) - s(4)",
          "explanation": "The 5th second is the interval that runs from $t = 4\\ \\text{s}$ to $t = 5\\ \\text{s}$. The distance covered in it is how much further the particle has gone by $t = 5$ compared with $t = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Introduce the shortcut formula for the $n$-th second.",
          "workingLatex": "\\text{distance in } n\\text{-th second} = u + \\tfrac12 a(2n - 1)",
          "explanation": "This handy formula comes straight from $s(n) - s(n-1)$; it lets us find the distance in any single second without computing two separate displacements.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute $n = 5$ with the known $u$ and $a$.",
          "workingLatex": "= 6 + \\tfrac12 (2)(2(5) - 1)",
          "explanation": "We are asking about the 5th second, so $n = 5$; the other values are the given start speed and acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the bracket.",
          "workingLatex": "2(5) - 1 = 9",
          "explanation": "The term $2n - 1$ picks out the odd number for that second; for $n = 5$ it gives $9$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the distance.",
          "workingLatex": "= 6 + 1 \\times 9 = 15\\ \\text{m}",
          "explanation": "Adding the starting-speed contribution to the acceleration contribution gives $15\\ \\text{m}$ travelled during that single second.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify using the full displacement equation at $t = 5$.",
          "workingLatex": "s(5) = 6(5) + \\tfrac12 (2)(5)^2 = 30 + 25 = 55\\ \\text{m}",
          "explanation": "As a check we compute the total distance from the start up to $t = 5\\ \\text{s}$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the displacement at $t = 4$.",
          "workingLatex": "s(4) = 6(4) + \\tfrac12 (2)(4)^2 = 24 + 16 = 40\\ \\text{m}",
          "explanation": "Likewise the total distance up to $t = 4\\ \\text{s}$ tells us where the 5th second begins.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the difference to confirm.",
          "workingLatex": "s(5) - s(4) = 55 - 40 = 15\\ \\text{m}",
          "explanation": "The two methods agree, giving confidence that $15\\ \\text{m}$ is correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer.",
          "workingLatex": "\\text{distance in 5th second} = 15\\ \\text{m}",
          "explanation": "During its 5th second the accelerating particle covers $15\\ \\text{m}$, more than in earlier seconds because it keeps speeding up.",
          "diagram": null
        }
      ],
      "finalAnswer": "The particle travels $15\\ \\text{m}$ during the 5th second of its motion."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["suvat", "velocity", "constant-acceleration", "kinematics"],
    "questionText": "A particle passes a point at $5\\ \\text{m s}^{-1}$ and accelerates uniformly at $3\\ \\text{m s}^{-2}$. Find its velocity after travelling a further $40\\ \\text{m}$, and the time this takes.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities.",
          "workingLatex": "u = 5\\ \\text{m s}^{-1},\\quad a = 3\\ \\text{m s}^{-2},\\quad s = 40\\ \\text{m},\\quad v = ?,\\quad t = ?",
          "explanation": "We measure from the moment the particle passes the point, so its speed there, $5\\ \\text{m s}^{-1}$, is our $u$. We want the speed $v$ and the time $t$ after a further $40\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the equation without $t$ to find $v$.",
          "workingLatex": "v^2 = u^2 + 2as",
          "explanation": "Since we do not yet know the time, we first find the velocity using the equation that connects speed and distance directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "v^2 = (5)^2 + 2(3)(40)",
          "explanation": "Putting the numbers in gives $v^2$ straight away, since every other quantity in the equation is known.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $v^2$.",
          "workingLatex": "v^2 = 25 + 240 = 265",
          "explanation": "The starting speed contributes $25$ and the acceleration over $40\\ \\text{m}$ adds $240$, giving $v^2 = 265$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take the positive square root.",
          "workingLatex": "v = \\sqrt{265} \\approx 16.3\\ \\text{m s}^{-1}",
          "explanation": "We take the positive root because the particle is still moving forwards. The speed has grown from $5$ to about $16.3\\ \\text{m s}^{-1}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose an equation for the time.",
          "workingLatex": "v = u + at \\ \\Rightarrow\\ \\sqrt{265} = 5 + 3t",
          "explanation": "Now that $v$ is known, the velocity equation gives the time directly by asking how long the acceleration took to raise the speed to $v$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for $t$.",
          "workingLatex": "t = \\dfrac{\\sqrt{265} - 5}{3}",
          "explanation": "Subtracting the starting speed and dividing by the acceleration isolates the time, keeping the exact surd until the final evaluation for accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the time.",
          "workingLatex": "t = \\dfrac{16.2788\\ldots - 5}{3} = \\dfrac{11.2788\\ldots}{3} \\approx 3.76\\ \\text{s}",
          "explanation": "Working it out gives about $3.76\\ \\text{s}$ to cover the extra $40\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer.",
          "workingLatex": "v = \\sqrt{265} \\approx 16.3\\ \\text{m s}^{-1},\\qquad t \\approx 3.76\\ \\text{s}",
          "explanation": "Both answers are positive and consistent with a particle that keeps speeding up under a steady forward acceleration.",
          "diagram": null
        }
      ],
      "finalAnswer": "The velocity is $v = \\sqrt{265} \\approx 16.3\\ \\text{m s}^{-1}$, reached after $t \\approx 3.76\\ \\text{s}$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["vertical-motion", "gravity", "free-fall", "suvat"],
    "questionText": "A ball is dropped from the top of a tower and takes $3.5\\ \\text{s}$ to reach the ground. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the height of the tower and the speed of the ball as it lands.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A tall vertical tower with a ball resting at the very top. A downward arrow beside the tower is labelled g = 9.8 m s^-2, showing the direction of the acceleration due to gravity. The ball is released from rest at the top; the vertical distance from the top of the tower down to the ground is marked as the unknown height h. A dashed horizontal line at the base represents the ground, which the ball reaches after 3.5 s.",
      "alt": "A ball released from rest at the top of a tower of unknown height h, falling straight down to the ground under gravity."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the knowns, taking downward as positive.",
          "workingLatex": "u = 0,\\quad a = g = 9.8\\ \\text{m s}^{-2},\\quad t = 3.5\\ \\text{s}",
          "explanation": "\\\"Dropped\\\" means the ball starts from rest, so $u = 0$. Taking downward as positive lets gravity act as a positive acceleration throughout the fall.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the equation for the height fallen.",
          "workingLatex": "s = ut + \\tfrac12 at^2",
          "explanation": "We know $u$, $a$ and $t$ and want the distance $s$, which is exactly the height of the tower, so this equation is the natural choice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values.",
          "workingLatex": "s = 0(3.5) + \\tfrac12 (9.8)(3.5)^2",
          "explanation": "The first term is zero because the ball starts from rest, so all the height comes from gravity accelerating it over the $3.5\\ \\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Square the time.",
          "workingLatex": "(3.5)^2 = 12.25",
          "explanation": "Squaring the time first keeps the arithmetic tidy before multiplying by the rest.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the height.",
          "workingLatex": "s = \\tfrac12 (9.8)(12.25) = 4.9 \\times 12.25 = 60.025\\ \\text{m}",
          "explanation": "The tower is about $60\\ \\text{m}$ tall, which explains why a fall lasting only three and a half seconds covers so much distance.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the equation for the landing speed.",
          "workingLatex": "v = u + at",
          "explanation": "The velocity gained is simply the acceleration multiplied by the time, added to the starting velocity of zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values.",
          "workingLatex": "v = 0 + 9.8(3.5)",
          "explanation": "Each second the ball gains $9.8\\ \\text{m s}^{-1}$, and it has been falling for $3.5\\ \\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the landing speed.",
          "workingLatex": "v = 34.3\\ \\text{m s}^{-1}",
          "explanation": "The ball strikes the ground at $34.3\\ \\text{m s}^{-1}$, a considerable speed after such a fall.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer.",
          "workingLatex": "h = 60.025\\ \\text{m} \\approx 60.0\\ \\text{m},\\qquad v = 34.3\\ \\text{m s}^{-1}",
          "explanation": "A tower of about $60\\ \\text{m}$ giving a landing speed of $34.3\\ \\text{m s}^{-1}$ is fully consistent with a $3.5\\ \\text{s}$ free fall under gravity.",
          "diagram": null
        }
      ],
      "finalAnswer": "The tower is $60.025\\ \\text{m}$ tall (about $60.0\\ \\text{m}$) and the ball lands at $34.3\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["suvat", "multi-stage", "constant-acceleration", "kinematics"],
    "questionText": "A car starts from rest and accelerates at $3\\ \\text{m s}^{-2}$ for $6\\ \\text{s}$, then travels at a constant speed for a further $10\\ \\text{s}$. Find the total distance travelled.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the motion has two separate phases.",
          "workingLatex": "\\text{total } s = s_1 + s_2",
          "explanation": "The car first speeds up and then holds a steady speed. The acceleration is not the same throughout, so we must treat each phase on its own and add the distances.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the knowns for phase 1 (acceleration).",
          "workingLatex": "u = 0,\\quad a = 3\\ \\text{m s}^{-2},\\quad t = 6\\ \\text{s}",
          "explanation": "\\\"From rest\\\" gives $u = 0$ for the first phase, with the given acceleration acting for $6\\ \\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the distance in phase 1.",
          "workingLatex": "s_1 = ut + \\tfrac12 at^2 = 0(6) + \\tfrac12 (3)(6)^2",
          "explanation": "Starting from rest, all the distance in phase 1 comes from the acceleration term, so we use the displacement equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the phase 1 distance.",
          "workingLatex": "s_1 = \\tfrac12 (3)(36) = 54\\ \\text{m}",
          "explanation": "During the accelerating phase the car covers $54\\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the speed at the end of phase 1.",
          "workingLatex": "v = u + at = 0 + 3(6) = 18\\ \\text{m s}^{-1}",
          "explanation": "The speed reached at the end of the acceleration is the constant speed the car then keeps, so we need it before tackling phase 2.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up phase 2 (constant speed).",
          "workingLatex": "\\text{constant speed} = 18\\ \\text{m s}^{-1},\\quad t = 10\\ \\text{s}",
          "explanation": "In phase 2 there is no acceleration, so the speed stays at $18\\ \\text{m s}^{-1}$ for the whole $10\\ \\text{s}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the distance in phase 2.",
          "workingLatex": "s_2 = \\text{speed} \\times \\text{time} = 18 \\times 10 = 180\\ \\text{m}",
          "explanation": "At constant speed distance is simply speed multiplied by time, since there is no acceleration to complicate it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two distances.",
          "workingLatex": "s = s_1 + s_2 = 54 + 180 = 234\\ \\text{m}",
          "explanation": "Combining the accelerating and constant-speed parts gives the total distance for the whole journey.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer.",
          "workingLatex": "\\text{total distance} = 234\\ \\text{m}",
          "explanation": "Most of the distance, $180\\ \\text{m}$, comes from the constant-speed phase, which makes sense as the car is moving fastest there.",
          "diagram": null
        }
      ],
      "finalAnswer": "The total distance travelled is $234\\ \\text{m}$."
    }
  },
{
  "id": "al.y1.mech.constant-acceleration.q031",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "vertical-motion", "gravity", "cliff", "displacement"],
  "questionText": "A stone is thrown straight down from the top of a cliff with an initial speed of $5\\ \\text{m s}^{-1}$. Taking $g = 9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, the stone reaches the sea below after $4\\ \\text{s}$. Find the height of the cliff and the speed of the stone as it hits the sea.",
  "questionDiagram": { "kind": "descriptive", "description": "A vertical cliff with the sea at its base. A stone is shown at the cliff top being thrown straight downward with speed 5 m/s. A downward arrow beside the cliff is labelled as the positive direction; the height of the cliff (from cliff top to sea) is the unknown to be found.", "alt": "Stone thrown downward from the top of a cliff towards the sea, with down taken as positive." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Choose a positive direction.", "workingLatex": "\\text{Take downwards as positive.}", "explanation": "The stone is thrown down and travels down, so making 'down' positive keeps every quantity positive and avoids sign confusion. Once we choose a direction we must use it consistently for the rest of the problem.", "diagram": null },
      { "stepNumber": 2, "description": "List the known quantities.", "workingLatex": "u = 5,\\quad a = 9.8,\\quad t = 4,\\quad s = ?,\\quad v = ?", "explanation": "Gravity acts downwards, the same way as our positive direction, so the acceleration is $+9.8\\ \\text{m s}^{-2}$. Writing out the suvat letters we know makes it clear which equation will reach the unknowns.", "diagram": null },
      { "stepNumber": 3, "description": "Select the equation for displacement.", "workingLatex": "s = ut + \\tfrac12 at^2", "explanation": "We know $u$, $a$ and $t$ and want the displacement $s$ (the cliff height). This equation links exactly those four quantities, so it is the natural choice.", "diagram": null },
      { "stepNumber": 4, "description": "Substitute the known values.", "workingLatex": "s = (5)(4) + \\tfrac12(9.8)(4)^2", "explanation": "Putting the numbers straight into the formula keeps the working tidy and lets us check each value is in the correct place before simplifying.", "diagram": null },
      { "stepNumber": 5, "description": "Evaluate each term.", "workingLatex": "s = 20 + \\tfrac12(9.8)(16) = 20 + 78.4", "explanation": "The first term is the distance the stone would cover at constant speed; the second is the extra distance gravity adds. Working them out separately reduces the chance of an arithmetic slip.", "diagram": null },
      { "stepNumber": 6, "description": "State the height of the cliff.", "workingLatex": "s = 98.4\\ \\text{m}", "explanation": "Since $s$ came out positive it points downwards, which matches the stone falling to the sea, so the cliff is $98.4\\ \\text{m}$ high.", "diagram": null },
      { "stepNumber": 7, "description": "Select the equation for the landing speed.", "workingLatex": "v = u + at", "explanation": "We want the final velocity $v$ and already know $u$, $a$ and $t$. This equation connects those directly, so no earlier answer is needed and any rounding cannot spread.", "diagram": null },
      { "stepNumber": 8, "description": "Substitute the known values.", "workingLatex": "v = 5 + (9.8)(4)", "explanation": "Using $u$, $a$ and $t$ again keeps this calculation independent of the height we just found, which is a good habit for reliability.", "diagram": null },
      { "stepNumber": 9, "description": "Evaluate.", "workingLatex": "v = 5 + 39.2 = 44.2\\ \\text{m s}^{-1}", "explanation": "The stone gains $9.8\\ \\text{m s}^{-1}$ of speed each second for $4\\ \\text{s}$, adding $39.2$ to the launch speed. The result is positive, confirming it is still moving downwards.", "diagram": null },
      { "stepNumber": 10, "description": "State the final answers.", "workingLatex": "\\text{height} = 98.4\\ \\text{m},\\qquad \\text{landing speed} = 44.2\\ \\text{m s}^{-1}", "explanation": "Both quantities are positive and sensibly sized for a fall of about four seconds, so the results are consistent with the physical situation.", "diagram": null }
    ],
    "finalAnswer": "Height of cliff $= 98.4\\ \\text{m}$; landing speed $= 44.2\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q032",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "numeric",
  "tags": ["suvat", "vertical-motion", "gravity", "quadratic", "building"],
  "questionText": "A ball is thrown vertically upwards with a speed of $15\\ \\text{m s}^{-1}$ from the top of a building of height $25\\ \\text{m}$. Taking $g = 9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find the time it takes for the ball to hit the ground at the base of the building. Give your answer to $3$ significant figures.",
  "questionDiagram": { "kind": "descriptive", "description": "A building 25 m tall with the ground at its base. A ball at the roof edge is thrown straight up with speed 15 m/s. An upward arrow marks the positive direction; the ground is 25 m below the launch point, so its displacement from the throwing point is -25 m.", "alt": "Ball thrown upward from the top of a 25 m building, later landing on the ground below, with up taken as positive." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Choose a positive direction.", "workingLatex": "\\text{Take upwards as positive.}", "explanation": "The ball is launched upwards, so choosing 'up' as positive makes the initial velocity positive and is a natural reference. Everything else must then be measured against this same direction.", "diagram": null },
      { "stepNumber": 2, "description": "Fix the sign of the displacement to the ground.", "workingLatex": "s = -25\\ \\text{m}", "explanation": "The ground is $25\\ \\text{m}$ below where the ball starts. With up positive, a point below the start has a negative displacement, so $s = -25$, not $+25$.", "diagram": null },
      { "stepNumber": 3, "description": "List the known quantities.", "workingLatex": "u = 15,\\quad a = -9.8,\\quad s = -25,\\quad t = ?", "explanation": "Gravity pulls downwards, opposite to our positive direction, so the acceleration is $-9.8\\ \\text{m s}^{-2}$. These three known values point us to a displacement–time equation.", "diagram": null },
      { "stepNumber": 4, "description": "Select the appropriate suvat equation.", "workingLatex": "s = ut + \\tfrac12 at^2", "explanation": "We know $u$, $a$ and $s$ and want $t$. This is the only standard equation linking those four, and because $t$ appears squared it will give a quadratic to solve.", "diagram": null },
      { "stepNumber": 5, "description": "Substitute the known values.", "workingLatex": "-25 = 15t + \\tfrac12(-9.8)t^2", "explanation": "Substituting carefully with the correct signs is the crucial step here: the negative displacement and negative acceleration both matter for getting the right quadratic.", "diagram": null },
      { "stepNumber": 6, "description": "Simplify to a standard quadratic.", "workingLatex": "-25 = 15t - 4.9t^2 \\;\\Rightarrow\\; 4.9t^2 - 15t - 25 = 0", "explanation": "Rearranging into the form $at^2 + bt + c = 0$ lets us apply the quadratic formula. Moving everything to one side and making the $t^2$ term positive keeps the algebra clean.", "diagram": null },
      { "stepNumber": 7, "description": "Identify the coefficients.", "workingLatex": "a = 4.9,\\quad b = -15,\\quad c = -25", "explanation": "Reading off the coefficients before substituting prevents sign errors in the formula, especially since both $b$ and $c$ are negative here.", "diagram": null },
      { "stepNumber": 8, "description": "Apply the quadratic formula.", "workingLatex": "t = \\dfrac{-(-15) \\pm \\sqrt{(-15)^2 - 4(4.9)(-25)}}{2(4.9)}", "explanation": "The quadratic formula solves any quadratic, and the two roots correspond to the two times the ball's height equation is satisfied mathematically.", "diagram": null },
      { "stepNumber": 9, "description": "Evaluate the discriminant.", "workingLatex": "\\sqrt{225 + 490} = \\sqrt{715} \\approx 26.740", "explanation": "The term under the root is positive, confirming the ball really does reach the ground and giving two real solution times to compare.", "diagram": null },
      { "stepNumber": 10, "description": "Write out both roots.", "workingLatex": "t = \\dfrac{15 \\pm 26.740}{9.8}", "explanation": "Both roots come from the same physics but only one can be the true landing time; the other is a negative time from extending the motion backwards, which is not physical.", "diagram": null },
      { "stepNumber": 11, "description": "Reject the negative root.", "workingLatex": "t = \\dfrac{15 - 26.740}{9.8} \\approx -1.20 \\ \\text{(rejected)}", "explanation": "A negative time would mean before the ball was thrown, so it has no meaning in this problem. We keep only the positive root.", "diagram": null },
      { "stepNumber": 12, "description": "Take the positive root.", "workingLatex": "t = \\dfrac{15 + 26.740}{9.8} = \\dfrac{41.740}{9.8} \\approx 4.26\\ \\text{s}", "explanation": "This is the physically meaningful time: the ball rises, falls back past the roof, and reaches the ground about $4.26\\ \\text{s}$ after launch, which is sensible for these speeds and heights.", "diagram": null }
    ],
    "finalAnswer": "The ball hits the ground after $t \\approx 4.26\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q033",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "deceleration", "braking", "stopping-distance"],
  "questionText": "A car is travelling in a straight line at $30\\ \\text{m s}^{-1}$ when the driver applies the brakes, producing a uniform deceleration of $5\\ \\text{m s}^{-2}$. Find the distance the car travels before it stops, and the time it takes to stop.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Choose a positive direction.", "workingLatex": "\\text{Take the direction of motion as positive.}", "explanation": "Measuring positive in the direction the car is already moving keeps the initial velocity positive and makes the braking a clearly negative acceleration.", "diagram": null },
      { "stepNumber": 2, "description": "List the known quantities.", "workingLatex": "u = 30,\\quad v = 0,\\quad a = -5,\\quad s = ?,\\quad t = ?", "explanation": "'Stops' tells us the final velocity is $0$. The deceleration opposes the motion, so it is $-5\\ \\text{m s}^{-2}$ with our sign convention.", "diagram": null },
      { "stepNumber": 3, "description": "Select an equation for the distance.", "workingLatex": "v^2 = u^2 + 2as", "explanation": "This equation links $u$, $v$, $a$ and $s$ without needing the time, so it reaches the stopping distance in a single step and avoids relying on any later result.", "diagram": null },
      { "stepNumber": 4, "description": "Substitute the known values.", "workingLatex": "0^2 = 30^2 + 2(-5)s", "explanation": "Substituting with the correct signs is essential: the negative acceleration is what allows the car's speed to fall to zero.", "diagram": null },
      { "stepNumber": 5, "description": "Simplify.", "workingLatex": "0 = 900 - 10s", "explanation": "Working out $30^2 = 900$ and $2(-5) = -10$ turns the equation into a simple linear one in $s$.", "diagram": null },
      { "stepNumber": 6, "description": "Solve for the distance.", "workingLatex": "10s = 900 \\;\\Rightarrow\\; s = 90\\ \\text{m}", "explanation": "Rearranging gives the stopping distance directly. A positive value confirms the car moves forward while slowing, as expected.", "diagram": null },
      { "stepNumber": 7, "description": "Select an equation for the time.", "workingLatex": "v = u + at", "explanation": "We want $t$ and know $u$, $v$ and $a$. This equation joins those four quantities directly, so the time does not depend on our distance answer.", "diagram": null },
      { "stepNumber": 8, "description": "Substitute the known values.", "workingLatex": "0 = 30 + (-5)t", "explanation": "Again the sign of the acceleration is what brings the velocity down from $30$ to $0$, so it must be included as negative.", "diagram": null },
      { "stepNumber": 9, "description": "Solve for the time.", "workingLatex": "5t = 30 \\;\\Rightarrow\\; t = 6\\ \\text{s}", "explanation": "The car loses $5\\ \\text{m s}^{-1}$ of speed every second, so from $30\\ \\text{m s}^{-1}$ it takes $6\\ \\text{s}$ to stop, which agrees with intuition.", "diagram": null },
      { "stepNumber": 10, "description": "State the final answers.", "workingLatex": "s = 90\\ \\text{m},\\qquad t = 6\\ \\text{s}", "explanation": "Both results are positive and reasonable for a car braking from motorway speed, giving us confidence in the working.", "diagram": null }
    ],
    "finalAnswer": "Stopping distance $= 90\\ \\text{m}$; time to stop $= 6\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q034",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "deceleration", "rest", "time"],
  "questionText": "A particle moving in a straight line at $12\\ \\text{m s}^{-1}$ decelerates uniformly and comes to rest after travelling $48\\ \\text{m}$. Find the magnitude of the deceleration and the time taken to come to rest.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Choose a positive direction.", "workingLatex": "\\text{Take the direction of motion as positive.}", "explanation": "Taking positive along the motion keeps the starting velocity and the distance travelled positive, so any deceleration will appear naturally as a negative acceleration.", "diagram": null },
      { "stepNumber": 2, "description": "List the known quantities.", "workingLatex": "u = 12,\\quad v = 0,\\quad s = 48,\\quad a = ?,\\quad t = ?", "explanation": "'Comes to rest' fixes the final velocity at $0$, and the $48\\ \\text{m}$ is the displacement while slowing. We are asked for $a$ and $t$.", "diagram": null },
      { "stepNumber": 3, "description": "Select an equation for the acceleration.", "workingLatex": "v^2 = u^2 + 2as", "explanation": "This equation uses $u$, $v$, $s$ and $a$ but not the time, so it isolates the acceleration in one clean step.", "diagram": null },
      { "stepNumber": 4, "description": "Substitute the known values.", "workingLatex": "0^2 = 12^2 + 2a(48)", "explanation": "Placing the values carefully into the equation sets up a simple linear equation for the unknown acceleration.", "diagram": null },
      { "stepNumber": 5, "description": "Simplify.", "workingLatex": "0 = 144 + 96a", "explanation": "Computing $12^2 = 144$ and $2 \\times 48 = 96$ reduces the equation to something we can rearrange immediately.", "diagram": null },
      { "stepNumber": 6, "description": "Solve for the acceleration.", "workingLatex": "96a = -144 \\;\\Rightarrow\\; a = -1.5\\ \\text{m s}^{-2}", "explanation": "The negative sign shows the acceleration opposes the motion, i.e. it is a deceleration. Its magnitude is $1.5\\ \\text{m s}^{-2}$.", "diagram": null },
      { "stepNumber": 7, "description": "Select an equation for the time.", "workingLatex": "v = u + at", "explanation": "Now that we have $a$, the equation linking $u$, $v$, $a$ and $t$ gives the time directly, and it also lets us reuse the acceleration we just found.", "diagram": null },
      { "stepNumber": 8, "description": "Substitute the known values.", "workingLatex": "0 = 12 + (-1.5)t", "explanation": "Using the signed acceleration $-1.5$ ensures the velocity decreases from $12$ towards $0$ as required.", "diagram": null },
      { "stepNumber": 9, "description": "Solve for the time.", "workingLatex": "1.5t = 12 \\;\\Rightarrow\\; t = 8\\ \\text{s}", "explanation": "Losing $1.5\\ \\text{m s}^{-1}$ each second, the particle needs $8\\ \\text{s}$ to shed its full $12\\ \\text{m s}^{-1}$, which is consistent with the given distance.", "diagram": null },
      { "stepNumber": 10, "description": "State the final answers.", "workingLatex": "\\text{deceleration} = 1.5\\ \\text{m s}^{-2},\\qquad t = 8\\ \\text{s}", "explanation": "Quoting the deceleration as a positive magnitude and a sensible time completes the answer in the form the question asks for.", "diagram": null }
    ],
    "finalAnswer": "Deceleration $= 1.5\\ \\text{m s}^{-2}$; time to rest $= 8\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q035",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "written",
  "tags": ["suvat", "vertical-motion", "gravity", "velocity", "interpretation"],
  "questionText": "A ball is projected vertically upwards with a speed of $19.6\\ \\text{m s}^{-1}$, taking $g = 9.8\\ \\text{m s}^{-2}$ and ignoring air resistance. Find the velocity and the height of the ball above the projection point at $t = 1\\ \\text{s}$ and at $t = 3\\ \\text{s}$, and explain what the sign of the velocity at $t = 3\\ \\text{s}$ tells you about the motion.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Choose a positive direction.", "workingLatex": "\\text{Take upwards as positive.}", "explanation": "The ball is projected upwards, so making 'up' positive gives a positive launch velocity and lets the sign of later velocities tell us the direction of travel.", "diagram": null },
      { "stepNumber": 2, "description": "List the fixed quantities.", "workingLatex": "u = 19.6,\\quad a = -9.8", "explanation": "Gravity acts downwards against our positive direction, so $a = -9.8$. These two values stay the same throughout, and we vary $t$ to reach each requested instant.", "diagram": null },
      { "stepNumber": 3, "description": "Choose the velocity equation.", "workingLatex": "v = u + at", "explanation": "Velocity at a given time depends on $u$, $a$ and $t$, all of which we know, so this equation delivers the velocity at any instant directly.", "diagram": null },
      { "stepNumber": 4, "description": "Find the velocity at $t = 1\\ \\text{s}$.", "workingLatex": "v = 19.6 + (-9.8)(1) = 9.8\\ \\text{m s}^{-1}", "explanation": "After one second gravity has removed $9.8\\ \\text{m s}^{-1}$ of upward speed. The result is positive, so the ball is still rising.", "diagram": null },
      { "stepNumber": 5, "description": "Choose the displacement equation.", "workingLatex": "s = ut + \\tfrac12 at^2", "explanation": "Height above the start is the displacement $s$, and this equation links it to $u$, $a$ and $t$, which are all known.", "diagram": null },
      { "stepNumber": 6, "description": "Find the height at $t = 1\\ \\text{s}$.", "workingLatex": "s = 19.6(1) + \\tfrac12(-9.8)(1)^2 = 19.6 - 4.9 = 14.7\\ \\text{m}", "explanation": "The ball has risen $14.7\\ \\text{m}$ after one second. A positive displacement confirms it is above the projection point.", "diagram": null },
      { "stepNumber": 7, "description": "Find the velocity at $t = 3\\ \\text{s}$.", "workingLatex": "v = 19.6 + (-9.8)(3) = 19.6 - 29.4 = -9.8\\ \\text{m s}^{-1}", "explanation": "By three seconds gravity has more than cancelled the launch speed, giving a negative velocity. The magnitude is again $9.8\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 8, "description": "Find the height at $t = 3\\ \\text{s}$.", "workingLatex": "s = 19.6(3) + \\tfrac12(-9.8)(3)^2 = 58.8 - 44.1 = 14.7\\ \\text{m}", "explanation": "The ball is again $14.7\\ \\text{m}$ above the start. This matches the up–down symmetry: it passes the same height on the way down that it reached on the way up.", "diagram": null },
      { "stepNumber": 9, "description": "Interpret the sign at $t = 3\\ \\text{s}$.", "workingLatex": "v = -9.8 < 0 \\;\\Rightarrow\\; \\text{moving downwards}", "explanation": "Because we chose up as positive, a negative velocity means the ball is now travelling downwards. It has already passed its highest point (at $t = 2\\ \\text{s}$) and is falling back.", "diagram": null },
      { "stepNumber": 10, "description": "State the final answers.", "workingLatex": "t=1{:}\\ v = 9.8\\ \\text{m s}^{-1},\\ s = 14.7\\ \\text{m};\\quad t=3{:}\\ v = -9.8\\ \\text{m s}^{-1},\\ s = 14.7\\ \\text{m}", "explanation": "Collecting the results shows the ball at the same height at both times but moving in opposite directions, which is exactly what the symmetry of vertical motion under gravity predicts.", "diagram": null }
    ],
    "finalAnswer": "At $t = 1\\ \\text{s}$: $v = 9.8\\ \\text{m s}^{-1}$ (upwards), height $= 14.7\\ \\text{m}$. At $t = 3\\ \\text{s}$: $v = -9.8\\ \\text{m s}^{-1}$, height $= 14.7\\ \\text{m}$. The negative velocity means the ball is now moving downwards, having passed its highest point."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q036",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "two-phase", "acceleration", "deceleration", "distance"],
  "questionText": "A train starts from rest and accelerates uniformly to $20\\ \\text{m s}^{-1}$ in $40\\ \\text{s}$. It then decelerates uniformly at $2\\ \\text{m s}^{-2}$ until it comes to rest. Find the total distance travelled during these two phases of motion.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Split the journey into two phases.", "workingLatex": "\\text{Phase 1: speeding up.}\\quad \\text{Phase 2: slowing down.}", "explanation": "The acceleration is different in each phase, and suvat equations only apply while the acceleration is constant, so we must treat the two parts separately and add the results.", "diagram": null },
      { "stepNumber": 2, "description": "List the knowns for Phase 1.", "workingLatex": "u_1 = 0,\\quad v_1 = 20,\\quad t_1 = 40", "explanation": "The train starts from rest, so $u_1 = 0$, reaches $20\\ \\text{m s}^{-1}$ over $40\\ \\text{s}$. These three values are enough to find the distance covered.", "diagram": null },
      { "stepNumber": 3, "description": "Choose an equation for the Phase 1 distance.", "workingLatex": "s_1 = \\tfrac12(u_1 + v_1)t_1", "explanation": "This 'average velocity times time' form uses exactly the three quantities we know and avoids needing the acceleration, so it is the most direct choice.", "diagram": null },
      { "stepNumber": 4, "description": "Compute the Phase 1 distance.", "workingLatex": "s_1 = \\tfrac12(0 + 20)(40) = 400\\ \\text{m}", "explanation": "The average speed during a uniform acceleration from $0$ to $20$ is $10\\ \\text{m s}^{-1}$, and over $40\\ \\text{s}$ that covers $400\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 5, "description": "List the knowns for Phase 2.", "workingLatex": "u_2 = 20,\\quad v_2 = 0,\\quad a_2 = -2", "explanation": "Phase 2 begins at the speed Phase 1 ended, $20\\ \\text{m s}^{-1}$, and ends at rest. The deceleration opposes the motion, so $a_2 = -2\\ \\text{m s}^{-2}$.", "diagram": null },
      { "stepNumber": 6, "description": "Choose an equation for the Phase 2 distance.", "workingLatex": "v_2^{\\,2} = u_2^{\\,2} + 2a_2 s_2", "explanation": "We know $u_2$, $v_2$ and $a_2$ but not the time for this phase, so the time-free equation is the efficient way to get the distance.", "diagram": null },
      { "stepNumber": 7, "description": "Substitute the known values.", "workingLatex": "0^2 = 20^2 + 2(-2)s_2", "explanation": "Careful substitution with the negative deceleration is what lets the speed fall from $20$ to $0$ over the unknown distance.", "diagram": null },
      { "stepNumber": 8, "description": "Solve for the Phase 2 distance.", "workingLatex": "0 = 400 - 4s_2 \\;\\Rightarrow\\; s_2 = 100\\ \\text{m}", "explanation": "Rearranging gives $100\\ \\text{m}$ for the braking distance. It is shorter than Phase 1 because the train spends less time slowing than it did speeding up.", "diagram": null },
      { "stepNumber": 9, "description": "Add the two distances.", "workingLatex": "s = s_1 + s_2 = 400 + 100", "explanation": "The total distance is simply the sum of the distances covered in each phase, since the train moves in the same straight line throughout.", "diagram": null },
      { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "s = 500\\ \\text{m}", "explanation": "The train travels a total of $500\\ \\text{m}$, a sensible figure for a train accelerating to a modest speed and then braking to a halt.", "diagram": null }
    ],
    "finalAnswer": "Total distance travelled $= 500\\ \\text{m}$ (400 m accelerating + 100 m decelerating)."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q037",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "vertical-motion", "gravity", "nth-second", "free-fall"],
  "questionText": "An object is dropped from rest and falls freely under gravity, with $g = 9.8\\ \\text{m s}^{-2}$ and air resistance ignored. Find the distance it falls during the $3\\text{rd}$ second of its motion (that is, between $t = 2\\ \\text{s}$ and $t = 3\\ \\text{s}$).",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Choose a positive direction.", "workingLatex": "\\text{Take downwards as positive.}", "explanation": "The object falls downwards, so making 'down' positive keeps the acceleration and all displacements positive and simplifies the arithmetic.", "diagram": null },
      { "stepNumber": 2, "description": "State the constant quantities.", "workingLatex": "u = 0,\\quad a = 9.8", "explanation": "'Dropped from rest' means the initial velocity is $0$, and gravity supplies a downward acceleration of $9.8\\ \\text{m s}^{-2}$ in our positive direction.", "diagram": null },
      { "stepNumber": 3, "description": "Interpret 'the 3rd second'.", "workingLatex": "\\text{distance} = s(3) - s(2)", "explanation": "The 3rd second is the interval from $t = 2$ to $t = 3$. Its length is the total fallen by $3\\ \\text{s}$ minus the total fallen by $2\\ \\text{s}$, so we find each cumulative distance.", "diagram": null },
      { "stepNumber": 4, "description": "Choose the displacement equation.", "workingLatex": "s = ut + \\tfrac12 at^2", "explanation": "With $u$ and $a$ known, this equation gives the total distance fallen at any time, which is exactly what we need at $t = 2$ and $t = 3$.", "diagram": null },
      { "stepNumber": 5, "description": "Find the distance fallen by $t = 3\\ \\text{s}$.", "workingLatex": "s(3) = 0 + \\tfrac12(9.8)(3)^2 = 4.9 \\times 9 = 44.1\\ \\text{m}", "explanation": "Because the object starts from rest, the first term vanishes and only the gravity term remains, giving $44.1\\ \\text{m}$ after three seconds.", "diagram": null },
      { "stepNumber": 6, "description": "Find the distance fallen by $t = 2\\ \\text{s}$.", "workingLatex": "s(2) = 0 + \\tfrac12(9.8)(2)^2 = 4.9 \\times 4 = 19.6\\ \\text{m}", "explanation": "Using the same equation at $t = 2$ gives the head start already covered before the 3rd second begins.", "diagram": null },
      { "stepNumber": 7, "description": "Subtract to get the 3rd-second distance.", "workingLatex": "s(3) - s(2) = 44.1 - 19.6 = 24.5\\ \\text{m}", "explanation": "The difference is the distance covered purely during the 3rd second. It is larger than earlier seconds because the object is moving faster as it falls.", "diagram": null },
      { "stepNumber": 8, "description": "Check with the $n$-th second formula.", "workingLatex": "u + \\tfrac12 a(2n - 1)", "explanation": "There is a neat shortcut: the distance in the $n$-th second equals $u + \\tfrac12 a(2n-1)$. Checking with it guards against arithmetic slips.", "diagram": null },
      { "stepNumber": 9, "description": "Substitute $n = 3$ into the formula.", "workingLatex": "0 + \\tfrac12(9.8)(2 \\times 3 - 1) = 4.9 \\times 5 = 24.5\\ \\text{m}", "explanation": "The shortcut gives the same $24.5\\ \\text{m}$, confirming our subtraction method was correct.", "diagram": null },
      { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\text{distance in the 3rd second} = 24.5\\ \\text{m}", "explanation": "Both methods agree, so the object falls $24.5\\ \\text{m}$ during the 3rd second of its motion.", "diagram": null }
    ],
    "finalAnswer": "The object falls $24.5\\ \\text{m}$ during the 3rd second."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q038",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "acceleration", "final-speed", "time"],
  "questionText": "A car passes a point $A$ travelling at $10\\ \\text{m s}^{-1}$ and then accelerates uniformly at $1.5\\ \\text{m s}^{-2}$ along a straight road. A second point $B$ lies $300\\ \\text{m}$ beyond $A$. Find the speed of the car as it passes $B$ and the time taken to travel from $A$ to $B$. Give your answers to $3$ significant figures.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Choose a positive direction.", "workingLatex": "\\text{Take the direction of travel (from } A \\text{ to } B) \\text{ as positive.}", "explanation": "Measuring positive along the road from $A$ to $B$ keeps the velocity, acceleration and displacement all positive, which is the simplest set-up for a car speeding up.", "diagram": null },
      { "stepNumber": 2, "description": "List the known quantities.", "workingLatex": "u = 10,\\quad a = 1.5,\\quad s = 300,\\quad v = ?,\\quad t = ?", "explanation": "The speed at $A$ is the initial velocity, the acceleration is given, and the distance from $A$ to $B$ is the displacement. We want the speed at $B$ and the time.", "diagram": null },
      { "stepNumber": 3, "description": "Choose an equation for the speed at $B$.", "workingLatex": "v^2 = u^2 + 2as", "explanation": "This equation connects $u$, $a$, $s$ and $v$ without the time, so it gives the speed at $B$ first and keeps that result independent of any time calculation.", "diagram": null },
      { "stepNumber": 4, "description": "Substitute the known values.", "workingLatex": "v^2 = 10^2 + 2(1.5)(300)", "explanation": "Placing the numbers into the equation prepares a straightforward evaluation of $v^2$ before we take the square root.", "diagram": null },
      { "stepNumber": 5, "description": "Evaluate $v^2$.", "workingLatex": "v^2 = 100 + 900 = 1000", "explanation": "Working out the two terms gives $v^2 = 1000$. Keeping this exact value avoids rounding errors before the square root.", "diagram": null },
      { "stepNumber": 6, "description": "Take the square root.", "workingLatex": "v = \\sqrt{1000} \\approx 31.6\\ \\text{m s}^{-1}", "explanation": "We take the positive root because the car is moving in the positive direction. The speed at $B$ is about $31.6\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 7, "description": "Choose an equation for the time.", "workingLatex": "v = u + at", "explanation": "Now that we know $v$, the equation linking $u$, $v$, $a$ and $t$ gives the time directly, and it is convenient to reuse the speed we just found.", "diagram": null },
      { "stepNumber": 8, "description": "Substitute the known values.", "workingLatex": "\\sqrt{1000} = 10 + 1.5t", "explanation": "Using the exact $\\sqrt{1000}$ rather than the rounded $31.6$ keeps the time as accurate as possible before the final rounding.", "diagram": null },
      { "stepNumber": 9, "description": "Solve for the time.", "workingLatex": "1.5t = \\sqrt{1000} - 10 \\approx 21.62 \\;\\Rightarrow\\; t = \\dfrac{21.62}{1.5} \\approx 14.4\\ \\text{s}", "explanation": "Subtracting the initial speed and dividing by the acceleration gives the time. About $14.4\\ \\text{s}$ is sensible for covering $300\\ \\text{m}$ while accelerating.", "diagram": null },
      { "stepNumber": 10, "description": "State the final answers.", "workingLatex": "v \\approx 31.6\\ \\text{m s}^{-1},\\qquad t \\approx 14.4\\ \\text{s}", "explanation": "Both answers are positive and consistent with a car steadily gaining speed over $300\\ \\text{m}$, so the working holds together.", "diagram": null }
    ],
    "finalAnswer": "Speed at $B \\approx 31.6\\ \\text{m s}^{-1}$; time from $A$ to $B \\approx 14.4\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q039",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "vertical-motion", "gravity", "maximum-height", "symmetry"],
  "questionText": "A ball is thrown vertically upwards and returns to the thrower's hand $5\\ \\text{s}$ later. Taking $g = 9.8\\ \\text{m s}^{-2}$ and ignoring air resistance, find the speed with which the ball was thrown and the maximum height it reaches above the hand.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Choose a positive direction.", "workingLatex": "\\text{Take upwards as positive.}", "explanation": "The ball is thrown upwards, so 'up' as positive makes the launch speed positive and gravity a negative acceleration, the usual convenient set-up.", "diagram": null },
      { "stepNumber": 2, "description": "Interpret 'returns to the hand'.", "workingLatex": "s = 0 \\text{ when } t = 5", "explanation": "Coming back to the same hand means the ball's displacement from the start is zero after $5\\ \\text{s}$, even though it has travelled up and back down. This is the key fact that unlocks the launch speed.", "diagram": null },
      { "stepNumber": 3, "description": "List the known quantities.", "workingLatex": "s = 0,\\quad t = 5,\\quad a = -9.8,\\quad u = ?", "explanation": "With the displacement, time and acceleration known, one suvat equation will give the initial speed $u$.", "diagram": null },
      { "stepNumber": 4, "description": "Choose the displacement equation.", "workingLatex": "s = ut + \\tfrac12 at^2", "explanation": "This equation links $s$, $u$, $a$ and $t$, so setting $s = 0$ lets us solve for the only unknown, $u$.", "diagram": null },
      { "stepNumber": 5, "description": "Substitute the known values.", "workingLatex": "0 = u(5) + \\tfrac12(-9.8)(5)^2", "explanation": "Substituting $s = 0$ turns the whole-flight condition into an equation for the launch speed.", "diagram": null },
      { "stepNumber": 6, "description": "Simplify.", "workingLatex": "0 = 5u - 122.5", "explanation": "Evaluating $\\tfrac12(9.8)(25) = 122.5$ leaves a simple linear equation in $u$.", "diagram": null },
      { "stepNumber": 7, "description": "Solve for the launch speed.", "workingLatex": "5u = 122.5 \\;\\Rightarrow\\; u = 24.5\\ \\text{m s}^{-1}", "explanation": "The ball was thrown at $24.5\\ \\text{m s}^{-1}$. As a check, by symmetry it spends half the flight, $2.5\\ \\text{s}$, rising, and $9.8 \\times 2.5 = 24.5$ agrees.", "diagram": null },
      { "stepNumber": 8, "description": "Set up the maximum-height condition.", "workingLatex": "v = 0 \\text{ at the top}", "explanation": "At the highest point the ball is momentarily at rest before falling back, so the velocity there is zero. This gives the equation we need for the height.", "diagram": null },
      { "stepNumber": 9, "description": "Choose an equation for the height.", "workingLatex": "v^2 = u^2 + 2as", "explanation": "With $u$ now known, $v = 0$ at the top and $a = -9.8$, this time-free equation gives the maximum height $s$ directly.", "diagram": null },
      { "stepNumber": 10, "description": "Substitute and simplify.", "workingLatex": "0 = 24.5^2 + 2(-9.8)s = 600.25 - 19.6s", "explanation": "Substituting the values reduces the problem to a single linear equation for the greatest height.", "diagram": null },
      { "stepNumber": 11, "description": "Solve for the maximum height.", "workingLatex": "19.6s = 600.25 \\;\\Rightarrow\\; s = 30.625\\ \\text{m}", "explanation": "The ball rises $30.625\\ \\text{m}$ above the hand, a reasonable height for a launch speed of about $24.5\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 12, "description": "State the final answers.", "workingLatex": "u = 24.5\\ \\text{m s}^{-1},\\qquad H = 30.625\\ \\text{m}", "explanation": "Both results follow consistently from the total flight time, so the launch speed and maximum height are confirmed.", "diagram": null }
    ],
    "finalAnswer": "Initial speed $= 24.5\\ \\text{m s}^{-1}$; maximum height $= 30.625\\ \\text{m}$ above the hand."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q040",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "vertical-motion", "gravity", "free-fall", "well"],
  "questionText": "A stone is dropped from rest into a deep well, and the splash is heard $2.5\\ \\text{s}$ later. Taking $g = 9.8\\ \\text{m s}^{-2}$, ignoring air resistance, and assuming the time for the sound to travel back up is negligible, find the depth of the well and the speed of the stone as it hits the water.",
  "questionDiagram": { "kind": "descriptive", "description": "A vertical well shaft with a stone at the top being released from rest. A downward arrow marks the positive direction. The water surface lies at the unknown depth below; the stone falls for 2.5 s before the splash is heard.", "alt": "Stone dropped from rest down a well, taking 2.5 s to reach the water, with down taken as positive." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Choose a positive direction.", "workingLatex": "\\text{Take downwards as positive.}", "explanation": "The stone falls downwards, so 'down' as positive keeps the acceleration and the depth positive, making the arithmetic clean.", "diagram": null },
      { "stepNumber": 2, "description": "Interpret the timing assumption.", "workingLatex": "t = 2.5\\ \\text{s (whole time is the fall time)}", "explanation": "Because the sound's travel time up the well is treated as negligible, the full $2.5\\ \\text{s}$ is the time the stone spends falling. This lets us use suvat for the fall directly.", "diagram": null },
      { "stepNumber": 3, "description": "List the known quantities.", "workingLatex": "u = 0,\\quad a = 9.8,\\quad t = 2.5,\\quad s = ?,\\quad v = ?", "explanation": "'Dropped from rest' gives $u = 0$, and gravity provides $a = 9.8$ in our positive direction. We want the depth $s$ and the impact speed $v$.", "diagram": null },
      { "stepNumber": 4, "description": "Choose an equation for the depth.", "workingLatex": "s = ut + \\tfrac12 at^2", "explanation": "This equation gives displacement from $u$, $a$ and $t$, all of which we know, so it reaches the depth in one step.", "diagram": null },
      { "stepNumber": 5, "description": "Substitute the known values.", "workingLatex": "s = 0(2.5) + \\tfrac12(9.8)(2.5)^2", "explanation": "With $u = 0$ the first term vanishes, so the whole depth comes from the gravity term.", "diagram": null },
      { "stepNumber": 6, "description": "Evaluate the depth.", "workingLatex": "s = \\tfrac12(9.8)(6.25) = 4.9 \\times 6.25 = 30.625\\ \\text{m}", "explanation": "Squaring the time gives $6.25$, and multiplying by $4.9$ gives a depth of $30.625\\ \\text{m}$, a plausible depth for a deep well.", "diagram": null },
      { "stepNumber": 7, "description": "Choose an equation for the impact speed.", "workingLatex": "v = u + at", "explanation": "We want the speed on impact and know $u$, $a$ and $t$, so this equation gives $v$ directly without relying on the depth we just computed.", "diagram": null },
      { "stepNumber": 8, "description": "Substitute the known values.", "workingLatex": "v = 0 + (9.8)(2.5)", "explanation": "Since the stone starts from rest, its impact speed is just the speed gained under gravity over $2.5\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 9, "description": "Evaluate the impact speed.", "workingLatex": "v = 24.5\\ \\text{m s}^{-1}", "explanation": "Gaining $9.8\\ \\text{m s}^{-1}$ each second for $2.5\\ \\text{s}$ gives $24.5\\ \\text{m s}^{-1}$ at the water surface.", "diagram": null },
      { "stepNumber": 10, "description": "State the final answers.", "workingLatex": "\\text{depth} = 30.625\\ \\text{m},\\qquad v = 24.5\\ \\text{m s}^{-1}", "explanation": "Both values are positive and mutually consistent (a deeper well would give a longer time and a higher speed), so the answers are sound.", "diagram": null }
    ],
    "finalAnswer": "Depth of the well $= 30.625\\ \\text{m}$; impact speed $= 24.5\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q041",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "constant-acceleration", "kinematics", "displacement"],
  "questionText": "A lift starts from rest and accelerates upward at a constant $1.2\\ \\text{m s}^{-2}$ for $3\\ \\text{s}$. Find (a) its velocity at the end of this time and (b) the distance it has risen.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the quantities we know and want.",
        "workingLatex": "u = 0, \\quad a = 1.2\\ \\text{m s}^{-2}, \\quad t = 3\\ \\text{s}, \\quad v = ?, \\ s = ?",
        "explanation": "Before choosing a formula it helps to write down the five suvat quantities and mark which we have. The lift starts from rest, so the initial velocity $u$ is $0$. We are given the acceleration and the time, and we want the final velocity $v$ and the displacement $s$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Choose the equation for velocity.",
        "workingLatex": "v = u + at",
        "explanation": "To find $v$ we want a formula linking $v$ with $u$, $a$ and $t$ — the three things we already know. The equation $v = u + at$ contains exactly those and leaves out the unknown $s$, so it is the cleanest choice.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the known values.",
        "workingLatex": "v = 0 + 1.2 \\times 3",
        "explanation": "Putting the numbers straight into the formula keeps the working transparent. Each second the velocity grows by $1.2\\ \\text{m s}^{-1}$, and this happens for $3$ seconds.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the final velocity.",
        "workingLatex": "v = 3.6\\ \\text{m s}^{-1}",
        "explanation": "Multiplying gives the velocity after $3$ seconds. Because the lift keeps speeding up at a steady rate, the answer is simply the acceleration multiplied by the time.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Choose the equation for displacement.",
        "workingLatex": "s = ut + \\tfrac12 a t^2",
        "explanation": "Now for the distance risen. This formula uses $u$, $a$ and $t$, all of which we know, so we do not even need the $v$ we just found. It splits the motion into a steady part $ut$ and an extra part $\\tfrac12 a t^2$ caused by the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the known values.",
        "workingLatex": "s = 0 \\times 3 + \\tfrac12 \\times 1.2 \\times 3^2",
        "explanation": "Since the lift starts from rest the first term $ut$ vanishes, so all of the distance comes from the accelerating term. Squaring the time reflects that a body that keeps speeding up covers ground faster and faster.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the displacement.",
        "workingLatex": "s = \\tfrac12 \\times 1.2 \\times 9 = 5.4\\ \\text{m}",
        "explanation": "Working through the arithmetic gives the height risen. Half of $1.2$ is $0.6$, and $0.6 \\times 9 = 5.4$, so the lift climbs $5.4$ metres.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check with the average-velocity formula.",
        "workingLatex": "s = \\tfrac12 (u + v) t = \\tfrac12 (0 + 3.6)(3) = 5.4\\ \\text{m}",
        "explanation": "A quick independent check builds confidence. For constant acceleration the average velocity is just the mean of the start and end velocities, and average velocity times time gives the same $5.4\\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the final answers.",
        "workingLatex": "v = 3.6\\ \\text{m s}^{-1}, \\qquad s = 5.4\\ \\text{m}",
        "explanation": "We collect both results: the lift is moving at $3.6\\ \\text{m s}^{-1}$ after $3$ seconds and has risen $5.4\\ \\text{m}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 3.6\\ \\text{m s}^{-1}$ and the lift rises $s = 5.4\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q042",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "deceleration", "constant-acceleration", "kinematics"],
  "questionText": "A car decelerates uniformly from $25\\ \\text{m s}^{-1}$ to $10\\ \\text{m s}^{-1}$ while travelling $70\\ \\text{m}$. Find (a) the deceleration and (b) the time taken.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the known quantities.",
        "workingLatex": "u = 25\\ \\text{m s}^{-1}, \\quad v = 10\\ \\text{m s}^{-1}, \\quad s = 70\\ \\text{m}, \\quad a = ?, \\ t = ?",
        "explanation": "Taking the direction of travel as positive, we record the start and end speeds and the distance covered. We are asked for the acceleration and the time, so those are the unknowns.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Choose an equation without time.",
        "workingLatex": "v^2 = u^2 + 2as",
        "explanation": "The acceleration is the quicker target because we can reach it without knowing the time. The equation $v^2 = u^2 + 2as$ links $u$, $v$, $s$ and $a$ but not $t$, so it isolates the one quantity we still need.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "10^2 = 25^2 + 2a(70)",
        "explanation": "Placing the numbers into the formula gives a single equation in $a$. The squared velocities capture how much 'motion energy' has been lost over the $70\\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Work out the squares.",
        "workingLatex": "100 = 625 + 140a",
        "explanation": "Evaluating $10^2 = 100$, $25^2 = 625$ and $2 \\times 70 = 140$ tidies the equation into an easy linear form ready to solve for $a$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Rearrange for the acceleration.",
        "workingLatex": "140a = 100 - 625 = -525",
        "explanation": "Subtracting $625$ from both sides gathers the $a$-term on its own. The right side comes out negative, which is exactly what we expect for a car that is slowing down.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the acceleration.",
        "workingLatex": "a = \\dfrac{-525}{140} = -3.75\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives $a = -3.75\\ \\text{m s}^{-2}$. The minus sign means the acceleration opposes the motion, so the deceleration has magnitude $3.75\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Choose an equation for the time.",
        "workingLatex": "v = u + at",
        "explanation": "Now that we know $a$, the simplest route to the time uses $v = u + at$, which connects the two velocities, the acceleration and $t$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the values.",
        "workingLatex": "10 = 25 + (-3.75)t",
        "explanation": "Inserting the start and end speeds together with the negative acceleration gives an equation whose only unknown is the time.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Solve for the time.",
        "workingLatex": "-3.75t = -15 \\ \\Rightarrow\\ t = 4\\ \\text{s}",
        "explanation": "The speed must fall by $15\\ \\text{m s}^{-1}$, and it drops by $3.75\\ \\text{m s}^{-1}$ every second, so it takes $4$ seconds.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Check with the average speed.",
        "workingLatex": "s = \\tfrac12 (u + v) t = \\tfrac12 (25 + 10)(4) = 70\\ \\text{m}",
        "explanation": "Using the mean of the two speeds times the time reproduces the given $70\\ \\text{m}$, confirming both answers are consistent.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the final answers.",
        "workingLatex": "\\text{deceleration} = 3.75\\ \\text{m s}^{-2}, \\qquad t = 4\\ \\text{s}",
        "explanation": "We report the deceleration as a positive magnitude and give the time taken to slow down.",
        "diagram": null
      }
    ],
    "finalAnswer": "Deceleration $= 3.75\\ \\text{m s}^{-2}$ and time taken $t = 4\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q043",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "numeric",
  "tags": ["vertical-motion", "gravity", "suvat", "maximum-height"],
  "questionText": "A ball is thrown vertically upward from ground level with speed $28\\ \\text{m s}^{-1}$. Taking $g = 9.8\\ \\text{m s}^{-2}$, find (a) the maximum height reached, (b) the time taken to reach it, and (c) the ball's speed when it is $20\\ \\text{m}$ above the ground on the way up.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A ball projected vertically upward from ground level with initial speed 28 m/s. Upward is taken as positive and gravity of 9.8 m/s^2 acts downward. The maximum height, where the velocity is momentarily zero, is marked, together with a level 20 m above the ground.",
    "alt": "A ball thrown straight up from the ground reaching a maximum height, with a 20 m level marked."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up a positive direction and list the data.",
        "workingLatex": "u = 28\\ \\text{m s}^{-1}, \\quad a = -9.8\\ \\text{m s}^{-2} \\ (\\text{upward positive})",
        "explanation": "Taking upward as positive, the launch speed is $+28$, while gravity pulls the ball back down, so the acceleration is $-9.8$. Fixing this sign convention at the start prevents mistakes later.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Use the condition at the highest point.",
        "workingLatex": "\\text{at the top: } v = 0",
        "explanation": "At the very top of its flight the ball stops rising for an instant before it starts to fall, so its velocity there is zero. This is the key fact that lets us find the maximum height.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose an equation without time.",
        "workingLatex": "v^2 = u^2 + 2as",
        "explanation": "For the greatest height we do not yet know the time, so we pick the equation that avoids $t$. With $v = 0$ at the top it links the launch speed, gravity and the height directly.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute and solve for the maximum height.",
        "workingLatex": "0 = 28^2 + 2(-9.8)s \\ \\Rightarrow\\ 19.6 s = 784 \\ \\Rightarrow\\ s = 40\\ \\text{m}",
        "explanation": "Putting $v = 0$ in and rearranging gives the height. Since $28^2 = 784$ and $2 \\times 9.8 = 19.6$, dividing yields exactly $40\\ \\text{m}$ as the greatest height reached.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Choose an equation for the time to the top.",
        "workingLatex": "v = u + at",
        "explanation": "The time to reach the top links the velocity dropping from $28$ to $0$ under gravity, so $v = u + at$ is the natural formula.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute and solve for the time.",
        "workingLatex": "0 = 28 - 9.8t \\ \\Rightarrow\\ t = \\dfrac{28}{9.8} = \\dfrac{20}{7} \\approx 2.86\\ \\text{s}",
        "explanation": "Gravity removes $9.8\\ \\text{m s}^{-1}$ of upward speed each second, so the ball takes $28 \\div 9.8 = \\tfrac{20}{7}$ seconds, about $2.86\\ \\text{s}$, to come to rest at the top.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Set up part (c) at height 20 m.",
        "workingLatex": "s = 20\\ \\text{m}, \\quad u = 28, \\quad a = -9.8, \\quad v = ?",
        "explanation": "For the speed at $20\\ \\text{m}$ we again avoid time by using the height directly. All the other quantities are known, so one suvat equation will give $v$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Apply the no-time equation.",
        "workingLatex": "v^2 = 28^2 + 2(-9.8)(20)",
        "explanation": "The same $v^2 = u^2 + 2as$ works because it connects speed with height. Here $s = 20\\ \\text{m}$ is only part of the way up, so the ball will still be moving.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the right-hand side.",
        "workingLatex": "v^2 = 784 - 392 = 392",
        "explanation": "Gravity has taken away $2 \\times 9.8 \\times 20 = 392$ from the initial $784$, leaving $v^2 = 392$. The result is still positive, confirming the ball is genuinely at this height on the way up.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Take the square root.",
        "workingLatex": "v = \\sqrt{392} = 14\\sqrt{2} \\approx 19.8\\ \\text{m s}^{-1}",
        "explanation": "Since $392 = 196 \\times 2$, the square root simplifies neatly to $14\\sqrt{2}$, about $19.8\\ \\text{m s}^{-1}$. The ball has slowed from $28$ to roughly $19.8\\ \\text{m s}^{-1}$ by the time it is $20\\ \\text{m}$ up.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the final answers.",
        "workingLatex": "H = 40\\ \\text{m}, \\quad t = \\tfrac{20}{7} \\approx 2.86\\ \\text{s}, \\quad v \\approx 19.8\\ \\text{m s}^{-1}",
        "explanation": "We collect the three results: the maximum height, the time to reach it, and the speed at $20\\ \\text{m}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "Maximum height $= 40\\ \\text{m}$, time to the top $= \\tfrac{20}{7} \\approx 2.86\\ \\text{s}$, and the speed at $20\\ \\text{m}$ is $\\sqrt{392} = 14\\sqrt{2} \\approx 19.8\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q044",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "numeric",
  "tags": ["suvat", "nth-second", "simultaneous-equations", "constant-acceleration"],
  "questionText": "A particle moves in a straight line with constant acceleration. It covers $24\\ \\text{m}$ during the 4th second of its motion and $30\\ \\text{m}$ during the 6th second. Find (a) the initial velocity $u$ and (b) the acceleration $a$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the distance-in-the-nth-second formula.",
        "workingLatex": "s_n = u + \\tfrac12 a (2n - 1)",
        "explanation": "The distance travelled during the $n$-th second alone is the displacement up to time $n$ minus the displacement up to time $n-1$. Working that difference out gives this compact formula, which is ideal when the data is given second by second.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply it to the 4th second.",
        "workingLatex": "s_4 = u + \\tfrac12 a (2\\times 4 - 1) = u + 3.5a = 24",
        "explanation": "Putting $n = 4$ gives $2n - 1 = 7$, so the distance in the 4th second is $u + 3.5a$. Setting this equal to the given $24\\ \\text{m}$ produces our first equation.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply it to the 6th second.",
        "workingLatex": "s_6 = u + \\tfrac12 a (2\\times 6 - 1) = u + 5.5a = 30",
        "explanation": "Putting $n = 6$ gives $2n - 1 = 11$, so the distance in the 6th second is $u + 5.5a$. Setting this equal to $30\\ \\text{m}$ gives a second equation in the same two unknowns.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Subtract the equations to eliminate u.",
        "workingLatex": "(u + 5.5a) - (u + 3.5a) = 30 - 24",
        "explanation": "Both equations contain a single $u$, so subtracting one from the other cancels it and leaves an equation in $a$ only. This is the standard trick for simultaneous equations.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "2a = 6 \\ \\Rightarrow\\ a = 3\\ \\text{m s}^{-2}",
        "explanation": "The subtraction leaves $2a = 6$, so $a = 3\\ \\text{m s}^{-2}$. Notice this matches the idea that each second's distance grows by $a$; here it grows from the 4th to the 6th second by $6\\ \\text{m}$ over $2$ seconds.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute back to find u.",
        "workingLatex": "u + 3.5(3) = 24",
        "explanation": "With $a$ known we return to either original equation. Using the first one and replacing $a$ with $3$ leaves a simple equation for $u$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the initial velocity.",
        "workingLatex": "u + 10.5 = 24 \\ \\Rightarrow\\ u = 13.5\\ \\text{m s}^{-1}",
        "explanation": "Since $3.5 \\times 3 = 10.5$, subtracting gives $u = 13.5\\ \\text{m s}^{-1}$ as the speed at the very start of the motion.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check against the 6th-second data.",
        "workingLatex": "u + 5.5a = 13.5 + 5.5(3) = 13.5 + 16.5 = 30\\ \\text{m}",
        "explanation": "Substituting both answers into the second equation reproduces the given $30\\ \\text{m}$, confirming the pair $(u, a)$ is correct.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the final answers.",
        "workingLatex": "u = 13.5\\ \\text{m s}^{-1}, \\qquad a = 3\\ \\text{m s}^{-2}",
        "explanation": "We report the initial velocity and the constant acceleration that together match both pieces of information.",
        "diagram": null
      }
    ],
    "finalAnswer": "$u = 13.5\\ \\text{m s}^{-1}$ and $a = 3\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q045",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "acceleration", "constant-acceleration", "kinematics"],
  "questionText": "A car accelerates uniformly from $8\\ \\text{m s}^{-1}$ to $16\\ \\text{m s}^{-1}$ over a distance of $96\\ \\text{m}$. Find (a) the acceleration and (b) the time taken.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the known quantities.",
        "workingLatex": "u = 8\\ \\text{m s}^{-1}, \\quad v = 16\\ \\text{m s}^{-1}, \\quad s = 96\\ \\text{m}, \\quad a = ?, \\ t = ?",
        "explanation": "We record the two speeds and the distance travelled. The acceleration and the time are what we are asked to find, so they are the unknowns.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Choose an equation without time.",
        "workingLatex": "v^2 = u^2 + 2as",
        "explanation": "The acceleration is easiest to reach first because we can avoid the time entirely. The formula $v^2 = u^2 + 2as$ links the two speeds, the distance and $a$, leaving out $t$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "16^2 = 8^2 + 2a(96)",
        "explanation": "Inserting the numbers gives one equation in the single unknown $a$. The squared speeds measure how much the motion has built up over the $96\\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the squares.",
        "workingLatex": "256 = 64 + 192a",
        "explanation": "Working out $16^2 = 256$, $8^2 = 64$ and $2 \\times 96 = 192$ turns the relation into a straightforward linear equation.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the acceleration.",
        "workingLatex": "192a = 192 \\ \\Rightarrow\\ a = 1\\ \\text{m s}^{-2}",
        "explanation": "Subtracting $64$ leaves $192a = 192$, so $a = 1\\ \\text{m s}^{-2}$. The car gains one metre per second of speed each second.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Choose an equation for the time.",
        "workingLatex": "v = u + at",
        "explanation": "With the acceleration known, the simplest link to the time is $v = u + at$, connecting the two speeds through the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute and solve.",
        "workingLatex": "16 = 8 + (1)t \\ \\Rightarrow\\ t = 8\\ \\text{s}",
        "explanation": "The speed rises by $8\\ \\text{m s}^{-1}$ in total and grows by $1\\ \\text{m s}^{-1}$ each second, so it takes $8$ seconds.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check with the average speed.",
        "workingLatex": "s = \\tfrac12 (u + v) t = \\tfrac12 (8 + 16)(8) = 96\\ \\text{m}",
        "explanation": "Using the mean speed times the time gives back the stated $96\\ \\text{m}$, confirming both answers fit together.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the final answers.",
        "workingLatex": "a = 1\\ \\text{m s}^{-2}, \\qquad t = 8\\ \\text{s}",
        "explanation": "We report the acceleration and the time taken to cover the $96\\ \\text{m}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "Acceleration $= 1\\ \\text{m s}^{-2}$ and time taken $t = 8\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q046",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "numeric",
  "tags": ["suvat", "deceleration", "constant-acceleration", "distance"],
  "questionText": "A particle is projected along a rough horizontal surface with speed $18\\ \\text{m s}^{-1}$ and decelerates uniformly at $2\\ \\text{m s}^{-2}$. Find the distance it travels before it momentarily comes to rest.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Choose a positive direction and list the data.",
        "workingLatex": "u = 18\\ \\text{m s}^{-1}, \\quad v = 0, \\quad a = -2\\ \\text{m s}^{-2}, \\quad s = ?",
        "explanation": "Taking the direction of motion as positive, the particle starts at $18\\ \\text{m s}^{-1}$ and ends at rest, so $v = 0$. The friction slows it down, which is why the acceleration is written with a minus sign.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Explain the sign of the acceleration.",
        "workingLatex": "\\text{deceleration } 2\\ \\text{m s}^{-2} \\ \\Rightarrow\\ a = -2\\ \\text{m s}^{-2}",
        "explanation": "A deceleration is an acceleration acting against the motion. Because we chose the direction of travel as positive, this opposing effect must carry a negative sign in the equations.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose an equation without time.",
        "workingLatex": "v^2 = u^2 + 2as",
        "explanation": "We want the distance and are not told the time, so the equation that omits $t$ is ideal. It ties the starting speed, the final speed and the deceleration directly to the distance.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "0 = 18^2 + 2(-2)s",
        "explanation": "Putting in $v = 0$, $u = 18$ and $a = -2$ leaves a single equation in $s$. The zero on the left records that all the initial motion has been used up when the particle stops.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the equation.",
        "workingLatex": "0 = 324 - 4s",
        "explanation": "Since $18^2 = 324$ and $2 \\times (-2) = -4$, the relation tidies into an easy linear equation to solve for $s$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the distance.",
        "workingLatex": "4s = 324 \\ \\Rightarrow\\ s = 81\\ \\text{m}",
        "explanation": "Rearranging gives $s = 81\\ \\text{m}$. This is how far the particle slides before friction has removed all of its speed.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Find the time as a check.",
        "workingLatex": "v = u + at \\ \\Rightarrow\\ 0 = 18 - 2t \\ \\Rightarrow\\ t = 9\\ \\text{s}",
        "explanation": "Finding the stopping time gives us an independent way to verify the distance. Losing $2\\ \\text{m s}^{-1}$ each second, the particle stops after $9$ seconds.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Confirm the distance with the average speed.",
        "workingLatex": "s = \\tfrac12 (u + v) t = \\tfrac12 (18)(9) = 81\\ \\text{m}",
        "explanation": "The mean speed times the time reproduces $81\\ \\text{m}$, so the answer is consistent.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the final answer.",
        "workingLatex": "s = 81\\ \\text{m}",
        "explanation": "The particle travels $81\\ \\text{m}$ before momentarily coming to rest.",
        "diagram": null
      }
    ],
    "finalAnswer": "The particle travels $s = 81\\ \\text{m}$ before coming to rest."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q047",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["vertical-motion", "gravity", "suvat", "free-fall"],
  "questionText": "A stone is dropped from rest from the top of a cliff of height $44.1\\ \\text{m}$. Taking $g = 9.8\\ \\text{m s}^{-2}$, find (a) the time it takes to reach the ground and (b) its speed on impact.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A stone released from rest at the top of a vertical cliff of height 44.1 m. Downward is taken as positive and gravity of 9.8 m/s^2 acts downward. The stone falls freely to the ground below.",
    "alt": "A stone dropped from the top of a 44.1 m cliff falling straight down to the ground."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Choose a positive direction and list the data.",
        "workingLatex": "u = 0, \\quad a = 9.8\\ \\text{m s}^{-2}, \\quad s = 44.1\\ \\text{m} \\ (\\text{downward positive})",
        "explanation": "Taking downward as positive keeps every quantity positive for a falling object. 'Dropped from rest' means the initial velocity is $0$, and gravity supplies the acceleration of $9.8\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Choose an equation for the time.",
        "workingLatex": "s = ut + \\tfrac12 a t^2",
        "explanation": "To find the time from the known height and acceleration, this formula is ideal because it links $s$, $u$, $a$ and $t$ without needing the impact speed.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "44.1 = 0 \\times t + \\tfrac12 (9.8) t^2",
        "explanation": "Because the stone starts from rest the $ut$ term is zero, so the whole fall comes from the accelerating term $\\tfrac12 a t^2$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the equation.",
        "workingLatex": "44.1 = 4.9 t^2",
        "explanation": "Since $\\tfrac12 \\times 9.8 = 4.9$, the equation reduces to $44.1 = 4.9 t^2$, which is quick to solve for $t$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the time.",
        "workingLatex": "t^2 = \\dfrac{44.1}{4.9} = 9 \\ \\Rightarrow\\ t = 3\\ \\text{s}",
        "explanation": "Dividing gives $t^2 = 9$, so $t = 3\\ \\text{s}$. We take the positive root because time cannot be negative.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Choose an equation for the impact speed.",
        "workingLatex": "v = u + at",
        "explanation": "Now that the time is known, the direct way to the impact speed is $v = u + at$, which adds up the speed gained under gravity.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute and evaluate.",
        "workingLatex": "v = 0 + 9.8 \\times 3 = 29.4\\ \\text{m s}^{-1}",
        "explanation": "Each second gravity adds $9.8\\ \\text{m s}^{-1}$ of downward speed, so after $3$ seconds the stone is moving at $29.4\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check with the no-time equation.",
        "workingLatex": "v^2 = u^2 + 2as = 2(9.8)(44.1) = 864.36 \\ \\Rightarrow\\ v = 29.4\\ \\text{m s}^{-1}",
        "explanation": "Using $v^2 = u^2 + 2as$ as an independent route gives the same impact speed, confirming the answer.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the final answers.",
        "workingLatex": "t = 3\\ \\text{s}, \\qquad v = 29.4\\ \\text{m s}^{-1}",
        "explanation": "We report the time to reach the ground and the speed at which the stone strikes it.",
        "diagram": null
      }
    ],
    "finalAnswer": "Time to fall $t = 3\\ \\text{s}$ and impact speed $v = 29.4\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q048",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "acceleration", "constant-acceleration", "distance"],
  "questionText": "A car travelling at $20\\ \\text{m s}^{-1}$ accelerates uniformly at $1.5\\ \\text{m s}^{-2}$ for $8\\ \\text{s}$. Find (a) the distance covered during this time and (b) the final speed.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the known quantities.",
        "workingLatex": "u = 20\\ \\text{m s}^{-1}, \\quad a = 1.5\\ \\text{m s}^{-2}, \\quad t = 8\\ \\text{s}, \\quad s = ?, \\ v = ?",
        "explanation": "We note the starting speed, the acceleration and the time. The distance covered and the final speed are what we want, so those are the unknowns.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Choose an equation for the distance.",
        "workingLatex": "s = ut + \\tfrac12 a t^2",
        "explanation": "This formula uses exactly the three known quantities and gives the distance directly. It splits the motion into the steady part $ut$ and the extra distance $\\tfrac12 a t^2$ gained from speeding up.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "s = 20 \\times 8 + \\tfrac12 (1.5)(8^2)",
        "explanation": "Inserting the numbers keeps the two contributions visible: the distance the car would cover at a steady $20\\ \\text{m s}^{-1}$, plus the bonus from accelerating.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate each term.",
        "workingLatex": "s = 160 + \\tfrac12 (1.5)(64) = 160 + 48",
        "explanation": "The steady part is $20 \\times 8 = 160\\ \\text{m}$, and the accelerating part is $\\tfrac12 \\times 1.5 \\times 64 = 48\\ \\text{m}$. Working them out separately reduces the chance of arithmetic slips.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Add to find the distance.",
        "workingLatex": "s = 208\\ \\text{m}",
        "explanation": "Adding the two contributions gives a total distance of $208\\ \\text{m}$ covered in the $8$ seconds.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Choose an equation for the final speed.",
        "workingLatex": "v = u + at",
        "explanation": "For the final speed we link the starting speed, the acceleration and the time, which is exactly what $v = u + at$ does.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute and evaluate.",
        "workingLatex": "v = 20 + 1.5 \\times 8 = 20 + 12 = 32\\ \\text{m s}^{-1}",
        "explanation": "The car gains $1.5\\ \\text{m s}^{-1}$ each second for $8$ seconds, a total of $12\\ \\text{m s}^{-1}$, taking it from $20$ up to $32\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check the distance with the average speed.",
        "workingLatex": "s = \\tfrac12 (u + v) t = \\tfrac12 (20 + 32)(8) = 208\\ \\text{m}",
        "explanation": "Using the mean of the start and end speeds times the time gives back $208\\ \\text{m}$, confirming both answers are consistent.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the final answers.",
        "workingLatex": "s = 208\\ \\text{m}, \\qquad v = 32\\ \\text{m s}^{-1}",
        "explanation": "We report the distance covered and the final speed after $8$ seconds.",
        "diagram": null
      }
    ],
    "finalAnswer": "Distance covered $= 208\\ \\text{m}$ and final speed $v = 32\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q049",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["vertical-motion", "gravity", "suvat", "projectiles"],
  "questionText": "A ball is thrown vertically upward from ground level. Taking $g = 9.8\\ \\text{m s}^{-2}$, it is at a height of $15\\ \\text{m}$ exactly $1\\ \\text{s}$ after being thrown. Find its initial speed.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A ball thrown vertically upward from the ground. Upward is taken as positive and gravity of 9.8 m/s^2 acts downward. After 1 second the ball is 15 m above the ground.",
    "alt": "A ball thrown straight up, shown at a height of 15 m one second after launch."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Choose a positive direction and list the data.",
        "workingLatex": "s = 15\\ \\text{m}, \\quad t = 1\\ \\text{s}, \\quad a = -9.8\\ \\text{m s}^{-2}, \\quad u = ?",
        "explanation": "Taking upward as positive, we know the height reached, the time and the acceleration due to gravity. The unknown is the launch speed $u$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Explain the sign of the acceleration.",
        "workingLatex": "\\text{gravity acts downward} \\ \\Rightarrow\\ a = -9.8\\ \\text{m s}^{-2}",
        "explanation": "The ball is thrown upward, our positive direction, while gravity pulls it back down. Since gravity opposes the chosen positive direction, its acceleration is negative.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Choose an equation for u.",
        "workingLatex": "s = ut + \\tfrac12 a t^2",
        "explanation": "We know $s$, $t$ and $a$ and want $u$, so this formula is perfect: it is the only suvat equation linking those four quantities without the final velocity.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the values.",
        "workingLatex": "15 = u(1) + \\tfrac12 (-9.8)(1)^2",
        "explanation": "Putting the numbers in gives an equation in $u$. The negative second term shows how gravity has already reduced the height the ball would otherwise have reached in one second.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the gravity term.",
        "workingLatex": "\\tfrac12 (-9.8)(1) = -4.9",
        "explanation": "Working out $\\tfrac12 \\times 9.8 = 4.9$, and with the minus sign the accelerating term contributes $-4.9\\ \\text{m}$ over this first second.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the simplified equation.",
        "workingLatex": "15 = u - 4.9",
        "explanation": "The relation now reads that the actual height, $15\\ \\text{m}$, equals the distance the ball would rise at its launch speed for one second, less the $4.9\\ \\text{m}$ that gravity has taken away.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the initial speed.",
        "workingLatex": "u = 15 + 4.9 = 19.9\\ \\text{m s}^{-1}",
        "explanation": "Adding $4.9$ to both sides isolates $u$, giving a launch speed of $19.9\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Verify the answer.",
        "workingLatex": "s = 19.9(1) + \\tfrac12 (-9.8)(1)^2 = 19.9 - 4.9 = 15\\ \\text{m}",
        "explanation": "Substituting $u = 19.9$ back into the equation reproduces the given $15\\ \\text{m}$, confirming the initial speed is correct.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the final answer.",
        "workingLatex": "u = 19.9\\ \\text{m s}^{-1}",
        "explanation": "The ball must have been thrown upward at $19.9\\ \\text{m s}^{-1}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The initial speed is $u = 19.9\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q050",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["suvat", "acceleration", "constant-acceleration", "kinematics"],
  "questionText": "A sprinter starts from rest and accelerates uniformly at $2.5\\ \\text{m s}^{-2}$. Find (a) the time taken and (b) the distance covered in reaching a speed of $10\\ \\text{m s}^{-1}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "List the known quantities.",
        "workingLatex": "u = 0, \\quad a = 2.5\\ \\text{m s}^{-2}, \\quad v = 10\\ \\text{m s}^{-1}, \\quad t = ?, \\ s = ?",
        "explanation": "The sprinter starts from rest, so $u = 0$. We are given the acceleration and the target speed, and we want the time to reach it and the distance covered.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Choose an equation for the time.",
        "workingLatex": "v = u + at",
        "explanation": "To find the time we link the target speed with the acceleration using $v = u + at$, which needs none of the distance.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the values.",
        "workingLatex": "10 = 0 + 2.5t",
        "explanation": "Putting in the numbers gives a simple equation for $t$. Starting from rest, all of the final speed has to be built up by the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve for the time.",
        "workingLatex": "t = \\dfrac{10}{2.5} = 4\\ \\text{s}",
        "explanation": "Gaining $2.5\\ \\text{m s}^{-1}$ each second, the sprinter needs $10 \\div 2.5 = 4$ seconds to reach $10\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Choose an equation for the distance.",
        "workingLatex": "v^2 = u^2 + 2as",
        "explanation": "For the distance we can use the equation that avoids time, linking the two speeds, the acceleration and $s$ directly.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the values.",
        "workingLatex": "10^2 = 0^2 + 2(2.5)s \\ \\Rightarrow\\ 100 = 5s",
        "explanation": "With $u = 0$ the first term drops out, leaving $100 = 5s$. This is quick to solve for the distance.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve for the distance.",
        "workingLatex": "s = \\dfrac{100}{5} = 20\\ \\text{m}",
        "explanation": "Dividing gives $s = 20\\ \\text{m}$, the distance the sprinter covers while reaching top speed.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check with the average speed.",
        "workingLatex": "s = \\tfrac12 (u + v) t = \\tfrac12 (0 + 10)(4) = 20\\ \\text{m}",
        "explanation": "Using the mean speed times the time gives the same $20\\ \\text{m}$, confirming the time and distance agree.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the final answers.",
        "workingLatex": "t = 4\\ \\text{s}, \\qquad s = 20\\ \\text{m}",
        "explanation": "We report the time taken and the distance covered in reaching $10\\ \\text{m s}^{-1}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "Time taken $t = 4\\ \\text{s}$ and distance covered $s = 20\\ \\text{m}$."
  }
},
  {
    "id": "al.y1.mech.constant-acceleration.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": ["suvat", "two-object-pursuit", "relative-motion", "quadratic", "kinematics"],
    "questionText": "Car $A$ passes a point $P$ travelling at a constant $20\\ \\text{m s}^{-1}$. Two seconds later, car $B$ starts from rest at $P$ and accelerates uniformly at $4\\ \\text{m s}^{-2}$ in the same direction. Find when and where $B$ catches $A$, and the speed of $B$ at that instant.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A straight horizontal road running left to right with a marked point P. Car A is drawn to the right of P, already moving away at a constant 20 m/s (a long arrow labelled 'A: constant 20 m/s'). Car B sits exactly at P, initially at rest, with a short arrow labelled 'B: from rest, a = 4 m/s^2, starts 2 s later' pointing right. A dashed vertical line further to the right marks the catch-up point where B overtakes A.",
      "alt": "Two cars leaving the same point P on a straight road; A moves at constant speed, B accelerates from rest starting 2 s later, meeting further along the road."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a positive direction and one shared clock.",
          "workingLatex": "$\\text{Direction of travel positive; let } t = \\text{seconds after B starts moving.}$",
          "explanation": "Both cars run along the same line, so we only need one axis. Timing everything from the moment B sets off keeps B's own suvat equation clean, and we can adjust for A's earlier start separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out A's head start.",
          "workingLatex": "$\\text{In the 2 s before B moves, A travels } 20 \\times 2 = 40\\ \\text{m.}$",
          "explanation": "A has been cruising for two seconds already when B's clock starts, so A is a fixed 40 m ahead of P at time zero on our clock.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write A's displacement from P.",
          "workingLatex": "$s_A = 40 + 20t$",
          "explanation": "A keeps a constant speed, so its distance beyond P is just the 40 m head start plus 20 m for every extra second.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write B's displacement from P.",
          "workingLatex": "$s_B = \\tfrac12(4)t^2 = 2t^2$",
          "explanation": "B starts from rest with $a = 4$, so we use $s = ut + \\tfrac12 at^2$ with $u = 0$; the distance grows with the square of time as it speeds up.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the catch-up condition.",
          "workingLatex": "$2t^2 = 40 + 20t$",
          "explanation": "B catches A when they are at the same point on the road at the same instant, i.e. their displacements from P are equal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange into a standard quadratic.",
          "workingLatex": "$2t^2 - 20t - 40 = 0 \\quad\\Rightarrow\\quad t^2 - 10t - 20 = 0$",
          "explanation": "Collect everything on one side and divide by 2 to make the numbers smaller before solving.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the quadratic formula.",
          "workingLatex": "$t = \\dfrac{10 \\pm \\sqrt{(-10)^2 - 4(1)(-20)}}{2}$",
          "explanation": "The quadratic does not factorise neatly, so we use the formula with $a = 1,\\ b = -10,\\ c = -20$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the discriminant.",
          "workingLatex": "$\\sqrt{100 + 80} = \\sqrt{180} = 6\\sqrt{5}$",
          "explanation": "Since $180 = 36 \\times 5$, we can take the square root of 36 outside, giving an exact surd form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write down the two roots.",
          "workingLatex": "$t = \\dfrac{10 \\pm 6\\sqrt{5}}{2} = 5 \\pm 3\\sqrt{5}$",
          "explanation": "Dividing numerator and denominator by 2 gives a tidy exact answer for each possible time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reject the physically impossible root.",
          "workingLatex": "$5 - 3\\sqrt{5} \\approx -1.7 < 0 \\ (\\text{reject: before B starts})$",
          "explanation": "A negative time would be before B even began moving, so it cannot describe the catch-up; only the positive root is valid.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the time of the catch-up.",
          "workingLatex": "$t = 5 + 3\\sqrt{5} \\approx 11.7\\ \\text{s after B starts} \\ (\\approx 13.7\\ \\text{s after A passes } P)$",
          "explanation": "This is measured on B's clock; adding the 2 s head start gives the time since A first passed P, which is often how the question is read.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find where the catch-up happens.",
          "workingLatex": "$s_B = 2t^2 = 2(5+3\\sqrt{5})^2 = 140 + 60\\sqrt{5} \\approx 274\\ \\text{m}$",
          "explanation": "Substituting the exact time back into B's displacement gives the distance from P, in exact and decimal form.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check with A's displacement.",
          "workingLatex": "$s_A = 40 + 20(11.71) \\approx 274\\ \\text{m} \\ \\checkmark$",
          "explanation": "Both cars land on the same distance from P, which confirms the algebra is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find B's speed at the catch-up.",
          "workingLatex": "$v = at = 4(5 + 3\\sqrt{5}) = 20 + 12\\sqrt{5} \\approx 46.8\\ \\text{m s}^{-1}$",
          "explanation": "Using $v = u + at$ with $u = 0$; B is now moving much faster than A, which makes sense because it needed to close a large gap.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B$ catches $A$ at $t = 5 + 3\\sqrt{5} \\approx 11.7\\ \\text{s}$ after $B$ starts (about $13.7\\ \\text{s}$ after $A$ passes $P$), a distance $140 + 60\\sqrt{5} \\approx 274\\ \\text{m}$ from $P$; $B$'s speed is then $20 + 12\\sqrt{5} \\approx 46.8\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["vertical-motion", "gravity", "two-object", "meeting-point", "suvat"],
    "questionText": "A ball is thrown vertically upwards from ground level with speed $24.5\\ \\text{m s}^{-1}$. One second later a second ball is thrown vertically upwards from the same spot with the same speed. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the time after the first throw at which the two balls meet, and the height at which this happens.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A vertical set-up on the ground. Two balls are launched from the same point on the ground, both with upward velocity 24.5 m/s. Ball 1 is drawn higher up and just starting to fall (labelled 'thrown at t = 0'); Ball 2 is drawn lower and still rising (labelled 'thrown at t = 1 s'). A horizontal dashed line marks the common height where they meet, labelled 'meet here'.",
      "alt": "Two balls thrown straight up from the same ground point one second apart, meeting at a common height with the first descending and the second rising."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set a direction and a single clock.",
          "workingLatex": "$\\text{Up positive; } t = \\text{seconds after the first throw}, \\ g = 9.8\\ \\text{m s}^{-2}.$",
          "explanation": "Measuring both balls against one clock turns 'they meet' into a single equation in one variable.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Height of the first ball.",
          "workingLatex": "$h_1 = 24.5t - 4.9t^2$",
          "explanation": "From $s = ut + \\tfrac12 at^2$ with $u = 24.5$ and $a = -9.8$; gravity is negative because it opposes the upward motion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Account for the second ball's delay.",
          "workingLatex": "$\\text{Ball 2 is thrown at } t = 1, \\text{ so it has been moving for } (t - 1)\\ \\text{s.}$",
          "explanation": "The second ball's personal stopwatch reads one second less, so every $t$ in its formula must be replaced by $(t - 1)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Height of the second ball (valid for $t \\ge 1$).",
          "workingLatex": "$h_2 = 24.5(t - 1) - 4.9(t - 1)^2$",
          "explanation": "It is the identical motion, simply shifted one second later in time.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "They meet when the heights are equal.",
          "workingLatex": "$24.5t - 4.9t^2 = 24.5(t - 1) - 4.9(t - 1)^2$",
          "explanation": "Meeting means both balls are at the same height at the same instant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the right-hand side.",
          "workingLatex": "$24.5(t-1) = 24.5t - 24.5, \\quad 4.9(t-1)^2 = 4.9t^2 - 9.8t + 4.9$",
          "explanation": "Expanding lets the matching quadratic and linear pieces on each side cancel.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the expansions back.",
          "workingLatex": "$24.5t - 4.9t^2 = 24.5t - 24.5 - 4.9t^2 + 9.8t - 4.9$",
          "explanation": "Writing everything out prepares the equation for cancelling common terms.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cancel the terms common to both sides.",
          "workingLatex": "$0 = -24.5 + 9.8t - 4.9$",
          "explanation": "The $24.5t$ and the $-4.9t^2$ appear on both sides and vanish. The quadratic parts cancel because both balls fall under the same gravity, leaving just a linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve the linear equation for $t$.",
          "workingLatex": "$9.8t = 29.4 \\quad\\Rightarrow\\quad t = 3\\ \\text{s}$",
          "explanation": "Collecting the constants gives $9.8t = 29.4$, so the balls meet three seconds after the first throw.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the first ball is still in the air.",
          "workingLatex": "$24.5t - 4.9t^2 = 0 \\Rightarrow t(24.5 - 4.9t) = 0 \\Rightarrow t = 5\\ \\text{s (landing)}$",
          "explanation": "The first ball only lands at $t = 5$ s, so at $t = 3$ s it is genuinely still airborne and the meeting is physically real.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the meeting height using ball 1.",
          "workingLatex": "$h_1 = 24.5(3) - 4.9(3)^2 = 73.5 - 44.1 = 29.4\\ \\text{m}$",
          "explanation": "Substitute $t = 3$ into the first ball's height formula.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm with ball 2.",
          "workingLatex": "$h_2 = 24.5(2) - 4.9(2)^2 = 49 - 19.6 = 29.4\\ \\text{m}$",
          "explanation": "Here $t - 1 = 2$; getting the same height confirms no slip in the algebra.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret the motion at the meeting.",
          "workingLatex": "$\\text{Ball 1 apex at } t = 2.5\\ \\text{s (now falling)}; \\ \\text{Ball 2 apex at } t = 3.5\\ \\text{s (still rising)}$",
          "explanation": "The first ball is on its way down and the second is still on its way up as they pass at 29.4 m, which is exactly the picture you would expect.",
          "diagram": null
        }
      ],
      "finalAnswer": "The balls meet $3\\ \\text{s}$ after the first throw, at a height of $29.4\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["vertical-motion", "gravity", "cliff", "quadratic", "impact-speed"],
    "questionText": "A stone is thrown vertically upwards with speed $14.7\\ \\text{m s}^{-1}$ from the top of a cliff that is $39.2\\ \\text{m}$ above the beach. Taking $g = 9.8\\ \\text{m s}^{-2}$ and up as positive, find the total time from projection until the stone hits the beach, and its speed on impact.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A vertical cliff. At the top a stone is thrown straight up with an arrow labelled 'u = 14.7 m/s (up positive)'. The cliff top is the origin. A vertical dimension line on the side shows the beach is 39.2 m below the launch point. A curved dashed path shows the stone rising, coming back down past the cliff top, and landing on the beach below.",
      "alt": "Stone thrown upward from a cliff top 39.2 m above the beach, rising then falling past the launch point down to the beach."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Fix the positive direction and known quantities.",
          "workingLatex": "$\\text{Up positive, origin at the cliff top: } u = 14.7, \\ a = -9.8\\ \\text{m s}^{-2}.$",
          "explanation": "Taking up as positive makes gravity negative and, crucially, makes the beach a negative displacement below the start point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the displacement of the beach.",
          "workingLatex": "$\\text{Beach is } 39.2\\ \\text{m below the launch} \\Rightarrow s = -39.2\\ \\text{m}$",
          "explanation": "The landing point is below the origin, so its displacement is negative. Using the true signed displacement is what lets one equation cover the whole up-and-down flight.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the right suvat equation.",
          "workingLatex": "$s = ut + \\tfrac12 a t^2$",
          "explanation": "We know $u$, $a$ and $s$ and want the time $t$, so the displacement-time equation is the natural choice.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values.",
          "workingLatex": "$-39.2 = 14.7t - 4.9t^2$",
          "explanation": "Plug in $u = 14.7$, $a = -9.8$ (so $\\tfrac12 a = -4.9$) and $s = -39.2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange into a standard quadratic.",
          "workingLatex": "$4.9t^2 - 14.7t - 39.2 = 0$",
          "explanation": "Move everything to one side so the leading coefficient is positive, ready to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide through by $4.9$.",
          "workingLatex": "$t^2 - 3t - 8 = 0$",
          "explanation": "Dividing by the common factor 4.9 gives whole-number coefficients that are far easier to handle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the quadratic formula.",
          "workingLatex": "$t = \\dfrac{3 \\pm \\sqrt{(-3)^2 - 4(1)(-8)}}{2} = \\dfrac{3 \\pm \\sqrt{41}}{2}$",
          "explanation": "With $a = 1,\\ b = -3,\\ c = -8$; the expression under the root is $9 + 32 = 41$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the surd.",
          "workingLatex": "$\\sqrt{41} \\approx 6.403$",
          "explanation": "A decimal value is needed to compare the two roots and give a usable time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the two roots.",
          "workingLatex": "$t \\approx \\dfrac{3 + 6.403}{2} = 4.70 \\quad\\text{or}\\quad t \\approx \\dfrac{3 - 6.403}{2} = -1.70$",
          "explanation": "The quadratic gives one positive and one negative time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Reject the negative time.",
          "workingLatex": "$t = 4.70\\ \\text{s}$",
          "explanation": "Time only runs forward from the moment of projection, so the negative root has no physical meaning.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the impact velocity.",
          "workingLatex": "$v = u + at = 14.7 - 9.8(4.70) \\approx -31.4\\ \\text{m s}^{-1}$",
          "explanation": "Using $v = u + at$; the negative sign means the stone is moving downward at impact, exactly as expected.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm using the time-free equation.",
          "workingLatex": "$v^2 = u^2 + 2as = 14.7^2 + 2(-9.8)(-39.2) = 216.09 + 768.32 = 984.41$",
          "explanation": "This independent check avoids relying on the rounded time; note both negatives multiply to a positive, so the fall adds speed.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Take the square root for the speed.",
          "workingLatex": "$v = \\sqrt{984.41} \\approx 31.4\\ \\text{m s}^{-1}$",
          "explanation": "The magnitude agrees with the earlier value, confirming an impact speed of about $31.4\\ \\text{m s}^{-1}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total time to the beach $= \\dfrac{3 + \\sqrt{41}}{2} \\approx 4.70\\ \\text{s}$; the stone hits the beach at a speed of about $31.4\\ \\text{m s}^{-1}$ (downwards)."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["suvat", "velocity-time-graph", "multi-stage", "train-motion", "kinematics"],
    "questionText": "A train starts from rest and accelerates uniformly at $0.5\\ \\text{m s}^{-2}$ until it reaches its maximum speed of $20\\ \\text{m s}^{-1}$. It travels at this speed for a while, then decelerates uniformly at $1\\ \\text{m s}^{-2}$ until it comes to rest. The total distance travelled is $4000\\ \\text{m}$. Find the total time for the journey.",
    "questionDiagram": {"kind":"image","src":"/mechanics/al.y1.mech.constant-acceleration.q054.png","alt":"Trapezium-shaped velocity-time graph: gentle rise to 20 m/s, long constant stretch, steeper fall to rest, total enclosed area 4000 m."},
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Split the journey into three phases.",
          "workingLatex": "$\\text{Phase 1: accelerate} \\ \\to\\ \\text{Phase 2: cruise} \\ \\to\\ \\text{Phase 3: decelerate}$",
          "explanation": "The acceleration is different in each stage, so the constant-acceleration formulas can only be applied within a single phase at a time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the phase 1 data.",
          "workingLatex": "$\\text{Phase 1: } u = 0, \\ v = 20, \\ a = 0.5$",
          "explanation": "The train speeds up from rest to its top speed; this is a complete suvat situation on its own.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the phase 1 time.",
          "workingLatex": "$v = u + at: \\ 20 = 0 + 0.5\\,t_1 \\Rightarrow t_1 = 40\\ \\text{s}$",
          "explanation": "Time to reach top speed is how long it takes the speed to climb by 20 at a rate of 0.5 per second.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the phase 1 distance.",
          "workingLatex": "$d_1 = \\tfrac12(u + v)t_1 = \\tfrac12(0 + 20)(40) = 400\\ \\text{m}$",
          "explanation": "The average speed during a uniform acceleration is the mean of the start and end speeds, multiplied by the time (the area of the rising triangle).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List the phase 3 data.",
          "workingLatex": "$\\text{Phase 3: } u = 20, \\ v = 0, \\ a = -1$",
          "explanation": "The train slows from top speed to rest; the deceleration is written as a negative acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the phase 3 time.",
          "workingLatex": "$0 = 20 - 1 \\cdot t_3 \\Rightarrow t_3 = 20\\ \\text{s}$",
          "explanation": "Losing 20 of speed at 1 per second takes 20 seconds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the phase 3 distance.",
          "workingLatex": "$d_3 = \\tfrac12(20 + 0)(20) = 200\\ \\text{m}$",
          "explanation": "Again the average speed times the time gives the braking distance (the falling triangle's area).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the two ramp distances.",
          "workingLatex": "$d_1 + d_3 = 400 + 200 = 600\\ \\text{m}$",
          "explanation": "Together the speeding-up and slowing-down cover 600 m; the rest of the 4000 m must be the constant-speed cruise.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the cruising distance.",
          "workingLatex": "$d_2 = 4000 - 600 = 3400\\ \\text{m}$",
          "explanation": "Subtracting the two variable-speed portions from the total leaves the distance covered at top speed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the cruising time.",
          "workingLatex": "$t_2 = \\dfrac{d_2}{20} = \\dfrac{3400}{20} = 170\\ \\text{s}$",
          "explanation": "At a steady 20 m/s, time is simply distance divided by speed.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the three phase times.",
          "workingLatex": "$T = t_1 + t_2 + t_3 = 40 + 170 + 20$",
          "explanation": "The total journey time is the sum of the times for the three consecutive stages.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the total time.",
          "workingLatex": "$T = 230\\ \\text{s}$",
          "explanation": "This is the full duration from setting off to coming to rest.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the distances sum correctly.",
          "workingLatex": "$400 + 3400 + 200 = 4000\\ \\text{m} \\ \\checkmark$",
          "explanation": "The three phase distances add up to the stated total, confirming the split is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "The total time for the journey is $230\\ \\text{s}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": ["suvat", "v-squared", "midpoint-speed", "acceleration", "kinematics"],
    "questionText": "A particle moving in a straight line with uniform acceleration passes two points $A$ and $B$, which are $100\\ \\text{m}$ apart, with speeds $8\\ \\text{m s}^{-1}$ and $12\\ \\text{m s}^{-1}$ respectively. Find the acceleration, the time taken to travel from $A$ to $B$, and the speed of the particle at the midpoint of $AB$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A straight horizontal line marked with three points. On the left is A labelled 'v = 8 m/s'; on the right is B labelled 'v = 12 m/s'; halfway between them is M labelled 'midpoint, v = ?'. A dimension line beneath shows A to B is 100 m, with A to M and M to B each 50 m. An arrow along the line indicates the direction of increasing speed from A to B.",
      "alt": "Points A, midpoint M and B on a straight line 100 m apart; speeds 8 m/s at A and 12 m/s at B, with the midpoint speed unknown."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the motion is uniformly accelerated in a straight line.",
          "workingLatex": "$\\text{Take the direction } A \\to B \\text{ as positive.}$",
          "explanation": "A single fixed acceleration means every suvat formula applies between any two points on the path.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known quantities from $A$ to $B$.",
          "workingLatex": "$u = 8, \\ v = 12, \\ s = 100$",
          "explanation": "We know the two speeds and the separation, so we can find the acceleration first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the equation linking the two speeds and distance.",
          "workingLatex": "$v^2 = u^2 + 2as$",
          "explanation": "This equation has no time in it, so it connects the speeds at $A$ and $B$ to the distance directly and gives the acceleration in one step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values.",
          "workingLatex": "$12^2 = 8^2 + 2a(100)$",
          "explanation": "Plug in the speeds and the distance to get an equation in $a$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the equation.",
          "workingLatex": "$144 = 64 + 200a$",
          "explanation": "Working out the squares turns the relation into a simple linear equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the acceleration.",
          "workingLatex": "$200a = 80 \\Rightarrow a = \\dfrac{80}{200} = 0.4\\ \\text{m s}^{-2}$",
          "explanation": "The speed-squared increases by 80 over the 100 m, which pins down the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the time from $A$ to $B$.",
          "workingLatex": "$v = u + at: \\ 12 = 8 + 0.4t$",
          "explanation": "Now that $a$ is known, the speed-time equation gives the travel time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the time.",
          "workingLatex": "$t = \\dfrac{12 - 8}{0.4} = 10\\ \\text{s}$",
          "explanation": "The speed rises by 4 at a rate of 0.4 per second, which takes 10 seconds.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the time with the average-speed rule.",
          "workingLatex": "$s = \\tfrac12(u + v)t = \\tfrac12(8 + 12)(10) = 100\\ \\text{m} \\ \\checkmark$",
          "explanation": "The average of the two speeds times the time reproduces the 100 m, confirming both $a$ and $t$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the speed at the midpoint (50 m from $A$).",
          "workingLatex": "$v_M^2 = u^2 + 2a(50)$",
          "explanation": "Apply the same time-free equation, but over just half the distance from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the numbers.",
          "workingLatex": "$v_M^2 = 8^2 + 2(0.4)(50) = 64 + 40 = 104$",
          "explanation": "Half the distance adds half the total gain in speed-squared, giving 104.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Take the square root.",
          "workingLatex": "$v_M = \\sqrt{104} = 2\\sqrt{26} \\approx 10.2\\ \\text{m s}^{-1}$",
          "explanation": "The speed at the halfway point of the distance is about 10.2 m/s.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Notice it is not the average of 8 and 12.",
          "workingLatex": "$\\tfrac{8 + 12}{2} = 10 \\ne 10.2$",
          "explanation": "The midpoint-in-distance speed slightly exceeds the arithmetic mean, because the particle spends less time in the faster second half, so distance is covered quickly once it speeds up.",
          "diagram": null
        }
      ],
      "finalAnswer": "Acceleration $= 0.4\\ \\text{m s}^{-2}$; time from $A$ to $B = 10\\ \\text{s}$; speed at the midpoint $= 2\\sqrt{26} \\approx 10.2\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["vertical-motion", "gravity", "free-fall", "window-problem", "suvat"],
    "questionText": "A ball is released from rest from a point and falls freely under gravity ($g = 9.8\\ \\text{m s}^{-2}$). As it falls it passes a window of height $2\\ \\text{m}$, taking $0.2\\ \\text{s}$ to pass from the top of the window to the bottom. Find the speed of the ball as it reaches the top of the window, and the distance of the top of the window below the point of release.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A vertical diagram with the point of release at the top marked 'dropped from rest'. Below it, after a gap, is a rectangle representing a window of height 2 m, with its top edge labelled 'top of window: speed v = ?' and its bottom edge labelled 'passed 0.2 s later'. A vertical dimension line on the left, labelled 'h = ?', runs from the release point down to the top of the window. Down is taken as the positive direction.",
      "alt": "Ball dropped from rest falling past a 2 m tall window in 0.2 s, with the unknown drop distance to the top of the window marked."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the fall with down as positive.",
          "workingLatex": "$\\text{Dropped from rest: } u_0 = 0, \\ a = 9.8\\ \\text{m s}^{-2} \\text{ (down positive).}$",
          "explanation": "Choosing down as positive makes gravity and all displacements positive, which keeps the arithmetic clean for a falling object.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the speed at the top of the window.",
          "workingLatex": "$\\text{Let } v = \\text{speed of the ball as it reaches the top of the window.}$",
          "explanation": "Treat the crossing of the window as its own mini suvat problem, with $v$ as the entry speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the displacement equation over the window.",
          "workingLatex": "$s = vt + \\tfrac12 a t^2$",
          "explanation": "Over the window we know the distance (2 m), the time (0.2 s) and the acceleration, and want the entry speed $v$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the window values.",
          "workingLatex": "$2 = v(0.2) + \\tfrac12(9.8)(0.2)^2$",
          "explanation": "Here $s = 2$, $t = 0.2$ and $a = 9.8$; $v$ is the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the acceleration term.",
          "workingLatex": "$\\tfrac12(9.8)(0.04) = 0.196$",
          "explanation": "In just 0.2 s gravity adds only a small extra 0.196 m of fall, on top of the distance from the entry speed.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Isolate the $v$ term.",
          "workingLatex": "$0.2v = 2 - 0.196 = 1.804$",
          "explanation": "Subtracting the gravity contribution leaves the part of the 2 m due to the ball's speed on entry.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the speed at the top of the window.",
          "workingLatex": "$v = \\dfrac{1.804}{0.2} = 9.02\\ \\text{m s}^{-1}$",
          "explanation": "Dividing by the time gives the entry speed at the top of the window.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Switch to the fall before the window.",
          "workingLatex": "$\\text{From release to the top of the window: } u_0 = 0, \\ v = 9.02, \\ a = 9.8.$",
          "explanation": "The ball built up this speed by falling from rest through the unknown distance $h$ to the top of the window.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the time-free equation for $h$.",
          "workingLatex": "$v^2 = u_0^2 + 2ah$",
          "explanation": "This links the speed gained to the drop distance without needing the fall time.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the values.",
          "workingLatex": "$9.02^2 = 0 + 2(9.8)h$",
          "explanation": "The entry speed squared equals twice gravity times the drop distance.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify.",
          "workingLatex": "$81.3604 = 19.6h$",
          "explanation": "Compute the square and the coefficient ready to solve for $h$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve for the drop distance.",
          "workingLatex": "$h = \\dfrac{81.3604}{19.6} \\approx 4.15\\ \\text{m}$",
          "explanation": "The top of the window is about 4.15 m below the point of release.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check with the bottom of the window.",
          "workingLatex": "$v_{\\text{bottom}} = 9.02 + 9.8(0.2) = 10.98, \\quad \\sqrt{2(9.8)(4.15 + 2)} \\approx 10.98 \\ \\checkmark$",
          "explanation": "Falling a further 2 m to the bottom of the window (total 6.15 m) should give the same speed both ways, and it does, confirming the answers.",
          "diagram": null
        }
      ],
      "finalAnswer": "Speed at the top of the window $= 9.02\\ \\text{m s}^{-1}$; the top of the window is about $4.15\\ \\text{m}$ below the point of release."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "tags": ["suvat-derivation", "eliminating-t", "v-squared", "proof", "kinematics"],
    "questionText": "Starting from $v = u + at$ and $s = \\tfrac12(u + v)t$, derive the equation $v^2 = u^2 + 2as$ by eliminating $t$. Hence find the distance travelled by a particle that accelerates uniformly at $2\\ \\text{m s}^{-2}$ from $6\\ \\text{m s}^{-1}$ to $14\\ \\text{m s}^{-1}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the two equations to combine.",
          "workingLatex": "$v = u + at \\qquad \\text{and} \\qquad s = \\tfrac12(u + v)t$",
          "explanation": "These are the two standard results we are allowed to start from; both contain the time $t$, which is what we want to remove.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the aim.",
          "workingLatex": "$\\text{Goal: eliminate } t \\text{ to get a relation among } u, v, a, s.$",
          "explanation": "A relation without $t$ is exactly what lets us handle problems where the time is unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the first equation for $t$.",
          "workingLatex": "$v - u = at \\Rightarrow t = \\dfrac{v - u}{a}$",
          "explanation": "Solving for $t$ gives an expression we can substitute into the displacement equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute this $t$ into the displacement equation.",
          "workingLatex": "$s = \\tfrac12(u + v) \\cdot \\dfrac{v - u}{a}$",
          "explanation": "Replacing $t$ removes it entirely, leaving $s$ in terms of $u$, $v$ and $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recognise a difference of two squares.",
          "workingLatex": "$(u + v)(v - u) = v^2 - u^2$",
          "explanation": "The product of a sum and difference of the same two quantities collapses to the difference of their squares, which is the key simplification.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the displacement expression.",
          "workingLatex": "$s = \\dfrac{v^2 - u^2}{2a}$",
          "explanation": "Using the difference of squares tidies the right-hand side into a compact form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply both sides by $2a$.",
          "workingLatex": "$2as = v^2 - u^2$",
          "explanation": "Clearing the denominator brings the equation close to the target form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange to the standard form.",
          "workingLatex": "$v^2 = u^2 + 2as$",
          "explanation": "Adding $u^2$ to both sides completes the derivation of the time-free equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Now apply it: list the data.",
          "workingLatex": "$u = 6, \\ v = 14, \\ a = 2$",
          "explanation": "The particle's start speed, end speed and acceleration are given; the distance is what we want.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Make $s$ the subject.",
          "workingLatex": "$s = \\dfrac{v^2 - u^2}{2a}$",
          "explanation": "Rearranging the derived equation isolates the distance for direct substitution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the values.",
          "workingLatex": "$s = \\dfrac{14^2 - 6^2}{2(2)}$",
          "explanation": "Insert the two speeds and the acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the squares.",
          "workingLatex": "$= \\dfrac{196 - 36}{4} = \\dfrac{160}{4}$",
          "explanation": "Work out the numerator and denominator separately before dividing.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the distance.",
          "workingLatex": "$s = 40\\ \\text{m}$",
          "explanation": "The particle covers 40 m while speeding up from 6 to 14 m/s.",
          "diagram": null
        }
      ],
      "finalAnswer": "Eliminating $t$ gives $v^2 = u^2 + 2as$; applying it, the distance travelled is $s = 40\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["suvat", "equal-intervals", "simultaneous-equations", "acceleration", "kinematics"],
    "questionText": "A car moving in a straight line with constant acceleration covers $40\\ \\text{m}$ during one interval of $4\\ \\text{s}$ and $60\\ \\text{m}$ during the immediately following interval of $4\\ \\text{s}$. Find the acceleration of the car and its speed at the start of the first interval.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define the unknowns.",
          "workingLatex": "$u = \\text{speed at the start of the first interval}, \\quad a = \\text{acceleration}.$",
          "explanation": "Taking the start of the first interval as our reference moment lets us write both intervals from a single starting speed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the first interval with the displacement equation.",
          "workingLatex": "$s = ut + \\tfrac12 a t^2: \\quad 40 = 4u + \\tfrac12 a (4)^2$",
          "explanation": "Over the first 4 s the car covers 40 m, starting at speed $u$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the first equation.",
          "workingLatex": "$40 = 4u + 8a$",
          "explanation": "Here $\\tfrac12 a(16) = 8a$, giving a tidy linear relation between $u$ and $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the full 8 s for the second equation.",
          "workingLatex": "$40 + 60 = 100 = 8u + \\tfrac12 a (8)^2 = 8u + 32a$",
          "explanation": "The second interval follows straight on, so the whole 0 to 8 s covers 100 m; writing it from the same start avoids introducing a new unknown speed.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the pair of simultaneous equations.",
          "workingLatex": "$4u + 8a = 40 \\quad\\text{and}\\quad 8u + 32a = 100$",
          "explanation": "Two equations in two unknowns can now be solved together.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify each equation.",
          "workingLatex": "$u + 2a = 10 \\quad\\text{and}\\quad 2u + 8a = 25$",
          "explanation": "Dividing the first by 4 and the second by 4 makes the numbers smaller and easier to combine.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make $u$ the subject of the first.",
          "workingLatex": "$u = 10 - 2a$",
          "explanation": "Expressing $u$ in terms of $a$ prepares it for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the second equation.",
          "workingLatex": "$2(10 - 2a) + 8a = 25$",
          "explanation": "Replacing $u$ leaves a single equation in $a$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Expand.",
          "workingLatex": "$20 - 4a + 8a = 25$",
          "explanation": "Multiply out the bracket ready to collect the $a$ terms.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve for the acceleration.",
          "workingLatex": "$4a = 5 \\Rightarrow a = 1.25\\ \\text{m s}^{-2}$",
          "explanation": "Collecting terms gives $20 + 4a = 25$, so the acceleration is 1.25 m/s squared.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Back-substitute for the starting speed.",
          "workingLatex": "$u = 10 - 2(1.25) = 7.5\\ \\text{m s}^{-1}$",
          "explanation": "Putting $a$ back into $u = 10 - 2a$ gives the speed at the start of the first interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check against the first interval.",
          "workingLatex": "$4(7.5) + 8(1.25) = 30 + 10 = 40\\ \\text{m} \\ \\checkmark$",
          "explanation": "The values reproduce the given 40 m, confirming they are correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm with the equal-interval shortcut.",
          "workingLatex": "$\\text{difference} = aT^2 = 1.25(4)^2 = 20 = 60 - 40 \\ \\checkmark$",
          "explanation": "For equal successive time intervals under constant acceleration the distances grow by exactly $aT^2$ each time, which matches the 20 m difference here.",
          "diagram": null
        }
      ],
      "finalAnswer": "Acceleration $= 1.25\\ \\text{m s}^{-2}$; speed at the start of the first interval $= 7.5\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["vertical-motion", "gravity", "symmetry", "maximum-height", "suvat"],
    "questionText": "A stone is projected vertically upwards from ground level. It is at a height of $14.7\\ \\text{m}$ at both $t = 1\\ \\text{s}$ and $t = 3\\ \\text{s}$ after projection. Taking $g = 9.8\\ \\text{m s}^{-2}$, find the initial speed of the stone and the maximum height it reaches.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A vertical parabolic path drawn against a height axis. The stone leaves the ground at the bottom with an upward arrow labelled 'u = ?'. A horizontal dashed line at height 14.7 m cuts the path twice: once on the way up (labelled 't = 1 s') and once on the way down (labelled 't = 3 s'). The apex of the parabola sits above this line at the midpoint time, labelled 'apex at t = 2 s, max height = ?'.",
      "alt": "Stone thrown straight up passing height 14.7 m at t = 1 s going up and t = 3 s coming down, with the apex halfway between at t = 2 s."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the motion with up positive.",
          "workingLatex": "$h = ut - 4.9t^2, \\quad g = 9.8\\ \\text{m s}^{-2}$",
          "explanation": "Launched from ground level with up positive, the height follows $s = ut + \\tfrac12 at^2$ with $a = -9.8$, so $\\tfrac12 a = -4.9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the height at each given time.",
          "workingLatex": "$h(1) = u - 4.9, \\qquad h(3) = 3u - 44.1$",
          "explanation": "Substituting $t = 1$ and $t = 3$ gives expressions for the height at the two moments the stone is level.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the height at $t = 1$.",
          "workingLatex": "$u - 4.9 = 14.7$",
          "explanation": "At $t = 1$ the stone is at 14.7 m, giving an equation for $u$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for the initial speed.",
          "workingLatex": "$u = 14.7 + 4.9 = 19.6\\ \\text{m s}^{-1}$",
          "explanation": "Rearranging gives the launch speed directly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Verify with the height at $t = 3$.",
          "workingLatex": "$h(3) = 3(19.6) - 44.1 = 58.8 - 44.1 = 14.7\\ \\text{m} \\ \\checkmark$",
          "explanation": "The same speed reproduces 14.7 m at $t = 3$ on the way down, so the two given facts are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain why two times share a height: symmetry.",
          "workingLatex": "$t_{\\text{apex}} = \\dfrac{1 + 3}{2} = 2\\ \\text{s}$",
          "explanation": "The up-and-down path is symmetric about the apex, so the two instants at equal height sit an equal time either side of the top; their average is the time of maximum height.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cross-check the speed from the apex time.",
          "workingLatex": "$u = g\\, t_{\\text{apex}} = 9.8 \\times 2 = 19.6\\ \\text{m s}^{-1} \\ \\checkmark$",
          "explanation": "Velocity is zero at the apex, and it fell from $u$ at a rate $g$, so $u = g \\times (\\text{time to the top})$; this confirms 19.6 m/s.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the maximum height using zero speed at the top.",
          "workingLatex": "$v^2 = u^2 - 2gH_{\\max}, \\quad v = 0$",
          "explanation": "At the highest point the stone is momentarily at rest, so its speed is zero there; the time-free equation then gives the height.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the values.",
          "workingLatex": "$0 = 19.6^2 - 2(9.8)H_{\\max}$",
          "explanation": "Insert $u = 19.6$ and $g = 9.8$ with $v = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange for the maximum height.",
          "workingLatex": "$H_{\\max} = \\dfrac{19.6^2}{2(9.8)} = \\dfrac{384.16}{19.6}$",
          "explanation": "Making $H_{\\max}$ the subject leaves a single division.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the maximum height.",
          "workingLatex": "$H_{\\max} = 19.6\\ \\text{m}$",
          "explanation": "The stone rises 19.6 m at the top of its flight.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the apex height directly.",
          "workingLatex": "$h(2) = 19.6(2) - 4.9(2)^2 = 39.2 - 19.6 = 19.6\\ \\text{m} \\ \\checkmark$",
          "explanation": "Substituting $t = 2$ into the height formula reproduces 19.6 m, confirming the apex value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense-check against the given height.",
          "workingLatex": "$H_{\\max} = 19.6\\ \\text{m} > 14.7\\ \\text{m}$",
          "explanation": "The maximum exceeds the 14.7 m crossing height, exactly as it must if the stone is above 14.7 m for the interval between $t = 1$ and $t = 3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Initial speed $= 19.6\\ \\text{m s}^{-1}$; maximum height $= 19.6\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.constant-acceleration.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Constant acceleration",
    "subtopicId": "al.y1.mech.constant-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["suvat", "velocity-time-graph", "multi-stage", "lift-motion", "kinematics"],
    "questionText": "A lift starts from rest and rises. It accelerates uniformly at $1.5\\ \\text{m s}^{-2}$ for $4\\ \\text{s}$, then travels at constant speed for $6\\ \\text{s}$, and finally decelerates uniformly at $2\\ \\text{m s}^{-2}$ until it comes to rest. Find the maximum speed reached, the total distance risen, and the total time taken.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A velocity-time graph for the lift. The horizontal axis is time (s), the vertical axis is upward velocity (m/s). The graph rises as a straight line from the origin over the first 4 s to a peak, runs horizontally at that peak speed for the next 6 s, then falls as a straight steeper line back to zero. The three regions are labelled 'accelerate a = 1.5', 'constant speed', and 'decelerate a = 2'. The area under the graph represents the total distance risen.",
      "alt": "Trapezium velocity-time graph for a lift: 4 s acceleration up to peak speed, 6 s at constant speed, then deceleration to rest."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the three phases.",
          "workingLatex": "$\\text{Phase 1: accelerate} \\ \\to\\ \\text{Phase 2: constant speed} \\ \\to\\ \\text{Phase 3: decelerate}$",
          "explanation": "Each phase has its own constant acceleration, so we treat them one at a time and add the results.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the phase 1 data.",
          "workingLatex": "$\\text{Phase 1: } u = 0, \\ a = 1.5, \\ t = 4$",
          "explanation": "The lift starts from rest and speeds up for 4 s; the speed it reaches will be the constant cruising speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the maximum (cruising) speed.",
          "workingLatex": "$v = u + at = 0 + 1.5(4) = 6\\ \\text{m s}^{-1}$",
          "explanation": "Gaining 1.5 m/s each second for 4 s brings the speed to 6 m/s, which is the maximum reached.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the phase 1 distance.",
          "workingLatex": "$d_1 = \\tfrac12(u + v)t = \\tfrac12(0 + 6)(4) = 12\\ \\text{m}$",
          "explanation": "The average speed over the acceleration is the mean of 0 and 6, multiplied by the 4 s (the rising triangle's area).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Handle phase 2 at constant speed.",
          "workingLatex": "$\\text{Phase 2: } v = 6\\ \\text{m s}^{-1} \\text{ for } 6\\ \\text{s}$",
          "explanation": "With no acceleration, the lift simply travels at 6 m/s for 6 s.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the phase 2 distance.",
          "workingLatex": "$d_2 = 6 \\times 6 = 36\\ \\text{m}$",
          "explanation": "At constant speed, distance is speed times time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "List the phase 3 data.",
          "workingLatex": "$\\text{Phase 3: } u = 6, \\ v = 0, \\ a = -2$",
          "explanation": "The lift decelerates from 6 m/s to rest; the deceleration is a negative acceleration.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the phase 3 time.",
          "workingLatex": "$0 = 6 - 2t_3 \\Rightarrow t_3 = 3\\ \\text{s}$",
          "explanation": "Shedding 6 m/s of speed at 2 m/s per second takes 3 seconds.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the phase 3 distance.",
          "workingLatex": "$d_3 = \\tfrac12(6 + 0)(3) = 9\\ \\text{m}$",
          "explanation": "Average speed of 3 m/s over 3 s gives the braking distance (the falling triangle's area).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add the three distances.",
          "workingLatex": "$D = d_1 + d_2 + d_3 = 12 + 36 + 9$",
          "explanation": "The total rise is the sum of the distances covered in the three phases.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the total distance.",
          "workingLatex": "$D = 57\\ \\text{m}$",
          "explanation": "The lift rises a total of 57 m.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the three phase times.",
          "workingLatex": "$T = 4 + 6 + t_3 = 4 + 6 + 3$",
          "explanation": "The total time is the sum of the accelerating, cruising and decelerating times.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Evaluate the total time.",
          "workingLatex": "$T = 13\\ \\text{s}$",
          "explanation": "The whole journey from rest to rest takes 13 seconds.",
          "diagram": null
        }
      ],
      "finalAnswer": "Maximum speed $= 6\\ \\text{m s}^{-1}$; total distance risen $= 57\\ \\text{m}$; total time $= 13\\ \\text{s}$."
    }
  },
{
  "id": "al.y1.mech.constant-acceleration.q061",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["vertical-motion", "gravity", "suvat", "quadratic", "time-interval"],
  "questionText": "A ball is thrown vertically upwards from the ground with speed $29.4\\ \\text{m s}^{-1}$ (take $g = 9.8\\ \\text{m s}^{-2}$). Find the total length of time for which the ball is at or above a height of $39.2\\ \\text{m}$.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A vertical line represents the ball's path. The ground is at the bottom (height 0). A horizontal dashed line marks the level 39.2 m above the ground. An upward arrow labelled 29.4 m/s shows the launch, and the positive direction is marked upwards. The ball crosses the 39.2 m level once going up and once coming down.",
    "alt": "Vertical path with a dashed line at 39.2 m and the ball launched upward at 29.4 m/s from the ground."
  },
  "workedSolution": {
    "steps": [
        {
                "stepNumber": 1,
                "description": "Model the situation and choose a positive direction",
                "workingLatex": "\\text{Ball} = \\text{particle, no air resistance, } g = 9.8\\ \\text{m s}^{-2}",
                "explanation": "Treating the ball as a particle in free flight means gravity is the only force, so the acceleration is constant and the suvat equations apply. Choosing upwards as positive from the start keeps every sign consistent throughout.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "List the known quantities with the origin at the ground",
                "workingLatex": "u = 29.4,\\quad a = -9.8,\\quad s = 39.2",
                "explanation": "Measuring displacement from the launch point makes $s$ the height above the ground. The acceleration is negative because gravity acts downwards while we have chosen up as positive.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "Choose the suvat equation linking s, u, a and t",
                "workingLatex": "s = ut + \\tfrac12 a t^2",
                "explanation": "We want the times at which the height is 39.2 m, so we need displacement as a function of time — the equation that uses only what we know plus the unknown $t$.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Substitute the known values",
                "workingLatex": "39.2 = 29.4t - \\tfrac12(9.8)t^2 = 29.4t - 4.9t^2",
                "explanation": "Putting the numbers in turns the general formula into an equation in the single unknown $t$. Half of 9.8 is 4.9.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Rearrange into standard quadratic form",
                "workingLatex": "4.9t^2 - 29.4t + 39.2 = 0",
                "explanation": "Collecting all terms on one side gives a quadratic, which we expect: the ball passes any height below its maximum at two separate instants.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Simplify by dividing through by 4.9",
                "workingLatex": "t^2 - 6t + 8 = 0",
                "explanation": "Dividing by the common factor 4.9 leaves whole-number coefficients that are far easier to factorise, without changing the roots.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Factorise the quadratic",
                "workingLatex": "(t - 2)(t - 4) = 0",
                "explanation": "We look for two numbers that multiply to 8 and add to 6; these are 2 and 4.",
                "diagram": null
        },
        {
                "stepNumber": 8,
                "description": "State the two solutions",
                "workingLatex": "t = 2\\ \\text{s} \\quad \\text{or} \\quad t = 4\\ \\text{s}",
                "explanation": "Both roots are positive and therefore physically valid: they are the two moments at which the ball is exactly at 39.2 m.",
                "diagram": null
        },
        {
                "stepNumber": 9,
                "description": "Confirm which crossing is up and which is down",
                "workingLatex": "v = u + at: \\; v(2) = 29.4 - 19.6 = 9.8, \\; v(4) = 29.4 - 39.2 = -9.8",
                "explanation": "At $t=2$ the velocity is $+9.8\\ \\text{m s}^{-1}$ (still rising); at $t=4$ it is $-9.8\\ \\text{m s}^{-1}$ (now falling). So the ball enters the region on the way up and leaves it on the way down.",
                "diagram": null
        },
        {
                "stepNumber": 10,
                "description": "Check the ball actually rises above 39.2 m",
                "workingLatex": "H_{\\max} = \\frac{u^2}{2g} = \\frac{29.4^2}{19.6} = 44.1\\ \\text{m} > 39.2\\ \\text{m}",
                "explanation": "If the peak were below 39.2 m the quadratic would have no real roots, so confirming the maximum is higher reassures us the ball genuinely spends a real interval above the level.",
                "diagram": null
        },
        {
                "stepNumber": 11,
                "description": "Interpret the two times",
                "workingLatex": "t = 2\\ \\text{s (rising)}, \\quad t = 4\\ \\text{s (falling)}",
                "explanation": "The earlier time is when the ball first reaches 39.2 m going up; the later time is when it returns to that level coming down. Between them it is continuously at or above the height.",
                "diagram": null
        },
        {
                "stepNumber": 12,
                "description": "Use the symmetry of projectile motion as a check",
                "workingLatex": "t_{\\text{apex}} = \\frac{u}{g} = \\frac{29.4}{9.8} = 3\\ \\text{s}",
                "explanation": "The highest point is reached at $t = 3\\ \\text{s}$, and the two crossing times 2 and 4 are symmetric about it. This up–down symmetry is exactly what free flight under gravity should give.",
                "diagram": null
        },
        {
                "stepNumber": 13,
                "description": "Compute the length of the interval",
                "workingLatex": "\\Delta t = 4 - 2 = 2\\ \\text{s}",
                "explanation": "The total time at or above 39.2 m is the gap between entering that region and leaving it — the difference of the two roots.",
                "diagram": null
        },
        {
                "stepNumber": 14,
                "description": "State the final answer",
                "workingLatex": "\\boxed{2\\ \\text{s}}",
                "explanation": "The ball is at or above 39.2 m for 2 s, an interval symmetric about the highest point, which matches the symmetry of the motion and confirms the result is sensible.",
                "diagram": null
        }
],
    "finalAnswer": "The ball is at or above $39.2\\ \\text{m}$ for a total time of $2\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q062",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["vertical-motion", "gravity", "two-bodies", "meeting-point", "suvat"],
  "questionText": "A stone is dropped from rest from the top of a $100\\ \\text{m}$ tower at the same instant that a ball is thrown vertically upwards from the base with speed $25\\ \\text{m s}^{-1}$ (take $g = 9.8\\ \\text{m s}^{-2}$). Find the time at which they pass each other and their height above the base at that moment.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A vertical tower of height 100 m. At the top, a stone is released from rest (downward arrow, u = 0). At the base, a ball is thrown upward at 25 m/s (upward arrow). The positive direction is marked upwards, with the origin at the base. Both objects move along the same vertical line and meet somewhere between the base and the top.",
    "alt": "A 100 m tower with a stone dropped from the top and a ball thrown up from the base, meeting partway up."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up a single frame of reference for both objects.",
        "workingLatex": "\\text{Up positive, origin at the base}, \\ g = 9.8\\ \\text{m s}^{-2}",
        "explanation": "Two bodies can only be compared if their positions are measured from the same origin in the same direction. Placing the origin at the base with up positive lets us write both heights on one common scale.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the stone's data.",
        "workingLatex": "\\text{Stone: } s_0 = 100,\\ u = 0,\\ a = -9.8",
        "explanation": "The stone begins at rest at the top, so its initial velocity is zero and it starts 100 m above the origin. Gravity pulls it downward, hence the negative acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the stone's height as a function of time.",
        "workingLatex": "y_{\\text{stone}} = 100 + 0\\cdot t - \\tfrac12(9.8)t^2 = 100 - 4.9t^2",
        "explanation": "Adding the starting height of 100 to the usual displacement formula gives the stone's actual position above the base at any time, which is what we need to compare with the ball.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "List the ball's data.",
        "workingLatex": "\\text{Ball: } s_0 = 0,\\ u = 25,\\ a = -9.8",
        "explanation": "The ball starts at the origin (the base) moving upward at 25 m/s. It feels the same gravitational acceleration as the stone, since both are in free flight.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the ball's height as a function of time.",
        "workingLatex": "y_{\\text{ball}} = 25t - \\tfrac12(9.8)t^2 = 25t - 4.9t^2",
        "explanation": "Starting from the origin, its height is just the standard displacement formula. Both objects now have a position expression on the same axis, ready to be equated.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the meeting condition.",
        "workingLatex": "y_{\\text{stone}} = y_{\\text{ball}}",
        "explanation": "They pass each other exactly when they occupy the same height at the same time, so setting the two position expressions equal captures the instant of meeting.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Form the equation.",
        "workingLatex": "100 - 4.9t^2 = 25t - 4.9t^2",
        "explanation": "Substituting both expressions gives one equation in the single unknown t, which we can now solve.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Cancel the gravity terms.",
        "workingLatex": "100 = 25t",
        "explanation": "Because both objects fall under the same gravity, the $-4.9t^2$ terms are identical and cancel. Physically, the gap between them closes at the constant relative speed of 25 m/s, which is why the equation becomes linear.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Solve for the time.",
        "workingLatex": "t = \\frac{100}{25} = 4\\ \\text{s}",
        "explanation": "The initial 100 m separation closes at 25 m/s, so they meet after 4 s. This clean result confirms the cancellation was correct.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Find the meeting height using the ball's equation.",
        "workingLatex": "y = 25(4) - 4.9(4)^2 = 100 - 78.4 = 21.6\\ \\text{m}",
        "explanation": "Substituting t = 4 into either position formula gives the common height. Using the ball's equation gives 21.6 m above the base.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Cross-check with the stone's equation.",
        "workingLatex": "y = 100 - 4.9(4)^2 = 100 - 78.4 = 21.6\\ \\text{m}",
        "explanation": "The stone's formula gives the same height, which is a strong consistency check that both the time and the height are correct.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Confirm both objects are still in flight at t = 4 s.",
        "workingLatex": "\\text{Stone lands at } t=\\sqrt{100/4.9}\\approx4.52\\ \\text{s}; \\ \\text{ball at } t=25/4.9\\approx5.10\\ \\text{s}",
        "explanation": "Both landing times exceed 4 s, so neither has reached the ground when they meet. This confirms the meeting at 21.6 m is genuinely part of the motion and not an extrapolation.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final answer.",
        "workingLatex": "\\boxed{t = 4\\ \\text{s}, \\quad h = 21.6\\ \\text{m above the base}}",
        "explanation": "The two objects pass each other 4 s after release at a height of 21.6 m, comfortably within the tower and consistent with both position equations.",
        "diagram": null
      }
    ],
    "finalAnswer": "They pass each other after $4\\ \\text{s}$ at a height of $21.6\\ \\text{m}$ above the base."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q063",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "tags": ["two-bodies", "pursuit", "suvat", "catch-up", "modelling"],
  "questionText": "A speeding car passes a stationary police car travelling at a constant $30\\ \\text{m s}^{-1}$. At that instant the police car sets off from rest with constant acceleration $3\\ \\text{m s}^{-2}$. Find the time taken for the police car to catch the speeder and the distance travelled, and determine the police car's speed at that moment, commenting on its size.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A straight horizontal road. At the starting line both cars are level: the speeding car moving right at a constant 30 m/s, and the police car starting from rest at the same point and accelerating right at 3 m/s^2. The positive direction is marked to the right, origin at the common starting line. The police car falls behind at first, then catches up.",
    "alt": "Two cars starting level on a road: a speeder at constant 30 m/s and a police car accelerating from rest at 3 m/s^2."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up a common origin and direction.",
        "workingLatex": "\\text{Origin at the passing point, positive in the direction of travel}",
        "explanation": "Since both cars start from the same point at the same instant, measuring their distances from that shared point along the road lets us compare their positions directly.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the speeder's distance.",
        "workingLatex": "s_{\\text{speeder}} = 30t",
        "explanation": "The speeder moves at a constant velocity, so distance equals speed multiplied by time. There is no acceleration term because its velocity never changes.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the police car's distance.",
        "workingLatex": "s_{\\text{police}} = ut + \\tfrac12 a t^2 = 0 + \\tfrac12(3)t^2 = 1.5t^2",
        "explanation": "The police car starts from rest and accelerates uniformly, so its distance follows the suvat formula with u = 0. The distance grows with the square of time, which is why it can eventually overhaul a faster-but-constant car.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the catch-up condition.",
        "workingLatex": "s_{\\text{police}} = s_{\\text{speeder}}",
        "explanation": "The police car catches the speeder exactly when they have covered the same distance from the common start, so equating the two expressions locates that instant.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Form the equation.",
        "workingLatex": "1.5t^2 = 30t",
        "explanation": "Substituting both distances gives a single equation in t. It is a quadratic, reflecting that the positions coincide at two times: the start and the actual catch-up.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rearrange and factorise.",
        "workingLatex": "1.5t^2 - 30t = 0 \\ \\Rightarrow \\ 1.5t(t - 20) = 0",
        "explanation": "Taking out the common factor of t exposes both roots cleanly, avoiding the need for the quadratic formula.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Solve and reject the trivial root.",
        "workingLatex": "t = 0 \\ \\text{(start)} \\quad \\text{or} \\quad t = 20\\ \\text{s}",
        "explanation": "The root t = 0 just says they were level at the beginning, which we already knew. The meaningful solution is t = 20 s, the moment the police car draws level again.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the distance travelled.",
        "workingLatex": "s = 30(20) = 600\\ \\text{m}",
        "explanation": "Using the speeder's simple distance formula at t = 20 s gives the distance from the start at which the catch-up occurs. Both cars have covered 600 m by then.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Verify with the police car's distance.",
        "workingLatex": "s = 1.5(20)^2 = 1.5(400) = 600\\ \\text{m}",
        "explanation": "The police car's formula gives the same 600 m, confirming both the time and the distance are consistent.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Find the police car's speed at catch-up.",
        "workingLatex": "v = u + at = 0 + 3(20) = 60\\ \\text{m s}^{-1}",
        "explanation": "Using v = u + at with the acceleration acting over the full 20 s gives the police car's speed at the moment it catches the speeder.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Explain why the speed is exactly double.",
        "workingLatex": "\\bar{v}_{\\text{police}} = \\tfrac{0 + v}{2} = 30 \\ \\Rightarrow \\ v = 60\\ \\text{m s}^{-1}",
        "explanation": "To cover the same distance in the same time, the police car's average speed must equal the speeder's constant 30 m/s. Starting from rest with uniform acceleration, its average is half its final speed, so the final speed must be twice 30, i.e. 60 m/s.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Comment on the realism of the answer.",
        "workingLatex": "60\\ \\text{m s}^{-1} \\approx 216\\ \\text{km h}^{-1}",
        "explanation": "A speed of 60 m/s is about 216 km/h (roughly 134 mph), which is unrealistically high for a real chase. This shows the constant-acceleration model, while mathematically neat, overstates the achievable speed and would break down in practice.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final answer.",
        "workingLatex": "\\boxed{t = 20\\ \\text{s}, \\ s = 600\\ \\text{m}, \\ v = 60\\ \\text{m s}^{-1}}",
        "explanation": "The police car catches the speeder after 20 s and 600 m, travelling at 60 m/s, twice the speeder's speed, a value that flags the model's limitations.",
        "diagram": null
      }
    ],
    "finalAnswer": "The police car catches the speeder after $20\\ \\text{s}$, having travelled $600\\ \\text{m}$, at a speed of $60\\ \\text{m s}^{-1}$ (twice the speeder's speed). This is about $216\\ \\text{km h}^{-1}$, unrealistically fast, showing the constant-acceleration model overestimates the true speed."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q064",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["distance-in-nth-second", "suvat", "simultaneous-equations", "uniform-acceleration"],
  "questionText": "A particle moves in a straight line with initial velocity $u$ and uniform acceleration $a$. It travels $7\\ \\text{m}$ during the 2nd second of its motion and $11\\ \\text{m}$ during the 4th second. Find the values of $u$ and $a$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the phrase \"distance during the nth second\".",
        "workingLatex": "d_n = s(n) - s(n-1)",
        "explanation": "The distance travelled during the nth second is the total distance up to the end of that second minus the total up to its start. This subtraction converts a cumulative displacement into the distance in a single one-second window.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the displacement formula.",
        "workingLatex": "s(t) = ut + \\tfrac12 a t^2",
        "explanation": "With constant acceleration, the total displacement after time t is given by this standard suvat equation. We will evaluate it at whole-number times to build the required differences.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Derive a general formula for the nth-second distance.",
        "workingLatex": "d_n = \\left[un + \\tfrac12 a n^2\\right] - \\left[u(n-1) + \\tfrac12 a (n-1)^2\\right]",
        "explanation": "Substituting t = n and t = n − 1 into the displacement formula and subtracting gives the distance covered in that particular second, purely in terms of u, a and n.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the general formula.",
        "workingLatex": "d_n = u + \\tfrac12 a(2n - 1)",
        "explanation": "Expanding and collecting terms leaves a compact expression. It shows the distance in each successive second increases by a fixed amount a, which is the hallmark of uniform acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Apply the formula to the 2nd second.",
        "workingLatex": "d_2 = u + \\tfrac12 a(3) = u + 1.5a = 7",
        "explanation": "Setting n = 2 and equating to the given 7 m produces our first equation relating u and a.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Apply the formula to the 4th second.",
        "workingLatex": "d_4 = u + \\tfrac12 a(7) = u + 3.5a = 11",
        "explanation": "Setting n = 4 and equating to 11 m gives the second equation. We now have two equations in the two unknowns u and a.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Eliminate u by subtracting the equations.",
        "workingLatex": "(u + 3.5a) - (u + 1.5a) = 11 - 7",
        "explanation": "Subtracting removes u because it appears identically in both equations, leaving a single equation in a alone. This is the fastest route to the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Solve for the acceleration.",
        "workingLatex": "2a = 4 \\ \\Rightarrow \\ a = 2\\ \\text{m s}^{-2}",
        "explanation": "The gap of 4 m between the two seconds is spread over the interval, giving the acceleration directly. This matches the idea that the per-second distance grows by a each second.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute back to find u.",
        "workingLatex": "u + 1.5(2) = 7 \\ \\Rightarrow \\ u + 3 = 7",
        "explanation": "Putting a = 2 into the first equation leaves a simple linear equation for the initial velocity.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Solve for u.",
        "workingLatex": "u = 4\\ \\text{m s}^{-1}",
        "explanation": "Rearranging gives the initial velocity. Both unknowns are now determined.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Verify the 2nd-second distance.",
        "workingLatex": "d_2 = 4 + 1.5(2) = 4 + 3 = 7\\ \\text{m}\\ \\checkmark",
        "explanation": "Checking the first given condition confirms the values reproduce the stated 7 m.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Verify the 4th-second distance.",
        "workingLatex": "d_4 = 4 + 3.5(2) = 4 + 7 = 11\\ \\text{m}\\ \\checkmark",
        "explanation": "The fourth-second distance also matches, so both conditions are satisfied and the solution is confirmed.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final answer.",
        "workingLatex": "\\boxed{u = 4\\ \\text{m s}^{-1}, \\quad a = 2\\ \\text{m s}^{-2}}",
        "explanation": "The particle starts at 4 m/s and accelerates at 2 m/s^2, which reproduces both measured per-second distances exactly.",
        "diagram": null
      }
    ],
    "finalAnswer": "$u = 4\\ \\text{m s}^{-1}$ and $a = 2\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q065",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["vertical-motion", "gravity", "last-second", "free-fall", "suvat"],
  "questionText": "A ball is dropped from rest from a height $H$ above the ground (take $g = 9.8\\ \\text{m s}^{-2}$). During the last second of its fall it travels $24.5\\ \\text{m}$. Find the total time of the fall and the height $H$.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A vertical drop of height H. The ball starts at rest at the top. A horizontal dashed line marks the position of the ball one second before it lands; the region between this line and the ground is labelled 24.5 m (the distance covered in the final second). Downward is marked as the positive direction, origin at the release point.",
    "alt": "A ball falling a height H, with the final 24.5 m of the fall (the last second) highlighted just above the ground."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Model the fall and choose a direction.",
        "workingLatex": "\\text{Down positive}, \\ u = 0, \\ a = 9.8\\ \\text{m s}^{-2}",
        "explanation": "The ball is released from rest, so its initial velocity is zero. Taking downward as positive makes both the acceleration and the displacements positive, keeping the arithmetic simple.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the total distance fallen in time T.",
        "workingLatex": "H = ut + \\tfrac12 a T^2 = \\tfrac12(9.8)T^2 = 4.9T^2",
        "explanation": "Since u = 0, the whole displacement comes from the acceleration term. This expresses the full drop height in terms of the unknown total time T.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Express the idea of \"distance in the last second\".",
        "workingLatex": "d_{\\text{last}} = s(T) - s(T-1)",
        "explanation": "The distance covered in the final second is the total fall minus the fall completed one second earlier. Subtracting the displacement at time T − 1 isolates just that last one-second stretch.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the fall completed in (T − 1) seconds.",
        "workingLatex": "s(T-1) = 4.9(T-1)^2",
        "explanation": "Using the same displacement formula one second before landing gives how far the ball has already dropped by then, which we subtract from the total.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Form the last-second distance.",
        "workingLatex": "d_{\\text{last}} = 4.9T^2 - 4.9(T-1)^2",
        "explanation": "Substituting both displacements gives the distance in the final second entirely in terms of T. This is the quantity the question fixes at 24.5 m.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Factor out 4.9.",
        "workingLatex": "d_{\\text{last}} = 4.9\\left[T^2 - (T-1)^2\\right]",
        "explanation": "Pulling out the common factor prepares the bracket for the difference-of-squares simplification and keeps the algebra tidy.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the bracket.",
        "workingLatex": "T^2 - (T-1)^2 = T^2 - (T^2 - 2T + 1) = 2T - 1",
        "explanation": "Expanding the square and cancelling the $T^2$ terms leaves a simple linear expression, turning the whole equation from quadratic into linear.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Set up the equation.",
        "workingLatex": "4.9(2T - 1) = 24.5",
        "explanation": "Equating the simplified last-second distance to the given 24.5 m produces a straightforward linear equation for T.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Divide through by 4.9.",
        "workingLatex": "2T - 1 = \\frac{24.5}{4.9} = 5",
        "explanation": "Dividing by 4.9 clears the coefficient and gives a clean whole number on the right, making the final step easy.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Solve for the total time.",
        "workingLatex": "2T = 6 \\ \\Rightarrow \\ T = 3\\ \\text{s}",
        "explanation": "Rearranging gives the total time of the fall. Because the equation was linear, there is a single unambiguous positive solution.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Find the height H.",
        "workingLatex": "H = 4.9(3)^2 = 4.9 \\times 9 = 44.1\\ \\text{m}",
        "explanation": "Substituting T = 3 into the total-fall formula gives the drop height. This is the value of H that produces a 3-second fall.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Verify using the last second.",
        "workingLatex": "s(2) = 4.9(2)^2 = 19.6; \\quad H - s(2) = 44.1 - 19.6 = 24.5\\ \\text{m}\\ \\checkmark",
        "explanation": "Computing the fall in the first 2 seconds and subtracting from H reproduces the given 24.5 m, confirming both the time and the height are correct.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final answer.",
        "workingLatex": "\\boxed{T = 3\\ \\text{s}, \\quad H = 44.1\\ \\text{m}}",
        "explanation": "The ball falls for 3 s from a height of 44.1 m, and the final second of that fall covers exactly 24.5 m as required.",
        "diagram": null
      }
    ],
    "finalAnswer": "The fall lasts $3\\ \\text{s}$ and the height is $H = 44.1\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q066",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["three-phase-motion", "velocity-time-graph", "suvat", "journey", "optimisation"],
  "questionText": "A train travels between two stations $1800\\ \\text{m}$ apart, starting and finishing at rest. It accelerates at $0.4\\ \\text{m s}^{-2}$, may not exceed $24\\ \\text{m s}^{-1}$, and decelerates at $0.6\\ \\text{m s}^{-2}$. Find the minimum time for the journey, given that it consists of three phases: accelerating to the speed limit, cruising, and decelerating to rest.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A velocity-time graph with time on the horizontal axis and velocity on the vertical. The graph rises as a straight line from the origin (acceleration at 0.4 m/s^2) up to a horizontal plateau at 24 m/s (cruising), then falls as a straight line back to zero (deceleration at 0.6 m/s^2). The total area under the graph equals 1800 m.",
    "alt": "Trapezoidal velocity-time graph: acceleration up to 24 m/s, a cruise phase, then deceleration to rest."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Explain the minimum-time strategy.",
        "workingLatex": "\\text{Reach } 24\\ \\text{m s}^{-1} \\text{ as fast as possible, cruise, then brake}",
        "explanation": "To minimise the journey time the train should spend as long as possible at the highest permitted speed. That means accelerating hard to the limit, holding it, and only braking at the last possible moment, giving the classic trapezoidal speed-time profile.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Phase 1: time to reach the speed limit.",
        "workingLatex": "v = u + at \\ \\Rightarrow \\ 24 = 0 + 0.4\\,t_1 \\ \\Rightarrow \\ t_1 = 60\\ \\text{s}",
        "explanation": "Starting from rest and accelerating at 0.4 m/s^2, the time to reach 24 m/s follows from v = u + at. This is the length of the first phase.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Phase 1: distance covered while accelerating.",
        "workingLatex": "s_1 = \\frac{v^2 - u^2}{2a} = \\frac{24^2}{2(0.4)} = \\frac{576}{0.8} = 720\\ \\text{m}",
        "explanation": "Using $v^2 = u^2 + 2as$ avoids needing the time again and gives the distance used up in reaching the speed limit. This distance is unavailable for cruising.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Phase 3: time to decelerate to rest.",
        "workingLatex": "0 = 24 - 0.6\\,t_3 \\ \\Rightarrow \\ t_3 = \\frac{24}{0.6} = 40\\ \\text{s}",
        "explanation": "Braking from 24 m/s to rest at 0.6 m/s^2 takes this long. The deceleration is stronger than the acceleration, so the braking phase is shorter than the acceleration phase.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Phase 3: distance covered while decelerating.",
        "workingLatex": "s_3 = \\frac{v^2}{2a} = \\frac{24^2}{2(0.6)} = \\frac{576}{1.2} = 480\\ \\text{m}",
        "explanation": "The braking distance from 24 m/s follows the same $v^2 = u^2 + 2as$ relation. This distance is also used up and not available for cruising.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Add the accelerating and braking distances.",
        "workingLatex": "s_1 + s_3 = 720 + 480 = 1200\\ \\text{m}",
        "explanation": "Together the two variable-speed phases cover 1200 m. Whatever is left of the 1800 m must be covered at the cruising speed.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check a cruise phase is possible.",
        "workingLatex": "1200\\ \\text{m} < 1800\\ \\text{m} \\ \\checkmark",
        "explanation": "Because the accelerate-then-brake distance is less than the total, the train really does reach the speed limit with distance to spare, so a genuine cruise phase exists rather than a shorter triangular profile.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the cruising distance.",
        "workingLatex": "s_2 = 1800 - 1200 = 600\\ \\text{m}",
        "explanation": "Subtracting the accelerate and brake distances from the total leaves the distance to be travelled at the constant top speed.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Find the cruising time.",
        "workingLatex": "t_2 = \\frac{s_2}{v} = \\frac{600}{24} = 25\\ \\text{s}",
        "explanation": "At the constant 24 m/s, time is distance divided by speed. This is how long the train holds the limit.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Add the three phase times.",
        "workingLatex": "T = t_1 + t_2 + t_3 = 60 + 25 + 40",
        "explanation": "The total journey time is the sum of the three phase durations, since the phases happen one after another.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Compute the total time.",
        "workingLatex": "T = 125\\ \\text{s}",
        "explanation": "Adding gives the minimum journey time consistent with all the constraints.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Verify the total distance.",
        "workingLatex": "720 + 600 + 480 = 1800\\ \\text{m}\\ \\checkmark",
        "explanation": "Summing the three phase distances reproduces the required 1800 m, confirming the profile is consistent and the answer is correct.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final answer.",
        "workingLatex": "\\boxed{T = 125\\ \\text{s}}",
        "explanation": "The minimum journey time is 125 s, achieved by accelerating to the limit, cruising for 600 m, then braking to rest exactly at the second station.",
        "diagram": null
      }
    ],
    "finalAnswer": "The minimum time for the journey is $125\\ \\text{s}$ (60 s accelerating, 25 s cruising, 40 s decelerating)."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q067",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "numeric",
  "tags": ["vertical-motion", "gravity", "symmetry", "suvat", "greatest-height"],
  "questionText": "A stone is thrown vertically upwards from ground level. It passes a point $25\\ \\text{m}$ above the ground, and $2\\ \\text{s}$ later (on the way down) it passes the same point again (take $g = 9.8\\ \\text{m s}^{-2}$). Find the initial speed of the stone and the greatest height it reaches.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A vertical line showing the stone's path from the ground upward. A horizontal dashed line marks the point 25 m above the ground; the stone passes this level once going up and again 2 s later coming down. The apex (greatest height) sits above this line, midway in time between the two passes. Up is marked as positive, origin at the ground.",
    "alt": "A stone thrown up passing the 25 m level twice, 2 s apart, with the apex above that level."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the model and direction.",
        "workingLatex": "\\text{Up positive, origin at the ground}, \\ a = -9.8\\ \\text{m s}^{-2}",
        "explanation": "With the stone in free flight, gravity gives a constant downward acceleration. Choosing up as positive from the ground lets height and velocity share one consistent sign convention.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the height equation.",
        "workingLatex": "s = ut - 4.9t^2",
        "explanation": "The displacement above the ground follows the standard suvat formula with the unknown launch speed u. Setting this equal to 25 will give the times at the marked point.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Form the equation for the point 25 m up.",
        "workingLatex": "25 = ut - 4.9t^2 \\ \\Rightarrow \\ 4.9t^2 - ut + 25 = 0",
        "explanation": "The stone is at 25 m at two instants, so this quadratic in t has two roots: the upward pass and the downward pass.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use the symmetry of projectile motion.",
        "workingLatex": "t_{\\text{up}} \\text{ and } t_{\\text{down}} \\text{ are symmetric about the apex time}",
        "explanation": "Motion under gravity is symmetric in time about the highest point, so the two moments at the same height are equally spaced either side of the apex. The 2 s gap between them means each is 1 s from the apex.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the speed at the 25 m point using the descent from the apex.",
        "workingLatex": "v = g \\times 1 = 9.8 \\times 1 = 9.8\\ \\text{m s}^{-1}",
        "explanation": "Starting from rest at the apex and falling for 1 s, the stone reaches the 25 m level with this speed. By symmetry it also passed that level moving upward at 9.8 m/s a moment earlier.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the speed at 25 m on the way up.",
        "workingLatex": "v_{25} = 9.8\\ \\text{m s}^{-1} \\ \\text{(upward)}",
        "explanation": "The upward and downward speeds at any given height are equal in magnitude, so we can now treat 9.8 m/s as the speed at 25 m and work outward from there.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Find the extra height above 25 m to the apex.",
        "workingLatex": "h = \\frac{v_{25}^2}{2g} = \\frac{9.8^2}{2(9.8)} = \\frac{96.04}{19.6} = 4.9\\ \\text{m}",
        "explanation": "From the 25 m level the stone rises a further distance until its velocity drops to zero. Using $v^2 = u^2 - 2gh$ with final speed 0 gives this extra climb.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the greatest height.",
        "workingLatex": "H = 25 + 4.9 = 29.9\\ \\text{m}",
        "explanation": "Adding the extra climb to the 25 m level gives the maximum height above the ground reached by the stone.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Relate the launch speed to the speed at 25 m.",
        "workingLatex": "v_{25}^2 = u^2 - 2g(25)",
        "explanation": "Applying $v^2 = u^2 - 2gs$ between the ground and the 25 m point links the unknown launch speed u to the known speed there. This lets us solve for u.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute the known values.",
        "workingLatex": "9.8^2 = u^2 - 2(9.8)(25) \\ \\Rightarrow \\ 96.04 = u^2 - 490",
        "explanation": "Putting in the speed at 25 m and the numbers isolates a simple equation for $u^2$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Solve for the launch speed.",
        "workingLatex": "u^2 = 586.04 \\ \\Rightarrow \\ u = 24.2\\ \\text{m s}^{-1}\\ \\text{(3 s.f.)}",
        "explanation": "Taking the positive square root gives the initial upward speed, since the stone is launched upward.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Cross-check the greatest height from the launch speed.",
        "workingLatex": "H = \\frac{u^2}{2g} = \\frac{586.04}{19.6} = 29.9\\ \\text{m}\\ \\checkmark",
        "explanation": "Computing the maximum height directly from u gives the same 29.9 m as before, confirming both results are consistent.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final answer.",
        "workingLatex": "\\boxed{u \\approx 24.2\\ \\text{m s}^{-1}, \\quad H \\approx 29.9\\ \\text{m}}",
        "explanation": "The stone is launched at about 24.2 m/s and rises to a greatest height of about 29.9 m, with the 2 s gap arising from the symmetric 1 s either side of the apex.",
        "diagram": null
      }
    ],
    "finalAnswer": "The initial speed is $u \\approx 24.2\\ \\text{m s}^{-1}$ and the greatest height is $H \\approx 29.9\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q068",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["suvat", "simultaneous-equations", "uniform-acceleration", "consecutive-intervals"],
  "questionText": "A car moving with uniform acceleration is timed over two consecutive $50\\ \\text{m}$ stretches of road. It takes $5\\ \\text{s}$ for the first stretch and $3\\ \\text{s}$ for the second. Find the acceleration of the car and its speed as it entered the first stretch.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A straight horizontal road divided into two consecutive 50 m sections. The car enters the first section with unknown speed u, covering it in 5 s, then covers the second 50 m section in 3 s while accelerating uniformly. Marks at 0 m, 50 m and 100 m indicate the section boundaries; direction of travel is to the right.",
    "alt": "A road split into two 50 m stretches taking 5 s and 3 s, with a car accelerating uniformly through both."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Define the unknowns.",
        "workingLatex": "u = \\text{speed entering the first stretch}, \\quad a = \\text{acceleration}",
        "explanation": "The car speeds up uniformly, so its motion is fully described by the entry speed u and the constant acceleration a. These are the two quantities to find.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Set up a strategy using cumulative distances.",
        "workingLatex": "\\text{Use } s(5) = 50 \\text{ and } s(8) = 100",
        "explanation": "Rather than treating the second stretch separately, it is cleaner to work with total distance from the start. The first stretch ends at 5 s (50 m) and the second ends at 8 s (a further 50 m, so 100 m total).",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the equation for the first 5 seconds.",
        "workingLatex": "s(5) = 5u + \\tfrac12 a (5)^2 = 50",
        "explanation": "Applying $s = ut + \\tfrac12 at^2$ over the first 5 s and setting it to 50 m gives the first equation in u and a.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the first equation.",
        "workingLatex": "5u + 12.5a = 50 \\quad \\text{(1)}",
        "explanation": "Evaluating the acceleration term gives a tidy linear equation relating the two unknowns.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the equation for the first 8 seconds.",
        "workingLatex": "s(8) = 8u + \\tfrac12 a (8)^2 = 100",
        "explanation": "By the end of the second stretch the car has travelled 100 m in a total of 8 s, giving the second equation from the same displacement formula.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the second equation.",
        "workingLatex": "8u + 32a = 100 \\quad \\text{(2)}",
        "explanation": "Evaluating the acceleration term gives the second linear equation. We now have two equations in u and a to solve simultaneously.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Scale equation (1) to match the u-coefficient of (2).",
        "workingLatex": "1.6 \\times (1): \\ 8u + 20a = 80 \\quad \\text{(1')}",
        "explanation": "Multiplying the first equation by 1.6 makes its u-term equal to that in equation (2), so subtracting will eliminate u.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Subtract to eliminate u.",
        "workingLatex": "(8u + 32a) - (8u + 20a) = 100 - 80",
        "explanation": "Subtracting (1') from (2) removes u, leaving a single equation in a. This is the quickest route to the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Solve for the acceleration.",
        "workingLatex": "12a = 20 \\ \\Rightarrow \\ a = \\frac{5}{3} \\approx 1.67\\ \\text{m s}^{-2}",
        "explanation": "Dividing gives the acceleration as a fraction. The positive value confirms the car is speeding up, consistent with the second stretch taking less time.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Substitute back to find u.",
        "workingLatex": "5u + 12.5\\left(\\tfrac{5}{3}\\right) = 50 \\ \\Rightarrow \\ 5u = 50 - \\tfrac{62.5}{3} = \\tfrac{87.5}{3}",
        "explanation": "Putting the acceleration into equation (1) leaves a linear equation for u. Working with the exact fraction avoids rounding errors.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Solve for the entry speed.",
        "workingLatex": "u = \\frac{87.5}{15} = \\frac{35}{6} \\approx 5.83\\ \\text{m s}^{-1}",
        "explanation": "Dividing gives the speed at which the car entered the first stretch.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Verify both stretches.",
        "workingLatex": "s(5) = 5(5.83) + 12.5(1.67) = 50; \\ \\ s(8) - s(5) = 100 - 50 = 50\\ \\text{m}\\ \\checkmark",
        "explanation": "The values reproduce 50 m in the first 5 s and a further 50 m in the next 3 s, confirming both timed stretches are satisfied.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final answer.",
        "workingLatex": "\\boxed{a = \\tfrac{5}{3} \\approx 1.67\\ \\text{m s}^{-2}, \\quad u = \\tfrac{35}{6} \\approx 5.83\\ \\text{m s}^{-1}}",
        "explanation": "The car accelerates at about 1.67 m/s^2 and entered the first stretch at about 5.83 m/s, exactly matching the two recorded times.",
        "diagram": null
      }
    ],
    "finalAnswer": "The acceleration is $a = \\tfrac{5}{3} \\approx 1.67\\ \\text{m s}^{-2}$ and the entry speed is $u = \\tfrac{35}{6} \\approx 5.83\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q069",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "numeric",
  "tags": ["vertical-motion", "gravity", "quadratic-formula", "relative-launch", "suvat"],
  "questionText": "A stone is released from a balloon that is rising vertically at $5\\ \\text{m s}^{-1}$ when the balloon is $60\\ \\text{m}$ above the ground (take $g = 9.8\\ \\text{m s}^{-2}$). The stone therefore starts with an upward velocity of $5\\ \\text{m s}^{-1}$. Taking up as positive and the ground displacement as $-60\\ \\text{m}$, find the time for the stone to reach the ground and its speed on impact.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A balloon 60 m above the ground rising at 5 m/s. A stone is released from it and initially shares the balloon's upward velocity of 5 m/s (upward arrow). Up is marked as positive, with the origin at the release point, so the ground is at displacement -60 m. The stone rises briefly, then falls to the ground.",
    "alt": "A stone released from a rising balloon 60 m up, starting with 5 m/s upward, then falling to the ground."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the model and reference frame.",
        "workingLatex": "\\text{Up positive, origin at release point}, \\ a = -9.8\\ \\text{m s}^{-2}",
        "explanation": "Once released, the stone is in free flight, so gravity alone acts and the acceleration is a constant 9.8 m/s^2 downward. Taking up as positive with the origin at the release point makes the ground sit at displacement -60 m.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the stone's initial velocity.",
        "workingLatex": "u = +5\\ \\text{m s}^{-1}",
        "explanation": "At the instant of release the stone shares the balloon's motion, so it starts moving upward at 5 m/s. It is not simply dropped; this initial upward velocity is positive in our convention.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "List the known quantities.",
        "workingLatex": "u = 5, \\ a = -9.8, \\ s = -60",
        "explanation": "The ground is 60 m below the release point, so its displacement is -60 m. These three values, plus the unknown time, are what we substitute into a suvat equation.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Choose the displacement-time equation.",
        "workingLatex": "s = ut + \\tfrac12 a t^2",
        "explanation": "We want the time to reach the ground, so we need the equation connecting displacement and time. It uses exactly the quantities we know plus the unknown t.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the values.",
        "workingLatex": "-60 = 5t - 4.9t^2",
        "explanation": "Putting in u, a and the ground displacement gives an equation in t alone. The negative left-hand side reflects that the ground is below the starting point.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Rearrange into standard quadratic form.",
        "workingLatex": "4.9t^2 - 5t - 60 = 0",
        "explanation": "Collecting all terms on one side gives a quadratic in t. The negative constant term signals one positive and one negative root, of which only the positive one is physical.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Compute the discriminant.",
        "workingLatex": "\\Delta = (-5)^2 - 4(4.9)(-60) = 25 + 1176 = 1201",
        "explanation": "The discriminant is positive, so there are two real roots. Evaluating it first keeps the quadratic-formula step organised.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Apply the quadratic formula.",
        "workingLatex": "t = \\frac{5 \\pm \\sqrt{1201}}{2(4.9)} = \\frac{5 \\pm 34.66}{9.8}",
        "explanation": "Substituting into the quadratic formula gives the two candidate times. The square root of 1201 is about 34.66.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Select the physical root.",
        "workingLatex": "t = \\frac{5 + 34.66}{9.8} = \\frac{39.66}{9.8} \\approx 4.05\\ \\text{s}",
        "explanation": "The other root is negative, corresponding to a time before release, which cannot happen. We keep the positive root as the actual time to reach the ground.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Find the impact velocity using v = u + at.",
        "workingLatex": "v = 5 + (-9.8)(4.046) = 5 - 39.65 = -34.65\\ \\text{m s}^{-1}",
        "explanation": "Substituting the impact time into v = u + at gives the velocity as the stone lands. The negative sign shows it is moving downward, as expected.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Cross-check the speed with v^2 = u^2 - 2gs.",
        "workingLatex": "v^2 = 5^2 - 2(9.8)(-60) = 25 + 1176 = 1201 \\ \\Rightarrow \\ |v| = 34.7\\ \\text{m s}^{-1}",
        "explanation": "Using the time-free equation gives the same magnitude of speed independently, confirming the impact speed and reassuring us the quadratic was solved correctly.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Interpret the sign.",
        "workingLatex": "v = -34.7\\ \\text{m s}^{-1} \\Rightarrow \\text{speed } 34.7\\ \\text{m s}^{-1} \\text{ downward}",
        "explanation": "Speed is the magnitude of velocity, so the stone strikes the ground at about 34.7 m/s. The initial upward launch only briefly delays the fall.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final answer.",
        "workingLatex": "\\boxed{t \\approx 4.05\\ \\text{s}, \\quad \\text{speed} \\approx 34.7\\ \\text{m s}^{-1}}",
        "explanation": "The stone reaches the ground after about 4.05 s, hitting it at roughly 34.7 m/s, with both the time and the speed cross-checked by two independent methods.",
        "diagram": null
      }
    ],
    "finalAnswer": "The stone reaches the ground after about $4.05\\ \\text{s}$, striking it at a speed of about $34.7\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.constant-acceleration.q070",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Constant acceleration",
  "subtopicId": "al.y1.mech.constant-acceleration",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "numeric",
  "tags": ["two-phase-motion", "velocity-time-graph", "suvat", "simultaneous-equations", "area-under-graph"],
  "questionText": "A car accelerates uniformly from rest to a speed $V$, then immediately decelerates uniformly to rest. The whole journey covers $600\\ \\text{m}$ in $40\\ \\text{s}$. If the magnitude of the deceleration is twice the magnitude of the acceleration, find $V$, the acceleration, and the time spent accelerating.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A velocity-time graph forming a triangle. Velocity rises as a straight line from the origin to a peak V (acceleration phase over time t1), then falls as a steeper straight line back to zero (deceleration phase over time t2). The steeper downslope reflects the deceleration being twice the acceleration. The area of the triangle is 600 m and the base t1 + t2 is 40 s.",
    "alt": "Triangular velocity-time graph peaking at V, with a gentler rise and a steeper fall, total base 40 s and area 600 m."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Picture the motion as a velocity-time triangle.",
        "workingLatex": "\\text{Rise to } V \\text{ over } t_1, \\text{ fall to } 0 \\text{ over } t_2",
        "explanation": "The car speeds up then slows to rest, so its velocity-time graph is a triangle peaking at V. The area under the graph is the distance and the base is the total time, which will give us our equations.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Name the accelerations and the phase times.",
        "workingLatex": "\\text{accel} = a \\text{ over } t_1, \\quad \\text{decel} = 2a \\text{ over } t_2",
        "explanation": "Let the acceleration be a and, as stated, the deceleration be twice as large, 2a. Each acts over its own phase time, t1 for speeding up and t2 for slowing down.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Express the peak speed two ways.",
        "workingLatex": "V = a\\,t_1 = 2a\\,t_2",
        "explanation": "The peak speed is reached by accelerating from rest, and lost by decelerating to rest. Both expressions equal V, which links the two phase times.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Relate the phase times.",
        "workingLatex": "a\\,t_1 = 2a\\,t_2 \\ \\Rightarrow \\ t_1 = 2t_2",
        "explanation": "Cancelling a shows the acceleration phase lasts twice as long as the deceleration phase. This makes sense: a gentler deceleration... a stronger deceleration removes the speed faster, so it needs less time.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Use the total time.",
        "workingLatex": "t_1 + t_2 = 40",
        "explanation": "The two phases together make up the whole 40 s journey, giving a second relationship between the phase times.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the phase times.",
        "workingLatex": "2t_2 + t_2 = 40 \\ \\Rightarrow \\ t_2 = \\tfrac{40}{3}, \\quad t_1 = \\tfrac{80}{3}",
        "explanation": "Substituting t1 = 2t2 into the total gives 3t2 = 40, so the deceleration lasts 40/3 s and the acceleration lasts 80/3 s.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Write the total distance as the triangle's area.",
        "workingLatex": "s = \\tfrac12 (t_1 + t_2) V = \\tfrac12 (40) V = 20V",
        "explanation": "The area under a velocity-time graph is the distance travelled. For this triangle the area is half the base times the height, giving 20V.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Solve for the peak speed.",
        "workingLatex": "20V = 600 \\ \\Rightarrow \\ V = 30\\ \\text{m s}^{-1}",
        "explanation": "Setting the area equal to the 600 m travelled gives the maximum speed directly. Neatly, V does not depend on the split between the two phases.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Find the acceleration.",
        "workingLatex": "a = \\frac{V}{t_1} = \\frac{30}{80/3} = \\frac{90}{80} = 1.125\\ \\text{m s}^{-2}",
        "explanation": "The acceleration is the peak speed divided by the time taken to reach it. Using t1 = 80/3 s gives the value directly.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the deceleration for consistency.",
        "workingLatex": "2a = 2.25\\ \\text{m s}^{-2}",
        "explanation": "The deceleration is twice the acceleration, as required by the problem, confirming the condition is satisfied.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Verify the distances add to 600 m.",
        "workingLatex": "s_1 = \\tfrac12(1.125)(80/3)^2 = 400, \\ s_2 = \\tfrac12(2.25)(40/3)^2 = 200",
        "explanation": "Computing each phase's distance separately gives 400 m accelerating and 200 m decelerating, which sum to the required 600 m and confirm the solution.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "State the acceleration time explicitly.",
        "workingLatex": "t_1 = \\frac{80}{3} \\approx 26.7\\ \\text{s}",
        "explanation": "The time spent accelerating is 80/3 s, about 26.7 s, which is two-thirds of the whole journey as expected from t1 = 2t2.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the final answer.",
        "workingLatex": "\\boxed{V = 30\\ \\text{m s}^{-1}, \\ a = 1.125\\ \\text{m s}^{-2}, \\ t_1 = \\tfrac{80}{3} \\approx 26.7\\ \\text{s}}",
        "explanation": "The car reaches 30 m/s, accelerating at 1.125 m/s^2 for about 26.7 s before decelerating twice as hard to rest, covering 600 m in 40 s in total.",
        "diagram": null
      }
    ],
    "finalAnswer": "$V = 30\\ \\text{m s}^{-1}$, the acceleration is $1.125\\ \\text{m s}^{-2}$ (deceleration $2.25\\ \\text{m s}^{-2}$), and the time spent accelerating is $\\tfrac{80}{3} \\approx 26.7\\ \\text{s}$."
    }
  },
];
