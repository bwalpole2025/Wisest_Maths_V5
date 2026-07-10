import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.geometry.constructions.q001",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["loci", "point"],
    "questionText": "What is the locus of all points that are a fixed distance from a single point?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Picture points equidistant from one point.", "workingLatex": "\\text{fixed distance } = r", "explanation": "All points the same distance from the centre form a circle.", "diagram": null }
      ],
      "finalAnswer": "A circle"
    }
  },
  {
    "id": "gcse.geometry.constructions.q002",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["loci", "circle"],
    "questionText": "Describe the locus of all points exactly $5\\text{ cm}$ from a point $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the shape.", "workingLatex": "\\text{circle, centre } P", "explanation": "Equidistant points form a circle centred on $P$.", "diagram": null },
        { "stepNumber": 2, "description": "State the radius.", "workingLatex": "r = 5", "explanation": "The fixed distance is the radius.", "diagram": null }
      ],
      "finalAnswer": "A circle of radius $5\\text{ cm}$, centre $P$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q003",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["loci", "perpendicular bisector"],
    "questionText": "What is the locus of points equidistant from two fixed points $A$ and $B$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the construction.", "workingLatex": "\\text{equidistant from } A, B", "explanation": "Points the same distance from both lie on the perpendicular bisector.", "diagram": null }
      ],
      "finalAnswer": "The perpendicular bisector of $AB$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q004",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["loci", "angle bisector"],
    "questionText": "What is the locus of points equidistant from two intersecting straight lines?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the construction.", "workingLatex": "\\text{equidistant from two lines}", "explanation": "Such points lie on the bisector of the angle between the lines.", "diagram": null }
      ],
      "finalAnswer": "The angle bisector"
    }
  },
  {
    "id": "gcse.geometry.constructions.q005",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "text",
    "tags": ["constructions", "tools"],
    "questionText": "Which two instruments are used for accurate ruler-and-compass constructions?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall.", "workingLatex": "\\text{compasses + straightedge}", "explanation": "Constructions use a pair of compasses and a straightedge (ruler).", "diagram": null }
      ],
      "finalAnswer": "A pair of compasses and a straightedge (ruler)"
    }
  },
  {
    "id": "gcse.geometry.constructions.q006",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["perpendicular bisector"],
    "questionText": "A perpendicular bisector divides a line segment into how many equal parts?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall.", "workingLatex": "\\text{bisect} = 2", "explanation": "To bisect means to cut into two equal parts.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q007",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["angle bisector"],
    "questionText": "An angle bisector divides an angle into how many equal parts?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall.", "workingLatex": "\\text{bisect} = 2", "explanation": "An angle bisector splits the angle into two equal parts.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q008",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["angle bisector", "value"],
    "questionText": "An angle of $80^\\circ$ is bisected. What is the size of each part?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Halve the angle.", "workingLatex": "80 \\div 2 = 40", "explanation": "Bisecting divides the angle in two.", "diagram": null }
      ],
      "finalAnswer": "$40^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q009",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["loci", "line"],
    "questionText": "What is the locus of points a fixed distance from a long straight line (on both sides)?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Picture a fixed distance either side.", "workingLatex": "\\text{two parallel lines}", "explanation": "Points a set distance from the line lie on two lines, one each side.", "diagram": null }
      ],
      "finalAnswer": "Two lines parallel to the given line, one each side"
    }
  },
  {
    "id": "gcse.geometry.constructions.q010",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["angle bisector", "value"],
    "questionText": "An angle of $130^\\circ$ is bisected. What is the size of each part?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Halve the angle.", "workingLatex": "130 \\div 2 = 65", "explanation": "Bisecting divides the angle in two.", "diagram": null }
      ],
      "finalAnswer": "$65^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q011",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["constructions", "angle"],
    "questionText": "Which construction, using an equilateral triangle, produces an angle of $60^\\circ$?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall the property.", "workingLatex": "\\text{equilateral} \\to 60^\\circ", "explanation": "Each angle of an equilateral triangle is $60^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "Constructing an equilateral triangle"
    }
  },
  {
    "id": "gcse.geometry.constructions.q012",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["constructions", "angle"],
    "questionText": "A $60^\\circ$ angle is constructed and then bisected. What angle is produced?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Bisect $60^\\circ$.", "workingLatex": "60 \\div 2 = 30", "explanation": "Bisecting halves the angle.", "diagram": null }
      ],
      "finalAnswer": "$30^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q013",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["constructions", "angle"],
    "questionText": "A $90^\\circ$ angle is bisected. What angle is produced?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Bisect $90^\\circ$.", "workingLatex": "90 \\div 2 = 45", "explanation": "Bisecting a right angle gives $45^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$45^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q014",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["loci", "region"],
    "questionText": "Describe the locus of points that are less than $4\\text{ cm}$ from a point $O$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret 'less than'.", "workingLatex": "d < 4", "explanation": "All points inside the circle of radius $4$.", "diagram": null }
      ],
      "finalAnswer": "The region inside a circle of radius $4\\text{ cm}$ centred at $O$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q015",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["loci", "perpendicular bisector"],
    "questionText": "A point is equidistant from towns $A$ and $B$. On which line must it lie?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall.", "workingLatex": "\\text{equidistant} \\to \\text{perp. bisector}", "explanation": "Equal distance from two points means the perpendicular bisector.", "diagram": null }
      ],
      "finalAnswer": "The perpendicular bisector of $AB$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q016",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["constructions", "angle"],
    "questionText": "A $120^\\circ$ angle is bisected. What angle is produced?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Bisect $120^\\circ$.", "workingLatex": "120 \\div 2 = 60", "explanation": "Bisecting halves the angle.", "diagram": null }
      ],
      "finalAnswer": "$60^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q017",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["loci", "circle"],
    "questionText": "Describe the locus of a dog tied to a post by a $3\\text{ m}$ lead in an open field.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the shape.", "workingLatex": "\\text{circle, } r = 3", "explanation": "The lead length is the maximum distance from the post.", "diagram": null }
      ],
      "finalAnswer": "A circular region of radius $3\\text{ m}$ around the post"
    }
  },
  {
    "id": "gcse.geometry.constructions.q018",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["constructions", "perpendicular"],
    "questionText": "What is the name of the line that meets another line at $90^\\circ$ and passes through its midpoint?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Combine both conditions.", "workingLatex": "90^\\circ + \\text{midpoint}", "explanation": "A perpendicular line through the midpoint is the perpendicular bisector.", "diagram": null }
      ],
      "finalAnswer": "The perpendicular bisector"
    }
  },
  {
    "id": "gcse.geometry.constructions.q019",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["angle bisector", "value"],
    "questionText": "An angle of $150^\\circ$ is bisected. What is the size of each part?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Halve the angle.", "workingLatex": "150 \\div 2 = 75", "explanation": "Bisecting divides the angle in two.", "diagram": null }
      ],
      "finalAnswer": "$75^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q020",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "text",
    "tags": ["loci", "region"],
    "questionText": "Describe the locus of points that are more than $2\\text{ cm}$ from a point $O$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret 'more than'.", "workingLatex": "d > 2", "explanation": "All points outside the circle of radius $2$.", "diagram": null }
      ],
      "finalAnswer": "The region outside a circle of radius $2\\text{ cm}$ centred at $O$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q021",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["loci", "circle", "area"],
    "questionText": "A point moves so that it is always $5\\text{ cm}$ from a fixed point. Find the area enclosed by this locus. Give your answer in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the locus.", "workingLatex": "\\text{circle, } r = 5", "explanation": "The locus is a circle of radius $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the area formula.", "workingLatex": "\\pi r^2 = \\pi (5)^2", "explanation": "Area of a circle is $\\pi r^2$.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate.", "workingLatex": "= 25\\pi", "explanation": "Square the radius.", "diagram": null }
      ],
      "finalAnswer": "$25\\pi \\text{ cm}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q022",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "combined"],
    "questionText": "Describe the locus of points that are between $2\\text{ cm}$ and $5\\text{ cm}$ from a point $O$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Inner boundary.", "workingLatex": "d > 2", "explanation": "Outside the circle of radius $2$.", "diagram": null },
        { "stepNumber": 2, "description": "Outer boundary.", "workingLatex": "d < 5", "explanation": "Inside the circle of radius $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Combine.", "workingLatex": "2 < d < 5", "explanation": "The region is a ring (annulus).", "diagram": null }
      ],
      "finalAnswer": "A ring (annulus) between circles of radius $2\\text{ cm}$ and $5\\text{ cm}$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q023",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["loci", "annulus", "area"],
    "questionText": "Find the area of the ring between circles of radius $2\\text{ cm}$ and $5\\text{ cm}$ with the same centre. Give your answer in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Outer area.", "workingLatex": "\\pi (5)^2 = 25\\pi", "explanation": "Area of the larger circle.", "diagram": null },
        { "stepNumber": 2, "description": "Inner area.", "workingLatex": "\\pi (2)^2 = 4\\pi", "explanation": "Area of the smaller circle.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract.", "workingLatex": "25\\pi - 4\\pi = 21\\pi", "explanation": "The ring is the difference of the two areas.", "diagram": null }
      ],
      "finalAnswer": "$21\\pi \\text{ cm}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q024",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "two lines"],
    "questionText": "Two straight roads cross. Describe the locus of points equidistant from both roads.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall equidistant from two lines.", "workingLatex": "\\text{angle bisectors}", "explanation": "Equal distance from two crossing lines lies on the angle bisectors.", "diagram": null },
        { "stepNumber": 2, "description": "Count them.", "workingLatex": "\\text{two perpendicular bisector lines}", "explanation": "Crossing lines create two pairs of angles, giving two bisector lines.", "diagram": null }
      ],
      "finalAnswer": "The two angle bisectors of the angles between the roads"
    }
  },
  {
    "id": "gcse.geometry.constructions.q025",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "combined"],
    "questionText": "A point must be nearer to $A$ than to $B$ and within $6\\text{ cm}$ of $A$. Describe the region.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "First condition.", "workingLatex": "\\text{nearer } A \\to \\text{one side of perp. bisector}", "explanation": "Nearer to $A$ means the side of the perpendicular bisector of $AB$ containing $A$.", "diagram": null },
        { "stepNumber": 2, "description": "Second condition.", "workingLatex": "\\text{within } 6 \\to \\text{inside circle}", "explanation": "Within $6\\text{ cm}$ of $A$ is inside a circle radius $6$ centred at $A$.", "diagram": null },
        { "stepNumber": 3, "description": "Combine.", "workingLatex": "\\text{overlap}", "explanation": "The region is where both conditions hold.", "diagram": null }
      ],
      "finalAnswer": "The part of the circle (radius $6\\text{ cm}$, centre $A$) on $A$'s side of the perpendicular bisector of $AB$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q026",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "line segment"],
    "questionText": "Describe the locus of points exactly $3\\text{ cm}$ from a line segment $AB$ (including the ends).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Along the sides.", "workingLatex": "\\text{two parallel segments}", "explanation": "Two straight parts run parallel to $AB$, $3\\text{ cm}$ each side.", "diagram": null },
        { "stepNumber": 2, "description": "At the ends.", "workingLatex": "\\text{two semicircles}", "explanation": "Around each endpoint the locus curves as a semicircle of radius $3$.", "diagram": null }
      ],
      "finalAnswer": "Two parallel lines $3\\text{ cm}$ each side, joined by semicircles of radius $3\\text{ cm}$ at each end"
    }
  },
  {
    "id": "gcse.geometry.constructions.q027",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["loci", "circle", "circumference"],
    "questionText": "A point moves so that it is always $7\\text{ cm}$ from a fixed point. Find the total length (circumference) of this locus. Give your answer in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the locus.", "workingLatex": "\\text{circle, } r = 7", "explanation": "The locus is a circle of radius $7$.", "diagram": null },
        { "stepNumber": 2, "description": "Use the circumference formula.", "workingLatex": "2\\pi r = 2\\pi(7)", "explanation": "Circumference is $2\\pi r$.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate.", "workingLatex": "= 14\\pi", "explanation": "Multiply out.", "diagram": null }
      ],
      "finalAnswer": "$14\\pi \\text{ cm}$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q028",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "concentric"],
    "questionText": "A point moves so that it is always $2\\text{ cm}$ from the nearest part of a circle of radius $3\\text{ cm}$. Describe the locus.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Outside the circle.", "workingLatex": "3 + 2 = 5", "explanation": "Outside, the locus is a circle of radius $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Inside the circle.", "workingLatex": "3 - 2 = 1", "explanation": "Inside, the locus is a circle of radius $1$.", "diagram": null }
      ],
      "finalAnswer": "Two concentric circles of radius $1\\text{ cm}$ and $5\\text{ cm}$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q029",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["constructions", "angle"],
    "questionText": "By constructing and bisecting angles, what is the smallest whole-degree multiple of $15^\\circ$ you can make by bisecting $60^\\circ$ twice?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Bisect once.", "workingLatex": "60 \\div 2 = 30", "explanation": "First bisection.", "diagram": null },
        { "stepNumber": 2, "description": "Bisect again.", "workingLatex": "30 \\div 2 = 15", "explanation": "Second bisection.", "diagram": null }
      ],
      "finalAnswer": "$15^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q030",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["loci", "scale", "map"],
    "questionText": "On a map with scale $1\\text{ cm} : 2\\text{ km}$, a lighthouse can be seen within $10\\text{ km}$. What radius circle should be drawn on the map to show this?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert using the scale.", "workingLatex": "10 \\div 2 = 5", "explanation": "Each $2\\text{ km}$ is $1\\text{ cm}$ on the map.", "diagram": null }
      ],
      "finalAnswer": "A circle of radius $5\\text{ cm}$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q031",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "combined"],
    "questionText": "A treasure is more than $3\\text{ cm}$ from a point $P$ and less than $3\\text{ cm}$ from a point $Q$. Describe how to find the region on a diagram.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Circle about $P$.", "workingLatex": "\\text{outside circle } r=3 \\text{ at } P", "explanation": "More than $3\\text{ cm}$ from $P$ is outside its circle.", "diagram": null },
        { "stepNumber": 2, "description": "Circle about $Q$.", "workingLatex": "\\text{inside circle } r=3 \\text{ at } Q", "explanation": "Less than $3\\text{ cm}$ from $Q$ is inside its circle.", "diagram": null },
        { "stepNumber": 3, "description": "Overlap.", "workingLatex": "\\text{region in both}", "explanation": "Shade where the two conditions overlap.", "diagram": null }
      ],
      "finalAnswer": "Inside the circle about $Q$ but outside the circle about $P$ (both radius $3\\text{ cm}$)"
    }
  },
  {
    "id": "gcse.geometry.constructions.q032",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["loci", "semicircle", "area"],
    "questionText": "A dog is tied to a point on a very long straight wall by a $4\\text{ m}$ lead. Find the area it can reach. Give your answer in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "The wall blocks half the circle.", "workingLatex": "\\tfrac{1}{2}\\pi r^2", "explanation": "The dog can only reach the semicircle away from the wall.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $r = 4$.", "workingLatex": "\\tfrac{1}{2}\\pi (4)^2 = 8\\pi", "explanation": "Half of $16\\pi$.", "diagram": null }
      ],
      "finalAnswer": "$8\\pi \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q033",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["constructions", "perpendicular from point"],
    "questionText": "What construction finds the shortest distance from a point to a straight line?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall.", "workingLatex": "\\text{perpendicular from the point}", "explanation": "The shortest distance is along the perpendicular to the line.", "diagram": null }
      ],
      "finalAnswer": "The perpendicular from the point to the line"
    }
  },
  {
    "id": "gcse.geometry.constructions.q034",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["loci", "scale", "map"],
    "questionText": "On a map with scale $1\\text{ cm} : 50\\text{ m}$, a sprinkler covers everything within $150\\text{ m}$. What radius circle represents this on the map?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert using the scale.", "workingLatex": "150 \\div 50 = 3", "explanation": "Each $50\\text{ m}$ is $1\\text{ cm}$.", "diagram": null }
      ],
      "finalAnswer": "A circle of radius $3\\text{ cm}$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q035",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "region"],
    "questionText": "Describe the locus of points inside a rectangular room that are equidistant from the two longer walls.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Equidistant from two parallel walls.", "workingLatex": "\\text{midway line}", "explanation": "The set of points halfway between two parallel lines is a parallel line midway between them.", "diagram": null }
      ],
      "finalAnswer": "A straight line running midway between the two longer walls"
    }
  },
  {
    "id": "gcse.geometry.constructions.q036",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["loci", "semicircle", "perimeter"],
    "questionText": "The region a goat can reach when tied to a wall by a $6\\text{ m}$ lead is a semicircle. Find the curved length of its boundary. Give your answer in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Half the circumference.", "workingLatex": "\\tfrac{1}{2}\\times 2\\pi r = \\pi r", "explanation": "The curved part of a semicircle is half the full circle.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $r = 6$.", "workingLatex": "\\pi(6) = 6\\pi", "explanation": "Multiply.", "diagram": null }
      ],
      "finalAnswer": "$6\\pi \\text{ m}$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q037",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "two points"],
    "questionText": "A point is exactly $4\\text{ cm}$ from $A$ and exactly $4\\text{ cm}$ from $B$, where $AB = 6\\text{ cm}$. How many such points are there?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Draw two circles.", "workingLatex": "r = 4 \\text{ about } A \\text{ and } B", "explanation": "Each condition is a circle of radius $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Count intersections.", "workingLatex": "AB = 6 < 4 + 4", "explanation": "Since the circles overlap, they cross at two points.", "diagram": null }
      ],
      "finalAnswer": "$2$ points"
    }
  },
  {
    "id": "gcse.geometry.constructions.q038",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["constructions", "triangle"],
    "questionText": "To construct a triangle given all three side lengths, which instrument is essential besides a ruler, and why?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the tool.", "workingLatex": "\\text{compasses}", "explanation": "Compasses draw arcs of the two remaining side lengths.", "diagram": null },
        { "stepNumber": 2, "description": "Explain.", "workingLatex": "\\text{arcs cross at third vertex}", "explanation": "Where the two arcs meet is the third vertex.", "diagram": null }
      ],
      "finalAnswer": "Compasses — to mark arcs of the other two sides that cross at the third vertex"
    }
  },
  {
    "id": "gcse.geometry.constructions.q039",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["loci", "quarter circle", "area"],
    "questionText": "A goat is tied to the outside corner of a fence so it can graze a quarter of a circle of radius $4\\text{ m}$. Find the grazing area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Quarter of a circle.", "workingLatex": "\\tfrac{1}{4}\\pi r^2", "explanation": "The fence limits it to a quarter turn.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $r = 4$.", "workingLatex": "\\tfrac{1}{4}\\pi (4)^2 = 4\\pi", "explanation": "A quarter of $16\\pi$.", "diagram": null }
      ],
      "finalAnswer": "$4\\pi \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q040",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "combined"],
    "questionText": "A buoy must be equidistant from two lighthouses $A$ and $B$, and also within $10\\text{ km}$ of $A$. Describe how the position is found.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Equidistant condition.", "workingLatex": "\\text{perp. bisector of } AB", "explanation": "Equidistant from $A$ and $B$ is the perpendicular bisector.", "diagram": null },
        { "stepNumber": 2, "description": "Distance condition.", "workingLatex": "\\text{inside circle } r=10 \\text{ at } A", "explanation": "Within $10\\text{ km}$ of $A$ is inside that circle.", "diagram": null },
        { "stepNumber": 3, "description": "Combine.", "workingLatex": "\\text{part of bisector inside circle}", "explanation": "The buoy lies on the section of the bisector inside the circle.", "diagram": null }
      ],
      "finalAnswer": "On the part of the perpendicular bisector of $AB$ that lies inside the circle of radius $10\\text{ km}$ about $A$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q041",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["loci", "circle", "area", "numeric"],
    "questionText": "A point moves so that it stays $10\\text{ m}$ from a fixed post. Find the area enclosed, using $\\pi = 3.14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Area formula.", "workingLatex": "\\pi r^2", "explanation": "The locus is a circle of radius $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute.", "workingLatex": "3.14 \\times 10^2 = 314", "explanation": "Use $\\pi = 3.14$.", "diagram": null }
      ],
      "finalAnswer": "$314 \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q042",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "region"],
    "questionText": "Describe the locus of points that are within $5\\text{ m}$ of a point $P$ and on the same side of a wall as $P$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Distance condition.", "workingLatex": "\\text{circle } r = 5", "explanation": "Within $5\\text{ m}$ of $P$ is inside a circle.", "diagram": null },
        { "stepNumber": 2, "description": "Wall condition.", "workingLatex": "\\text{keep } P\\text{'s side}", "explanation": "Cut off the part beyond the wall.", "diagram": null }
      ],
      "finalAnswer": "The part of the circle (radius $5\\text{ m}$, centre $P$) on $P$'s side of the wall"
    }
  },
  {
    "id": "gcse.geometry.constructions.q043",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["constructions", "angle"],
    "questionText": "Starting from a constructed $90^\\circ$ angle and bisecting twice, what angle is obtained?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "First bisection.", "workingLatex": "90 \\div 2 = 45", "explanation": "Halve the right angle.", "diagram": null },
        { "stepNumber": 2, "description": "Second bisection.", "workingLatex": "45 \\div 2 = 22.5", "explanation": "Halve again.", "diagram": null }
      ],
      "finalAnswer": "$22.5^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q044",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["loci", "three-quarter circle", "area"],
    "questionText": "A goat is tied to the outside corner of a square shed by a $6\\text{ m}$ rope. It can graze three-quarters of a full circle. Find the grazing area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Three-quarters of a circle.", "workingLatex": "\\tfrac{3}{4}\\pi r^2", "explanation": "The shed blocks one quarter, leaving three quarters.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute $r = 6$.", "workingLatex": "\\tfrac{3}{4}\\pi (6)^2 = 27\\pi", "explanation": "Three quarters of $36\\pi$.", "diagram": null }
      ],
      "finalAnswer": "$27\\pi \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q045",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "path"],
    "questionText": "A coin rolls along the inside of a straight track staying $1\\text{ cm}$ from one straight edge. Describe its path.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Fixed distance from a line.", "workingLatex": "d = 1", "explanation": "A constant distance from a straight edge is a parallel line.", "diagram": null }
      ],
      "finalAnswer": "A straight line parallel to the edge, $1\\text{ cm}$ away"
    }
  },
  {
    "id": "gcse.geometry.constructions.q046",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "equidistant three"],
    "questionText": "Which point is equidistant from all three vertices of a triangle, and how is it found?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the point.", "workingLatex": "\\text{circumcentre}", "explanation": "The point equidistant from the vertices is the circumcentre.", "diagram": null },
        { "stepNumber": 2, "description": "Find it.", "workingLatex": "\\text{perp. bisectors of the sides}", "explanation": "It is where the perpendicular bisectors of the sides meet.", "diagram": null }
      ],
      "finalAnswer": "The circumcentre — where the perpendicular bisectors of the sides meet"
    }
  },
  {
    "id": "gcse.geometry.constructions.q047",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "equidistant sides"],
    "questionText": "Which point is equidistant from all three sides of a triangle, and how is it found?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Name the point.", "workingLatex": "\\text{incentre}", "explanation": "The point equidistant from the sides is the incentre.", "diagram": null },
        { "stepNumber": 2, "description": "Find it.", "workingLatex": "\\text{angle bisectors}", "explanation": "It is where the angle bisectors meet.", "diagram": null }
      ],
      "finalAnswer": "The incentre — where the angle bisectors meet"
    }
  },
  {
    "id": "gcse.geometry.constructions.q048",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["loci", "scale", "annulus"],
    "questionText": "On a map with scale $1\\text{ cm} : 100\\text{ m}$, a signal is received between $200\\text{ m}$ and $500\\text{ m}$ from a mast. What two radii should be drawn on the map?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Inner radius.", "workingLatex": "200 \\div 100 = 2", "explanation": "Convert $200\\text{ m}$ using the scale.", "diagram": null },
        { "stepNumber": 2, "description": "Outer radius.", "workingLatex": "500 \\div 100 = 5", "explanation": "Convert $500\\text{ m}$ using the scale.", "diagram": null }
      ],
      "finalAnswer": "Circles of radius $2\\text{ cm}$ and $5\\text{ cm}$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q049",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "text",
    "tags": ["loci", "combined"],
    "questionText": "A point is within $4\\text{ cm}$ of $P$ and closer to line $\\ell_1$ than to line $\\ell_2$, where $\\ell_1$ and $\\ell_2$ cross at $P$. Describe the region.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Distance condition.", "workingLatex": "\\text{inside circle } r=4", "explanation": "Within $4\\text{ cm}$ of $P$.", "diagram": null },
        { "stepNumber": 2, "description": "Nearer condition.", "workingLatex": "\\text{one side of angle bisector}", "explanation": "Closer to $\\ell_1$ is bounded by the angle bisector.", "diagram": null }
      ],
      "finalAnswer": "The part of the circle (radius $4\\text{ cm}$, centre $P$) on the $\\ell_1$ side of the angle bisector"
    }
  },
  {
    "id": "gcse.geometry.constructions.q050",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["loci", "semicircle", "area", "numeric"],
    "questionText": "A sprinkler by a wall waters a semicircle of radius $8\\text{ m}$. Find the watered area, using $\\pi = 3.14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Semicircle area.", "workingLatex": "\\tfrac{1}{2}\\pi r^2", "explanation": "Half a circle of radius $8$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute.", "workingLatex": "\\tfrac{1}{2}\\times 3.14 \\times 64 = 100.48", "explanation": "Compute half of $3.14 \\times 64$.", "diagram": null }
      ],
      "finalAnswer": "$100.48 \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q051",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["loci", "area", "combined"],
    "questionText": "A goat is tied to the corner of a square shed of side $2\\text{ m}$ by a $5\\text{ m}$ rope. It can reach three-quarters of a circle of radius $5\\text{ m}$, plus two quarter-circles of radius $3\\text{ m}$ round the adjacent corners. Find the total grazing area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Main region.", "workingLatex": "\\tfrac{3}{4}\\pi (5)^2 = \\tfrac{75}{4}\\pi", "explanation": "Three-quarters of a circle radius $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Rope left at each adjacent corner.", "workingLatex": "5 - 2 = 3", "explanation": "The rope wraps the $2\\text{ m}$ wall, leaving $3\\text{ m}$.", "diagram": null },
        { "stepNumber": 3, "description": "Two quarter-circles.", "workingLatex": "2 \\times \\tfrac{1}{4}\\pi (3)^2 = \\tfrac{9}{2}\\pi", "explanation": "One quarter circle round each adjacent corner.", "diagram": null },
        { "stepNumber": 4, "description": "Add.", "workingLatex": "\\tfrac{75}{4}\\pi + \\tfrac{18}{4}\\pi = \\tfrac{93}{4}\\pi", "explanation": "Combine with a common denominator.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{93}{4}\\pi \\text{ m}^2 = 23.25\\pi \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q052",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["loci", "area", "numeric"],
    "questionText": "A dog tied to a corner of a building can graze three-quarters of a circle of radius $10\\text{ m}$. Find the grazing area, using $\\pi = 3.14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Three-quarter circle.", "workingLatex": "\\tfrac{3}{4}\\pi r^2", "explanation": "The building blocks one quarter.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute.", "workingLatex": "\\tfrac{3}{4}\\times 3.14 \\times 100 = 235.5", "explanation": "Three quarters of $314$.", "diagram": null }
      ],
      "finalAnswer": "$235.5 \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q053",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["loci", "combined", "three conditions"],
    "questionText": "A point must be: within $6\\text{ cm}$ of $A$, nearer to $A$ than $B$, and more than $3\\text{ cm}$ from $A$. Describe the region.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Within $6\\text{ cm}$.", "workingLatex": "\\text{inside circle } r=6", "explanation": "Inside the outer circle about $A$.", "diagram": null },
        { "stepNumber": 2, "description": "More than $3\\text{ cm}$.", "workingLatex": "\\text{outside circle } r=3", "explanation": "Outside the inner circle about $A$; this gives a ring.", "diagram": null },
        { "stepNumber": 3, "description": "Nearer to $A$.", "workingLatex": "\\text{side of perp. bisector}", "explanation": "On $A$'s side of the perpendicular bisector of $AB$.", "diagram": null },
        { "stepNumber": 4, "description": "Combine.", "workingLatex": "\\text{part of ring on } A \\text{'s side}", "explanation": "Take the part of the ring on $A$'s side of the bisector.", "diagram": null }
      ],
      "finalAnswer": "The part of the ring between radii $3\\text{ cm}$ and $6\\text{ cm}$ (about $A$) that lies on $A$'s side of the perpendicular bisector of $AB$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q054",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["loci", "area", "combined"],
    "questionText": "A horse is tied to a corner of a $4\\text{ m}$ by $4\\text{ m}$ barn by a $6\\text{ m}$ rope. It grazes three-quarters of a circle radius $6\\text{ m}$, plus two quarter-circles of radius $2\\text{ m}$ round the adjacent corners. Find the total area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Main region.", "workingLatex": "\\tfrac{3}{4}\\pi (6)^2 = 27\\pi", "explanation": "Three-quarters of a circle radius $6$.", "diagram": null },
        { "stepNumber": 2, "description": "Rope at adjacent corners.", "workingLatex": "6 - 4 = 2", "explanation": "The rope wraps a $4\\text{ m}$ wall, leaving $2\\text{ m}$.", "diagram": null },
        { "stepNumber": 3, "description": "Two quarter-circles.", "workingLatex": "2 \\times \\tfrac{1}{4}\\pi (2)^2 = 2\\pi", "explanation": "One quarter circle at each adjacent corner.", "diagram": null },
        { "stepNumber": 4, "description": "Add.", "workingLatex": "27\\pi + 2\\pi = 29\\pi", "explanation": "Combine the areas.", "diagram": null }
      ],
      "finalAnswer": "$29\\pi \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q055",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "value",
    "tags": ["loci", "scale", "area"],
    "questionText": "On a map with scale $1\\text{ cm} : 2\\text{ km}$, a circle of radius $4\\text{ cm}$ shows a coverage area. Find the real area covered in km², using $\\pi = 3.14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert the radius.", "workingLatex": "4 \\times 2 = 8 \\text{ km}", "explanation": "Each map centimetre is $2\\text{ km}$.", "diagram": null },
        { "stepNumber": 2, "description": "Real area.", "workingLatex": "3.14 \\times 8^2 = 200.96", "explanation": "Area of the real circle, radius $8\\text{ km}$.", "diagram": null }
      ],
      "finalAnswer": "$200.96 \\text{ km}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q056",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["loci", "combined", "bearing"],
    "questionText": "A ship must stay more than $3\\text{ km}$ from a port $P$ and on a bearing between $000^\\circ$ and $090^\\circ$ from $P$. Describe the region.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Distance condition.", "workingLatex": "\\text{outside circle } r=3", "explanation": "More than $3\\text{ km}$ from $P$.", "diagram": null },
        { "stepNumber": 2, "description": "Bearing condition.", "workingLatex": "000^\\circ \\text{ to } 090^\\circ", "explanation": "This is the north-east quadrant from $P$.", "diagram": null },
        { "stepNumber": 3, "description": "Combine.", "workingLatex": "\\text{quadrant outside circle}", "explanation": "Take the north-east quarter beyond the circle.", "diagram": null }
      ],
      "finalAnswer": "The north-east quarter (between north and east) that lies outside the circle of radius $3\\text{ km}$ about $P$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q057",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["loci", "area", "difference"],
    "questionText": "A watered region is a full circle of radius $9\\text{ m}$ with a circular dry patch of radius $3\\text{ m}$ removed from the centre. Find the watered area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Outer area.", "workingLatex": "\\pi (9)^2 = 81\\pi", "explanation": "Area of the full circle.", "diagram": null },
        { "stepNumber": 2, "description": "Dry patch.", "workingLatex": "\\pi (3)^2 = 9\\pi", "explanation": "Area of the removed circle.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract.", "workingLatex": "81\\pi - 9\\pi = 72\\pi", "explanation": "Watered area is the difference.", "diagram": null }
      ],
      "finalAnswer": "$72\\pi \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q058",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["loci", "combined"],
    "questionText": "Two points $A$ and $B$ are $8\\text{ cm}$ apart. Describe the locus of points that are exactly $5\\text{ cm}$ from $A$ and exactly $5\\text{ cm}$ from $B$, and state how many there are.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Two circles.", "workingLatex": "r = 5 \\text{ about } A \\text{ and } B", "explanation": "Each condition is a circle of radius $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Check overlap.", "workingLatex": "8 < 5 + 5", "explanation": "Since $8 < 10$, the circles intersect.", "diagram": null },
        { "stepNumber": 3, "description": "Count.", "workingLatex": "2 \\text{ points}", "explanation": "Two overlapping circles meet at two points.", "diagram": null }
      ],
      "finalAnswer": "The two intersection points of the circles — $2$ points"
    }
  },
  {
    "id": "gcse.geometry.constructions.q059",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["loci", "area", "combined"],
    "questionText": "A dog is tied to the midpoint of one wall of a very long fence by a $4\\text{ m}$ lead. It can reach a semicircle of radius $4\\text{ m}$. Find both the area and the perimeter of the region, in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Area of semicircle.", "workingLatex": "\\tfrac{1}{2}\\pi (4)^2 = 8\\pi", "explanation": "Half a circle of radius $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Curved part of perimeter.", "workingLatex": "\\tfrac{1}{2}\\times 2\\pi(4) = 4\\pi", "explanation": "Half the circumference.", "diagram": null },
        { "stepNumber": 3, "description": "Straight part.", "workingLatex": "2 \\times 4 = 8", "explanation": "The diameter along the fence is $8\\text{ m}$.", "diagram": null },
        { "stepNumber": 4, "description": "Total perimeter.", "workingLatex": "4\\pi + 8", "explanation": "Add the curve and the straight edge.", "diagram": null }
      ],
      "finalAnswer": "Area $= 8\\pi \\text{ m}^2$; perimeter $= (4\\pi + 8)\\text{ m}$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q060",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["loci", "area", "sector"],
    "questionText": "A security light sweeps a sector of angle $120^\\circ$ and radius $12\\text{ m}$. Find the illuminated area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Sector fraction.", "workingLatex": "\\dfrac{120}{360} = \\dfrac{1}{3}", "explanation": "The sector is one third of a full circle.", "diagram": null },
        { "stepNumber": 2, "description": "Sector area.", "workingLatex": "\\tfrac{1}{3}\\pi (12)^2", "explanation": "Take a third of the circle's area.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate.", "workingLatex": "\\tfrac{1}{3}\\times 144\\pi = 48\\pi", "explanation": "A third of $144\\pi$.", "diagram": null }
      ],
      "finalAnswer": "$48\\pi \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q061",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["loci", "combined"],
    "questionText": "Three towns $A$, $B$ and $C$ form a triangle. A phone mast must be equidistant from all three. Describe how to locate it.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Equidistant from $A$ and $B$.", "workingLatex": "\\text{perp. bisector of } AB", "explanation": "Draw the perpendicular bisector of $AB$.", "diagram": null },
        { "stepNumber": 2, "description": "Equidistant from $B$ and $C$.", "workingLatex": "\\text{perp. bisector of } BC", "explanation": "Draw the perpendicular bisector of $BC$.", "diagram": null },
        { "stepNumber": 3, "description": "Intersect.", "workingLatex": "\\text{circumcentre}", "explanation": "Where the two bisectors cross is equidistant from all three towns.", "diagram": null }
      ],
      "finalAnswer": "At the circumcentre — the intersection of the perpendicular bisectors of the sides"
    }
  },
  {
    "id": "gcse.geometry.constructions.q062",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["loci", "area", "combined", "numeric"],
    "questionText": "A goat tied to the corner of a shed grazes three-quarters of a circle of radius $8\\text{ m}$. Find the area to the nearest whole number, using $\\pi = 3.14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Three-quarter circle.", "workingLatex": "\\tfrac{3}{4}\\pi r^2", "explanation": "The shed blocks one quarter.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute.", "workingLatex": "\\tfrac{3}{4}\\times 3.14 \\times 64 = 150.72", "explanation": "Three quarters of $3.14 \\times 64$.", "diagram": null },
        { "stepNumber": 3, "description": "Round.", "workingLatex": "\\approx 151", "explanation": "To the nearest whole number.", "diagram": null }
      ],
      "finalAnswer": "$151 \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q063",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["loci", "combined"],
    "questionText": "A robot vacuum stays at least $30\\text{ cm}$ from each of two walls that meet at a right-angled corner. Describe its possible region within the corner.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "First wall.", "workingLatex": "d \\ge 30 \\text{ from wall 1}", "explanation": "Stay beyond a line $30\\text{ cm}$ from the first wall.", "diagram": null },
        { "stepNumber": 2, "description": "Second wall.", "workingLatex": "d \\ge 30 \\text{ from wall 2}", "explanation": "Stay beyond a line $30\\text{ cm}$ from the second wall.", "diagram": null },
        { "stepNumber": 3, "description": "Combine.", "workingLatex": "\\text{inner corner region}", "explanation": "Both boundaries are parallel to the walls, giving a smaller corner region.", "diagram": null }
      ],
      "finalAnswer": "The region beyond two lines each $30\\text{ cm}$ from a wall — a corner set $30\\text{ cm}$ in from both walls"
    }
  },
  {
    "id": "gcse.geometry.constructions.q064",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["loci", "area", "combined"],
    "questionText": "A dog is tied to a corner of a $3\\text{ m}$ by $3\\text{ m}$ kennel by a $4\\text{ m}$ rope. It grazes three-quarters of a circle radius $4\\text{ m}$ plus two quarter-circles of radius $1\\text{ m}$. Find the total area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Main region.", "workingLatex": "\\tfrac{3}{4}\\pi (4)^2 = 12\\pi", "explanation": "Three-quarters of a circle radius $4$.", "diagram": null },
        { "stepNumber": 2, "description": "Rope at adjacent corners.", "workingLatex": "4 - 3 = 1", "explanation": "The rope wraps a $3\\text{ m}$ wall, leaving $1\\text{ m}$.", "diagram": null },
        { "stepNumber": 3, "description": "Two quarter-circles.", "workingLatex": "2 \\times \\tfrac{1}{4}\\pi (1)^2 = \\tfrac{1}{2}\\pi", "explanation": "One quarter circle at each adjacent corner.", "diagram": null },
        { "stepNumber": 4, "description": "Add.", "workingLatex": "12\\pi + \\tfrac{1}{2}\\pi = \\tfrac{25}{2}\\pi", "explanation": "Combine the areas.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{25}{2}\\pi \\text{ m}^2 = 12.5\\pi \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q065",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["loci", "area", "sector", "numeric"],
    "questionText": "A radar sweeps a sector of angle $90^\\circ$ and radius $20\\text{ km}$. Find the swept area, using $\\pi = 3.14$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Sector fraction.", "workingLatex": "\\dfrac{90}{360} = \\dfrac{1}{4}", "explanation": "A quarter of a full circle.", "diagram": null },
        { "stepNumber": 2, "description": "Sector area.", "workingLatex": "\\tfrac{1}{4}\\times 3.14 \\times 20^2", "explanation": "A quarter of the circle's area.", "diagram": null },
        { "stepNumber": 3, "description": "Evaluate.", "workingLatex": "\\tfrac{1}{4}\\times 1256 = 314", "explanation": "A quarter of $1256$.", "diagram": null }
      ],
      "finalAnswer": "$314 \\text{ km}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q066",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "text",
    "tags": ["loci", "combined"],
    "questionText": "A point is equidistant from two lines that meet at $60^\\circ$ and lies within $5\\text{ cm}$ of their intersection. Describe the locus.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Equidistant from two lines.", "workingLatex": "\\text{angle bisector}", "explanation": "Equal distance from both lines lies on the angle bisector.", "diagram": null },
        { "stepNumber": 2, "description": "Distance condition.", "workingLatex": "d < 5", "explanation": "Within $5\\text{ cm}$ of the intersection.", "diagram": null },
        { "stepNumber": 3, "description": "Combine.", "workingLatex": "\\text{part of bisector}", "explanation": "Only the section of the bisector up to $5\\text{ cm}$ from the vertex.", "diagram": null }
      ],
      "finalAnswer": "The part of the angle bisector within $5\\text{ cm}$ of the intersection point"
    }
  },
  {
    "id": "gcse.geometry.constructions.q067",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["loci", "area", "combined"],
    "questionText": "A watered region is a semicircle of radius $10\\text{ m}$ with a smaller semicircle of radius $4\\text{ m}$ removed (same straight edge). Find the watered area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Large semicircle.", "workingLatex": "\\tfrac{1}{2}\\pi (10)^2 = 50\\pi", "explanation": "Half a circle radius $10$.", "diagram": null },
        { "stepNumber": 2, "description": "Small semicircle.", "workingLatex": "\\tfrac{1}{2}\\pi (4)^2 = 8\\pi", "explanation": "Half a circle radius $4$.", "diagram": null },
        { "stepNumber": 3, "description": "Subtract.", "workingLatex": "50\\pi - 8\\pi = 42\\pi", "explanation": "Watered area is the difference.", "diagram": null }
      ],
      "finalAnswer": "$42\\pi \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q068",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["loci", "combined", "scale"],
    "questionText": "On a $1\\text{ cm} : 1\\text{ km}$ map, a boat must be within $5\\text{ km}$ of harbour $H$ and closer to coastguard $C$ than to $H$. Describe the region on the map.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Distance condition.", "workingLatex": "\\text{circle } r=5\\text{ cm about } H", "explanation": "Within $5\\text{ km}$ is a $5\\text{ cm}$ circle at this scale.", "diagram": null },
        { "stepNumber": 2, "description": "Nearer condition.", "workingLatex": "\\text{side of perp. bisector of } HC", "explanation": "Closer to $C$ is $C$'s side of the perpendicular bisector.", "diagram": null },
        { "stepNumber": 3, "description": "Combine.", "workingLatex": "\\text{overlap}", "explanation": "Take the part of the circle on $C$'s side of the bisector.", "diagram": null }
      ],
      "finalAnswer": "The part of the $5\\text{ cm}$ circle about $H$ that lies on $C$'s side of the perpendicular bisector of $HC$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q069",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["loci", "area", "combined"],
    "questionText": "A goat is tied to a corner of a $5\\text{ m}$ by $5\\text{ m}$ shed by a $7\\text{ m}$ rope. It grazes three-quarters of a circle radius $7\\text{ m}$ plus two quarter-circles of radius $2\\text{ m}$. Find the total area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Main region.", "workingLatex": "\\tfrac{3}{4}\\pi (7)^2 = \\tfrac{147}{4}\\pi", "explanation": "Three-quarters of a circle radius $7$.", "diagram": null },
        { "stepNumber": 2, "description": "Rope at adjacent corners.", "workingLatex": "7 - 5 = 2", "explanation": "The rope wraps a $5\\text{ m}$ wall, leaving $2\\text{ m}$.", "diagram": null },
        { "stepNumber": 3, "description": "Two quarter-circles.", "workingLatex": "2 \\times \\tfrac{1}{4}\\pi (2)^2 = 2\\pi", "explanation": "One quarter circle at each adjacent corner.", "diagram": null },
        { "stepNumber": 4, "description": "Add.", "workingLatex": "\\tfrac{147}{4}\\pi + 2\\pi = \\tfrac{155}{4}\\pi", "explanation": "Combine with a common denominator.", "diagram": null }
      ],
      "finalAnswer": "$\\dfrac{155}{4}\\pi \\text{ m}^2 = 38.75\\pi \\text{ m}^2$"
    }
  },
  {
    "id": "gcse.geometry.constructions.q070",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Constructions and loci",
    "subtopicId": "gcse.geometry.constructions",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "text",
    "tags": ["loci", "combined", "three conditions"],
    "questionText": "A point lies within a triangular field and must be equidistant from all three sides. Explain where it is and why.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Equidistant from two sides.", "workingLatex": "\\text{angle bisector}", "explanation": "Points equidistant from two sides lie on the bisector of the angle between them.", "diagram": null },
        { "stepNumber": 2, "description": "Repeat for another pair.", "workingLatex": "\\text{second angle bisector}", "explanation": "A second angle bisector gives equal distance from another pair of sides.", "diagram": null },
        { "stepNumber": 3, "description": "Intersect.", "workingLatex": "\\text{incentre}", "explanation": "Where the bisectors meet is equidistant from all three sides.", "diagram": null }
      ],
      "finalAnswer": "At the incentre — the intersection of the angle bisectors, equidistant from all three sides"
    }
  }
];
