import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "gcse.number.exact-calculation.q001",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "same denominator", "exact"],
    "questionText": "Work out $\\frac{1}{5} + \\frac{2}{5}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the denominators.", "workingLatex": "\\frac{1}{5} + \\frac{2}{5}", "explanation": "Both fractions are split into fifths, so the pieces are the same size and can be added directly.", "diagram": null },
        { "stepNumber": 2, "description": "Add the numerators.", "workingLatex": "\\frac{1}{5} + \\frac{2}{5} = \\frac{1+2}{5}", "explanation": "When the denominators match we simply count how many fifths we have in total.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the top.", "workingLatex": "\\frac{1+2}{5} = \\frac{3}{5}", "explanation": "One piece plus two pieces makes three pieces, and they are all still fifths.", "diagram": null },
        { "stepNumber": 4, "description": "Check it cannot be simplified.", "workingLatex": "\\gcd(3,5) = 1", "explanation": "The numbers $3$ and $5$ share no common factor other than $1$, so the fraction is already in its lowest terms.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the answer exact.", "workingLatex": "\\frac{3}{5}", "explanation": "Leaving the answer as a fraction keeps it perfectly exact, unlike a rounded decimal such as $0.6$.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{1}{5} + \\frac{2}{5} = \\frac{3}{5}", "explanation": "So the exact total is three fifths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{5}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q002",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "common denominator", "exact"],
    "questionText": "Work out $\\frac{1}{2} + \\frac{1}{3}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Notice the denominators differ.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3}", "explanation": "Halves and thirds are different-sized pieces, so we cannot add them until they match.", "diagram": null },
        { "stepNumber": 2, "description": "Find a common denominator.", "workingLatex": "\\text{LCM}(2,3) = 6", "explanation": "The smallest number both $2$ and $3$ divide into is $6$, so we rewrite each fraction in sixths.", "diagram": null },
        { "stepNumber": 3, "description": "Convert the first fraction.", "workingLatex": "\\frac{1}{2} = \\frac{3}{6}", "explanation": "Multiplying top and bottom by $3$ keeps the value the same while changing the pieces to sixths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert the second fraction.", "workingLatex": "\\frac{1}{3} = \\frac{2}{6}", "explanation": "Multiplying top and bottom by $2$ rewrites one third as two sixths.", "diagram": null },
        { "stepNumber": 5, "description": "Add the numerators.", "workingLatex": "\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}", "explanation": "Now the pieces match, so we add the tops: three sixths plus two sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Check for simplifying.", "workingLatex": "\\gcd(5,6) = 1", "explanation": "The numbers $5$ and $6$ have no common factor, so the fraction is already simplest.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}", "explanation": "The exact sum is five sixths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{5}{6}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q003",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "same denominator", "exact"],
    "questionText": "Work out $\\frac{5}{7} - \\frac{2}{7}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Check the denominators.", "workingLatex": "\\frac{5}{7} - \\frac{2}{7}", "explanation": "Both are sevenths, so the pieces are equal and can be subtracted straight away.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the numerators.", "workingLatex": "\\frac{5}{7} - \\frac{2}{7} = \\frac{5-2}{7}", "explanation": "We just count how many sevenths are left after taking $2$ away from $5$.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the top.", "workingLatex": "\\frac{5-2}{7} = \\frac{3}{7}", "explanation": "Five pieces minus two pieces leaves three pieces.", "diagram": null },
        { "stepNumber": 4, "description": "Check for simplifying.", "workingLatex": "\\gcd(3,7) = 1", "explanation": "The numbers $3$ and $7$ share no factor, so it is already in lowest terms.", "diagram": null },
        { "stepNumber": 5, "description": "Keep the answer exact.", "workingLatex": "\\frac{3}{7}", "explanation": "A fraction gives the precise value with no rounding.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{5}{7} - \\frac{2}{7} = \\frac{3}{7}", "explanation": "The exact difference is three sevenths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{7}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q004",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "common denominator", "exact"],
    "questionText": "Work out $\\frac{3}{4} - \\frac{1}{6}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "The denominators differ.", "workingLatex": "\\frac{3}{4} - \\frac{1}{6}", "explanation": "Quarters and sixths are different sizes, so we need a common denominator first.", "diagram": null },
        { "stepNumber": 2, "description": "Find the LCM.", "workingLatex": "\\text{LCM}(4,6) = 12", "explanation": "The number $12$ is the smallest value both $4$ and $6$ divide into.", "diagram": null },
        { "stepNumber": 3, "description": "Convert three quarters.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiply top and bottom by $3$ to change quarters into twelfths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert one sixth.", "workingLatex": "\\frac{1}{6} = \\frac{2}{12}", "explanation": "Multiply top and bottom by $2$ to change sixths into twelfths.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the numerators.", "workingLatex": "\\frac{9}{12} - \\frac{2}{12} = \\frac{7}{12}", "explanation": "With matching pieces we subtract the tops: nine twelfths minus two twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Check for simplifying.", "workingLatex": "\\gcd(7,12) = 1", "explanation": "The numbers $7$ and $12$ have no common factor, so the answer is simplest.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} - \\frac{1}{6} = \\frac{7}{12}", "explanation": "The exact difference is seven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{12}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q005",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "cancelling", "exact"],
    "questionText": "Work out $\\frac{2}{3} \\times \\frac{3}{5}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the multiplication.", "workingLatex": "\\frac{2}{3} \\times \\frac{3}{5}", "explanation": "To multiply fractions we multiply the tops together and the bottoms together, with no common denominator needed.", "diagram": null },
        { "stepNumber": 2, "description": "Look for common factors.", "workingLatex": "\\frac{2}{3} \\times \\frac{3}{5}", "explanation": "There is a $3$ on the bottom of the first fraction and a $3$ on the top of the second, which we can cancel.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the threes.", "workingLatex": "\\frac{2}{\\cancel{3}} \\times \\frac{\\cancel{3}}{5}", "explanation": "Cancelling before multiplying keeps the numbers small and the answer exact.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numerators.", "workingLatex": "2 \\times 1 = 2", "explanation": "After cancelling, the tops are $2$ and $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the denominators.", "workingLatex": "1 \\times 5 = 5", "explanation": "The bottoms are now $1$ and $5$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the product.", "workingLatex": "\\frac{2}{3} \\times \\frac{3}{5} = \\frac{2}{5}", "explanation": "This gives two fifths.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm lowest terms.", "workingLatex": "\\gcd(2,5) = 1", "explanation": "The answer is already fully simplified.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{5}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q006",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "division", "reciprocal", "exact"],
    "questionText": "Work out $\\frac{3}{4} \\div \\frac{1}{2}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the division.", "workingLatex": "\\frac{3}{4} \\div \\frac{1}{2}", "explanation": "Dividing asks how many halves fit into three quarters.", "diagram": null },
        { "stepNumber": 2, "description": "Use keep, flip, change.", "workingLatex": "\\frac{3}{4} \\times \\frac{2}{1}", "explanation": "Dividing by a fraction is the same as multiplying by its reciprocal, so we flip $\\frac{1}{2}$ to $\\frac{2}{1}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the tops.", "workingLatex": "3 \\times 2 = 6", "explanation": "The numerators multiply to $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the bottoms.", "workingLatex": "4 \\times 1 = 4", "explanation": "The denominators multiply to $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the fraction.", "workingLatex": "\\frac{6}{4}", "explanation": "The multiplication gives six quarters.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify.", "workingLatex": "\\frac{6}{4} = \\frac{3}{2}", "explanation": "Dividing top and bottom by $2$ reduces it to lowest terms.", "diagram": null },
        { "stepNumber": 7, "description": "Write as a mixed number.", "workingLatex": "\\frac{3}{2} = 1\\tfrac{1}{2}", "explanation": "Three halves is one whole and one half, both forms being exact.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{2}$ (or $1\\tfrac{1}{2}$)"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q007",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "fraction",
    "tags": ["fractions", "simplifying", "lowest terms", "exact"],
    "questionText": "Write $\\frac{12}{18}$ as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the fraction.", "workingLatex": "\\frac{12}{18}", "explanation": "We want the simplest equivalent fraction, found by cancelling common factors.", "diagram": null },
        { "stepNumber": 2, "description": "Find the highest common factor.", "workingLatex": "\\text{HCF}(12,18) = 6", "explanation": "The largest number dividing both $12$ and $18$ is $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the numerator.", "workingLatex": "12 \\div 6 = 2", "explanation": "We divide the top by $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the denominator.", "workingLatex": "18 \\div 6 = 3", "explanation": "Dividing the bottom by the same $6$ keeps the value unchanged.", "diagram": null },
        { "stepNumber": 5, "description": "Write the simplified fraction.", "workingLatex": "\\frac{12}{18} = \\frac{2}{3}", "explanation": "So twelve eighteenths equals two thirds.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm it is simplest.", "workingLatex": "\\gcd(2,3) = 1", "explanation": "No further cancelling is possible.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{3}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q008",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "fraction",
    "tags": ["fractions", "simplifying", "lowest terms", "exact"],
    "questionText": "Write $\\frac{15}{25}$ as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the fraction.", "workingLatex": "\\frac{15}{25}", "explanation": "We simplify by dividing top and bottom by their common factor.", "diagram": null },
        { "stepNumber": 2, "description": "Find the highest common factor.", "workingLatex": "\\text{HCF}(15,25) = 5", "explanation": "Both $15$ and $25$ are multiples of $5$, and $5$ is the largest such factor.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the numerator.", "workingLatex": "15 \\div 5 = 3", "explanation": "We divide the top by $5$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the denominator.", "workingLatex": "25 \\div 5 = 5", "explanation": "We divide the bottom by the same amount to keep the value the same.", "diagram": null },
        { "stepNumber": 5, "description": "Write the result.", "workingLatex": "\\frac{15}{25} = \\frac{3}{5}", "explanation": "So it simplifies to three fifths.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm simplest.", "workingLatex": "\\gcd(3,5) = 1", "explanation": "Three and five share no factor, so we are done.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{5}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q009",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact",
    "tags": ["circle", "circumference", "in terms of pi", "exact"],
    "questionText": "A circle has radius $6\\,\\text{cm}$. Find its exact circumference, leaving your answer in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the formula.", "workingLatex": "C = 2\\pi r", "explanation": "The circumference of a circle is $2\\pi$ times the radius.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "C = 2\\pi \\times 6", "explanation": "The radius is $6\\,\\text{cm}$, so we put $6$ in place of $r$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numbers.", "workingLatex": "2 \\times 6 = 12", "explanation": "We combine the ordinary numbers and leave the $\\pi$ untouched.", "diagram": null },
        { "stepNumber": 4, "description": "Write it with pi.", "workingLatex": "C = 12\\pi", "explanation": "Keeping the $\\pi$ symbol gives the exact circumference.", "diagram": null },
        { "stepNumber": 5, "description": "Add the units.", "workingLatex": "C = 12\\pi\\,\\text{cm}", "explanation": "Length is measured in centimetres here.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "C = 12\\pi\\,\\text{cm}", "explanation": "Leaving it as $12\\pi$ is exact, whereas $37.7\\,\\text{cm}$ would only be a rounded value.", "diagram": null }
      ],
      "finalAnswer": "$12\\pi\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q010",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "exact",
    "tags": ["circle", "circumference", "diameter", "in terms of pi"],
    "questionText": "A circle has diameter $10\\,\\text{cm}$. Find its exact circumference in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose the formula.", "workingLatex": "C = \\pi d", "explanation": "When the diameter is given, the circumference is $\\pi$ times the diameter.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the diameter.", "workingLatex": "C = \\pi \\times 10", "explanation": "The diameter is $10\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the number in front.", "workingLatex": "C = 10\\pi", "explanation": "By convention we write the number before the $\\pi$ symbol.", "diagram": null },
        { "stepNumber": 4, "description": "Add units.", "workingLatex": "C = 10\\pi\\,\\text{cm}", "explanation": "The circumference is a length in centimetres.", "diagram": null },
        { "stepNumber": 5, "description": "Explain the exactness.", "workingLatex": "10\\pi \\approx 31.4", "explanation": "Writing $10\\pi$ keeps every bit of accuracy; the decimal $31.4$ is only approximate.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "C = 10\\pi\\,\\text{cm}", "explanation": "The exact circumference is $10\\pi\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$10\\pi\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q011",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact",
    "tags": ["circle", "area", "in terms of pi", "exact"],
    "questionText": "A circle has radius $5\\,\\text{cm}$. Find its exact area, leaving your answer in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "The area of a circle is $\\pi$ times the radius squared.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "A = \\pi \\times 5^2", "explanation": "The radius $5\\,\\text{cm}$ goes in place of $r$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the radius.", "workingLatex": "5^2 = 25", "explanation": "Squaring means $5 \\times 5$.", "diagram": null },
        { "stepNumber": 4, "description": "Write it with pi.", "workingLatex": "A = 25\\pi", "explanation": "The number sits in front of $\\pi$ to keep the value exact.", "diagram": null },
        { "stepNumber": 5, "description": "Add units.", "workingLatex": "A = 25\\pi\\,\\text{cm}^2", "explanation": "Area is measured in square centimetres.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "A = 25\\pi\\,\\text{cm}^2", "explanation": "The exact area is $25\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$25\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q012",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact",
    "tags": ["circle", "area", "in terms of pi", "exact"],
    "questionText": "A circle has radius $3\\,\\text{cm}$. Find its exact area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "The area of a circle equals $\\pi$ times the radius squared.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "A = \\pi \\times 3^2", "explanation": "The radius is $3\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the radius.", "workingLatex": "3^2 = 9", "explanation": "Squaring means $3 \\times 3 = 9$.", "diagram": null },
        { "stepNumber": 4, "description": "Write it with pi.", "workingLatex": "A = 9\\pi", "explanation": "We keep the $\\pi$ so the answer stays exact.", "diagram": null },
        { "stepNumber": 5, "description": "Add units.", "workingLatex": "A = 9\\pi\\,\\text{cm}^2", "explanation": "Area uses square centimetres.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "A = 9\\pi\\,\\text{cm}^2", "explanation": "The exact area is $9\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$9\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q013",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "simplifying", "exact"],
    "questionText": "Work out $\\frac{2}{5} + \\frac{1}{10}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "The denominators differ.", "workingLatex": "\\frac{2}{5} + \\frac{1}{10}", "explanation": "Fifths and tenths are different sizes, so we need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the LCM.", "workingLatex": "\\text{LCM}(5,10) = 10", "explanation": "Ten is already a multiple of five, so we use tenths.", "diagram": null },
        { "stepNumber": 3, "description": "Convert two fifths.", "workingLatex": "\\frac{2}{5} = \\frac{4}{10}", "explanation": "Multiply top and bottom by $2$ to reach tenths.", "diagram": null },
        { "stepNumber": 4, "description": "Keep the second fraction.", "workingLatex": "\\frac{1}{10} = \\frac{1}{10}", "explanation": "This one is already written in tenths.", "diagram": null },
        { "stepNumber": 5, "description": "Add the numerators.", "workingLatex": "\\frac{4}{10} + \\frac{1}{10} = \\frac{5}{10}", "explanation": "Four tenths plus one tenth is five tenths.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify.", "workingLatex": "\\frac{5}{10} = \\frac{1}{2}", "explanation": "Dividing top and bottom by $5$ gives one half.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{2}{5} + \\frac{1}{10} = \\frac{1}{2}", "explanation": "The exact total is one half.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q014",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "whole number", "exact"],
    "questionText": "Work out $\\frac{3}{8} \\times 4$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the whole number as a fraction.", "workingLatex": "4 = \\frac{4}{1}", "explanation": "Any whole number is itself over $1$, which lets us multiply fractions as usual.", "diagram": null },
        { "stepNumber": 2, "description": "Set up the multiplication.", "workingLatex": "\\frac{3}{8} \\times \\frac{4}{1}", "explanation": "Now both quantities are fractions.", "diagram": null },
        { "stepNumber": 3, "description": "Look for cancelling.", "workingLatex": "\\frac{3}{8} \\times \\frac{4}{1}", "explanation": "The $8$ on the bottom and the $4$ on the top share a factor of $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel.", "workingLatex": "\\frac{3}{2} \\times \\frac{1}{1}", "explanation": "Dividing $8$ and $4$ each by $4$ leaves $2$ and $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the tops.", "workingLatex": "3 \\times 1 = 3", "explanation": "The numerators give $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the bottoms.", "workingLatex": "2 \\times 1 = 2", "explanation": "The denominators give $2$.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{3}{8} \\times 4 = \\frac{3}{2}", "explanation": "So the exact result is $\\frac{3}{2}$, or $1\\tfrac{1}{2}$.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{2}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q015",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "fraction",
    "tags": ["fractions", "simplifying", "lowest terms", "exact"],
    "questionText": "Write $\\frac{20}{50}$ as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Look at the fraction.", "workingLatex": "\\frac{20}{50}", "explanation": "We simplify by cancelling the common factor of the top and bottom.", "diagram": null },
        { "stepNumber": 2, "description": "Find the highest common factor.", "workingLatex": "\\text{HCF}(20,50) = 10", "explanation": "Both numbers end in $0$, and $10$ is the largest common factor.", "diagram": null },
        { "stepNumber": 3, "description": "Divide the numerator.", "workingLatex": "20 \\div 10 = 2", "explanation": "We divide the top by $10$.", "diagram": null },
        { "stepNumber": 4, "description": "Divide the denominator.", "workingLatex": "50 \\div 10 = 5", "explanation": "We divide the bottom by the same $10$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the result.", "workingLatex": "\\frac{20}{50} = \\frac{2}{5}", "explanation": "So it simplifies to two fifths.", "diagram": null },
        { "stepNumber": 6, "description": "Confirm simplest.", "workingLatex": "\\gcd(2,5) = 1", "explanation": "The answer is fully simplified.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{5}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q016",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact",
    "tags": ["circle", "circumference", "in terms of pi", "exact"],
    "questionText": "A circle has radius $7\\,\\text{cm}$. Find its exact circumference in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the formula.", "workingLatex": "C = 2\\pi r", "explanation": "Circumference is $2\\pi$ times the radius.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "C = 2\\pi \\times 7", "explanation": "The radius is $7\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the numbers.", "workingLatex": "2 \\times 7 = 14", "explanation": "We combine the ordinary numbers and keep $\\pi$.", "diagram": null },
        { "stepNumber": 4, "description": "Write it with pi.", "workingLatex": "C = 14\\pi", "explanation": "This is the exact form.", "diagram": null },
        { "stepNumber": 5, "description": "Add units.", "workingLatex": "C = 14\\pi\\,\\text{cm}", "explanation": "The circumference is a length in centimetres.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "C = 14\\pi\\,\\text{cm}", "explanation": "The exact circumference is $14\\pi\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$14\\pi\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q017",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact",
    "tags": ["circle", "area", "in terms of pi", "exact"],
    "questionText": "A circle has radius $10\\,\\text{cm}$. Find its exact area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "Area equals $\\pi$ times the radius squared.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "A = \\pi \\times 10^2", "explanation": "The radius is $10\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the radius.", "workingLatex": "10^2 = 100", "explanation": "Squaring means $10 \\times 10 = 100$.", "diagram": null },
        { "stepNumber": 4, "description": "Write it with pi.", "workingLatex": "A = 100\\pi", "explanation": "We keep $\\pi$ to stay exact.", "diagram": null },
        { "stepNumber": 5, "description": "Add units.", "workingLatex": "A = 100\\pi\\,\\text{cm}^2", "explanation": "Area is in square centimetres.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "A = 100\\pi\\,\\text{cm}^2", "explanation": "The exact area is $100\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$100\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q018",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "simplifying", "exact"],
    "questionText": "Work out $\\frac{7}{8} - \\frac{3}{8}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Same denominators.", "workingLatex": "\\frac{7}{8} - \\frac{3}{8}", "explanation": "Both are eighths, so we can subtract directly.", "diagram": null },
        { "stepNumber": 2, "description": "Subtract the tops.", "workingLatex": "\\frac{7-3}{8}", "explanation": "We count the eighths left after removing $3$ of them.", "diagram": null },
        { "stepNumber": 3, "description": "Work out the top.", "workingLatex": "\\frac{7-3}{8} = \\frac{4}{8}", "explanation": "Seven eighths minus three eighths is four eighths.", "diagram": null },
        { "stepNumber": 4, "description": "Simplify.", "workingLatex": "\\frac{4}{8} = \\frac{1}{2}", "explanation": "Dividing top and bottom by $4$ gives one half.", "diagram": null },
        { "stepNumber": 5, "description": "Confirm simplest.", "workingLatex": "\\gcd(1,2) = 1", "explanation": "One half is fully simplified.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{7}{8} - \\frac{3}{8} = \\frac{1}{2}", "explanation": "The exact answer is one half.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q019",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "common denominator", "exact"],
    "questionText": "Work out $\\frac{1}{3} + \\frac{1}{4}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "The denominators differ.", "workingLatex": "\\frac{1}{3} + \\frac{1}{4}", "explanation": "Thirds and quarters are different sizes, so we find a common denominator first.", "diagram": null },
        { "stepNumber": 2, "description": "Find the LCM.", "workingLatex": "\\text{LCM}(3,4) = 12", "explanation": "The smallest number both $3$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert one third.", "workingLatex": "\\frac{1}{3} = \\frac{4}{12}", "explanation": "Multiply top and bottom by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert one quarter.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the numerators.", "workingLatex": "\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}", "explanation": "Four twelfths plus three twelfths is seven twelfths.", "diagram": null },
        { "stepNumber": 6, "description": "Check for simplifying.", "workingLatex": "\\gcd(7,12) = 1", "explanation": "No common factor, so it is already simplest.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}", "explanation": "The exact sum is seven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{12}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q020",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "unit fractions", "exact"],
    "questionText": "Work out $\\frac{1}{2} \\times \\frac{1}{4}$, giving your answer as an exact fraction.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the multiplication.", "workingLatex": "\\frac{1}{2} \\times \\frac{1}{4}", "explanation": "To multiply fractions we multiply the tops together and the bottoms together.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply the numerators.", "workingLatex": "1 \\times 1 = 1", "explanation": "The numerators multiply to $1$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the denominators.", "workingLatex": "2 \\times 4 = 8", "explanation": "The denominators multiply to $8$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the product.", "workingLatex": "\\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}", "explanation": "This gives one eighth.", "diagram": null },
        { "stepNumber": 5, "description": "Check for simplifying.", "workingLatex": "\\gcd(1,8) = 1", "explanation": "One eighth is already in lowest terms.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{1}{8}", "explanation": "Half of a quarter is an eighth, which makes sense as the pieces get smaller.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{8}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q021",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "numeric",
    "tags": ["fractions", "division", "reciprocal", "exact"],
    "questionText": "Work out $\\frac{1}{2} \\div \\frac{1}{4}$, giving your answer exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the division.", "workingLatex": "\\frac{1}{2} \\div \\frac{1}{4}", "explanation": "This asks how many quarters fit into one half.", "diagram": null },
        { "stepNumber": 2, "description": "Use keep, flip, change.", "workingLatex": "\\frac{1}{2} \\times \\frac{4}{1}", "explanation": "Dividing by $\\frac{1}{4}$ is the same as multiplying by its reciprocal $\\frac{4}{1}$.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the tops.", "workingLatex": "1 \\times 4 = 4", "explanation": "The numerators give $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the bottoms.", "workingLatex": "2 \\times 1 = 2", "explanation": "The denominators give $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the fraction.", "workingLatex": "\\frac{4}{2}", "explanation": "This is four halves.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify.", "workingLatex": "\\frac{4}{2} = 2", "explanation": "Four halves make the whole number $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Sense check.", "workingLatex": "\\frac{1}{2} \\div \\frac{1}{4} = 2", "explanation": "Two quarters make one half, so the answer $2$ is sensible.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q022",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 1,
    "answerType": "exact",
    "tags": ["circle", "circumference", "diameter", "in terms of pi"],
    "questionText": "A circle has diameter $8\\,\\text{cm}$. Find its exact circumference in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Choose the formula.", "workingLatex": "C = \\pi d", "explanation": "With the diameter given, the circumference is $\\pi$ times the diameter.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the diameter.", "workingLatex": "C = \\pi \\times 8", "explanation": "The diameter is $8\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 3, "description": "Write the number in front.", "workingLatex": "C = 8\\pi", "explanation": "We place the number before the $\\pi$ symbol.", "diagram": null },
        { "stepNumber": 4, "description": "Add units.", "workingLatex": "C = 8\\pi\\,\\text{cm}", "explanation": "The circumference is a length in centimetres.", "diagram": null },
        { "stepNumber": 5, "description": "Explain the exactness.", "workingLatex": "8\\pi \\approx 25.1", "explanation": "The $\\pi$ form is exact, while the decimal $25.1$ is only rounded.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "C = 8\\pi\\,\\text{cm}", "explanation": "The exact circumference is $8\\pi\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$8\\pi\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q023",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "exact",
    "tags": ["circle", "area", "in terms of pi", "exact"],
    "questionText": "A circle has radius $6\\,\\text{cm}$. Find its exact area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "Area is $\\pi$ times the radius squared.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "A = \\pi \\times 6^2", "explanation": "The radius is $6\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the radius.", "workingLatex": "6^2 = 36", "explanation": "Squaring means $6 \\times 6 = 36$.", "diagram": null },
        { "stepNumber": 4, "description": "Write it with pi.", "workingLatex": "A = 36\\pi", "explanation": "We keep the $\\pi$ so the value stays exact.", "diagram": null },
        { "stepNumber": 5, "description": "Add units.", "workingLatex": "A = 36\\pi\\,\\text{cm}^2", "explanation": "Area is in square centimetres.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "A = 36\\pi\\,\\text{cm}^2", "explanation": "The exact area is $36\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$36\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q024",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["exact vs decimal", "recurring decimal", "fractions"],
    "questionText": "Explain why $\\frac{2}{3}$ is an exact value but $0.67$ is not, and state the exact value.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Convert to a decimal.", "workingLatex": "2 \\div 3 = 0.6666\\ldots", "explanation": "Dividing $2$ by $3$ gives a decimal whose sixes repeat forever.", "diagram": null },
        { "stepNumber": 2, "description": "Round the decimal.", "workingLatex": "0.6666\\ldots \\approx 0.67", "explanation": "Rounding to two decimal places throws away the endless tail of sixes.", "diagram": null },
        { "stepNumber": 3, "description": "Compare the values.", "workingLatex": "0.67 \\neq \\frac{2}{3}", "explanation": "The rounded decimal is very slightly too big, so it is only an approximation.", "diagram": null },
        { "stepNumber": 4, "description": "Use the fraction.", "workingLatex": "\\frac{2}{3}", "explanation": "The fraction captures the value perfectly, with nothing thrown away.", "diagram": null },
        { "stepNumber": 5, "description": "Note the recurring form.", "workingLatex": "\\frac{2}{3} = 0.\\dot{6}", "explanation": "A fraction can represent a recurring decimal exactly, which a finite decimal like $0.67$ cannot.", "diagram": null },
        { "stepNumber": 6, "description": "State the final answer.", "workingLatex": "\\frac{2}{3}", "explanation": "So the exact value is $\\frac{2}{3}$.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{3}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q025",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "simplifying", "exact"],
    "questionText": "Work out $\\frac{1}{6} + \\frac{1}{2}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "The denominators differ.", "workingLatex": "\\frac{1}{6} + \\frac{1}{2}", "explanation": "Sixths and halves are different sizes, so we need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the LCM.", "workingLatex": "\\text{LCM}(6,2) = 6", "explanation": "Six is already a multiple of two, so we use sixths.", "diagram": null },
        { "stepNumber": 3, "description": "Keep the first fraction.", "workingLatex": "\\frac{1}{6} = \\frac{1}{6}", "explanation": "This one is already in sixths.", "diagram": null },
        { "stepNumber": 4, "description": "Convert one half.", "workingLatex": "\\frac{1}{2} = \\frac{3}{6}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the numerators.", "workingLatex": "\\frac{1}{6} + \\frac{3}{6} = \\frac{4}{6}", "explanation": "One sixth plus three sixths is four sixths.", "diagram": null },
        { "stepNumber": 6, "description": "Simplify.", "workingLatex": "\\frac{4}{6} = \\frac{2}{3}", "explanation": "Dividing top and bottom by $2$ gives two thirds.", "diagram": null },
        { "stepNumber": 7, "description": "State the final answer.", "workingLatex": "\\frac{1}{6} + \\frac{1}{2} = \\frac{2}{3}", "explanation": "The exact total is two thirds.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{2}{3}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q026",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Easy",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "cancelling", "exact"],
    "questionText": "Work out $\\frac{2}{7} \\times \\frac{7}{8}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the multiplication.", "workingLatex": "\\frac{2}{7} \\times \\frac{7}{8}", "explanation": "Multiply the tops together and the bottoms together, cancelling where possible.", "diagram": null },
        { "stepNumber": 2, "description": "Cancel the sevens.", "workingLatex": "\\frac{2}{\\cancel{7}} \\times \\frac{\\cancel{7}}{8}", "explanation": "The $7$ on the bottom of the first fraction cancels with the $7$ on the top of the second.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the two and the eight.", "workingLatex": "\\frac{\\cancel{2}}{1} \\times \\frac{1}{\\cancel{8}}", "explanation": "The $2$ and $8$ share a factor of $2$, leaving $1$ and $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the tops.", "workingLatex": "1 \\times 1 = 1", "explanation": "The remaining numerators give $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the bottoms.", "workingLatex": "1 \\times 4 = 4", "explanation": "The remaining denominators give $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the product.", "workingLatex": "\\frac{2}{7} \\times \\frac{7}{8} = \\frac{1}{4}", "explanation": "So the product is one quarter.", "diagram": null },
        { "stepNumber": 7, "description": "Confirm simplest.", "workingLatex": "\\gcd(1,4) = 1", "explanation": "One quarter is already in lowest terms.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{4}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q027",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["mixed numbers", "addition", "improper fractions", "exact"],
    "questionText": "Work out $1\\tfrac{1}{2} + 2\\tfrac{1}{3}$, giving your answer as an exact mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the mixed numbers.", "workingLatex": "1\\tfrac{1}{2} + 2\\tfrac{1}{3}", "explanation": "We are adding one and a half to two and a third.", "diagram": null },
        { "stepNumber": 2, "description": "Make the first improper.", "workingLatex": "1\\tfrac{1}{2} = \\frac{3}{2}", "explanation": "One whole is two halves, and adding the extra half makes three halves.", "diagram": null },
        { "stepNumber": 3, "description": "Make the second improper.", "workingLatex": "2\\tfrac{1}{3} = \\frac{7}{3}", "explanation": "Two wholes are six thirds, and the extra third makes seven thirds.", "diagram": null },
        { "stepNumber": 4, "description": "Find a common denominator.", "workingLatex": "\\text{LCM}(2,3) = 6", "explanation": "The smallest common denominator of $2$ and $3$ is $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert three halves.", "workingLatex": "\\frac{3}{2} = \\frac{9}{6}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Convert seven thirds.", "workingLatex": "\\frac{7}{3} = \\frac{14}{6}", "explanation": "Multiply top and bottom by $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the fractions.", "workingLatex": "\\frac{9}{6} + \\frac{14}{6} = \\frac{23}{6}", "explanation": "Add the numerators over the common denominator of $6$.", "diagram": null },
        { "stepNumber": 8, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{23}{6} = 3\\tfrac{5}{6}", "explanation": "Since $23 = 3 \\times 6 + 5$, this is three wholes and five sixths.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "1\\tfrac{1}{2} + 2\\tfrac{1}{3} = 3\\tfrac{5}{6}", "explanation": "The exact total is three and five sixths.", "diagram": null }
      ],
      "finalAnswer": "$3\\tfrac{5}{6}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q028",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["mixed numbers", "subtraction", "improper fractions", "exact"],
    "questionText": "Work out $3\\tfrac{1}{4} - 1\\tfrac{2}{3}$, giving your answer as an exact mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the mixed numbers.", "workingLatex": "3\\tfrac{1}{4} - 1\\tfrac{2}{3}", "explanation": "We subtract one and two thirds from three and a quarter.", "diagram": null },
        { "stepNumber": 2, "description": "Make the first improper.", "workingLatex": "3\\tfrac{1}{4} = \\frac{13}{4}", "explanation": "Three wholes are twelve quarters, plus one quarter makes thirteen quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Make the second improper.", "workingLatex": "1\\tfrac{2}{3} = \\frac{5}{3}", "explanation": "One whole is three thirds, plus two thirds makes five thirds.", "diagram": null },
        { "stepNumber": 4, "description": "Find a common denominator.", "workingLatex": "\\text{LCM}(4,3) = 12", "explanation": "The smallest common denominator of $4$ and $3$ is $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert thirteen quarters.", "workingLatex": "\\frac{13}{4} = \\frac{39}{12}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Convert five thirds.", "workingLatex": "\\frac{5}{3} = \\frac{20}{12}", "explanation": "Multiply top and bottom by $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Subtract the fractions.", "workingLatex": "\\frac{39}{12} - \\frac{20}{12} = \\frac{19}{12}", "explanation": "Subtract the numerators over twelfths.", "diagram": null },
        { "stepNumber": 8, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{19}{12} = 1\\tfrac{7}{12}", "explanation": "Since $19 = 1 \\times 12 + 7$, this is one whole and seven twelfths.", "diagram": null },
        { "stepNumber": 9, "description": "Check the fraction part.", "workingLatex": "\\gcd(7,12) = 1", "explanation": "Seven twelfths cannot be reduced further.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "3\\tfrac{1}{4} - 1\\tfrac{2}{3} = 1\\tfrac{7}{12}", "explanation": "The exact difference is one and seven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$1\\tfrac{7}{12}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q029",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed numbers", "multiplication", "cancelling", "exact"],
    "questionText": "Work out $1\\tfrac{1}{2} \\times \\frac{2}{3}$, giving your answer exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "1\\tfrac{1}{2} \\times \\frac{2}{3}", "explanation": "We multiply one and a half by two thirds.", "diagram": null },
        { "stepNumber": 2, "description": "Make the mixed number improper.", "workingLatex": "1\\tfrac{1}{2} = \\frac{3}{2}", "explanation": "One and a half is three halves; we always convert before multiplying.", "diagram": null },
        { "stepNumber": 3, "description": "Set up the product.", "workingLatex": "\\frac{3}{2} \\times \\frac{2}{3}", "explanation": "Now both quantities are fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the threes.", "workingLatex": "\\frac{\\cancel{3}}{2} \\times \\frac{2}{\\cancel{3}}", "explanation": "The threes on top and bottom cancel.", "diagram": null },
        { "stepNumber": 5, "description": "Cancel the twos.", "workingLatex": "\\frac{1}{\\cancel{2}} \\times \\frac{\\cancel{2}}{1}", "explanation": "The twos also cancel, leaving ones everywhere.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the tops.", "workingLatex": "1 \\times 1 = 1", "explanation": "The numerators give $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Multiply the bottoms.", "workingLatex": "1 \\times 1 = 1", "explanation": "The denominators give $1$.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify.", "workingLatex": "\\frac{1}{1} = 1", "explanation": "One over one is simply $1$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "1\\tfrac{1}{2} \\times \\frac{2}{3} = 1", "explanation": "The exact answer is $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q030",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["mixed numbers", "division", "reciprocal", "exact"],
    "questionText": "Work out $2\\tfrac{1}{2} \\div 1\\tfrac{1}{4}$, giving your answer exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "2\\tfrac{1}{2} \\div 1\\tfrac{1}{4}", "explanation": "We divide two and a half by one and a quarter.", "diagram": null },
        { "stepNumber": 2, "description": "Make the first improper.", "workingLatex": "2\\tfrac{1}{2} = \\frac{5}{2}", "explanation": "Two and a half is five halves.", "diagram": null },
        { "stepNumber": 3, "description": "Make the second improper.", "workingLatex": "1\\tfrac{1}{4} = \\frac{5}{4}", "explanation": "One and a quarter is five quarters.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the division.", "workingLatex": "\\frac{5}{2} \\div \\frac{5}{4}", "explanation": "Now both quantities are improper fractions.", "diagram": null },
        { "stepNumber": 5, "description": "Use keep, flip, change.", "workingLatex": "\\frac{5}{2} \\times \\frac{4}{5}", "explanation": "Divide by flipping the second fraction to its reciprocal.", "diagram": null },
        { "stepNumber": 6, "description": "Cancel the fives.", "workingLatex": "\\frac{\\cancel{5}}{2} \\times \\frac{4}{\\cancel{5}}", "explanation": "The fives on top and bottom cancel.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the two into the four.", "workingLatex": "\\frac{1}{\\cancel{2}} \\times \\frac{\\cancel{4}}{1} = \\frac{2}{1}", "explanation": "The $2$ divides into the $4$ exactly twice.", "diagram": null },
        { "stepNumber": 8, "description": "Simplify.", "workingLatex": "\\frac{2}{1} = 2", "explanation": "Two over one is $2$.", "diagram": null },
        { "stepNumber": 9, "description": "Sense check.", "workingLatex": "\\tfrac{5}{4} \\times 2 = \\tfrac{5}{2}", "explanation": "Doubling one and a quarter gives two and a half, confirming the answer.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "2\\tfrac{1}{2} \\div 1\\tfrac{1}{4} = 2", "explanation": "The exact answer is $2$.", "diagram": null }
      ],
      "finalAnswer": "$2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q031",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "three fractions", "exact"],
    "questionText": "Work out $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}$, giving your answer as an exact mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}", "explanation": "We add three fractions with different denominators.", "diagram": null },
        { "stepNumber": 2, "description": "Find a common denominator.", "workingLatex": "\\text{LCM}(2,3,4) = 12", "explanation": "The smallest number all of $2$, $3$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert one half.", "workingLatex": "\\frac{1}{2} = \\frac{6}{12}", "explanation": "Multiply top and bottom by $6$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert one third.", "workingLatex": "\\frac{1}{3} = \\frac{4}{12}", "explanation": "Multiply top and bottom by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert one quarter.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Line up the twelfths.", "workingLatex": "\\frac{6}{12} + \\frac{4}{12} + \\frac{3}{12}", "explanation": "All three are now twelfths, so we can add the numerators.", "diagram": null },
        { "stepNumber": 7, "description": "Add the numerators.", "workingLatex": "\\frac{6+4+3}{12} = \\frac{13}{12}", "explanation": "Six plus four plus three gives thirteen twelfths.", "diagram": null },
        { "stepNumber": 8, "description": "Convert to a mixed number.", "workingLatex": "\\frac{13}{12} = 1\\tfrac{1}{12}", "explanation": "Thirteen twelfths is one whole and one twelfth.", "diagram": null },
        { "stepNumber": 9, "description": "Check the fraction part.", "workingLatex": "\\gcd(1,12) = 1", "explanation": "One twelfth is already simplest.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} = 1\\tfrac{1}{12}", "explanation": "The exact total is one and one twelfth.", "diagram": null }
      ],
      "finalAnswer": "$1\\tfrac{1}{12}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q032",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["circle", "circumference", "area", "in terms of pi"],
    "questionText": "A circle has radius $9\\,\\text{cm}$. Find its exact circumference and its exact area, both in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Note what is needed.", "workingLatex": "r = 9\\,\\text{cm}", "explanation": "We need both the circumference and the area of a circle of radius $9\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the circumference formula.", "workingLatex": "C = 2\\pi r", "explanation": "Circumference is $2\\pi$ times the radius.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the radius.", "workingLatex": "C = 2\\pi \\times 9", "explanation": "Put $9$ in place of $r$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numbers.", "workingLatex": "2 \\times 9 = 18", "explanation": "Combine the ordinary numbers and keep $\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "State the circumference.", "workingLatex": "C = 18\\pi\\,\\text{cm}", "explanation": "This is the exact circumference.", "diagram": null },
        { "stepNumber": 6, "description": "Write the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "Area is $\\pi$ times the radius squared.", "diagram": null },
        { "stepNumber": 7, "description": "Substitute the radius.", "workingLatex": "A = \\pi \\times 9^2", "explanation": "Put $9$ in place of $r$.", "diagram": null },
        { "stepNumber": 8, "description": "Square the radius.", "workingLatex": "9^2 = 81", "explanation": "Squaring means $9 \\times 9 = 81$.", "diagram": null },
        { "stepNumber": 9, "description": "State the area.", "workingLatex": "A = 81\\pi\\,\\text{cm}^2", "explanation": "This is the exact area.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "C = 18\\pi\\,\\text{cm}, \\ A = 81\\pi\\,\\text{cm}^2", "explanation": "Both answers are left in terms of $\\pi$ to stay exact.", "diagram": null }
      ],
      "finalAnswer": "$C = 18\\pi\\,\\text{cm}$ and $A = 81\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q033",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["circle", "area", "diameter", "in terms of pi"],
    "questionText": "A circle has diameter $14\\,\\text{cm}$. Find its exact area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the diameter.", "workingLatex": "d = 14\\,\\text{cm}", "explanation": "We are given the diameter, but the area formula needs the radius.", "diagram": null },
        { "stepNumber": 2, "description": "Find the radius.", "workingLatex": "r = \\frac{d}{2} = \\frac{14}{2}", "explanation": "The radius is half of the diameter.", "diagram": null },
        { "stepNumber": 3, "description": "Compute the radius.", "workingLatex": "r = 7\\,\\text{cm}", "explanation": "Half of $14$ is $7$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "Area is $\\pi$ times the radius squared.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the radius.", "workingLatex": "A = \\pi \\times 7^2", "explanation": "Put $7$ in place of $r$.", "diagram": null },
        { "stepNumber": 6, "description": "Square the radius.", "workingLatex": "7^2 = 49", "explanation": "Squaring means $7 \\times 7 = 49$.", "diagram": null },
        { "stepNumber": 7, "description": "Write it with pi.", "workingLatex": "A = 49\\pi", "explanation": "We keep the $\\pi$ symbol.", "diagram": null },
        { "stepNumber": 8, "description": "Add units.", "workingLatex": "A = 49\\pi\\,\\text{cm}^2", "explanation": "Area is in square centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "A = 49\\pi\\,\\text{cm}^2", "explanation": "The exact area is $49\\pi\\,\\text{cm}^2$; a common slip is squaring the diameter instead of the radius.", "diagram": null }
      ],
      "finalAnswer": "$49\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q034",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["semicircle", "perimeter", "in terms of pi", "exact"],
    "questionText": "A semicircle has radius $4\\,\\text{cm}$. Find its exact perimeter in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the parts of the perimeter.", "workingLatex": "P = \\text{curved edge} + \\text{diameter}", "explanation": "The perimeter of a semicircle is the curved half plus the straight diameter across the flat side.", "diagram": null },
        { "stepNumber": 2, "description": "Find the full circumference.", "workingLatex": "C = 2\\pi r = 2\\pi \\times 4 = 8\\pi", "explanation": "First find the circumference of the whole circle.", "diagram": null },
        { "stepNumber": 3, "description": "Take half for the curved edge.", "workingLatex": "\\text{curved} = \\frac{1}{2} \\times 8\\pi", "explanation": "The curved edge is exactly half of the full circumference.", "diagram": null },
        { "stepNumber": 4, "description": "Compute the curved edge.", "workingLatex": "\\text{curved} = 4\\pi", "explanation": "Half of $8\\pi$ is $4\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the diameter.", "workingLatex": "d = 2r = 2 \\times 4", "explanation": "The straight edge is the diameter, twice the radius.", "diagram": null },
        { "stepNumber": 6, "description": "Compute the diameter.", "workingLatex": "d = 8", "explanation": "Twice $4$ is $8$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the two parts.", "workingLatex": "P = 4\\pi + 8", "explanation": "Add the curved edge and the diameter.", "diagram": null },
        { "stepNumber": 8, "description": "Leave the terms separate.", "workingLatex": "4\\pi + 8", "explanation": "We cannot merge these because one term contains $\\pi$ and the other does not.", "diagram": null },
        { "stepNumber": 9, "description": "Add units.", "workingLatex": "P = (4\\pi + 8)\\,\\text{cm}", "explanation": "The perimeter is a length in centimetres.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "P = (4\\pi + 8)\\,\\text{cm}", "explanation": "The exact perimeter is $(4\\pi + 8)\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$(4\\pi + 8)\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q035",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["semicircle", "area", "in terms of pi", "exact"],
    "questionText": "A semicircle has radius $6\\,\\text{cm}$. Find its exact area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Half a circle.", "workingLatex": "A = \\frac{1}{2}\\pi r^2", "explanation": "A semicircle is half a circle, so its area is half of $\\pi r^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "A = \\frac{1}{2}\\pi \\times 6^2", "explanation": "The radius is $6\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the radius.", "workingLatex": "6^2 = 36", "explanation": "Squaring means $6 \\times 6 = 36$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the full circle area.", "workingLatex": "\\pi \\times 36 = 36\\pi", "explanation": "The whole circle would have area $36\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "Take half.", "workingLatex": "A = \\frac{1}{2} \\times 36\\pi", "explanation": "The semicircle is half of that area.", "diagram": null },
        { "stepNumber": 6, "description": "Compute.", "workingLatex": "A = 18\\pi", "explanation": "Half of $36\\pi$ is $18\\pi$.", "diagram": null },
        { "stepNumber": 7, "description": "Keep it exact.", "workingLatex": "A = 18\\pi", "explanation": "The answer stays in terms of $\\pi$.", "diagram": null },
        { "stepNumber": 8, "description": "Add units.", "workingLatex": "A = 18\\pi\\,\\text{cm}^2", "explanation": "Area is in square centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "A = 18\\pi\\,\\text{cm}^2", "explanation": "The exact area is $18\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$18\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q036",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["quarter circle", "arc length", "in terms of pi", "exact"],
    "questionText": "A quarter circle has radius $8\\,\\text{cm}$. Find the exact length of its curved edge (arc) in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "A quarter of the circumference.", "workingLatex": "\\text{arc} = \\frac{1}{4} \\times C", "explanation": "The curved edge of a quarter circle is one quarter of the full circumference.", "diagram": null },
        { "stepNumber": 2, "description": "Write the circumference formula.", "workingLatex": "C = 2\\pi r", "explanation": "First find the whole circumference.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the radius.", "workingLatex": "C = 2\\pi \\times 8", "explanation": "The radius is $8\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 4, "description": "Compute the circumference.", "workingLatex": "C = 16\\pi", "explanation": "Twice eight is sixteen, giving $16\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "Take a quarter.", "workingLatex": "\\text{arc} = \\frac{1}{4} \\times 16\\pi", "explanation": "The arc is a quarter of $16\\pi$.", "diagram": null },
        { "stepNumber": 6, "description": "Compute.", "workingLatex": "\\text{arc} = 4\\pi", "explanation": "Sixteen divided by four is four.", "diagram": null },
        { "stepNumber": 7, "description": "Keep it exact.", "workingLatex": "\\text{arc} = 4\\pi", "explanation": "The answer stays in terms of $\\pi$.", "diagram": null },
        { "stepNumber": 8, "description": "Add units.", "workingLatex": "\\text{arc} = 4\\pi\\,\\text{cm}", "explanation": "Length is measured in centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\text{arc} = 4\\pi\\,\\text{cm}", "explanation": "The exact arc length is $4\\pi\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$4\\pi\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q037",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["quarter circle", "sector area", "in terms of pi", "exact"],
    "questionText": "A quarter circle has radius $10\\,\\text{cm}$. Find its exact area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "A quarter of the circle's area.", "workingLatex": "A = \\frac{1}{4}\\pi r^2", "explanation": "A quarter circle's area is one quarter of the whole circle's area $\\pi r^2$.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "A = \\frac{1}{4}\\pi \\times 10^2", "explanation": "The radius is $10\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the radius.", "workingLatex": "10^2 = 100", "explanation": "Squaring means $10 \\times 10 = 100$.", "diagram": null },
        { "stepNumber": 4, "description": "Find the full circle area.", "workingLatex": "\\pi \\times 100 = 100\\pi", "explanation": "The whole circle would have area $100\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "Take a quarter.", "workingLatex": "A = \\frac{1}{4} \\times 100\\pi", "explanation": "The sector is one quarter of that area.", "diagram": null },
        { "stepNumber": 6, "description": "Compute.", "workingLatex": "A = 25\\pi", "explanation": "One hundred divided by four is twenty-five.", "diagram": null },
        { "stepNumber": 7, "description": "Keep it exact.", "workingLatex": "A = 25\\pi", "explanation": "The answer stays in terms of $\\pi$.", "diagram": null },
        { "stepNumber": 8, "description": "Add units.", "workingLatex": "A = 25\\pi\\,\\text{cm}^2", "explanation": "Area is in square centimetres.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "A = 25\\pi\\,\\text{cm}^2", "explanation": "The exact area is $25\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$25\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q038",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["worded", "fractions", "multiplication", "mixed number"],
    "questionText": "A recipe needs $\\tfrac{3}{4}$ of a cup of flour for one batch. Exactly how much flour is needed for $5$ batches? Give your answer as a mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "5 \\times \\frac{3}{4}", "explanation": "Five batches each need three quarters of a cup, so we multiply the amount by $5$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the whole number as a fraction.", "workingLatex": "5 = \\frac{5}{1}", "explanation": "Writing $5$ over $1$ lets us multiply fractions in the usual way.", "diagram": null },
        { "stepNumber": 3, "description": "Set up the product.", "workingLatex": "\\frac{5}{1} \\times \\frac{3}{4}", "explanation": "Now both quantities are fractions.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the tops.", "workingLatex": "5 \\times 3 = 15", "explanation": "The numerators give $15$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the bottoms.", "workingLatex": "1 \\times 4 = 4", "explanation": "The denominators give $4$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the improper fraction.", "workingLatex": "\\frac{15}{4}", "explanation": "This is fifteen quarters of a cup.", "diagram": null },
        { "stepNumber": 7, "description": "Convert to a mixed number.", "workingLatex": "\\frac{15}{4} = 3\\tfrac{3}{4}", "explanation": "Since $15 = 3 \\times 4 + 3$, this is three and three quarter cups.", "diagram": null },
        { "stepNumber": 8, "description": "Check the fraction part.", "workingLatex": "\\gcd(3,4) = 1", "explanation": "Three quarters is already in lowest terms.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "5 \\times \\frac{3}{4} = 3\\tfrac{3}{4}", "explanation": "Exactly three and three quarter cups of flour are needed.", "diagram": null }
      ],
      "finalAnswer": "$3\\tfrac{3}{4}\\text{ cups}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q039",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["worded", "fractions", "division", "exact"],
    "questionText": "A ribbon is $\\tfrac{3}{4}\\,\\text{m}$ long. It is cut into pieces each $\\tfrac{1}{8}\\,\\text{m}$ long. Exactly how many pieces are made?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\frac{3}{4} \\div \\frac{1}{8}", "explanation": "We divide the total length by the length of each piece to find how many pieces fit.", "diagram": null },
        { "stepNumber": 2, "description": "Use keep, flip, change.", "workingLatex": "\\frac{3}{4} \\times \\frac{8}{1}", "explanation": "Divide by flipping the second fraction to its reciprocal.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the four into the eight.", "workingLatex": "\\frac{3}{1} \\times \\frac{2}{1}", "explanation": "The $4$ divides into the $8$ exactly twice, leaving $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the tops.", "workingLatex": "3 \\times 2 = 6", "explanation": "The numerators give $6$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the bottoms.", "workingLatex": "1 \\times 1 = 1", "explanation": "The denominators give $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the result.", "workingLatex": "\\frac{6}{1} = 6", "explanation": "So six pieces are made.", "diagram": null },
        { "stepNumber": 7, "description": "Sense check.", "workingLatex": "6 \\times \\frac{1}{8} = \\frac{6}{8} = \\frac{3}{4}", "explanation": "Six eighths equals three quarters, confirming the whole ribbon is used exactly.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret the answer.", "workingLatex": "6", "explanation": "The answer is a count of pieces, so it must be a whole number.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{3}{4} \\div \\frac{1}{8} = 6", "explanation": "Exactly $6$ pieces are made.", "diagram": null }
      ],
      "finalAnswer": "$6\\text{ pieces}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q040",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 2,
    "answerType": "fraction",
    "tags": ["worded", "fractions", "subtraction from one", "exact"],
    "questionText": "A tank of water is full. If $\\tfrac{3}{7}$ of the water is used, what exact fraction of the tank remains?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the whole as sevenths.", "workingLatex": "1 = \\frac{7}{7}", "explanation": "A full tank is one whole, which we write as seven sevenths to match the fraction used.", "diagram": null },
        { "stepNumber": 2, "description": "Note the fraction used.", "workingLatex": "\\frac{3}{7}", "explanation": "Three sevenths of the water is used.", "diagram": null },
        { "stepNumber": 3, "description": "Set up the subtraction.", "workingLatex": "\\frac{7}{7} - \\frac{3}{7}", "explanation": "The remaining fraction is the whole minus the part used.", "diagram": null },
        { "stepNumber": 4, "description": "Same denominator.", "workingLatex": "\\frac{7}{7} - \\frac{3}{7}", "explanation": "Both are sevenths, so we can subtract the tops directly.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the numerators.", "workingLatex": "\\frac{7-3}{7}", "explanation": "Take three sevenths away from seven sevenths.", "diagram": null },
        { "stepNumber": 6, "description": "Compute.", "workingLatex": "= \\frac{4}{7}", "explanation": "Seven minus three leaves four sevenths.", "diagram": null },
        { "stepNumber": 7, "description": "Check for simplifying.", "workingLatex": "\\gcd(4,7) = 1", "explanation": "Four sevenths is already in lowest terms.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret the answer.", "workingLatex": "\\frac{4}{7}", "explanation": "Four of the seven equal parts of water are still in the tank.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "1 - \\frac{3}{7} = \\frac{4}{7}", "explanation": "Exactly four sevenths of the tank remains.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{4}{7}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q041",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "mixed number", "exact"],
    "questionText": "Work out $\\frac{5}{6} + \\frac{3}{8}$, giving your answer as an exact mixed number in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "The denominators differ.", "workingLatex": "\\frac{5}{6} + \\frac{3}{8}", "explanation": "Sixths and eighths are different sizes, so we need a common denominator.", "diagram": null },
        { "stepNumber": 2, "description": "Find the LCM.", "workingLatex": "\\text{LCM}(6,8) = 24", "explanation": "The smallest number both $6$ and $8$ divide into is $24$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert five sixths.", "workingLatex": "\\frac{5}{6} = \\frac{20}{24}", "explanation": "Multiply top and bottom by $4$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert three eighths.", "workingLatex": "\\frac{3}{8} = \\frac{9}{24}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 5, "description": "Add the numerators.", "workingLatex": "\\frac{20}{24} + \\frac{9}{24} = \\frac{29}{24}", "explanation": "Twenty twenty-fourths plus nine twenty-fourths.", "diagram": null },
        { "stepNumber": 6, "description": "Recognise it is top-heavy.", "workingLatex": "\\frac{29}{24}", "explanation": "The numerator is bigger than the denominator, so it is more than one whole.", "diagram": null },
        { "stepNumber": 7, "description": "Convert to a mixed number.", "workingLatex": "\\frac{29}{24} = 1\\tfrac{5}{24}", "explanation": "Since $29 = 1 \\times 24 + 5$, this is one whole and five twenty-fourths.", "diagram": null },
        { "stepNumber": 8, "description": "Check the fraction part.", "workingLatex": "\\gcd(5,24) = 1", "explanation": "Five twenty-fourths cannot be reduced.", "diagram": null },
        { "stepNumber": 9, "description": "Confirm exact form.", "workingLatex": "1\\tfrac{5}{24}", "explanation": "Both the whole part and fraction part are exact.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\frac{5}{6} + \\frac{3}{8} = 1\\tfrac{5}{24}", "explanation": "The exact total is one and five twenty-fourths.", "diagram": null }
      ],
      "finalAnswer": "$1\\tfrac{5}{24}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q042",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "subtraction", "common denominator", "exact"],
    "questionText": "Work out $\\frac{7}{10} - \\frac{2}{15}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "The denominators differ.", "workingLatex": "\\frac{7}{10} - \\frac{2}{15}", "explanation": "Tenths and fifteenths are different sizes, so a common denominator is needed.", "diagram": null },
        { "stepNumber": 2, "description": "Find the LCM.", "workingLatex": "\\text{LCM}(10,15) = 30", "explanation": "The smallest number both $10$ and $15$ divide into is $30$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert seven tenths.", "workingLatex": "\\frac{7}{10} = \\frac{21}{30}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert two fifteenths.", "workingLatex": "\\frac{2}{15} = \\frac{4}{30}", "explanation": "Multiply top and bottom by $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the numerators.", "workingLatex": "\\frac{21}{30} - \\frac{4}{30} = \\frac{17}{30}", "explanation": "Twenty-one thirtieths minus four thirtieths.", "diagram": null },
        { "stepNumber": 6, "description": "Look at the result.", "workingLatex": "\\frac{17}{30}", "explanation": "The difference is seventeen thirtieths.", "diagram": null },
        { "stepNumber": 7, "description": "Check for simplifying.", "workingLatex": "\\gcd(17,30) = 1", "explanation": "Because $17$ is prime and does not divide $30$, the fraction cannot be reduced.", "diagram": null },
        { "stepNumber": 8, "description": "Confirm exact form.", "workingLatex": "\\frac{17}{30}", "explanation": "The fraction is the exact value.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{7}{10} - \\frac{2}{15} = \\frac{17}{30}", "explanation": "The exact difference is seventeen thirtieths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{17}{30}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q043",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "cancelling", "exact"],
    "questionText": "Work out $\\frac{4}{9} \\times \\frac{3}{8}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the multiplication.", "workingLatex": "\\frac{4}{9} \\times \\frac{3}{8}", "explanation": "Multiply the tops together and the bottoms together, cancelling common factors first.", "diagram": null },
        { "stepNumber": 2, "description": "Cancel the four and the eight.", "workingLatex": "\\frac{1}{9} \\times \\frac{3}{2}", "explanation": "The $4$ and $8$ share a factor of $4$, giving $1$ and $2$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the three and the nine.", "workingLatex": "\\frac{1}{3} \\times \\frac{1}{2}", "explanation": "The $3$ and $9$ share a factor of $3$, giving $1$ and $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the tops.", "workingLatex": "1 \\times 1 = 1", "explanation": "The numerators give $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the bottoms.", "workingLatex": "3 \\times 2 = 6", "explanation": "The denominators give $6$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the product.", "workingLatex": "\\frac{4}{9} \\times \\frac{3}{8} = \\frac{1}{6}", "explanation": "So the product is one sixth.", "diagram": null },
        { "stepNumber": 7, "description": "Check for simplifying.", "workingLatex": "\\gcd(1,6) = 1", "explanation": "One sixth is already in lowest terms.", "diagram": null },
        { "stepNumber": 8, "description": "Note the benefit of cancelling.", "workingLatex": "\\frac{1}{6}", "explanation": "Cancelling early kept the arithmetic small and the answer exact.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{1}{6}", "explanation": "The exact product is one sixth.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{6}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q044",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "division", "cancelling", "exact"],
    "questionText": "Work out $\\frac{5}{6} \\div \\frac{10}{3}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the division.", "workingLatex": "\\frac{5}{6} \\div \\frac{10}{3}", "explanation": "We divide five sixths by ten thirds.", "diagram": null },
        { "stepNumber": 2, "description": "Use keep, flip, change.", "workingLatex": "\\frac{5}{6} \\times \\frac{3}{10}", "explanation": "Divide by flipping the second fraction to its reciprocal.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the five and the ten.", "workingLatex": "\\frac{1}{6} \\times \\frac{3}{2}", "explanation": "The $5$ and $10$ share a factor of $5$, giving $1$ and $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the three and the six.", "workingLatex": "\\frac{1}{2} \\times \\frac{1}{2}", "explanation": "The $3$ and $6$ share a factor of $3$, giving $1$ and $2$.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the tops.", "workingLatex": "1 \\times 1 = 1", "explanation": "The numerators give $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the bottoms.", "workingLatex": "2 \\times 2 = 4", "explanation": "The denominators give $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the result.", "workingLatex": "\\frac{5}{6} \\div \\frac{10}{3} = \\frac{1}{4}", "explanation": "So the answer is one quarter.", "diagram": null },
        { "stepNumber": 8, "description": "Check for simplifying.", "workingLatex": "\\gcd(1,4) = 1", "explanation": "One quarter is already in lowest terms.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{1}{4}", "explanation": "The exact answer is one quarter.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{4}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q045",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["circle", "area", "exact vs decimal", "in terms of pi"],
    "questionText": "A circle has radius $4\\,\\text{cm}$. Find its exact area in terms of $\\pi$, and explain why this is better than writing $50.3\\,\\text{cm}^2$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "Area is $\\pi$ times the radius squared.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "A = \\pi \\times 4^2", "explanation": "The radius is $4\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the radius.", "workingLatex": "4^2 = 16", "explanation": "Squaring means $4 \\times 4 = 16$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the exact area.", "workingLatex": "A = 16\\pi\\,\\text{cm}^2", "explanation": "This is the exact area, kept in terms of $\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "Look at the decimal version.", "workingLatex": "16\\pi = 50.265\\ldots", "explanation": "Multiplying by $\\pi$ gives a decimal that never ends.", "diagram": null },
        { "stepNumber": 6, "description": "Round it.", "workingLatex": "16\\pi \\approx 50.3", "explanation": "Rounding to one decimal place drops the endless digits.", "diagram": null },
        { "stepNumber": 7, "description": "See why exact is better.", "workingLatex": "50.3 \\neq 16\\pi", "explanation": "The rounded value is slightly wrong, so any later calculation using it would carry that error.", "diagram": null },
        { "stepNumber": 8, "description": "Keep the pi.", "workingLatex": "16\\pi", "explanation": "Leaving the $\\pi$ keeps the value perfectly accurate.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "A = 16\\pi\\,\\text{cm}^2", "explanation": "The exact area is $16\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$16\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q046",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["circle", "circumference", "fractional radius", "in terms of pi"],
    "questionText": "A circle has radius $\\tfrac{1}{2}\\,\\text{cm}$. Find its exact circumference in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the formula.", "workingLatex": "C = 2\\pi r", "explanation": "Circumference is $2\\pi$ times the radius.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "C = 2\\pi \\times \\frac{1}{2}", "explanation": "The radius is one half.", "diagram": null },
        { "stepNumber": 3, "description": "Group the numbers.", "workingLatex": "C = \\left(2 \\times \\frac{1}{2}\\right)\\pi", "explanation": "Collect the ordinary numbers together, keeping $\\pi$ aside.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numbers.", "workingLatex": "2 \\times \\frac{1}{2} = 1", "explanation": "Two halves make one whole.", "diagram": null },
        { "stepNumber": 5, "description": "Simplify.", "workingLatex": "C = 1\\pi", "explanation": "So the circumference is one times $\\pi$.", "diagram": null },
        { "stepNumber": 6, "description": "Tidy the notation.", "workingLatex": "C = \\pi", "explanation": "We usually drop the $1$ and simply write $\\pi$.", "diagram": null },
        { "stepNumber": 7, "description": "Add units.", "workingLatex": "C = \\pi\\,\\text{cm}", "explanation": "The circumference is a length in centimetres.", "diagram": null },
        { "stepNumber": 8, "description": "Note the exactness.", "workingLatex": "\\pi \\approx 3.14", "explanation": "The symbol $\\pi$ is the exact circumference; $3.14$ is only a rounded value.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "C = \\pi\\,\\text{cm}", "explanation": "The exact circumference is $\\pi\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$\\pi\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q047",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["circle", "circumference", "reverse", "in terms of pi"],
    "questionText": "The circumference of a circle is exactly $20\\pi\\,\\text{cm}$. Find its exact diameter and radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the formula.", "workingLatex": "C = \\pi d", "explanation": "Circumference equals $\\pi$ times the diameter.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the circumference.", "workingLatex": "20\\pi = \\pi d", "explanation": "We put the given circumference into the formula.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by pi.", "workingLatex": "\\frac{20\\pi}{\\pi} = d", "explanation": "Dividing both sides by $\\pi$ isolates the diameter.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the pi.", "workingLatex": "d = 20", "explanation": "The $\\pi$ cancels, leaving $d = 20$.", "diagram": null },
        { "stepNumber": 5, "description": "Add units to the diameter.", "workingLatex": "d = 20\\,\\text{cm}", "explanation": "The diameter is $20\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 6, "description": "Find the radius.", "workingLatex": "r = \\frac{d}{2} = \\frac{20}{2}", "explanation": "The radius is half the diameter.", "diagram": null },
        { "stepNumber": 7, "description": "Compute the radius.", "workingLatex": "r = 10", "explanation": "Half of $20$ is $10$.", "diagram": null },
        { "stepNumber": 8, "description": "Add units to the radius.", "workingLatex": "r = 10\\,\\text{cm}", "explanation": "The radius is $10\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "d = 20\\,\\text{cm}, \\ r = 10\\,\\text{cm}", "explanation": "The exact diameter is $20\\,\\text{cm}$ and the radius is $10\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$d = 20\\,\\text{cm}$ and $r = 10\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q048",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["circle", "area", "reverse", "square root"],
    "questionText": "The area of a circle is exactly $64\\pi\\,\\text{cm}^2$. Find its exact radius.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the formula.", "workingLatex": "A = \\pi r^2", "explanation": "Area equals $\\pi$ times the radius squared.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the area.", "workingLatex": "64\\pi = \\pi r^2", "explanation": "We put the given area into the formula.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by pi.", "workingLatex": "\\frac{64\\pi}{\\pi} = r^2", "explanation": "Dividing both sides by $\\pi$ removes it.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the pi.", "workingLatex": "r^2 = 64", "explanation": "The $\\pi$ cancels, leaving $r^2 = 64$.", "diagram": null },
        { "stepNumber": 5, "description": "Take the square root.", "workingLatex": "r = \\sqrt{64}", "explanation": "To undo the squaring we take the positive square root of both sides.", "diagram": null },
        { "stepNumber": 6, "description": "Compute.", "workingLatex": "r = 8", "explanation": "Since $8 \\times 8 = 64$, the square root is $8$.", "diagram": null },
        { "stepNumber": 7, "description": "Add units.", "workingLatex": "r = 8\\,\\text{cm}", "explanation": "The radius is $8\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 8, "description": "Note why we take the positive root.", "workingLatex": "r > 0", "explanation": "A length must be positive, so we ignore the negative root.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "r = 8\\,\\text{cm}", "explanation": "The exact radius is $8\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$8\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q049",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "exact",
    "tags": ["worded", "circle", "circumference", "in terms of pi"],
    "questionText": "A circular pond has radius $5\\,\\text{m}$. A path runs all the way around its edge. Find the exact length of the path in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\text{path} = C", "explanation": "The path around the edge is exactly the circumference of the circle.", "diagram": null },
        { "stepNumber": 2, "description": "Write the formula.", "workingLatex": "C = 2\\pi r", "explanation": "Circumference is $2\\pi$ times the radius.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the radius.", "workingLatex": "C = 2\\pi \\times 5", "explanation": "The radius is $5\\,\\text{m}$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the numbers.", "workingLatex": "2 \\times 5 = 10", "explanation": "Combine the ordinary numbers, keeping $\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "Write it with pi.", "workingLatex": "C = 10\\pi", "explanation": "This is the exact form.", "diagram": null },
        { "stepNumber": 6, "description": "Add units.", "workingLatex": "C = 10\\pi\\,\\text{m}", "explanation": "The length is measured in metres.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret the answer.", "workingLatex": "\\text{path} = 10\\pi\\,\\text{m}", "explanation": "So the path is $10\\pi$ metres long.", "diagram": null },
        { "stepNumber": 8, "description": "Note the exactness.", "workingLatex": "10\\pi \\approx 31.4", "explanation": "The exact form avoids the rounding in $31.4\\,\\text{m}$.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\text{path} = 10\\pi\\,\\text{m}", "explanation": "The exact length of the path is $10\\pi\\,\\text{m}$.", "diagram": null }
      ],
      "finalAnswer": "$10\\pi\\,\\text{m}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q050",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": ["sector", "arc length", "angle", "in terms of pi"],
    "questionText": "A sector of a circle has radius $12\\,\\text{cm}$ and angle $90^\\circ$. Find the exact length of its arc in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the fraction of the circle.", "workingLatex": "\\frac{90}{360} = \\frac{1}{4}", "explanation": "A $90^\\circ$ angle is one quarter of the full $360^\\circ$, so the arc is a quarter of the circumference.", "diagram": null },
        { "stepNumber": 2, "description": "Write the circumference formula.", "workingLatex": "C = 2\\pi r", "explanation": "First find the whole circumference.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the radius.", "workingLatex": "C = 2\\pi \\times 12", "explanation": "The radius is $12\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 4, "description": "Compute the circumference.", "workingLatex": "C = 24\\pi", "explanation": "Twice twelve is twenty-four, giving $24\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the arc formula.", "workingLatex": "\\text{arc} = \\frac{1}{4} \\times C", "explanation": "The arc is the fraction of the circumference that matches the angle.", "diagram": null },
        { "stepNumber": 6, "description": "Substitute the circumference.", "workingLatex": "\\text{arc} = \\frac{1}{4} \\times 24\\pi", "explanation": "Take a quarter of $24\\pi$.", "diagram": null },
        { "stepNumber": 7, "description": "Compute.", "workingLatex": "\\text{arc} = 6\\pi", "explanation": "Twenty-four divided by four is six.", "diagram": null },
        { "stepNumber": 8, "description": "Keep it exact.", "workingLatex": "\\text{arc} = 6\\pi", "explanation": "The answer stays in terms of $\\pi$.", "diagram": null },
        { "stepNumber": 9, "description": "Add units.", "workingLatex": "\\text{arc} = 6\\pi\\,\\text{cm}", "explanation": "Length is measured in centimetres.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "\\text{arc} = 6\\pi\\,\\text{cm}", "explanation": "The exact arc length is $6\\pi\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$6\\pi\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q051",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 4,
    "answerType": "exact",
    "tags": ["sector", "area", "angle", "in terms of pi"],
    "questionText": "A sector of a circle has radius $6\\,\\text{cm}$ and angle $60^\\circ$. Find its exact area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the fraction of the circle.", "workingLatex": "\\frac{60}{360} = \\frac{1}{6}", "explanation": "A $60^\\circ$ angle is one sixth of the full $360^\\circ$, so the sector is one sixth of the circle.", "diagram": null },
        { "stepNumber": 2, "description": "Write the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "First find the area of the whole circle.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the radius.", "workingLatex": "A = \\pi \\times 6^2", "explanation": "The radius is $6\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 4, "description": "Square the radius.", "workingLatex": "6^2 = 36", "explanation": "Squaring means $6 \\times 6 = 36$.", "diagram": null },
        { "stepNumber": 5, "description": "Find the full circle area.", "workingLatex": "A_{\\text{circle}} = 36\\pi", "explanation": "The whole circle has area $36\\pi$.", "diagram": null },
        { "stepNumber": 6, "description": "Write the sector formula.", "workingLatex": "A = \\frac{1}{6} \\times 36\\pi", "explanation": "The sector is one sixth of the circle's area.", "diagram": null },
        { "stepNumber": 7, "description": "Compute.", "workingLatex": "A = 6\\pi", "explanation": "Thirty-six divided by six is six.", "diagram": null },
        { "stepNumber": 8, "description": "Keep it exact.", "workingLatex": "A = 6\\pi", "explanation": "The answer stays in terms of $\\pi$.", "diagram": null },
        { "stepNumber": 9, "description": "Add units.", "workingLatex": "A = 6\\pi\\,\\text{cm}^2", "explanation": "Area is measured in square centimetres.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "A = 6\\pi\\,\\text{cm}^2", "explanation": "The exact sector area is $6\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$6\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q052",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["mixed numbers", "addition", "improper fractions", "exact"],
    "questionText": "Work out $2\\tfrac{3}{4} + 1\\tfrac{5}{6}$, giving your answer as an exact mixed number in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the mixed numbers.", "workingLatex": "2\\tfrac{3}{4} + 1\\tfrac{5}{6}", "explanation": "We add two and three quarters to one and five sixths.", "diagram": null },
        { "stepNumber": 2, "description": "Make the first improper.", "workingLatex": "2\\tfrac{3}{4} = \\frac{11}{4}", "explanation": "Two wholes are eight quarters, plus three quarters makes eleven quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Make the second improper.", "workingLatex": "1\\tfrac{5}{6} = \\frac{11}{6}", "explanation": "One whole is six sixths, plus five sixths makes eleven sixths.", "diagram": null },
        { "stepNumber": 4, "description": "Find a common denominator.", "workingLatex": "\\text{LCM}(4,6) = 12", "explanation": "The smallest common denominator of $4$ and $6$ is $12$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert eleven quarters.", "workingLatex": "\\frac{11}{4} = \\frac{33}{12}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Convert eleven sixths.", "workingLatex": "\\frac{11}{6} = \\frac{22}{12}", "explanation": "Multiply top and bottom by $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Add the fractions.", "workingLatex": "\\frac{33}{12} + \\frac{22}{12} = \\frac{55}{12}", "explanation": "Add the numerators over twelfths.", "diagram": null },
        { "stepNumber": 8, "description": "Convert back to a mixed number.", "workingLatex": "\\frac{55}{12} = 4\\tfrac{7}{12}", "explanation": "Since $55 = 4 \\times 12 + 7$, this is four wholes and seven twelfths.", "diagram": null },
        { "stepNumber": 9, "description": "Check the fraction part.", "workingLatex": "\\gcd(7,12) = 1", "explanation": "Seven twelfths cannot be reduced.", "diagram": null },
        { "stepNumber": 10, "description": "State the final answer.", "workingLatex": "2\\tfrac{3}{4} + 1\\tfrac{5}{6} = 4\\tfrac{7}{12}", "explanation": "The exact total is four and seven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$4\\tfrac{7}{12}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q053",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["worded", "fractions", "subtraction", "exact"],
    "questionText": "A tank is $\\tfrac{7}{8}$ full. Then $\\tfrac{1}{3}$ of a full tank is drained out. What exact fraction of the tank is now full?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the subtraction.", "workingLatex": "\\frac{7}{8} - \\frac{1}{3}", "explanation": "We subtract the fraction drained from the fraction that was in the tank.", "diagram": null },
        { "stepNumber": 2, "description": "Find the LCM.", "workingLatex": "\\text{LCM}(8,3) = 24", "explanation": "The smallest common denominator of $8$ and $3$ is $24$.", "diagram": null },
        { "stepNumber": 3, "description": "Convert seven eighths.", "workingLatex": "\\frac{7}{8} = \\frac{21}{24}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert one third.", "workingLatex": "\\frac{1}{3} = \\frac{8}{24}", "explanation": "Multiply top and bottom by $8$.", "diagram": null },
        { "stepNumber": 5, "description": "Subtract the numerators.", "workingLatex": "\\frac{21}{24} - \\frac{8}{24} = \\frac{13}{24}", "explanation": "Twenty-one twenty-fourths minus eight twenty-fourths.", "diagram": null },
        { "stepNumber": 6, "description": "Look at the result.", "workingLatex": "\\frac{13}{24}", "explanation": "The difference is thirteen twenty-fourths.", "diagram": null },
        { "stepNumber": 7, "description": "Check for simplifying.", "workingLatex": "\\gcd(13,24) = 1", "explanation": "Because $13$ is prime and does not divide $24$, the fraction cannot be reduced.", "diagram": null },
        { "stepNumber": 8, "description": "Interpret the answer.", "workingLatex": "\\frac{13}{24}", "explanation": "Thirteen of the tank's twenty-four equal parts are full.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{7}{8} - \\frac{1}{3} = \\frac{13}{24}", "explanation": "The tank is now exactly thirteen twenty-fourths full.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{13}{24}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q054",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Intermediate",
    "marks": 3,
    "answerType": "fraction",
    "tags": ["fractions", "multiplication", "three fractions", "cancelling"],
    "questionText": "Work out $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the multiplication.", "workingLatex": "\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4}", "explanation": "To multiply several fractions we multiply all the tops and all the bottoms, cancelling first.", "diagram": null },
        { "stepNumber": 2, "description": "Cancel the twos.", "workingLatex": "\\frac{1}{\\cancel{2}} \\times \\frac{\\cancel{2}}{3} \\times \\frac{3}{4}", "explanation": "The $2$ on the first bottom cancels with the $2$ on the second top.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the threes.", "workingLatex": "\\frac{1}{1} \\times \\frac{1}{\\cancel{3}} \\times \\frac{\\cancel{3}}{4}", "explanation": "The $3$ on the second bottom cancels with the $3$ on the third top.", "diagram": null },
        { "stepNumber": 4, "description": "See what remains.", "workingLatex": "\\frac{1}{1} \\times \\frac{1}{1} \\times \\frac{1}{4}", "explanation": "After cancelling, only the final quarter carries numbers other than one.", "diagram": null },
        { "stepNumber": 5, "description": "Multiply the tops.", "workingLatex": "1 \\times 1 \\times 1 = 1", "explanation": "The numerators multiply to $1$.", "diagram": null },
        { "stepNumber": 6, "description": "Multiply the bottoms.", "workingLatex": "1 \\times 1 \\times 4 = 4", "explanation": "The denominators multiply to $4$.", "diagram": null },
        { "stepNumber": 7, "description": "Write the product.", "workingLatex": "\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} = \\frac{1}{4}", "explanation": "So the product is one quarter.", "diagram": null },
        { "stepNumber": 8, "description": "Check for simplifying.", "workingLatex": "\\gcd(1,4) = 1", "explanation": "One quarter is already in lowest terms.", "diagram": null },
        { "stepNumber": 9, "description": "State the final answer.", "workingLatex": "\\frac{1}{4}", "explanation": "The exact product is one quarter.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{1}{4}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q055",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "fraction",
    "tags": ["fractions", "mixed operations", "common denominator", "exact"],
    "questionText": "Work out $\\frac{2}{3} + \\frac{3}{4} - \\frac{5}{6}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{2}{3} + \\frac{3}{4} - \\frac{5}{6}", "explanation": "We combine three fractions with different denominators, working from left to right.", "diagram": null },
        { "stepNumber": 2, "description": "List the denominators.", "workingLatex": "3, \\ 4, \\ 6", "explanation": "The denominators are $3$, $4$ and $6$.", "diagram": null },
        { "stepNumber": 3, "description": "Find a common denominator.", "workingLatex": "\\text{LCM}(3,4,6) = 12", "explanation": "The smallest number all three divide into is $12$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert two thirds.", "workingLatex": "\\frac{2}{3} = \\frac{8}{12}", "explanation": "Multiply top and bottom by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert three quarters.", "workingLatex": "\\frac{3}{4} = \\frac{9}{12}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 6, "description": "Convert five sixths.", "workingLatex": "\\frac{5}{6} = \\frac{10}{12}", "explanation": "Multiply top and bottom by $2$.", "diagram": null },
        { "stepNumber": 7, "description": "Rewrite everything in twelfths.", "workingLatex": "\\frac{8}{12} + \\frac{9}{12} - \\frac{10}{12}", "explanation": "All three fractions are now twelfths, so we can combine the numerators.", "diagram": null },
        { "stepNumber": 8, "description": "Add the first two.", "workingLatex": "\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}", "explanation": "Eight plus nine is seventeen twelfths.", "diagram": null },
        { "stepNumber": 9, "description": "Subtract the last.", "workingLatex": "\\frac{17}{12} - \\frac{10}{12} = \\frac{7}{12}", "explanation": "Seventeen minus ten leaves seven twelfths.", "diagram": null },
        { "stepNumber": 10, "description": "Look at the result.", "workingLatex": "\\frac{7}{12}", "explanation": "The combined value is seven twelfths.", "diagram": null },
        { "stepNumber": 11, "description": "Check for simplifying.", "workingLatex": "\\gcd(7,12) = 1", "explanation": "Seven twelfths cannot be reduced.", "diagram": null },
        { "stepNumber": 12, "description": "Sense-check the size.", "workingLatex": "0 < \\frac{7}{12} < 1", "explanation": "The answer sits between zero and one, which is sensible for this mix of adding and subtracting.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "\\frac{2}{3} + \\frac{3}{4} - \\frac{5}{6} = \\frac{7}{12}", "explanation": "The exact answer is seven twelfths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{7}{12}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q056",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "fraction",
    "tags": ["mixed numbers", "brackets", "multiplication", "exact"],
    "questionText": "Work out $\\left(1\\tfrac{1}{2} + 2\\tfrac{1}{4}\\right) \\times \\frac{2}{3}$, giving your answer as an exact mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\left(1\\tfrac{1}{2} + 2\\tfrac{1}{4}\\right) \\times \\frac{2}{3}", "explanation": "Brackets come first, so we add the two mixed numbers before multiplying.", "diagram": null },
        { "stepNumber": 2, "description": "Make the first improper.", "workingLatex": "1\\tfrac{1}{2} = \\frac{3}{2}", "explanation": "One and a half is three halves.", "diagram": null },
        { "stepNumber": 3, "description": "Make the second improper.", "workingLatex": "2\\tfrac{1}{4} = \\frac{9}{4}", "explanation": "Two and a quarter is nine quarters.", "diagram": null },
        { "stepNumber": 4, "description": "Common denominator in the bracket.", "workingLatex": "\\text{LCM}(2,4) = 4", "explanation": "Four is the common denominator inside the bracket.", "diagram": null },
        { "stepNumber": 5, "description": "Convert three halves.", "workingLatex": "\\frac{3}{2} = \\frac{6}{4}", "explanation": "Multiply top and bottom by $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Add inside the bracket.", "workingLatex": "\\frac{6}{4} + \\frac{9}{4} = \\frac{15}{4}", "explanation": "The bracket totals fifteen quarters.", "diagram": null },
        { "stepNumber": 7, "description": "Bring in the multiplication.", "workingLatex": "\\frac{15}{4} \\times \\frac{2}{3}", "explanation": "Now multiply the bracket result by two thirds.", "diagram": null },
        { "stepNumber": 8, "description": "Cancel the fifteen and the three.", "workingLatex": "\\frac{5}{4} \\times \\frac{2}{1}", "explanation": "The $15$ and $3$ share a factor of $3$, giving $5$ and $1$.", "diagram": null },
        { "stepNumber": 9, "description": "Cancel the four and the two.", "workingLatex": "\\frac{5}{2} \\times \\frac{1}{1}", "explanation": "The $4$ and $2$ share a factor of $2$, giving $2$ and $1$.", "diagram": null },
        { "stepNumber": 10, "description": "Multiply the tops.", "workingLatex": "5 \\times 1 = 5", "explanation": "The numerators give $5$.", "diagram": null },
        { "stepNumber": 11, "description": "Multiply the bottoms.", "workingLatex": "2 \\times 1 = 2", "explanation": "The denominators give $2$.", "diagram": null },
        { "stepNumber": 12, "description": "Write the improper fraction.", "workingLatex": "\\frac{5}{2}", "explanation": "The product is five halves.", "diagram": null },
        { "stepNumber": 13, "description": "Convert to a mixed number.", "workingLatex": "\\frac{5}{2} = 2\\tfrac{1}{2}", "explanation": "Five halves is two and a half.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "\\left(1\\tfrac{1}{2} + 2\\tfrac{1}{4}\\right) \\times \\frac{2}{3} = 2\\tfrac{1}{2}", "explanation": "The exact answer is two and a half.", "diagram": null }
      ],
      "finalAnswer": "$2\\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q057",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "fraction",
    "tags": ["mixed numbers", "division", "cancelling", "exact"],
    "questionText": "Work out $3\\tfrac{3}{4} \\div 2\\tfrac{1}{2}$, giving your answer as an exact mixed number.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "3\\tfrac{3}{4} \\div 2\\tfrac{1}{2}", "explanation": "We divide three and three quarters by two and a half.", "diagram": null },
        { "stepNumber": 2, "description": "Make the first improper.", "workingLatex": "3\\tfrac{3}{4} = \\frac{15}{4}", "explanation": "Three wholes are twelve quarters, plus three quarters makes fifteen quarters.", "diagram": null },
        { "stepNumber": 3, "description": "Make the second improper.", "workingLatex": "2\\tfrac{1}{2} = \\frac{5}{2}", "explanation": "Two and a half is five halves.", "diagram": null },
        { "stepNumber": 4, "description": "Rewrite the division.", "workingLatex": "\\frac{15}{4} \\div \\frac{5}{2}", "explanation": "Both quantities are now improper fractions.", "diagram": null },
        { "stepNumber": 5, "description": "Use keep, flip, change.", "workingLatex": "\\frac{15}{4} \\times \\frac{2}{5}", "explanation": "Divide by flipping the second fraction to its reciprocal.", "diagram": null },
        { "stepNumber": 6, "description": "Cancel the fifteen and the five.", "workingLatex": "\\frac{3}{4} \\times \\frac{2}{1}", "explanation": "The $15$ and $5$ share a factor of $5$, giving $3$ and $1$.", "diagram": null },
        { "stepNumber": 7, "description": "Cancel the four and the two.", "workingLatex": "\\frac{3}{2} \\times \\frac{1}{1}", "explanation": "The $4$ and $2$ share a factor of $2$, giving $2$ and $1$.", "diagram": null },
        { "stepNumber": 8, "description": "Multiply the tops.", "workingLatex": "3 \\times 1 = 3", "explanation": "The numerators give $3$.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply the bottoms.", "workingLatex": "2 \\times 1 = 2", "explanation": "The denominators give $2$.", "diagram": null },
        { "stepNumber": 10, "description": "Write the improper fraction.", "workingLatex": "\\frac{3}{2}", "explanation": "The result is three halves.", "diagram": null },
        { "stepNumber": 11, "description": "Convert to a mixed number.", "workingLatex": "\\frac{3}{2} = 1\\tfrac{1}{2}", "explanation": "Three halves is one and a half.", "diagram": null },
        { "stepNumber": 12, "description": "Sense check by multiplying back.", "workingLatex": "\\tfrac{3}{2} \\times \\tfrac{5}{2} = \\tfrac{15}{4} = 3\\tfrac{3}{4}", "explanation": "Multiplying the answer by the divisor returns the original, confirming it.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "3\\tfrac{3}{4} \\div 2\\tfrac{1}{2} = 1\\tfrac{1}{2}", "explanation": "The exact answer is one and a half.", "diagram": null }
      ],
      "finalAnswer": "$1\\tfrac{1}{2}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q058",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "exact",
    "tags": ["annulus", "circle", "area", "in terms of pi"],
    "questionText": "A ring (annulus) has an outer radius of $10\\,\\text{cm}$ and an inner radius of $6\\,\\text{cm}$. Find the exact area of the ring in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the idea.", "workingLatex": "A = A_{\\text{outer}} - A_{\\text{inner}}", "explanation": "The ring's area is the big circle minus the empty circle in the middle.", "diagram": null },
        { "stepNumber": 2, "description": "Outer area formula.", "workingLatex": "A_{\\text{outer}} = \\pi \\times 10^2", "explanation": "Use the area formula with the outer radius $10$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the outer radius.", "workingLatex": "10^2 = 100", "explanation": "$10 \\times 10 = 100$.", "diagram": null },
        { "stepNumber": 4, "description": "Outer area.", "workingLatex": "A_{\\text{outer}} = 100\\pi", "explanation": "The outer circle has area $100\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "Inner area formula.", "workingLatex": "A_{\\text{inner}} = \\pi \\times 6^2", "explanation": "Use the area formula with the inner radius $6$.", "diagram": null },
        { "stepNumber": 6, "description": "Square the inner radius.", "workingLatex": "6^2 = 36", "explanation": "$6 \\times 6 = 36$.", "diagram": null },
        { "stepNumber": 7, "description": "Inner area.", "workingLatex": "A_{\\text{inner}} = 36\\pi", "explanation": "The inner circle has area $36\\pi$.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract.", "workingLatex": "A = 100\\pi - 36\\pi", "explanation": "Take the inner circle away from the outer circle.", "diagram": null },
        { "stepNumber": 9, "description": "Factor out pi.", "workingLatex": "A = (100 - 36)\\pi", "explanation": "Both terms share $\\pi$, so we just subtract the numbers.", "diagram": null },
        { "stepNumber": 10, "description": "Compute.", "workingLatex": "100 - 36 = 64", "explanation": "One hundred minus thirty-six is sixty-four.", "diagram": null },
        { "stepNumber": 11, "description": "Write the result.", "workingLatex": "A = 64\\pi", "explanation": "So the ring's area is $64\\pi$.", "diagram": null },
        { "stepNumber": 12, "description": "Add units.", "workingLatex": "A = 64\\pi\\,\\text{cm}^2", "explanation": "Area is measured in square centimetres.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "A = 64\\pi\\,\\text{cm}^2", "explanation": "The exact area of the ring is $64\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$64\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q059",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "exact",
    "tags": ["quarter circle", "perimeter", "arc", "in terms of pi"],
    "questionText": "A quarter circle (a sector with angle $90^\\circ$) has radius $14\\,\\text{cm}$. Find its exact perimeter in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Identify the parts.", "workingLatex": "P = \\text{arc} + 2r", "explanation": "A quarter circle's perimeter is the curved arc plus the two straight radii.", "diagram": null },
        { "stepNumber": 2, "description": "Fraction of the circle.", "workingLatex": "\\frac{90}{360} = \\frac{1}{4}", "explanation": "A $90^\\circ$ angle is a quarter of the circle, so the arc is a quarter of the circumference.", "diagram": null },
        { "stepNumber": 3, "description": "Circumference formula.", "workingLatex": "C = 2\\pi r = 2\\pi \\times 14", "explanation": "Find the whole circumference first.", "diagram": null },
        { "stepNumber": 4, "description": "Compute the circumference.", "workingLatex": "C = 28\\pi", "explanation": "Twice fourteen is twenty-eight.", "diagram": null },
        { "stepNumber": 5, "description": "Find the arc.", "workingLatex": "\\text{arc} = \\frac{1}{4} \\times 28\\pi", "explanation": "The arc is a quarter of $28\\pi$.", "diagram": null },
        { "stepNumber": 6, "description": "Compute the arc.", "workingLatex": "\\text{arc} = 7\\pi", "explanation": "Twenty-eight divided by four is seven.", "diagram": null },
        { "stepNumber": 7, "description": "Add the two radii.", "workingLatex": "2r = 2 \\times 14", "explanation": "The two straight edges are each a radius of $14$.", "diagram": null },
        { "stepNumber": 8, "description": "Compute the radii.", "workingLatex": "2r = 28", "explanation": "Two fourteens make twenty-eight.", "diagram": null },
        { "stepNumber": 9, "description": "Add the parts.", "workingLatex": "P = 7\\pi + 28", "explanation": "Add the arc and the two radii.", "diagram": null },
        { "stepNumber": 10, "description": "Leave terms separate.", "workingLatex": "7\\pi + 28", "explanation": "One term has $\\pi$ and the other does not, so they stay separate.", "diagram": null },
        { "stepNumber": 11, "description": "Add units.", "workingLatex": "P = (7\\pi + 28)\\,\\text{cm}", "explanation": "The perimeter is a length in centimetres.", "diagram": null },
        { "stepNumber": 12, "description": "Sense-check the size.", "workingLatex": "7\\pi \\approx 22", "explanation": "The arc is roughly $22\\,\\text{cm}$, so the total is a sensible size.", "diagram": null },
        { "stepNumber": 13, "description": "Keep it exact.", "workingLatex": "(7\\pi + 28)\\,\\text{cm}", "explanation": "We leave the answer exact rather than rounding.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "P = (7\\pi + 28)\\,\\text{cm}", "explanation": "The exact perimeter is $(7\\pi + 28)\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$(7\\pi + 28)\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q060",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "exact",
    "tags": ["composite area", "quarter circle", "square", "in terms of pi"],
    "questionText": "A square has side $10\\,\\text{cm}$. A quarter circle of radius $10\\,\\text{cm}$, centred at one corner, is removed from it. Find the exact area of the remaining shape in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the idea.", "workingLatex": "A = A_{\\text{square}} - A_{\\text{quarter}}", "explanation": "The remaining area is the square minus the quarter circle cut out of it.", "diagram": null },
        { "stepNumber": 2, "description": "Square area.", "workingLatex": "A_{\\text{square}} = 10 \\times 10", "explanation": "The square's area is side times side.", "diagram": null },
        { "stepNumber": 3, "description": "Compute the square.", "workingLatex": "A_{\\text{square}} = 100", "explanation": "Ten times ten is one hundred.", "diagram": null },
        { "stepNumber": 4, "description": "Quarter circle formula.", "workingLatex": "A_{\\text{quarter}} = \\frac{1}{4}\\pi r^2", "explanation": "A quarter circle is one quarter of $\\pi r^2$.", "diagram": null },
        { "stepNumber": 5, "description": "Substitute the radius.", "workingLatex": "A_{\\text{quarter}} = \\frac{1}{4}\\pi \\times 10^2", "explanation": "The radius is $10\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 6, "description": "Square the radius.", "workingLatex": "10^2 = 100", "explanation": "$10 \\times 10 = 100$.", "diagram": null },
        { "stepNumber": 7, "description": "Full circle area.", "workingLatex": "\\pi \\times 100 = 100\\pi", "explanation": "The whole circle would be $100\\pi$.", "diagram": null },
        { "stepNumber": 8, "description": "Take a quarter.", "workingLatex": "A_{\\text{quarter}} = \\frac{1}{4} \\times 100\\pi = 25\\pi", "explanation": "One quarter of $100\\pi$ is $25\\pi$.", "diagram": null },
        { "stepNumber": 9, "description": "Subtract.", "workingLatex": "A = 100 - 25\\pi", "explanation": "Take the quarter circle away from the square.", "diagram": null },
        { "stepNumber": 10, "description": "Leave terms separate.", "workingLatex": "100 - 25\\pi", "explanation": "One term has $\\pi$ and the other does not, so they stay separate.", "diagram": null },
        { "stepNumber": 11, "description": "Add units.", "workingLatex": "A = (100 - 25\\pi)\\,\\text{cm}^2", "explanation": "Area is measured in square centimetres.", "diagram": null },
        { "stepNumber": 12, "description": "Sense-check the size.", "workingLatex": "25\\pi \\approx 78.5", "explanation": "The removed piece is about $78.5\\,\\text{cm}^2$, leaving roughly $21.5\\,\\text{cm}^2$, which is positive and sensible.", "diagram": null },
        { "stepNumber": 13, "description": "Keep it exact.", "workingLatex": "(100 - 25\\pi)\\,\\text{cm}^2", "explanation": "We leave the answer exact rather than rounding.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "A = (100 - 25\\pi)\\,\\text{cm}^2", "explanation": "The exact remaining area is $(100 - 25\\pi)\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$(100 - 25\\pi)\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q061",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "exact",
    "tags": ["circle", "area", "circumference", "reverse"],
    "questionText": "A circle has area exactly $81\\pi\\,\\text{cm}^2$. Find its exact circumference in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Plan the route.", "workingLatex": "A = \\pi r^2", "explanation": "We first use the area to find the radius, then use the radius for the circumference.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the area.", "workingLatex": "81\\pi = \\pi r^2", "explanation": "Put the given area into the formula.", "diagram": null },
        { "stepNumber": 3, "description": "Divide both sides by pi.", "workingLatex": "\\frac{81\\pi}{\\pi} = r^2", "explanation": "Divide both sides by $\\pi$.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the pi.", "workingLatex": "r^2 = 81", "explanation": "The $\\pi$ cancels, leaving $r^2 = 81$.", "diagram": null },
        { "stepNumber": 5, "description": "Take the square root.", "workingLatex": "r = \\sqrt{81}", "explanation": "Take the positive square root of both sides.", "diagram": null },
        { "stepNumber": 6, "description": "Compute the radius.", "workingLatex": "r = 9", "explanation": "Since $9 \\times 9 = 81$, the radius is $9\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 7, "description": "Circumference formula.", "workingLatex": "C = 2\\pi r", "explanation": "Now find the circumference.", "diagram": null },
        { "stepNumber": 8, "description": "Substitute the radius.", "workingLatex": "C = 2\\pi \\times 9", "explanation": "Put the radius $9$ into the formula.", "diagram": null },
        { "stepNumber": 9, "description": "Multiply the numbers.", "workingLatex": "2 \\times 9 = 18", "explanation": "Combine the numbers, keeping $\\pi$.", "diagram": null },
        { "stepNumber": 10, "description": "Write it with pi.", "workingLatex": "C = 18\\pi", "explanation": "Exact form.", "diagram": null },
        { "stepNumber": 11, "description": "Add units.", "workingLatex": "C = 18\\pi\\,\\text{cm}", "explanation": "Length is in centimetres.", "diagram": null },
        { "stepNumber": 12, "description": "Check against the area.", "workingLatex": "\\pi \\times 9^2 = 81\\pi", "explanation": "Using $r = 9$ reproduces the given area, confirming the radius.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "C = 18\\pi\\,\\text{cm}", "explanation": "The exact circumference is $18\\pi\\,\\text{cm}$.", "diagram": null }
      ],
      "finalAnswer": "$18\\pi\\,\\text{cm}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q062",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "fraction",
    "tags": ["worded", "fractions", "fraction of a fraction", "exact"],
    "questionText": "In a class, $\\tfrac{3}{5}$ of the students are girls. Of the girls, $\\tfrac{1}{4}$ wear glasses. What exact fraction of the whole class are girls who wear glasses?",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Interpret the problem.", "workingLatex": "\\frac{1}{4} \\text{ of } \\frac{3}{5}", "explanation": "We want a quarter of the girls, and the girls are three fifths of the class, so we take a part of a part.", "diagram": null },
        { "stepNumber": 2, "description": "Turn 'of' into multiply.", "workingLatex": "\\frac{1}{4} \\times \\frac{3}{5}", "explanation": "The word 'of' between two fractions means multiply them.", "diagram": null },
        { "stepNumber": 3, "description": "Multiply the tops.", "workingLatex": "1 \\times 3 = 3", "explanation": "The numerators give $3$.", "diagram": null },
        { "stepNumber": 4, "description": "Multiply the bottoms.", "workingLatex": "4 \\times 5 = 20", "explanation": "The denominators give $20$.", "diagram": null },
        { "stepNumber": 5, "description": "Write the product.", "workingLatex": "\\frac{1}{4} \\times \\frac{3}{5} = \\frac{3}{20}", "explanation": "So the answer is three twentieths.", "diagram": null },
        { "stepNumber": 6, "description": "Check for simplifying.", "workingLatex": "\\gcd(3,20) = 1", "explanation": "Three twentieths cannot be reduced.", "diagram": null },
        { "stepNumber": 7, "description": "Interpret the answer.", "workingLatex": "\\frac{3}{20}", "explanation": "Three out of every twenty students are girls who wear glasses.", "diagram": null },
        { "stepNumber": 8, "description": "Picture it with real numbers.", "workingLatex": "20 \\to 12 \\text{ girls} \\to 3", "explanation": "If the class had $20$ students, then $\\tfrac{3}{5}$ gives $12$ girls, and $\\tfrac{1}{4}$ of those is $3$, matching three twentieths.", "diagram": null },
        { "stepNumber": 9, "description": "Sense-check against the girls.", "workingLatex": "\\frac{3}{20} < \\frac{3}{5}", "explanation": "This group is smaller than the group of all girls, which is expected.", "diagram": null },
        { "stepNumber": 10, "description": "Sense-check as a percentage.", "workingLatex": "\\frac{3}{20} = 0.15", "explanation": "That is $15\\%$ of the class, a believable amount.", "diagram": null },
        { "stepNumber": 11, "description": "Note why we multiply.", "workingLatex": "\\text{'of'} \\Rightarrow \\times", "explanation": "We multiply rather than add because we are taking a fraction of another fraction.", "diagram": null },
        { "stepNumber": 12, "description": "Confirm exact form.", "workingLatex": "\\frac{3}{20}", "explanation": "The fraction is the exact answer.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "\\frac{1}{4} \\times \\frac{3}{5} = \\frac{3}{20}", "explanation": "The exact fraction is three twentieths of the class.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{20}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q063",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "fraction",
    "tags": ["fractions", "addition", "four fractions", "exact"],
    "questionText": "Work out $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16}", "explanation": "We add four fractions whose denominators are all powers of two.", "diagram": null },
        { "stepNumber": 2, "description": "Find a common denominator.", "workingLatex": "\\text{LCM}(2,4,8,16) = 16", "explanation": "Sixteen is the largest denominator and all the others divide into it.", "diagram": null },
        { "stepNumber": 3, "description": "Convert one half.", "workingLatex": "\\frac{1}{2} = \\frac{8}{16}", "explanation": "Multiply top and bottom by $8$.", "diagram": null },
        { "stepNumber": 4, "description": "Convert one quarter.", "workingLatex": "\\frac{1}{4} = \\frac{4}{16}", "explanation": "Multiply top and bottom by $4$.", "diagram": null },
        { "stepNumber": 5, "description": "Convert one eighth.", "workingLatex": "\\frac{1}{8} = \\frac{2}{16}", "explanation": "Multiply top and bottom by $2$.", "diagram": null },
        { "stepNumber": 6, "description": "Keep one sixteenth.", "workingLatex": "\\frac{1}{16} = \\frac{1}{16}", "explanation": "This one is already in sixteenths.", "diagram": null },
        { "stepNumber": 7, "description": "Line up the sixteenths.", "workingLatex": "\\frac{8}{16} + \\frac{4}{16} + \\frac{2}{16} + \\frac{1}{16}", "explanation": "All four fractions are now sixteenths.", "diagram": null },
        { "stepNumber": 8, "description": "Add the numerators.", "workingLatex": "8 + 4 + 2 + 1 = 15", "explanation": "Adding the tops gives fifteen.", "diagram": null },
        { "stepNumber": 9, "description": "Write the result.", "workingLatex": "\\frac{15}{16}", "explanation": "So the total is fifteen sixteenths.", "diagram": null },
        { "stepNumber": 10, "description": "Check for simplifying.", "workingLatex": "\\gcd(15,16) = 1", "explanation": "Fifteen and sixteen share no factor, so it is already simplest.", "diagram": null },
        { "stepNumber": 11, "description": "Note the size.", "workingLatex": "\\frac{15}{16} < 1", "explanation": "The total is just under a whole.", "diagram": null },
        { "stepNumber": 12, "description": "Spot the pattern.", "workingLatex": "1 - \\frac{15}{16} = \\frac{1}{16}", "explanation": "It falls exactly one sixteenth short of a whole, a neat halving pattern.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm exact form.", "workingLatex": "\\frac{15}{16}", "explanation": "The fraction is the exact value.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} = \\frac{15}{16}", "explanation": "The exact total is fifteen sixteenths.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{15}{16}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q064",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "numeric",
    "tags": ["fractions", "order of operations", "division", "exact"],
    "questionText": "Work out $\\frac{2}{3} \\div \\frac{4}{9} - \\frac{1}{2}$, giving your answer exactly.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{2}{3} \\div \\frac{4}{9} - \\frac{1}{2}", "explanation": "By the order of operations we do the division first, then subtract the half.", "diagram": null },
        { "stepNumber": 2, "description": "Use keep, flip, change.", "workingLatex": "\\frac{2}{3} \\times \\frac{9}{4}", "explanation": "Dividing by $\\frac{4}{9}$ is the same as multiplying by $\\frac{9}{4}$.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the two and the four.", "workingLatex": "\\frac{1}{3} \\times \\frac{9}{2}", "explanation": "The $2$ and $4$ share a factor of $2$, giving $1$ and $2$.", "diagram": null },
        { "stepNumber": 4, "description": "Cancel the nine and the three.", "workingLatex": "\\frac{1}{1} \\times \\frac{3}{2}", "explanation": "The $9$ and $3$ share a factor of $3$, giving $3$ and $1$.", "diagram": null },
        { "stepNumber": 5, "description": "Complete the division.", "workingLatex": "\\frac{1 \\times 3}{1 \\times 2} = \\frac{3}{2}", "explanation": "The division gives three halves.", "diagram": null },
        { "stepNumber": 6, "description": "Bring back the subtraction.", "workingLatex": "\\frac{3}{2} - \\frac{1}{2}", "explanation": "Now subtract one half from three halves.", "diagram": null },
        { "stepNumber": 7, "description": "Same denominator.", "workingLatex": "\\frac{3}{2} - \\frac{1}{2}", "explanation": "Both are halves, so we subtract the tops directly.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract the numerators.", "workingLatex": "\\frac{3-1}{2} = \\frac{2}{2}", "explanation": "Three halves minus one half is two halves.", "diagram": null },
        { "stepNumber": 9, "description": "Simplify.", "workingLatex": "\\frac{2}{2} = 1", "explanation": "Two halves make one whole.", "diagram": null },
        { "stepNumber": 10, "description": "State the value.", "workingLatex": "1", "explanation": "So the whole expression equals $1$.", "diagram": null },
        { "stepNumber": 11, "description": "Confirm.", "workingLatex": "\\frac{2}{2}", "explanation": "Two over two confirms a single whole.", "diagram": null },
        { "stepNumber": 12, "description": "Sense check.", "workingLatex": "\\frac{3}{2} > \\frac{1}{2}", "explanation": "The result is positive, since the divided part was larger than the half.", "diagram": null },
        { "stepNumber": 13, "description": "Confirm exact form.", "workingLatex": "1", "explanation": "The answer is an exact whole number.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "\\frac{2}{3} \\div \\frac{4}{9} - \\frac{1}{2} = 1", "explanation": "The exact answer is $1$.", "diagram": null }
      ],
      "finalAnswer": "$1$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q065",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "exact",
    "tags": ["sector", "area", "angle", "in terms of pi"],
    "questionText": "A sector of a circle has radius $8\\,\\text{cm}$ and angle $45^\\circ$. Find its exact area in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the fraction of the circle.", "workingLatex": "\\frac{45}{360} = \\frac{1}{8}", "explanation": "A $45^\\circ$ angle is one eighth of the full $360^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Write the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "First find the area of the whole circle.", "diagram": null },
        { "stepNumber": 3, "description": "Substitute the radius.", "workingLatex": "A = \\pi \\times 8^2", "explanation": "The radius is $8\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 4, "description": "Square the radius.", "workingLatex": "8^2 = 64", "explanation": "$8 \\times 8 = 64$.", "diagram": null },
        { "stepNumber": 5, "description": "Full circle area.", "workingLatex": "A_{\\text{circle}} = 64\\pi", "explanation": "The whole circle has area $64\\pi$.", "diagram": null },
        { "stepNumber": 6, "description": "Take the fraction.", "workingLatex": "A = \\frac{1}{8} \\times 64\\pi", "explanation": "The sector is one eighth of the circle.", "diagram": null },
        { "stepNumber": 7, "description": "Compute.", "workingLatex": "A = 8\\pi", "explanation": "Sixty-four divided by eight is eight.", "diagram": null },
        { "stepNumber": 8, "description": "Keep it exact.", "workingLatex": "A = 8\\pi", "explanation": "The answer stays in terms of $\\pi$.", "diagram": null },
        { "stepNumber": 9, "description": "Add units.", "workingLatex": "A = 8\\pi\\,\\text{cm}^2", "explanation": "Area is in square centimetres.", "diagram": null },
        { "stepNumber": 10, "description": "Check the scaling.", "workingLatex": "\\frac{1}{8} \\times 64 = 8", "explanation": "Reapplying the one eighth confirms the arithmetic.", "diagram": null },
        { "stepNumber": 11, "description": "Sense-check the size.", "workingLatex": "8\\pi < 64\\pi", "explanation": "The sector is smaller than the whole circle, as expected.", "diagram": null },
        { "stepNumber": 12, "description": "Restate.", "workingLatex": "8\\pi\\,\\text{cm}^2", "explanation": "The sector area is $8\\pi\\,\\text{cm}^2$.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "A = 8\\pi\\,\\text{cm}^2", "explanation": "The exact sector area is $8\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$8\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q066",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "exact",
    "tags": ["composite", "perimeter", "semicircles", "in terms of pi"],
    "questionText": "A running track is shaped like a rectangle with a semicircle on each short end. The two straight sides are each $20\\,\\text{m}$ long, and each semicircular end has radius $7\\,\\text{m}$. Find the exact perimeter of the track in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Break up the perimeter.", "workingLatex": "P = 2 \\times \\text{straight} + \\text{two semicircles}", "explanation": "The track has two straight sides plus two semicircular ends.", "diagram": null },
        { "stepNumber": 2, "description": "Combine the ends.", "workingLatex": "\\text{two semicircles} = \\text{one full circle}", "explanation": "Two semicircles of the same radius join to make one complete circle.", "diagram": null },
        { "stepNumber": 3, "description": "Circumference formula.", "workingLatex": "C = 2\\pi r", "explanation": "So the curved part equals one full circumference.", "diagram": null },
        { "stepNumber": 4, "description": "Substitute the radius.", "workingLatex": "C = 2\\pi \\times 7", "explanation": "The radius of each end is $7\\,\\text{m}$.", "diagram": null },
        { "stepNumber": 5, "description": "Compute the curved part.", "workingLatex": "C = 14\\pi", "explanation": "Twice seven is fourteen, giving $14\\pi$.", "diagram": null },
        { "stepNumber": 6, "description": "Add the straights.", "workingLatex": "2 \\times 20", "explanation": "There are two straight sides, each $20\\,\\text{m}$.", "diagram": null },
        { "stepNumber": 7, "description": "Compute the straights.", "workingLatex": "= 40", "explanation": "Two twenties make forty.", "diagram": null },
        { "stepNumber": 8, "description": "Add the parts.", "workingLatex": "P = 40 + 14\\pi", "explanation": "Add the straight parts and the curved part.", "diagram": null },
        { "stepNumber": 9, "description": "Leave terms separate.", "workingLatex": "40 + 14\\pi", "explanation": "One term has $\\pi$ and the other does not, so they stay separate.", "diagram": null },
        { "stepNumber": 10, "description": "Add units.", "workingLatex": "P = (40 + 14\\pi)\\,\\text{m}", "explanation": "The perimeter is a length in metres.", "diagram": null },
        { "stepNumber": 11, "description": "Sense-check the size.", "workingLatex": "14\\pi \\approx 44", "explanation": "The curved part is about $44\\,\\text{m}$, so the total is roughly $84\\,\\text{m}$.", "diagram": null },
        { "stepNumber": 12, "description": "Keep it exact.", "workingLatex": "(40 + 14\\pi)\\,\\text{m}", "explanation": "We leave the answer exact rather than rounding.", "diagram": null },
        { "stepNumber": 13, "description": "Restate.", "workingLatex": "P = (40 + 14\\pi)\\,\\text{m}", "explanation": "This is the exact perimeter of the track.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "P = (40 + 14\\pi)\\,\\text{m}", "explanation": "The exact perimeter is $(40 + 14\\pi)\\,\\text{m}$.", "diagram": null }
      ],
      "finalAnswer": "$(40 + 14\\pi)\\,\\text{m}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q067",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 4,
    "answerType": "exact",
    "tags": ["circle", "area", "exact vs decimal", "in terms of pi"],
    "questionText": "A circle has radius $10\\,\\text{cm}$. Find its exact area in terms of $\\pi$, and explain why a builder using $\\pi \\approx 3.14$ would get a slightly wrong answer.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Write the area formula.", "workingLatex": "A = \\pi r^2", "explanation": "Area is $\\pi$ times the radius squared.", "diagram": null },
        { "stepNumber": 2, "description": "Substitute the radius.", "workingLatex": "A = \\pi \\times 10^2", "explanation": "The radius is $10\\,\\text{cm}$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the radius.", "workingLatex": "10^2 = 100", "explanation": "$10 \\times 10 = 100$.", "diagram": null },
        { "stepNumber": 4, "description": "Write the exact area.", "workingLatex": "A = 100\\pi\\,\\text{cm}^2", "explanation": "This is the exact area, kept in terms of $\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "The builder's value.", "workingLatex": "\\pi \\approx 3.14", "explanation": "The builder replaces $\\pi$ with the rounded value $3.14$.", "diagram": null },
        { "stepNumber": 6, "description": "The builder's area.", "workingLatex": "100 \\times 3.14 = 314", "explanation": "This gives an area of $314\\,\\text{cm}^2$.", "diagram": null },
        { "stepNumber": 7, "description": "The true decimal.", "workingLatex": "100\\pi = 314.159\\ldots", "explanation": "The true value has more digits after the decimal point.", "diagram": null },
        { "stepNumber": 8, "description": "Find the difference.", "workingLatex": "314.159\\ldots - 314 = 0.159\\ldots", "explanation": "The builder's answer is about $0.16\\,\\text{cm}^2$ too small.", "diagram": null },
        { "stepNumber": 9, "description": "Explain why.", "workingLatex": "3.14 < \\pi", "explanation": "Because $3.14$ is a little less than $\\pi$, the area comes out a little low.", "diagram": null },
        { "stepNumber": 10, "description": "Keep the pi.", "workingLatex": "100\\pi", "explanation": "Leaving $\\pi$ in the answer avoids this error entirely.", "diagram": null },
        { "stepNumber": 11, "description": "Note when it matters.", "workingLatex": "\\text{large scale} \\Rightarrow \\text{bigger error}", "explanation": "On a bigger job the small error would be multiplied up and matter more.", "diagram": null },
        { "stepNumber": 12, "description": "Restate.", "workingLatex": "A = 100\\pi\\,\\text{cm}^2", "explanation": "The exact area is $100\\pi\\,\\text{cm}^2$.", "diagram": null },
        { "stepNumber": 13, "description": "State the final answer.", "workingLatex": "A = 100\\pi\\,\\text{cm}^2", "explanation": "The exact area is $100\\pi\\,\\text{cm}^2$, which is more reliable than $314\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$100\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q068",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "fraction",
    "tags": ["fractions", "order of operations", "brackets", "exact"],
    "questionText": "Work out $\\frac{5}{6} - \\left(\\frac{1}{2} \\times \\frac{2}{3}\\right) + \\frac{1}{4}$, giving your answer as an exact fraction in its simplest form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Read the calculation.", "workingLatex": "\\frac{5}{6} - \\left(\\frac{1}{2} \\times \\frac{2}{3}\\right) + \\frac{1}{4}", "explanation": "Brackets first, so we work out the multiplication before the addition and subtraction.", "diagram": null },
        { "stepNumber": 2, "description": "Multiply inside the bracket.", "workingLatex": "\\frac{1}{2} \\times \\frac{2}{3}", "explanation": "Deal with the bracket first.", "diagram": null },
        { "stepNumber": 3, "description": "Cancel the twos.", "workingLatex": "\\frac{1}{1} \\times \\frac{1}{3}", "explanation": "The $2$ on the bottom cancels the $2$ on the top.", "diagram": null },
        { "stepNumber": 4, "description": "Result of the bracket.", "workingLatex": "= \\frac{1}{3}", "explanation": "So the bracket equals one third.", "diagram": null },
        { "stepNumber": 5, "description": "Rewrite the expression.", "workingLatex": "\\frac{5}{6} - \\frac{1}{3} + \\frac{1}{4}", "explanation": "Replace the bracket with one third.", "diagram": null },
        { "stepNumber": 6, "description": "Find a common denominator.", "workingLatex": "\\text{LCM}(6,3,4) = 12", "explanation": "The smallest number all of $6$, $3$ and $4$ divide into is $12$.", "diagram": null },
        { "stepNumber": 7, "description": "Convert five sixths.", "workingLatex": "\\frac{5}{6} = \\frac{10}{12}", "explanation": "Multiply top and bottom by $2$.", "diagram": null },
        { "stepNumber": 8, "description": "Convert one third.", "workingLatex": "\\frac{1}{3} = \\frac{4}{12}", "explanation": "Multiply top and bottom by $4$.", "diagram": null },
        { "stepNumber": 9, "description": "Convert one quarter.", "workingLatex": "\\frac{1}{4} = \\frac{3}{12}", "explanation": "Multiply top and bottom by $3$.", "diagram": null },
        { "stepNumber": 10, "description": "Rewrite in twelfths.", "workingLatex": "\\frac{10}{12} - \\frac{4}{12} + \\frac{3}{12}", "explanation": "All three fractions are now twelfths.", "diagram": null },
        { "stepNumber": 11, "description": "Subtract first.", "workingLatex": "\\frac{10}{12} - \\frac{4}{12} = \\frac{6}{12}", "explanation": "Ten twelfths minus four twelfths is six twelfths.", "diagram": null },
        { "stepNumber": 12, "description": "Then add.", "workingLatex": "\\frac{6}{12} + \\frac{3}{12} = \\frac{9}{12}", "explanation": "Six twelfths plus three twelfths is nine twelfths.", "diagram": null },
        { "stepNumber": 13, "description": "Simplify.", "workingLatex": "\\frac{9}{12} = \\frac{3}{4}", "explanation": "Dividing top and bottom by $3$ gives three quarters.", "diagram": null },
        { "stepNumber": 14, "description": "Check for simplifying.", "workingLatex": "\\gcd(3,4) = 1", "explanation": "Three quarters is already in lowest terms.", "diagram": null },
        { "stepNumber": 15, "description": "State the final answer.", "workingLatex": "\\frac{5}{6} - \\left(\\frac{1}{2} \\times \\frac{2}{3}\\right) + \\frac{1}{4} = \\frac{3}{4}", "explanation": "The exact answer is three quarters.", "diagram": null }
      ],
      "finalAnswer": "$\\frac{3}{4}$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q069",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "exact",
    "tags": ["sector", "arc length", "area", "in terms of pi"],
    "questionText": "A sector of a circle has radius $9\\,\\text{cm}$ and angle $120^\\circ$. Find the exact arc length and the exact area of the sector, both in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Find the fraction of the circle.", "workingLatex": "\\frac{120}{360} = \\frac{1}{3}", "explanation": "A $120^\\circ$ angle is one third of the full $360^\\circ$.", "diagram": null },
        { "stepNumber": 2, "description": "Circumference for the arc.", "workingLatex": "C = 2\\pi r = 2\\pi \\times 9", "explanation": "Find the whole circumference to get the arc.", "diagram": null },
        { "stepNumber": 3, "description": "Compute the circumference.", "workingLatex": "C = 18\\pi", "explanation": "Twice nine is eighteen.", "diagram": null },
        { "stepNumber": 4, "description": "Take a third for the arc.", "workingLatex": "\\text{arc} = \\frac{1}{3} \\times 18\\pi", "explanation": "The arc is one third of the circumference.", "diagram": null },
        { "stepNumber": 5, "description": "Compute the arc.", "workingLatex": "\\text{arc} = 6\\pi", "explanation": "Eighteen divided by three is six.", "diagram": null },
        { "stepNumber": 6, "description": "Arc units.", "workingLatex": "\\text{arc} = 6\\pi\\,\\text{cm}", "explanation": "The arc length is in centimetres.", "diagram": null },
        { "stepNumber": 7, "description": "Circle area for the sector.", "workingLatex": "A_{\\text{circle}} = \\pi \\times 9^2", "explanation": "Now find the whole circle's area.", "diagram": null },
        { "stepNumber": 8, "description": "Square the radius.", "workingLatex": "9^2 = 81", "explanation": "$9 \\times 9 = 81$.", "diagram": null },
        { "stepNumber": 9, "description": "Full circle area.", "workingLatex": "A_{\\text{circle}} = 81\\pi", "explanation": "The whole circle has area $81\\pi$.", "diagram": null },
        { "stepNumber": 10, "description": "Take a third for the sector.", "workingLatex": "A = \\frac{1}{3} \\times 81\\pi", "explanation": "The sector is one third of the circle's area.", "diagram": null },
        { "stepNumber": 11, "description": "Compute the area.", "workingLatex": "A = 27\\pi", "explanation": "Eighty-one divided by three is twenty-seven.", "diagram": null },
        { "stepNumber": 12, "description": "Area units.", "workingLatex": "A = 27\\pi\\,\\text{cm}^2", "explanation": "Area is in square centimetres.", "diagram": null },
        { "stepNumber": 13, "description": "Same fraction throughout.", "workingLatex": "\\frac{1}{3}", "explanation": "Both the arc and the area use the same one third scaling.", "diagram": null },
        { "stepNumber": 14, "description": "Restate both.", "workingLatex": "\\text{arc} = 6\\pi\\,\\text{cm}, \\ A = 27\\pi\\,\\text{cm}^2", "explanation": "Both answers are kept exact in terms of $\\pi$.", "diagram": null },
        { "stepNumber": 15, "description": "State the final answer.", "workingLatex": "\\text{arc} = 6\\pi\\,\\text{cm}, \\ A = 27\\pi\\,\\text{cm}^2", "explanation": "The exact arc length is $6\\pi\\,\\text{cm}$ and the exact area is $27\\pi\\,\\text{cm}^2$.", "diagram": null }
      ],
      "finalAnswer": "$\\text{arc} = 6\\pi\\,\\text{cm}$ and $A = 27\\pi\\,\\text{cm}^2$"
    }
  },
  {
    "id": "gcse.number.exact-calculation.q070",
    "level": "GCSE",
    "topic": "Number",
    "subtopic": "Exact calculation",
    "subtopicId": "gcse.number.exact-calculation",
    "difficulty": "Hard",
    "marks": 5,
    "answerType": "exact",
    "tags": ["worded", "annulus", "area", "in terms of pi"],
    "questionText": "A circular garden has radius $12\\,\\text{m}$. In the centre is a circular flower bed of radius $8\\,\\text{m}$. The region between them is a gravel path. Find the exact area of the path in terms of $\\pi$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        { "stepNumber": 1, "description": "Set up the idea.", "workingLatex": "A = A_{\\text{garden}} - A_{\\text{bed}}", "explanation": "The path is the whole garden minus the flower bed in the middle.", "diagram": null },
        { "stepNumber": 2, "description": "Garden area formula.", "workingLatex": "A_{\\text{garden}} = \\pi \\times 12^2", "explanation": "Use the area formula with the garden radius $12$.", "diagram": null },
        { "stepNumber": 3, "description": "Square the garden radius.", "workingLatex": "12^2 = 144", "explanation": "$12 \\times 12 = 144$.", "diagram": null },
        { "stepNumber": 4, "description": "Garden area.", "workingLatex": "A_{\\text{garden}} = 144\\pi", "explanation": "The garden has area $144\\pi$.", "diagram": null },
        { "stepNumber": 5, "description": "Bed area formula.", "workingLatex": "A_{\\text{bed}} = \\pi \\times 8^2", "explanation": "Use the area formula with the bed radius $8$.", "diagram": null },
        { "stepNumber": 6, "description": "Square the bed radius.", "workingLatex": "8^2 = 64", "explanation": "$8 \\times 8 = 64$.", "diagram": null },
        { "stepNumber": 7, "description": "Bed area.", "workingLatex": "A_{\\text{bed}} = 64\\pi", "explanation": "The flower bed has area $64\\pi$.", "diagram": null },
        { "stepNumber": 8, "description": "Subtract.", "workingLatex": "A = 144\\pi - 64\\pi", "explanation": "Take the bed away from the garden.", "diagram": null },
        { "stepNumber": 9, "description": "Factor out pi.", "workingLatex": "A = (144 - 64)\\pi", "explanation": "Both terms share $\\pi$, so we just subtract the numbers.", "diagram": null },
        { "stepNumber": 10, "description": "Compute.", "workingLatex": "144 - 64 = 80", "explanation": "One hundred and forty-four minus sixty-four is eighty.", "diagram": null },
        { "stepNumber": 11, "description": "Write the result.", "workingLatex": "A = 80\\pi", "explanation": "So the path has area $80\\pi$.", "diagram": null },
        { "stepNumber": 12, "description": "Add units.", "workingLatex": "A = 80\\pi\\,\\text{m}^2", "explanation": "Area is measured in square metres.", "diagram": null },
        { "stepNumber": 13, "description": "Sense-check the size.", "workingLatex": "80\\pi < 144\\pi", "explanation": "The path is smaller than the whole garden, as expected.", "diagram": null },
        { "stepNumber": 14, "description": "State the final answer.", "workingLatex": "A = 80\\pi\\,\\text{m}^2", "explanation": "The exact area of the path is $80\\pi\\,\\text{m}^2$.", "diagram": null }
      ],
      "finalAnswer": "$80\\pi\\,\\text{m}^2$"
    }
  },
];
