import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y2.pure.functions.q001",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["functions", "function notation", "evaluating functions"],
    "questionText": "The function $f$ is defined by $f(x) = 3x - 5$. Find $f(4)$ and $f(-2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the function notation",
          "workingLatex": "f(x)=3x-5",
          "explanation": "The notation $f(x)$ is a rule: it tells you to take whatever number goes inside the brackets, multiply it by $3$, then subtract $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute x=4 into the rule",
          "workingLatex": "f(4)=3(4)-5",
          "explanation": "To find $f(4)$ we simply replace every $x$ in the rule with the input $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f(4)",
          "workingLatex": "f(4)=12-5=7",
          "explanation": "Working left to right, $3\\times 4=12$ and then $12-5=7$, so the output is $7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute x=-2 into the rule",
          "workingLatex": "f(-2)=3(-2)-5",
          "explanation": "Now replace every $x$ with $-2$; keeping the brackets around $-2$ helps avoid sign slips.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate f(-2)",
          "workingLatex": "f(-2)=-6-5=-11",
          "explanation": "Since $3\\times(-2)=-6$, subtracting a further $5$ gives $-11$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State both outputs",
          "workingLatex": "f(4)=7,\\quad f(-2)=-11",
          "explanation": "Each input has produced exactly one output, which is what a function guarantees.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(4)=7,\\ f(-2)=-11$"
    }
  },
  {
    "id": "al.y2.pure.functions.q002",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": ["functions", "domain and range", "range"],
    "questionText": "The function $f$ is defined by $f(x) = x^2 + 1$ for all real $x$. State the range of $f$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall a key fact about squares",
          "workingLatex": "x^2\\geq 0",
          "explanation": "Squaring any real number can never give a negative result, so $x^2$ is always zero or positive.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Locate the smallest value of x^2",
          "workingLatex": "x^2=0 \\text{ when } x=0",
          "explanation": "The smallest possible value of $x^2$ is $0$, and it happens only at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the minimum output of f",
          "workingLatex": "f(0)=0^2+1=1",
          "explanation": "Adding $1$ shifts every squared value up, so the lowest output the function can reach is $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Consider large inputs",
          "workingLatex": "\\text{as } |x|\\to\\infty,\\ f(x)\\to\\infty",
          "explanation": "As $x$ moves far from $0$ in either direction, $x^2$ grows without limit, so there is no largest output.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the two facts",
          "workingLatex": "f(x)\\geq 1",
          "explanation": "The outputs start at $1$ and climb upwards forever, so the graph is a parabola with its lowest point at $(0,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range",
          "workingLatex": "\\text{Range: } f(x)\\geq 1",
          "explanation": "The range is the complete set of outputs, which here is every number greater than or equal to $1$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)\\geq 1$"
    }
  },
  {
    "id": "al.y2.pure.functions.q003",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "solutions",
    "tags": ["functions", "function notation", "solving equations"],
    "questionText": "The function $f$ is defined by $f(x) = 2x - 7$. Solve the equation $f(x) = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the equation",
          "workingLatex": "2x-7=5",
          "explanation": "Solving $f(x)=5$ just means asking which input makes the rule output $5$, so we replace $f(x)$ with its formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 7 to both sides",
          "workingLatex": "2x-7+7=5+7",
          "explanation": "Adding $7$ undoes the $-7$ and keeps the equation balanced by doing the same to each side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify",
          "workingLatex": "2x=12",
          "explanation": "The left side collapses to $2x$, leaving a simpler equation to finish.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide both sides by 2",
          "workingLatex": "x=\\dfrac{12}{2}",
          "explanation": "Dividing by $2$ reverses the multiplication and isolates $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify to find x",
          "workingLatex": "x=6",
          "explanation": "This is the single input value that makes the function equal $5$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check the solution",
          "workingLatex": "f(6)=2(6)-7=12-7=5",
          "explanation": "Substituting back confirms the output really is $5$, so the solution is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=6$"
    }
  },
  {
    "id": "al.y2.pure.functions.q004",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": ["functions", "domain and range"],
    "questionText": "The function $g$ is defined by $g(x) = \\sqrt{x}$ for $x \\geq 0$. State the domain and range of $g$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what domain means",
          "workingLatex": "\\text{domain} = \\text{allowed inputs}",
          "explanation": "The domain is the collection of $x$-values you are allowed to feed into the function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note where the square root is defined",
          "workingLatex": "\\sqrt{x}\\ \\text{needs}\\ x\\geq 0",
          "explanation": "You cannot take the square root of a negative number in real maths, so inputs must be zero or positive.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the domain",
          "workingLatex": "\\text{Domain: } x\\geq 0",
          "explanation": "This matches the restriction already given, so the domain is every non-negative number.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Recall what range means",
          "workingLatex": "\\sqrt{x}\\geq 0",
          "explanation": "The range is the set of outputs; the square root symbol always returns the non-negative root.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the smallest output",
          "workingLatex": "\\sqrt{0}=0",
          "explanation": "The smallest output occurs at $x=0$, giving $0$, and the outputs increase from there as $x$ grows.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range",
          "workingLatex": "\\text{Range: } g(x)\\geq 0",
          "explanation": "The graph is the upper half of a sideways parabola starting at the origin, so outputs are all values $\\geq 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Domain: } x\\geq 0,\\ \\text{Range: } g(x)\\geq 0$"
    }
  },
  {
    "id": "al.y2.pure.functions.q005",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["functions", "domain and range", "domain"],
    "questionText": "The function $f$ is defined by $f(x) = \\dfrac{1}{x - 2}$. State the value of $x$ that must be excluded from the domain of $f$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the rule about fractions",
          "workingLatex": "\\text{denominator}\\neq 0",
          "explanation": "A fraction has no value when its denominator is zero, because dividing by zero is undefined.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the denominator",
          "workingLatex": "x-2",
          "explanation": "Here the bottom of the fraction is $x-2$, so this is the expression that must not equal zero.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the denominator equal to zero",
          "workingLatex": "x-2=0",
          "explanation": "Finding where the denominator is zero tells us exactly which input causes a problem.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for x",
          "workingLatex": "x=2",
          "explanation": "Adding $2$ to both sides shows the trouble value is $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Exclude this value",
          "workingLatex": "x\\neq 2",
          "explanation": "Because $x=2$ makes the function undefined, it must be removed from the allowed inputs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the restriction",
          "workingLatex": "\\text{Domain: all real } x,\\ x\\neq 2",
          "explanation": "Every other real number is fine, so the graph has a vertical asymptote at $x=2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x\\neq 2$"
    }
  },
  {
    "id": "al.y2.pure.functions.q006",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "value",
    "tags": ["functions", "composite functions"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = x^2$ and $g(x) = x + 3$. Find $fg(1)$ and $gf(1)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the order of a composite",
          "workingLatex": "fg(x)=f(g(x))",
          "explanation": "In $fg$ the function nearest the input, $g$, acts first, and its output is then fed into $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply g to 1 first",
          "workingLatex": "g(1)=1+3=4",
          "explanation": "Start on the inside: putting $1$ into $g$ gives $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply f to that result",
          "workingLatex": "f(4)=4^2=16",
          "explanation": "The output $4$ now becomes the input of $f$, and squaring it gives $16$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State fg(1)",
          "workingLatex": "fg(1)=16",
          "explanation": "Chaining $g$ then $f$ has turned the input $1$ into $16$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reverse the order for gf",
          "workingLatex": "gf(1)=g(f(1)),\\ f(1)=1^2=1",
          "explanation": "In $gf$ the function $f$ acts first, so we square $1$ to get $1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply g to that result",
          "workingLatex": "g(1)=1+3=4",
          "explanation": "Feeding $1$ into $g$ adds $3$ to give $4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State gf(1)",
          "workingLatex": "gf(1)=4",
          "explanation": "The different answers show that order matters: $fg$ and $gf$ are usually not the same.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(1)=16,\\ gf(1)=4$"
    }
  },
  {
    "id": "al.y2.pure.functions.q007",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["functions", "inverse functions"],
    "questionText": "The function $f$ is defined by $f(x) = 4x$. Find $f^{-1}(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the function as y",
          "workingLatex": "y=4x",
          "explanation": "Replacing $f(x)$ with $y$ makes it easier to rearrange the relationship between input and output.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Swap x and y",
          "workingLatex": "x=4y",
          "explanation": "The inverse reverses inputs and outputs, so we exchange the roles of $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 4",
          "workingLatex": "\\dfrac{x}{4}=y",
          "explanation": "To make $y$ the subject we undo the multiplication by $4$ by dividing.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write y explicitly",
          "workingLatex": "y=\\dfrac{x}{4}",
          "explanation": "This rearranged form now expresses the reversed rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the inverse function",
          "workingLatex": "f^{-1}(x)=\\dfrac{x}{4}",
          "explanation": "The inverse takes any output of $f$ and returns the original input by dividing by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a composition",
          "workingLatex": "f\\big(f^{-1}(x)\\big)=4\\times\\dfrac{x}{4}=x",
          "explanation": "Applying $f$ then $f^{-1}$ returns the original $x$, confirming the inverse is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x)=\\dfrac{x}{4}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q008",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "expression",
    "tags": ["functions", "inverse functions"],
    "questionText": "The function $f$ is defined by $f(x) = x + 7$. Find $f^{-1}(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the function as y",
          "workingLatex": "y=x+7",
          "explanation": "Naming the output $y$ lets us treat the rule as an equation we can rearrange.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Swap x and y",
          "workingLatex": "x=y+7",
          "explanation": "The inverse undoes the function, so we interchange the input and output variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract 7 from both sides",
          "workingLatex": "x-7=y",
          "explanation": "The original rule added $7$, so its inverse must subtract $7$ to reverse it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write y explicitly",
          "workingLatex": "y=x-7",
          "explanation": "Making $y$ the subject gives the reversed rule clearly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the inverse function",
          "workingLatex": "f^{-1}(x)=x-7",
          "explanation": "Subtracting $7$ takes any output back to the input it came from.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a composition",
          "workingLatex": "f\\big(f^{-1}(x)\\big)=(x-7)+7=x",
          "explanation": "Applying both functions in turn returns $x$, so the inverse is verified.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x)=x-7$"
    }
  },
  {
    "id": "al.y2.pure.functions.q009",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["functions", "inverse functions"],
    "questionText": "The function $f$ is defined by $f(x) = 2x - 1$. Find $f^{-1}(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the function as y",
          "workingLatex": "y=2x-1",
          "explanation": "Renaming the output as $y$ turns the rule into an equation ready for rearranging.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Swap x and y",
          "workingLatex": "x=2y-1",
          "explanation": "Because an inverse reverses input and output, we exchange $x$ and $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add 1 to both sides",
          "workingLatex": "x+1=2y",
          "explanation": "We start isolating $y$ by undoing the $-1$ first.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide both sides by 2",
          "workingLatex": "\\dfrac{x+1}{2}=y",
          "explanation": "Dividing by $2$ removes the coefficient and leaves $y$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the inverse function",
          "workingLatex": "f^{-1}(x)=\\dfrac{x+1}{2}",
          "explanation": "This reversed rule undoes the doubling and the subtraction in the opposite order.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check with a composition",
          "workingLatex": "f\\big(f^{-1}(x)\\big)=2\\cdot\\dfrac{x+1}{2}-1=x",
          "explanation": "The composition simplifies to $x$, confirming the inverse is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x)=\\dfrac{x+1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q010",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["modulus", "absolute value"],
    "questionText": "Evaluate $|-6|$, $|3 - 8|$ and $|2 \\times (-5)|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall what the modulus means",
          "workingLatex": "|a|=\\text{distance of } a \\text{ from } 0",
          "explanation": "The modulus, or absolute value, measures how far a number is from zero, so its result is never negative.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the first modulus",
          "workingLatex": "|-6|=6",
          "explanation": "The number $-6$ sits $6$ units from zero, so the modulus is $6$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify inside the second modulus",
          "workingLatex": "3-8=-5",
          "explanation": "Always work out the expression inside the bars before taking the modulus.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the second modulus",
          "workingLatex": "|-5|=5",
          "explanation": "The distance of $-5$ from zero is $5$, so the modulus removes the negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify inside the third modulus",
          "workingLatex": "2\\times(-5)=-10",
          "explanation": "A positive times a negative is negative, giving $-10$ inside the bars.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the third modulus",
          "workingLatex": "|-10|=10",
          "explanation": "The distance of $-10$ from zero is $10$, completing the set of values.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State all three results",
          "workingLatex": "6,\\ 5,\\ 10",
          "explanation": "Each modulus has returned a non-negative value, as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "$|-6|=6,\\ |3-8|=5,\\ |2\\times(-5)|=10$"
    }
  },
  {
    "id": "al.y2.pure.functions.q011",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["functions", "inverse functions", "self-inverse"],
    "questionText": "The function $f$ is defined by $f(x) = 5 - x$. Find $f^{-1}(x)$ and state what this tells you about $f$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the function as y",
          "workingLatex": "y=5-x",
          "explanation": "Calling the output $y$ lets us rearrange to find the reversed rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Swap x and y",
          "workingLatex": "x=5-y",
          "explanation": "Finding an inverse means reversing input and output, so we swap the two variables.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for y",
          "workingLatex": "y=5-x",
          "explanation": "Adding $y$ and subtracting $x$ on both sides makes $y$ the subject again.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the inverse function",
          "workingLatex": "f^{-1}(x)=5-x",
          "explanation": "This is the reversed rule that takes each output back to its input.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compare with the original function",
          "workingLatex": "f^{-1}(x)=5-x=f(x)",
          "explanation": "The inverse is exactly the same expression as $f$ itself.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the result",
          "workingLatex": "f^{-1}=f",
          "explanation": "Because $f$ and its inverse are identical, $f$ is called self-inverse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Describe the meaning",
          "workingLatex": "f\\big(f(x)\\big)=5-(5-x)=x",
          "explanation": "Applying $f$ twice returns the original number, and its graph is symmetric about the line $y=x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x)=5-x$, so $f$ is self-inverse"
    }
  },
  {
    "id": "al.y2.pure.functions.q012",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "description",
    "tags": ["functions", "domain and range", "one-to-one"],
    "questionText": "The function $f$ is defined by $f(x) = x^2 - 4$ for $x \\geq 0$. State the range of $f$, and explain why $f$ is one-to-one on this domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the smallest value of x^2 on the domain",
          "workingLatex": "x\\geq 0 \\Rightarrow x^2\\geq 0",
          "explanation": "On this restricted domain the smallest square is $0$, occurring at the left end $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f at the smallest input",
          "workingLatex": "f(0)=0^2-4=-4",
          "explanation": "Subtracting $4$ from the minimum square gives the lowest output of the function, $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Consider large inputs",
          "workingLatex": "\\text{as } x\\to\\infty,\\ f(x)\\to\\infty",
          "explanation": "As $x$ increases, $x^2-4$ grows without bound, so there is no upper limit on the outputs.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the range",
          "workingLatex": "\\text{Range: } f(x)\\geq -4",
          "explanation": "The outputs start at $-4$ and rise upwards, giving all values greater than or equal to $-4$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Examine how f behaves on the domain",
          "workingLatex": "0\\leq a<b \\Rightarrow f(a)<f(b)",
          "explanation": "For non-negative inputs, larger $x$ always gives a larger square, so $f$ is strictly increasing here.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Link increasing to one-to-one",
          "workingLatex": "\\text{each } y \\text{ comes from one } x",
          "explanation": "Because the graph only rises, any horizontal line meets it at most once, so no output is repeated.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Conclude",
          "workingLatex": "f \\text{ is one-to-one on } x\\geq 0",
          "explanation": "Restricting to $x\\geq 0$ removes the mirror-image left branch, leaving a one-to-one function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)\\geq -4$; $f$ is one-to-one because it is strictly increasing for $x\\geq 0$"
    }
  },
  {
    "id": "al.y2.pure.functions.q013",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": ["functions", "domain and range", "range"],
    "questionText": "The function $f$ is defined by $f(x) = \\dfrac{3}{x}$ for $x \\neq 0$. State the range of $f$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Look at the possible outputs",
          "workingLatex": "f(x)=\\dfrac{3}{x}",
          "explanation": "The range asks which values $\\dfrac{3}{x}$ can actually take as $x$ varies over all non-zero numbers.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test whether the output can be zero",
          "workingLatex": "\\dfrac{3}{x}=0",
          "explanation": "It is worth checking the one value, $0$, that a reciprocal-type function often cannot reach.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Show zero is impossible",
          "workingLatex": "\\dfrac{3}{x}=0 \\Rightarrow 3=0",
          "explanation": "Multiplying both sides by $x$ would require $3=0$, which is false, so the output can never be $0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Show every other value is reachable",
          "workingLatex": "\\text{for } y\\neq 0,\\ x=\\dfrac{3}{y}",
          "explanation": "Given any non-zero target $y$, choosing $x=\\dfrac{3}{y}$ produces it, so all such values occur.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify the only gap",
          "workingLatex": "\\text{only } 0 \\text{ is missing}",
          "explanation": "As $x$ grows large the output nears $0$ without touching it, matching the horizontal asymptote $y=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range",
          "workingLatex": "\\text{Range: } f(x)\\neq 0",
          "explanation": "The range is every real number except $0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x)\\neq 0$"
    }
  },
  {
    "id": "al.y2.pure.functions.q014",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["functions", "composite functions"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = 2x + 1$ and $g(x) = x - 4$. Find $fg(x)$ and $gf(x)$, giving each in simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the meaning of fg",
          "workingLatex": "fg(x)=f\\big(g(x)\\big)",
          "explanation": "In $fg$ the inner function $g$ is applied first, then $f$ acts on its output.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute g into f",
          "workingLatex": "f(x-4)=2(x-4)+1",
          "explanation": "Wherever $f$ has an $x$, we place the whole expression $g(x)=x-4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the brackets",
          "workingLatex": "=2x-8+1",
          "explanation": "Multiplying out $2(x-4)$ gives $2x-8$ before combining constants.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify fg(x)",
          "workingLatex": "fg(x)=2x-7",
          "explanation": "Combining $-8+1$ gives $-7$, the simplest form of the composite.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Recall the meaning of gf",
          "workingLatex": "gf(x)=g\\big(f(x)\\big)=(2x+1)-4",
          "explanation": "Now $f$ acts first, so we substitute $2x+1$ into $g$, which subtracts $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify gf(x)",
          "workingLatex": "gf(x)=2x-3",
          "explanation": "Combining $1-4$ gives $-3$, the simplest form of this composite.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the two results",
          "workingLatex": "fg(x)=2x-7,\\ gf(x)=2x-3",
          "explanation": "The answers differ, confirming that composing in a different order generally gives a different function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(x)=2x-7,\\ gf(x)=2x-3$"
    }
  },
  {
    "id": "al.y2.pure.functions.q015",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": ["modulus", "graphs", "domain and range"],
    "questionText": "Describe the graph of $y = |x|$, stating the coordinates of its vertex and its range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the definition of the modulus function",
          "workingLatex": "|x| = \\begin{cases} x, & x \\ge 0 \\\\ -x, & x < 0 \\end{cases}",
          "explanation": "The modulus $|x|$ measures the distance of $x$ from zero, so it can never be negative and simply strips off any minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Interpret each branch as a straight line",
          "workingLatex": "y = x \\ (x \\ge 0), \\qquad y = -x \\ (x < 0)",
          "explanation": "For $x \\ge 0$ the graph is the line $y = x$ (gradient $1$), and for $x < 0$ it is the line $y = -x$ (gradient $-1$), giving two straight pieces.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe how the two pieces join",
          "workingLatex": "\\text{Both pieces meet at } x = 0",
          "explanation": "The two lines meet at the origin, producing a symmetrical V-shape that opens upwards about the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Identify the vertex",
          "workingLatex": "\\text{Vertex} = (0,\\, 0)",
          "explanation": "The lowest point of the V is where the two lines join, at the origin $(0,0)$; this turning point is called the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the smallest possible output",
          "workingLatex": "|x| \\ge 0 \\text{ for all } x, \\quad |0| = 0",
          "explanation": "Because a distance is never negative, the smallest value $y$ can take is $0$, reached when $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine the range",
          "workingLatex": "y \\ge 0",
          "explanation": "As $x$ moves away from $0$ in either direction $y$ grows without limit, so every value from $0$ upwards is achieved.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the description of the graph",
          "workingLatex": "\\text{V-shape}, \\ \\text{vertex } (0,0), \\ \\text{range } y \\ge 0",
          "explanation": "Collecting the features gives a full description of the graph and its behaviour.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{A V-shaped graph with vertex } (0,\\,0) \\text{ and range } y \\ge 0$"
    }
  },
  {
    "id": "al.y2.pure.functions.q016",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "solutions",
    "tags": ["modulus", "solving modulus equations"],
    "questionText": "Solve $|x| = 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the modulus equation",
          "workingLatex": "|x| = 7 \\ \\Rightarrow \\ \\text{distance of } x \\text{ from } 0 \\text{ is } 7",
          "explanation": "The equation says $x$ lies exactly $7$ units from zero, and there are two points on the number line that are $7$ away from $0$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the two cases",
          "workingLatex": "x = 7 \\quad \\text{or} \\quad -x = 7",
          "explanation": "The value inside the modulus could be either positive or negative before the sign was removed, so we consider both possibilities.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the positive case",
          "workingLatex": "x = 7",
          "explanation": "The first case is already solved: if $x$ itself is $7$ then $|7| = 7$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the negative case",
          "workingLatex": "-x = 7 \\ \\Rightarrow \\ x = -7",
          "explanation": "Multiplying both sides by $-1$ isolates $x$ and gives the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check both solutions",
          "workingLatex": "|7| = 7 \\ \\checkmark, \\qquad |-7| = 7 \\ \\checkmark",
          "explanation": "Substituting each answer back confirms both give a modulus of $7$, so both are valid.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions",
          "workingLatex": "x = 7 \\quad \\text{or} \\quad x = -7",
          "explanation": "Both values satisfy the original equation, so the full solution set is recorded.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 7 \\ \\text{or} \\ x = -7$"
    }
  },
  {
    "id": "al.y2.pure.functions.q017",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "solutions",
    "tags": ["modulus", "solving modulus equations"],
    "questionText": "Solve $|x - 3| = 5$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the modulus equation",
          "workingLatex": "|x - 3| = 5",
          "explanation": "The expression inside the modulus, $x - 3$, must be either $+5$ or $-5$ for its size to equal $5$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the first case",
          "workingLatex": "x - 3 = 5",
          "explanation": "This is the case where the inside of the modulus is already positive, so it equals the right-hand side directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the first case",
          "workingLatex": "x = 5 + 3 = 8",
          "explanation": "Adding $3$ to both sides isolates $x$ and gives the first solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the second case",
          "workingLatex": "x - 3 = -5",
          "explanation": "This is the case where the inside was negative, so it equals the negative of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the second case",
          "workingLatex": "x = -5 + 3 = -2",
          "explanation": "Again adding $3$ to both sides isolates $x$ and gives the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check both solutions",
          "workingLatex": "|8 - 3| = 5 \\ \\checkmark, \\qquad |-2 - 3| = |-5| = 5 \\ \\checkmark",
          "explanation": "Substituting each value back confirms both satisfy the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "x = 8 \\quad \\text{or} \\quad x = -2",
          "explanation": "Both cases give valid answers, completing the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 8 \\ \\text{or} \\ x = -2$"
    }
  },
  {
    "id": "al.y2.pure.functions.q018",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "solutions",
    "tags": ["modulus", "solving modulus equations"],
    "questionText": "Solve $|2x + 1| = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the modulus equation",
          "workingLatex": "|2x + 1| = 9",
          "explanation": "The expression $2x + 1$ inside the modulus must be either $+9$ or $-9$ so that its size is $9$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the first case",
          "workingLatex": "2x + 1 = 9",
          "explanation": "This case takes the inside of the modulus as positive, equal to the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the first case",
          "workingLatex": "2x = 8 \\ \\Rightarrow \\ x = 4",
          "explanation": "Subtracting $1$ and dividing by $2$ isolates $x$, giving the first solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the second case",
          "workingLatex": "2x + 1 = -9",
          "explanation": "This case takes the inside of the modulus as negative, equal to the negative of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the second case",
          "workingLatex": "2x = -10 \\ \\Rightarrow \\ x = -5",
          "explanation": "Subtracting $1$ and dividing by $2$ isolates $x$, giving the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check both solutions",
          "workingLatex": "|2(4) + 1| = 9 \\ \\checkmark, \\qquad |2(-5) + 1| = |-9| = 9 \\ \\checkmark",
          "explanation": "Substituting each value back into the modulus confirms both give $9$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the solutions",
          "workingLatex": "x = 4 \\quad \\text{or} \\quad x = -5",
          "explanation": "Both cases yield valid answers, completing the solution.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 4 \\ \\text{or} \\ x = -5$"
    }
  },
  {
    "id": "al.y2.pure.functions.q019",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "description",
    "tags": ["modulus", "graphs", "domain and range"],
    "questionText": "The graph of $y = |x| + 2$. State the coordinates of the vertex and the range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the base graph",
          "workingLatex": "y = |x| \\ \\text{has vertex } (0,0)",
          "explanation": "The graph $y = |x|$ is a V-shape with its lowest point, the vertex, at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y = |x| + 2",
          "explanation": "Adding $2$ to the whole function raises every point by $2$, which is a vertical translation upwards.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the translation to the vertex",
          "workingLatex": "(0,\\,0) \\ \\rightarrow \\ (0,\\,0 + 2) = (0,\\,2)",
          "explanation": "Shifting the graph up by $2$ moves the vertex from $(0,0)$ to $(0,2)$; the horizontal position is unchanged.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the shape is unchanged",
          "workingLatex": "\\text{Same V-shape, opening upwards}",
          "explanation": "A vertical shift does not alter the steepness or orientation, so the V-shape is preserved.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the minimum output",
          "workingLatex": "|x| \\ge 0 \\ \\Rightarrow \\ |x| + 2 \\ge 2",
          "explanation": "Since $|x|$ is at least $0$, adding $2$ makes the smallest possible value $2$, reached at $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine the range",
          "workingLatex": "y \\ge 2",
          "explanation": "The output starts at $2$ and increases without limit as $x$ moves away from $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the results",
          "workingLatex": "\\text{Vertex } (0,\\,2), \\quad y \\ge 2",
          "explanation": "Collecting the features gives the vertex and the range of the transformed graph.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Vertex } (0,\\,2), \\ \\text{range } y \\ge 2$"
    }
  },
  {
    "id": "al.y2.pure.functions.q020",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "coordinates",
    "tags": ["modulus", "graphs"],
    "questionText": "The graph of $y = |x - 4|$. State the coordinates of the vertex and where the graph meets the $y$-axis.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Start from the base graph",
          "workingLatex": "y = |x| \\ \\text{has vertex } (0,0)",
          "explanation": "The graph $y = |x|$ is a V-shape with its vertex at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the transformation",
          "workingLatex": "y = |x - 4|",
          "explanation": "Replacing $x$ with $x - 4$ shifts the graph horizontally; subtracting inside moves it to the right by $4$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate the vertex",
          "workingLatex": "x - 4 = 0 \\ \\Rightarrow \\ x = 4, \\quad y = 0",
          "explanation": "The vertex sits where the inside of the modulus is zero, giving the lowest point at $(4,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the y-axis intercept",
          "workingLatex": "\\text{At the } y\\text{-axis}, \\ x = 0",
          "explanation": "A graph meets the $y$-axis where $x = 0$, so we substitute this value in.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at x = 0",
          "workingLatex": "y = |0 - 4| = |-4| = 4",
          "explanation": "The modulus removes the minus sign, so the graph crosses the $y$-axis at height $4$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the intercept point",
          "workingLatex": "(0,\\,4)",
          "explanation": "Pairing $x = 0$ with $y = 4$ gives the coordinates where the graph meets the $y$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the results",
          "workingLatex": "\\text{Vertex } (4,\\,0), \\quad y\\text{-axis at } (0,\\,4)",
          "explanation": "Collecting the key points fully answers the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Vertex } (4,\\,0); \\ \\text{meets } y\\text{-axis at } (0,\\,4)$"
    }
  },
  {
    "id": "al.y2.pure.functions.q021",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "value",
    "tags": ["modulus", "functions"],
    "questionText": "The function $f$ is defined by $f(x) = |x|$. Find $f(-3) + f(5)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the function",
          "workingLatex": "f(x) = |x|",
          "explanation": "The function returns the size of its input, ignoring any minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate f(-3)",
          "workingLatex": "f(-3) = |-3| = 3",
          "explanation": "The distance of $-3$ from zero is $3$, so the modulus removes the negative sign.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f(5)",
          "workingLatex": "f(5) = |5| = 5",
          "explanation": "The number $5$ is already positive, so its modulus is unchanged at $5$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add the two values",
          "workingLatex": "f(-3) + f(5) = 3 + 5",
          "explanation": "The question asks for the sum, so we combine the two results found above.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the sum",
          "workingLatex": "3 + 5 = 8",
          "explanation": "Adding the two positive values gives the final total.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer",
          "workingLatex": "f(-3) + f(5) = 8",
          "explanation": "This is the required value of the expression.",
          "diagram": null
        }
      ],
      "finalAnswer": "$8$"
    }
  },
  {
    "id": "al.y2.pure.functions.q022",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "solutions",
    "tags": ["modulus", "solving modulus equations"],
    "questionText": "Solve $|3x| = 12$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the modulus equation",
          "workingLatex": "|3x| = 12",
          "explanation": "The expression $3x$ inside the modulus must be either $+12$ or $-12$ for its size to be $12$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Set up the first case",
          "workingLatex": "3x = 12",
          "explanation": "This case treats the inside of the modulus as positive, equal to the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the first case",
          "workingLatex": "x = \\dfrac{12}{3} = 4",
          "explanation": "Dividing both sides by $3$ isolates $x$ and gives the first solution.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the second case",
          "workingLatex": "3x = -12",
          "explanation": "This case treats the inside of the modulus as negative, equal to the negative of the right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve the second case",
          "workingLatex": "x = \\dfrac{-12}{3} = -4",
          "explanation": "Dividing both sides by $3$ isolates $x$ and gives the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the solutions",
          "workingLatex": "x = 4 \\quad \\text{or} \\quad x = -4",
          "explanation": "Checking, $|3(4)| = 12$ and $|3(-4)| = 12$, so both values satisfy the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 4 \\ \\text{or} \\ x = -4$"
    }
  },
  {
    "id": "al.y2.pure.functions.q023",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["composite functions", "functions"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = x^2$ and $g(x) = 2x + 1$. Find $fg(x)$, $gf(x)$ and the value of $fg(2)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the composite notation",
          "workingLatex": "fg(x) = f\\big(g(x)\\big)",
          "explanation": "In $fg(x)$ the function nearest the input, $g$, is applied first, then $f$ acts on the result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the inner function",
          "workingLatex": "g(x) = 2x + 1",
          "explanation": "This is the value that will be fed into $f$, so we identify it clearly first.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute g(x) into f",
          "workingLatex": "f\\big(g(x)\\big) = (2x + 1)^2",
          "explanation": "Since $f$ squares its input, we replace $x$ in $f(x) = x^2$ with the whole expression $2x + 1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State fg(x)",
          "workingLatex": "fg(x) = (2x + 1)^2",
          "explanation": "This is the first required composite function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Understand the reversed composite",
          "workingLatex": "gf(x) = g\\big(f(x)\\big)",
          "explanation": "In $gf(x)$ the order swaps: $f$ is applied first and then $g$ acts on that output.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down the inner function",
          "workingLatex": "f(x) = x^2",
          "explanation": "This time $f$ is the inner function whose output is fed into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute f(x) into g",
          "workingLatex": "g\\big(f(x)\\big) = 2(x^2) + 1 = 2x^2 + 1",
          "explanation": "Since $g$ doubles its input and adds $1$, we replace $x$ in $g(x) = 2x + 1$ with $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State gf(x)",
          "workingLatex": "gf(x) = 2x^2 + 1",
          "explanation": "This is the second composite; note it differs from $fg(x)$, so order matters.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute x = 2 into fg(x)",
          "workingLatex": "fg(2) = (2(2) + 1)^2 = (5)^2",
          "explanation": "Using $fg(x) = (2x+1)^2$, we put in $x = 2$; the bracket becomes $5$ before squaring.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the value",
          "workingLatex": "fg(2) = 25",
          "explanation": "Squaring $5$ gives the required numerical value.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State all results",
          "workingLatex": "fg(x) = (2x+1)^2, \\ gf(x) = 2x^2 + 1, \\ fg(2) = 25",
          "explanation": "Collecting the three answers completes the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(x) = (2x+1)^2, \\ gf(x) = 2x^2 + 1, \\ fg(2) = 25$"
    }
  },
  {
    "id": "al.y2.pure.functions.q024",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "solutions",
    "tags": ["composite functions", "solving modulus equations", "functions"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = x + 2$ and $g(x) = x^2$. Find $gf(x)$ and solve $gf(x) = 9$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the composite notation",
          "workingLatex": "gf(x) = g\\big(f(x)\\big)",
          "explanation": "In $gf(x)$ the inner function $f$ acts first, then $g$ is applied to its output.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the inner function",
          "workingLatex": "f(x) = x + 2",
          "explanation": "This is the expression that will be substituted into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute f(x) into g",
          "workingLatex": "g\\big(f(x)\\big) = (x + 2)^2",
          "explanation": "Since $g$ squares its input, we replace $x$ in $g(x) = x^2$ with the whole expression $x + 2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State gf(x)",
          "workingLatex": "gf(x) = (x + 2)^2",
          "explanation": "This is the required composite function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the equation to solve",
          "workingLatex": "(x + 2)^2 = 9",
          "explanation": "Setting the composite equal to $9$ turns the problem into a solvable equation.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root of both sides",
          "workingLatex": "x + 2 = \\pm 3",
          "explanation": "A squared quantity equal to $9$ means the base is either $+3$ or $-3$, so we keep both signs.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve the positive case",
          "workingLatex": "x + 2 = 3 \\ \\Rightarrow \\ x = 1",
          "explanation": "Subtracting $2$ from both sides gives the first solution.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the negative case",
          "workingLatex": "x + 2 = -3 \\ \\Rightarrow \\ x = -5",
          "explanation": "Subtracting $2$ from both sides gives the second solution.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check both solutions",
          "workingLatex": "(1+2)^2 = 9 \\ \\checkmark, \\qquad (-5+2)^2 = (-3)^2 = 9 \\ \\checkmark",
          "explanation": "Substituting each value back confirms both satisfy the equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the results",
          "workingLatex": "gf(x) = (x+2)^2, \\quad x = 1 \\ \\text{or} \\ x = -5",
          "explanation": "Collecting the composite and the two solutions completes the question.",
          "diagram": null
        }
      ],
      "finalAnswer": "$gf(x) = (x+2)^2; \\ x = 1 \\ \\text{or} \\ x = -5$"
    }
  },
  {
    "id": "al.y2.pure.functions.q025",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["composite functions", "functions"],
    "questionText": "The function $f$ is defined by $f(x) = \\dfrac{1}{x - 1}$, $x \\neq 1$. Find $ff(x)$ (that is, $f(f(x))$) and give it as a single fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the self-composite",
          "workingLatex": "ff(x) = f\\big(f(x)\\big)",
          "explanation": "Here the function is applied to its own output, so we feed $f(x)$ back into $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the inner function",
          "workingLatex": "f(x) = \\dfrac{1}{x - 1}",
          "explanation": "This is the expression that must replace $x$ in the outer $f$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute into the outer f",
          "workingLatex": "ff(x) = \\dfrac{1}{\\left(\\dfrac{1}{x - 1}\\right) - 1}",
          "explanation": "Replacing the $x$ in $f(x) = \\dfrac{1}{x-1}$ with $\\dfrac{1}{x-1}$ builds the nested fraction.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Focus on simplifying the denominator",
          "workingLatex": "\\dfrac{1}{x - 1} - 1",
          "explanation": "To turn this into a single fraction we first combine the two terms in the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write over a common denominator",
          "workingLatex": "\\dfrac{1}{x - 1} - \\dfrac{x - 1}{x - 1} = \\dfrac{1 - (x - 1)}{x - 1}",
          "explanation": "Writing $1$ as $\\dfrac{x-1}{x-1}$ lets both terms share the denominator $x - 1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numerator",
          "workingLatex": "\\dfrac{1 - x + 1}{x - 1} = \\dfrac{2 - x}{x - 1}",
          "explanation": "Expanding the bracket and collecting terms gives a tidy single fraction for the denominator.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rewrite the whole expression",
          "workingLatex": "ff(x) = \\dfrac{1}{\\dfrac{2 - x}{x - 1}}",
          "explanation": "The outer function is $1$ divided by the simplified denominator we just found.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Divide by a fraction",
          "workingLatex": "ff(x) = 1 \\times \\dfrac{x - 1}{2 - x} = \\dfrac{x - 1}{2 - x}",
          "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal, which flips numerator and denominator.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the simplified composite",
          "workingLatex": "ff(x) = \\dfrac{x - 1}{2 - x}",
          "explanation": "This is the single-fraction form of the required composite function.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Note the domain restrictions",
          "workingLatex": "x \\neq 1, \\quad x \\neq 2",
          "explanation": "We must exclude $x = 1$ (undefined in $f$) and $x = 2$ (which makes the new denominator zero).",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final result",
          "workingLatex": "ff(x) = \\dfrac{x - 1}{2 - x}, \\quad x \\neq 1, 2",
          "explanation": "Combining the expression with its restrictions gives the complete answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$ff(x) = \\dfrac{x - 1}{2 - x}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q026",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["composite functions", "functions", "solving modulus equations"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = 3x - 2$ and $g(x) = x^2$. Find the value of $x$ for which $fg(x) = gf(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Understand the first composite",
          "workingLatex": "fg(x) = f\\big(g(x)\\big)",
          "explanation": "In $fg(x)$ the inner function $g$ is applied first, then $f$ acts on the result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute g(x) into f",
          "workingLatex": "f\\big(x^2\\big) = 3(x^2) - 2 = 3x^2 - 2",
          "explanation": "Since $f$ multiplies its input by $3$ and subtracts $2$, we replace $x$ in $f(x)$ with $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State fg(x)",
          "workingLatex": "fg(x) = 3x^2 - 2",
          "explanation": "This is the first composite expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Understand the second composite",
          "workingLatex": "gf(x) = g\\big(f(x)\\big)",
          "explanation": "In $gf(x)$ the order reverses: $f$ is applied first, then $g$ squares the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute f(x) into g",
          "workingLatex": "g\\big(3x - 2\\big) = (3x - 2)^2",
          "explanation": "Since $g$ squares its input, we replace $x$ in $g(x) = x^2$ with the whole expression $3x - 2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand gf(x)",
          "workingLatex": "gf(x) = 9x^2 - 12x + 4",
          "explanation": "Expanding $(3x - 2)^2$ using the square of a binomial gives this quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set the two composites equal",
          "workingLatex": "3x^2 - 2 = 9x^2 - 12x + 4",
          "explanation": "We want the value of $x$ where both composites give the same output, so we equate them.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Move all terms to one side",
          "workingLatex": "0 = 6x^2 - 12x + 6",
          "explanation": "Subtracting $3x^2 - 2$ from both sides collects everything on the right, ready to solve.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take out the common factor",
          "workingLatex": "0 = 6\\big(x^2 - 2x + 1\\big)",
          "explanation": "Every term is divisible by $6$, so factoring it out simplifies the quadratic inside.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Factorise the perfect square",
          "workingLatex": "0 = 6(x - 1)^2",
          "explanation": "The bracket $x^2 - 2x + 1$ is a perfect square, factorising neatly to $(x - 1)^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for x",
          "workingLatex": "(x - 1)^2 = 0 \\ \\Rightarrow \\ x = 1",
          "explanation": "A squared bracket equal to zero forces the bracket itself to be zero, giving a single repeated root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the answer",
          "workingLatex": "x = 1",
          "explanation": "This is the only value of $x$ for which the two composites are equal.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 1$"
    }
  },
  {
    "id": "al.y2.pure.functions.q027",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "interval",
    "tags": ["domain and range", "functions"],
    "questionText": "The function $f$ is defined by $f(x) = 2x + 3$ with domain $0 \\leq x \\leq 5$. Find the range of $f$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the type of function",
          "workingLatex": "f(x) = 2x + 3",
          "explanation": "This is a linear function, so its graph is a straight line with no turning points.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Decide whether it increases or decreases",
          "workingLatex": "\\text{gradient} = 2 > 0",
          "explanation": "A positive gradient means the outputs rise steadily as $x$ increases, so the function is increasing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the shape to locate extreme values",
          "workingLatex": "\\text{min at } x = 0, \\quad \\text{max at } x = 5",
          "explanation": "For an increasing function on a closed interval, the smallest output is at the left end and the largest at the right end.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the lower endpoint",
          "workingLatex": "f(0) = 2(0) + 3 = 3",
          "explanation": "Substituting the smallest $x$-value gives the minimum output of the function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the upper endpoint",
          "workingLatex": "f(5) = 2(5) + 3 = 13",
          "explanation": "Substituting the largest $x$-value gives the maximum output of the function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note that all values between are achieved",
          "workingLatex": "3 \\le f(x) \\le 13",
          "explanation": "Because the line is continuous, every value between the endpoint outputs is reached exactly once.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the minimum output",
          "workingLatex": "\\text{minimum} = 3",
          "explanation": "This confirms the lower bound of the range from the left endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the maximum output",
          "workingLatex": "\\text{maximum} = 13",
          "explanation": "This confirms the upper bound of the range from the right endpoint.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range",
          "workingLatex": "3 \\le f(x) \\le 13",
          "explanation": "The range is the full set of outputs, running from the minimum to the maximum inclusive.",
          "diagram": null
        }
      ],
      "finalAnswer": "$3 \\le f(x) \\le 13$"
    }
  },
  {
    "id": "al.y2.pure.functions.q028",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "interval",
    "tags": ["domain and range", "functions", "graphs"],
    "questionText": "The function $g$ is defined by $g(x) = x^2 - 2$ with domain $-1 \\leq x \\leq 3$. Find the range of $g$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the type of function",
          "workingLatex": "g(x) = x^2 - 2",
          "explanation": "This is a quadratic, so its graph is a parabola that opens upwards with a single lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Realise it is not monotonic here",
          "workingLatex": "\\text{parabola turns, so check the vertex too}",
          "explanation": "Unlike a straight line, a parabola can fall then rise, so the extreme values may occur at the vertex rather than only at the endpoints.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate the vertex",
          "workingLatex": "x = 0 \\ \\text{is inside } [-1, 3]",
          "explanation": "The lowest point of $x^2 - 2$ is at $x = 0$, and since this lies within the domain we must include it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the vertex",
          "workingLatex": "g(0) = 0^2 - 2 = -2",
          "explanation": "Substituting $x = 0$ gives the minimum output because the parabola is lowest there.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate at the left endpoint",
          "workingLatex": "g(-1) = (-1)^2 - 2 = -1",
          "explanation": "Substituting the smallest $x$-value gives one candidate for the largest output.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate at the right endpoint",
          "workingLatex": "g(3) = 3^2 - 2 = 7",
          "explanation": "Substituting the largest $x$-value gives the other candidate for the largest output.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compare the endpoint outputs",
          "workingLatex": "g(-1) = -1, \\quad g(3) = 7 \\ \\Rightarrow \\ \\text{max} = 7",
          "explanation": "The larger of the two endpoint values is the maximum, since the graph rises further on the right.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the minimum",
          "workingLatex": "\\text{minimum} = -2 \\ \\text{at } x = 0",
          "explanation": "The vertex gives the smallest output, which is lower than either endpoint value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the maximum",
          "workingLatex": "\\text{maximum} = 7 \\ \\text{at } x = 3",
          "explanation": "The right endpoint gives the largest output over the whole domain.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Combine into the range",
          "workingLatex": "-2 \\le g(x) \\le 7",
          "explanation": "Because the parabola is continuous, every value between the minimum and maximum is achieved.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the range",
          "workingLatex": "-2 \\le g(x) \\le 7",
          "explanation": "This is the full set of outputs of $g$ on the given domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-2 \\le g(x) \\le 7$"
    }
  },
  {
    "id": "al.y2.pure.functions.q029",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["composite functions", "substitution", "expanding brackets"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = 2x - 1$ and $g(x) = x^2 + 3$. Find $fg(x)$ and $gf(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the order of a composite function",
          "workingLatex": "fg(x) = f(g(x))",
          "explanation": "The notation $fg$ means we apply $g$ first and then feed its output into $f$, so $g$ is the inner function.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the inner function g",
          "workingLatex": "g(x) = x^2 + 3",
          "explanation": "Identifying $g(x)$ tells us exactly what will be substituted into $f$ in the next step.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute g(x) into f",
          "workingLatex": "fg(x) = 2(x^2 + 3) - 1",
          "explanation": "Wherever $f$ had an $x$, we now place the whole expression $x^2+3$, because that is the number arriving from $g$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "fg(x) = 2x^2 + 6 - 1",
          "explanation": "Multiplying the bracket by $2$ keeps the equation balanced while removing the grouping.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constants",
          "workingLatex": "fg(x) = 2x^2 + 5",
          "explanation": "Combining $6-1$ gives the tidy final form for the first composite.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the reverse composite gf",
          "workingLatex": "gf(x) = g(f(x))",
          "explanation": "For $gf$ the roles swap: now $f$ is applied first, so we substitute $f(x)$ into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute f(x) into g",
          "workingLatex": "gf(x) = (2x - 1)^2 + 3",
          "explanation": "Every $x$ in $g(x)=x^2+3$ is replaced by $2x-1$, the output of $f$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Expand the squared bracket",
          "workingLatex": "(2x - 1)^2 = 4x^2 - 4x + 1",
          "explanation": "Squaring means multiplying $(2x-1)$ by itself, which gives three terms via the usual expansion.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Add the constant 3",
          "workingLatex": "gf(x) = 4x^2 - 4x + 1 + 3",
          "explanation": "The $+3$ from $g$ is carried through and added to the expanded square.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Simplify to the final form",
          "workingLatex": "gf(x) = 4x^2 - 4x + 4",
          "explanation": "Combining $1+3$ gives the completed second composite; note $fg$ and $gf$ are different, as usual.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(x) = 2x^2 + 5$ and $gf(x) = 4x^2 - 4x + 4$"
    }
  },
  {
    "id": "al.y2.pure.functions.q030",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["composite functions", "algebraic fractions", "domain and range"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = \\dfrac{x}{x + 1}$ and $g(x) = 2x$. Find $fg(x)$, simplifying your answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the meaning of fg",
          "workingLatex": "fg(x) = f(g(x))",
          "explanation": "In $fg$ we work from the inside out, applying $g$ first, so $g(x)$ becomes the input of $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the inner function",
          "workingLatex": "g(x) = 2x",
          "explanation": "Knowing the exact expression $2x$ tells us what to substitute into $f$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Replace the input of f with 2x",
          "workingLatex": "fg(x) = \\dfrac{2x}{(2x) + 1}",
          "explanation": "Both the $x$ on the top and the $x$ in the denominator of $f$ are replaced by $2x$, the value coming from $g$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Tidy the denominator",
          "workingLatex": "fg(x) = \\dfrac{2x}{2x + 1}",
          "explanation": "Removing the unnecessary brackets around $2x+1$ leaves a clean single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Check for a common factor",
          "workingLatex": "\\dfrac{2x}{2x + 1}",
          "explanation": "The numerator is $2x$ and the denominator is $2x+1$; they share no common factor, so the fraction is already fully simplified.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Locate where the denominator is zero",
          "workingLatex": "2x + 1 = 0",
          "explanation": "A fraction is undefined when its denominator is zero, so this value must be excluded from the domain.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for the excluded value",
          "workingLatex": "x = -\\dfrac{1}{2}",
          "explanation": "Rearranging $2x+1=0$ gives the single $x$-value at which $fg$ has no output.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the composite with its restriction",
          "workingLatex": "fg(x) = \\dfrac{2x}{2x + 1}, \\quad x \\neq -\\dfrac{1}{2}",
          "explanation": "Recording the excluded value makes the definition complete and mathematically honest.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Confirm the simplified answer",
          "workingLatex": "fg(x) = \\dfrac{2x}{2x + 1}",
          "explanation": "This is the required simplified composite function, valid for all $x$ except $-\\tfrac{1}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(x) = \\dfrac{2x}{2x + 1}, \\; x \\neq -\\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q031",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "value",
    "tags": ["solving equations", "completing the square", "domain and range"],
    "questionText": "The function $f$ is defined by $f(x) = x^2 - 5x$ for real $x$. Solve $f(x) = 0$, and find the least value of $f(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the function equal to zero",
          "workingLatex": "x^2 - 5x = 0",
          "explanation": "Solving $f(x)=0$ means finding where the curve crosses the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise out the common factor",
          "workingLatex": "x(x - 5) = 0",
          "explanation": "Both terms contain an $x$, so taking it out turns the equation into a product of two factors.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the zero-product principle",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad x - 5 = 0",
          "explanation": "A product equals zero only when at least one factor is zero, giving two separate cases.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the roots",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 5",
          "explanation": "These are the two $x$-values where $f(x)=0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Prepare to complete the square for the least value",
          "workingLatex": "f(x) = x^2 - 5x",
          "explanation": "The minimum of an upward parabola sits at its vertex, which completing the square reveals directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Halve the coefficient of x",
          "workingLatex": "f(x) = \\left(x - \\dfrac{5}{2}\\right)^2 - \\left(\\dfrac{5}{2}\\right)^2",
          "explanation": "Half of $-5$ is $-\\tfrac{5}{2}$; we subtract its square to keep the expression equal to the original.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the constant term",
          "workingLatex": "f(x) = \\left(x - \\dfrac{5}{2}\\right)^2 - \\dfrac{25}{4}",
          "explanation": "Since $\\left(\\tfrac{5}{2}\\right)^2 = \\tfrac{25}{4}$, this is the completed-square form of the function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the fact that a square is never negative",
          "workingLatex": "\\left(x - \\dfrac{5}{2}\\right)^2 \\geq 0",
          "explanation": "The squared bracket is smallest when it equals zero, which drives $f(x)$ to its lowest value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the least value and where it occurs",
          "workingLatex": "f_{\\min} = -\\dfrac{25}{4} \\ \\text{at} \\ x = \\dfrac{5}{2}",
          "explanation": "Setting the square to zero at $x=\\tfrac{5}{2}$ leaves only the constant $-\\tfrac{25}{4}$ as the minimum.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the range",
          "workingLatex": "f(x) \\geq -\\dfrac{25}{4}",
          "explanation": "Because the parabola opens upwards, every output is at least the minimum value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 0$ or $x = 5$; least value $-\\dfrac{25}{4}$ at $x = \\dfrac{5}{2}$, so $f(x) \\geq -\\dfrac{25}{4}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q032",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": ["composite functions", "solving equations", "square roots"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = 4 - 3x$ and $g(x) = x^2$. Find $gf(x)$ and hence solve $gf(x) = 16$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the order for gf",
          "workingLatex": "gf(x) = g(f(x))",
          "explanation": "The composite $gf$ applies $f$ first, then squares the result via $g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the inner function",
          "workingLatex": "f(x) = 4 - 3x",
          "explanation": "This is the expression that will be squared by $g$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute f(x) into g",
          "workingLatex": "gf(x) = (4 - 3x)^2",
          "explanation": "Since $g$ squares its input, we simply square the whole of $4-3x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the composite equal to 16",
          "workingLatex": "(4 - 3x)^2 = 16",
          "explanation": "We now solve the equation the question asks for using this compact squared form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Take square roots of both sides",
          "workingLatex": "4 - 3x = \\pm 4",
          "explanation": "A square equalling $16$ means the bracket is either $+4$ or $-4$, so both signs must be kept.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the positive case",
          "workingLatex": "4 - 3x = 4 \\ \\Rightarrow \\ -3x = 0",
          "explanation": "Subtracting $4$ from each side isolates the $x$ term for the first root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the first solution",
          "workingLatex": "x = 0",
          "explanation": "Dividing $-3x=0$ by $-3$ gives the first value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve the negative case",
          "workingLatex": "4 - 3x = -4 \\ \\Rightarrow \\ -3x = -8",
          "explanation": "Taking the other sign and subtracting $4$ isolates $x$ for the second root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the second solution and state both",
          "workingLatex": "x = \\dfrac{8}{3} \\quad \\text{so} \\quad x = 0 \\ \\text{or} \\ x = \\dfrac{8}{3}",
          "explanation": "Dividing by $-3$ gives $\\tfrac{8}{3}$, so the equation has these two solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$gf(x) = (4 - 3x)^2$; $x = 0$ or $x = \\dfrac{8}{3}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q033",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["composite functions", "domain and range", "algebraic fractions"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = \\dfrac{1}{x}$ ($x \\neq 0$) and $g(x) = x - 3$. Find $fg(x)$ and $gf(x)$, stating any excluded values.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the order for fg",
          "workingLatex": "fg(x) = f(g(x))",
          "explanation": "For $fg$ we apply $g$ first, then take the reciprocal via $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute g(x) into f",
          "workingLatex": "fg(x) = \\dfrac{1}{x - 3}",
          "explanation": "The input to $f$ is $x-3$, so it goes underneath the $1$ in $\\tfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the excluded value for fg",
          "workingLatex": "x - 3 = 0 \\ \\Rightarrow \\ x = 3",
          "explanation": "The reciprocal is undefined when its denominator is zero, so $x=3$ must be excluded.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State fg with its restriction",
          "workingLatex": "fg(x) = \\dfrac{1}{x - 3}, \\quad x \\neq 3",
          "explanation": "This records both the rule and the value where it fails to be defined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the order for gf",
          "workingLatex": "gf(x) = g(f(x))",
          "explanation": "For $gf$ we apply $f$ first, so the reciprocal is taken before subtracting $3$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the restriction inherited from f",
          "workingLatex": "f(x) = \\dfrac{1}{x}, \\quad x \\neq 0",
          "explanation": "Because $f$ itself requires $x\\neq 0$, that restriction carries into $gf$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute f(x) into g",
          "workingLatex": "gf(x) = \\dfrac{1}{x} - 3",
          "explanation": "The function $g$ subtracts $3$ from its input, and here the input is $\\tfrac{1}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine into a single fraction",
          "workingLatex": "gf(x) = \\dfrac{1 - 3x}{x}",
          "explanation": "Writing $3$ as $\\tfrac{3x}{x}$ over the common denominator $x$ merges the two terms neatly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State gf with its restriction",
          "workingLatex": "gf(x) = \\dfrac{1 - 3x}{x}, \\quad x \\neq 0",
          "explanation": "The excluded value is $x=0$, coming from the reciprocal in $f$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Present both composites",
          "workingLatex": "fg(x) = \\dfrac{1}{x - 3}, \\ gf(x) = \\dfrac{1 - 3x}{x}",
          "explanation": "The two composites are clearly different and each carries its own excluded value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(x) = \\dfrac{1}{x - 3}, \\; x \\neq 3$; $gf(x) = \\dfrac{1 - 3x}{x}, \\; x \\neq 0$"
    }
  },
  {
    "id": "al.y2.pure.functions.q034",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["composite functions", "solving equations", "self-composition"],
    "questionText": "The function $f$ is defined by $f(x) = 2x + 5$. Solve the equation $ff(x) = x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what ff means",
          "workingLatex": "ff(x) = f(f(x))",
          "explanation": "Here the same function $f$ is applied twice, so the output of $f$ is fed straight back into $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the inner function",
          "workingLatex": "f(x) = 2x + 5",
          "explanation": "This is the value that will be substituted into $f$ a second time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute f(x) into f again",
          "workingLatex": "ff(x) = 2(2x + 5) + 5",
          "explanation": "Every $x$ in $2x+5$ is replaced by the whole expression $2x+5$ coming from the first application.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "ff(x) = 4x + 10 + 5",
          "explanation": "Multiplying through by $2$ clears the bracket while preserving the value.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the constants",
          "workingLatex": "ff(x) = 4x + 15",
          "explanation": "Combining $10+5$ gives the simplified twice-applied function.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Form the required equation",
          "workingLatex": "4x + 15 = x",
          "explanation": "We now set the composite equal to $x$, as the question asks, to find the fixed points.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the x terms",
          "workingLatex": "4x - x = -15",
          "explanation": "Subtracting $x$ from both sides gathers the unknowns on one side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify",
          "workingLatex": "3x = -15",
          "explanation": "Combining $4x-x$ leaves a single $x$ term equal to a constant.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for x",
          "workingLatex": "x = -5",
          "explanation": "Dividing by $3$ gives the value of $x$ for which applying $f$ twice returns the original input.",
          "diagram": null
        }
      ],
      "finalAnswer": "$ff(x) = 4x + 15$; $x = -5$"
    }
  },
  {
    "id": "al.y2.pure.functions.q035",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["composite functions", "domain and range", "square roots"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = x^2 + 1$ and $g(x) = \\sqrt{x}$ ($x \\geq 0$). Find $fg(x)$ and $gf(x)$, stating the domain of each.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the order for fg",
          "workingLatex": "fg(x) = f(g(x))",
          "explanation": "For $fg$ we take the square root first, then square and add $1$ via $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute g(x) into f",
          "workingLatex": "fg(x) = (\\sqrt{x})^2 + 1",
          "explanation": "The input $\\sqrt{x}$ replaces $x$ in $f(x)=x^2+1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the square of a square root",
          "workingLatex": "fg(x) = x + 1",
          "explanation": "For $x\\geq 0$, squaring undoes the square root, so $(\\sqrt{x})^2 = x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the domain of fg",
          "workingLatex": "x \\geq 0",
          "explanation": "The composite can only start where $g$ is defined, and $\\sqrt{x}$ requires $x\\geq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the order for gf",
          "workingLatex": "gf(x) = g(f(x))",
          "explanation": "For $gf$ we apply $f$ first, then take the square root of the result.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute f(x) into g",
          "workingLatex": "gf(x) = \\sqrt{x^2 + 1}",
          "explanation": "The output $x^2+1$ of $f$ is placed under the square root of $g$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Check the square root is always valid",
          "workingLatex": "x^2 + 1 \\geq 1 > 0",
          "explanation": "Because $x^2\\geq 0$, the quantity under the root is always positive, so the root is always defined.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Determine the domain of gf",
          "workingLatex": "x \\in \\mathbb{R}",
          "explanation": "Since $f$ accepts any real number and its output is always valid for $g$, all real $x$ are allowed.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Present both composites with domains",
          "workingLatex": "fg(x) = x + 1 \\ (x \\geq 0), \\quad gf(x) = \\sqrt{x^2 + 1} \\ (x \\in \\mathbb{R})",
          "explanation": "Each composite is stated with the domain inherited from its inner function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(x) = x + 1$ for $x \\geq 0$; $gf(x) = \\sqrt{x^2 + 1}$ for all real $x$"
    }
  },
  {
    "id": "al.y2.pure.functions.q036",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "solutions",
    "tags": ["composite functions", "solving equations", "quadratic formula"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = x - 4$ and $g(x) = x^2 + 2x$. Find $fg(x)$ and hence solve $fg(x) = -3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the order for fg",
          "workingLatex": "fg(x) = f(g(x))",
          "explanation": "For $fg$ we apply $g$ first, then subtract $4$ via $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute g(x) into f",
          "workingLatex": "fg(x) = (x^2 + 2x) - 4",
          "explanation": "Since $f$ subtracts $4$ from its input, we subtract $4$ from the whole of $x^2+2x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the composite tidily",
          "workingLatex": "fg(x) = x^2 + 2x - 4",
          "explanation": "Removing the bracket leaves a standard quadratic expression.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set the composite equal to -3",
          "workingLatex": "x^2 + 2x - 4 = -3",
          "explanation": "We solve the equation requested by the question.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to standard quadratic form",
          "workingLatex": "x^2 + 2x - 1 = 0",
          "explanation": "Adding $3$ to both sides collects everything on one side, ready for the formula.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Identify the coefficients",
          "workingLatex": "a = 1, \\ b = 2, \\ c = -1",
          "explanation": "This quadratic does not factorise nicely, so the quadratic formula is the reliable route.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the quadratic formula",
          "workingLatex": "x = \\dfrac{-2 \\pm \\sqrt{2^2 - 4(1)(-1)}}{2(1)}",
          "explanation": "Substituting the coefficients into $x=\\tfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ gives both solutions at once.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the discriminant",
          "workingLatex": "x = \\dfrac{-2 \\pm \\sqrt{8}}{2}",
          "explanation": "Here $b^2-4ac = 4+4 = 8$, a positive number, so there are two real roots.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the surd",
          "workingLatex": "x = \\dfrac{-2 \\pm 2\\sqrt{2}}{2}",
          "explanation": "Since $\\sqrt{8} = 2\\sqrt{2}$, factoring out the $2$ prepares the fraction for cancelling.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Divide through by 2",
          "workingLatex": "x = -1 \\pm \\sqrt{2}",
          "explanation": "Cancelling the common factor of $2$ gives the two exact solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(x) = x^2 + 2x - 4$; $x = -1 + \\sqrt{2}$ or $x = -1 - \\sqrt{2}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q037",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["solving equations", "simultaneous equations", "linear functions"],
    "questionText": "The function $f$ is defined by $f(x) = ax + b$. Given that $f(2) = 7$ and $f(-1) = -2$, find the values of $a$ and $b$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the general form",
          "workingLatex": "f(x) = ax + b",
          "explanation": "The unknowns $a$ and $b$ fully determine this linear function, so we need two facts to pin them down.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the first given value",
          "workingLatex": "f(2) = 2a + b = 7",
          "explanation": "Substituting $x=2$ turns the condition $f(2)=7$ into an equation in $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the second given value",
          "workingLatex": "f(-1) = -a + b = -2",
          "explanation": "Substituting $x=-1$ gives a second equation, so we have a simultaneous pair.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Label the equations",
          "workingLatex": "2a + b = 7 \\ (1), \\quad -a + b = -2 \\ (2)",
          "explanation": "Both equations contain the same $+b$, which makes elimination by subtraction convenient.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Subtract equation (2) from (1)",
          "workingLatex": "(2a + b) - (-a + b) = 7 - (-2)",
          "explanation": "Subtracting removes $b$ because it appears identically in both equations.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "3a = 9",
          "explanation": "The $b$ terms cancel and the $a$ terms combine to leave a single equation in $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for a",
          "workingLatex": "a = 3",
          "explanation": "Dividing by $3$ gives the gradient of the linear function.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute back to find b",
          "workingLatex": "2(3) + b = 7",
          "explanation": "Putting $a=3$ into equation (1) leaves an equation with $b$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for b",
          "workingLatex": "6 + b = 7 \\ \\Rightarrow \\ b = 1",
          "explanation": "Subtracting $6$ from both sides gives the intercept $b$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State both values",
          "workingLatex": "a = 3, \\quad b = 1",
          "explanation": "These values make $f(x)=3x+1$, which satisfies both original conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a = 3$ and $b = 1$"
    }
  },
  {
    "id": "al.y2.pure.functions.q038",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["composite functions", "domain and range", "completing the square"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = x^2$ ($x \\geq 0$) and $g(x) = x - 1$. Find $fg(x)$ and state its range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the order for fg",
          "workingLatex": "fg(x) = f(g(x))",
          "explanation": "For $fg$ we apply $g$ first, then square the result via $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the inner function",
          "workingLatex": "g(x) = x - 1",
          "explanation": "This output becomes the input to $f$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the domain restriction on f",
          "workingLatex": "x - 1 \\geq 0 \\ \\Rightarrow \\ x \\geq 1",
          "explanation": "Because $f$ only accepts inputs $\\geq 0$, we need $g(x)=x-1\\geq 0$, giving the composite's domain.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute g(x) into f",
          "workingLatex": "fg(x) = (x - 1)^2",
          "explanation": "Since $f$ squares its input, we square the whole of $x-1$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find where the composite is smallest",
          "workingLatex": "(x - 1)^2 = 0 \\ \\text{when} \\ x = 1",
          "explanation": "A square is smallest when the bracket is zero, which happens at $x=1$ (the start of the domain).",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the minimum output",
          "workingLatex": "fg(1) = 0",
          "explanation": "At $x=1$ the composite gives its least output, $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Consider large values of x",
          "workingLatex": "(x - 1)^2 \\to \\infty \\ \\text{as} \\ x \\to \\infty",
          "explanation": "As $x$ increases beyond $1$, the square grows without any upper bound.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the range",
          "workingLatex": "fg(x) \\geq 0",
          "explanation": "The outputs run from the minimum $0$ upwards, so the range is all values at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Present the composite and its range",
          "workingLatex": "fg(x) = (x - 1)^2, \\quad fg(x) \\geq 0",
          "explanation": "This gives both the required rule and its set of possible outputs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(x) = (x - 1)^2$; range $fg(x) \\geq 0$"
    }
  },
  {
    "id": "al.y2.pure.functions.q039",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "expression",
    "tags": ["composite functions", "algebraic fractions", "self-composition"],
    "questionText": "The function $f$ is defined by $f(x) = \\dfrac{5}{x + 2}$, $x \\neq -2$. Find $ff(x)$, giving your answer as a single fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State what ff means",
          "workingLatex": "ff(x) = f(f(x))",
          "explanation": "The function $f$ is applied twice, so its own output becomes the new input.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the inner function",
          "workingLatex": "f(x) = \\dfrac{5}{x + 2}",
          "explanation": "This is the value we will substitute into $f$ a second time.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute f(x) into f",
          "workingLatex": "ff(x) = \\dfrac{5}{\\dfrac{5}{x + 2} + 2}",
          "explanation": "Wherever $f$ had $x+2$ in the denominator, we now use the whole fraction $\\tfrac{5}{x+2}$ as the input.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Combine the terms in the denominator",
          "workingLatex": "\\dfrac{5}{x + 2} + 2 = \\dfrac{5 + 2(x + 2)}{x + 2}",
          "explanation": "Writing $2$ over the common denominator $x+2$ lets the two terms be added as one fraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Expand and simplify the numerator",
          "workingLatex": "5 + 2(x + 2) = 2x + 9",
          "explanation": "Expanding gives $5+2x+4 = 2x+9$, tidying the denominator of the big fraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rewrite the composite",
          "workingLatex": "ff(x) = \\dfrac{5}{\\dfrac{2x + 9}{x + 2}}",
          "explanation": "The whole expression is now a single fraction divided by another single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide by flipping the lower fraction",
          "workingLatex": "ff(x) = 5 \\times \\dfrac{x + 2}{2x + 9}",
          "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Write as a single fraction",
          "workingLatex": "ff(x) = \\dfrac{5(x + 2)}{2x + 9}",
          "explanation": "Multiplying the $5$ into the numerator produces the required single fraction.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "ff(x) = \\dfrac{5(x + 2)}{2x + 9}",
          "explanation": "This is fully simplified, valid provided $2x+9\\neq 0$ and $x\\neq -2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$ff(x) = \\dfrac{5(x + 2)}{2x + 9}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q040",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "value",
    "tags": ["composite functions", "solving equations", "finding constants"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = 2x$ and $g(x) = x + k$, where $k$ is a constant. Given that $fg(3) = 14$, find the value of $k$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the order for fg(3)",
          "workingLatex": "fg(3) = f(g(3))",
          "explanation": "For $fg(3)$ we evaluate $g$ at $3$ first, then apply $f$ to the result.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Evaluate the inner function at 3",
          "workingLatex": "g(3) = 3 + k",
          "explanation": "Substituting $x=3$ into $g(x)=x+k$ gives the input that will be passed to $f$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply f to this input",
          "workingLatex": "f(3 + k) = 2(3 + k)",
          "explanation": "Since $f$ doubles its input, we double the whole of $3+k$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the bracket",
          "workingLatex": "fg(3) = 6 + 2k",
          "explanation": "Multiplying out gives an expression for $fg(3)$ in terms of $k$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the given condition",
          "workingLatex": "6 + 2k = 14",
          "explanation": "Setting the expression equal to the known value $14$ produces an equation for $k$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract 6 from both sides",
          "workingLatex": "2k = 8",
          "explanation": "Removing the constant isolates the term containing $k$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for k",
          "workingLatex": "k = 4",
          "explanation": "Dividing by $2$ gives the required value of the constant.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check the answer",
          "workingLatex": "g(3) = 7, \\ f(7) = 14",
          "explanation": "With $k=4$, $g(3)=7$ and doubling gives $14$, confirming the condition is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final value",
          "workingLatex": "k = 4",
          "explanation": "This is the value of $k$ that makes $fg(3)=14$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$k = 4$"
    }
  },
  {
    "id": "al.y2.pure.functions.q041",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "interval",
    "tags": ["completing the square", "domain and range", "quadratic functions"],
    "questionText": "The function $f$ is defined by $f(x) = x^2 - 6x + 11$ for real $x$. By completing the square, find the least value of $f$ and state its range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "f(x) = x^2 - 6x + 11",
          "explanation": "This upward-opening parabola has a lowest point at its vertex, which completing the square exposes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x",
          "workingLatex": "\\dfrac{-6}{2} = -3",
          "explanation": "Half of the $x$-coefficient becomes the number inside the bracket of the completed square.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the squared bracket",
          "workingLatex": "(x - 3)^2 = x^2 - 6x + 9",
          "explanation": "This bracket reproduces the $x^2-6x$ part but adds an extra $9$ that we must account for.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rewrite the quadratic part",
          "workingLatex": "x^2 - 6x = (x - 3)^2 - 9",
          "explanation": "Subtracting the extra $9$ keeps the expression equal to the original $x^2-6x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Include the constant term",
          "workingLatex": "f(x) = (x - 3)^2 - 9 + 11",
          "explanation": "Bringing back the $+11$ from the original function completes the rewrite.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify to completed-square form",
          "workingLatex": "f(x) = (x - 3)^2 + 2",
          "explanation": "Combining $-9+11$ gives the vertex form, showing the turning point directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the non-negativity of a square",
          "workingLatex": "(x - 3)^2 \\geq 0",
          "explanation": "The squared bracket is smallest when it equals zero, at $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the least value",
          "workingLatex": "f_{\\min} = 2 \\ \\text{at} \\ x = 3",
          "explanation": "When the square is zero, only the constant $+2$ remains, giving the minimum output.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range",
          "workingLatex": "f(x) \\geq 2",
          "explanation": "Because the parabola rises on both sides of the vertex, every output is at least $2$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(x) = (x - 3)^2 + 2$; least value $2$, so range $f(x) \\geq 2$"
    }
  },
  {
    "id": "al.y2.pure.functions.q042",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["composite functions", "solving equations", "algebraic fractions"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = 3x - 1$ and $g(x) = \\dfrac{2}{x}$ ($x \\neq 0$). Solve the equation $fg(x) = 11$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the order for fg",
          "workingLatex": "fg(x) = f(g(x))",
          "explanation": "For $fg$ we apply $g$ first, then multiply by $3$ and subtract $1$ via $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the inner function",
          "workingLatex": "g(x) = \\dfrac{2}{x}",
          "explanation": "This reciprocal-style expression is the input that $f$ will act on.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute g(x) into f",
          "workingLatex": "fg(x) = 3 \\left(\\dfrac{2}{x}\\right) - 1",
          "explanation": "Every $x$ in $f(x)=3x-1$ is replaced by $\\tfrac{2}{x}$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the composite",
          "workingLatex": "fg(x) = \\dfrac{6}{x} - 1",
          "explanation": "Multiplying $3$ by $\\tfrac{2}{x}$ gives $\\tfrac{6}{x}$, tidying the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Form the required equation",
          "workingLatex": "\\dfrac{6}{x} - 1 = 11",
          "explanation": "Setting the composite equal to $11$ gives the equation to solve.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Add 1 to both sides",
          "workingLatex": "\\dfrac{6}{x} = 12",
          "explanation": "Removing the $-1$ isolates the fraction on the left.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Multiply both sides by x",
          "workingLatex": "6 = 12x",
          "explanation": "Clearing the fraction by multiplying by $x$ turns it into a simple linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "x = \\dfrac{6}{12} = \\dfrac{1}{2}",
          "explanation": "Dividing by $12$ and simplifying gives the value of $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the value is allowed",
          "workingLatex": "x = \\dfrac{1}{2} \\neq 0",
          "explanation": "Since $g$ requires $x\\neq 0$ and $\\tfrac{1}{2}$ satisfies this, the solution is valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = \\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q043",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inverse functions", "verification"],
    "questionText": "The function $f$ is defined by $f(x) = 3x + 2$. Find $f^{-1}(x)$ and verify that $f^{-1}(f(x)) = x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the output as a variable",
          "workingLatex": "y = 3x + 2",
          "explanation": "Setting $y = f(x)$ lets us treat the output as a single quantity we can rearrange; finding an inverse is just reversing the roles of input and output.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the aim",
          "workingLatex": "\\text{make } x \\text{ the subject of } y = 3x + 2",
          "explanation": "The inverse undoes $f$, so we untangle the formula until $x$ is written in terms of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract 2 from both sides",
          "workingLatex": "y - 2 = 3x",
          "explanation": "Removing the $+2$ peels off the last thing $f$ did, working backwards from output towards input.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide both sides by 3",
          "workingLatex": "x = \\dfrac{y - 2}{3}",
          "explanation": "Dividing by $3$ undoes the multiplication, leaving $x$ alone as required.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = \\dfrac{x - 2}{3}",
          "explanation": "We relabel with $x$ because an inverse is itself a function of its own input variable.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the verification",
          "workingLatex": "f^{-1}(f(x)) = f^{-1}(3x + 2)",
          "explanation": "Feeding $f(x)$ into $f^{-1}$ should hand back the original $x$ if the inverse is correct.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the inverse rule",
          "workingLatex": "f^{-1}(3x + 2) = \\dfrac{(3x + 2) - 2}{3}",
          "explanation": "We substitute $3x+2$ into the rule $\\dfrac{x-2}{3}$, replacing every $x$ by the incoming expression.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the numerator",
          "workingLatex": "= \\dfrac{3x}{3}",
          "explanation": "The $+2$ and $-2$ cancel, showing the inverse removes exactly what $f$ added.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the fraction",
          "workingLatex": "= x",
          "explanation": "Dividing $3x$ by $3$ recovers $x$, so the two functions genuinely undo one another.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "f^{-1}(x) = \\dfrac{x - 2}{3}, \\qquad f^{-1}(f(x)) = x",
          "explanation": "Landing back on $x$ confirms both the inverse and the verification.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x) = \\dfrac{x - 2}{3}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q044",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inverse functions"],
    "questionText": "The function $f$ is defined by $f(x) = \\dfrac{x - 1}{2}$. Find $f^{-1}(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the output as a variable",
          "workingLatex": "y = \\dfrac{x - 1}{2}",
          "explanation": "Naming the output $y$ turns the rule into an equation we can rearrange to reverse it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the aim",
          "workingLatex": "\\text{make } x \\text{ the subject}",
          "explanation": "The inverse expresses the input in terms of the output, so we solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply both sides by 2",
          "workingLatex": "2y = x - 1",
          "explanation": "Clearing the denominator first makes the remaining rearrangement clean and simple.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Add 1 to both sides",
          "workingLatex": "2y + 1 = x",
          "explanation": "Adding $1$ undoes the $-1$, isolating $x$ on one side.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write x as the subject",
          "workingLatex": "x = 2y + 1",
          "explanation": "This is the reverse rule: given an output $y$, it returns the original input.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = 2x + 1",
          "explanation": "Relabelling $y$ as $x$ presents the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sanity check the forward map",
          "workingLatex": "f(3) = \\dfrac{3 - 1}{2} = 1",
          "explanation": "Testing a value catches slips: $f$ sends $3$ to $1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sanity check the inverse map",
          "workingLatex": "f^{-1}(1) = 2(1) + 1 = 3",
          "explanation": "The inverse sends $1$ straight back to $3$, exactly as it should.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "f^{-1}(x) = 2x + 1",
          "explanation": "The forward and reverse checks agree, so the inverse is confirmed.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x) = 2x + 1$"
    }
  },
  {
    "id": "al.y2.pure.functions.q045",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inverse functions", "domain and range"],
    "questionText": "The function $f$ is defined by $f(x) = \\dfrac{5}{x - 3}$, $x \\neq 3$. Find $f^{-1}(x)$ and state its domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the output as a variable",
          "workingLatex": "y = \\dfrac{5}{x - 3}",
          "explanation": "Naming the output $y$ lets us rearrange the rule to reverse it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the aim",
          "workingLatex": "\\text{make } x \\text{ the subject}",
          "explanation": "The inverse writes the input in terms of the output, so we solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply both sides by (x - 3)",
          "workingLatex": "y(x - 3) = 5",
          "explanation": "Clearing the fraction removes $x$ from the denominator so it can be isolated.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Divide both sides by y",
          "workingLatex": "x - 3 = \\dfrac{5}{y}",
          "explanation": "Dividing by $y$ frees the bracket containing $x$ from its multiplier.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Add 3 to both sides",
          "workingLatex": "x = 3 + \\dfrac{5}{y}",
          "explanation": "Adding $3$ undoes the earlier subtraction, leaving $x$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = 3 + \\dfrac{5}{x}",
          "explanation": "Relabelling $y$ as $x$ gives the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Recall the domain rule",
          "workingLatex": "\\text{domain of } f^{-1} = \\text{range of } f",
          "explanation": "The inverse can only accept the values $f$ was able to produce, so its domain matches the range of $f$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the range of f",
          "workingLatex": "\\dfrac{5}{x - 3} \\neq 0 \\text{ for all } x",
          "explanation": "A fraction with a non-zero numerator can never equal zero, so $f$ never outputs $0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range of f",
          "workingLatex": "\\text{range of } f: \\; f(x) \\neq 0",
          "explanation": "Every real value except $0$ is achievable, which pins down the range.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Deduce the domain of the inverse",
          "workingLatex": "x \\neq 0",
          "explanation": "Since the range of $f$ excludes $0$, the inverse cannot accept $0$ as an input.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the conclusion",
          "workingLatex": "f^{-1}(x) = 3 + \\dfrac{5}{x}, \\; x \\neq 0",
          "explanation": "This is consistent with the formula itself, whose denominator forbids $x = 0$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x) = 3 + \\dfrac{5}{x}, \\; x \\neq 0$"
    }
  },
  {
    "id": "al.y2.pure.functions.q046",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inverse functions", "domain and range"],
    "questionText": "The function $f$ is defined by $f(x) = x^2 + 4$ for $x \\geq 0$. Find $f^{-1}(x)$ and state its domain and range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the output as a variable",
          "workingLatex": "y = x^2 + 4",
          "explanation": "Naming the output $y$ sets up the rearrangement that reverses the rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the aim",
          "workingLatex": "\\text{make } x \\text{ the subject}",
          "explanation": "The inverse gives the input from the output, so we solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Subtract 4 from both sides",
          "workingLatex": "y - 4 = x^2",
          "explanation": "Removing the $+4$ isolates the squared term ready for a square root.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Take the square root",
          "workingLatex": "x = \\pm\\sqrt{y - 4}",
          "explanation": "Undoing a square introduces two possibilities, one positive and one negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the correct root",
          "workingLatex": "x = \\sqrt{y - 4} \\quad (\\text{since } x \\geq 0)",
          "explanation": "The domain restriction $x \\geq 0$ rules out the negative root, so we keep only the positive one.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = \\sqrt{x - 4}",
          "explanation": "Relabelling $y$ as $x$ expresses the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the range of f",
          "workingLatex": "x \\geq 0 \\Rightarrow x^2 \\geq 0 \\Rightarrow f(x) \\geq 4",
          "explanation": "Squaring gives at least $0$, and adding $4$ lifts every output to $4$ or more.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the domain of the inverse",
          "workingLatex": "\\text{domain of } f^{-1}: \\; x \\geq 4",
          "explanation": "The domain of the inverse equals the range of $f$, which starts at $4$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the range of the inverse",
          "workingLatex": "\\text{range of } f^{-1}: \\; f^{-1}(x) \\geq 0",
          "explanation": "The range of the inverse equals the domain of $f$, namely $x \\geq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "f^{-1}(x) = \\sqrt{x - 4}, \\; x \\geq 4, \\; f^{-1}(x) \\geq 0",
          "explanation": "The inverse simply swaps the domain and range of the original function.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x) = \\sqrt{x - 4}$; domain $x \\geq 4$; range $f^{-1}(x) \\geq 0$"
    }
  },
  {
    "id": "al.y2.pure.functions.q047",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "value",
    "tags": ["inverse functions", "solving equations"],
    "questionText": "The function $f$ is defined by $f(x) = 2x - 7$. Find $f^{-1}(x)$ and hence solve $f(x) = f^{-1}(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the output as a variable",
          "workingLatex": "y = 2x - 7",
          "explanation": "Naming the output $y$ sets up the rearrangement that reverses the rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Add 7 to both sides",
          "workingLatex": "y + 7 = 2x",
          "explanation": "Adding $7$ undoes the subtraction, working backwards from output to input.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Divide both sides by 2",
          "workingLatex": "x = \\dfrac{y + 7}{2}",
          "explanation": "Dividing by $2$ undoes the multiplication, isolating $x$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = \\dfrac{x + 7}{2}",
          "explanation": "Relabelling $y$ as $x$ gives the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the equation to solve",
          "workingLatex": "2x - 7 = \\dfrac{x + 7}{2}",
          "explanation": "We equate the two rules and solve directly for the value where they agree.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply both sides by 2",
          "workingLatex": "4x - 14 = x + 7",
          "explanation": "Clearing the fraction turns this into a straightforward linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Collect the x terms",
          "workingLatex": "3x - 14 = 7",
          "explanation": "Subtracting $x$ from both sides gathers the unknown on one side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for x",
          "workingLatex": "3x = 21 \\;\\Rightarrow\\; x = 7",
          "explanation": "Adding $14$ and dividing by $3$ isolates $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the solution",
          "workingLatex": "f(7) = 2(7) - 7 = 7, \\quad f^{-1}(7) = \\dfrac{7 + 7}{2} = 7",
          "explanation": "Both functions give $7$ at $x = 7$, confirming the equation is satisfied.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the conclusion",
          "workingLatex": "f^{-1}(x) = \\dfrac{x + 7}{2}, \\quad x = 7",
          "explanation": "The graphs of $f$ and $f^{-1}$ meet on the line $y = x$, exactly where $x = 7$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x) = \\dfrac{x + 7}{2}, \\; x = 7$"
    }
  },
  {
    "id": "al.y2.pure.functions.q048",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inverse functions", "rational functions"],
    "questionText": "The function $f$ is defined by $f(x) = \\dfrac{2x + 1}{x - 3}$, $x \\neq 3$. Find $f^{-1}(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the output as a variable",
          "workingLatex": "y = \\dfrac{2x + 1}{x - 3}",
          "explanation": "Naming the output $y$ lets us rearrange the rule to reverse it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply both sides by (x - 3)",
          "workingLatex": "y(x - 3) = 2x + 1",
          "explanation": "Clearing the fraction removes $x$ from the denominator so it can be gathered.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the left-hand side",
          "workingLatex": "yx - 3y = 2x + 1",
          "explanation": "Expanding spreads $x$ across the equation, ready to be collected together.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gather the x terms on one side",
          "workingLatex": "yx - 2x = 3y + 1",
          "explanation": "Moving all $x$ terms to the left and the rest to the right prepares for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out x",
          "workingLatex": "x(y - 2) = 3y + 1",
          "explanation": "Taking $x$ out as a common factor lets us isolate it in one division.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to make x the subject",
          "workingLatex": "x = \\dfrac{3y + 1}{y - 2}",
          "explanation": "Dividing by the bracket leaves $x$ expressed purely in terms of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = \\dfrac{3x + 1}{x - 2}",
          "explanation": "Relabelling $y$ as $x$ gives the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Note the excluded input",
          "workingLatex": "x \\neq 2",
          "explanation": "The denominator $x - 2$ cannot be zero, matching that $f$ never outputs the value $2$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "f^{-1}(x) = \\dfrac{3x + 1}{x - 2}, \\; x \\neq 2",
          "explanation": "This reverses the original rational rule cleanly.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x) = \\dfrac{3x + 1}{x - 2}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q049",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "expression",
    "tags": ["inverse functions", "domain and range"],
    "questionText": "The function $f$ is defined by $f(x) = \\sqrt{x + 2}$, $x \\geq -2$. Find $f^{-1}(x)$ and state its domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the output as a variable",
          "workingLatex": "y = \\sqrt{x + 2}",
          "explanation": "Naming the output $y$ sets up the rearrangement that reverses the rule.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the aim",
          "workingLatex": "\\text{make } x \\text{ the subject}",
          "explanation": "The inverse writes the input in terms of the output, so we solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Square both sides",
          "workingLatex": "y^2 = x + 2",
          "explanation": "Squaring undoes the square root, freeing $x$ from inside it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Subtract 2 from both sides",
          "workingLatex": "x = y^2 - 2",
          "explanation": "Removing the $+2$ isolates $x$ completely.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = x^2 - 2",
          "explanation": "Relabelling $y$ as $x$ gives the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the range of f",
          "workingLatex": "\\sqrt{x + 2} \\geq 0 \\Rightarrow f(x) \\geq 0",
          "explanation": "A square root is never negative, so every output of $f$ is at least $0$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Deduce the domain of the inverse",
          "workingLatex": "\\text{domain of } f^{-1}: \\; x \\geq 0",
          "explanation": "The domain of the inverse equals the range of $f$, which is $x \\geq 0$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Explain why the restriction matters",
          "workingLatex": "f^{-1}(x) = x^2 - 2 \\text{ only for } x \\geq 0",
          "explanation": "Without the restriction $x^2 - 2$ would not be a true inverse, since $f$ only reaches non-negative inputs.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "f^{-1}(x) = x^2 - 2, \\; x \\geq 0",
          "explanation": "The inverse takes the non-negative outputs of $f$ back to the original inputs.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x) = x^2 - 2, \\; x \\geq 0$"
    }
  },
  {
    "id": "al.y2.pure.functions.q050",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["inverse functions", "self-inverse", "rational functions"],
    "questionText": "The function $f$ is defined by $f(x) = \\dfrac{x + 3}{x - 1}$, $x \\neq 1$. Show that $f$ is self-inverse by finding $f^{-1}(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the output as a variable",
          "workingLatex": "y = \\dfrac{x + 3}{x - 1}",
          "explanation": "Naming the output $y$ lets us rearrange the rule to reverse it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Multiply both sides by (x - 1)",
          "workingLatex": "y(x - 1) = x + 3",
          "explanation": "Clearing the fraction removes $x$ from the denominator so it can be gathered.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the left-hand side",
          "workingLatex": "yx - y = x + 3",
          "explanation": "Expanding spreads $x$ across the equation, ready to be collected.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Gather the x terms on one side",
          "workingLatex": "yx - x = y + 3",
          "explanation": "Moving all $x$ terms to the left and everything else to the right prepares for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Factor out x",
          "workingLatex": "x(y - 1) = y + 3",
          "explanation": "Taking $x$ out as a common factor lets us isolate it in one division.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide to make x the subject",
          "workingLatex": "x = \\dfrac{y + 3}{y - 1}",
          "explanation": "Dividing by the bracket leaves $x$ expressed purely in terms of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = \\dfrac{x + 3}{x - 1}",
          "explanation": "Relabelling $y$ as $x$ gives the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compare with the original function",
          "workingLatex": "f^{-1}(x) = \\dfrac{x + 3}{x - 1} = f(x)",
          "explanation": "The inverse is identical to $f$ itself, which is the hallmark of a self-inverse function.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the conclusion",
          "workingLatex": "f^{-1}(x) = f(x) \\;\\Rightarrow\\; f \\text{ is self-inverse}",
          "explanation": "Because applying $f$ twice returns the start, its graph is symmetric in the line $y = x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x) = \\dfrac{x + 3}{x - 1}$, so $f$ is self-inverse"
    }
  },
  {
    "id": "al.y2.pure.functions.q051",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["inverse functions", "completing the square", "domain and range"],
    "questionText": "The function $f$ is defined by $f(x) = x^2 - 4x + 7$ for $x \\geq 2$. By completing the square, find $f^{-1}(x)$ and state its domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write down the function",
          "workingLatex": "f(x) = x^2 - 4x + 7",
          "explanation": "Completing the square rewrites the quadratic so the single $x$ can later be isolated.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Halve the coefficient of x",
          "workingLatex": "\\tfrac{1}{2}(-4) = -2",
          "explanation": "The number inside the bracket is always half the coefficient of $x$, here giving $-2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Form the completed-square term",
          "workingLatex": "x^2 - 4x = (x - 2)^2 - 4",
          "explanation": "Expanding $(x-2)^2$ gives $x^2 - 4x + 4$, so we subtract the extra $4$ to stay equal.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute back into f",
          "workingLatex": "f(x) = (x - 2)^2 - 4 + 7 = (x - 2)^2 + 3",
          "explanation": "Combining the constants gives a tidy form with $x$ appearing only inside the bracket.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the output as a variable",
          "workingLatex": "y = (x - 2)^2 + 3",
          "explanation": "Naming the output $y$ sets up the rearrangement that reverses the rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract 3 from both sides",
          "workingLatex": "y - 3 = (x - 2)^2",
          "explanation": "Removing the $+3$ isolates the squared bracket ready for a square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "x - 2 = \\pm\\sqrt{y - 3}",
          "explanation": "Undoing the square gives two branches, one positive and one negative.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Choose the correct branch",
          "workingLatex": "x \\geq 2 \\Rightarrow x - 2 \\geq 0",
          "explanation": "The domain $x \\geq 2$ makes $x - 2$ non-negative, so only the positive root applies.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Keep the positive root",
          "workingLatex": "x - 2 = \\sqrt{y - 3}",
          "explanation": "Discarding the negative branch leaves a single valid expression.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Make x the subject",
          "workingLatex": "x = 2 + \\sqrt{y - 3}",
          "explanation": "Adding $2$ isolates $x$ fully in terms of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = 2 + \\sqrt{x - 3}",
          "explanation": "Relabelling $y$ as $x$ gives the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the range of f",
          "workingLatex": "\\text{min at } x = 2: \\; f(2) = 3, \\text{ then increasing} \\Rightarrow f(x) \\geq 3",
          "explanation": "The vertex sits at $(2, 3)$ and the curve only rises for $x \\geq 2$, so outputs start at $3$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Deduce the domain of the inverse",
          "workingLatex": "\\text{domain of } f^{-1}: \\; x \\geq 3",
          "explanation": "The domain of the inverse equals the range of $f$, which begins at $3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "f^{-1}(x) = 2 + \\sqrt{x - 3}, \\; x \\geq 3",
          "explanation": "The square root also demands $x - 3 \\geq 0$, agreeing with the domain we found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x) = 2 + \\sqrt{x - 3}, \\; x \\geq 3$"
    }
  },
  {
    "id": "al.y2.pure.functions.q052",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["composite functions", "inverse functions", "domain and range"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = 2x + 1$ and $g(x) = x^2$ for $x \\geq 0$. Find $fg(x)$ and hence $(fg)^{-1}(x)$, stating its domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the composite",
          "workingLatex": "fg(x) = f(g(x))",
          "explanation": "In $fg$ the function $g$ acts first, then $f$ is applied to its output.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute g into f",
          "workingLatex": "f(g(x)) = f(x^2)",
          "explanation": "Since $g(x) = x^2$, that expression becomes the input to $f$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule for f",
          "workingLatex": "f(x^2) = 2(x^2) + 1",
          "explanation": "The rule for $f$ doubles its input and adds $1$, applied here to $x^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the composite",
          "workingLatex": "fg(x) = 2x^2 + 1",
          "explanation": "This single expression captures both operations combined.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the output as a variable",
          "workingLatex": "y = 2x^2 + 1",
          "explanation": "Naming the output $y$ sets up the rearrangement that reverses the composite.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Subtract 1 from both sides",
          "workingLatex": "y - 1 = 2x^2",
          "explanation": "Removing the $+1$ isolates the term containing $x$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide both sides by 2",
          "workingLatex": "\\dfrac{y - 1}{2} = x^2",
          "explanation": "Dividing by $2$ leaves the squared term alone, ready for a square root.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "x = \\pm\\sqrt{\\dfrac{y - 1}{2}}",
          "explanation": "Undoing the square gives a positive and a negative possibility.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Choose the correct root",
          "workingLatex": "x = \\sqrt{\\dfrac{y - 1}{2}} \\quad (\\text{since } x \\geq 0)",
          "explanation": "The domain $x \\geq 0$ eliminates the negative branch.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the inverse composite",
          "workingLatex": "(fg)^{-1}(x) = \\sqrt{\\dfrac{x - 1}{2}}",
          "explanation": "Relabelling $y$ as $x$ presents the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the range of fg",
          "workingLatex": "x \\geq 0 \\Rightarrow x^2 \\geq 0 \\Rightarrow 2x^2 + 1 \\geq 1",
          "explanation": "Squaring gives at least $0$, so doubling and adding $1$ makes outputs at least $1$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Deduce the domain of the inverse",
          "workingLatex": "\\text{domain of } (fg)^{-1}: \\; x \\geq 1",
          "explanation": "The domain of the inverse equals the range of $fg$, which starts at $1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "(fg)^{-1}(x) = \\sqrt{\\dfrac{x - 1}{2}}, \\; x \\geq 1",
          "explanation": "The square root also requires $x - 1 \\geq 0$, matching the domain we found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(x) = 2x^2 + 1$; $(fg)^{-1}(x) = \\sqrt{\\dfrac{x - 1}{2}}, \\; x \\geq 1$"
    }
  },
  {
    "id": "al.y2.pure.functions.q053",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "expression",
    "tags": ["inverse functions", "rational functions", "domain and range"],
    "questionText": "The function $f$ is defined by $f(x) = \\dfrac{3x - 1}{x + 2}$, $x \\neq -2$. Find $f^{-1}(x)$ and state the value that must be excluded from its domain.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the output as a variable",
          "workingLatex": "y = \\dfrac{3x - 1}{x + 2}",
          "explanation": "Naming the output $y$ lets us rearrange the rule to reverse it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the aim",
          "workingLatex": "\\text{make } x \\text{ the subject}",
          "explanation": "The inverse writes the input in terms of the output, so we solve for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Multiply both sides by (x + 2)",
          "workingLatex": "y(x + 2) = 3x - 1",
          "explanation": "Clearing the fraction removes $x$ from the denominator so it can be gathered.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Expand the left-hand side",
          "workingLatex": "yx + 2y = 3x - 1",
          "explanation": "Expanding spreads $x$ across the equation, ready to be collected.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Gather the x terms on one side",
          "workingLatex": "yx - 3x = -1 - 2y",
          "explanation": "Moving all $x$ terms left and the rest right prepares for factorising.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Factor out x",
          "workingLatex": "x(y - 3) = -1 - 2y",
          "explanation": "Taking $x$ out as a common factor lets us isolate it in one division.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Divide to make x the subject",
          "workingLatex": "x = \\dfrac{-1 - 2y}{y - 3}",
          "explanation": "Dividing by the bracket leaves $x$ expressed purely in terms of $y$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Tidy the signs",
          "workingLatex": "x = \\dfrac{2y + 1}{3 - y}",
          "explanation": "Multiplying top and bottom by $-1$ gives a neater form with the same value.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = \\dfrac{2x + 1}{3 - x}",
          "explanation": "Relabelling $y$ as $x$ gives the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set the denominator to zero",
          "workingLatex": "3 - x = 0",
          "explanation": "The inverse is undefined wherever its denominator vanishes, so we test for that.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for the excluded value",
          "workingLatex": "x = 3",
          "explanation": "At $x = 3$ the formula divides by zero, so this input is forbidden.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Interpret using the range of f",
          "workingLatex": "y = 3 \\text{ is the horizontal asymptote of } f",
          "explanation": "As $x$ grows, $\\dfrac{3x-1}{x+2}$ approaches $3$ but never reaches it, so $3$ is missing from the range of $f$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Link to the inverse's domain",
          "workingLatex": "\\text{domain of } f^{-1} = \\text{range of } f \\Rightarrow x \\neq 3",
          "explanation": "Since $f$ never outputs $3$, the inverse cannot accept $3$ as an input.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "f^{-1}(x) = \\dfrac{2x + 1}{3 - x}, \\; x \\neq 3",
          "explanation": "The algebra and the asymptote reasoning agree on the excluded value.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f^{-1}(x) = \\dfrac{2x + 1}{3 - x}$; exclude $x = 3$"
    }
  },
  {
    "id": "al.y2.pure.functions.q054",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "expression",
    "tags": ["inverse functions", "domain and range"],
    "questionText": "The function $f$ is defined by $f(x) = 4 - x^2$ with domain $0 \\leq x \\leq 2$. Find the range of $f$ and find $f^{-1}(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Study the behaviour of f",
          "workingLatex": "f(x) = 4 - x^2, \\quad 0 \\leq x \\leq 2",
          "explanation": "To find the range we track how the output moves as $x$ runs across the domain.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Note the direction of change",
          "workingLatex": "x \\uparrow \\Rightarrow x^2 \\uparrow \\Rightarrow 4 - x^2 \\downarrow",
          "explanation": "As $x$ increases, $x^2$ grows, so subtracting it from $4$ makes $f$ steadily decrease.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate at the lower end",
          "workingLatex": "f(0) = 4 - 0 = 4",
          "explanation": "Since $f$ is decreasing, its largest value occurs at the smallest $x$, namely $x = 0$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate at the upper end",
          "workingLatex": "f(2) = 4 - 4 = 0",
          "explanation": "The smallest value occurs at the largest $x$, giving the bottom of the range.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the range of f",
          "workingLatex": "0 \\leq f(x) \\leq 4",
          "explanation": "Because $f$ moves continuously from $4$ down to $0$, it hits every value in between.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Turn to finding the inverse",
          "workingLatex": "\\text{now reverse the rule to make } x \\text{ the subject}",
          "explanation": "With the range settled, we find the inverse by rearranging so the input is written in terms of the output.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Write the output as a variable",
          "workingLatex": "y = 4 - x^2",
          "explanation": "Naming the output $y$ sets up the rearrangement that reverses the rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for the squared term",
          "workingLatex": "x^2 = 4 - y",
          "explanation": "Moving $x^2$ and $y$ to opposite sides isolates the square ready for a root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the square root",
          "workingLatex": "x = \\pm\\sqrt{4 - y}",
          "explanation": "Undoing the square gives two possibilities, one positive and one negative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Choose the correct root",
          "workingLatex": "x = \\sqrt{4 - y} \\quad (\\text{since } 0 \\leq x \\leq 2)",
          "explanation": "The domain keeps $x$ non-negative, so only the positive root is valid.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Write the inverse function",
          "workingLatex": "f^{-1}(x) = \\sqrt{4 - x}",
          "explanation": "Relabelling $y$ as $x$ gives the inverse as a function of its own input.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the domain of the inverse",
          "workingLatex": "\\text{domain of } f^{-1}: \\; 0 \\leq x \\leq 4",
          "explanation": "The domain of the inverse equals the range of $f$ found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the conclusion",
          "workingLatex": "0 \\leq f(x) \\leq 4, \\qquad f^{-1}(x) = \\sqrt{4 - x}",
          "explanation": "The inverse swaps the domain and range of the original function.",
          "diagram": null
        }
      ],
      "finalAnswer": "range $0 \\leq f(x) \\leq 4$; $f^{-1}(x) = \\sqrt{4 - x}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q055",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": ["composite functions", "solving equations"],
    "questionText": "The functions $f$ and $g$ are defined by $f(x) = x + 4$ and $g(x) = x^2$. Solve $fg(x) = gf(x)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the first composite",
          "workingLatex": "fg(x) = f(g(x))",
          "explanation": "In $fg$ the function $g$ acts first, then $f$ is applied to its output.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute g into f",
          "workingLatex": "f(g(x)) = f(x^2)",
          "explanation": "Since $g(x) = x^2$, this becomes the input to $f$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the rule for f",
          "workingLatex": "fg(x) = x^2 + 4",
          "explanation": "The rule for $f$ simply adds $4$ to its input.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interpret the second composite",
          "workingLatex": "gf(x) = g(f(x))",
          "explanation": "In $gf$ the function $f$ acts first, then $g$ squares the result.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute f into g",
          "workingLatex": "g(f(x)) = g(x + 4)",
          "explanation": "Since $f(x) = x + 4$, that expression becomes the input to $g$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the rule for g",
          "workingLatex": "gf(x) = (x + 4)^2",
          "explanation": "The rule for $g$ squares whatever it receives.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the square",
          "workingLatex": "(x + 4)^2 = x^2 + 8x + 16",
          "explanation": "Expanding writes the composite as a comparable quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set the two composites equal",
          "workingLatex": "x^2 + 4 = x^2 + 8x + 16",
          "explanation": "The equation $fg(x) = gf(x)$ asks where the two outputs coincide.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Cancel the squared terms",
          "workingLatex": "4 = 8x + 16",
          "explanation": "Subtracting $x^2$ from both sides removes the quadratic, leaving a linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Isolate the x term",
          "workingLatex": "8x = 4 - 16 = -12",
          "explanation": "Subtracting $16$ gathers the constants on one side.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Solve for x",
          "workingLatex": "x = \\dfrac{-12}{8} = -\\dfrac{3}{2}",
          "explanation": "Dividing by $8$ and simplifying gives the single solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the left-hand side",
          "workingLatex": "fg\\!\\left(-\\tfrac{3}{2}\\right) = \\left(-\\tfrac{3}{2}\\right)^2 + 4 = \\tfrac{9}{4} + 4 = \\tfrac{25}{4}",
          "explanation": "Substituting back checks the arithmetic on the $fg$ side.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the right-hand side",
          "workingLatex": "gf\\!\\left(-\\tfrac{3}{2}\\right) = \\left(-\\tfrac{3}{2} + 4\\right)^2 = \\left(\\tfrac{5}{2}\\right)^2 = \\tfrac{25}{4}",
          "explanation": "Both sides equal $\\tfrac{25}{4}$, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the conclusion",
          "workingLatex": "x = -\\dfrac{3}{2}",
          "explanation": "This is the only value where the two composites agree.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = -\\dfrac{3}{2}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q056",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": ["piecewise functions", "continuity"],
    "questionText": "The function $f$ is defined by $f(x) = x + 1$ for $x < 2$ and $f(x) = 3x - 3$ for $x \\geq 2$. Find $f(0)$, $f(2)$ and $f(5)$, and determine whether $f$ is continuous at $x = 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Read the definition",
          "workingLatex": "f(x) = \\begin{cases} x + 1 & x < 2 \\\\ 3x - 3 & x \\geq 2 \\end{cases}",
          "explanation": "A piecewise function uses different rules on different parts of the number line, split here at $x = 2$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the rule for x = 0",
          "workingLatex": "0 < 2 \\Rightarrow \\text{use } x + 1",
          "explanation": "Since $0$ lies below the split, the first rule applies.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate f(0)",
          "workingLatex": "f(0) = 0 + 1 = 1",
          "explanation": "Substituting $x = 0$ into $x + 1$ gives the required value.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the rule for x = 2",
          "workingLatex": "2 \\geq 2 \\Rightarrow \\text{use } 3x - 3",
          "explanation": "The condition $x \\geq 2$ includes $2$ itself, so the second rule applies here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate f(2)",
          "workingLatex": "f(2) = 3(2) - 3 = 3",
          "explanation": "Substituting $x = 2$ into $3x - 3$ gives the value of the function at the join.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the rule for x = 5",
          "workingLatex": "5 \\geq 2 \\Rightarrow \\text{use } 3x - 3",
          "explanation": "Since $5$ is above the split, the second rule applies.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate f(5)",
          "workingLatex": "f(5) = 3(5) - 3 = 12",
          "explanation": "Substituting $x = 5$ into $3x - 3$ gives the final value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the continuity test",
          "workingLatex": "\\text{no jump at } 2 \\iff \\lim_{x \\to 2^-} f(x) = f(2)",
          "explanation": "A piecewise function is continuous at the join when the two pieces meet at the same height there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Identify the left-hand rule",
          "workingLatex": "x \\to 2^- \\Rightarrow \\text{use } x + 1",
          "explanation": "Approaching $2$ from below uses the first rule, valid for $x < 2$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the left-hand value",
          "workingLatex": "\\lim_{x \\to 2^-}(x + 1) = 2 + 1 = 3",
          "explanation": "As $x$ nears $2$ from the left, the first rule approaches $3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the right-hand value",
          "workingLatex": "\\lim_{x \\to 2^+}(3x - 3) = 3(2) - 3 = 3",
          "explanation": "From the right the second rule also gives $3$, matching $f(2)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compare the two sides",
          "workingLatex": "3 = 3 = f(2)",
          "explanation": "Both pieces reach the same height of $3$ at the join, so there is no gap.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Conclude on continuity",
          "workingLatex": "f \\text{ is continuous at } x = 2",
          "explanation": "Because the left value, right value and $f(2)$ all equal $3$, the graph joins up smoothly.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the full conclusion",
          "workingLatex": "f(0) = 1, \\; f(2) = 3, \\; f(5) = 12; \\; \\text{continuous at } x = 2",
          "explanation": "The pieces agree at $x = 2$, giving a single unbroken value there.",
          "diagram": null
        }
      ],
      "finalAnswer": "$f(0) = 1$, $f(2) = 3$, $f(5) = 12$; $f$ is continuous at $x = 2$ because both pieces give $3$ there"
    }
  },
  {
    "id": "al.y2.pure.functions.q057",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": ["modulus", "solving modulus equations", "absolute value"],
    "questionText": "Solve $|2x - 1| = x + 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the modulus equation.",
          "workingLatex": "|2x-1| = x+4",
          "explanation": "The modulus makes $|2x-1|$ equal to either $2x-1$ or its negative, so we handle both possibilities separately.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the validity condition for the right-hand side.",
          "workingLatex": "x+4 \\geq 0 \\implies x \\geq -4",
          "explanation": "A modulus can never be negative, so any genuine solution needs $x+4 \\geq 0$; we keep this in mind when checking.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up Case 1 (positive branch).",
          "workingLatex": "2x-1 = x+4",
          "explanation": "If the inside $2x-1$ is non-negative, the bars simply disappear, giving a straightforward linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve Case 1.",
          "workingLatex": "2x - x = 4 + 1 \\implies x = 5",
          "explanation": "Collecting the $x$ terms on one side isolates a single value; this is our first candidate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up Case 2 (negative branch).",
          "workingLatex": "2x-1 = -(x+4)",
          "explanation": "If the inside is negative, $|2x-1| = -(2x-1)$, which is equivalent to equating $2x-1$ with $-(x+4)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the bracket in Case 2.",
          "workingLatex": "2x-1 = -x-4",
          "explanation": "Distributing the minus sign prepares the equation for collecting like terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve Case 2.",
          "workingLatex": "2x + x = -4 + 1 \\implies 3x = -3 \\implies x = -1",
          "explanation": "Gathering terms gives the second candidate value $x=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check x=5 in the original equation (left side).",
          "workingLatex": "|2(5)-1| = |9| = 9",
          "explanation": "Substituting back tests whether the candidate really satisfies the untouched equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check x=5 (right side) and compare.",
          "workingLatex": "5+4 = 9 = \\text{LHS}",
          "explanation": "Both sides equal $9$, so $x=5$ is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check x=-1 in the original equation (left side).",
          "workingLatex": "|2(-1)-1| = |-3| = 3",
          "explanation": "Again we substitute to guard against extraneous roots the algebra can introduce.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x=-1 (right side) and compare.",
          "workingLatex": "-1+4 = 3 = \\text{LHS}",
          "explanation": "Both sides equal $3$, so $x=-1$ is also genuine.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm both satisfy the validity condition.",
          "workingLatex": "5 \\geq -4 \\quad \\text{and} \\quad -1 \\geq -4",
          "explanation": "Each solution keeps the right-hand side non-negative, so neither is rejected.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe the graphical picture.",
          "workingLatex": "y=|2x-1| \\; \\cap \\; y=x+4",
          "explanation": "The V-shaped graph $y=|2x-1|$ meets the straight line $y=x+4$ at exactly two points, matching our two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solutions.",
          "workingLatex": "x = 5 \\quad \\text{or} \\quad x = -1",
          "explanation": "Both candidates survived every check, so these form the complete solution set.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=5$ or $x=-1$"
    }
  },
  {
    "id": "al.y2.pure.functions.q058",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": ["modulus", "solving modulus equations", "absolute value"],
    "questionText": "Solve $|x - 2| = |2x + 1|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the equation with modulus on both sides.",
          "workingLatex": "|x-2| = |2x+1|",
          "explanation": "When two moduli are equal, the expressions inside are equal in size, so either $x-2 = 2x+1$ or $x-2 = -(2x+1)$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Justify the approach by squaring.",
          "workingLatex": "(x-2)^2 = (2x+1)^2",
          "explanation": "Squaring removes both moduli safely because both sides are non-negative; it leads to the same two linear cases.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Case 1: equal insides.",
          "workingLatex": "x-2 = 2x+1",
          "explanation": "This is the branch where the two expressions have the same sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve Case 1.",
          "workingLatex": "x - 2x = 1 + 2 \\implies -x = 3 \\implies x = -3",
          "explanation": "Collecting terms gives the first candidate $x=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 2: opposite insides.",
          "workingLatex": "x-2 = -(2x+1)",
          "explanation": "Here the expressions are equal in magnitude but opposite in sign.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand Case 2.",
          "workingLatex": "x-2 = -2x-1",
          "explanation": "Distributing the minus sign lets us collect like terms.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve Case 2.",
          "workingLatex": "x + 2x = -1 + 2 \\implies 3x = 1 \\implies x = \\dfrac{1}{3}",
          "explanation": "This gives the second candidate $x=\\tfrac{1}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check x=-3 (left side).",
          "workingLatex": "|-3-2| = |-5| = 5",
          "explanation": "Substituting tests the candidate in the original equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check x=-3 (right side).",
          "workingLatex": "|2(-3)+1| = |-5| = 5",
          "explanation": "Both sides equal $5$, so $x=-3$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check x=1/3 (left side).",
          "workingLatex": "\\left|\\dfrac{1}{3}-2\\right| = \\left|-\\dfrac{5}{3}\\right| = \\dfrac{5}{3}",
          "explanation": "We verify the fractional candidate too.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x=1/3 (right side).",
          "workingLatex": "\\left|2 \\cdot \\dfrac{1}{3}+1\\right| = \\left|\\dfrac{5}{3}\\right| = \\dfrac{5}{3}",
          "explanation": "Both sides equal $\\tfrac{5}{3}$, so $x=\\tfrac{1}{3}$ is valid.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm squaring gives the same roots.",
          "workingLatex": "3x^2 + 8x - 3 = 0 \\implies (3x-1)(x+3) = 0",
          "explanation": "The squared equation factorises to the same two solutions, confirming our casework.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe the graphical picture.",
          "workingLatex": "y=|x-2| \\; \\cap \\; y=|2x+1|",
          "explanation": "Two V-shaped graphs cross at exactly two points, agreeing with our two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solutions.",
          "workingLatex": "x = \\dfrac{1}{3} \\quad \\text{or} \\quad x = -3",
          "explanation": "Both candidates passed every check, so these are the complete solutions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=\\dfrac{1}{3}$ or $x=-3$"
    }
  },
  {
    "id": "al.y2.pure.functions.q059",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "interval",
    "tags": ["modulus", "modulus inequalities", "absolute value"],
    "questionText": "Solve $|3x - 2| < 7$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the modulus inequality.",
          "workingLatex": "|3x-2| < 7",
          "explanation": "$|3x-2|$ measures the distance of $3x-2$ from $0$; requiring it under $7$ means $3x-2$ lies strictly between $-7$ and $7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rewrite as a double inequality.",
          "workingLatex": "-7 < 3x-2 < 7",
          "explanation": "The single statement $|A|<c$ is exactly the sandwich $-c<A<c$, which is easier to solve.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Add 2 throughout.",
          "workingLatex": "-7+2 < 3x < 7+2",
          "explanation": "Adding the same amount to all three parts keeps the inequalities balanced while isolating the $x$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the bounds.",
          "workingLatex": "-5 < 3x < 9",
          "explanation": "This tidies the middle to a single $x$ term ready for dividing.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide throughout by 3.",
          "workingLatex": "\\dfrac{-5}{3} < x < \\dfrac{9}{3}",
          "explanation": "Dividing by the positive number $3$ does not flip the inequality signs.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify.",
          "workingLatex": "-\\dfrac{5}{3} < x < 3",
          "explanation": "This is the solution interval in its simplest form.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cross-check via the left boundary equation.",
          "workingLatex": "3x-2 = -7 \\implies 3x = -5 \\implies x = -\\dfrac{5}{3}",
          "explanation": "Solving $|3x-2|=7$ gives the endpoints; the left one confirms $-\\tfrac{5}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cross-check via the right boundary equation.",
          "workingLatex": "3x-2 = 7 \\implies 3x = 9 \\implies x = 3",
          "explanation": "The right boundary confirms the endpoint $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test a point inside the interval.",
          "workingLatex": "x=0: \\; |3(0)-2| = 2 < 7 \\; \\checkmark",
          "explanation": "An interior test point should satisfy the inequality, which $x=0$ does.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a point outside the interval.",
          "workingLatex": "x=4: \\; |3(4)-2| = 10 \\not< 7",
          "explanation": "A point beyond the right endpoint fails, confirming the boundary is correct.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the endpoints are excluded.",
          "workingLatex": "|3x-2| = 7 \\text{ at } x=-\\tfrac{5}{3}, \\, 3",
          "explanation": "Because the inequality is strict ($<$), the values giving exactly $7$ are not included.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Describe the graphical picture.",
          "workingLatex": "y=|3x-2| \\text{ below } y=7",
          "explanation": "The V-shaped graph dips below the horizontal line $y=7$ precisely between the two crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution interval.",
          "workingLatex": "-\\dfrac{5}{3} < x < 3",
          "explanation": "The values of $x$ that keep $|3x-2|$ under $7$ form this open interval.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-\\dfrac{5}{3} < x < 3$"
    }
  },
  {
    "id": "al.y2.pure.functions.q060",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "solutions",
    "tags": ["modulus", "modulus inequalities", "absolute value"],
    "questionText": "Solve $|x + 1| \\geq 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the modulus inequality.",
          "workingLatex": "|x+1| \\geq 4",
          "explanation": "$|x+1|$ is the distance of $x+1$ from $0$; requiring it to be at least $4$ means $x+1$ is far from $0$ in either direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Split into two branches.",
          "workingLatex": "x+1 \\geq 4 \\quad \\text{or} \\quad x+1 \\leq -4",
          "explanation": "For $|A| \\geq c$ the value $A$ must be at least $c$ or at most $-c$; unlike the $<$ case this gives a union, not a sandwich.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the first branch.",
          "workingLatex": "x+1 \\geq 4 \\implies x \\geq 3",
          "explanation": "Subtracting $1$ isolates $x$ for the upper ray.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve the second branch.",
          "workingLatex": "x+1 \\leq -4 \\implies x \\leq -5",
          "explanation": "Subtracting $1$ isolates $x$ for the lower ray.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Combine the two branches.",
          "workingLatex": "x \\geq 3 \\quad \\text{or} \\quad x \\leq -5",
          "explanation": "The solution is the union of the two rays, since either branch is enough.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cross-check with the boundary equation.",
          "workingLatex": "|x+1| = 4 \\implies x+1 = \\pm 4",
          "explanation": "Solving the equality locates the endpoints where the graph meets the line $y=4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find both endpoints.",
          "workingLatex": "x = 3 \\quad \\text{or} \\quad x = -5",
          "explanation": "These endpoints separate the regions that satisfy the inequality from the one that does not.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Test a point in the upper ray.",
          "workingLatex": "x=5: \\; |5+1| = 6 \\geq 4 \\; \\checkmark",
          "explanation": "A point beyond $3$ satisfies the inequality, confirming that ray.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Test a point in the lower ray.",
          "workingLatex": "x=-6: \\; |-6+1| = 5 \\geq 4 \\; \\checkmark",
          "explanation": "A point beyond $-5$ also works, confirming the second ray.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Test a point in the middle.",
          "workingLatex": "x=0: \\; |0+1| = 1 \\not\\geq 4",
          "explanation": "A point between the endpoints fails, confirming the middle region is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Note the endpoints are included.",
          "workingLatex": "|3+1| = 4, \\; |-5+1| = 4",
          "explanation": "Because the inequality is $\\geq$, the values giving exactly $4$ belong to the solution.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Describe the graphical picture.",
          "workingLatex": "y=|x+1| \\text{ on or above } y=4",
          "explanation": "The V-shaped graph sits on or above the line $y=4$ everywhere outside the two crossing points.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the solution.",
          "workingLatex": "x \\geq 3 \\quad \\text{or} \\quad x \\leq -5",
          "explanation": "These two rays together give every $x$ with $|x+1| \\geq 4$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x \\geq 3$ or $x \\leq -5$"
    }
  },
  {
    "id": "al.y2.pure.functions.q061",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "interval",
    "tags": ["modulus", "modulus inequalities", "absolute value"],
    "questionText": "Solve $|2x + 3| \\leq |x|$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the inequality between two moduli.",
          "workingLatex": "|2x+3| \\leq |x|",
          "explanation": "Both sides are non-negative, so we can compare their squares without worrying about sign changes.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Square both sides.",
          "workingLatex": "(2x+3)^2 \\leq x^2",
          "explanation": "Squaring is safe here because $|A|^2=A^2$ and squaring preserves order for non-negative numbers.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Expand the left-hand side.",
          "workingLatex": "4x^2 + 12x + 9 \\leq x^2",
          "explanation": "Expanding turns the inequality into a standard quadratic comparison.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Bring all terms to one side.",
          "workingLatex": "4x^2 + 12x + 9 - x^2 \\leq 0",
          "explanation": "Collecting on one side lets us analyse a single quadratic against zero.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify.",
          "workingLatex": "3x^2 + 12x + 9 \\leq 0",
          "explanation": "Combining like terms gives a tidy quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide by 3.",
          "workingLatex": "x^2 + 4x + 3 \\leq 0",
          "explanation": "Dividing by the positive $3$ simplifies without flipping the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise the quadratic.",
          "workingLatex": "(x+1)(x+3) \\leq 0",
          "explanation": "Factorising exposes the roots $x=-1$ and $x=-3$ where the quadratic equals zero.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Identify the critical values.",
          "workingLatex": "x = -1, \\quad x = -3",
          "explanation": "These are the boundaries between where the quadratic is positive and where it is negative.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Determine the sign region.",
          "workingLatex": "-3 \\leq x \\leq -1",
          "explanation": "The parabola opens upward, so it is $\\leq 0$ between (and at) its roots.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the left endpoint in the original.",
          "workingLatex": "x=-3: \\; |2(-3)+3| = 3, \\; |-3| = 3",
          "explanation": "$3 \\leq 3$ holds, so $x=-3$ is included.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the right endpoint in the original.",
          "workingLatex": "x=-1: \\; |2(-1)+3| = 1, \\; |-1| = 1",
          "explanation": "$1 \\leq 1$ holds, so $x=-1$ is included.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test an interior point.",
          "workingLatex": "x=-2: \\; |2(-2)+3| = 1, \\; |-2| = 2, \\; 1 \\leq 2 \\; \\checkmark",
          "explanation": "An interior point satisfies the original inequality, confirming the interval.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Test an outside point.",
          "workingLatex": "x=0: \\; |3| = 3, \\; |0| = 0, \\; 3 \\not\\leq 0",
          "explanation": "A point outside fails, confirming we have the right region.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the solution interval.",
          "workingLatex": "-3 \\leq x \\leq -1",
          "explanation": "These are all $x$ for which $|2x+3|$ does not exceed $|x|$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$-3 \\leq x \\leq -1$"
    }
  },
  {
    "id": "al.y2.pure.functions.q062",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "description",
    "tags": ["modulus", "graph transformations", "modulus graphs"],
    "questionText": "For the graph of $y = |x - 1| - 3$: state the coordinates of the vertex and the range, and solve $|x - 1| - 3 = 0$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the base graph.",
          "workingLatex": "y = |x|",
          "explanation": "The expression is built from the standard V-shaped graph $y=|x|$, which has its vertex at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Identify the horizontal shift.",
          "workingLatex": "|x-1| \\text{ shifts } |x| \\text{ right by } 1",
          "explanation": "Replacing $x$ by $x-1$ moves every point $1$ unit to the right, so the corner moves to $x=1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Identify the vertical shift.",
          "workingLatex": "-3 \\text{ shifts the graph down by } 3",
          "explanation": "Subtracting $3$ lowers the whole graph, so the corner drops to $y=-3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the vertex coordinates.",
          "workingLatex": "(1, -3)",
          "explanation": "Combining the shifts places the lowest point of the V at $(1,-3)$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Reason about the minimum value.",
          "workingLatex": "|x-1| \\geq 0 \\implies |x-1| - 3 \\geq -3",
          "explanation": "Since a modulus is never negative, the smallest value of $y$ is $-3$, achieved at the vertex.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the range.",
          "workingLatex": "y \\geq -3",
          "explanation": "The graph rises without bound from its minimum, so $y$ takes every value from $-3$ upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the equation to solve.",
          "workingLatex": "|x-1| - 3 = 0",
          "explanation": "The roots are where the graph crosses the $x$-axis; we solve this for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Isolate the modulus.",
          "workingLatex": "|x-1| = 3",
          "explanation": "Adding $3$ to both sides leaves the modulus alone, ready to split into cases.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Case 1 (positive branch).",
          "workingLatex": "x-1 = 3 \\implies x = 4",
          "explanation": "If $x-1$ is non-negative, dropping the bars gives $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Case 2 (negative branch).",
          "workingLatex": "x-1 = -3 \\implies x = -2",
          "explanation": "If $x-1$ is negative, the bars introduce a minus sign, giving $x=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x=4.",
          "workingLatex": "|4-1| - 3 = 3-3 = 0 \\; \\checkmark",
          "explanation": "Substituting confirms $x=4$ really lies on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check x=-2.",
          "workingLatex": "|-2-1| - 3 = 3-3 = 0 \\; \\checkmark",
          "explanation": "Substituting confirms $x=-2$ is also a genuine root.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe the graphical picture.",
          "workingLatex": "\\text{vertex } (1,-3), \\; \\text{roots } x=-2, 4",
          "explanation": "The V has its corner below the axis at $(1,-3)$ and cuts the $x$-axis symmetrically at $x=-2$ and $x=4$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State all results.",
          "workingLatex": "\\text{Vertex } (1,-3), \\; y \\geq -3, \\; x = -2 \\text{ or } 4",
          "explanation": "Together these describe the vertex, the range, and where the graph meets the $x$-axis.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Vertex } (1,-3), \\ \\text{range } y \\geq -3, \\ x=4 \\text{ or } x=-2$"
    }
  },
  {
    "id": "al.y2.pure.functions.q063",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": ["modulus", "graph transformations", "modulus graphs"],
    "questionText": "For the graph of $y = |2x - 4|$: state the coordinates of the vertex, and solve $|2x - 4| = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the base graph.",
          "workingLatex": "y = |2x-4|",
          "explanation": "This is a modulus of a linear expression, so its graph is a V shape with a single lowest point.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factor to see the transformation.",
          "workingLatex": "|2x-4| = 2|x-2|",
          "explanation": "Taking the factor $2$ outside the modulus shows a horizontal position at $x=2$ and a vertical stretch by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Locate where the inside is zero.",
          "workingLatex": "2x-4 = 0 \\implies x = 2",
          "explanation": "The corner of a V occurs where the inside of the modulus equals zero, here at $x=2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the y-value at the vertex.",
          "workingLatex": "|2(2)-4| = |0| = 0",
          "explanation": "At $x=2$ the expression is $0$, so the vertex sits on the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State the vertex coordinates.",
          "workingLatex": "(2, 0)",
          "explanation": "The lowest point of the graph is therefore $(2,0)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the equation to solve.",
          "workingLatex": "|2x-4| = 6",
          "explanation": "We want the $x$-values where the graph reaches height $6$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case 1 (positive branch).",
          "workingLatex": "2x-4 = 6",
          "explanation": "If $2x-4$ is non-negative, the bars drop away directly.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve Case 1.",
          "workingLatex": "2x = 10 \\implies x = 5",
          "explanation": "This gives the first candidate $x=5$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Case 2 (negative branch).",
          "workingLatex": "2x-4 = -6",
          "explanation": "If $2x-4$ is negative, the modulus contributes a minus sign.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Solve Case 2.",
          "workingLatex": "2x = -2 \\implies x = -1",
          "explanation": "This gives the second candidate $x=-1$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x=5.",
          "workingLatex": "|2(5)-4| = |6| = 6 \\; \\checkmark",
          "explanation": "Substituting confirms $x=5$ gives height $6$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check x=-1.",
          "workingLatex": "|2(-1)-4| = |-6| = 6 \\; \\checkmark",
          "explanation": "Substituting confirms $x=-1$ gives height $6$ too.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe the graphical picture.",
          "workingLatex": "y=|2x-4| \\; \\cap \\; y=6",
          "explanation": "The horizontal line $y=6$ cuts the V at two points symmetric about $x=2$, namely $x=-1$ and $x=5$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State all results.",
          "workingLatex": "\\text{Vertex } (2,0), \\; x = 5 \\text{ or } x = -1",
          "explanation": "These give the vertex and the two solutions of the equation.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Vertex } (2,0), \\ x=5 \\text{ or } x=-1$"
    }
  },
  {
    "id": "al.y2.pure.functions.q064",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": ["modulus", "graph transformations", "modulus graphs"],
    "questionText": "Describe the graph of $y = |x - 3| + 1$ as a sequence of transformations of $y = |x|$, and state the coordinates of its minimum point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the base function.",
          "workingLatex": "y = |x|",
          "explanation": "We describe the graph by starting from the standard V-shaped modulus graph with vertex at the origin.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Spot the inside change.",
          "workingLatex": "|x| \\to |x-3|",
          "explanation": "Replacing $x$ with $x-3$ is a horizontal transformation affecting position along the $x$-axis.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Describe the horizontal translation.",
          "workingLatex": "\\text{translate } 3 \\text{ units in the } +x \\text{ direction}",
          "explanation": "Because we subtract inside the bracket, the graph moves right by $3$, shifting the corner from $x=0$ to $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Spot the outside change.",
          "workingLatex": "|x-3| \\to |x-3| + 1",
          "explanation": "Adding $1$ outside the modulus is a vertical transformation.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Describe the vertical translation.",
          "workingLatex": "\\text{translate } 1 \\text{ unit in the } +y \\text{ direction}",
          "explanation": "Adding $1$ lifts the whole graph up by $1$, raising the corner from $y=0$ to $y=1$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the order of transformations.",
          "workingLatex": "y=|x| \\; \\xrightarrow{\\; +3 \\text{ right} \\;} \\; y=|x-3| \\; \\xrightarrow{\\; +1 \\text{ up} \\;} \\; y=|x-3|+1",
          "explanation": "The two translations are independent (one horizontal, one vertical), so either order lands on the same graph.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Track the vertex under the horizontal shift.",
          "workingLatex": "(0,0) \\to (3,0)",
          "explanation": "The original corner at the origin moves right by $3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Track the vertex under the vertical shift.",
          "workingLatex": "(3,0) \\to (3,1)",
          "explanation": "That corner then moves up by $1$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the minimum point.",
          "workingLatex": "(3, 1)",
          "explanation": "The lowest point of the transformed V is at $(3,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Confirm the minimum value algebraically.",
          "workingLatex": "|x-3| \\geq 0 \\implies |x-3|+1 \\geq 1",
          "explanation": "Since the modulus is never negative, the smallest possible $y$ is $1$, reached when $x=3$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check a point on the graph.",
          "workingLatex": "x=3: \\; |3-3|+1 = 1",
          "explanation": "Substituting $x=3$ gives $y=1$, confirming the vertex lies at $(3,1)$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Describe the resulting shape.",
          "workingLatex": "\\text{V opening upward, vertex } (3,1)",
          "explanation": "The graph is a V opening upward with slopes $\\pm 1$, sitting entirely on or above the line $y=1$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the full description.",
          "workingLatex": "\\text{right } 3, \\; \\text{up } 1; \\quad \\text{minimum } (3,1)",
          "explanation": "The graph of $y=|x|$ is translated $3$ right and $1$ up, giving a minimum at $(3,1)$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\text{Translate } y=|x| \\text{ right } 3 \\text{ then up } 1; \\ \\text{minimum } (3,1)$"
    }
  },
  {
    "id": "al.y2.pure.functions.q065",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "interval",
    "tags": ["modulus", "modulus inequalities", "solving modulus equations"],
    "questionText": "Solve the inequality $|x - 4| > 2x$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the inequality.",
          "workingLatex": "|x-4| > 2x",
          "explanation": "$|x-4|$ is a non-negative distance, and we compare it with $2x$, which can be positive or negative depending on $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the standard split for |A|>B.",
          "workingLatex": "x-4 > 2x \\quad \\text{or} \\quad x-4 < -2x",
          "explanation": "The statement $|A|>B$ is equivalent to $A>B$ or $A<-B$; this holds for every real $B$, so we apply it directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Solve the first branch.",
          "workingLatex": "x-4 > 2x \\implies -4 > x",
          "explanation": "Subtracting $2x$ and simplifying gives the condition for this branch.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the first branch result.",
          "workingLatex": "x < -4",
          "explanation": "This ray is one part of the solution set.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set up the second branch.",
          "workingLatex": "x-4 < -2x",
          "explanation": "The other branch compares $x-4$ with the negative of $2x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve the second branch.",
          "workingLatex": "x + 2x < 4 \\implies 3x < 4",
          "explanation": "Collecting the $x$ terms prepares the branch for the final division.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the second branch result.",
          "workingLatex": "x < \\dfrac{4}{3}",
          "explanation": "Dividing by the positive $3$ keeps the direction of the inequality.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine the two branches.",
          "workingLatex": "x < -4 \\quad \\text{or} \\quad x < \\dfrac{4}{3}",
          "explanation": "The full solution is the union; every $x<-4$ already satisfies $x<\\tfrac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the union.",
          "workingLatex": "x < \\dfrac{4}{3}",
          "explanation": "Since the ray $x<-4$ sits inside $x<\\tfrac{4}{3}$, the union is just the larger ray.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Locate the boundary value.",
          "workingLatex": "|x-4| = 2x \\implies -(x-4) = 2x \\implies 4-x = 2x \\implies x = \\dfrac{4}{3}",
          "explanation": "The boundary occurs where the two sides are equal; here $x=\\tfrac{4}{3}$ marks the edge of the solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Test a point inside the solution.",
          "workingLatex": "x=0: \\; |0-4| = 4 > 0 = 2(0) \\; \\checkmark",
          "explanation": "A point below $\\tfrac{4}{3}$ satisfies the inequality, confirming the interval.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Test the boundary itself.",
          "workingLatex": "x=\\tfrac{4}{3}: \\; \\left|\\tfrac{4}{3}-4\\right| = \\tfrac{8}{3}, \\; 2 \\cdot \\tfrac{4}{3} = \\tfrac{8}{3}",
          "explanation": "At the boundary both sides equal $\\tfrac{8}{3}$, so it is not included because the inequality is strict.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Test a point outside the solution.",
          "workingLatex": "x=2: \\; |2-4| = 2, \\; 2(2) = 4, \\; 2 \\not> 4",
          "explanation": "A point above $\\tfrac{4}{3}$ fails, confirming the boundary is correct.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Describe the graphical picture.",
          "workingLatex": "y=|x-4| \\text{ above } y=2x",
          "explanation": "The V-shaped graph $y=|x-4|$ stays above the line $y=2x$ for all $x$ left of their single intersection at $x=\\tfrac{4}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the solution.",
          "workingLatex": "x < \\dfrac{4}{3}",
          "explanation": "All $x$ less than $\\tfrac{4}{3}$ satisfy $|x-4|>2x$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x < \\dfrac{4}{3}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q066",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "solutions",
    "tags": ["modulus", "composite functions", "solving modulus equations"],
    "questionText": "The functions are $f(x) = |x|$ and $g(x) = x^2 - 1$. Find $fg(x)$ and solve $fg(x) = 3$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the order of composition.",
          "workingLatex": "fg(x) = f(g(x))",
          "explanation": "$fg$ means apply $g$ first, then feed the result into $f$; the letter nearest $x$ acts first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute g into f.",
          "workingLatex": "f(g(x)) = f(x^2-1) = |x^2-1|",
          "explanation": "Since $f$ takes the modulus of its input, $fg(x)$ is the modulus of $x^2-1$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the composite.",
          "workingLatex": "fg(x) = |x^2-1|",
          "explanation": "This is the required composite function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the equation.",
          "workingLatex": "|x^2-1| = 3",
          "explanation": "We now solve for the $x$-values that make the composite equal to $3$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Case 1 (positive branch).",
          "workingLatex": "x^2 - 1 = 3",
          "explanation": "If $x^2-1$ is non-negative, the modulus disappears directly.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve Case 1.",
          "workingLatex": "x^2 = 4 \\implies x = \\pm 2",
          "explanation": "Taking square roots gives two candidates $x=2$ and $x=-2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Case 2 (negative branch).",
          "workingLatex": "x^2 - 1 = -3",
          "explanation": "If $x^2-1$ is negative, the modulus contributes a sign change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Analyse Case 2.",
          "workingLatex": "x^2 = -2",
          "explanation": "This requires a negative square, which is impossible for real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Reject Case 2.",
          "workingLatex": "\\text{no real solutions}",
          "explanation": "Since $x^2 \\geq 0$ always, this branch yields nothing.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check x=2.",
          "workingLatex": "|2^2-1| = |3| = 3 \\; \\checkmark",
          "explanation": "Substituting confirms $x=2$ satisfies the equation.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check x=-2.",
          "workingLatex": "|(-2)^2-1| = |3| = 3 \\; \\checkmark",
          "explanation": "Substituting confirms $x=-2$ works too.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the domain is all reals.",
          "workingLatex": "x^2-1 \\text{ defined for all } x",
          "explanation": "Both $f$ and $g$ accept every real number, so no candidate is excluded by domain issues.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Describe the graphical picture.",
          "workingLatex": "y=|x^2-1| \\; \\cap \\; y=3",
          "explanation": "The line $y=3$ crosses the curve $y=|x^2-1|$ at the two symmetric points $x=\\pm 2$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results.",
          "workingLatex": "fg(x) = |x^2-1|, \\; x = 2 \\text{ or } x = -2",
          "explanation": "This gives both the composite and the solutions of $fg(x)=3$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$fg(x)=|x^2-1|;\\ x=2 \\text{ or } x=-2$"
    }
  },
  {
    "id": "al.y2.pure.functions.q067",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "interval",
    "tags": ["composite functions", "range of composite", "functions"],
    "questionText": "$f(x) = x^2 + 2$ ($x$ real), $g(x) = \\dfrac{1}{x}$ ($x \\neq 0$). Find $gf(x)$ and state its range.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the order for gf.",
          "workingLatex": "gf(x) = g(f(x))",
          "explanation": "$gf$ applies $f$ first, then $g$; we substitute $f(x)$ into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute f into g.",
          "workingLatex": "g(f(x)) = g(x^2+2) = \\dfrac{1}{x^2+2}",
          "explanation": "Since $g$ takes the reciprocal, $gf(x)$ is $1$ over $x^2+2$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the composite.",
          "workingLatex": "gf(x) = \\dfrac{1}{x^2+2}",
          "explanation": "This is the required composite function.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Check it is always defined.",
          "workingLatex": "x^2+2 \\geq 2 > 0",
          "explanation": "The denominator is never zero (indeed always at least $2$), so the composite is defined for all real $x$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the range of the inner part.",
          "workingLatex": "x^2 \\geq 0 \\implies x^2 + 2 \\geq 2",
          "explanation": "A square is never negative, so the smallest value of $x^2+2$ is $2$, at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the inner range.",
          "workingLatex": "x^2 + 2 \\in [2, \\infty)",
          "explanation": "As $x$ grows, $x^2+2$ increases without bound, so it covers everything from $2$ upward.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Understand the reciprocal's effect.",
          "workingLatex": "u \\mapsto \\dfrac{1}{u}, \\quad u \\in [2, \\infty)",
          "explanation": "We now feed the interval $[2,\\infty)$ into the reciprocal function to get the outer range.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find the largest output.",
          "workingLatex": "u = 2 \\implies \\dfrac{1}{u} = \\dfrac{1}{2}",
          "explanation": "The reciprocal is largest when $u$ is smallest, so the maximum output is $\\tfrac{1}{2}$ at $x=0$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the limiting smallest output.",
          "workingLatex": "u \\to \\infty \\implies \\dfrac{1}{u} \\to 0^{+}",
          "explanation": "As $u$ grows large the reciprocal shrinks towards $0$ but never reaches it.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Decide whether the endpoints are attained.",
          "workingLatex": "\\dfrac{1}{2} \\text{ attained}, \\; 0 \\text{ not attained}",
          "explanation": "The value $\\tfrac{1}{2}$ occurs at $x=0$, but $0$ is only approached, so it is excluded.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the range.",
          "workingLatex": "0 < y \\leq \\dfrac{1}{2}",
          "explanation": "The composite takes every value between $0$ (exclusive) and $\\tfrac{1}{2}$ (inclusive).",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the maximum with a value.",
          "workingLatex": "x=0: \\; \\dfrac{1}{0^2+2} = \\dfrac{1}{2} \\; \\checkmark",
          "explanation": "Substituting $x=0$ confirms the top of the range is reached.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check a large value approaches 0.",
          "workingLatex": "x=10: \\; \\dfrac{1}{102} \\approx 0.0098 > 0",
          "explanation": "A large $x$ gives a tiny positive output, confirming $y$ stays above $0$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the results.",
          "workingLatex": "gf(x) = \\dfrac{1}{x^2+2}, \\; 0 < y \\leq \\dfrac{1}{2}",
          "explanation": "This gives both the composite and its range.",
          "diagram": null
        }
      ],
      "finalAnswer": "$gf(x)=\\dfrac{1}{x^2+2};\\ \\text{range } 0 < y \\leq \\dfrac{1}{2}$"
    }
  },
  {
    "id": "al.y2.pure.functions.q068",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "interval",
    "tags": ["composite functions", "range of composite", "functions"],
    "questionText": "$f(x) = 3 - 2x$, $g(x) = x^2$. Find the range of $gf(x)$ for the domain $-1 \\leq x \\leq 2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the order for gf.",
          "workingLatex": "gf(x) = g(f(x))",
          "explanation": "We apply $f$ first over the given domain, then square the result with $g$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Form the composite.",
          "workingLatex": "g(f(x)) = (3-2x)^2",
          "explanation": "Substituting $f(x)=3-2x$ into $g(u)=u^2$ gives the squared linear expression.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Note the strategy for the range.",
          "workingLatex": "\\text{find range of } f \\text{ first, then apply } g",
          "explanation": "For a composite on a closed domain we first find the interval $f$ produces, then feed it into $g$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate f at the left endpoint.",
          "workingLatex": "f(-1) = 3 - 2(-1) = 5",
          "explanation": "Testing the endpoints of the domain locates the extreme values of the linear inner function.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate f at the right endpoint.",
          "workingLatex": "f(2) = 3 - 2(2) = -1",
          "explanation": "The other endpoint gives the second extreme value of $f$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note f is decreasing and linear.",
          "workingLatex": "f'(x) = -2 < 0",
          "explanation": "A linear function with negative gradient decreases steadily, so it has no turning point inside the interval.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State the range of the inner function.",
          "workingLatex": "f([-1,2]) = [-1, 5]",
          "explanation": "Because $f$ is continuous and monotonic, its outputs fill the whole interval from $-1$ to $5$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the outer function on this interval.",
          "workingLatex": "g(u) = u^2, \\quad u \\in [-1, 5]",
          "explanation": "We now square every value in $[-1,5]$; this interval straddles $0$, where $u^2$ has its minimum.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the minimum of the square.",
          "workingLatex": "u = 0 \\implies u^2 = 0",
          "explanation": "Squaring reaches its smallest value $0$ at $u=0$, which does lie inside $[-1,5]$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the maximum of the square.",
          "workingLatex": "u^2 \\text{ at } u=-1 \\text{ is } 1; \\; u^2 \\text{ at } u=5 \\text{ is } 25",
          "explanation": "The maximum occurs at whichever endpoint is farther from $0$; here $u=5$ is farther, giving $25$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the turning point is used.",
          "workingLatex": "0 \\in [-1,5]",
          "explanation": "Because $u=0$ lies inside the interval, the minimum $0$ is genuinely achieved rather than missed.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the range.",
          "workingLatex": "0 \\leq y \\leq 25",
          "explanation": "The composite takes every value from the minimum $0$ up to the maximum $25$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Verify the minimum with an x-value.",
          "workingLatex": "3-2x = 0 \\implies x = 1.5, \\; gf(1.5) = 0",
          "explanation": "At $x=1.5$ (inside $[-1,2]$) the inner function is $0$, so the composite reaches its minimum.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the maximum with an x-value.",
          "workingLatex": "gf(-1) = (5)^2 = 25 \\; \\checkmark",
          "explanation": "At $x=-1$ the composite equals $25$, confirming the top of the range.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the result.",
          "workingLatex": "\\text{Range of } gf: \\; 0 \\leq y \\leq 25",
          "explanation": "These are all values the composite takes over the given domain.",
          "diagram": null
        }
      ],
      "finalAnswer": "$0 \\leq y \\leq 25$"
    }
  },
  {
    "id": "al.y2.pure.functions.q069",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "expression",
    "tags": ["composite functions", "inverse of composite", "inverse functions"],
    "questionText": "$f(x) = 2x - 1$, $g(x) = x + 3$. Find $(fg)^{-1}(x)$, and verify that $(fg)^{-1}(x) = g^{-1}(f^{-1}(x))$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Form the composite fg.",
          "workingLatex": "fg(x) = f(g(x)) = f(x+3)",
          "explanation": "$fg$ applies $g$ first, so we substitute $x+3$ into $f$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify fg.",
          "workingLatex": "f(x+3) = 2(x+3) - 1 = 2x + 5",
          "explanation": "Expanding gives the composite as a single linear expression $2x+5$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the inverse.",
          "workingLatex": "y = 2x + 5",
          "explanation": "To invert, we treat the output as $y$ and rearrange to make $x$ the subject.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Make x the subject.",
          "workingLatex": "x = \\dfrac{y-5}{2}",
          "explanation": "Subtracting $5$ then dividing by $2$ undoes the operations of $fg$ in reverse.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Write the inverse function.",
          "workingLatex": "(fg)^{-1}(x) = \\dfrac{x-5}{2}",
          "explanation": "Renaming the variable gives the inverse of the composite.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find f inverse.",
          "workingLatex": "y = 2x-1 \\implies x = \\dfrac{y+1}{2}",
          "explanation": "Reversing $f$ means adding $1$ then dividing by $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State f inverse.",
          "workingLatex": "f^{-1}(x) = \\dfrac{x+1}{2}",
          "explanation": "This undoes $f$; we will need it for the reversal law.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Find g inverse.",
          "workingLatex": "y = x+3 \\implies x = y-3",
          "explanation": "Reversing $g$ simply subtracts $3$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State g inverse.",
          "workingLatex": "g^{-1}(x) = x - 3",
          "explanation": "This undoes $g$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the reversal law to verify.",
          "workingLatex": "(fg)^{-1}(x) = g^{-1}(f^{-1}(x))",
          "explanation": "Undoing $fg$ means undoing $f$ first (the last thing applied) then $g$, so the inverses compose in reversed order.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply f inverse first.",
          "workingLatex": "f^{-1}(x) = \\dfrac{x+1}{2}",
          "explanation": "We start the right-hand side by undoing $f$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Feed into g inverse.",
          "workingLatex": "g^{-1}\\!\\left(\\dfrac{x+1}{2}\\right) = \\dfrac{x+1}{2} - 3",
          "explanation": "Now we undo $g$ by subtracting $3$ from that result.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify.",
          "workingLatex": "\\dfrac{x+1}{2} - 3 = \\dfrac{x+1-6}{2} = \\dfrac{x-5}{2}",
          "explanation": "Writing over a common denominator combines the terms neatly.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Compare the two expressions.",
          "workingLatex": "\\dfrac{x-5}{2} = \\dfrac{x-5}{2} \\; \\checkmark",
          "explanation": "The right-hand side matches $(fg)^{-1}(x)$ exactly, confirming the reversal law.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the result.",
          "workingLatex": "(fg)^{-1}(x) = \\dfrac{x-5}{2} = g^{-1}(f^{-1}(x))",
          "explanation": "The inverse of the composite equals the reversed composition of the inverses, as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$(fg)^{-1}(x)=\\dfrac{x-5}{2}=g^{-1}\\!\\left(f^{-1}(x)\\right)$"
    }
  },
  {
    "id": "al.y2.pure.functions.q070",
    "level": "A-Level Maths",
    "topic": "Year 2 Pure",
    "subtopic": "Functions and their graphs",
    "subtopicId": "al.y2.pure.functions",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "solutions",
    "tags": ["modulus", "solving modulus equations", "absolute value"],
    "questionText": "Solve $|2x - 1| = |x| + 1$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the equation.",
          "workingLatex": "|2x-1| = |x| + 1",
          "explanation": "Two different moduli appear, so we split the number line at the points where each inside changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the sign-change points.",
          "workingLatex": "2x-1 = 0 \\implies x = \\tfrac{1}{2}; \\quad x = 0",
          "explanation": "$2x-1$ changes sign at $x=\\tfrac{1}{2}$ and $x$ changes sign at $x=0$; these split the line into three regions.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "List the three regions.",
          "workingLatex": "x < 0, \\quad 0 \\leq x < \\tfrac{1}{2}, \\quad x \\geq \\tfrac{1}{2}",
          "explanation": "In each region both moduli have fixed signs, so we can drop the bars consistently.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Region 1: rewrite the moduli (x<0).",
          "workingLatex": "|2x-1| = 1-2x, \\quad |x| = -x",
          "explanation": "For $x<0$ both $2x-1$ and $x$ are negative, so each modulus flips sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Region 1: form and solve the equation.",
          "workingLatex": "1-2x = -x + 1 \\implies -2x = -x \\implies x = 0",
          "explanation": "Simplifying gives $x=0$, but this lies on the boundary, not inside $x<0$, so it is not a Region 1 solution.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Region 1: conclusion.",
          "workingLatex": "\\text{no solution with } x<0",
          "explanation": "The only value produced falls outside the region, so Region 1 contributes nothing on its own.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Region 2: rewrite the moduli (0<=x<1/2).",
          "workingLatex": "|2x-1| = 1-2x, \\quad |x| = x",
          "explanation": "Here $2x-1$ is still negative but $x$ is non-negative, so only the first modulus flips.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Region 2: form the equation.",
          "workingLatex": "1-2x = x + 1",
          "explanation": "Substituting the region's forms gives a linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Region 2: solve.",
          "workingLatex": "1-2x = x+1 \\implies -3x = 0 \\implies x = 0",
          "explanation": "This gives $x=0$, which does lie in $0 \\leq x < \\tfrac{1}{2}$, so it is a valid candidate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Region 3: rewrite the moduli (x>=1/2).",
          "workingLatex": "|2x-1| = 2x-1, \\quad |x| = x",
          "explanation": "For $x \\geq \\tfrac{1}{2}$ both insides are non-negative, so the bars drop directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Region 3: form the equation.",
          "workingLatex": "2x-1 = x + 1",
          "explanation": "Substituting the region's forms gives another linear equation.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Region 3: solve.",
          "workingLatex": "2x - x = 1 + 1 \\implies x = 2",
          "explanation": "This gives $x=2$, which lies in $x \\geq \\tfrac{1}{2}$, so it is a valid candidate.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check x=0 in the original.",
          "workingLatex": "|2(0)-1| = 1, \\quad |0| + 1 = 1 \\; \\checkmark",
          "explanation": "Both sides equal $1$, so $x=0$ is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Check x=2 in the original.",
          "workingLatex": "|2(2)-1| = 3, \\quad |2| + 1 = 3 \\; \\checkmark",
          "explanation": "Both sides equal $3$, so $x=2$ is a genuine solution.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Describe the graphical picture.",
          "workingLatex": "y=|2x-1| \\; \\cap \\; y=|x|+1",
          "explanation": "The graphs meet at exactly two points, $x=0$ and $x=2$, matching our two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the solutions.",
          "workingLatex": "x = 0 \\quad \\text{or} \\quad x = 2",
          "explanation": "These are the only values satisfying the equation across all three regions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x=0$ or $x=2$"
    }
  },
];
