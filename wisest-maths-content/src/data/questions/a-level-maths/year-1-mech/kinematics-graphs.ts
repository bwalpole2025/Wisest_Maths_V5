import { Question } from "@/lib/types";

export const questions: Question[] = [
{
  "id": "al.y1.mech.kinematics-graphs.q001",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["displacement-time-graph", "gradient", "velocity", "units", "concept"],
  "questionText": "On a displacement–time ($s$–$t$) graph, displacement $s$ (in metres) is plotted up the vertical axis against time $t$ (in seconds) along the horizontal axis. Explain what the gradient of the graph represents at any point, and state the units of that gradient.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall how a gradient is calculated on any graph.",
        "workingLatex": "\\text{gradient} = \\frac{\\Delta s}{\\Delta t}",
        "explanation": "The gradient of a straight line is always the change in the vertical quantity divided by the change in the horizontal quantity. Here the vertical quantity is displacement $s$ and the horizontal quantity is time $t$, so the gradient measures how much $s$ changes for every second that passes.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Interpret this ratio physically.",
        "workingLatex": "\\frac{\\Delta s}{\\Delta t} = \\frac{\\text{change in displacement}}{\\text{time taken}}",
        "explanation": "A change in displacement divided by the time taken is precisely the definition of velocity. So the steepness of an $s$–$t$ graph tells you how fast the object is moving and in which direction.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Work out the units of the gradient.",
        "workingLatex": "\\frac{\\text{metres}}{\\text{seconds}} = \\text{m s}^{-1}",
        "explanation": "Because displacement is measured in metres and time in seconds, dividing one by the other gives metres per second. This confirms the gradient really is a velocity, since velocity is also measured in $\\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Link the steepness of the line to speed.",
        "workingLatex": "\\text{steeper line} \\Rightarrow \\text{larger } \\tfrac{\\Delta s}{\\Delta t} \\Rightarrow \\text{faster}",
        "explanation": "A steeper line means a larger change in displacement in the same amount of time, so the object is moving faster. A gentle slope means the object is moving slowly.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Interpret the sign of the gradient.",
        "workingLatex": "+\\text{ gradient: moving away}, \\quad -\\text{ gradient: moving back}, \\quad 0: \\text{at rest}",
        "explanation": "A positive gradient means displacement is increasing, so the object moves in the positive direction (away from the start). A negative gradient means displacement is decreasing, so it moves back toward the start. A flat line (zero gradient) means the object is momentarily at rest.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the conclusion.",
        "workingLatex": "\\text{gradient of } s\\text{–}t \\text{ graph} = \\text{velocity} \\ (\\text{m s}^{-1})",
        "explanation": "Putting these ideas together, the gradient of a displacement–time graph is the velocity of the object, and it is measured in metres per second.",
        "diagram": null
      }
    ],
    "finalAnswer": "The gradient of a displacement–time graph represents the object's velocity. Its units are $\\text{m s}^{-1}$ (metres per second)."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q002",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["displacement-time-graph", "gradient", "velocity", "constant-velocity"],
  "questionText": "A particle moves in a straight line. Its displacement–time graph is a single straight line passing through the origin $(0,0)$ and the point $(5,20)$, where $t$ is measured in seconds and $s$ in metres. Find the velocity of the particle.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A displacement–time graph with displacement $s$ (m) up the vertical axis and time $t$ (s) along the horizontal axis. A single straight line segment begins at the origin $(0,0)$ and rises steadily to the point $(5,20)$. The segment is a straight line with constant gradient throughout.",
    "alt": "Displacement–time graph: a straight line from (0,0) rising to (5,20)."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall what the gradient of an s–t graph tells you.",
        "workingLatex": "v = \\frac{\\Delta s}{\\Delta t}",
        "explanation": "On a displacement–time graph the gradient is the velocity. Because the graph here is a single straight line, that gradient is the same everywhere, so the velocity is constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Read off two points that lie on the line.",
        "workingLatex": "(t_1, s_1) = (0, 0), \\qquad (t_2, s_2) = (5, 20)",
        "explanation": "To find a gradient you only need two points on the line. The origin and the given point $(5,20)$ are both stated exactly, so they are the easiest choices to work with.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write down the change in displacement.",
        "workingLatex": "\\Delta s = s_2 - s_1 = 20 - 0 = 20\\ \\text{m}",
        "explanation": "The vertical change is how far the displacement has grown between the two points. Here it climbs from $0$ m to $20$ m, a rise of $20$ m.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write down the change in time.",
        "workingLatex": "\\Delta t = t_2 - t_1 = 5 - 0 = 5\\ \\text{s}",
        "explanation": "The horizontal change is how much time has passed between the two points. That is $5$ seconds.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Divide to find the velocity.",
        "workingLatex": "v = \\frac{\\Delta s}{\\Delta t} = \\frac{20}{5} = 4\\ \\text{m s}^{-1}",
        "explanation": "Dividing the rise in displacement by the time taken gives the velocity. Each second the displacement grows by $4$ m, so the particle travels at a steady $4\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer with units.",
        "workingLatex": "v = 4\\ \\text{m s}^{-1}",
        "explanation": "The positive value confirms the particle moves in the positive direction, away from the start, at a constant speed.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 4\\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q003",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["displacement-time-graph", "at-rest", "zero-velocity", "horizontal-line"],
  "questionText": "The displacement–time graph of a particle is horizontal, staying at $s = 12\\ \\text{m}$ from $t = 3\\ \\text{s}$ to $t = 7\\ \\text{s}$. State what the particle is doing during this interval and find its velocity.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A displacement–time graph with displacement $s$ (m) up the vertical axis and time $t$ (s) along the horizontal axis. Between $t=3$ and $t=7$ the graph is a horizontal straight line segment joining $(3,12)$ and $(7,12)$; the displacement stays fixed at $12$ m throughout this interval.",
    "alt": "Displacement–time graph: a horizontal line at s = 12 m from t = 3 s to t = 7 s."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Look at the shape of the graph over this interval.",
        "workingLatex": "s = 12\\ \\text{m for } 3 \\le t \\le 7",
        "explanation": "The line is flat, meaning the displacement value does not change as time goes on. Whatever the clock reads between $3$ s and $7$ s, the particle is still $12$ m from the start.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write down the change in displacement.",
        "workingLatex": "\\Delta s = 12 - 12 = 0\\ \\text{m}",
        "explanation": "Because the displacement begins and ends at $12$ m, the total change over the interval is zero. The particle has not moved to a new position.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write down the change in time.",
        "workingLatex": "\\Delta t = 7 - 3 = 4\\ \\text{s}",
        "explanation": "Four seconds of time pass between the two ends of the flat section, even though the position is unchanged.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Calculate the gradient (velocity).",
        "workingLatex": "v = \\frac{\\Delta s}{\\Delta t} = \\frac{0}{4} = 0\\ \\text{m s}^{-1}",
        "explanation": "The gradient of the $s$–$t$ graph is the velocity. Dividing a zero change in displacement by the time gives zero, so the velocity is $0\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Interpret what zero velocity means physically.",
        "workingLatex": "v = 0 \\Rightarrow \\text{particle at rest}",
        "explanation": "A velocity of zero means the particle is not moving. A horizontal line on a displacement–time graph always represents an object staying still.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the conclusion.",
        "workingLatex": "\\text{At rest at } s = 12\\ \\text{m}, \\quad v = 0\\ \\text{m s}^{-1}",
        "explanation": "During this interval the particle is stationary, resting $12$ m from the start, with a velocity of $0\\ \\text{m s}^{-1}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The particle is at rest (stationary) at $s = 12\\ \\text{m}$, and its velocity is $0\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q004",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["displacement-time-graph", "reading-values", "gradient", "interpolation"],
  "questionText": "A particle's displacement–time graph is a straight line passing through $(0,2)$ and $(6,20)$, where $t$ is in seconds and $s$ is in metres. Find the displacement of the particle when $t = 4\\ \\text{s}$.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A displacement–time graph with displacement $s$ (m) up the vertical axis and time $t$ (s) along the horizontal axis. A single straight line segment starts at $(0,2)$ (so it meets the vertical axis at $s=2$) and rises steadily to $(6,20)$. The line is straight with a constant gradient.",
    "alt": "Displacement–time graph: a straight line from (0,2) rising to (6,20)."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the gradient (velocity) of the line.",
        "workingLatex": "v = \\frac{\\Delta s}{\\Delta t} = \\frac{20 - 2}{6 - 0} = \\frac{18}{6} = 3\\ \\text{m s}^{-1}",
        "explanation": "The line is straight, so it has a single constant gradient. Using the two given points, the displacement rises by $18$ m over $6$ s, giving a steady velocity of $3\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the starting displacement.",
        "workingLatex": "s = 2\\ \\text{m when } t = 0",
        "explanation": "The point $(0,2)$ tells us the particle is already $2$ m from the origin at the start. This is the value where the line meets the vertical axis.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Write the equation of the line.",
        "workingLatex": "s = 2 + 3t",
        "explanation": "A straight-line graph follows the pattern (start value) plus (gradient times time). With a start of $2$ m and a gradient of $3\\ \\text{m s}^{-1}$, the displacement at any time is $s = 2 + 3t$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the required time.",
        "workingLatex": "s = 2 + 3(4)",
        "explanation": "To find the displacement at $t = 4$ s, replace $t$ with $4$ in the equation of the line.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the expression.",
        "workingLatex": "s = 2 + 12 = 14\\ \\text{m}",
        "explanation": "Multiplying and adding gives $14$ m. This is the height of the line above the time axis at $t = 4$ s, exactly what you would read off the graph.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer with units.",
        "workingLatex": "s = 14\\ \\text{m}",
        "explanation": "At $t = 4$ s the particle is $14$ m from the origin.",
        "diagram": null
      }
    ],
    "finalAnswer": "$s = 14\\ \\text{m}$ when $t = 4\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q005",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["displacement-time-graph", "negative-velocity", "returning", "gradient"],
  "questionText": "A particle's displacement–time graph is a straight line falling from $(4,30)$ to $(10,0)$, where $t$ is in seconds and $s$ is in metres. Describe the motion of the particle over this interval and find its velocity.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A displacement–time graph with displacement $s$ (m) up the vertical axis and time $t$ (s) along the horizontal axis. A single straight line segment starts high at $(4,30)$ and falls steadily down to $(10,0)$ on the time axis. The line is straight with a constant negative gradient.",
    "alt": "Displacement–time graph: a straight line falling from (4,30) down to (10,0)."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Notice the direction of the line.",
        "workingLatex": "s: 30\\ \\text{m} \\rightarrow 0\\ \\text{m}",
        "explanation": "The line slopes downward, so the displacement is getting smaller as time goes on. The particle is moving back toward the starting position ($s = 0$).",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Read off the two endpoints.",
        "workingLatex": "(t_1, s_1) = (4, 30), \\qquad (t_2, s_2) = (10, 0)",
        "explanation": "These are the two ends of the straight segment. They give everything needed to find the gradient.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the change in displacement.",
        "workingLatex": "\\Delta s = 0 - 30 = -30\\ \\text{m}",
        "explanation": "The displacement drops from $30$ m to $0$ m, a change of $-30$ m. The minus sign records that the position decreased.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the change in time.",
        "workingLatex": "\\Delta t = 10 - 4 = 6\\ \\text{s}",
        "explanation": "Six seconds pass while the particle returns to the start.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Calculate the velocity.",
        "workingLatex": "v = \\frac{\\Delta s}{\\Delta t} = \\frac{-30}{6} = -5\\ \\text{m s}^{-1}",
        "explanation": "Dividing the negative change in displacement by the time gives a negative velocity. The magnitude $5$ is the speed, and the minus sign shows the motion is in the negative direction.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Describe the motion in words.",
        "workingLatex": "|v| = 5\\ \\text{m s}^{-1}, \\quad \\text{direction: back toward start}",
        "explanation": "The particle moves at a constant speed of $5\\ \\text{m s}^{-1}$ in the negative direction, travelling back toward the origin and reaching $s = 0$ at $t = 10$ s.",
        "diagram": null
      }
    ],
    "finalAnswer": "The particle moves at a constant speed of $5\\ \\text{m s}^{-1}$ back toward the start (negative direction), reaching $s = 0$ at $t = 10\\ \\text{s}$. Its velocity is $v = -5\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q006",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "written",
  "tags": ["displacement-time-graph", "two-segments", "gradient", "at-rest"],
  "questionText": "A particle's displacement–time graph has two straight segments: it rises from $(0,0)$ to $(4,16)$, then runs horizontally from $(4,16)$ to $(10,16)$. Here $t$ is in seconds and $s$ is in metres. Find the velocity of the particle in each segment.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A displacement–time graph with displacement $s$ (m) up the vertical axis and time $t$ (s) along the horizontal axis. There are two straight segments joined end to end: the first rises from the origin $(0,0)$ up to $(4,16)$; the second is horizontal, running from $(4,16)$ across to $(10,16)$ at constant height $s=16$ m.",
    "alt": "Displacement–time graph: a rising line from (0,0) to (4,16), then a horizontal line from (4,16) to (10,16)."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Split the journey into its two segments.",
        "workingLatex": "\\text{Segment 1: } (0,0)\\to(4,16), \\quad \\text{Segment 2: } (4,16)\\to(10,16)",
        "explanation": "The graph changes slope at $t = 4$ s, so it describes two separate phases of motion. Each straight segment has its own constant velocity, so we treat them one at a time.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the change in displacement and time for segment 1.",
        "workingLatex": "\\Delta s = 16 - 0 = 16\\ \\text{m}, \\quad \\Delta t = 4 - 0 = 4\\ \\text{s}",
        "explanation": "In the first phase the displacement climbs by $16$ m over the first $4$ seconds. These are the rise and run of the first segment.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Calculate the velocity in segment 1.",
        "workingLatex": "v_1 = \\frac{16}{4} = 4\\ \\text{m s}^{-1}",
        "explanation": "Dividing the rise by the run gives the gradient, which is the velocity. The particle moves away from the start at a steady $4\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Look at segment 2.",
        "workingLatex": "\\Delta s = 16 - 16 = 0\\ \\text{m}, \\quad \\Delta t = 10 - 4 = 6\\ \\text{s}",
        "explanation": "The second segment is flat, so the displacement stays at $16$ m even though $6$ seconds pass. The change in displacement is zero.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Calculate the velocity in segment 2.",
        "workingLatex": "v_2 = \\frac{0}{6} = 0\\ \\text{m s}^{-1}",
        "explanation": "A zero change in displacement gives a gradient of zero, so the velocity is $0\\ \\text{m s}^{-1}$. During this phase the particle is at rest, holding its position $16$ m from the start.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State both velocities.",
        "workingLatex": "v_1 = 4\\ \\text{m s}^{-1}, \\qquad v_2 = 0\\ \\text{m s}^{-1}",
        "explanation": "The particle first moves at $4\\ \\text{m s}^{-1}$ for the first $4$ seconds, then stops and stays still for the remaining time.",
        "diagram": null
      }
    ],
    "finalAnswer": "Segment 1: $v = 4\\ \\text{m s}^{-1}$. Segment 2: $v = 0\\ \\text{m s}^{-1}$ (the particle is at rest)."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q007",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["displacement-time-graph", "gradient", "solve-for-time", "constant-velocity"],
  "questionText": "A particle's displacement–time graph is a straight line from $(0,0)$ to $(8,40)$, where $t$ is in seconds and $s$ is in metres. Find the time at which the displacement of the particle is $25\\ \\text{m}$.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A displacement–time graph with displacement $s$ (m) up the vertical axis and time $t$ (s) along the horizontal axis. A single straight line segment starts at the origin $(0,0)$ and rises steadily to $(8,40)$. The line is straight with a constant gradient.",
    "alt": "Displacement–time graph: a straight line from (0,0) rising to (8,40)."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Find the velocity from the gradient.",
        "workingLatex": "v = \\frac{\\Delta s}{\\Delta t} = \\frac{40 - 0}{8 - 0} = \\frac{40}{8} = 5\\ \\text{m s}^{-1}",
        "explanation": "The graph is a single straight line, so the velocity is constant and equals the gradient. The displacement grows by $5$ m every second.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write the equation of the line.",
        "workingLatex": "s = 5t",
        "explanation": "Since the line passes through the origin, there is no starting offset, so the displacement is simply the velocity multiplied by the time: $s = 5t$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set the displacement equal to the target value.",
        "workingLatex": "25 = 5t",
        "explanation": "We want the moment when the displacement reaches $25$ m, so we replace $s$ with $25$ in the equation and solve for the unknown time $t$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve for the time.",
        "workingLatex": "t = \\frac{25}{5} = 5\\ \\text{s}",
        "explanation": "Dividing both sides by $5$ isolates $t$. It takes $5$ seconds for the displacement to build up to $25$ m at this steady rate.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the answer is within the graph's range.",
        "workingLatex": "0 \\le 5 \\le 8 \\ \\checkmark",
        "explanation": "The graph only runs from $t = 0$ to $t = 8$ s. Since $t = 5$ s lies inside this interval, the answer is valid and can genuinely be read from the graph.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer with units.",
        "workingLatex": "t = 5\\ \\text{s}",
        "explanation": "The displacement is $25$ m at $t = 5$ s.",
        "diagram": null
      }
    ],
    "finalAnswer": "$t = 5\\ \\text{s}$"
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q008",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "written",
  "tags": ["displacement-time-graph", "distance-time-graph", "vector-vs-scalar", "concept"],
  "questionText": "Explain the difference between a distance–time graph and a displacement–time graph. Illustrate your answer with a short worked example of a person who walks $10\\ \\text{m}$ away from home in $5\\ \\text{s}$ and then walks straight back, arriving home at $t = 10\\ \\text{s}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Define displacement.",
        "workingLatex": "\\text{displacement} = \\text{position relative to the start (with direction)}",
        "explanation": "Displacement is a vector: it records how far and in which direction you are from the starting point. It can increase, decrease, or become negative if you go past the start on the other side.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Define distance.",
        "workingLatex": "\\text{distance} = \\text{total path length travelled (no direction)}",
        "explanation": "Distance is a scalar: it adds up the total length of the path travelled, no matter which way you go. Because you can never 'un-travel' ground, distance can only ever stay the same or increase.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set up the there-and-back example.",
        "workingLatex": "\\text{out: } 10\\ \\text{m in } 5\\ \\text{s}, \\quad \\text{back: } 10\\ \\text{m in } 5\\ \\text{s}",
        "explanation": "The person walks $10$ m away in the first $5$ s, then retraces the same $10$ m back home in the next $5$ s. We will track both quantities separately to see the difference.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Describe the displacement–time graph.",
        "workingLatex": "s: 0 \\to 10\\ (0\\le t\\le 5), \\quad s: 10 \\to 0\\ (5\\le t\\le 10)",
        "explanation": "The displacement rises from $0$ to $10$ m as the person walks out, then falls back from $10$ m to $0$ m on the return. It ends at $0$ because the person is home again — displacement can decrease.",
        "diagram": {
          "kind": "descriptive",
          "description": "Two graphs drawn for comparison over $0 \\le t \\le 10$ s. Displacement–time graph: $s$ (m) up the vertical axis, $t$ (s) horizontal; a straight line rises from $(0,0)$ to $(5,10)$, then a straight line falls from $(5,10)$ back to $(10,0)$, forming a triangular 'tent' shape ending on the time axis. Distance–time graph: distance (m) up the vertical axis, $t$ (s) horizontal; a straight line rises from $(0,0)$ to $(5,10)$, then continues rising from $(5,10)$ to $(10,20)$, so the line keeps climbing and never comes back down.",
          "alt": "Comparison: displacement–time graph is a tent peaking at (5,10) and returning to (10,0); distance–time graph keeps rising to (10,20)."
        }
      },
      {
        "stepNumber": 5,
        "description": "Describe the distance–time graph.",
        "workingLatex": "d: 0 \\to 10\\ (0\\le t\\le 5), \\quad d: 10 \\to 20\\ (5\\le t\\le 10)",
        "explanation": "The distance rises from $0$ to $10$ m on the way out, then keeps rising from $10$ m to $20$ m on the way back, because the return journey adds another $10$ m of path. It ends at $20$ m and never decreases.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Compare the two end values.",
        "workingLatex": "s_{\\text{final}} = 0\\ \\text{m}, \\qquad d_{\\text{total}} = 20\\ \\text{m}",
        "explanation": "This is the heart of the difference: after the round trip the displacement is $0$ m (back where we started), but the total distance travelled is $20$ m. Displacement can come back down; distance cannot.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Compare what the gradients mean.",
        "workingLatex": "\\text{gradient of } s\\text{–}t = \\text{velocity (can be } \\pm), \\quad \\text{gradient of } d\\text{–}t = \\text{speed } (\\ge 0)",
        "explanation": "The gradient of a displacement–time graph is velocity, which can be negative when moving back. The gradient of a distance–time graph is speed, which is never negative because the line never slopes downward.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Summarise the difference.",
        "workingLatex": "\\text{displacement–time can fall; distance–time cannot}",
        "explanation": "In short, a displacement–time graph shows position relative to the start and may rise or fall, while a distance–time graph shows total path length and can only rise or stay level.",
        "diagram": null
      }
    ],
    "finalAnswer": "A displacement–time graph shows position relative to the start (a vector), so it can rise, fall, or go negative, and its gradient is velocity. A distance–time graph shows total path length (a scalar), so it never decreases, and its gradient is speed. In the example, the displacement returns to $0\\ \\text{m}$ at $t=10\\ \\text{s}$, but the total distance travelled is $20\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q009",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["displacement-time-graph", "average-velocity", "constant-velocity", "gradient"],
  "questionText": "A particle's displacement–time graph is a straight line from $(0,0)$ to $(10,50)$, where $t$ is in seconds and $s$ is in metres. Find the average velocity over the whole interval, and explain why it equals the constant velocity of the particle.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A displacement–time graph with displacement $s$ (m) up the vertical axis and time $t$ (s) along the horizontal axis. A single straight line segment starts at the origin $(0,0)$ and rises steadily to $(10,50)$. The line is straight with a constant gradient.",
    "alt": "Displacement–time graph: a straight line from (0,0) rising to (10,50)."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the definition of average velocity.",
        "workingLatex": "\\bar{v} = \\frac{\\text{total displacement}}{\\text{total time}}",
        "explanation": "Average velocity compares the overall change in position to the total time taken. It does not care about the details in between, only the start and the end.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the total displacement.",
        "workingLatex": "\\Delta s = 50 - 0 = 50\\ \\text{m}",
        "explanation": "The particle finishes at $s = 50$ m having started at $s = 0$, so its overall displacement is $50$ m.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the total time.",
        "workingLatex": "\\Delta t = 10 - 0 = 10\\ \\text{s}",
        "explanation": "The whole journey shown on the graph lasts $10$ seconds.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Calculate the average velocity.",
        "workingLatex": "\\bar{v} = \\frac{50}{10} = 5\\ \\text{m s}^{-1}",
        "explanation": "Dividing the total displacement by the total time gives an average velocity of $5\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the gradient of the line (the constant velocity).",
        "workingLatex": "v = \\frac{\\Delta s}{\\Delta t} = \\frac{50}{10} = 5\\ \\text{m s}^{-1}",
        "explanation": "Because the graph is a single straight line, the gradient is the same everywhere, so the velocity is constant at $5\\ \\text{m s}^{-1}$ throughout.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Explain why the two values match.",
        "workingLatex": "\\bar{v} = v = 5\\ \\text{m s}^{-1}",
        "explanation": "When the velocity never changes, the average over the whole trip must equal that unchanging value — there are no faster or slower stretches to average out. That is why the average velocity equals the constant velocity here.",
        "diagram": null
      }
    ],
    "finalAnswer": "Average velocity $= 5\\ \\text{m s}^{-1}$, which equals the constant velocity because the straight-line graph has the same gradient throughout."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q010",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "written",
  "tags": ["displacement-time-graph", "out-and-back", "total-distance", "average-velocity"],
  "questionText": "A particle's displacement–time graph consists of two straight segments: it rises from $(0,0)$ to $(5,20)$, then falls from $(5,20)$ to $(9,0)$, where $t$ is in seconds and $s$ is in metres. Find (a) the total distance travelled, (b) the final displacement, and (c) the average velocity over the whole journey.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A displacement–time graph with displacement $s$ (m) up the vertical axis and time $t$ (s) along the horizontal axis. Two straight segments form a triangular 'tent': the first rises from the origin $(0,0)$ to the peak $(5,20)$, and the second falls from $(5,20)$ back down to $(9,0)$ on the time axis. Both segments are straight lines.",
    "alt": "Displacement–time graph: a straight line up from (0,0) to (5,20), then a straight line down to (9,0), forming a tent shape."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Measure the distance travelled on the outward leg.",
        "workingLatex": "\\text{out: } s \\text{ from } 0 \\to 20 \\Rightarrow 20\\ \\text{m}",
        "explanation": "On the first segment the displacement grows from $0$ to $20$ m, so the particle actually travels $20$ m away from the start.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Measure the distance travelled on the return leg.",
        "workingLatex": "\\text{back: } s \\text{ from } 20 \\to 0 \\Rightarrow 20\\ \\text{m}",
        "explanation": "On the second segment the displacement shrinks from $20$ m back to $0$, so the particle covers another $20$ m of path returning to the start. Distance counts this length regardless of direction.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Add the two legs to get the total distance.",
        "workingLatex": "\\text{total distance} = 20 + 20 = 40\\ \\text{m}",
        "explanation": "Total distance is the whole path length, so we add the outward and return journeys together to get $40$ m.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Read off the final displacement.",
        "workingLatex": "s_{\\text{final}} = 0\\ \\text{m at } t = 9\\ \\text{s}",
        "explanation": "The graph ends at $(9,0)$, meaning the particle is back exactly where it started. Its final displacement is therefore $0$ m, even though it has been moving the whole time.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the average velocity.",
        "workingLatex": "\\bar{v} = \\frac{\\text{total displacement}}{\\text{total time}} = \\frac{0}{9}",
        "explanation": "Average velocity uses the overall change in position, not the path length. Since the particle returns to the start, the total displacement is $0$ m over the $9$ s.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Calculate the average velocity.",
        "workingLatex": "\\bar{v} = \\frac{0}{9} = 0\\ \\text{m s}^{-1}",
        "explanation": "A zero total displacement divided by the time gives an average velocity of $0\\ \\text{m s}^{-1}$. This makes sense: on average the particle ends up nowhere new, even though it was never truly at rest.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the three results clearly.",
        "workingLatex": "\\text{distance} = 40\\ \\text{m}, \\quad s_{\\text{final}} = 0\\ \\text{m}, \\quad \\bar{v} = 0\\ \\text{m s}^{-1}",
        "explanation": "Collecting the answers: the total distance is $40$ m, the final displacement is $0$ m, and the average velocity is $0\\ \\text{m s}^{-1}$. The gap between the $40$ m of distance and the $0$ m of displacement highlights how the two quantities differ.",
        "diagram": null
      }
    ],
    "finalAnswer": "(a) Total distance $= 40\\ \\text{m}$. (b) Final displacement $= 0\\ \\text{m}$. (c) Average velocity $= 0\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q011",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "written",
  "tags": ["velocity-time-graph", "gradient", "acceleration", "concept", "units"],
  "questionText": "On a velocity–time graph, velocity $v$ (in $\\text{m s}^{-1}$) is plotted up the vertical axis and time $t$ (in $\\text{s}$) along the horizontal axis. Explain what the gradient (slope) of the graph represents, and state its units.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall what a gradient measures on any graph.",
        "workingLatex": "\\text{gradient} = \\frac{\\text{change in vertical quantity}}{\\text{change in horizontal quantity}}",
        "explanation": "The gradient of a straight line always tells you how fast the vertical quantity is changing compared with the horizontal one. This is a general rule for every graph, so it is the natural place to start.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Substitute the quantities on the two axes.",
        "workingLatex": "\\text{gradient} = \\frac{\\Delta v}{\\Delta t}",
        "explanation": "Here the vertical axis is velocity and the horizontal axis is time, so the gradient becomes the change in velocity divided by the change in time.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Identify this rate of change.",
        "workingLatex": "a = \\frac{\\Delta v}{\\Delta t}",
        "explanation": "The rate at which velocity changes with time is exactly what we mean by acceleration. So the gradient of a velocity–time graph is the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Work out the units by combining the axis units.",
        "workingLatex": "\\frac{\\text{m s}^{-1}}{\\text{s}} = \\text{m s}^{-2}",
        "explanation": "Dividing a velocity in metres per second by a time in seconds gives metres per second per second, written $\\text{m s}^{-2}$. The units follow directly from the division that defines the gradient.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Note the special case of a horizontal line.",
        "workingLatex": "\\text{gradient} = 0 \\;\\Rightarrow\\; a = 0",
        "explanation": "If the line is flat, the velocity is not changing, so the gradient is zero and the acceleration is zero. This is a useful check that the gradient really does mean acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the conclusion.",
        "workingLatex": "\\text{gradient of } v\\text{-}t \\text{ graph} = a,\\quad \\text{units } \\text{m s}^{-2}",
        "explanation": "Pulling it together: the slope of a velocity–time graph is the acceleration, measured in $\\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The gradient of a velocity–time graph represents the acceleration; its units are $\\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q012",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "numeric",
  "tags": ["velocity-time-graph", "gradient", "acceleration", "constant-acceleration"],
  "questionText": "A velocity–time graph is a straight line passing through the origin $(0,0)$ and the point $(8,20)$, where time is in seconds and velocity is in $\\text{m s}^{-1}$. Find the acceleration.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A velocity–time graph with velocity v (in m s^-1) up the vertical axis and time t (in s) along the horizontal axis. A single straight-line segment starts at the origin (0, 0) and rises steadily to the point (8, 20). No curve; the segment is a straight line.",
    "alt": "Straight line from (0,0) to (8,20) on a velocity-time graph."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Choose the correct feature of the graph.",
        "workingLatex": "a = \\text{gradient of the } v\\text{-}t \\text{ line}",
        "explanation": "On a velocity–time graph the acceleration is the gradient of the line, so finding the acceleration just means finding the slope.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Read two points from the line.",
        "workingLatex": "(t_1, v_1) = (0, 0),\\quad (t_2, v_2) = (8, 20)",
        "explanation": "We are told the line passes through these two points. Using both endpoints keeps the numbers exact and avoids reading errors.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the change in velocity.",
        "workingLatex": "\\Delta v = 20 - 0 = 20\\ \\text{m s}^{-1}",
        "explanation": "Subtracting the starting velocity from the final velocity gives how much the velocity has increased.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the change in time.",
        "workingLatex": "\\Delta t = 8 - 0 = 8\\ \\text{s}",
        "explanation": "In the same way, subtracting the times tells us how long that change in velocity took.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Divide to get the gradient.",
        "workingLatex": "a = \\frac{\\Delta v}{\\Delta t} = \\frac{20}{8} = 2.5\\ \\text{m s}^{-2}",
        "explanation": "The acceleration is the change in velocity per second, so we divide the change in velocity by the time taken.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the final answer with units.",
        "workingLatex": "a = 2.5\\ \\text{m s}^{-2}",
        "explanation": "The positive value tells us the object is speeding up at a steady rate of $2.5\\ \\text{m s}^{-1}$ every second.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2.5\\ \\text{m s}^{-2}$"
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q013",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "written",
  "tags": ["velocity-time-graph", "constant-velocity", "area-under-graph", "distance"],
  "questionText": "A velocity–time graph is horizontal at $v = 15\\ \\text{m s}^{-1}$ from $t = 0$ to $t = 6\\ \\text{s}$. (a) State the acceleration and describe the motion. (b) Find the distance travelled.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A velocity–time graph with velocity v (in m s^-1) up the vertical axis and time t (in s) along the horizontal axis. A single horizontal straight-line segment runs from (0, 15) to (6, 15), staying level at v = 15 throughout. The region between this line and the time-axis is a rectangle of width 6 and height 15.",
    "alt": "Horizontal line at v=15 from t=0 to t=6 on a velocity-time graph, enclosing a rectangle."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the flat line for acceleration.",
        "workingLatex": "\\text{gradient} = 0 \\;\\Rightarrow\\; a = 0\\ \\text{m s}^{-2}",
        "explanation": "The acceleration is the gradient of the graph. A horizontal line has no slope, so the gradient, and therefore the acceleration, is zero.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Describe the motion.",
        "workingLatex": "v = 15\\ \\text{m s}^{-1} \\text{ (unchanging)}",
        "explanation": "Because the velocity stays fixed at $15\\ \\text{m s}^{-1}$ and never changes, the object is moving at a constant velocity in a straight line.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Recall how to get distance from the graph.",
        "workingLatex": "\\text{distance} = \\text{area between the graph and the time-axis}",
        "explanation": "The area under a velocity–time graph gives the distance travelled, because it multiplies speed by time.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Identify the shape of that area.",
        "workingLatex": "\\text{rectangle: base } = 6\\ \\text{s},\\ \\text{height} = 15\\ \\text{m s}^{-1}",
        "explanation": "A flat line above the axis encloses a rectangle, whose width is the time interval and whose height is the constant velocity.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Compute the rectangle's area.",
        "workingLatex": "\\text{distance} = b \\times h = 15 \\times 6 = 90\\ \\text{m}",
        "explanation": "The area of a rectangle is base times height, and here that product is the distance travelled.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the full conclusion.",
        "workingLatex": "a = 0\\ \\text{m s}^{-2},\\quad \\text{distance} = 90\\ \\text{m}",
        "explanation": "So the object travels at a constant $15\\ \\text{m s}^{-1}$ with zero acceleration and covers $90\\ \\text{m}$ in the 6 seconds.",
        "diagram": null
      }
    ],
    "finalAnswer": "Acceleration $= 0\\ \\text{m s}^{-2}$; the object moves at a constant velocity of $15\\ \\text{m s}^{-1}$; distance travelled $= 90\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q014",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "numeric",
  "tags": ["velocity-time-graph", "area-under-graph", "distance", "constant-velocity", "rectangle"],
  "questionText": "A car moves at a constant velocity of $12\\ \\text{m s}^{-1}$ for $5\\ \\text{s}$, shown as a horizontal line on a velocity–time graph. Find the distance travelled.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A velocity–time graph with velocity v (in m s^-1) up the vertical axis and time t (in s) along the horizontal axis. A single horizontal straight-line segment runs from (0, 12) to (5, 12). The region between this line and the time-axis is a rectangle of width 5 and height 12.",
    "alt": "Horizontal line at v=12 from t=0 to t=5 on a velocity-time graph, enclosing a rectangle."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Link distance to the area under the graph.",
        "workingLatex": "\\text{distance} = \\text{area under the } v\\text{-}t \\text{ graph}",
        "explanation": "On a velocity–time graph, the distance travelled equals the area between the line and the time-axis, so we need that area.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recognise the constant velocity gives a rectangle.",
        "workingLatex": "v = 12\\ \\text{m s}^{-1} \\text{ is constant}",
        "explanation": "Because the velocity does not change, the graph is a flat line and the area under it is a simple rectangle.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Read off the rectangle's dimensions.",
        "workingLatex": "\\text{base} = 5\\ \\text{s},\\quad \\text{height} = 12\\ \\text{m s}^{-1}",
        "explanation": "The width of the rectangle is the time of 5 seconds and its height is the constant velocity of $12\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the rectangle area formula.",
        "workingLatex": "\\text{distance} = b \\times h = 12 \\times 5",
        "explanation": "The area of a rectangle is base multiplied by height, which here multiplies the speed by the time to give the distance.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the product.",
        "workingLatex": "12 \\times 5 = 60\\ \\text{m}",
        "explanation": "Working out the multiplication gives the total distance travelled.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer with units.",
        "workingLatex": "\\text{distance} = 60\\ \\text{m}",
        "explanation": "Moving at $12\\ \\text{m s}^{-1}$ for 5 seconds covers $60\\ \\text{m}$, which is a sensible result.",
        "diagram": null
      }
    ],
    "finalAnswer": "Distance travelled $= 60\\ \\text{m}$"
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q015",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["velocity-time-graph", "area-under-graph", "distance", "triangle", "from-rest"],
  "questionText": "Starting from rest, an object's velocity rises steadily from $0$ to $18\\ \\text{m s}^{-1}$ over $6\\ \\text{s}$. On the velocity–time graph this is a straight line from $(0,0)$ to $(6,18)$. Find the distance travelled.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A velocity–time graph with velocity v (in m s^-1) up the vertical axis and time t (in s) along the horizontal axis. A single straight-line segment rises from the origin (0, 0) to the point (6, 18). The region between this line, the time-axis and the vertical drop at t = 6 forms a right-angled triangle with base 6 and height 18.",
    "alt": "Straight line from (0,0) to (6,18) forming a triangle on a velocity-time graph."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Connect distance to area under the graph.",
        "workingLatex": "\\text{distance} = \\text{area under the } v\\text{-}t \\text{ graph}",
        "explanation": "The distance travelled is the area between the velocity–time line and the time-axis, so we find that area.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Identify the shape enclosed.",
        "workingLatex": "\\text{right-angled triangle}",
        "explanation": "Because the object starts from rest, the line begins on the axis and slopes up, enclosing a triangle rather than a rectangle.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Read the base and height of the triangle.",
        "workingLatex": "\\text{base} = 6\\ \\text{s},\\quad \\text{height} = 18\\ \\text{m s}^{-1}",
        "explanation": "The base is the time interval of 6 seconds along the axis and the height is the final velocity of $18\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write down the triangle area formula.",
        "workingLatex": "\\text{distance} = \\tfrac{1}{2} \\times b \\times h",
        "explanation": "A triangle's area is half of base times height; the factor of one half accounts for the sloping side.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the values.",
        "workingLatex": "\\text{distance} = \\tfrac{1}{2} \\times 6 \\times 18",
        "explanation": "Putting the base and height into the formula sets up the calculation.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the result.",
        "workingLatex": "\\tfrac{1}{2} \\times 6 \\times 18 = 54\\ \\text{m}",
        "explanation": "Half of $6 \\times 18 = 108$ is $54$, so the object travels $54\\ \\text{m}$ while speeding up.",
        "diagram": null
      }
    ],
    "finalAnswer": "Distance travelled $= 54\\ \\text{m}$"
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q016",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["velocity-time-graph", "gradient", "acceleration", "initial-velocity", "intercept"],
  "questionText": "A velocity–time graph is a straight line from $(0,8)$ to $(4,20)$, with time in seconds and velocity in $\\text{m s}^{-1}$. (a) Write down the initial velocity. (b) Find the acceleration.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A velocity–time graph with velocity v (in m s^-1) up the vertical axis and time t (in s) along the horizontal axis. A single straight-line segment starts at (0, 8) on the vertical axis and rises to the point (4, 20). The line does not pass through the origin; the segment is straight.",
    "alt": "Straight line from (0,8) to (4,20) on a velocity-time graph."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Read the initial velocity from the vertical intercept.",
        "workingLatex": "v_0 = 8\\ \\text{m s}^{-1}",
        "explanation": "The initial velocity is the value at $t = 0$, which is where the line meets the vertical axis. Here that is $8\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Choose the graph feature for acceleration.",
        "workingLatex": "a = \\text{gradient of the line}",
        "explanation": "Acceleration is the gradient of a velocity–time graph, so part (b) means finding the slope of this line.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the change in velocity between the two points.",
        "workingLatex": "\\Delta v = 20 - 8 = 12\\ \\text{m s}^{-1}",
        "explanation": "Subtracting the starting velocity from the final velocity gives how much the velocity increased along the line.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the change in time.",
        "workingLatex": "\\Delta t = 4 - 0 = 4\\ \\text{s}",
        "explanation": "The matching change in time is found by subtracting the two time values.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Divide to get the gradient.",
        "workingLatex": "a = \\frac{\\Delta v}{\\Delta t} = \\frac{12}{4} = 3\\ \\text{m s}^{-2}",
        "explanation": "Dividing the change in velocity by the change in time gives the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State both answers.",
        "workingLatex": "v_0 = 8\\ \\text{m s}^{-1},\\quad a = 3\\ \\text{m s}^{-2}",
        "explanation": "The object starts at $8\\ \\text{m s}^{-1}$ and speeds up steadily at $3\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "Initial velocity $= 8\\ \\text{m s}^{-1}$; acceleration $= 3\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q017",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["velocity-time-graph", "gradient", "deceleration", "negative-acceleration"],
  "questionText": "A velocity–time graph is a straight line falling from $(0,20)$ to $(5,0)$, with time in seconds and velocity in $\\text{m s}^{-1}$. Explain why this represents deceleration and find its value.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A velocity–time graph with velocity v (in m s^-1) up the vertical axis and time t (in s) along the horizontal axis. A single straight-line segment starts at (0, 20) on the vertical axis and falls steadily to (5, 0) on the time-axis. The segment is straight and slopes downwards.",
    "alt": "Straight line falling from (0,20) to (5,0) on a velocity-time graph."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the graph feature that gives acceleration.",
        "workingLatex": "a = \\text{gradient of the line}",
        "explanation": "The acceleration is the gradient of the velocity–time graph, so the sign and size of the slope will tell us what is happening.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note the direction of the slope.",
        "workingLatex": "\\text{line slopes downward} \\;\\Rightarrow\\; \\text{gradient} < 0",
        "explanation": "The line falls from left to right, so the velocity is decreasing. A decreasing velocity means a negative gradient, which is deceleration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the change in velocity.",
        "workingLatex": "\\Delta v = 0 - 20 = -20\\ \\text{m s}^{-1}",
        "explanation": "The velocity drops from $20$ to $0$, so the change is negative, confirming the object is slowing down.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the change in time.",
        "workingLatex": "\\Delta t = 5 - 0 = 5\\ \\text{s}",
        "explanation": "The slowing down happens over the 5 seconds shown, found by subtracting the two time values.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Compute the gradient.",
        "workingLatex": "a = \\frac{\\Delta v}{\\Delta t} = \\frac{-20}{5} = -4\\ \\text{m s}^{-2}",
        "explanation": "Dividing the change in velocity by the time gives a negative acceleration of $-4\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Interpret the negative value.",
        "workingLatex": "\\text{deceleration} = 4\\ \\text{m s}^{-2}",
        "explanation": "A negative acceleration is a deceleration, so the object slows down at a rate of $4\\ \\text{m s}^{-2}$ each second.",
        "diagram": null
      }
    ],
    "finalAnswer": "The velocity is decreasing (negative gradient), so it is deceleration; the acceleration is $-4\\ \\text{m s}^{-2}$, i.e. a deceleration of $4\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q018",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["velocity-time-graph", "deceleration", "at-rest", "time-axis", "interpretation"],
  "questionText": "A velocity–time graph is a straight line falling from $(0,24)$ and reaching zero velocity at $t = 6\\ \\text{s}$. State when the object comes to rest and describe what is happening to its motion.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A velocity–time graph with velocity v (in m s^-1) up the vertical axis and time t (in s) along the horizontal axis. A single straight-line segment starts at (0, 24) on the vertical axis and falls steadily, meeting the time-axis at (6, 0). The segment is straight and slopes downwards.",
    "alt": "Straight line falling from (0,24) to (6,0) on a velocity-time graph."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State what 'at rest' means on the graph.",
        "workingLatex": "\\text{at rest} \\;\\Leftrightarrow\\; v = 0",
        "explanation": "An object is at rest when its velocity is zero, which on the graph is where the line meets the time-axis.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Locate where the line crosses the time-axis.",
        "workingLatex": "v = 0 \\text{ at } t = 6\\ \\text{s}",
        "explanation": "The line reaches the time-axis at $t = 6$, so this is the moment the velocity becomes zero.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the time it comes to rest.",
        "workingLatex": "t = 6\\ \\text{s}",
        "explanation": "Therefore the object comes to rest 6 seconds after the start.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Describe how the velocity changes before then.",
        "workingLatex": "24\\ \\text{m s}^{-1} \\rightarrow 0\\ \\text{m s}^{-1}",
        "explanation": "From $t = 0$ to $t = 6$ the velocity falls steadily from $24\\ \\text{m s}^{-1}$ to zero, so the object is slowing down the whole time.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Quantify the steady deceleration.",
        "workingLatex": "a = \\frac{0 - 24}{6} = -4\\ \\text{m s}^{-2}",
        "explanation": "The line is straight, so the slowing is uniform. Its gradient is $-4\\ \\text{m s}^{-2}$, a constant deceleration of $4\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Summarise the motion.",
        "workingLatex": "\\text{uniform deceleration, at rest at } t = 6\\ \\text{s}",
        "explanation": "In words: the object decelerates uniformly at $4\\ \\text{m s}^{-2}$ and comes to rest after 6 seconds.",
        "diagram": null
      }
    ],
    "finalAnswer": "The object comes to rest at $t = 6\\ \\text{s}$; it is decelerating uniformly (constant deceleration of $4\\ \\text{m s}^{-2}$) from $24\\ \\text{m s}^{-1}$ down to zero."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q019",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "classification",
  "tags": ["velocity-time-graph", "classification", "constant-velocity", "constant-acceleration", "deceleration"],
  "questionText": "Match each velocity–time graph description to the correct type of motion (constant velocity, constant acceleration, or deceleration). A: a horizontal straight line. B: a straight line sloping upwards from left to right. C: a straight line sloping downwards towards the time-axis.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recall the key rule for these graphs.",
        "workingLatex": "a = \\text{gradient of the } v\\text{-}t \\text{ graph}",
        "explanation": "On a velocity–time graph the acceleration is the gradient, so the direction and steepness of each line tells us the type of motion.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Classify description A.",
        "workingLatex": "\\text{horizontal} \\Rightarrow \\text{gradient} = 0 \\Rightarrow a = 0",
        "explanation": "A flat line has zero gradient, so the acceleration is zero and the velocity never changes. This is constant velocity.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Classify description B.",
        "workingLatex": "\\text{upward slope} \\Rightarrow \\text{gradient} > 0 \\Rightarrow a > 0",
        "explanation": "A line sloping up has a positive, unchanging gradient, so the velocity increases at a steady rate. This is constant acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Classify description C.",
        "workingLatex": "\\text{downward slope} \\Rightarrow \\text{gradient} < 0 \\Rightarrow a < 0",
        "explanation": "A line sloping down towards the axis has a negative gradient, so the velocity is decreasing. This is deceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the matches are distinct.",
        "workingLatex": "A \\rightarrow \\text{const. velocity},\\ B \\rightarrow \\text{const. accel.},\\ C \\rightarrow \\text{decel.}",
        "explanation": "Each description gives a different sign of gradient (zero, positive, negative), so the three types are matched one-to-one with no overlap.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the final matching.",
        "workingLatex": "A: \\text{const. velocity},\\quad B: \\text{const. acceleration},\\quad C: \\text{deceleration}",
        "explanation": "Bringing it together gives the complete set of matches for the three graphs.",
        "diagram": null
      }
    ],
    "finalAnswer": "A = constant velocity, B = constant acceleration, C = deceleration."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q020",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["velocity-time-graph", "gradient", "negative-acceleration", "deceleration"],
  "questionText": "A velocity–time graph is a straight line from $(0,30)$ to $(12,6)$, with time in seconds and velocity in $\\text{m s}^{-1}$. Find the acceleration.",
  "questionDiagram": {
    "kind": "descriptive",
    "description": "A velocity–time graph with velocity v (in m s^-1) up the vertical axis and time t (in s) along the horizontal axis. A single straight-line segment starts at (0, 30) on the vertical axis and falls steadily to the point (12, 6), staying above the time-axis throughout. The segment is straight and slopes downwards.",
    "alt": "Straight line falling from (0,30) to (12,6) on a velocity-time graph."
  },
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Choose the correct feature of the graph.",
        "workingLatex": "a = \\text{gradient of the line}",
        "explanation": "Acceleration is the gradient of a velocity–time graph, so we find the slope of this line.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note the line slopes down.",
        "workingLatex": "\\text{velocity falls} \\Rightarrow \\text{gradient} < 0",
        "explanation": "The velocity decreases from 30 to 6, so the line slopes down and we should expect a negative acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the change in velocity.",
        "workingLatex": "\\Delta v = 6 - 30 = -24\\ \\text{m s}^{-1}",
        "explanation": "Subtracting the starting velocity from the final velocity gives a negative change, confirming the object is slowing.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the change in time.",
        "workingLatex": "\\Delta t = 12 - 0 = 12\\ \\text{s}",
        "explanation": "The change takes place over the 12 seconds between the two points, found by subtracting the times.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Compute the gradient.",
        "workingLatex": "a = \\frac{\\Delta v}{\\Delta t} = \\frac{-24}{12} = -2\\ \\text{m s}^{-2}",
        "explanation": "Dividing the change in velocity by the time gives the constant acceleration of $-2\\ \\text{m s}^{-2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State and interpret the answer.",
        "workingLatex": "a = -2\\ \\text{m s}^{-2}",
        "explanation": "The negative sign shows the object is decelerating at a steady $2\\ \\text{m s}^{-2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = -2\\ \\text{m s}^{-2}$ (a deceleration of $2\\ \\text{m s}^{-2}$)"
  }
},
  {
    "id": "al.y1.mech.kinematics-graphs.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["kinematics-graphs", "velocity-time", "area-under-graph", "distance"],
    "questionText": "A vehicle accelerates uniformly from rest to $10\\ \\text{m s}^{-1}$ over $2\\ \\text{s}$, then travels at a constant $10\\ \\text{m s}^{-1}$ for a further $4\\ \\text{s}$. By finding the area under the velocity–time graph, calculate the total distance travelled.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time t in seconds, marked 0 to 6. Vertical axis: velocity v in m s^-1, marked 0 to 10. A straight line rises from (0,0) to (2,10); then a horizontal straight line runs from (2,10) to (6,10). The region between the graph and the time axis is shaded, forming a triangle followed by a rectangle.",
      "alt": "v-t graph: straight line from (0,0) to (2,10), then constant at 10 from (2,10) to (6,10)."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the area under a velocity–time graph",
          "workingLatex": "\\text{Area under } v\\text{--}t \\text{ graph} = \\text{distance travelled}",
          "explanation": "On a velocity–time graph the height is speed and the width is time, so height times width has units of speed times time, which is distance. That is exactly why the shaded area tells us how far the vehicle has gone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split the region into two simple shapes",
          "workingLatex": "\\text{Triangle } (0\\le t\\le 2) \\;+\\; \\text{Rectangle } (2\\le t\\le 6)",
          "explanation": "The graph is a sloping part followed by a flat part. Breaking it into a triangle and a rectangle lets us use area formulas we already know instead of one awkward shape.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Read the dimensions of the triangle",
          "workingLatex": "\\text{base} = 2\\ \\text{s}, \\qquad \\text{height} = 10\\ \\text{m s}^{-1}",
          "explanation": "During the first 2 seconds the speed climbs from 0 up to 10, so the triangle stretches 2 s along the bottom and reaches up to 10 on the velocity axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the area of the triangle",
          "workingLatex": "\\tfrac{1}{2}\\times 2\\times 10 = 10\\ \\text{m}",
          "explanation": "A triangle's area is half of base times height. This value is the distance covered while the vehicle was still speeding up.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the area of the rectangle",
          "workingLatex": "10\\times 4 = 40\\ \\text{m}",
          "explanation": "From t = 2 to t = 6 is 4 seconds at a steady 10 m/s. At constant speed, distance is speed times time, which is precisely the rectangle's area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add the two areas for the total distance",
          "workingLatex": "10 + 40 = 50\\ \\text{m}",
          "explanation": "The whole shaded region is just the triangle plus the rectangle, so adding them gives the distance for the entire 6-second motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the result",
          "workingLatex": "s = 50\\ \\text{m}",
          "explanation": "Both phases together carry the vehicle 50 metres, which is our final distance.",
          "diagram": null
        }
      ],
      "finalAnswer": "$50\\ \\text{m}$"
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["kinematics-graphs", "average-speed", "velocity-time", "distance"],
    "questionText": "The velocity–time graph for a vehicle shows that it covers a total distance of $240\\ \\text{m}$ in $30\\ \\text{s}$. Calculate the average speed of the vehicle, and explain why average speed is found by dividing total distance by total time.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of average speed",
          "workingLatex": "\\text{average speed} = \\dfrac{\\text{total distance}}{\\text{total time}}",
          "explanation": "Average speed answers a simple question: if the whole trip had been done at one steady speed, what speed would cover the same distance in the same time? That is the total distance shared out evenly over the total time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the total distance",
          "workingLatex": "\\text{total distance} = 240\\ \\text{m}",
          "explanation": "The area under a velocity–time graph gives distance, and we are told this area is 240 m, so that is the total ground the vehicle covered.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the total time",
          "workingLatex": "\\text{total time} = 30\\ \\text{s}",
          "explanation": "The motion runs along the time axis from 0 to 30 s, so 30 seconds is the full duration of the journey.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "\\text{average speed} = \\dfrac{240}{30}",
          "explanation": "We place the distance on top and the time underneath, matching the definition exactly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the division",
          "workingLatex": "\\dfrac{240}{30} = 8\\ \\text{m s}^{-1}",
          "explanation": "Dividing 240 by 30 gives 8, so on average the vehicle advances 8 metres every second.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Explain what this represents",
          "workingLatex": "8\\ \\text{m s}^{-1}\\ \\text{(steady-speed equivalent)}",
          "explanation": "The real speed changed throughout the journey, but 8 m/s is the single constant speed that would produce the same 240 m in the same 30 s. That is why average speed is defined as total distance divided by total time.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8\\ \\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["kinematics-graphs", "velocity-time", "area-under-graph", "trapezium", "distance"],
    "questionText": "A velocity–time graph consists of three straight-line segments joining the points $(0,0)$, $(3,15)$, $(13,15)$ and $(18,0)$, where time is measured in seconds and velocity in $\\text{m s}^{-1}$. Find the total distance travelled.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time t in seconds, marked 0 to 18. Vertical axis: velocity v in m s^-1, marked 0 to 15. Three straight segments: a line rises from (0,0) to (3,15); a horizontal line runs from (3,15) to (13,15); a line falls from (13,15) to (18,0). The region under the graph is shaded, forming a triangle, then a rectangle, then a triangle.",
      "alt": "v-t graph through (0,0), (3,15), (13,15), (18,0): rise, constant, fall."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall that area equals distance",
          "workingLatex": "\\text{distance} = \\text{area under the } v\\text{--}t \\text{ graph}",
          "explanation": "For any velocity–time graph the enclosed area between the line and the time axis measures the distance travelled, so our whole task is to find that area.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break the shape into three parts",
          "workingLatex": "\\text{Triangle} + \\text{Rectangle} + \\text{Triangle}",
          "explanation": "The journey has a speeding-up phase, a steady phase and a slowing-down phase. Treating each phase separately lets us apply a familiar area formula to each piece.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Dimensions of the first triangle",
          "workingLatex": "\\text{base} = 3-0 = 3\\ \\text{s},\\quad \\text{height} = 15\\ \\text{m s}^{-1}",
          "explanation": "Between t = 0 and t = 3 the velocity rises from 0 to 15, so this triangle is 3 s wide and 15 tall.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Area of the first triangle",
          "workingLatex": "\\tfrac{1}{2}\\times 3\\times 15 = 22.5\\ \\text{m}",
          "explanation": "Half of base times height gives the distance covered while accelerating.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Dimensions of the rectangle",
          "workingLatex": "\\text{base} = 13-3 = 10\\ \\text{s},\\quad \\text{height} = 15\\ \\text{m s}^{-1}",
          "explanation": "The velocity holds steady at 15 from t = 3 to t = 13, a span of 10 seconds, so this middle piece is a rectangle 10 wide and 15 tall.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area of the rectangle",
          "workingLatex": "10\\times 15 = 150\\ \\text{m}",
          "explanation": "Distance at constant speed is speed times time, which is the rectangle's area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Dimensions of the second triangle",
          "workingLatex": "\\text{base} = 18-13 = 5\\ \\text{s},\\quad \\text{height} = 15\\ \\text{m s}^{-1}",
          "explanation": "From t = 13 to t = 18 the velocity falls from 15 back to 0, giving a triangle 5 s wide and 15 tall.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Area of the second triangle",
          "workingLatex": "\\tfrac{1}{2}\\times 5\\times 15 = 37.5\\ \\text{m}",
          "explanation": "Again half of base times height gives the distance covered while decelerating.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the three areas",
          "workingLatex": "22.5 + 150 + 37.5 = 210\\ \\text{m}",
          "explanation": "The total area is the sum of the three pieces, so this is the total distance for the whole journey.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the trapezium formula",
          "workingLatex": "\\tfrac{1}{2}(10+18)\\times 15 = \\tfrac{1}{2}\\times 28\\times 15 = 210\\ \\text{m}",
          "explanation": "The whole shape is a trapezium with parallel sides 10 (the top) and 18 (the bottom) and height 15. Getting 210 again confirms our answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$210\\ \\text{m}$"
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["kinematics-graphs", "average-speed", "velocity-time", "area-under-graph"],
    "questionText": "For the same journey, whose velocity–time graph joins the points $(0,0)$, $(3,15)$, $(13,15)$ and $(18,0)$ (time in seconds, velocity in $\\text{m s}^{-1}$), find the average speed over the whole $18\\ \\text{s}$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time t in seconds, marked 0 to 18. Vertical axis: velocity v in m s^-1, marked 0 to 15. Three straight segments: a line rises from (0,0) to (3,15); a horizontal line runs from (3,15) to (13,15); a line falls from (13,15) to (18,0). The area under the graph is shaded.",
      "alt": "v-t graph through (0,0), (3,15), (13,15), (18,0)."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the average speed formula",
          "workingLatex": "\\text{average speed} = \\dfrac{\\text{total distance}}{\\text{total time}}",
          "explanation": "Average speed spreads the whole distance evenly across the whole time, so we first need the total distance and the total time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Area of the first triangle",
          "workingLatex": "\\tfrac{1}{2}\\times 3\\times 15 = 22.5\\ \\text{m}",
          "explanation": "The speeding-up phase from (0,0) to (3,15) is a triangle 3 s wide and 15 tall, so half of base times height gives its distance.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Area of the rectangle",
          "workingLatex": "(13-3)\\times 15 = 10\\times 15 = 150\\ \\text{m}",
          "explanation": "The steady phase holds 15 m/s for 10 seconds, a rectangle whose area is speed times time.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Area of the second triangle",
          "workingLatex": "\\tfrac{1}{2}\\times (18-13)\\times 15 = \\tfrac{1}{2}\\times 5\\times 15 = 37.5\\ \\text{m}",
          "explanation": "The slowing-down phase is a triangle 5 s wide and 15 tall, again half of base times height.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Total distance travelled",
          "workingLatex": "22.5 + 150 + 37.5 = 210\\ \\text{m}",
          "explanation": "Adding the three areas gives the full distance covered over the journey.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the total time",
          "workingLatex": "\\text{total time} = 18\\ \\text{s}",
          "explanation": "The graph runs from t = 0 to t = 18, so the whole trip lasts 18 seconds.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the formula",
          "workingLatex": "\\text{average speed} = \\dfrac{210}{18}",
          "explanation": "Place the total distance over the total time exactly as the definition requires.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the division",
          "workingLatex": "\\dfrac{210}{18} = \\dfrac{35}{3} \\approx 11.7\\ \\text{m s}^{-1}",
          "explanation": "Dividing 210 by 18 simplifies to 35 over 3, which is about 11.7 m/s.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the answer",
          "workingLatex": "\\text{average speed} \\approx 11.7\\ \\text{m s}^{-1}",
          "explanation": "A steady 11.7 m/s would have carried the vehicle the same 210 m in the same 18 s. Note it sits below the peak speed of 15 m/s, which makes sense because the vehicle was slower than 15 during the accelerating and decelerating phases.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{35}{3}\\approx 11.7\\ \\text{m s}^{-1}$"
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": ["kinematics-graphs", "velocity-time", "area-under-graph", "trapezium", "distance"],
    "questionText": "A car starts at rest, accelerates uniformly to $24\\ \\text{m s}^{-1}$ in $8\\ \\text{s}$, holds this speed for $12\\ \\text{s}$, then brakes uniformly to rest in $6\\ \\text{s}$. Describe the shape of the velocity–time graph and find the total distance travelled.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time t in seconds, marked 0 to 26. Vertical axis: velocity v in m s^-1, marked 0 to 24. Three straight segments: a line rises from (0,0) to (8,24); a horizontal line runs from (8,24) to (20,24); a line falls from (20,24) to (26,0). The region under the graph is shaded.",
      "alt": "v-t graph through (0,0), (8,24), (20,24), (26,0): rise, constant, fall."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Locate the key points in time",
          "workingLatex": "(0,0)\\to(8,24)\\to(20,24)\\to(26,0)",
          "explanation": "Accelerating to 24 m/s takes 8 s, the steady phase adds 12 s to reach t = 20, and braking for 6 s reaches t = 26. Fixing these corner points lets us draw and measure the graph.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Describe the graph",
          "workingLatex": "\\text{rising line} \\to \\text{horizontal line} \\to \\text{falling line}",
          "explanation": "The car speeds up (a straight line climbing from the origin), then cruises (a horizontal line at 24), then slows to rest (a straight line falling back to the axis). Overall the shape is a trapezium.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall that area equals distance",
          "workingLatex": "\\text{distance} = \\text{area under the } v\\text{--}t \\text{ graph}",
          "explanation": "The distance is the area enclosed between the graph and the time axis, so we now find that area.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Area of the accelerating triangle",
          "workingLatex": "\\tfrac{1}{2}\\times 8\\times 24 = 96\\ \\text{m}",
          "explanation": "The first phase is a triangle 8 s wide and 24 tall, so half of base times height is the distance covered while speeding up.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Area of the cruising rectangle",
          "workingLatex": "24\\times 12 = 288\\ \\text{m}",
          "explanation": "For 12 seconds the car holds 24 m/s, and distance at constant speed is speed times time.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area of the braking triangle",
          "workingLatex": "\\tfrac{1}{2}\\times 6\\times 24 = 72\\ \\text{m}",
          "explanation": "The braking phase is a triangle 6 s wide and 24 tall, giving the distance covered while slowing to rest.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the three areas",
          "workingLatex": "96 + 288 + 72 = 456\\ \\text{m}",
          "explanation": "Summing the three pieces gives the total distance for the whole journey.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check with the trapezium formula",
          "workingLatex": "\\tfrac{1}{2}(12+26)\\times 24 = \\tfrac{1}{2}\\times 38\\times 24 = 456\\ \\text{m}",
          "explanation": "The parallel sides are the top 12 and the bottom 26, with height 24. Getting 456 again confirms the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "s = 456\\ \\text{m}",
          "explanation": "The trapezium-shaped graph corresponds to a total distance of 456 metres.",
          "diagram": null
        }
      ],
      "finalAnswer": "The graph is a trapezium: a straight line rising from $(0,0)$ to $(8,24)$, a horizontal line to $(20,24)$, then a straight line falling to $(26,0)$. Total distance $= 456\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": ["kinematics-graphs", "velocity-time", "gradient", "acceleration", "deceleration"],
    "questionText": "A velocity–time graph consists of straight-line segments joining the points $(0,0)$, $(4,20)$, $(14,20)$ and $(20,0)$ (time in seconds, velocity in $\\text{m s}^{-1}$). Find the acceleration in the first phase and in the last phase, and describe what each value tells you about the motion.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time t in seconds, marked 0 to 20. Vertical axis: velocity v in m s^-1, marked 0 to 20. Three straight segments: a line rises from (0,0) to (4,20); a horizontal line runs from (4,20) to (14,20); a line falls from (14,20) to (20,0).",
      "alt": "v-t graph through (0,0), (4,20), (14,20), (20,0)."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of gradient on a v–t graph",
          "workingLatex": "\\text{acceleration} = \\text{gradient of the } v\\text{--}t \\text{ graph}",
          "explanation": "Acceleration is the rate at which velocity changes with time, which is exactly the steepness (gradient) of the line on a velocity–time graph.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the first-phase endpoints",
          "workingLatex": "(0,0) \\text{ to } (4,20)",
          "explanation": "The first phase is the segment from the origin up to (4,20), so we use these two points to measure its steepness.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the gradient of the first phase",
          "workingLatex": "a_1 = \\dfrac{20-0}{4-0}",
          "explanation": "Gradient is change in velocity divided by change in time, so we take the rise in v over the run in t between the two points.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the first-phase acceleration",
          "workingLatex": "a_1 = \\dfrac{20}{4} = 5\\ \\text{m s}^{-2}",
          "explanation": "The velocity gains 20 m/s over 4 s, which is 5 m/s each second. Because it is positive, the car is speeding up.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the middle phase",
          "workingLatex": "\\text{gradient} = 0 \\text{ from } (4,20)\\text{ to }(14,20)",
          "explanation": "The line is flat here, so the velocity is not changing and the acceleration is zero. This phase is not asked for but confirms the car is cruising in between.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the last-phase endpoints",
          "workingLatex": "(14,20) \\text{ to } (20,0)",
          "explanation": "The final phase is the segment falling from (14,20) down to (20,0), so we use these two points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the gradient of the last phase",
          "workingLatex": "a_3 = \\dfrac{0-20}{20-14}",
          "explanation": "Again take the change in velocity over the change in time. Here velocity drops, so the top of the fraction is negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the last-phase acceleration",
          "workingLatex": "a_3 = \\dfrac{-20}{6} = -\\dfrac{10}{3} \\approx -3.33\\ \\text{m s}^{-2}",
          "explanation": "The velocity loses 20 m/s over 6 s, giving a negative gradient of about -3.33 m/s².",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Interpret the two values",
          "workingLatex": "a_1 = +5,\\qquad a_3 = -\\tfrac{10}{3}",
          "explanation": "A positive acceleration means the car is speeding up in the first phase; a negative acceleration (a deceleration of about 3.33 m/s²) means it is slowing down in the last phase. The last phase is gentler in magnitude, so the braking is less sharp than the initial pick-up.",
          "diagram": null
        }
      ],
      "finalAnswer": "First phase: $a_1 = 5\\ \\text{m s}^{-2}$ (the car accelerates, speeding up). Last phase: $a_3 = -\\dfrac{10}{3}\\approx -3.33\\ \\text{m s}^{-2}$ (the car decelerates, slowing to rest)."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["kinematics-graphs", "velocity-time", "gradient", "deceleration", "braking-distance"],
    "questionText": "A cyclist travelling at $12\\ \\text{m s}^{-1}$ brakes uniformly to rest in $8\\ \\text{s}$. Using a velocity–time graph, find the deceleration and the braking distance.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time t in seconds, marked 0 to 8. Vertical axis: velocity v in m s^-1, marked 0 to 12. A single straight line falls from (0,12) to (8,0). The triangular region under the line is shaded.",
      "alt": "v-t graph: straight line falling from (0,12) to (8,0)."
    },
    "workedSolution": {
      "steps": [
        {
                "stepNumber": 1,
                "description": "Describe the graph",
                "workingLatex": "\\text{straight line from } (0,12) \\text{ to } (8,0)",
                "explanation": "The cyclist starts at 12 m/s and slows uniformly to rest after 8 s, so the graph is a single straight line dropping from $(0,12)$ to $(8,0)$. The region beneath it is a triangle.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "Gradient of a v–t line is acceleration",
                "workingLatex": "\\text{acceleration} = \\text{gradient of the } v\\text{--}t \\text{ line}",
                "explanation": "How quickly the velocity changes is measured by the steepness of the line, so its gradient is the acceleration. Because the line falls, we expect a negative value.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "Set up the gradient",
                "workingLatex": "a = \\dfrac{0-12}{8-0}",
                "explanation": "Take the change in velocity divided by the change in time between the two ends of the line, $(0,12)$ and $(8,0)$.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Evaluate the gradient",
                "workingLatex": "a = \\dfrac{-12}{8} = -1.5\\ \\text{m s}^{-2}",
                "explanation": "The velocity falls by 12 m/s over 8 s, giving $-1.5\\ \\text{m s}^{-2}$.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Interpret the negative sign",
                "workingLatex": "\\text{deceleration} = 1.5\\ \\text{m s}^{-2}",
                "explanation": "A negative acceleration just means the cyclist is slowing down. Reported as a deceleration, its magnitude is $1.5\\ \\text{m s}^{-2}$.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Area under the graph gives distance",
                "workingLatex": "\\text{braking distance} = \\text{area under the line}",
                "explanation": "On a velocity–time graph the area between the line and the time axis is the distance travelled, because distance accumulates as speed multiplied by time. Here that area is a triangle.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Read the triangle's dimensions",
                "workingLatex": "\\text{base} = 8\\ \\text{s}, \\qquad \\text{height} = 12\\ \\text{m s}^{-1}",
                "explanation": "The triangle spans 8 s along the time axis and rises to the starting speed of 12 m/s.",
                "diagram": null
        },
        {
                "stepNumber": 8,
                "description": "Compute the triangle's area",
                "workingLatex": "\\tfrac{1}{2}\\times 8\\times 12 = 48\\ \\text{m}",
                "explanation": "Half of base times height gives the distance covered while braking.",
                "diagram": null
        },
        {
                "stepNumber": 9,
                "description": "Check using the average velocity",
                "workingLatex": "s = \\tfrac{1}{2}(u+v)\\,t = \\tfrac{1}{2}(12+0)\\times 8 = 48\\ \\text{m}",
                "explanation": "For uniform braking the average speed is halfway between the start and end speeds, $\\tfrac{1}{2}(12+0)=6\\ \\text{m s}^{-1}$. Multiplying by the 8 s gives 48 m, matching the area and confirming the distance.",
                "diagram": null
        },
        {
                "stepNumber": 10,
                "description": "State both results",
                "workingLatex": "\\text{deceleration} = 1.5\\ \\text{m s}^{-2}, \\quad \\text{distance} = 48\\ \\text{m}",
                "explanation": "The cyclist decelerates at $1.5\\ \\text{m s}^{-2}$ and travels 48 m before stopping: the slope gives the rate, the area gives the distance.",
                "diagram": null
        }
],
      "finalAnswer": "Deceleration $= 1.5\\ \\text{m s}^{-2}$; braking distance $= 48\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["kinematics-graphs", "velocity-time", "area-under-graph", "acceleration", "distance"],
    "questionText": "A train accelerates from rest at $1.2\\ \\text{m s}^{-2}$ for $20\\ \\text{s}$, cruises at constant speed for $60\\ \\text{s}$, then decelerates uniformly to rest in $30\\ \\text{s}$. Find the cruising speed and the total distance travelled.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time t in seconds, marked 0 to 110. Vertical axis: velocity v in m s^-1, marked 0 to 24. Three straight segments: a line rises from (0,0) to (20,24); a horizontal line runs from (20,24) to (80,24); a line falls from (80,24) to (110,0). The region under the graph is shaded.",
      "alt": "v-t graph through (0,0), (20,24), (80,24), (110,0)."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the cruising speed with v = u + at",
          "workingLatex": "v = u + at",
          "explanation": "The cruising speed is the velocity reached at the end of the accelerating phase, so we use the constant-acceleration relation between velocity, starting velocity, acceleration and time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the accelerating-phase values",
          "workingLatex": "v = 0 + 1.2\\times 20",
          "explanation": "The train starts from rest, so u = 0, with a = 1.2 m/s² acting for t = 20 s.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the cruising speed",
          "workingLatex": "v = 24\\ \\text{m s}^{-1}",
          "explanation": "Gaining 1.2 m/s every second for 20 s reaches 24 m/s, which is the steady cruising speed.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Locate the key points in time",
          "workingLatex": "(0,0)\\to(20,24)\\to(80,24)\\to(110,0)",
          "explanation": "Cruising for 60 s takes t from 20 to 80, and decelerating for 30 s takes t from 80 to 110. These corners let us measure the areas.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall that area equals distance",
          "workingLatex": "\\text{distance} = \\text{area under the } v\\text{--}t \\text{ graph}",
          "explanation": "Total distance is the enclosed area, which splits neatly into a triangle, a rectangle and a triangle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area of the accelerating triangle",
          "workingLatex": "\\tfrac{1}{2}\\times 20\\times 24 = 240\\ \\text{m}",
          "explanation": "The first phase is a triangle 20 s wide and 24 tall, so half of base times height gives the distance while speeding up.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area of the cruising rectangle",
          "workingLatex": "24\\times 60 = 1440\\ \\text{m}",
          "explanation": "For 60 s the train holds 24 m/s, and distance at constant speed is speed times time.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Area of the decelerating triangle",
          "workingLatex": "\\tfrac{1}{2}\\times 30\\times 24 = 360\\ \\text{m}",
          "explanation": "The final phase is a triangle 30 s wide and 24 tall, giving the distance while slowing to rest.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the three areas",
          "workingLatex": "240 + 1440 + 360 = 2040\\ \\text{m}",
          "explanation": "Summing the three pieces gives the total distance for the whole run.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check with the trapezium formula",
          "workingLatex": "\\tfrac{1}{2}(60+110)\\times 24 = \\tfrac{1}{2}\\times 170\\times 24 = 2040\\ \\text{m}",
          "explanation": "The parallel sides are the top 60 and bottom 110, height 24. Getting 2040 again confirms the total.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both results",
          "workingLatex": "v = 24\\ \\text{m s}^{-1},\\qquad s = 2040\\ \\text{m}",
          "explanation": "The cruising speed is 24 m/s and the whole journey covers 2040 metres.",
          "diagram": null
        }
      ],
      "finalAnswer": "Cruising speed $= 24\\ \\text{m s}^{-1}$; total distance $= 2040\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": ["kinematics-graphs", "velocity-time", "distance", "displacement", "signed-area"],
    "questionText": "A remote-controlled car moves along a straight line. Its velocity–time graph is $+10\\ \\text{m s}^{-1}$ for the first $4\\ \\text{s}$, then it reverses to $-10\\ \\text{m s}^{-1}$ for the next $2\\ \\text{s}$. Find the total distance travelled and the final displacement, and contrast the two quantities.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time t in seconds, marked 0 to 6. Vertical axis: velocity v in m s^-1, marked from -10 to 10 with 0 in the middle. A horizontal line at v = 10 runs from (0,10) to (4,10) above the axis; the velocity then switches to v = -10 with a horizontal line from (4,-10) to (6,-10) below the axis. The area above the axis (a rectangle) is positive; the area below the axis (a rectangle) is negative.",
      "alt": "v-t graph: constant +10 from t=0 to 4, then constant -10 from t=4 to 6."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distinguish distance from displacement",
          "workingLatex": "\\text{distance} = \\sum |\\text{areas}|,\\qquad \\text{displacement} = \\sum \\text{signed areas}",
          "explanation": "Distance adds up how far the car moves regardless of direction, so we take the size of each area. Displacement tracks net position from the start, so areas below the axis (moving backwards) count as negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First phase: area above the axis",
          "workingLatex": "\\text{width} = 4\\ \\text{s},\\quad \\text{height} = 10\\ \\text{m s}^{-1}",
          "explanation": "For the first 4 s the car moves forward at a steady 10 m/s, forming a rectangle above the time axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Value of the first area",
          "workingLatex": "10\\times 4 = 40\\ \\text{m} \\;(\\text{forwards})",
          "explanation": "Speed times time gives 40 m of forward motion, a positive contribution to displacement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second phase: area below the axis",
          "workingLatex": "\\text{width} = 2\\ \\text{s},\\quad \\text{height} = 10\\ \\text{m s}^{-1}\\ (\\text{below axis})",
          "explanation": "After reversing, the car travels at 10 m/s in the opposite direction for 2 s, forming a rectangle below the axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Signed value of the second area",
          "workingLatex": "(-10)\\times 2 = -20\\ \\text{m} \\;(\\text{backwards})",
          "explanation": "Because the velocity is negative, this area is negative: the car moves 20 m backwards, which subtracts from its net position.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Total distance travelled",
          "workingLatex": "|40| + |-20| = 40 + 20 = 60\\ \\text{m}",
          "explanation": "Distance ignores direction, so we add the sizes of both areas: 40 m forward plus 20 m back is 60 m of travel in total.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Final displacement",
          "workingLatex": "40 + (-20) = 20\\ \\text{m}",
          "explanation": "Displacement is the signed sum, so the 20 m backwards partly cancels the 40 m forwards, leaving the car 20 m ahead of its start.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the direction",
          "workingLatex": "+20\\ \\text{m} \\Rightarrow 20\\ \\text{m in the original direction}",
          "explanation": "The positive sign tells us the car finishes on the forward side of where it began, 20 m along the line.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Contrast the two answers",
          "workingLatex": "60\\ \\text{m} \\neq 20\\ \\text{m}",
          "explanation": "The path length (60 m) is larger than the straight-line change in position (20 m) precisely because the car doubled back. Whenever motion reverses, distance exceeds the magnitude of displacement.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total distance $= 60\\ \\text{m}$; final displacement $= 20\\ \\text{m}$ (in the original direction). Distance counts both the forward 40 m and the backward 20 m, whereas displacement nets them to 20 m, so the reversal makes the distance larger than the displacement."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": ["kinematics-graphs", "displacement-time", "gradient", "velocity", "average-velocity"],
    "questionText": "A displacement–time graph for an object moving in a straight line consists of straight segments joining the points $(0,0)$, $(4,20)$, $(9,20)$ and $(12,5)$ (time in seconds, displacement in metres). Find the velocity on each segment and the average velocity over the whole $12\\ \\text{s}$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Displacement–time graph. Horizontal axis: time t in seconds, marked 0 to 12. Vertical axis: displacement s in metres, marked 0 to 20. Three straight segments: a line rises from (0,0) to (4,20); a horizontal line runs from (4,20) to (9,20); a line falls from (9,20) to (12,5).",
      "alt": "s-t graph through (0,0), (4,20), (9,20), (12,5)."
    },
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of gradient on an s–t graph",
          "workingLatex": "\\text{velocity} = \\text{gradient of the } s\\text{--}t \\text{ graph}",
          "explanation": "Velocity is the rate at which displacement changes with time, which is exactly the steepness of the line on a displacement–time graph. A downward slope means motion back towards the start.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First segment endpoints",
          "workingLatex": "(0,0) \\text{ to } (4,20)",
          "explanation": "We read the two ends of the first straight piece to measure its slope.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Velocity on the first segment",
          "workingLatex": "v_1 = \\dfrac{20-0}{4-0} = 5\\ \\text{m s}^{-1}",
          "explanation": "Displacement rises 20 m in 4 s, so the object moves forward at a steady 5 m/s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second segment endpoints",
          "workingLatex": "(4,20) \\text{ to } (9,20)",
          "explanation": "The second piece is flat, so we check what a horizontal line means for velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Velocity on the second segment",
          "workingLatex": "v_2 = \\dfrac{20-20}{9-4} = 0\\ \\text{m s}^{-1}",
          "explanation": "The displacement does not change, so the object is momentarily stationary: it stays 20 m from the start for those 5 seconds.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Third segment endpoints",
          "workingLatex": "(9,20) \\text{ to } (12,5)",
          "explanation": "The final piece slopes downward, so we expect a negative velocity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Velocity on the third segment",
          "workingLatex": "v_3 = \\dfrac{5-20}{12-9} = \\dfrac{-15}{3} = -5\\ \\text{m s}^{-1}",
          "explanation": "Displacement falls 15 m in 3 s, so the object moves backwards at 5 m/s, heading towards its starting point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the average velocity formula",
          "workingLatex": "\\text{average velocity} = \\dfrac{\\text{total displacement}}{\\text{total time}}",
          "explanation": "Average velocity depends only on where the object starts and finishes, not on the path in between, so we need the net change in displacement over the total time.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the total displacement",
          "workingLatex": "\\Delta s = 5 - 0 = 5\\ \\text{m}",
          "explanation": "The object begins at s = 0 and ends at s = 5, so its net change in position over the whole trip is just 5 m forward.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the average velocity",
          "workingLatex": "\\text{average velocity} = \\dfrac{5}{12} \\approx 0.42\\ \\text{m s}^{-1}",
          "explanation": "Dividing the 5 m net displacement by the 12 s total time gives about 0.42 m/s in the forward direction.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Interpret the result",
          "workingLatex": "v_1=5,\\ v_2=0,\\ v_3=-5,\\quad \\bar{v}=\\tfrac{5}{12}",
          "explanation": "The object sped out, paused, then came partway back. Its average velocity is small and positive because the return trip cancelled most of the outward displacement, leaving a small net advance.",
          "diagram": null
        }
      ],
      "finalAnswer": "Velocities: segment 1 $= 5\\ \\text{m s}^{-1}$, segment 2 $= 0\\ \\text{m s}^{-1}$, segment 3 $= -5\\ \\text{m s}^{-1}$. Average velocity $= \\dfrac{5}{12}\\approx 0.42\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": ["velocity-time-graph", "projectile", "area-under-graph", "gradient", "vertical-motion"],
    "questionText": "A ball is thrown vertically upwards. Its velocity-time graph is a straight line running from $+19.6\\ \\text{m s}^{-1}$ at $t=0$ down to $-19.6\\ \\text{m s}^{-1}$ at $t=4\\ \\text{s}$, so the line has a constant gradient of $-9.8$. (a) State when the ball reaches its highest point. (b) Using the area between the graph and the time axis while the velocity is positive, find the height the ball rises.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A velocity-time graph. Horizontal axis is time t in seconds (0 to 4), vertical axis is velocity v in m s^-1 (from -19.6 to +19.6). A single straight line runs from the point (0, 19.6) down to the point (4, -19.6), crossing the time axis at (2, 0). The region between the line and the axis for 0 <= t <= 2 is a triangle above the axis; the region for 2 <= t <= 4 is a triangle below the axis.",
      "alt": "Straight velocity-time line from (0, 19.6) to (4, -19.6) crossing the axis at t = 2."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read what the gradient of the line represents.", "workingLatex": "\\text{gradient of a } v\\text{-}t \\text{ graph} = \\text{acceleration} = -9.8\\ \\text{m s}^{-2}", "explanation": "On a velocity-time graph the steepness of the line tells you how quickly the velocity is changing, which is exactly the acceleration. Here the line drops by $9.8\\ \\text{m s}^{-1}$ every second, so the acceleration is a constant $-9.8\\ \\text{m s}^{-2}$: gravity pulling the ball down throughout the flight.", "diagram": null },
        { "stepNumber": 2, "description": "Recognise what happens at the highest point.", "workingLatex": "v = 0 \\text{ at the top of the flight}", "explanation": "Going up the ball slows down, and coming down it speeds up in the opposite direction. The instant it switches from rising to falling it is momentarily not moving, so its velocity is zero right at the peak.", "diagram": null },
        { "stepNumber": 3, "description": "Write the velocity as a function of time.", "workingLatex": "v = 19.6 - 9.8t", "explanation": "The line starts at $19.6\\ \\text{m s}^{-1}$ and loses $9.8\\ \\text{m s}^{-1}$ each second, so subtracting $9.8t$ from the starting value gives the velocity at any moment.", "diagram": null },
        { "stepNumber": 4, "description": "Set the velocity to zero and solve for the time.", "workingLatex": "19.6 - 9.8t = 0 \\;\\Rightarrow\\; t = \\frac{19.6}{9.8} = 2\\ \\text{s}", "explanation": "Setting $v=0$ pins down the exact moment the ball stops rising. Dividing the launch speed by the rate at which it is lost gives $2\\ \\text{s}$.", "diagram": null },
        { "stepNumber": 5, "description": "Answer part (a).", "workingLatex": "t_{\\text{top}} = 2\\ \\text{s}", "explanation": "This matches the graph, where the line crosses the time axis exactly halfway between $t=0$ and $t=4$. The symmetry of a straight line guarantees the peak sits at the midpoint in time.", "diagram": null },
        { "stepNumber": 6, "description": "Recall how to get displacement from a velocity-time graph.", "workingLatex": "\\text{displacement} = \\text{area between the line and the } t\\text{-axis}", "explanation": "Velocity multiplied by time gives distance, and on the graph that product is precisely the area beneath the line. So to find how high the ball climbs we measure the area while the velocity is positive.", "diagram": null },
        { "stepNumber": 7, "description": "Identify the region that gives the rise.", "workingLatex": "\\text{triangle over } 0 \\le t \\le 2,\\; \\text{height } 19.6", "explanation": "While the ball is going up the velocity is positive, which is the part of the graph from $t=0$ to $t=2$. That region is a right-angled triangle sitting above the time axis.", "diagram": null },
        { "stepNumber": 8, "description": "Compute the area of that triangle.", "workingLatex": "A = \\tfrac{1}{2} \\times 2 \\times 19.6 = 19.6\\ \\text{m}", "explanation": "Half base times height gives a triangle's area. The base is the $2\\ \\text{s}$ of rising and the height is the launch speed $19.6\\ \\text{m s}^{-1}$.", "diagram": null },
        { "stepNumber": 9, "description": "Interpret the area as the height risen.", "workingLatex": "\\text{height risen} = 19.6\\ \\text{m}", "explanation": "That area is the upward displacement, so the ball climbs $19.6\\ \\text{m}$ above its starting point before turning back.", "diagram": null },
        { "stepNumber": 10, "description": "Check using the symmetry of the graph.", "workingLatex": "\\text{area below axis } (2\\le t\\le 4) = \\tfrac{1}{2}\\times 2 \\times 19.6 = 19.6\\ \\text{m}", "explanation": "The triangle below the axis is the same size, so the ball falls the same $19.6\\ \\text{m}$ back to its start. That balance is a reassuring sign the height is correct.", "diagram": null }
      ],
      "finalAnswer": "The ball reaches its highest point at $t = 2\\ \\text{s}$, and it rises a height of $19.6\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["velocity-time-graph", "area-under-graph", "trapezium-rule", "distance", "constant-acceleration"],
    "questionText": "A vehicle starts from rest and accelerates uniformly to a speed $V$ over $5\\ \\text{s}$, travels at the constant speed $V$ for the next $10\\ \\text{s}$, then decelerates uniformly to rest over a final $5\\ \\text{s}$. The total distance travelled is $300\\ \\text{m}$. Find $V$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A velocity-time graph. Horizontal axis is time t in seconds (0 to 20), vertical axis is velocity v in m s^-1. Three straight segments form a trapezium above the axis with vertices (0, 0), (5, V), (15, V) and (20, 0): a rising line from (0,0) to (5,V), a horizontal line from (5,V) to (15,V), and a falling line from (15,V) to (20,0).",
      "alt": "Symmetric trapezium velocity-time graph with corners (0,0), (5,V), (15,V), (20,0)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Link the distance to the area under the graph.", "workingLatex": "\\text{distance} = \\text{area under the } v\\text{-}t \\text{ graph}", "explanation": "The area beneath a velocity-time graph always equals the distance travelled, because velocity times time is distance. So the $300\\ \\text{m}$ must equal the total area of the shape.", "diagram": null },
        { "stepNumber": 2, "description": "Describe the shape of the motion.", "workingLatex": "\\text{shape} = \\text{trapezium}", "explanation": "Speeding up, holding steady, then slowing to rest traces a rise, a flat top and a fall. Together these three straight segments enclose a trapezium above the time axis.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the two parallel sides of the trapezium.", "workingLatex": "\\text{top} = 10,\\qquad \\text{bottom} = 5+10+5 = 20", "explanation": "The parallel sides are the horizontal top (the $10\\ \\text{s}$ at constant speed) and the whole base along the time axis (the $20\\ \\text{s}$ total). These are the two lengths the trapezium formula needs.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the height of the trapezium.", "workingLatex": "\\text{height} = V", "explanation": "The perpendicular distance between the two parallel sides is the cruising speed $V$, since that is how high the flat top sits above the time axis.", "diagram": null },
        { "stepNumber": 5, "description": "Apply the trapezium area formula.", "workingLatex": "A = \\tfrac{1}{2}(a+b)h = \\tfrac{1}{2}(10 + 20)\\,V", "explanation": "The area of a trapezium is half the sum of the parallel sides times the height. Substituting the two times and the speed $V$ sets up the equation for the distance.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify the area.", "workingLatex": "A = \\tfrac{1}{2}(30)\\,V = 15V", "explanation": "Adding the parallel sides gives $30$, and half of that is $15$, so the total distance in terms of $V$ is $15V$.", "diagram": null },
        { "stepNumber": 7, "description": "Set the area equal to the given distance.", "workingLatex": "15V = 300", "explanation": "The formula and the stated $300\\ \\text{m}$ describe the same total distance, so they must be equal. This gives a single equation to solve.", "diagram": null },
        { "stepNumber": 8, "description": "Solve for V.", "workingLatex": "V = \\frac{300}{15} = 20\\ \\text{m s}^{-1}", "explanation": "Dividing both sides by $15$ isolates $V$ and gives the cruising speed of $20\\ \\text{m s}^{-1}$.", "diagram": null },
        { "stepNumber": 9, "description": "Verify by splitting the shape into three simple regions.", "workingLatex": "\\underbrace{\\tfrac{1}{2}(5)(20)}_{50} + \\underbrace{(10)(20)}_{200} + \\underbrace{\\tfrac{1}{2}(5)(20)}_{50} = 300", "explanation": "Breaking the trapezium into two triangles and a rectangle gives $50 + 200 + 50 = 300\\ \\text{m}$, which matches the given distance and confirms $V=20$.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "V = 20\\ \\text{m s}^{-1}", "explanation": "Both methods agree, so the cruising speed is $20\\ \\text{m s}^{-1}$.", "diagram": null }
      ],
      "finalAnswer": "$V = 20\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": ["velocity-time-graph", "area-under-graph", "comparing-motion", "average-velocity", "distance"],
    "questionText": "On the same velocity-time axes, from $t=0$ to $t=10\\ \\text{s}$: object $A$ moves at a constant $15\\ \\text{m s}^{-1}$, while object $B$ starts from rest and accelerates uniformly to $30\\ \\text{m s}^{-1}$ at $t=10\\ \\text{s}$. By comparing the areas under the two graphs, determine which object travels further in the $10\\ \\text{s}$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A velocity-time graph with two lines. Horizontal axis is time t in seconds (0 to 10), vertical axis is velocity v in m s^-1 (0 to 30). Line A is horizontal at v = 15, from (0, 15) to (10, 15). Line B is a straight line from (0, 0) to (10, 30). The two lines cross at (5, 15).",
      "alt": "Horizontal line A at 15 and rising straight line B from (0,0) to (10,30), crossing at (5,15)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the principle that will decide the comparison.", "workingLatex": "\\text{distance travelled} = \\text{area under the } v\\text{-}t \\text{ graph}", "explanation": "Whichever object encloses the larger area under its velocity-time line has travelled further. So the whole question reduces to comparing two areas.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the shape under A's graph.", "workingLatex": "\\text{A: rectangle, width } 10,\\ \\text{height } 15", "explanation": "A moves at a steady $15\\ \\text{m s}^{-1}$, so its graph is a horizontal line and the region beneath it is a simple rectangle.", "diagram": null },
        { "stepNumber": 3, "description": "Compute A's distance.", "workingLatex": "d_A = 15 \\times 10 = 150\\ \\text{m}", "explanation": "The rectangle's area is speed times time, giving $150\\ \\text{m}$ for object A.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the shape under B's graph.", "workingLatex": "\\text{B: triangle, base } 10,\\ \\text{height } 30", "explanation": "B accelerates uniformly from rest, so its graph is a straight line rising from the origin and the region beneath it is a right-angled triangle.", "diagram": null },
        { "stepNumber": 5, "description": "Compute B's distance.", "workingLatex": "d_B = \\tfrac{1}{2} \\times 10 \\times 30 = 150\\ \\text{m}", "explanation": "Half base times height gives the triangle's area, which comes out as $150\\ \\text{m}$ for object B.", "diagram": null },
        { "stepNumber": 6, "description": "Compare the two areas.", "workingLatex": "d_A = 150\\ \\text{m} = d_B", "explanation": "The rectangle and the triangle have exactly the same area, so neither object travels further: they cover the same distance.", "diagram": null },
        { "stepNumber": 7, "description": "Explain the result using average velocity.", "workingLatex": "\\bar v_B = \\tfrac{1}{2}(0 + 30) = 15\\ \\text{m s}^{-1}", "explanation": "For uniform acceleration the average velocity is halfway between the start and end speeds. B averages $15\\ \\text{m s}^{-1}$, precisely A's constant speed, so over the same time they must cover the same distance.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret where the lines cross.", "workingLatex": "\\text{lines meet at } (5, 15)", "explanation": "Before $t=5$ object A is faster, and after $t=5$ object B is faster. B's early deficit is exactly cancelled by its later surplus, which is why the areas match.", "diagram": null },
        { "stepNumber": 9, "description": "State the conclusion.", "workingLatex": "d_A = d_B = 150\\ \\text{m}", "explanation": "Both objects travel $150\\ \\text{m}$ in the $10\\ \\text{s}$, so neither is ahead in distance at the end.", "diagram": null }
      ],
      "finalAnswer": "Neither travels further: both cover $150\\ \\text{m}$ in the $10\\ \\text{s}$ (rectangle $15\\times10 = 150$, triangle $\\tfrac{1}{2}\\times10\\times30 = 150$)."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": ["velocity-time-graph", "average-speed", "weighted-average", "distance", "step-graph"],
    "questionText": "A cyclist rides in three stages: $8\\ \\text{m s}^{-1}$ for $30\\ \\text{s}$, then $12\\ \\text{m s}^{-1}$ for $20\\ \\text{s}$, then $5\\ \\text{m s}^{-1}$ for $40\\ \\text{s}$. Find the cyclist's average speed for the whole ride, and describe the shape of the velocity-time graph.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A velocity-time graph. Horizontal axis is time t in seconds (0 to 90), vertical axis is velocity v in m s^-1. Three horizontal segments: v = 8 from t = 0 to t = 30, v = 12 from t = 30 to t = 50, and v = 5 from t = 50 to t = 90. Vertical jumps connect the segments at t = 30 (from 8 up to 12) and at t = 50 (from 12 down to 5).",
      "alt": "Step-shaped velocity-time graph at heights 8, 12 and 5 over the three time intervals."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the correct definition of average speed.", "workingLatex": "\\text{average speed} = \\frac{\\text{total distance}}{\\text{total time}}", "explanation": "Average speed is never the plain mean of the individual speeds. It is total distance divided by total time, because the legs last for different lengths of time and the longer legs must count for more.", "diagram": null },
        { "stepNumber": 2, "description": "Find the distance of leg 1.", "workingLatex": "d_1 = 8 \\times 30 = 240\\ \\text{m}", "explanation": "On each flat section distance is just speed times time, which is the area of that rectangle under the graph. Leg 1 covers $240\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the distance of leg 2.", "workingLatex": "d_2 = 12 \\times 20 = 240\\ \\text{m}", "explanation": "The same rectangle idea applies: $12\\ \\text{m s}^{-1}$ for $20\\ \\text{s}$ gives another $240\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the distance of leg 3.", "workingLatex": "d_3 = 5 \\times 40 = 200\\ \\text{m}", "explanation": "The slow final leg lasts the longest but at the lowest speed, giving $200\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the leg distances for the total.", "workingLatex": "d = 240 + 240 + 200 = 680\\ \\text{m}", "explanation": "Summing the three rectangles gives the whole distance ridden, $680\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the leg times for the total time.", "workingLatex": "t = 30 + 20 + 40 = 90\\ \\text{s}", "explanation": "The total journey time is simply the three durations added together, $90\\ \\text{s}$.", "diagram": null },
        { "stepNumber": 7, "description": "Divide to find the average speed.", "workingLatex": "\\bar v = \\frac{680}{90} = \\frac{68}{9} = 7.56\\ \\text{m s}^{-1}\\ (3\\text{ s.f.})", "explanation": "Total distance over total time gives $7.56\\ \\text{m s}^{-1}$ to three significant figures.", "diagram": null },
        { "stepNumber": 8, "description": "Contrast with the wrong method.", "workingLatex": "\\frac{8+12+5}{3} = 8.33\\ \\text{m s}^{-1} \\ne 7.56\\ \\text{m s}^{-1}", "explanation": "Averaging the three speeds gives $8.33\\ \\text{m s}^{-1}$, which is too high. It ignores that the slow $5\\ \\text{m s}^{-1}$ leg lasts longest, so a proper weighted average pulls the value down.", "diagram": null },
        { "stepNumber": 9, "description": "Describe the shape of the velocity-time graph.", "workingLatex": "\\text{three horizontal steps at } 8,\\ 12,\\ 5", "explanation": "Because each leg is at a steady speed, the graph is three flat horizontal segments. There is no sloping part, since the speed does not change during a leg.", "diagram": null },
        { "stepNumber": 10, "description": "Comment on the transitions between legs.", "workingLatex": "\\text{vertical jumps at } t=30 \\text{ and } t=50", "explanation": "The idealised model shows the speed jumping instantly between legs, drawn as vertical lines at $t=30$ and $t=50$. In reality the change would be a short steep slope, but the model treats it as instantaneous.", "diagram": null }
      ],
      "finalAnswer": "Average speed $= \\dfrac{680}{90} = 7.56\\ \\text{m s}^{-1}$ (3 s.f.). The graph is three horizontal steps at $8$, $12$ and $5\\ \\text{m s}^{-1}$, with vertical jumps at $t=30\\ \\text{s}$ and $t=50\\ \\text{s}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["velocity-time-graph", "area-under-graph", "average-speed", "trapezium-rule", "distance"],
    "questionText": "A lift starts from rest and accelerates uniformly to $2\\ \\text{m s}^{-1}$ in $2\\ \\text{s}$, travels at $2\\ \\text{m s}^{-1}$ for $5\\ \\text{s}$, then decelerates uniformly to rest in $2\\ \\text{s}$. Find the total height risen and the average speed for the journey.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A velocity-time graph. Horizontal axis is time t in seconds (0 to 9), vertical axis is velocity v in m s^-1 (0 to 2). Three straight segments form a trapezium with vertices (0, 0), (2, 2), (7, 2) and (9, 0): a rising line from (0,0) to (2,2), a horizontal line from (2,2) to (7,2), and a falling line from (7,2) to (9,0).",
      "alt": "Trapezium velocity-time graph with corners (0,0), (2,2), (7,2), (9,0)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Link the height risen to the area under the graph.", "workingLatex": "\\text{height} = \\text{area under the } v\\text{-}t \\text{ graph}", "explanation": "The lift moves in one direction, so the area under its velocity-time graph gives the distance it rises. We just need the area of the trapezium.", "diagram": null },
        { "stepNumber": 2, "description": "Split the shape into three easy regions.", "workingLatex": "\\text{triangle} + \\text{rectangle} + \\text{triangle}", "explanation": "Rather than use a formula, we can cut the trapezium into the accelerating triangle, the steady rectangle and the decelerating triangle, then add their areas.", "diagram": null },
        { "stepNumber": 3, "description": "Area of the accelerating phase.", "workingLatex": "A_1 = \\tfrac{1}{2} \\times 2 \\times 2 = 2\\ \\text{m}", "explanation": "Speeding up from rest to $2\\ \\text{m s}^{-1}$ over $2\\ \\text{s}$ is a triangle, so half base times height gives $2\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 4, "description": "Area of the constant-speed phase.", "workingLatex": "A_2 = 2 \\times 5 = 10\\ \\text{m}", "explanation": "At a steady $2\\ \\text{m s}^{-1}$ for $5\\ \\text{s}$ the region is a rectangle, giving $10\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 5, "description": "Area of the decelerating phase.", "workingLatex": "A_3 = \\tfrac{1}{2} \\times 2 \\times 2 = 2\\ \\text{m}", "explanation": "Slowing from $2\\ \\text{m s}^{-1}$ to rest over $2\\ \\text{s}$ is another triangle, again $2\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the three areas for the total height.", "workingLatex": "h = 2 + 10 + 2 = 14\\ \\text{m}", "explanation": "Summing the pieces gives the total distance the lift rises, $14\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 7, "description": "Check with the trapezium formula.", "workingLatex": "\\tfrac{1}{2}(5 + 9)(2) = \\tfrac{1}{2}(14)(2) = 14\\ \\text{m}", "explanation": "Using half the sum of the parallel sides (the $5\\ \\text{s}$ top and the $9\\ \\text{s}$ base) times the height $2$ gives the same $14\\ \\text{m}$, confirming the total.", "diagram": null },
        { "stepNumber": 8, "description": "Find the total journey time.", "workingLatex": "t = 2 + 5 + 2 = 9\\ \\text{s}", "explanation": "The whole trip lasts the three durations added together, $9\\ \\text{s}$.", "diagram": null },
        { "stepNumber": 9, "description": "Compute the average speed.", "workingLatex": "\\bar v = \\frac{14}{9} = 1.56\\ \\text{m s}^{-1}\\ (3\\text{ s.f.})", "explanation": "Average speed is total distance over total time, which is $1.56\\ \\text{m s}^{-1}$. It is below the $2\\ \\text{m s}^{-1}$ cruise because the lift spends time speeding up and slowing down.", "diagram": null },
        { "stepNumber": 10, "description": "State both results.", "workingLatex": "h = 14\\ \\text{m},\\quad \\bar v = 1.56\\ \\text{m s}^{-1}", "explanation": "The lift rises $14\\ \\text{m}$ with an average speed of about $1.56\\ \\text{m s}^{-1}$.", "diagram": null }
      ],
      "finalAnswer": "Total height risen $= 14\\ \\text{m}$; average speed $= \\dfrac{14}{9} = 1.56\\ \\text{m s}^{-1}$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["velocity-time-graph", "unit-conversion", "gradient", "acceleration", "trapezium-rule"],
    "questionText": "A car's speed increases uniformly from $36\\ \\text{km/h}$ to $72\\ \\text{km/h}$ in $5\\ \\text{s}$. (a) Convert both speeds to $\\text{m s}^{-1}$. (b) Find the acceleration from the gradient of the velocity-time graph. (c) Find the distance travelled using the area (a trapezium).",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A velocity-time graph. Horizontal axis is time t in seconds (0 to 5), vertical axis is velocity v in m s^-1 (10 to 20). A single straight line runs from (0, 10) to (5, 20). The region beneath it between the axis and the line is a trapezium with parallel vertical sides of length 10 (at t=0) and 20 (at t=5).",
      "alt": "Straight velocity-time line from (0,10) to (5,20)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Explain why the speeds must be converted first.", "workingLatex": "1\\ \\text{km/h} = \\frac{1000}{3600}\\ \\text{m s}^{-1}", "explanation": "Acceleration in $\\text{m s}^{-2}$ and distance in metres both need speeds in $\\text{m s}^{-1}$. One kilometre is $1000\\ \\text{m}$ and one hour is $3600\\ \\text{s}$, so we multiply km/h by $\\tfrac{1000}{3600}$.", "diagram": null },
        { "stepNumber": 2, "description": "Convert the starting speed.", "workingLatex": "36 \\times \\tfrac{1000}{3600} = 10\\ \\text{m s}^{-1}", "explanation": "The factor $\\tfrac{1000}{3600}$ simplifies to $\\tfrac{5}{18}$, and $36 \\times \\tfrac{5}{18} = 10$, so the car begins at $10\\ \\text{m s}^{-1}$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the final speed.", "workingLatex": "72 \\times \\tfrac{1000}{3600} = 20\\ \\text{m s}^{-1}", "explanation": "Using the same factor, $72 \\times \\tfrac{5}{18} = 20$, so the car ends at $20\\ \\text{m s}^{-1}$. Doubling the km/h simply doubles the m/s, as expected.", "diagram": null },
        { "stepNumber": 4, "description": "State that acceleration is the gradient.", "workingLatex": "a = \\text{gradient} = \\frac{\\Delta v}{\\Delta t}", "explanation": "On a velocity-time graph the gradient is the change in velocity divided by the change in time, which is exactly the acceleration.", "diagram": null },
        { "stepNumber": 5, "description": "Compute the acceleration.", "workingLatex": "a = \\frac{20 - 10}{5} = 2\\ \\text{m s}^{-2}", "explanation": "The velocity rises by $10\\ \\text{m s}^{-1}$ over $5\\ \\text{s}$, so it gains $2\\ \\text{m s}^{-1}$ each second: an acceleration of $2\\ \\text{m s}^{-2}$.", "diagram": null },
        { "stepNumber": 6, "description": "Link the distance to the area under the graph.", "workingLatex": "\\text{distance} = \\text{area of the trapezium}", "explanation": "The distance travelled is the area beneath the line. Because the line is sloping and starts above the axis, that region is a trapezium.", "diagram": null },
        { "stepNumber": 7, "description": "Write the trapezium area formula.", "workingLatex": "s = \\tfrac{1}{2}(u + v)\\,t", "explanation": "Half the sum of the two parallel vertical sides ($u$ and $v$) times the width ($t$) gives the area. This is also the standard $s = \\tfrac{1}{2}(u+v)t$ formula for uniform acceleration.", "diagram": null },
        { "stepNumber": 8, "description": "Substitute the values.", "workingLatex": "s = \\tfrac{1}{2}(10 + 20)(5)", "explanation": "The parallel sides are the start and end speeds $10$ and $20$, and the width is the $5\\ \\text{s}$ of motion.", "diagram": null },
        { "stepNumber": 9, "description": "Evaluate the distance.", "workingLatex": "s = \\tfrac{1}{2}(30)(5) = 75\\ \\text{m}", "explanation": "Adding gives $30$, halving gives $15$, and multiplying by $5$ gives $75\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 10, "description": "State all three answers.", "workingLatex": "10\\ \\text{and}\\ 20\\ \\text{m s}^{-1},\\quad a = 2\\ \\text{m s}^{-2},\\quad s = 75\\ \\text{m}", "explanation": "The speeds are $10$ and $20\\ \\text{m s}^{-1}$, the acceleration is $2\\ \\text{m s}^{-2}$, and the distance covered is $75\\ \\text{m}$.", "diagram": null }
      ],
      "finalAnswer": "$36\\ \\text{km/h} = 10\\ \\text{m s}^{-1}$ and $72\\ \\text{km/h} = 20\\ \\text{m s}^{-1}$; acceleration $= 2\\ \\text{m s}^{-2}$; distance $= 75\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "tags": ["displacement-time-graph", "tangent", "instantaneous-velocity", "gradient", "estimation"],
    "questionText": "The displacement-time graph of a particle is a curve passing through $(2, 8)$ and $(6, 40)$, where $s$ is in metres and $t$ in seconds. A tangent drawn to the curve at $t=4\\ \\text{s}$ passes through the points $(2, 10)$ and $(6, 42)$. (a) Estimate the instantaneous velocity at $t=4\\ \\text{s}$. (b) Explain why this is only an estimate.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A displacement-time graph. Horizontal axis is time t in seconds, vertical axis is displacement s in metres. A curve (increasing and getting steeper) passes through the points (2, 8) and (6, 40). A straight tangent line touches the curve at t = 4 and passes through the points (2, 10) and (6, 42). The tangent lies slightly above the curve on either side of the point of contact.",
      "alt": "Curved displacement-time graph with a straight tangent line drawn at t = 4 through (2,10) and (6,42)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what velocity means on a displacement-time graph.", "workingLatex": "\\text{velocity} = \\text{gradient of the } s\\text{-}t \\text{ graph}", "explanation": "On a displacement-time graph the gradient tells you how fast displacement is changing, which is the velocity. A steeper part of the graph means the particle is moving faster.", "diagram": null },
        { "stepNumber": 2, "description": "Note what changes when the graph is a curve.", "workingLatex": "\\text{instantaneous velocity} = \\text{gradient of the tangent}", "explanation": "On a curve the gradient keeps changing, so there is no single slope for the whole line. The velocity at one instant is the gradient of the tangent that just touches the curve at that point.", "diagram": null },
        { "stepNumber": 3, "description": "Decide which points to use.", "workingLatex": "\\text{use the tangent points } (2, 10)\\ \\text{and}\\ (6, 42)", "explanation": "To find the tangent's gradient we must read two points that lie on the tangent line, not on the curve. The tangent passes through $(2, 10)$ and $(6, 42)$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the gradient formula.", "workingLatex": "\\text{gradient} = \\frac{\\Delta s}{\\Delta t} = \\frac{s_2 - s_1}{t_2 - t_1}", "explanation": "The gradient of any straight line is the rise in displacement divided by the run in time between two of its points.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the tangent points.", "workingLatex": "\\text{gradient} = \\frac{42 - 10}{6 - 2}", "explanation": "Putting the two tangent points into the formula gives the change in $s$ over the change in $t$ along the tangent.", "diagram": null },
        { "stepNumber": 6, "description": "Evaluate the gradient.", "workingLatex": "\\frac{42 - 10}{6 - 2} = \\frac{32}{4} = 8", "explanation": "The rise is $32\\ \\text{m}$ over a run of $4\\ \\text{s}$, giving a gradient of $8$.", "diagram": null },
        { "stepNumber": 7, "description": "State the estimated velocity.", "workingLatex": "v \\approx 8\\ \\text{m s}^{-1}", "explanation": "Since the tangent's gradient is $8$, the instantaneous velocity at $t=4\\ \\text{s}$ is about $8\\ \\text{m s}^{-1}$.", "diagram": null },
        { "stepNumber": 8, "description": "Warn against using the curve points.", "workingLatex": "\\text{curve points } (2,8),(6,40) \\Rightarrow \\text{average velocity, not instantaneous}", "explanation": "Using the curve's own points would give the average velocity over an interval, not the velocity at the single instant $t=4$. The tangent is what isolates that instant.", "diagram": null },
        { "stepNumber": 9, "description": "Explain why the answer is only an estimate.", "workingLatex": "\\text{tangent is drawn by eye}", "explanation": "The tangent has to be sketched by hand, so its exact slope depends on how well it is placed against the curve. Reading two points off a hand-drawn line adds further uncertainty, so the velocity can only be an estimate.", "diagram": null }
      ],
      "finalAnswer": "Instantaneous velocity $\\approx \\dfrac{42-10}{6-2} = 8\\ \\text{m s}^{-1}$. It is only an estimate because the tangent is drawn by eye and the points read from it are approximate."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "tags": ["velocity-time-graph", "comparing-motion", "equal-velocity", "displacement", "linear-equation"],
    "questionText": "Two runners set off at $t=0$. On a velocity-time graph, runner $P$ has a horizontal line at a constant $7\\ \\text{m s}^{-1}$, while runner $Q$ has a straight line starting at $3\\ \\text{m s}^{-1}$ and rising with gradient $0.5\\ \\text{m s}^{-2}$. (a) Find the time at which the two runners have the same velocity. (b) Explain why having the same velocity does not mean they are level with each other.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A velocity-time graph with two lines. Horizontal axis is time t in seconds (0 to 10), vertical axis is velocity v in m s^-1. Line P is horizontal at v = 7, from (0, 7) onwards. Line Q is a straight line from (0, 3) rising with gradient 0.5, reaching v = 7 at t = 8. The two lines cross at (8, 7).",
      "alt": "Horizontal line P at 7 and rising line Q from (0,3), crossing at (8,7)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write Q's velocity as a function of time.", "workingLatex": "v_Q = 3 + 0.5t", "explanation": "Q starts at $3\\ \\text{m s}^{-1}$ and gains $0.5\\ \\text{m s}^{-1}$ every second, so adding $0.5t$ to the start value gives its velocity at any time.", "diagram": null },
        { "stepNumber": 2, "description": "Write P's velocity.", "workingLatex": "v_P = 7", "explanation": "P holds a constant $7\\ \\text{m s}^{-1}$, so its velocity does not depend on time: the graph is a horizontal line.", "diagram": null },
        { "stepNumber": 3, "description": "Set the two velocities equal.", "workingLatex": "3 + 0.5t = 7", "explanation": "Equal velocity means the two lines meet at the same height on the graph, so we equate the two expressions and solve for the time.", "diagram": null },
        { "stepNumber": 4, "description": "Rearrange the equation.", "workingLatex": "0.5t = 7 - 3 = 4", "explanation": "Subtracting the starting $3\\ \\text{m s}^{-1}$ from both sides leaves the extra speed Q must gain to catch P's velocity.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for the time.", "workingLatex": "t = \\frac{4}{0.5} = 8\\ \\text{s}", "explanation": "Dividing by the gradient $0.5$ shows it takes $8\\ \\text{s}$ for Q's velocity to reach $7\\ \\text{m s}^{-1}$.", "diagram": null },
        { "stepNumber": 6, "description": "Locate this on the graph.", "workingLatex": "\\text{lines cross at } (8, 7)", "explanation": "At $t=8\\ \\text{s}$ the two velocity lines cross at a height of $7\\ \\text{m s}^{-1}$, confirming they have the same velocity there.", "diagram": null },
        { "stepNumber": 7, "description": "Clarify what 'level' would require.", "workingLatex": "\\text{level} \\Leftrightarrow \\text{equal displacement} \\Leftrightarrow \\text{equal area under the graph}", "explanation": "Being level means the same displacement, which is the area under each velocity line. Equal velocity only means the lines are at the same height, which is a different thing from equal area.", "diagram": null },
        { "stepNumber": 8, "description": "Find P's displacement at t = 8.", "workingLatex": "s_P = 7 \\times 8 = 56\\ \\text{m}", "explanation": "P's constant speed makes a rectangle of area $56\\ \\text{m}$, so P has travelled $56\\ \\text{m}$ by $t=8$.", "diagram": null },
        { "stepNumber": 9, "description": "Find Q's displacement at t = 8.", "workingLatex": "s_Q = \\tfrac{1}{2}(3 + 7)(8) = 40\\ \\text{m}", "explanation": "Q's line makes a trapezium; half the sum of the start and end speeds times the time gives $40\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 10, "description": "Interpret the difference.", "workingLatex": "s_P - s_Q = 56 - 40 = 16\\ \\text{m}", "explanation": "At the instant their velocities match, P is still $16\\ \\text{m}$ ahead. P was faster the whole time up to then, so matching speed does not undo that lead: same velocity is not the same as being level.", "diagram": null }
      ],
      "finalAnswer": "They have equal velocity at $t = 8\\ \\text{s}$. They are not level: by then P has travelled $56\\ \\text{m}$ and Q only $40\\ \\text{m}$, so P leads by $16\\ \\text{m}$. Equal velocity means equal speed, not equal displacement."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["velocity-time-graph", "area-under-graph", "trapezium-rule", "distance", "phases"],
    "questionText": "A velocity-time graph is made of three straight segments joining the points $(0, 4)$, $(6, 16)$, $(16, 16)$ and $(20, 0)$, with $v$ in $\\text{m s}^{-1}$ and $t$ in $\\text{s}$. Find the distance travelled in each of the three phases and the total distance.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A velocity-time graph. Horizontal axis is time t in seconds (0 to 20), vertical axis is velocity v in m s^-1 (0 to 16). Three straight segments join (0, 4) to (6, 16) (rising), (6, 16) to (16, 16) (horizontal), and (16, 16) to (20, 0) (falling). The velocity never goes negative.",
      "alt": "Velocity-time graph rising from (0,4) to (16,16), flat to (16,16), then falling to (20,0)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "State the principle for finding distance.", "workingLatex": "\\text{distance} = \\text{area under the } v\\text{-}t \\text{ graph}", "explanation": "Distance in each phase is the area under that segment of the velocity-time graph, so we find three areas and add them.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the shape of phase 1.", "workingLatex": "(0,4)\\to(6,16): \\text{ trapezium}", "explanation": "The velocity rises from $4$ to $16$ while staying positive, so the region under this segment is a trapezium with two different vertical sides.", "diagram": null },
        { "stepNumber": 3, "description": "Compute the phase 1 distance.", "workingLatex": "d_1 = \\tfrac{1}{2}(4 + 16)(6) = \\tfrac{1}{2}(20)(6) = 60\\ \\text{m}", "explanation": "Half the sum of the parallel sides $4$ and $16$, times the width $6\\ \\text{s}$, gives $60\\ \\text{m}$ for the first phase.", "diagram": null },
        { "stepNumber": 4, "description": "Identify the shape of phase 2.", "workingLatex": "(6,16)\\to(16,16): \\text{ rectangle}", "explanation": "The velocity is constant at $16\\ \\text{m s}^{-1}$ here, so the region is a simple rectangle.", "diagram": null },
        { "stepNumber": 5, "description": "Compute the phase 2 distance.", "workingLatex": "d_2 = 16 \\times (16 - 6) = 16 \\times 10 = 160\\ \\text{m}", "explanation": "Height $16$ times width $10\\ \\text{s}$ gives $160\\ \\text{m}$ for the constant-speed phase.", "diagram": null },
        { "stepNumber": 6, "description": "Identify the shape of phase 3.", "workingLatex": "(16,16)\\to(20,0): \\text{ triangle}", "explanation": "The velocity falls all the way to zero, so the region is a triangle sitting on the time axis.", "diagram": null },
        { "stepNumber": 7, "description": "Compute the phase 3 distance.", "workingLatex": "d_3 = \\tfrac{1}{2}(16)(20 - 16) = \\tfrac{1}{2}(16)(4) = 32\\ \\text{m}", "explanation": "Half base times height, with base $4\\ \\text{s}$ and height $16\\ \\text{m s}^{-1}$, gives $32\\ \\text{m}$ for the final phase.", "diagram": null },
        { "stepNumber": 8, "description": "Add the three phase distances.", "workingLatex": "d = 60 + 160 + 32 = 252\\ \\text{m}", "explanation": "Summing the three areas gives the total distance travelled over the whole $20\\ \\text{s}$.", "diagram": null },
        { "stepNumber": 9, "description": "State the results.", "workingLatex": "d_1 = 60,\\ d_2 = 160,\\ d_3 = 32,\\ d = 252\\ \\text{m}", "explanation": "The three phases cover $60\\ \\text{m}$, $160\\ \\text{m}$ and $32\\ \\text{m}$, for a total of $252\\ \\text{m}$.", "diagram": null }
      ],
      "finalAnswer": "Phase 1 $= 60\\ \\text{m}$, phase 2 $= 160\\ \\text{m}$, phase 3 $= 32\\ \\text{m}$; total distance $= 252\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["velocity-time-graph", "area-under-graph", "trapezium-rule", "distance", "constant-acceleration"],
    "questionText": "A symmetric trapezoidal velocity-time graph shows a vehicle accelerating uniformly from rest for $4\\ \\text{s}$ up to a cruising speed $V$, cruising at $V$ for $12\\ \\text{s}$, then decelerating uniformly to rest in $4\\ \\text{s}$. The total distance travelled is $400\\ \\text{m}$. Find $V$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "A velocity-time graph. Horizontal axis is time t in seconds (0 to 20), vertical axis is velocity v in m s^-1. Three straight segments form a symmetric trapezium with vertices (0, 0), (4, V), (16, V) and (20, 0): a rising line from (0,0) to (4,V), a horizontal line from (4,V) to (16,V), and a falling line from (16,V) to (20,0).",
      "alt": "Symmetric trapezium velocity-time graph with corners (0,0), (4,V), (16,V), (20,0)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Link the distance to the area under the graph.", "workingLatex": "\\text{distance} = \\text{area of the trapezium}", "explanation": "The total distance is the area beneath the velocity-time graph, and here that shape is a trapezium, so its area must equal $400\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the parallel sides.", "workingLatex": "\\text{top} = 12,\\qquad \\text{bottom} = 4 + 12 + 4 = 20", "explanation": "The parallel sides are the flat top (the $12\\ \\text{s}$ cruise) and the full base along the time axis (the $20\\ \\text{s}$ total). These are the lengths the trapezium formula needs.", "diagram": null },
        { "stepNumber": 3, "description": "Identify the height.", "workingLatex": "\\text{height} = V", "explanation": "The perpendicular gap between the parallel sides is the cruising speed $V$, the height of the flat top above the time axis.", "diagram": null },
        { "stepNumber": 4, "description": "Apply the trapezium area formula.", "workingLatex": "A = \\tfrac{1}{2}(12 + 20)\\,V", "explanation": "Area equals half the sum of the parallel sides times the height. Substituting the two times and the speed $V$ builds the equation for the distance.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify the area.", "workingLatex": "A = \\tfrac{1}{2}(32)\\,V = 16V", "explanation": "The parallel sides add to $32$, and half of that is $16$, so the distance in terms of $V$ is $16V$.", "diagram": null },
        { "stepNumber": 6, "description": "Set the area equal to the given distance.", "workingLatex": "16V = 400", "explanation": "The area expression and the stated $400\\ \\text{m}$ describe the same distance, so they are equal.", "diagram": null },
        { "stepNumber": 7, "description": "Solve for V.", "workingLatex": "V = \\frac{400}{16} = 25\\ \\text{m s}^{-1}", "explanation": "Dividing both sides by $16$ isolates $V$ and gives the cruising speed of $25\\ \\text{m s}^{-1}$.", "diagram": null },
        { "stepNumber": 8, "description": "Verify by splitting into three regions.", "workingLatex": "\\underbrace{\\tfrac{1}{2}(4)(25)}_{50} + \\underbrace{(12)(25)}_{300} + \\underbrace{\\tfrac{1}{2}(4)(25)}_{50} = 400", "explanation": "Two triangles of $50\\ \\text{m}$ each plus a rectangle of $300\\ \\text{m}$ give $400\\ \\text{m}$, matching the given total and confirming $V=25$.", "diagram": null },
        { "stepNumber": 9, "description": "State the answer.", "workingLatex": "V = 25\\ \\text{m s}^{-1}", "explanation": "Both approaches agree, so the cruising speed is $25\\ \\text{m s}^{-1}$.", "diagram": null }
      ],
      "finalAnswer": "$V = 25\\ \\text{m s}^{-1}$."
    }
  },
{
  "id": "al.y1.mech.kinematics-graphs.q041",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "tags": ["velocity-time", "displacement-time", "area-under-graph", "graph-interpretation"],
  "questionText": "A particle moves in a straight line. Its velocity–time graph consists of three straight segments joining $(0,0)$, $(5,10)$, $(10,10)$ and $(15,0)$, where $t$ is in seconds and $v$ is in $\\text{m s}^{-1}$: it accelerates, then cruises, then decelerates to rest. Describe the shape of the corresponding displacement–time graph, and find the displacement at $t=5$, $t=10$ and $t=15\\ \\text{s}$.",
  "questionDiagram": { "kind": "descriptive", "description": "A velocity–time graph. Horizontal axis: time t in seconds, from 0 to 15. Vertical axis: velocity v in m s^-1, from 0 to 10. Three straight segments join the points (0,0), (5,10), (10,10) and (15,0). Segment (0,0)–(5,10) is a straight line rising from rest to 10 m/s (constant acceleration). Segment (5,10)–(10,10) is horizontal at v = 10 (constant velocity). Segment (10,10)–(15,0) is a straight line falling back to rest (constant deceleration). The whole region is a symmetric trapezium.", "alt": "Trapezium-shaped velocity-time graph rising to 10 m/s, holding, then falling to 0 over 15 seconds." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Link the two graphs.", "workingLatex": "\\text{displacement} = \\text{area under } v\\text{–}t \\text{ graph}, \\qquad \\text{velocity} = \\text{gradient of } s\\text{–}t \\text{ graph}", "explanation": "The two graphs describe the same motion in different ways. The area swept out under the velocity–time graph up to a time $t$ is exactly the displacement at that time, and the steepness (gradient) of the displacement–time graph at any moment is the velocity. Keeping both ideas in mind lets us read one graph off the other.", "diagram": null },
      { "stepNumber": 2, "description": "Displacement at t = 5 s (area of the first triangle).", "workingLatex": "s(5) = \\tfrac{1}{2} \\times 5 \\times 10 = 25 \\ \\text{m}", "explanation": "During the first phase the velocity rises in a straight line from $0$ to $10\\ \\text{m s}^{-1}$, so the region under the graph is a triangle with base $5\\ \\text{s}$ and height $10\\ \\text{m s}^{-1}$. Its area is the distance covered so far.", "diagram": null },
      { "stepNumber": 3, "description": "Displacement at t = 10 s (add the rectangle).", "workingLatex": "\\text{cruise area} = 5 \\times 10 = 50 \\ \\text{m}, \\qquad s(10) = 25 + 50 = 75 \\ \\text{m}", "explanation": "Between $t=5$ and $t=10$ the speed is a steady $10\\ \\text{m s}^{-1}$, so the extra region is a rectangle. Adding it to the $25\\ \\text{m}$ already travelled gives the total displacement at $t=10$.", "diagram": null },
      { "stepNumber": 4, "description": "Displacement at t = 15 s (add the second triangle).", "workingLatex": "\\text{decel area} = \\tfrac{1}{2} \\times 5 \\times 10 = 25 \\ \\text{m}, \\qquad s(15) = 75 + 25 = 100 \\ \\text{m}", "explanation": "During the final phase the velocity falls from $10$ back to $0$, giving another triangle of area $25\\ \\text{m}$. The particle is still moving forward the whole time, so this adds on rather than cancels, giving a total of $100\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 5, "description": "Shape of the s–t graph during acceleration.", "workingLatex": "0 \\le t \\le 5: \\quad \\text{gradient increases from } 0 \\text{ to } 10", "explanation": "On the displacement–time graph the gradient equals the velocity. In the first phase the velocity is growing, so the curve gets steeper and steeper: it is a curve that bends upward (concave up), starting flat at the origin.", "diagram": null },
      { "stepNumber": 6, "description": "Shape of the s–t graph during the cruise.", "workingLatex": "5 \\le t \\le 10: \\quad \\text{gradient} = 10 \\text{ (constant)}", "explanation": "While the velocity is a constant $10\\ \\text{m s}^{-1}$, the displacement–time graph has a constant gradient, so this section is a straight line sloping steadily upward.", "diagram": null },
      { "stepNumber": 7, "description": "Shape of the s–t graph during deceleration.", "workingLatex": "10 \\le t \\le 15: \\quad \\text{gradient decreases from } 10 \\text{ to } 0", "explanation": "In the last phase the velocity falls back to zero, so the curve becomes less and less steep and finally levels off. This is a curve that bends downward (concave down), flattening to horizontal at $t=15$ because the particle has stopped.", "diagram": null },
      { "stepNumber": 8, "description": "Collect the key points of the s–t graph.", "workingLatex": "(0,0), \\ (5,25), \\ (10,75), \\ (15,100)", "explanation": "Plotting these four points and joining them with the shapes just described — concave-up curve, straight line, concave-down curve — gives the full displacement–time graph, which rises throughout and ends level.", "diagram": null },
      { "stepNumber": 9, "description": "State the answer.", "workingLatex": "s(5)=25\\ \\text{m}, \\quad s(10)=75\\ \\text{m}, \\quad s(15)=100\\ \\text{m}", "explanation": "These three areas give the displacement at the requested times, and the qualitative shape ties the whole description together.", "diagram": null }
    ],
    "finalAnswer": "The displacement–time graph is a concave-up curve from $(0,0)$ to $(5,25)$, a straight line to $(10,75)$, then a concave-down curve flattening to $(15,100)$. Displacements: $s(5)=25\\ \\text{m}$, $s(10)=75\\ \\text{m}$, $s(15)=100\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q042",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "tags": ["displacement-time", "gradient", "average-velocity", "graph-interpretation"],
  "questionText": "A displacement–time graph for a journey along a straight road is made of three straight segments joining $(0,0)$, $(10,40)$, $(15,40)$ and $(25,90)$, where $t$ is in seconds and $s$ is in metres. The particle moves during $0$–$10\\ \\text{s}$, rests during $10$–$15\\ \\text{s}$, then moves again during $15$–$25\\ \\text{s}$. Find the velocity in each moving phase and the average velocity over the whole $25\\ \\text{s}$.",
  "questionDiagram": { "kind": "descriptive", "description": "A displacement–time graph. Horizontal axis: time t in seconds, from 0 to 25. Vertical axis: displacement s in metres, from 0 to 90. Three straight segments join (0,0), (10,40), (15,40) and (25,90). Segment (0,0)–(10,40) rises steadily. Segment (10,40)–(15,40) is horizontal (the particle is at rest). Segment (15,40)–(25,90) rises steadily and is steeper than the first segment.", "alt": "Displacement-time graph rising to 40 m, flat for 5 s, then rising more steeply to 90 m." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Recall how to read velocity from an s–t graph.", "workingLatex": "v = \\text{gradient} = \\frac{\\Delta s}{\\Delta t}", "explanation": "On a displacement–time graph the velocity is the gradient of the line: how much displacement changes for each second that passes. A steeper line means a faster velocity, and a flat line means no motion.", "diagram": null },
      { "stepNumber": 2, "description": "Velocity in the first moving phase.", "workingLatex": "v_1 = \\frac{40 - 0}{10 - 0} = 4 \\ \\text{m s}^{-1}", "explanation": "Over the first segment the displacement climbs from $0$ to $40\\ \\text{m}$ in $10\\ \\text{s}$. Dividing the rise by the run gives the constant velocity for this phase.", "diagram": null },
      { "stepNumber": 3, "description": "Velocity during the rest phase.", "workingLatex": "v_2 = \\frac{40 - 40}{15 - 10} = 0 \\ \\text{m s}^{-1}", "explanation": "Between $t=10$ and $t=15$ the displacement stays at $40\\ \\text{m}$, so the line is flat. A zero gradient means the particle is momentarily parked — it is at rest, not moving forward or back.", "diagram": null },
      { "stepNumber": 4, "description": "Velocity in the second moving phase.", "workingLatex": "v_3 = \\frac{90 - 40}{25 - 15} = \\frac{50}{10} = 5 \\ \\text{m s}^{-1}", "explanation": "In the final segment the displacement rises from $40\\ \\text{m}$ to $90\\ \\text{m}$ over $10\\ \\text{s}$. This gradient is larger than the first, which matches the steeper line on the graph — the particle is now travelling a little faster.", "diagram": null },
      { "stepNumber": 5, "description": "Recall the definition of average velocity.", "workingLatex": "\\bar{v} = \\frac{\\text{total displacement}}{\\text{total time}}", "explanation": "Average velocity is not the average of the separate speeds. It compares where the particle ends up with where it started, divided by how long the whole journey took, so it must include the resting time as well.", "diagram": null },
      { "stepNumber": 6, "description": "Find the total displacement.", "workingLatex": "\\Delta s = 90 - 0 = 90 \\ \\text{m}", "explanation": "All the motion is in the same forward direction, so the net displacement is simply the final reading on the graph, $90\\ \\text{m}$ from the start.", "diagram": null },
      { "stepNumber": 7, "description": "Divide by the total time.", "workingLatex": "\\bar{v} = \\frac{90}{25} = 3.6 \\ \\text{m s}^{-1}", "explanation": "The whole journey, including the $5\\ \\text{s}$ pause, lasts $25\\ \\text{s}$. Spreading the $90\\ \\text{m}$ over all $25\\ \\text{s}$ gives the average velocity.", "diagram": null },
      { "stepNumber": 8, "description": "Sense-check the value.", "workingLatex": "0 < 3.6 < 5", "explanation": "The average $3.6\\ \\text{m s}^{-1}$ sits below both moving speeds of $4$ and $5\\ \\text{m s}^{-1}$. That is exactly what we expect, because the time spent at rest drags the average down.", "diagram": null },
      { "stepNumber": 9, "description": "State the answers.", "workingLatex": "v_1 = 4 \\ \\text{m s}^{-1}, \\quad v_3 = 5 \\ \\text{m s}^{-1}, \\quad \\bar{v} = 3.6 \\ \\text{m s}^{-1}", "explanation": "These three gradients, together with the average, fully describe the velocity behaviour of the journey.", "diagram": null }
    ],
    "finalAnswer": "First moving phase: $4\\ \\text{m s}^{-1}$; second moving phase: $5\\ \\text{m s}^{-1}$; average velocity over the $25\\ \\text{s}$: $3.6\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q043",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["velocity-time", "area-under-graph", "constant-acceleration", "simultaneous-motion"],
  "questionText": "Two objects start from the same point at $t=0$ and move along the same straight line. Object $A$ has a constant velocity of $6\\ \\text{m s}^{-1}$. Object $B$ starts from rest and accelerates uniformly at $1.5\\ \\text{m s}^{-2}$. By comparing areas under their velocity–time graphs, find the time at which $B$ has travelled the same distance as $A$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Distance for A as an area.", "workingLatex": "s_A = 6t", "explanation": "Object $A$ moves at a steady $6\\ \\text{m s}^{-1}$, so its velocity–time graph is a horizontal line. The area beneath it up to time $t$ is a rectangle of height $6$ and width $t$, and this area is the distance travelled.", "diagram": null },
      { "stepNumber": 2, "description": "Velocity of B at time t.", "workingLatex": "v_B = 0 + 1.5t = 1.5t", "explanation": "Object $B$ starts from rest and gains $1.5\\ \\text{m s}^{-1}$ of speed each second, so its velocity at time $t$ is $1.5t$. Its velocity–time graph is a straight line through the origin.", "diagram": null },
      { "stepNumber": 3, "description": "Distance for B as an area.", "workingLatex": "s_B = \\tfrac{1}{2} \\times t \\times (1.5t) = 0.75t^2", "explanation": "The region under $B$'s velocity line is a triangle with base $t$ and height $1.5t$. Its area, $\\tfrac{1}{2}\\times t\\times 1.5t$, gives the distance $B$ has covered.", "diagram": null },
      { "stepNumber": 4, "description": "Set the two distances equal.", "workingLatex": "6t = 0.75t^2", "explanation": "We want the moment when $B$ has matched $A$'s distance, so we set the two area expressions equal to each other and solve for $t$.", "diagram": null },
      { "stepNumber": 5, "description": "Rearrange to one side.", "workingLatex": "0.75t^2 - 6t = 0", "explanation": "Bringing everything to one side gives a quadratic equal to zero, which we can solve by factorising rather than using the formula.", "diagram": null },
      { "stepNumber": 6, "description": "Factorise.", "workingLatex": "t(0.75t - 6) = 0", "explanation": "Both terms share a factor of $t$, so we take it outside the bracket. A product equals zero only when one of its factors is zero, giving two possibilities.", "diagram": null },
      { "stepNumber": 7, "description": "Solve for the two roots.", "workingLatex": "t = 0 \\quad \\text{or} \\quad 0.75t = 6 \\ \\Rightarrow\\ t = 8", "explanation": "The first factor gives $t=0$; the second gives $t=8$. Solving $0.75t=6$ means dividing $6$ by $0.75$, which is $8$.", "diagram": null },
      { "stepNumber": 8, "description": "Interpret the roots.", "workingLatex": "t = 0 \\text{ (start, trivial)} \\ \\Rightarrow\\ t = 8 \\ \\text{s}", "explanation": "At $t=0$ both have travelled nothing, so that solution just describes the shared starting point. The meaningful answer is $t=8\\ \\text{s}$, when $B$ genuinely catches up on distance.", "diagram": null },
      { "stepNumber": 9, "description": "Check both distances agree.", "workingLatex": "s_A = 6 \\times 8 = 48\\ \\text{m}, \\qquad s_B = 0.75 \\times 8^2 = 48\\ \\text{m}", "explanation": "Substituting $t=8$ into both expressions gives $48\\ \\text{m}$ each, confirming that $B$ really has travelled exactly as far as $A$ at that instant.", "diagram": null },
      { "stepNumber": 10, "description": "State the answer.", "workingLatex": "t = 8 \\ \\text{s}", "explanation": "After $8$ seconds the slower-starting but accelerating object $B$ has covered the same $48\\ \\text{m}$ as the steady object $A$.", "diagram": null }
    ],
    "finalAnswer": "$t = 8\\ \\text{s}$ (each object has then travelled $48\\ \\text{m}$)."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q044",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["velocity-time", "average-speed", "area-under-graph", "weighted-average"],
  "questionText": "On a motorway a car travels at $30\\ \\text{m s}^{-1}$ for $20\\ \\text{s}$ and then at $20\\ \\text{m s}^{-1}$ for $30\\ \\text{s}$. Find the total distance travelled and the average speed for the whole trip, and show that the average speed is not the simple mean of $30$ and $20$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Distance in the first phase.", "workingLatex": "s_1 = 30 \\times 20 = 600 \\ \\text{m}", "explanation": "For a constant speed the distance is speed multiplied by time, which is the area of the rectangle under the velocity–time graph for that phase. At $30\\ \\text{m s}^{-1}$ for $20\\ \\text{s}$ the car covers $600\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 2, "description": "Distance in the second phase.", "workingLatex": "s_2 = 20 \\times 30 = 600 \\ \\text{m}", "explanation": "The second phase is another rectangle: $20\\ \\text{m s}^{-1}$ maintained for $30\\ \\text{s}$ also gives $600\\ \\text{m}$. Interestingly the two phases cover equal distances.", "diagram": null },
      { "stepNumber": 3, "description": "Total distance.", "workingLatex": "s = 600 + 600 = 1200 \\ \\text{m}", "explanation": "The car moves forward throughout, so the total distance is simply the sum of the two areas.", "diagram": null },
      { "stepNumber": 4, "description": "Total time.", "workingLatex": "t = 20 + 30 = 50 \\ \\text{s}", "explanation": "The whole trip lasts the sum of the two phase durations, $50\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 5, "description": "Recall the average-speed definition.", "workingLatex": "\\bar{s} = \\frac{\\text{total distance}}{\\text{total time}}", "explanation": "Average speed always means the total distance divided by the total time — it is not found by averaging the individual speeds unless equal times are spent at each.", "diagram": null },
      { "stepNumber": 6, "description": "Compute the average speed.", "workingLatex": "\\bar{s} = \\frac{1200}{50} = 24 \\ \\text{m s}^{-1}", "explanation": "Dividing the $1200\\ \\text{m}$ covered by the $50\\ \\text{s}$ taken gives an average speed of $24\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 7, "description": "Compare with the simple mean.", "workingLatex": "\\frac{30 + 20}{2} = 25 \\ \\text{m s}^{-1} \\ne 24 \\ \\text{m s}^{-1}", "explanation": "The naive average of the two speeds is $25\\ \\text{m s}^{-1}$, which does not match our $24\\ \\text{m s}^{-1}$. The two answers are genuinely different.", "diagram": null },
      { "stepNumber": 8, "description": "Explain the difference.", "workingLatex": "30\\ \\text{s at } 20 > 20\\ \\text{s at } 30", "explanation": "The car spends more time (30 s) at the slower speed than at the faster speed (20 s). Because average speed weights by time, the slower speed pulls the true average below the midpoint of $25$, giving $24\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 9, "description": "State the answers.", "workingLatex": "s = 1200 \\ \\text{m}, \\qquad \\bar{s} = 24 \\ \\text{m s}^{-1}", "explanation": "The total distance and the correctly weighted average speed answer the question and show why the simple mean is wrong.", "diagram": null }
    ],
    "finalAnswer": "Total distance $1200\\ \\text{m}$; average speed $24\\ \\text{m s}^{-1}$, which is below the simple mean of $25\\ \\text{m s}^{-1}$ because more time is spent at the slower speed."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q045",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "tags": ["velocity-time", "area-under-graph", "deceleration", "triangle-area"],
  "questionText": "A car decelerates uniformly and comes to rest in $5\\ \\text{s}$, travelling $50\\ \\text{m}$ while doing so. By using the triangular area under its velocity–time graph, find the car's initial speed, and hence its deceleration.",
  "questionDiagram": { "kind": "descriptive", "description": "A velocity–time graph. Horizontal axis: time t in seconds, from 0 to 5. Vertical axis: velocity v in m s^-1. A single straight line falls from the initial speed u at the point (0, u) down to rest at (5, 0). With the two axes this line encloses a right-angled triangle whose base is 5 s and whose height is u.", "alt": "Velocity-time graph: a straight line decreasing from initial speed u to zero at 5 seconds, forming a triangle." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Recognise the shape.", "workingLatex": "\\text{area of triangle} = \\text{distance} = 50", "explanation": "Because the deceleration is uniform, the velocity–time graph is a straight line from the initial speed down to zero. The region under it is a right-angled triangle, and its area equals the distance travelled, $50\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 2, "description": "Identify the base and height.", "workingLatex": "\\text{base} = 5\\ \\text{s}, \\qquad \\text{height} = u", "explanation": "The triangle's base is the time taken to stop, $5\\ \\text{s}$, and its height is the initial speed $u$ we are trying to find. Naming them lets us write the area formula.", "diagram": null },
      { "stepNumber": 3, "description": "Write the area equation.", "workingLatex": "\\tfrac{1}{2} \\times 5 \\times u = 50", "explanation": "The area of a triangle is half base times height. Setting that equal to the known $50\\ \\text{m}$ gives a single equation in $u$.", "diagram": null },
      { "stepNumber": 4, "description": "Simplify the left side.", "workingLatex": "2.5u = 50", "explanation": "Multiplying $\\tfrac{1}{2}$ by $5$ gives $2.5$, so the equation neatly becomes $2.5u = 50$.", "diagram": null },
      { "stepNumber": 5, "description": "Solve for the initial speed.", "workingLatex": "u = \\frac{50}{2.5} = 20 \\ \\text{m s}^{-1}", "explanation": "Dividing both sides by $2.5$ isolates $u$, giving an initial speed of $20\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 6, "description": "Set up the deceleration.", "workingLatex": "a = \\frac{\\text{change in velocity}}{\\text{time}} = \\frac{0 - 20}{5}", "explanation": "Acceleration is the gradient of the velocity–time line: the change in velocity divided by the time taken. Here the velocity drops from $20$ to $0$ over $5\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 7, "description": "Evaluate the gradient.", "workingLatex": "a = \\frac{-20}{5} = -4 \\ \\text{m s}^{-2}", "explanation": "The result is negative because the velocity is falling. The magnitude, $4\\ \\text{m s}^{-2}$, is the rate at which speed is being lost.", "diagram": null },
      { "stepNumber": 8, "description": "Interpret the sign.", "workingLatex": "|a| = 4 \\ \\text{m s}^{-2} \\ \\text{(deceleration)}", "explanation": "A negative acceleration in the direction of motion is a deceleration. We report it as a deceleration of $4\\ \\text{m s}^{-2}$.", "diagram": null },
      { "stepNumber": 9, "description": "State the answers.", "workingLatex": "u = 20 \\ \\text{m s}^{-1}, \\qquad a = 4 \\ \\text{m s}^{-2} \\text{ (deceleration)}", "explanation": "The triangular area gave the initial speed, and its gradient gave the deceleration, completing the problem.", "diagram": null }
    ],
    "finalAnswer": "Initial speed $20\\ \\text{m s}^{-1}$; deceleration $4\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q046",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["velocity-time", "area-under-graph", "trapezium", "constant-acceleration"],
  "questionText": "A bus accelerates uniformly from rest to $12\\ \\text{m s}^{-1}$ in $6\\ \\text{s}$, cruises at $12\\ \\text{m s}^{-1}$ for $T$ seconds, then decelerates uniformly to rest in $4\\ \\text{s}$. The distance between the two bus stops is $300\\ \\text{m}$. Using the area under the velocity–time graph, find $T$.",
  "questionDiagram": { "kind": "descriptive", "description": "A velocity–time graph. Horizontal axis: time t in seconds. Vertical axis: velocity v in m s^-1, from 0 to 12. Straight segments join (0,0) to (6,12) [acceleration], then a horizontal segment from (6,12) to (6+T,12) [constant velocity for T seconds], then a straight line down from (6+T,12) to (10+T,0) [deceleration lasting 4 s]. The whole region is a trapezium.", "alt": "Trapezium velocity-time graph: rise to 12 m/s in 6 s, hold for T seconds, fall to 0 in 4 s." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Set up the plan.", "workingLatex": "\\text{total area} = \\text{distance} = 300", "explanation": "The total distance between the stops equals the whole area under the velocity–time graph. We can split that region into three simple pieces — a triangle, a rectangle and a triangle — and add them.", "diagram": null },
      { "stepNumber": 2, "description": "Area of the acceleration phase.", "workingLatex": "A_1 = \\tfrac{1}{2} \\times 6 \\times 12 = 36 \\ \\text{m}", "explanation": "While speeding up from rest to $12\\ \\text{m s}^{-1}$ over $6\\ \\text{s}$, the graph is a triangle with base $6$ and height $12$. Its area is the distance covered while accelerating.", "diagram": null },
      { "stepNumber": 3, "description": "Area of the deceleration phase.", "workingLatex": "A_3 = \\tfrac{1}{2} \\times 4 \\times 12 = 24 \\ \\text{m}", "explanation": "Slowing from $12\\ \\text{m s}^{-1}$ back to rest over $4\\ \\text{s}$ is another triangle, this time with base $4$ and height $12$, giving $24\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 4, "description": "Area of the cruise phase.", "workingLatex": "A_2 = 12 \\times T = 12T", "explanation": "During the steady cruise the graph is a rectangle of height $12$ and width $T$, so its area is $12T$ metres — this is the only unknown piece.", "diagram": null },
      { "stepNumber": 5, "description": "Add the three areas to the total.", "workingLatex": "36 + 12T + 24 = 300", "explanation": "The three parts together must make up the full $300\\ \\text{m}$, giving one equation for $T$.", "diagram": null },
      { "stepNumber": 6, "description": "Combine the constants.", "workingLatex": "12T + 60 = 300", "explanation": "Adding the two triangle areas, $36+24=60$, tidies the equation to a single constant plus the $12T$ term.", "diagram": null },
      { "stepNumber": 7, "description": "Isolate the T term.", "workingLatex": "12T = 300 - 60 = 240", "explanation": "Subtracting $60$ from both sides leaves the cruise contribution on its own.", "diagram": null },
      { "stepNumber": 8, "description": "Solve for T.", "workingLatex": "T = \\frac{240}{12} = 20 \\ \\text{s}", "explanation": "Dividing by $12$ gives the cruise duration: the bus must travel at constant speed for $20\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 9, "description": "Check the total distance.", "workingLatex": "36 + 12(20) + 24 = 36 + 240 + 24 = 300 \\ \\text{m}", "explanation": "Putting $T=20$ back into the three areas recovers exactly $300\\ \\text{m}$, confirming the answer is consistent.", "diagram": null },
      { "stepNumber": 10, "description": "State the answer.", "workingLatex": "T = 20 \\ \\text{s}", "explanation": "The bus cruises at $12\\ \\text{m s}^{-1}$ for $20$ seconds between the two stops.", "diagram": null }
    ],
    "finalAnswer": "$T = 20\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q047",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["velocity-time", "area-under-graph", "trapezium", "distance"],
  "questionText": "A particle's velocity–time graph is made of three straight segments joining $(0,0)$, $(4,8)$, $(10,20)$ and $(16,20)$, where $t$ is in seconds and $v$ is in $\\text{m s}^{-1}$. Find the total distance travelled.",
  "questionDiagram": { "kind": "descriptive", "description": "A velocity–time graph. Horizontal axis: time t in seconds, from 0 to 16. Vertical axis: velocity v in m s^-1, from 0 to 20. Three straight segments join (0,0), (4,8), (10,20) and (16,20). Segment (0,0)–(4,8) rises from rest (acceleration). Segment (4,8)–(10,20) continues rising to 20 m/s (acceleration continues). Segment (10,20)–(16,20) is horizontal at v = 20 (constant velocity).", "alt": "Velocity-time graph rising through (4,8) to (10,20), then flat to (16,20)." },
  "workedSolution": {
    "steps": [
        {
                "stepNumber": 1,
                "description": "State the method",
                "workingLatex": "\\text{distance} = \\text{area under the } v\\text{--}t \\text{ graph}",
                "explanation": "The velocity stays positive throughout, so the particle only ever moves forward. The total distance is therefore the whole area beneath the graph.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "Plan the split into three shapes",
                "workingLatex": "\\text{triangle} + \\text{trapezium} + \\text{rectangle}",
                "explanation": "The graph has corners at $(4,8)$ and $(10,20)$, so we split the region at those times into three standard shapes whose areas we can add.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "First region: a triangle",
                "workingLatex": "0 \\le t \\le 4: \\quad \\tfrac{1}{2}\\times 4\\times 8 = 16\\ \\text{m}",
                "explanation": "From $(0,0)$ to $(4,8)$ the graph rises from the axis, enclosing a triangle of base 4 and height 8.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Second region: a trapezium",
                "workingLatex": "4 \\le t \\le 10: \\quad \\tfrac{1}{2}(8+20)\\times 6 = 84\\ \\text{m}",
                "explanation": "From $(4,8)$ to $(10,20)$ the line stays above the axis, enclosing a trapezium with parallel sides 8 and 20 and width 6 s. Half the sum of the parallel sides times the width gives 84 m.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Third region: a rectangle",
                "workingLatex": "10 \\le t \\le 16: \\quad 20\\times 6 = 120\\ \\text{m}",
                "explanation": "From $(10,20)$ to $(16,20)$ the velocity is constant at 20 m/s, so the region is a rectangle of height 20 and width 6.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Add the three areas",
                "workingLatex": "16 + 84 + 120 = 220\\ \\text{m}",
                "explanation": "Summing the triangle, trapezium and rectangle gives the total area under the graph, and hence the total distance.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Notice the first two segments share a gradient",
                "workingLatex": "a = \\dfrac{8-0}{4-0} = 2, \\qquad a = \\dfrac{20-8}{10-4} = 2\\ \\text{m s}^{-2}",
                "explanation": "Both rising segments have gradient $2\\ \\text{m s}^{-2}$, so $(0,0)$, $(4,8)$ and $(10,20)$ actually lie on one straight line — the acceleration is constant for the first 10 s.",
                "diagram": null
        },
        {
                "stepNumber": 8,
                "description": "Check with a single triangle plus the rectangle",
                "workingLatex": "\\tfrac{1}{2}\\times 10\\times 20 + 20\\times 6 = 100 + 120 = 220\\ \\text{m}",
                "explanation": "Treating the first 10 s as one triangle of base 10 and height 20 gives 100 m; adding the 120 m rectangle again gives 220 m, confirming the result.",
                "diagram": null
        },
        {
                "stepNumber": 9,
                "description": "State the answer",
                "workingLatex": "\\text{distance} = 220\\ \\text{m}",
                "explanation": "Both ways of splitting the region agree, so the particle travels a total of 220 m.",
                "diagram": null
        }
],
    "finalAnswer": "Total distance $= 220\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q048",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "tags": ["average-speed", "harmonic-mean", "equal-distances", "distance-time"],
  "questionText": "A runner covers the first $300\\ \\text{m}$ of a race at $6\\ \\text{m s}^{-1}$ and the next $300\\ \\text{m}$ at $4\\ \\text{m s}^{-1}$. Find the total time and the average speed for the whole $600\\ \\text{m}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Recall the average-speed definition.", "workingLatex": "\\bar{s} = \\frac{\\text{total distance}}{\\text{total time}}", "explanation": "Average speed is total distance divided by total time, so before we can find it we must work out how long each half of the run takes.", "diagram": null },
      { "stepNumber": 2, "description": "Time for the first half.", "workingLatex": "t_1 = \\frac{300}{6} = 50 \\ \\text{s}", "explanation": "Time equals distance divided by speed. Covering $300\\ \\text{m}$ at $6\\ \\text{m s}^{-1}$ takes $50\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 3, "description": "Time for the second half.", "workingLatex": "t_2 = \\frac{300}{4} = 75 \\ \\text{s}", "explanation": "The same $300\\ \\text{m}$ at the slower $4\\ \\text{m s}^{-1}$ takes longer: $75\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 4, "description": "Total time.", "workingLatex": "t = 50 + 75 = 125 \\ \\text{s}", "explanation": "Adding the two half-times gives the total time for the whole race, $125\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 5, "description": "Total distance.", "workingLatex": "s = 300 + 300 = 600 \\ \\text{m}", "explanation": "The two equal halves make a total distance of $600\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 6, "description": "Compute the average speed.", "workingLatex": "\\bar{s} = \\frac{600}{125} = 4.8 \\ \\text{m s}^{-1}", "explanation": "Dividing the total distance by the total time gives an average speed of $4.8\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 7, "description": "Recognise the harmonic mean.", "workingLatex": "\\bar{s} = \\frac{2 s_1 s_2}{s_1 + s_2} = \\frac{2 \\times 6 \\times 4}{6 + 4}", "explanation": "For two equal-distance stretches at different speeds, the average speed is the harmonic mean of the speeds, not the ordinary average. This gives a neat check of our answer.", "diagram": null },
      { "stepNumber": 8, "description": "Evaluate the harmonic mean.", "workingLatex": "\\frac{48}{10} = 4.8 \\ \\text{m s}^{-1}", "explanation": "The harmonic mean works out to $4.8\\ \\text{m s}^{-1}$, matching the direct calculation exactly.", "diagram": null },
      { "stepNumber": 9, "description": "Contrast with the simple mean.", "workingLatex": "\\frac{6 + 4}{2} = 5 \\ne 4.8", "explanation": "The simple average of the speeds is $5\\ \\text{m s}^{-1}$, which is too high. Because the runner spends more time at the slower speed, the true average is dragged down to $4.8\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 10, "description": "State the answers.", "workingLatex": "t = 125 \\ \\text{s}, \\qquad \\bar{s} = 4.8 \\ \\text{m s}^{-1}", "explanation": "The total time and the correctly computed average speed complete the problem.", "diagram": null }
    ],
    "finalAnswer": "Total time $125\\ \\text{s}$; average speed $4.8\\ \\text{m s}^{-1}$ (the harmonic mean of $6$ and $4$, not the arithmetic mean $5$)."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q049",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "written",
  "tags": ["velocity-time", "signed-area", "displacement", "average-velocity"],
  "questionText": "A model boat moves along a straight line. Its velocity is $+8\\ \\text{m s}^{-1}$ for the first $5\\ \\text{s}$, then it reverses and its velocity is $-4\\ \\text{m s}^{-1}$ for the next $5\\ \\text{s}$. Find the total distance travelled, the final displacement, the average speed and the average velocity.",
  "questionDiagram": { "kind": "descriptive", "description": "A velocity–time graph. Horizontal axis: time t in seconds, from 0 to 10. Vertical axis: velocity v in m s^-1, from -4 to 8. A horizontal segment at v = 8 runs from t = 0 to t = 5 (area above the time axis). The velocity then changes to -4, and a horizontal segment at v = -4 runs from t = 5 to t = 10 (area below the time axis).", "alt": "Velocity-time graph: +8 m/s for 5 s giving an area above the axis, then -4 m/s for 5 s giving an area below the axis." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Interpret the graph.", "workingLatex": "\\text{above axis} = \\text{forward}, \\quad \\text{below axis} = \\text{backward}", "explanation": "The graph is two rectangles. The one above the time axis represents forward motion, and the one below represents the boat reversing. Signed areas will handle displacement, and unsigned areas will handle distance.", "diagram": null },
      { "stepNumber": 2, "description": "Area of the forward phase.", "workingLatex": "A_1 = 8 \\times 5 = 40 \\ \\text{m}", "explanation": "Travelling at $+8\\ \\text{m s}^{-1}$ for $5\\ \\text{s}$ gives a rectangle of area $40$, a forward displacement of $40\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 3, "description": "Area of the reverse phase.", "workingLatex": "A_2 = (-4) \\times 5 = -20 \\ \\text{m}", "explanation": "At $-4\\ \\text{m s}^{-1}$ for $5\\ \\text{s}$ the signed area is $-20$, meaning a backward displacement of $20\\ \\text{m}$. The minus sign records the change of direction.", "diagram": null },
      { "stepNumber": 4, "description": "Total distance from unsigned areas.", "workingLatex": "d = |40| + |-20| = 40 + 20 = 60 \\ \\text{m}", "explanation": "Distance counts every metre travelled regardless of direction, so we add the sizes of both areas. The boat covers $60\\ \\text{m}$ of path in total.", "diagram": null },
      { "stepNumber": 5, "description": "Final displacement from signed areas.", "workingLatex": "s = 40 + (-20) = 20 \\ \\text{m}", "explanation": "Displacement is the net change in position, so we add the signed areas. The forward $40\\ \\text{m}$ minus the backward $20\\ \\text{m}$ leaves the boat $20\\ \\text{m}$ ahead of where it started.", "diagram": null },
      { "stepNumber": 6, "description": "Total time.", "workingLatex": "t = 5 + 5 = 10 \\ \\text{s}", "explanation": "The whole motion lasts the two $5\\ \\text{s}$ phases, giving $10\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 7, "description": "Average speed.", "workingLatex": "\\bar{s} = \\frac{\\text{distance}}{\\text{time}} = \\frac{60}{10} = 6 \\ \\text{m s}^{-1}", "explanation": "Average speed uses total distance, so we divide the $60\\ \\text{m}$ of path by the $10\\ \\text{s}$ taken.", "diagram": null },
      { "stepNumber": 8, "description": "Average velocity.", "workingLatex": "\\bar{v} = \\frac{\\text{displacement}}{\\text{time}} = \\frac{20}{10} = 2 \\ \\text{m s}^{-1}", "explanation": "Average velocity uses net displacement instead, so we divide the $20\\ \\text{m}$ net movement by the same $10\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 9, "description": "Explain the difference.", "workingLatex": "\\bar{s} = 6 \\ne \\bar{v} = 2", "explanation": "The average speed is larger than the average velocity because the boat wasted part of its journey going backward. Distance keeps counting that backtracking, but displacement cancels it out.", "diagram": null },
      { "stepNumber": 10, "description": "State the answers.", "workingLatex": "d = 60\\ \\text{m}, \\ s = 20\\ \\text{m}, \\ \\bar{s} = 6\\ \\text{m s}^{-1}, \\ \\bar{v} = 2\\ \\text{m s}^{-1}", "explanation": "All four quantities follow cleanly from the two areas and the total time.", "diagram": null }
    ],
    "finalAnswer": "Total distance $60\\ \\text{m}$; final displacement $20\\ \\text{m}$; average speed $6\\ \\text{m s}^{-1}$; average velocity $2\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q050",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["velocity-time", "area-under-graph", "trapezium", "top-speed"],
  "questionText": "A sprinter accelerates uniformly from rest to her top speed $V$ in $4\\ \\text{s}$, then maintains $V$. She covers $100\\ \\text{m}$ in a total time of $9\\ \\text{s}$. Using the trapezium area under her velocity–time graph, find $V$.",
  "questionDiagram": { "kind": "descriptive", "description": "A velocity–time graph. Horizontal axis: time t in seconds, from 0 to 9. Vertical axis: velocity v in m s^-1. A straight line rises from (0,0) to (4,V) [uniform acceleration], then a horizontal segment at v = V runs from (4,V) to (9,V) [constant top speed]. The enclosed region is a trapezium with parallel sides of length 9 (the base along the time axis, 0 to 9 s) and 5 (the top edge, 4 to 9 s), and height V.", "alt": "Trapezium velocity-time graph rising to top speed V in 4 s then held constant until 9 s." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Describe the shape.", "workingLatex": "\\text{rise } 0 \\to V \\text{ in } 4\\ \\text{s, then hold } V \\text{ until } 9\\ \\text{s}", "explanation": "The velocity–time graph climbs in a straight line to the top speed, then runs level. The overall region is a trapezium, and its area is the $100\\ \\text{m}$ distance covered.", "diagram": null },
      { "stepNumber": 2, "description": "State the plan.", "workingLatex": "\\text{area} = \\text{distance} = 100", "explanation": "Since velocity stays positive, the area under the graph equals the distance run. We can find that area either as one trapezium or as a triangle plus a rectangle.", "diagram": null },
      { "stepNumber": 3, "description": "Triangle part (acceleration).", "workingLatex": "A_1 = \\tfrac{1}{2} \\times 4 \\times V = 2V", "explanation": "The first $4\\ \\text{s}$ form a triangle with base $4$ and height $V$, contributing $2V$ metres while she speeds up.", "diagram": null },
      { "stepNumber": 4, "description": "Rectangle part (top speed).", "workingLatex": "A_2 = V \\times (9 - 4) = 5V", "explanation": "For the remaining $5\\ \\text{s}$ she runs at the constant top speed $V$, a rectangle of area $5V$ metres.", "diagram": null },
      { "stepNumber": 5, "description": "Add to get total area.", "workingLatex": "A = 2V + 5V = 7V", "explanation": "Combining the triangle and rectangle gives a total area of $7V$ metres.", "diagram": null },
      { "stepNumber": 6, "description": "Confirm with the trapezium formula.", "workingLatex": "A = \\tfrac{1}{2}(9 + 5)\\,V = \\tfrac{1}{2}\\times 14 \\times V = 7V", "explanation": "Treating the whole region as a trapezium, its parallel sides are $9$ (total time) and $5$ (time at top speed) with height $V$. Half their sum times $V$ also gives $7V$, confirming the split was correct.", "diagram": null },
      { "stepNumber": 7, "description": "Set the area equal to the distance.", "workingLatex": "7V = 100", "explanation": "The area must equal the $100\\ \\text{m}$ she covers, giving a single equation for the top speed.", "diagram": null },
      { "stepNumber": 8, "description": "Solve for V.", "workingLatex": "V = \\frac{100}{7} \\approx 14.3 \\ \\text{m s}^{-1}", "explanation": "Dividing $100$ by $7$ gives the top speed, about $14.3\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 9, "description": "State the answer.", "workingLatex": "V = \\tfrac{100}{7} \\approx 14.3 \\ \\text{m s}^{-1}", "explanation": "Her top speed is $\\tfrac{100}{7}\\ \\text{m s}^{-1}$, a realistic sprinting speed of roughly $14.3\\ \\text{m s}^{-1}$.", "diagram": null }
    ],
    "finalAnswer": "$V = \\dfrac{100}{7} \\approx 14.3\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q051",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["velocity-time-graph", "trapezium-area", "uniform-acceleration", "train-journey"],
  "questionText": "A train starts from rest and accelerates uniformly for $20\\ \\text{s}$ until it reaches a cruising speed $V$. It then travels at $V$ for a while before decelerating uniformly to rest in a further $20\\ \\text{s}$. The whole journey takes $100\\ \\text{s}$ and covers $1500\\ \\text{m}$. Using the velocity–time graph, find $V$, and hence the acceleration and the deceleration of the train.",
  "questionDiagram": { "kind": "descriptive", "description": "Velocity–time graph for the train. Horizontal axis: time $t$ in $\\text{s}$ from 0 to 100; vertical axis: velocity $v$ in $\\text{m s}^{-1}$. The graph is a trapezium formed by straight segments joining $(0,0)\\to(20,V)$ (acceleration), $(20,V)\\to(80,V)$ (cruising at speed $V$) and $(80,V)\\to(100,0)$ (deceleration). The area under the graph equals the total distance, $1500\\ \\text{m}$.", "alt": "Trapezium velocity-time graph rising to V over 20 s, flat until 80 s, then falling to zero at 100 s." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Picture the motion as a velocity–time graph.", "workingLatex": "\\text{rise (20 s)} \\;\\to\\; \\text{flat top} \\;\\to\\; \\text{fall (20 s)}", "explanation": "Uniform acceleration and deceleration are straight lines on a $v$–$t$ graph, and constant speed is a horizontal line. Together they make a trapezium, which is the shape we will find the area of.", "diagram": null },
      { "stepNumber": 2, "description": "Work out how long the cruising (constant-speed) phase lasts.", "workingLatex": "t_{\\text{cruise}} = 100 - 20 - 20 = 60 \\ \\text{s}", "explanation": "The total time is split between the three phases. Subtracting the $20\\ \\text{s}$ speeding-up and $20\\ \\text{s}$ slowing-down from the $100\\ \\text{s}$ total leaves the time spent at the steady speed $V$.", "diagram": null },
      { "stepNumber": 3, "description": "State the key fact linking the graph to the distance.", "workingLatex": "\\text{distance} = \\text{area under the } v\\text{--}t \\text{ graph}", "explanation": "On a velocity–time graph the area beneath the line is the displacement. So the $1500\\ \\text{m}$ is exactly the area of the trapezium, and that gives us an equation for $V$.", "diagram": null },
      { "stepNumber": 4, "description": "Recall the trapezium area formula.", "workingLatex": "A = \\tfrac{1}{2}(a+b)\\,h", "explanation": "A trapezium's area is half the sum of the two parallel sides times the distance between them. Here the parallel sides are the two horizontal lengths of the graph and the height is the speed $V$.", "diagram": null },
      { "stepNumber": 5, "description": "Identify the two parallel sides and the height.", "workingLatex": "a = 60 \\ (\\text{top}),\\quad b = 100 \\ (\\text{bottom}),\\quad h = V", "explanation": "The top of the trapezium is the cruising phase ($60\\ \\text{s}$) and the bottom is the whole time axis ($100\\ \\text{s}$). The vertical height of the shape is the cruising speed $V$.", "diagram": null },
      { "stepNumber": 6, "description": "Write the area as an expression in $V$.", "workingLatex": "A = \\tfrac{1}{2}(60 + 100)\\,V", "explanation": "Substituting the two lengths and the height into the trapezium formula turns the geometric area into a simple algebraic expression involving the single unknown $V$.", "diagram": null },
      { "stepNumber": 7, "description": "Simplify the bracket.", "workingLatex": "A = \\tfrac{1}{2}(160)\\,V = 80V", "explanation": "Adding the parallel sides and halving gives a clean coefficient, so the total distance is just $80$ times the cruising speed.", "diagram": null },
      { "stepNumber": 8, "description": "Set the area equal to the known distance.", "workingLatex": "80V = 1500", "explanation": "The area we computed must equal the given displacement of $1500\\ \\text{m}$, which pins down the value of $V$.", "diagram": null },
      { "stepNumber": 9, "description": "Solve for the cruising speed.", "workingLatex": "V = \\frac{1500}{80} = 18.75 \\ \\text{m s}^{-1}", "explanation": "Dividing both sides by $80$ isolates $V$. This is the steady speed the train reaches and holds during the middle of the journey.", "diagram": null },
      { "stepNumber": 10, "description": "Interpret acceleration as the gradient of the first segment.", "workingLatex": "a = \\frac{\\Delta v}{\\Delta t} = \\frac{V - 0}{20}", "explanation": "Acceleration is the slope of the velocity–time line. In the first phase the speed climbs from $0$ to $V$ over $20\\ \\text{s}$, so the gradient is $V$ divided by $20$.", "diagram": null },
      { "stepNumber": 11, "description": "Compute the acceleration.", "workingLatex": "a = \\frac{18.75}{20} = 0.9375 \\ \\text{m s}^{-2}", "explanation": "Putting in $V = 18.75$ gives the constant acceleration during the speeding-up phase.", "diagram": null },
      { "stepNumber": 12, "description": "Interpret deceleration as the gradient of the last segment.", "workingLatex": "d = \\frac{V - 0}{20} = \\frac{18.75}{20}", "explanation": "The final phase drops from $V$ back to $0$ over the same $20\\ \\text{s}$. Its slope has the same size as before; we quote the deceleration as a positive rate of slowing.", "diagram": null },
      { "stepNumber": 13, "description": "Compute the deceleration.", "workingLatex": "d = 0.9375 \\ \\text{m s}^{-2}", "explanation": "Because the speed change and the time are identical to the acceleration phase, the deceleration comes out equal in magnitude.", "diagram": null },
      { "stepNumber": 14, "description": "Sanity-check the distance.", "workingLatex": "\\tfrac{1}{2}(60+100)(18.75) = 80 \\times 18.75 = 1500 \\ \\text{m} \\ \\checkmark", "explanation": "Feeding $V$ back into the area confirms we recover exactly $1500\\ \\text{m}$, so the answers are consistent with the data.", "diagram": null }
    ],
    "finalAnswer": "$V = 18.75\\ \\text{m s}^{-1}$; acceleration $= 0.9375\\ \\text{m s}^{-2}$ and deceleration $= 0.9375\\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q052",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["velocity-time-graph", "equal-displacement", "catch-up", "quadratic"],
  "questionText": "Two cars set off from the same point at the same instant. Car A travels at a constant $20\\ \\text{m s}^{-1}$. Car B starts from rest and accelerates uniformly at $4\\ \\text{m s}^{-2}$. Using the areas under their velocity–time graphs, find the time at which B draws level with A (equal displacement), how far from the start this happens, and B's speed at that moment.",
  "questionDiagram": { "kind": "descriptive", "description": "Velocity–time graph for two cars leaving the same point at $t=0$. Horizontal axis: time $t$ in $\\text{s}$; vertical axis: velocity $v$ in $\\text{m s}^{-1}$. Car A is a horizontal straight line at $v = 20$. Car B is a straight line from the origin $(0,0)$ with gradient $4$ (so $v = 4t$), passing through $(5,20)$ and $(10,40)$. They are level when the areas under the two graphs, measured from $t=0$, are equal.", "alt": "Horizontal line at 20 for car A and a rising line v=4t for car B on the same velocity-time axes." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Decide what 'draws level' means on these graphs.", "workingLatex": "s_A = s_B", "explanation": "The cars are level when they have covered the same distance from the shared start. On a velocity–time graph distance is area, so we need the two areas (from $t=0$) to be equal.", "diagram": null },
      { "stepNumber": 2, "description": "Write A's displacement as the area of a rectangle.", "workingLatex": "s_A = 20t", "explanation": "A moves at a steady $20\\ \\text{m s}^{-1}$, so the area under its graph up to time $t$ is a rectangle of height $20$ and width $t$.", "diagram": null },
      { "stepNumber": 3, "description": "Write B's displacement as the area of a triangle.", "workingLatex": "s_B = \\tfrac{1}{2}\\,(t)\\,(4t) = 2t^2", "explanation": "B's graph is a straight line from the origin reaching speed $4t$ at time $t$. The area beneath is a triangle: half the base $t$ times the height $4t$, giving $2t^2$.", "diagram": null },
      { "stepNumber": 4, "description": "Form the equation for equal displacement.", "workingLatex": "20t = 2t^2", "explanation": "Setting the two areas equal captures the exact instant the cars are side by side again.", "diagram": null },
      { "stepNumber": 5, "description": "Bring everything to one side.", "workingLatex": "2t^2 - 20t = 0", "explanation": "Moving all terms to one side prepares the quadratic for factorising, which is cleaner than dividing while a solution might be lost.", "diagram": null },
      { "stepNumber": 6, "description": "Factorise.", "workingLatex": "2t(t - 10) = 0", "explanation": "Both terms share a factor of $2t$. Taking it out shows the two moments when the displacements match.", "diagram": null },
      { "stepNumber": 7, "description": "Read off and interpret the solutions.", "workingLatex": "t = 0 \\quad \\text{or} \\quad t = 10", "explanation": "$t = 0$ is the start, where they are trivially together. The meaningful answer is the later time when B, having accelerated, catches back up.", "diagram": null },
      { "stepNumber": 8, "description": "State the catch-up time.", "workingLatex": "t = 10 \\ \\text{s}", "explanation": "This is when B has finally covered as much ground as the steady car A.", "diagram": null },
      { "stepNumber": 9, "description": "Find the distance from the start using A.", "workingLatex": "s = 20 \\times 10 = 200 \\ \\text{m}", "explanation": "The easiest route is A's simple rectangle: $20\\ \\text{m s}^{-1}$ for $10\\ \\text{s}$ gives the meeting distance.", "diagram": null },
      { "stepNumber": 10, "description": "Check with B's displacement.", "workingLatex": "s_B = 2(10)^2 = 200 \\ \\text{m} \\ \\checkmark", "explanation": "B's triangle area gives the same $200\\ \\text{m}$, confirming the two really are level there.", "diagram": null },
      { "stepNumber": 11, "description": "Find B's speed at that time.", "workingLatex": "v_B = 4t = 4 \\times 10 = 40 \\ \\text{m s}^{-1}", "explanation": "B's speed is the gradient times time, $4t$. At $t = 10$ this is $40\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 12, "description": "Interpret why B is faster yet only just level.", "workingLatex": "\\bar v_B = \\tfrac{1}{2}(0 + 40) = 20 = v_A", "explanation": "B ends up moving twice as fast as A, but because it started from rest its average speed over the interval is only $\\tfrac{1}{2}(0+40) = 20\\ \\text{m s}^{-1}$ — exactly A's speed — which is why they have travelled the same distance.", "diagram": null },
      { "stepNumber": 13, "description": "Collect the results.", "workingLatex": "t = 10 \\ \\text{s}, \\quad s = 200 \\ \\text{m}, \\quad v_B = 40 \\ \\text{m s}^{-1}", "explanation": "Bringing the three answers together gives a complete description of the moment B draws level with A.", "diagram": null }
    ],
    "finalAnswer": "They draw level after $t = 10\\ \\text{s}$, a distance of $200\\ \\text{m}$ from the start; B's speed is then $40\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q053",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["velocity-time-graph", "braking", "suvat", "deceleration"],
  "questionText": "A vehicle travelling at $30\\ \\text{m s}^{-1}$ brakes uniformly and must come to rest within $75\\ \\text{m}$. Find the required deceleration and the time it takes to stop. Then find how far the vehicle travels during the first $2\\ \\text{s}$ of braking.",
  "questionDiagram": { "kind": "descriptive", "description": "Velocity–time graph for the braking vehicle. Horizontal axis: time $t$ in $\\text{s}$; vertical axis: velocity $v$ in $\\text{m s}^{-1}$. A single straight line falls from $(0,30)$ to $(t_s,0)$, where $t_s$ is the stopping time. The triangular area beneath the line equals the braking distance of $75\\ \\text{m}$.", "alt": "Straight line falling from 30 at time zero to zero at the stopping time." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "List the known quantities for the braking phase.", "workingLatex": "u = 30, \\quad v = 0, \\quad s = 75", "explanation": "The car starts braking at $30\\ \\text{m s}^{-1}$, ends at rest, and must do so inside $75\\ \\text{m}$. Writing these down shows which motion equation to reach for.", "diagram": null },
      { "stepNumber": 2, "description": "Choose the equation that avoids time.", "workingLatex": "v^2 = u^2 + 2as", "explanation": "We know the two speeds and the distance but not the time, so the equation linking $v$, $u$, $a$ and $s$ (with no $t$) is the direct choice for the deceleration.", "diagram": null },
      { "stepNumber": 3, "description": "Substitute the values.", "workingLatex": "0^2 = 30^2 + 2a(75)", "explanation": "Putting in the final speed $0$, initial speed $30$ and distance $75$ turns the formula into a single equation for the acceleration $a$.", "diagram": null },
      { "stepNumber": 4, "description": "Simplify the numbers.", "workingLatex": "0 = 900 + 150a", "explanation": "Squaring $30$ gives $900$ and $2 \\times 75 = 150$, tidying the equation ready to solve.", "diagram": null },
      { "stepNumber": 5, "description": "Solve for the acceleration.", "workingLatex": "150a = -900 \\quad\\Rightarrow\\quad a = -6 \\ \\text{m s}^{-2}", "explanation": "The negative sign means the velocity is decreasing. As a deceleration this is a slowing of $6\\ \\text{m s}^{-2}$.", "diagram": null },
      { "stepNumber": 6, "description": "State the deceleration.", "workingLatex": "\\text{deceleration} = 6 \\ \\text{m s}^{-2}", "explanation": "Quoting the magnitude gives the braking strength the vehicle must achieve to stop within the required distance.", "diagram": null },
      { "stepNumber": 7, "description": "Find the stopping time.", "workingLatex": "v = u + at \\;\\Rightarrow\\; 0 = 30 - 6t", "explanation": "Now that $a$ is known, the velocity equation gives the time for the speed to fall from $30$ to $0$.", "diagram": null },
      { "stepNumber": 8, "description": "Solve for the time.", "workingLatex": "6t = 30 \\quad\\Rightarrow\\quad t = 5 \\ \\text{s}", "explanation": "Rearranging gives a stopping time of $5\\ \\text{s}$ — the width of the triangle on the graph.", "diagram": null },
      { "stepNumber": 9, "description": "Check the stopping distance from the graph area.", "workingLatex": "\\tfrac{1}{2}(5)(30) = 75 \\ \\text{m} \\ \\checkmark", "explanation": "The triangle of base $5\\ \\text{s}$ and height $30\\ \\text{m s}^{-1}$ has area $75\\ \\text{m}$, matching the requirement and confirming the deceleration.", "diagram": null },
      { "stepNumber": 10, "description": "Set up the distance in the first 2 s.", "workingLatex": "s = ut + \\tfrac{1}{2}at^2", "explanation": "For a partial time interval it is cleanest to use the displacement equation with $t = 2$, using the initial speed and the now-known acceleration.", "diagram": null },
      { "stepNumber": 11, "description": "Substitute $u = 30$, $a = -6$, $t = 2$.", "workingLatex": "s = 30(2) + \\tfrac{1}{2}(-6)(2)^2", "explanation": "The first term is how far it would go at constant $30\\ \\text{m s}^{-1}$; the second term subtracts the ground lost to braking.", "diagram": null },
      { "stepNumber": 12, "description": "Evaluate each term.", "workingLatex": "s = 60 - 12 = 48 \\ \\text{m}", "explanation": "The rectangle-like part is $60\\ \\text{m}$ and braking removes $12\\ \\text{m}$, leaving $48\\ \\text{m}$ covered in the first two seconds.", "diagram": null },
      { "stepNumber": 13, "description": "Interpret the result.", "workingLatex": "48 \\ \\text{m of } 75 \\ \\text{m in the first } 2 \\text{ of } 5 \\text{ s}", "explanation": "The car covers most of the total distance early on because it is moving fastest at the start; the last stretch is slow, so the distance is not spread evenly through the $5\\ \\text{s}$.", "diagram": null }
    ],
    "finalAnswer": "Deceleration $= 6\\ \\text{m s}^{-2}$; time to stop $= 5\\ \\text{s}$; distance in the first 2 s $= 48\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q054",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["velocity-time-graph", "triangle-plus-rectangle", "sprinter", "modelling"],
  "questionText": "A sprinter accelerates uniformly from rest to her top speed $V$ during the first $3\\ \\text{s}$ of a race, then maintains $V$ for the rest of the race. She runs $100\\ \\text{m}$ in $10.6\\ \\text{s}$. Using the area under her velocity–time graph, find $V$ and her acceleration, and the distance she covers during the acceleration phase. Give answers to 3 significant figures.",
  "questionDiagram": { "kind": "descriptive", "description": "Velocity–time graph for the sprinter. Horizontal axis: time $t$ in $\\text{s}$ from 0 to 10.6; vertical axis: velocity $v$ in $\\text{m s}^{-1}$. A straight line rises from $(0,0)$ to $(3,V)$ (uniform acceleration), then a horizontal line runs from $(3,V)$ to $(10.6,V)$ (constant top speed). The total area, a triangle plus a rectangle, equals $100\\ \\text{m}$.", "alt": "Velocity-time graph rising to V over 3 s then flat at V until 10.6 s." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Describe the two phases on the graph.", "workingLatex": "\\text{triangle } (0 \\to 3\\text{ s}) + \\text{rectangle } (3 \\to 10.6\\text{ s})", "explanation": "The acceleration phase is a straight rise to $V$ (a triangle), and holding top speed is a horizontal line (a rectangle). The total area under both is the $100\\ \\text{m}$ she runs.", "diagram": null },
      { "stepNumber": 2, "description": "Find the duration of the constant-speed phase.", "workingLatex": "t_{\\text{const}} = 10.6 - 3 = 7.6 \\ \\text{s}", "explanation": "After the first $3\\ \\text{s}$ of speeding up, the remaining time of the $10.6\\ \\text{s}$ race is spent at top speed.", "diagram": null },
      { "stepNumber": 3, "description": "State the area = distance principle.", "workingLatex": "\\text{Area}_{\\text{total}} = 100 \\ \\text{m}", "explanation": "Because the vertical axis is velocity, the whole area beneath the graph equals the total distance run, which is the $100\\ \\text{m}$ of the race.", "diagram": null },
      { "stepNumber": 4, "description": "Write the triangle (acceleration) area.", "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}(3)(V) = 1.5V", "explanation": "The acceleration phase is a triangle of base $3\\ \\text{s}$ and height $V$, so its area — the distance run while speeding up — is $1.5V$.", "diagram": null },
      { "stepNumber": 5, "description": "Write the rectangle (constant-speed) area.", "workingLatex": "A_{\\square} = (7.6)(V) = 7.6V", "explanation": "At top speed she covers a rectangle of height $V$ and width $7.6\\ \\text{s}$, giving distance $7.6V$.", "diagram": null },
      { "stepNumber": 6, "description": "Add the areas.", "workingLatex": "1.5V + 7.6V = 9.1V", "explanation": "Combining the triangle and rectangle expresses the whole $100\\ \\text{m}$ as a single multiple of the unknown top speed $V$.", "diagram": null },
      { "stepNumber": 7, "description": "Form the equation.", "workingLatex": "9.1V = 100", "explanation": "The total area must equal the race distance, giving one equation in one unknown.", "diagram": null },
      { "stepNumber": 8, "description": "Solve for the top speed.", "workingLatex": "V = \\frac{100}{9.1} = 10.989\\ldots \\approx 10.99 \\ \\text{m s}^{-1}", "explanation": "Dividing gives her top speed. We keep extra figures for now to avoid rounding errors in the later parts.", "diagram": null },
      { "stepNumber": 9, "description": "Relate acceleration to the graph's first gradient.", "workingLatex": "a = \\frac{V - 0}{3}", "explanation": "Acceleration is the slope of the rising line: the change in speed $V$ divided by the $3\\ \\text{s}$ it takes.", "diagram": null },
      { "stepNumber": 10, "description": "Compute the acceleration.", "workingLatex": "a = \\frac{10.989}{3} = 3.663 \\approx 3.66 \\ \\text{m s}^{-2}", "explanation": "Substituting $V$ gives the constant acceleration during the drive phase, to 3 significant figures.", "diagram": null },
      { "stepNumber": 11, "description": "Find the distance in the acceleration phase.", "workingLatex": "s_{\\text{acc}} = 1.5V = 1.5 \\times 10.989", "explanation": "This is just the triangle area found earlier, now evaluated with the known $V$.", "diagram": null },
      { "stepNumber": 12, "description": "Evaluate that distance.", "workingLatex": "s_{\\text{acc}} = 16.48 \\approx 16.5 \\ \\text{m}", "explanation": "She covers about $16.5\\ \\text{m}$ while getting up to top speed.", "diagram": null },
      { "stepNumber": 13, "description": "Check the distances add to 100 m.", "workingLatex": "16.48 + 7.6(10.989) = 16.48 + 83.52 = 100 \\ \\text{m} \\ \\checkmark", "explanation": "The acceleration distance plus the constant-speed distance recovers the full $100\\ \\text{m}$, confirming the values are consistent.", "diagram": null }
    ],
    "finalAnswer": "$V \\approx 10.99\\ \\text{m s}^{-1}$; acceleration $\\approx 3.66\\ \\text{m s}^{-2}$; distance during the acceleration phase $\\approx 16.5\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q055",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "written",
  "tags": ["velocity-time-graph", "vertical-motion", "distance-vs-displacement", "gravity"],
  "questionText": "A ball is thrown vertically upwards at $24.5\\ \\text{m s}^{-1}$. Take $g = 9.8\\ \\text{m s}^{-2}$ and upwards as positive. Describe its velocity–time graph, and use it to find the time to reach the highest point, the greatest height (as an area), and the total time to return to the throwing point. Finally, contrast the total distance travelled with the displacement.",
  "questionDiagram": { "kind": "descriptive", "description": "Velocity–time graph for the ball with upwards taken positive. Horizontal axis: time $t$ in $\\text{s}$; vertical axis: velocity $v$ in $\\text{m s}^{-1}$. A single straight line of gradient $-9.8$ runs from $(0,24.5)$ through $(2.5,0)$ to $(5,-24.5)$. The triangular area above the axis (0 to 2.5 s) is the upward distance; the equal triangular area below the axis (2.5 to 5 s) is the downward distance.", "alt": "Straight line starting at 24.5, crossing zero at 2.5 s, reaching -24.5 at 5 s." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Set up the model and the shape of the graph.", "workingLatex": "u = 24.5, \\quad a = -g = -9.8", "explanation": "Taking up as positive, gravity acts downwards so the acceleration is a constant $-9.8\\ \\text{m s}^{-2}$. The velocity therefore falls in a straight line — the $v$–$t$ graph is a single sloping line of gradient $-9.8$.", "diagram": null },
      { "stepNumber": 2, "description": "Describe where the line starts.", "workingLatex": "(t,v) = (0, 24.5)", "explanation": "At launch the ball has its full upward speed of $24.5\\ \\text{m s}^{-1}$, so the line begins high on the positive axis.", "diagram": null },
      { "stepNumber": 3, "description": "Locate the highest point on the graph.", "workingLatex": "v = 0", "explanation": "At the top of the flight the ball is momentarily at rest, so the velocity is zero — this is where the line crosses the time axis.", "diagram": null },
      { "stepNumber": 4, "description": "Find the time to the highest point.", "workingLatex": "0 = 24.5 - 9.8t \\;\\Rightarrow\\; t = \\frac{24.5}{9.8} = 2.5 \\ \\text{s}", "explanation": "Setting the velocity to zero and solving gives the moment the ball stops rising.", "diagram": null },
      { "stepNumber": 5, "description": "Identify the greatest height as an area.", "workingLatex": "h = \\text{area of the triangle above the axis}", "explanation": "The distance travelled upwards is the area between the line and the time axis over the first $2.5\\ \\text{s}$, which is a triangle.", "diagram": null },
      { "stepNumber": 6, "description": "Compute that area.", "workingLatex": "h = \\tfrac{1}{2}(2.5)(24.5) = 30.625 \\ \\text{m}", "explanation": "Half the base $2.5\\ \\text{s}$ times the height $24.5\\ \\text{m s}^{-1}$ gives the greatest height reached.", "diagram": null },
      { "stepNumber": 7, "description": "Use symmetry to continue the graph.", "workingLatex": "(2.5, 0) \\to (5, -24.5)", "explanation": "After the top, the same constant acceleration makes the speed grow downwards at the same rate, so the line carries on straight below the axis, mirroring the way up.", "diagram": null },
      { "stepNumber": 8, "description": "Find the total time to return.", "workingLatex": "t_{\\text{total}} = 2 \\times 2.5 = 5 \\ \\text{s}", "explanation": "By the symmetry of the graph the time coming down equals the time going up, so the whole flight lasts twice the time to the top.", "diagram": null },
      { "stepNumber": 9, "description": "State the velocity on return.", "workingLatex": "v = 24.5 - 9.8(5) = -24.5 \\ \\text{m s}^{-1}", "explanation": "Back at the throwing point the ball has the same speed but is now moving downwards, shown by the equal-and-opposite value on the graph.", "diagram": null },
      { "stepNumber": 10, "description": "Compute the total distance travelled.", "workingLatex": "\\text{distance} = 30.625 + 30.625 = 61.25 \\ \\text{m}", "explanation": "Distance ignores direction, so we add the sizes of the two triangular areas: up $30.625\\ \\text{m}$ then down $30.625\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 11, "description": "Compute the displacement as the net area.", "workingLatex": "\\text{displacement} = (+30.625) + (-30.625) = 0", "explanation": "Displacement is the signed area: the area below the axis counts as negative, cancelling the area above, because the ball ends where it began.", "diagram": null },
      { "stepNumber": 12, "description": "Contrast the two quantities.", "workingLatex": "\\text{distance } 61.25 \\ \\text{m} \\;\\neq\\; \\text{displacement } 0", "explanation": "The ball physically travels $61.25\\ \\text{m}$ through the air, yet its overall change in position is zero — a clear illustration that distance and displacement differ whenever motion reverses direction.", "diagram": null },
      { "stepNumber": 13, "description": "Summarise the graph description.", "workingLatex": "\\text{line: } (0,24.5) \\to (2.5,0) \\to (5,-24.5)", "explanation": "The full velocity–time graph is one straight line of constant negative gradient, symmetric about the time axis at the top of the flight, which encodes every result above.", "diagram": null }
    ],
    "finalAnswer": "Time to highest point $= 2.5\\ \\text{s}$; greatest height $= 30.625\\ \\text{m}$; total time to return $= 5\\ \\text{s}$; total distance $= 61.25\\ \\text{m}$ but displacement $= 0$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q056",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "written",
  "tags": ["velocity-time-graph", "trapezium-area", "suvat-derivation", "proof"],
  "questionText": "Using the trapezium area of a straight-line velocity–time graph, prove that $s = \\tfrac{1}{2}(u+v)t$ for motion with uniform acceleration. Then, using $a = \\dfrac{v-u}{t}$, derive $s = ut + \\tfrac{1}{2}at^2$. Finally apply your result to $u = 5\\ \\text{m s}^{-1}$, $a = 2\\ \\text{m s}^{-2}$ and $t = 6\\ \\text{s}$.",
  "questionDiagram": { "kind": "descriptive", "description": "General velocity–time graph for uniform acceleration. Horizontal axis: time from $0$ to $t$; vertical axis: velocity. A straight line runs from $(0,u)$ to $(t,v)$. The region beneath it is a trapezium with parallel vertical sides of length $u$ (at time $0$) and $v$ (at time $t$), separated by width $t$.", "alt": "Straight line from height u at time 0 to height v at time t, forming a trapezium with the axis." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Describe the graph for uniform acceleration.", "workingLatex": "(0,u) \\longrightarrow (t,v)", "explanation": "Constant acceleration means the velocity changes at a steady rate, so the velocity–time graph is a straight line from the starting speed $u$ up (or down) to the final speed $v$.", "diagram": null },
      { "stepNumber": 2, "description": "Identify the region whose area is the displacement.", "workingLatex": "s = \\text{area beneath the line}", "explanation": "Distance is the area under a velocity–time graph. Here that region is a trapezium bounded by the line, the time axis and the two vertical sides.", "diagram": null },
      { "stepNumber": 3, "description": "Name the parts of the trapezium.", "workingLatex": "\\text{parallel sides } u \\text{ and } v; \\quad \\text{width } t", "explanation": "The two vertical edges have heights $u$ (at time $0$) and $v$ (at time $t$); the horizontal gap between them is the elapsed time $t$.", "diagram": null },
      { "stepNumber": 4, "description": "Apply the trapezium area formula.", "workingLatex": "s = \\tfrac{1}{2}(u + v)\\,t", "explanation": "Area of a trapezium is half the sum of the parallel sides times the distance between them. This immediately gives the first required result. $\\blacksquare$", "diagram": null },
      { "stepNumber": 5, "description": "Bring in the definition of acceleration.", "workingLatex": "a = \\frac{v - u}{t}", "explanation": "Acceleration is the gradient of the line: the change in velocity $v - u$ divided by the time $t$. This is the second fact we are told to use.", "diagram": null },
      { "stepNumber": 6, "description": "Rearrange to make $v$ the subject.", "workingLatex": "v = u + at", "explanation": "Multiplying through by $t$ and adding $u$ expresses the final velocity in terms of $u$, $a$ and $t$, ready to substitute into the first result.", "diagram": null },
      { "stepNumber": 7, "description": "Substitute $v$ into $s = \\tfrac{1}{2}(u+v)t$.", "workingLatex": "s = \\tfrac{1}{2}\\big(u + (u + at)\\big)t", "explanation": "Replacing $v$ removes it from the formula, leaving an expression built only from $u$, $a$ and $t$.", "diagram": null },
      { "stepNumber": 8, "description": "Simplify inside the bracket.", "workingLatex": "s = \\tfrac{1}{2}(2u + at)\\,t", "explanation": "Adding the two $u$ terms tidies the bracket before multiplying out.", "diagram": null },
      { "stepNumber": 9, "description": "Expand the product.", "workingLatex": "s = ut + \\tfrac{1}{2}at^2", "explanation": "Multiplying $\\tfrac{1}{2}$ and $t$ through the bracket gives the two familiar terms — the second required result. $\\blacksquare$", "diagram": null },
      { "stepNumber": 10, "description": "Substitute the given values.", "workingLatex": "s = (5)(6) + \\tfrac{1}{2}(2)(6)^2", "explanation": "With the formula proven we simply insert $u = 5$, $a = 2$ and $t = 6$ to find the displacement in this case.", "diagram": null },
      { "stepNumber": 11, "description": "Evaluate each term.", "workingLatex": "s = 30 + \\tfrac{1}{2}(2)(36) = 30 + 36", "explanation": "The first term is the distance at the initial speed; the second is the extra distance from accelerating.", "diagram": null },
      { "stepNumber": 12, "description": "State the displacement.", "workingLatex": "s = 66 \\ \\text{m}", "explanation": "Adding the two contributions gives the total displacement over the six seconds.", "diagram": null },
      { "stepNumber": 13, "description": "Cross-check with the first formula.", "workingLatex": "v = 5 + 2(6) = 17, \\quad s = \\tfrac{1}{2}(5 + 17)(6) = 66 \\ \\text{m} \\ \\checkmark", "explanation": "Finding $v$ and using $s = \\tfrac{1}{2}(u+v)t$ gives the same $66\\ \\text{m}$, confirming both derivations are consistent.", "diagram": null }
    ],
    "finalAnswer": "$s = \\tfrac{1}{2}(u+v)t$ and $s = ut + \\tfrac{1}{2}at^2$; with $u = 5$, $a = 2$, $t = 6$, $s = 66\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q057",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "written",
  "tags": ["velocity-time-graph", "lift-motion", "average-speed", "modelling-assumption"],
  "questionText": "A lift starts from rest and accelerates at $1.5\\ \\text{m s}^{-2}$ for $2\\ \\text{s}$, travels at constant speed for $6\\ \\text{s}$, then decelerates to rest at $1\\ \\text{m s}^{-2}$. Using the velocity–time graph, find the constant speed reached, the total distance risen, and the average speed of the whole trip. Comment on one modelling assumption implied by the shape of the graph.",
  "questionDiagram": { "kind": "descriptive", "description": "Velocity–time graph for the lift. Horizontal axis: time $t$ in $\\text{s}$; vertical axis: velocity $v$ in $\\text{m s}^{-1}$. Straight segments join $(0,0)\\to(2,3)$ (acceleration), $(2,3)\\to(8,3)$ (constant speed) and $(8,3)\\to(11,0)$ (deceleration). The total area under the graph is the distance risen.", "alt": "Trapezium-like velocity-time graph rising to 3 over 2 s, flat to 8 s, then falling to zero at 11 s." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Sketch the three phases.", "workingLatex": "\\text{rise (2 s)} \\to \\text{flat (6 s)} \\to \\text{fall}", "explanation": "The lift speeds up, holds a steady speed, then slows to rest. On a $v$–$t$ graph these are a rising line, a horizontal line and a falling line.", "diagram": null },
      { "stepNumber": 2, "description": "Find the constant speed from the acceleration phase.", "workingLatex": "v = u + at = 0 + 1.5(2)", "explanation": "The top speed is reached at the end of the acceleration phase: starting from rest and gaining $1.5\\ \\text{m s}^{-1}$ each second for $2\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 3, "description": "State the constant speed.", "workingLatex": "v = 3 \\ \\text{m s}^{-1}", "explanation": "This is the height of the flat top of the graph and the speed held during the middle phase.", "diagram": null },
      { "stepNumber": 4, "description": "Find the distance in the acceleration phase.", "workingLatex": "s_1 = \\tfrac{1}{2}(2)(3) = 3 \\ \\text{m}", "explanation": "The rising phase is a triangle of base $2\\ \\text{s}$ and height $3\\ \\text{m s}^{-1}$, so its area gives $3\\ \\text{m}$ risen while speeding up.", "diagram": null },
      { "stepNumber": 5, "description": "Find the duration of the deceleration phase.", "workingLatex": "t_3 = \\frac{v}{a} = \\frac{3}{1} = 3 \\ \\text{s}", "explanation": "Slowing from $3\\ \\text{m s}^{-1}$ to rest at $1\\ \\text{m s}^{-2}$ takes the speed divided by the deceleration, i.e. $3\\ \\text{s}$.", "diagram": null },
      { "stepNumber": 6, "description": "Find the total time.", "workingLatex": "T = 2 + 6 + 3 = 11 \\ \\text{s}", "explanation": "Adding the three phase times gives the length of the whole journey, which we need for the average speed.", "diagram": null },
      { "stepNumber": 7, "description": "Find the distance in the constant-speed phase.", "workingLatex": "s_2 = 3 \\times 6 = 18 \\ \\text{m}", "explanation": "At a steady $3\\ \\text{m s}^{-1}$ for $6\\ \\text{s}$ the lift rises $18\\ \\text{m}$ — the rectangle in the middle of the graph.", "diagram": null },
      { "stepNumber": 8, "description": "Find the distance in the deceleration phase.", "workingLatex": "s_3 = \\tfrac{1}{2}(3)(3) = 4.5 \\ \\text{m}", "explanation": "The slowing-down phase is a triangle of base $3\\ \\text{s}$ and height $3\\ \\text{m s}^{-1}$, giving $4.5\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 9, "description": "Add the three distances.", "workingLatex": "s = 3 + 18 + 4.5 = 25.5 \\ \\text{m}", "explanation": "The total area under the graph is the sum of the two triangles and the rectangle, giving the total height risen.", "diagram": null },
      { "stepNumber": 10, "description": "Set up the average speed.", "workingLatex": "\\bar v = \\frac{\\text{total distance}}{\\text{total time}} = \\frac{25.5}{11}", "explanation": "Average speed is the whole distance divided by the whole time, not the average of the phase speeds.", "diagram": null },
      { "stepNumber": 11, "description": "Evaluate the average speed.", "workingLatex": "\\bar v = 2.318\\ldots \\approx 2.32 \\ \\text{m s}^{-1}", "explanation": "The result is below the $3\\ \\text{m s}^{-1}$ cruise speed because time is also spent slower during the speeding-up and slowing-down phases.", "diagram": null },
      { "stepNumber": 12, "description": "State a modelling assumption.", "workingLatex": "\\text{sharp corners} \\Rightarrow \\text{instant change of acceleration}", "explanation": "The sudden corners on the graph assume the acceleration switches instantly between values (from $+1.5$ to $0$ to $-1$). In reality this would need an infinite rate of change, so a real lift's graph would have smoothed, rounded corners.", "diagram": null },
      { "stepNumber": 13, "description": "Collect the results.", "workingLatex": "v = 3, \\quad s = 25.5, \\quad \\bar v \\approx 2.32", "explanation": "Gathering the answers gives the full description of the lift's short journey.", "diagram": null }
    ],
    "finalAnswer": "Constant speed $= 3\\ \\text{m s}^{-1}$; total distance risen $= 25.5\\ \\text{m}$; average speed $= \\tfrac{25.5}{11} \\approx 2.32\\ \\text{m s}^{-1}$. The graph's sharp corners assume acceleration changes instantaneously, which is not physically realistic."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q058",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "tags": ["velocity-time-graph", "stopping-distance", "reaction-time", "braking"],
  "questionText": "A driver travelling at $20\\ \\text{m s}^{-1}$ sees a hazard. She reacts for $0.7\\ \\text{s}$ (during which the car keeps the same speed) and then brakes at $5\\ \\text{m s}^{-2}$ until stopping. Using a velocity–time graph, find the total stopping distance (reaction distance plus braking distance) and state whether the car stops within a $50\\ \\text{m}$ gap.",
  "questionDiagram": { "kind": "descriptive", "description": "Velocity–time graph for the driver. Horizontal axis: time $t$ in $\\text{s}$; vertical axis: velocity $v$ in $\\text{m s}^{-1}$. A horizontal segment runs from $(0,20)$ to $(0.7,20)$ (reaction time at constant speed), then a straight line falls from $(0.7,20)$ to $(4.7,0)$ (braking). The rectangle area is the reaction distance and the triangle area is the braking distance.", "alt": "Horizontal line at 20 until 0.7 s, then a straight fall to zero at 4.7 s." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Split the motion into two parts on the graph.", "workingLatex": "\\text{rectangle (reaction)} + \\text{triangle (braking)}", "explanation": "While the driver reacts the speed is constant, giving a rectangle; while braking the speed falls to zero, giving a triangle. The stopping distance is the total area.", "diagram": null },
      { "stepNumber": 2, "description": "Find the reaction distance.", "workingLatex": "s_r = 20 \\times 0.7", "explanation": "During the reaction time the car carries on at $20\\ \\text{m s}^{-1}$, so the distance is speed times time — the area of the rectangle.", "diagram": null },
      { "stepNumber": 3, "description": "Evaluate the reaction distance.", "workingLatex": "s_r = 14 \\ \\text{m}", "explanation": "In the $0.7\\ \\text{s}$ before braking even begins, the car has already travelled $14\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 4, "description": "Find how long the braking takes.", "workingLatex": "t_b = \\frac{u}{a} = \\frac{20}{5} = 4 \\ \\text{s}", "explanation": "Braking from $20\\ \\text{m s}^{-1}$ to rest at $5\\ \\text{m s}^{-2}$ takes the speed divided by the deceleration, i.e. $4\\ \\text{s}$ — the base of the triangle.", "diagram": null },
      { "stepNumber": 5, "description": "Find the braking distance from the triangle area.", "workingLatex": "s_b = \\tfrac{1}{2}(4)(20)", "explanation": "The braking phase is a triangle of base $4\\ \\text{s}$ and height $20\\ \\text{m s}^{-1}$; its area is the distance covered while slowing down.", "diagram": null },
      { "stepNumber": 6, "description": "Evaluate the braking distance.", "workingLatex": "s_b = 40 \\ \\text{m}", "explanation": "So the car travels a further $40\\ \\text{m}$ once the brakes are applied.", "diagram": null },
      { "stepNumber": 7, "description": "Confirm with a suvat check.", "workingLatex": "v^2 = u^2 + 2as \\;\\Rightarrow\\; 0 = 400 - 10s \\;\\Rightarrow\\; s = 40 \\ \\text{m} \\ \\checkmark", "explanation": "Using $v^2 = u^2 + 2as$ with $a = -5$ gives the same $40\\ \\text{m}$, confirming the triangle area.", "diagram": null },
      { "stepNumber": 8, "description": "Add the two parts.", "workingLatex": "s = s_r + s_b = 14 + 40", "explanation": "The full stopping distance is the reaction distance plus the braking distance — the total area under the graph.", "diagram": null },
      { "stepNumber": 9, "description": "State the total stopping distance.", "workingLatex": "s = 54 \\ \\text{m}", "explanation": "From spotting the hazard to fully stopping, the car needs $54\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 10, "description": "Compare with the available gap.", "workingLatex": "54 \\ \\text{m} > 50 \\ \\text{m}", "explanation": "The stopping distance exceeds the $50\\ \\text{m}$ gap, so the comparison decides whether the car can stop safely.", "diagram": null },
      { "stepNumber": 11, "description": "State the conclusion.", "workingLatex": "\\text{overshoot} = 54 - 50 = 4 \\ \\text{m}", "explanation": "Because $54 > 50$, the car does not stop in time; it would overshoot the gap by $4\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 12, "description": "Reflect on the reaction contribution.", "workingLatex": "\\frac{14}{54} \\approx 26\\%", "explanation": "Over a quarter of the stopping distance is used up before braking even starts, highlighting how much reaction time matters — without it the $40\\ \\text{m}$ braking distance alone would have fit inside the gap.", "diagram": null },
      { "stepNumber": 13, "description": "Collect the results.", "workingLatex": "s = 54 \\ \\text{m} > 50 \\ \\text{m} \\Rightarrow \\text{does not stop in time}", "explanation": "Bringing the two areas together gives a total stopping distance of $54\\ \\text{m}$, which is more than the $50\\ \\text{m}$ available, so the driver cannot avoid the hazard within the gap.", "diagram": null }
    ],
    "finalAnswer": "Total stopping distance $= 54\\ \\text{m}$; since $54 > 50$, the car does not stop within the $50\\ \\text{m}$ gap (it overshoots by $4\\ \\text{m}$)."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q059",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "numeric",
  "tags": ["velocity-time-graph", "area-as-distance", "average-speed", "cyclist"],
  "questionText": "A cyclist's journey between two points is $900\\ \\text{m}$ long and takes $60\\ \\text{s}$. For the first $40\\ \\text{s}$ she travels at a constant $12\\ \\text{m s}^{-1}$; for the remaining time she moves at a different constant speed. Using areas under the velocity–time graph, find that second speed and the average speed of the whole journey.",
  "questionDiagram": { "kind": "descriptive", "description": "Velocity–time graph for the cyclist. Horizontal axis: time $t$ in $\\text{s}$ from 0 to 60; vertical axis: velocity $v$ in $\\text{m s}^{-1}$. A horizontal segment at $v = 12$ runs from $t = 0$ to $t = 40$, then a horizontal segment at the unknown second speed $w$ runs from $t = 40$ to $t = 60$. The two rectangular areas sum to $900\\ \\text{m}$.", "alt": "Two horizontal steps: 12 from 0 to 40 s, then a higher constant speed from 40 to 60 s." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Recognise the graph as two rectangles.", "workingLatex": "\\text{area}_1 + \\text{area}_2 = 900 \\ \\text{m}", "explanation": "Each constant-speed phase is a horizontal line, so the distance in each is a rectangle. The two rectangle areas must add up to the total journey of $900\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 2, "description": "Find the distance in the first phase.", "workingLatex": "s_1 = 12 \\times 40", "explanation": "At a steady $12\\ \\text{m s}^{-1}$ for $40\\ \\text{s}$, the distance is speed times time — the area of the first rectangle.", "diagram": null },
      { "stepNumber": 3, "description": "Evaluate that distance.", "workingLatex": "s_1 = 480 \\ \\text{m}", "explanation": "So $480\\ \\text{m}$ of the journey is covered in the first phase.", "diagram": null },
      { "stepNumber": 4, "description": "Find the distance left for the second phase.", "workingLatex": "s_2 = 900 - 480", "explanation": "Whatever distance is not covered in the first phase must be covered in the second, since the areas total $900\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 5, "description": "Evaluate the remaining distance.", "workingLatex": "s_2 = 420 \\ \\text{m}", "explanation": "The cyclist has $420\\ \\text{m}$ still to travel after the first phase.", "diagram": null },
      { "stepNumber": 6, "description": "Find the duration of the second phase.", "workingLatex": "t_2 = 60 - 40 = 20 \\ \\text{s}", "explanation": "The second phase fills the rest of the $60\\ \\text{s}$ journey, i.e. $20\\ \\text{s}$ — the width of the second rectangle.", "diagram": null },
      { "stepNumber": 7, "description": "Find the second speed.", "workingLatex": "w = \\frac{s_2}{t_2} = \\frac{420}{20}", "explanation": "For the second rectangle the speed is its area (distance) divided by its width (time).", "diagram": null },
      { "stepNumber": 8, "description": "Evaluate the second speed.", "workingLatex": "w = 21 \\ \\text{m s}^{-1}", "explanation": "She must ride at $21\\ \\text{m s}^{-1}$ in the second phase to complete the journey on time.", "diagram": null },
      { "stepNumber": 9, "description": "Check the total area.", "workingLatex": "480 + 420 = 900 \\ \\text{m} \\ \\checkmark", "explanation": "The two rectangle areas add back to $900\\ \\text{m}$, confirming the second speed is consistent with the data.", "diagram": null },
      { "stepNumber": 10, "description": "Set up the average speed.", "workingLatex": "\\bar v = \\frac{\\text{total distance}}{\\text{total time}} = \\frac{900}{60}", "explanation": "Average speed for the whole trip is the total distance over the total time, regardless of how the speed varied.", "diagram": null },
      { "stepNumber": 11, "description": "Evaluate the average speed.", "workingLatex": "\\bar v = 15 \\ \\text{m s}^{-1}", "explanation": "The whole $900\\ \\text{m}$ in $60\\ \\text{s}$ averages to $15\\ \\text{m s}^{-1}$.", "diagram": null },
      { "stepNumber": 12, "description": "Note why this is not the mean of the two speeds.", "workingLatex": "\\tfrac{1}{2}(12 + 21) = 16.5 \\neq 15", "explanation": "The simple average of $12$ and $21$ is $16.5$, but the true average is lower because more time is spent at the slower speed. Average speed weights by time, which the graph areas do automatically.", "diagram": null },
      { "stepNumber": 13, "description": "Collect the results.", "workingLatex": "w = 21 \\ \\text{m s}^{-1}, \\quad \\bar v = 15 \\ \\text{m s}^{-1}", "explanation": "Gathering the two answers gives the second constant speed and the average speed for the complete journey.", "diagram": null }
    ],
    "finalAnswer": "Second speed $= 21\\ \\text{m s}^{-1}$; average speed of the whole journey $= 15\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.kinematics-graphs.q060",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Kinematics graphs",
  "subtopicId": "al.y1.mech.kinematics-graphs",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["velocity-time-graph", "trapezium-area", "minimum-time", "train-journey"],
  "questionText": "Two stations are $2000\\ \\text{m}$ apart. A train starts from rest and accelerates at $1.25\\ \\text{m s}^{-2}$ up to a speed limit of $25\\ \\text{m s}^{-1}$, cruises at the limit, then decelerates to rest at $2.5\\ \\text{m s}^{-2}$ to stop at the second station. Using the velocity–time graph, find the minimum time for the journey.",
  "questionDiagram": { "kind": "descriptive", "description": "Velocity–time graph for the train's minimum-time journey. Horizontal axis: time $t$ in $\\text{s}$; vertical axis: velocity $v$ in $\\text{m s}^{-1}$. Straight segments join $(0,0)\\to(20,25)$ (acceleration at $1.25\\ \\text{m s}^{-2}$), $(20,25)\\to(85,25)$ (cruising at the $25\\ \\text{m s}^{-1}$ limit) and $(85,25)\\to(95,0)$ (deceleration at $2.5\\ \\text{m s}^{-2}$). The total area equals $2000\\ \\text{m}$.", "alt": "Trapezium velocity-time graph rising to 25 by 20 s, flat until 85 s, then falling to zero at 95 s." },
  "workedSolution": {
    "steps": [
      { "stepNumber": 1, "description": "Decide the strategy for minimum time.", "workingLatex": "\\text{accelerate hard} \\to \\text{cruise at limit} \\to \\text{brake late}", "explanation": "The fastest allowed journey reaches the speed limit as soon as possible, holds it as long as possible, and only brakes at the last moment. This makes the graph a trapezium sitting as high as the limit permits.", "diagram": null },
      { "stepNumber": 2, "description": "Find the time to reach the limit.", "workingLatex": "t_1 = \\frac{v}{a} = \\frac{25}{1.25}", "explanation": "Accelerating from rest to $25\\ \\text{m s}^{-1}$ at $1.25\\ \\text{m s}^{-2}$ takes the speed divided by the acceleration.", "diagram": null },
      { "stepNumber": 3, "description": "Evaluate that time.", "workingLatex": "t_1 = 20 \\ \\text{s}", "explanation": "So the acceleration phase lasts $20\\ \\text{s}$ — the width of the rising part of the trapezium.", "diagram": null },
      { "stepNumber": 4, "description": "Find the distance in the acceleration phase.", "workingLatex": "s_1 = \\tfrac{1}{2}(20)(25)", "explanation": "The rising phase is a triangle of base $20\\ \\text{s}$ and height $25\\ \\text{m s}^{-1}$; its area is the distance covered while speeding up.", "diagram": null },
      { "stepNumber": 5, "description": "Evaluate that distance.", "workingLatex": "s_1 = 250 \\ \\text{m}", "explanation": "The train covers $250\\ \\text{m}$ reaching the speed limit.", "diagram": null },
      { "stepNumber": 6, "description": "Find the time to stop from the limit.", "workingLatex": "t_3 = \\frac{v}{a} = \\frac{25}{2.5} = 10 \\ \\text{s}", "explanation": "Braking from $25\\ \\text{m s}^{-1}$ to rest at $2.5\\ \\text{m s}^{-2}$ takes $10\\ \\text{s}$ — the width of the falling part.", "diagram": null },
      { "stepNumber": 7, "description": "Find the distance in the deceleration phase.", "workingLatex": "s_3 = \\tfrac{1}{2}(10)(25) = 125 \\ \\text{m}", "explanation": "The braking phase is a triangle of base $10\\ \\text{s}$ and height $25\\ \\text{m s}^{-1}$, giving $125\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 8, "description": "Find the cruising distance.", "workingLatex": "s_2 = 2000 - 250 - 125", "explanation": "Whatever distance is not used speeding up or slowing down must be covered at the steady limit, since the areas total $2000\\ \\text{m}$.", "diagram": null },
      { "stepNumber": 9, "description": "Evaluate the cruising distance.", "workingLatex": "s_2 = 1625 \\ \\text{m}", "explanation": "So $1625\\ \\text{m}$ is travelled at the $25\\ \\text{m s}^{-1}$ limit — the rectangle in the middle of the graph.", "diagram": null },
      { "stepNumber": 10, "description": "Find the cruising time.", "workingLatex": "t_2 = \\frac{s_2}{v} = \\frac{1625}{25}", "explanation": "At the constant limit speed, the cruising time is the cruising distance divided by that speed.", "diagram": null },
      { "stepNumber": 11, "description": "Evaluate the cruising time.", "workingLatex": "t_2 = 65 \\ \\text{s}", "explanation": "The train holds the limit for $65\\ \\text{s}$ — the width of the flat top of the trapezium.", "diagram": null },
      { "stepNumber": 12, "description": "Add the three phase times.", "workingLatex": "T = t_1 + t_2 + t_3 = 20 + 65 + 10", "explanation": "The total journey time is the sum of the acceleration, cruising and deceleration times.", "diagram": null },
      { "stepNumber": 13, "description": "State the minimum time.", "workingLatex": "T = 95 \\ \\text{s}", "explanation": "This is the minimum possible time: reaching the limit any slower, or cruising below it, would only reduce the area per second and so take longer to cover the same $2000\\ \\text{m}$.", "diagram": null }
    ],
    "finalAnswer": "Minimum time for the journey $= 95\\ \\text{s}$."
  }
},
  {
    "id": "al.y1.mech.kinematics-graphs.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": ["velocity-time-graph", "signed-area", "distance-vs-displacement", "average-speed", "reversing-motion"],
    "questionText": "A particle moves in a straight line. Its velocity–time graph is made of straight-line segments: it accelerates uniformly from rest at $(0,0)$ to $8\\ \\text{m s}^{-1}$ at $t=4\\ \\text{s}$, travels at a constant $8\\ \\text{m s}^{-1}$ until $t=10\\ \\text{s}$, decelerates uniformly to rest at $t=14\\ \\text{s}$, then reverses, its velocity falling to $-6\\ \\text{m s}^{-1}$ at $t=18\\ \\text{s}$ and staying at $-6\\ \\text{m s}^{-1}$ until $t=22\\ \\text{s}$. Find the total distance travelled, the final displacement from the start, the average speed and the average velocity over the $22\\ \\text{s}$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time $t$ in seconds (0 to 22). Vertical axis: velocity $v$ in $\\text{m s}^{-1}$ (from $-6$ to $8$). Straight segments join the points $(0,0)$, $(4,8)$, $(10,8)$, $(14,0)$, $(18,-6)$, $(22,-6)$. The graph is above the time-axis from $t=0$ to $t=14$ (a trapezium-shaped region) and below the axis from $t=14$ to $t=22$ (a triangle from $(14,0)$ to $(18,-6)$, then a rectangle across to $(22,-6)$).",
      "alt": "A v-t graph rising to 8, holding, returning to zero at t=14, then dropping to -6 and holding until t=22."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the graph as a signed-area problem.", "workingLatex": "\\text{displacement}=\\text{signed area under }v\\text{–}t;\\quad \\text{distance}=\\sum|\\text{area}|", "explanation": "The area between a velocity–time graph and the time-axis is the displacement. Areas above the axis count as positive (forward) motion and areas below count as negative (backward) motion, so total distance adds the sizes of all pieces while displacement keeps their signs.", "diagram": null },
        { "stepNumber": 2, "description": "Area of the first triangle (0 s to 4 s).", "workingLatex": "A_1=\\tfrac{1}{2}\\times 4\\times 8 = 16\\ \\text{m}", "explanation": "Going from rest to $8\\ \\text{m s}^{-1}$ over $4\\ \\text{s}$ makes a triangle sitting on the time-axis; half base times height gives the forward distance covered while speeding up.", "diagram": null },
        { "stepNumber": 3, "description": "Area of the constant-velocity rectangle (4 s to 10 s).", "workingLatex": "A_2 = 8\\times(10-4)=8\\times 6 = 48\\ \\text{m}", "explanation": "At a steady $8\\ \\text{m s}^{-1}$ the region is a rectangle, so its area is width (time) times height (speed).", "diagram": null },
        { "stepNumber": 4, "description": "Area of the second triangle (10 s to 14 s).", "workingLatex": "A_3=\\tfrac{1}{2}\\times 4\\times 8 = 16\\ \\text{m}", "explanation": "Slowing from $8\\ \\text{m s}^{-1}$ back to rest over $4\\ \\text{s}$ is another triangle above the axis, still forward motion.", "diagram": null },
        { "stepNumber": 5, "description": "Total forward distance (first 14 s).", "workingLatex": "A_1+A_2+A_3 = 16+48+16 = 80\\ \\text{m}", "explanation": "All three pieces sit above the axis, so up to $t=14$ the particle has moved $80\\ \\text{m}$ in the positive direction.", "diagram": null },
        { "stepNumber": 6, "description": "Area of the triangle below the axis (14 s to 18 s).", "workingLatex": "A_4 = \\tfrac{1}{2}\\times 4\\times 6 = 12\\ \\text{m (backward)}", "explanation": "After $t=14$ the velocity is negative, so the particle reverses; this triangle lies below the axis and represents $12\\ \\text{m}$ travelled backwards.", "diagram": null },
        { "stepNumber": 7, "description": "Area of the rectangle below the axis (18 s to 22 s).", "workingLatex": "A_5 = 6\\times(22-18)=6\\times 4 = 24\\ \\text{m (backward)}", "explanation": "At a steady $-6\\ \\text{m s}^{-1}$ the region is a rectangle below the axis, a further $24\\ \\text{m}$ of backward travel.", "diagram": null },
        { "stepNumber": 8, "description": "Total backward distance.", "workingLatex": "A_4+A_5 = 12+24 = 36\\ \\text{m}", "explanation": "The two below-axis pieces together give the distance covered while moving in reverse.", "diagram": null },
        { "stepNumber": 9, "description": "Total distance (add the sizes of all areas).", "workingLatex": "\\text{distance}=80+36 = 116\\ \\text{m}", "explanation": "Distance ignores direction, so we add the magnitudes of every area, whether above or below the axis.", "diagram": null },
        { "stepNumber": 10, "description": "Final displacement (signed sum).", "workingLatex": "s = 80 - 36 = 44\\ \\text{m}", "explanation": "Displacement keeps direction: the $80\\ \\text{m}$ forward is partly undone by $36\\ \\text{m}$ backward, leaving the particle $44\\ \\text{m}$ ahead of the start.", "diagram": null },
        { "stepNumber": 11, "description": "Total time.", "workingLatex": "T = 22\\ \\text{s}", "explanation": "The motion runs from $t=0$ to $t=22$, so the whole trip lasts $22\\ \\text{s}$; this is the denominator for both averages.", "diagram": null },
        { "stepNumber": 12, "description": "Average speed.", "workingLatex": "\\text{average speed}=\\frac{\\text{distance}}{T}=\\frac{116}{22}\\approx 5.27\\ \\text{m s}^{-1}", "explanation": "Average speed uses the total path length, so we divide the $116\\ \\text{m}$ actually travelled by the total time.", "diagram": null },
        { "stepNumber": 13, "description": "Average velocity.", "workingLatex": "\\text{average velocity}=\\frac{s}{T}=\\frac{44}{22}=2\\ \\text{m s}^{-1}", "explanation": "Average velocity uses net displacement, so we divide the $44\\ \\text{m}$ net advance by the total time; it is smaller because the reversal cancels some progress.", "diagram": null },
        { "stepNumber": 14, "description": "State the four requested quantities.", "workingLatex": "116\\ \\text{m},\\ \\ 44\\ \\text{m},\\ \\ 5.27\\ \\text{m s}^{-1},\\ \\ 2\\ \\text{m s}^{-1}", "explanation": "Collecting the results gives the full picture: the particle travels far but ends only moderately displaced, so its average speed exceeds its average velocity.", "diagram": null }
      ],
      "finalAnswer": "Total distance $=116\\ \\text{m}$; final displacement $=44\\ \\text{m}$; average speed $=\\dfrac{116}{22}\\approx 5.27\\ \\text{m s}^{-1}$; average velocity $=2\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": ["velocity-time-graph", "equal-velocity", "equal-displacement", "area-quadratic", "two-bodies"],
    "questionText": "Two cars set off from the same point at the same instant and move along the same straight road. Car $P$ starts from rest and accelerates uniformly at $2\\ \\text{m s}^{-2}$. Car $Q$ travels at a constant $12\\ \\text{m s}^{-1}$ throughout. (a) Find the time at which the two cars have the same velocity. (b) Using areas under their velocity–time graphs, find the time (after the start) at which the cars are again level, i.e. have equal displacement.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph for two cars on the same axes. Horizontal axis: time $t$ in seconds; vertical axis: velocity $v$ in $\\text{m s}^{-1}$. Car $P$ is a straight line through the origin $(0,0)$ with gradient $2$, passing through $(6,12)$. Car $Q$ is a horizontal straight line at $v=12$ starting from $(0,12)$. The two lines cross at $(6,12)$.",
      "alt": "A rising line P through the origin and a horizontal line Q at v=12, crossing at (6,12)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the velocity of car P.", "workingLatex": "v_P = 2t", "explanation": "Starting from rest with a constant acceleration of $2\\ \\text{m s}^{-2}$, the velocity grows linearly, gaining $2\\ \\text{m s}^{-1}$ each second, so after $t$ seconds it is $2t$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the velocity of car Q.", "workingLatex": "v_Q = 12", "explanation": "Car $Q$ holds a steady $12\\ \\text{m s}^{-1}$, so its velocity does not change with time — a horizontal line on the graph.", "diagram": null },
        { "stepNumber": 3, "description": "Set up the equal-velocity condition.", "workingLatex": "2t = 12", "explanation": "The cars have the same velocity where their two graphs meet in height, so set the velocity expressions equal.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for the equal-velocity time.", "workingLatex": "t = 6\\ \\text{s}", "explanation": "Car $P$ needs $6\\ \\text{s}$ of accelerating to build up to $Q$'s steady speed; this is exactly where the lines cross.", "diagram": null },
        { "stepNumber": 5, "description": "Move to displacement for part (b).", "workingLatex": "\\text{displacement}=\\text{area under }v\\text{–}t", "explanation": "Being 'level' means equal displacement, and displacement is the area under each velocity–time graph, so we compare the two areas.", "diagram": null },
        { "stepNumber": 6, "description": "Displacement of P (triangle area).", "workingLatex": "s_P = \\tfrac{1}{2}\\times t\\times (2t) = t^2", "explanation": "Car $P$'s graph is a triangle with base $t$ and height $2t$; half base times height gives $t^2$, the quadratic growth typical of accelerating from rest.", "diagram": null },
        { "stepNumber": 7, "description": "Displacement of Q (rectangle area).", "workingLatex": "s_Q = 12t", "explanation": "Car $Q$'s graph is a rectangle of height $12$ and width $t$, so its area grows steadily in proportion to time.", "diagram": null },
        { "stepNumber": 8, "description": "Set up the level condition.", "workingLatex": "t^2 = 12t", "explanation": "The cars are together again when they have covered the same distance from the shared start, so set the two areas equal — this produces a quadratic.", "diagram": null },
        { "stepNumber": 9, "description": "Rearrange to one side.", "workingLatex": "t^2 - 12t = 0", "explanation": "Bring everything to one side to solve; do not divide through by $t$, or you will lose the starting solution.", "diagram": null },
        { "stepNumber": 10, "description": "Factorise.", "workingLatex": "t(t-12)=0", "explanation": "Factor out the common $t$; a product is zero when either factor is zero.", "diagram": null },
        { "stepNumber": 11, "description": "Read off the solutions.", "workingLatex": "t = 0 \\ \\text{or}\\ t = 12\\ \\text{s}", "explanation": "$t=0$ is the shared start (trivially level); the meaningful answer is the later time at which they meet again.", "diagram": null },
        { "stepNumber": 12, "description": "Interpret the meeting time.", "workingLatex": "t = 12\\ \\text{s}", "explanation": "Between the start and $t=12$, car $Q$ is ahead because it is faster early on, but $P$'s ever-increasing speed lets it catch up exactly at $12\\ \\text{s}$.", "diagram": null },
        { "stepNumber": 13, "description": "Check the meeting displacement.", "workingLatex": "s = 12\\times 12 = 144\\ \\text{m}\\quad(=12^2)", "explanation": "Both formulas give $144\\ \\text{m}$, a useful check that the areas really are equal at $t=12$.", "diagram": null },
        { "stepNumber": 14, "description": "State the answers with a note.", "workingLatex": "\\text{equal velocity at }6\\ \\text{s};\\quad \\text{level again at }12\\ \\text{s}", "explanation": "Notice the meeting time $(12\\ \\text{s})$ is exactly twice the equal-velocity time $(6\\ \\text{s})$ — a standard feature when one body starts from rest and the other moves at constant speed.", "diagram": null }
      ],
      "finalAnswer": "The cars have equal velocity at $t=6\\ \\text{s}$, and are level again (equal displacement of $144\\ \\text{m}$) at $t=12\\ \\text{s}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": ["trapezium-rule", "area-estimate", "concave-curve", "under-estimate", "numerical-integration"],
    "questionText": "A car accelerates along a straight road. Its velocity $v\\ \\text{m s}^{-1}$ is recorded every $2\\ \\text{s}$: at times $t = 0,\\ 2,\\ 4,\\ 6,\\ 8\\ \\text{s}$ the velocities are $0,\\ 9,\\ 16,\\ 21,\\ 24\\ \\text{m s}^{-1}$ respectively. The velocity–time curve is smooth and concave (it bends over as the acceleration falls). (a) Use the trapezium rule with all five readings to estimate the distance travelled in the $8\\ \\text{s}$. (b) State, with reasons, whether your estimate is an over-estimate or an under-estimate of the true distance.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time $t$ (s) from 0 to 8; vertical axis: velocity $v$ ($\\text{m s}^{-1}$) from 0 to 24. A smooth curve rises through the points $(0,0),(2,9),(4,16),(6,21),(8,24)$. The curve is concave (bending downward): it climbs steeply at first and flattens as $t$ increases, so it lies above the straight chords joining consecutive points.",
      "alt": "A concave-down velocity curve through (0,0),(2,9),(4,16),(6,21),(8,24), lying above its chords."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Link area under the graph to distance.", "workingLatex": "\\text{distance}=\\text{area under }v\\text{–}t", "explanation": "For motion in one direction the distance travelled is the area under the velocity–time graph; since we only have sampled points, we approximate that area.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the strip width and count.", "workingLatex": "h = 2\\ \\text{s},\\quad n = 4\\ \\text{strips}", "explanation": "Five equally spaced readings split the interval into four strips each $2\\ \\text{s}$ wide; the trapezium rule replaces the curve over each strip with a straight chord.", "diagram": null },
        { "stepNumber": 3, "description": "State the trapezium rule.", "workingLatex": "A\\approx \\tfrac{1}{2}h\\big[(y_0+y_4)+2(y_1+y_2+y_3)\\big]", "explanation": "The rule counts the two end readings once and every interior reading twice, because each interior ordinate is shared by two neighbouring trapezia.", "diagram": null },
        { "stepNumber": 4, "description": "Add the end ordinates.", "workingLatex": "y_0+y_4 = 0+24 = 24", "explanation": "The first and last velocities are each counted once; here they sum to $24$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the interior ordinates.", "workingLatex": "y_1+y_2+y_3 = 9+16+21 = 46", "explanation": "The three inner readings are each shared between two strips, so we total them before doubling.", "diagram": null },
        { "stepNumber": 6, "description": "Double the interior sum.", "workingLatex": "2\\times 46 = 92", "explanation": "Doubling accounts for each interior ordinate forming the right edge of one trapezium and the left edge of the next.", "diagram": null },
        { "stepNumber": 7, "description": "Combine inside the bracket.", "workingLatex": "(y_0+y_4)+2(y_1+y_2+y_3) = 24+92 = 116", "explanation": "Combine the once-counted ends with the twice-counted middle to get the bracket value.", "diagram": null },
        { "stepNumber": 8, "description": "Evaluate the leading factor.", "workingLatex": "\\tfrac{1}{2}h = \\tfrac{1}{2}\\times 2 = 1", "explanation": "Each trapezium carries a factor of $\\tfrac{1}{2}h$; with $h=2$ this factor is simply $1$.", "diagram": null },
        { "stepNumber": 9, "description": "Compute the estimate.", "workingLatex": "A \\approx 1\\times 116 = 116\\ \\text{m}", "explanation": "Multiplying gives the trapezium-rule estimate of the distance travelled in the $8\\ \\text{s}$.", "diagram": null },
        { "stepNumber": 10, "description": "Examine the curvature using differences.", "workingLatex": "\\Delta v:\\ 9,\\ 7,\\ 5,\\ 3\\ (\\text{decreasing})", "explanation": "The velocity gains in successive intervals shrink, so the gradient (the acceleration) is falling: the curve bends downward — it is concave.", "diagram": null },
        { "stepNumber": 11, "description": "Locate the chords relative to the curve.", "workingLatex": "\\text{chord lies below the curve on each strip}", "explanation": "For a concave (downward-bending) curve, the straight chord joining two points dips below the curve between them, so each trapezium sits inside the true region.", "diagram": null },
        { "stepNumber": 12, "description": "Deduce the effect on the area.", "workingLatex": "\\text{sum of trapezia} < \\text{true area}", "explanation": "Since every trapezium lies within the true area, their sum must be smaller than the exact area under the curve.", "diagram": null },
        { "stepNumber": 13, "description": "State the conclusion.", "workingLatex": "116\\ \\text{m is an under-estimate}", "explanation": "Adding these too-small pieces gives an under-estimate of the real distance.", "diagram": null },
        { "stepNumber": 14, "description": "Give the direction of the error.", "workingLatex": "\\text{true distance} > 116\\ \\text{m}", "explanation": "The actual distance exceeds the estimate; using more (narrower) strips would raise the estimate towards the true value.", "diagram": null },
        { "stepNumber": 15, "description": "Final statement.", "workingLatex": "A \\approx 116\\ \\text{m},\\ \\text{under-estimate}", "explanation": "So the trapezium rule gives about $116\\ \\text{m}$, and because the graph is concave this is an under-estimate.", "diagram": null }
      ],
      "finalAnswer": "The trapezium-rule estimate is $116\\ \\text{m}$. Because the curve is concave (bending downward), the chords lie below it, so the estimate is an under-estimate: the true distance is greater than $116\\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": ["velocity-time-graph", "trapezium-area", "repeated-cycles", "average-speed", "dwell-time"],
    "questionText": "A shuttle bus repeats identical cycles along a straight route. In each cycle it accelerates uniformly from rest to $15\\ \\text{m s}^{-1}$ in $10\\ \\text{s}$, cruises at $15\\ \\text{m s}^{-1}$ for $20\\ \\text{s}$, decelerates uniformly to rest in $10\\ \\text{s}$, then waits at a stop for $20\\ \\text{s}$ before the next cycle. (a) Find the distance travelled and the time taken in one complete cycle. (b) Hence write down the total distance and the average speed over $n$ cycles, and evaluate them for $n=5$.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph of one cycle. Horizontal axis: time $t$ (s) from 0 to 60; vertical axis: velocity $v$ ($\\text{m s}^{-1}$) from 0 to 15. Straight segments join $(0,0),(10,15),(30,15),(40,0)$, then the graph stays on the axis at $v=0$ from $(40,0)$ to $(60,0)$ during the $20\\ \\text{s}$ wait. The moving part forms a trapezium; the waiting part contributes no area.",
      "alt": "One trapezium from t=0 to 40 (peak 15) followed by a flat line at zero from t=40 to 60."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split one cycle into its phases.", "workingLatex": "\\text{cycle}=\\text{accelerate}+\\text{cruise}+\\text{decelerate}+\\text{wait}", "explanation": "Breaking the repeating pattern into four phases makes each area a simple shape to compute.", "diagram": null },
        { "stepNumber": 2, "description": "Acceleration-phase area.", "workingLatex": "A_1=\\tfrac12\\times 10\\times 15 = 75\\ \\text{m}", "explanation": "Rest to $15\\ \\text{m s}^{-1}$ over $10\\ \\text{s}$ is a triangle; half base times height gives the distance covered while speeding up.", "diagram": null },
        { "stepNumber": 3, "description": "Cruise-phase area.", "workingLatex": "A_2 = 15\\times 20 = 300\\ \\text{m}", "explanation": "At a constant $15\\ \\text{m s}^{-1}$ for $20\\ \\text{s}$ the region is a rectangle: width times height.", "diagram": null },
        { "stepNumber": 4, "description": "Deceleration-phase area.", "workingLatex": "A_3=\\tfrac12\\times 10\\times 15 = 75\\ \\text{m}", "explanation": "Slowing back to rest over $10\\ \\text{s}$ mirrors the acceleration triangle, adding the same $75\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 5, "description": "Waiting-phase area.", "workingLatex": "A_4 = 0", "explanation": "While stationary the velocity is zero, so the graph is on the axis and no distance is covered.", "diagram": null },
        { "stepNumber": 6, "description": "Distance in one cycle.", "workingLatex": "d = 75+300+75 = 450\\ \\text{m}", "explanation": "Sum the three moving-phase areas; the wait contributes nothing to distance.", "diagram": null },
        { "stepNumber": 7, "description": "Time for one cycle.", "workingLatex": "\\tau = 10+20+10+20 = 60\\ \\text{s}", "explanation": "Add every phase's duration, including the $20\\ \\text{s}$ wait, because the clock keeps running while stopped.", "diagram": null },
        { "stepNumber": 8, "description": "Distance over n cycles.", "workingLatex": "D_n = 450n\\ \\text{m}", "explanation": "Each identical cycle covers the same $450\\ \\text{m}$, so $n$ cycles cover $n$ times as far.", "diagram": null },
        { "stepNumber": 9, "description": "Time over n cycles.", "workingLatex": "T_n = 60n\\ \\text{s}", "explanation": "Likewise the total time is $n$ copies of the $60\\ \\text{s}$ cycle.", "diagram": null },
        { "stepNumber": 10, "description": "Average speed for any n.", "workingLatex": "\\bar v = \\frac{450n}{60n} = 7.5\\ \\text{m s}^{-1}", "explanation": "The $n$ cancels, so the average speed is the same for any number of cycles; it is well below the $15\\ \\text{m s}^{-1}$ cruise because of the waiting time.", "diagram": null },
        { "stepNumber": 11, "description": "Total distance for n = 5.", "workingLatex": "D_5 = 450\\times 5 = 2250\\ \\text{m}", "explanation": "Substitute $n=5$ into the distance formula.", "diagram": null },
        { "stepNumber": 12, "description": "Total time for n = 5.", "workingLatex": "T_5 = 60\\times 5 = 300\\ \\text{s}", "explanation": "Substitute $n=5$ into the time formula.", "diagram": null },
        { "stepNumber": 13, "description": "Average speed for n = 5.", "workingLatex": "\\bar v = \\frac{2250}{300} = 7.5\\ \\text{m s}^{-1}", "explanation": "Confirming the general result: dividing total distance by total time again gives $7.5\\ \\text{m s}^{-1}$.", "diagram": null },
        { "stepNumber": 14, "description": "Interpret the result.", "workingLatex": "\\bar v = \\tfrac{450}{60} = 7.5\\ \\text{m s}^{-1}\\ (\\text{half the cruise speed})", "explanation": "The stop-and-go pattern halves the average speed relative to cruising, which is exactly why real timetables build in dwell time at stops.", "diagram": null },
        { "stepNumber": 15, "description": "State the answers.", "workingLatex": "d=450\\ \\text{m},\\ \\tau=60\\ \\text{s};\\ D_5=2250\\ \\text{m},\\ \\bar v = 7.5\\ \\text{m s}^{-1}", "explanation": "Collecting the cycle values and the $n=5$ totals gives the complete answer.", "diagram": null }
      ],
      "finalAnswer": "One cycle: distance $=450\\ \\text{m}$, time $=60\\ \\text{s}$. Over $n$ cycles: distance $=450n\\ \\text{m}$, average speed $=7.5\\ \\text{m s}^{-1}$ (independent of $n$). For $n=5$: distance $=2250\\ \\text{m}$, time $=300\\ \\text{s}$, average speed $=7.5\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": ["velocity-time-graph", "trapezium-area", "triangle-area", "maximum-speed", "two-phase-motion"],
    "questionText": "A cyclist first freewheels down a slope, accelerating uniformly from $2\\ \\text{m s}^{-1}$ to $14\\ \\text{m s}^{-1}$ in $8\\ \\text{s}$. She then immediately begins to climb, decelerating uniformly from $14\\ \\text{m s}^{-1}$ to rest in $10\\ \\text{s}$. (a) Describe the velocity–time graph. (b) Find the distance travelled down the slope, the distance travelled up, and the total distance. (c) State the time at which her speed is greatest.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time $t$ (s) from 0 to 18; vertical axis: velocity $v$ ($\\text{m s}^{-1}$) from 0 to 14. A straight line rises from $(0,2)$ to $(8,14)$ (freewheeling downhill, speeding up), then a straight line falls from $(8,14)$ to $(18,0)$ (climbing, slowing to rest). The whole graph lies above the time-axis, so all motion is in one direction; the peak is at $(8,14)$.",
      "alt": "A v-t line rising from (0,2) to a peak (8,14), then falling to (18,0)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the two phases.", "workingLatex": "\\text{down: speeding up};\\quad \\text{up: slowing down}", "explanation": "Freewheeling downhill increases her speed while climbing decreases it, so the graph rises then falls with a peak where the two phases meet.", "diagram": null },
        { "stepNumber": 2, "description": "Describe the first line.", "workingLatex": "(0,2)\\to(8,14)", "explanation": "Downhill she starts at $2\\ \\text{m s}^{-1}$ and reaches $14\\ \\text{m s}^{-1}$ after $8\\ \\text{s}$; joining these gives a straight rising line, since the acceleration is uniform.", "diagram": null },
        { "stepNumber": 3, "description": "Acceleration of phase 1 (context).", "workingLatex": "a_1 = \\frac{14-2}{8}=1.5\\ \\text{m s}^{-2}", "explanation": "The gradient of a velocity–time line is the acceleration; a positive slope confirms she is speeding up.", "diagram": null },
        { "stepNumber": 4, "description": "Describe the second line.", "workingLatex": "(8,14)\\to(18,0)", "explanation": "Climbing, she slows from $14\\ \\text{m s}^{-1}$ to rest over $10\\ \\text{s}$, so the line falls to the time-axis.", "diagram": null },
        { "stepNumber": 5, "description": "Acceleration of phase 2 (context).", "workingLatex": "a_2 = \\frac{0-14}{10} = -1.4\\ \\text{m s}^{-2}", "explanation": "The negative gradient shows deceleration as gravity now opposes her uphill motion.", "diagram": null },
        { "stepNumber": 6, "description": "Distance down = area under first line.", "workingLatex": "s_{\\text{down}} = \\tfrac12(2+14)\\times 8", "explanation": "Under the first line is a trapezium with parallel sides $2$ and $14$ (the start and end speeds) and width $8$; averaging the speeds and multiplying by time gives the distance.", "diagram": null },
        { "stepNumber": 7, "description": "Compute the downhill distance.", "workingLatex": "s_{\\text{down}} = \\tfrac12\\times 16\\times 8 = 64\\ \\text{m}", "explanation": "So she covers $64\\ \\text{m}$ going down the slope.", "diagram": null },
        { "stepNumber": 8, "description": "Distance up = area under second line.", "workingLatex": "s_{\\text{up}} = \\tfrac12\\times 10\\times 14", "explanation": "Under the second line is a triangle with base $10\\ \\text{s}$ and height $14\\ \\text{m s}^{-1}$; half base times height is the distance while climbing.", "diagram": null },
        { "stepNumber": 9, "description": "Compute the uphill distance.", "workingLatex": "s_{\\text{up}} = 70\\ \\text{m}", "explanation": "She climbs $70\\ \\text{m}$ before coming to rest.", "diagram": null },
        { "stepNumber": 10, "description": "Total distance.", "workingLatex": "s = 64 + 70 = 134\\ \\text{m}", "explanation": "Both phases are forward motion (the graph stays above the axis), so total distance is simply the sum of the two areas.", "diagram": null },
        { "stepNumber": 11, "description": "Locate the greatest speed.", "workingLatex": "\\text{maximum at the peak, } t = 8\\ \\text{s}", "explanation": "Speed rises throughout phase 1 and falls throughout phase 2, so the largest value occurs exactly at the junction between them.", "diagram": null },
        { "stepNumber": 12, "description": "State the maximum speed.", "workingLatex": "v_{\\max} = 14\\ \\text{m s}^{-1}", "explanation": "That peak value is the $14\\ \\text{m s}^{-1}$ reached at the bottom of the slope.", "diagram": null },
        { "stepNumber": 13, "description": "Total time (context).", "workingLatex": "T = 8+10 = 18\\ \\text{s}", "explanation": "The whole ride lasts $18\\ \\text{s}$, the sum of the two phase durations.", "diagram": null },
        { "stepNumber": 14, "description": "State the results.", "workingLatex": "s_{\\text{down}}=64,\\ s_{\\text{up}}=70,\\ s=134\\ \\text{(m)},\\ v_{\\max}\\text{ at }t=8\\ \\text{s}", "explanation": "Collecting the answers: she travels farthest-fastest at the moment she switches from descending to climbing.", "diagram": null }
      ],
      "finalAnswer": "The graph rises in a straight line from $(0,2)$ to a peak at $(8,14)$, then falls in a straight line to $(18,0)$. Distance down $=64\\ \\text{m}$, distance up $=70\\ \\text{m}$, total distance $=134\\ \\text{m}$. Her speed is greatest ($14\\ \\text{m s}^{-1}$) at $t=8\\ \\text{s}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": ["displacement-time-graph", "catch-up", "constant-velocity", "relative-speed", "head-start"],
    "questionText": "In a straight-line race, runner $A$ leaves the start line at $t=0$ and runs at a constant $6\\ \\text{m s}^{-1}$. Runner $B$ leaves the same start line $3\\ \\text{s}$ later and runs at a constant $7.5\\ \\text{m s}^{-1}$. Using displacement–time reasoning, find the time (measured from $A$'s start) at which $B$ catches $A$, and how far from the start line this happens.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Displacement–time graph. Horizontal axis: time $t$ (s) from 0; vertical axis: displacement $s$ (m) from 0. Runner $A$ is a straight line from the origin $(0,0)$ with gradient $6$, passing through $(15,90)$. Runner $B$ is a straight line starting from $(3,0)$ with gradient $7.5$, also passing through $(15,90)$. The two lines intersect at $(15,90)$, where $B$ catches $A$.",
      "alt": "Two s-t lines: A from the origin (gradient 6) and B from (3,0) (gradient 7.5), meeting at (15,90)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Displacement of A.", "workingLatex": "s_A = 6t", "explanation": "A runs at a constant $6\\ \\text{m s}^{-1}$ from $t=0$, so its displacement–time graph is a straight line through the origin with gradient $6$.", "diagram": null },
        { "stepNumber": 2, "description": "Note B's later start.", "workingLatex": "B\\ \\text{starts at}\\ t=3\\ \\text{s}", "explanation": "B is delayed by $3\\ \\text{s}$, so its graph only begins at $t=3$; before that B has covered nothing.", "diagram": null },
        { "stepNumber": 3, "description": "Displacement of B.", "workingLatex": "s_B = 7.5(t-3)\\quad(t\\ge 3)", "explanation": "Once running, B covers $7.5\\ \\text{m}$ each second; we use B's own elapsed time $t-3$, because that is how long B has actually been moving.", "diagram": null },
        { "stepNumber": 4, "description": "Find A's head start when B sets off.", "workingLatex": "\\text{at } t=3:\\ s_A = 6\\times 3 = 18\\ \\text{m}", "explanation": "When B finally starts, A is already $18\\ \\text{m}$ up the track; this is the gap B must close.", "diagram": null },
        { "stepNumber": 5, "description": "Set up the catch condition.", "workingLatex": "s_A = s_B", "explanation": "B catches A when both are the same distance from the start — their displacement graphs meet.", "diagram": null },
        { "stepNumber": 6, "description": "Write the equation.", "workingLatex": "6t = 7.5(t-3)", "explanation": "Set the two displacement expressions equal to find the meeting time.", "diagram": null },
        { "stepNumber": 7, "description": "Expand the bracket.", "workingLatex": "6t = 7.5t - 22.5", "explanation": "Multiply out so the equation is linear in $t$.", "diagram": null },
        { "stepNumber": 8, "description": "Collect the terms.", "workingLatex": "22.5 = 1.5t", "explanation": "Gathering the $t$ terms leaves $7.5-6 = 1.5$, which is exactly B's speed advantage over A.", "diagram": null },
        { "stepNumber": 9, "description": "Solve for the time.", "workingLatex": "t = 15\\ \\text{s}", "explanation": "So B draws level $15\\ \\text{s}$ after A started, which is $12\\ \\text{s}$ after B started.", "diagram": null },
        { "stepNumber": 10, "description": "Find the distance from the start.", "workingLatex": "s = 6\\times 15 = 90\\ \\text{m}", "explanation": "Substitute the meeting time into A's displacement to see how far along the track the catch happens.", "diagram": null },
        { "stepNumber": 11, "description": "Verify using B's displacement.", "workingLatex": "s_B = 7.5(15-3) = 7.5\\times 12 = 90\\ \\text{m}", "explanation": "B's displacement gives the same $90\\ \\text{m}$, confirming the meeting point.", "diagram": null },
        { "stepNumber": 12, "description": "Cross-check with relative speed.", "workingLatex": "\\frac{18}{1.5} = 12\\ \\text{s after B starts}", "explanation": "Alternatively, B closes the $18\\ \\text{m}$ gap at a relative $1.5\\ \\text{m s}^{-1}$, taking $12\\ \\text{s}$ — again $t=15\\ \\text{s}$ overall, a reassuring check.", "diagram": null },
        { "stepNumber": 13, "description": "Interpret on the graph.", "workingLatex": "\\text{lines cross at }(15,90)", "explanation": "On the displacement–time graph the two straight lines intersect at $(15,90)$; the steeper line (B) overtakes the shallower one (A) there.", "diagram": null },
        { "stepNumber": 14, "description": "State the answers.", "workingLatex": "t = 15\\ \\text{s},\\ s = 90\\ \\text{m}", "explanation": "B catches A $15\\ \\text{s}$ after the start, $90\\ \\text{m}$ from the line.", "diagram": null }
      ],
      "finalAnswer": "B catches A at $t=15\\ \\text{s}$ (measured from A's start), which is $90\\ \\text{m}$ from the start line."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": ["velocity-time-graph", "trapezium-area", "simultaneous-equations", "unknown-durations", "journey-phases"],
    "questionText": "A car makes a straight-line journey in three phases: it accelerates uniformly from rest to $20\\ \\text{m s}^{-1}$ in time $t_1$; it then cruises at $20\\ \\text{m s}^{-1}$ for time $t_2$; finally it decelerates uniformly to rest in $8\\ \\text{s}$. The whole journey takes $40\\ \\text{s}$ and covers $620\\ \\text{m}$. Form equations for $t_1$ and $t_2$ and solve them.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph, a trapezium. Horizontal axis: time $t$ (s) from 0 to 40; vertical axis: velocity $v$ ($\\text{m s}^{-1}$) up to 20. Straight segments join $(0,0)$ to $(t_1,20)$ (acceleration), then $(t_1,20)$ to $(t_1+t_2,20)$ (cruise), then to $(40,0)$ (deceleration over the final $8\\ \\text{s}$, so the last top vertex is at $(32,20)$). The enclosed area is the $620\\ \\text{m}$ travelled.",
      "alt": "A trapezium v-t graph with unknown acceleration and cruise widths, peak 20, total width 40."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the shape of the graph.", "workingLatex": "\\text{the graph is a trapezium}", "explanation": "Rising, then flat, then falling velocity makes a trapezium; its area is the total distance and its width is the total time.", "diagram": null },
        { "stepNumber": 2, "description": "Write the total-time equation.", "workingLatex": "t_1 + t_2 + 8 = 40", "explanation": "The three phase durations must add up to the total journey time of $40\\ \\text{s}$.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify the time equation.", "workingLatex": "t_1 + t_2 = 32", "explanation": "Subtract the known $8\\ \\text{s}$ deceleration to get a clean relation between the two unknowns.", "diagram": null },
        { "stepNumber": 4, "description": "Phase-1 area (acceleration triangle).", "workingLatex": "s_1 = \\tfrac12\\, t_1\\times 20 = 10t_1", "explanation": "Accelerating from rest to $20\\ \\text{m s}^{-1}$ is a triangle of height $20$ and base $t_1$; its area is $10t_1$.", "diagram": null },
        { "stepNumber": 5, "description": "Phase-2 area (cruise rectangle).", "workingLatex": "s_2 = 20t_2", "explanation": "Cruising is a rectangle of height $20$ and width $t_2$.", "diagram": null },
        { "stepNumber": 6, "description": "Phase-3 area (deceleration triangle).", "workingLatex": "s_3 = \\tfrac12\\times 8\\times 20 = 80\\ \\text{m}", "explanation": "The final deceleration triangle has base $8\\ \\text{s}$ and height $20\\ \\text{m s}^{-1}$, a fixed $80\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the total-distance equation.", "workingLatex": "10t_1 + 20t_2 + 80 = 620", "explanation": "The three areas together make up the $620\\ \\text{m}$ travelled.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify the distance equation.", "workingLatex": "10t_1 + 20t_2 = 540", "explanation": "Subtract the known $80\\ \\text{m}$ from the deceleration phase.", "diagram": null },
        { "stepNumber": 9, "description": "Divide through by 10.", "workingLatex": "t_1 + 2t_2 = 54", "explanation": "Dividing by $10$ gives a tidy second equation in the two unknowns.", "diagram": null },
        { "stepNumber": 10, "description": "Subtract the time equation.", "workingLatex": "(t_1+2t_2)-(t_1+t_2) = 54-32", "explanation": "Subtracting eliminates $t_1$, leaving $t_2$ on its own.", "diagram": null },
        { "stepNumber": 11, "description": "Solve for the cruise time.", "workingLatex": "t_2 = 22\\ \\text{s}", "explanation": "The cruise phase lasts $22\\ \\text{s}$.", "diagram": null },
        { "stepNumber": 12, "description": "Back-substitute for the acceleration time.", "workingLatex": "t_1 = 32 - 22 = 10\\ \\text{s}", "explanation": "Put $t_2$ into the time equation to recover $t_1$.", "diagram": null },
        { "stepNumber": 13, "description": "Verify distance and time.", "workingLatex": "10(10)+20(22)+80 = 100+440+80 = 620\\ \\text{m}", "explanation": "The areas sum to exactly $620\\ \\text{m}$, and $10+22+8 = 40\\ \\text{s}$ matches the total time, confirming the solution.", "diagram": null },
        { "stepNumber": 14, "description": "State the answers.", "workingLatex": "t_1 = 10\\ \\text{s},\\ t_2 = 22\\ \\text{s}", "explanation": "The car accelerates for $10\\ \\text{s}$ and cruises for $22\\ \\text{s}$.", "diagram": null }
      ],
      "finalAnswer": "From $t_1+t_2=32$ and $t_1+2t_2=54$: $t_1 = 10\\ \\text{s}$ and $t_2 = 22\\ \\text{s}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": ["velocity-time-graph", "trapezium-area", "unknown-duration", "acceleration-check", "journey-phases"],
    "questionText": "A particle moves in a straight line in three phases, shown on a velocity–time graph. It accelerates uniformly from rest to $12\\ \\text{m s}^{-1}$ in time $t_1$; it then travels at a constant $12\\ \\text{m s}^{-1}$ for $10\\ \\text{s}$; finally it decelerates uniformly to rest at $3\\ \\text{m s}^{-2}$. The acceleration in the first phase is $2\\ \\text{m s}^{-2}$ and the whole journey covers $180\\ \\text{m}$. Find $t_1$, the duration of the first phase.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph, a trapezium. Horizontal axis: time $t$ (s); vertical axis: velocity $v$ ($\\text{m s}^{-1}$) up to 12. Straight segments join $(0,0)$ to $(t_1,12)$ (phase 1 acceleration), then a horizontal segment to $(t_1+10,12)$ (phase 2 cruise for $10\\ \\text{s}$), then a straight segment down to the time-axis (phase 3, decelerating at $3\\ \\text{m s}^{-2}$). The total enclosed area is $180\\ \\text{m}$.",
      "alt": "A trapezium v-t graph, peak 12, with an unknown acceleration width t1, a 10 s cruise, and a decel ramp."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the shape.", "workingLatex": "\\text{trapezium: accelerate, cruise, decelerate}", "explanation": "Three uniform-acceleration phases give a trapezium whose area equals the $180\\ \\text{m}$ travelled.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deceleration-phase duration.", "workingLatex": "t_3 = \\frac{12}{3} = 4\\ \\text{s}", "explanation": "Decelerating from $12\\ \\text{m s}^{-1}$ at $3\\ \\text{m s}^{-2}$ (losing $3\\ \\text{m s}^{-1}$ each second) takes $4\\ \\text{s}$ to reach rest.", "diagram": null },
        { "stepNumber": 3, "description": "Phase-3 area.", "workingLatex": "s_3 = \\tfrac12\\times 4\\times 12 = 24\\ \\text{m}", "explanation": "The deceleration triangle has base $4\\ \\text{s}$ and height $12\\ \\text{m s}^{-1}$, giving $24\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 4, "description": "Phase-2 area.", "workingLatex": "s_2 = 12\\times 10 = 120\\ \\text{m}", "explanation": "Cruising at $12\\ \\text{m s}^{-1}$ for $10\\ \\text{s}$ is a rectangle of area $120\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 5, "description": "Phase-1 area in terms of t1.", "workingLatex": "s_1 = \\tfrac12\\, t_1\\times 12 = 6t_1", "explanation": "The acceleration triangle from rest to $12\\ \\text{m s}^{-1}$ has base $t_1$ and height $12$, so its area is $6t_1$.", "diagram": null },
        { "stepNumber": 6, "description": "Form the total-distance equation.", "workingLatex": "6t_1 + 120 + 24 = 180", "explanation": "The three areas must add up to the given total distance of $180\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 7, "description": "Combine the known constants.", "workingLatex": "6t_1 + 144 = 180", "explanation": "Add the two known areas ($120+24$) before isolating the unknown term.", "diagram": null },
        { "stepNumber": 8, "description": "Isolate the t1 term.", "workingLatex": "6t_1 = 36", "explanation": "Subtract $144$ from both sides to leave the phase-1 term alone.", "diagram": null },
        { "stepNumber": 9, "description": "Solve for t1.", "workingLatex": "t_1 = 6\\ \\text{s}", "explanation": "Dividing by $6$ gives the acceleration-phase duration.", "diagram": null },
        { "stepNumber": 10, "description": "Check against the given acceleration.", "workingLatex": "a_1 = \\frac{12}{6} = 2\\ \\text{m s}^{-2}", "explanation": "The acceleration equals the change in velocity over time, $2\\ \\text{m s}^{-2}$, matching the stated value — a strong confidence check.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm the phase-1 area.", "workingLatex": "s_1 = 6\\times 6 = 36\\ \\text{m}", "explanation": "With $t_1=6$ the first triangle is $36\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm the total distance.", "workingLatex": "36 + 120 + 24 = 180\\ \\text{m}", "explanation": "The three areas sum to exactly $180\\ \\text{m}$, confirming the answer is consistent.", "diagram": null },
        { "stepNumber": 13, "description": "Note the total time (context).", "workingLatex": "T = 6+10+4 = 20\\ \\text{s}", "explanation": "For completeness the journey lasts $20\\ \\text{s}$, though only $t_1$ was requested.", "diagram": null },
        { "stepNumber": 14, "description": "State the answer.", "workingLatex": "t_1 = 6\\ \\text{s}", "explanation": "The first phase lasts $6\\ \\text{s}$.", "diagram": null }
      ],
      "finalAnswer": "$t_1 = 6\\ \\text{s}$ (consistent with the stated first-phase acceleration of $2\\ \\text{m s}^{-2}$ and a total journey of $180\\ \\text{m}$)."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": ["velocity-time-graph", "displacement-time-graph", "trapezium-area", "average-speed", "graph-shapes"],
    "questionText": "A car travels in a straight line. It accelerates from rest at $3\\ \\text{m s}^{-2}$ for $4\\ \\text{s}$, holds that speed for $10\\ \\text{s}$, then decelerates to rest at $2\\ \\text{m s}^{-2}$. (a) Describe both the velocity–time and the displacement–time graphs, giving the key coordinates. (b) Find the acceleration-phase distance, the cruise distance, the deceleration-phase distance, the total distance, and the average speed.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph. Horizontal axis: time $t$ (s) from 0 to 20; vertical axis: velocity $v$ ($\\text{m s}^{-1}$) up to 12. Straight segments join $(0,0)$ to $(4,12)$ (accelerating), $(4,12)$ to $(14,12)$ (constant), and $(14,12)$ to $(20,0)$ (decelerating). It is a trapezium of area $180\\ \\text{m}$.",
      "alt": "A trapezium v-t graph with vertices (0,0),(4,12),(14,12),(20,0)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the cruising speed.", "workingLatex": "v = at = 3\\times 4 = 12\\ \\text{m s}^{-1}", "explanation": "Starting from rest with acceleration $3\\ \\text{m s}^{-2}$ for $4\\ \\text{s}$, the car reaches $12\\ \\text{m s}^{-1}$, which is the speed it then holds.", "diagram": null },
        { "stepNumber": 2, "description": "Find the deceleration-phase duration.", "workingLatex": "t_3 = \\frac{12}{2} = 6\\ \\text{s}", "explanation": "Decelerating from $12\\ \\text{m s}^{-1}$ at $2\\ \\text{m s}^{-2}$ takes $6\\ \\text{s}$ to stop.", "diagram": null },
        { "stepNumber": 3, "description": "State the velocity–time vertices.", "workingLatex": "(0,0)\\to(4,12)\\to(14,12)\\to(20,0)", "explanation": "These four points, joined by straight lines, form the whole v–t graph: a rising line, a flat top, then a falling line — a trapezium.", "diagram": null },
        { "stepNumber": 4, "description": "Acceleration-phase distance.", "workingLatex": "s_1 = \\tfrac12\\times 4\\times 12 = 24\\ \\text{m}", "explanation": "The acceleration triangle (base $4$, height $12$) gives $24\\ \\text{m}$ covered while speeding up.", "diagram": null },
        { "stepNumber": 5, "description": "Cruise distance.", "workingLatex": "s_2 = 12\\times 10 = 120\\ \\text{m}", "explanation": "Cruising at $12\\ \\text{m s}^{-1}$ for $10\\ \\text{s}$ is a rectangle of $120\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 6, "description": "Deceleration-phase distance.", "workingLatex": "s_3 = \\tfrac12\\times 6\\times 12 = 36\\ \\text{m}", "explanation": "The deceleration triangle (base $6$, height $12$) gives $36\\ \\text{m}$ while stopping.", "diagram": null },
        { "stepNumber": 7, "description": "Total distance.", "workingLatex": "s = 24+120+36 = 180\\ \\text{m}", "explanation": "Adding the three phase areas gives the whole distance travelled.", "diagram": null },
        { "stepNumber": 8, "description": "Total time.", "workingLatex": "T = 4+10+6 = 20\\ \\text{s}", "explanation": "Sum the durations for the full journey time.", "diagram": null },
        { "stepNumber": 9, "description": "Average speed.", "workingLatex": "\\bar v = \\frac{180}{20} = 9\\ \\text{m s}^{-1}", "explanation": "Average speed is total distance over total time; it lies below the $12\\ \\text{m s}^{-1}$ cruise because of the slower start and finish.", "diagram": null },
        { "stepNumber": 10, "description": "Displacement–time: phase 1 shape.", "workingLatex": "s = \\tfrac12\\times 3\\times t^2 = 1.5t^2,\\ (0,0)\\to(4,24)", "explanation": "Under constant acceleration displacement grows as $t^2$, so the s–t graph curves upward (concave up), reaching $24\\ \\text{m}$ at $t=4$.", "diagram": null },
        { "stepNumber": 11, "description": "Displacement–time: phase 2 shape.", "workingLatex": "\\text{straight line, gradient }12,\\ (4,24)\\to(14,144)", "explanation": "At constant speed displacement increases steadily, so this part is a straight line of slope $12$; at $t=14$ the car has gone $24+120 = 144\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 12, "description": "Displacement–time: phase 3 shape.", "workingLatex": "\\text{concave-down curve},\\ (14,144)\\to(20,180)", "explanation": "While decelerating the car still moves forward but ever more slowly, so displacement keeps rising while the curve flattens (concave down) to the final $180\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 13, "description": "Note the smoothness of the s–t graph.", "workingLatex": "\\text{no jumps at }t=4,\\ 14", "explanation": "Because velocity is continuous, the displacement graph has no breaks, and its gradient (the speed) matches across the joins.", "diagram": null },
        { "stepNumber": 14, "description": "Summarise the distances.", "workingLatex": "s_1=24,\\ s_2=120,\\ s_3=36,\\ s=180\\ \\text{(m)}", "explanation": "Collecting the three phase distances and their total.", "diagram": null },
        { "stepNumber": 15, "description": "State the final results.", "workingLatex": "s = 180\\ \\text{m},\\ \\bar v = 9\\ \\text{m s}^{-1}", "explanation": "The car covers $180\\ \\text{m}$ at an average speed of $9\\ \\text{m s}^{-1}$.", "diagram": null }
      ],
      "finalAnswer": "v–t graph: straight segments $(0,0)\\to(4,12)\\to(14,12)\\to(20,0)$. s–t graph: concave-up curve $(0,0)\\to(4,24)$, straight line $(4,24)\\to(14,144)$, concave-down curve $(14,144)\\to(20,180)$. Distances: acceleration $24\\ \\text{m}$, cruise $120\\ \\text{m}$, deceleration $36\\ \\text{m}$, total $180\\ \\text{m}$; average speed $=9\\ \\text{m s}^{-1}$."
    }
  },
  {
    "id": "al.y1.mech.kinematics-graphs.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Kinematics graphs",
    "subtopicId": "al.y1.mech.kinematics-graphs",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": ["velocity-time-graph", "trapezium-area", "equal-distance", "comparing-motion", "acceleration-comparison"],
    "questionText": "Two trains run between the same two stations, a straight-line journey of the same length completed in the same total time of $60\\ \\text{s}$. Train $X$ has velocity–time vertices $(0,0)\\to(10,20)\\to(50,20)\\to(60,0)$. Train $Y$ has a higher cruise speed but longer ramps, with vertices $(0,0)\\to(20,24)\\to(t_c,24)\\to(60,0)$. (a) Find the distance covered by train $X$. (b) Given train $Y$ covers the same distance in the same $60\\ \\text{s}$, find $t_c$ and hence $Y$'s cruise duration. (c) Compare the two motions (maximum speed and accelerations) and state which train's passengers experience the gentler acceleration.",
    "questionDiagram": {
      "kind": "descriptive",
      "description": "Velocity–time graph with two trapezia on the same axes. Horizontal axis: time $t$ (s) from 0 to 60; vertical axis: velocity $v$ ($\\text{m s}^{-1}$) up to 24. Train $X$: straight segments $(0,0)\\to(10,20)\\to(50,20)\\to(60,0)$, peak $20$. Train $Y$: straight segments $(0,0)\\to(20,24)\\to(t_c,24)\\to(60,0)$, peak $24$, with a longer acceleration ramp (0 to 20 s) and cruise ending at the unknown time $t_c$. Both graphs span $0$ to $60\\ \\text{s}$.",
      "alt": "Two overlaid trapezium v-t graphs, X peaking at 20 with short ramps and Y peaking at 24 with longer ramps."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Link area to distance.", "workingLatex": "\\text{distance}=\\text{area under }v\\text{–}t", "explanation": "For one-way motion the area under each train's velocity–time graph is the distance it covers.", "diagram": null },
        { "stepNumber": 2, "description": "Identify train X's trapezium sides.", "workingLatex": "\\text{base}=60,\\ \\text{cruise top}=50-10=40,\\ \\text{height}=20", "explanation": "Train $X$'s graph is a trapezium; the base is the whole $60\\ \\text{s}$, the parallel top is the cruise from $10$ to $50\\ \\text{s}$ (length $40$), and the height is the cruise speed $20$.", "diagram": null },
        { "stepNumber": 3, "description": "Compute train X's distance.", "workingLatex": "d_X = \\tfrac12(40+60)\\times 20 = \\tfrac12\\times100\\times20 = 1000\\ \\text{m}", "explanation": "Averaging the two parallel sides and multiplying by the height gives $1000\\ \\text{m}$ — the station-to-station distance.", "diagram": null },
        { "stepNumber": 4, "description": "State the shared distance.", "workingLatex": "d_Y = d_X = 1000\\ \\text{m}", "explanation": "The trains cover the same route, so train $Y$ must also cover $1000\\ \\text{m}$, and in the same $60\\ \\text{s}$.", "diagram": null },
        { "stepNumber": 5, "description": "Sanity note on the maximum possible.", "workingLatex": "20\\times 60 = 1200\\ \\text{m only if no ramps}", "explanation": "A useful check: covering $1200\\ \\text{m}$ in $60\\ \\text{s}$ would need an average of $20\\ \\text{m s}^{-1}$, which $X$ reaches only at its peak; with ramps its true distance is the smaller $1000\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 6, "description": "Identify train Y's trapezium sides.", "workingLatex": "\\text{base}=60,\\ \\text{cruise top}=t_c-20,\\ \\text{height}=24", "explanation": "Train $Y$'s trapezium has base $60\\ \\text{s}$, height $24\\ \\text{m s}^{-1}$, and a cruise top from $20\\ \\text{s}$ to $t_c$ (length $t_c-20$).", "diagram": null },
        { "stepNumber": 7, "description": "Set up train Y's area equation.", "workingLatex": "\\tfrac12\\big[(t_c-20)+60\\big]\\times 24 = 1000", "explanation": "Set $Y$'s trapezium area equal to the required $1000\\ \\text{m}$.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify.", "workingLatex": "12\\,(t_c + 40) = 1000", "explanation": "Half of $24$ is $12$, and $(t_c-20)+60 = t_c+40$.", "diagram": null },
        { "stepNumber": 9, "description": "Solve for the cruise-end time.", "workingLatex": "t_c = \\frac{1000}{12} - 40 = \\frac{130}{3} \\approx 43.3\\ \\text{s}", "explanation": "Dividing by $12$ and subtracting $40$ gives the time at which $Y$'s cruise ends.", "diagram": null },
        { "stepNumber": 10, "description": "Find Y's cruise duration.", "workingLatex": "t_c - 20 = \\frac{70}{3} \\approx 23.3\\ \\text{s}", "explanation": "Subtracting the $20\\ \\text{s}$ acceleration ramp leaves $Y$'s cruise length, about $23.3\\ \\text{s}$.", "diagram": null },
        { "stepNumber": 11, "description": "Find Y's deceleration duration.", "workingLatex": "60 - t_c = \\frac{50}{3}\\approx 16.7\\ \\text{s}", "explanation": "The remaining time from $t_c$ to $60\\ \\text{s}$ is $Y$'s braking ramp.", "diagram": null },
        { "stepNumber": 12, "description": "Compare maximum speeds.", "workingLatex": "v_X^{\\max}=20,\\quad v_Y^{\\max}=24\\ \\text{m s}^{-1}", "explanation": "$Y$ cruises faster; to cover the same distance in the same time it must, since it spends longer ramping up and down.", "diagram": null },
        { "stepNumber": 13, "description": "Compute train X's accelerations.", "workingLatex": "a_X = \\frac{20}{10} = 2\\ \\text{m s}^{-2}\\ (\\text{both ends})", "explanation": "$X$ reaches $20\\ \\text{m s}^{-1}$ in $10\\ \\text{s}$ and brakes just as sharply, so both its ramps are $2\\ \\text{m s}^{-2}$.", "diagram": null },
        { "stepNumber": 14, "description": "Compute train Y's accelerations.", "workingLatex": "a_Y^{\\text{acc}}=\\frac{24}{20}=1.2,\\quad a_Y^{\\text{dec}}=\\frac{24}{50/3}=1.44\\ \\text{m s}^{-2}", "explanation": "$Y$'s longer ramps mean smaller accelerations: $1.2\\ \\text{m s}^{-2}$ speeding up and $1.44\\ \\text{m s}^{-2}$ braking, both below $X$'s $2\\ \\text{m s}^{-2}$.", "diagram": null },
        { "stepNumber": 15, "description": "Decide which is gentler.", "workingLatex": "1.2,\\ 1.44 < 2\\ \\Rightarrow\\ Y\\text{ is gentler}", "explanation": "Both of $Y$'s accelerations are smaller than $X$'s, so its passengers feel smaller forces during the ramps.", "diagram": null },
        { "stepNumber": 16, "description": "State the conclusions.", "workingLatex": "t_c \\approx 43.3\\ \\text{s},\\ \\text{cruise}\\approx 23.3\\ \\text{s};\\ Y\\text{ gentler}", "explanation": "Despite its higher top speed, train $Y$ accelerates and brakes more gently, so it gives the smoother ride.", "diagram": null }
      ],
      "finalAnswer": "Train $X$ covers $1000\\ \\text{m}$. For train $Y$ to cover the same $1000\\ \\text{m}$ in $60\\ \\text{s}$: $t_c = \\tfrac{130}{3}\\approx 43.3\\ \\text{s}$, so its cruise lasts $\\tfrac{70}{3}\\approx 23.3\\ \\text{s}$ (with braking over $\\tfrac{50}{3}\\approx 16.7\\ \\text{s}$). Maximum speeds: $X=20$, $Y=24\\ \\text{m s}^{-1}$. Accelerations: $X=2\\ \\text{m s}^{-2}$ at both ends; $Y=1.2\\ \\text{m s}^{-2}$ (accelerating) and $1.44\\ \\text{m s}^{-2}$ (braking). Train $Y$ experiences the gentler acceleration."
    }
  },
];
