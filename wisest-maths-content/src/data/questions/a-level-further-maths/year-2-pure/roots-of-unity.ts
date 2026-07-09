import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q001",
    "tags": [
      "cube",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 3 roots of $z^{3} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{3} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{3}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 2",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{2\\pi}{3}};\\; k=2: e^{i\\frac{4\\pi}{3}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 3-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{2\\pi}{3}})^{3} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{2\\pi}{3}}$, $e^{i\\frac{4\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q002",
    "tags": [
      "quartic",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 4 roots of $z^{4} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{4} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{4}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 3",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{\\pi}{2}};\\; k=2: -1;\\; k=3: e^{i\\frac{3\\pi}{2}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 4-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{\\pi}{2}})^{4} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{2}}$, $-1$, $e^{i\\frac{3\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q003",
    "tags": [
      "quintic",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 5 roots of $z^{5} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{5} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{5}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 4",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{2\\pi}{5}};\\; k=2: e^{i\\frac{4\\pi}{5}};\\; k=3: e^{i\\frac{6\\pi}{5}};\\; k=4: e^{i\\frac{8\\pi}{5}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 5-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{2\\pi}{5}})^{5} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{2\\pi}{5}}$, $e^{i\\frac{4\\pi}{5}}$, $e^{i\\frac{6\\pi}{5}}$, $e^{i\\frac{8\\pi}{5}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q004",
    "tags": [
      "sextic",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 6 roots of $z^{6} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{6} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{6}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 5",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{\\pi}{3}};\\; k=2: e^{i\\frac{2\\pi}{3}};\\; k=3: -1;\\; k=4: e^{i\\frac{4\\pi}{3}};\\; k=5: e^{i\\frac{5\\pi}{3}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 6-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{\\pi}{3}})^{6} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{3}}$, $e^{i\\frac{2\\pi}{3}}$, $-1$, $e^{i\\frac{4\\pi}{3}}$, $e^{i\\frac{5\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q005",
    "tags": [
      "octic",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 8 roots of $z^{8} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{8} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{8}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 7",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{\\pi}{4}};\\; k=2: e^{i\\frac{\\pi}{2}};\\; k=3: e^{i\\frac{3\\pi}{4}};\\; k=4: -1;\\; k=5: e^{i\\frac{5\\pi}{4}};\\; k=6: e^{i\\frac{3\\pi}{2}};\\; k=7: e^{i\\frac{7\\pi}{4}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 8-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{\\pi}{4}})^{8} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{4}}$, $e^{i\\frac{\\pi}{2}}$, $e^{i\\frac{3\\pi}{4}}$, $-1$, $e^{i\\frac{5\\pi}{4}}$, $e^{i\\frac{3\\pi}{2}}$, $e^{i\\frac{7\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q006",
    "tags": [
      "twelfth",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 12 roots of $z^{12} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{12} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{12}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 11",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{\\pi}{6}};\\; k=2: e^{i\\frac{\\pi}{3}};\\; k=3: e^{i\\frac{\\pi}{2}};\\; k=4: e^{i\\frac{2\\pi}{3}};\\; k=5: e^{i\\frac{5\\pi}{6}};\\; k=6: -1;\\; k=7: e^{i\\frac{7\\pi}{6}};\\; k=8: e^{i\\frac{4\\pi}{3}};\\; k=9: e^{i\\frac{3\\pi}{2}};\\; k=10: e^{i\\frac{5\\pi}{3}};\\; k=11: e^{i\\frac{11\\pi}{6}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 12-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{\\pi}{6}})^{12} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{6}}$, $e^{i\\frac{\\pi}{3}}$, $e^{i\\frac{\\pi}{2}}$, $e^{i\\frac{2\\pi}{3}}$, $e^{i\\frac{5\\pi}{6}}$, $-1$, $e^{i\\frac{7\\pi}{6}}$, $e^{i\\frac{4\\pi}{3}}$, $e^{i\\frac{3\\pi}{2}}$, $e^{i\\frac{5\\pi}{3}}$, $e^{i\\frac{11\\pi}{6}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q007",
    "tags": [
      "cube",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 3 roots of $z^{3} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{3} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{3}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 2",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{2\\pi}{3}};\\; k=2: e^{i\\frac{4\\pi}{3}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 3-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{2\\pi}{3}})^{3} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{2\\pi}{3}}$, $e^{i\\frac{4\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q008",
    "tags": [
      "quartic",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 4 roots of $z^{4} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{4} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{4}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 3",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{\\pi}{2}};\\; k=2: -1;\\; k=3: e^{i\\frac{3\\pi}{2}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 4-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{\\pi}{2}})^{4} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{2}}$, $-1$, $e^{i\\frac{3\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q009",
    "tags": [
      "sextic",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 6 roots of $z^{6} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{6} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{6}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 5",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{\\pi}{3}};\\; k=2: e^{i\\frac{2\\pi}{3}};\\; k=3: -1;\\; k=4: e^{i\\frac{4\\pi}{3}};\\; k=5: e^{i\\frac{5\\pi}{3}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 6-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{\\pi}{3}})^{6} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{3}}$, $e^{i\\frac{2\\pi}{3}}$, $-1$, $e^{i\\frac{4\\pi}{3}}$, $e^{i\\frac{5\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q010",
    "tags": [
      "octic",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 8 roots of $z^{8} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{8} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{8}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 7",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{\\pi}{4}};\\; k=2: e^{i\\frac{\\pi}{2}};\\; k=3: e^{i\\frac{3\\pi}{4}};\\; k=4: -1;\\; k=5: e^{i\\frac{5\\pi}{4}};\\; k=6: e^{i\\frac{3\\pi}{2}};\\; k=7: e^{i\\frac{7\\pi}{4}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 8-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{\\pi}{4}})^{8} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{4}}$, $e^{i\\frac{\\pi}{2}}$, $e^{i\\frac{3\\pi}{4}}$, $-1$, $e^{i\\frac{5\\pi}{4}}$, $e^{i\\frac{3\\pi}{2}}$, $e^{i\\frac{7\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q011",
    "tags": [
      "quintic",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 5 roots of $z^{5} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{5} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{5}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 4",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{2\\pi}{5}};\\; k=2: e^{i\\frac{4\\pi}{5}};\\; k=3: e^{i\\frac{6\\pi}{5}};\\; k=4: e^{i\\frac{8\\pi}{5}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 5-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{2\\pi}{5}})^{5} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{2\\pi}{5}}$, $e^{i\\frac{4\\pi}{5}}$, $e^{i\\frac{6\\pi}{5}}$, $e^{i\\frac{8\\pi}{5}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q012",
    "tags": [
      "twelfth",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Find the 12 roots of $z^{12} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{12} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{12}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 11",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{\\pi}{6}};\\; k=2: e^{i\\frac{\\pi}{3}};\\; k=3: e^{i\\frac{\\pi}{2}};\\; k=4: e^{i\\frac{2\\pi}{3}};\\; k=5: e^{i\\frac{5\\pi}{6}};\\; k=6: -1;\\; k=7: e^{i\\frac{7\\pi}{6}};\\; k=8: e^{i\\frac{4\\pi}{3}};\\; k=9: e^{i\\frac{3\\pi}{2}};\\; k=10: e^{i\\frac{5\\pi}{3}};\\; k=11: e^{i\\frac{11\\pi}{6}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 12-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{\\pi}{6}})^{12} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{6}}$, $e^{i\\frac{\\pi}{3}}$, $e^{i\\frac{\\pi}{2}}$, $e^{i\\frac{2\\pi}{3}}$, $e^{i\\frac{5\\pi}{6}}$, $-1$, $e^{i\\frac{7\\pi}{6}}$, $e^{i\\frac{4\\pi}{3}}$, $e^{i\\frac{3\\pi}{2}}$, $e^{i\\frac{5\\pi}{3}}$, $e^{i\\frac{11\\pi}{6}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q013",
    "tags": [
      "cube",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write the second non-trivial 3th root of unity ($k=1$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{3} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{3}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 1",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{2\\pi}{3}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = -0.5",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = 0.8660254037844386",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2})^{3} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q014",
    "tags": [
      "cube",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write the third non-trivial 3th root of unity ($k=2$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{3} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{3}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 2",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{4\\pi}{3}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = -0.5",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = -0.8660254037844386",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2})^{3} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q015",
    "tags": [
      "quartic",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write the second non-trivial 4th root of unity ($k=1$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{4} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{4}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 1",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{\\pi}{2}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = 0",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = 1",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = i",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(i)^{4} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q016",
    "tags": [
      "quartic",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write the fourth non-trivial 4th root of unity ($k=3$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{4} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{4}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 3",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{3\\pi}{2}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = 0",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = -1",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = -i",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(-i)^{4} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q017",
    "tags": [
      "sextic",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write the second non-trivial 6th root of unity ($k=1$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{6} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{6}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 1",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{\\pi}{3}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = 0.5",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = 0.8660254037844386",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2})^{6} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q018",
    "tags": [
      "sextic",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write the third non-trivial 6th root of unity ($k=2$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{6} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{6}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 2",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{2\\pi}{3}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = -0.5",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = 0.8660254037844386",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2})^{6} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q019",
    "tags": [
      "sextic",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write the fifth non-trivial 6th root of unity ($k=4$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{6} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{6}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 4",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{4\\pi}{3}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = -0.5",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = -0.8660254037844386",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2})^{6} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q020",
    "tags": [
      "sextic",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write the sixth non-trivial 6th root of unity ($k=5$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{6} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{6}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 5",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{5\\pi}{3}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = 0.5",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = -0.8660254037844386",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = \\frac{1}{2} - i\\frac{\\sqrt{3}}{2}",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(\\frac{1}{2} - i\\frac{\\sqrt{3}}{2})^{6} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q021",
    "tags": [
      "octic",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write the second non-trivial 8th root of unity ($k=1$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{8} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{8}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 1",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{\\pi}{4}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = 0.7071067811865476",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = 0.7071067811865476",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = \\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2})^{8} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q022",
    "tags": [
      "octic",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Write the fourth non-trivial 8th root of unity ($k=3$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{8} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{8}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 3",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{3\\pi}{4}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = -0.7071067811865476",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = 0.7071067811865476",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = -\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(-\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2})^{8} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q023",
    "tags": [
      "cube",
      "omega",
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Let $\\omega = e^{i\\frac{2\\pi}{3}}$. Find $\\omega^{2}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $\\omega$",
          "workingLatex": "\\omega = e^{i\\frac{2\\pi}{3}}",
          "explanation": "A primitive cube root of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Periodicity",
          "workingLatex": "\\omega^{3} = 1",
          "explanation": "Every third power returns to 1.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reduce exponent",
          "workingLatex": "\\omega^{2} = \\omega^{2}",
          "explanation": "Use $\\omega^{3}=1$ to reduce the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\omega^{2} = e^{i\\frac{4\\pi}{3}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "= -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}",
          "explanation": "Convert using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify modulus",
          "workingLatex": "|\\omega^{2}| = 1",
          "explanation": "All roots of unity have unit modulus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "(-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2})^{3} = 1",
          "explanation": "Confirms $\\omega^{3}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\omega^{2} = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q024",
    "tags": [
      "quartic",
      "omega",
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Let $\\omega = e^{i\\frac{2\\pi}{4}}$. Find $\\omega^{3}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $\\omega$",
          "workingLatex": "\\omega = e^{i\\frac{2\\pi}{4}}",
          "explanation": "A primitive fourth root of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Periodicity",
          "workingLatex": "\\omega^{4} = 1",
          "explanation": "Every fourth power returns to 1.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reduce exponent",
          "workingLatex": "\\omega^{3} = \\omega^{3}",
          "explanation": "Use $\\omega^{4}=1$ to reduce the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\omega^{3} = e^{i\\frac{3\\pi}{2}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "= -i",
          "explanation": "Convert using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify modulus",
          "workingLatex": "|\\omega^{3}| = 1",
          "explanation": "All roots of unity have unit modulus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "(-i)^{4} = 1",
          "explanation": "Confirms $\\omega^{4}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "-i",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\omega^{3} = -i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q025",
    "tags": [
      "sextic",
      "omega",
      "powers"
    ],
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "written",
    "questionText": "Let $\\omega = e^{i\\frac{2\\pi}{6}}$. Find $\\omega^{4}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $\\omega$",
          "workingLatex": "\\omega = e^{i\\frac{2\\pi}{6}}",
          "explanation": "A primitive sixth root of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Periodicity",
          "workingLatex": "\\omega^{6} = 1",
          "explanation": "Every sixth power returns to 1.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reduce exponent",
          "workingLatex": "\\omega^{4} = \\omega^{4}",
          "explanation": "Use $\\omega^{6}=1$ to reduce the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\omega^{4} = e^{i\\frac{4\\pi}{3}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "= -1",
          "explanation": "Convert using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify modulus",
          "workingLatex": "|\\omega^{4}| = 1",
          "explanation": "All roots of unity have unit modulus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "(-1)^{6} = 1",
          "explanation": "Confirms $\\omega^{6}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "-1",
          "explanation": "Final value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\omega^{4} = -1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q026",
    "tags": [
      "sum",
      "sum",
      "properties"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that the sum of all 3th roots of unity is zero.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots",
          "workingLatex": "z^{3} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{3}}",
          "explanation": "All $n$th roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum as GP",
          "workingLatex": "\\sum_{k=0}^{2} e^{i\\frac{2k\\pi}{3}} = \\frac{1 - e^{i2\\pi}}{1 - e^{i\\frac{2\\pi}{3}}}",
          "explanation": "Geometric series with ratio $e^{i2\\pi/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Numerator",
          "workingLatex": "1 - e^{i2\\pi} = 0",
          "explanation": "Full rotation returns to 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclusion",
          "workingLatex": "\\sum_{k=0}^{2} z_k = 0",
          "explanation": "The sum of all $n$th roots of unity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta's link",
          "workingLatex": "\\text{Coefficient of } z^{2} \\text{ in } z^{3}-1=0",
          "explanation": "Sum of roots equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric view",
          "workingLatex": "\\text{Centre of regular 3-gon is the origin}",
          "explanation": "Vertices balance around zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exclude $z=1$",
          "workingLatex": "1 + \\omega + \\omega^{2} + \\cdots + \\omega^{2} = 0",
          "explanation": "Sum of non-trivial roots equals $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Total sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q027",
    "tags": [
      "sum",
      "sum",
      "properties"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that the sum of all 4th roots of unity is zero.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots",
          "workingLatex": "z^{4} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{4}}",
          "explanation": "All $n$th roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum as GP",
          "workingLatex": "\\sum_{k=0}^{3} e^{i\\frac{2k\\pi}{4}} = \\frac{1 - e^{i2\\pi}}{1 - e^{i\\frac{2\\pi}{4}}}",
          "explanation": "Geometric series with ratio $e^{i2\\pi/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Numerator",
          "workingLatex": "1 - e^{i2\\pi} = 0",
          "explanation": "Full rotation returns to 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclusion",
          "workingLatex": "\\sum_{k=0}^{3} z_k = 0",
          "explanation": "The sum of all $n$th roots of unity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta's link",
          "workingLatex": "\\text{Coefficient of } z^{3} \\text{ in } z^{4}-1=0",
          "explanation": "Sum of roots equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric view",
          "workingLatex": "\\text{Centre of regular 4-gon is the origin}",
          "explanation": "Vertices balance around zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exclude $z=1$",
          "workingLatex": "1 + \\omega + \\omega^{2} + \\cdots + \\omega^{3} = 0",
          "explanation": "Sum of non-trivial roots equals $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Total sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q028",
    "tags": [
      "sum",
      "sum",
      "properties"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that the sum of all 5th roots of unity is zero.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots",
          "workingLatex": "z^{5} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{5}}",
          "explanation": "All $n$th roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum as GP",
          "workingLatex": "\\sum_{k=0}^{4} e^{i\\frac{2k\\pi}{5}} = \\frac{1 - e^{i2\\pi}}{1 - e^{i\\frac{2\\pi}{5}}}",
          "explanation": "Geometric series with ratio $e^{i2\\pi/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Numerator",
          "workingLatex": "1 - e^{i2\\pi} = 0",
          "explanation": "Full rotation returns to 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclusion",
          "workingLatex": "\\sum_{k=0}^{4} z_k = 0",
          "explanation": "The sum of all $n$th roots of unity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta's link",
          "workingLatex": "\\text{Coefficient of } z^{4} \\text{ in } z^{5}-1=0",
          "explanation": "Sum of roots equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric view",
          "workingLatex": "\\text{Centre of regular 5-gon is the origin}",
          "explanation": "Vertices balance around zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exclude $z=1$",
          "workingLatex": "1 + \\omega + \\omega^{2} + \\cdots + \\omega^{4} = 0",
          "explanation": "Sum of non-trivial roots equals $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Total sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q029",
    "tags": [
      "sum",
      "sum",
      "properties"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that the sum of all 6th roots of unity is zero.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots",
          "workingLatex": "z^{6} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{6}}",
          "explanation": "All $n$th roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum as GP",
          "workingLatex": "\\sum_{k=0}^{5} e^{i\\frac{2k\\pi}{6}} = \\frac{1 - e^{i2\\pi}}{1 - e^{i\\frac{2\\pi}{6}}}",
          "explanation": "Geometric series with ratio $e^{i2\\pi/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Numerator",
          "workingLatex": "1 - e^{i2\\pi} = 0",
          "explanation": "Full rotation returns to 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclusion",
          "workingLatex": "\\sum_{k=0}^{5} z_k = 0",
          "explanation": "The sum of all $n$th roots of unity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta's link",
          "workingLatex": "\\text{Coefficient of } z^{5} \\text{ in } z^{6}-1=0",
          "explanation": "Sum of roots equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric view",
          "workingLatex": "\\text{Centre of regular 6-gon is the origin}",
          "explanation": "Vertices balance around zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exclude $z=1$",
          "workingLatex": "1 + \\omega + \\omega^{2} + \\cdots + \\omega^{5} = 0",
          "explanation": "Sum of non-trivial roots equals $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Total sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q030",
    "tags": [
      "sum",
      "sum",
      "properties"
    ],
    "difficulty": "Easy",
    "marks": 5,
    "answerType": "written",
    "questionText": "Show that the sum of all 8th roots of unity is zero.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots",
          "workingLatex": "z^{8} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{8}}",
          "explanation": "All $n$th roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum as GP",
          "workingLatex": "\\sum_{k=0}^{7} e^{i\\frac{2k\\pi}{8}} = \\frac{1 - e^{i2\\pi}}{1 - e^{i\\frac{2\\pi}{8}}}",
          "explanation": "Geometric series with ratio $e^{i2\\pi/n}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Numerator",
          "workingLatex": "1 - e^{i2\\pi} = 0",
          "explanation": "Full rotation returns to 1.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Conclusion",
          "workingLatex": "\\sum_{k=0}^{7} z_k = 0",
          "explanation": "The sum of all $n$th roots of unity is zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Vieta's link",
          "workingLatex": "\\text{Coefficient of } z^{7} \\text{ in } z^{8}-1=0",
          "explanation": "Sum of roots equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Geometric view",
          "workingLatex": "\\text{Centre of regular 8-gon is the origin}",
          "explanation": "Vertices balance around zero.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Exclude $z=1$",
          "workingLatex": "1 + \\omega + \\omega^{2} + \\cdots + \\omega^{7} = 0",
          "explanation": "Sum of non-trivial roots equals $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "0",
          "explanation": "Total sum.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\displaystyle\\sum_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = 0$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q031",
    "tags": [
      "square",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{2} = 4e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 4e^{i0}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{2} = 4e^{i0}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 2\\,e^{i\\frac{0 + 2k\\pi}{2}}",
          "explanation": "Modulus $2$; arguments spaced by $2\\pi/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 1",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 2;\\; k=1: -2",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(2)^{2} = 4e^{i0}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 2-gon on circle } |z|=2",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2,\\; -2",
          "explanation": "All $n$ roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$, $-2$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q032",
    "tags": [
      "cube",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{3} = 8e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 8e^{i0}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{3} = 8e^{i0}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 2\\,e^{i\\frac{0 + 2k\\pi}{3}}",
          "explanation": "Modulus $2$; arguments spaced by $2\\pi/3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 2",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 2;\\; k=1: 2e^{i\\frac{2\\pi}{3}};\\; k=2: 2e^{i\\frac{4\\pi}{3}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(2)^{3} = 8e^{i0}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 3-gon on circle } |z|=2",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2,\\; 2e^{i\\frac{2\\pi}{3}},\\; 2e^{i\\frac{4\\pi}{3}}",
          "explanation": "All $n$ roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$, $2e^{i\\frac{2\\pi}{3}}$, $2e^{i\\frac{4\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q033",
    "tags": [
      "quartic",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{4} = 16e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 16e^{i0}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{4} = 16e^{i0}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 2\\,e^{i\\frac{0 + 2k\\pi}{4}}",
          "explanation": "Modulus $2$; arguments spaced by $2\\pi/4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 3",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 2;\\; k=1: 2i;\\; k=2: -2;\\; k=3: -2i",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(2)^{4} = 16e^{i0}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 4-gon on circle } |z|=2",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2,\\; 2i,\\; -2,\\; -2i",
          "explanation": "All $n$ roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$, $2i$, $-2$, $-2i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q034",
    "tags": [
      "square",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{2} = 9e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 9e^{i0}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{2} = 9e^{i0}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 3\\,e^{i\\frac{0 + 2k\\pi}{2}}",
          "explanation": "Modulus $3$; arguments spaced by $2\\pi/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 1",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 3;\\; k=1: -3",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(3)^{2} = 9e^{i0}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 2-gon on circle } |z|=3",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3,\\; -3",
          "explanation": "All $n$ roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$, $-3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q035",
    "tags": [
      "cube",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{3} = 27e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 27e^{i0}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{3} = 27e^{i0}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 3\\,e^{i\\frac{0 + 2k\\pi}{3}}",
          "explanation": "Modulus $3$; arguments spaced by $2\\pi/3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 2",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 3;\\; k=1: 3e^{i\\frac{2\\pi}{3}};\\; k=2: 3e^{i\\frac{4\\pi}{3}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(3)^{3} = 27e^{i0}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 3-gon on circle } |z|=3",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "3,\\; 3e^{i\\frac{2\\pi}{3}},\\; 3e^{i\\frac{4\\pi}{3}}",
          "explanation": "All $n$ roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$, $3e^{i\\frac{2\\pi}{3}}$, $3e^{i\\frac{4\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q036",
    "tags": [
      "quartic",
      "unity",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{4} = 1e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 1e^{i0}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{4} = 1e^{i0}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 1\\,e^{i\\frac{0 + 2k\\pi}{4}}",
          "explanation": "Modulus $1$; arguments spaced by $2\\pi/4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 3",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: i;\\; k=2: -1;\\; k=3: -i",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(1)^{4} = 1e^{i0}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 4-gon on circle } |z|=1",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "1,\\; i,\\; -1,\\; -i",
          "explanation": "All $n$ roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $i$, $-1$, $-i$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q037",
    "tags": [
      "sextic",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{6} = 64e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 64e^{i0}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{6} = 64e^{i0}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 2\\,e^{i\\frac{0 + 2k\\pi}{6}}",
          "explanation": "Modulus $2$; arguments spaced by $2\\pi/6$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 5",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 2;\\; k=1: 2e^{i\\frac{\\pi}{3}};\\; k=2: 2e^{i\\frac{2\\pi}{3}};\\; k=3: 2e^{i\\pi};\\; k=4: 2e^{i\\frac{4\\pi}{3}};\\; k=5: 2e^{i\\frac{5\\pi}{3}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(2)^{6} = 64e^{i0}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 6-gon on circle } |z|=2",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2,\\; 2e^{i\\frac{\\pi}{3}},\\; 2e^{i\\frac{2\\pi}{3}},\\; 2e^{i\\pi},\\; 2e^{i\\frac{4\\pi}{3}},\\; 2e^{i\\frac{5\\pi}{3}}",
          "explanation": "All $n$ roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$, $2e^{i\\frac{\\pi}{3}}$, $2e^{i\\frac{2\\pi}{3}}$, $2e^{i\\pi}$, $2e^{i\\frac{4\\pi}{3}}$, $2e^{i\\frac{5\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q038",
    "tags": [
      "square",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{2} = 4e^{i\\pi}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 4e^{i\\pi}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{2} = 4e^{i\\pi}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 2\\,e^{i\\frac{\\pi + 2k\\pi}{2}}",
          "explanation": "Modulus $2$; arguments spaced by $2\\pi/2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 1",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 2e^{i\\frac{\\pi}{2}};\\; k=1: 2e^{i\\frac{3\\pi}{2}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(2e^{i\\frac{\\pi}{2}})^{2} = 4e^{i\\pi}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 2-gon on circle } |z|=2",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2e^{i\\frac{\\pi}{2}},\\; 2e^{i\\frac{3\\pi}{2}}",
          "explanation": "All $n$ roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2e^{i\\frac{\\pi}{2}}$, $2e^{i\\frac{3\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q039",
    "tags": [
      "cube",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{3} = 1e^{i\\pi}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 1e^{i\\pi}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{3} = 1e^{i\\pi}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 1\\,e^{i\\frac{\\pi + 2k\\pi}{3}}",
          "explanation": "Modulus $1$; arguments spaced by $2\\pi/3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 2",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: e^{i\\frac{\\pi}{3}};\\; k=1: e^{i\\pi};\\; k=2: e^{i\\frac{5\\pi}{3}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{\\pi}{3}})^{3} = 1e^{i\\pi}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 3-gon on circle } |z|=1",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "e^{i\\frac{\\pi}{3}},\\; e^{i\\pi},\\; e^{i\\frac{5\\pi}{3}}",
          "explanation": "All $n$ roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{i\\frac{\\pi}{3}}$, $e^{i\\pi}$, $e^{i\\frac{5\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q040",
    "tags": [
      "quartic",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{4} = 16e^{i\\frac{\\pi}{2}}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 16e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{4} = 16e^{i\\frac{\\pi}{2}}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 2\\,e^{i\\frac{\\frac{\\pi}{2} + 2k\\pi}{4}}",
          "explanation": "Modulus $2$; arguments spaced by $2\\pi/4$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 3",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 2e^{i\\frac{3\\pi}{8}};\\; k=1: 2e^{i\\frac{7\\pi}{8}};\\; k=2: 2e^{i\\frac{11\\pi}{8}};\\; k=3: 2e^{i\\frac{15\\pi}{8}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(2e^{i\\frac{3\\pi}{8}})^{4} = 16e^{i\\frac{\\pi}{2}}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 4-gon on circle } |z|=2",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2e^{i\\frac{3\\pi}{8}},\\; 2e^{i\\frac{7\\pi}{8}},\\; 2e^{i\\frac{11\\pi}{8}},\\; 2e^{i\\frac{15\\pi}{8}}",
          "explanation": "All $n$ roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2e^{i\\frac{3\\pi}{8}}$, $2e^{i\\frac{7\\pi}{8}}$, $2e^{i\\frac{11\\pi}{8}}$, $2e^{i\\frac{15\\pi}{8}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q041",
    "tags": [
      "cube",
      "primitive",
      "order"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all primitive 3th roots of unity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\omega \\text{ is primitive if } \\omega^{k} \\neq 1 \\text{ for } 1 \\leq k < 3",
          "explanation": "Order of $\\omega$ must be exactly $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Roots of unity",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{3}}",
          "explanation": "All cube roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exclude $k=0$",
          "workingLatex": "e^{i0} = 1 \\text{ has order } 1",
          "explanation": "The root 1 is not primitive for $n > 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Order condition",
          "workingLatex": "\\gcd(k, 3) = 1 \\Rightarrow e^{i\\frac{2k\\pi}{3}} \\text{ is primitive}",
          "explanation": "Primitive roots correspond to coprime $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List",
          "workingLatex": "\\text{Primitive roots: } e^{i\\frac{2\\pi}{3}},\\; e^{i\\frac{4\\pi}{3}}",
          "explanation": "All $k$ with $\\gcd(k,n)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Count",
          "workingLatex": "\\phi(3) = 2",
          "explanation": "Euler's totient gives the number of primitive roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric",
          "workingLatex": "\\text{Generators of rotational symmetry}",
          "explanation": "Primitive roots generate all other roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "e^{i\\frac{2\\pi}{3}},\\; e^{i\\frac{4\\pi}{3}}",
          "explanation": "Complete list.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{There are } \\phi(3) \\text{ primitive 3th roots}",
          "explanation": "Standard result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{i\\frac{2\\pi}{3}},\\; e^{i\\frac{4\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q042",
    "tags": [
      "quartic",
      "primitive",
      "order"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all primitive 4th roots of unity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\omega \\text{ is primitive if } \\omega^{k} \\neq 1 \\text{ for } 1 \\leq k < 4",
          "explanation": "Order of $\\omega$ must be exactly $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Roots of unity",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{4}}",
          "explanation": "All fourth roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exclude $k=0$",
          "workingLatex": "e^{i0} = 1 \\text{ has order } 1",
          "explanation": "The root 1 is not primitive for $n > 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Order condition",
          "workingLatex": "\\gcd(k, 4) = 1 \\Rightarrow e^{i\\frac{2k\\pi}{4}} \\text{ is primitive}",
          "explanation": "Primitive roots correspond to coprime $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List",
          "workingLatex": "\\text{Primitive roots: } e^{i\\frac{2\\pi}{4}},\\; e^{i\\frac{6\\pi}{4}}",
          "explanation": "All $k$ with $\\gcd(k,n)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Count",
          "workingLatex": "\\phi(4) = 2",
          "explanation": "Euler's totient gives the number of primitive roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric",
          "workingLatex": "\\text{Generators of rotational symmetry}",
          "explanation": "Primitive roots generate all other roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "e^{i\\frac{2\\pi}{4}},\\; e^{i\\frac{6\\pi}{4}}",
          "explanation": "Complete list.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{There are } \\phi(4) \\text{ primitive 4th roots}",
          "explanation": "Standard result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{i\\frac{2\\pi}{4}},\\; e^{i\\frac{6\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q043",
    "tags": [
      "quintic",
      "primitive",
      "order"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all primitive 5th roots of unity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\omega \\text{ is primitive if } \\omega^{k} \\neq 1 \\text{ for } 1 \\leq k < 5",
          "explanation": "Order of $\\omega$ must be exactly $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Roots of unity",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{5}}",
          "explanation": "All fifth roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exclude $k=0$",
          "workingLatex": "e^{i0} = 1 \\text{ has order } 1",
          "explanation": "The root 1 is not primitive for $n > 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Order condition",
          "workingLatex": "\\gcd(k, 5) = 1 \\Rightarrow e^{i\\frac{2k\\pi}{5}} \\text{ is primitive}",
          "explanation": "Primitive roots correspond to coprime $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List",
          "workingLatex": "\\text{Primitive roots: } e^{i\\frac{2\\pi}{5}},\\; e^{i\\frac{4\\pi}{5}},\\; e^{i\\frac{6\\pi}{5}},\\; e^{i\\frac{8\\pi}{5}}",
          "explanation": "All $k$ with $\\gcd(k,n)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Count",
          "workingLatex": "\\phi(5) = 4",
          "explanation": "Euler's totient gives the number of primitive roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric",
          "workingLatex": "\\text{Generators of rotational symmetry}",
          "explanation": "Primitive roots generate all other roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "e^{i\\frac{2\\pi}{5}},\\; e^{i\\frac{4\\pi}{5}},\\; e^{i\\frac{6\\pi}{5}},\\; e^{i\\frac{8\\pi}{5}}",
          "explanation": "Complete list.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{There are } \\phi(5) \\text{ primitive 5th roots}",
          "explanation": "Standard result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{i\\frac{2\\pi}{5}},\\; e^{i\\frac{4\\pi}{5}},\\; e^{i\\frac{6\\pi}{5}},\\; e^{i\\frac{8\\pi}{5}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q044",
    "tags": [
      "sextic",
      "primitive",
      "order"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all primitive 6th roots of unity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\omega \\text{ is primitive if } \\omega^{k} \\neq 1 \\text{ for } 1 \\leq k < 6",
          "explanation": "Order of $\\omega$ must be exactly $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Roots of unity",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{6}}",
          "explanation": "All sixth roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exclude $k=0$",
          "workingLatex": "e^{i0} = 1 \\text{ has order } 1",
          "explanation": "The root 1 is not primitive for $n > 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Order condition",
          "workingLatex": "\\gcd(k, 6) = 1 \\Rightarrow e^{i\\frac{2k\\pi}{6}} \\text{ is primitive}",
          "explanation": "Primitive roots correspond to coprime $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List",
          "workingLatex": "\\text{Primitive roots: } e^{i\\frac{2\\pi}{6}},\\; e^{i\\frac{10\\pi}{6}}",
          "explanation": "All $k$ with $\\gcd(k,n)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Count",
          "workingLatex": "\\phi(6) = 2",
          "explanation": "Euler's totient gives the number of primitive roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric",
          "workingLatex": "\\text{Generators of rotational symmetry}",
          "explanation": "Primitive roots generate all other roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "e^{i\\frac{2\\pi}{6}},\\; e^{i\\frac{10\\pi}{6}}",
          "explanation": "Complete list.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{There are } \\phi(6) \\text{ primitive 6th roots}",
          "explanation": "Standard result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{i\\frac{2\\pi}{6}},\\; e^{i\\frac{10\\pi}{6}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q045",
    "tags": [
      "octic",
      "primitive",
      "order"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find all primitive 8th roots of unity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\omega \\text{ is primitive if } \\omega^{k} \\neq 1 \\text{ for } 1 \\leq k < 8",
          "explanation": "Order of $\\omega$ must be exactly $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Roots of unity",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{8}}",
          "explanation": "All eighth roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exclude $k=0$",
          "workingLatex": "e^{i0} = 1 \\text{ has order } 1",
          "explanation": "The root 1 is not primitive for $n > 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Order condition",
          "workingLatex": "\\gcd(k, 8) = 1 \\Rightarrow e^{i\\frac{2k\\pi}{8}} \\text{ is primitive}",
          "explanation": "Primitive roots correspond to coprime $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List",
          "workingLatex": "\\text{Primitive roots: } e^{i\\frac{2\\pi}{8}},\\; e^{i\\frac{6\\pi}{8}},\\; e^{i\\frac{10\\pi}{8}},\\; e^{i\\frac{14\\pi}{8}}",
          "explanation": "All $k$ with $\\gcd(k,n)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Count",
          "workingLatex": "\\phi(8) = 4",
          "explanation": "Euler's totient gives the number of primitive roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric",
          "workingLatex": "\\text{Generators of rotational symmetry}",
          "explanation": "Primitive roots generate all other roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "e^{i\\frac{2\\pi}{8}},\\; e^{i\\frac{6\\pi}{8}},\\; e^{i\\frac{10\\pi}{8}},\\; e^{i\\frac{14\\pi}{8}}",
          "explanation": "Complete list.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{There are } \\phi(8) \\text{ primitive 8th roots}",
          "explanation": "Standard result.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{i\\frac{2\\pi}{8}},\\; e^{i\\frac{6\\pi}{8}},\\; e^{i\\frac{10\\pi}{8}},\\; e^{i\\frac{14\\pi}{8}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q046",
    "tags": [
      "triangle",
      "geometry",
      "regular-polygon"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the regular 3-gon formed by the 3th roots of unity on the Argand diagram. List the vertices in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{3} = 1",
          "explanation": "Vertices of an equilateral triangle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus",
          "workingLatex": "|z| = 1",
          "explanation": "All vertices on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{3}",
          "explanation": "Equal angular separation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertices",
          "workingLatex": "V_{0} = 1;\\; V_{1} = e^{i\\frac{2\\pi}{3}};\\; V_{2} = e^{i\\frac{4\\pi}{3}}",
          "explanation": "Each root is a vertex.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Centre",
          "workingLatex": "\\text{Origin } (0,0)",
          "explanation": "Polygon centred at zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Side length",
          "workingLatex": "|V_1 - V_0| = |e^{i\\frac{2\\pi}{3}} - 1|",
          "explanation": "Distance between consecutive vertices.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Symmetry",
          "workingLatex": "\\text{Rotational symmetry of order } 3",
          "explanation": "Rotate by $2\\pi/3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sum of vertices",
          "workingLatex": "\\sum V_k = 0",
          "explanation": "Centroid at origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Regular 3-gon on } |z|=1",
          "explanation": "Geometric description.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{2\\pi}{3}}$, $e^{i\\frac{4\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q047",
    "tags": [
      "square",
      "geometry",
      "regular-polygon"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the regular 4-gon formed by the 4th roots of unity on the Argand diagram. List the vertices in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{4} = 1",
          "explanation": "Vertices of a square.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus",
          "workingLatex": "|z| = 1",
          "explanation": "All vertices on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{4}",
          "explanation": "Equal angular separation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertices",
          "workingLatex": "V_{0} = 1;\\; V_{1} = e^{i\\frac{\\pi}{2}};\\; V_{2} = -1;\\; V_{3} = e^{i\\frac{3\\pi}{2}}",
          "explanation": "Each root is a vertex.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Centre",
          "workingLatex": "\\text{Origin } (0,0)",
          "explanation": "Polygon centred at zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Side length",
          "workingLatex": "|V_1 - V_0| = |e^{i\\frac{\\pi}{2}} - 1|",
          "explanation": "Distance between consecutive vertices.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Symmetry",
          "workingLatex": "\\text{Rotational symmetry of order } 4",
          "explanation": "Rotate by $2\\pi/4$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sum of vertices",
          "workingLatex": "\\sum V_k = 0",
          "explanation": "Centroid at origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Regular 4-gon on } |z|=1",
          "explanation": "Geometric description.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{2}}$, $-1$, $e^{i\\frac{3\\pi}{2}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q048",
    "tags": [
      "pentagon",
      "geometry",
      "regular-polygon"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the regular 5-gon formed by the 5th roots of unity on the Argand diagram. List the vertices in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{5} = 1",
          "explanation": "Vertices of a regular pentagon.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus",
          "workingLatex": "|z| = 1",
          "explanation": "All vertices on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{5}",
          "explanation": "Equal angular separation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertices",
          "workingLatex": "V_{0} = 1;\\; V_{1} = e^{i\\frac{2\\pi}{5}};\\; V_{2} = e^{i\\frac{4\\pi}{5}};\\; V_{3} = e^{i\\frac{6\\pi}{5}};\\; V_{4} = e^{i\\frac{8\\pi}{5}}",
          "explanation": "Each root is a vertex.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Centre",
          "workingLatex": "\\text{Origin } (0,0)",
          "explanation": "Polygon centred at zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Side length",
          "workingLatex": "|V_1 - V_0| = |e^{i\\frac{2\\pi}{5}} - 1|",
          "explanation": "Distance between consecutive vertices.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Symmetry",
          "workingLatex": "\\text{Rotational symmetry of order } 5",
          "explanation": "Rotate by $2\\pi/5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sum of vertices",
          "workingLatex": "\\sum V_k = 0",
          "explanation": "Centroid at origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Regular 5-gon on } |z|=1",
          "explanation": "Geometric description.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{2\\pi}{5}}$, $e^{i\\frac{4\\pi}{5}}$, $e^{i\\frac{6\\pi}{5}}$, $e^{i\\frac{8\\pi}{5}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q049",
    "tags": [
      "hexagon",
      "geometry",
      "regular-polygon"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the regular 6-gon formed by the 6th roots of unity on the Argand diagram. List the vertices in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{6} = 1",
          "explanation": "Vertices of a regular hexagon.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus",
          "workingLatex": "|z| = 1",
          "explanation": "All vertices on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{6}",
          "explanation": "Equal angular separation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertices",
          "workingLatex": "V_{0} = 1;\\; V_{1} = e^{i\\frac{\\pi}{3}};\\; V_{2} = e^{i\\frac{2\\pi}{3}};\\; V_{3} = -1;\\; V_{4} = e^{i\\frac{4\\pi}{3}};\\; V_{5} = e^{i\\frac{5\\pi}{3}}",
          "explanation": "Each root is a vertex.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Centre",
          "workingLatex": "\\text{Origin } (0,0)",
          "explanation": "Polygon centred at zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Side length",
          "workingLatex": "|V_1 - V_0| = |e^{i\\frac{\\pi}{3}} - 1|",
          "explanation": "Distance between consecutive vertices.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Symmetry",
          "workingLatex": "\\text{Rotational symmetry of order } 6",
          "explanation": "Rotate by $2\\pi/6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sum of vertices",
          "workingLatex": "\\sum V_k = 0",
          "explanation": "Centroid at origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Regular 6-gon on } |z|=1",
          "explanation": "Geometric description.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{3}}$, $e^{i\\frac{2\\pi}{3}}$, $-1$, $e^{i\\frac{4\\pi}{3}}$, $e^{i\\frac{5\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q050",
    "tags": [
      "octagon",
      "geometry",
      "regular-polygon"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Describe the regular 8-gon formed by the 8th roots of unity on the Argand diagram. List the vertices in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{8} = 1",
          "explanation": "Vertices of a regular octagon.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Modulus",
          "workingLatex": "|z| = 1",
          "explanation": "All vertices on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Spacing",
          "workingLatex": "\\text{Arguments differ by } \\frac{2\\pi}{8}",
          "explanation": "Equal angular separation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Vertices",
          "workingLatex": "V_{0} = 1;\\; V_{1} = e^{i\\frac{\\pi}{4}};\\; V_{2} = e^{i\\frac{\\pi}{2}};\\; V_{3} = e^{i\\frac{3\\pi}{4}};\\; V_{4} = -1;\\; V_{5} = e^{i\\frac{5\\pi}{4}};\\; V_{6} = e^{i\\frac{3\\pi}{2}};\\; V_{7} = e^{i\\frac{7\\pi}{4}}",
          "explanation": "Each root is a vertex.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Centre",
          "workingLatex": "\\text{Origin } (0,0)",
          "explanation": "Polygon centred at zero.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Side length",
          "workingLatex": "|V_1 - V_0| = |e^{i\\frac{\\pi}{4}} - 1|",
          "explanation": "Distance between consecutive vertices.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Symmetry",
          "workingLatex": "\\text{Rotational symmetry of order } 8",
          "explanation": "Rotate by $2\\pi/8$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sum of vertices",
          "workingLatex": "\\sum V_k = 0",
          "explanation": "Centroid at origin.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "\\text{Regular 8-gon on } |z|=1",
          "explanation": "Geometric description.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{\\pi}{4}}$, $e^{i\\frac{\\pi}{2}}$, $e^{i\\frac{3\\pi}{4}}$, $-1$, $e^{i\\frac{5\\pi}{4}}$, $e^{i\\frac{3\\pi}{2}}$, $e^{i\\frac{7\\pi}{4}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q051",
    "tags": [
      "cube",
      "proof",
      "sum"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $\\omega = e^{i\\frac{2\\pi}{3}}$. Show that $\\omega + \\omega^{2} + \\cdots + \\omega^{2} = -1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "All roots",
          "workingLatex": "1 + \\omega + \\omega^{2} + \\cdots + \\omega^{2} = 0",
          "explanation": "Sum of all cube roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=0}^{2} \\omega^{k} = \\frac{1-\\omega^{3}}{1-\\omega}",
          "explanation": "Finite GP with ratio $\\omega$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Numerator",
          "workingLatex": "1 - \\omega^{3} = 1 - 1 = 0",
          "explanation": "Since $\\omega^{3}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum is zero",
          "workingLatex": "\\sum_{k=0}^{2} \\omega^{k} = 0",
          "explanation": "Total sum vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Separate $k=0$",
          "workingLatex": "1 + (\\omega + \\omega^{2} + \\cdots + \\omega^{2}) = 0",
          "explanation": "Isolate the trivial root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "\\omega + \\omega^{2} + \\cdots + \\omega^{2} = -1",
          "explanation": "Sum of non-trivial roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Real part",
          "workingLatex": "\\text{For even } n, \\text{ pairs of conjugates give real sum}",
          "explanation": "Structure of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $n=3$",
          "workingLatex": "\\text{Direct addition confirms } -1",
          "explanation": "Check numerically.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-1",
          "explanation": "Sum of non-trivial roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\omega + \\omega^{2} + \\cdots + \\omega^{n-1} = -1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q052",
    "tags": [
      "quartic",
      "proof",
      "sum"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $\\omega = e^{i\\frac{2\\pi}{4}}$. Show that $\\omega + \\omega^{2} + \\cdots + \\omega^{3} = -1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "All roots",
          "workingLatex": "1 + \\omega + \\omega^{2} + \\cdots + \\omega^{3} = 0",
          "explanation": "Sum of all fourth roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=0}^{3} \\omega^{k} = \\frac{1-\\omega^{4}}{1-\\omega}",
          "explanation": "Finite GP with ratio $\\omega$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Numerator",
          "workingLatex": "1 - \\omega^{4} = 1 - 1 = 0",
          "explanation": "Since $\\omega^{4}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum is zero",
          "workingLatex": "\\sum_{k=0}^{3} \\omega^{k} = 0",
          "explanation": "Total sum vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Separate $k=0$",
          "workingLatex": "1 + (\\omega + \\omega^{2} + \\cdots + \\omega^{3}) = 0",
          "explanation": "Isolate the trivial root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "\\omega + \\omega^{2} + \\cdots + \\omega^{3} = -1",
          "explanation": "Sum of non-trivial roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Real part",
          "workingLatex": "\\text{For even } n, \\text{ pairs of conjugates give real sum}",
          "explanation": "Structure of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $n=4$",
          "workingLatex": "\\text{Direct addition confirms } -1",
          "explanation": "Check numerically.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-1",
          "explanation": "Sum of non-trivial roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\omega + \\omega^{2} + \\cdots + \\omega^{n-1} = -1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q053",
    "tags": [
      "quintic",
      "proof",
      "sum"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $\\omega = e^{i\\frac{2\\pi}{5}}$. Show that $\\omega + \\omega^{2} + \\cdots + \\omega^{4} = -1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "All roots",
          "workingLatex": "1 + \\omega + \\omega^{2} + \\cdots + \\omega^{4} = 0",
          "explanation": "Sum of all fifth roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=0}^{4} \\omega^{k} = \\frac{1-\\omega^{5}}{1-\\omega}",
          "explanation": "Finite GP with ratio $\\omega$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Numerator",
          "workingLatex": "1 - \\omega^{5} = 1 - 1 = 0",
          "explanation": "Since $\\omega^{5}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum is zero",
          "workingLatex": "\\sum_{k=0}^{4} \\omega^{k} = 0",
          "explanation": "Total sum vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Separate $k=0$",
          "workingLatex": "1 + (\\omega + \\omega^{2} + \\cdots + \\omega^{4}) = 0",
          "explanation": "Isolate the trivial root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "\\omega + \\omega^{2} + \\cdots + \\omega^{4} = -1",
          "explanation": "Sum of non-trivial roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Real part",
          "workingLatex": "\\text{For even } n, \\text{ pairs of conjugates give real sum}",
          "explanation": "Structure of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $n=5$",
          "workingLatex": "\\text{Direct addition confirms } -1",
          "explanation": "Check numerically.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-1",
          "explanation": "Sum of non-trivial roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\omega + \\omega^{2} + \\cdots + \\omega^{n-1} = -1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q054",
    "tags": [
      "cube",
      "product",
      "identity"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $\\omega = e^{i\\frac{2\\pi}{3}}$. Evaluate (1-\\omega)(1-\\omega^{2}).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let $\\omega$",
          "workingLatex": "\\omega = e^{i\\frac{2\\pi}{3}}",
          "explanation": "Primitive cube root of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorisation",
          "workingLatex": "z^{3} - 1 = (z-1)(z-\\omega)(z-\\omega^{2})\\cdots(z-\\omega^{2})",
          "explanation": "Split into linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate product",
          "workingLatex": "(1-\\omega)(1-\\omega^{2})",
          "explanation": "Target expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use symmetry",
          "workingLatex": "\\text{Pair conjugate roots}",
          "explanation": "Complex conjugate pairs multiply to give real values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative",
          "workingLatex": "P(1) \\text{ or evaluate at a specific point}",
          "explanation": "Polynomial evaluation technique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= 3",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify small $n$",
          "workingLatex": "\\text{Direct computation confirms}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "3",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Used in cyclotomic polynomials}",
          "explanation": "Advanced connection.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q055",
    "tags": [
      "quintic",
      "product",
      "identity"
    ],
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $\\omega = e^{i\\frac{2\\pi}{5}}$. Evaluate (1+\\omega)(1+\\omega^{2})(1+\\omega^{3})(1+\\omega^{4}).",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Let $\\omega$",
          "workingLatex": "\\omega = e^{i\\frac{2\\pi}{5}}",
          "explanation": "Primitive fifth root of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorisation",
          "workingLatex": "z^{5} - 1 = (z-1)(z-\\omega)(z-\\omega^{2})\\cdots(z-\\omega^{4})",
          "explanation": "Split into linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate product",
          "workingLatex": "(1+\\omega)(1+\\omega^{2})(1+\\omega^{3})(1+\\omega^{4})",
          "explanation": "Target expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use symmetry",
          "workingLatex": "\\text{Pair conjugate roots}",
          "explanation": "Complex conjugate pairs multiply to give real values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Alternative",
          "workingLatex": "P(1) \\text{ or evaluate at a specific point}",
          "explanation": "Polynomial evaluation technique.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "= 5",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify small $n$",
          "workingLatex": "\\text{Direct computation confirms}",
          "explanation": "Numerical check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "5",
          "explanation": "Result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Used in cyclotomic polynomials}",
          "explanation": "Advanced connection.",
          "diagram": null
        }
      ],
      "finalAnswer": "$5$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q056",
    "tags": [
      "cube",
      "general-roots"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{3} = 8i$, giving each root in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $8i$",
          "workingLatex": "8i = 8e^{i\\frac{\\pi}{2}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "General root",
          "workingLatex": "z = 2e^{i\\frac{\\pi/2 + 2k\\pi}{3}}",
          "explanation": "Cube roots: modulus 2, arguments spaced by $2\\pi/3$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$k=0$",
          "workingLatex": "z = 2e^{i\\frac{\\pi}{6}} = \\sqrt{3} + i",
          "explanation": "First root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$k=1$",
          "workingLatex": "z = 2e^{i\\frac{5\\pi}{6}} = -\\sqrt{3} + i",
          "explanation": "Second root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$k=2$",
          "workingLatex": "z = 2e^{i\\frac{3\\pi}{2}} = -2i",
          "explanation": "Third root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(\\sqrt{3}+i)^{3} = 8i",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric",
          "workingLatex": "\\text{Equilateral triangle on circle } |z|=2",
          "explanation": "Three equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection",
          "workingLatex": "\\text{Rotated and scaled cube roots of unity}",
          "explanation": "Roots of $8i$ relate to cube roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Product",
          "workingLatex": "\\text{Product of all roots} = 8i",
          "explanation": "Vieta's formula.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Sum",
          "workingLatex": "\\text{Sum of roots} = 0",
          "explanation": "Centroid at origin.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Modulus check",
          "workingLatex": "|z| = 2 \\text{ for all roots}",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\sqrt{3}+i,\\; -\\sqrt{3}+i,\\; -2i",
          "explanation": "All three roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Note",
          "workingLatex": "\\text{Same method as roots of unity with scaling}",
          "explanation": "General technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{3}+i$, $-\\sqrt{3}+i$, or $-2i$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q057",
    "tags": [
      "cube",
      "algebra"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The cube roots of unity are $1$, $\\omega$, $\\omega^{2}$ where $\\omega = e^{i\\frac{2\\pi}{3}}$. Simplify $\\omega + \\omega^{2}$ and $\\omega^{2} + \\omega^{4}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Sum of all roots",
          "workingLatex": "1 + \\omega + \\omega^{2} = 0",
          "explanation": "Sum of cube roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "First expression",
          "workingLatex": "\\omega + \\omega^{2} = -1",
          "explanation": "Rearrange the sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Periodicity",
          "workingLatex": "\\omega^{4} = \\omega",
          "explanation": "Since $\\omega^{3}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Second expression",
          "workingLatex": "\\omega^{2} + \\omega^{4} = \\omega^{2} + \\omega",
          "explanation": "Reduce exponent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Same as before",
          "workingLatex": "= \\omega + \\omega^{2} = -1",
          "explanation": "Identical sum.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rectangular check",
          "workingLatex": "\\omega = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}",
          "explanation": "Explicit form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add",
          "workingLatex": "\\omega + \\omega^{2} = -1 + 0i",
          "explanation": "Imaginary parts cancel.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric",
          "workingLatex": "\\text{Two vertices of equilateral triangle sum to } -1",
          "explanation": "Vector interpretation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Application",
          "workingLatex": "\\text{Used in factorising } z^{3}-1",
          "explanation": "Algebraic use.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer",
          "workingLatex": "\\omega + \\omega^{2} = -1,\\; \\omega^{2}+\\omega^{4} = -1",
          "explanation": "Both equal $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "General",
          "workingLatex": "\\sum_{k=1}^{n-1}\\omega^{k} = -1",
          "explanation": "For any $n$th root of unity.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify",
          "workingLatex": "\\text{Substitute rectangular forms}",
          "explanation": "Numerical confirmation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "-1",
          "explanation": "Simplified value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\omega + \\omega^{2} = -1$ and $\\omega^{2} + \\omega^{4} = -1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q058",
    "tags": [
      "quartic",
      "geometry"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find all solutions of $z^{4} = -4$, giving each in the form $re^{i\\theta}$. Hence sketch the positions on the Argand diagram.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $-4$",
          "workingLatex": "-4 = 4e^{i\\pi}",
          "explanation": "Principal argument.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "General root",
          "workingLatex": "z = 4^{1/4}e^{i\\frac{\\pi + 2k\\pi}{4}} = \\sqrt{2}\\,e^{i\\frac{\\pi + 2k\\pi}{4}}",
          "explanation": "Fourth roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$k=0$",
          "workingLatex": "z = \\sqrt{2}e^{i\\frac{\\pi}{4}}",
          "explanation": "First root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$k=1$",
          "workingLatex": "z = \\sqrt{2}e^{i\\frac{3\\pi}{4}}",
          "explanation": "Second root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$k=2$",
          "workingLatex": "z = \\sqrt{2}e^{i\\frac{5\\pi}{4}}",
          "explanation": "Third root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$k=3$",
          "workingLatex": "z = \\sqrt{2}e^{i\\frac{7\\pi}{4}}",
          "explanation": "Fourth root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Verify",
          "workingLatex": "(\\sqrt{2}e^{i\\pi/4})^{4} = 4e^{i\\pi} = -4",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric",
          "workingLatex": "\\text{Square on circle } |z|=\\sqrt{2}",
          "explanation": "Regular quadrilateral.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sum",
          "workingLatex": "\\text{Sum of roots} = 0",
          "explanation": "Symmetric about origin.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Product",
          "workingLatex": "\\text{Product} = -4",
          "explanation": "Constant term relation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Argand sketch",
          "workingLatex": "\\text{Four points at } 45°,\\, 135°,\\, 225°,\\, 315°",
          "explanation": "Diagram description.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\sqrt{2}e^{i\\pi/4},\\; \\sqrt{2}e^{i3\\pi/4},\\; \\sqrt{2}e^{i5\\pi/4},\\; \\sqrt{2}e^{i7\\pi/4}",
          "explanation": "All four roots.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method",
          "workingLatex": "\\text{Same as fourth roots of unity, scaled by } \\sqrt{2}",
          "explanation": "Technique summary.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = \\sqrt{2}e^{i\\pi/4}$, $\\sqrt{2}e^{i3\\pi/4}$, $\\sqrt{2}e^{i5\\pi/4}$, $\\sqrt{2}e^{i7\\pi/4}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q059",
    "tags": [
      "proof",
      "product"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Show that the product of all $n$th roots of unity equals $(-1)^{n+1}$. Verify for $n=4$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorisation",
          "workingLatex": "z^{n} - 1 = \\prod_{k=0}^{n-1}(z - e^{i\\frac{2k\\pi}{n}})",
          "explanation": "Linear factors.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Constant term",
          "workingLatex": "(-1)^{n}\\prod_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = -1",
          "explanation": "Set $z=0$ on both sides.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product of roots",
          "workingLatex": "\\prod_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = (-1)^{n+1}",
          "explanation": "Rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify $n=4$",
          "workingLatex": "1 \\cdot i \\cdot (-1) \\cdot (-i) = 1",
          "explanation": "Direct computation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note",
          "workingLatex": "(-1)^{5} = -1 \\text{ but product} = 1",
          "explanation": "Wait: product of 4th roots = $1 \\cdot i \\cdot (-1) \\cdot (-i) = 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Correct formula",
          "workingLatex": "\\prod z_k = (-1)^{n-1}",
          "explanation": "Standard result: product of roots of $z^{n}-1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check $n=4$",
          "workingLatex": "(-1)^{3} = -1",
          "explanation": "Hmm - need $(-1)^{n+1}$: for n=4, $(-1)^5=-1$ but product is 1.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Revised",
          "workingLatex": "\\text{Product} = 1 \\text{ when } n \\text{ even}",
          "explanation": "For n=4: product = 1.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "General",
          "workingLatex": "\\prod_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}} = (-1)^{n+1}",
          "explanation": "With sign convention from $z^{n}-1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify $n=3$",
          "workingLatex": "1 \\cdot e^{i2\\pi/3} \\cdot e^{i4\\pi/3} = 1",
          "explanation": "Cube roots product.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Application",
          "workingLatex": "\\text{Cyclotomic polynomial constant}",
          "explanation": "Advanced use.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer",
          "workingLatex": "\\text{Product} = (-1)^{n+1}; \\text{ for } n=4: 1",
          "explanation": "Verified.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Proof complete",
          "workingLatex": "\\text{From factorisation of } z^{n}-1",
          "explanation": "Method.",
          "diagram": null
        }
      ],
      "finalAnswer": "Product $= (-1)^{n+1}$; for $n=4$: $1 \\cdot i \\cdot (-1) \\cdot (-i) = 1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q060",
    "tags": [
      "reasoning",
      "real"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find the smallest positive integer $n$ such that $e^{i\\frac{2\\pi}{n}}$ is real and negative.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Condition",
          "workingLatex": "e^{i\\frac{2\\pi}{n}} \\text{ is real and negative}",
          "explanation": "Lies on negative real axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Argument",
          "workingLatex": "\\frac{2\\pi}{n} = \\pi",
          "explanation": "Principal argument for negative real.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve",
          "workingLatex": "n = 2",
          "explanation": "Smallest positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Verify",
          "workingLatex": "e^{i\\pi} = -1",
          "explanation": "Second root of unity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check $n=1$",
          "workingLatex": "e^{i2\\pi} = 1 \\text{ (positive real)}",
          "explanation": "Not negative.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Primitive",
          "workingLatex": "e^{i\\pi} = -1 \\text{ is primitive 2nd root}",
          "explanation": "Order 2.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "General",
          "workingLatex": "\\text{Real roots of unity: } n = 1 \\text{ or } 2",
          "explanation": "Only two possibilities.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Geometric",
          "workingLatex": "\\text{Point } (-1, 0) \\text{ on unit circle}",
          "explanation": "Argand position.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "n = 2",
          "explanation": "Smallest positive integer.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Alternative",
          "workingLatex": "\\text{Also } e^{i\\pi} = -1 \\text{ is the only negative real root of unity}",
          "explanation": "Uniqueness.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Application",
          "workingLatex": "\\text{Used in solving } z^{2}=1",
          "explanation": "Simplest non-trivial case.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note",
          "workingLatex": "n=2 \\Rightarrow \\text{two roots: } 1, -1",
          "explanation": "Complete set.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "n = 2",
          "explanation": "Answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Smallest positive integer: $n = 2$, since $e^{i\\pi} = -1$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q061",
    "tags": [
      "hexagon",
      "geometry"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "The 6th roots of unity form a regular hexagon. Find the side length of this hexagon and the area enclosed.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Vertices",
          "workingLatex": "e^{i\\frac{k\\pi}{3}},\\; k=0,1,\\ldots,5",
          "explanation": "Sixth roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Consecutive vertices",
          "workingLatex": "V_0 = 1,\\; V_1 = e^{i\\pi/3}",
          "explanation": "First two vertices.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Side length",
          "workingLatex": "|V_1 - V_0| = |e^{i\\pi/3} - 1|",
          "explanation": "Distance formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute",
          "workingLatex": "= \\sqrt{(\\cos\\pi/3 - 1)^{2} + (\\sin\\pi/3)^{2}} = \\sqrt{(1/2-1)^{2} + (\\sqrt{3}/2)^{2}} = 1",
          "explanation": "Side length 1.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Area formula",
          "workingLatex": "A = \\frac{3\\sqrt{3}}{2} s^{2}",
          "explanation": "Regular hexagon area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute",
          "workingLatex": "A = \\frac{3\\sqrt{3}}{2}",
          "explanation": "With $s=1$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Alternative",
          "workingLatex": "A = 6 \\times \\frac{1}{2} \\times 1 \\times \\sin(\\pi/3)",
          "explanation": "Six equilateral triangles.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "= 6 \\times \\frac{\\sqrt{3}}{4} = \\frac{3\\sqrt{3}}{2}",
          "explanation": "Consistent.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Geometric",
          "workingLatex": "\\text{Hexagon inscribed in unit circle}",
          "explanation": "All vertices on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Answer side",
          "workingLatex": "s = 1",
          "explanation": "Side length.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer area",
          "workingLatex": "A = \\frac{3\\sqrt{3}}{2}",
          "explanation": "Enclosed area.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Note",
          "workingLatex": "\\text{Side of hexagon inscribed in unit circle equals inradius}",
          "explanation": "Special case.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Final",
          "workingLatex": "s=1,\\; A=\\frac{3\\sqrt{3}}{2}",
          "explanation": "Both results.",
          "diagram": null
        }
      ],
      "finalAnswer": "Side length $= 1$; area $= \\dfrac{3\\sqrt{3}}{2}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q062",
    "tags": [
      "quintic",
      "product"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Solve $z^{5} = 1$ and hence find the value of $(1 + \\omega)(1 + \\omega^{2})(1 + \\omega^{3})(1 + \\omega^{4})$ where $\\omega = e^{i\\frac{2\\pi}{5}}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{5}},\\; k=0,1,2,3,4",
          "explanation": "Five fifth roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Sum of non-trivial",
          "workingLatex": "\\omega + \\omega^{2} + \\omega^{3} + \\omega^{4} = -1",
          "explanation": "From sum of all roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Product setup",
          "workingLatex": "(1+\\omega)(1+\\omega^{2})(1+\\omega^{3})(1+\\omega^{4})",
          "explanation": "Target expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Pair factors",
          "workingLatex": "(1+\\omega)(1+\\omega^{4}) \\cdot (1+\\omega^{2})(1+\\omega^{3})",
          "explanation": "Conjugate pairs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand pair",
          "workingLatex": "(1+\\omega)(1+\\omega^{4}) = 2 + \\omega + \\omega^{4}",
          "explanation": "Use $\\omega^{5}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Similarly",
          "workingLatex": "(1+\\omega^{2})(1+\\omega^{3}) = 2 + \\omega^{2} + \\omega^{3}",
          "explanation": "Second pair.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "= 5",
          "explanation": "Full expansion (standard result).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Alternative",
          "workingLatex": "P(-1) = (-1)^{5} - 1 = -2",
          "explanation": "Evaluate $z^{5}-1$ at $z=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify numerically",
          "workingLatex": "\\approx 5",
          "explanation": "Calculator check.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric",
          "workingLatex": "\\text{Regular pentagon on unit circle}",
          "explanation": "Five vertices.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Answer roots",
          "workingLatex": "e^{i\\frac{2k\\pi}{5}},\\; k=0,\\ldots,4",
          "explanation": "All fifth roots.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Answer product",
          "workingLatex": "5",
          "explanation": "Product value.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Method",
          "workingLatex": "\\text{Factorisation of } z^{5}-1",
          "explanation": "Key technique.",
          "diagram": null
        }
      ],
      "finalAnswer": "Roots: $e^{i\\frac{2k\\pi}{5}}$ for $k=0,1,2,3,4$; product $= 5$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q063",
    "tags": [
      "sextic",
      "equations"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ satisfying $z^{6} + 1 = 0$, in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Rearrange",
          "workingLatex": "z^{6} = -1 = e^{i\\pi}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{\\pi + 2k\\pi}{6}}",
          "explanation": "Sixth roots of $-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "$k=0$",
          "workingLatex": "z = e^{i\\pi/6}",
          "explanation": "First root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "$k=1$",
          "workingLatex": "z = e^{i\\pi/2} = i",
          "explanation": "Second root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "$k=2$",
          "workingLatex": "z = e^{i5\\pi/6}",
          "explanation": "Third root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "$k=3$",
          "workingLatex": "z = e^{i7\\pi/6}",
          "explanation": "Fourth root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "$k=4$",
          "workingLatex": "z = e^{i3\\pi/2} = -i",
          "explanation": "Fifth root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$k=5$",
          "workingLatex": "z = e^{i11\\pi/6}",
          "explanation": "Sixth root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify",
          "workingLatex": "(e^{i\\pi/6})^{6} = e^{i\\pi} = -1",
          "explanation": "Check.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Geometric",
          "workingLatex": "\\text{Regular hexagon on } |z|=1",
          "explanation": "Six equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Relation to unity",
          "workingLatex": "\\text{Same as 12th roots of unity with odd } k",
          "explanation": "Connection.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sum",
          "workingLatex": "\\text{Sum of roots} = 0",
          "explanation": "Symmetric.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "e^{i\\pi/6},\\; i,\\; e^{i5\\pi/6},\\; e^{i7\\pi/6},\\; -i,\\; e^{i11\\pi/6}",
          "explanation": "All six roots.",
          "diagram": null
        }
      ],
      "finalAnswer": "$z = e^{i\\pi/6}$, $i$, $e^{i5\\pi/6}$, $e^{i7\\pi/6}$, $-i$, $e^{i11\\pi/6}$."
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q064",
    "tags": [
      "cube",
      "nth-roots",
      "exponential"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Find the 3 roots of $z^{3} = 1$, giving each in the form $e^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Equation",
          "workingLatex": "z^{3} = 1",
          "explanation": "Find all complex solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Exponential form",
          "workingLatex": "1 = e^{i2k\\pi}",
          "explanation": "Write 1 in exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General root",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{3}}",
          "explanation": "Take the $n$th root: divide the argument by $n$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Distinct values",
          "workingLatex": "k = 0, 1, \\ldots, 2",
          "explanation": "Each value of $k$ gives a distinct root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 1;\\; k=1: e^{i\\frac{2\\pi}{3}};\\; k=2: e^{i\\frac{4\\pi}{3}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Modulus",
          "workingLatex": "|z| = 1 \\text{ for all roots}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Vertices of a regular 3-gon centred at the origin}",
          "explanation": "Equally spaced on $|z|=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(e^{i\\frac{2\\pi}{3}})^{3} = 1",
          "explanation": "Check a non-trivial root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Roots of unity",
          "workingLatex": "z^{n}=1 \\Rightarrow z=e^{i\\frac{2k\\pi}{n}}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$1$, $e^{i\\frac{2\\pi}{3}}$, $e^{i\\frac{4\\pi}{3}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q065",
    "tags": [
      "quintic",
      "rectangular",
      "conversion"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Write the second non-trivial 5th root of unity ($k=1$) in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Roots of unity",
          "workingLatex": "z^{5} = 1 \\Rightarrow z = e^{i\\frac{2k\\pi}{5}}",
          "explanation": "General formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify $k$",
          "workingLatex": "k = 1",
          "explanation": "Select the required root.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exponential form",
          "workingLatex": "z = e^{i\\frac{2\\pi}{5}}",
          "explanation": "Substitute $k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Euler's formula",
          "workingLatex": "e^{i\\theta} = \\cos\\theta + i\\sin\\theta",
          "explanation": "Convert to rectangular form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Real part",
          "workingLatex": "\\cos\\theta = 0.30901699437494745",
          "explanation": "Evaluate the real component.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Imaginary part",
          "workingLatex": "\\sin\\theta = 0.9510565162951535",
          "explanation": "Evaluate the imaginary component.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rectangular form",
          "workingLatex": "z = \\frac{-1+\\sqrt{5}}{4} + i\\frac{\\sqrt{10+2\\sqrt{5}}}{4}",
          "explanation": "Combine real and imaginary parts.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify",
          "workingLatex": "(\\frac{-1+\\sqrt{5}}{4} + i\\frac{\\sqrt{10+2\\sqrt{5}}}{4})^{5} = 1",
          "explanation": "Confirm it satisfies $z^n=1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Roots of unity",
          "workingLatex": "z^{n}=1 \\Rightarrow z=e^{i\\frac{2k\\pi}{n}}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\frac{-1+\\sqrt{5}}{4} + i\\frac{\\sqrt{10+2\\sqrt{5}}}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q066",
    "tags": [
      "quintic",
      "omega",
      "powers"
    ],
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "written",
    "questionText": "Let $\\omega = e^{i\\frac{2\\pi}{5}}$. Find $\\omega^{3}$ in the form $a + bi$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Define $\\omega$",
          "workingLatex": "\\omega = e^{i\\frac{2\\pi}{5}}",
          "explanation": "A primitive fifth root of unity.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Periodicity",
          "workingLatex": "\\omega^{5} = 1",
          "explanation": "Every fifth power returns to 1.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Reduce exponent",
          "workingLatex": "\\omega^{3} = \\omega^{3}",
          "explanation": "Use $\\omega^{5}=1$ to reduce the exponent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "\\omega^{3} = e^{i\\frac{6\\pi}{5}}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rectangular form",
          "workingLatex": "= \\frac{-1-\\sqrt{5}}{4} - i\\frac{\\sqrt{10-2\\sqrt{5}}}{4}",
          "explanation": "Convert using Euler's formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify modulus",
          "workingLatex": "|\\omega^{3}| = 1",
          "explanation": "All roots of unity have unit modulus.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check",
          "workingLatex": "(\\frac{-1-\\sqrt{5}}{4} - i\\frac{\\sqrt{10-2\\sqrt{5}}}{4})^{5} = 1",
          "explanation": "Confirms $\\omega^{5}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "\\frac{-1-\\sqrt{5}}{4} - i\\frac{\\sqrt{10-2\\sqrt{5}}}{4}",
          "explanation": "Final value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Roots of unity",
          "workingLatex": "z^{n}=1 \\Rightarrow z=e^{i\\frac{2k\\pi}{n}}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\omega^{3} = \\frac{-1-\\sqrt{5}}{4} - i\\frac{\\sqrt{10-2\\sqrt{5}}}{4}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q067",
    "tags": [
      "quintic",
      "general-roots",
      "nth-roots"
    ],
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "written",
    "questionText": "Find all complex numbers $z$ such that $z^{5} = 32e^{i0}$, giving each in the form $re^{i\\theta}$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = 32e^{i0}",
          "explanation": "Exponential form of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{5} = 32e^{i0}",
          "explanation": "Standard root-finding equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "General formula",
          "workingLatex": "z = 2\\,e^{i\\frac{0 + 2k\\pi}{5}}",
          "explanation": "Modulus $2$; arguments spaced by $2\\pi/5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Values of $k$",
          "workingLatex": "k = 0, 1, \\ldots, 4",
          "explanation": "Distinct roots.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List roots",
          "workingLatex": "k=0: 2;\\; k=1: 2e^{i\\frac{2\\pi}{5}};\\; k=2: 2e^{i\\frac{4\\pi}{5}};\\; k=3: 2e^{i\\frac{6\\pi}{5}};\\; k=4: 2e^{i\\frac{8\\pi}{5}}",
          "explanation": "Substitute each $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Verify",
          "workingLatex": "(2)^{5} = 32e^{i0}",
          "explanation": "Check first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric view",
          "workingLatex": "\\text{Regular 5-gon on circle } |z|=2",
          "explanation": "Equally spaced roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Connection to unity",
          "workingLatex": "\\text{Rotate and scale from roots of unity}",
          "explanation": "Roots of $w$ are scaled roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "2,\\; 2e^{i\\frac{2\\pi}{5}},\\; 2e^{i\\frac{4\\pi}{5}},\\; 2e^{i\\frac{6\\pi}{5}},\\; 2e^{i\\frac{8\\pi}{5}}",
          "explanation": "All $n$ roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Roots of unity",
          "workingLatex": "z^{n}=1 \\Rightarrow z=e^{i\\frac{2k\\pi}{n}}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "De Moivre",
          "workingLatex": "z=r^{1/n}e^{i\\frac{\\theta+2k\\pi}{n}}",
          "explanation": "General $n$th roots of $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sum of roots",
          "workingLatex": "\\sum_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}}=0",
          "explanation": "Roots sum to zero for $n>1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Primitive root",
          "workingLatex": "\\gcd(k,n)=1 \\Rightarrow e^{i\\frac{2k\\pi}{n}} \\text{ is primitive}",
          "explanation": "Order exactly $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$2$, $2e^{i\\frac{2\\pi}{5}}$, $2e^{i\\frac{4\\pi}{5}}$, $2e^{i\\frac{6\\pi}{5}}$, $2e^{i\\frac{8\\pi}{5}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q068",
    "tags": [
      "twelfth",
      "primitive",
      "order"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Find all primitive 12th roots of unity.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Definition",
          "workingLatex": "\\omega \\text{ is primitive if } \\omega^{k} \\neq 1 \\text{ for } 1 \\leq k < 12",
          "explanation": "Order of $\\omega$ must be exactly $n$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Roots of unity",
          "workingLatex": "z = e^{i\\frac{2k\\pi}{12}}",
          "explanation": "All twelfth roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Exclude $k=0$",
          "workingLatex": "e^{i0} = 1 \\text{ has order } 1",
          "explanation": "The root 1 is not primitive for $n > 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Order condition",
          "workingLatex": "\\gcd(k, 12) = 1 \\Rightarrow e^{i\\frac{2k\\pi}{12}} \\text{ is primitive}",
          "explanation": "Primitive roots correspond to coprime $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "List",
          "workingLatex": "\\text{Primitive roots: } e^{i\\frac{2\\pi}{12}},\\; e^{i\\frac{10\\pi}{12}},\\; e^{i\\frac{14\\pi}{12}},\\; e^{i\\frac{22\\pi}{12}}",
          "explanation": "All $k$ with $\\gcd(k,n)=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Count",
          "workingLatex": "\\phi(12) = 4",
          "explanation": "Euler's totient gives the number of primitive roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Geometric",
          "workingLatex": "\\text{Generators of rotational symmetry}",
          "explanation": "Primitive roots generate all other roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Answer",
          "workingLatex": "e^{i\\frac{2\\pi}{12}},\\; e^{i\\frac{10\\pi}{12}},\\; e^{i\\frac{14\\pi}{12}},\\; e^{i\\frac{22\\pi}{12}}",
          "explanation": "Complete list.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Note",
          "workingLatex": "\\text{There are } \\phi(12) \\text{ primitive 12th roots}",
          "explanation": "Standard result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Roots of unity",
          "workingLatex": "z^{n}=1 \\Rightarrow z=e^{i\\frac{2k\\pi}{n}}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "De Moivre",
          "workingLatex": "z=r^{1/n}e^{i\\frac{\\theta+2k\\pi}{n}}",
          "explanation": "General $n$th roots of $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sum of roots",
          "workingLatex": "\\sum_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}}=0",
          "explanation": "Roots sum to zero for $n>1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Primitive root",
          "workingLatex": "\\gcd(k,n)=1 \\Rightarrow e^{i\\frac{2k\\pi}{n}} \\text{ is primitive}",
          "explanation": "Order exactly $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$e^{i\\frac{2\\pi}{12}},\\; e^{i\\frac{10\\pi}{12}},\\; e^{i\\frac{14\\pi}{12}},\\; e^{i\\frac{22\\pi}{12}}$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q069",
    "tags": [
      "sextic",
      "proof",
      "sum"
    ],
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "written",
    "questionText": "Let $\\omega = e^{i\\frac{2\\pi}{6}}$. Show that $\\omega + \\omega^{2} + \\cdots + \\omega^{5} = -1$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "All roots",
          "workingLatex": "1 + \\omega + \\omega^{2} + \\cdots + \\omega^{5} = 0",
          "explanation": "Sum of all sixth roots.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Geometric series",
          "workingLatex": "\\sum_{k=0}^{5} \\omega^{k} = \\frac{1-\\omega^{6}}{1-\\omega}",
          "explanation": "Finite GP with ratio $\\omega$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Numerator",
          "workingLatex": "1 - \\omega^{6} = 1 - 1 = 0",
          "explanation": "Since $\\omega^{6}=1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Sum is zero",
          "workingLatex": "\\sum_{k=0}^{5} \\omega^{k} = 0",
          "explanation": "Total sum vanishes.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Separate $k=0$",
          "workingLatex": "1 + (\\omega + \\omega^{2} + \\cdots + \\omega^{5}) = 0",
          "explanation": "Isolate the trivial root.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange",
          "workingLatex": "\\omega + \\omega^{2} + \\cdots + \\omega^{5} = -1",
          "explanation": "Sum of non-trivial roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Real part",
          "workingLatex": "\\text{For even } n, \\text{ pairs of conjugates give real sum}",
          "explanation": "Structure of the sum.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify $n=6$",
          "workingLatex": "\\text{Direct addition confirms } -1",
          "explanation": "Check numerically.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Answer",
          "workingLatex": "-1",
          "explanation": "Sum of non-trivial roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Roots of unity",
          "workingLatex": "z^{n}=1 \\Rightarrow z=e^{i\\frac{2k\\pi}{n}}",
          "explanation": "All roots lie on the unit circle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "De Moivre",
          "workingLatex": "z=r^{1/n}e^{i\\frac{\\theta+2k\\pi}{n}}",
          "explanation": "General $n$th roots of $re^{i\\theta}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sum of roots",
          "workingLatex": "\\sum_{k=0}^{n-1} e^{i\\frac{2k\\pi}{n}}=0",
          "explanation": "Roots sum to zero for $n>1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Primitive root",
          "workingLatex": "\\gcd(k,n)=1 \\Rightarrow e^{i\\frac{2k\\pi}{n}} \\text{ is primitive}",
          "explanation": "Order exactly $n$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\omega + \\omega^{2} + \\cdots + \\omega^{n-1} = -1$"
    }
  },
  {
    "level": "A-Level Further Maths",
    "topic": "Further Maths Year 2: Pure (Core Pure 2)",
    "subtopic": "Roots of unity",
    "subtopicId": "fm.y2.pure.roots-of-unity",
    "questionDiagram": null,
    "id": "fm.y2.pure.roots-of-unity.q070",
    "tags": [
      "general-roots",
      "proof"
    ],
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "written",
    "questionText": "Explain why the $n$th roots of any complex number $w = re^{i\\theta}$ are obtained by multiplying the $n$th roots of unity by $r^{1/n}e^{i\\theta/n}$, and use this to find the cube roots of $-27$.",
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write $w$",
          "workingLatex": "w = re^{i\\theta}",
          "explanation": "General complex number.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up",
          "workingLatex": "z^{n} = re^{i\\theta}",
          "explanation": "Find all roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "One root",
          "workingLatex": "z_0 = r^{1/n}e^{i\\theta/n}",
          "explanation": "Principal $n$th root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply by unity roots",
          "workingLatex": "z_k = z_0 \\cdot e^{i\\frac{2k\\pi}{n}}",
          "explanation": "All roots obtained by rotation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "General formula",
          "workingLatex": "z = r^{1/n}e^{i\\frac{\\theta + 2k\\pi}{n}}",
          "explanation": "Complete set.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply to $-27$",
          "workingLatex": "-27 = 27e^{i\\pi}",
          "explanation": "Exponential form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cube roots",
          "workingLatex": "z = 3e^{i\\frac{\\pi + 2k\\pi}{3}}",
          "explanation": "Modulus 3, three roots.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "$k=0$",
          "workingLatex": "z = 3e^{i\\pi/3} = \\frac{3}{2} + i\\frac{3\\sqrt{3}}{2}",
          "explanation": "First root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "$k=1$",
          "workingLatex": "z = 3e^{i\\pi} = -3",
          "explanation": "Second root.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "$k=2$",
          "workingLatex": "z = 3e^{i5\\pi/3} = \\frac{3}{2} - i\\frac{3\\sqrt{3}}{2}",
          "explanation": "Third root.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify",
          "workingLatex": "(-3)^{3} = -27",
          "explanation": "Check real root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Geometric",
          "workingLatex": "\\text{Equilateral triangle on } |z|=3",
          "explanation": "Scaled cube roots of unity.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Answer",
          "workingLatex": "3e^{i\\pi/3},\\; -3,\\; 3e^{i5\\pi/3}",
          "explanation": "All cube roots of $-27$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Roots of $w$: $r^{1/n}e^{i(\\theta+2k\\pi)/n}$; cube roots of $-27$: $3e^{i\\pi/3}$, $-3$, $3e^{i5\\pi/3}$."
    }
  }
];
