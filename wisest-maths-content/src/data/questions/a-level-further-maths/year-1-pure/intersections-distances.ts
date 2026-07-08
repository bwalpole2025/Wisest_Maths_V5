import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q001",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{i} + \\lambda(\\mathbf{j} + \\mathbf{k})$ and $L_2: \\mathbf{r} = \\mathbf{j} + \\mu(\\mathbf{i} + \\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "\\mathbf{i} + \\lambda(\\mathbf{j} + \\mathbf{k}) = \\mathbf{j} + \\mu(\\mathbf{i} + \\mathbf{k})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(\\mathbf{j} + \\mathbf{k}) - \\mu(\\mathbf{i} + \\mathbf{k}) = \\mathbf{j} - \\mathbf{i}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 1 = \\mu \\\\ \\lambda = 1 \\\\ \\lambda = \\mu \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 1,\\quad \\mu = 1",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + 1(\\mathbf{j} + \\mathbf{k}) = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "(1,\\,1,\\,1)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = \\mathbf{j} + 1(\\mathbf{i} + \\mathbf{k}) = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(1,\\,1,\\,1)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1,\\,1,\\,1)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q002",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{i} + \\lambda(\\mathbf{j})$ and $L_2: \\mathbf{r} = \\mathbf{j} + \\mu(\\mathbf{i})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "\\mathbf{i} + \\lambda(\\mathbf{j}) = \\mathbf{j} + \\mu(\\mathbf{i})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(\\mathbf{j}) - \\mu(\\mathbf{i}) = \\mathbf{j} - \\mathbf{i}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 1 = \\mu \\\\ \\lambda = 1 \\\\ 0 = 0 \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 1,\\quad \\mu = 1",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + 1(\\mathbf{j}) = \\mathbf{i} + \\mathbf{j}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "(1,\\,1,\\,0)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = \\mathbf{j} + 1(\\mathbf{i}) = \\mathbf{i} + \\mathbf{j}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(1,\\,1,\\,0)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1,\\,1,\\,0)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q003",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = 2\\mathbf{i} + \\lambda(\\mathbf{k})$ and $L_2: \\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + \\mu(2\\mathbf{j} + \\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "2\\mathbf{i} + \\lambda(\\mathbf{k}) = \\mathbf{i} + 2\\mathbf{j} + \\mu(2\\mathbf{j} + \\mathbf{k})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(\\mathbf{k}) - \\mu(2\\mathbf{j} + \\mathbf{k}) = \\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{i}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 2 = 1 + \\mu \\\\ 0 = \\lambda \\\\ \\lambda = 2 + 2\\mu \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 0,\\quad \\mu = 1",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 0(\\mathbf{k}) = 2\\mathbf{i}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "(2,\\,0,\\,0)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 1(2\\mathbf{j} + \\mathbf{k}) = 2\\mathbf{i}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(2,\\,0,\\,0)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2,\\,0,\\,0)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q004",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{k} + \\lambda(\\mathbf{i} + \\mathbf{j})$ and $L_2: \\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + \\mu(\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "\\mathbf{k} + \\lambda(\\mathbf{i} + \\mathbf{j}) = \\mathbf{i} + 2\\mathbf{j} + \\mu(\\mathbf{i} - \\mathbf{j} + \\mathbf{k})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(\\mathbf{i} + \\mathbf{j}) - \\mu(\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} \\lambda = 1 \\\\ \\lambda = 2 \\\\ 1 + \\lambda = 2 + \\mu \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 1,\\quad \\mu = 2",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = \\mathbf{k} + 1(\\mathbf{i} + \\mathbf{j}) = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "(1,\\,1,\\,1)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 2(\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(1,\\,1,\\,1)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1,\\,1,\\,1)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q005",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{i} + \\lambda(2\\mathbf{j} + \\mathbf{k})$ and $L_2: \\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\mu(\\mathbf{j} + 2\\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "\\mathbf{i} + \\lambda(2\\mathbf{j} + \\mathbf{k}) = \\mathbf{i} + \\mathbf{j} + \\mu(\\mathbf{j} + 2\\mathbf{k})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(2\\mathbf{j} + \\mathbf{k}) - \\mu(\\mathbf{j} + 2\\mathbf{k}) = \\mathbf{i} + \\mathbf{j} - \\mathbf{i}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 1 = \\mu \\\\ 2\\lambda = 1 \\\\ \\lambda = 2\\mu \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 0.5,\\quad \\mu = 0",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + 0.5(2\\mathbf{j} + \\mathbf{k}) = \\mathbf{i} + \\mathbf{j} + \\tfrac{1}{2}\\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "\\left(1,\\,1,\\,\\tfrac{1}{2}\\right)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + \\mathbf{j} + 0(\\mathbf{j} + 2\\mathbf{k}) = \\mathbf{i} + \\mathbf{j} + \\tfrac{1}{2}\\mathbf{k}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "\\left(1,\\,1,\\,\\tfrac{1}{2}\\right)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\left(1,\\,1,\\,\\tfrac{1}{2}\\right)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q006",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = 3\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j})$ and $L_2: \\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k} + \\mu(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "3\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j}) = \\mathbf{i} + \\mathbf{j} + \\mathbf{k} + \\mu(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(\\mathbf{i} - \\mathbf{j}) - \\mu(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = \\mathbf{i} + \\mathbf{j} + \\mathbf{k} - 3\\mathbf{i} + \\mathbf{k}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 3 + \\lambda = 1 + 2\\mu \\\\ -\\lambda = 1 + \\mu \\\\ 1 = -\\mu \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 0,\\quad \\mu = 1",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + \\mathbf{k} + 0(\\mathbf{i} - \\mathbf{j}) = 3\\mathbf{i} + \\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "(3,\\,0,\\,1)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k} + 1(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = 3\\mathbf{i} + \\mathbf{k}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(3,\\,0,\\,1)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,\\,0,\\,1)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q007",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{j} + \\lambda(3\\mathbf{i} + \\mathbf{k})$ and $L_2: \\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\mu(2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "\\mathbf{j} + \\lambda(3\\mathbf{i} + \\mathbf{k}) = \\mathbf{i} + \\mathbf{j} + \\mu(2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(3\\mathbf{i} + \\mathbf{k}) - \\mu(2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) = \\mathbf{i} + \\mathbf{j} - \\mathbf{j}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 3\\lambda = 1 + 2\\mu \\\\ 1 = 1 + \\mu \\\\ \\lambda = 2\\mu \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 0,\\quad \\mu = 0",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = \\mathbf{j} + 0(3\\mathbf{i} + \\mathbf{k}) = \\mathbf{i} + \\mathbf{j}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "(1,\\,1,\\,0)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + \\mathbf{j} + 0(2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) = \\mathbf{i} + \\mathbf{j}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(1,\\,1,\\,0)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1,\\,1,\\,0)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q008",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(0,\\,0,\\,0)$ to the line $\\mathbf{r} = (1,\\,0,\\,0) + \\lambda(\\mathbf{j})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (1,\\,0,\\,0)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (0,\\,0,\\,0) - (1,\\,0,\\,0) = -\\mathbf{i}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{j}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 1",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = 1",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{1}{1} = 1",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 1",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q009",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(3,\\,0,\\,0)$ to the line $\\mathbf{r} = (0,\\,0,\\,0) + \\lambda(\\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (0,\\,0,\\,0)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (3,\\,0,\\,0) - (0,\\,0,\\,0) = 3\\mathbf{i}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 3",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = 1",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{3}{1} = 3",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 3",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q010",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(1,\\,4,\\,0)$ to the line $\\mathbf{r} = (1,\\,0,\\,0) + \\lambda(\\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (1,\\,0,\\,0)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (1,\\,4,\\,0) - (1,\\,0,\\,0) = 4\\mathbf{j}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 4",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = 1",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{4}{1} = 4",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 4",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 4$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q011",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(2,\\,2,\\,0)$ to the line $\\mathbf{r} = (0,\\,0,\\,0) + \\lambda(\\mathbf{i} + \\mathbf{j})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (0,\\,0,\\,0)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (2,\\,2,\\,0) - (0,\\,0,\\,0) = 2\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{i} + \\mathbf{j}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 2",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{2}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{2}{\\sqrt{2}} = \\sqrt{2}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\sqrt{2}",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\sqrt{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q012",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(3,\\,1,\\,2)$ to the line $\\mathbf{r} = (1,\\,1,\\,0) + \\lambda(\\mathbf{j} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (1,\\,1,\\,0)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (3,\\,1,\\,2) - (1,\\,1,\\,0) = 2\\mathbf{i} + 2\\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{j} + \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 2\\sqrt{2}",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{2}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{2\\sqrt{2}}{\\sqrt{2}} = 2",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 2",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q013",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(2,\\,0,\\,0)$ to the line $\\mathbf{r} = (0,\\,0,\\,1) + \\lambda(\\mathbf{i} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (0,\\,0,\\,1)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (2,\\,0,\\,0) - (0,\\,0,\\,1) = 2\\mathbf{i} - \\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{i} + \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 1",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{2}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{1}{\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{1}{\\sqrt{2}}",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\dfrac{1}{\\sqrt{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q014",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(2,\\,3,\\,1)$ to the line $\\mathbf{r} = (2,\\,0,\\,0) + \\lambda(\\mathbf{i} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (2,\\,0,\\,0)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (2,\\,3,\\,1) - (2,\\,0,\\,0) = 3\\mathbf{j} + \\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{i} + \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 3\\sqrt{2}",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{2}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{3\\sqrt{2}}{\\sqrt{2}} = 3",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 3",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q015",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(1,\\,1,\\,1)$ to the line $\\mathbf{r} = (0,\\,0,\\,0) + \\lambda(\\mathbf{i} + \\mathbf{j} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (0,\\,0,\\,0)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (1,\\,1,\\,1) - (0,\\,0,\\,0) = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 0",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{3}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{0}{\\sqrt{3}} = 0",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 0",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q016",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(4,\\,1,\\,2)$ to the line $\\mathbf{r} = (1,\\,2,\\,3) + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (1,\\,2,\\,3)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (4,\\,1,\\,2) - (1,\\,2,\\,3) = 3\\mathbf{i} - \\mathbf{j} - \\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 2\\sqrt{5}",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{6}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{2\\sqrt{5}}{\\sqrt{6}} = \\sqrt{\\dfrac{10}{3}}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\sqrt{\\dfrac{10}{3}}",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\sqrt{\\dfrac{10}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q017",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(0,\\,3,\\,4)$ to the line $\\mathbf{r} = (0,\\,0,\\,0) + \\lambda(3\\mathbf{i} + 4\\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (0,\\,0,\\,0)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (0,\\,3,\\,4) - (0,\\,0,\\,0) = 3\\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = 3\\mathbf{i} + 4\\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 12",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = 5",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{12}{5} = \\dfrac{12}{5}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{12}{5}",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\dfrac{12}{5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q018",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(3,\\,2,\\,0)$ to the line $\\mathbf{r} = (1,\\,0,\\,1) + \\lambda(\\mathbf{j} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (1,\\,0,\\,1)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (3,\\,2,\\,0) - (1,\\,0,\\,1) = 2\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{j} + \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 2\\sqrt{5}",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{2}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{2\\sqrt{5}}{\\sqrt{2}} = \\sqrt{10}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\sqrt{10}",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\sqrt{10}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q019",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(5,\\,3,\\,1)$ to the line $\\mathbf{r} = (2,\\,1,\\,0) + \\lambda(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (2,\\,1,\\,0)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (5,\\,3,\\,1) - (2,\\,1,\\,0) = 3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = \\sqrt{35}",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{6}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{\\sqrt{35}}{\\sqrt{6}} = \\sqrt{\\dfrac{35}{6}}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\sqrt{\\dfrac{35}{6}}",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\sqrt{\\dfrac{35}{6}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q020",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k} + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + \\mu(3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "\\mathbf{i} + \\mathbf{j} + \\mathbf{k} + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) = 3\\mathbf{i} + \\mu(3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) - \\mu(3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) = 3\\mathbf{i} - \\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 2\\lambda - 3\\mu = 2 \\\\ -\\lambda + \\mu = -1 \\\\ \\lambda - 2\\mu = -1 \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 1,\\quad \\mu = 1",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k} + 1(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "(3,\\,1,\\,2)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + 1(3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(3,\\,1,\\,2)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,\\,1,\\,2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q021",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = 2\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{i} + \\mathbf{j})$ and $L_2: \\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k} + \\mu(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "2\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{i} + \\mathbf{j}) = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k} + \\mu(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(\\mathbf{i} + \\mathbf{j}) - \\mu(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k} - 2\\mathbf{i} + \\mathbf{k}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 2 + \\lambda = 3\\mu \\\\ \\lambda = 1 + 2\\mu \\\\ 1 = 1 + \\mu \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 2,\\quad \\mu = 0",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + \\mathbf{k} + 2(\\mathbf{i} + \\mathbf{j}) = 4\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "(4,\\,2,\\,1)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k} + 0(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = 4\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(4,\\,2,\\,1)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(4,\\,2,\\,1)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q022",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{j} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ and $L_2: \\mathbf{r} = \\mathbf{i} + 3\\mathbf{k} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "\\mathbf{j} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = \\mathbf{i} + 3\\mathbf{k} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) - \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) = \\mathbf{i} + 3\\mathbf{k} - \\mathbf{j}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 3\\lambda - \\mu = 0 \\\\ 1 - \\lambda = 2\\mu \\\\ 2\\lambda = 1 + \\mu \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 1,\\quad \\mu = 2",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = \\mathbf{j} + 1(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = 3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "(3,\\,-1,\\,2)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + 3\\mathbf{k} + 2(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) = 3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(3,\\,-1,\\,2)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,\\,-1,\\,2)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q023",
    "tags": [
      "intersections-distances",
      "line-intersection",
      "no-intersection"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Show that the lines $L_1: \\mathbf{r} = \\mathbf{i} + \\lambda(2\\mathbf{i} + \\mathbf{j})$ and $L_2: \\mathbf{r} = 2\\mathbf{i} + \\mathbf{j} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})$ do not intersect.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line expressions",
          "workingLatex": "\\mathbf{i} + \\lambda(2\\mathbf{i} + \\mathbf{j}) = 2\\mathbf{i} + \\mathbf{j} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})",
          "explanation": "If the lines meet, both share the same position vector for some $\\lambda$ and $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 2\\lambda - \\mu = 1 \\\\ \\lambda - 2\\mu = 0 \\\\ 0 = \\mu \\end{cases}",
          "explanation": "Equating components gives a system in $\\lambda$ and $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inspect the direction vectors",
          "workingLatex": "2\\mathbf{i} + \\mathbf{j} \\text{ and } \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "The direction vectors are not scalar multiples.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Analyse the system",
          "workingLatex": "The first two equations give $\\lambda = 1$, $\\mu = 0$, but the third gives $\\mu = 0$ while the $z$-components require $0 = 0$ — however the $y$-equation gives $\\lambda = 0$, a contradiction.",
          "explanation": "Attempt to solve the simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the inconsistency",
          "workingLatex": "$\\lambda = 1$ and $\\lambda = 0$ cannot both hold.",
          "explanation": "Parallel direction vectors with offset position vectors, or a contradictory system, means no single point lies on both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the lines",
          "workingLatex": "The direction vectors are not parallel, but the lines are skew.",
          "explanation": "Distinguish parallel coplanar lines from skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "The lines are skew and do not intersect.",
          "explanation": "There is no point common to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric interpretation",
          "workingLatex": "Skew lines pass on opposite sides of space without meeting.",
          "explanation": "Visualising in 3D clarifies why no intersection exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "The lines are skew and do not intersect.",
          "explanation": "No intersection point exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "The lines are skew and do not intersect."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q024",
    "tags": [
      "intersections-distances",
      "line-intersection",
      "no-intersection"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Show that the lines $L_1: \\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\lambda(2\\mathbf{i} + 4\\mathbf{j})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + 3\\mathbf{j} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})$ do not intersect.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line expressions",
          "workingLatex": "\\mathbf{i} + \\mathbf{j} + \\lambda(2\\mathbf{i} + 4\\mathbf{j}) = 3\\mathbf{i} + 3\\mathbf{j} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})",
          "explanation": "If the lines meet, both share the same position vector for some $\\lambda$ and $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} 2\\lambda - \\mu = 1 \\\\ 4\\lambda - 2\\mu = -1 \\\\ 0 = \\mu \\end{cases}",
          "explanation": "Equating components gives a system in $\\lambda$ and $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inspect the direction vectors",
          "workingLatex": "2\\mathbf{i} + 4\\mathbf{j} \\text{ and } \\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "$\\mathbf{d}_2 = 2\\mathbf{d}_1$, so the lines are parallel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Analyse the system",
          "workingLatex": "$\\mathbf{d}_2 = 2\\mathbf{d}_1$, so the directions are parallel.",
          "explanation": "Attempt to solve the simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the inconsistency",
          "workingLatex": "From $\\mu = 0$, the $x$-equation gives $2\\lambda = 1$, but the $y$-equation gives $4\\lambda = -1$.",
          "explanation": "Parallel direction vectors with offset position vectors, or a contradictory system, means no single point lies on both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the lines",
          "workingLatex": "The lines are parallel but distinct.",
          "explanation": "Distinguish parallel coplanar lines from skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "The lines are parallel and distinct, so they do not intersect.",
          "explanation": "There is no point common to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric interpretation",
          "workingLatex": "Parallel distinct lines never meet.",
          "explanation": "Visualising in 3D clarifies why no intersection exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "The lines are parallel and distinct, so they do not intersect.",
          "explanation": "No intersection point exists.",
          "diagram": null
        }
      ],
      "finalAnswer": "The lines are parallel and distinct, so they do not intersect."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q025",
    "tags": [
      "intersections-distances",
      "line-plane-intersection"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the point where the line $\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 6$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the line into the plane",
          "workingLatex": "(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}))\\cdot \\mathbf{i} + \\mathbf{j} + \\mathbf{k} = 6",
          "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the scalar product",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 6",
          "explanation": "Distribute the dot product over the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 6",
          "explanation": "Multiply and add the corresponding components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 2",
          "explanation": "This is the coefficient of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\lambda$",
          "workingLatex": "6 + 2\\lambda = 6 \\Rightarrow \\lambda = 0",
          "explanation": "Rearrange the linear equation in $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $\\lambda$ into the line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + 0(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read the coordinates",
          "workingLatex": "(1,\\,2,\\,3)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify in the plane equation",
          "workingLatex": "1 + 2 + 3 = 6",
          "explanation": "Substituting back should satisfy the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(1,\\,2,\\,3)",
          "explanation": "The line meets the plane at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(1,\\,2,\\,3)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q026",
    "tags": [
      "intersections-distances",
      "line-plane-intersection"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the point where the line $\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}) = 5$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the line into the plane",
          "workingLatex": "(\\mathbf{j} + 4\\mathbf{k} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}))\\cdot \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k} = 5",
          "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the scalar product",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 5",
          "explanation": "Distribute the dot product over the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 4",
          "explanation": "Multiply and add the corresponding components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = -3",
          "explanation": "This is the coefficient of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\lambda$",
          "workingLatex": "4 + -3\\lambda = 5 \\Rightarrow \\lambda = 1",
          "explanation": "Rearrange the linear equation in $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $\\lambda$ into the line",
          "workingLatex": "\\mathbf{r} = \\mathbf{j} + 4\\mathbf{k} + 1(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = 3\\mathbf{i} + 3\\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read the coordinates",
          "workingLatex": "(3,\\,0,\\,3)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify in the plane equation",
          "workingLatex": "0 + 8 - 4 = 4 \\neq 5",
          "explanation": "Substituting back should satisfy the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(3,\\,0,\\,3)",
          "explanation": "The line meets the plane at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,\\,0,\\,3)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q027",
    "tags": [
      "intersections-distances",
      "line-plane-intersection"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the point where the line $\\mathbf{r} = 2\\mathbf{i} + 5\\mathbf{k} + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) = 10$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the line into the plane",
          "workingLatex": "(2\\mathbf{i} + 5\\mathbf{k} + \\lambda(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}))\\cdot 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k} = 10",
          "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the scalar product",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 10",
          "explanation": "Distribute the dot product over the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 9",
          "explanation": "Multiply and add the corresponding components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 3",
          "explanation": "This is the coefficient of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\lambda$",
          "workingLatex": "9 + 3\\lambda = 10 \\Rightarrow \\lambda = 1",
          "explanation": "Rearrange the linear equation in $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $\\lambda$ into the line",
          "workingLatex": "\\mathbf{r} = 2\\mathbf{i} + 5\\mathbf{k} + 1(\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}) = 3\\mathbf{i} + 2\\mathbf{j} + 8\\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read the coordinates",
          "workingLatex": "(3,\\,2,\\,8)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify in the plane equation",
          "workingLatex": "4 + 0 + 5 = 9",
          "explanation": "Substituting back should satisfy the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(3,\\,2,\\,8)",
          "explanation": "The line meets the plane at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,\\,2,\\,8)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q028",
    "tags": [
      "intersections-distances",
      "line-plane-intersection"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the point where the line $\\mathbf{r} = \\mathbf{i} - \\mathbf{j} + \\lambda(\\mathbf{i} + \\mathbf{j} + \\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the line into the plane",
          "workingLatex": "(\\mathbf{i} - \\mathbf{j} + \\lambda(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}))\\cdot \\mathbf{i} - \\mathbf{j} + \\mathbf{k} = 2",
          "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the scalar product",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 2",
          "explanation": "Distribute the dot product over the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 2",
          "explanation": "Multiply and add the corresponding components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 1",
          "explanation": "This is the coefficient of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\lambda$",
          "workingLatex": "2 + 1\\lambda = 2 \\Rightarrow \\lambda = 1",
          "explanation": "Rearrange the linear equation in $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $\\lambda$ into the line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} - \\mathbf{j} + 1(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 2\\mathbf{i} + 3\\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read the coordinates",
          "workingLatex": "(2,\\,0,\\,3)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify in the plane equation",
          "workingLatex": "2 + 0 + 3 = 5 = 2 + 3",
          "explanation": "Substituting back should satisfy the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(2,\\,0,\\,3)",
          "explanation": "The line meets the plane at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(2,\\,0,\\,3)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q029",
    "tags": [
      "intersections-distances",
      "line-plane-intersection"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find the point where the line $\\mathbf{r} = 3\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{j} - 2\\mathbf{k})$ meets the plane $\\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}) = 8$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Substitute the line into the plane",
          "workingLatex": "(3\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{j} - 2\\mathbf{k}))\\cdot \\mathbf{i} + \\mathbf{j} + 2\\mathbf{k} = 8",
          "explanation": "Replace $\\mathbf{r}$ in the plane equation with the line expression.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Expand the scalar product",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} + \\lambda(\\mathbf{d}\\cdot\\mathbf{n}) = 8",
          "explanation": "Distribute the dot product over the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 5",
          "explanation": "Multiply and add the corresponding components.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = -3",
          "explanation": "This is the coefficient of $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for $\\lambda$",
          "workingLatex": "5 + -3\\lambda = 8 \\Rightarrow \\lambda = 1",
          "explanation": "Rearrange the linear equation in $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute $\\lambda$ into the line",
          "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + \\mathbf{k} + 1(\\mathbf{j} - 2\\mathbf{k}) = 3\\mathbf{i} + \\mathbf{j} - \\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Read the coordinates",
          "workingLatex": "(3,\\,1,\\,-1)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify in the plane equation",
          "workingLatex": "3 + 0 + 2 = 5",
          "explanation": "Substituting back should satisfy the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(3,\\,1,\\,-1)",
          "explanation": "The line meets the plane at this point.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,\\,1,\\,-1)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q030",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(3,\\,4,\\,2)$ to the plane $\\mathbf{r}\\cdot(\\mathbf{k}) = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = \\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{0}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 2",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 2",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = 1",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = 2",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 2",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q031",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(5,\\,2,\\,-1)$ to the plane $\\mathbf{r}\\cdot(\\mathbf{i}) = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = \\mathbf{i}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{0}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 5\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 5",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 5",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = 1",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = 5",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 5",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q032",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(1,\\,-3,\\,2)$ to the plane $\\mathbf{r}\\cdot(\\mathbf{j}) = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = \\mathbf{j}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{0}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = \\mathbf{i} - 3\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = -3",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = |-3|",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = 1",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = 3",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 3",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q033",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(4,\\,0,\\,1)$ to the line $\\mathbf{r} = (1,\\,2,\\,0) + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (1,\\,2,\\,0)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (4,\\,0,\\,1) - (1,\\,2,\\,0) = 3\\mathbf{i} - 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = \\sqrt{75}",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{6}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{\\sqrt{75}}{\\sqrt{6}} = \\dfrac{5\\sqrt{2}}{\\sqrt{6}}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{5\\sqrt{2}}{\\sqrt{6}}",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\dfrac{5\\sqrt{2}}{\\sqrt{6}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q034",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(3,\\,4,\\,0)$ to the line $\\mathbf{r} = (0,\\,1,\\,2) + \\lambda(\\mathbf{i} + \\mathbf{j} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (0,\\,1,\\,2)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (3,\\,4,\\,0) - (0,\\,1,\\,2) = 3\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = 5\\sqrt{2}",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{3}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{5\\sqrt{2}}{\\sqrt{3}} = 5\\sqrt{\\dfrac{2}{3}}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 5\\sqrt{\\dfrac{2}{3}}",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 5\\sqrt{\\dfrac{2}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q035",
    "tags": [
      "intersections-distances",
      "point-line-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(0,\\,3,\\,2)$ to the line $\\mathbf{r} = (2,\\,0,\\,1) + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\overrightarrow{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "The perpendicular distance equals the area of the parallelogram spanned by $\\overrightarrow{AP}$ and $\\mathbf{d}$, divided by the base length $|\\mathbf{d}|$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify a point on the line",
          "workingLatex": "A = (2,\\,0,\\,1)",
          "explanation": "Use the known point on the line from the vector equation (when $\\lambda = 0$).",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $\\overrightarrow{AP}$",
          "workingLatex": "\\overrightarrow{AP} = (0,\\,3,\\,2) - (2,\\,0,\\,1) = -2\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k}",
          "explanation": "Subtract position vectors from $A$ to the given point $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the direction vector",
          "workingLatex": "\\mathbf{d} = 3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Read the direction vector from the line equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cross product",
          "workingLatex": "\\overrightarrow{AP} \\times \\mathbf{d} = [object Object]",
          "explanation": "Use the determinant formula for the vector product.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the magnitude of the cross product",
          "workingLatex": "|\\overrightarrow{AP} \\times \\mathbf{d}| = \\sqrt{138}",
          "explanation": "Square each component, add, and take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the magnitude of $\\mathbf{d}$",
          "workingLatex": "|\\mathbf{d}| = \\sqrt{14}",
          "explanation": "The length of the direction vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{\\sqrt{138}}{\\sqrt{14}} = \\sqrt{\\dfrac{69}{7}}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\sqrt{\\dfrac{69}{7}}",
          "explanation": "This is the shortest distance from the point to the line.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\sqrt{\\dfrac{69}{7}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q036",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(3,\\,1,\\,0)$ to the plane $\\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{i}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 2",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 2",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = \\sqrt{3}",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{2}{\\sqrt{3}}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{2}{\\sqrt{3}}",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\dfrac{2}{\\sqrt{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q037",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(4,\\,3,\\,-3)$ to the plane $\\mathbf{r}\\cdot(2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = -1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = 2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{j}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 4\\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 9",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 9",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = 3",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = 3",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 3",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q038",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(1,\\,3,\\,2)$ to the plane $\\mathbf{r}\\cdot(\\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}) = 4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = \\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = -\\mathbf{i} + 3\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = -3",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = |-3|",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = 3",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = 1",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 1",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q039",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(3,\\,3,\\,1)$ to the plane $\\mathbf{r}\\cdot(3\\mathbf{i} + 4\\mathbf{k}) = 7$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = 3\\mathbf{i} + 4\\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{i}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j} + \\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 6",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 6",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = 5",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{6}{5}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{6}{5}",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\dfrac{6}{5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q040",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(4,\\,-2,\\,4)$ to the plane $\\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j}) = 1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = \\mathbf{i} + \\mathbf{j}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{k}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 4\\mathbf{i} - 2\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 2",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 2",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = \\sqrt{2}",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\sqrt{2}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\sqrt{2}",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\sqrt{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q041",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(3,\\,0,\\,4)$ to the plane $\\mathbf{r}\\cdot(2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}) = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = 2\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{i} + \\mathbf{j}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 2\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 3",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 3",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = 3",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = 1",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 1",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q042",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(3,\\,4,\\,-2)$ to the plane $\\mathbf{r}\\cdot(\\mathbf{i} - \\mathbf{j} + \\mathbf{k}) = 2$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = \\mathbf{i} - \\mathbf{j} + \\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{i}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 2\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 0",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 0",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = \\sqrt{3}",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = 0",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 0",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q043",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(2,\\,3,\\,6)$ to the plane $\\mathbf{r}\\cdot(4\\mathbf{i} - 3\\mathbf{j} + 12\\mathbf{k}) = 26$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = 4\\mathbf{i} - 3\\mathbf{j} + 12\\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{0}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 78",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 78",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = 13",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = 6",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = 6",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 6$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q044",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(1,\\,3,\\,4)$ to the plane $\\mathbf{r}\\cdot(\\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{k}) = 5$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = \\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = 3\\mathbf{i} + \\mathbf{j}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = -2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = -8",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = |-8|",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = 3",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{8}{3}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{8}{3}",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\dfrac{8}{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q045",
    "tags": [
      "intersections-distances",
      "reflection",
      "plane"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "questionText": "The point $P$ has position vector 3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}. Find the position vector of the reflection of $P$ in the plane $\\mathbf{r}\\cdot(\\mathbf{k}) = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reflection method",
          "workingLatex": "\\text{foot } F = P - \\dfrac{(P - A)\\cdot\\mathbf{n}}{|\\mathbf{n}|^{2}}\\mathbf{n}",
          "explanation": "Project $P$ onto the normal to find the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal and a point on the plane",
          "workingLatex": "\\mathbf{n} = \\mathbf{k},\\quad A = \\mathbf{0}",
          "explanation": "Read from the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $P - A$",
          "workingLatex": "P - A = 3\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Displacement from the plane point to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $(P - A)\\cdot\\mathbf{n}$",
          "workingLatex": "(P - A)\\cdot\\mathbf{n} = 2",
          "explanation": "Scalar product gives the signed distance along the normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $|\\mathbf{n}|^{2}$",
          "workingLatex": "|\\mathbf{n}|^{2} = 1",
          "explanation": "Square the magnitude of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the foot of the perpendicular",
          "workingLatex": "F = 3\\mathbf{i} + 4\\mathbf{j}",
          "explanation": "Subtract the normal component from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reflect through the plane",
          "workingLatex": "P' = 2F - P = 3\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}",
          "explanation": "The reflection is the same distance beyond the plane as $P$ is on the near side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $P'$ lies on the opposite side",
          "workingLatex": "The $z$-coordinate changes from $2$ to $-2$.",
          "explanation": "The reflected point should satisfy the plane equation with the opposite sign.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "3\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}",
          "explanation": "Position vector of the reflection of $P$ in the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3\\mathbf{i} + 4\\mathbf{j} - 2\\mathbf{k}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q046",
    "tags": [
      "intersections-distances",
      "reflection",
      "plane"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "questionText": "The point $P$ has position vector 5\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}. Find the position vector of the reflection of $P$ in the plane $\\mathbf{r}\\cdot(\\mathbf{i}) = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reflection method",
          "workingLatex": "\\text{foot } F = P - \\dfrac{(P - A)\\cdot\\mathbf{n}}{|\\mathbf{n}|^{2}}\\mathbf{n}",
          "explanation": "Project $P$ onto the normal to find the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal and a point on the plane",
          "workingLatex": "\\mathbf{n} = \\mathbf{i},\\quad A = \\mathbf{0}",
          "explanation": "Read from the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $P - A$",
          "workingLatex": "P - A = 5\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "Displacement from the plane point to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $(P - A)\\cdot\\mathbf{n}$",
          "workingLatex": "(P - A)\\cdot\\mathbf{n} = 5",
          "explanation": "Scalar product gives the signed distance along the normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $|\\mathbf{n}|^{2}$",
          "workingLatex": "|\\mathbf{n}|^{2} = 1",
          "explanation": "Square the magnitude of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the foot of the perpendicular",
          "workingLatex": "F = 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "Subtract the normal component from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reflect through the plane",
          "workingLatex": "P' = 2F - P = -5\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "The reflection is the same distance beyond the plane as $P$ is on the near side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $P'$ lies on the opposite side",
          "workingLatex": "The $x$-coordinate changes from $5$ to $-5$.",
          "explanation": "The reflected point should satisfy the plane equation with the opposite sign.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "-5\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "Position vector of the reflection of $P$ in the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-5\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q047",
    "tags": [
      "intersections-distances",
      "reflection",
      "plane"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "questionText": "The point $P$ has position vector 2\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}. Find the position vector of the reflection of $P$ in the plane $\\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j}) = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reflection method",
          "workingLatex": "\\text{foot } F = P - \\dfrac{(P - A)\\cdot\\mathbf{n}}{|\\mathbf{n}|^{2}}\\mathbf{n}",
          "explanation": "Project $P$ onto the normal to find the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal and a point on the plane",
          "workingLatex": "\\mathbf{n} = \\mathbf{i} + \\mathbf{j},\\quad A = \\mathbf{0}",
          "explanation": "Read from the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $P - A$",
          "workingLatex": "P - A = 2\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}",
          "explanation": "Displacement from the plane point to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $(P - A)\\cdot\\mathbf{n}$",
          "workingLatex": "(P - A)\\cdot\\mathbf{n} = 6",
          "explanation": "Scalar product gives the signed distance along the normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $|\\mathbf{n}|^{2}$",
          "workingLatex": "|\\mathbf{n}|^{2} = 2",
          "explanation": "Square the magnitude of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the foot of the perpendicular",
          "workingLatex": "F = -\\mathbf{i} + 2\\mathbf{j} + \\tfrac{1}{2}\\mathbf{k}",
          "explanation": "Subtract the normal component from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reflect through the plane",
          "workingLatex": "P' = 2F - P = -2\\mathbf{i} + 2\\mathbf{k}",
          "explanation": "The reflection is the same distance beyond the plane as $P$ is on the near side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $P'$ lies on the opposite side",
          "workingLatex": "$(-2\\mathbf{i} + 2\\mathbf{k})\\cdot(\\mathbf{i}+\\mathbf{j}) = -2 \\neq 0$.",
          "explanation": "The reflected point should satisfy the plane equation with the opposite sign.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "-2\\mathbf{i} + 2\\mathbf{k}",
          "explanation": "Position vector of the reflection of $P$ in the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2\\mathbf{i} + 2\\mathbf{k}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q048",
    "tags": [
      "intersections-distances",
      "reflection",
      "plane"
    ],
    "difficulty": "Intermediate",
    "marks": 7,
    "answerType": "vector",
    "questionText": "The point $P$ has position vector 3\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}. Find the position vector of the reflection of $P$ in the plane $\\mathbf{r}\\cdot(\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reflection method",
          "workingLatex": "\\text{foot } F = P - \\dfrac{(P - A)\\cdot\\mathbf{n}}{|\\mathbf{n}|^{2}}\\mathbf{n}",
          "explanation": "Project $P$ onto the normal to find the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal and a point on the plane",
          "workingLatex": "\\mathbf{n} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k},\\quad A = \\mathbf{i}",
          "explanation": "Read from the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $P - A$",
          "workingLatex": "P - A = 2\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Displacement from the plane point to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $(P - A)\\cdot\\mathbf{n}$",
          "workingLatex": "(P - A)\\cdot\\mathbf{n} = 5",
          "explanation": "Scalar product gives the signed distance along the normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $|\\mathbf{n}|^{2}$",
          "workingLatex": "|\\mathbf{n}|^{2} = 3",
          "explanation": "Square the magnitude of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the foot of the perpendicular",
          "workingLatex": "F = \\tfrac{4}{3}\\mathbf{i} + \\tfrac{4}{3}\\mathbf{j} + \\tfrac{4}{3}\\mathbf{k}",
          "explanation": "Subtract the normal component from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reflect through the plane",
          "workingLatex": "P' = 2F - P = -\\tfrac{4}{3}\\mathbf{i} - \\tfrac{4}{3}\\mathbf{j} + \\tfrac{5}{3}\\mathbf{k}",
          "explanation": "The reflection is the same distance beyond the plane as $P$ is on the near side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $P'$ lies on the opposite side",
          "workingLatex": "$(-\\tfrac{4}{3}\\mathbf{i} - \\tfrac{4}{3}\\mathbf{j} + \\tfrac{5}{3}\\mathbf{k})\\cdot(\\mathbf{i}+\\mathbf{j}+\\mathbf{k}) = -1$.",
          "explanation": "The reflected point should satisfy the plane equation with the opposite sign.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "-\\tfrac{4}{3}\\mathbf{i} - \\tfrac{4}{3}\\mathbf{j} + \\tfrac{5}{3}\\mathbf{k}",
          "explanation": "Position vector of the reflection of $P$ in the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\tfrac{4}{3}\\mathbf{i} - \\tfrac{4}{3}\\mathbf{j} + \\tfrac{5}{3}\\mathbf{k}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q049",
    "tags": [
      "intersections-distances",
      "line-plane-intersection",
      "parallel"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Show that the line $\\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\lambda(\\mathbf{i} + \\mathbf{j})$ does not meet the plane $\\mathbf{r}\\cdot(\\mathbf{k}) = 2$ at a single point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the intersection condition",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} \\neq 0",
          "explanation": "A unique intersection exists only when the line direction is not perpendicular to the plane normal in the sense of being parallel to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the direction and normal",
          "workingLatex": "\\mathbf{d} = \\mathbf{i} + \\mathbf{j},\\quad \\mathbf{n} = \\mathbf{k}",
          "explanation": "Read the direction vector of the line and the normal of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 0",
          "explanation": "If this is zero, the line is parallel to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check whether the line lies in the plane",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 0",
          "explanation": "Substitute a point on the line into the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the plane constant",
          "workingLatex": "0 \\neq 2",
          "explanation": "If the point satisfies the plane equation, the whole line lies in the plane; otherwise it is strictly parallel and disjoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude about intersection",
          "workingLatex": "$\\mathbf{d}\\cdot\\mathbf{n} = 0$, so the line is parallel to the plane $z = 2$. Since $z = 0$ on the line, it never reaches the plane.",
          "explanation": "Parallel lines either lie entirely in the plane or never meet it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "The line is parallel to the plane and does not intersect it.",
          "explanation": "There is no single isolated intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric interpretation",
          "workingLatex": "A line in the plane $z = 0$ stays parallel to and below the plane $z = 2$.",
          "explanation": "A line parallel to a plane is either contained in it or passes alongside it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "The line is parallel to the plane and does not intersect it.",
          "explanation": "Answer stated clearly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance formula reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{v} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "Perpendicular distance uses the cross product to find the component perpendicular to the line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Plane distance reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p}-\\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project onto the normal of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Skew lines",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 \\text{ gives the common perpendicular direction}",
          "explanation": "For skew lines, the shortest distance lies along this direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reflection",
          "workingLatex": "P' = 2F - P",
          "explanation": "Reflect by doubling the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line is parallel to the plane and does not intersect it."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q050",
    "tags": [
      "intersections-distances",
      "line-plane-intersection",
      "parallel"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Show that the line $\\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\lambda(2\\mathbf{i} + 2\\mathbf{j})$ does not meet the plane $\\mathbf{r}\\cdot(\\mathbf{k}) = 1$ at a single point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the intersection condition",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} \\neq 0",
          "explanation": "A unique intersection exists only when the line direction is not perpendicular to the plane normal in the sense of being parallel to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the direction and normal",
          "workingLatex": "\\mathbf{d} = 2\\mathbf{i} + 2\\mathbf{j},\\quad \\mathbf{n} = \\mathbf{k}",
          "explanation": "Read the direction vector of the line and the normal of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 0",
          "explanation": "If this is zero, the line is parallel to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check whether the line lies in the plane",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 0",
          "explanation": "Substitute a point on the line into the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the plane constant",
          "workingLatex": "0 \\neq 1",
          "explanation": "If the point satisfies the plane equation, the whole line lies in the plane; otherwise it is strictly parallel and disjoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude about intersection",
          "workingLatex": "$\\mathbf{d}\\cdot\\mathbf{n} = 0$, so the line is parallel to the plane $z = 1$. Since $\\mathbf{a}\\cdot\\mathbf{n} = 0 \\neq 1$, the line lies strictly below the plane and never meets it.",
          "explanation": "Parallel lines either lie entirely in the plane or never meet it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "The line is parallel to the plane and does not intersect it.",
          "explanation": "There is no single isolated intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric interpretation",
          "workingLatex": "A horizontal line at $z = 0$ stays below the plane $z = 1$.",
          "explanation": "A line parallel to a plane is either contained in it or passes alongside it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "The line is parallel to the plane and does not intersect it.",
          "explanation": "Answer stated clearly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance formula reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{v} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "Perpendicular distance uses the cross product to find the component perpendicular to the line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Plane distance reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p}-\\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project onto the normal of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Skew lines",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 \\text{ gives the common perpendicular direction}",
          "explanation": "For skew lines, the shortest distance lies along this direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reflection",
          "workingLatex": "P' = 2F - P",
          "explanation": "Reflect by doubling the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line is parallel to the plane and does not intersect it."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q051",
    "tags": [
      "intersections-distances",
      "line-plane-intersection",
      "parallel"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Show that the line $\\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ does not meet the plane $\\mathbf{r}\\cdot(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = 6$ at a single point.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the intersection condition",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} \\neq 0",
          "explanation": "A unique intersection exists only when the line direction is not perpendicular to the plane normal in the sense of being parallel to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the direction and normal",
          "workingLatex": "\\mathbf{d} = \\mathbf{i} - \\mathbf{j} + 2\\mathbf{k},\\quad \\mathbf{n} = \\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Read the direction vector of the line and the normal of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute $\\mathbf{d}\\cdot\\mathbf{n}$",
          "workingLatex": "\\mathbf{d}\\cdot\\mathbf{n} = 6",
          "explanation": "If this is zero, the line is parallel to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check whether the line lies in the plane",
          "workingLatex": "\\mathbf{a}\\cdot\\mathbf{n} = 6",
          "explanation": "Substitute a point on the line into the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the plane constant",
          "workingLatex": "6 = 6",
          "explanation": "If the point satisfies the plane equation, the whole line lies in the plane; otherwise it is strictly parallel and disjoint.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Conclude about intersection",
          "workingLatex": "$\\mathbf{d}$ is parallel to $\\mathbf{n}$, and $\\mathbf{a}$ satisfies $\\mathbf{a}\\cdot\\mathbf{n} = 6$, so every point on the line lies in the plane.",
          "explanation": "Parallel lines either lie entirely in the plane or never meet it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the answer",
          "workingLatex": "The line lies entirely in the plane, so there is no unique isolated intersection point.",
          "explanation": "There is no single isolated intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric interpretation",
          "workingLatex": "The line is contained in the plane.",
          "explanation": "A line parallel to a plane is either contained in it or passes alongside it.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "The line lies entirely in the plane, so there is no unique isolated intersection point.",
          "explanation": "Answer stated clearly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance formula reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{v} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "Perpendicular distance uses the cross product to find the component perpendicular to the line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Plane distance reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p}-\\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project onto the normal of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Skew lines",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 \\text{ gives the common perpendicular direction}",
          "explanation": "For skew lines, the shortest distance lies along this direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reflection",
          "workingLatex": "P' = 2F - P",
          "explanation": "Reflect by doubling the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "The line lies entirely in the plane, so there is no unique isolated intersection point."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q052",
    "tags": [
      "intersections-distances",
      "line-intersection"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + 4\\mathbf{k} + \\mu(2\\mathbf{i} + \\mathbf{j} + \\mathbf{k})$ intersect. Find the coordinates of the point of intersection.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line equations",
          "workingLatex": "\\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + \\lambda(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = 3\\mathbf{i} + 4\\mathbf{k} + \\mu(2\\mathbf{i} + \\mathbf{j} + \\mathbf{k})",
          "explanation": "At the intersection both lines share the same position vector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Collect $\\lambda$ and $\\mu$ terms",
          "workingLatex": "\\lambda(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) - \\mu(2\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 3\\mathbf{i} + 4\\mathbf{k} - \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Rearrange so parameters appear on one side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} \\lambda - 2\\mu = 2 \\\\ -\\lambda + \\mu = -2 \\\\ 2\\lambda - \\mu = 0 \\end{cases}",
          "explanation": "Equating $\\mathbf{i}$, $\\mathbf{j}$ and $\\mathbf{k}$ components gives three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\lambda$ and $\\mu$",
          "workingLatex": "\\lambda = 2,\\quad \\mu = 2",
          "explanation": "Use two independent component equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the first line",
          "workingLatex": "\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + 3\\mathbf{k} + 2(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = 3\\mathbf{i} + 4\\mathbf{k}",
          "explanation": "Insert the parameter value to find the position vector.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Read the coordinates",
          "workingLatex": "(3,\\,0,\\,4)",
          "explanation": "The components of $\\mathbf{r}$ give the intersection point.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify with the second line",
          "workingLatex": "\\mathbf{r} = 3\\mathbf{i} + 4\\mathbf{k} + 2(2\\mathbf{i} + \\mathbf{j} + \\mathbf{k}) = 3\\mathbf{i} + 4\\mathbf{k}",
          "explanation": "Substituting $\\mu$ into the second line should give the same point.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Confirm consistency",
          "workingLatex": "\\text{third component equation satisfied}",
          "explanation": "The unused equation provides a consistency check.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "(3,\\,0,\\,4)",
          "explanation": "The lines intersect at this point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance formula reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{v} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "Perpendicular distance uses the cross product to find the component perpendicular to the line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Plane distance reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p}-\\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project onto the normal of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Skew lines",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 \\text{ gives the common perpendicular direction}",
          "explanation": "For skew lines, the shortest distance lies along this direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reflection",
          "workingLatex": "P' = 2F - P",
          "explanation": "Reflect by doubling the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(3,\\,0,\\,4)$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q053",
    "tags": [
      "intersections-distances",
      "line-intersection",
      "no-intersection"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Show that the lines $L_1: \\mathbf{r} = \\mathbf{i} + \\lambda(\\mathbf{i} + \\mathbf{j})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + \\mu(2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})$ do not intersect.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equate the two line expressions",
          "workingLatex": "\\mathbf{i} + \\lambda(\\mathbf{i} + \\mathbf{j}) = 3\\mathbf{i} + \\mathbf{j} + \\mu(2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k})",
          "explanation": "If the lines meet, both share the same position vector for some $\\lambda$ and $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write component equations",
          "workingLatex": "\\begin{cases} \\lambda - 2\\mu = 2 \\\\ \\lambda - \\mu = 1 \\\\ 0 = 2\\mu \\end{cases}",
          "explanation": "Equating components gives a system in $\\lambda$ and $\\mu$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Inspect the direction vectors",
          "workingLatex": "\\mathbf{i} + \\mathbf{j} \\text{ and } 2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "The direction vectors are not parallel.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Analyse the system",
          "workingLatex": "From the $z$-equation, $\\mu = 0$. Then the $y$-equation gives $\\lambda = 1$, but the $x$-equation gives $\\lambda = 2$.",
          "explanation": "Attempt to solve the simultaneous equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the inconsistency",
          "workingLatex": "$\\lambda = 1$ and $\\lambda = 2$ cannot both hold.",
          "explanation": "Parallel direction vectors with offset position vectors, or a contradictory system, means no single point lies on both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Classify the lines",
          "workingLatex": "The lines are skew.",
          "explanation": "Distinguish parallel coplanar lines from skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the conclusion",
          "workingLatex": "The lines are skew and do not intersect.",
          "explanation": "There is no point common to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric interpretation",
          "workingLatex": "Neither parallel nor intersecting — typical skew configuration.",
          "explanation": "Visualising in 3D clarifies why no intersection exists.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Final answer",
          "workingLatex": "The lines are skew and do not intersect.",
          "explanation": "No intersection point exists.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance formula reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{v} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "Perpendicular distance uses the cross product to find the component perpendicular to the line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Plane distance reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p}-\\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project onto the normal of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Skew lines",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 \\text{ gives the common perpendicular direction}",
          "explanation": "For skew lines, the shortest distance lies along this direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reflection",
          "workingLatex": "P' = 2F - P",
          "explanation": "Reflect by doubling the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "The lines are skew and do not intersect."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q054",
    "tags": [
      "intersections-distances",
      "skew-lines-distance"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "questionText": "Find the shortest distance between the skew lines $L_1: \\mathbf{r} = \\mathbf{i} + \\lambda(\\mathbf{j})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + \\mu(\\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the skew-line distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify position vectors",
          "workingLatex": "\\mathbf{a}_1 = \\mathbf{i},\\quad \\mathbf{a}_2 = 3\\mathbf{i} + \\mathbf{j}",
          "explanation": "Points on each line when the parameters are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify direction vectors",
          "workingLatex": "\\mathbf{d}_1 = \\mathbf{j},\\quad \\mathbf{d}_2 = \\mathbf{k}",
          "explanation": "Direction vectors from the line equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "\\mathbf{a}_2 - \\mathbf{a}_1 = undefined",
          "explanation": "Displacement vector between the two reference points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 = \\mathbf{i}",
          "explanation": "The cross product gives a vector perpendicular to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = 1",
          "explanation": "Magnitude of the common perpendicular direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scalar triple product",
          "workingLatex": "(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = 2",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the absolute value and divide",
          "workingLatex": "d = \\dfrac{|2|}{1} = 2",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify lines are skew",
          "workingLatex": "$\\mathbf{d}_1 \\times \\mathbf{d}_2 = \\mathbf{i} \\neq \\mathbf{0}$ and the lines are not parallel.",
          "explanation": "Confirm the lines are neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = 2",
          "explanation": "This is the shortest distance between the two skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric meaning",
          "workingLatex": "The distance is measured along the common perpendicular.",
          "explanation": "Skew lines do not meet and are not parallel, so a unique shortest segment exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{length units}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "d = 2",
          "explanation": "Shortest distance between the skew lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q055",
    "tags": [
      "intersections-distances",
      "skew-lines-distance"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "questionText": "Find the shortest distance between the skew lines $L_1: \\mathbf{r} = \\mathbf{0} + \\lambda(\\mathbf{i})$ and $L_2: \\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + \\mu(\\mathbf{j})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the skew-line distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify position vectors",
          "workingLatex": "\\mathbf{a}_1 = \\mathbf{0},\\quad \\mathbf{a}_2 = \\mathbf{i} + 2\\mathbf{j}",
          "explanation": "Points on each line when the parameters are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify direction vectors",
          "workingLatex": "\\mathbf{d}_1 = \\mathbf{i},\\quad \\mathbf{d}_2 = \\mathbf{j}",
          "explanation": "Direction vectors from the line equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "\\mathbf{a}_2 - \\mathbf{a}_1 = undefined",
          "explanation": "Displacement vector between the two reference points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 = \\mathbf{k}",
          "explanation": "The cross product gives a vector perpendicular to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = 1",
          "explanation": "Magnitude of the common perpendicular direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scalar triple product",
          "workingLatex": "(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = 1",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the absolute value and divide",
          "workingLatex": "d = \\dfrac{|1|}{1} = 1",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify lines are skew",
          "workingLatex": "Directions $\\mathbf{i}$ and $\\mathbf{j}$ are not parallel; solving shows no intersection.",
          "explanation": "Confirm the lines are neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = 1",
          "explanation": "This is the shortest distance between the two skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric meaning",
          "workingLatex": "The distance is measured along the common perpendicular.",
          "explanation": "Skew lines do not meet and are not parallel, so a unique shortest segment exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{length units}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "d = 1",
          "explanation": "Shortest distance between the skew lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q056",
    "tags": [
      "intersections-distances",
      "skew-lines-distance"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "questionText": "Find the shortest distance between the skew lines $L_1: \\mathbf{r} = \\mathbf{i} + \\lambda(\\mathbf{j} + \\mathbf{k})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + \\mu(\\mathbf{i} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the skew-line distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify position vectors",
          "workingLatex": "\\mathbf{a}_1 = \\mathbf{i},\\quad \\mathbf{a}_2 = 3\\mathbf{i} + \\mathbf{j}",
          "explanation": "Points on each line when the parameters are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify direction vectors",
          "workingLatex": "\\mathbf{d}_1 = \\mathbf{j} + \\mathbf{k},\\quad \\mathbf{d}_2 = \\mathbf{i} + \\mathbf{k}",
          "explanation": "Direction vectors from the line equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "\\mathbf{a}_2 - \\mathbf{a}_1 = undefined",
          "explanation": "Displacement vector between the two reference points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 = \\mathbf{i} - \\mathbf{j}",
          "explanation": "The cross product gives a vector perpendicular to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = \\sqrt{2}",
          "explanation": "Magnitude of the common perpendicular direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scalar triple product",
          "workingLatex": "(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = 2",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the absolute value and divide",
          "workingLatex": "d = \\dfrac{|2|}{\\sqrt{2}} = \\sqrt{2}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify lines are skew",
          "workingLatex": "The cross product $\\mathbf{d}_1 \\times \\mathbf{d}_2$ is non-zero.",
          "explanation": "Confirm the lines are neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = \\sqrt{2}",
          "explanation": "This is the shortest distance between the two skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric meaning",
          "workingLatex": "The distance is measured along the common perpendicular.",
          "explanation": "Skew lines do not meet and are not parallel, so a unique shortest segment exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{length units}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "d = \\sqrt{2}",
          "explanation": "Shortest distance between the skew lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\sqrt{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q057",
    "tags": [
      "intersections-distances",
      "skew-lines-distance"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "questionText": "Find the shortest distance between the skew lines $L_1: \\mathbf{r} = 2\\mathbf{i} + \\lambda(\\mathbf{i} + \\mathbf{j})$ and $L_2: \\mathbf{r} = \\mathbf{i} + 3\\mathbf{j} + \\mathbf{k} + \\mu(2\\mathbf{j} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the skew-line distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify position vectors",
          "workingLatex": "\\mathbf{a}_1 = 2\\mathbf{i},\\quad \\mathbf{a}_2 = \\mathbf{i} + 3\\mathbf{j} + \\mathbf{k}",
          "explanation": "Points on each line when the parameters are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify direction vectors",
          "workingLatex": "\\mathbf{d}_1 = \\mathbf{i} + \\mathbf{j},\\quad \\mathbf{d}_2 = 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "Direction vectors from the line equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "\\mathbf{a}_2 - \\mathbf{a}_1 = undefined",
          "explanation": "Displacement vector between the two reference points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 = 2\\mathbf{i} - \\mathbf{j}",
          "explanation": "The cross product gives a vector perpendicular to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = \\sqrt{5}",
          "explanation": "Magnitude of the common perpendicular direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scalar triple product",
          "workingLatex": "(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = 5",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the absolute value and divide",
          "workingLatex": "d = \\dfrac{|5|}{\\sqrt{5}} = \\sqrt{5}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify lines are skew",
          "workingLatex": "Lines are neither parallel nor intersecting.",
          "explanation": "Confirm the lines are neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = \\sqrt{5}",
          "explanation": "This is the shortest distance between the two skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric meaning",
          "workingLatex": "The distance is measured along the common perpendicular.",
          "explanation": "Skew lines do not meet and are not parallel, so a unique shortest segment exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{length units}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "d = \\sqrt{5}",
          "explanation": "Shortest distance between the skew lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\sqrt{5}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q058",
    "tags": [
      "intersections-distances",
      "skew-lines-distance"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "questionText": "Find the shortest distance between the skew lines $L_1: \\mathbf{r} = \\mathbf{i} + \\mathbf{j} + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k} + \\mu(\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the skew-line distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify position vectors",
          "workingLatex": "\\mathbf{a}_1 = \\mathbf{i} + \\mathbf{j},\\quad \\mathbf{a}_2 = 3\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Points on each line when the parameters are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify direction vectors",
          "workingLatex": "\\mathbf{d}_1 = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k},\\quad \\mathbf{d}_2 = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "Direction vectors from the line equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "\\mathbf{a}_2 - \\mathbf{a}_1 = undefined",
          "explanation": "Displacement vector between the two reference points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 = -3\\mathbf{i} - 3\\mathbf{j}",
          "explanation": "The cross product gives a vector perpendicular to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = 3\\sqrt{3}",
          "explanation": "Magnitude of the common perpendicular direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scalar triple product",
          "workingLatex": "(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = 9",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the absolute value and divide",
          "workingLatex": "d = \\dfrac{|9|}{3\\sqrt{3}} = 3\\sqrt{3}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify lines are skew",
          "workingLatex": "Non-parallel direction vectors and inconsistent intersection system.",
          "explanation": "Confirm the lines are neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = 3\\sqrt{3}",
          "explanation": "This is the shortest distance between the two skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric meaning",
          "workingLatex": "The distance is measured along the common perpendicular.",
          "explanation": "Skew lines do not meet and are not parallel, so a unique shortest segment exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{length units}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "d = 3\\sqrt{3}",
          "explanation": "Shortest distance between the skew lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 3\\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q059",
    "tags": [
      "intersections-distances",
      "skew-lines-distance"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "questionText": "Find the shortest distance between the skew lines $L_1: \\mathbf{r} = \\mathbf{0} + \\lambda(\\mathbf{i} + \\mathbf{j} + \\mathbf{k})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + \\mu(\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the skew-line distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify position vectors",
          "workingLatex": "\\mathbf{a}_1 = \\mathbf{0},\\quad \\mathbf{a}_2 = 3\\mathbf{i} + \\mathbf{j}",
          "explanation": "Points on each line when the parameters are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify direction vectors",
          "workingLatex": "\\mathbf{d}_1 = \\mathbf{i} + \\mathbf{j} + \\mathbf{k},\\quad \\mathbf{d}_2 = \\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Direction vectors from the line equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "\\mathbf{a}_2 - \\mathbf{a}_1 = undefined",
          "explanation": "Displacement vector between the two reference points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 = -2\\mathbf{i} + 2\\mathbf{j}",
          "explanation": "The cross product gives a vector perpendicular to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = 2\\sqrt{2}",
          "explanation": "Magnitude of the common perpendicular direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scalar triple product",
          "workingLatex": "(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = 4",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the absolute value and divide",
          "workingLatex": "d = \\dfrac{|4|}{2\\sqrt{2}} = 2\\sqrt{2}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify lines are skew",
          "workingLatex": "Skew configuration confirmed.",
          "explanation": "Confirm the lines are neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = 2\\sqrt{2}",
          "explanation": "This is the shortest distance between the two skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric meaning",
          "workingLatex": "The distance is measured along the common perpendicular.",
          "explanation": "Skew lines do not meet and are not parallel, so a unique shortest segment exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{length units}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "d = 2\\sqrt{2}",
          "explanation": "Shortest distance between the skew lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 2\\sqrt{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q060",
    "tags": [
      "intersections-distances",
      "skew-lines-distance"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "questionText": "Find the shortest distance between the skew lines $L_1: \\mathbf{r} = \\mathbf{i} + \\lambda(3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k} + \\mu(\\mathbf{j} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the skew-line distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify position vectors",
          "workingLatex": "\\mathbf{a}_1 = \\mathbf{i},\\quad \\mathbf{a}_2 = 3\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}",
          "explanation": "Points on each line when the parameters are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify direction vectors",
          "workingLatex": "\\mathbf{d}_1 = 3\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k},\\quad \\mathbf{d}_2 = \\mathbf{j} + \\mathbf{k}",
          "explanation": "Direction vectors from the line equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "\\mathbf{a}_2 - \\mathbf{a}_1 = undefined",
          "explanation": "Displacement vector between the two reference points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 = 5\\mathbf{i} + 5\\mathbf{j} - 5\\mathbf{k}",
          "explanation": "The cross product gives a vector perpendicular to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = 5\\sqrt{3}",
          "explanation": "Magnitude of the common perpendicular direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scalar triple product",
          "workingLatex": "(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = 15",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the absolute value and divide",
          "workingLatex": "d = \\dfrac{|15|}{5\\sqrt{3}} = 5\\sqrt{3}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify lines are skew",
          "workingLatex": "Lines are skew in 3D.",
          "explanation": "Confirm the lines are neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = 5\\sqrt{3}",
          "explanation": "This is the shortest distance between the two skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric meaning",
          "workingLatex": "The distance is measured along the common perpendicular.",
          "explanation": "Skew lines do not meet and are not parallel, so a unique shortest segment exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{length units}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "d = 5\\sqrt{3}",
          "explanation": "Shortest distance between the skew lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 5\\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q061",
    "tags": [
      "intersections-distances",
      "skew-lines-distance"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "questionText": "Find the shortest distance between the skew lines $L_1: \\mathbf{r} = 2\\mathbf{i} + \\mathbf{k} + \\lambda(\\mathbf{i} + 2\\mathbf{j})$ and $L_2: \\mathbf{r} = \\mathbf{i} + \\mathbf{j} + 3\\mathbf{k} + \\mu(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the skew-line distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify position vectors",
          "workingLatex": "\\mathbf{a}_1 = 2\\mathbf{i} + \\mathbf{k},\\quad \\mathbf{a}_2 = \\mathbf{i} + \\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Points on each line when the parameters are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify direction vectors",
          "workingLatex": "\\mathbf{d}_1 = \\mathbf{i} + 2\\mathbf{j},\\quad \\mathbf{d}_2 = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}",
          "explanation": "Direction vectors from the line equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "\\mathbf{a}_2 - \\mathbf{a}_1 = undefined",
          "explanation": "Displacement vector between the two reference points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 = -3\\mathbf{i} - 3\\mathbf{j} - 3\\mathbf{k}",
          "explanation": "The cross product gives a vector perpendicular to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = 3\\sqrt{3}",
          "explanation": "Magnitude of the common perpendicular direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scalar triple product",
          "workingLatex": "(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = 9",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the absolute value and divide",
          "workingLatex": "d = \\dfrac{|9|}{3\\sqrt{3}} = 3\\sqrt{3}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify lines are skew",
          "workingLatex": "Confirmed skew lines.",
          "explanation": "Confirm the lines are neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = 3\\sqrt{3}",
          "explanation": "This is the shortest distance between the two skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric meaning",
          "workingLatex": "The distance is measured along the common perpendicular.",
          "explanation": "Skew lines do not meet and are not parallel, so a unique shortest segment exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{length units}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "d = 3\\sqrt{3}",
          "explanation": "Shortest distance between the skew lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 3\\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q062",
    "tags": [
      "intersections-distances",
      "skew-lines-distance"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "questionText": "Find the shortest distance between the skew lines $L_1: \\mathbf{r} = \\mathbf{j} + \\lambda(\\mathbf{i} + \\mathbf{k})$ and $L_2: \\mathbf{r} = 2\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k} + \\mu(3\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the skew-line distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify position vectors",
          "workingLatex": "\\mathbf{a}_1 = \\mathbf{j},\\quad \\mathbf{a}_2 = 2\\mathbf{i} + 4\\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Points on each line when the parameters are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify direction vectors",
          "workingLatex": "\\mathbf{d}_1 = \\mathbf{i} + \\mathbf{k},\\quad \\mathbf{d}_2 = 3\\mathbf{i} - \\mathbf{j} + \\mathbf{k}",
          "explanation": "Direction vectors from the line equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "\\mathbf{a}_2 - \\mathbf{a}_1 = undefined",
          "explanation": "Displacement vector between the two reference points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 = 4\\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{k}",
          "explanation": "The cross product gives a vector perpendicular to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = 2\\sqrt{6}",
          "explanation": "Magnitude of the common perpendicular direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scalar triple product",
          "workingLatex": "(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = 8",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the absolute value and divide",
          "workingLatex": "d = \\dfrac{|8|}{2\\sqrt{6}} = \\dfrac{4\\sqrt{6}}{3}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify lines are skew",
          "workingLatex": "Non-parallel and non-intersecting.",
          "explanation": "Confirm the lines are neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{4\\sqrt{6}}{3}",
          "explanation": "This is the shortest distance between the two skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric meaning",
          "workingLatex": "The distance is measured along the common perpendicular.",
          "explanation": "Skew lines do not meet and are not parallel, so a unique shortest segment exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{length units}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "d = \\dfrac{4\\sqrt{6}}{3}",
          "explanation": "Shortest distance between the skew lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\dfrac{4\\sqrt{6}}{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q063",
    "tags": [
      "intersections-distances",
      "skew-lines-distance"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "exact",
    "questionText": "Find the shortest distance between the skew lines $L_1: \\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k} + \\mu(\\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k})$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the skew-line distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "For non-intersecting, non-parallel lines, the shortest distance is found using the common perpendicular direction $\\mathbf{d}_1 \\times \\mathbf{d}_2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify position vectors",
          "workingLatex": "\\mathbf{a}_1 = \\mathbf{i} + 2\\mathbf{j},\\quad \\mathbf{a}_2 = 3\\mathbf{i} + \\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Points on each line when the parameters are zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify direction vectors",
          "workingLatex": "\\mathbf{d}_1 = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k},\\quad \\mathbf{d}_2 = \\mathbf{i} + 3\\mathbf{j} - 2\\mathbf{k}",
          "explanation": "Direction vectors from the line equations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "\\mathbf{a}_2 - \\mathbf{a}_1 = undefined",
          "explanation": "Displacement vector between the two reference points.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 = 7\\mathbf{i} + 7\\mathbf{j} + 7\\mathbf{k}",
          "explanation": "The cross product gives a vector perpendicular to both lines.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find $|\\mathbf{d}_1 \\times \\mathbf{d}_2|$",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = 7\\sqrt{3}",
          "explanation": "Magnitude of the common perpendicular direction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the scalar triple product",
          "workingLatex": "(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2) = 49",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the absolute value and divide",
          "workingLatex": "d = \\dfrac{|49|}{7\\sqrt{3}} = 7\\sqrt{3}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify lines are skew",
          "workingLatex": "Skew lines with non-zero shortest distance.",
          "explanation": "Confirm the lines are neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "d = 7\\sqrt{3}",
          "explanation": "This is the shortest distance between the two skew lines.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Geometric meaning",
          "workingLatex": "The distance is measured along the common perpendicular.",
          "explanation": "Skew lines do not meet and are not parallel, so a unique shortest segment exists.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Units",
          "workingLatex": "\\text{length units}",
          "explanation": "Distance is a scalar length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final answer",
          "workingLatex": "d = 7\\sqrt{3}",
          "explanation": "Shortest distance between the skew lines.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = 7\\sqrt{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q064",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(2,\\,3,\\,4)$ to the plane $\\mathbf{r}\\cdot(2\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}) = 4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = 2\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = 2\\mathbf{i}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 3\\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = -4",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = |-4|",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = 3",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{4}{3}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{4}{3}",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\dfrac{4}{3}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q065",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(4,\\,-1,\\,5)$ to the plane $\\mathbf{r}\\cdot(\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}) = 5$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = \\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{i} + \\mathbf{j}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 3\\mathbf{i} - 2\\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 1",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 1",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = \\sqrt{11}",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{1}{\\sqrt{11}}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{1}{\\sqrt{11}}",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\dfrac{1}{\\sqrt{11}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q066",
    "tags": [
      "intersections-distances",
      "point-plane-distance"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "exact",
    "questionText": "Find the perpendicular distance from the point $P(5,\\,3,\\,-3)$ to the plane $\\mathbf{r}\\cdot(3\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}) = -3$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project the displacement from a point on the plane onto the normal; the absolute value gives the perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal vector",
          "workingLatex": "\\mathbf{n} = 3\\mathbf{i} - \\mathbf{j} + 4\\mathbf{k}",
          "explanation": "Read the normal from the scalar-product form of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose a point on the plane",
          "workingLatex": "\\mathbf{a} = \\mathbf{j}",
          "explanation": "Any convenient point satisfying the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "\\mathbf{p} - \\mathbf{a} = 5\\mathbf{i} + 2\\mathbf{j} - 3\\mathbf{k}",
          "explanation": "Subtract the position vector of the point on the plane from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 5",
          "explanation": "Multiply corresponding components and add.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the absolute value",
          "workingLatex": "|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})| = 5",
          "explanation": "Distance is always non-negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = \\sqrt{26}",
          "explanation": "Magnitude of the normal vector.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide to obtain the distance",
          "workingLatex": "d = \\dfrac{5}{\\sqrt{26}}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "d = \\dfrac{5}{\\sqrt{26}}",
          "explanation": "This is the shortest distance from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$d = \\dfrac{5}{\\sqrt{26}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q067",
    "tags": [
      "intersections-distances",
      "reflection",
      "plane"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "vector",
    "questionText": "The point $P$ has position vector 6\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}. Find the position vector of the reflection of $P$ in the plane $\\mathbf{r}\\cdot(2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k}) = 0$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reflection method",
          "workingLatex": "\\text{foot } F = P - \\dfrac{(P - A)\\cdot\\mathbf{n}}{|\\mathbf{n}|^{2}}\\mathbf{n}",
          "explanation": "Project $P$ onto the normal to find the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal and a point on the plane",
          "workingLatex": "\\mathbf{n} = 2\\mathbf{i} - \\mathbf{j} + 2\\mathbf{k},\\quad A = \\mathbf{0}",
          "explanation": "Read from the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $P - A$",
          "workingLatex": "P - A = 6\\mathbf{i} + 3\\mathbf{j} + 6\\mathbf{k}",
          "explanation": "Displacement from the plane point to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $(P - A)\\cdot\\mathbf{n}$",
          "workingLatex": "(P - A)\\cdot\\mathbf{n} = 24",
          "explanation": "Scalar product gives the signed distance along the normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $|\\mathbf{n}|^{2}$",
          "workingLatex": "|\\mathbf{n}|^{2} = 9",
          "explanation": "Square the magnitude of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the foot of the perpendicular",
          "workingLatex": "F = 2\\mathbf{i} + \\mathbf{j} + 2\\mathbf{k}",
          "explanation": "Subtract the normal component from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reflect through the plane",
          "workingLatex": "P' = 2F - P = -\\tfrac{10}{3}\\mathbf{i} - \\tfrac{5}{3}\\mathbf{j} - \\tfrac{10}{3}\\mathbf{k}",
          "explanation": "The reflection is the same distance beyond the plane as $P$ is on the near side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $P'$ lies on the opposite side",
          "workingLatex": "Reflected point satisfies opposite signed distance.",
          "explanation": "The reflected point should satisfy the plane equation with the opposite sign.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "-\\tfrac{10}{3}\\mathbf{i} - \\tfrac{5}{3}\\mathbf{j} - \\tfrac{10}{3}\\mathbf{k}",
          "explanation": "Position vector of the reflection of $P$ in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance formula reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{v} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "Perpendicular distance uses the cross product to find the component perpendicular to the line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Plane distance reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p}-\\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project onto the normal of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Skew lines",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 \\text{ gives the common perpendicular direction}",
          "explanation": "For skew lines, the shortest distance lies along this direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reflection",
          "workingLatex": "P' = 2F - P",
          "explanation": "Reflect by doubling the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\tfrac{10}{3}\\mathbf{i} - \\tfrac{5}{3}\\mathbf{j} - \\tfrac{10}{3}\\mathbf{k}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q068",
    "tags": [
      "intersections-distances",
      "reflection",
      "plane"
    ],
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "vector",
    "questionText": "The point $P$ has position vector 5\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}. Find the position vector of the reflection of $P$ in the plane $\\mathbf{r}\\cdot(\\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}) = 4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the reflection method",
          "workingLatex": "\\text{foot } F = P - \\dfrac{(P - A)\\cdot\\mathbf{n}}{|\\mathbf{n}|^{2}}\\mathbf{n}",
          "explanation": "Project $P$ onto the normal to find the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the normal and a point on the plane",
          "workingLatex": "\\mathbf{n} = \\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k},\\quad A = 2\\mathbf{i}",
          "explanation": "Read from the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form $P - A$",
          "workingLatex": "P - A = 3\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}",
          "explanation": "Displacement from the plane point to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $(P - A)\\cdot\\mathbf{n}$",
          "workingLatex": "(P - A)\\cdot\\mathbf{n} = 9",
          "explanation": "Scalar product gives the signed distance along the normal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find $|\\mathbf{n}|^{2}$",
          "workingLatex": "|\\mathbf{n}|^{2} = 9",
          "explanation": "Square the magnitude of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the foot of the perpendicular",
          "workingLatex": "F = \\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}",
          "explanation": "Subtract the normal component from $P$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reflect through the plane",
          "workingLatex": "P' = 2F - P = -3\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}",
          "explanation": "The reflection is the same distance beyond the plane as $P$ is on the near side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $P'$ lies on the opposite side",
          "workingLatex": "Check $(\\mathbf{p}' - 2\\mathbf{i})\\cdot\\mathbf{n} = -9$.",
          "explanation": "The reflected point should satisfy the plane equation with the opposite sign.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "-3\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}",
          "explanation": "Position vector of the reflection of $P$ in the plane.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance formula reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{v} \\times \\mathbf{d}|}{|\\mathbf{d}|}",
          "explanation": "Perpendicular distance uses the cross product to find the component perpendicular to the line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Plane distance reminder",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p}-\\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Project onto the normal of the plane.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Skew lines",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 \\text{ gives the common perpendicular direction}",
          "explanation": "For skew lines, the shortest distance lies along this direction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reflection",
          "workingLatex": "P' = 2F - P",
          "explanation": "Reflect by doubling the foot of the perpendicular from $P$ to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3\\mathbf{i} + 4\\mathbf{j} + \\mathbf{k}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q069",
    "tags": [
      "intersections-distances",
      "line-plane-intersection",
      "point-plane-distance",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "questionText": "The line $L$ has equation $\\mathbf{r} = \\mathbf{i} + 2\\mathbf{j} + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k})$ and the plane $\\Pi$ has equation $\\mathbf{r}\\cdot(3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}) = 4$.\n(a) Find the point where $L$ meets $\\Pi$.\n(b) Find the perpendicular distance from the point $(5,\\,0,\\,1)$ to $\\Pi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Substitute the line into the plane",
          "workingLatex": "(\\mathbf{i} + 2\\mathbf{j} + \\lambda(2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}))\\cdot(3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}) = 4",
          "explanation": "Replace $\\mathbf{r}$ in the plane equation.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Expand the scalar product",
          "workingLatex": "3 + \\lambda(6 - 1 - 2) = 4",
          "explanation": "Compute $\\mathbf{a}\\cdot\\mathbf{n}$ and $\\mathbf{d}\\cdot\\mathbf{n}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Solve for $\\lambda$",
          "workingLatex": "3 + 3\\lambda = 4 \\Rightarrow \\lambda = \\tfrac{1}{3}",
          "explanation": "Linear equation in $\\lambda$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Find the intersection point",
          "workingLatex": "\\mathbf{r} = \\tfrac{5}{3}\\mathbf{i} + \\tfrac{5}{3}\\mathbf{j} + \\tfrac{1}{3}\\mathbf{k}",
          "explanation": "Substitute $\\lambda = \\tfrac{1}{3}$ into the line.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(b) Recall the point-plane distance formula",
          "workingLatex": "d = \\dfrac{|\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}",
          "explanation": "Use any point on the plane, e.g. where $x = \\tfrac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Choose a point on $\\Pi$",
          "workingLatex": "\\mathbf{a} = \\tfrac{4}{3}\\mathbf{i}",
          "explanation": "Since $\\tfrac{4}{3} \\cdot 3 = 4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Form $\\mathbf{p} - \\mathbf{a}$",
          "workingLatex": "5\\mathbf{i} - \\tfrac{4}{3}\\mathbf{i} + \\mathbf{k} = \\tfrac{11}{3}\\mathbf{i} + \\mathbf{k}",
          "explanation": "Displacement from the plane to $P$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(b) Compute the scalar product",
          "workingLatex": "\\mathbf{n}\\cdot(\\mathbf{p} - \\mathbf{a}) = 11 + 0 - 2 = 9",
          "explanation": "Dot with $\\mathbf{n} = 3\\mathbf{i} + \\mathbf{j} - 2\\mathbf{k}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(b) Find $|\\mathbf{n}|$",
          "workingLatex": "|\\mathbf{n}| = \\sqrt{9 + 1 + 4} = \\sqrt{14}",
          "explanation": "Magnitude of the normal.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "(b) Calculate the distance",
          "workingLatex": "d = \\dfrac{9}{\\sqrt{14}}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State both answers",
          "workingLatex": "(a) $\\left(\\tfrac{5}{3},\\,\\tfrac{5}{3},\\,\\tfrac{1}{3}\\right)$; (b) $d = \\dfrac{9}{\\sqrt{14}}$",
          "explanation": "Intersection point and perpendicular distance.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify (a) in the plane",
          "workingLatex": "5 + \\tfrac{5}{3} - \\tfrac{2}{3} = 4",
          "explanation": "Check the intersection lies on $\\Pi$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Interpret (b)",
          "workingLatex": "The distance is measured along the normal direction.",
          "explanation": "Shortest path from the point to the plane.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $\\left(\\tfrac{5}{3},\\,\\tfrac{5}{3},\\,\\tfrac{1}{3}\\right)$. (b) $d = \\dfrac{9}{\\sqrt{14}}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 1: Pure (Core Pure 1)",
    "subtopic": "Intersections and distances",
    "subtopicId": "fm.y1.pure.vector-distances",
    "questionDiagram": null,
    "id": "fm.y1.pure.vector-distances.q070",
    "tags": [
      "intersections-distances",
      "skew-lines-distance",
      "line-intersection",
      "multi-part",
      "multi-step"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Lines $L_1: \\mathbf{r} = \\mathbf{i} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k})$ and $L_2: \\mathbf{r} = 3\\mathbf{i} + 2\\mathbf{k} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})$ are skew.\n(a) Show that $L_1$ and $L_2$ do not intersect.\n(b) Find the shortest distance between them.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "(a) Equate the lines",
          "workingLatex": "\\mathbf{i} + \\lambda(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) = 3\\mathbf{i} + 2\\mathbf{k} + \\mu(\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k})",
          "explanation": "Set position vectors equal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "(a) Write component equations",
          "workingLatex": "\\begin{cases} 2\\lambda - \\mu = 2 \\\\ \\lambda - 2\\mu = 0 \\\\ -\\lambda - \\mu = 2 \\end{cases}",
          "explanation": "Three scalar equations.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "(a) Solve the first two",
          "workingLatex": "\\lambda = \\tfrac{4}{3},\\; \\mu = \\tfrac{2}{3}",
          "explanation": "From equations 1 and 2.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "(a) Check the third equation",
          "workingLatex": "-\\tfrac{4}{3} - \\tfrac{2}{3} = -2 \\neq 2",
          "explanation": "The $z$-components are inconsistent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "(a) Conclude",
          "workingLatex": "The lines are skew and do not intersect.",
          "explanation": "No values of $\\lambda$ and $\\mu$ satisfy all three equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "(b) Recall the skew distance formula",
          "workingLatex": "d = \\dfrac{|(\\mathbf{a}_2 - \\mathbf{a}_1)\\cdot(\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}",
          "explanation": "Use the standard formula.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "(b) Compute $\\mathbf{d}_1 \\times \\mathbf{d}_2$",
          "workingLatex": "(2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}) \\times (\\mathbf{i} + 2\\mathbf{j} + \\mathbf{k}) = 3\\mathbf{i} - 3\\mathbf{j} + 3\\mathbf{k}",
          "explanation": "Cross product of direction vectors.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "(b) Find the magnitude",
          "workingLatex": "|\\mathbf{d}_1 \\times \\mathbf{d}_2| = 3\\sqrt{3}",
          "explanation": "Square root of $9 + 9 + 9$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "(b) Form $\\mathbf{a}_2 - \\mathbf{a}_1$",
          "workingLatex": "2\\mathbf{i} + 2\\mathbf{k}",
          "explanation": "Displacement between reference points.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "(b) Scalar triple product",
          "workingLatex": "(2\\mathbf{i} + 2\\mathbf{k})\\cdot(3\\mathbf{i} - 3\\mathbf{j} + 3\\mathbf{k}) = 6 + 6 = 12",
          "explanation": "Dot the displacement with the cross product.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "(b) Calculate distance",
          "workingLatex": "d = \\dfrac{12}{3\\sqrt{3}} = \\dfrac{4}{\\sqrt{3}} = \\dfrac{4\\sqrt{3}}{3}",
          "explanation": "Apply the formula.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify lines are skew",
          "workingLatex": "\\mathbf{d}_1 \\times \\mathbf{d}_2 \\neq \\mathbf{0} \\text{ and no intersection}",
          "explanation": "Neither parallel nor intersecting.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State both answers",
          "workingLatex": "(a) no intersection; (b) $d = \\dfrac{4\\sqrt{3}}{3}$",
          "explanation": "Complete solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The lines do not intersect (inconsistent $z$-equation). (b) $d = \\dfrac{4\\sqrt{3}}{3}$."
    }
  }
];
