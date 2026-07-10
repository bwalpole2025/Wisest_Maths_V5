import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.algebra.real-life-graphs.q001",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "reading values"],
    "questionText": "The distance–time graph shows a cyclist's journey. How far had the cyclist travelled after $2$ hours?",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 4, "yMin": 0, "yMax": 40,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 3, "y": 30 }], "color": "accent" }],
      "points": [{ "x": 2, "y": 20, "label": "(2,20)", "color": "ink" }],
      "xAxisLabel": "time (hours)",
      "yAxisLabel": "distance (km)",
      "alt": "A straight distance-time line from (0,0) to (3,30), passing through (2,20)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find $2$ hours on the time axis.", "workingLatex": "t = 2", "explanation": "Distance is on the vertical axis, time on the horizontal, so we go up from $t = 2$.", "diagram": null },
        { "stepNumber": 2, "description": "Read the height of the line there.", "workingLatex": "d = 20", "explanation": "Following up to the line and across to the distance axis gives $20$ km.", "diagram": null },
        { "stepNumber": 3, "description": "State the distance.", "workingLatex": "20 \\text{ km}", "explanation": "So after $2$ hours the cyclist had gone $20$ km.", "diagram": null }
      ],
      "finalAnswer": "$20$ km"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q002",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "speed", "gradient"],
    "questionText": "On a distance–time graph, a car travels $60$ km in $1.5$ hours at a steady speed. Find its speed in km/h.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what the gradient means.", "workingLatex": "\\text{speed} = \\dfrac{\\text{distance}}{\\text{time}}", "explanation": "On a distance–time graph the gradient (steepness) is the speed.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the values.", "workingLatex": "\\text{speed} = \\dfrac{60}{1.5}", "explanation": "The car covers $60$ km in $1.5$ hours.", "diagram": null },
        { "stepNumber": 3, "description": "Divide.", "workingLatex": "= 40", "explanation": "$60 \\div 1.5 = 40$.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "40 \\text{ km/h}", "explanation": "Always include the units for a real-life answer.", "diagram": null }
      ],
      "finalAnswer": "$40$ km/h"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q003",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["real-life graphs", "distance-time", "interpreting"],
    "questionText": "On a distance–time graph, what does a horizontal (flat) section tell you about the object's motion?",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 5, "yMin": 0, "yMax": 30,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 2, "y": 20 }, { "x": 4, "y": 20 }, { "x": 5, "y": 30 }], "color": "accent" }],
      "xAxisLabel": "time (min)",
      "yAxisLabel": "distance (km)",
      "alt": "A distance-time graph rising, then flat between 2 and 4 minutes, then rising again."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the flat section.", "workingLatex": "\\text{gradient} = 0", "explanation": "A horizontal line has zero gradient, and gradient is speed.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret zero speed.", "workingLatex": "\\text{speed} = 0", "explanation": "Zero speed means the distance is not changing.", "diagram": null },
        { "stepNumber": 3, "description": "State the meaning.", "workingLatex": "\\text{stationary}", "explanation": "The object is stopped (not moving) during that time.", "diagram": null }
      ],
      "finalAnswer": "The object is stationary (stopped) — its distance is not changing."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q004",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "speed", "sections"],
    "questionText": "A distance–time graph shows a runner going from $(0,0)$ to $(20, 4)$ — that is $4$ km in $20$ minutes. Find the runner's speed in km per hour.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the gradient as speed.", "workingLatex": "\\text{speed} = \\dfrac{4 \\text{ km}}{20 \\text{ min}}", "explanation": "The gradient gives km per minute first.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "= 0.2 \\text{ km/min}", "explanation": "$4 \\div 20 = 0.2$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert minutes to hours.", "workingLatex": "0.2 \\times 60", "explanation": "There are $60$ minutes in an hour, so multiply by $60$.", "diagram": null },
        { "stepNumber": 4, "description": "Compute.", "workingLatex": "= 12 \\text{ km/h}", "explanation": "So the runner's speed is $12$ km/h.", "diagram": null }
      ],
      "finalAnswer": "$12$ km/h"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q005",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["real-life graphs", "distance-time", "return journey", "interpreting"],
    "questionText": "A distance–time graph goes up from the origin, stays flat, then comes back down to the time axis. Describe the whole journey in words.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 6, "yMin": 0, "yMax": 30,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 2, "y": 24 }, { "x": 3, "y": 24 }, { "x": 6, "y": 0 }], "color": "accent" }],
      "xAxisLabel": "time (hours)",
      "yAxisLabel": "distance from home (km)",
      "alt": "A distance-time graph rising to 24 km, flat, then falling back to zero."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Describe the first section.", "workingLatex": "0 \\to 2\\text{h}", "explanation": "The line rises, so the object travels away from home, reaching $24$ km.", "diagram": null },
        { "stepNumber": 2, "description": "Describe the flat section.", "workingLatex": "2 \\to 3\\text{h}", "explanation": "The flat part means it is stationary — a stop of $1$ hour.", "diagram": null },
        { "stepNumber": 3, "description": "Describe the last section.", "workingLatex": "3 \\to 6\\text{h}", "explanation": "The line falls back to zero, so it returns home.", "diagram": null },
        { "stepNumber": 4, "description": "Compare the speeds.", "workingLatex": "\\text{out: } 12,\\ \\text{back: } 8 \\text{ km/h}", "explanation": "The return line is less steep, so the return journey is slower.", "diagram": null }
      ],
      "finalAnswer": "Travels $24$ km away from home in $2$ hours, stops for $1$ hour, then returns home over $3$ hours (more slowly)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q006",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "average speed"],
    "questionText": "On a journey, a train travels $150$ km in $2$ hours, stops for $30$ minutes, then travels a further $90$ km in $1$ hour. Find the average speed for the whole journey in km/h.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the total distance.", "workingLatex": "150 + 90 = 240 \\text{ km}", "explanation": "Add the two travelling distances; the stop adds no distance.", "diagram": null },
        { "stepNumber": 2, "description": "Find the total time.", "workingLatex": "2 + 0.5 + 1 = 3.5 \\text{ h}", "explanation": "Include the $30$-minute ($0.5$ h) stop in the total time.", "diagram": null },
        { "stepNumber": 3, "description": "Use the average-speed formula.", "workingLatex": "\\text{avg speed} = \\dfrac{240}{3.5}", "explanation": "Average speed is total distance over total time.", "diagram": null },
        { "stepNumber": 4, "description": "Compute.", "workingLatex": "\\approx 68.6 \\text{ km/h}", "explanation": "$240 \\div 3.5 = 68.57...$, about $68.6$ km/h.", "diagram": null }
      ],
      "finalAnswer": "About $68.6$ km/h"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q007",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["real-life graphs", "conversion graph", "reading values"],
    "questionText": "A conversion graph converts pounds (£) to euros (€) using the line from $(0,0)$ to $(10, 12)$. How many euros do you get for £5?",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 10, "yMin": 0, "yMax": 12,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 10, "y": 12 }], "color": "accent" }],
      "points": [{ "x": 5, "y": 6, "label": "(5,6)", "color": "ink" }],
      "xAxisLabel": "pounds (£)",
      "yAxisLabel": "euros (€)",
      "alt": "A conversion line from (0,0) to (10,12), passing through (5,6)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find £5 on the horizontal axis.", "workingLatex": "x = 5", "explanation": "Pounds are on the horizontal axis.", "diagram": null },
        { "stepNumber": 2, "description": "Read up to the line.", "workingLatex": "y = 6", "explanation": "Going up to the line and across gives $6$ euros.", "diagram": null },
        { "stepNumber": 3, "description": "State the answer.", "workingLatex": "€6", "explanation": "So £5 converts to €6.", "diagram": null }
      ],
      "finalAnswer": "€6"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q008",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "conversion graph", "rate"],
    "questionText": "A conversion graph for pounds to euros passes through $(10, 12)$. Use it to find the exchange rate (euros per pound) and how many euros you would get for £25.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rate from the given point.", "workingLatex": "\\dfrac{12}{10} = 1.2", "explanation": "The gradient (euros per pound) is the rate: $12$ euros for $10$ pounds.", "diagram": null },
        { "stepNumber": 2, "description": "State the rate.", "workingLatex": "€1.20 \\text{ per } £1", "explanation": "So each pound is worth $1.2$ euros.", "diagram": null },
        { "stepNumber": 3, "description": "Convert £25.", "workingLatex": "25 \\times 1.2", "explanation": "Multiply the pounds by the rate.", "diagram": null },
        { "stepNumber": 4, "description": "Compute.", "workingLatex": "= €30", "explanation": "So £25 gives €30.", "diagram": null }
      ],
      "finalAnswer": "Rate $= €1.20$ per £1; £25 gives €30."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q009",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "acceleration", "gradient"],
    "questionText": "On a speed–time graph, a car speeds up steadily from $0$ to $20$ m/s in $8$ seconds. Find its acceleration in m/s².",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 10, "yMin": 0, "yMax": 20,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 8, "y": 20 }], "color": "accent" }],
      "xAxisLabel": "time (s)",
      "yAxisLabel": "speed (m/s)",
      "alt": "A speed-time line rising from (0,0) to (8,20)."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what the gradient means.", "workingLatex": "\\text{acceleration} = \\dfrac{\\text{change in speed}}{\\text{time}}", "explanation": "On a speed–time graph the gradient is the acceleration.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute.", "workingLatex": "= \\dfrac{20 - 0}{8}", "explanation": "The speed rises by $20$ m/s over $8$ seconds.", "diagram": null },
        { "stepNumber": 3, "description": "Divide.", "workingLatex": "= 2.5", "explanation": "$20 \\div 8 = 2.5$.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "2.5 \\text{ m/s}^2", "explanation": "Acceleration is measured in metres per second squared.", "diagram": null }
      ],
      "finalAnswer": "$2.5$ m/s²"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q010",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "area", "distance"],
    "questionText": "On a speed–time graph, a car travels at a constant $15$ m/s for $12$ seconds. Find the distance travelled.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 14, "yMin": 0, "yMax": 20,
      "curves": [{ "points": [{ "x": 0, "y": 15 }, { "x": 12, "y": 15 }], "color": "accent" }],
      "xAxisLabel": "time (s)",
      "yAxisLabel": "speed (m/s)",
      "alt": "A horizontal speed-time line at 15 m/s from 0 to 12 seconds."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall what the area means.", "workingLatex": "\\text{distance} = \\text{area under the graph}", "explanation": "On a speed–time graph the area under the line gives the distance.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the shape.", "workingLatex": "\\text{rectangle: } 15 \\times 12", "explanation": "A constant speed makes a rectangle of height $15$ and width $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Compute the area.", "workingLatex": "= 180", "explanation": "$15 \\times 12 = 180$.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "180 \\text{ m}", "explanation": "So the car travels $180$ metres.", "diagram": null }
      ],
      "finalAnswer": "$180$ m"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q011",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "area", "distance", "trapezium"],
    "questionText": "A speed–time graph shows a car accelerating from $0$ to $18$ m/s over $6$ s, then holding $18$ m/s for $10$ s. Find the total distance travelled.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 18, "yMin": 0, "yMax": 20,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 6, "y": 18 }, { "x": 16, "y": 18 }], "color": "accent" }],
      "xAxisLabel": "time (s)",
      "yAxisLabel": "speed (m/s)",
      "alt": "A speed-time graph rising from 0 to 18 over 6 s, then constant at 18 to 16 s."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split the area into two shapes.", "workingLatex": "\\text{triangle} + \\text{rectangle}", "explanation": "The accelerating part is a triangle; the constant part is a rectangle.", "diagram": null },
        { "stepNumber": 2, "description": "Area of the triangle.", "workingLatex": "\\tfrac{1}{2} \\times 6 \\times 18 = 54", "explanation": "Half base times height for the first $6$ seconds.", "diagram": null },
        { "stepNumber": 3, "description": "Area of the rectangle.", "workingLatex": "18 \\times 10 = 180", "explanation": "Constant speed $18$ for $10$ seconds.", "diagram": null },
        { "stepNumber": 4, "description": "Add the areas.", "workingLatex": "54 + 180 = 234", "explanation": "Total distance is the total area under the graph.", "diagram": null },
        { "stepNumber": 5, "description": "State with units.", "workingLatex": "234 \\text{ m}", "explanation": "So the car travels $234$ metres.", "diagram": null }
      ],
      "finalAnswer": "$234$ m"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q012",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "fixed charge", "intercept"],
    "questionText": "A taxi fare graph is a straight line with a $y$-intercept of £3 and a gradient of £2 per mile. Find the fare for a $6$-mile journey.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the intercept.", "workingLatex": "£3 = \\text{fixed charge}", "explanation": "The $y$-intercept is the fixed starting fare, before any distance.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the gradient.", "workingLatex": "£2 \\text{ per mile}", "explanation": "The gradient is the cost per mile.", "diagram": null },
        { "stepNumber": 3, "description": "Write the equation.", "workingLatex": "C = 3 + 2d", "explanation": "Total cost is the fixed charge plus £2 for each mile $d$.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute $d = 6$.", "workingLatex": "C = 3 + 2(6) = 15", "explanation": "Six miles at £2 is £12, plus the £3 fixed charge.", "diagram": null }
      ],
      "finalAnswer": "£15"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q013",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["real-life graphs", "cost graph", "interpreting", "intercept"],
    "questionText": "A phone plan's monthly cost graph is a straight line that starts at £10 when $0$ GB of data are used, rising by £4 for each GB. Explain what the £10 and the £4 represent.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the starting value.", "workingLatex": "£10 \\text{ at } 0 \\text{ GB}", "explanation": "This is the $y$-intercept — the cost even when no data is used.", "diagram": null },
        { "stepNumber": 2, "description": "Name the £10.", "workingLatex": "\\text{fixed monthly charge}", "explanation": "So £10 is the fixed line-rental paid regardless of usage.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the rise.", "workingLatex": "£4 \\text{ per GB}", "explanation": "The gradient is how much the cost increases per unit of data.", "diagram": null },
        { "stepNumber": 4, "description": "Name the £4.", "workingLatex": "\\text{rate per GB}", "explanation": "So £4 is the cost of each additional gigabyte.", "diagram": null }
      ],
      "finalAnswer": "£10 is the fixed monthly charge (the intercept); £4 is the cost per GB of data (the gradient)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q014",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["real-life graphs", "container filling", "rate of change", "shape"],
    "questionText": "Water is poured at a steady rate into a container that is narrow at the bottom and wide at the top. Describe how a graph of water height against time would look, and why.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Think about the narrow bottom.", "workingLatex": "\\text{small width} \\Rightarrow \\text{height rises fast}", "explanation": "In a narrow part, a small volume of water fills a lot of height, so the level rises quickly.", "diagram": null },
        { "stepNumber": 2, "description": "Think about the wide top.", "workingLatex": "\\text{large width} \\Rightarrow \\text{height rises slowly}", "explanation": "In a wide part, the same volume spreads out, so the level rises slowly.", "diagram": null },
        { "stepNumber": 3, "description": "Describe the gradient change.", "workingLatex": "\\text{steep} \\to \\text{shallow}", "explanation": "So the graph starts steep and gradually becomes less steep.", "diagram": null },
        { "stepNumber": 4, "description": "State the curve type.", "workingLatex": "\\text{increasing, curving over}", "explanation": "The height always increases but at a decreasing rate — a curve that bends towards the horizontal.", "diagram": null }
      ],
      "finalAnswer": "The height always rises, steeply at first (narrow base) then more slowly (wide top): an increasing curve that flattens out over time."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q015",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "deceleration", "gradient"],
    "questionText": "On a speed–time graph, a car slows from $24$ m/s to $0$ m/s in $6$ seconds. Find the deceleration in m/s².",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the change in speed.", "workingLatex": "0 - 24 = -24 \\text{ m/s}", "explanation": "The speed decreases by $24$ m/s.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by the time.", "workingLatex": "\\dfrac{-24}{6} = -4", "explanation": "The gradient is negative because the car is slowing.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the sign.", "workingLatex": "\\text{deceleration} = 4 \\text{ m/s}^2", "explanation": "A negative acceleration of $4$ is a deceleration of $4$ m/s².", "diagram": null }
      ],
      "finalAnswer": "$4$ m/s² (deceleration)"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q016",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["real-life graphs", "conversion graph", "reading values"],
    "questionText": "A conversion graph converts miles to kilometres using the line through $(0,0)$ and $(5, 8)$. Estimate the number of kilometres in $10$ miles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rate.", "workingLatex": "\\dfrac{8}{5} = 1.6 \\text{ km/mile}", "explanation": "The gradient converts each mile to $1.6$ km.", "diagram": null },
        { "stepNumber": 2, "description": "Convert $10$ miles.", "workingLatex": "10 \\times 1.6", "explanation": "Multiply the miles by the rate.", "diagram": null },
        { "stepNumber": 3, "description": "Compute.", "workingLatex": "= 16 \\text{ km}", "explanation": "So $10$ miles is about $16$ km.", "diagram": null }
      ],
      "finalAnswer": "$16$ km"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q017",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "speed", "comparing sections"],
    "questionText": "A distance–time graph has two straight sections: $(0,0)$ to $(1, 30)$, then $(1, 30)$ to $(3, 90)$. In which section is the object moving faster, and what is that speed?",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 3, "yMin": 0, "yMax": 90,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 1, "y": 30 }, { "x": 3, "y": 90 }], "color": "accent" }],
      "xAxisLabel": "time (hours)",
      "yAxisLabel": "distance (km)",
      "alt": "A distance-time graph with a steeper first section and a shallower second section."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the first speed.", "workingLatex": "\\dfrac{30}{1} = 30 \\text{ km/h}", "explanation": "The first section covers $30$ km in $1$ hour.", "diagram": null },
        { "stepNumber": 2, "description": "Find the second speed.", "workingLatex": "\\dfrac{90 - 30}{3 - 1} = \\dfrac{60}{2} = 30", "explanation": "The second section covers $60$ km in $2$ hours.", "diagram": null },
        { "stepNumber": 3, "description": "Compare.", "workingLatex": "30 = 30", "explanation": "Both gradients are equal, so the speeds are the same.", "diagram": null },
        { "stepNumber": 4, "description": "Conclude.", "workingLatex": "\\text{same speed}", "explanation": "Neither is faster: the object moves at $30$ km/h throughout, so the graph is really one straight line.", "diagram": null }
      ],
      "finalAnswer": "Neither — both sections have speed $30$ km/h."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q018",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["real-life graphs", "distance-time", "speed", "interpreting steepness"],
    "questionText": "On a distance–time graph, one line is steeper than another. What does the steeper line tell you?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the meaning of gradient.", "workingLatex": "\\text{gradient} = \\text{speed}", "explanation": "On a distance–time graph, the steepness represents speed.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret 'steeper'.", "workingLatex": "\\text{steeper} \\Rightarrow \\text{larger gradient}", "explanation": "A steeper line covers more distance in the same time.", "diagram": null },
        { "stepNumber": 3, "description": "State the meaning.", "workingLatex": "\\text{greater speed}", "explanation": "So the steeper line means a faster object.", "diagram": null }
      ],
      "finalAnswer": "The steeper line represents a greater speed (more distance covered per unit of time)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q019",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "comparing plans", "simultaneous"],
    "questionText": "Plan A costs £20 plus £5 per hour. Plan B costs £35 with no hourly charge. After how many hours do the two plans cost the same?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write each cost.", "workingLatex": "A = 20 + 5h,\\ B = 35", "explanation": "Plan A rises with hours; Plan B is a flat £35.", "diagram": null },
        { "stepNumber": 2, "description": "Set them equal.", "workingLatex": "20 + 5h = 35", "explanation": "They cost the same where the two graphs cross.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract $20$.", "workingLatex": "5h = 15", "explanation": "Removing the fixed charge from both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Divide by $5$.", "workingLatex": "h = 3", "explanation": "Solving for the number of hours.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret.", "workingLatex": "\\text{after } 3 \\text{ hours}", "explanation": "So at $3$ hours both plans cost £35; beyond that, Plan B is cheaper.", "diagram": null }
      ],
      "finalAnswer": "After $3$ hours (both cost £35)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q020",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["real-life graphs", "speed-time", "interpreting"],
    "questionText": "On a speed–time graph, what does a horizontal line tell you about the object's motion?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the gradient.", "workingLatex": "\\text{gradient} = 0", "explanation": "A horizontal line has zero gradient, and on a speed–time graph the gradient is acceleration.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret zero acceleration.", "workingLatex": "\\text{acceleration} = 0", "explanation": "Zero acceleration means the speed is not changing.", "diagram": null },
        { "stepNumber": 3, "description": "State the meaning.", "workingLatex": "\\text{constant speed}", "explanation": "So the object moves at a steady (constant) speed — not stopped, unless that speed is zero.", "diagram": null }
      ],
      "finalAnswer": "The object is moving at a constant (steady) speed — its acceleration is zero."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q021",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "average speed", "return journey"],
    "questionText": "A walker goes $6$ km out in $1.5$ hours, then returns the same $6$ km in $1$ hour. Find the average speed for the whole trip in km/h.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find total distance.", "workingLatex": "6 + 6 = 12 \\text{ km}", "explanation": "The out and return legs are each $6$ km.", "diagram": null },
        { "stepNumber": 2, "description": "Find total time.", "workingLatex": "1.5 + 1 = 2.5 \\text{ h}", "explanation": "Add the two times together.", "diagram": null },
        { "stepNumber": 3, "description": "Apply the average-speed formula.", "workingLatex": "\\dfrac{12}{2.5}", "explanation": "Average speed is total distance over total time — not the average of the two speeds.", "diagram": null },
        { "stepNumber": 4, "description": "Compute.", "workingLatex": "= 4.8 \\text{ km/h}", "explanation": "$12 \\div 2.5 = 4.8$.", "diagram": null }
      ],
      "finalAnswer": "$4.8$ km/h"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q022",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "reading equation"],
    "questionText": "The cost £$C$ of hiring a floor sander for $d$ days is $C = 15 + 12d$. Find the cost of a $4$-day hire.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the parts.", "workingLatex": "15 = \\text{fixed},\\ 12 = \\text{per day}", "explanation": "£15 is a one-off charge; £12 is the daily rate.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $d = 4$.", "workingLatex": "C = 15 + 12(4)", "explanation": "Put the number of days into the formula.", "diagram": null },
        { "stepNumber": 3, "description": "Compute.", "workingLatex": "= 15 + 48 = 63", "explanation": "Four days at £12 is £48, plus the £15 fixed charge.", "diagram": null }
      ],
      "finalAnswer": "£63"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q023",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "area", "distance", "deceleration"],
    "questionText": "A speed–time graph shows a train at $30$ m/s for $20$ s, then decelerating uniformly to rest over the next $10$ s. Find the total distance travelled.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 32, "yMin": 0, "yMax": 32,
      "curves": [{ "points": [{ "x": 0, "y": 30 }, { "x": 20, "y": 30 }, { "x": 30, "y": 0 }], "color": "accent" }],
      "xAxisLabel": "time (s)",
      "yAxisLabel": "speed (m/s)",
      "alt": "A speed-time graph constant at 30 for 20 s then falling to 0 at 30 s."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Split into two shapes.", "workingLatex": "\\text{rectangle} + \\text{triangle}", "explanation": "The constant part is a rectangle; the slowing part is a triangle.", "diagram": null },
        { "stepNumber": 2, "description": "Rectangle area.", "workingLatex": "30 \\times 20 = 600", "explanation": "Speed $30$ for $20$ seconds.", "diagram": null },
        { "stepNumber": 3, "description": "Triangle area.", "workingLatex": "\\tfrac{1}{2} \\times 10 \\times 30 = 150", "explanation": "Half base ($10$ s) times height ($30$ m/s) for the deceleration.", "diagram": null },
        { "stepNumber": 4, "description": "Add.", "workingLatex": "600 + 150 = 750", "explanation": "Total distance is the total area under the graph.", "diagram": null },
        { "stepNumber": 5, "description": "State with units.", "workingLatex": "750 \\text{ m}", "explanation": "So the train travels $750$ metres.", "diagram": null }
      ],
      "finalAnswer": "$750$ m"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q024",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["real-life graphs", "container filling", "shape", "matching"],
    "questionText": "Water is poured at a steady rate into a container with straight vertical sides (a cylinder). Describe the shape of the height–time graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Consider the constant width.", "workingLatex": "\\text{width constant}", "explanation": "A cylinder has the same cross-section all the way up.", "diagram": null },
        { "stepNumber": 2, "description": "Reason about the rate.", "workingLatex": "\\text{equal volume} \\Rightarrow \\text{equal height}", "explanation": "Each equal amount of water raises the level by the same height, so the level rises at a steady rate.", "diagram": null },
        { "stepNumber": 3, "description": "State the graph shape.", "workingLatex": "\\text{straight line}", "explanation": "A steady rate of increase gives a straight line through the origin.", "diagram": null }
      ],
      "finalAnswer": "A straight line (rising at a constant rate) from the origin."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q025",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "conversion graph", "reverse reading"],
    "questionText": "A conversion graph converts litres to gallons via the line through $(0,0)$ and $(9, 2)$ (9 litres ≈ 2 gallons). Roughly how many litres are there in $5$ gallons?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find litres per gallon.", "workingLatex": "\\dfrac{9}{2} = 4.5", "explanation": "Since $9$ litres make $2$ gallons, each gallon is $4.5$ litres.", "diagram": null },
        { "stepNumber": 2, "description": "Convert $5$ gallons.", "workingLatex": "5 \\times 4.5", "explanation": "Multiply the gallons by litres-per-gallon.", "diagram": null },
        { "stepNumber": 3, "description": "Compute.", "workingLatex": "= 22.5", "explanation": "$5 \\times 4.5 = 22.5$.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "22.5 \\text{ litres}", "explanation": "So $5$ gallons is about $22.5$ litres.", "diagram": null }
      ],
      "finalAnswer": "About $22.5$ litres"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q026",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "reading time"],
    "questionText": "A distance–time graph is a straight line from $(0,0)$ to $(4, 100)$ (100 km in 4 hours). At what time has the object travelled $75$ km?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the speed.", "workingLatex": "\\dfrac{100}{4} = 25 \\text{ km/h}", "explanation": "The gradient gives a steady speed of $25$ km/h.", "diagram": null },
        { "stepNumber": 2, "description": "Use time = distance ÷ speed.", "workingLatex": "t = \\dfrac{75}{25}", "explanation": "To reach $75$ km at $25$ km/h, divide distance by speed.", "diagram": null },
        { "stepNumber": 3, "description": "Compute.", "workingLatex": "= 3", "explanation": "$75 \\div 25 = 3$.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "3 \\text{ hours}", "explanation": "So it has travelled $75$ km after $3$ hours.", "diagram": null }
      ],
      "finalAnswer": "After $3$ hours"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q027",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "reading values"],
    "questionText": "A graph of the cost of apples is a straight line through the origin passing through $(4, 6)$ — 4 kg costs £6. Find the cost of $1$ kg.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the unit rate.", "workingLatex": "\\dfrac{6}{4}", "explanation": "The gradient (cost per kg) is the total cost divided by the weight.", "diagram": null },
        { "stepNumber": 2, "description": "Compute.", "workingLatex": "= 1.5", "explanation": "$6 \\div 4 = 1.5$.", "diagram": null },
        { "stepNumber": 3, "description": "State with units.", "workingLatex": "£1.50", "explanation": "So $1$ kg of apples costs £1.50.", "diagram": null }
      ],
      "finalAnswer": "£1.50 per kg"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q028",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["real-life graphs", "container filling", "matching", "shape"],
    "questionText": "A vase is wide at the bottom and narrows towards the top. Water is poured in at a constant rate. Describe the height–time graph and explain the shape.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Consider the wide bottom.", "workingLatex": "\\text{wide} \\Rightarrow \\text{slow height rise}", "explanation": "A wide base needs more water for each cm of height, so the level rises slowly at first.", "diagram": null },
        { "stepNumber": 2, "description": "Consider the narrow top.", "workingLatex": "\\text{narrow} \\Rightarrow \\text{fast height rise}", "explanation": "As it narrows, the same water raises the level faster.", "diagram": null },
        { "stepNumber": 3, "description": "Describe how the gradient changes.", "workingLatex": "\\text{shallow} \\to \\text{steep}", "explanation": "So the graph starts shallow and becomes steeper.", "diagram": null },
        { "stepNumber": 4, "description": "Name the curve.", "workingLatex": "\\text{increasing, curving up}", "explanation": "The height rises at an increasing rate — a curve that bends upward.", "diagram": null }
      ],
      "finalAnswer": "An increasing curve that starts shallow (wide base) and gets steeper (narrow top) — height rising at an increasing rate."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q029",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "temperature", "conversion graph"],
    "questionText": "A graph converting °C to °F is a straight line with $y$-intercept $32$ and gradient $1.8$. Use $F = 1.8C + 32$ to find the Fahrenheit value of $20$°C.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the formula.", "workingLatex": "F = 1.8C + 32", "explanation": "The intercept $32$ and gradient $1.8$ give this straight-line rule.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $C = 20$.", "workingLatex": "F = 1.8(20) + 32", "explanation": "Put the Celsius value into the formula.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply.", "workingLatex": "1.8 \\times 20 = 36", "explanation": "Work out the variable part first.", "diagram": null },
        { "stepNumber": 4, "description": "Add the intercept.", "workingLatex": "36 + 32 = 68", "explanation": "Add the fixed $32$.", "diagram": null }
      ],
      "finalAnswer": "$68$°F"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q030",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["real-life graphs", "distance-time", "describing", "multi-stage"],
    "questionText": "A distance–time graph rises steeply, then rises gently, then is flat. Describe the three stages of the journey.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 6, "yMin": 0, "yMax": 40,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 2, "y": 30 }, { "x": 4, "y": 40 }, { "x": 6, "y": 40 }], "color": "accent" }],
      "xAxisLabel": "time (hours)",
      "yAxisLabel": "distance (km)",
      "alt": "A distance-time graph: steep rise, gentle rise, then flat."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Stage 1 — steep rise.", "workingLatex": "\\text{steep} \\Rightarrow \\text{fast}", "explanation": "A steep gradient means a high speed for the first part.", "diagram": null },
        { "stepNumber": 2, "description": "Stage 2 — gentle rise.", "workingLatex": "\\text{shallow} \\Rightarrow \\text{slow}", "explanation": "A less steep line means a slower speed while still moving forward.", "diagram": null },
        { "stepNumber": 3, "description": "Stage 3 — flat.", "workingLatex": "\\text{gradient} = 0", "explanation": "A flat line means the object is stationary.", "diagram": null },
        { "stepNumber": 4, "description": "Combine.", "workingLatex": "\\text{fast, slow, stopped}", "explanation": "So the object moves fast, then slower, then stops.", "diagram": null }
      ],
      "finalAnswer": "Moves quickly at first, then more slowly, then stops (stationary)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q031",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "area", "average speed"],
    "questionText": "A speed–time graph rises from $0$ to $12$ m/s over $4$ s, holds $12$ m/s for $6$ s, then falls to rest over $2$ s. Find the total distance and hence the average speed for the $12$ seconds.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 13, "yMin": 0, "yMax": 14,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 4, "y": 12 }, { "x": 10, "y": 12 }, { "x": 12, "y": 0 }], "color": "accent" }],
      "xAxisLabel": "time (s)",
      "yAxisLabel": "speed (m/s)",
      "alt": "A trapezium-shaped speed-time graph: rise to 12, constant, then fall to 0."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Area of the first triangle.", "workingLatex": "\\tfrac{1}{2} \\times 4 \\times 12 = 24", "explanation": "The accelerating stage is a triangle.", "diagram": null },
        { "stepNumber": 2, "description": "Area of the rectangle.", "workingLatex": "12 \\times 6 = 72", "explanation": "The constant-speed stage is a rectangle.", "diagram": null },
        { "stepNumber": 3, "description": "Area of the last triangle.", "workingLatex": "\\tfrac{1}{2} \\times 2 \\times 12 = 12", "explanation": "The slowing stage is a triangle.", "diagram": null },
        { "stepNumber": 4, "description": "Total distance.", "workingLatex": "24 + 72 + 12 = 108 \\text{ m}", "explanation": "Add all three areas.", "diagram": null },
        { "stepNumber": 5, "description": "Average speed.", "workingLatex": "\\dfrac{108}{12}", "explanation": "Average speed is total distance over total time.", "diagram": null },
        { "stepNumber": 6, "description": "Compute.", "workingLatex": "= 9 \\text{ m/s}", "explanation": "So the average speed is $9$ m/s.", "diagram": null }
      ],
      "finalAnswer": "Distance $= 108$ m; average speed $= 9$ m/s."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q032",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "finding intercept"],
    "questionText": "A straight-line cost graph passes through $(2, 25)$ and $(6, 45)$, where $x$ is hours and $y$ is cost in £. Find the fixed charge (the value when $x = 0$).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "\\dfrac{45 - 25}{6 - 2} = \\dfrac{20}{4} = 5", "explanation": "The cost rises £20 over $4$ hours, so £5 per hour.", "diagram": null },
        { "stepNumber": 2, "description": "Use a point to find the intercept.", "workingLatex": "25 = 5(2) + c", "explanation": "Substitute $(2, 25)$ into $y = 5x + c$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $c$.", "workingLatex": "25 = 10 + c \\Rightarrow c = 15", "explanation": "Subtracting $10$ gives the fixed charge.", "diagram": null },
        { "stepNumber": 4, "description": "State the answer.", "workingLatex": "£15", "explanation": "So the fixed charge (before any hours) is £15.", "diagram": null }
      ],
      "finalAnswer": "£15"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q033",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["real-life graphs", "distance-time", "interpreting"],
    "questionText": "On a distance–time graph, what does it mean if the line goes downwards (negative gradient)?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Consider the falling distance.", "workingLatex": "\\text{distance decreasing}", "explanation": "If the distance from the start is going down, the object is getting closer to where it began.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret in context.", "workingLatex": "\\text{returning}", "explanation": "So the object is travelling back towards its starting point.", "diagram": null }
      ],
      "finalAnswer": "The object is returning (moving back towards its starting point)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q034",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "return journey", "speed"],
    "questionText": "A cyclist rides $18$ km away from home in $1$ hour, rests, then returns home in $1.5$ hours. Find the speed on the return journey.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the return distance.", "workingLatex": "18 \\text{ km}", "explanation": "The cyclist rides the same $18$ km back home.", "diagram": null },
        { "stepNumber": 2, "description": "Identify the return time.", "workingLatex": "1.5 \\text{ h}", "explanation": "The return takes $1.5$ hours.", "diagram": null },
        { "stepNumber": 3, "description": "Use speed = distance ÷ time.", "workingLatex": "\\dfrac{18}{1.5}", "explanation": "The return speed is the return distance over the return time.", "diagram": null },
        { "stepNumber": 4, "description": "Compute.", "workingLatex": "= 12 \\text{ km/h}", "explanation": "$18 \\div 1.5 = 12$.", "diagram": null }
      ],
      "finalAnswer": "$12$ km/h"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q035",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "comparing plans", "decision"],
    "questionText": "Gym A charges £25 per month with no joining fee. Gym B charges a £40 joining fee plus £15 per month. For how many months is Gym A cheaper?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write each total cost.", "workingLatex": "A = 25m,\\ B = 40 + 15m", "explanation": "$m$ is the number of months.", "diagram": null },
        { "stepNumber": 2, "description": "Find where they are equal.", "workingLatex": "25m = 40 + 15m", "explanation": "The crossover is where the two lines meet.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "10m = 40 \\Rightarrow m = 4", "explanation": "Subtracting $15m$ then dividing gives $4$ months.", "diagram": null },
        { "stepNumber": 4, "description": "Decide which is cheaper before crossover.", "workingLatex": "m < 4:\\ A < B", "explanation": "For fewer than $4$ months, Gym A (no joining fee) costs less.", "diagram": null },
        { "stepNumber": 5, "description": "State the answer.", "workingLatex": "\\text{for } 1, 2, 3 \\text{ months}", "explanation": "So Gym A is cheaper for the first $3$ months; at $4$ months they are equal, and after that Gym B is cheaper.", "diagram": null }
      ],
      "finalAnswer": "For up to $3$ months (they cost the same at $4$ months; Gym B is cheaper beyond that)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q036",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "reading values", "acceleration"],
    "questionText": "A speed–time graph is a straight line from $(0, 4)$ to $(5, 19)$, where speed is in m/s and time in seconds. Find the acceleration.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the change in speed.", "workingLatex": "19 - 4 = 15 \\text{ m/s}", "explanation": "The speed increases from $4$ to $19$ m/s.", "diagram": null },
        { "stepNumber": 2, "description": "Find the time taken.", "workingLatex": "5 - 0 = 5 \\text{ s}", "explanation": "This change happens over $5$ seconds.", "diagram": null },
        { "stepNumber": 3, "description": "Divide to get the gradient.", "workingLatex": "\\dfrac{15}{5} = 3", "explanation": "Acceleration is the gradient of a speed–time graph.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "3 \\text{ m/s}^2", "explanation": "So the acceleration is $3$ m/s².", "diagram": null }
      ],
      "finalAnswer": "$3$ m/s²"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q037",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["real-life graphs", "container filling", "matching", "shape"],
    "questionText": "A height–time graph for filling a container is made of two straight segments: a steep one, then a shallow one. What can you say about the container's shape?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the steep segment.", "workingLatex": "\\text{steep} \\Rightarrow \\text{narrow}", "explanation": "The level rises quickly at first, so the bottom section is narrow.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret the shallow segment.", "workingLatex": "\\text{shallow} \\Rightarrow \\text{wide}", "explanation": "The level then rises slowly, so the upper section is wider.", "diagram": null },
        { "stepNumber": 3, "description": "Explain the straight segments.", "workingLatex": "\\text{constant width in each part}", "explanation": "Straight (not curved) segments mean each part has constant width — like two stacked cylinders.", "diagram": null }
      ],
      "finalAnswer": "Two straight-sided parts: a narrow lower section (steep) topped by a wider section (shallow)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q038",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["real-life graphs", "conversion graph", "reading values"],
    "questionText": "A graph converts kilograms to pounds via the line through $(0,0)$ and $(4, 8.8)$ (4 kg ≈ 8.8 lb). Find the number of pounds in $1$ kg.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the rate.", "workingLatex": "\\dfrac{8.8}{4}", "explanation": "Pounds per kilogram is the gradient of the line.", "diagram": null },
        { "stepNumber": 2, "description": "Compute.", "workingLatex": "= 2.2", "explanation": "$8.8 \\div 4 = 2.2$.", "diagram": null },
        { "stepNumber": 3, "description": "State with units.", "workingLatex": "2.2 \\text{ lb}", "explanation": "So $1$ kg is about $2.2$ pounds.", "diagram": null }
      ],
      "finalAnswer": "$2.2$ lb"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q039",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "meeting point"],
    "questionText": "Two runners set off along the same $12$ km route. Runner A's distance–time line goes from $(0,0)$ to $(2, 12)$; Runner B's goes from $(0,0)$ to $(3, 12)$. Who finishes first, and by how long?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read Runner A's finish time.", "workingLatex": "2 \\text{ hours}", "explanation": "Runner A reaches $12$ km at $t = 2$.", "diagram": null },
        { "stepNumber": 2, "description": "Read Runner B's finish time.", "workingLatex": "3 \\text{ hours}", "explanation": "Runner B reaches $12$ km at $t = 3$.", "diagram": null },
        { "stepNumber": 3, "description": "Compare.", "workingLatex": "2 < 3", "explanation": "The steeper line (A) reaches the finish sooner.", "diagram": null },
        { "stepNumber": 4, "description": "Find the difference.", "workingLatex": "3 - 2 = 1 \\text{ hour}", "explanation": "Runner A finishes $1$ hour before Runner B.", "diagram": null }
      ],
      "finalAnswer": "Runner A finishes first, by $1$ hour."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q040",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["real-life graphs", "rate of change", "interpreting", "curve"],
    "questionText": "A graph of a cup of coffee's temperature against time starts high and falls steeply, then levels off towards room temperature. Explain what the changing gradient tells you about how the coffee cools.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the steep start.", "workingLatex": "\\text{steep negative gradient}", "explanation": "A steep downward slope means the temperature is dropping quickly at first.", "diagram": null },
        { "stepNumber": 2, "description": "Explain why.", "workingLatex": "\\text{big temperature gap}", "explanation": "When the coffee is much hotter than the room, it loses heat fast.", "diagram": null },
        { "stepNumber": 3, "description": "Interpret the levelling off.", "workingLatex": "\\text{gradient} \\to 0", "explanation": "As it approaches room temperature the slope flattens, so cooling slows down.", "diagram": null },
        { "stepNumber": 4, "description": "Describe the limit.", "workingLatex": "\\to \\text{room temperature}", "explanation": "The temperature approaches room temperature but never drops below it — the curve levels out (an asymptote).", "diagram": null }
      ],
      "finalAnswer": "The coffee cools fast at first (steep slope) because it is far above room temperature, then more and more slowly (gradient flattening) as it nears room temperature."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q041",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "total distance"],
    "questionText": "A delivery van's distance–time graph goes $(0,0) \\to (1, 20) \\to (1.5, 20) \\to (2.5, 45)$, in km and hours. Find the total distance the van travels.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "First leg distance.", "workingLatex": "20 - 0 = 20 \\text{ km}", "explanation": "The van goes from $0$ to $20$ km.", "diagram": null },
        { "stepNumber": 2, "description": "Middle section.", "workingLatex": "20 - 20 = 0 \\text{ km}", "explanation": "The flat part is a stop, adding no distance.", "diagram": null },
        { "stepNumber": 3, "description": "Last leg distance.", "workingLatex": "45 - 20 = 25 \\text{ km}", "explanation": "The van continues from $20$ km to $45$ km.", "diagram": null },
        { "stepNumber": 4, "description": "Add the travelling parts.", "workingLatex": "20 + 25 = 45 \\text{ km}", "explanation": "Since the van never turns back, the final distance ($45$ km) is also the total travelled.", "diagram": null }
      ],
      "finalAnswer": "$45$ km"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q042",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "reading equation"],
    "questionText": "The cost of electricity is £$C = 0.20u + 8$, where $u$ is the number of units used. Find the cost for $50$ units.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Substitute $u = 50$.", "workingLatex": "C = 0.20(50) + 8", "explanation": "Put the number of units into the formula.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply.", "workingLatex": "0.20 \\times 50 = 10", "explanation": "The variable cost is £10.", "diagram": null },
        { "stepNumber": 3, "description": "Add the fixed charge.", "workingLatex": "10 + 8 = 18", "explanation": "Add the £8 standing charge.", "diagram": null }
      ],
      "finalAnswer": "£18"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q043",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["real-life graphs", "speed-time", "distance-time", "distinguishing"],
    "questionText": "A student says a flat horizontal line always means the object is stopped. Explain why this is only true for a distance–time graph, not a speed–time graph.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Flat line on distance–time.", "workingLatex": "\\text{distance constant}", "explanation": "If distance does not change, the object is not moving — it is stopped.", "diagram": null },
        { "stepNumber": 2, "description": "Flat line on speed–time.", "workingLatex": "\\text{speed constant}", "explanation": "If speed stays constant (say $10$ m/s), the object is still moving — just not changing speed.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the two.", "workingLatex": "\\text{axes differ}", "explanation": "The vertical axis means different things: distance versus speed.", "diagram": null },
        { "stepNumber": 4, "description": "Conclude.", "workingLatex": "\\text{stopped only if } speed = 0", "explanation": "On a speed–time graph the object is only stopped if the flat line is at zero speed.", "diagram": null }
      ],
      "finalAnswer": "On a distance–time graph a flat line means distance is unchanged (stopped); on a speed–time graph it means constant speed, so the object is usually still moving."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q044",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "conversion graph", "two-way"],
    "questionText": "A pounds-to-dollars conversion graph passes through $(20, 26)$. How many pounds would you need to get $\\$39$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find dollars per pound.", "workingLatex": "\\dfrac{26}{20} = 1.3", "explanation": "The rate is $1.3$ dollars per pound.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the reverse conversion.", "workingLatex": "\\text{pounds} = \\dfrac{39}{1.3}", "explanation": "To go from dollars back to pounds, divide by the rate.", "diagram": null },
        { "stepNumber": 3, "description": "Compute.", "workingLatex": "= 30", "explanation": "$39 \\div 1.3 = 30$.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "£30", "explanation": "So you need £30 to get \\$39.", "diagram": null }
      ],
      "finalAnswer": "£30"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q045",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "two objects", "meeting point"],
    "questionText": "Car A leaves at $t = 0$ from home and drives at $60$ km/h. Car B leaves the same place $1$ hour later at $90$ km/h along the same road. On a distance–time graph, at what time (measured from Car A's start) does Car B catch up with Car A?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write Car A's distance.", "workingLatex": "d_A = 60t", "explanation": "Car A travels at $60$ km/h from $t = 0$.", "diagram": null },
        { "stepNumber": 2, "description": "Write Car B's distance.", "workingLatex": "d_B = 90(t - 1)", "explanation": "Car B starts $1$ hour later, so its time travelling is $t - 1$.", "diagram": null },
        { "stepNumber": 3, "description": "Set them equal.", "workingLatex": "60t = 90(t - 1)", "explanation": "They meet where the distances are equal (the graphs cross).", "diagram": null },
        { "stepNumber": 4, "description": "Expand and simplify.", "workingLatex": "60t = 90t - 90", "explanation": "Multiply out the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Solve for $t$.", "workingLatex": "90 = 30t \\Rightarrow t = 3", "explanation": "Rearranging gives $t = 3$.", "diagram": null },
        { "stepNumber": 6, "description": "Interpret.", "workingLatex": "t = 3 \\text{ hours}", "explanation": "So Car B catches Car A $3$ hours after Car A set off (both at $180$ km).", "diagram": null }
      ],
      "finalAnswer": "At $t = 3$ hours after Car A's start (at the $180$ km point)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q046",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "area", "units"],
    "questionText": "A speed–time graph shows constant $8$ m/s for $30$ s. Give the distance travelled in metres, then convert it to kilometres.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the area.", "workingLatex": "8 \\times 30 = 240", "explanation": "Distance is the rectangular area: speed times time.", "diagram": null },
        { "stepNumber": 2, "description": "State in metres.", "workingLatex": "240 \\text{ m}", "explanation": "The units are metres because speed was in m/s and time in seconds.", "diagram": null },
        { "stepNumber": 3, "description": "Convert to km.", "workingLatex": "240 \\div 1000 = 0.24", "explanation": "There are $1000$ m in a km.", "diagram": null }
      ],
      "finalAnswer": "$240$ m $= 0.24$ km"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q047",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["real-life graphs", "speed-time", "interpreting"],
    "questionText": "On a speed–time graph, what does a straight line sloping downwards tell you?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the gradient sign.", "workingLatex": "\\text{negative gradient}", "explanation": "A downward slope means the speed is decreasing over time.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret in context.", "workingLatex": "\\text{decelerating}", "explanation": "Decreasing speed means the object is slowing down (decelerating).", "diagram": null }
      ],
      "finalAnswer": "The object is decelerating (slowing down) at a steady rate."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q048",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "finding equation"],
    "questionText": "A plumber charges a call-out fee plus an hourly rate. A $2$-hour job costs £90 and a $5$-hour job costs £180. Find the call-out fee and the hourly rate.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the hourly rate (gradient).", "workingLatex": "\\dfrac{180 - 90}{5 - 2} = \\dfrac{90}{3} = 30", "explanation": "The extra £90 over $3$ extra hours gives £30 per hour.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the cost equation.", "workingLatex": "C = 30h + f", "explanation": "$f$ is the fixed call-out fee.", "diagram": null },
        { "stepNumber": 3, "description": "Use the $2$-hour job.", "workingLatex": "90 = 30(2) + f", "explanation": "Substitute $h = 2$, $C = 90$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $f$.", "workingLatex": "90 = 60 + f \\Rightarrow f = 30", "explanation": "So the call-out fee is £30.", "diagram": null }
      ],
      "finalAnswer": "Call-out fee £30; hourly rate £30 per hour."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q049",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["real-life graphs", "container filling", "shape", "reasoning"],
    "questionText": "A container is a sphere (widest in the middle). Water is poured in at a steady rate. Describe how the rate of height increase changes from bottom to top.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Bottom of the sphere.", "workingLatex": "\\text{narrow} \\Rightarrow \\text{fast rise}", "explanation": "At the bottom the sphere is narrow, so the level rises quickly.", "diagram": null },
        { "stepNumber": 2, "description": "Middle of the sphere.", "workingLatex": "\\text{widest} \\Rightarrow \\text{slowest rise}", "explanation": "In the middle it is widest, so the level rises most slowly.", "diagram": null },
        { "stepNumber": 3, "description": "Top of the sphere.", "workingLatex": "\\text{narrow again} \\Rightarrow \\text{fast rise}", "explanation": "Near the top it narrows again, so the level speeds up once more.", "diagram": null },
        { "stepNumber": 4, "description": "Summarise the graph.", "workingLatex": "\\text{fast} \\to \\text{slow} \\to \\text{fast}", "explanation": "So the height–time graph is steep, then shallow, then steep — an S-like curve.", "diagram": null }
      ],
      "finalAnswer": "Fast at first (narrow bottom), slowest in the middle (widest), then fast again near the top (narrows) — steep, shallow, steep."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q050",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "acceleration", "reading"],
    "questionText": "A speed–time graph rises from $0$ to $v$ m/s in $5$ s, giving an acceleration of $4$ m/s². The object then travels at $v$ m/s for $8$ s. Find $v$ and the distance travelled during the constant-speed phase.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use acceleration = gradient.", "workingLatex": "4 = \\dfrac{v - 0}{5}", "explanation": "Acceleration is the change in speed over the time.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $v$.", "workingLatex": "v = 4 \\times 5 = 20", "explanation": "Multiplying both sides by $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Find the constant-speed distance.", "workingLatex": "20 \\times 8", "explanation": "Distance is speed times time (a rectangle of area) for the constant phase.", "diagram": null },
        { "stepNumber": 4, "description": "Compute.", "workingLatex": "= 160", "explanation": "$20 \\times 8 = 160$.", "diagram": null },
        { "stepNumber": 5, "description": "State with units.", "workingLatex": "v = 20 \\text{ m/s},\\ 160 \\text{ m}", "explanation": "So the top speed is $20$ m/s and the constant phase covers $160$ m.", "diagram": null }
      ],
      "finalAnswer": "$v = 20$ m/s; distance in the constant phase $= 160$ m."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q051",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "speed", "unit conversion"],
    "questionText": "A distance–time graph shows $500$ m covered in $40$ seconds at a steady speed. Find the speed in m/s.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use gradient = speed.", "workingLatex": "\\text{speed} = \\dfrac{500}{40}", "explanation": "Speed is distance over time.", "diagram": null },
        { "stepNumber": 2, "description": "Compute.", "workingLatex": "= 12.5", "explanation": "$500 \\div 40 = 12.5$.", "diagram": null },
        { "stepNumber": 3, "description": "State with units.", "workingLatex": "12.5 \\text{ m/s}", "explanation": "So the object moves at $12.5$ metres per second.", "diagram": null }
      ],
      "finalAnswer": "$12.5$ m/s"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q052",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "text",
    "tags": ["real-life graphs", "distance-time", "describing", "return"],
    "questionText": "Describe the journey shown: $(0,0) \\to (1, 40) \\to (2, 40) \\to (4, 0)$ on a distance-from-home (km) vs time (hours) graph, including the speeds.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 4, "yMin": 0, "yMax": 40,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 1, "y": 40 }, { "x": 2, "y": 40 }, { "x": 4, "y": 0 }], "color": "accent" }],
      "xAxisLabel": "time (hours)",
      "yAxisLabel": "distance from home (km)",
      "alt": "A distance-time graph rising to 40 km, flat for an hour, then falling to 0."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Outward speed.", "workingLatex": "\\dfrac{40}{1} = 40 \\text{ km/h}", "explanation": "$40$ km in $1$ hour going out.", "diagram": null },
        { "stepNumber": 2, "description": "Middle section.", "workingLatex": "\\text{flat} \\Rightarrow \\text{stationary}", "explanation": "The flat hour is a stop.", "diagram": null },
        { "stepNumber": 3, "description": "Return speed.", "workingLatex": "\\dfrac{40}{2} = 20 \\text{ km/h}", "explanation": "$40$ km back home over $2$ hours.", "diagram": null },
        { "stepNumber": 4, "description": "Describe overall.", "workingLatex": "\\text{out, wait, back}", "explanation": "Combining the three stages gives the whole journey.", "diagram": null }
      ],
      "finalAnswer": "Travels $40$ km from home at $40$ km/h (1 h), waits $1$ hour, then returns home over $2$ hours at $20$ km/h."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q053",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["real-life graphs", "conversion graph", "reading values"],
    "questionText": "A conversion graph for hours to minutes passes through $(3, 180)$. What is the gradient, and what does it represent?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the gradient.", "workingLatex": "\\dfrac{180}{3} = 60", "explanation": "The line passes through the origin, so gradient is $180 \\div 3$.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret it.", "workingLatex": "60 \\text{ min per hour}", "explanation": "The gradient is the number of minutes in one hour.", "diagram": null }
      ],
      "finalAnswer": "Gradient $= 60$, meaning $60$ minutes per hour."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q054",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "reading equation"],
    "questionText": "A car park charges £$C = 1.5h + 2$, where $h$ is the number of hours. How many hours parking does £11 buy?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set the cost to £11.", "workingLatex": "11 = 1.5h + 2", "explanation": "We know the cost and want the hours.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract $2$.", "workingLatex": "9 = 1.5h", "explanation": "Removing the fixed charge.", "diagram": null },
        { "stepNumber": 3, "description": "Divide by $1.5$.", "workingLatex": "h = 6", "explanation": "$9 \\div 1.5 = 6$.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "6 \\text{ hours}", "explanation": "So £11 buys $6$ hours of parking.", "diagram": null }
      ],
      "finalAnswer": "$6$ hours"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q055",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "area", "estimation"],
    "questionText": "A speed–time graph is a straight line from $(0, 5)$ to $(10, 25)$ m/s. Using the area (a trapezium), find the distance travelled in the $10$ seconds.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 11, "yMin": 0, "yMax": 26,
      "curves": [{ "points": [{ "x": 0, "y": 5 }, { "x": 10, "y": 25 }], "color": "accent" }],
      "xAxisLabel": "time (s)",
      "yAxisLabel": "speed (m/s)",
      "alt": "A speed-time line from (0,5) to (10,25), forming a trapezium with the axis."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recognise the shape.", "workingLatex": "\\text{trapezium}", "explanation": "The area under the line is a trapezium with parallel sides $5$ and $25$.", "diagram": null },
        { "stepNumber": 2, "description": "Recall the area formula.", "workingLatex": "A = \\tfrac{1}{2}(a + b)h", "explanation": "The parallel sides are the two speeds; the height is the time.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute.", "workingLatex": "A = \\tfrac{1}{2}(5 + 25)(10)", "explanation": "$a = 5$, $b = 25$, $h = 10$.", "diagram": null },
        { "stepNumber": 4, "description": "Compute.", "workingLatex": "= \\tfrac{1}{2}(30)(10) = 150", "explanation": "$\\tfrac{1}{2} \\times 30 \\times 10 = 150$.", "diagram": null },
        { "stepNumber": 5, "description": "State with units.", "workingLatex": "150 \\text{ m}", "explanation": "So the object travels $150$ metres.", "diagram": null }
      ],
      "finalAnswer": "$150$ m"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q056",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "speed", "fastest section"],
    "questionText": "A journey has three legs on a distance–time graph: $(0,0)\\to(1,50)$, $(1,50)\\to(2,110)$, $(2,110)\\to(4,110)$ in km and hours. Which leg has the greatest speed, and what is it?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Leg 1 speed.", "workingLatex": "\\dfrac{50}{1} = 50 \\text{ km/h}", "explanation": "$50$ km in $1$ hour.", "diagram": null },
        { "stepNumber": 2, "description": "Leg 2 speed.", "workingLatex": "\\dfrac{110 - 50}{1} = 60 \\text{ km/h}", "explanation": "$60$ km in $1$ hour.", "diagram": null },
        { "stepNumber": 3, "description": "Leg 3 speed.", "workingLatex": "\\dfrac{0}{2} = 0 \\text{ km/h}", "explanation": "Flat line — stationary.", "diagram": null },
        { "stepNumber": 4, "description": "Compare.", "workingLatex": "60 > 50 > 0", "explanation": "The steepest leg has the greatest speed.", "diagram": null }
      ],
      "finalAnswer": "Leg 2, at $60$ km/h."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q057",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["real-life graphs", "container filling", "matching"],
    "questionText": "A height–time graph for filling a container is a straight line through the origin. What does this tell you about the container's cross-section?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the straight line.", "workingLatex": "\\text{constant gradient}", "explanation": "A straight line means the level rises at a steady, unchanging rate.", "diagram": null },
        { "stepNumber": 2, "description": "Link rate to width.", "workingLatex": "\\text{same width throughout}", "explanation": "A steady rise happens only if the cross-section (width) is the same all the way up.", "diagram": null }
      ],
      "finalAnswer": "The container has a constant (uniform) cross-section — the same width all the way up, like a prism or cylinder."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q058",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "acceleration", "reading two points"],
    "questionText": "A speed–time graph passes through $(2, 6)$ and $(8, 30)$ m/s. Assuming a straight line, find the acceleration and the speed at $t = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the acceleration (gradient).", "workingLatex": "\\dfrac{30 - 6}{8 - 2} = \\dfrac{24}{6} = 4", "explanation": "Change in speed over change in time.", "diagram": null },
        { "stepNumber": 2, "description": "Write the equation.", "workingLatex": "v = 4t + c", "explanation": "Speed is a linear function of time with gradient $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute $(2, 6)$.", "workingLatex": "6 = 4(2) + c", "explanation": "Use a known point to find $c$.", "diagram": null },
        { "stepNumber": 4, "description": "Solve for $c$.", "workingLatex": "6 = 8 + c \\Rightarrow c = -2", "explanation": "Hmm, that gives a negative starting speed, which is impossible, so re-check: $c = 6 - 8 = -2$.", "diagram": null },
        { "stepNumber": 5, "description": "Interpret.", "workingLatex": "v(0) = -2 \\Rightarrow \\text{starts later}", "explanation": "Since speed cannot be negative, the motion must begin after $t = 0$ — the object is at rest until $v = 0$, i.e. at $t = 0.5$ s. The acceleration is still $4$ m/s².", "diagram": null }
      ],
      "finalAnswer": "Acceleration $= 4$ m/s²; the line gives $v = -2$ at $t = 0$, so realistically the object starts moving at $t = 0.5$ s (speed cannot be negative)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q059",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "comparing"],
    "questionText": "Two straight-line cost graphs cross at $(5, 40)$. Below $5$ units, Line P is higher; above $5$ units, Line Q is higher. At exactly $5$ units, what is true about the two costs?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the crossing point.", "workingLatex": "(5, 40)", "explanation": "Where two graphs cross, they share the same coordinates.", "diagram": null },
        { "stepNumber": 2, "description": "Read the shared cost.", "workingLatex": "\\text{both} = £40", "explanation": "At $5$ units both lines give a cost of £40.", "diagram": null },
        { "stepNumber": 3, "description": "State the meaning.", "workingLatex": "P = Q", "explanation": "So at $5$ units the two options cost exactly the same.", "diagram": null }
      ],
      "finalAnswer": "At $5$ units both cost the same: £40."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q060",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "average speed", "full journey"],
    "questionText": "A car's distance–time graph is $(0,0)\\to(0.5, 40)\\to(1.5, 40)\\to(3, 130)$, in km and hours. Find the total distance, the total time, and the average speed for the whole journey.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "First leg distance.", "workingLatex": "40 \\text{ km}", "explanation": "From $0$ to $40$ km.", "diagram": null },
        { "stepNumber": 2, "description": "Middle leg.", "workingLatex": "0 \\text{ km (stop)}", "explanation": "The flat section is a stop.", "diagram": null },
        { "stepNumber": 3, "description": "Last leg distance.", "workingLatex": "130 - 40 = 90 \\text{ km}", "explanation": "From $40$ km to $130$ km.", "diagram": null },
        { "stepNumber": 4, "description": "Total distance and time.", "workingLatex": "130 \\text{ km},\\ 3 \\text{ h}", "explanation": "The car ends $130$ km from the start after $3$ hours.", "diagram": null },
        { "stepNumber": 5, "description": "Average speed.", "workingLatex": "\\dfrac{130}{3}", "explanation": "Total distance over total time.", "diagram": null },
        { "stepNumber": 6, "description": "Compute.", "workingLatex": "\\approx 43.3 \\text{ km/h}", "explanation": "$130 \\div 3 = 43.3...$, about $43.3$ km/h.", "diagram": null }
      ],
      "finalAnswer": "Total distance $130$ km, total time $3$ h, average speed $\\approx 43.3$ km/h."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q061",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "conversion graph", "gradient"],
    "questionText": "A conversion graph from euros to pounds passes through $(50, 42)$. Find the exchange rate in pounds per euro, and convert €80 to pounds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find pounds per euro.", "workingLatex": "\\dfrac{42}{50} = 0.84", "explanation": "The gradient is the rate: £0.84 per €1.", "diagram": null },
        { "stepNumber": 2, "description": "Convert €80.", "workingLatex": "80 \\times 0.84", "explanation": "Multiply the euros by the rate.", "diagram": null },
        { "stepNumber": 3, "description": "Compute.", "workingLatex": "= 67.2", "explanation": "$80 \\times 0.84 = 67.2$.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "£67.20", "explanation": "So €80 converts to £67.20.", "diagram": null }
      ],
      "finalAnswer": "Rate $= £0.84$ per €1; €80 $= £67.20$."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q062",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["real-life graphs", "speed-time", "area", "concept"],
    "questionText": "On a speed–time graph, what physical quantity does the area under the graph represent?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the axes.", "workingLatex": "\\text{speed} \\times \\text{time}", "explanation": "Multiplying a speed by a time gives a distance.", "diagram": null },
        { "stepNumber": 2, "description": "Link to area.", "workingLatex": "\\text{area} = \\text{distance}", "explanation": "The area under the graph adds up speed times time, which is the distance travelled.", "diagram": null }
      ],
      "finalAnswer": "The distance travelled."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q063",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "speed", "unit conversion"],
    "questionText": "A distance–time graph shows a train covering $120$ km in $45$ minutes at a steady speed. Find the speed in km/h.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert time to hours.", "workingLatex": "45 \\text{ min} = 0.75 \\text{ h}", "explanation": "$45 \\div 60 = 0.75$ hours.", "diagram": null },
        { "stepNumber": 2, "description": "Use speed = distance ÷ time.", "workingLatex": "\\dfrac{120}{0.75}", "explanation": "Now both are in compatible units for km/h.", "diagram": null },
        { "stepNumber": 3, "description": "Compute.", "workingLatex": "= 160", "explanation": "$120 \\div 0.75 = 160$.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "160 \\text{ km/h}", "explanation": "So the train travels at $160$ km/h.", "diagram": null }
      ],
      "finalAnswer": "$160$ km/h"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q064",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["real-life graphs", "rate of change", "interpreting", "population"],
    "questionText": "A graph of a town's population against time curves upward, getting steeper each year. What does the increasing steepness tell you about the growth?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the gradient.", "workingLatex": "\\text{gradient} = \\text{growth rate}", "explanation": "The gradient is how fast the population is changing each year.", "diagram": null },
        { "stepNumber": 2, "description": "Interpret increasing steepness.", "workingLatex": "\\text{gradient increasing}", "explanation": "Getting steeper means the yearly increase is itself getting bigger.", "diagram": null },
        { "stepNumber": 3, "description": "State the meaning.", "workingLatex": "\\text{accelerating growth}", "explanation": "So the population is not just growing, but growing faster and faster.", "diagram": null }
      ],
      "finalAnswer": "The population is growing at an increasing rate — each year it rises by more than the year before (accelerating growth)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q065",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["real-life graphs", "cost graph", "comparing plans", "inequality"],
    "questionText": "Company X charges £0.30 per mile. Company Y charges £12 plus £0.10 per mile. Find the distance beyond which Company Y is cheaper.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write each cost.", "workingLatex": "X = 0.30m,\\ Y = 12 + 0.10m", "explanation": "$m$ is the number of miles.", "diagram": null },
        { "stepNumber": 2, "description": "Find where equal.", "workingLatex": "0.30m = 12 + 0.10m", "explanation": "The crossover is where the two lines meet.", "diagram": null },
        { "stepNumber": 3, "description": "Collect terms.", "workingLatex": "0.20m = 12", "explanation": "Subtract $0.10m$ from both sides.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "m = 60", "explanation": "$12 \\div 0.20 = 60$ miles.", "diagram": null },
        { "stepNumber": 5, "description": "Decide the direction.", "workingLatex": "m > 60 \\Rightarrow Y < X", "explanation": "Beyond $60$ miles the cheaper per-mile rate of Y wins.", "diagram": null }
      ],
      "finalAnswer": "Beyond $60$ miles Company Y is cheaper (they are equal at $60$ miles)."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q066",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "distance", "triangle"],
    "questionText": "A car accelerates from rest, and its speed–time graph is a straight line from $(0,0)$ to $(10, 16)$ m/s. Find the distance travelled in these $10$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the shape.", "workingLatex": "\\text{triangle}", "explanation": "Starting from rest, the area under the line is a triangle.", "diagram": null },
        { "stepNumber": 2, "description": "Use the triangle area.", "workingLatex": "\\tfrac{1}{2} \\times 10 \\times 16", "explanation": "Half base (time) times height (final speed).", "diagram": null },
        { "stepNumber": 3, "description": "Compute.", "workingLatex": "= 80", "explanation": "$\\tfrac{1}{2} \\times 10 \\times 16 = 80$.", "diagram": null },
        { "stepNumber": 4, "description": "State with units.", "workingLatex": "80 \\text{ m}", "explanation": "So the car travels $80$ metres.", "diagram": null }
      ],
      "finalAnswer": "$80$ m"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q067",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["real-life graphs", "distance-time", "reading values"],
    "questionText": "A distance–time graph reaches $30$ km at $t = 1$ h and stays flat until $t = 2$ h. How far from the start is the object at $t = 1.5$ h?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Locate $t = 1.5$ h.", "workingLatex": "1 < 1.5 < 2", "explanation": "This time lies within the flat (stationary) section.", "diagram": null },
        { "stepNumber": 2, "description": "Read the constant distance.", "workingLatex": "30 \\text{ km}", "explanation": "During the flat section the distance stays at $30$ km.", "diagram": null }
      ],
      "finalAnswer": "$30$ km"
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q068",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "average speed", "area"],
    "questionText": "A speed–time graph is a triangle: from $(0,0)$ up to $(6, 18)$ m/s and back down to $(12, 0)$. Find the total distance and the average speed over the $12$ seconds.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 13, "yMin": 0, "yMax": 20,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 6, "y": 18 }, { "x": 12, "y": 0 }], "color": "accent" }],
      "xAxisLabel": "time (s)",
      "yAxisLabel": "speed (m/s)",
      "alt": "A triangular speed-time graph peaking at 18 m/s at 6 seconds."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the area (distance).", "workingLatex": "\\tfrac{1}{2} \\times 12 \\times 18", "explanation": "The whole shape is a triangle with base $12$ and height $18$.", "diagram": null },
        { "stepNumber": 2, "description": "Compute the distance.", "workingLatex": "= 108 \\text{ m}", "explanation": "$\\tfrac{1}{2} \\times 12 \\times 18 = 108$.", "diagram": null },
        { "stepNumber": 3, "description": "Average speed.", "workingLatex": "\\dfrac{108}{12}", "explanation": "Total distance over total time.", "diagram": null },
        { "stepNumber": 4, "description": "Compute.", "workingLatex": "= 9 \\text{ m/s}", "explanation": "So the average speed is $9$ m/s (half the peak, as expected for a symmetric triangle).", "diagram": null }
      ],
      "finalAnswer": "Distance $= 108$ m; average speed $= 9$ m/s."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q069",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["real-life graphs", "distance-time", "impossible", "reasoning"],
    "questionText": "Explain why a distance–time graph can never be a vertical line.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Describe a vertical line.", "workingLatex": "\\text{same } t,\\ \\text{many } d", "explanation": "A vertical line means one instant of time has many different distances.", "diagram": null },
        { "stepNumber": 2, "description": "Explain the problem.", "workingLatex": "\\text{infinite speed}", "explanation": "The object would have to be in several places at once, needing infinite speed.", "diagram": null },
        { "stepNumber": 3, "description": "Conclude.", "workingLatex": "\\text{impossible}", "explanation": "Since an object can only be one distance away at each moment, the graph cannot be vertical.", "diagram": null }
      ],
      "finalAnswer": "Because a vertical line would mean the object is at many distances at a single instant (infinite speed), which is impossible."
    }
  },
  {
    "id": "gcse.algebra.real-life-graphs.q070",
    "level": "GCSE",
    "topic": "Algebra",
    "subtopic": "Real-life graphs",
    "subtopicId": "gcse.algebra.real-life-graphs",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["real-life graphs", "speed-time", "area", "multi-stage", "average speed"],
    "questionText": "A cyclist's speed–time graph is: rise from $0$ to $10$ m/s over $5$ s, constant $10$ m/s for $20$ s, then decelerate to rest over $5$ s. Find the total distance and the average speed for the whole $30$ seconds.",
    "questionDiagram": {
      "kind": "functionGraph",
      "xMin": 0, "xMax": 32, "yMin": 0, "yMax": 12,
      "curves": [{ "points": [{ "x": 0, "y": 0 }, { "x": 5, "y": 10 }, { "x": 25, "y": 10 }, { "x": 30, "y": 0 }], "color": "accent" }],
      "xAxisLabel": "time (s)",
      "yAxisLabel": "speed (m/s)",
      "alt": "A trapezium-shaped speed-time graph: rise to 10 over 5 s, constant for 20 s, fall to 0 over 5 s."
    },
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "First triangle.", "workingLatex": "\\tfrac{1}{2} \\times 5 \\times 10 = 25", "explanation": "The accelerating stage.", "diagram": null },
        { "stepNumber": 2, "description": "Rectangle.", "workingLatex": "10 \\times 20 = 200", "explanation": "The constant-speed stage.", "diagram": null },
        { "stepNumber": 3, "description": "Last triangle.", "workingLatex": "\\tfrac{1}{2} \\times 5 \\times 10 = 25", "explanation": "The decelerating stage.", "diagram": null },
        { "stepNumber": 4, "description": "Total distance.", "workingLatex": "25 + 200 + 25 = 250", "explanation": "Add all three areas. (This is also a trapezium: $\\tfrac{1}{2}(20 + 30)(10) = 250$.)", "diagram": null },
        { "stepNumber": 5, "description": "Average speed.", "workingLatex": "\\dfrac{250}{30}", "explanation": "Total distance over total time.", "diagram": null },
        { "stepNumber": 6, "description": "Compute.", "workingLatex": "\\approx 8.33 \\text{ m/s}", "explanation": "$250 \\div 30 = 8.33...$, about $8.33$ m/s.", "diagram": null }
      ],
      "finalAnswer": "Distance $= 250$ m; average speed $\\approx 8.33$ m/s."
    }
  }
];
