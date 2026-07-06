import { Question } from "@/lib/types";

export const questions: Question[] = [
{
    "id": "al.y2.pure.radians.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "degrees to radians"],
    "questionText": "Convert $30^{\\circ}$ to radians, giving your answer as an exact multiple of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "180^{\\circ} = \\pi \\text{ radians}",
          "explanation": "A straight angle of $180^{\\circ}$ is exactly $\\pi$ radians, because one radian is the angle that wraps an arc equal to the radius, and half a full turn wraps $\\pi$ radii around the circle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns degrees into radians",
          "workingLatex": "1^{\\circ} = \\dfrac{\\pi}{180} \\text{ radians}",
          "explanation": "Dividing both sides of $180^{\\circ}=\\pi$ by $180$ tells us what a single degree is worth in radians, so multiplying any degree value by $\\dfrac{\\pi}{180}$ converts it.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "30^{\\circ} = 30 \\times \\dfrac{\\pi}{180}",
          "explanation": "We have $30$ of these degrees, so we multiply the value of one degree, $\\dfrac{\\pi}{180}$, by $30$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write it as a single fraction",
          "workingLatex": "30^{\\circ} = \\dfrac{30\\pi}{180}",
          "explanation": "Multiplying the numerator by $30$ collects everything into one fraction, which is easier to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the highest common factor",
          "workingLatex": "\\text{HCF}(30, 180) = 30",
          "explanation": "The largest number dividing both $30$ and $180$ is $30$, since $180 = 30 \\times 6$. Cancelling by the highest common factor reaches simplest form in one move.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{30\\pi}{180} = \\dfrac{\\pi}{6}",
          "explanation": "Dividing top and bottom by $30$ leaves $\\dfrac{\\pi}{6}$, the exact simplified answer.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "\\dfrac{\\pi}{6} \\approx 0.52",
          "explanation": "A radian is a bit under $60^{\\circ}$, so a small angle like $30^{\\circ}$ should be a small fraction of $\\pi$, and $\\dfrac{\\pi}{6}\\approx 0.52$ radians fits that.",
          "diagram": null
        }
      ],
      "finalAnswer": "$30^{\\circ} = \\dfrac{\\pi}{6}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "degrees to radians"],
    "questionText": "Convert $135^{\\circ}$ to radians, giving your answer as an exact multiple of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "180^{\\circ} = \\pi \\text{ radians}",
          "explanation": "Half a full turn measures $180^{\\circ}$ in degrees and $\\pi$ in radians, so these two are just different names for the same angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns degrees into radians",
          "workingLatex": "1^{\\circ} = \\dfrac{\\pi}{180} \\text{ radians}",
          "explanation": "Dividing $180^{\\circ}=\\pi$ by $180$ gives the radian value of one degree, so multiplying by $\\dfrac{\\pi}{180}$ converts from degrees.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "135^{\\circ} = 135 \\times \\dfrac{\\pi}{180}",
          "explanation": "We scale the value of one degree up by $135$, since there are $135$ degrees to convert.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write it as a single fraction",
          "workingLatex": "135^{\\circ} = \\dfrac{135\\pi}{180}",
          "explanation": "Bringing the $135$ into the numerator gives one fraction ready to be simplified.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the highest common factor",
          "workingLatex": "\\text{HCF}(135, 180) = 45",
          "explanation": "Both numbers are multiples of $45$, since $135 = 45 \\times 3$ and $180 = 45 \\times 4$, and $45$ is the largest such factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{135\\pi}{180} = \\dfrac{3\\pi}{4}",
          "explanation": "Dividing numerator and denominator by $45$ gives $\\dfrac{3\\pi}{4}$ in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "\\dfrac{\\pi}{2} < \\dfrac{3\\pi}{4} < \\pi",
          "explanation": "Since $135^{\\circ}$ lies between $90^{\\circ}$ and $180^{\\circ}$, its radian value should lie between $\\dfrac{\\pi}{2}$ and $\\pi$, and $\\dfrac{3\\pi}{4}$ does.",
          "diagram": null
        }
      ],
      "finalAnswer": "$135^{\\circ} = \\dfrac{3\\pi}{4}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "degrees to radians"],
    "questionText": "Convert $240^{\\circ}$ to radians, giving your answer as an exact multiple of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "180^{\\circ} = \\pi \\text{ radians}",
          "explanation": "A half turn is $180^{\\circ}$ or $\\pi$ radians; this single fact is the bridge between the two units.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns degrees into radians",
          "workingLatex": "1^{\\circ} = \\dfrac{\\pi}{180} \\text{ radians}",
          "explanation": "Dividing the relationship by $180$ shows that each degree is worth $\\dfrac{\\pi}{180}$ radians, our conversion multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "240^{\\circ} = 240 \\times \\dfrac{\\pi}{180}",
          "explanation": "There are $240$ degrees, so we take $240$ copies of $\\dfrac{\\pi}{180}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write it as a single fraction",
          "workingLatex": "240^{\\circ} = \\dfrac{240\\pi}{180}",
          "explanation": "Combining into one fraction makes the common factors easy to spot.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the highest common factor",
          "workingLatex": "\\text{HCF}(240, 180) = 60",
          "explanation": "Both share the factor $60$, since $240 = 60 \\times 4$ and $180 = 60 \\times 3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{240\\pi}{180} = \\dfrac{4\\pi}{3}",
          "explanation": "Dividing top and bottom by $60$ leaves the simplest form $\\dfrac{4\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "\\dfrac{4\\pi}{3} \\approx 4.19",
          "explanation": "As $240^{\\circ}$ is more than a half turn, its radian measure should exceed $\\pi\\approx 3.14$, and $\\dfrac{4\\pi}{3}\\approx 4.19$ is indeed larger.",
          "diagram": null
        }
      ],
      "finalAnswer": "$240^{\\circ} = \\dfrac{4\\pi}{3}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "degrees to radians"],
    "questionText": "Convert $45^{\\circ}$ to radians, giving your answer as an exact multiple of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "180^{\\circ} = \\pi \\text{ radians}",
          "explanation": "A straight angle is $180^{\\circ}$, and in radians the same angle is $\\pi$; this equality lets us swap between units.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns degrees into radians",
          "workingLatex": "1^{\\circ} = \\dfrac{\\pi}{180} \\text{ radians}",
          "explanation": "Splitting the half turn into $180$ equal degrees shows one degree is $\\dfrac{\\pi}{180}$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "45^{\\circ} = 45 \\times \\dfrac{\\pi}{180}",
          "explanation": "We multiply the value of one degree by $45$ to convert the whole angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write it as a single fraction",
          "workingLatex": "45^{\\circ} = \\dfrac{45\\pi}{180}",
          "explanation": "Placing the $45$ over $180$ gives a single fraction to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the highest common factor",
          "workingLatex": "\\text{HCF}(45, 180) = 45",
          "explanation": "Since $180 = 45 \\times 4$, the number $45$ divides both parts and is the largest factor they share.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{45\\pi}{180} = \\dfrac{\\pi}{4}",
          "explanation": "Dividing numerator and denominator by $45$ gives the simplest form $\\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "\\dfrac{\\pi}{4} \\approx 0.79",
          "explanation": "Since $45^{\\circ}$ is exactly half of $90^{\\circ}$ (which is $\\dfrac{\\pi}{2}$), we expect half of $\\dfrac{\\pi}{2}$, namely $\\dfrac{\\pi}{4}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$45^{\\circ} = \\dfrac{\\pi}{4}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "degrees to radians"],
    "questionText": "Convert $300^{\\circ}$ to radians, giving your answer as an exact multiple of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "180^{\\circ} = \\pi \\text{ radians}",
          "explanation": "The half turn measured two ways gives $180^{\\circ}=\\pi$ radians, the anchor for every conversion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns degrees into radians",
          "workingLatex": "1^{\\circ} = \\dfrac{\\pi}{180} \\text{ radians}",
          "explanation": "Dividing by $180$ tells us one degree equals $\\dfrac{\\pi}{180}$ radians, which is what we multiply by.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "300^{\\circ} = 300 \\times \\dfrac{\\pi}{180}",
          "explanation": "We have $300$ degrees, so we take $300$ lots of $\\dfrac{\\pi}{180}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write it as a single fraction",
          "workingLatex": "300^{\\circ} = \\dfrac{300\\pi}{180}",
          "explanation": "Gathering into one fraction sets up the cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the highest common factor",
          "workingLatex": "\\text{HCF}(300, 180) = 60",
          "explanation": "Both are multiples of $60$: $300 = 60 \\times 5$ and $180 = 60 \\times 3$, and no larger number divides both.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{300\\pi}{180} = \\dfrac{5\\pi}{3}",
          "explanation": "Dividing top and bottom by $60$ gives the simplest form $\\dfrac{5\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "\\dfrac{5\\pi}{3} \\approx 5.24",
          "explanation": "As $300^{\\circ}$ is close to a full turn of $360^{\\circ}=2\\pi\\approx 6.28$, its radian value should be a little below $2\\pi$, and $\\dfrac{5\\pi}{3}\\approx 5.24$ fits.",
          "diagram": null
        }
      ],
      "finalAnswer": "$300^{\\circ} = \\dfrac{5\\pi}{3}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "radians to degrees"],
    "questionText": "Convert $\\dfrac{5\\pi}{6}$ radians to degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "\\pi \\text{ radians} = 180^{\\circ}",
          "explanation": "An angle of $\\pi$ radians is the same as $180^{\\circ}$, so we can trade one for the other whenever it helps.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns radians into degrees",
          "workingLatex": "1 \\text{ radian} = \\dfrac{180}{\\pi} \\text{ degrees}",
          "explanation": "Dividing $\\pi=180^{\\circ}$ by $\\pi$ shows one radian is $\\dfrac{180}{\\pi}$ degrees, so multiplying by $\\dfrac{180}{\\pi}$ converts to degrees.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "\\dfrac{5\\pi}{6} \\times \\dfrac{180}{\\pi}",
          "explanation": "We replace one radian's value into our angle by multiplying $\\dfrac{5\\pi}{6}$ by $\\dfrac{180}{\\pi}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the factor of pi",
          "workingLatex": "\\dfrac{5\\pi}{6} \\times \\dfrac{180}{\\pi} = \\dfrac{5 \\times 180}{6}",
          "explanation": "The $\\pi$ on top of one fraction cancels the $\\pi$ on the bottom of the other, leaving only numbers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the number fraction",
          "workingLatex": "\\dfrac{180}{6} = 30",
          "explanation": "Dividing $180$ by $6$ first keeps the arithmetic small and gives $30$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out the result",
          "workingLatex": "5 \\times 30 = 150",
          "explanation": "Multiplying the remaining $5$ by $30$ gives the angle in degrees.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "90^{\\circ} < 150^{\\circ} < 180^{\\circ}",
          "explanation": "Since $\\dfrac{5\\pi}{6}$ is between $\\dfrac{\\pi}{2}$ and $\\pi$, the degree answer should be between $90^{\\circ}$ and $180^{\\circ}$, and $150^{\\circ}$ is.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{5\\pi}{6} \\text{ radians} = 150^{\\circ}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "radians to degrees"],
    "questionText": "Convert $\\dfrac{3\\pi}{4}$ radians to degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "\\pi \\text{ radians} = 180^{\\circ}",
          "explanation": "The half turn is $\\pi$ radians or $180^{\\circ}$, and this equality drives the conversion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns radians into degrees",
          "workingLatex": "1 \\text{ radian} = \\dfrac{180}{\\pi} \\text{ degrees}",
          "explanation": "Dividing both sides by $\\pi$ gives the degree value of a single radian, so $\\dfrac{180}{\\pi}$ is our multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "\\dfrac{3\\pi}{4} \\times \\dfrac{180}{\\pi}",
          "explanation": "We multiply the given radian measure by $\\dfrac{180}{\\pi}$ to change it into degrees.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the factor of pi",
          "workingLatex": "\\dfrac{3\\pi}{4} \\times \\dfrac{180}{\\pi} = \\dfrac{3 \\times 180}{4}",
          "explanation": "The $\\pi$ terms divide out, leaving a pure number calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the number fraction",
          "workingLatex": "\\dfrac{180}{4} = 45",
          "explanation": "Dividing $180$ by $4$ before multiplying keeps things simple and gives $45$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out the result",
          "workingLatex": "3 \\times 45 = 135",
          "explanation": "Multiplying the remaining $3$ by $45$ produces the answer in degrees.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "90^{\\circ} < 135^{\\circ} < 180^{\\circ}",
          "explanation": "As $\\dfrac{3\\pi}{4}$ sits between $\\dfrac{\\pi}{2}$ and $\\pi$, its degree form should be between $90^{\\circ}$ and $180^{\\circ}$, and $135^{\\circ}$ is.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{3\\pi}{4} \\text{ radians} = 135^{\\circ}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "radians to degrees"],
    "questionText": "Convert $\\dfrac{7\\pi}{6}$ radians to degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "\\pi \\text{ radians} = 180^{\\circ}",
          "explanation": "The angle $\\pi$ radians equals $180^{\\circ}$; we lean on this to turn radians into degrees.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns radians into degrees",
          "workingLatex": "1 \\text{ radian} = \\dfrac{180}{\\pi} \\text{ degrees}",
          "explanation": "Sharing $180^{\\circ}$ equally among $\\pi$ radians gives $\\dfrac{180}{\\pi}$ degrees per radian.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "\\dfrac{7\\pi}{6} \\times \\dfrac{180}{\\pi}",
          "explanation": "Multiplying our angle by $\\dfrac{180}{\\pi}$ rewrites it in degrees.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the factor of pi",
          "workingLatex": "\\dfrac{7\\pi}{6} \\times \\dfrac{180}{\\pi} = \\dfrac{7 \\times 180}{6}",
          "explanation": "The $\\pi$ on the top cancels the $\\pi$ on the bottom, leaving only whole numbers.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the number fraction",
          "workingLatex": "\\dfrac{180}{6} = 30",
          "explanation": "Dividing $180$ by $6$ first gives $30$ and avoids large multiplications.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out the result",
          "workingLatex": "7 \\times 30 = 210",
          "explanation": "Multiplying the remaining $7$ by $30$ gives the angle in degrees.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "180^{\\circ} < 210^{\\circ} < 270^{\\circ}",
          "explanation": "Because $\\dfrac{7\\pi}{6}$ is just past $\\pi$, the degree answer should be a little more than $180^{\\circ}$, and $210^{\\circ}$ matches.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{7\\pi}{6} \\text{ radians} = 210^{\\circ}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "radians to degrees"],
    "questionText": "Convert $\\dfrac{\\pi}{3}$ radians to degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "\\pi \\text{ radians} = 180^{\\circ}",
          "explanation": "A half turn is $\\pi$ radians and $180^{\\circ}$; this is the key fact for the conversion.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns radians into degrees",
          "workingLatex": "1 \\text{ radian} = \\dfrac{180}{\\pi} \\text{ degrees}",
          "explanation": "Dividing $\\pi=180^{\\circ}$ by $\\pi$ gives $\\dfrac{180}{\\pi}$ degrees for each radian.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "\\dfrac{\\pi}{3} \\times \\dfrac{180}{\\pi}",
          "explanation": "We multiply the given radian measure by $\\dfrac{180}{\\pi}$ to convert it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the factor of pi",
          "workingLatex": "\\dfrac{\\pi}{3} \\times \\dfrac{180}{\\pi} = \\dfrac{180}{3}",
          "explanation": "The $\\pi$ terms cancel, leaving a single number fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the number fraction",
          "workingLatex": "\\dfrac{180}{3} = 60",
          "explanation": "Dividing $180$ by $3$ gives $60$ directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the result",
          "workingLatex": "\\dfrac{\\pi}{3} = 60^{\\circ}",
          "explanation": "So $\\dfrac{\\pi}{3}$ radians is exactly $60^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "60^{\\circ} = \\dfrac{1}{3} \\times 180^{\\circ}",
          "explanation": "Since $\\dfrac{\\pi}{3}$ is one third of $\\pi$, the answer should be one third of $180^{\\circ}$, which is $60^{\\circ}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{\\pi}{3} \\text{ radians} = 60^{\\circ}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["radians", "radians to degrees"],
    "questionText": "Convert $\\dfrac{11\\pi}{12}$ radians to degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "\\pi \\text{ radians} = 180^{\\circ}",
          "explanation": "The half turn equals $\\pi$ radians or $180^{\\circ}$, the anchor fact for converting.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns radians into degrees",
          "workingLatex": "1 \\text{ radian} = \\dfrac{180}{\\pi} \\text{ degrees}",
          "explanation": "Dividing the relationship by $\\pi$ gives $\\dfrac{180}{\\pi}$ degrees per radian, the multiplier to use.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "\\dfrac{11\\pi}{12} \\times \\dfrac{180}{\\pi}",
          "explanation": "Multiplying $\\dfrac{11\\pi}{12}$ by $\\dfrac{180}{\\pi}$ rewrites the angle in degrees.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the factor of pi",
          "workingLatex": "\\dfrac{11\\pi}{12} \\times \\dfrac{180}{\\pi} = \\dfrac{11 \\times 180}{12}",
          "explanation": "The $\\pi$ on top divides out the $\\pi$ underneath, leaving only numbers to handle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the number fraction",
          "workingLatex": "\\dfrac{180}{12} = 15",
          "explanation": "Dividing $180$ by $12$ first gives $15$, keeping the later multiplication small.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out the result",
          "workingLatex": "11 \\times 15 = 165",
          "explanation": "Multiplying the remaining $11$ by $15$ gives the angle in degrees.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "\\dfrac{11\\pi}{12} \\text{ is just under } \\pi",
          "explanation": "As $\\dfrac{11\\pi}{12}$ is close to $\\pi$, the answer should be just below $180^{\\circ}$, and $165^{\\circ}$ is close to $180^{\\circ}$ as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{11\\pi}{12} \\text{ radians} = 165^{\\circ}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["radians", "degrees to radians"],
    "questionText": "Convert $72^{\\circ}$ to radians, giving your answer as an exact multiple of $\\pi$ in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "180^{\\circ} = \\pi \\text{ radians}",
          "explanation": "A half turn is $180^{\\circ}$ or $\\pi$ radians, and this equality lets us convert.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns degrees into radians",
          "workingLatex": "1^{\\circ} = \\dfrac{\\pi}{180} \\text{ radians}",
          "explanation": "Dividing $180^{\\circ}=\\pi$ by $180$ gives the radian size of one degree, namely $\\dfrac{\\pi}{180}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "72^{\\circ} = 72 \\times \\dfrac{\\pi}{180}",
          "explanation": "There are $72$ degrees, so we multiply the value of one degree by $72$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write it as a single fraction",
          "workingLatex": "72^{\\circ} = \\dfrac{72\\pi}{180}",
          "explanation": "Combining into one fraction makes the shared factors visible.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the highest common factor",
          "workingLatex": "\\text{HCF}(72, 180) = 36",
          "explanation": "Both numbers divide by $36$: $72 = 36 \\times 2$ and $180 = 36 \\times 5$, and $36$ is the largest common factor.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cancel the common factor",
          "workingLatex": "\\dfrac{72\\pi}{180} = \\dfrac{2\\pi}{5}",
          "explanation": "Dividing numerator and denominator by $36$ gives the simplest form $\\dfrac{2\\pi}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "\\dfrac{2\\pi}{5} \\approx 1.26",
          "explanation": "Since $72^{\\circ}$ is less than $90^{\\circ}$ (which is $\\dfrac{\\pi}{2}\\approx 1.57$), the radian value should be under $1.57$, and $\\dfrac{2\\pi}{5}\\approx 1.26$ fits.",
          "diagram": null
        }
      ],
      "finalAnswer": "$72^{\\circ} = \\dfrac{2\\pi}{5}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["radians", "radians to degrees"],
    "questionText": "Convert $\\dfrac{2\\pi}{9}$ radians to degrees.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "\\pi \\text{ radians} = 180^{\\circ}",
          "explanation": "The half turn is $\\pi$ radians or $180^{\\circ}$; we use this to move from radians to degrees.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the multiplier that turns radians into degrees",
          "workingLatex": "1 \\text{ radian} = \\dfrac{180}{\\pi} \\text{ degrees}",
          "explanation": "Dividing by $\\pi$ shows a single radian is worth $\\dfrac{180}{\\pi}$ degrees.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given angle",
          "workingLatex": "\\dfrac{2\\pi}{9} \\times \\dfrac{180}{\\pi}",
          "explanation": "Multiplying the angle by $\\dfrac{180}{\\pi}$ converts it into degrees.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Cancel the factor of pi",
          "workingLatex": "\\dfrac{2\\pi}{9} \\times \\dfrac{180}{\\pi} = \\dfrac{2 \\times 180}{9}",
          "explanation": "The $\\pi$ terms cancel, leaving a straightforward number calculation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the number fraction",
          "workingLatex": "\\dfrac{180}{9} = 20",
          "explanation": "Dividing $180$ by $9$ first gives $20$, which is easier than multiplying then dividing.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply out the result",
          "workingLatex": "2 \\times 20 = 40",
          "explanation": "Multiplying the remaining $2$ by $20$ gives the angle in degrees.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "\\dfrac{2\\pi}{9} \\approx 0.70",
          "explanation": "Since $\\dfrac{2\\pi}{9}$ is a small fraction of $\\pi$, the answer should be a small angle, and $40^{\\circ}$ is well under $90^{\\circ}$ as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\dfrac{2\\pi}{9} \\text{ radians} = 40^{\\circ}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "exact trig values", "special angles"],
    "questionText": "Write down the exact value of $\\sin\\left(\\dfrac{\\pi}{6}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "\\pi \\text{ radians} = 180^{\\circ}",
          "explanation": "Knowing the angle in degrees makes it easier to spot a special angle, so we start from $\\pi=180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert the angle to degrees",
          "workingLatex": "\\dfrac{\\pi}{6} = \\dfrac{180^{\\circ}}{6} = 30^{\\circ}",
          "explanation": "Dividing $180^{\\circ}$ by $6$ shows $\\dfrac{\\pi}{6}$ is $30^{\\circ}$, one of the standard special angles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the expression with the known angle",
          "workingLatex": "\\sin\\left(\\dfrac{\\pi}{6}\\right) = \\sin 30^{\\circ}",
          "explanation": "The sine of an angle does not depend on whether it is written in radians or degrees, so we may use whichever is more familiar.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the special triangle",
          "workingLatex": "\\text{equilateral triangle of side } 2 \\text{, cut in half}",
          "explanation": "Cutting an equilateral triangle of side $2$ down the middle creates a right-angled triangle containing a $30^{\\circ}$ angle, giving us exact side lengths.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Read off the relevant sides",
          "workingLatex": "\\text{opposite} = 1, \\quad \\text{hypotenuse} = 2",
          "explanation": "The side opposite the $30^{\\circ}$ angle is the half base of length $1$, while the hypotenuse is the original side of length $2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the definition of sine",
          "workingLatex": "\\sin 30^{\\circ} = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{1}{2}",
          "explanation": "Sine is opposite over hypotenuse, so dividing $1$ by $2$ gives the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the answer is sensible",
          "workingLatex": "0 < \\dfrac{1}{2} < 1",
          "explanation": "The sine of any acute angle lies between $0$ and $1$, and for a fairly small angle like $30^{\\circ}$ a value of $\\dfrac{1}{2}$ is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["radians", "exact trig values", "special angles"],
    "questionText": "Write down the exact value of $\\cos\\left(\\dfrac{\\pi}{4}\\right)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the conversion relationship",
          "workingLatex": "\\pi \\text{ radians} = 180^{\\circ}",
          "explanation": "Converting to degrees first makes the special angle easy to recognise, so we begin with $\\pi=180^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Convert the angle to degrees",
          "workingLatex": "\\dfrac{\\pi}{4} = \\dfrac{180^{\\circ}}{4} = 45^{\\circ}",
          "explanation": "Dividing $180^{\\circ}$ by $4$ shows $\\dfrac{\\pi}{4}$ is $45^{\\circ}$, a standard special angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rewrite the expression with the known angle",
          "workingLatex": "\\cos\\left(\\dfrac{\\pi}{4}\\right) = \\cos 45^{\\circ}",
          "explanation": "The cosine value is the same whether the angle is written in radians or degrees, so we work with $45^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the special triangle",
          "workingLatex": "\\text{right-angled triangle with legs } 1 \\text{ and } 1",
          "explanation": "An isosceles right-angled triangle has two equal legs and a $45^{\\circ}$ angle, which gives exact ratios; take each leg to be $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the hypotenuse by Pythagoras",
          "workingLatex": "\\text{hypotenuse} = \\sqrt{1^{2} + 1^{2}} = \\sqrt{2}",
          "explanation": "By Pythagoras the hypotenuse is the square root of the sum of the squares of the legs, giving $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the definition of cosine",
          "workingLatex": "\\cos 45^{\\circ} = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{1}{\\sqrt{2}}",
          "explanation": "Cosine is adjacent over hypotenuse, and the side next to the $45^{\\circ}$ angle is $1$ while the hypotenuse is $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rationalise the denominator",
          "workingLatex": "\\dfrac{1}{\\sqrt{2}} \\times \\dfrac{\\sqrt{2}}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}",
          "explanation": "Multiplying top and bottom by $\\sqrt{2}$ clears the surd from the denominator, giving the tidy exact form $\\dfrac{\\sqrt{2}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the answer is sensible",
          "workingLatex": "\\dfrac{\\sqrt{2}}{2} \\approx 0.71",
          "explanation": "The cosine of an acute angle lies between $0$ and $1$, and $\\dfrac{\\sqrt{2}}{2}\\approx 0.71$ is a believable value for $45^{\\circ}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2} = \\dfrac{1}{\\sqrt{2}}$"
    }
  },
{
    "id": "al.y2.pure.radians.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "exact values", "special angles"],
    "questionText": "Find the exact value of $\\tan\\dfrac{\\pi}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert the angle to degrees",
          "workingLatex": "\\dfrac{\\pi}{3} = 60^{\\circ}",
          "explanation": "It is often easier to picture the special angles in degrees. Since $\\pi$ radians is a straight angle of $180^{\\circ}$, dividing by $3$ gives $\\dfrac{180^{\\circ}}{3} = 60^{\\circ}$, one of the standard angles we know exact values for.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of tangent",
          "workingLatex": "\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}}",
          "explanation": "In a right-angled triangle the tangent of an angle is the side opposite the angle divided by the side next to it. If we can read those two sides off a known triangle, we get the exact value with no calculator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the 30-60-90 special triangle",
          "workingLatex": "1 : \\sqrt{3} : 2",
          "explanation": "The half of an equilateral triangle gives sides in the ratio $1 : \\sqrt{3} : 2$, where $1$ faces the $30^{\\circ}$ angle, $\\sqrt{3}$ faces the $60^{\\circ}$ angle, and $2$ is the hypotenuse. This single triangle stores the exact values for both $30^{\\circ}$ and $60^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the sides for 60 degrees",
          "workingLatex": "\\text{opp} = \\sqrt{3}, \\quad \\text{adj} = 1",
          "explanation": "For the $60^{\\circ}$ angle, the side opposite it is the longer leg $\\sqrt{3}$, and the side adjacent to it is the short leg $1$. These are exactly the two lengths the tangent needs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the tangent",
          "workingLatex": "\\tan 60^{\\circ} = \\dfrac{\\sqrt{3}}{1} = \\sqrt{3}",
          "explanation": "Dividing the opposite by the adjacent gives $\\dfrac{\\sqrt{3}}{1}$, which is just $\\sqrt{3}$. This is an exact value, so we leave the surd rather than rounding.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "\\tan\\dfrac{\\pi}{3} = \\sqrt{3}",
          "explanation": "Because $\\dfrac{\\pi}{3}$ and $60^{\\circ}$ are the same angle, the exact value we found applies directly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\dfrac{\\pi}{3} = \\sqrt{3}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "exact values", "special angles"],
    "questionText": "Find the exact value of $\\cos\\dfrac{\\pi}{3}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert the angle to degrees",
          "workingLatex": "\\dfrac{\\pi}{3} = 60^{\\circ}",
          "explanation": "Since $\\pi$ radians equals $180^{\\circ}$, the angle $\\dfrac{\\pi}{3}$ is $\\dfrac{180^{\\circ}}{3} = 60^{\\circ}$, one of the special angles with a known exact cosine.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of cosine",
          "workingLatex": "\\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}",
          "explanation": "Cosine measures how much of the hypotenuse lies along the adjacent side, so it is the adjacent side divided by the hypotenuse. Reading these off a known triangle gives an exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the 30-60-90 special triangle",
          "workingLatex": "1 : \\sqrt{3} : 2",
          "explanation": "Half of an equilateral triangle has sides in the ratio $1 : \\sqrt{3} : 2$, with $1$ opposite $30^{\\circ}$, $\\sqrt{3}$ opposite $60^{\\circ}$, and $2$ as the hypotenuse. This gives the exact cosine of $60^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the sides for 60 degrees",
          "workingLatex": "\\text{adj} = 1, \\quad \\text{hyp} = 2",
          "explanation": "The side next to the $60^{\\circ}$ angle is the short leg of length $1$, and the hypotenuse is $2$. These are the two lengths cosine needs.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cosine",
          "workingLatex": "\\cos 60^{\\circ} = \\dfrac{1}{2}",
          "explanation": "Dividing the adjacent side by the hypotenuse gives $\\dfrac{1}{2}$ exactly. There is no surd here, so the answer is a simple fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}",
          "explanation": "As $\\dfrac{\\pi}{3}$ is the same angle as $60^{\\circ}$, the exact value carries straight over.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["radians", "exact values", "special angles"],
    "questionText": "Find the exact value of $\\sin\\dfrac{\\pi}{4}$, giving your answer with a rational denominator.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert the angle to degrees",
          "workingLatex": "\\dfrac{\\pi}{4} = 45^{\\circ}",
          "explanation": "Since $\\pi$ radians is $180^{\\circ}$, the angle $\\dfrac{\\pi}{4}$ equals $\\dfrac{180^{\\circ}}{4} = 45^{\\circ}$, the special angle from an isosceles right-angled triangle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of sine",
          "workingLatex": "\\sin\\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}",
          "explanation": "Sine is the side opposite the angle divided by the hypotenuse. Reading these lengths from a known triangle gives an exact result.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the 45-45-90 special triangle",
          "workingLatex": "1 : 1 : \\sqrt{2}",
          "explanation": "A right-angled triangle with two equal legs of length $1$ has hypotenuse $\\sqrt{2}$ by Pythagoras, since $1^{2} + 1^{2} = 2$. This triangle stores the exact values for $45^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the sides for 45 degrees",
          "workingLatex": "\\text{opp} = 1, \\quad \\text{hyp} = \\sqrt{2}",
          "explanation": "For a $45^{\\circ}$ angle the opposite side is one of the equal legs, length $1$, and the hypotenuse is $\\sqrt{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the sine",
          "workingLatex": "\\sin 45^{\\circ} = \\dfrac{1}{\\sqrt{2}}",
          "explanation": "Dividing the opposite by the hypotenuse gives $\\dfrac{1}{\\sqrt{2}}$. This is correct but has a surd on the bottom, which we usually clear.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rationalise the denominator",
          "workingLatex": "\\dfrac{1}{\\sqrt{2}} \\times \\dfrac{\\sqrt{2}}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}",
          "explanation": "Multiplying top and bottom by $\\sqrt{2}$ does not change the value (we multiply by $1$), but it turns the denominator into the whole number $2$, giving the tidier exact form $\\dfrac{\\sqrt{2}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer",
          "workingLatex": "\\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}",
          "explanation": "Because $\\dfrac{\\pi}{4}$ is the same angle as $45^{\\circ}$, this exact value is the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "exact values", "special angles"],
    "questionText": "Find the exact value of $\\tan\\dfrac{\\pi}{4}$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert the angle to degrees",
          "workingLatex": "\\dfrac{\\pi}{4} = 45^{\\circ}",
          "explanation": "Since $\\pi$ radians is $180^{\\circ}$, the angle $\\dfrac{\\pi}{4}$ equals $\\dfrac{180^{\\circ}}{4} = 45^{\\circ}$, the special angle from an isosceles right-angled triangle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the definition of tangent",
          "workingLatex": "\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}}",
          "explanation": "Tangent is the side opposite the angle divided by the side adjacent to it. Reading these lengths from a known triangle gives the exact value.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the 45-45-90 special triangle",
          "workingLatex": "1 : 1 : \\sqrt{2}",
          "explanation": "An isosceles right-angled triangle has two equal legs of length $1$ and hypotenuse $\\sqrt{2}$. Because the two legs are equal, the tangent of $45^{\\circ}$ becomes especially simple.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the sides for 45 degrees",
          "workingLatex": "\\text{opp} = 1, \\quad \\text{adj} = 1",
          "explanation": "For a $45^{\\circ}$ angle both the opposite and adjacent sides are the equal legs, each of length $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the tangent",
          "workingLatex": "\\tan 45^{\\circ} = \\dfrac{1}{1} = 1",
          "explanation": "Dividing the opposite by the adjacent gives $\\dfrac{1}{1} = 1$. It makes sense that the tangent is exactly $1$, because at $45^{\\circ}$ the two legs are equal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer",
          "workingLatex": "\\tan\\dfrac{\\pi}{4} = 1",
          "explanation": "As $\\dfrac{\\pi}{4}$ is the same angle as $45^{\\circ}$, the exact value is $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\tan\\dfrac{\\pi}{4} = 1$"
    }
  },
  {
    "id": "al.y2.pure.radians.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "arc length"],
    "questionText": "A sector of a circle has radius $5\\text{ cm}$ and subtends an angle of $0.8$ radians at the centre. Find the length of the arc.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "When the angle $\\theta$ is measured in radians, the arc length is simply radius times angle. This is the whole reason radians are convenient: no conversion factor is needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is in radians",
          "workingLatex": "\\theta = 0.8",
          "explanation": "The formula $s = r\\theta$ only works when $\\theta$ is in radians. Here the angle is already given as $0.8$ radians, so we can use it directly with no conversion.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the known values",
          "workingLatex": "r = 5, \\quad \\theta = 0.8",
          "explanation": "Listing the radius and angle first keeps the substitution clean and helps avoid slips.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "s = 5 \\times 0.8",
          "explanation": "Replacing $r$ and $\\theta$ with their values turns the general rule into a single multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the product",
          "workingLatex": "s = 4",
          "explanation": "Multiplying $5$ by $0.8$ gives $4$. As a sense check, $0.8$ radians is a little under a right angle, so an arc shorter than the radius times $\\dfrac{\\pi}{2}\\approx 1.57$ is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer with units",
          "workingLatex": "s = 4 \\text{ cm}",
          "explanation": "The radius was in centimetres, so the arc length is also in centimetres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 4\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "arc length"],
    "questionText": "A sector of a circle has radius $12\\text{ cm}$ and subtends an angle of $0.5$ radians at the centre. Find the length of the arc.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "With the angle in radians the arc length is radius times angle. Radians are chosen precisely so this relationship needs no extra constant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is in radians",
          "workingLatex": "\\theta = 0.5",
          "explanation": "The angle is given as $0.5$ radians, which is exactly the form the formula needs, so no conversion is required.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the known values",
          "workingLatex": "r = 12, \\quad \\theta = 0.5",
          "explanation": "Noting the radius and angle before substituting keeps the working organised.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "s = 12 \\times 0.5",
          "explanation": "Putting the values into $s = r\\theta$ reduces the problem to one multiplication.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the product",
          "workingLatex": "s = 6",
          "explanation": "Multiplying $12$ by $0.5$ is the same as halving $12$, which gives $6$. It makes sense that half a radian produces an arc of half the radius.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the final answer with units",
          "workingLatex": "s = 6 \\text{ cm}",
          "explanation": "Since the radius is in centimetres, the arc length is $6\\text{ cm}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 6\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["radians", "sector area"],
    "questionText": "A sector of a circle has radius $6\\text{ cm}$ and subtends an angle of $0.5$ radians at the centre. Find the area of the sector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the sector area formula",
          "workingLatex": "A = \\dfrac{1}{2}r^{2}\\theta",
          "explanation": "For an angle $\\theta$ in radians, the area of a sector is $\\dfrac{1}{2}r^{2}\\theta$. This comes from taking the fraction $\\dfrac{\\theta}{2\\pi}$ of the whole circle area $\\pi r^{2}$, which simplifies neatly to $\\dfrac{1}{2}r^{2}\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is in radians",
          "workingLatex": "\\theta = 0.5",
          "explanation": "This formula requires $\\theta$ in radians. The angle is already $0.5$ radians, so we can substitute directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the known values",
          "workingLatex": "r = 6, \\quad \\theta = 0.5",
          "explanation": "Recording the radius and angle first makes the substitution clear and reduces the chance of error.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "A = \\dfrac{1}{2} \\times 6^{2} \\times 0.5",
          "explanation": "Replacing $r$ with $6$ and $\\theta$ with $0.5$ sets up the calculation. Remember to square the radius, not the whole product.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the radius",
          "workingLatex": "A = \\dfrac{1}{2} \\times 36 \\times 0.5",
          "explanation": "Squaring the radius gives $6^{2} = 36$. Doing this first keeps the arithmetic straightforward.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the product",
          "workingLatex": "A = \\dfrac{1}{2} \\times 36 \\times 0.5 = 9",
          "explanation": "Half of $36$ is $18$, and $18 \\times 0.5 = 9$. The answer is a clean number, which is reassuring for a check.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer with units",
          "workingLatex": "A = 9 \\text{ cm}^{2}",
          "explanation": "Because the radius was in centimetres, the area is measured in square centimetres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = 9\\text{ cm}^{2}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["radians", "sector area"],
    "questionText": "A sector of a circle has radius $10\\text{ cm}$ and subtends an angle of $1.2$ radians at the centre. Find the area of the sector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the sector area formula",
          "workingLatex": "A = \\dfrac{1}{2}r^{2}\\theta",
          "explanation": "For a radian angle $\\theta$, the sector area is $\\dfrac{1}{2}r^{2}\\theta$. It is the fraction $\\dfrac{\\theta}{2\\pi}$ of the full circle area $\\pi r^{2}$, which tidies up to this compact form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is in radians",
          "workingLatex": "\\theta = 1.2",
          "explanation": "The formula needs the angle in radians, and $1.2$ radians is already in that form, so no conversion is needed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the known values",
          "workingLatex": "r = 10, \\quad \\theta = 1.2",
          "explanation": "Listing the radius and angle keeps the substitution organised.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "A = \\dfrac{1}{2} \\times 10^{2} \\times 1.2",
          "explanation": "Replacing $r$ with $10$ and $\\theta$ with $1.2$ sets up the calculation. Only the radius is squared.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the radius",
          "workingLatex": "A = \\dfrac{1}{2} \\times 100 \\times 1.2",
          "explanation": "Squaring the radius gives $10^{2} = 100$, which makes the remaining arithmetic simple.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the product",
          "workingLatex": "A = 50 \\times 1.2 = 60",
          "explanation": "Half of $100$ is $50$, and $50 \\times 1.2 = 60$. The clean result is a good sign the working is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the final answer with units",
          "workingLatex": "A = 60 \\text{ cm}^{2}",
          "explanation": "Since the radius is in centimetres, the area comes out in square centimetres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = 60\\text{ cm}^{2}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["radians", "arc length", "exact form"],
    "questionText": "A sector of a circle has radius $8\\text{ cm}$ and subtends an angle of $\\dfrac{\\pi}{3}$ radians at the centre. Find the exact length of the arc, and give a decimal value to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "With the angle in radians, the arc length is radius times angle. Because the angle here is a multiple of $\\pi$, we can keep the answer exact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is in radians",
          "workingLatex": "\\theta = \\dfrac{\\pi}{3}",
          "explanation": "The angle $\\dfrac{\\pi}{3}$ is already in radians, so it slots straight into the formula. Keeping it as a fraction of $\\pi$ lets us give an exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the known values",
          "workingLatex": "r = 8, \\quad \\theta = \\dfrac{\\pi}{3}",
          "explanation": "Noting the radius and angle before substituting keeps the working clear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "s = 8 \\times \\dfrac{\\pi}{3}",
          "explanation": "Replacing $r$ and $\\theta$ gives the arc length as a product of $8$ and $\\dfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to exact form",
          "workingLatex": "s = \\dfrac{8\\pi}{3}",
          "explanation": "Multiplying $8$ by $\\dfrac{\\pi}{3}$ puts the $8$ on top of the fraction, giving $\\dfrac{8\\pi}{3}$. Since $8$ and $3$ share no common factor, this is already in simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Convert to a decimal",
          "workingLatex": "\\dfrac{8\\pi}{3} = \\dfrac{8 \\times 3.14159\\ldots}{3}",
          "explanation": "To sense-check the exact value, replace $\\pi$ with its decimal $3.14159\\ldots$ and evaluate the fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the decimal",
          "workingLatex": "\\dfrac{25.133\\ldots}{3} \\approx 8.38",
          "explanation": "This gives about $8.38$ centimetres, which we will use as a sense-check on the exact form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sense-check the size",
          "workingLatex": "8.38 > 8",
          "explanation": "The angle $\\dfrac{\\pi}{3} \\approx 1.05$ radians is just over $1$ radian, so the arc should be slightly longer than the radius of $8\\text{ cm}$. Our value of $8.38\\text{ cm}$ fits that expectation, which builds confidence in the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "s = \\dfrac{8\\pi}{3} \\text{ cm} \\approx 8.38 \\text{ cm}",
          "explanation": "We report the exact surd-free form $\\dfrac{8\\pi}{3}$ as the main answer, with the decimal alongside for context.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = \\dfrac{8\\pi}{3}\\text{ cm} \\approx 8.38\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["radians", "sector area", "exact form"],
    "questionText": "A sector of a circle has radius $8\\text{ cm}$ and subtends an angle of $\\dfrac{\\pi}{3}$ radians at the centre. Find the exact area of the sector, and give a decimal value to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the sector area formula",
          "workingLatex": "A = \\dfrac{1}{2}r^{2}\\theta",
          "explanation": "For a radian angle, the sector area is $\\dfrac{1}{2}r^{2}\\theta$. Because the angle is a multiple of $\\pi$, the area can be left exact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is in radians",
          "workingLatex": "\\theta = \\dfrac{\\pi}{3}",
          "explanation": "The angle $\\dfrac{\\pi}{3}$ is in radians already, so it substitutes directly and keeps the answer in terms of $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the known values",
          "workingLatex": "r = 8, \\quad \\theta = \\dfrac{\\pi}{3}",
          "explanation": "Listing the values first keeps the substitution organised and avoids slips.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "A = \\dfrac{1}{2} \\times 8^{2} \\times \\dfrac{\\pi}{3}",
          "explanation": "Replacing $r$ with $8$ and $\\theta$ with $\\dfrac{\\pi}{3}$ sets up the calculation. Only the radius is squared.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the radius",
          "workingLatex": "A = \\dfrac{1}{2} \\times 64 \\times \\dfrac{\\pi}{3}",
          "explanation": "Squaring the radius gives $8^{2} = 64$, which we can now combine with the half.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the numbers",
          "workingLatex": "A = 32 \\times \\dfrac{\\pi}{3}",
          "explanation": "Half of $64$ is $32$, so the constant factor in front of $\\dfrac{\\pi}{3}$ is $32$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify to exact form",
          "workingLatex": "A = \\dfrac{32\\pi}{3}",
          "explanation": "Placing the $32$ over the $3$ gives $\\dfrac{32\\pi}{3}$. Since $32$ and $3$ have no common factor, this is fully simplified.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert to a decimal",
          "workingLatex": "\\dfrac{32\\pi}{3} \\approx \\dfrac{100.53}{3} \\approx 33.5",
          "explanation": "Replacing $\\pi$ with $3.14159\\ldots$ gives about $33.5$. This is a useful sense-check that the exact form is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "A = \\dfrac{32\\pi}{3} \\text{ cm}^{2} \\approx 33.5 \\text{ cm}^{2}",
          "explanation": "The exact area is $\\dfrac{32\\pi}{3}\\text{ cm}^{2}$, which rounds to $33.5\\text{ cm}^{2}$ to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\dfrac{32\\pi}{3}\\text{ cm}^{2} \\approx 33.5\\text{ cm}^{2}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["radians", "arc length", "exact form"],
    "questionText": "A sector of a circle has radius $15\\text{ cm}$ and subtends an angle of $\\dfrac{\\pi}{5}$ radians at the centre. Find the exact length of the arc, and give a decimal value to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "With the angle in radians the arc length is radius times angle. Keeping the angle as a fraction of $\\pi$ lets the answer stay exact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is in radians",
          "workingLatex": "\\theta = \\dfrac{\\pi}{5}",
          "explanation": "The angle $\\dfrac{\\pi}{5}$ is already in radians, so it goes straight into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the known values",
          "workingLatex": "r = 15, \\quad \\theta = \\dfrac{\\pi}{5}",
          "explanation": "Recording the radius and angle keeps the substitution clear.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "s = 15 \\times \\dfrac{\\pi}{5}",
          "explanation": "Replacing $r$ and $\\theta$ gives the arc length as $15$ multiplied by $\\dfrac{\\pi}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write as a single fraction",
          "workingLatex": "s = \\dfrac{15\\pi}{5}",
          "explanation": "Multiplying places the $15$ on top of the denominator $5$, giving $\\dfrac{15\\pi}{5}$ ready to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "s = 3\\pi",
          "explanation": "Since $\\dfrac{15}{5} = 3$, the fraction cancels neatly to $3\\pi$. This is the exact arc length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Convert to a decimal",
          "workingLatex": "3\\pi \\approx 3 \\times 3.14159 \\approx 9.42",
          "explanation": "Replacing $\\pi$ with $3.14159\\ldots$ gives about $9.42$ centimetres, ready to use as a sense-check.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sense-check the size",
          "workingLatex": "\\dfrac{\\pi}{5} \\approx 0.63",
          "explanation": "The angle $\\dfrac{\\pi}{5} \\approx 0.63$ radians is well under $1$ radian, so the arc should be shorter than the radius of $15\\text{ cm}$. An arc of about $9.42\\text{ cm}$ is comfortably below $15\\text{ cm}$, so the answer is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "s = 3\\pi \\text{ cm} \\approx 9.42 \\text{ cm}",
          "explanation": "The exact arc length is $3\\pi\\text{ cm}$, which is about $9.42\\text{ cm}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 3\\pi\\text{ cm} \\approx 9.42\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["radians", "sector area", "exact form"],
    "questionText": "A sector of a circle has radius $12\\text{ cm}$ and subtends an angle of $\\dfrac{\\pi}{4}$ radians at the centre. Find the exact area of the sector, and give a decimal value to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the sector area formula",
          "workingLatex": "A = \\dfrac{1}{2}r^{2}\\theta",
          "explanation": "For a radian angle the sector area is $\\dfrac{1}{2}r^{2}\\theta$. Because the angle is a multiple of $\\pi$, the area can be left in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check the angle is in radians",
          "workingLatex": "\\theta = \\dfrac{\\pi}{4}",
          "explanation": "The angle $\\dfrac{\\pi}{4}$ is already in radians, so it substitutes directly and keeps $\\pi$ in the answer.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write down the known values",
          "workingLatex": "r = 12, \\quad \\theta = \\dfrac{\\pi}{4}",
          "explanation": "Listing the values keeps the substitution tidy and reduces mistakes.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the formula",
          "workingLatex": "A = \\dfrac{1}{2} \\times 12^{2} \\times \\dfrac{\\pi}{4}",
          "explanation": "Replacing $r$ with $12$ and $\\theta$ with $\\dfrac{\\pi}{4}$ sets up the calculation, squaring only the radius.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the radius",
          "workingLatex": "A = \\dfrac{1}{2} \\times 144 \\times \\dfrac{\\pi}{4}",
          "explanation": "Squaring the radius gives $12^{2} = 144$, which we can now combine with the half.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the numbers",
          "workingLatex": "A = 72 \\times \\dfrac{\\pi}{4}",
          "explanation": "Half of $144$ is $72$, so the factor in front of $\\dfrac{\\pi}{4}$ is $72$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the fraction",
          "workingLatex": "A = \\dfrac{72\\pi}{4} = 18\\pi",
          "explanation": "Dividing $72$ by $4$ gives $18$, so the exact area simplifies cleanly to $18\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Convert to a decimal",
          "workingLatex": "18\\pi \\approx 18 \\times 3.14159 \\approx 56.5",
          "explanation": "Replacing $\\pi$ with $3.14159\\ldots$ gives about $56.5$, a good sense-check on the exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "A = 18\\pi \\text{ cm}^{2} \\approx 56.5 \\text{ cm}^{2}",
          "explanation": "The exact area is $18\\pi\\text{ cm}^{2}$, which rounds to $56.5\\text{ cm}^{2}$ to $3$ significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = 18\\pi\\text{ cm}^{2} \\approx 56.5\\text{ cm}^{2}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["radians", "conversion", "arc length", "exact form"],
    "questionText": "Convert $105^{\\circ}$ to radians as an exact multiple of $\\pi$ in its simplest form. Hence find the arc length of a sector of radius $4\\text{ cm}$ that subtends this angle, giving your answer as an exact multiple of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the degree to radian conversion",
          "workingLatex": "\\text{radians} = \\text{degrees} \\times \\dfrac{\\pi}{180}",
          "explanation": "A full turn is $360^{\\circ}$ or $2\\pi$ radians, so $180^{\\circ}$ equals $\\pi$ radians. Multiplying a degree measure by $\\dfrac{\\pi}{180}$ therefore converts it to radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the angle",
          "workingLatex": "105 \\times \\dfrac{\\pi}{180}",
          "explanation": "Putting $105$ in place of the degrees sets up the conversion for this particular angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write as a single fraction",
          "workingLatex": "\\dfrac{105\\pi}{180}",
          "explanation": "Multiplying places $105$ on top of $180$, giving $\\dfrac{105\\pi}{180}$, which we now simplify.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{105}{180} = \\dfrac{7}{12}",
          "explanation": "Both numbers share a factor of $15$: $105 = 15 \\times 7$ and $180 = 15 \\times 12$. Cancelling the $15$ leaves $\\dfrac{7}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the angle in radians",
          "workingLatex": "\\theta = \\dfrac{7\\pi}{12}",
          "explanation": "So $105^{\\circ}$ is exactly $\\dfrac{7\\pi}{12}$ radians, our simplest exact form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "Now that the angle is in radians, we can use $s = r\\theta$ directly to find the arc length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write down the known values",
          "workingLatex": "r = 4, \\quad \\theta = \\dfrac{7\\pi}{12}",
          "explanation": "The radius is $4\\text{ cm}$ and the angle is the value we just found, both ready to substitute.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the formula",
          "workingLatex": "s = 4 \\times \\dfrac{7\\pi}{12}",
          "explanation": "Replacing $r$ and $\\theta$ gives the arc length as $4$ times $\\dfrac{7\\pi}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Multiply out",
          "workingLatex": "s = \\dfrac{28\\pi}{12}",
          "explanation": "Multiplying the $4$ into the numerator gives $4 \\times 7\\pi = 28\\pi$ over $12$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify the fraction",
          "workingLatex": "\\dfrac{28\\pi}{12} = \\dfrac{7\\pi}{3}",
          "explanation": "Both $28$ and $12$ divide by $4$: $28 \\div 4 = 7$ and $12 \\div 4 = 3$. This gives the simplest exact form $\\dfrac{7\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Sense-check with a decimal",
          "workingLatex": "\\dfrac{7\\pi}{3} \\approx 7.33",
          "explanation": "Replacing $\\pi$ with $3.14159\\ldots$ gives about $7.33\\text{ cm}$. Since $\\dfrac{7\\pi}{12}$ is a little under two radians, an arc almost twice the radius $4$ is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the final answer",
          "workingLatex": "\\theta = \\dfrac{7\\pi}{12} \\text{ rad}, \\quad s = \\dfrac{7\\pi}{3} \\text{ cm}",
          "explanation": "The angle is $\\dfrac{7\\pi}{12}$ radians and the resulting arc length is $\\dfrac{7\\pi}{3}\\text{ cm}$, about $7.33\\text{ cm}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{7\\pi}{12}\\text{ rad}, \\quad s = \\dfrac{7\\pi}{3}\\text{ cm} \\approx 7.33\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["radians", "exact values", "related angles", "quadrants"],
    "questionText": "Find the exact value of $\\sin\\dfrac{2\\pi}{3}$, explaining your reasoning using the related acute angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Convert the angle to degrees",
          "workingLatex": "\\dfrac{2\\pi}{3} = 120^{\\circ}",
          "explanation": "Since $\\pi$ radians is $180^{\\circ}$, the angle $\\dfrac{2\\pi}{3}$ is $\\dfrac{2}{3} \\times 180^{\\circ} = 120^{\\circ}$. Working in degrees makes it easier to see where the angle sits.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the angle in a quadrant",
          "workingLatex": "90^{\\circ} < 120^{\\circ} < 180^{\\circ}",
          "explanation": "An angle of $120^{\\circ}$ lies between $90^{\\circ}$ and $180^{\\circ}$, which places it in the second quadrant. Knowing the quadrant tells us the sign of each trig ratio.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Determine the sign of sine",
          "workingLatex": "\\sin\\theta > 0 \\text{ in the 2nd quadrant}",
          "explanation": "In the second quadrant sine is positive (only sine is positive there, by the CAST rule). So our final value will carry a positive sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the related acute angle",
          "workingLatex": "180^{\\circ} - 120^{\\circ} = 60^{\\circ}",
          "explanation": "The related acute angle is the distance from the angle to the horizontal axis. For a second-quadrant angle that is $180^{\\circ}$ minus the angle, giving $60^{\\circ}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Express the related angle in radians",
          "workingLatex": "\\pi - \\dfrac{2\\pi}{3} = \\dfrac{\\pi}{3}",
          "explanation": "In radians the same reasoning gives $\\pi - \\dfrac{2\\pi}{3} = \\dfrac{\\pi}{3}$, confirming the related acute angle is $\\dfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the related angle relationship",
          "workingLatex": "\\sin\\dfrac{2\\pi}{3} = +\\sin\\dfrac{\\pi}{3}",
          "explanation": "The sine of the angle equals the sine of its related acute angle, taking the sign from the quadrant. Since sine is positive here, $\\sin\\dfrac{2\\pi}{3} = +\\sin\\dfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the special triangle",
          "workingLatex": "1 : \\sqrt{3} : 2",
          "explanation": "The $30$-$60$-$90$ triangle has sides in the ratio $1 : \\sqrt{3} : 2$, which stores the exact value of $\\sin\\dfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the value of the related angle",
          "workingLatex": "\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}",
          "explanation": "For the $60^{\\circ}$ angle the opposite side is $\\sqrt{3}$ and the hypotenuse is $2$, so $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Combine the results",
          "workingLatex": "\\sin\\dfrac{2\\pi}{3} = \\dfrac{\\sqrt{3}}{2}",
          "explanation": "Putting the positive sign together with the related-angle value gives $\\dfrac{\\sqrt{3}}{2}$. As a check, this lies between $0$ and $1$, exactly as a sine must.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "\\sin\\dfrac{2\\pi}{3} = \\dfrac{\\sqrt{3}}{2}",
          "explanation": "The exact value is $\\dfrac{\\sqrt{3}}{2}$, positive because $\\dfrac{2\\pi}{3}$ sits in the second quadrant where sine is positive.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\sin\\dfrac{2\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$"
    }
  },
{
    "id": "al.y2.pure.radians.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["radians", "arc length", "rearranging"],
    "questionText": "An arc of a circle has length $12\\text{ cm}$ and subtends an angle of $1.5$ radians at the centre. Find the radius of the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Confirm the angle is in radians",
          "workingLatex": "\\theta = 1.5 \\ \\text{radians}",
          "explanation": "The arc length formula only works when the angle is measured in radians. Here $\\theta = 1.5$ is already in radians, so no conversion is needed.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known quantities",
          "workingLatex": "s = 12, \\qquad \\theta = 1.5",
          "explanation": "We are told the arc length $s = 12\\text{ cm}$ and the angle $\\theta = 1.5$. The unknown is the radius $r$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "In radians the arc length is the radius multiplied by the angle. This single relationship links $s$, $r$ and $\\theta$, so knowing any two lets us find the third.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make the radius the subject",
          "workingLatex": "r = \\dfrac{s}{\\theta}",
          "explanation": "We want $r$, so we divide both sides of $s = r\\theta$ by $\\theta$. This isolates the radius on one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the known values",
          "workingLatex": "r = \\dfrac{12}{1.5}",
          "explanation": "Replace $s$ with $12$ and $\\theta$ with $1.5$. The units of $s$ are centimetres, so $r$ will also come out in centimetres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the division",
          "workingLatex": "r = \\dfrac{12}{1.5} = 8",
          "explanation": "Dividing $12$ by $1.5$ gives $8$, since $1.5 \\times 8 = 12$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Attach the correct units",
          "workingLatex": "r = 8 \\ \\text{cm}",
          "explanation": "Because the arc length was in centimetres, the radius is $8\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sense-check the size of the angle",
          "workingLatex": "1.5 \\ \\text{rad} \\approx 86^{\\circ}",
          "explanation": "An angle of $1.5$ radians is a little less than a right angle, so the arc is a fair chunk of the circle. A radius of $8\\text{ cm}$ giving a $12\\text{ cm}$ arc is entirely reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substituting back",
          "workingLatex": "r\\theta = 8 \\times 1.5 = 12 = s",
          "explanation": "Putting $r = 8$ back into $s = r\\theta$ recovers the original arc length of $12\\text{ cm}$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 8\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["radians", "arc length", "rearranging"],
    "questionText": "An arc of a circle has length $10\\text{ cm}$ and the circle has radius $4\\text{ cm}$. Find the angle, in radians, that the arc subtends at the centre.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities",
          "workingLatex": "s = 10, \\qquad r = 4",
          "explanation": "We are given the arc length $s = 10\\text{ cm}$ and the radius $r = 4\\text{ cm}$. The unknown is the angle $\\theta$ in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "For an angle in radians the arc length equals radius times angle. This connects the three quantities directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make the angle the subject",
          "workingLatex": "\\theta = \\dfrac{s}{r}",
          "explanation": "To find $\\theta$ we divide both sides of $s = r\\theta$ by $r$, leaving the angle by itself.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the ratio",
          "workingLatex": "\\theta = \\dfrac{\\text{arc length}}{\\text{radius}}",
          "explanation": "This is exactly what a radian means: the angle in radians is how many radius-lengths fit along the arc.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the known values",
          "workingLatex": "\\theta = \\dfrac{10}{4}",
          "explanation": "Replace $s$ with $10$ and $r$ with $4$. The centimetres cancel, so $\\theta$ comes out as a pure number, which is correct for an angle in radians.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "\\theta = \\dfrac{10}{4} = 2.5",
          "explanation": "Dividing $10$ by $4$ gives $2.5$. The units cancel, confirming the answer is dimensionless as radians should be.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sense-check against a full turn",
          "workingLatex": "2\\pi \\approx 6.28",
          "explanation": "A full circle is $2\\pi \\approx 6.28$ radians, so $2.5$ radians is a bit under half a turn. An arc of $10\\text{ cm}$ on a $4\\text{ cm}$ radius fitting this angle looks sensible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by substituting back",
          "workingLatex": "r\\theta = 4 \\times 2.5 = 10 = s",
          "explanation": "Putting $\\theta = 2.5$ back into $s = r\\theta$ returns the original arc length of $10\\text{ cm}$, so the angle is correct.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "\\theta = 2.5 \\ \\text{radians}",
          "explanation": "The arc subtends an angle of $2.5$ radians at the centre.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 2.5\\text{ radians}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["radians", "sector area", "rearranging"],
    "questionText": "A sector of a circle has area $24\\text{ cm}^2$ and radius $6\\text{ cm}$. Find the angle of the sector in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities",
          "workingLatex": "A = 24, \\qquad r = 6",
          "explanation": "We are given the sector area $A = 24\\text{ cm}^2$ and the radius $r = 6\\text{ cm}$. We want the angle $\\theta$ in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sector area formula",
          "workingLatex": "A = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "For an angle in radians the area of a sector is half the radius squared times the angle. This links area, radius and angle in one equation.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make the angle the subject",
          "workingLatex": "\\theta = \\dfrac{2A}{r^2}",
          "explanation": "Multiplying both sides by $2$ and dividing by $r^2$ isolates $\\theta$. The factor of $2$ cancels the $\\tfrac{1}{2}$ in the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the radius squared",
          "workingLatex": "r^2 = 6^2 = 36",
          "explanation": "Squaring the radius first keeps the substitution tidy: $6^2 = 36$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the known values",
          "workingLatex": "\\theta = \\dfrac{2 \\times 24}{36}",
          "explanation": "Replace $A$ with $24$ and $r^2$ with $36$. The $\\text{cm}^2$ in the area cancels with the $\\text{cm}^2$ from $r^2$, so $\\theta$ is dimensionless.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\theta = \\dfrac{48}{36}",
          "explanation": "The top becomes $2 \\times 24 = 48$, giving the fraction $\\dfrac{48}{36}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Reduce the fraction",
          "workingLatex": "\\theta = \\dfrac{48}{36} = \\dfrac{4}{3}",
          "explanation": "Dividing top and bottom by $12$ gives $\\dfrac{4}{3}$, the exact value of the angle.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Give a decimal sense-check",
          "workingLatex": "\\dfrac{4}{3} \\approx 1.33",
          "explanation": "As a decimal $\\dfrac{4}{3} \\approx 1.33$ radians, comfortably less than a full turn of $2\\pi \\approx 6.28$, which is reasonable for a sector.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by substituting back",
          "workingLatex": "\\tfrac{1}{2} \\times 36 \\times \\tfrac{4}{3} = 24",
          "explanation": "Putting $\\theta = \\dfrac{4}{3}$ back into $A = \\tfrac{1}{2}r^2\\theta$ recovers the area $24\\text{ cm}^2$, confirming the angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{4}{3}\\text{ radians} \\approx 1.33\\text{ radians}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["radians", "sector area", "rearranging"],
    "questionText": "A sector of a circle has area $50\\text{ cm}^2$ and its angle at the centre is $1$ radian. Find the radius of the circle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities",
          "workingLatex": "A = 50, \\qquad \\theta = 1",
          "explanation": "We are given the sector area $A = 50\\text{ cm}^2$ and the angle $\\theta = 1$ radian. We want the radius $r$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sector area formula",
          "workingLatex": "A = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "With the angle in radians, the sector area is half the radius squared times the angle. The unknown $r$ appears squared, so we will need a square root at the end.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make the radius squared the subject",
          "workingLatex": "r^2 = \\dfrac{2A}{\\theta}",
          "explanation": "Multiply both sides by $2$ and divide by $\\theta$ to isolate $r^2$. We solve for $r^2$ first, then take the square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "r^2 = \\dfrac{2 \\times 50}{1}",
          "explanation": "Replace $A$ with $50$ and $\\theta$ with $1$. Dividing by $1$ leaves the numerator unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify",
          "workingLatex": "r^2 = 100",
          "explanation": "The top is $2 \\times 50 = 100$, and dividing by $1$ gives $r^2 = 100$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the positive square root",
          "workingLatex": "r = \\sqrt{100} = 10",
          "explanation": "A radius must be positive, so we take the positive root of $100$, giving $r = 10$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Attach the correct units",
          "workingLatex": "r = 10 \\ \\text{cm}",
          "explanation": "Since $r^2$ was in $\\text{cm}^2$, the radius comes out in centimetres: $r = 10\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify by substituting back",
          "workingLatex": "\\tfrac{1}{2} \\times 10^2 \\times 1 = 50",
          "explanation": "Putting $r = 10$ and $\\theta = 1$ into $A = \\tfrac{1}{2}r^2\\theta$ gives $50\\text{ cm}^2$, matching the given area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "r = 10 \\ \\text{cm}",
          "explanation": "The radius of the circle is $10\\text{ cm}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 10\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["radians", "sector perimeter", "arc length"],
    "questionText": "A sector of a circle has radius $5\\text{ cm}$ and angle $0.8$ radians at the centre. Find the perimeter of the sector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parts of the perimeter",
          "workingLatex": "P = r + r + s",
          "explanation": "The boundary of a sector is made of two straight radii plus the curved arc. So the perimeter is two radii added to the arc length.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the perimeter formula compactly",
          "workingLatex": "P = 2r + r\\theta",
          "explanation": "The two radii give $2r$ and the arc length is $r\\theta$, so the perimeter is $2r + r\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the known quantities",
          "workingLatex": "r = 5, \\qquad \\theta = 0.8",
          "explanation": "We are given the radius $r = 5\\text{ cm}$ and the angle $\\theta = 0.8$ radians, which is already in the units the formula needs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the arc length",
          "workingLatex": "s = r\\theta = 5 \\times 0.8",
          "explanation": "Using $s = r\\theta$ with the angle in radians, the arc length is radius times angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the arc length",
          "workingLatex": "s = 4 \\ \\text{cm}",
          "explanation": "Multiplying $5 \\times 0.8$ gives an arc length of $4\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the two straight sides",
          "workingLatex": "2r = 2 \\times 5 = 10",
          "explanation": "The two radii together measure $2 \\times 5 = 10\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the parts together",
          "workingLatex": "P = 10 + 4",
          "explanation": "The perimeter is the two radii plus the arc: $10\\text{ cm} + 4\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the perimeter",
          "workingLatex": "P = 14 \\ \\text{cm}",
          "explanation": "Adding gives a total perimeter of $14\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Sense-check the result",
          "workingLatex": "s = 4 < 2r = 10",
          "explanation": "The arc is shorter than the two radii because the angle is well under $2$ radians, so most of the boundary is straight. A perimeter of $14\\text{ cm}$ is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 14\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["radians", "sector perimeter", "exact"],
    "questionText": "A sector of a circle has radius $9\\text{ cm}$ and angle $\\dfrac{\\pi}{4}$ radians at the centre. Find the perimeter of the sector, giving your answer in exact form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the parts of the perimeter",
          "workingLatex": "P = 2r + s",
          "explanation": "The perimeter of a sector is the two straight radii plus the curved arc. So we need $2r$ and the arc length $s$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known quantities",
          "workingLatex": "r = 9, \\qquad \\theta = \\dfrac{\\pi}{4}",
          "explanation": "The radius is $r = 9\\text{ cm}$ and the angle is $\\theta = \\dfrac{\\pi}{4}$ radians. Because the angle involves $\\pi$, we keep everything exact.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "With the angle in radians the arc length is radius times angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for the arc length",
          "workingLatex": "s = 9 \\times \\dfrac{\\pi}{4}",
          "explanation": "Multiply the radius $9$ by the angle $\\dfrac{\\pi}{4}$. We leave $\\pi$ in place rather than using a decimal, to keep the answer exact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the arc length",
          "workingLatex": "s = \\dfrac{9\\pi}{4}",
          "explanation": "The $9$ multiplies the numerator to give an exact arc length of $\\dfrac{9\\pi}{4}\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the two straight sides",
          "workingLatex": "2r = 2 \\times 9 = 18",
          "explanation": "The two radii together measure $18\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine into the perimeter",
          "workingLatex": "P = 18 + \\dfrac{9\\pi}{4}",
          "explanation": "Add the straight part and the curved part. Since one term is rational and the other involves $\\pi$, they cannot be combined further, so this is the exact perimeter.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Attach the units",
          "workingLatex": "P = 18 + \\dfrac{9\\pi}{4} \\ \\text{cm}",
          "explanation": "Both terms are lengths in centimetres, so the perimeter is $\\left(18 + \\dfrac{9\\pi}{4}\\right)\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give a decimal sense-check",
          "workingLatex": "18 + \\dfrac{9\\pi}{4} \\approx 25.07",
          "explanation": "Since $\\dfrac{9\\pi}{4} \\approx 7.07$, the perimeter is about $25.07\\text{ cm}$. This is a little more than the two radii, which fits the small arc.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = 18 + \\dfrac{9\\pi}{4}\\text{ cm} \\approx 25.07\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["radians", "arc length", "sector area"],
    "questionText": "A sector of a circle has radius $6\\text{ cm}$ and angle $1.2$ radians at the centre. Find both the arc length and the area of the sector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities",
          "workingLatex": "r = 6, \\qquad \\theta = 1.2",
          "explanation": "We are given the radius $r = 6\\text{ cm}$ and the angle $\\theta = 1.2$ radians. Both parts of the question use these same two values.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "With the angle in radians, the arc length is radius times angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute for the arc length",
          "workingLatex": "s = 6 \\times 1.2",
          "explanation": "Replace $r$ with $6$ and $\\theta$ with $1.2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the arc length",
          "workingLatex": "s = 7.2 \\ \\text{cm}",
          "explanation": "Multiplying gives an arc length of $7.2\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the sector area formula",
          "workingLatex": "A = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "With the angle in radians, the sector area is half the radius squared times the angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the radius squared",
          "workingLatex": "r^2 = 6^2 = 36",
          "explanation": "Squaring the radius first keeps the area calculation tidy: $6^2 = 36$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute for the area",
          "workingLatex": "A = \\tfrac{1}{2} \\times 36 \\times 1.2",
          "explanation": "Put $r^2 = 36$ and $\\theta = 1.2$ into the area formula, keeping the factor of $\\tfrac{1}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Work through the multiplication",
          "workingLatex": "A = 18 \\times 1.2",
          "explanation": "First $\\tfrac{1}{2} \\times 36 = 18$, leaving $18 \\times 1.2$ to finish.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the area",
          "workingLatex": "A = 21.6 \\ \\text{cm}^2",
          "explanation": "Multiplying gives a sector area of $21.6\\text{ cm}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State both results",
          "workingLatex": "s = 7.2 \\ \\text{cm}, \\quad A = 21.6 \\ \\text{cm}^2",
          "explanation": "The arc length is $7.2\\text{ cm}$ and the area is $21.6\\text{ cm}^2$. Note $A = \\tfrac{1}{2} r s = \\tfrac{1}{2}\\times 6\\times 7.2 = 21.6$, a neat consistency check.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 7.2\\text{ cm}, \\ A = 21.6\\text{ cm}^2$"
    }
  },
  {
    "id": "al.y2.pure.radians.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["radians", "arc length", "exact"],
    "questionText": "A sector of a circle has radius $10\\text{ cm}$ and angle $\\dfrac{\\pi}{6}$ radians at the centre. Find the arc length, giving your answer in exact form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities",
          "workingLatex": "r = 10, \\qquad \\theta = \\dfrac{\\pi}{6}",
          "explanation": "The radius is $r = 10\\text{ cm}$ and the angle is $\\theta = \\dfrac{\\pi}{6}$ radians. Because the angle contains $\\pi$, we keep the answer exact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "With the angle in radians the arc length is simply radius times angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "s = 10 \\times \\dfrac{\\pi}{6}",
          "explanation": "Replace $r$ with $10$ and $\\theta$ with $\\dfrac{\\pi}{6}$. We keep $\\pi$ in place to give an exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Multiply the numerator",
          "workingLatex": "s = \\dfrac{10\\pi}{6}",
          "explanation": "The $10$ multiplies the top of the fraction, giving $\\dfrac{10\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Look for a common factor",
          "workingLatex": "\\gcd(10, 6) = 2",
          "explanation": "Both $10$ and $6$ share a factor of $2$, so the fraction can be simplified.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "s = \\dfrac{10\\pi}{6} = \\dfrac{5\\pi}{3}",
          "explanation": "Dividing top and bottom by $2$ gives the exact arc length $\\dfrac{5\\pi}{3}\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Attach the units",
          "workingLatex": "s = \\dfrac{5\\pi}{3} \\ \\text{cm}",
          "explanation": "The radius was in centimetres, so the arc length is $\\dfrac{5\\pi}{3}\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cross-check against the full circumference",
          "workingLatex": "\\dfrac{\\theta}{2\\pi} = \\dfrac{\\pi/6}{2\\pi} = \\dfrac{1}{12}, \\qquad \\dfrac{1}{12} \\times 2\\pi r = \\dfrac{20\\pi}{12} = \\dfrac{5\\pi}{3}",
          "explanation": "The angle $\\dfrac{\\pi}{6}$ is $\\dfrac{1}{12}$ of a full turn $2\\pi$, so the arc should be $\\dfrac{1}{12}$ of the whole circumference $2\\pi r = 20\\pi$. That gives $\\dfrac{5\\pi}{3}$ too, which confirms the answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give a decimal sense-check",
          "workingLatex": "\\dfrac{5\\pi}{3} \\approx 5.24",
          "explanation": "As a decimal $\\dfrac{5\\pi}{3} \\approx 5.24\\text{ cm}$. Since $\\dfrac{\\pi}{6}$ is $30^{\\circ}$, a small angle, a short arc on a $10\\text{ cm}$ radius is exactly what we expect.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = \\dfrac{5\\pi}{3}\\text{ cm} \\approx 5.24\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["radians", "sector area", "exact"],
    "questionText": "A sector of a circle has radius $5\\text{ cm}$ and angle $\\dfrac{\\pi}{6}$ radians at the centre. Find the area of the sector, giving your answer in exact form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities",
          "workingLatex": "r = 5, \\qquad \\theta = \\dfrac{\\pi}{6}",
          "explanation": "The radius is $r = 5\\text{ cm}$ and the angle is $\\theta = \\dfrac{\\pi}{6}$ radians. Because $\\pi$ appears, we keep the answer exact.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sector area formula",
          "workingLatex": "A = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "With the angle in radians the sector area is half the radius squared times the angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the radius squared",
          "workingLatex": "r^2 = 5^2 = 25",
          "explanation": "Squaring the radius first keeps the working clean: $5^2 = 25$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "A = \\tfrac{1}{2} \\times 25 \\times \\dfrac{\\pi}{6}",
          "explanation": "Put $r^2 = 25$ and $\\theta = \\dfrac{\\pi}{6}$ into the formula, keeping the $\\tfrac{1}{2}$ and leaving $\\pi$ in place.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Multiply the numbers on top",
          "workingLatex": "A = \\dfrac{25\\pi}{12}",
          "explanation": "The three factors give $\\dfrac{1 \\times 25 \\times \\pi}{2 \\times 6} = \\dfrac{25\\pi}{12}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the fraction is in lowest terms",
          "workingLatex": "\\gcd(25, 12) = 1",
          "explanation": "Since $25$ and $12$ share no common factor other than $1$, the fraction $\\dfrac{25\\pi}{12}$ is already fully simplified.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Attach the units",
          "workingLatex": "A = \\dfrac{25\\pi}{12} \\ \\text{cm}^2",
          "explanation": "Area is measured in square centimetres, so $A = \\dfrac{25\\pi}{12}\\text{ cm}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cross-check against the whole circle",
          "workingLatex": "\\dfrac{\\theta}{2\\pi} = \\dfrac{\\pi/6}{2\\pi} = \\dfrac{1}{12}, \\qquad \\dfrac{1}{12} \\times \\pi r^2 = \\dfrac{25\\pi}{12}",
          "explanation": "The angle $\\dfrac{\\pi}{6}$ is $\\dfrac{1}{12}$ of a full turn, so the sector should be $\\dfrac{1}{12}$ of the whole disc area $\\pi r^2 = 25\\pi$. That also gives $\\dfrac{25\\pi}{12}$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Give a decimal sense-check",
          "workingLatex": "\\dfrac{25\\pi}{12} \\approx 6.54",
          "explanation": "As a decimal $\\dfrac{25\\pi}{12} \\approx 6.54\\text{ cm}^2$. Since $\\dfrac{\\pi}{6}$ is $30^{\\circ}$, one twelfth of a full turn, this is a small slice of the circle, which matches.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\dfrac{25\\pi}{12}\\text{ cm}^2 \\approx 6.54\\text{ cm}^2$"
    }
  },
  {
    "id": "al.y2.pure.radians.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["radians", "arc length", "sector area"],
    "questionText": "A sector of a circle has radius $7\\text{ cm}$ and arc length $21\\text{ cm}$. Find the angle of the sector in radians and the area of the sector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities",
          "workingLatex": "r = 7, \\qquad s = 21",
          "explanation": "We are given the radius $r = 7\\text{ cm}$ and the arc length $s = 21\\text{ cm}$. We must find the angle $\\theta$ first, then the area.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "With the angle in radians the arc length equals radius times angle. Knowing $s$ and $r$ lets us find $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make the angle the subject",
          "workingLatex": "\\theta = \\dfrac{s}{r}",
          "explanation": "Dividing both sides by $r$ isolates the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute to find the angle",
          "workingLatex": "\\theta = \\dfrac{21}{7} = 3",
          "explanation": "Replace $s$ with $21$ and $r$ with $7$. The centimetres cancel and $21 \\div 7 = 3$, so $\\theta = 3$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sense-check the angle",
          "workingLatex": "3 < 2\\pi \\approx 6.28",
          "explanation": "An angle of $3$ radians is under a full turn of $2\\pi$, so this is a valid sector angle, in fact just under half the circle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the sector area formula",
          "workingLatex": "A = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "Now that we have the angle in radians, we can use the area formula: half the radius squared times the angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the radius squared",
          "workingLatex": "r^2 = 7^2 = 49",
          "explanation": "Squaring the radius gives $7^2 = 49$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute for the area",
          "workingLatex": "A = \\tfrac{1}{2} \\times 49 \\times 3",
          "explanation": "Put $r^2 = 49$ and $\\theta = 3$ into the area formula.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the area",
          "workingLatex": "A = \\dfrac{147}{2} = 73.5",
          "explanation": "Computing $\\tfrac{1}{2} \\times 49 \\times 3 = \\dfrac{147}{2} = 73.5$, so the area is $73.5\\text{ cm}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State both results",
          "workingLatex": "\\theta = 3, \\quad A = 73.5 \\ \\text{cm}^2",
          "explanation": "The sector angle is $3$ radians and its area is $73.5\\text{ cm}^2$. As a check, $A = \\tfrac{1}{2} r s = \\tfrac{1}{2}\\times 7\\times 21 = 73.5$, which agrees.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = 3\\text{ radians}, \\ A = 73.5\\text{ cm}^2$"
    }
  },
  {
    "id": "al.y2.pure.radians.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["radians", "sector perimeter", "rearranging"],
    "questionText": "A sector of a circle has perimeter $20\\text{ cm}$ and radius $6\\text{ cm}$. Find the angle subtended at the centre in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known quantities",
          "workingLatex": "P = 20, \\qquad r = 6",
          "explanation": "We are given the perimeter $P = 20\\text{ cm}$ and the radius $r = 6\\text{ cm}$. We want the angle $\\theta$ in radians.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Break the perimeter into its parts",
          "workingLatex": "P = 2r + s",
          "explanation": "The perimeter of a sector is the two straight radii plus the curved arc. Since we know $P$ and $r$, we can find the arc length $s$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Make the arc length the subject",
          "workingLatex": "s = P - 2r",
          "explanation": "Subtracting the two radii from the perimeter leaves just the arc length.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the two straight sides",
          "workingLatex": "2r = 2 \\times 6 = 12",
          "explanation": "The two radii together measure $12\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the arc length",
          "workingLatex": "s = 20 - 12 = 8",
          "explanation": "Subtracting the straight part from the perimeter gives an arc length of $8\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "Now that we have the arc length, we use $s = r\\theta$ to reach the angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Make the angle the subject",
          "workingLatex": "\\theta = \\dfrac{s}{r}",
          "explanation": "Dividing both sides by $r$ isolates the angle in radians.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the known values",
          "workingLatex": "\\theta = \\dfrac{8}{6}",
          "explanation": "Replace $s$ with $8$ and $r$ with $6$. The centimetres cancel, giving a dimensionless angle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the fraction",
          "workingLatex": "\\theta = \\dfrac{8}{6} = \\dfrac{4}{3}",
          "explanation": "Dividing top and bottom by $2$ gives the exact angle $\\dfrac{4}{3}$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Give a decimal sense-check",
          "workingLatex": "\\dfrac{4}{3} \\approx 1.33",
          "explanation": "As a decimal $\\dfrac{4}{3} \\approx 1.33$ radians, a sensible sector angle well under a full turn.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{4}{3}\\text{ radians} \\approx 1.33\\text{ radians}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": ["radians", "trig equation", "solutions"],
    "questionText": "Solve $\\sin\\theta = \\dfrac{1}{2}$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and the range",
          "workingLatex": "\\sin\\theta = \\dfrac{1}{2}, \\qquad 0 \\le \\theta \\le 2\\pi",
          "explanation": "We must find every angle $\\theta$ between $0$ and $2\\pi$ radians whose sine is $\\dfrac{1}{2}$. There may be more than one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal (reference) value",
          "workingLatex": "\\theta_0 = \\arcsin\\!\\left(\\dfrac{1}{2}\\right)",
          "explanation": "Start by finding the reference angle: the acute angle whose sine is $\\dfrac{1}{2}$. This gives the base solution from which the others follow.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the reference value",
          "workingLatex": "\\theta_0 = \\dfrac{\\pi}{6}",
          "explanation": "This is a standard exact value: $\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$, so the reference angle is $\\dfrac{\\pi}{6}$ (which is $30^{\\circ}$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\sin\\theta > 0 \\ \\Rightarrow \\ Q1, \\ Q2",
          "explanation": "Sine is positive in the first and second quadrants. Since $\\dfrac{1}{2}$ is positive, the solutions lie in those two quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the first-quadrant solution",
          "workingLatex": "\\theta = \\dfrac{\\pi}{6}",
          "explanation": "In the first quadrant the angle is just the reference value itself, $\\dfrac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use symmetry for the second quadrant",
          "workingLatex": "\\theta = \\pi - \\dfrac{\\pi}{6}",
          "explanation": "In the second quadrant the angle with the same sine is $\\pi$ minus the reference angle, because sine is symmetric about $\\theta = \\dfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the second solution",
          "workingLatex": "\\theta = \\dfrac{6\\pi}{6} - \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6}",
          "explanation": "Writing $\\pi$ as $\\dfrac{6\\pi}{6}$ and subtracting gives $\\dfrac{5\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rule out the other quadrants",
          "workingLatex": "Q3, \\ Q4: \\ \\sin\\theta < 0",
          "explanation": "In the third and fourth quadrants sine is negative, so they cannot give $\\sin\\theta = \\dfrac{1}{2}$. There are no further solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check both solutions lie in range",
          "workingLatex": "0 \\le \\dfrac{\\pi}{6}, \\ \\dfrac{5\\pi}{6} \\le 2\\pi",
          "explanation": "Both $\\dfrac{\\pi}{6} \\approx 0.52$ and $\\dfrac{5\\pi}{6} \\approx 2.62$ lie between $0$ and $2\\pi \\approx 6.28$, so both are valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the solution set",
          "workingLatex": "\\theta = \\dfrac{\\pi}{6}, \\ \\dfrac{5\\pi}{6}",
          "explanation": "A quick check confirms $\\sin\\dfrac{\\pi}{6} = \\sin\\dfrac{5\\pi}{6} = \\dfrac{1}{2}$, so these are the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{6}, \\ \\dfrac{5\\pi}{6}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": ["radians", "trig equation", "solutions"],
    "questionText": "Solve $\\cos\\theta = \\dfrac{\\sqrt{3}}{2}$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and the range",
          "workingLatex": "\\cos\\theta = \\dfrac{\\sqrt{3}}{2}, \\qquad 0 \\le \\theta \\le 2\\pi",
          "explanation": "We need every angle $\\theta$ between $0$ and $2\\pi$ radians whose cosine is $\\dfrac{\\sqrt{3}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal (reference) value",
          "workingLatex": "\\theta_0 = \\arccos\\!\\left(\\dfrac{\\sqrt{3}}{2}\\right)",
          "explanation": "First find the reference angle: the acute angle whose cosine is $\\dfrac{\\sqrt{3}}{2}$. The other solutions build on this.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the reference value",
          "workingLatex": "\\theta_0 = \\dfrac{\\pi}{6}",
          "explanation": "This is a standard exact value: $\\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}$, so the reference angle is $\\dfrac{\\pi}{6}$ (which is $30^{\\circ}$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\cos\\theta > 0 \\ \\Rightarrow \\ Q1, \\ Q4",
          "explanation": "Cosine is positive in the first and fourth quadrants. Since $\\dfrac{\\sqrt{3}}{2}$ is positive, the solutions lie in those two quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the first-quadrant solution",
          "workingLatex": "\\theta = \\dfrac{\\pi}{6}",
          "explanation": "In the first quadrant the angle is simply the reference value, $\\dfrac{\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use symmetry for the fourth quadrant",
          "workingLatex": "\\theta = 2\\pi - \\dfrac{\\pi}{6}",
          "explanation": "In the fourth quadrant the angle with the same cosine is $2\\pi$ minus the reference angle, because cosine is symmetric about $\\theta = 0$ (equivalently $2\\pi$).",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the second solution",
          "workingLatex": "\\theta = \\dfrac{12\\pi}{6} - \\dfrac{\\pi}{6} = \\dfrac{11\\pi}{6}",
          "explanation": "Writing $2\\pi$ as $\\dfrac{12\\pi}{6}$ and subtracting gives $\\dfrac{11\\pi}{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rule out the other quadrants",
          "workingLatex": "Q2, \\ Q3: \\ \\cos\\theta < 0",
          "explanation": "In the second and third quadrants cosine is negative, so they cannot give $\\cos\\theta = \\dfrac{\\sqrt{3}}{2}$. There are no further solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check both solutions lie in range",
          "workingLatex": "0 \\le \\dfrac{\\pi}{6}, \\ \\dfrac{11\\pi}{6} \\le 2\\pi",
          "explanation": "Both $\\dfrac{\\pi}{6} \\approx 0.52$ and $\\dfrac{11\\pi}{6} \\approx 5.76$ lie between $0$ and $2\\pi \\approx 6.28$, so both are valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the solution set",
          "workingLatex": "\\theta = \\dfrac{\\pi}{6}, \\ \\dfrac{11\\pi}{6}",
          "explanation": "A quick check confirms $\\cos\\dfrac{\\pi}{6} = \\cos\\dfrac{11\\pi}{6} = \\dfrac{\\sqrt{3}}{2}$, so these are the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{6}, \\ \\dfrac{11\\pi}{6}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": ["radians", "trig equation", "solutions"],
    "questionText": "Solve $\\tan\\theta = 1$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the equation and the range",
          "workingLatex": "\\tan\\theta = 1, \\qquad 0 \\le \\theta \\le 2\\pi",
          "explanation": "We need every angle $\\theta$ between $0$ and $2\\pi$ radians whose tangent is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the principal (reference) value",
          "workingLatex": "\\theta_0 = \\arctan(1)",
          "explanation": "Begin with the reference angle: the acute angle whose tangent is $1$. The remaining solutions follow from the period of tangent.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate the reference value",
          "workingLatex": "\\theta_0 = \\dfrac{\\pi}{4}",
          "explanation": "This is a standard exact value: $\\tan\\dfrac{\\pi}{4} = 1$, so the reference angle is $\\dfrac{\\pi}{4}$ (which is $45^{\\circ}$).",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Decide which quadrants apply",
          "workingLatex": "\\tan\\theta > 0 \\ \\Rightarrow \\ Q1, \\ Q3",
          "explanation": "Tangent is positive in the first and third quadrants. Since $1$ is positive, the solutions lie in those two quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write down the first-quadrant solution",
          "workingLatex": "\\theta = \\dfrac{\\pi}{4}",
          "explanation": "In the first quadrant the angle is simply the reference value, $\\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Use the period of tangent",
          "workingLatex": "\\theta = \\dfrac{\\pi}{4} + \\pi",
          "explanation": "Tangent repeats every $\\pi$ radians, so the third-quadrant solution is found by adding $\\pi$ to the first-quadrant value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the second solution",
          "workingLatex": "\\theta = \\dfrac{\\pi}{4} + \\dfrac{4\\pi}{4} = \\dfrac{5\\pi}{4}",
          "explanation": "Writing $\\pi$ as $\\dfrac{4\\pi}{4}$ and adding gives $\\dfrac{5\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check for any further solutions",
          "workingLatex": "\\dfrac{5\\pi}{4} + \\pi = \\dfrac{9\\pi}{4} > 2\\pi",
          "explanation": "Adding another $\\pi$ gives $\\dfrac{9\\pi}{4} \\approx 7.07$, which is beyond $2\\pi$, so it is out of range. There are no more solutions.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check both solutions lie in range",
          "workingLatex": "0 \\le \\dfrac{\\pi}{4}, \\ \\dfrac{5\\pi}{4} \\le 2\\pi",
          "explanation": "Both $\\dfrac{\\pi}{4} \\approx 0.79$ and $\\dfrac{5\\pi}{4} \\approx 3.93$ lie between $0$ and $2\\pi \\approx 6.28$, so both are valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the solution set",
          "workingLatex": "\\theta = \\dfrac{\\pi}{4}, \\ \\dfrac{5\\pi}{4}",
          "explanation": "A quick check confirms $\\tan\\dfrac{\\pi}{4} = \\tan\\dfrac{5\\pi}{4} = 1$, so these are the two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{4}, \\ \\dfrac{5\\pi}{4}$"
    }
  },
{
  "id": "al.y2.pure.radians.q043",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["radians", "sector", "triangle area"],
  "questionText": "In a sector $OAB$ of a circle of radius $6\\text{ cm}$, the angle $AOB = \\dfrac{\\pi}{3}$ radians. Find the exact area of triangle $OAB$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the triangle and what is known",
        "workingLatex": "OA = OB = r = 6,\\quad \\theta = \\dfrac{\\pi}{3}",
        "explanation": "The triangle $OAB$ is formed by the two radii and the chord. Both radii are $6\\text{ cm}$ and the angle between them at the centre is $\\dfrac{\\pi}{3}$, so we know two sides and the included angle.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the triangle area formula",
        "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}r^2\\sin\\theta",
        "explanation": "The two radii are the enclosing sides, each of length $r$, with included angle $\\theta$. The area from two sides and the included angle is $\\tfrac{1}{2}\\,r\\,r\\,\\sin\\theta = \\tfrac{1}{2}r^2\\sin\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the radius and angle",
        "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}\\times 6^2 \\times \\sin\\dfrac{\\pi}{3}",
        "explanation": "Replace $r$ with $6$ and $\\theta$ with $\\dfrac{\\pi}{3}$ so every symbol becomes a number we can evaluate.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Square the radius",
        "workingLatex": "6^2 = 36 \\;\\Rightarrow\\; A_{\\triangle} = \\tfrac{1}{2}\\times 36 \\times \\sin\\dfrac{\\pi}{3}",
        "explanation": "Squaring the radius first keeps the arithmetic tidy: $6^2 = 36$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Recall the exact value of the sine",
        "workingLatex": "\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}",
        "explanation": "Because the answer must be exact we use the surd value from the standard $30$–$60$–$90$ triangle: $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$, not a rounded decimal.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the exact sine value",
        "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}\\times 36 \\times \\dfrac{\\sqrt{3}}{2}",
        "explanation": "Putting the surd value in keeps $\\sqrt{3}$ intact so the final area stays exact.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the numerical factor",
        "workingLatex": "\\tfrac{1}{2}\\times 36 = 18 \\;\\Rightarrow\\; A_{\\triangle} = 18\\times\\dfrac{\\sqrt{3}}{2}",
        "explanation": "Deal with the rational numbers first: half of $36$ is $18$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Complete the multiplication",
        "workingLatex": "18\\times\\dfrac{\\sqrt{3}}{2} = \\dfrac{18}{2}\\sqrt{3} = 9\\sqrt{3}",
        "explanation": "Multiplying $18$ by $\\dfrac{\\sqrt{3}}{2}$ divides $18$ by $2$ to give $9$, leaving the exact surd $9\\sqrt{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the exact area",
        "workingLatex": "A_{\\triangle} = 9\\sqrt{3}\\ \\text{cm}^2 \\approx 15.6\\ \\text{cm}^2",
        "explanation": "The exact area is $9\\sqrt{3}\\text{ cm}^2$; the decimal $\\approx 15.6\\text{ cm}^2$ is a sense-check that the value is reasonable for a triangle inside a circle of radius $6\\text{ cm}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$A_{\\triangle} = 9\\sqrt{3}\\text{ cm}^2$"
  }
},
{
  "id": "al.y2.pure.radians.q044",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "value",
  "tags": ["radians", "sector", "chord"],
  "questionText": "A chord $AB$ is drawn across a sector of a circle of radius $5\\text{ cm}$, where the angle $AOB = \\dfrac{\\pi}{3}$ radians. Find the exact length of the chord $AB$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the chord and the isosceles triangle",
        "workingLatex": "OA = OB = r = 5,\\quad \\angle AOB = \\dfrac{\\pi}{3}",
        "explanation": "The chord $AB$ is the base of the isosceles triangle $OAB$, whose two equal sides are the radii $OA$ and $OB$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Drop a perpendicular from the centre to the chord",
        "workingLatex": "OM \\perp AB,\\quad AM = MB",
        "explanation": "The line from $O$ to the midpoint $M$ of the chord is perpendicular to $AB$ and cuts both the chord and the angle exactly in half, because the triangle is symmetric.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Halve the central angle",
        "workingLatex": "\\angle AOM = \\dfrac{1}{2}\\times\\dfrac{\\pi}{3} = \\dfrac{\\pi}{6}",
        "explanation": "The perpendicular bisects the $\\dfrac{\\pi}{3}$ angle, giving a right-angled triangle $OMA$ with angle $\\dfrac{\\pi}{6}$ at $O$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Express half the chord using the sine ratio",
        "workingLatex": "\\sin\\dfrac{\\pi}{6} = \\dfrac{AM}{r} \\;\\Rightarrow\\; AM = r\\sin\\dfrac{\\pi}{6}",
        "explanation": "In right-angled triangle $OMA$, side $AM$ is opposite the angle and $r$ is the hypotenuse, so $\\sin\\dfrac{\\pi}{6} = \\dfrac{AM}{r}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the full chord length",
        "workingLatex": "AB = 2\\,AM = 2r\\sin\\dfrac{\\pi}{6}",
        "explanation": "The full chord is twice the half-chord, giving the standard chord formula $AB = 2r\\sin\\dfrac{\\theta}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute the radius",
        "workingLatex": "AB = 2\\times 5 \\times \\sin\\dfrac{\\pi}{6}",
        "explanation": "Replace $r$ with $5$ so only the sine remains to be evaluated.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Use the exact sine value",
        "workingLatex": "\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}",
        "explanation": "$\\dfrac{\\pi}{6}$ is $30^\\circ$, whose sine is exactly $\\dfrac{1}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the product",
        "workingLatex": "AB = 2\\times 5 \\times \\dfrac{1}{2} = 10\\times\\dfrac{1}{2} = 5",
        "explanation": "$2\\times 5 = 10$, and half of $10$ is $5$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the chord length",
        "workingLatex": "AB = 5\\ \\text{cm}",
        "explanation": "The chord is $5\\text{ cm}$ — equal to the radius, which makes sense because a central angle of $\\dfrac{\\pi}{3}$ produces an equilateral triangle where every side matches the radius.",
        "diagram": null
      }
    ],
    "finalAnswer": "$AB = 5\\text{ cm}$"
  }
},
{
  "id": "al.y2.pure.radians.q045",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "solutions",
  "tags": ["radians", "trig equation", "unit circle"],
  "questionText": "Solve $\\sin\\theta = -\\dfrac{1}{2}$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the equation and the strategy",
        "workingLatex": "\\sin\\theta = -\\dfrac{1}{2},\\quad 0 \\le \\theta \\le 2\\pi",
        "explanation": "The plan is to find the acute reference angle from the size of the value, then place solutions in the quadrants where sine has the correct sign.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note where sine is negative",
        "workingLatex": "\\sin\\theta < 0 \\text{ in quadrants 3 and 4}",
        "explanation": "On the unit circle $\\sin\\theta$ is the $y$-coordinate, which is negative below the horizontal axis — that is the third and fourth quadrants.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the reference angle",
        "workingLatex": "\\sin\\alpha = \\tfrac{1}{2} \\;\\Rightarrow\\; \\alpha = \\dfrac{\\pi}{6}",
        "explanation": "The reference angle $\\alpha$ is the acute angle with the same sine size. Solving $\\sin\\alpha = \\dfrac{1}{2}$ gives $\\alpha = \\dfrac{\\pi}{6}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Locate the third-quadrant solution",
        "workingLatex": "\\theta = \\pi + \\alpha = \\pi + \\dfrac{\\pi}{6}",
        "explanation": "In the third quadrant the angle is measured as half a turn plus the reference angle.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the third-quadrant angle",
        "workingLatex": "\\pi + \\dfrac{\\pi}{6} = \\dfrac{6\\pi}{6} + \\dfrac{\\pi}{6} = \\dfrac{7\\pi}{6}",
        "explanation": "Writing $\\pi$ as $\\dfrac{6\\pi}{6}$ lets us add the sixths directly.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Locate the fourth-quadrant solution",
        "workingLatex": "\\theta = 2\\pi - \\alpha = 2\\pi - \\dfrac{\\pi}{6}",
        "explanation": "In the fourth quadrant the angle is a full turn minus the reference angle.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the fourth-quadrant angle",
        "workingLatex": "2\\pi - \\dfrac{\\pi}{6} = \\dfrac{12\\pi}{6} - \\dfrac{\\pi}{6} = \\dfrac{11\\pi}{6}",
        "explanation": "Writing $2\\pi$ as $\\dfrac{12\\pi}{6}$ makes the subtraction straightforward.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check the solutions lie in range",
        "workingLatex": "0 \\le \\dfrac{7\\pi}{6} \\le 2\\pi,\\qquad 0 \\le \\dfrac{11\\pi}{6} \\le 2\\pi",
        "explanation": "Both values sit between $0$ and $2\\pi$, so both are valid and no others in the interval have this sine.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the solutions",
        "workingLatex": "\\theta = \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}",
        "explanation": "These are the two angles in $0 \\le \\theta \\le 2\\pi$ with $\\sin\\theta = -\\dfrac{1}{2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\theta = \\dfrac{7\\pi}{6},\\ \\dfrac{11\\pi}{6}$"
  }
},
{
  "id": "al.y2.pure.radians.q046",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "solutions",
  "tags": ["radians", "trig equation", "unit circle"],
  "questionText": "Solve $\\cos\\theta = -\\dfrac{1}{2}$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the equation and the strategy",
        "workingLatex": "\\cos\\theta = -\\dfrac{1}{2},\\quad 0 \\le \\theta \\le 2\\pi",
        "explanation": "Find the acute reference angle from the size of the value, then place solutions in the quadrants where cosine is negative.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note where cosine is negative",
        "workingLatex": "\\cos\\theta < 0 \\text{ in quadrants 2 and 3}",
        "explanation": "On the unit circle $\\cos\\theta$ is the $x$-coordinate, which is negative to the left of the vertical axis — the second and third quadrants.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the reference angle",
        "workingLatex": "\\cos\\alpha = \\tfrac{1}{2} \\;\\Rightarrow\\; \\alpha = \\dfrac{\\pi}{3}",
        "explanation": "The reference angle is the acute angle with the same cosine size. Solving $\\cos\\alpha = \\dfrac{1}{2}$ gives $\\alpha = \\dfrac{\\pi}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Locate the second-quadrant solution",
        "workingLatex": "\\theta = \\pi - \\alpha = \\pi - \\dfrac{\\pi}{3}",
        "explanation": "In the second quadrant the angle is half a turn minus the reference angle.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Simplify the second-quadrant angle",
        "workingLatex": "\\pi - \\dfrac{\\pi}{3} = \\dfrac{3\\pi}{3} - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}",
        "explanation": "Writing $\\pi$ as $\\dfrac{3\\pi}{3}$ lets us subtract the thirds directly.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Locate the third-quadrant solution",
        "workingLatex": "\\theta = \\pi + \\alpha = \\pi + \\dfrac{\\pi}{3}",
        "explanation": "In the third quadrant the angle is half a turn plus the reference angle.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Simplify the third-quadrant angle",
        "workingLatex": "\\pi + \\dfrac{\\pi}{3} = \\dfrac{3\\pi}{3} + \\dfrac{\\pi}{3} = \\dfrac{4\\pi}{3}",
        "explanation": "Again write $\\pi$ as $\\dfrac{3\\pi}{3}$ before adding.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check the solutions lie in range",
        "workingLatex": "0 \\le \\dfrac{2\\pi}{3} \\le 2\\pi,\\qquad 0 \\le \\dfrac{4\\pi}{3} \\le 2\\pi",
        "explanation": "Both values lie between $0$ and $2\\pi$, so both are valid solutions.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the solutions",
        "workingLatex": "\\theta = \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3}",
        "explanation": "These are the two angles in $0 \\le \\theta \\le 2\\pi$ with $\\cos\\theta = -\\dfrac{1}{2}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\theta = \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3}$"
  }
},
{
  "id": "al.y2.pure.radians.q047",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "value",
  "tags": ["radians", "sector area", "arc length"],
  "questionText": "A sector of a circle of radius $9\\text{ cm}$ has area $54\\text{ cm}^2$. Find the angle of the sector in radians and the length of its arc.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State what is known and required",
        "workingLatex": "A = 54,\\quad r = 9,\\quad \\theta = ?,\\quad s = ?",
        "explanation": "We are given the area and radius, and must first find the angle, then use it to find the arc length.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the sector area formula",
        "workingLatex": "A = \\tfrac{1}{2}r^2\\theta",
        "explanation": "For an angle measured in radians the sector area is $\\tfrac{1}{2}r^2\\theta$; this is the fraction $\\dfrac{\\theta}{2\\pi}$ of the whole circle $\\pi r^2$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the known values",
        "workingLatex": "54 = \\tfrac{1}{2}\\times 9^2 \\times \\theta",
        "explanation": "Insert $A = 54$ and $r = 9$ so the only unknown left is $\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the constant factor",
        "workingLatex": "\\tfrac{1}{2}\\times 81 = \\dfrac{81}{2} \\;\\Rightarrow\\; 54 = \\dfrac{81}{2}\\,\\theta",
        "explanation": "Compute $\\tfrac{1}{2}\\times 9^2 = \\dfrac{81}{2}$ so the equation is linear in $\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the angle",
        "workingLatex": "\\theta = \\dfrac{2\\times 54}{81} = \\dfrac{108}{81}",
        "explanation": "Multiply both sides by $2$ and divide by $81$ to isolate $\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the angle",
        "workingLatex": "\\dfrac{108}{81} = \\dfrac{4}{3}",
        "explanation": "Divide numerator and denominator by $27$: $\\dfrac{108}{81} = \\dfrac{4}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the arc length formula",
        "workingLatex": "s = r\\theta",
        "explanation": "With the angle in radians, arc length is simply the radius times the angle.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute for the arc length",
        "workingLatex": "s = 9\\times\\dfrac{4}{3}",
        "explanation": "Use $r = 9$ and the angle $\\dfrac{4}{3}$ just found.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the arc length",
        "workingLatex": "s = \\dfrac{9\\times 4}{3} = \\dfrac{36}{3} = 12",
        "explanation": "Cancelling the $3$ into the $9$ leaves $3\\times 4 = 12$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the results",
        "workingLatex": "\\theta = \\dfrac{4}{3}\\ \\text{rad},\\quad s = 12\\ \\text{cm}",
        "explanation": "The angle is $\\dfrac{4}{3}$ radians (about $76^\\circ$) and the arc is $12\\text{ cm}$, both sensible for this sector.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\theta = \\dfrac{4}{3}\\text{ rad},\\ s = 12\\text{ cm}$"
  }
},
{
  "id": "al.y2.pure.radians.q048",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "value",
  "tags": ["radians", "arc length", "sector area"],
  "questionText": "The arc of a sector of a circle of radius $8\\text{ cm}$ has length $20\\text{ cm}$. Find the angle of the sector in radians and its area.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State what is known and required",
        "workingLatex": "s = 20,\\quad r = 8,\\quad \\theta = ?,\\quad A = ?",
        "explanation": "We are given the arc length and radius; first find the angle, then use it to find the area.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the arc length formula",
        "workingLatex": "s = r\\theta",
        "explanation": "With the angle in radians, arc length equals radius times angle.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Substitute the known values",
        "workingLatex": "20 = 8\\theta",
        "explanation": "Insert $s = 20$ and $r = 8$ to get an equation in $\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve for the angle",
        "workingLatex": "\\theta = \\dfrac{20}{8} = 2.5",
        "explanation": "Divide both sides by $8$ to isolate $\\theta = 2.5$ radians.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the sector area formula",
        "workingLatex": "A = \\tfrac{1}{2}r^2\\theta",
        "explanation": "For a radian angle the sector area is $\\tfrac{1}{2}r^2\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute for the area",
        "workingLatex": "A = \\tfrac{1}{2}\\times 8^2 \\times 2.5",
        "explanation": "Use $r = 8$ and the angle $2.5$ found above.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Square the radius",
        "workingLatex": "8^2 = 64 \\;\\Rightarrow\\; A = \\tfrac{1}{2}\\times 64 \\times 2.5",
        "explanation": "Squaring the radius first keeps the numbers manageable: $8^2 = 64$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Simplify the half",
        "workingLatex": "\\tfrac{1}{2}\\times 64 = 32 \\;\\Rightarrow\\; A = 32\\times 2.5",
        "explanation": "Half of $64$ is $32$, leaving a single multiplication.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the area",
        "workingLatex": "A = 32\\times 2.5 = 80",
        "explanation": "$32\\times 2.5$ is $32\\times 2 + 32\\times 0.5 = 64 + 16 = 80$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the results",
        "workingLatex": "\\theta = 2.5\\ \\text{rad},\\quad A = 80\\ \\text{cm}^2",
        "explanation": "The angle is $2.5$ radians and the area is $80\\text{ cm}^2$, consistent with an arc longer than a quarter of the circle.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\theta = 2.5\\text{ rad},\\ A = 80\\text{ cm}^2$"
  }
},
{
  "id": "al.y2.pure.radians.q049",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "value",
  "tags": ["radians", "sector perimeter", "sector area"],
  "questionText": "A sector of a circle has radius $10\\text{ cm}$ and angle $1.2$ radians. Find the perimeter and the area of the sector.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State what is known and required",
        "workingLatex": "r = 10,\\quad \\theta = 1.2,\\quad P = ?,\\quad A = ?",
        "explanation": "We know the radius and angle, and must find both the perimeter and the area.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State the arc length formula",
        "workingLatex": "s = r\\theta",
        "explanation": "The perimeter needs the arc length, which is radius times angle for a radian measure.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Compute the arc length",
        "workingLatex": "s = 10\\times 1.2 = 12",
        "explanation": "Multiplying $r = 10$ by $\\theta = 1.2$ gives an arc of $12\\text{ cm}$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Describe the perimeter of a sector",
        "workingLatex": "P = s + 2r",
        "explanation": "The boundary of a sector is the curved arc plus the two straight radii, so $P = s + 2r$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Substitute the values",
        "workingLatex": "P = 12 + 2\\times 10",
        "explanation": "Use the arc length $12$ and two radii of $10$ each.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the perimeter",
        "workingLatex": "P = 12 + 20 = 32",
        "explanation": "Adding the arc and the two radii gives a perimeter of $32\\text{ cm}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the sector area formula",
        "workingLatex": "A = \\tfrac{1}{2}r^2\\theta",
        "explanation": "For a radian angle the sector area is $\\tfrac{1}{2}r^2\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute for the area",
        "workingLatex": "A = \\tfrac{1}{2}\\times 10^2 \\times 1.2",
        "explanation": "Insert $r = 10$ and $\\theta = 1.2$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Square the radius",
        "workingLatex": "10^2 = 100 \\;\\Rightarrow\\; A = \\tfrac{1}{2}\\times 100 \\times 1.2",
        "explanation": "Squaring first gives $10^2 = 100$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the area",
        "workingLatex": "A = 50\\times 1.2 = 60",
        "explanation": "Half of $100$ is $50$, and $50\\times 1.2 = 60$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the results",
        "workingLatex": "P = 32\\ \\text{cm},\\quad A = 60\\ \\text{cm}^2",
        "explanation": "The perimeter is $32\\text{ cm}$ and the area is $60\\text{ cm}^2$, both reasonable for this sector.",
        "diagram": null
      }
    ],
    "finalAnswer": "$P = 32\\text{ cm},\\ A = 60\\text{ cm}^2$"
  }
},
{
  "id": "al.y2.pure.radians.q050",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "solutions",
  "tags": ["radians", "trig equation", "tangent"],
  "questionText": "Solve $\\tan\\theta = \\sqrt{3}$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the equation and the strategy",
        "workingLatex": "\\tan\\theta = \\sqrt{3},\\quad 0 \\le \\theta \\le 2\\pi",
        "explanation": "Find the acute reference angle, then place solutions in the quadrants where tangent is positive.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Note where tangent is positive",
        "workingLatex": "\\tan\\theta > 0 \\text{ in quadrants 1 and 3}",
        "explanation": "$\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}$ is positive where sine and cosine share a sign — the first and third quadrants.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the reference angle",
        "workingLatex": "\\tan\\alpha = \\sqrt{3} \\;\\Rightarrow\\; \\alpha = \\dfrac{\\pi}{3}",
        "explanation": "The acute angle whose tangent is $\\sqrt{3}$ is $\\dfrac{\\pi}{3}$, a standard value from the $30$–$60$–$90$ triangle.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Write the first-quadrant solution",
        "workingLatex": "\\theta = \\alpha = \\dfrac{\\pi}{3}",
        "explanation": "In the first quadrant the solution is simply the reference angle itself.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Locate the third-quadrant solution",
        "workingLatex": "\\theta = \\pi + \\alpha = \\pi + \\dfrac{\\pi}{3}",
        "explanation": "In the third quadrant the angle is half a turn plus the reference angle.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Simplify the third-quadrant angle",
        "workingLatex": "\\pi + \\dfrac{\\pi}{3} = \\dfrac{3\\pi}{3} + \\dfrac{\\pi}{3} = \\dfrac{4\\pi}{3}",
        "explanation": "Writing $\\pi$ as $\\dfrac{3\\pi}{3}$ makes the addition of thirds direct.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Confirm via the period of tangent",
        "workingLatex": "\\tan\\left(\\theta + \\pi\\right) = \\tan\\theta",
        "explanation": "Tangent repeats every $\\pi$, so the second solution is exactly $\\pi$ more than the first — confirming $\\dfrac{4\\pi}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check the solutions lie in range",
        "workingLatex": "0 \\le \\dfrac{\\pi}{3} \\le 2\\pi,\\qquad 0 \\le \\dfrac{4\\pi}{3} \\le 2\\pi",
        "explanation": "Both values lie between $0$ and $2\\pi$, so both are valid.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the solutions",
        "workingLatex": "\\theta = \\dfrac{\\pi}{3},\\ \\dfrac{4\\pi}{3}",
        "explanation": "These are the two angles in $0 \\le \\theta \\le 2\\pi$ with $\\tan\\theta = \\sqrt{3}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\theta = \\dfrac{\\pi}{3},\\ \\dfrac{4\\pi}{3}$"
  }
},
{
  "id": "al.y2.pure.radians.q051",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "value",
  "tags": ["radians", "segment", "exact value"],
  "questionText": "A chord of a circle of radius $6\\text{ cm}$ subtends an angle of $\\dfrac{\\pi}{3}$ radians at the centre. Find the exact area of the minor segment cut off by the chord.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the segment",
        "workingLatex": "\\text{Segment} = \\text{Sector} - \\text{Triangle}",
        "explanation": "The minor segment is the region between the chord and the arc. Removing the triangle $OAB$ from the sector $OAB$ leaves exactly that region.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the known values",
        "workingLatex": "r = 6,\\quad \\theta = \\dfrac{\\pi}{3}",
        "explanation": "Record the radius and the central angle so each formula can be filled in.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the sector area formula",
        "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}r^2\\theta",
        "explanation": "For a radian angle the sector area is $\\tfrac{1}{2}r^2\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the triangle area formula",
        "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}r^2\\sin\\theta",
        "explanation": "The triangle has two radii as sides with included angle $\\theta$, giving area $\\tfrac{1}{2}r^2\\sin\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Subtract to get the segment area",
        "workingLatex": "A_{\\text{seg}} = \\tfrac{1}{2}r^2\\theta - \\tfrac{1}{2}r^2\\sin\\theta",
        "explanation": "The segment area is the sector minus the triangle.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Factor out the common term",
        "workingLatex": "A_{\\text{seg}} = \\tfrac{1}{2}r^2\\left(\\theta - \\sin\\theta\\right)",
        "explanation": "Both pieces share $\\tfrac{1}{2}r^2$, so factoring it out gives the compact segment formula.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the radius",
        "workingLatex": "A_{\\text{seg}} = \\tfrac{1}{2}\\times 6^2 \\left(\\theta - \\sin\\theta\\right)",
        "explanation": "Insert $r = 6$ into the factored formula.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Simplify the constant factor",
        "workingLatex": "\\tfrac{1}{2}\\times 36 = 18 \\;\\Rightarrow\\; A_{\\text{seg}} = 18\\left(\\theta - \\sin\\theta\\right)",
        "explanation": "Half of $6^2 = 36$ is $18$, so the whole bracket is scaled by $18$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the angle",
        "workingLatex": "A_{\\text{seg}} = 18\\left(\\dfrac{\\pi}{3} - \\sin\\dfrac{\\pi}{3}\\right)",
        "explanation": "Replace $\\theta$ with $\\dfrac{\\pi}{3}$, keeping the sine symbolic for now so the answer stays exact.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Insert the exact sine value",
        "workingLatex": "\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2} \\;\\Rightarrow\\; A_{\\text{seg}} = 18\\left(\\dfrac{\\pi}{3} - \\dfrac{\\sqrt{3}}{2}\\right)",
        "explanation": "Using the surd value $\\dfrac{\\sqrt{3}}{2}$ rather than a decimal keeps the area exact.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Expand the bracket",
        "workingLatex": "A_{\\text{seg}} = 18\\times\\dfrac{\\pi}{3} - 18\\times\\dfrac{\\sqrt{3}}{2}",
        "explanation": "Distribute the $18$ across both terms inside the bracket.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Simplify the first term",
        "workingLatex": "18\\times\\dfrac{\\pi}{3} = \\dfrac{18\\pi}{3} = 6\\pi",
        "explanation": "Dividing $18$ by $3$ gives $6$, so the first term is $6\\pi$.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Simplify the second term",
        "workingLatex": "18\\times\\dfrac{\\sqrt{3}}{2} = \\dfrac{18}{2}\\sqrt{3} = 9\\sqrt{3}",
        "explanation": "Dividing $18$ by $2$ gives $9$, so the second term is $9\\sqrt{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Write the exact area",
        "workingLatex": "A_{\\text{seg}} = 6\\pi - 9\\sqrt{3}",
        "explanation": "Combining the two simplified terms gives the exact segment area in surd form.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Evaluate as a decimal check",
        "workingLatex": "6\\pi - 9\\sqrt{3} \\approx 18.850 - 15.588 = 3.262",
        "explanation": "The decimal value is about $3.26$, a small positive number as expected for a thin sliver.",
        "diagram": null
      },
      {
        "stepNumber": 16,
        "description": "State the final answer",
        "workingLatex": "A_{\\text{seg}} = 6\\pi - 9\\sqrt{3}\\ \\text{cm}^2 \\approx 3.26\\ \\text{cm}^2",
        "explanation": "The segment is much smaller than the sector, which makes sense because the chord cuts off only a thin region near the arc.",
        "diagram": null
      }
    ],
    "finalAnswer": "$A_{\\text{seg}} = 6\\pi - 9\\sqrt{3}\\text{ cm}^2 \\approx 3.26\\text{ cm}^2$"
  }
},
{
  "id": "al.y2.pure.radians.q052",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "value",
  "tags": ["radians", "segment", "exact value"],
  "questionText": "A chord of a circle of radius $10\\text{ cm}$ subtends a right angle $\\left(\\dfrac{\\pi}{2}\\text{ radians}\\right)$ at the centre. Find the exact area of the minor segment cut off by the chord.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the segment",
        "workingLatex": "\\text{Segment} = \\text{Sector} - \\text{Triangle}",
        "explanation": "The minor segment lies between the chord and the arc. Taking the triangle away from the sector leaves exactly this region.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the known values",
        "workingLatex": "r = 10,\\quad \\theta = \\dfrac{\\pi}{2}",
        "explanation": "Record the radius and the right-angle measure in radians ready for substitution.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the sector area formula",
        "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}r^2\\theta",
        "explanation": "For a radian angle the sector area is $\\tfrac{1}{2}r^2\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the triangle area formula",
        "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}r^2\\sin\\theta",
        "explanation": "The triangle has two radii enclosing the angle $\\theta$, giving area $\\tfrac{1}{2}r^2\\sin\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Subtract to get the segment area",
        "workingLatex": "A_{\\text{seg}} = \\tfrac{1}{2}r^2\\theta - \\tfrac{1}{2}r^2\\sin\\theta",
        "explanation": "The segment is the sector minus the triangle.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Factor out the common term",
        "workingLatex": "A_{\\text{seg}} = \\tfrac{1}{2}r^2\\left(\\theta - \\sin\\theta\\right)",
        "explanation": "Both terms share $\\tfrac{1}{2}r^2$, giving the compact segment formula.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the radius",
        "workingLatex": "A_{\\text{seg}} = \\tfrac{1}{2}\\times 10^2 \\left(\\theta - \\sin\\theta\\right)",
        "explanation": "Insert $r = 10$ into the factored formula.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Simplify the constant factor",
        "workingLatex": "\\tfrac{1}{2}\\times 100 = 50 \\;\\Rightarrow\\; A_{\\text{seg}} = 50\\left(\\theta - \\sin\\theta\\right)",
        "explanation": "Half of $10^2 = 100$ is $50$, the scale factor for the bracket.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute the angle",
        "workingLatex": "A_{\\text{seg}} = 50\\left(\\dfrac{\\pi}{2} - \\sin\\dfrac{\\pi}{2}\\right)",
        "explanation": "Replace $\\theta$ with $\\dfrac{\\pi}{2}$, keeping the sine symbolic until we insert its exact value.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Insert the exact sine value",
        "workingLatex": "\\sin\\dfrac{\\pi}{2} = 1 \\;\\Rightarrow\\; A_{\\text{seg}} = 50\\left(\\dfrac{\\pi}{2} - 1\\right)",
        "explanation": "At a right angle the sine is exactly $1$, so the bracket becomes $\\dfrac{\\pi}{2} - 1$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Expand the bracket",
        "workingLatex": "A_{\\text{seg}} = 50\\times\\dfrac{\\pi}{2} - 50\\times 1",
        "explanation": "Distribute the $50$ across both terms in the bracket.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Simplify the first term",
        "workingLatex": "50\\times\\dfrac{\\pi}{2} = \\dfrac{50\\pi}{2} = 25\\pi",
        "explanation": "Dividing $50$ by $2$ gives $25$, so the first term is $25\\pi$.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Write the exact area",
        "workingLatex": "A_{\\text{seg}} = 25\\pi - 50",
        "explanation": "The second term is simply $50$, giving the exact area $25\\pi - 50$.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Evaluate as a decimal check",
        "workingLatex": "25\\pi - 50 \\approx 78.540 - 50 = 28.540",
        "explanation": "The decimal value is about $28.5$, a sensible positive area.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "State the final answer",
        "workingLatex": "A_{\\text{seg}} = 25\\pi - 50\\ \\text{cm}^2 \\approx 28.5\\ \\text{cm}^2",
        "explanation": "This is well under a quarter of the circle's area ($25\\pi \\approx 78.5\\text{ cm}^2$), confirming the segment is the smaller piece.",
        "diagram": null
      }
    ],
    "finalAnswer": "$A_{\\text{seg}} = 25\\pi - 50\\text{ cm}^2 \\approx 28.5\\text{ cm}^2$"
  }
},
{
  "id": "al.y2.pure.radians.q053",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Hard",
  "marks": 7,
  "answerType": "value",
  "tags": ["radians", "segment", "3 significant figures"],
  "questionText": "A chord of a circle of radius $8\\text{ cm}$ subtends an angle of $1.2$ radians at the centre. Find the area of the minor segment, giving your answer to $3$ significant figures.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the segment",
        "workingLatex": "\\text{Segment} = \\text{Sector} - \\text{Triangle}",
        "explanation": "The minor segment is the region between the chord and the arc, found by removing the triangle from the sector.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the known values",
        "workingLatex": "r = 8,\\quad \\theta = 1.2",
        "explanation": "Record the radius and the central angle, noting the angle is already in radians.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the sector area formula",
        "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}r^2\\theta",
        "explanation": "For a radian angle the sector area is $\\tfrac{1}{2}r^2\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the triangle area formula",
        "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}r^2\\sin\\theta",
        "explanation": "The triangle has two radii enclosing the angle $\\theta$, giving area $\\tfrac{1}{2}r^2\\sin\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Subtract to get the segment area",
        "workingLatex": "A_{\\text{seg}} = \\tfrac{1}{2}r^2\\theta - \\tfrac{1}{2}r^2\\sin\\theta",
        "explanation": "The segment area is the sector minus the triangle.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Factor out the common term",
        "workingLatex": "A_{\\text{seg}} = \\tfrac{1}{2}r^2\\left(\\theta - \\sin\\theta\\right)",
        "explanation": "Both parts share $\\tfrac{1}{2}r^2$, giving the compact segment formula.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the radius",
        "workingLatex": "\\tfrac{1}{2}\\times 8^2 = 32 \\;\\Rightarrow\\; A_{\\text{seg}} = 32\\left(\\theta - \\sin\\theta\\right)",
        "explanation": "Half of $8^2 = 64$ is $32$, the scale factor for the bracket.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute the angle",
        "workingLatex": "A_{\\text{seg}} = 32\\left(1.2 - \\sin 1.2\\right)",
        "explanation": "Replace $\\theta$ with $1.2$; the answer here is required as a decimal, so we will evaluate the sine numerically.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Work in radian mode",
        "workingLatex": "\\theta = 1.2 \\text{ rad}",
        "explanation": "Because the angle is in radians, the calculator must be set to radian mode before evaluating $\\sin 1.2$ — degree mode would give a wrong value.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the sine",
        "workingLatex": "\\sin 1.2 = 0.932039\\ldots",
        "explanation": "Evaluating in radians gives $\\sin 1.2 \\approx 0.932039$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Evaluate the bracket",
        "workingLatex": "\\theta - \\sin\\theta = 1.2 - 0.932039 = 0.267961",
        "explanation": "Subtracting the sine from the angle leaves the small factor $0.267961$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Multiply out",
        "workingLatex": "A_{\\text{seg}} = 32\\times 0.267961 = 8.5748\\ldots",
        "explanation": "Multiplying by $32$ gives the segment area to full precision.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Round to 3 significant figures",
        "workingLatex": "A_{\\text{seg}} \\approx 8.57",
        "explanation": "The fourth significant figure is $4$, so we round down, giving $8.57$.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the final answer",
        "workingLatex": "A_{\\text{seg}} \\approx 8.57\\ \\text{cm}^2",
        "explanation": "The segment area is about $8.57\\text{ cm}^2$, a small fraction of the sector area, as expected for this modest angle.",
        "diagram": null
      }
    ],
    "finalAnswer": "$A_{\\text{seg}} \\approx 8.57\\text{ cm}^2$"
  }
},
{
  "id": "al.y2.pure.radians.q054",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "value",
  "tags": ["radians", "annular sector", "area", "perimeter"],
  "questionText": "A shaded region lies between two arcs of a common centre $O$. The inner arc has radius $4\\text{ cm}$, the outer arc has radius $7\\text{ cm}$, and both arcs subtend an angle of $1.2$ radians at $O$. Find (a) the area of the region and (b) its perimeter.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the region",
        "workingLatex": "\\text{Region} = \\text{outer sector} - \\text{inner sector}",
        "explanation": "The shaded annular sector is what remains when the small inner sector is removed from the large outer sector sharing the same angle.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the known values",
        "workingLatex": "R = 7,\\quad r = 4,\\quad \\theta = 1.2",
        "explanation": "Label the outer radius $R$, the inner radius $r$, and the common angle $\\theta$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the outer sector area",
        "workingLatex": "A_{\\text{outer}} = \\tfrac{1}{2}R^2\\theta",
        "explanation": "The large sector has area $\\tfrac{1}{2}R^2\\theta$ for a radian angle.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the inner sector area",
        "workingLatex": "A_{\\text{inner}} = \\tfrac{1}{2}r^2\\theta",
        "explanation": "The small sector has area $\\tfrac{1}{2}r^2\\theta$ with the same angle.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Subtract the two areas",
        "workingLatex": "A = \\tfrac{1}{2}R^2\\theta - \\tfrac{1}{2}r^2\\theta",
        "explanation": "The region's area is the difference of the two sector areas.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Factor the area expression",
        "workingLatex": "A = \\tfrac{1}{2}\\theta\\left(R^2 - r^2\\right)",
        "explanation": "Both sectors share $\\tfrac{1}{2}\\theta$, so factoring it out leaves the difference of squared radii.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Square the radii",
        "workingLatex": "R^2 = 49,\\quad r^2 = 16",
        "explanation": "Compute the squares needed: $7^2 = 49$ and $4^2 = 16$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the difference of squares",
        "workingLatex": "R^2 - r^2 = 49 - 16 = 33",
        "explanation": "The bracket evaluates to $33$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute into the area formula",
        "workingLatex": "A = \\tfrac{1}{2}\\times 1.2 \\times 33",
        "explanation": "Insert $\\theta = 1.2$ and the difference $33$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the area",
        "workingLatex": "A = 0.6\\times 33 = 19.8",
        "explanation": "Half of $1.2$ is $0.6$, and $0.6\\times 33 = 19.8$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Describe the perimeter",
        "workingLatex": "P = R\\theta + r\\theta + 2(R - r)",
        "explanation": "The boundary is the long outer arc, the short inner arc, and the two straight ends that join them; each straight end has length $R - r$.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Compute the outer arc",
        "workingLatex": "R\\theta = 7\\times 1.2 = 8.4",
        "explanation": "The outer arc length is radius times angle: $8.4\\text{ cm}$.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Compute the inner arc",
        "workingLatex": "r\\theta = 4\\times 1.2 = 4.8",
        "explanation": "The inner arc length is $4.8\\text{ cm}$.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "Compute the two straight ends",
        "workingLatex": "2(R - r) = 2(7 - 4) = 6",
        "explanation": "Each straight edge spans the gap $R - r = 3\\text{ cm}$, and there are two of them, giving $6\\text{ cm}$.",
        "diagram": null
      },
      {
        "stepNumber": 15,
        "description": "Sum the perimeter",
        "workingLatex": "P = 8.4 + 4.8 + 6 = 19.2",
        "explanation": "Adding the two arcs and the two straight ends gives the total perimeter.",
        "diagram": null
      },
      {
        "stepNumber": 16,
        "description": "State the results",
        "workingLatex": "A = 19.8\\ \\text{cm}^2,\\quad P = 19.2\\ \\text{cm}",
        "explanation": "The region has area $19.8\\text{ cm}^2$ and perimeter $19.2\\text{ cm}$, both consistent with a modest band between the arcs.",
        "diagram": null
      }
    ],
    "finalAnswer": "$A = 19.8\\text{ cm}^2,\\ P = 19.2\\text{ cm}$"
  }
},
{
  "id": "al.y2.pure.radians.q055",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "value",
  "tags": ["radians", "segment perimeter", "chord", "3 significant figures"],
  "questionText": "A chord $PQ$ of a circle of radius $12\\text{ cm}$ subtends an angle of $0.9$ radians at the centre $O$. Find the perimeter of the minor segment (arc $PQ$ together with chord $PQ$), giving your answer to $3$ significant figures.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Describe the segment perimeter",
        "workingLatex": "P = \\text{arc } PQ + \\text{chord } PQ",
        "explanation": "The boundary of the minor segment is the curved arc $PQ$ together with the straight chord $PQ$, so the perimeter is the sum of the two.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "List the known values",
        "workingLatex": "r = 12,\\quad \\theta = 0.9",
        "explanation": "Record the radius and the central angle, noting the angle is in radians.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the arc length formula",
        "workingLatex": "s = r\\theta",
        "explanation": "With a radian angle the arc length is radius times angle.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Compute the arc length",
        "workingLatex": "s = 12\\times 0.9 = 10.8",
        "explanation": "The arc $PQ$ has length $10.8\\text{ cm}$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the chord length formula",
        "workingLatex": "\\text{chord} = 2r\\sin\\dfrac{\\theta}{2}",
        "explanation": "Bisecting the isosceles triangle $OPQ$ gives a right triangle with angle $\\dfrac{\\theta}{2}$, leading to the chord formula $2r\\sin\\dfrac{\\theta}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Halve the angle",
        "workingLatex": "\\dfrac{\\theta}{2} = \\dfrac{0.9}{2} = 0.45",
        "explanation": "The half-angle needed for the chord formula is $0.45$ radians.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Work in radian mode",
        "workingLatex": "\\dfrac{\\theta}{2} = 0.45 \\text{ rad}",
        "explanation": "Since the half-angle is in radians, evaluate $\\sin 0.45$ with the calculator in radian mode.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the sine",
        "workingLatex": "\\sin 0.45 = 0.434966\\ldots",
        "explanation": "In radian mode, $\\sin 0.45 \\approx 0.434966$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Substitute into the chord formula",
        "workingLatex": "\\text{chord} = 2\\times 12\\times 0.434966",
        "explanation": "Insert $r = 12$ and the sine value into $2r\\sin\\dfrac{\\theta}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the chord",
        "workingLatex": "\\text{chord} = 24\\times 0.434966 = 10.4392\\ldots",
        "explanation": "$2\\times 12 = 24$, and $24\\times 0.434966 \\approx 10.439\\text{ cm}$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Add the arc and the chord",
        "workingLatex": "P = 10.8 + 10.4392",
        "explanation": "The perimeter is the arc plus the chord.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the sum",
        "workingLatex": "P = 21.2392\\ldots",
        "explanation": "Adding gives about $21.239\\text{ cm}$ to full precision.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Round to 3 significant figures",
        "workingLatex": "P \\approx 21.2",
        "explanation": "The fourth significant figure is $3$, so we round down to $21.2$.",
        "diagram": null
      },
      {
        "stepNumber": 14,
        "description": "State the final answer",
        "workingLatex": "P \\approx 21.2\\ \\text{cm}",
        "explanation": "The chord is slightly shorter than the arc, as it must be, and the total perimeter is about $21.2\\text{ cm}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$P \\approx 21.2\\text{ cm}$"
  }
},
{
  "id": "al.y2.pure.radians.q056",
  "level": "A-Level Maths",
  "topic": "Year 2 Pure",
  "subtopic": "Radians, arcs and sectors",
  "subtopicId": "al.y2.pure.radians",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "solutions",
  "tags": ["radians", "trig equation", "quadratic in cosine"],
  "questionText": "Solve $2\\cos^2\\theta + \\cos\\theta - 1 = 0$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise the quadratic form",
        "workingLatex": "2\\cos^2\\theta + \\cos\\theta - 1 = 0",
        "explanation": "This is a quadratic in $\\cos\\theta$; treating $\\cos\\theta$ as a single variable lets us factor it.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Substitute a single variable",
        "workingLatex": "\\text{Let } c = \\cos\\theta \\;\\Rightarrow\\; 2c^2 + c - 1 = 0",
        "explanation": "Writing $c = \\cos\\theta$ turns the trig equation into an ordinary quadratic that is easier to factor.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Factor the quadratic",
        "workingLatex": "(2c - 1)(c + 1) = 0",
        "explanation": "We need factors giving product $2c^2$ and $-1$ with middle term $+c$; $(2c - 1)(c + 1)$ works.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the factorisation",
        "workingLatex": "(2c - 1)(c + 1) = 2c^2 + 2c - c - 1 = 2c^2 + c - 1",
        "explanation": "Expanding confirms the factors reproduce the original quadratic, so the factorisation is correct.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve the first factor",
        "workingLatex": "2c - 1 = 0 \\;\\Rightarrow\\; c = \\dfrac{1}{2}",
        "explanation": "Setting the first bracket to zero gives $\\cos\\theta = \\dfrac{1}{2}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve the second factor",
        "workingLatex": "c + 1 = 0 \\;\\Rightarrow\\; c = -1",
        "explanation": "Setting the second bracket to zero gives $\\cos\\theta = -1$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Return to the cosine equations",
        "workingLatex": "\\cos\\theta = \\dfrac{1}{2} \\quad\\text{or}\\quad \\cos\\theta = -1",
        "explanation": "Each root of the quadratic becomes a separate equation for $\\theta$ to solve.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the reference angle for the first case",
        "workingLatex": "\\cos\\alpha = \\dfrac{1}{2} \\;\\Rightarrow\\; \\alpha = \\dfrac{\\pi}{3}",
        "explanation": "The acute angle with cosine $\\dfrac{1}{2}$ is $\\dfrac{\\pi}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Solve the first case in range",
        "workingLatex": "\\theta = \\dfrac{\\pi}{3} \\quad\\text{or}\\quad \\theta = 2\\pi - \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{3}",
        "explanation": "Cosine is positive in the first and fourth quadrants, giving $\\dfrac{\\pi}{3}$ and $2\\pi - \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{3}$.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Solve the second case",
        "workingLatex": "\\cos\\theta = -1 \\;\\Rightarrow\\; \\theta = \\pi",
        "explanation": "Cosine reaches $-1$ only at the half turn, so $\\theta = \\pi$ is the single solution here.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Collect all solutions",
        "workingLatex": "\\theta = \\dfrac{\\pi}{3},\\ \\pi,\\ \\dfrac{5\\pi}{3}",
        "explanation": "Gather the solutions from both cases into one list.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Check the range",
        "workingLatex": "0 \\le \\dfrac{\\pi}{3},\\ \\pi,\\ \\dfrac{5\\pi}{3} \\le 2\\pi",
        "explanation": "All three values lie within $0 \\le \\theta \\le 2\\pi$, so all are valid.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the solutions",
        "workingLatex": "\\theta = \\dfrac{\\pi}{3},\\ \\pi,\\ \\dfrac{5\\pi}{3}",
        "explanation": "These are the three angles in the interval satisfying $2\\cos^2\\theta + \\cos\\theta - 1 = 0$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\theta = \\dfrac{\\pi}{3},\\ \\pi,\\ \\dfrac{5\\pi}{3}$"
  }
},
{
    "id": "al.y2.pure.radians.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["radians", "segment area", "exact form"],
    "questionText": "A chord of a circle of radius $5\\text{ cm}$ subtends an angle of $\\dfrac{2\\pi}{3}$ radians at the centre. Find the exact area of the minor segment.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the segment as sector minus triangle",
          "workingLatex": "A_{\\text{segment}} = A_{\\text{sector}} - A_{\\triangle}",
          "explanation": "The minor segment is the sliver of area trapped between the chord and the arc. If we take the whole pie-slice (the sector) and cut away the triangle made by the two radii and the chord, the piece left over is exactly that sliver.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known quantities",
          "workingLatex": "r = 5, \\quad \\theta = \\dfrac{2\\pi}{3}",
          "explanation": "Writing down the radius and the central angle first keeps the substitutions clean. Because $\\theta$ is given in radians, we can use the radian forms of the sector and triangle area formulas directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the sector area formula",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "In radians the area of a sector is a clean $\\tfrac{1}{2}r^2\\theta$. This only works when $\\theta$ is in radians, which is why the radian measure is so convenient here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the sector formula",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}\\times 5^2 \\times \\dfrac{2\\pi}{3}",
          "explanation": "Putting $r = 5$ and $\\theta = \\dfrac{2\\pi}{3}$ into the formula sets up the arithmetic. Squaring the radius before multiplying keeps the numbers manageable.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the sector area",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}\\times 25 \\times \\dfrac{2\\pi}{3} = \\dfrac{25\\pi}{3}",
          "explanation": "The factor of $\\tfrac{1}{2}$ and the $2$ in $\\dfrac{2\\pi}{3}$ cancel, leaving $25 \\times \\dfrac{\\pi}{3}$. Keeping $\\pi$ symbolic preserves the exact form the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the triangle area formula",
          "workingLatex": "A_{\\triangle} = \\tfrac{1}{2} r^2 \\sin\\theta",
          "explanation": "The triangle has two sides equal to the radius with the angle $\\theta$ between them, so the $\\tfrac{1}{2}ab\\sin C$ rule becomes $\\tfrac{1}{2}r^2\\sin\\theta$. This is the area we must subtract.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the triangle formula",
          "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}\\times 25 \\times \\sin\\dfrac{2\\pi}{3}",
          "explanation": "Using the same radius, the only new ingredient is $\\sin\\dfrac{2\\pi}{3}$. Because the answer must be exact, we replace this sine with its surd value rather than a decimal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the exact value of the sine",
          "workingLatex": "\\sin\\dfrac{2\\pi}{3} = \\dfrac{\\sqrt{3}}{2}",
          "explanation": "The angle $\\dfrac{2\\pi}{3}$ is $120^\\circ$, which sits in the second quadrant where sine is positive. Its reference angle is $\\dfrac{\\pi}{3}$, and $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the triangle area",
          "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}\\times 25 \\times \\dfrac{\\sqrt{3}}{2} = \\dfrac{25\\sqrt{3}}{4}",
          "explanation": "Multiplying the three factors and combining the two denominators of $2$ gives a $4$ underneath. The exact triangle area is therefore $\\dfrac{25\\sqrt{3}}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine sector and triangle",
          "workingLatex": "A_{\\text{segment}} = \\dfrac{25\\pi}{3} - \\dfrac{25\\sqrt{3}}{4}",
          "explanation": "Subtracting the triangle from the sector gives the segment. The two terms cannot be combined because one carries $\\pi$ and the other a surd, so this difference is the exact area.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm with the combined segment formula",
          "workingLatex": "A_{\\text{segment}} = \\tfrac{1}{2} r^2(\\theta - \\sin\\theta)",
          "explanation": "Sector minus triangle can be written in one line as $\\tfrac{1}{2}r^2(\\theta - \\sin\\theta)$. Recognising this compact formula is a good way to check the working.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the combined formula gives the same expression",
          "workingLatex": "\\tfrac{1}{2}\\times 25\\left(\\dfrac{2\\pi}{3} - \\dfrac{\\sqrt{3}}{2}\\right) = \\dfrac{25\\pi}{3} - \\dfrac{25\\sqrt{3}}{4}",
          "explanation": "Expanding the bracket reproduces the two terms found earlier, confirming that no arithmetic slipped. The independent route agreeing gives confidence in the exact answer.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense-check with a decimal estimate",
          "workingLatex": "\\dfrac{25\\pi}{3} - \\dfrac{25\\sqrt{3}}{4} \\approx 26.18 - 10.83 = 15.35",
          "explanation": "A rough decimal value of about $15.4\\text{ cm}^2$ is positive and smaller than the full sector area of about $26\\text{ cm}^2$, which is exactly what we expect for a segment.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the exact area",
          "workingLatex": "A_{\\text{segment}} = \\dfrac{25\\pi}{3} - \\dfrac{25\\sqrt{3}}{4}",
          "explanation": "This is the required exact area of the minor segment, measured in square centimetres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = \\dfrac{25\\pi}{3} - \\dfrac{25\\sqrt{3}}{4}\\text{ cm}^2$"
    }
  },
  {
    "id": "al.y2.pure.radians.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["radians", "segment area", "exact form"],
    "questionText": "A chord of a circle of radius $12\\text{ cm}$ subtends an angle of $\\dfrac{\\pi}{6}$ radians at the centre. Find the exact area of the minor segment.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the segment as sector minus triangle",
          "workingLatex": "A_{\\text{segment}} = A_{\\text{sector}} - A_{\\triangle}",
          "explanation": "The minor segment lies between the chord and its arc. Taking the sector (the whole slice) and removing the triangle formed by the two radii and the chord leaves precisely that region.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known quantities",
          "workingLatex": "r = 12, \\quad \\theta = \\dfrac{\\pi}{6}",
          "explanation": "Recording the radius and the radian angle first makes the substitutions tidy. The angle is already in radians, so the radian area formulas apply directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the sector area formula",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "In radians a sector's area is $\\tfrac{1}{2}r^2\\theta$, a direct fraction of the whole circle set by how large $\\theta$ is compared with a full turn.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the sector formula",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}\\times 12^2 \\times \\dfrac{\\pi}{6}",
          "explanation": "Inserting $r = 12$ and $\\theta = \\dfrac{\\pi}{6}$ prepares the calculation. Squaring the radius first gives $144$, which shares a convenient factor with the $6$ in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the sector area",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}\\times 144 \\times \\dfrac{\\pi}{6} = 12\\pi",
          "explanation": "Half of $144$ is $72$, and $72$ divided by $6$ is $12$, so the sector area is the exact value $12\\pi$. Keeping $\\pi$ symbolic maintains the exact form.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Recall the triangle area formula",
          "workingLatex": "A_{\\triangle} = \\tfrac{1}{2} r^2 \\sin\\theta",
          "explanation": "The triangle has two sides equal to the radius enclosing the angle $\\theta$, so $\\tfrac{1}{2}ab\\sin C$ collapses to $\\tfrac{1}{2}r^2\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the triangle formula",
          "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}\\times 144 \\times \\sin\\dfrac{\\pi}{6}",
          "explanation": "The radius is unchanged, so the fresh ingredient is $\\sin\\dfrac{\\pi}{6}$. For an exact answer we use its exact value rather than a rounded decimal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Recall the exact value of the sine",
          "workingLatex": "\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}",
          "explanation": "The angle $\\dfrac{\\pi}{6}$ is $30^\\circ$, one of the standard angles, and $\\sin 30^\\circ = \\dfrac{1}{2}$. This clean value keeps the triangle area exact and simple.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the triangle area",
          "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}\\times 144 \\times \\dfrac{1}{2} = 36",
          "explanation": "Half of $144$ is $72$, and half of that again is $36$. So the triangle occupies exactly $36\\text{ cm}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine sector and triangle",
          "workingLatex": "A_{\\text{segment}} = 12\\pi - 36",
          "explanation": "Subtracting the triangle from the sector gives the segment. One term carries $\\pi$ and the other is a plain number, so the difference $12\\pi - 36$ cannot be simplified further and is the exact area.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm with the combined segment formula",
          "workingLatex": "A_{\\text{segment}} = \\tfrac{1}{2} r^2(\\theta - \\sin\\theta)",
          "explanation": "The compact form $\\tfrac{1}{2}r^2(\\theta - \\sin\\theta)$ packages sector minus triangle into one expression, giving a quick way to verify the result.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the combined formula gives the same expression",
          "workingLatex": "\\tfrac{1}{2}\\times 144\\left(\\dfrac{\\pi}{6} - \\dfrac{1}{2}\\right) = 12\\pi - 36",
          "explanation": "Expanding $72\\left(\\dfrac{\\pi}{6} - \\dfrac{1}{2}\\right)$ gives $12\\pi - 36$, matching the earlier answer and confirming the arithmetic.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense-check with a decimal estimate",
          "workingLatex": "12\\pi - 36 \\approx 37.70 - 36 = 1.70",
          "explanation": "About $1.70\\text{ cm}^2$ is small and positive, which fits a thin segment cut off by a narrow $30^\\circ$ angle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the exact area",
          "workingLatex": "A_{\\text{segment}} = 12\\pi - 36",
          "explanation": "This is the required exact area of the minor segment in square centimetres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = (12\\pi - 36)\\text{ cm}^2$"
    }
  },
  {
    "id": "al.y2.pure.radians.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": ["radians", "trig equation", "solutions"],
    "questionText": "Solve $2\\sin^2\\theta - 1 = 0$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Isolate the squared sine term",
          "workingLatex": "2\\sin^2\\theta = 1",
          "explanation": "Adding $1$ to both sides moves the constant across so the sine term stands alone. Getting $\\sin^2\\theta$ by itself is the first move whenever an equation is quadratic in a single trig function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Solve for sine squared",
          "workingLatex": "\\sin^2\\theta = \\dfrac{1}{2}",
          "explanation": "Dividing both sides by $2$ leaves $\\sin^2\\theta = \\dfrac{1}{2}$. The equation now asks which angles have a sine whose square is one half.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Take the square root of both sides",
          "workingLatex": "\\sin\\theta = \\pm\\dfrac{1}{\\sqrt{2}}",
          "explanation": "Square rooting undoes the square, but because a square hides the sign we must include both the positive and negative roots. Missing the negative root would lose half the solutions.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the value in rationalised form",
          "workingLatex": "\\sin\\theta = \\pm\\dfrac{\\sqrt{2}}{2}",
          "explanation": "Rationalising $\\dfrac{1}{\\sqrt{2}}$ to $\\dfrac{\\sqrt{2}}{2}$ makes the standard angle easy to recognise. This is the sine of $45^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the reference angle",
          "workingLatex": "\\alpha = \\sin^{-1}\\dfrac{1}{\\sqrt{2}} = \\dfrac{\\pi}{4}",
          "explanation": "The reference angle is the acute angle whose sine is $\\dfrac{1}{\\sqrt{2}}$, namely $\\dfrac{\\pi}{4}$. Every solution will be built from this angle placed in the correct quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Consider the positive sine case",
          "workingLatex": "\\sin\\theta = +\\dfrac{1}{\\sqrt{2}} \\ \\Rightarrow\\ \\text{quadrants 1 and 2}",
          "explanation": "Sine is positive in the first and second quadrants, so the two angles with $\\sin\\theta = +\\dfrac{1}{\\sqrt{2}}$ lie there. We locate one in each.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "First quadrant solution",
          "workingLatex": "\\theta = \\dfrac{\\pi}{4}",
          "explanation": "In the first quadrant the angle simply equals the reference angle, giving $\\theta = \\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Second quadrant solution",
          "workingLatex": "\\theta = \\pi - \\dfrac{\\pi}{4} = \\dfrac{3\\pi}{4}",
          "explanation": "In the second quadrant the solution is $\\pi$ minus the reference angle, because sine is symmetric about $\\dfrac{\\pi}{2}$. This gives $\\dfrac{3\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Consider the negative sine case",
          "workingLatex": "\\sin\\theta = -\\dfrac{1}{\\sqrt{2}} \\ \\Rightarrow\\ \\text{quadrants 3 and 4}",
          "explanation": "Sine is negative in the third and fourth quadrants, so the angles with $\\sin\\theta = -\\dfrac{1}{\\sqrt{2}}$ live there. Again the reference angle is $\\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Third quadrant solution",
          "workingLatex": "\\theta = \\pi + \\dfrac{\\pi}{4} = \\dfrac{5\\pi}{4}",
          "explanation": "In the third quadrant we add the reference angle to $\\pi$, giving $\\dfrac{5\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Fourth quadrant solution",
          "workingLatex": "\\theta = 2\\pi - \\dfrac{\\pi}{4} = \\dfrac{7\\pi}{4}",
          "explanation": "In the fourth quadrant we subtract the reference angle from a full turn, giving $\\dfrac{7\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check all solutions lie in the interval",
          "workingLatex": "\\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4},\\ \\dfrac{5\\pi}{4},\\ \\dfrac{7\\pi}{4} \\in [0, 2\\pi]",
          "explanation": "Every value is between $0$ and $2\\pi$, so all four are valid. The four solutions are evenly spaced by $\\dfrac{\\pi}{2}$, which is the symmetry we expect from a $\\sin^2$ equation.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a decimal check",
          "workingLatex": "\\sin\\dfrac{\\pi}{4} \\approx 0.707, \\quad (0.707)^2 \\approx 0.5",
          "explanation": "Squaring the sine of each solution returns $\\tfrac{1}{2}$, confirming $2\\sin^2\\theta - 1 = 0$ holds at every angle found.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the full solution set",
          "workingLatex": "\\theta = \\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4},\\ \\dfrac{5\\pi}{4},\\ \\dfrac{7\\pi}{4}",
          "explanation": "These four angles are all the solutions in the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{4},\\ \\dfrac{3\\pi}{4},\\ \\dfrac{5\\pi}{4},\\ \\dfrac{7\\pi}{4}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": ["radians", "trig equation", "solutions"],
    "questionText": "Solve $\\tan^2\\theta = 3$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the equation is quadratic in tangent",
          "workingLatex": "\\tan^2\\theta = 3",
          "explanation": "The unknown appears only as $\\tan^2\\theta$, so the equation is quadratic in $\\tan\\theta$. Taking a square root will reduce it to two ordinary tangent equations.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Take the square root of both sides",
          "workingLatex": "\\tan\\theta = \\pm\\sqrt{3}",
          "explanation": "Square rooting removes the square but introduces both signs, because a positive square can come from a positive or a negative value. Both branches must be solved.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the reference angle",
          "workingLatex": "\\alpha = \\tan^{-1}\\sqrt{3} = \\dfrac{\\pi}{3}",
          "explanation": "The acute angle whose tangent is $\\sqrt{3}$ is $\\dfrac{\\pi}{3}$, a standard angle. All solutions are built from this reference angle placed in the right quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider the positive tangent case",
          "workingLatex": "\\tan\\theta = +\\sqrt{3} \\ \\Rightarrow\\ \\text{quadrants 1 and 3}",
          "explanation": "Tangent is positive in the first and third quadrants, so the branch $\\tan\\theta = +\\sqrt{3}$ produces one angle in each of those quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "First quadrant solution",
          "workingLatex": "\\theta = \\dfrac{\\pi}{3}",
          "explanation": "In the first quadrant the solution is just the reference angle, $\\dfrac{\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Third quadrant solution",
          "workingLatex": "\\theta = \\pi + \\dfrac{\\pi}{3} = \\dfrac{4\\pi}{3}",
          "explanation": "Tangent repeats every $\\pi$, so adding $\\pi$ to the first-quadrant solution gives the third-quadrant one, $\\dfrac{4\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Consider the negative tangent case",
          "workingLatex": "\\tan\\theta = -\\sqrt{3} \\ \\Rightarrow\\ \\text{quadrants 2 and 4}",
          "explanation": "Tangent is negative in the second and fourth quadrants, so the branch $\\tan\\theta = -\\sqrt{3}$ gives one angle in each of those.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Second quadrant solution",
          "workingLatex": "\\theta = \\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}",
          "explanation": "In the second quadrant the solution is $\\pi$ minus the reference angle, giving $\\dfrac{2\\pi}{3}$, where the tangent is indeed negative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Fourth quadrant solution",
          "workingLatex": "\\theta = 2\\pi - \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{3}",
          "explanation": "In the fourth quadrant we subtract the reference angle from a full turn, giving $\\dfrac{5\\pi}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Collect the solutions in order",
          "workingLatex": "\\theta = \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ \\dfrac{5\\pi}{3}",
          "explanation": "Listing the four angles in increasing order makes the pattern clear and helps avoid missing or repeating a value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the period structure",
          "workingLatex": "\\dfrac{4\\pi}{3} = \\dfrac{\\pi}{3} + \\pi, \\quad \\dfrac{5\\pi}{3} = \\dfrac{2\\pi}{3} + \\pi",
          "explanation": "Because $\\tan$ has period $\\pi$, each solution has a partner exactly $\\pi$ further on. Seeing this confirms all four angles belong to the same two tangent values.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check all solutions lie in the interval",
          "workingLatex": "\\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ \\dfrac{5\\pi}{3} \\in [0, 2\\pi]",
          "explanation": "Each value sits between $0$ and $2\\pi$, so all four are valid solutions within the required range.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify a decimal check",
          "workingLatex": "\\tan\\dfrac{\\pi}{3} \\approx 1.732, \\quad (1.732)^2 \\approx 3",
          "explanation": "Squaring the tangent of any solution returns $3$, confirming that $\\tan^2\\theta = 3$ holds at every angle found.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the full solution set",
          "workingLatex": "\\theta = \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ \\dfrac{5\\pi}{3}",
          "explanation": "These four angles are all the solutions in the given interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{3},\\ \\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3},\\ \\dfrac{5\\pi}{3}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "solutions",
    "tags": ["radians", "trig equation", "solutions"],
    "questionText": "Solve $\\sin\\theta = \\cos\\theta$ for $0 \\le \\theta \\le 2\\pi$, giving your answers in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide on a strategy",
          "workingLatex": "\\sin\\theta = \\cos\\theta",
          "explanation": "The equation compares sine and cosine directly. Dividing through by $\\cos\\theta$ turns the comparison into a single tangent equation, which is much easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Check dividing by cosine is safe",
          "workingLatex": "\\cos\\theta = 0 \\ \\Rightarrow\\ \\sin\\theta = \\pm 1 \\ne 0",
          "explanation": "Before dividing by $\\cos\\theta$ we confirm it is not zero at any solution. If $\\cos\\theta = 0$ then $\\sin\\theta = \\pm 1$, so the two sides could never be equal there, and no solutions are lost by dividing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by cosine",
          "workingLatex": "\\dfrac{\\sin\\theta}{\\cos\\theta} = 1",
          "explanation": "Dividing each side by $\\cos\\theta$ leaves the ratio of sine to cosine on the left, which is exactly the definition of tangent.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite as a tangent equation",
          "workingLatex": "\\tan\\theta = 1",
          "explanation": "Since $\\dfrac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta$, the equation becomes $\\tan\\theta = 1$. We now find every angle whose tangent equals $1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the reference angle",
          "workingLatex": "\\alpha = \\tan^{-1}(1) = \\dfrac{\\pi}{4}",
          "explanation": "The acute angle with tangent $1$ is $\\dfrac{\\pi}{4}$, the standard $45^\\circ$ angle where sine and cosine are equal. This is the building block for all solutions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify where tangent is positive",
          "workingLatex": "\\tan\\theta > 0 \\ \\Rightarrow\\ \\text{quadrants 1 and 3}",
          "explanation": "A tangent of $+1$ is positive, and tangent is positive in the first and third quadrants. So one solution lies in each of those two quadrants.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "First quadrant solution",
          "workingLatex": "\\theta = \\dfrac{\\pi}{4}",
          "explanation": "In the first quadrant the angle equals the reference angle, giving $\\theta = \\dfrac{\\pi}{4}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Third quadrant solution",
          "workingLatex": "\\theta = \\pi + \\dfrac{\\pi}{4} = \\dfrac{5\\pi}{4}",
          "explanation": "Tangent has period $\\pi$, so adding $\\pi$ to the first solution gives the second, $\\dfrac{5\\pi}{4}$, which lies in the third quadrant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the interval",
          "workingLatex": "\\dfrac{\\pi}{4},\\ \\dfrac{5\\pi}{4} \\in [0, 2\\pi]",
          "explanation": "Both angles fall within $0$ to $2\\pi$, so both are valid. Adding another $\\pi$ would give $\\dfrac{9\\pi}{4}$, which is outside the range, so there are no more.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify the first solution in the original equation",
          "workingLatex": "\\sin\\dfrac{\\pi}{4} = \\cos\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}",
          "explanation": "At $\\dfrac{\\pi}{4}$ both sine and cosine equal $\\dfrac{\\sqrt{2}}{2}$, so the original equation $\\sin\\theta = \\cos\\theta$ is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the second solution in the original equation",
          "workingLatex": "\\sin\\dfrac{5\\pi}{4} = \\cos\\dfrac{5\\pi}{4} = -\\dfrac{\\sqrt{2}}{2}",
          "explanation": "At $\\dfrac{5\\pi}{4}$ both sine and cosine equal $-\\dfrac{\\sqrt{2}}{2}$. They are still equal, confirming this solution genuinely works.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm no solutions were excluded",
          "workingLatex": "\\theta = \\tfrac{\\pi}{2},\\ \\tfrac{3\\pi}{2}: \\ \\sin\\theta = \\pm 1,\\ \\cos\\theta = 0",
          "explanation": "The only angles where dividing by cosine was forbidden are $\\dfrac{\\pi}{2}$ and $\\dfrac{3\\pi}{2}$, and there sine is $\\pm 1$ while cosine is $0$, so they are not solutions. Nothing was lost.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the full solution set",
          "workingLatex": "\\theta = \\dfrac{\\pi}{4},\\ \\dfrac{5\\pi}{4}",
          "explanation": "These two angles are all the solutions of $\\sin\\theta = \\cos\\theta$ in the required range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\theta = \\dfrac{\\pi}{4},\\ \\dfrac{5\\pi}{4}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["radians", "annular sector", "area"],
    "questionText": "A windscreen wiper has a rubber blade attached to an arm. The blade runs from a point $8\\text{ cm}$ from the pivot to a point $25\\text{ cm}$ from the pivot, and the arm sweeps through an angle of $2.4$ radians. Find the exact area of glass cleaned by the blade.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Picture the region swept out",
          "workingLatex": "A_{\\text{cleaned}} = A_{\\text{large sector}} - A_{\\text{small sector}}",
          "explanation": "As the arm turns, the outer tip traces a large sector and the inner end traces a smaller sector. The glass actually wiped is the ring-shaped band between them, found by subtracting the small sector from the large one.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the sector area formula",
          "workingLatex": "A = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "Both sectors share the same sweep angle $\\theta$ in radians, so each has area $\\tfrac{1}{2}r^2\\theta$ using its own radius. Radian measure lets us use this formula directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine into a single expression",
          "workingLatex": "A_{\\text{cleaned}} = \\tfrac{1}{2}R^2\\theta - \\tfrac{1}{2}r^2\\theta = \\tfrac{1}{2}(R^2 - r^2)\\theta",
          "explanation": "Since both sectors use the same angle, we can factor out $\\tfrac{1}{2}\\theta$, leaving the difference of the squared radii. This one formula handles the whole band at once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "List the known values",
          "workingLatex": "R = 25, \\quad r = 8, \\quad \\theta = 2.4",
          "explanation": "The outer radius is $25\\text{ cm}$, the inner radius is $8\\text{ cm}$, and the sweep angle is $2.4$ radians. Recording them clearly avoids mixing up which radius is which.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Square the outer radius",
          "workingLatex": "R^2 = 25^2 = 625",
          "explanation": "The formula needs the squares of the radii, so we compute $25^2 = 625$ first.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Square the inner radius",
          "workingLatex": "r^2 = 8^2 = 64",
          "explanation": "Similarly $8^2 = 64$. Having both squares ready lets us find their difference cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the difference of the squares",
          "workingLatex": "R^2 - r^2 = 625 - 64 = 561",
          "explanation": "Subtracting gives $561$. This represents the effective span of the band once squared radii are accounted for.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the formula",
          "workingLatex": "A_{\\text{cleaned}} = \\tfrac{1}{2}\\times 561 \\times 2.4",
          "explanation": "Placing $561$ and the angle $2.4$ into $\\tfrac{1}{2}(R^2 - r^2)\\theta$ gives the arithmetic for the area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Halve the difference of squares",
          "workingLatex": "\\tfrac{1}{2}\\times 561 = 280.5",
          "explanation": "Doing the $\\tfrac{1}{2}$ first gives $280.5$, a tidy intermediate value before multiplying by the angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Multiply by the angle",
          "workingLatex": "280.5 \\times 2.4 = 673.2",
          "explanation": "Multiplying $280.5$ by $2.4$ gives $673.2$. Because the angle was given as a plain radian number, no $\\pi$ appears and this value is exact.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note why the answer is exact",
          "workingLatex": "\\theta = 2.4 \\text{ (radians, no } \\pi\\text{)}",
          "explanation": "The angle is a terminating decimal number of radians rather than a multiple of $\\pi$, so the product terminates exactly at $673.2$ with no rounding.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Cross-check via the two separate sectors",
          "workingLatex": "\\tfrac{1}{2}\\times 625 \\times 2.4 = 750, \\quad \\tfrac{1}{2}\\times 64 \\times 2.4 = 76.8",
          "explanation": "Computing each sector on its own gives $750\\text{ cm}^2$ and $76.8\\text{ cm}^2$. This independent route lets us verify the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the difference matches",
          "workingLatex": "750 - 76.8 = 673.2",
          "explanation": "The two separate sectors differ by exactly $673.2$, matching the earlier result and confirming the working.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the area with units",
          "workingLatex": "A_{\\text{cleaned}} = 673.2 \\text{ cm}^2",
          "explanation": "The glass cleaned by the blade has area exactly $673.2\\text{ cm}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A = 673.2\\text{ cm}^2$"
    }
  },
  {
    "id": "al.y2.pure.radians.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["radians", "segment perimeter", "exact form"],
    "questionText": "A chord of a circle of radius $10\\text{ cm}$ subtends an angle of $\\dfrac{\\pi}{3}$ radians at the centre. Find the exact perimeter of the minor segment (the arc together with the chord).",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Describe the perimeter of the segment",
          "workingLatex": "P = \\text{arc} + \\text{chord}",
          "explanation": "The minor segment is bounded by two curves: the arc along the circle and the straight chord across it. Its perimeter is simply the sum of the arc length and the chord length.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known quantities",
          "workingLatex": "r = 10, \\quad \\theta = \\dfrac{\\pi}{3}",
          "explanation": "The radius is $10\\text{ cm}$ and the central angle is $\\dfrac{\\pi}{3}$ radians. Both the arc and chord formulas use these values.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "In radians the arc length is just radius times angle, $s = r\\theta$. This clean relationship is one of the main reasons radians are used.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the arc length",
          "workingLatex": "s = 10 \\times \\dfrac{\\pi}{3} = \\dfrac{10\\pi}{3}",
          "explanation": "Multiplying $10$ by $\\dfrac{\\pi}{3}$ gives $\\dfrac{10\\pi}{3}$. Keeping $\\pi$ symbolic preserves the exact form the question requires.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the chord length formula",
          "workingLatex": "\\text{chord} = 2r\\sin\\dfrac{\\theta}{2}",
          "explanation": "Dropping a line from the centre to the midpoint of the chord splits the isosceles triangle into two right triangles, each with angle $\\dfrac{\\theta}{2}$. The chord is twice $r\\sin\\dfrac{\\theta}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve the central angle",
          "workingLatex": "\\dfrac{\\theta}{2} = \\dfrac{1}{2}\\times\\dfrac{\\pi}{3} = \\dfrac{\\pi}{6}",
          "explanation": "Half of $\\dfrac{\\pi}{3}$ is $\\dfrac{\\pi}{6}$, a standard angle whose sine we know exactly. This keeps the chord length exact.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute into the chord formula",
          "workingLatex": "\\text{chord} = 2\\times 10 \\times \\sin\\dfrac{\\pi}{6}",
          "explanation": "Inserting $r = 10$ and the half-angle $\\dfrac{\\pi}{6}$ sets up the chord calculation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the exact value of the sine",
          "workingLatex": "\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}",
          "explanation": "The angle $\\dfrac{\\pi}{6}$ is $30^\\circ$, and $\\sin 30^\\circ = \\dfrac{1}{2}$. This clean value makes the chord a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the chord length",
          "workingLatex": "\\text{chord} = 20 \\times \\dfrac{1}{2} = 10",
          "explanation": "Multiplying gives a chord of exactly $10\\text{ cm}$. Interestingly the chord equals the radius, which is a hallmark of a $60^\\circ$ central angle forming an equilateral triangle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Add arc and chord",
          "workingLatex": "P = \\dfrac{10\\pi}{3} + 10",
          "explanation": "The perimeter is the arc plus the chord. One term carries $\\pi$ and the other is a plain number, so they stay separate in the exact expression.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the exact perimeter tidily",
          "workingLatex": "P = 10 + \\dfrac{10\\pi}{3}",
          "explanation": "Placing the whole number first gives a clean exact answer of $10 + \\dfrac{10\\pi}{3}$ centimetres.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sense-check the arc against the chord",
          "workingLatex": "\\dfrac{10\\pi}{3} \\approx 10.47 > 10",
          "explanation": "The arc should be slightly longer than the chord because a curved path between two points beats the straight line. The values $10.47$ versus $10$ confirm this.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Estimate the total as a decimal",
          "workingLatex": "P \\approx 10 + 10.47 = 20.47",
          "explanation": "A decimal value of about $20.5\\text{ cm}$ gives a feel for the size and confirms the exact answer is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the exact perimeter",
          "workingLatex": "P = \\left(10 + \\dfrac{10\\pi}{3}\\right)\\text{ cm}",
          "explanation": "This is the exact perimeter of the minor segment in centimetres.",
          "diagram": null
        }
      ],
      "finalAnswer": "$P = \\left(10 + \\dfrac{10\\pi}{3}\\right)\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["radians", "sector area", "segment area"],
    "questionText": "A sector $OAB$ has radius $10\\text{ cm}$ and central angle $1.2$ radians. Find (a) the area of the sector, (b) the area of triangle $OAB$, and (c) the area of the segment, giving answers to $3$ significant figures where they are not exact.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the three quantities required",
          "workingLatex": "\\text{find: } A_{\\text{sector}}, \\ A_{\\triangle}, \\ A_{\\text{segment}}",
          "explanation": "The question breaks into three linked parts. Finding the sector and triangle first makes part (c) a simple subtraction, since the segment is what remains after removing the triangle from the sector.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "r = 10, \\quad \\theta = 1.2",
          "explanation": "The radius is $10\\text{ cm}$ and the angle is $1.2$ radians. Because the angle is already in radians, every formula can be applied directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): recall the sector area formula",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "A sector's area in radians is $\\tfrac{1}{2}r^2\\theta$, the fraction of the full circle set by the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute for the sector",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}\\times 10^2 \\times 1.2",
          "explanation": "Inserting $r = 10$ and $\\theta = 1.2$ gives the arithmetic. Squaring the radius first produces $100$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the sector area",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}\\times 100 \\times 1.2 = 60",
          "explanation": "Half of $100$ is $50$, and $50 \\times 1.2 = 60$. The sector area is exactly $60\\text{ cm}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): recall the triangle area formula",
          "workingLatex": "A_{\\triangle} = \\tfrac{1}{2} r^2 \\sin\\theta",
          "explanation": "Triangle $OAB$ has two sides of length $r$ with the angle $\\theta$ between them, so its area is $\\tfrac{1}{2}r^2\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute for the triangle",
          "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}\\times 100 \\times \\sin 1.2",
          "explanation": "Using the same radius, the fresh ingredient is $\\sin 1.2$ where the angle is in radians. We must set the calculator to radian mode.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the sine",
          "workingLatex": "\\sin 1.2 = 0.932039\\ldots",
          "explanation": "In radians $\\sin 1.2 \\approx 0.932039$. Carrying several decimals now prevents rounding error from creeping into the final answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the triangle area",
          "workingLatex": "A_{\\triangle} = 50 \\times 0.932039 = 46.602",
          "explanation": "Multiplying $50$ by $0.932039$ gives $46.602$, so the triangle area is about $46.6\\text{ cm}^2$ to three significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Part (c): express the segment",
          "workingLatex": "A_{\\text{segment}} = A_{\\text{sector}} - A_{\\triangle}",
          "explanation": "The segment is the region between the chord and the arc, obtained by removing the triangle from the sector.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute the two areas",
          "workingLatex": "A_{\\text{segment}} = 60 - 46.602",
          "explanation": "Using the exact sector area and the unrounded triangle area keeps the subtraction accurate.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the segment area",
          "workingLatex": "A_{\\text{segment}} = 13.398 \\approx 13.4",
          "explanation": "The difference is $13.398$, so the segment area is about $13.4\\text{ cm}^2$ to three significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense-check the results",
          "workingLatex": "13.4 < 46.6 < 60",
          "explanation": "The segment is smaller than the triangle, which is smaller than the whole sector, exactly the ordering we expect. This consistency confirms the answers.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State all three answers",
          "workingLatex": "A_{\\text{sector}} = 60, \\quad A_{\\triangle} = 46.6, \\quad A_{\\text{segment}} = 13.4",
          "explanation": "The sector is exactly $60\\text{ cm}^2$, the triangle about $46.6\\text{ cm}^2$, and the segment about $13.4\\text{ cm}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A_{\\text{sector}} = 60\\text{ cm}^2,\\ A_{\\triangle} = 46.6\\text{ cm}^2,\\ A_{\\text{segment}} = 13.4\\text{ cm}^2$"
    }
  },
  {
    "id": "al.y2.pure.radians.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["radians", "sector area", "exact form"],
    "questionText": "A circle has radius $8\\text{ cm}$. Two radii are drawn with an angle of $\\dfrac{2\\pi}{5}$ radians between them. Find the exact area of (a) the minor sector and (b) the major sector.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Distinguish the two sectors",
          "workingLatex": "\\theta_{\\text{minor}} = \\dfrac{2\\pi}{5}, \\quad \\theta_{\\text{major}} = 2\\pi - \\dfrac{2\\pi}{5}",
          "explanation": "Two radii cut the circle into two sectors. The minor sector uses the given angle $\\dfrac{2\\pi}{5}$, while the major sector uses the rest of the full turn, $2\\pi - \\dfrac{2\\pi}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the radius",
          "workingLatex": "r = 8",
          "explanation": "Both sectors belong to the same circle of radius $8\\text{ cm}$, so the same radius is used throughout.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Recall the sector area formula",
          "workingLatex": "A = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "In radians a sector's area is $\\tfrac{1}{2}r^2\\theta$. Applying it with each angle gives the two areas.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (a): substitute for the minor sector",
          "workingLatex": "A_{\\text{minor}} = \\tfrac{1}{2}\\times 8^2 \\times \\dfrac{2\\pi}{5}",
          "explanation": "Using $r = 8$ and $\\theta = \\dfrac{2\\pi}{5}$ sets up the minor sector area. Squaring the radius first gives $64$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the minor sector",
          "workingLatex": "A_{\\text{minor}} = \\tfrac{1}{2}\\times 64 \\times \\dfrac{2\\pi}{5} = \\dfrac{64\\pi}{5}",
          "explanation": "Half of $64$ is $32$, and the factor $2$ in $\\dfrac{2\\pi}{5}$ combines to give $\\dfrac{64\\pi}{5}$. Keeping $\\pi$ symbolic gives the exact minor area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (b): find the major angle",
          "workingLatex": "\\theta_{\\text{major}} = 2\\pi - \\dfrac{2\\pi}{5}",
          "explanation": "The major sector spans everything the minor one does not, so its angle is a full turn minus $\\dfrac{2\\pi}{5}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the major angle",
          "workingLatex": "\\theta_{\\text{major}} = \\dfrac{10\\pi}{5} - \\dfrac{2\\pi}{5} = \\dfrac{8\\pi}{5}",
          "explanation": "Writing $2\\pi$ as $\\dfrac{10\\pi}{5}$ gives a common denominator, so the major angle is $\\dfrac{8\\pi}{5}$ radians.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute for the major sector",
          "workingLatex": "A_{\\text{major}} = \\tfrac{1}{2}\\times 64 \\times \\dfrac{8\\pi}{5}",
          "explanation": "Using the same radius with the major angle $\\dfrac{8\\pi}{5}$ sets up the major sector area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the major sector",
          "workingLatex": "A_{\\text{major}} = 32 \\times \\dfrac{8\\pi}{5} = \\dfrac{256\\pi}{5}",
          "explanation": "Multiplying $32$ by $\\dfrac{8\\pi}{5}$ gives $\\dfrac{256\\pi}{5}$, the exact major area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the two areas add to the whole circle",
          "workingLatex": "\\dfrac{64\\pi}{5} + \\dfrac{256\\pi}{5} = \\dfrac{320\\pi}{5} = 64\\pi",
          "explanation": "The minor and major sectors should together fill the circle. Their sum is $64\\pi$, which is a strong check that both parts are correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm against the circle area",
          "workingLatex": "\\pi r^2 = \\pi \\times 8^2 = 64\\pi",
          "explanation": "The whole circle has area $\\pi r^2 = 64\\pi$, exactly matching the sum of the sectors. This confirms the split was consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Estimate the minor sector as a decimal",
          "workingLatex": "\\dfrac{64\\pi}{5} \\approx 40.2",
          "explanation": "The minor sector is about $40.2\\text{ cm}^2$, less than a quarter of the circle, which fits an angle a little larger than $\\dfrac{\\pi}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Estimate the major sector as a decimal",
          "workingLatex": "\\dfrac{256\\pi}{5} \\approx 160.8",
          "explanation": "The major sector is about $160.8\\text{ cm}^2$, four times the minor area, which is consistent with its angle being four times as large.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State both exact areas",
          "workingLatex": "A_{\\text{minor}} = \\dfrac{64\\pi}{5}, \\quad A_{\\text{major}} = \\dfrac{256\\pi}{5}",
          "explanation": "The minor sector has exact area $\\dfrac{64\\pi}{5}\\text{ cm}^2$ and the major sector $\\dfrac{256\\pi}{5}\\text{ cm}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A_{\\text{minor}} = \\dfrac{64\\pi}{5}\\text{ cm}^2,\\ A_{\\text{major}} = \\dfrac{256\\pi}{5}\\text{ cm}^2$"
    }
  },
  {
    "id": "al.y2.pure.radians.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["radians", "arc length", "sector area"],
    "questionText": "An arc of a circle has length $15\\text{ cm}$ and the sector it bounds has area $45\\text{ cm}^2$. Find the radius of the circle and the angle of the sector in radians.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down what is known",
          "workingLatex": "s = 15, \\quad A = 45",
          "explanation": "We are given the arc length and the sector area, and asked for the radius and angle. Choosing a formula that links area to arc length and radius will let us find the radius first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recall the two standard formulas",
          "workingLatex": "s = r\\theta, \\quad A = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "The arc length and sector area both involve $r$ and $\\theta$. Comparing them lets us eliminate $\\theta$ and get a relationship between $A$, $r$ and $s$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Combine to remove the angle",
          "workingLatex": "A = \\tfrac{1}{2} r^2 \\theta = \\tfrac{1}{2} r (r\\theta) = \\tfrac{1}{2} r s",
          "explanation": "Since $r\\theta$ is exactly the arc length $s$, the area can be rewritten as $\\tfrac{1}{2}rs$. This neat form uses only quantities we know together with the unknown radius.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the known values",
          "workingLatex": "45 = \\tfrac{1}{2} \\times r \\times 15",
          "explanation": "Putting $A = 45$ and $s = 15$ into $A = \\tfrac{1}{2}rs$ gives an equation with the radius as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the right-hand side",
          "workingLatex": "45 = 7.5\\,r",
          "explanation": "Half of $15$ is $7.5$, so the equation becomes $45 = 7.5r$. The radius is now one step away.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for the radius",
          "workingLatex": "r = \\dfrac{45}{7.5} = 6",
          "explanation": "Dividing both sides by $7.5$ gives a radius of $6\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Turn to the angle using arc length",
          "workingLatex": "s = r\\theta",
          "explanation": "With the radius known, the arc length formula $s = r\\theta$ gives the angle directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute into the arc formula",
          "workingLatex": "15 = 6\\,\\theta",
          "explanation": "Putting $s = 15$ and $r = 6$ into $s = r\\theta$ leaves an equation for $\\theta$ alone.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the angle",
          "workingLatex": "\\theta = \\dfrac{15}{6} = 2.5",
          "explanation": "Dividing gives $\\theta = 2.5$ radians. Because we used the radian arc formula, the answer is automatically in radians.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the angle is sensible",
          "workingLatex": "0 < 2.5 < 2\\pi \\approx 6.28",
          "explanation": "An angle of $2.5$ radians is less than a full turn, so it is a valid sector angle. It is a little under $\\dfrac{\\pi}{4}$ of a full circle... roughly $143^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify with the area formula",
          "workingLatex": "A = \\tfrac{1}{2} r^2 \\theta = \\tfrac{1}{2}\\times 36 \\times 2.5",
          "explanation": "Substituting the found values back into the original area formula is a reliable independent check.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the area matches",
          "workingLatex": "\\tfrac{1}{2}\\times 36 \\times 2.5 = 18 \\times 2.5 = 45",
          "explanation": "The area comes out to exactly $45\\text{ cm}^2$, matching the given value and confirming both the radius and the angle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify with the arc formula",
          "workingLatex": "s = r\\theta = 6 \\times 2.5 = 15",
          "explanation": "The arc length recomputes to $15\\text{ cm}$, agreeing with the data. Both checks passing gives full confidence.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results",
          "workingLatex": "r = 6, \\quad \\theta = 2.5",
          "explanation": "The circle has radius $6\\text{ cm}$ and the sector angle is $2.5$ radians.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 6\\text{ cm}, \\ \\theta = 2.5\\text{ rad}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["radians", "sector", "quadratic"],
    "questionText": "A sector has perimeter $28\\text{ cm}$ and area $40\\text{ cm}^2$. Find the two possible values of the radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the perimeter of a sector",
          "workingLatex": "P = 2r + r\\theta",
          "explanation": "A sector's boundary is two radii plus the arc. The two radii contribute $2r$ and the arc contributes $r\\theta$, so the perimeter is $2r + r\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area of a sector",
          "workingLatex": "A = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "The area in radians is $\\tfrac{1}{2}r^2\\theta$. Together with the perimeter these give two equations in the two unknowns $r$ and $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the given values",
          "workingLatex": "2r + r\\theta = 28, \\quad \\tfrac{1}{2} r^2 \\theta = 40",
          "explanation": "Inserting $P = 28$ and $A = 40$ gives the system to solve. The plan is to eliminate $\\theta$ and obtain a single equation in $r$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Isolate the arc term from the perimeter",
          "workingLatex": "r\\theta = 28 - 2r",
          "explanation": "Subtracting $2r$ from both sides of the perimeter equation isolates $r\\theta$, the arc length. This is the piece we will substitute into the area equation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rewrite the area using the arc",
          "workingLatex": "\\tfrac{1}{2} r^2 \\theta = \\tfrac{1}{2} r (r\\theta) = 40",
          "explanation": "Writing $r^2\\theta$ as $r$ times $r\\theta$ lets us drop in the expression we just found for $r\\theta$, eliminating $\\theta$ completely.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute for the arc term",
          "workingLatex": "\\tfrac{1}{2} r (28 - 2r) = 40",
          "explanation": "Replacing $r\\theta$ with $28 - 2r$ produces an equation involving only the radius, which will turn out to be a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the bracket",
          "workingLatex": "\\tfrac{1}{2}(28r - 2r^2) = 40",
          "explanation": "Multiplying $r$ through the bracket gives $28r - 2r^2$, still multiplied by the half outside.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Clear the factor of one half",
          "workingLatex": "14r - r^2 = 40",
          "explanation": "Applying the $\\tfrac{1}{2}$ halves each term, giving $14r - r^2 = 40$. The equation is now clearly quadratic in $r$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange into standard form",
          "workingLatex": "r^2 - 14r + 40 = 0",
          "explanation": "Moving everything to one side and writing the $r^2$ term positive gives a standard quadratic ready to factorise.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise the quadratic",
          "workingLatex": "(r - 4)(r - 10) = 0",
          "explanation": "We need two numbers multiplying to $40$ and adding to $14$; these are $4$ and $10$. So the quadratic factorises as $(r-4)(r-10)$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Read off the two radii",
          "workingLatex": "r = 4 \\quad \\text{or} \\quad r = 10",
          "explanation": "Setting each factor to zero gives the two candidate radii, $4\\text{ cm}$ and $10\\text{ cm}$. Both must now be checked for a valid, positive angle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the first radius",
          "workingLatex": "r = 4: \\ r\\theta = 28 - 8 = 20, \\ \\theta = 5, \\ A = \\tfrac{1}{2}(16)(5) = 40",
          "explanation": "For $r = 4$ the angle is $5$ radians and the area recomputes to $40\\text{ cm}^2$. The angle is positive, so this radius is valid.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the second radius",
          "workingLatex": "r = 10: \\ r\\theta = 28 - 20 = 8, \\ \\theta = 0.8, \\ A = \\tfrac{1}{2}(100)(0.8) = 40",
          "explanation": "For $r = 10$ the angle is $0.8$ radians and the area is again $40\\text{ cm}^2$. This angle is also positive, so both radii are genuine solutions.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the two possible radii",
          "workingLatex": "r = 4 \\text{ cm} \\quad \\text{or} \\quad r = 10 \\text{ cm}",
          "explanation": "Both values satisfy the perimeter and area conditions, so the radius is either $4\\text{ cm}$ or $10\\text{ cm}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$r = 4\\text{ cm} \\ \\text{or} \\ r = 10\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "value",
    "tags": ["radians", "segment area", "segment perimeter"],
    "questionText": "A circle centre $O$ has radius $10\\text{ cm}$. Points $A$ and $B$ lie on the circle with angle $AOB = 1.5$ radians. Find (a) the area of the minor segment and (b) the perimeter of the minor segment, giving answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two quantities required",
          "workingLatex": "\\text{find: } A_{\\text{segment}}, \\ P_{\\text{segment}}",
          "explanation": "Part (a) asks for the segment's area and part (b) for its perimeter. These use different formulas, so we treat them separately after noting the shared radius and angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "r = 10, \\quad \\theta = 1.5",
          "explanation": "The radius is $10\\text{ cm}$ and the central angle is $1.5$ radians. All the formulas below use these directly since the angle is in radians.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): recall the segment area formula",
          "workingLatex": "A_{\\text{segment}} = \\tfrac{1}{2} r^2 (\\theta - \\sin\\theta)",
          "explanation": "The segment is the sector minus the triangle, which combines into $\\tfrac{1}{2}r^2(\\theta - \\sin\\theta)$. This single formula is efficient for area calculations.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute into the area formula",
          "workingLatex": "A_{\\text{segment}} = \\tfrac{1}{2}\\times 100 \\times (1.5 - \\sin 1.5)",
          "explanation": "Inserting $r = 10$ and $\\theta = 1.5$ gives $50(1.5 - \\sin 1.5)$. The sine must be evaluated in radian mode.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the sine",
          "workingLatex": "\\sin 1.5 = 0.997495\\ldots",
          "explanation": "In radians $\\sin 1.5 \\approx 0.997495$, close to $1$ because $1.5$ radians is near the peak at $\\dfrac{\\pi}{2} \\approx 1.571$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the bracket",
          "workingLatex": "1.5 - 0.997495 = 0.502505",
          "explanation": "Subtracting inside the bracket gives about $0.502505$. Keeping the extra decimals guards the three-significant-figure answer against rounding drift.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the segment area",
          "workingLatex": "A_{\\text{segment}} = 50 \\times 0.502505 = 25.125 \\approx 25.1",
          "explanation": "Multiplying by $50$ gives $25.125$, so the minor segment area is about $25.1\\text{ cm}^2$ to three significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (b): describe the perimeter",
          "workingLatex": "P_{\\text{segment}} = \\text{arc} + \\text{chord}",
          "explanation": "The segment's boundary is the arc along the circle plus the straight chord $AB$. We find each piece and add them.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the arc length",
          "workingLatex": "s = r\\theta = 10 \\times 1.5 = 15",
          "explanation": "The arc length is radius times angle, giving exactly $15\\text{ cm}$. This is one part of the perimeter.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the chord formula",
          "workingLatex": "\\text{chord} = 2r\\sin\\dfrac{\\theta}{2}",
          "explanation": "Splitting the isosceles triangle $OAB$ down the middle gives two right triangles with half-angle $\\dfrac{\\theta}{2}$, so the chord is $2r\\sin\\dfrac{\\theta}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Substitute into the chord formula",
          "workingLatex": "\\text{chord} = 2 \\times 10 \\times \\sin 0.75",
          "explanation": "Half of $1.5$ is $0.75$, so the chord is $20\\sin 0.75$ with the angle again in radians.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the chord",
          "workingLatex": "\\text{chord} = 20 \\times 0.681639 = 13.633",
          "explanation": "Since $\\sin 0.75 \\approx 0.681639$, the chord is about $13.633\\text{ cm}$. This is the straight side of the segment.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add arc and chord",
          "workingLatex": "P_{\\text{segment}} = 15 + 13.633 = 28.633 \\approx 28.6",
          "explanation": "Summing the arc and chord gives about $28.6\\text{ cm}$ to three significant figures. The arc exceeds the chord, as expected for a curved versus a straight path.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State both answers",
          "workingLatex": "A_{\\text{segment}} \\approx 25.1, \\quad P_{\\text{segment}} \\approx 28.6",
          "explanation": "The minor segment has area about $25.1\\text{ cm}^2$ and perimeter about $28.6\\text{ cm}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A_{\\text{segment}} \\approx 25.1\\text{ cm}^2, \\ P_{\\text{segment}} \\approx 28.6\\text{ cm}$"
    }
  },
  {
    "id": "al.y2.pure.radians.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "value",
    "tags": ["radians", "chord", "segment area"],
    "questionText": "In a sector $OPQ$ of radius $9\\text{ cm}$ the angle $POQ = 0.8$ radians. Find (a) the length of the chord $PQ$ and (b) the area of the segment between the chord $PQ$ and the arc, giving answers to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the two quantities required",
          "workingLatex": "\\text{find: } PQ, \\ A_{\\text{segment}}",
          "explanation": "Part (a) asks for the chord length and part (b) for the segment area. Both use the radius and angle, so we record those before applying each formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "List the known values",
          "workingLatex": "r = 9, \\quad \\theta = 0.8",
          "explanation": "The radius is $9\\text{ cm}$ and the central angle is $0.8$ radians. The small angle suggests both the chord and the segment will be modest in size.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Part (a): write the chord formula",
          "workingLatex": "PQ = 2r\\sin\\dfrac{\\theta}{2}",
          "explanation": "Dropping a perpendicular from $O$ to the midpoint of $PQ$ halves the isosceles triangle, giving two right triangles with half-angle $\\dfrac{\\theta}{2}$. The chord is $2r\\sin\\dfrac{\\theta}{2}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Halve the central angle",
          "workingLatex": "\\dfrac{\\theta}{2} = \\dfrac{0.8}{2} = 0.4",
          "explanation": "Half of $0.8$ is $0.4$ radians, the angle needed inside the sine for the chord formula.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute into the chord formula",
          "workingLatex": "PQ = 2 \\times 9 \\times \\sin 0.4",
          "explanation": "Inserting $r = 9$ and the half-angle $0.4$ gives $18\\sin 0.4$, with the angle in radians.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the sine",
          "workingLatex": "\\sin 0.4 = 0.389418\\ldots",
          "explanation": "In radians $\\sin 0.4 \\approx 0.389418$. Keeping several decimals protects the final three-significant-figure value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the chord length",
          "workingLatex": "PQ = 18 \\times 0.389418 = 7.010 \\approx 7.01",
          "explanation": "Multiplying gives about $7.010$, so the chord $PQ$ is $7.01\\text{ cm}$ to three significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (b): write the segment area formula",
          "workingLatex": "A_{\\text{segment}} = \\tfrac{1}{2} r^2 (\\theta - \\sin\\theta)",
          "explanation": "The segment area is the sector minus the triangle, packaged as $\\tfrac{1}{2}r^2(\\theta - \\sin\\theta)$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute into the area formula",
          "workingLatex": "A_{\\text{segment}} = \\tfrac{1}{2}\\times 81 \\times (0.8 - \\sin 0.8)",
          "explanation": "Using $r^2 = 81$ and $\\theta = 0.8$ gives $40.5(0.8 - \\sin 0.8)$. Note this uses the full angle $0.8$, not the half-angle from part (a).",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the sine",
          "workingLatex": "\\sin 0.8 = 0.717356\\ldots",
          "explanation": "In radians $\\sin 0.8 \\approx 0.717356$. This is the value subtracted from the angle inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Simplify the bracket",
          "workingLatex": "0.8 - 0.717356 = 0.082644",
          "explanation": "The bracket is only about $0.082644$, small because the angle is modest, so the segment will be thin.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the segment area",
          "workingLatex": "A_{\\text{segment}} = 40.5 \\times 0.082644 = 3.347 \\approx 3.35",
          "explanation": "Multiplying by $40.5$ gives about $3.347$, so the segment area is $3.35\\text{ cm}^2$ to three significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sense-check the size",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}\\times 81 \\times 0.8 = 32.4",
          "explanation": "The full sector is about $32.4\\text{ cm}^2$, and a small segment of only $3.35\\text{ cm}^2$ is a sensible sliver of that for such a modest angle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State both answers",
          "workingLatex": "PQ \\approx 7.01, \\quad A_{\\text{segment}} \\approx 3.35",
          "explanation": "The chord $PQ$ is about $7.01\\text{ cm}$ and the segment area is about $3.35\\text{ cm}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$PQ \\approx 7.01\\text{ cm}, \\ A_{\\text{segment}} \\approx 3.35\\text{ cm}^2$"
    }
  },
  {
    "id": "al.y2.pure.radians.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Radians, arcs and sectors",
    "subtopicId": "al.y2.pure.radians",
    "difficulty": "Hard",
    "marks": 10,
    "answerType": "value",
    "tags": ["radians", "arc length", "sector area", "segment area"],
    "questionText": "A sector $OAB$ has radius $8\\text{ cm}$ and central angle $2.1$ radians. Find (a) the arc length $AB$, (b) the perimeter of the sector, (c) the area of the sector, (d) the area of triangle $OAB$, and (e) the area of the segment, giving answers to $3$ significant figures where they are not exact.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known values",
          "workingLatex": "r = 8, \\quad \\theta = 2.1",
          "explanation": "The radius is $8\\text{ cm}$ and the angle is $2.1$ radians. Every part of this question flows from these two numbers, so it helps to keep them in view throughout.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Part (a): recall the arc length formula",
          "workingLatex": "s = r\\theta",
          "explanation": "In radians the arc length is simply radius times angle. This is the starting point and feeds into the perimeter as well.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Compute the arc length",
          "workingLatex": "s = 8 \\times 2.1 = 16.8",
          "explanation": "Multiplying $8$ by $2.1$ gives an arc length of exactly $16.8\\text{ cm}$. No rounding is needed here.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Part (b): describe the perimeter",
          "workingLatex": "P = 2r + s",
          "explanation": "The sector's boundary is the two straight radii plus the curved arc. So the perimeter is $2r$ added to the arc length found above.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the perimeter",
          "workingLatex": "P = 2(8) + 16.8 = 16 + 16.8 = 32.8",
          "explanation": "The two radii contribute $16\\text{ cm}$, and adding the arc gives a perimeter of exactly $32.8\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Part (c): recall the sector area formula",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2} r^2 \\theta",
          "explanation": "A sector's area in radians is $\\tfrac{1}{2}r^2\\theta$, the portion of the whole circle marked out by the angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the sector area",
          "workingLatex": "A_{\\text{sector}} = \\tfrac{1}{2}\\times 64 \\times 2.1 = 67.2",
          "explanation": "Half of $64$ is $32$, and $32 \\times 2.1 = 67.2$. The sector area is exactly $67.2\\text{ cm}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Part (d): recall the triangle area formula",
          "workingLatex": "A_{\\triangle} = \\tfrac{1}{2} r^2 \\sin\\theta",
          "explanation": "Triangle $OAB$ has two sides of length $r$ enclosing the angle $\\theta$, so its area is $\\tfrac{1}{2}r^2\\sin\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute for the triangle",
          "workingLatex": "A_{\\triangle} = \\tfrac{1}{2}\\times 64 \\times \\sin 2.1",
          "explanation": "Using the same radius, the new ingredient is $\\sin 2.1$ with the angle in radians. The calculator must be in radian mode.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the sine",
          "workingLatex": "\\sin 2.1 = 0.863209\\ldots",
          "explanation": "In radians $\\sin 2.1 \\approx 0.863209$. The angle $2.1$ is past the peak at $\\dfrac{\\pi}{2}$ but sine is still positive, as it should be below $\\pi$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Compute the triangle area",
          "workingLatex": "A_{\\triangle} = 32 \\times 0.863209 = 27.623 \\approx 27.6",
          "explanation": "Multiplying $32$ by $0.863209$ gives $27.623$, so the triangle area is about $27.6\\text{ cm}^2$ to three significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Part (e): express the segment",
          "workingLatex": "A_{\\text{segment}} = A_{\\text{sector}} - A_{\\triangle}",
          "explanation": "The segment is what is left when the triangle is removed from the sector, so we subtract the two areas found above.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the segment area",
          "workingLatex": "A_{\\text{segment}} = 67.2 - 27.623 = 39.577 \\approx 39.6",
          "explanation": "Subtracting gives $39.577$, so the segment area is about $39.6\\text{ cm}^2$. Using the unrounded triangle value keeps this accurate.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sense-check the parts fit together",
          "workingLatex": "A_{\\triangle} + A_{\\text{segment}} = 27.6 + 39.6 = 67.2 = A_{\\text{sector}}",
          "explanation": "The triangle and the segment should add back up to the sector, and they do. This consistency check confirms parts (c), (d) and (e) all agree.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State all five answers",
          "workingLatex": "s = 16.8, \\ P = 32.8, \\ A_{\\text{sector}} = 67.2, \\ A_{\\triangle} = 27.6, \\ A_{\\text{segment}} = 39.6",
          "explanation": "The arc is $16.8\\text{ cm}$, the perimeter $32.8\\text{ cm}$, the sector area $67.2\\text{ cm}^2$, the triangle area about $27.6\\text{ cm}^2$, and the segment area about $39.6\\text{ cm}^2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$s = 16.8\\text{ cm}, \\ P = 32.8\\text{ cm}, \\ A_{\\text{sector}} = 67.2\\text{ cm}^2, \\ A_{\\triangle} = 27.6\\text{ cm}^2, \\ A_{\\text{segment}} = 39.6\\text{ cm}^2$"
    }
  },
];
