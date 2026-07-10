import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.geometry.polygon-angles.q001",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["interior sum", "triangle"],
    "questionText": "What is the sum of the interior angles of a triangle?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall.", "workingLatex": "180", "explanation": "The interior angles of any triangle sum to $180^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$180^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q002",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["interior sum", "quadrilateral"],
    "questionText": "What is the sum of the interior angles of a quadrilateral?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall.", "workingLatex": "360", "explanation": "The interior angles of any quadrilateral sum to $360^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$360^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q003",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "value",
    "tags": ["exterior sum"],
    "questionText": "What is the sum of the exterior angles of any polygon?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Recall.", "workingLatex": "360", "explanation": "The exterior angles of any polygon always sum to $360^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$360^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q004",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["exterior", "regular"],
    "questionText": "Find the exterior angle of a regular pentagon.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide $360^\\circ$ by the number of sides.", "workingLatex": "360 \\div 5 = 72", "explanation": "Each exterior angle of a regular polygon is $\\tfrac{360}{n}$.", "diagram": null }
      ],
      "finalAnswer": "$72^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q005",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["exterior", "regular"],
    "questionText": "Find the exterior angle of a regular hexagon.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide $360^\\circ$ by the number of sides.", "workingLatex": "360 \\div 6 = 60", "explanation": "Each exterior angle is $\\tfrac{360}{n}$.", "diagram": null }
      ],
      "finalAnswer": "$60^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q006",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["interior exterior"],
    "questionText": "An exterior angle of a regular polygon is $40^\\circ$. Find the interior angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior and exterior add to $180^\\circ$.", "workingLatex": "180 - 40 = 140", "explanation": "They sit on a straight line.", "diagram": null }
      ],
      "finalAnswer": "$140^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q007",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["exterior", "regular"],
    "questionText": "Find the exterior angle of a regular octagon.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide $360^\\circ$ by the number of sides.", "workingLatex": "360 \\div 8 = 45", "explanation": "Each exterior angle is $\\tfrac{360}{n}$.", "diagram": null }
      ],
      "finalAnswer": "$45^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q008",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["interior", "regular"],
    "questionText": "Find the interior angle of an equilateral triangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide the sum by $3$.", "workingLatex": "180 \\div 3 = 60", "explanation": "An equilateral triangle has three equal angles.", "diagram": null }
      ],
      "finalAnswer": "$60^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q009",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["interior", "regular"],
    "questionText": "Find the interior angle of a square.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide the sum by $4$.", "workingLatex": "360 \\div 4 = 90", "explanation": "A square has four equal angles.", "diagram": null }
      ],
      "finalAnswer": "$90^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q010",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["interior exterior"],
    "questionText": "An exterior angle of a regular polygon is $30^\\circ$. Find the interior angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior and exterior add to $180^\\circ$.", "workingLatex": "180 - 30 = 150", "explanation": "They sit on a straight line.", "diagram": null }
      ],
      "finalAnswer": "$150^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q011",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["missing angle", "quadrilateral"],
    "questionText": "Three angles of a quadrilateral are $80^\\circ$, $100^\\circ$ and $90^\\circ$. Find the fourth angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Angles sum to $360^\\circ$.", "workingLatex": "360 - 80 - 100 - 90 = 90", "explanation": "Subtract the known angles.", "diagram": null }
      ],
      "finalAnswer": "$90^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q012",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["missing angle", "triangle"],
    "questionText": "Two angles of a triangle are $55^\\circ$ and $65^\\circ$. Find the third angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Angles sum to $180^\\circ$.", "workingLatex": "180 - 55 - 65 = 60", "explanation": "Subtract the known angles.", "diagram": null }
      ],
      "finalAnswer": "$60^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q013",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["exterior", "regular"],
    "questionText": "Find the exterior angle of a regular decagon (10 sides).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide $360^\\circ$ by the number of sides.", "workingLatex": "360 \\div 10 = 36", "explanation": "Each exterior angle is $\\tfrac{360}{n}$.", "diagram": null }
      ],
      "finalAnswer": "$36^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q014",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["interior exterior"],
    "questionText": "An exterior angle of a regular polygon is $60^\\circ$. Find the interior angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior and exterior add to $180^\\circ$.", "workingLatex": "180 - 60 = 120", "explanation": "They sit on a straight line.", "diagram": null }
      ],
      "finalAnswer": "$120^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q015",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["exterior", "regular", "find sides"],
    "questionText": "A regular polygon has an exterior angle of $90^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use $n = \\tfrac{360}{\\text{exterior}}$.", "workingLatex": "360 \\div 90 = 4", "explanation": "Number of sides is $\\tfrac{360}{\\text{exterior angle}}$.", "diagram": null }
      ],
      "finalAnswer": "$4$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q016",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["exterior", "regular", "find sides"],
    "questionText": "A regular polygon has an exterior angle of $45^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use $n = \\tfrac{360}{\\text{exterior}}$.", "workingLatex": "360 \\div 45 = 8", "explanation": "Number of sides is $\\tfrac{360}{\\text{exterior angle}}$.", "diagram": null }
      ],
      "finalAnswer": "$8$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q017",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["exterior", "regular", "find sides"],
    "questionText": "A regular polygon has an exterior angle of $36^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use $n = \\tfrac{360}{\\text{exterior}}$.", "workingLatex": "360 \\div 36 = 10", "explanation": "Number of sides is $\\tfrac{360}{\\text{exterior angle}}$.", "diagram": null }
      ],
      "finalAnswer": "$10$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q018",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["missing angle", "triangle"],
    "questionText": "A triangle has a right angle and another angle of $35^\\circ$. Find the third angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Angles sum to $180^\\circ$.", "workingLatex": "180 - 90 - 35 = 55", "explanation": "Subtract the known angles.", "diagram": null }
      ],
      "finalAnswer": "$55^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q019",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["exterior", "regular"],
    "questionText": "Find the exterior angle of a regular nonagon (9 sides). Give your answer to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide $360^\\circ$ by $9$.", "workingLatex": "360 \\div 9 = 40", "explanation": "Each exterior angle is $\\tfrac{360}{n}$.", "diagram": null }
      ],
      "finalAnswer": "$40^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q020",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "value",
    "tags": ["interior exterior"],
    "questionText": "An interior angle of a regular polygon is $108^\\circ$. Find its exterior angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior and exterior add to $180^\\circ$.", "workingLatex": "180 - 108 = 72", "explanation": "They sit on a straight line.", "diagram": null }
      ],
      "finalAnswer": "$72^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q021",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["interior sum", "formula"],
    "questionText": "Find the sum of the interior angles of a pentagon.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use $(n-2)\\times 180$.", "workingLatex": "(5-2)\\times 180", "explanation": "The interior-angle sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "3 \\times 180 = 540", "explanation": "Multiply out.", "diagram": null }
      ],
      "finalAnswer": "$540^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q022",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["interior sum", "formula"],
    "questionText": "Find the sum of the interior angles of a hexagon.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use $(n-2)\\times 180$.", "workingLatex": "(6-2)\\times 180", "explanation": "The interior-angle sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "4 \\times 180 = 720", "explanation": "Multiply out.", "diagram": null }
      ],
      "finalAnswer": "$720^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q023",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["interior sum", "formula"],
    "questionText": "Find the sum of the interior angles of an octagon.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use $(n-2)\\times 180$.", "workingLatex": "(8-2)\\times 180", "explanation": "The interior-angle sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Evaluate.", "workingLatex": "6 \\times 180 = 1080", "explanation": "Multiply out.", "diagram": null }
      ],
      "finalAnswer": "$1080^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q024",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["interior", "regular"],
    "questionText": "Find the interior angle of a regular pentagon.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(5-2)\\times 180 = 540", "explanation": "Use the sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $5$.", "workingLatex": "540 \\div 5 = 108", "explanation": "Regular means all angles equal.", "diagram": null }
      ],
      "finalAnswer": "$108^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q025",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["interior", "regular"],
    "questionText": "Find the interior angle of a regular hexagon.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(6-2)\\times 180 = 720", "explanation": "Use the sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $6$.", "workingLatex": "720 \\div 6 = 120", "explanation": "Regular means all angles equal.", "diagram": null }
      ],
      "finalAnswer": "$120^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q026",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["interior", "regular"],
    "questionText": "Find the interior angle of a regular octagon.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(8-2)\\times 180 = 1080", "explanation": "Use the sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $8$.", "workingLatex": "1080 \\div 8 = 135", "explanation": "Regular means all angles equal.", "diagram": null }
      ],
      "finalAnswer": "$135^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q027",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["missing angle", "pentagon"],
    "questionText": "Four angles of a pentagon are $100^\\circ$, $110^\\circ$, $120^\\circ$ and $95^\\circ$. Find the fifth angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(5-2)\\times 180 = 540", "explanation": "Sum of interior angles.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the known angles.", "workingLatex": "540 - 100 - 110 - 120 - 95 = 115", "explanation": "The remaining angle.", "diagram": null }
      ],
      "finalAnswer": "$115^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q028",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["missing angle", "hexagon"],
    "questionText": "Five angles of a hexagon are $110^\\circ$, $130^\\circ$, $120^\\circ$, $125^\\circ$ and $115^\\circ$. Find the sixth angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(6-2)\\times 180 = 720", "explanation": "Sum of interior angles.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the known angles.", "workingLatex": "720 - 110 - 130 - 120 - 125 - 115 = 120", "explanation": "The remaining angle.", "diagram": null }
      ],
      "finalAnswer": "$120^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q029",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["exterior", "find sides"],
    "questionText": "A regular polygon has an exterior angle of $24^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use $n = \\tfrac{360}{\\text{exterior}}$.", "workingLatex": "360 \\div 24 = 15", "explanation": "Number of sides is $\\tfrac{360}{\\text{exterior angle}}$.", "diagram": null }
      ],
      "finalAnswer": "$15$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q030",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["exterior", "find sides"],
    "questionText": "A regular polygon has an exterior angle of $20^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use $n = \\tfrac{360}{\\text{exterior}}$.", "workingLatex": "360 \\div 20 = 18", "explanation": "Number of sides is $\\tfrac{360}{\\text{exterior angle}}$.", "diagram": null }
      ],
      "finalAnswer": "$18$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q031",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["interior sum", "find sides"],
    "questionText": "The interior angles of a polygon sum to $900^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the equation.", "workingLatex": "(n-2)\\times 180 = 900", "explanation": "Use the sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "n - 2 = 5 \\Rightarrow n = 7", "explanation": "Divide by $180$ and add $2$.", "diagram": null }
      ],
      "finalAnswer": "$7$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q032",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["interior sum", "find sides"],
    "questionText": "The interior angles of a polygon sum to $1440^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the equation.", "workingLatex": "(n-2)\\times 180 = 1440", "explanation": "Use the sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "n - 2 = 8 \\Rightarrow n = 10", "explanation": "Divide by $180$ and add $2$.", "diagram": null }
      ],
      "finalAnswer": "$10$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q033",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["interior", "regular", "find sides"],
    "questionText": "A regular polygon has an interior angle of $140^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the exterior angle.", "workingLatex": "180 - 140 = 40", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Number of sides.", "workingLatex": "360 \\div 40 = 9", "explanation": "Use $n = \\tfrac{360}{\\text{exterior}}$.", "diagram": null }
      ],
      "finalAnswer": "$9$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q034",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["interior", "regular", "find sides"],
    "questionText": "A regular polygon has an interior angle of $150^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the exterior angle.", "workingLatex": "180 - 150 = 30", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Number of sides.", "workingLatex": "360 \\div 30 = 12", "explanation": "Use $n = \\tfrac{360}{\\text{exterior}}$.", "diagram": null }
      ],
      "finalAnswer": "$12$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q035",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["interior", "regular"],
    "questionText": "Find the interior angle of a regular decagon (10 sides).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(10-2)\\times 180 = 1440", "explanation": "Use the sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Divide by $10$.", "workingLatex": "1440 \\div 10 = 144", "explanation": "Regular means all angles equal.", "diagram": null }
      ],
      "finalAnswer": "$144^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q036",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["missing angle", "algebra"],
    "questionText": "The angles of a quadrilateral are $x$, $2x$, $3x$ and $4x$. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the equation.", "workingLatex": "x + 2x + 3x + 4x = 360", "explanation": "Quadrilateral angles sum to $360^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "10x = 360 \\Rightarrow x = 36", "explanation": "Divide by $10$.", "diagram": null }
      ],
      "finalAnswer": "$x = 36$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q037",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["missing angle", "algebra", "pentagon"],
    "questionText": "The angles of a pentagon are $x$, $x$, $x$, $2x$ and $2x$. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(5-2)\\times 180 = 540", "explanation": "Sum of pentagon angles.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the equation.", "workingLatex": "3x + 4x = 540", "explanation": "Add the terms: $x+x+x+2x+2x = 7x$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "7x = 540 \\Rightarrow x = 77.14...", "explanation": "Divide by $7$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{540}{7} \\approx 77.1$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q038",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["exterior", "regular"],
    "questionText": "Find the exterior angle of a regular dodecagon (12 sides).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide $360^\\circ$ by $12$.", "workingLatex": "360 \\div 12 = 30", "explanation": "Each exterior angle is $\\tfrac{360}{n}$.", "diagram": null }
      ],
      "finalAnswer": "$30^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q039",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["interior sum", "find sides"],
    "questionText": "The interior angles of a polygon sum to $2340^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the equation.", "workingLatex": "(n-2)\\times 180 = 2340", "explanation": "Use the sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "n - 2 = 13 \\Rightarrow n = 15", "explanation": "Divide by $180$ and add $2$.", "diagram": null }
      ],
      "finalAnswer": "$15$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q040",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["interior", "regular", "find sides"],
    "questionText": "A regular polygon has an interior angle of $135^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the exterior angle.", "workingLatex": "180 - 135 = 45", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Number of sides.", "workingLatex": "360 \\div 45 = 8", "explanation": "Use $n = \\tfrac{360}{\\text{exterior}}$.", "diagram": null }
      ],
      "finalAnswer": "$8$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q041",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["missing angle", "hexagon", "algebra"],
    "questionText": "Five angles of a hexagon are each $x$ and the sixth is $150^\\circ$. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(6-2)\\times 180 = 720", "explanation": "Sum of hexagon angles.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the equation.", "workingLatex": "5x + 150 = 720", "explanation": "Five equal angles plus $150^\\circ$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "5x = 570 \\Rightarrow x = 114", "explanation": "Subtract and divide.", "diagram": null }
      ],
      "finalAnswer": "$x = 114$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q042",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["exterior", "one angle"],
    "questionText": "A regular polygon has $20$ sides. Find each exterior angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Divide $360^\\circ$ by $20$.", "workingLatex": "360 \\div 20 = 18", "explanation": "Each exterior angle is $\\tfrac{360}{n}$.", "diagram": null }
      ],
      "finalAnswer": "$18^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q043",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["interior", "regular"],
    "questionText": "Find the interior angle of a regular polygon with $20$ sides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Exterior angle.", "workingLatex": "360 \\div 20 = 18", "explanation": "Each exterior angle is $18^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Interior angle.", "workingLatex": "180 - 18 = 162", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$162^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q044",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["missing angle", "algebra", "hexagon"],
    "questionText": "The angles of a hexagon are $x$, $x+10$, $x+20$, $x+30$, $x+40$ and $x+50$. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(6-2)\\times 180 = 720", "explanation": "Sum of hexagon angles.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the equation.", "workingLatex": "6x + 150 = 720", "explanation": "Add all six expressions.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "6x = 570 \\Rightarrow x = 95", "explanation": "Subtract and divide.", "diagram": null }
      ],
      "finalAnswer": "$x = 95$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q045",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "value",
    "tags": ["exterior", "find sides"],
    "questionText": "A regular polygon has an exterior angle of $18^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Use $n = \\tfrac{360}{\\text{exterior}}$.", "workingLatex": "360 \\div 18 = 20", "explanation": "Number of sides is $\\tfrac{360}{\\text{exterior angle}}$.", "diagram": null }
      ],
      "finalAnswer": "$20$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q046",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["interior sum", "find sides"],
    "questionText": "The interior angles of a polygon sum to $1620^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the equation.", "workingLatex": "(n-2)\\times 180 = 1620", "explanation": "Use the sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "n - 2 = 9 \\Rightarrow n = 11", "explanation": "Divide by $180$ and add $2$.", "diagram": null }
      ],
      "finalAnswer": "$11$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q047",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["missing angle", "algebra"],
    "questionText": "The angles of a quadrilateral are $(x+10)$, $(x+30)$, $(2x)$ and $(2x-40)$. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the equation.", "workingLatex": "(x+10)+(x+30)+2x+(2x-40) = 360", "explanation": "Quadrilateral angles sum to $360^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "6x + 0 = 360", "explanation": "The constants cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 60", "explanation": "Divide by $6$.", "diagram": null }
      ],
      "finalAnswer": "$x = 60$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q048",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["interior", "regular", "find sides"],
    "questionText": "A regular polygon has an interior angle of $160^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the exterior angle.", "workingLatex": "180 - 160 = 20", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Number of sides.", "workingLatex": "360 \\div 20 = 18", "explanation": "Use $n = \\tfrac{360}{\\text{exterior}}$.", "diagram": null }
      ],
      "finalAnswer": "$18$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q049",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["interior sum", "octagon", "missing"],
    "questionText": "Seven angles of an octagon are each $130^\\circ$. Find the eighth angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(8-2)\\times 180 = 1080", "explanation": "Sum of octagon angles.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract seven angles.", "workingLatex": "1080 - 7\\times 130 = 1080 - 910 = 170", "explanation": "The remaining angle.", "diagram": null }
      ],
      "finalAnswer": "$170^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q050",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["interior", "regular"],
    "questionText": "Find the interior angle of a regular polygon with $15$ sides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Exterior angle.", "workingLatex": "360 \\div 15 = 24", "explanation": "Each exterior angle is $24^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Interior angle.", "workingLatex": "180 - 24 = 156", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$156^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q051",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["interior exterior", "algebra"],
    "questionText": "A regular polygon has an interior angle that is $8$ times its exterior angle. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Let the exterior angle be $e$.", "workingLatex": "8e + e = 180", "explanation": "Interior ($8e$) and exterior ($e$) add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $e$.", "workingLatex": "9e = 180 \\Rightarrow e = 20", "explanation": "Divide by $9$.", "diagram": null },
        { "stepNumber": 3, "description": "Number of sides.", "workingLatex": "360 \\div 20 = 18", "explanation": "Use $n = \\tfrac{360}{e}$.", "diagram": null }
      ],
      "finalAnswer": "$18$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q052",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["interior exterior", "algebra"],
    "questionText": "A regular polygon has an interior angle that is $5$ times its exterior angle. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Let the exterior angle be $e$.", "workingLatex": "5e + e = 180", "explanation": "Interior ($5e$) and exterior ($e$) add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Solve for $e$.", "workingLatex": "6e = 180 \\Rightarrow e = 30", "explanation": "Divide by $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Number of sides.", "workingLatex": "360 \\div 30 = 12", "explanation": "Use $n = \\tfrac{360}{e}$.", "diagram": null }
      ],
      "finalAnswer": "$12$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q053",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["interior", "algebra", "find sides"],
    "questionText": "The interior angle of a regular polygon is $156^\\circ$. Find the number of sides and the interior-angle sum.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Exterior angle.", "workingLatex": "180 - 156 = 24", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Number of sides.", "workingLatex": "360 \\div 24 = 15", "explanation": "Use $n = \\tfrac{360}{e}$.", "diagram": null },
        { "stepNumber": 3, "description": "Interior sum.", "workingLatex": "(15-2)\\times 180 = 2340", "explanation": "Use the sum formula.", "diagram": null }
      ],
      "finalAnswer": "$15$ sides; interior sum $= 2340^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q054",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["mixed", "algebra"],
    "questionText": "A polygon has interior angles that sum to $1080^\\circ$. One angle is $x$ and the rest are all $150^\\circ$. Find $x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the number of sides.", "workingLatex": "(n-2)\\times 180 = 1080 \\Rightarrow n = 8", "explanation": "Solve the sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Seven angles of $150^\\circ$.", "workingLatex": "7 \\times 150 = 1050", "explanation": "The other seven angles.", "diagram": null },
        { "stepNumber": 3, "description": "Find $x$.", "workingLatex": "1080 - 1050 = 30", "explanation": "The remaining angle.", "diagram": null }
      ],
      "finalAnswer": "$x = 30^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q055",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["interior exterior", "algebra"],
    "questionText": "The interior angle of a regular polygon is $60^\\circ$ more than four times its exterior angle. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Let the exterior angle be $e$.", "workingLatex": "\\text{interior} = 4e + 60", "explanation": "Set up the relationship.", "diagram": null },
        { "stepNumber": 2, "description": "Use the straight-line fact.", "workingLatex": "(4e + 60) + e = 180", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $e$.", "workingLatex": "5e + 60 = 180 \\Rightarrow e = 24", "explanation": "Subtract and divide.", "diagram": null },
        { "stepNumber": 4, "description": "Number of sides.", "workingLatex": "360 \\div 24 = 15", "explanation": "Use $n = \\tfrac{360}{e}$.", "diagram": null }
      ],
      "finalAnswer": "$15$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q056",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["interior sum", "algebra"],
    "questionText": "Each interior angle of a regular polygon is $144^\\circ$. Find the total of all its interior angles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Exterior angle.", "workingLatex": "180 - 144 = 36", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Number of sides.", "workingLatex": "360 \\div 36 = 10", "explanation": "Use $n = \\tfrac{360}{e}$.", "diagram": null },
        { "stepNumber": 3, "description": "Total.", "workingLatex": "10 \\times 144 = 1440", "explanation": "Multiply the angle by the number of sides.", "diagram": null }
      ],
      "finalAnswer": "$1440^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q057",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["mixed shapes", "reasoning"],
    "questionText": "Regular pentagons and squares meet at a point with no gaps. If two pentagons and one square meet, does the arrangement fit exactly? Justify with the angle total.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Pentagon interior angle.", "workingLatex": "108", "explanation": "A regular pentagon has $108^\\circ$ angles.", "diagram": null },
        { "stepNumber": 2, "description": "Square interior angle.", "workingLatex": "90", "explanation": "A square has $90^\\circ$ angles.", "diagram": null },
        { "stepNumber": 3, "description": "Add the angles.", "workingLatex": "108 + 108 + 90 = 306", "explanation": "Two pentagons and one square.", "diagram": null },
        { "stepNumber": 4, "description": "Compare with $360^\\circ$.", "workingLatex": "306 \\ne 360", "explanation": "There is a $54^\\circ$ gap, so it does not fit.", "diagram": null }
      ],
      "finalAnswer": "No — the angles total $306^\\circ$, leaving a $54^\\circ$ gap"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q058",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["interior", "algebra", "find sides"],
    "questionText": "The interior angle of a regular polygon is $162^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Exterior angle.", "workingLatex": "180 - 162 = 18", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Number of sides.", "workingLatex": "360 \\div 18 = 20", "explanation": "Use $n = \\tfrac{360}{e}$.", "diagram": null }
      ],
      "finalAnswer": "$20$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q059",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["mixed", "algebra"],
    "questionText": "A hexagon has angles $(x)$, $(x)$, $(x+20)$, $(x+20)$, $(2x)$ and $(2x)$. Find the largest angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(6-2)\\times 180 = 720", "explanation": "Sum of hexagon angles.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the equation.", "workingLatex": "x + x + (x+20) + (x+20) + 2x + 2x = 720", "explanation": "Add all six angles.", "diagram": null },
        { "stepNumber": 3, "description": "Simplify.", "workingLatex": "8x + 40 = 720", "explanation": "Collect terms.", "diagram": null },
        { "stepNumber": 4, "description": "Solve.", "workingLatex": "8x = 680 \\Rightarrow x = 85", "explanation": "Subtract and divide.", "diagram": null },
        { "stepNumber": 5, "description": "Largest angle.", "workingLatex": "2 \\times 85 = 170", "explanation": "The largest is $2x$.", "diagram": null }
      ],
      "finalAnswer": "$170^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q060",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["exterior", "algebra", "find sides"],
    "questionText": "The exterior angles of a polygon are $(2x)$, $(3x)$, $(4x)$, $(5x)$ and $(6x)$. Find the number of... in fact, find the value of the largest exterior angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Exterior sum.", "workingLatex": "2x+3x+4x+5x+6x = 360", "explanation": "Exterior angles sum to $360^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "20x = 360", "explanation": "Collect terms.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "x = 18", "explanation": "Divide by $20$.", "diagram": null },
        { "stepNumber": 4, "description": "Largest angle.", "workingLatex": "6 \\times 18 = 108", "explanation": "The largest is $6x$.", "diagram": null }
      ],
      "finalAnswer": "$108^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q061",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["interior exterior", "algebra"],
    "questionText": "The interior angle of a regular polygon exceeds its exterior angle by $120^\\circ$. How many sides does the polygon have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Let the exterior angle be $e$.", "workingLatex": "\\text{interior} = e + 120", "explanation": "Interior is $120^\\circ$ more than exterior.", "diagram": null },
        { "stepNumber": 2, "description": "Straight-line fact.", "workingLatex": "(e + 120) + e = 180", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 3, "description": "Solve for $e$.", "workingLatex": "2e = 60 \\Rightarrow e = 30", "explanation": "Subtract and halve.", "diagram": null },
        { "stepNumber": 4, "description": "Number of sides.", "workingLatex": "360 \\div 30 = 12", "explanation": "Use $n = \\tfrac{360}{e}$.", "diagram": null }
      ],
      "finalAnswer": "$12$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q062",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["reasoning", "tessellation"],
    "questionText": "Explain, using interior angles, why regular hexagons tessellate (fit together with no gaps).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Hexagon interior angle.", "workingLatex": "120", "explanation": "A regular hexagon has $120^\\circ$ angles.", "diagram": null },
        { "stepNumber": 2, "description": "Angles meeting at a point.", "workingLatex": "3 \\times 120 = 360", "explanation": "Three hexagons meet at each vertex.", "diagram": null },
        { "stepNumber": 3, "description": "Compare with $360^\\circ$.", "workingLatex": "360 = 360", "explanation": "They fill the full turn exactly, so they tessellate.", "diagram": null }
      ],
      "finalAnswer": "Three $120^\\circ$ angles meet to make exactly $360^\\circ$, so hexagons tessellate"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q063",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "value",
    "tags": ["interior sum", "algebra", "find sides"],
    "questionText": "The interior angles of a polygon sum to $3240^\\circ$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the equation.", "workingLatex": "(n-2)\\times 180 = 3240", "explanation": "Use the sum formula.", "diagram": null },
        { "stepNumber": 2, "description": "Solve.", "workingLatex": "n - 2 = 18 \\Rightarrow n = 20", "explanation": "Divide by $180$ and add $2$.", "diagram": null }
      ],
      "finalAnswer": "$20$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q064",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["mixed", "algebra"],
    "questionText": "A pentagon has four equal angles and a fifth angle of $60^\\circ$ more than each of the others. Find the size of each of the four equal angles.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Let each equal angle be $x$.", "workingLatex": "4x + (x + 60) = 540", "explanation": "The fifth angle is $x + 60$; the sum is $540^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Simplify.", "workingLatex": "5x + 60 = 540", "explanation": "Collect terms.", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "5x = 480 \\Rightarrow x = 96", "explanation": "Subtract and divide.", "diagram": null }
      ],
      "finalAnswer": "$96^\\circ$ each (fifth angle $156^\\circ$)"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q065",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["interior exterior", "algebra"],
    "questionText": "In a regular polygon, the ratio of the interior angle to the exterior angle is $7:2$. How many sides does it have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Total ratio parts.", "workingLatex": "7 + 2 = 9", "explanation": "Interior plus exterior is $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "One part.", "workingLatex": "180 \\div 9 = 20", "explanation": "Share $180^\\circ$ into $9$ parts.", "diagram": null },
        { "stepNumber": 3, "description": "Exterior angle.", "workingLatex": "2 \\times 20 = 40", "explanation": "Exterior is $2$ parts.", "diagram": null },
        { "stepNumber": 4, "description": "Number of sides.", "workingLatex": "360 \\div 40 = 9", "explanation": "Use $n = \\tfrac{360}{e}$.", "diagram": null }
      ],
      "finalAnswer": "$9$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q066",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["mixed", "reasoning"],
    "questionText": "A regular octagon and a square meet along a shared edge at a point together with one more shape. Find the interior angle of the third regular polygon that fills the point exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Octagon interior angle.", "workingLatex": "135", "explanation": "A regular octagon has $135^\\circ$ angles.", "diagram": null },
        { "stepNumber": 2, "description": "Square interior angle.", "workingLatex": "90", "explanation": "A square has $90^\\circ$ angles.", "diagram": null },
        { "stepNumber": 3, "description": "Remaining angle.", "workingLatex": "360 - 135 - 90 = 135", "explanation": "The third angle fills the point.", "diagram": null }
      ],
      "finalAnswer": "$135^\\circ$ (another regular octagon)"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q067",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["interior sum", "algebra", "find sides"],
    "questionText": "Each interior angle of a regular polygon is $170^\\circ$. Find the number of sides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Exterior angle.", "workingLatex": "180 - 170 = 10", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Number of sides.", "workingLatex": "360 \\div 10 = 36", "explanation": "Use $n = \\tfrac{360}{e}$.", "diagram": null }
      ],
      "finalAnswer": "$36$ sides"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q068",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["mixed", "algebra"],
    "questionText": "The interior angles of a heptagon (7 sides) are $x$, $x+5$, $x+10$, $x+15$, $x+20$, $x+25$ and $x+30$. Find the smallest angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interior sum.", "workingLatex": "(7-2)\\times 180 = 900", "explanation": "Sum of heptagon angles.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the equation.", "workingLatex": "7x + 105 = 900", "explanation": "Add all seven expressions (constants sum to $105$).", "diagram": null },
        { "stepNumber": 3, "description": "Solve.", "workingLatex": "7x = 795 \\Rightarrow x = 113.57...", "explanation": "Divide by $7$.", "diagram": null }
      ],
      "finalAnswer": "$x = \\dfrac{795}{7} \\approx 113.6^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q069",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["interior exterior", "algebra"],
    "questionText": "A regular polygon has an interior angle of $150^\\circ$. A second regular polygon has twice as many sides. Find the interior angle of the second polygon.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Sides of the first polygon.", "workingLatex": "180 - 150 = 30, \\ 360 \\div 30 = 12", "explanation": "Exterior angle $30^\\circ$ gives $12$ sides.", "diagram": null },
        { "stepNumber": 2, "description": "Sides of the second polygon.", "workingLatex": "2 \\times 12 = 24", "explanation": "Twice as many sides.", "diagram": null },
        { "stepNumber": 3, "description": "Exterior angle of the second.", "workingLatex": "360 \\div 24 = 15", "explanation": "Use $n = 24$.", "diagram": null },
        { "stepNumber": 4, "description": "Interior angle.", "workingLatex": "180 - 15 = 165", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null }
      ],
      "finalAnswer": "$165^\\circ$"
    }
  },
  {
    "id": "gcse.geometry.polygon-angles.q070",
    "level": "GCSE",
    "topic": "Properties and constructions",
    "subtopic": "Angles in polygons",
    "subtopicId": "gcse.geometry.polygon-angles",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": ["mixed", "algebra", "multi-step"],
    "questionText": "The interior angle of a regular polygon is $8$ times the size of the interior angle of an equilateral triangle... which is impossible since angles are under $180^\\circ$. Instead: the interior angle of a regular polygon is $2.4$ times the interior angle of an equilateral triangle. How many sides does the polygon have?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Equilateral interior angle.", "workingLatex": "60", "explanation": "An equilateral triangle has $60^\\circ$ angles.", "diagram": null },
        { "stepNumber": 2, "description": "Interior angle of the polygon.", "workingLatex": "2.4 \\times 60 = 144", "explanation": "Multiply as stated.", "diagram": null },
        { "stepNumber": 3, "description": "Exterior angle.", "workingLatex": "180 - 144 = 36", "explanation": "Interior and exterior add to $180^\\circ$.", "diagram": null },
        { "stepNumber": 4, "description": "Number of sides.", "workingLatex": "360 \\div 36 = 10", "explanation": "Use $n = \\tfrac{360}{e}$.", "diagram": null }
      ],
      "finalAnswer": "$10$ sides"
    }
  }
];
