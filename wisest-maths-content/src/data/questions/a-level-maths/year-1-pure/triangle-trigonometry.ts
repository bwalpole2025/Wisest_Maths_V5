import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "al.y1.pure.triangle-trig.q001",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-side"
    ],
    "questionText": "In triangle $ABC$, $A=40^\\circ$, $B=65^\\circ$ and side $a=8$. Find the length of side $b$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "A=40^\\circ,\\quad B=65^\\circ,\\quad a=8",
          "explanation": "We know two angles and the side opposite $A$, and we want $b$, the side opposite $B$. The sine rule connects exactly these side–angle pairs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sine rule",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}",
          "explanation": "Each side divided by the sine of its opposite angle gives the same value, so any two of these ratios can be set equal.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the relevant pair",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}",
          "explanation": "We only need the two ratios that involve our known values and the unknown $b$, so we ignore the $c$ term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $b$",
          "workingLatex": "b=\\frac{a\\sin B}{\\sin A}",
          "explanation": "Multiplying both sides by $\\sin B$ leaves $b$ on its own, ready for substitution.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "b=\\frac{8\\sin 65^\\circ}{\\sin 40^\\circ}",
          "explanation": "We put in the known side and the two angles exactly as given in degrees.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "b=\\frac{8\\times 0.9063}{0.6428}=11.279\\ldots",
          "explanation": "Working out the sines and dividing gives the full unrounded value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 s.f.",
          "workingLatex": "b\\approx 11.3",
          "explanation": "The question asks for 3 significant figures, so we round the stored value to that accuracy.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it is sensible",
          "workingLatex": "B>A\\Rightarrow b>a:\\;11.3>8\\;\\checkmark",
          "explanation": "The larger angle should face the longer side; since $B$ is bigger than $A$, $b$ should be longer than $a$, which it is.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b \\approx 11.3$ (to 3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q002",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-side"
    ],
    "questionText": "In triangle $ABC$, $A=50^\\circ$, $C=35^\\circ$ and side $c=6$. Find the length of side $a$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "A=50^\\circ,\\quad C=35^\\circ,\\quad c=6",
          "explanation": "We know two angles and the side opposite $C$, and we want $a$, the side opposite $A$, so the sine rule links these directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sine rule",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}",
          "explanation": "Every side over the sine of its opposite angle is equal, which lets us match a known pair to an unknown pair.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the relevant pair",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{c}{\\sin C}",
          "explanation": "These are the two ratios containing our known values and the unknown $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $a$",
          "workingLatex": "a=\\frac{c\\sin A}{\\sin C}",
          "explanation": "Multiplying both sides by $\\sin A$ isolates the unknown side $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "a=\\frac{6\\sin 50^\\circ}{\\sin 35^\\circ}",
          "explanation": "We insert the known side and the two angles in degrees.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "a=\\frac{6\\times 0.7660}{0.5736}=8.013\\ldots",
          "explanation": "Computing the sines and dividing gives the unrounded length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 s.f.",
          "workingLatex": "a\\approx 8.01",
          "explanation": "We round to the 3 significant figures the question requests.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it is sensible",
          "workingLatex": "A>C\\Rightarrow a>c:\\;8.01>6\\;\\checkmark",
          "explanation": "Angle $A$ is larger than angle $C$, so side $a$ should be longer than side $c$, which it is.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 8.01$ (to 3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q003",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-side"
    ],
    "questionText": "In triangle $ABC$, $A=50^\\circ$, $C=60^\\circ$ and side $b=9$. Find the length of side $a$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "A=50^\\circ,\\quad C=60^\\circ,\\quad b=9",
          "explanation": "The known side $b$ is opposite $B$, but $B$ is not given, so we must find angle $B$ before we can use the sine rule for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the third angle",
          "workingLatex": "B=180^\\circ-50^\\circ-60^\\circ=70^\\circ",
          "explanation": "The angles of any triangle add to $180^\\circ$, so subtracting the two known angles gives $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the sine rule",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}",
          "explanation": "Each side over the sine of its opposite angle is equal, so we can pair the known ratio with the unknown one.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the relevant pair",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}",
          "explanation": "We now know $A$, $B$ and $b$, so this pair connects them to the unknown $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for $a$",
          "workingLatex": "a=\\frac{b\\sin A}{\\sin B}",
          "explanation": "Multiplying both sides by $\\sin A$ leaves $a$ by itself.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute values",
          "workingLatex": "a=\\frac{9\\sin 50^\\circ}{\\sin 70^\\circ}",
          "explanation": "We put in the known side and the two relevant angles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate",
          "workingLatex": "a=\\frac{9\\times 0.7660}{0.9397}=7.336\\ldots",
          "explanation": "Evaluating the sines and dividing gives the unrounded value.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 3 s.f.",
          "workingLatex": "a\\approx 7.34",
          "explanation": "We round to the 3 significant figures asked for.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check it is sensible",
          "workingLatex": "A\\text{ smallest}\\Rightarrow a\\text{ shortest}:\\;7.34<9\\;\\checkmark",
          "explanation": "Angle $A=50^\\circ$ is the smallest angle, so side $a$ should be the shortest side, which agrees with $a<b$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 7.34$ (to 3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q004",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-angle"
    ],
    "questionText": "In triangle $ABC$, $a=7$, $b=5$ and $A=60^\\circ$. Find the size of the acute angle $B$, giving your answer to 1 decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "a=7,\\quad b=5,\\quad A=60^\\circ",
          "explanation": "We know two sides and the angle opposite one of them, and we want the angle opposite the other side, which is what the sine rule provides.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sine rule for angles",
          "workingLatex": "\\frac{\\sin A}{a}=\\frac{\\sin B}{b}=\\frac{\\sin C}{c}",
          "explanation": "When finding an angle it is tidier to write the sine rule with the sines on top, so the unknown angle ends up in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the relevant pair",
          "workingLatex": "\\frac{\\sin A}{a}=\\frac{\\sin B}{b}",
          "explanation": "These two ratios contain our known values and the unknown angle $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $\\sin B$",
          "workingLatex": "\\sin B=\\frac{b\\sin A}{a}",
          "explanation": "Multiplying both sides by $b$ isolates $\\sin B$ so we can compute it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "\\sin B=\\frac{5\\sin 60^\\circ}{7}",
          "explanation": "We insert the two known sides and the known angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the ratio",
          "workingLatex": "\\sin B=\\frac{5\\times 0.8660}{7}=0.6186",
          "explanation": "This gives the value of $\\sin B$, which we now reverse to find the angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the inverse sine",
          "workingLatex": "B=\\sin^{-1}(0.6186)=38.21\\ldots^\\circ",
          "explanation": "Applying $\\sin^{-1}$ gives the acute angle whose sine is $0.6186$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to 1 d.p.",
          "workingLatex": "B\\approx 38.2^\\circ",
          "explanation": "We round to one decimal place as required; the acute value is appropriate here.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check it is sensible",
          "workingLatex": "b<a\\Rightarrow B<A:\\;38.2^\\circ<60^\\circ\\;\\checkmark",
          "explanation": "Side $b$ is shorter than side $a$, so angle $B$ should be smaller than angle $A$, which it is.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B \\approx 38.2^\\circ$ (to 1 d.p.)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q005",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-angle"
    ],
    "questionText": "In triangle $ABC$, $a=9$, $c=6$ and $C=35^\\circ$. Find the size of the acute angle $A$, giving your answer to 1 decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "a=9,\\quad c=6,\\quad C=35^\\circ",
          "explanation": "We know two sides and the angle opposite one of them, and we want the angle $A$ opposite side $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sine rule for angles",
          "workingLatex": "\\frac{\\sin A}{a}=\\frac{\\sin C}{c}",
          "explanation": "Writing the sines on top keeps the unknown angle in the numerator, making it easy to isolate.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $\\sin A$",
          "workingLatex": "\\sin A=\\frac{a\\sin C}{c}",
          "explanation": "Multiplying both sides by $a$ leaves $\\sin A$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute values",
          "workingLatex": "\\sin A=\\frac{9\\sin 35^\\circ}{6}",
          "explanation": "We insert the two known sides and the known angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the ratio",
          "workingLatex": "\\sin A=\\frac{9\\times 0.5736}{6}=0.8604",
          "explanation": "This is the value of $\\sin A$, ready to be reversed into an angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the inverse sine",
          "workingLatex": "A=\\sin^{-1}(0.8604)=59.35\\ldots^\\circ",
          "explanation": "Applying $\\sin^{-1}$ gives the acute angle whose sine is $0.8604$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 1 d.p.",
          "workingLatex": "A\\approx 59.4^\\circ",
          "explanation": "We round to one decimal place, keeping the acute answer as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it is sensible",
          "workingLatex": "a>c\\Rightarrow A>C:\\;59.4^\\circ>35^\\circ\\;\\checkmark",
          "explanation": "Side $a$ is longer than side $c$, so angle $A$ should be larger than angle $C$, which it is.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A \\approx 59.4^\\circ$ (to 1 d.p.)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q006",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-angle"
    ],
    "questionText": "In triangle $ABC$, $a=8$, $b=6$ and $A=55^\\circ$. Find the acute angle $B$ and hence the angle $C$, giving each to 1 decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "a=8,\\quad b=6,\\quad A=55^\\circ",
          "explanation": "We know two sides and the angle opposite one of them, so the sine rule gives angle $B$, and the angle sum then gives $C$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sine rule for angles",
          "workingLatex": "\\frac{\\sin A}{a}=\\frac{\\sin B}{b}",
          "explanation": "The sines-on-top form places the unknown angle $B$ in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $\\sin B$",
          "workingLatex": "\\sin B=\\frac{b\\sin A}{a}",
          "explanation": "Multiplying both sides by $b$ isolates $\\sin B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute values",
          "workingLatex": "\\sin B=\\frac{6\\sin 55^\\circ}{8}",
          "explanation": "We insert the two known sides and the known angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the ratio",
          "workingLatex": "\\sin B=\\frac{6\\times 0.8192}{8}=0.6144",
          "explanation": "This gives the value of $\\sin B$ to reverse into an angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the inverse sine",
          "workingLatex": "B=\\sin^{-1}(0.6144)=37.9^\\circ",
          "explanation": "Applying $\\sin^{-1}$ gives the acute angle $B$, rounded to one decimal place.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find angle $C$",
          "workingLatex": "C=180^\\circ-55^\\circ-37.9^\\circ=87.1^\\circ",
          "explanation": "The three angles sum to $180^\\circ$, so subtracting $A$ and $B$ gives $C$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it is sensible",
          "workingLatex": "C\\text{ largest}\\Rightarrow c\\text{ longest};\\;b<a\\Rightarrow B<A\\;\\checkmark",
          "explanation": "Angle $C$ is the biggest, so side $c$ should be longest, and since $b<a$ we correctly get $B<A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B \\approx 37.9^\\circ$ and $C \\approx 87.1^\\circ$ (to 1 d.p.)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q007",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-side"
    ],
    "questionText": "In triangle $ABC$, angle $B=48^\\circ$ and angle $C=60^\\circ$. The side $b$ opposite $B$ has length $7$ cm. Find the length of side $c$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "B=48^\\circ,\\quad C=60^\\circ,\\quad b=7\\text{ cm}",
          "explanation": "We know two angles and the side opposite $B$, and we want the side $c$ opposite $C$, which the sine rule links directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sine rule",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}",
          "explanation": "Each side over the sine of its opposite angle is equal, so we can pair the known side-angle with the unknown one.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the relevant pair",
          "workingLatex": "\\frac{b}{\\sin B}=\\frac{c}{\\sin C}",
          "explanation": "These are the two ratios containing our known values and the unknown side $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $c$",
          "workingLatex": "c=\\frac{b\\sin C}{\\sin B}",
          "explanation": "Multiplying both sides by $\\sin C$ isolates the unknown side $c$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "c=\\frac{7\\sin 60^\\circ}{\\sin 48^\\circ}",
          "explanation": "We insert the known side and the two angles in degrees.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "c=\\frac{7\\times 0.8660}{0.7431}=8.157\\ldots",
          "explanation": "Computing the sines and dividing gives the unrounded length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 s.f.",
          "workingLatex": "c\\approx 8.16\\text{ cm}",
          "explanation": "We round to the 3 significant figures the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it is sensible",
          "workingLatex": "C>B\\Rightarrow c>b:\\;8.16>7\\;\\checkmark",
          "explanation": "Angle $C$ is larger than angle $B$, so side $c$ should be longer than side $b$, which it is.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c \\approx 8.16$ cm (to 3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q008",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-angle"
    ],
    "questionText": "In triangle $ABC$, side $a=12$ cm, side $b=9$ cm and angle $A=65^\\circ$. Find the size of the acute angle $B$, giving your answer to 1 decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "a=12\\text{ cm},\\quad b=9\\text{ cm},\\quad A=65^\\circ",
          "explanation": "We know two sides and the angle opposite one of them, and we want the angle $B$ opposite side $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sine rule for angles",
          "workingLatex": "\\frac{\\sin A}{a}=\\frac{\\sin B}{b}",
          "explanation": "With the sines on top, the unknown angle $B$ sits in the numerator, which is convenient.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $\\sin B$",
          "workingLatex": "\\sin B=\\frac{b\\sin A}{a}",
          "explanation": "Multiplying both sides by $b$ isolates $\\sin B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute values",
          "workingLatex": "\\sin B=\\frac{9\\sin 65^\\circ}{12}",
          "explanation": "We insert the two known sides and the known angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the ratio",
          "workingLatex": "\\sin B=\\frac{9\\times 0.9063}{12}=0.6797",
          "explanation": "This gives the value of $\\sin B$ ready to reverse into an angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the inverse sine",
          "workingLatex": "B=\\sin^{-1}(0.6797)=42.82\\ldots^\\circ",
          "explanation": "Applying $\\sin^{-1}$ gives the acute angle whose sine is $0.6797$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 1 d.p.",
          "workingLatex": "B\\approx 42.8^\\circ",
          "explanation": "We round to one decimal place, keeping the acute value as required.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it is sensible",
          "workingLatex": "b<a\\Rightarrow B<A:\\;42.8^\\circ<65^\\circ\\;\\checkmark",
          "explanation": "Side $b$ is shorter than side $a$, so angle $B$ should be smaller than angle $A$, which it is.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B \\approx 42.8^\\circ$ (to 1 d.p.)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q009",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-side"
    ],
    "questionText": "In triangle $ABC$, $A=38^\\circ$, $B=71^\\circ$ and side $a=5.5$. Find the length of side $b$, leaving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "A=38^\\circ,\\quad B=71^\\circ,\\quad a=5.5",
          "explanation": "We know two angles and the side opposite $A$, and we want $b$, the side opposite $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sine rule",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}",
          "explanation": "Each side over the sine of its opposite angle is equal, letting us relate the known pair to the unknown side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the relevant pair",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}",
          "explanation": "These two ratios contain the known side and angles together with the unknown $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $b$",
          "workingLatex": "b=\\frac{a\\sin B}{\\sin A}",
          "explanation": "Multiplying both sides by $\\sin B$ leaves $b$ on its own.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "b=\\frac{5.5\\sin 71^\\circ}{\\sin 38^\\circ}",
          "explanation": "We insert the known side and the two angles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "b=\\frac{5.5\\times 0.9455}{0.6157}=8.447\\ldots",
          "explanation": "Computing the sines and dividing gives the unrounded value.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 s.f.",
          "workingLatex": "b\\approx 8.45",
          "explanation": "We round to the 3 significant figures requested.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it is sensible",
          "workingLatex": "B>A\\Rightarrow b>a:\\;8.45>5.5\\;\\checkmark",
          "explanation": "Angle $B$ is larger than angle $A$, so side $b$ should be longer than side $a$, which it is.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b \\approx 8.45$ (to 3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q010",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-side"
    ],
    "questionText": "In triangle $ABC$, $A=48^\\circ$ and $B=57^\\circ$. The included side $c$ between these two angles has length $10$. Find the length of side $a$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "A=48^\\circ,\\quad B=57^\\circ,\\quad c=10",
          "explanation": "The given side $c$ lies opposite $C$, which is not yet known, so we must find angle $C$ before using the sine rule for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the third angle",
          "workingLatex": "C=180^\\circ-48^\\circ-57^\\circ=75^\\circ",
          "explanation": "The angles of a triangle sum to $180^\\circ$, so subtracting $A$ and $B$ gives the angle opposite the known side.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State the sine rule",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{c}{\\sin C}",
          "explanation": "Each side over the sine of its opposite angle is equal, so this pair connects the known side to the unknown $a$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for $a$",
          "workingLatex": "a=\\frac{c\\sin A}{\\sin C}",
          "explanation": "Multiplying both sides by $\\sin A$ isolates the unknown side $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute values",
          "workingLatex": "a=\\frac{10\\sin 48^\\circ}{\\sin 75^\\circ}",
          "explanation": "We insert the known side and the two relevant angles.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate",
          "workingLatex": "a=\\frac{10\\times 0.7431}{0.9659}=7.694\\ldots",
          "explanation": "Computing the sines and dividing gives the unrounded length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round to 3 s.f.",
          "workingLatex": "a\\approx 7.69",
          "explanation": "We round to the 3 significant figures requested.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it is sensible",
          "workingLatex": "C\\text{ largest}\\Rightarrow c\\text{ longest}:\\;7.69<10\\;\\checkmark",
          "explanation": "Angle $C=75^\\circ$ is the largest, so side $c$ should be the longest; side $a$ opposite the smallest angle is shorter, as found.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 7.69$ (to 3 s.f.)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q011",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "find-side"
    ],
    "questionText": "In triangle $ABC$, $A=35^\\circ$, $B=85^\\circ$ and side $a=6$. Find the length of side $b$ to 3 significant figures, and state which side of the triangle is the longest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "A=35^\\circ,\\quad B=85^\\circ,\\quad a=6",
          "explanation": "We know two angles and the side opposite $A$, and we want $b$, the side opposite $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the sine rule",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}",
          "explanation": "Each side over the sine of its opposite angle is equal, so this pair links the known values to the unknown $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for $b$",
          "workingLatex": "b=\\frac{a\\sin B}{\\sin A}",
          "explanation": "Multiplying both sides by $\\sin B$ isolates the unknown side $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute values",
          "workingLatex": "b=\\frac{6\\sin 85^\\circ}{\\sin 35^\\circ}",
          "explanation": "We insert the known side and the two angles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate",
          "workingLatex": "b=\\frac{6\\times 0.9962}{0.5736}=10.42\\ldots",
          "explanation": "Computing the sines and dividing gives the unrounded value.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round to 3 s.f.",
          "workingLatex": "b\\approx 10.4",
          "explanation": "We round to the 3 significant figures requested.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the longest side",
          "workingLatex": "B=85^\\circ\\text{ is the largest angle}\\Rightarrow b\\text{ is longest}",
          "explanation": "The longest side always faces the largest angle, and $B=85^\\circ$ is the biggest angle, so $b$ is the longest side.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check it is sensible",
          "workingLatex": "b>a:\\;10.4>6\\;\\checkmark",
          "explanation": "Side $b$ comes out longer than side $a$, which fits because angle $B$ is larger than angle $A$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b \\approx 10.4$ (to 3 s.f.); the longest side is $b$, opposite the largest angle $B=85^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q012",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "find-side"
    ],
    "questionText": "In triangle $ABC$, $b = 7\\,\\text{cm}$, $c = 9\\,\\text{cm}$ and the included angle $A = 40^\\circ$. Find the length of side $a$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the known values",
          "workingLatex": "b=7,\\quad c=9,\\quad A=40^\\circ",
          "explanation": "We are given two sides and the angle sitting between them, and we want the side opposite that angle. That is exactly the pattern the cosine rule handles.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the cosine rule",
          "workingLatex": "a^2=b^2+c^2-2bc\\cos A",
          "explanation": "The cosine rule links the three sides to one angle. Because we want side $a$, we use the version with $a^2$ on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "a^2=7^2+9^2-2\\times 7\\times 9\\times\\cos 40^\\circ",
          "explanation": "Replace each letter with its number. Keeping the angle as $40^\\circ$ for now means we only evaluate the cosine once.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the squares and the product",
          "workingLatex": "a^2=49+81-126\\cos 40^\\circ",
          "explanation": "Square the sides and multiply the coefficient $2\\times 7\\times 9=126$. This tidies the expression before using the calculator.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cosine term",
          "workingLatex": "a^2=130-126\\times 0.76604=130-96.522=33.478",
          "explanation": "Using $\\cos 40^\\circ\\approx 0.76604$, the subtraction leaves the value of $a^2$. Keep extra decimals here so the final rounding stays accurate.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "a=\\sqrt{33.478}=5.786\\ldots",
          "explanation": "Side lengths are positive, so we take the positive square root of $a^2$ to recover $a$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and sanity-check",
          "workingLatex": "a\\approx 5.79",
          "explanation": "Rounding to $3$ significant figures gives $5.79\\,\\text{cm}$. This is shorter than both given sides, which is sensible because the $40^\\circ$ angle is fairly small.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 5.79\\,\\text{cm}$ (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q013",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "find-side"
    ],
    "questionText": "A triangle has sides $b = 8\\,\\text{m}$ and $c = 11\\,\\text{m}$ with the included angle $A = 52^\\circ$. Work out the length of the third side $a$, correct to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the known values",
          "workingLatex": "b=8,\\quad c=11,\\quad A=52^\\circ",
          "explanation": "Two sides and the angle between them are known, and the missing side is opposite that angle, so the cosine rule applies directly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the cosine rule",
          "workingLatex": "a^2=b^2+c^2-2bc\\cos A",
          "explanation": "This is the standard form used when we know two sides and the included angle and want the side facing that angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "a^2=8^2+11^2-2\\times 8\\times 11\\times\\cos 52^\\circ",
          "explanation": "Put the numbers in place of the letters, leaving the cosine unevaluated for a single clean calculator step.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the squares and the product",
          "workingLatex": "a^2=64+121-176\\cos 52^\\circ=185-176\\cos 52^\\circ",
          "explanation": "Squaring gives $64$ and $121$, and $2\\times 8\\times 11=176$. Adding the first two constants simplifies the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cosine term",
          "workingLatex": "a^2=185-176\\times 0.61566=185-108.356=76.644",
          "explanation": "With $\\cos 52^\\circ\\approx 0.61566$, the subtraction gives $a^2$. Carrying spare decimals protects the final answer from rounding error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "a=\\sqrt{76.644}=8.7546\\ldots",
          "explanation": "Take the positive square root because a length cannot be negative.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and sanity-check",
          "workingLatex": "a\\approx 8.75",
          "explanation": "To $3$ significant figures $a\\approx 8.75\\,\\text{m}$. This sits between the two given sides, which is reasonable for a moderate included angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 8.75\\,\\text{m}$ (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q014",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "obtuse-angle"
    ],
    "questionText": "In triangle $ABC$, $b = 5\\,\\text{cm}$, $c = 8\\,\\text{cm}$ and the included angle $A = 120^\\circ$. Find the length of side $a$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the known values",
          "workingLatex": "b=5,\\quad c=8,\\quad A=120^\\circ",
          "explanation": "Again we have two sides and the included angle, so the cosine rule finds the opposite side. Here the angle is obtuse, so we expect a longish side $a$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the cosine rule",
          "workingLatex": "a^2=b^2+c^2-2bc\\cos A",
          "explanation": "The cosine rule works for any angle, obtuse ones included, because the cosine simply becomes negative past $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "a^2=5^2+8^2-2\\times 5\\times 8\\times\\cos 120^\\circ",
          "explanation": "Replace each letter with its value, keeping $\\cos 120^\\circ$ ready to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the exact value of the cosine",
          "workingLatex": "\\cos 120^\\circ=-\\tfrac12",
          "explanation": "Because $120^\\circ$ is obtuse, its cosine is negative. Subtracting a negative amount will add on to the total, making the opposite side larger.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Work out the terms",
          "workingLatex": "a^2=25+64-80\\times\\left(-\\tfrac12\\right)=89+40",
          "explanation": "The product $2\\times 5\\times 8=80$, and multiplying by $-\\tfrac12$ then subtracting flips it to $+40$. This is why an obtuse angle stretches the opposite side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine and take the square root",
          "workingLatex": "a^2=129\\;\\Rightarrow\\;a=\\sqrt{129}=11.358\\ldots",
          "explanation": "Add the terms to get $a^2=129$, then take the positive square root for the length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and sanity-check",
          "workingLatex": "a\\approx 11.4",
          "explanation": "To $3$ significant figures $a\\approx 11.4\\,\\text{cm}$. It is longer than either given side, which fits the wide $120^\\circ$ opening between them.",
          "diagram": null
        }
      ],
      "finalAnswer": "$a \\approx 11.4\\,\\text{cm}$ (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q015",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "find-angle"
    ],
    "questionText": "A triangle has sides $a = 6\\,\\text{cm}$, $b = 8\\,\\text{cm}$ and $c = 9\\,\\text{cm}$. Find the size of angle $A$ (the angle opposite side $a$), giving your answer to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the known values",
          "workingLatex": "a=6,\\quad b=8,\\quad c=9",
          "explanation": "All three sides are known and we want an angle, so we use the rearranged cosine rule. Angle $A$ faces side $a=6$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the angle form of the cosine rule",
          "workingLatex": "\\cos A=\\frac{b^2+c^2-a^2}{2bc}",
          "explanation": "Rearranging the cosine rule to make $\\cos A$ the subject lets us find an angle when the three sides are known.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "\\cos A=\\frac{8^2+9^2-6^2}{2\\times 8\\times 9}",
          "explanation": "The two sides that meet at $A$ are $b$ and $c$; the side opposite, $a$, is the one subtracted in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the numerator and denominator",
          "workingLatex": "\\cos A=\\frac{64+81-36}{144}=\\frac{109}{144}",
          "explanation": "Work out the squares on top and the product $2\\times 8\\times 9=144$ on the bottom.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cosine",
          "workingLatex": "\\cos A=0.75694\\ldots",
          "explanation": "Dividing gives a positive cosine, which tells us straight away that $A$ is an acute angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the inverse cosine",
          "workingLatex": "A=\\cos^{-1}(0.75694)=40.796\\ldots^\\circ",
          "explanation": "Applying $\\cos^{-1}$ undoes the cosine and returns the actual angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and sanity-check",
          "workingLatex": "A\\approx 40.8^\\circ",
          "explanation": "To $1$ decimal place $A\\approx 40.8^\\circ$. It is the smallest angle, opposite the shortest side, which is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A \\approx 40.8^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q016",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "obtuse-angle"
    ],
    "questionText": "A triangle has sides $a = 9\\,\\text{cm}$, $b = 5\\,\\text{cm}$ and $c = 6\\,\\text{cm}$. Find the size of angle $A$ (opposite side $a$), giving your answer to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the known values",
          "workingLatex": "a=9,\\quad b=5,\\quad c=6",
          "explanation": "Three sides are known and we want the angle opposite the longest side, $a=9$. The angle form of the cosine rule is what we need.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the angle form of the cosine rule",
          "workingLatex": "\\cos A=\\frac{b^2+c^2-a^2}{2bc}",
          "explanation": "This rearrangement isolates $\\cos A$, so once we substitute the sides we can read off the angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "\\cos A=\\frac{5^2+6^2-9^2}{2\\times 5\\times 6}",
          "explanation": "Sides $b$ and $c$ meet at $A$, and side $a$ opposite it is the one subtracted in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the numerator and denominator",
          "workingLatex": "\\cos A=\\frac{25+36-81}{60}=\\frac{-20}{60}",
          "explanation": "Here $a^2=81$ is larger than $b^2+c^2=61$, so the numerator comes out negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute the cosine",
          "workingLatex": "\\cos A=-0.33333\\ldots",
          "explanation": "A negative cosine is the tell-tale sign of an obtuse angle, so we already expect $A$ to be more than $90^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the inverse cosine",
          "workingLatex": "A=\\cos^{-1}(-0.33333)=109.471\\ldots^\\circ",
          "explanation": "The inverse cosine of a negative value returns an angle between $90^\\circ$ and $180^\\circ$, confirming the obtuse result.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and sanity-check",
          "workingLatex": "A\\approx 109.5^\\circ",
          "explanation": "To $1$ decimal place $A\\approx 109.5^\\circ$. It is obtuse and lies opposite the longest side, exactly as expected.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A \\approx 109.5^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q017",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "largest-angle"
    ],
    "questionText": "A triangle has sides of length $5\\,\\text{cm}$, $7\\,\\text{cm}$ and $8\\,\\text{cm}$. Find the size of the largest angle in the triangle, giving your answer to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Decide which angle is largest",
          "workingLatex": "\\text{largest angle is opposite the } 8\\,\\text{cm side}",
          "explanation": "In any triangle the biggest angle sits opposite the longest side, so we aim for the angle facing the $8\\,\\text{cm}$ side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the sides",
          "workingLatex": "a=8,\\quad b=5,\\quad c=7",
          "explanation": "Call the target angle $A$ and put the longest side as $a$ opposite it; the other two sides are $b$ and $c$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the angle form of the cosine rule",
          "workingLatex": "\\cos A=\\frac{b^2+c^2-a^2}{2bc}",
          "explanation": "With all three sides known, this rearranged cosine rule delivers the angle we want.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "\\cos A=\\frac{5^2+7^2-8^2}{2\\times 5\\times 7}",
          "explanation": "The two shorter sides go on top as $b$ and $c$, and the longest side is subtracted as $a$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the fraction",
          "workingLatex": "\\cos A=\\frac{25+49-64}{70}=\\frac{10}{70}=0.142857\\ldots",
          "explanation": "The numerator is small and positive, so the largest angle here is still acute but close to a right angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the inverse cosine",
          "workingLatex": "A=\\cos^{-1}(0.142857)=81.787\\ldots^\\circ",
          "explanation": "Applying $\\cos^{-1}$ converts the cosine back into the angle itself.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and sanity-check",
          "workingLatex": "A\\approx 81.8^\\circ",
          "explanation": "To $1$ decimal place the largest angle is $81.8^\\circ$. Being under $90^\\circ$ tells us the triangle is acute, which is consistent with these side lengths.",
          "diagram": null
        }
      ],
      "finalAnswer": "The largest angle is $\\approx 81.8^\\circ$ (to $1$ d.p.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q018",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "area-formula",
      "included-angle"
    ],
    "questionText": "In triangle $ABC$, $a = 6\\,\\text{cm}$, $b = 9\\,\\text{cm}$ and the included angle $C = 35^\\circ$. Find the area of the triangle, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the known values",
          "workingLatex": "a=6,\\quad b=9,\\quad C=35^\\circ",
          "explanation": "We have two sides and the angle between them. That is exactly what the area formula $\\tfrac12 ab\\sin C$ requires.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the area formula",
          "workingLatex": "\\text{Area}=\\tfrac12 ab\\sin C",
          "explanation": "This formula uses two sides and the angle enclosed between them, so we must be sure $C$ sits between sides $a$ and $b$ — and it does.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "\\text{Area}=\\tfrac12\\times 6\\times 9\\times\\sin 35^\\circ",
          "explanation": "Put the two sides and the included angle into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerical part",
          "workingLatex": "\\text{Area}=27\\sin 35^\\circ",
          "explanation": "Multiplying $\\tfrac12\\times 6\\times 9=27$ first keeps the arithmetic tidy before using the sine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the sine term",
          "workingLatex": "\\text{Area}=27\\times 0.57358=15.487\\ldots",
          "explanation": "Using $\\sin 35^\\circ\\approx 0.57358$ gives the area in square centimetres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and sanity-check",
          "workingLatex": "\\text{Area}\\approx 15.5",
          "explanation": "To $3$ significant figures the area is $15.5\\,\\text{cm}^2$. This is well under the $27\\,\\text{cm}^2$ we would get from a right angle, which fits the smaller $35^\\circ$ angle.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $\\approx 15.5\\,\\text{cm}^2$ (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q019",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "area-formula",
      "included-angle"
    ],
    "questionText": "A triangle has sides $a = 10\\,\\text{m}$ and $b = 12\\,\\text{m}$ with an included angle $C = 48^\\circ$ between them. Find the area of the triangle, correct to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the known values",
          "workingLatex": "a=10,\\quad b=12,\\quad C=48^\\circ",
          "explanation": "Two sides and the angle enclosed between them are given, so the $\\tfrac12 ab\\sin C$ area formula applies straight away.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the area formula",
          "workingLatex": "\\text{Area}=\\tfrac12 ab\\sin C",
          "explanation": "The angle in the formula must be the one between the two sides used, and here $C$ lies between $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "\\text{Area}=\\tfrac12\\times 10\\times 12\\times\\sin 48^\\circ",
          "explanation": "Insert the two sides and the included angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerical part",
          "workingLatex": "\\text{Area}=60\\sin 48^\\circ",
          "explanation": "Since $\\tfrac12\\times 10\\times 12=60$, the calculation reduces to a single multiplication by the sine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the sine term",
          "workingLatex": "\\text{Area}=60\\times 0.74314=44.589\\ldots",
          "explanation": "With $\\sin 48^\\circ\\approx 0.74314$, the product gives the area in square metres.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and sanity-check",
          "workingLatex": "\\text{Area}\\approx 44.6",
          "explanation": "To $3$ significant figures the area is $44.6\\,\\text{m}^2$. It is less than the maximum $60\\,\\text{m}^2$ of a right angle, which is consistent with $48^\\circ$.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $\\approx 44.6\\,\\text{m}^2$ (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q020",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "area-formula",
      "obtuse-angle"
    ],
    "questionText": "In triangle $ABC$, $a = 8\\,\\text{cm}$, $b = 11\\,\\text{cm}$ and the included angle $C = 115^\\circ$. Find the area of the triangle, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the known values",
          "workingLatex": "a=8,\\quad b=11,\\quad C=115^\\circ",
          "explanation": "We have two sides and the angle between them, so the area formula applies even though the included angle is obtuse.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the area formula",
          "workingLatex": "\\text{Area}=\\tfrac12 ab\\sin C",
          "explanation": "The sine of an obtuse angle is still positive, so the formula gives a genuine positive area without any special adjustment.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "\\text{Area}=\\tfrac12\\times 8\\times 11\\times\\sin 115^\\circ",
          "explanation": "Place the two sides and the included obtuse angle into the formula.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerical part",
          "workingLatex": "\\text{Area}=44\\sin 115^\\circ",
          "explanation": "Working out $\\tfrac12\\times 8\\times 11=44$ leaves a single sine to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the sine term",
          "workingLatex": "\\text{Area}=44\\times 0.90631=39.878\\ldots",
          "explanation": "Since $\\sin 115^\\circ\\approx 0.90631$ (the same as $\\sin 65^\\circ$), the product gives the area.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Round and sanity-check",
          "workingLatex": "\\text{Area}\\approx 39.9",
          "explanation": "To $3$ significant figures the area is $39.9\\,\\text{cm}^2$. The result is positive and sensible, confirming that an obtuse included angle causes no trouble.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $\\approx 39.9\\,\\text{cm}^2$ (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "area-formula",
      "rounding"
    ],
    "questionText": "A triangular garden bed has two sides of length $7\\,\\text{m}$ and $13\\,\\text{m}$ meeting at an angle of $62^\\circ$. Find the area of the garden bed, and state your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the known values",
          "workingLatex": "a=7,\\quad b=13,\\quad C=62^\\circ",
          "explanation": "The two given sides meet at the $62^\\circ$ angle, so that angle is the included angle needed for the area formula.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the area formula",
          "workingLatex": "\\text{Area}=\\tfrac12 ab\\sin C",
          "explanation": "Two sides and the angle between them lead directly to this formula for the area.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "\\text{Area}=\\tfrac12\\times 7\\times 13\\times\\sin 62^\\circ",
          "explanation": "Insert the two side lengths and the included angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the numerical part",
          "workingLatex": "\\text{Area}=45.5\\sin 62^\\circ",
          "explanation": "Since $\\tfrac12\\times 7\\times 13=45.5$, only the sine remains to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the sine term",
          "workingLatex": "\\text{Area}=45.5\\times 0.88295=40.174\\ldots",
          "explanation": "Using $\\sin 62^\\circ\\approx 0.88295$ gives the area in square metres, keeping extra decimals for accurate rounding.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the answer to 3 significant figures",
          "workingLatex": "\\text{Area}\\approx 40.2",
          "explanation": "The unrounded value $40.174\\ldots$ rounds to $40.2$, since the fourth significant figure $7$ rounds the $1$ up to $2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Comment on the result",
          "workingLatex": "\\text{Area}\\approx 40.2\\,\\text{m}^2",
          "explanation": "Stated to $3$ significant figures, the garden bed covers about $40.2\\,\\text{m}^2$. Quoting the rounding keeps the answer honest about its precision.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $\\approx 40.2\\,\\text{m}^2$ (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "worded-problem"
    ],
    "questionText": "Two straight paths leave a point $P$. One path runs $15\\,\\text{m}$ to a tree at $A$, and the other runs $20\\,\\text{m}$ to a bench at $B$. The angle between the paths at $P$ is $75^\\circ$. Find the direct distance $AB$ between the tree and the bench, correct to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the triangle",
          "workingLatex": "PA=15,\\quad PB=20,\\quad \\angle P=75^\\circ",
          "explanation": "Points $P$, $A$ and $B$ form a triangle. We know the two paths from $P$ and the angle between them, and we want the side $AB$ opposite $P$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the cosine rule",
          "workingLatex": "AB^2=PA^2+PB^2-2\\cdot PA\\cdot PB\\cos P",
          "explanation": "Two sides and the included angle with an unknown opposite side is the classic cosine-rule setup.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "AB^2=15^2+20^2-2\\times 15\\times 20\\times\\cos 75^\\circ",
          "explanation": "Replace each length and the angle with its value, ready to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Work out the squares and product",
          "workingLatex": "AB^2=225+400-600\\cos 75^\\circ=625-600\\cos 75^\\circ",
          "explanation": "Squaring gives $225$ and $400$, and $2\\times 15\\times 20=600$. Adding the constants simplifies the expression.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cosine term",
          "workingLatex": "AB^2=625-600\\times 0.25882=625-155.291=469.709",
          "explanation": "With $\\cos 75^\\circ\\approx 0.25882$, the subtraction gives $AB^2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "AB=\\sqrt{469.709}=21.673\\ldots",
          "explanation": "A distance is positive, so we take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Round and sanity-check",
          "workingLatex": "AB\\approx 21.7",
          "explanation": "To $3$ significant figures the tree and bench are about $21.7\\,\\text{m}$ apart. This is longer than the $20\\,\\text{m}$ path, which makes sense for a wide $75^\\circ$ opening.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AB \\approx 21.7\\,\\text{m}$ (to $3$ s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "sine-rule"
    ],
    "questionText": "In triangle $ABC$, $b = 8$, $c = 11$ and the included angle $A = 47^\\circ$. Find the length of side $a$, and then find angle $B$. Give the length to 3 significant figures and the angle to 1 decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "b = 8,\\quad c = 11,\\quad A = 47^\\circ",
          "explanation": "We are given two sides ($b$ and $c$) and the angle between them ($A$). The side we want, $a$, sits opposite that included angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the correct rule",
          "workingLatex": "a^2 = b^2 + c^2 - 2bc\\cos A",
          "explanation": "With two sides and the included angle we have no angle-side opposite pair yet, so the sine rule cannot start us off. The cosine rule is the right tool for two sides plus the included angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "a^2 = 8^2 + 11^2 - 2(8)(11)\\cos 47^\\circ",
          "explanation": "We place each known value into the formula, keeping $a$ as the unknown opposite the $47^\\circ$ angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate each part",
          "workingLatex": "a^2 = 64 + 121 - 176\\cos 47^\\circ = 185 - 176(0.68200)",
          "explanation": "We work out the squares and the product $2bc = 176$, then evaluate the cosine so the expression becomes a single subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute a squared",
          "workingLatex": "a^2 = 185 - 120.03 = 64.97",
          "explanation": "Multiplying and subtracting collapses the right-hand side to a single number, which is the square of the side we want.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "a = \\sqrt{64.97} = 8.0603\\ldots",
          "explanation": "Since a length is positive we take the positive square root. We keep the unrounded value to use in the next stage so no rounding error creeps in.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up to find angle B",
          "workingLatex": "\\frac{\\sin B}{b} = \\frac{\\sin A}{a}",
          "explanation": "Now that we know $a$ and its opposite angle $A$, we have a complete angle-side pair, so the sine rule becomes available for finding angle $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for sin B",
          "workingLatex": "\\sin B = \\frac{b\\sin A}{a} = \\frac{8\\sin 47^\\circ}{8.0603}",
          "explanation": "We isolate $\\sin B$ by multiplying both sides by $b$, then substitute the known side and angle values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute sin B",
          "workingLatex": "\\sin B = \\frac{5.8508}{8.0603} = 0.72578",
          "explanation": "Evaluating the top and dividing gives the sine of the angle we want.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Invert to find B",
          "workingLatex": "B = \\sin^{-1}(0.72578) = 46.5^\\circ",
          "explanation": "Because $b = 8$ is slightly smaller than $a = 8.06$, angle $B$ must be smaller than $A$, so the acute value from the calculator is the correct one.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify with the angle sum",
          "workingLatex": "C = 180^\\circ - 47^\\circ - 46.5^\\circ = 86.5^\\circ",
          "explanation": "The three angles give a valid triangle, and the largest angle $C \\approx 86.5^\\circ$ lies opposite the longest side $c = 11$, which confirms our results are consistent.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State the final answer",
          "workingLatex": "a \\approx 8.06,\\quad B \\approx 46.5^\\circ",
          "explanation": "We report the side to 3 significant figures and the angle to 1 decimal place as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "The third side is $a \\approx 8.06$ (3 s.f.) and angle $B \\approx 46.5^\\circ$ (1 d.p.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "solve-triangle"
    ],
    "questionText": "In triangle $ABC$, angle $A = 52^\\circ$, angle $B = 61^\\circ$ and side $a = 9$. Solve the triangle completely, finding angle $C$ and sides $b$ and $c$. Give angles to 1 decimal place and lengths to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "A = 52^\\circ,\\quad B = 61^\\circ,\\quad a = 9",
          "explanation": "We know two angles and one side. Because $a$ lies opposite the known angle $A$, we have a complete angle-side pair to build on.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the third angle",
          "workingLatex": "C = 180^\\circ - A - B = 180^\\circ - 52^\\circ - 61^\\circ",
          "explanation": "The angles of any triangle add to $180^\\circ$, so subtracting the two known angles gives the third immediately.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "State angle C",
          "workingLatex": "C = 67^\\circ",
          "explanation": "Now every angle is known, which will let us pair each side with its opposite angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the correct rule",
          "workingLatex": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}",
          "explanation": "We have an angle-side pair ($a$ with $A$), so the sine rule links it to the remaining sides through their opposite angles.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the common ratio",
          "workingLatex": "\\frac{a}{\\sin A} = \\frac{9}{\\sin 52^\\circ} = 11.4212",
          "explanation": "Computing this fixed ratio once means each remaining side is just this number multiplied by the sine of its opposite angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for side b",
          "workingLatex": "b = 11.4212\\times\\sin 61^\\circ = 9.99",
          "explanation": "Multiplying the common ratio by $\\sin B$ gives the side opposite angle $B$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for side c",
          "workingLatex": "c = 11.4212\\times\\sin 67^\\circ = 10.5",
          "explanation": "The same ratio multiplied by $\\sin C$ gives the side opposite angle $C$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Gather the results",
          "workingLatex": "C = 67^\\circ,\\quad b = 9.99,\\quad c = 10.5",
          "explanation": "The triangle now has all three angles and all three sides determined.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by ordering",
          "workingLatex": "a=9 < b=9.99 < c=10.5\\ \\Leftrightarrow\\ 52^\\circ < 61^\\circ < 67^\\circ",
          "explanation": "In any triangle the longest side sits opposite the largest angle. The sides increase in exactly the same order as their opposite angles, which confirms the solution is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "C = 67^\\circ,\\quad b \\approx 9.99,\\quad c \\approx 10.5",
          "explanation": "Angles are given to 1 decimal place and lengths to 3 significant figures as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C = 67^\\circ$, $b \\approx 9.99$ (3 s.f.) and $c \\approx 10.5$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "solve-triangle"
    ],
    "questionText": "A triangle has sides $a = 7$, $b = 9$ and $c = 12$. Find all three angles $A$, $B$ and $C$, and check that they sum to $180^\\circ$. Give each angle to 1 decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "a = 7,\\quad b = 9,\\quad c = 12",
          "explanation": "All three sides are given but no angles, so we must find the angles from the side lengths alone.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the correct rule",
          "workingLatex": "\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}",
          "explanation": "With three sides and no angles the sine rule cannot start, so we use the cosine rule rearranged to give the cosine of an angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find angle A",
          "workingLatex": "\\cos A = \\frac{81 + 144 - 49}{2(9)(12)} = \\frac{176}{216} = 0.81481",
          "explanation": "Substituting the sides opposite and adjacent to $A$ gives a positive cosine, so $A$ is acute.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Invert for A",
          "workingLatex": "A = \\cos^{-1}(0.81481) = 35.4^\\circ",
          "explanation": "Taking the inverse cosine turns the ratio into the actual angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find angle B",
          "workingLatex": "\\cos B = \\frac{a^2 + c^2 - b^2}{2ac} = \\frac{49 + 144 - 81}{2(7)(12)} = \\frac{112}{168} = 0.66667",
          "explanation": "We repeat the cosine rule with $b$ as the side opposite the angle we want.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Invert for B",
          "workingLatex": "B = \\cos^{-1}(0.66667) = 48.2^\\circ",
          "explanation": "A positive cosine again gives an acute angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find angle C",
          "workingLatex": "\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{49 + 81 - 144}{2(7)(9)} = \\frac{-14}{126} = -0.11111",
          "explanation": "The longest side $c$ sits opposite $C$, and the negative cosine tells us this angle is obtuse.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Invert for C",
          "workingLatex": "C = \\cos^{-1}(-0.11111) = 96.4^\\circ",
          "explanation": "The inverse cosine of a negative number returns an obtuse angle, as expected for the side opposite the longest edge.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the angle sum",
          "workingLatex": "35.4^\\circ + 48.2^\\circ + 96.4^\\circ = 180.0^\\circ",
          "explanation": "The three angles add to $180^\\circ$, confirming a valid triangle and that no arithmetic slipped.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "A \\approx 35.4^\\circ,\\quad B \\approx 48.2^\\circ,\\quad C \\approx 96.4^\\circ",
          "explanation": "Each angle is reported to 1 decimal place as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$A \\approx 35.4^\\circ$, $B \\approx 48.2^\\circ$ and $C \\approx 96.4^\\circ$ (each to 1 d.p.), which sum to $180^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "area"
    ],
    "questionText": "In triangle $ABC$, angle $A = 63^\\circ$, angle $B = 48^\\circ$ and side $a = 15$. Find side $b$, then find the area of the triangle. Give the length to 3 significant figures and the area to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "A = 63^\\circ,\\quad B = 48^\\circ,\\quad a = 15",
          "explanation": "We know two angles and the side opposite one of them, which is enough to reach every other measurement.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the third angle",
          "workingLatex": "C = 180^\\circ - 63^\\circ - 48^\\circ = 69^\\circ",
          "explanation": "The area formula needs two sides and the angle between them. Angle $C$ sits between sides $a$ and $b$, so we find it first from the angle sum.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the correct rule",
          "workingLatex": "\\frac{b}{\\sin B} = \\frac{a}{\\sin A}",
          "explanation": "We have the angle-side pair $a$ and $A$, so the sine rule lets us find side $b$ from its opposite angle $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for b",
          "workingLatex": "b = \\frac{a\\sin B}{\\sin A} = \\frac{15\\sin 48^\\circ}{\\sin 63^\\circ}",
          "explanation": "Multiplying both sides by $\\sin B$ isolates $b$, and we substitute the known values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute b",
          "workingLatex": "b = \\frac{11.147}{0.89101} = 12.5116\\ldots",
          "explanation": "Evaluating gives side $b$. We keep the full value to feed into the area calculation without rounding error.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the area formula",
          "workingLatex": "\\text{Area} = \\tfrac12 ab\\sin C",
          "explanation": "The area of a triangle equals half the product of two sides times the sine of the angle between them. Sides $a$ and $b$ meet at angle $C$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "\\text{Area} = \\tfrac12 (15)(12.5116)\\sin 69^\\circ",
          "explanation": "We insert the two sides and the included angle we found earlier.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the area",
          "workingLatex": "\\text{Area} = 93.837\\times 0.93358 = 87.6",
          "explanation": "Multiplying through gives the area of the triangle in square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with an alternative pairing",
          "workingLatex": "c = \\frac{15\\sin 69^\\circ}{\\sin 63^\\circ} = 15.717,\\quad \\tfrac12 ac\\sin B = 87.6",
          "explanation": "Finding side $c$ and computing the area a different way with sides $a$, $c$ and included angle $B$ gives the same value, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "b \\approx 12.5,\\quad \\text{Area} \\approx 87.6",
          "explanation": "The length is given to 3 significant figures and the area to 3 significant figures as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "Side $b \\approx 12.5$ (3 s.f.) and the area $\\approx 87.6$ square units (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "area"
    ],
    "questionText": "A triangle has sides $a = 10$, $b = 13$ and $c = 7$. Find the angle $C$ (the angle between sides $a$ and $b$), then find the area of the triangle. Give the angle to 1 decimal place and the area to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "a = 10,\\quad b = 13,\\quad c = 7",
          "explanation": "All three sides are known. Angle $C$ lies opposite side $c$ and is enclosed by sides $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the correct rule",
          "workingLatex": "\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}",
          "explanation": "With three sides and no angles, the cosine rule rearranged for an angle is the right choice; there is no angle-side pair for the sine rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "\\cos C = \\frac{100 + 169 - 49}{2(10)(13)} = \\frac{220}{260}",
          "explanation": "We place the two enclosing sides in the denominator and the side opposite $C$ in the subtracted term.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the cosine",
          "workingLatex": "\\cos C = 0.84615",
          "explanation": "A positive cosine tells us angle $C$ is acute.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invert for C",
          "workingLatex": "C = \\cos^{-1}(0.84615) = 32.2^\\circ",
          "explanation": "The inverse cosine gives the actual angle between sides $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Choose the area formula",
          "workingLatex": "\\text{Area} = \\tfrac12 ab\\sin C",
          "explanation": "Sides $a$ and $b$ meet at angle $C$, so half their product times $\\sin C$ gives the area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find sin C",
          "workingLatex": "\\sin C = \\sqrt{1 - 0.84615^2} = 0.53294",
          "explanation": "Using the exact cosine to get the sine avoids rounding the angle first, keeping the area accurate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the area",
          "workingLatex": "\\text{Area} = \\tfrac12 (10)(13)(0.53294) = 65\\times 0.53294 = 34.6",
          "explanation": "Multiplying the two sides, halving and multiplying by $\\sin C$ gives the area in square units.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with Heron's formula",
          "workingLatex": "s = 15,\\quad \\sqrt{15(5)(2)(8)} = \\sqrt{1200} = 34.6",
          "explanation": "Heron's formula uses only the three sides and gives the same area, which confirms both the angle and the area are correct.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "C \\approx 32.2^\\circ,\\quad \\text{Area} \\approx 34.6",
          "explanation": "The angle is given to 1 decimal place and the area to 3 significant figures as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "Angle $C \\approx 32.2^\\circ$ (1 d.p.) and the area $\\approx 34.6$ square units (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "solve-triangle"
    ],
    "questionText": "In triangle $ABC$, angle $A = 40^\\circ$, side $a = 12$ and side $b = 9$. Find angle $B$, deduce angle $C$, then find side $c$. Give angles to 1 decimal place and the length to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "A = 40^\\circ,\\quad a = 12,\\quad b = 9",
          "explanation": "We have side $a$ with its opposite angle $A$, plus side $b$. That angle-side pair points to the sine rule for finding angle $B$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the correct rule",
          "workingLatex": "\\frac{\\sin B}{b} = \\frac{\\sin A}{a}",
          "explanation": "The sine rule connects each side to the sine of its opposite angle, so we can find $B$ from the known pair.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange for sin B",
          "workingLatex": "\\sin B = \\frac{b\\sin A}{a} = \\frac{9\\sin 40^\\circ}{12}",
          "explanation": "Multiplying both sides by $b$ isolates $\\sin B$, and we substitute the known values.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute sin B",
          "workingLatex": "\\sin B = \\frac{5.7851}{12} = 0.48209",
          "explanation": "Evaluating the numerator and dividing gives the sine of angle $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Invert for B",
          "workingLatex": "B = \\sin^{-1}(0.48209) = 28.8^\\circ",
          "explanation": "Since $b = 9$ is smaller than $a = 12$, angle $B$ must be smaller than $A$, so only the acute value applies here — there is no ambiguous second case.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Deduce angle C",
          "workingLatex": "C = 180^\\circ - 40^\\circ - 28.8^\\circ = 111.2^\\circ",
          "explanation": "The angle sum gives the third angle, which turns out to be obtuse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up for side c",
          "workingLatex": "\\frac{c}{\\sin C} = \\frac{a}{\\sin A}",
          "explanation": "With angle $C$ known we can find its opposite side $c$ using the sine rule again.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange and substitute",
          "workingLatex": "c = \\frac{a\\sin C}{\\sin A} = \\frac{12\\sin 111.2^\\circ}{\\sin 40^\\circ}",
          "explanation": "We isolate $c$ and put in the values, using the unrounded angle where possible.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute c",
          "workingLatex": "c = \\frac{11.188}{0.64279} = 17.4",
          "explanation": "Evaluating gives the length of the side opposite the obtuse angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify by ordering",
          "workingLatex": "b=9 < a=12 < c=17.4\\ \\Leftrightarrow\\ 28.8^\\circ < 40^\\circ < 111.2^\\circ",
          "explanation": "The longest side $c$ is opposite the largest angle $C$, and the ordering of sides matches the ordering of angles, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer",
          "workingLatex": "B \\approx 28.8^\\circ,\\quad C \\approx 111.2^\\circ,\\quad c \\approx 17.4",
          "explanation": "Angles are given to 1 decimal place and the length to 3 significant figures as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B \\approx 28.8^\\circ$, $C \\approx 111.2^\\circ$ (1 d.p.) and $c \\approx 17.4$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "rule-choice"
    ],
    "questionText": "In triangle $PQR$, $p = 6$, $q = 9$ and the included angle $R = 124^\\circ$. Decide which rule is appropriate and justify your choice, then find the length of side $r$. Give the length to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "p = 6,\\quad q = 9,\\quad R = 124^\\circ",
          "explanation": "We are given two sides and the angle $R$ that lies between them, with $r$ the unknown side opposite that angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Justify the rule choice",
          "workingLatex": "\\text{two sides + included angle} \\Rightarrow \\text{cosine rule}",
          "explanation": "The sine rule needs a side paired with its opposite angle, but here we only know the angle between two sides. The cosine rule handles exactly this situation, so it is the correct choice.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Write the cosine rule",
          "workingLatex": "r^2 = p^2 + q^2 - 2pq\\cos R",
          "explanation": "This form finds the side opposite the known angle from the two enclosing sides.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "r^2 = 6^2 + 9^2 - 2(6)(9)\\cos 124^\\circ",
          "explanation": "We insert the two sides and the included angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the cosine term",
          "workingLatex": "r^2 = 36 + 81 - 108(-0.55919)",
          "explanation": "The cosine of an obtuse angle is negative, so subtracting it adds to the total — this is why the side opposite an obtuse angle comes out long.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute r squared",
          "workingLatex": "r^2 = 117 + 60.39 = 177.39",
          "explanation": "Combining the terms gives the square of the unknown side.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "r = \\sqrt{177.39} = 13.3189\\ldots",
          "explanation": "We take the positive root since a length must be positive.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the result is reasonable",
          "workingLatex": "r = 13.3 > q = 9 > p = 6",
          "explanation": "Angle $R$ is the largest (obtuse) angle, so its opposite side $r$ should be the longest — and it is, which confirms the answer is sensible.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "r \\approx 13.3",
          "explanation": "We used the cosine rule because we had two sides and the included angle, and the length rounds to 3 significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "The cosine rule applies (two sides and the included angle), giving $r \\approx 13.3$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "perimeter"
    ],
    "questionText": "In triangle $ABC$, $a = 14$, $b = 10$ and the included angle $C = 68^\\circ$. Find the perimeter of the triangle. Give your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "a = 14,\\quad b = 10,\\quad C = 68^\\circ",
          "explanation": "The perimeter is the sum of all three sides, but one side, $c$, is missing. We know the two sides $a$ and $b$ and the angle between them.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the correct rule",
          "workingLatex": "c^2 = a^2 + b^2 - 2ab\\cos C",
          "explanation": "Two sides with the included angle means the cosine rule gives us the missing side opposite that angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "c^2 = 14^2 + 10^2 - 2(14)(10)\\cos 68^\\circ",
          "explanation": "We insert the two known sides and the included angle $C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate each part",
          "workingLatex": "c^2 = 196 + 100 - 280(0.37461)",
          "explanation": "We compute the squares and the product $2ab = 280$, then evaluate the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute c squared",
          "workingLatex": "c^2 = 296 - 104.89 = 191.11",
          "explanation": "Combining leaves a single value for the square of the missing side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the square root",
          "workingLatex": "c = \\sqrt{191.11} = 13.8243\\ldots",
          "explanation": "The positive root gives the length of side $c$. We keep the unrounded value for the sum.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Add the three sides",
          "workingLatex": "P = a + b + c = 14 + 10 + 13.8243",
          "explanation": "The perimeter is simply the total of all three side lengths.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Compute the perimeter",
          "workingLatex": "P = 37.824\\ldots = 37.8",
          "explanation": "Summing gives the full distance around the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the missing side",
          "workingLatex": "|a-b| = 4 < c = 13.8 < a+b = 24",
          "explanation": "The found side lies between the difference and the sum of the other two, so the triangle inequality holds and the length is realistic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the final answer",
          "workingLatex": "P \\approx 37.8",
          "explanation": "The perimeter is reported to 3 significant figures as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "The missing side is $c \\approx 13.8$, giving a perimeter of $\\approx 37.8$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q031",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "area"
    ],
    "questionText": "A triangular sail $ABC$ has sides $AB = 6.5$ m, $BC = 4.8$ m and $CA = 5.2$ m. Find the angle at vertex $B$, then find the area of the sail. Give the angle to 1 decimal place and the area to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Interpret the scenario",
          "workingLatex": "AB = 6.5,\\quad BC = 4.8,\\quad CA = 5.2",
          "explanation": "The sail is a triangle with all three sides known in metres. Angle $B$ is enclosed by sides $AB$ and $BC$, and lies opposite side $CA$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the correct rule",
          "workingLatex": "\\cos B = \\frac{AB^2 + BC^2 - CA^2}{2\\cdot AB\\cdot BC}",
          "explanation": "With three sides and no angles, the cosine rule rearranged for an angle is the way to find angle $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "\\cos B = \\frac{6.5^2 + 4.8^2 - 5.2^2}{2(6.5)(4.8)} = \\frac{38.25}{62.4}",
          "explanation": "The two sides meeting at $B$ go in the denominator, and the side opposite $B$ is the subtracted square.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute and invert",
          "workingLatex": "\\cos B = 0.61298 \\Rightarrow B = \\cos^{-1}(0.61298) = 52.2^\\circ",
          "explanation": "A positive cosine gives an acute angle at vertex $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the area formula",
          "workingLatex": "\\text{Area} = \\tfrac12\\cdot AB\\cdot BC\\cdot\\sin B",
          "explanation": "Sides $AB$ and $BC$ meet at angle $B$, so half their product times $\\sin B$ gives the area of the sail.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find sin B",
          "workingLatex": "\\sin B = \\sqrt{1 - 0.61298^2} = 0.79010",
          "explanation": "Using the exact cosine to get the sine avoids rounding the angle before the area calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the area",
          "workingLatex": "\\text{Area} = \\tfrac12 (6.5)(4.8)(0.79010) = 15.6\\times 0.79010 = 12.3",
          "explanation": "Multiplying the two sides, halving and multiplying by $\\sin B$ gives the area in square metres.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify with Heron's formula",
          "workingLatex": "s = 8.25,\\quad \\sqrt{8.25(1.75)(3.45)(3.05)} = \\sqrt{151.9} = 12.3",
          "explanation": "Heron's formula uses the three sides directly and gives the same area, confirming both the angle and the area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer",
          "workingLatex": "B \\approx 52.2^\\circ,\\quad \\text{Area} \\approx 12.3\\ \\text{m}^2",
          "explanation": "The angle is given to 1 decimal place and the area to 3 significant figures as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "Angle $B \\approx 52.2^\\circ$ (1 d.p.) and the area of the sail $\\approx 12.3$ m$^2$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q032",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "solve-triangle"
    ],
    "questionText": "In triangle $ABC$, angle $A = 35^\\circ$, side $a = 20$ (opposite $A$) and side $b = 14$. Explain why the triangle is uniquely determined, then find the remaining side $c$. Give angles to 1 decimal place and the length to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "A = 35^\\circ,\\quad a = 20,\\quad b = 14",
          "explanation": "We know an angle, the side opposite it, and one further side. This is a side–side–angle situation, which sometimes has two solutions.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Explain uniqueness",
          "workingLatex": "a = 20 > b = 14",
          "explanation": "The side opposite the known angle is longer than the other given side, so angle $B$ must be smaller than $A$ and therefore acute. There is no obtuse alternative, so the triangle is uniquely determined.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the correct rule",
          "workingLatex": "\\frac{\\sin B}{b} = \\frac{\\sin A}{a}",
          "explanation": "We have the angle-side pair $a$ and $A$, so the sine rule finds angle $B$ from its opposite side.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Rearrange for sin B",
          "workingLatex": "\\sin B = \\frac{b\\sin A}{a} = \\frac{14\\sin 35^\\circ}{20}",
          "explanation": "Multiplying both sides by $b$ isolates $\\sin B$, then we substitute the values.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute B",
          "workingLatex": "\\sin B = 0.40150 \\Rightarrow B = \\sin^{-1}(0.40150) = 23.7^\\circ",
          "explanation": "As argued, only the acute value is valid, since the obtuse alternative $156.3^\\circ$ would make the angle sum exceed $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find angle C",
          "workingLatex": "C = 180^\\circ - 35^\\circ - 23.7^\\circ = 121.3^\\circ",
          "explanation": "The angle sum gives the third angle, which is obtuse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up for side c",
          "workingLatex": "\\frac{c}{\\sin C} = \\frac{a}{\\sin A}",
          "explanation": "Now that angle $C$ is known, the sine rule gives its opposite side $c$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange and substitute",
          "workingLatex": "c = \\frac{a\\sin C}{\\sin A} = \\frac{20\\sin 121.3^\\circ}{\\sin 35^\\circ}",
          "explanation": "We isolate $c$ and insert the values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute c",
          "workingLatex": "c = \\frac{17.083}{0.57358} = 29.8",
          "explanation": "Evaluating gives the length of the side opposite the obtuse angle.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify by ordering",
          "workingLatex": "b=14 < a=20 < c=29.8\\ \\Leftrightarrow\\ 23.7^\\circ < 35^\\circ < 121.3^\\circ",
          "explanation": "The longest side $c$ sits opposite the largest angle $C$, and the ordering of sides matches the ordering of angles, confirming the solution.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the final answer",
          "workingLatex": "B \\approx 23.7^\\circ,\\quad C \\approx 121.3^\\circ,\\quad c \\approx 29.8",
          "explanation": "The triangle is unique because $a > b$; angles are given to 1 decimal place and the length to 3 significant figures.",
          "diagram": null
        }
      ],
      "finalAnswer": "The triangle is unique since $a>b$; then $B \\approx 23.7^\\circ$, $C \\approx 121.3^\\circ$ (1 d.p.) and $c \\approx 29.8$ (3 s.f.)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q033",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "bearings",
      "cosine-rule"
    ],
    "questionText": "A rambler leaves a checkpoint $A$ and walks $8$ km on a bearing of $060^\\circ$ to a point $B$. She then walks $5$ km on a bearing of $140^\\circ$ to a point $C$. Find the direct distance from $C$ straight back to the checkpoint $A$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the three points",
          "workingLatex": "AB = 8\\text{ km}, \\quad BC = 5\\text{ km}",
          "explanation": "Give the positions names so the triangle is easy to describe: the checkpoint $A$, the turning point $B$, and the finish $C$. The distance we want is the side $CA$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the diagram",
          "workingLatex": "\\text{North lines at } A \\text{ and } B",
          "explanation": "Imagine a North arrow at each point. The first leg leaves $A$ heading $060^\\circ$ (north-east); at $B$ a fresh North arrow lets us measure the new bearing $140^\\circ$ (south-east). The two legs meet at $B$, forming triangle $ABC$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Back-bearing at B",
          "workingLatex": "060^\\circ + 180^\\circ = 240^\\circ",
          "explanation": "To measure the turn inside the triangle we need the direction from $B$ back to $A$. Reversing a bearing adds $180^\\circ$, so $A$ lies on a bearing of $240^\\circ$ as seen from $B$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interior angle at B",
          "workingLatex": "\\angle ABC = 240^\\circ - 140^\\circ = 100^\\circ",
          "explanation": "At $B$ the direction to $A$ is $240^\\circ$ and the direction to $C$ is $140^\\circ$. The angle of the triangle at $B$ is simply the gap between these two bearings.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the cosine rule",
          "workingLatex": "CA^2 = AB^2 + BC^2 - 2\\,AB\\cdot BC\\,\\cos(\\angle ABC)",
          "explanation": "We know two sides and the angle trapped between them, which is exactly the situation the cosine rule is built for.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values",
          "workingLatex": "CA^2 = 8^2 + 5^2 - 2(8)(5)\\cos 100^\\circ",
          "explanation": "Put in the two known lengths and the included angle of $100^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the numbers",
          "workingLatex": "CA^2 = 64 + 25 - 80\\cos 100^\\circ",
          "explanation": "Square the sides and combine the product $2\\times 8\\times 5 = 80$ before dealing with the cosine.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the cosine value",
          "workingLatex": "CA^2 = 89 - 80(-0.17365) = 102.89",
          "explanation": "Since $100^\\circ$ is obtuse, $\\cos 100^\\circ$ is negative, so subtracting it increases the total. That fits the picture: a wide turn at $B$ pushes $C$ further from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the square root",
          "workingLatex": "CA = \\sqrt{102.89} = 10.143\\ldots",
          "explanation": "Take the positive root only, because a distance can never be negative.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "CA \\approx 10.1\\text{ km}",
          "explanation": "Round to $3$ significant figures as requested.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check it is sensible",
          "workingLatex": "8 - 5 = 3 \\;<\\; 10.1 \\;<\\; 8 + 5 = 13",
          "explanation": "As a check, the direct distance sits between the difference and the sum of the two legs, so the triangle inequality holds and the answer is believable.",
          "diagram": null
        }
      ],
      "finalAnswer": "The direct distance back to the checkpoint is $CA \\approx 10.1$ km (to $3$ significant figures)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q034",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "bearing",
    "tags": [
      "triangle-trig",
      "bearings",
      "cosine-rule",
      "sine-rule"
    ],
    "questionText": "A yacht sails $12$ km from a marker $A$ on a bearing of $030^\\circ$ to a marker $B$. It then sails $9$ km on a bearing of $100^\\circ$ to a marker $C$. Find the bearing of $C$ from the starting marker $A$, giving your answer to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the three points",
          "workingLatex": "AB = 12\\text{ km}, \\quad BC = 9\\text{ km}",
          "explanation": "Label the start $A$, the turn $B$, and the finish $C$. We want the direction of $C$ measured from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the diagram",
          "workingLatex": "\\text{North lines at } A \\text{ and } B",
          "explanation": "Draw a North arrow at each point. The path leaves $A$ on $030^\\circ$, then turns to the more easterly $100^\\circ$ at $B$, so $C$ ends up to the right of the first leg.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Back-bearing at B",
          "workingLatex": "030^\\circ + 180^\\circ = 210^\\circ",
          "explanation": "The direction from $B$ back to $A$ is the reverse of the first bearing, found by adding $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interior angle at B",
          "workingLatex": "\\angle ABC = 210^\\circ - 100^\\circ = 110^\\circ",
          "explanation": "At $B$ the direction to $A$ is $210^\\circ$ and to $C$ is $100^\\circ$; the difference is the angle of the triangle at $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine rule for AC",
          "workingLatex": "AC^2 = 12^2 + 9^2 - 2(12)(9)\\cos 110^\\circ",
          "explanation": "To later use the sine rule for an angle we first need the length $AC$; the cosine rule gives it from the two sides and the included angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate AC",
          "workingLatex": "AC^2 = 225 + 73.88 = 298.88 \\;\\Rightarrow\\; AC = 17.29\\text{ km}",
          "explanation": "The obtuse angle makes the cosine term positive after subtraction, giving $AC \\approx 17.29$ km.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Sine rule for angle at A",
          "workingLatex": "\\frac{\\sin(\\angle BAC)}{BC} = \\frac{\\sin(\\angle ABC)}{AC}",
          "explanation": "The angle at $A$ between the first leg $AB$ and the direct line $AC$ is what we need to turn into a bearing, so we apply the sine rule.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the angle",
          "workingLatex": "\\sin(\\angle BAC) = \\frac{9\\sin 110^\\circ}{17.29} = 0.4892",
          "explanation": "Rearrange to make $\\sin(\\angle BAC)$ the subject and substitute the known values.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Find the angle",
          "workingLatex": "\\angle BAC = \\sin^{-1}(0.4892) = 29.3^\\circ",
          "explanation": "This is the acute opening between $AB$ and $AC$ at the start point.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Convert to a bearing",
          "workingLatex": "030^\\circ + 29.3^\\circ = 59.3^\\circ",
          "explanation": "Because $C$ lies clockwise (to the east) of the first leg, add the angle onto the first bearing of $030^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check the angle sum",
          "workingLatex": "110^\\circ + 29.3^\\circ + 40.7^\\circ = 180^\\circ",
          "explanation": "The third angle works out as $40.7^\\circ$, and all three angles add to $180^\\circ$, confirming the triangle is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "The bearing of $C$ from $A$ is $059^\\circ$ (to the nearest degree)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q035",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "bearings",
      "cosine-rule"
    ],
    "questionText": "Two ships leave a harbour $O$ at the same time. Ship $P$ sails on a bearing of $040^\\circ$ and after one hour is $15$ km from the harbour. Ship $Q$ sails on a bearing of $115^\\circ$ and after one hour is $20$ km from the harbour. Find the distance between the two ships after one hour, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the distances",
          "workingLatex": "OP = 15\\text{ km}, \\quad OQ = 20\\text{ km}",
          "explanation": "Both ships start at the harbour $O$, so we have two sides of a triangle sharing the vertex $O$. The unknown is the side $PQ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the diagram",
          "workingLatex": "\\text{One North line at } O",
          "explanation": "Because both bearings are measured from the same North arrow at $O$, we only need one diagram: two straight tracks spreading out from the harbour.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Angle at the harbour",
          "workingLatex": "\\angle POQ = 115^\\circ - 40^\\circ = 75^\\circ",
          "explanation": "Both directions are read from the same North line, so the angle between the two tracks is just the difference of the bearings.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Choose the cosine rule",
          "workingLatex": "PQ^2 = OP^2 + OQ^2 - 2\\,OP\\cdot OQ\\,\\cos(\\angle POQ)",
          "explanation": "We know two sides and the angle between them, so the cosine rule finds the opposite side $PQ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the values",
          "workingLatex": "PQ^2 = 15^2 + 20^2 - 2(15)(20)\\cos 75^\\circ",
          "explanation": "Insert the two lengths and the included angle of $75^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the numbers",
          "workingLatex": "PQ^2 = 625 - 600\\cos 75^\\circ",
          "explanation": "Combine $225 + 400 = 625$ and $2\\times 15\\times 20 = 600$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the cosine value",
          "workingLatex": "PQ^2 = 625 - 155.29 = 469.71",
          "explanation": "Here $75^\\circ$ is acute, so $\\cos 75^\\circ$ is positive and the term is subtracted.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the square root",
          "workingLatex": "PQ = \\sqrt{469.71} = 21.673\\ldots",
          "explanation": "Take the positive root to get the distance between the ships.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the answer",
          "workingLatex": "PQ \\approx 21.7\\text{ km}",
          "explanation": "Round to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check it is sensible",
          "workingLatex": "20 - 15 = 5 \\;<\\; 21.7 \\;<\\; 20 + 15 = 35",
          "explanation": "The separation lies between the difference and the sum of the two distances, so the triangle inequality is satisfied and the answer is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "The two ships are $PQ \\approx 21.7$ km apart (to $3$ significant figures)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q036",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "bearings",
      "cosine-rule"
    ],
    "questionText": "A cargo ship sails from port $A$ for $10$ km on a bearing of $070^\\circ$ to a point $B$. At $B$ it changes course and sails $14$ km on a bearing of $115^\\circ$ to a point $C$. Calculate the distance $AC$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the three points",
          "workingLatex": "AB = 10\\text{ km}, \\quad BC = 14\\text{ km}",
          "explanation": "Label the port $A$, the course change $B$, and the destination $C$. The required distance is the side $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the diagram",
          "workingLatex": "\\text{North lines at } A \\text{ and } B",
          "explanation": "Draw a North arrow at $A$ and another at $B$. The ship heads $070^\\circ$ first, then swings to $115^\\circ$, a modest turn to the right, so the path bends only slightly at $B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Back-bearing at B",
          "workingLatex": "070^\\circ + 180^\\circ = 250^\\circ",
          "explanation": "The direction from $B$ back to $A$ is the reverse of the first leg, found by adding $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interior angle at B",
          "workingLatex": "\\angle ABC = 250^\\circ - 115^\\circ = 135^\\circ",
          "explanation": "At $B$ the direction to $A$ is $250^\\circ$ and to $C$ is $115^\\circ$; the difference gives the triangle's angle at $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the cosine rule",
          "workingLatex": "AC^2 = AB^2 + BC^2 - 2\\,AB\\cdot BC\\,\\cos(\\angle ABC)",
          "explanation": "Two sides and the included angle are known, so the cosine rule gives the third side $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values",
          "workingLatex": "AC^2 = 10^2 + 14^2 - 2(10)(14)\\cos 135^\\circ",
          "explanation": "Insert the two known lengths and the included angle of $135^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify the numbers",
          "workingLatex": "AC^2 = 296 - 280\\cos 135^\\circ",
          "explanation": "Combine $100 + 196 = 296$ and $2\\times 10\\times 14 = 280$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the cosine value",
          "workingLatex": "AC^2 = 296 - 280(-0.70711) = 493.99",
          "explanation": "The angle $135^\\circ$ is obtuse, so its cosine is negative and subtracting it adds to the total, reflecting the wide bend in the route.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Take the square root",
          "workingLatex": "AC = \\sqrt{493.99} = 22.226\\ldots",
          "explanation": "Take the positive root for the distance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "AC \\approx 22.2\\text{ km}",
          "explanation": "Round to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check it is sensible",
          "workingLatex": "14 - 10 = 4 \\;<\\; 22.2 \\;<\\; 14 + 10 = 24",
          "explanation": "The distance sits between the difference and sum of the legs, and is close to the sum because the turn is fairly gentle, so the answer is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distance $AC \\approx 22.2$ km (to $3$ significant figures)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q037",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "bearing",
    "tags": [
      "triangle-trig",
      "bearings",
      "back-bearing"
    ],
    "questionText": "The bearing of a lighthouse $B$ from a port $A$ is $048^\\circ$. From the lighthouse $B$, a buoy $C$ lies in a direction $53^\\circ$ measured anticlockwise from $BA$ (so its bearing is $53^\\circ$ less than the bearing of $A$ from $B$). Find (a) the bearing of $A$ from $B$, and (b) the bearing of $C$ from $B$. Give each answer as a three-figure bearing.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Note the given bearing",
          "workingLatex": "\\text{Bearing of } B \\text{ from } A = 048^\\circ",
          "explanation": "We are told the direction from the port to the lighthouse. Everything else is built from this.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the diagram",
          "workingLatex": "\\text{North lines at } A \\text{ and } B",
          "explanation": "Sketch North arrows at both $A$ and $B$. The line $AB$ points $048^\\circ$ from the port; at the lighthouse we will read directions from its own North arrow.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Idea of a back-bearing",
          "workingLatex": "\\text{reverse direction} \\Rightarrow \\pm 180^\\circ",
          "explanation": "Looking from $B$ back to $A$ is exactly the opposite direction to looking from $A$ to $B$, so the two bearings differ by $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the back-bearing",
          "workingLatex": "048^\\circ + 180^\\circ = 228^\\circ",
          "explanation": "Since the original bearing is less than $180^\\circ$, we add $180^\\circ$ (which keeps the result under $360^\\circ$). This answers part (a).",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Direction BA at the lighthouse",
          "workingLatex": "\\text{Bearing of } A \\text{ from } B = 228^\\circ",
          "explanation": "This is our reference direction at $B$ from which the buoy's angle is measured.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Interpret the turn to C",
          "workingLatex": "53^\\circ \\text{ anticlockwise} \\Rightarrow \\text{subtract}",
          "explanation": "Anticlockwise means the bearing decreases, so the direction to $C$ is $53^\\circ$ smaller than the direction to $A$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the bearing of C from B",
          "workingLatex": "228^\\circ - 53^\\circ = 175^\\circ",
          "explanation": "Subtracting the $53^\\circ$ turn from the $228^\\circ$ reference gives the direction of the buoy from the lighthouse. This answers part (b).",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State both bearings",
          "workingLatex": "\\text{(a) } 228^\\circ, \\quad \\text{(b) } 175^\\circ",
          "explanation": "Both are written as three-figure bearings, as required.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check the back-bearing",
          "workingLatex": "228^\\circ - 180^\\circ = 048^\\circ \\;\\checkmark",
          "explanation": "Reversing the part (a) answer returns the original bearing of $048^\\circ$, confirming the back-bearing was calculated correctly.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Check the range",
          "workingLatex": "0^\\circ \\le 175^\\circ < 360^\\circ, \\quad 175^\\circ < 228^\\circ",
          "explanation": "Both answers are valid three-figure bearings, and the buoy's bearing is indeed smaller than that of $A$, matching the anticlockwise turn described.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The bearing of $A$ from $B$ is $228^\\circ$. (b) The bearing of $C$ from $B$ is $175^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q038",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "bearings",
      "sine-rule"
    ],
    "questionText": "A lighthouse $L$ is observed from two points on a straight coastal road. From point $A$ the lighthouse is on a bearing of $032^\\circ$. From point $B$, which is $6$ km due east of $A$, the lighthouse is on a bearing of $315^\\circ$. Find the distance of the lighthouse from $A$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the points",
          "workingLatex": "AB = 6\\text{ km (}B\\text{ due east of }A\\text{)}",
          "explanation": "Label the two observation points $A$ and $B$ and the lighthouse $L$. We want the distance $AL$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the diagram",
          "workingLatex": "\\text{North lines at } A \\text{ and } B",
          "explanation": "Place $A$ and $B$ on a horizontal line with $B$ to the east. From $A$ the sightline $032^\\circ$ points up and slightly right; from $B$ the sightline $315^\\circ$ points up and left. They cross at the lighthouse $L$, north of the road.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Angle at A",
          "workingLatex": "\\angle LAB = 090^\\circ - 032^\\circ = 58^\\circ",
          "explanation": "Since $B$ is due east of $A$, the line $AB$ has bearing $090^\\circ$. The angle between the sightline $032^\\circ$ and $AB$ is the difference.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Angle at B",
          "workingLatex": "\\angle LBA = 315^\\circ - 270^\\circ = 45^\\circ",
          "explanation": "Looking from $B$ back to $A$ is due west, bearing $270^\\circ$. The angle between the sightline $315^\\circ$ and $BA$ is the difference.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Angle at the lighthouse",
          "workingLatex": "\\angle ALB = 180^\\circ - 58^\\circ - 45^\\circ = 77^\\circ",
          "explanation": "The three angles of the triangle must add to $180^\\circ$, which gives the angle at $L$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Set up the sine rule",
          "workingLatex": "\\frac{AL}{\\sin(\\angle LBA)} = \\frac{AB}{\\sin(\\angle ALB)}",
          "explanation": "We know a side ($AB$) and all the angles, so the sine rule links the wanted side $AL$ to the angle opposite it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rearrange for AL",
          "workingLatex": "AL = \\frac{AB\\,\\sin(\\angle LBA)}{\\sin(\\angle ALB)} = \\frac{6\\sin 45^\\circ}{\\sin 77^\\circ}",
          "explanation": "The side $AL$ sits opposite the angle at $B$, so that angle appears on top.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "AL = \\frac{6 \\times 0.70711}{0.97437}",
          "explanation": "Evaluate the two sine values before dividing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Compute the distance",
          "workingLatex": "AL = \\frac{4.2426}{0.97437} = 4.354\\ldots",
          "explanation": "Carry out the division to find the distance from $A$ to the lighthouse.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State the answer",
          "workingLatex": "AL \\approx 4.35\\text{ km}",
          "explanation": "Round to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check it is sensible",
          "workingLatex": "\\angle LBA < \\angle LAB \\Rightarrow AL < BL",
          "explanation": "The angle at $B$ ($45^\\circ$) is smaller than the angle at $A$ ($58^\\circ$), so the side opposite $B$ (which is $AL$) should be the shorter of the two, and $4.35$ km is indeed short. This matches the geometry.",
          "diagram": null
        }
      ],
      "finalAnswer": "The lighthouse is $AL \\approx 4.35$ km from $A$ (to $3$ significant figures)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q039",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "bearings",
      "sine-rule"
    ],
    "questionText": "A fishing boat leaves harbour $A$ and sails $8$ km on a bearing of $210^\\circ$ to a point $B$. From $B$ it sails on a bearing of $300^\\circ$ until it reaches a point $C$ that lies due west of the harbour $A$. Find the distance $BC$, giving your answer to $3$ significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the points",
          "workingLatex": "AB = 8\\text{ km}",
          "explanation": "Label the harbour $A$, the turn $B$, and the final point $C$, which we are told is due west of $A$. We want the length $BC$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the diagram",
          "workingLatex": "\\text{North lines at } A \\text{ and } B",
          "explanation": "The first leg heads $210^\\circ$ (south-west) to $B$. The second leg heads $300^\\circ$ (north-west) to $C$, which sits on the due-west line from $A$. This closes up into triangle $ABC$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Angle at A",
          "workingLatex": "\\angle BAC = 270^\\circ - 210^\\circ = 60^\\circ",
          "explanation": "The direction from $A$ to $C$ is due west, bearing $270^\\circ$, while $AB$ has bearing $210^\\circ$; their difference is the angle at $A$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Back-bearing at B",
          "workingLatex": "210^\\circ - 180^\\circ = 030^\\circ",
          "explanation": "The direction from $B$ back to $A$ is the reverse of the first leg; since $210^\\circ$ exceeds $180^\\circ$ we subtract $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Angle at B",
          "workingLatex": "\\angle ABC = 360^\\circ - (300^\\circ - 030^\\circ) = 90^\\circ",
          "explanation": "At $B$ the direction to $A$ is $030^\\circ$ and to $C$ is $300^\\circ$. Measuring the shorter opening between them gives a right angle at $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the required angle at C",
          "workingLatex": "\\angle ACB = 180^\\circ - 60^\\circ - 90^\\circ = 30^\\circ",
          "explanation": "With two angles known, the third follows from the angle sum. This is the angle opposite the first leg $AB$, which we need for the sine rule.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the sine rule",
          "workingLatex": "\\frac{BC}{\\sin(\\angle BAC)} = \\frac{AB}{\\sin(\\angle ACB)}",
          "explanation": "We know side $AB$ and its opposite angle at $C$, so the sine rule gives the side $BC$, which lies opposite the angle at $A$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for BC",
          "workingLatex": "BC = \\frac{AB\\,\\sin(\\angle BAC)}{\\sin(\\angle ACB)} = \\frac{8\\sin 60^\\circ}{\\sin 30^\\circ}",
          "explanation": "Place the angle opposite $BC$ (that is $60^\\circ$) on top.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the values",
          "workingLatex": "BC = \\frac{8 \\times 0.86603}{0.5}",
          "explanation": "Work out the two sine values before dividing.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the distance",
          "workingLatex": "BC = \\frac{6.9282}{0.5} = 13.856\\ldots",
          "explanation": "Dividing by $\\sin 30^\\circ = 0.5$ doubles the numerator, giving the length of the second leg.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "State the answer",
          "workingLatex": "BC \\approx 13.9\\text{ km}",
          "explanation": "Round to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check it is sensible",
          "workingLatex": "\\angle ACB < \\angle BAC \\Rightarrow AB < BC",
          "explanation": "The angle at $C$ ($30^\\circ$) is the smallest, so the side opposite it ($AB = 8$) should be the shortest; $BC = 13.9$ km being longer fits that ordering.",
          "diagram": null
        }
      ],
      "finalAnswer": "The distance $BC \\approx 13.9$ km (to $3$ significant figures)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q040",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "bearing",
    "tags": [
      "triangle-trig",
      "bearings",
      "cosine-rule",
      "sine-rule"
    ],
    "questionText": "A group of walkers leaves a camp $A$ and walks $6$ km on a bearing of $040^\\circ$ to a point $B$. They then walk $4$ km on a bearing of $150^\\circ$ to a point $C$, where they stop. Find (a) the direct distance $CA$ from the camp, to $3$ significant figures, and (b) the bearing they must walk on to return straight from $C$ to the camp $A$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the three points",
          "workingLatex": "AB = 6\\text{ km}, \\quad BC = 4\\text{ km}",
          "explanation": "Label the camp $A$, the turn $B$, and the overnight stop $C$. Part (a) needs $CA$; part (b) needs the direction from $C$ back to $A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the diagram",
          "workingLatex": "\\text{North lines at } A,\\ B \\text{ and } C",
          "explanation": "The first leg heads $040^\\circ$ (north-east) to $B$, the second $150^\\circ$ (south-east) to $C$. The return leg $CA$ closes the triangle, pointing back roughly south-west.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Back-bearing at B",
          "workingLatex": "040^\\circ + 180^\\circ = 220^\\circ",
          "explanation": "The direction from $B$ back to $A$ reverses the first leg, adding $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Interior angle at B",
          "workingLatex": "\\angle ABC = 220^\\circ - 150^\\circ = 70^\\circ",
          "explanation": "At $B$ the direction to $A$ is $220^\\circ$ and to $C$ is $150^\\circ$; the difference is the angle at $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine rule for CA",
          "workingLatex": "CA^2 = 6^2 + 4^2 - 2(6)(4)\\cos 70^\\circ",
          "explanation": "Two sides and the included angle are known, so the cosine rule gives the return distance $CA$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate CA",
          "workingLatex": "CA^2 = 52 - 48\\cos 70^\\circ = 35.58 \\;\\Rightarrow\\; CA = 5.965\\ldots",
          "explanation": "Combine $36 + 16 = 52$, subtract the cosine term, then take the positive square root.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "State part (a)",
          "workingLatex": "CA \\approx 5.97\\text{ km}",
          "explanation": "Round the direct distance to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Sine rule for angle at A",
          "workingLatex": "\\frac{\\sin(\\angle BAC)}{BC} = \\frac{\\sin(\\angle ABC)}{CA}",
          "explanation": "To find a direction we first find the angle at $A$ between the first leg $AB$ and the line $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for the angle",
          "workingLatex": "\\sin(\\angle BAC) = \\frac{4\\sin 70^\\circ}{5.965} = 0.6301 \\;\\Rightarrow\\; \\angle BAC = 39.1^\\circ",
          "explanation": "Rearrange, substitute, and take the inverse sine to get the acute angle at $A$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Bearing of C from A",
          "workingLatex": "040^\\circ + 39.1^\\circ = 79.1^\\circ \\approx 079^\\circ",
          "explanation": "Because $C$ lies clockwise of the first leg, add the angle to the first bearing of $040^\\circ$ to get the direction from $A$ to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Return bearing (part b)",
          "workingLatex": "079^\\circ + 180^\\circ = 259^\\circ",
          "explanation": "The walk home is the reverse direction, so the bearing of $A$ from $C$ is the back-bearing of $079^\\circ$, found by adding $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check it is sensible",
          "workingLatex": "6 - 4 = 2 \\;<\\; 5.97 \\;<\\; 6 + 4 = 10",
          "explanation": "The distance obeys the triangle inequality, and a return bearing near south-west ($259^\\circ$) fits a route that went north-east then south-east, so both answers are reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The direct distance is $CA \\approx 5.97$ km (to $3$ significant figures). (b) The return bearing from $C$ to $A$ is $259^\\circ$ (to the nearest degree)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q041",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "bearings",
      "sine-rule"
    ],
    "questionText": "A surveyor sets up two stations. From station $A$, station $B$ is on a bearing of $070^\\circ$ and is $800$ m away. A boundary post $T$ is then sighted: at $A$ the angle between $AB$ and $AT$ is $35^\\circ$, with $T$ lying to the west of the line $AB$; at $B$ the angle between $BA$ and $BT$ is $80^\\circ$. Find (a) the distance $AT$, to $3$ significant figures, and (b) the bearing of $T$ from $A$, to the nearest degree.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Name the points",
          "workingLatex": "AB = 800\\text{ m}",
          "explanation": "The two stations are $A$ and $B$, and the post is $T$. Part (a) wants the distance $AT$; part (b) wants the direction of $T$ from $A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Picture the diagram",
          "workingLatex": "\\text{North line at } A;\\ B \\text{ on bearing } 070^\\circ",
          "explanation": "Draw $AB$ heading $070^\\circ$ from station $A$. The post $T$ sits to the west of that line, with a $35^\\circ$ opening at $A$ and an $80^\\circ$ opening at $B$, forming triangle $ABT$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Angle at the post",
          "workingLatex": "\\angle ATB = 180^\\circ - 35^\\circ - 80^\\circ = 65^\\circ",
          "explanation": "The three angles of the triangle add to $180^\\circ$, giving the angle at $T$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Set up the sine rule",
          "workingLatex": "\\frac{AT}{\\sin(\\angle ABT)} = \\frac{AB}{\\sin(\\angle ATB)}",
          "explanation": "We know the side $AB$ and its opposite angle at $T$, so the sine rule gives the side $AT$, which lies opposite the angle at $B$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange for AT",
          "workingLatex": "AT = \\frac{AB\\,\\sin(\\angle ABT)}{\\sin(\\angle ATB)} = \\frac{800\\sin 80^\\circ}{\\sin 65^\\circ}",
          "explanation": "Place the angle opposite $AT$ (that is $80^\\circ$) on top.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute the values",
          "workingLatex": "AT = \\frac{800 \\times 0.98481}{0.90631}",
          "explanation": "Work out the two sine values before dividing.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute the distance",
          "workingLatex": "AT = \\frac{787.85}{0.90631} = 869.3\\ldots",
          "explanation": "Carry out the division to find the distance from $A$ to the post.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State part (a)",
          "workingLatex": "AT \\approx 869\\text{ m}",
          "explanation": "Round the distance to $3$ significant figures.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Bearing of T from A",
          "workingLatex": "070^\\circ - 35^\\circ = 035^\\circ",
          "explanation": "The post lies to the west of $AB$, i.e. anticlockwise, so its bearing is $35^\\circ$ less than the bearing of $B$, which is $070^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "State part (b)",
          "workingLatex": "\\text{Bearing of } T \\text{ from } A = 035^\\circ",
          "explanation": "Write the direction as a three-figure bearing.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Check it is sensible",
          "workingLatex": "\\angle ATB = 65^\\circ < 80^\\circ = \\angle ABT \\Rightarrow AB < AT",
          "explanation": "The angle at $T$ is smaller than the angle at $B$, so the side opposite $T$ ($AB = 800$ m) should be shorter than the side opposite $B$ ($AT$); $AT \\approx 869$ m being longer confirms the result.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) The distance $AT \\approx 869$ m (to $3$ significant figures). (b) The bearing of $T$ from $A$ is $035^\\circ$ (to the nearest degree)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q042",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "ambiguous-case"
    ],
    "questionText": "In triangle $ABC$, angle $A=40^\\circ$, side $a=6$ cm and side $b=8$ cm. Using the sine rule, find both possible values of angle $B$, giving your answers to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the sine rule in the form for finding an angle",
          "workingLatex": "\\frac{\\sin A}{a}=\\frac{\\sin B}{b}",
          "explanation": "When we are hunting for an angle it is neatest to place the sines on top, so each unknown angle sits directly over its opposite side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values",
          "workingLatex": "\\frac{\\sin 40^\\circ}{6}=\\frac{\\sin B}{8}",
          "explanation": "Angle $A$ sits opposite side $a$, and the unknown angle $B$ sits opposite side $b$, so we drop each value into its matching place.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange to make $\\sin B$ the subject",
          "workingLatex": "\\sin B=\\frac{8\\sin 40^\\circ}{6}",
          "explanation": "Multiplying both sides by $8$ isolates $\\sin B$, leaving a single quantity we can evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\sin 40^\\circ$",
          "workingLatex": "\\sin 40^\\circ=0.6428",
          "explanation": "A calculator gives the sine of the known angle, which we keep to four decimal places to stay accurate.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Compute $\\sin B$",
          "workingLatex": "\\sin B=\\frac{8\\times 0.6428}{6}=0.8571",
          "explanation": "Carrying out the arithmetic gives a value safely between $0$ and $1$, so a valid angle certainly exists.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Take the inverse sine for the acute solution",
          "workingLatex": "B=\\sin^{-1}(0.8571)=59.0^\\circ",
          "explanation": "The calculator returns the acute angle whose sine is $0.8571$; this is the first of the two possible answers.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the obtuse partner angle",
          "workingLatex": "B=180^\\circ-59.0^\\circ=121.0^\\circ",
          "explanation": "Sine gives the same value for an angle and its supplement, so subtracting from $180^\\circ$ produces the second candidate for $B$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Check that both angles fit inside a triangle",
          "workingLatex": "40^\\circ+59.0^\\circ=99^\\circ,\\quad 40^\\circ+121.0^\\circ=161^\\circ",
          "explanation": "Each sum with angle $A$ stays below $180^\\circ$, leaving room for a positive third angle, so both triangles genuinely exist.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the sine values agree",
          "workingLatex": "\\sin 121.0^\\circ=\\sin 59.0^\\circ=0.857",
          "explanation": "Both angles return the same sine we started from, confirming the working is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B=59.0^\\circ$ or $B=121.0^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q043",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "ambiguous-case"
    ],
    "questionText": "In triangle $ABC$, angle $A=30^\\circ$, $a=5$ cm and $b=8$ cm. Show that two different triangles are possible, and find both possible values of the third side $c$, giving your answers to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Apply the sine rule to find angle $B$",
          "workingLatex": "\\frac{\\sin B}{b}=\\frac{\\sin A}{a}",
          "explanation": "We know a side, its opposite angle, and a second side, so the sine rule lets us reach the angle opposite that second side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange and substitute",
          "workingLatex": "\\sin B=\\frac{8\\sin 30^\\circ}{5}",
          "explanation": "Multiplying up by $b=8$ isolates $\\sin B$ and lets us insert the known angle $A$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate using the exact value of $\\sin 30^\\circ$",
          "workingLatex": "\\sin B=\\frac{8\\times 0.5}{5}=0.8",
          "explanation": "Since $\\sin 30^\\circ=\\tfrac12$, the arithmetic is clean and gives a value between $0$ and $1$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the acute value of $B$",
          "workingLatex": "B=\\sin^{-1}(0.8)=53.13^\\circ",
          "explanation": "The inverse sine gives the acute angle, which is the first of two possibilities.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the obtuse value of $B$",
          "workingLatex": "B=180^\\circ-53.13^\\circ=126.87^\\circ",
          "explanation": "The supplement shares the same sine, so it is the second candidate for angle $B$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Confirm both triangles are possible",
          "workingLatex": "30^\\circ+53.13^\\circ=83.13^\\circ,\\quad 30^\\circ+126.87^\\circ=156.87^\\circ",
          "explanation": "Each total is below $180^\\circ$, so a valid third angle remains in both cases and two genuine triangles exist.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Third angle in the first triangle",
          "workingLatex": "C_1=180^\\circ-30^\\circ-53.13^\\circ=96.87^\\circ",
          "explanation": "Angles in a triangle add to $180^\\circ$, so subtracting the two known angles gives $C$ for the acute case.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Third side in the first triangle",
          "workingLatex": "c_1=\\frac{a\\sin C_1}{\\sin A}=\\frac{5\\sin 96.87^\\circ}{\\sin 30^\\circ}=9.93",
          "explanation": "The sine rule links the new angle to its opposite side, giving the longer of the two possible third sides.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Third angle in the second triangle",
          "workingLatex": "C_2=180^\\circ-30^\\circ-126.87^\\circ=23.13^\\circ",
          "explanation": "Using the obtuse value of $B$ instead leaves a much smaller angle for $C$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Third side in the second triangle",
          "workingLatex": "c_2=\\frac{5\\sin 23.13^\\circ}{\\sin 30^\\circ}=3.93",
          "explanation": "Applying the sine rule again gives the shorter possible third side for the obtuse case.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify the results are sensible",
          "workingLatex": "C_1>C_2\\ \\Rightarrow\\ c_1>c_2",
          "explanation": "The larger angle should face the longer side, and indeed $c_1>c_2$, so the two answers are consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c=9.93$ cm or $c=3.93$ cm"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q044",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "ambiguous-case"
    ],
    "questionText": "In triangle $ABC$, angle $A=70^\\circ$, $a=12$ cm and $b=9$ cm. Use the sine rule to find angle $B$, explaining why only one triangle is possible. Give your answer to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set up the sine rule for angle $B$",
          "workingLatex": "\\frac{\\sin B}{b}=\\frac{\\sin A}{a}",
          "explanation": "With a matching side and angle plus a second side, the sine rule reaches the angle opposite that second side.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange and substitute",
          "workingLatex": "\\sin B=\\frac{9\\sin 70^\\circ}{12}",
          "explanation": "Multiplying by $b=9$ isolates $\\sin B$ and lets us insert the known angle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate $\\sin 70^\\circ$",
          "workingLatex": "\\sin 70^\\circ=0.9397",
          "explanation": "A calculator gives the sine of the known angle to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute $\\sin B$",
          "workingLatex": "\\sin B=\\frac{9\\times 0.9397}{12}=0.7048",
          "explanation": "The arithmetic gives a value between $0$ and $1$, so at least the acute solution is valid.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute solution",
          "workingLatex": "B=\\sin^{-1}(0.7048)=44.8^\\circ",
          "explanation": "The inverse sine returns the acute angle whose sine is $0.7048$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Write down the obtuse candidate",
          "workingLatex": "180^\\circ-44.8^\\circ=135.2^\\circ",
          "explanation": "The supplement always shares the same sine, so it must be tested before we accept or reject it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the obtuse candidate against the angle sum",
          "workingLatex": "70^\\circ+135.2^\\circ=205.2^\\circ>180^\\circ",
          "explanation": "Combined with angle $A$ this already exceeds $180^\\circ$, leaving no room for a third angle, so the obtuse case is impossible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Conclude the single valid solution",
          "workingLatex": "B=44.8^\\circ",
          "explanation": "Because the obtuse option is rejected, only the acute angle survives and just one triangle can be drawn.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify a valid third angle exists",
          "workingLatex": "C=180^\\circ-70^\\circ-44.8^\\circ=65.2^\\circ>0^\\circ",
          "explanation": "The remaining angle is positive, confirming the surviving triangle is genuinely valid.",
          "diagram": null
        }
      ],
      "finalAnswer": "$B=44.8^\\circ$ only (the obtuse value $135.2^\\circ$ is rejected as it would make the angle sum exceed $180^\\circ$)"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q045",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "area"
    ],
    "questionText": "A triangle has two sides of length $8$ cm and $12$ cm, and an area of $24\\text{ cm}^2$. Find both possible values of the angle between these two sides.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Write the area formula for two sides and the included angle",
          "workingLatex": "\\text{Area}=\\tfrac12 ab\\sin C",
          "explanation": "When we know two sides and the angle sitting between them, this formula gives the area directly, and we can run it backwards to find the angle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values",
          "workingLatex": "24=\\tfrac12\\times 8\\times 12\\times\\sin C",
          "explanation": "The two given sides play the roles of $a$ and $b$, and the area is inserted on the left.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the constant part",
          "workingLatex": "24=48\\sin C",
          "explanation": "Multiplying $\\tfrac12\\times 8\\times 12$ gives $48$, leaving a single equation in $\\sin C$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\sin C$",
          "workingLatex": "\\sin C=\\frac{24}{48}=0.5",
          "explanation": "Dividing both sides by $48$ isolates the sine of the unknown angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle",
          "workingLatex": "C=\\sin^{-1}(0.5)=30^\\circ",
          "explanation": "The inverse sine gives the acute angle whose sine is $\\tfrac12$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the obtuse angle",
          "workingLatex": "C=180^\\circ-30^\\circ=150^\\circ",
          "explanation": "The supplement has the same sine, so it is an equally valid included angle for the given area.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Confirm both angles are allowed",
          "workingLatex": "0^\\circ<30^\\circ<180^\\circ,\\quad 0^\\circ<150^\\circ<180^\\circ",
          "explanation": "An included angle only has to lie strictly between $0^\\circ$ and $180^\\circ$, so both a thin acute triangle and a broad obtuse triangle are possible.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Verify the acute case",
          "workingLatex": "\\tfrac12\\times 8\\times 12\\times\\sin 30^\\circ=48\\times 0.5=24",
          "explanation": "Substituting $30^\\circ$ back reproduces the required area, confirming the first answer.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify the obtuse case",
          "workingLatex": "\\sin 150^\\circ=\\sin 30^\\circ=0.5\\ \\Rightarrow\\ \\text{Area}=24",
          "explanation": "Because $\\sin 150^\\circ$ equals $\\sin 30^\\circ$, the obtuse angle gives exactly the same area, confirming the second answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C=30^\\circ$ or $C=150^\\circ$"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q046",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "area"
    ],
    "questionText": "In triangle $ABC$, the area is $40\\text{ cm}^2$, side $a=10$ cm and the included angle $C=40^\\circ$. Find the length of side $b$, giving your answer to $1$ decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the area formula",
          "workingLatex": "\\text{Area}=\\tfrac12 ab\\sin C",
          "explanation": "This formula links the two sides around angle $C$ to the area, so once three of the four quantities are known we can find the fourth.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values",
          "workingLatex": "40=\\tfrac12\\times 10\\times b\\times\\sin 40^\\circ",
          "explanation": "Here $a=10$ and the angle $C=40^\\circ$ are known, leaving $b$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the numerical coefficient",
          "workingLatex": "40=5b\\sin 40^\\circ",
          "explanation": "Combining $\\tfrac12\\times 10$ gives $5$, tidying the equation before we solve for $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate $\\sin 40^\\circ$",
          "workingLatex": "\\sin 40^\\circ=0.6428",
          "explanation": "A calculator gives the sine of the included angle to four decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Rearrange to make $b$ the subject",
          "workingLatex": "b=\\frac{40}{5\\times 0.6428}",
          "explanation": "Dividing both sides by $5\\sin 40^\\circ$ leaves $b$ alone on one side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the denominator",
          "workingLatex": "5\\times 0.6428=3.214",
          "explanation": "Working out the bottom of the fraction first keeps the final division simple.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Compute $b$",
          "workingLatex": "b=\\frac{40}{3.214}=12.4457",
          "explanation": "Carrying out the division gives the unrounded length of side $b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Round to the required accuracy",
          "workingLatex": "b\\approx 12.4\\text{ cm}",
          "explanation": "The question asks for one decimal place, so we round the length accordingly.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify by recomputing the area",
          "workingLatex": "\\tfrac12\\times 10\\times 12.4457\\times\\sin 40^\\circ=40.0",
          "explanation": "Putting the length back into the area formula returns the original $40\\text{ cm}^2$, confirming the answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b\\approx 12.4$ cm"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q047",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "exact-values"
    ],
    "questionText": "In triangle $ABC$, angle $A=45^\\circ$, angle $B=60^\\circ$ and side $a=8$ cm. Using exact values, find the exact length of side $b$, giving your answer in surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the sine rule with sides on top",
          "workingLatex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}",
          "explanation": "We know two angles and one side and want the side opposite the second angle, so this form of the sine rule is ideal.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Rearrange to make $b$ the subject",
          "workingLatex": "b=\\frac{a\\sin B}{\\sin A}",
          "explanation": "Multiplying both sides by $\\sin B$ isolates the unknown side $b$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known quantities",
          "workingLatex": "b=\\frac{8\\sin 60^\\circ}{\\sin 45^\\circ}",
          "explanation": "Inserting $a=8$ and the two special angles sets up an expression we can evaluate exactly.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace the sines with exact surd values",
          "workingLatex": "\\sin 60^\\circ=\\frac{\\sqrt{3}}{2},\\quad \\sin 45^\\circ=\\frac{\\sqrt{2}}{2}",
          "explanation": "These angles come from the standard special triangles, so their sines are known exactly and avoid any rounding.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the exact values",
          "workingLatex": "b=\\frac{8\\times\\frac{\\sqrt{3}}{2}}{\\frac{\\sqrt{2}}{2}}",
          "explanation": "Placing the surds into the expression turns the calculation into a fraction of fractions.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify by cancelling the halves",
          "workingLatex": "b=\\frac{8\\sqrt{3}}{\\sqrt{2}}",
          "explanation": "Dividing by $\\tfrac{\\sqrt{2}}{2}$ is the same as multiplying by $\\tfrac{2}{\\sqrt{2}}$, and the factors of $2$ cancel neatly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Rationalise the denominator",
          "workingLatex": "b=\\frac{8\\sqrt{3}}{\\sqrt{2}}\\times\\frac{\\sqrt{2}}{\\sqrt{2}}=\\frac{8\\sqrt{6}}{2}",
          "explanation": "Multiplying top and bottom by $\\sqrt{2}$ clears the surd from the denominator and combines $\\sqrt{3}\\times\\sqrt{2}$ into $\\sqrt{6}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to the final surd",
          "workingLatex": "b=4\\sqrt{6}",
          "explanation": "Dividing $8$ by $2$ leaves the tidy exact length in surd form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with a decimal check",
          "workingLatex": "4\\sqrt{6}\\approx 9.80,\\quad \\frac{8\\sin 60^\\circ}{\\sin 45^\\circ}\\approx 9.80",
          "explanation": "The surd answer matches the direct calculator value, confirming the exact result is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$b=4\\sqrt{6}$ cm $\\approx 9.80$ cm"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q048",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "area",
      "exact-values"
    ],
    "questionText": "A triangle has two sides of length $6$ cm and $10$ cm with an included angle of $60^\\circ$. Find the exact area of the triangle in surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the two sides and the included angle",
          "workingLatex": "a=6,\\quad b=10,\\quad C=60^\\circ",
          "explanation": "The angle of $60^\\circ$ sits between the two given sides, which is exactly what the area formula needs.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "State the area formula",
          "workingLatex": "\\text{Area}=\\tfrac12 ab\\sin C",
          "explanation": "With two sides and the angle between them, the area follows directly from this formula.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "\\text{Area}=\\tfrac12\\times 6\\times 10\\times\\sin 60^\\circ",
          "explanation": "Dropping the sides and angle into the formula sets up the calculation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Replace $\\sin 60^\\circ$ with its exact value",
          "workingLatex": "\\sin 60^\\circ=\\frac{\\sqrt{3}}{2}",
          "explanation": "Because $60^\\circ$ is a special angle, using its exact surd value keeps the area exact.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Substitute the exact value",
          "workingLatex": "\\text{Area}=\\tfrac12\\times 6\\times 10\\times\\frac{\\sqrt{3}}{2}",
          "explanation": "Inserting the surd keeps the whole expression in exact form rather than a decimal.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Multiply the rational factors",
          "workingLatex": "\\tfrac12\\times 6\\times 10=30",
          "explanation": "Combining the numbers first leaves only the surd factor to attach.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Combine with the surd",
          "workingLatex": "\\text{Area}=30\\times\\frac{\\sqrt{3}}{2}",
          "explanation": "Multiplying the rational part by the surd gives a single expression ready to simplify.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify to the exact area",
          "workingLatex": "\\text{Area}=15\\sqrt{3}",
          "explanation": "Dividing $30$ by $2$ produces the tidy exact area in surd form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with a decimal check",
          "workingLatex": "15\\sqrt{3}\\approx 25.98,\\quad \\tfrac12\\times 6\\times 10\\times 0.8660\\approx 25.98",
          "explanation": "The surd value agrees with the direct decimal calculation, confirming the exact answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $=15\\sqrt{3}$ cm$^2\\approx 25.98$ cm$^2$"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q049",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "exact-values"
    ],
    "questionText": "In triangle $ABC$, sides $a=4$ cm and $b=6$ cm enclose an angle $C=120^\\circ$. Using the cosine rule, find the exact length of side $c$ in surd form.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the cosine rule",
          "workingLatex": "c^2=a^2+b^2-2ab\\cos C",
          "explanation": "With two sides and the angle between them, the cosine rule gives the third side, and it handles obtuse angles cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values",
          "workingLatex": "c^2=4^2+6^2-2\\times 4\\times 6\\times\\cos 120^\\circ",
          "explanation": "The two sides go into $a$ and $b$, and the enclosed angle goes into $C$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the exact value of $\\cos 120^\\circ$",
          "workingLatex": "\\cos 120^\\circ=-\\tfrac12",
          "explanation": "The cosine of $120^\\circ$ is exactly $-\\tfrac12$; the minus sign reflects that the angle is obtuse.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the exact cosine",
          "workingLatex": "c^2=16+36-48\\times\\left(-\\tfrac12\\right)",
          "explanation": "Replacing the cosine with $-\\tfrac12$ keeps the calculation exact and turns a subtraction into an addition.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the final term",
          "workingLatex": "48\\times\\left(-\\tfrac12\\right)=-24",
          "explanation": "The product is negative, so subtracting it becomes adding $24$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Combine the terms",
          "workingLatex": "c^2=16+36+24=76",
          "explanation": "Adding everything together gives the exact value of $c^2$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "c=\\sqrt{76}",
          "explanation": "Since a length is positive, we take the positive square root of $c^2$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the surd",
          "workingLatex": "c=\\sqrt{4\\times 19}=2\\sqrt{19}",
          "explanation": "Factoring out the perfect square $4$ pulls a $2$ outside the root and leaves the simplest surd form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Verify with a decimal check",
          "workingLatex": "2\\sqrt{19}\\approx 8.72,\\quad (8.72)^2\\approx 76",
          "explanation": "Squaring the surd answer returns $76$, confirming the exact length is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$c=2\\sqrt{19}$ cm $\\approx 8.72$ cm"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q050",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "area"
    ],
    "questionText": "In triangle $ABC$, sides $a=6$ cm and $b=8$ cm enclose the angle $C$. The area of the triangle is $12\\text{ cm}^2$. Find the acute value of $C$, and hence find the length of the third side $c$, giving your answer to $2$ decimal places.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "State the area formula",
          "workingLatex": "\\text{Area}=\\tfrac12 ab\\sin C",
          "explanation": "The area links the two given sides to the angle between them, so we can use it to unlock angle $C$ first.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Substitute the known values",
          "workingLatex": "12=\\tfrac12\\times 6\\times 8\\times\\sin C",
          "explanation": "The sides $6$ and $8$ and the area $12$ are placed into the formula, leaving $\\sin C$ as the unknown.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Simplify the constant",
          "workingLatex": "12=24\\sin C",
          "explanation": "Multiplying $\\tfrac12\\times 6\\times 8$ gives $24$, tidying the equation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for $\\sin C$",
          "workingLatex": "\\sin C=\\frac{12}{24}=0.5",
          "explanation": "Dividing both sides by $24$ isolates the sine of the included angle.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acute angle",
          "workingLatex": "C=\\sin^{-1}(0.5)=30^\\circ",
          "explanation": "The inverse sine gives the acute angle whose sine is $\\tfrac12$, which is the value the question asks for.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Note the alternative obtuse angle",
          "workingLatex": "180^\\circ-30^\\circ=150^\\circ",
          "explanation": "An obtuse triangle with $C=150^\\circ$ would give the same area, but here we continue with the acute case as required.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Apply the cosine rule for the third side",
          "workingLatex": "c^2=a^2+b^2-2ab\\cos C",
          "explanation": "Now that the angle between the two known sides is fixed, the cosine rule gives the side opposite it.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "c^2=6^2+8^2-2\\times 6\\times 8\\times\\cos 30^\\circ",
          "explanation": "Inserting the sides and the acute angle sets up the calculation for $c$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the value of $\\cos 30^\\circ$",
          "workingLatex": "\\cos 30^\\circ=\\frac{\\sqrt{3}}{2}\\approx 0.8660",
          "explanation": "The cosine of the special angle $30^\\circ$ is $\\tfrac{\\sqrt{3}}{2}$, which we evaluate as a decimal to finish.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate $c^2$",
          "workingLatex": "c^2=36+64-96\\times 0.8660=16.86",
          "explanation": "Working through the arithmetic gives the square of the required length.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the square root",
          "workingLatex": "c=\\sqrt{16.86}=4.11",
          "explanation": "The positive square root gives the length of the third side to two decimal places.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Verify the result is sensible",
          "workingLatex": "c=4.11<a+b=14\\ \\text{and}\\ c>b-a=2",
          "explanation": "The third side lies within the range allowed by the triangle inequality, confirming the answer is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$C=30^\\circ$ and $c\\approx 4.11$ cm"
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "shared-side",
      "cosine-rule",
      "sine-rule"
    ],
    "questionText": "Two triangles share the common side $AC$. In triangle $ABC$, $AB = 8$ cm, $BC = 10$ cm and $\\angle ABC = 70^\\circ$. Triangle $ACD$ is joined along $AC$, with $\\angle ADC = 55^\\circ$ and $\\angle ACD = 48^\\circ$. Find the length $AD$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the route between the two triangles",
          "workingLatex": "\\triangle ABC \\;\\rightarrow\\; AC \\;\\rightarrow\\; \\triangle ACD",
          "explanation": "The side $AC$ belongs to both triangles, so it is the bridge between them. Triangle $ABC$ gives two sides with the angle between them, which is enough to find $AC$; once $AC$ is known it becomes a known side of triangle $ACD$, which then unlocks $AD$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Choose the cosine rule for AC",
          "workingLatex": "AC^2 = AB^2 + BC^2 - 2 \\cdot AB \\cdot BC \\cos(\\angle ABC)",
          "explanation": "In triangle $ABC$ the unknown side $AC$ sits opposite the known angle at $B$, with the two enclosing sides known. That is precisely the situation the cosine rule is designed for.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "AC^2 = 8^2 + 10^2 - 2(8)(10)\\cos(70^\\circ)",
          "explanation": "Placing the numbers in carefully keeps the enclosed angle $70^\\circ$ paired with the two sides that actually form it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the numerical parts",
          "workingLatex": "AC^2 = 164 - 160(0.34202) = 164 - 54.723",
          "explanation": "Working out $\\cos 70^\\circ = 0.34202$ and the product $160\\cos 70^\\circ$ separately reduces the chance of a slip before the subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for AC",
          "workingLatex": "AC^2 = 109.277 \\Rightarrow AC = 10.4536 \\text{ cm}",
          "explanation": "Taking the positive square root gives the physical length. We keep extra decimals because $AC$ feeds into the next stage, and rounding now would distort the final answer.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check AC is feasible",
          "workingLatex": "|10 - 8| < AC < 10 + 8 \\;\\Rightarrow\\; 2 < 10.45 < 18",
          "explanation": "A side of any triangle must lie between the difference and sum of the other two. Our value sits comfortably inside that range, so it is a sensible length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the third angle of triangle ACD",
          "workingLatex": "\\angle DAC = 180^\\circ - 55^\\circ - 48^\\circ = 77^\\circ",
          "explanation": "The angles of any triangle sum to $180^\\circ$. Knowing all three angles of triangle $ACD$ together with side $AC$ means the sine rule can now be applied.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Set up the sine rule for AD",
          "workingLatex": "\\frac{AD}{\\sin(\\angle ACD)} = \\frac{AC}{\\sin(\\angle ADC)}",
          "explanation": "$AD$ lies opposite the $48^\\circ$ angle, while the known side $AC$ lies opposite the $55^\\circ$ angle. Pairing each side with the angle facing it is the core idea of the sine rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Rearrange for AD",
          "workingLatex": "AD = \\frac{AC \\sin(48^\\circ)}{\\sin(55^\\circ)}",
          "explanation": "Multiplying both sides by $\\sin 48^\\circ$ isolates the length we are after.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute the values",
          "workingLatex": "AD = \\frac{10.4536 \\times 0.74314}{0.81915}",
          "explanation": "Using the unrounded value of $AC$ preserves accuracy right through to the final line.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate",
          "workingLatex": "AD = \\frac{7.7686}{0.81915} = 9.4836 \\text{ cm}",
          "explanation": "The arithmetic gives the length of $AD$ before final rounding.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sanity check the size of AD",
          "workingLatex": "AD = 9.48 < AC = 10.45",
          "explanation": "$AD$ faces the smallest angle ($48^\\circ$) in triangle $ACD$, so it should be shorter than $AC$, which faces $55^\\circ$. Being a little smaller than $AC$ is exactly what we expect.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 significant figures",
          "workingLatex": "AD \\approx 9.48 \\text{ cm}",
          "explanation": "Rounding only at the very end keeps the answer as accurate as the given data allows.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AD \\approx 9.48$ cm."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "quadrilateral",
      "cosine-rule"
    ],
    "questionText": "$ABCD$ is a quadrilateral. The diagonal $BD$ divides it into triangles $ABD$ and $BCD$. In triangle $ABD$, $AB = 7$ cm, $AD = 9$ cm and $\\angle BAD = 68^\\circ$. In triangle $BCD$, $BC = 6$ cm and $CD = 11$ cm. Find the size of $\\angle BCD$, giving your answer to 1 decimal place.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan using the shared diagonal",
          "workingLatex": "\\triangle ABD \\;\\rightarrow\\; BD \\;\\rightarrow\\; \\triangle BCD",
          "explanation": "The diagonal $BD$ is common to both triangles. Finding it from triangle $ABD$ gives us the third side of triangle $BCD$, after which $\\angle BCD$ can be found.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cosine rule for BD in triangle ABD",
          "workingLatex": "BD^2 = AB^2 + AD^2 - 2 \\cdot AB \\cdot AD \\cos(\\angle BAD)",
          "explanation": "We know both sides that enclose the angle at $A$, and $BD$ is opposite that angle, so the cosine rule finds it directly.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "BD^2 = 7^2 + 9^2 - 2(7)(9)\\cos(68^\\circ)",
          "explanation": "The angle $68^\\circ$ must sit with the two sides $7$ and $9$ that form it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the parts",
          "workingLatex": "BD^2 = 130 - 126(0.37461) = 130 - 47.201",
          "explanation": "Using $\\cos 68^\\circ = 0.37461$ and evaluating the product first keeps the subtraction clean.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "State BD squared",
          "workingLatex": "BD^2 = 82.799 \\text{ cm}^2",
          "explanation": "We deliberately keep $BD^2$ rather than rooting it. The next step needs $BD^2$ anyway, so leaving it squared avoids a rounding round-trip.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Record BD for reference",
          "workingLatex": "BD = \\sqrt{82.799} = 9.0994 \\text{ cm}",
          "explanation": "Having the length itself is useful as a check and confirms the diagonal is a believable size for the figure.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Cosine rule rearranged for the angle",
          "workingLatex": "\\cos(\\angle BCD) = \\frac{BC^2 + CD^2 - BD^2}{2 \\cdot BC \\cdot CD}",
          "explanation": "In triangle $BCD$ all three sides are now known, so the cosine rule can be rearranged to give the angle at $C$, which sits opposite the side $BD$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute, keeping BD squared exact",
          "workingLatex": "\\cos(\\angle BCD) = \\frac{6^2 + 11^2 - 82.799}{2(6)(11)}",
          "explanation": "Because we kept $BD^2 = 82.799$, we insert it directly with no accuracy lost from squaring a rounded root.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify the numerator",
          "workingLatex": "\\cos(\\angle BCD) = \\frac{36 + 121 - 82.799}{132} = \\frac{74.201}{132}",
          "explanation": "Combining the top line before dividing keeps the calculation tidy.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the cosine",
          "workingLatex": "\\cos(\\angle BCD) = 0.56213",
          "explanation": "A positive cosine tells us straight away that $\\angle BCD$ is acute, which is a helpful early signal.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Take the inverse cosine",
          "workingLatex": "\\angle BCD = \\arccos(0.56213) = 55.797^\\circ",
          "explanation": "The inverse cosine returns the unique angle between $0^\\circ$ and $180^\\circ$, so there is no ambiguity here.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sanity check the angle",
          "workingLatex": "BD = 9.10 < CD = 11 \\;\\Rightarrow\\; \\angle BCD < \\angle DBC",
          "explanation": "$BD$ is not the longest side of triangle $BCD$, so the angle opposite it should not be the largest. An acute angle near $56^\\circ$ fits comfortably.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 1 decimal place",
          "workingLatex": "\\angle BCD \\approx 55.8^\\circ",
          "explanation": "Angles are rounded to one decimal place as instructed, only at the final stage.",
          "diagram": null
        }
      ],
      "finalAnswer": "$\\angle BCD \\approx 55.8^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "quadrilateral-area",
      "cosine-rule",
      "area"
    ],
    "questionText": "$PQRS$ is a quadrilateral. The diagonal $PR$ splits it into triangles $PQR$ and $PRS$. In triangle $PQR$, $PQ = 12$ cm, $QR = 9$ cm and $\\angle PQR = 78^\\circ$. In triangle $PRS$, $RS = 7$ cm and $\\angle PRS = 60^\\circ$. Find the total area of the quadrilateral $PQRS$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the area as a sum of two triangles",
          "workingLatex": "\\text{Area}(PQRS) = \\text{Area}(PQR) + \\text{Area}(PRS)",
          "explanation": "The diagonal $PR$ cuts the quadrilateral into two triangles, so their areas simply add. Triangle $PQR$ can be tackled at once; triangle $PRS$ needs $PR$, which we will get from the first triangle.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Area of triangle PQR",
          "workingLatex": "\\text{Area}(PQR) = \\tfrac12 \\cdot PQ \\cdot QR \\sin(\\angle PQR)",
          "explanation": "Two sides and the included angle at $Q$ are known, which is exactly what the $\\tfrac12 ab\\sin C$ area formula requires.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute and evaluate",
          "workingLatex": "\\text{Area}(PQR) = \\tfrac12 (12)(9)\\sin(78^\\circ) = 54 \\times 0.97815",
          "explanation": "Multiplying the sides and halving gives $54$, then the sine scales it by how 'open' the angle is.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "First area value",
          "workingLatex": "\\text{Area}(PQR) = 52.820 \\text{ cm}^2",
          "explanation": "We keep the unrounded value so the total at the end is as accurate as possible.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Cosine rule for the diagonal PR",
          "workingLatex": "PR^2 = PQ^2 + QR^2 - 2 \\cdot PQ \\cdot QR \\cos(\\angle PQR)",
          "explanation": "To handle the second triangle we need the shared side $PR$. It is opposite the known angle at $Q$, so the cosine rule delivers it.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Substitute and evaluate",
          "workingLatex": "PR^2 = 144 + 81 - 216\\cos(78^\\circ) = 225 - 44.909",
          "explanation": "With $\\cos 78^\\circ = 0.20791$, the product $216\\cos 78^\\circ = 44.909$ is subtracted from the sum of squares.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for PR",
          "workingLatex": "PR^2 = 180.091 \\Rightarrow PR = 13.4198 \\text{ cm}",
          "explanation": "The positive square root gives the diagonal, which is now a known side of triangle $PRS$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Area of triangle PRS",
          "workingLatex": "\\text{Area}(PRS) = \\tfrac12 \\cdot PR \\cdot RS \\sin(\\angle PRS)",
          "explanation": "In triangle $PRS$ the angle at $R$ is enclosed by the sides $PR$ and $RS$, so the same $\\tfrac12 ab\\sin C$ formula applies.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute and evaluate",
          "workingLatex": "\\text{Area}(PRS) = \\tfrac12 (13.4198)(7)\\sin(60^\\circ) = 46.969 \\times 0.86603",
          "explanation": "Using the unrounded $PR$ keeps this second area accurate; $\\sin 60^\\circ = 0.86603$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Second area value",
          "workingLatex": "\\text{Area}(PRS) = 40.677 \\text{ cm}^2",
          "explanation": "This is the area of the second triangle, ready to add to the first.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the two areas",
          "workingLatex": "\\text{Area}(PQRS) = 52.820 + 40.677 = 93.497 \\text{ cm}^2",
          "explanation": "Summing the pieces gives the whole quadrilateral, since the two triangles fit together edge to edge along $PR$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sanity check the total",
          "workingLatex": "93.5 \\;\\lessapprox\\; 12 \\times 9 = 108",
          "explanation": "The quadrilateral is smaller than the $12$ by $9$ rectangle that would loosely contain triangle $PQR$, so a total near $93.5\\text{ cm}^2$ is reasonable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 significant figures",
          "workingLatex": "\\text{Area}(PQRS) \\approx 93.5 \\text{ cm}^2",
          "explanation": "Rounding only the final total keeps the accumulated accuracy of both triangles.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total area $\\approx 93.5$ cm$^2$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "cevian",
      "cosine-rule"
    ],
    "questionText": "In triangle $ABC$, $AB = 8$ cm, $AC = 6$ cm and $BC = 12$ cm. The point $D$ lies on $BC$ with $BD = 5$ cm, and the line $AD$ (a cevian) is drawn. Find the length $AD$, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan using a sub-triangle",
          "workingLatex": "\\triangle ABC \\Rightarrow \\angle B, \\qquad \\triangle ABD \\Rightarrow AD",
          "explanation": "$AD$ lives inside triangle $ABD$, but we do not yet know an angle there. The whole triangle $ABC$ shares the angle at $B$, so we find $\\angle B$ first, then use it in the smaller triangle $ABD$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cosine rule rearranged for angle B",
          "workingLatex": "\\cos B = \\frac{AB^2 + BC^2 - AC^2}{2 \\cdot AB \\cdot BC}",
          "explanation": "All three sides of triangle $ABC$ are known, so the cosine rule can be rearranged to give the angle at $B$, which sits opposite side $AC$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "\\cos B = \\frac{8^2 + 12^2 - 6^2}{2(8)(12)} = \\frac{172}{192}",
          "explanation": "The side opposite the angle we want, $AC = 6$, is the one subtracted in the numerator.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate cos B",
          "workingLatex": "\\cos B = 0.89583",
          "explanation": "We keep the cosine itself rather than converting to a rounded angle, because the cosine value can be reused exactly in the next cosine rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Note the angle for reference",
          "workingLatex": "B = \\arccos(0.89583) = 26.39^\\circ",
          "explanation": "Knowing $B \\approx 26.4^\\circ$ confirms it is a small, acute angle, consistent with $AC$ being the shortest side.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Cosine rule for AD in triangle ABD",
          "workingLatex": "AD^2 = AB^2 + BD^2 - 2 \\cdot AB \\cdot BD \\cos B",
          "explanation": "In triangle $ABD$ we now know two sides, $AB$ and $BD$, and the angle $B$ between them. $AD$ is opposite that angle, so the cosine rule finds it.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute, using the exact cosine",
          "workingLatex": "AD^2 = 8^2 + 5^2 - 2(8)(5)(0.89583)",
          "explanation": "Inserting $\\cos B = 0.89583$ directly avoids any error from rounding the angle to degrees and back.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate",
          "workingLatex": "AD^2 = 89 - 71.667 = 17.333",
          "explanation": "The subtraction leaves the square of the cevian length.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Solve for AD",
          "workingLatex": "AD = \\sqrt{17.333} = 4.1633 \\text{ cm}",
          "explanation": "The positive square root gives the length of the cevian.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up an independent check via triangle ACD",
          "workingLatex": "\\cos C = \\frac{AC^2 + BC^2 - AB^2}{2 \\cdot AC \\cdot BC} = \\frac{116}{144}",
          "explanation": "To verify, we repeat the idea on the other sub-triangle. First find angle $C$ from the full triangle $ABC$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate cos C",
          "workingLatex": "\\cos C = 0.80556",
          "explanation": "This angle at $C$ is the one enclosed by sides $AC$ and $DC$ in triangle $ACD$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Recompute AD from triangle ACD",
          "workingLatex": "AD^2 = AC^2 + DC^2 - 2 \\cdot AC \\cdot DC \\cos C, \\quad DC = 12 - 5 = 7",
          "explanation": "Since $D$ divides $BC$, the remaining piece is $DC = 7$. Applying the cosine rule in triangle $ACD$ should reproduce the same $AD$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Confirm the match",
          "workingLatex": "AD^2 = 36 + 49 - 84(0.80556) = 85 - 67.667 = 17.333",
          "explanation": "Both sub-triangles give $AD^2 = 17.333$, an exact agreement that confirms the answer is correct.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Round to 3 significant figures",
          "workingLatex": "AD \\approx 4.16 \\text{ cm}",
          "explanation": "The final length is stated to three significant figures as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "$AD \\approx 4.16$ cm."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "triangle-trig",
      "bearings",
      "cosine-rule",
      "sine-rule"
    ],
    "questionText": "A ship sails from port $A$ on a bearing of $060^\\circ$ for $20$ km to point $B$. It then changes course to a bearing of $130^\\circ$ and sails $15$ km to point $C$. (a) Find the distance $AC$, to 3 significant figures. (b) Find the bearing of $C$ from $A$, to the nearest $0.1^\\circ$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the reverse bearing at B",
          "workingLatex": "\\text{Bearing } B \\to A = 060^\\circ + 180^\\circ = 240^\\circ",
          "explanation": "To measure the turn inside the triangle at $B$, we need the direction looking back from $B$ to $A$. A reverse bearing is the outward bearing plus $180^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Work out the interior angle at B",
          "workingLatex": "\\angle ABC = 240^\\circ - 130^\\circ = 110^\\circ",
          "explanation": "At $B$ the ship looks back toward $A$ along $240^\\circ$ and forward toward $C$ along $130^\\circ$. The angle between these two directions is the interior angle of the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Choose the cosine rule for AC",
          "workingLatex": "AC^2 = AB^2 + BC^2 - 2 \\cdot AB \\cdot BC \\cos(\\angle ABC)",
          "explanation": "We know the two legs $AB$ and $BC$ and the angle between them at $B$. $AC$ is opposite that angle, so the cosine rule gives the direct distance.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "AC^2 = 20^2 + 15^2 - 2(20)(15)\\cos(110^\\circ)",
          "explanation": "The two leg lengths sit with the enclosed angle $110^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate, noting the negative cosine",
          "workingLatex": "AC^2 = 625 - 600(-0.34202) = 625 + 205.212",
          "explanation": "Because $110^\\circ$ is obtuse, $\\cos 110^\\circ = -0.34202$ is negative, so subtracting it actually adds to the total. This is why the direct distance is larger than either leg.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Solve for AC",
          "workingLatex": "AC^2 = 830.212 \\Rightarrow AC = 28.8134 \\text{ km}",
          "explanation": "The positive square root gives the straight-line distance from $A$ to $C$. We keep the extra decimals for the bearing calculation.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Set up the sine rule for angle BAC",
          "workingLatex": "\\frac{\\sin(\\angle BAC)}{BC} = \\frac{\\sin(\\angle ABC)}{AC}",
          "explanation": "To get the bearing of $C$ from $A$ we first need the angle at $A$ inside the triangle. With $AC$ known and $BC$ opposite $\\angle BAC$, the sine rule applies.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Rearrange for sin(BAC)",
          "workingLatex": "\\sin(\\angle BAC) = \\frac{BC \\sin(\\angle ABC)}{AC}",
          "explanation": "Isolating the sine of the required angle sets up a single inverse-sine evaluation.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute the values",
          "workingLatex": "\\sin(\\angle BAC) = \\frac{15 \\sin(110^\\circ)}{28.8134} = \\frac{14.095}{28.8134}",
          "explanation": "Using the unrounded $AC$ keeps the angle accurate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the angle at A",
          "workingLatex": "\\sin(\\angle BAC) = 0.48920 \\Rightarrow \\angle BAC = 29.288^\\circ",
          "explanation": "The angle at $A$ must be acute here, because the obtuse angle in the triangle is already used at $B$; a triangle can only have one obtuse angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Combine with the original bearing",
          "workingLatex": "\\text{Bearing } A \\to C = 060^\\circ + 29.288^\\circ",
          "explanation": "The leg $AB$ points on bearing $060^\\circ$. The line $AC$ lies a further $29.288^\\circ$ round (clockwise, toward the second leg), so we add the angle at $A$ to the first bearing.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Compute the bearing",
          "workingLatex": "\\text{Bearing } A \\to C = 089.288^\\circ",
          "explanation": "This is the compass direction from $A$ straight to $C$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sanity check both results",
          "workingLatex": "20, 15 < AC = 28.8; \\quad 089^\\circ \\text{ lies between } 060^\\circ \\text{ and } 130^\\circ",
          "explanation": "The direct distance exceeds both legs (expected with an obtuse turn), and the bearing of $C$ sensibly falls between the two sailing directions. Both pass the common-sense test.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the rounded answers",
          "workingLatex": "AC \\approx 28.8 \\text{ km}, \\quad \\text{bearing} \\approx 089.3^\\circ",
          "explanation": "Rounding the distance to three significant figures and the bearing to the nearest $0.1^\\circ$ completes the problem.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $AC \\approx 28.8$ km. (b) The bearing of $C$ from $A$ is $\\approx 089.3^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "ambiguous-case",
      "sine-rule",
      "area"
    ],
    "questionText": "In triangle $ABC$, $\\angle A = 35^\\circ$, side $a = BC = 6$ cm and side $b = AC = 9$ cm. Two different triangles satisfy this information. Find both possible triangles and, for each, find the area to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recognise the ambiguous case",
          "workingLatex": "\\text{Given } A, a, b \\text{ with } a \\text{ opposite } A \\;\\Rightarrow\\; \\text{SSA}",
          "explanation": "We are given two sides and an angle that is not between them (the angle faces the shorter given side). This 'side-side-angle' setup can produce two valid triangles, so we must check for both.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Test that two triangles exist",
          "workingLatex": "b \\sin A = 9 \\sin 35^\\circ = 5.162, \\quad 5.162 < a = 6 < b = 9",
          "explanation": "The shortest possible opposite side is $b\\sin A$. Since $a$ is larger than this but smaller than $b$, the side $a$ can 'swing' to meet the base in two places, giving two triangles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Sine rule for angle B",
          "workingLatex": "\\frac{\\sin B}{b} = \\frac{\\sin A}{a}",
          "explanation": "Pairing each side with its opposite angle lets us find $\\angle B$, the angle opposite the given side $b$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Solve for sin B",
          "workingLatex": "\\sin B = \\frac{b \\sin A}{a} = \\frac{9 \\sin 35^\\circ}{6} = 0.86036",
          "explanation": "This single sine value is the source of the ambiguity, because two different angles between $0^\\circ$ and $180^\\circ$ share it.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find both angles B",
          "workingLatex": "B_1 = 59.358^\\circ \\quad \\text{or} \\quad B_2 = 180^\\circ - 59.358^\\circ = 120.642^\\circ",
          "explanation": "The inverse sine gives the acute angle; its supplement has the same sine, giving the second possibility.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Check both are geometrically valid",
          "workingLatex": "A + B_2 = 35^\\circ + 120.642^\\circ = 155.642^\\circ < 180^\\circ",
          "explanation": "A triangle is only possible if the two known angles sum to less than $180^\\circ$. Both cases pass, confirming two genuine triangles.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Triangle 1: find angle C",
          "workingLatex": "C_1 = 180^\\circ - 35^\\circ - 59.358^\\circ = 85.642^\\circ",
          "explanation": "In the first triangle, the angle sum gives the remaining angle at $C$, the angle enclosed between the given sides $a$ and $b$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Triangle 1: area formula",
          "workingLatex": "\\text{Area}_1 = \\tfrac12 ab \\sin C_1 = \\tfrac12 (6)(9)\\sin(85.642^\\circ)",
          "explanation": "Sides $a$ and $b$ enclose angle $C$, so $\\tfrac12 ab\\sin C$ gives the area directly without needing the third side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Triangle 1: evaluate",
          "workingLatex": "\\text{Area}_1 = 27 \\times 0.99719 = 26.922 \\text{ cm}^2",
          "explanation": "With $C_1$ close to a right angle, the sine is near $1$, so this triangle is close to its maximum possible area.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Triangle 2: find angle C",
          "workingLatex": "C_2 = 180^\\circ - 35^\\circ - 120.642^\\circ = 24.358^\\circ",
          "explanation": "Using the obtuse $B_2$ leaves a much smaller angle at $C$, which will shrink the area.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Triangle 2: area formula",
          "workingLatex": "\\text{Area}_2 = \\tfrac12 ab \\sin C_2 = \\tfrac12 (6)(9)\\sin(24.358^\\circ)",
          "explanation": "The same two given sides enclose the new, smaller angle $C_2$, so the same area formula applies.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Triangle 2: evaluate",
          "workingLatex": "\\text{Area}_2 = 27 \\times 0.41244 = 11.136 \\text{ cm}^2",
          "explanation": "The narrow angle at $C$ makes this triangle much flatter and therefore smaller in area.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sanity check the two areas",
          "workingLatex": "\\text{Area}_{\\max} = \\tfrac12(6)(9) = 27, \\quad 26.9 < 27, \\; 11.1 < 27",
          "explanation": "The largest area two sides of $6$ and $9$ could ever enclose is $27\\text{ cm}^2$ (at $90^\\circ$). Both answers lie below this ceiling, as they must.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State both rounded areas",
          "workingLatex": "\\text{Area}_1 \\approx 26.9, \\quad \\text{Area}_2 \\approx 11.1 \\;(\\text{cm}^2)",
          "explanation": "Each area is rounded to three significant figures, giving the two distinct solutions of this ambiguous case.",
          "diagram": null
        }
      ],
      "finalAnswer": "Triangle 1: $\\angle B \\approx 59.4^\\circ$, area $\\approx 26.9$ cm$^2$. Triangle 2: $\\angle B \\approx 120.6^\\circ$, area $\\approx 11.1$ cm$^2$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "area"
    ],
    "questionText": "A triangle has sides of length $7$ cm, $9$ cm and $12$ cm. Find its area, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan: angle first, then area",
          "workingLatex": "\\text{3 sides} \\;\\rightarrow\\; \\text{cosine rule for an angle} \\;\\rightarrow\\; \\tfrac12 ab\\sin C",
          "explanation": "The $\\tfrac12 ab\\sin C$ area formula needs an included angle, but we are only given sides. So we first extract one angle with the cosine rule, then use it for the area.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Label the sides",
          "workingLatex": "a = 7, \\quad b = 9, \\quad c = 12",
          "explanation": "We let $C$ be the angle opposite the longest side $c = 12$. Choosing the largest angle first is a good habit because it is the one most likely to be obtuse.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Cosine rule rearranged for cos C",
          "workingLatex": "\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}",
          "explanation": "With all three sides known, the cosine rule can be rearranged to give the angle opposite side $c$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "\\cos C = \\frac{7^2 + 9^2 - 12^2}{2(7)(9)} = \\frac{49 + 81 - 144}{126}",
          "explanation": "The longest side, $12$, is squared and subtracted, which is what can push the result negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate cos C",
          "workingLatex": "\\cos C = \\frac{-14}{126} = -0.11111",
          "explanation": "A negative cosine confirms the angle is obtuse, which makes sense because $12$ is close to $7 + 9 = 16$, so the triangle is quite 'open'.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find angle C",
          "workingLatex": "C = \\arccos(-0.11111) = 96.379^\\circ",
          "explanation": "The inverse cosine returns the obtuse angle directly, with no ambiguity.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Area formula with the included angle",
          "workingLatex": "\\text{Area} = \\tfrac12 ab \\sin C",
          "explanation": "Sides $a$ and $b$ are the two that meet at the angle $C$ we just found, so they enclose it and the formula applies.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Substitute the values",
          "workingLatex": "\\text{Area} = \\tfrac12 (7)(9)\\sin(96.379^\\circ)",
          "explanation": "We keep the unrounded angle so the sine is as accurate as possible.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate",
          "workingLatex": "\\text{Area} = 31.5 \\times 0.99381 = 31.305 \\text{ cm}^2",
          "explanation": "The sine of an angle just past $90^\\circ$ is near $1$, so the area is close to $\\tfrac12(7)(9) = 31.5$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify using Heron's formula",
          "workingLatex": "s = \\tfrac12(7 + 9 + 12) = 14",
          "explanation": "A completely independent check uses Heron's formula, which relies only on the three sides and so cannot inherit any error from our angle.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Apply Heron's formula",
          "workingLatex": "\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{14 \\cdot 7 \\cdot 5 \\cdot 2}",
          "explanation": "Substituting $s - a = 7$, $s - b = 5$, $s - c = 2$ gives the product under the root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Confirm the match",
          "workingLatex": "\\sqrt{980} = 31.305 \\text{ cm}^2",
          "explanation": "Heron gives exactly the same area, confirming both the angle and the arithmetic are correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Round to 3 significant figures",
          "workingLatex": "\\text{Area} \\approx 31.3 \\text{ cm}^2",
          "explanation": "The two methods agree, so we confidently round to three significant figures for the final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "Area $\\approx 31.3$ cm$^2$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "triangle-trig",
      "kite",
      "area"
    ],
    "questionText": "$ABCD$ is a kite in which $AB = AD = 12$ cm and $CB = CD = 7$ cm. The angle $\\angle BAD = 48^\\circ$. Find (a) the length of the diagonal $BD$, to 3 significant figures, and (b) the total area of the kite, to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan around the shared diagonal",
          "workingLatex": "BD \\text{ shared by } \\triangle ABD \\text{ and } \\triangle CBD",
          "explanation": "The diagonal $BD$ splits the kite into two triangles. It can be found from triangle $ABD$, where we know both equal sides and the angle between them, and then it feeds into triangle $CBD$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Cosine rule for BD in triangle ABD",
          "workingLatex": "BD^2 = AB^2 + AD^2 - 2 \\cdot AB \\cdot AD \\cos(\\angle BAD)",
          "explanation": "Triangle $ABD$ is isosceles with the apex angle $48^\\circ$ known and the two equal sides enclosing it, so the cosine rule finds the base $BD$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the values",
          "workingLatex": "BD^2 = 12^2 + 12^2 - 2(12)(12)\\cos(48^\\circ)",
          "explanation": "Both enclosing sides are $12$, so the expression simplifies to $288(1 - \\cos 48^\\circ)$ if desired.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate",
          "workingLatex": "BD^2 = 288 - 288(0.66913) = 95.291",
          "explanation": "Using $\\cos 48^\\circ = 0.66913$ gives the square of the diagonal.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for BD",
          "workingLatex": "BD = \\sqrt{95.291} = 9.7617 \\text{ cm}",
          "explanation": "The positive square root gives the diagonal length; we keep decimals for the area work.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Area of triangle ABD",
          "workingLatex": "\\text{Area}(ABD) = \\tfrac12 \\cdot AB \\cdot AD \\sin(\\angle BAD)",
          "explanation": "Two sides and the included angle at $A$ are known, so the $\\tfrac12 ab\\sin C$ formula gives this triangle's area directly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the first area",
          "workingLatex": "\\text{Area}(ABD) = \\tfrac12 (12)(12)\\sin(48^\\circ) = 72 \\times 0.74314 = 53.506 \\text{ cm}^2",
          "explanation": "This is the area of the upper triangle of the kite.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Cosine rule for the angle at C",
          "workingLatex": "\\cos(\\angle BCD) = \\frac{CB^2 + CD^2 - BD^2}{2 \\cdot CB \\cdot CD}",
          "explanation": "In triangle $CBD$ all three sides are now known, so we find the apex angle at $C$ to enable its area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute and evaluate",
          "workingLatex": "\\cos(\\angle BCD) = \\frac{49 + 49 - 95.291}{2(7)(7)} = \\frac{2.709}{98} = 0.027643",
          "explanation": "Keeping $BD^2 = 95.291$ exact avoids any loss from rooting and re-squaring.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Find the angle at C",
          "workingLatex": "\\angle BCD = \\arccos(0.027643) = 88.416^\\circ",
          "explanation": "The angle is close to a right angle, which is reasonable given $BD$ is nearly as long as $CB + $ a bit at this narrower vertex.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Area of triangle CBD",
          "workingLatex": "\\text{Area}(CBD) = \\tfrac12 \\cdot CB \\cdot CD \\sin(\\angle BCD)",
          "explanation": "Sides $CB$ and $CD$ enclose the angle at $C$, so the same area formula applies to the lower triangle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Evaluate the second area",
          "workingLatex": "\\text{Area}(CBD) = \\tfrac12 (7)(7)\\sin(88.416^\\circ) = 24.5 \\times 0.99962 = 24.491 \\text{ cm}^2",
          "explanation": "With the angle near $90^\\circ$, this triangle is close to its maximum area of $24.5\\text{ cm}^2$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add the two areas",
          "workingLatex": "\\text{Area}(ABCD) = 53.506 + 24.491 = 77.997 \\text{ cm}^2",
          "explanation": "The two triangles tile the kite exactly along $BD$, so their areas sum to the whole figure.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sanity check",
          "workingLatex": "\\text{Area} = \\tfrac12 d_1 d_2 \\text{ check: } \\tfrac12 (9.7617)(15.9797) \\approx 78.0",
          "explanation": "A kite's area also equals half the product of its diagonals. The long diagonal $AC$ works out near $15.98\\text{ cm}$, and this shortcut reproduces $78.0\\text{ cm}^2$, confirming the result.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the rounded answers",
          "workingLatex": "BD \\approx 9.76 \\text{ cm}, \\quad \\text{Area} \\approx 78.0 \\text{ cm}^2",
          "explanation": "Both the diagonal and the total area are given to three significant figures as required.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $BD \\approx 9.76$ cm. (b) Total area $\\approx 78.0$ cm$^2$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "description",
    "tags": [
      "triangle-trig",
      "altitude",
      "sine-rule"
    ],
    "questionText": "In triangle $ABC$, $\\angle B = 58^\\circ$, $\\angle C = 44^\\circ$ and $AB = 11$ cm. The perpendicular from $A$ meets $BC$ at the point $H$. Find (a) the length of the altitude $AH$, to 3 significant figures, and (b) the area of triangle $ABC$, to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the third angle",
          "workingLatex": "\\angle A = 180^\\circ - 58^\\circ - 44^\\circ = 78^\\circ",
          "explanation": "Knowing all three angles will let us use the sine rule for a side; the angle sum gives the one at $A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use right-angle trig for the altitude",
          "workingLatex": "\\text{In right triangle } ABH: \\quad AH = AB \\sin B",
          "explanation": "The perpendicular $AH$ creates a right angle at $H$. In right triangle $ABH$, $AH$ is the side opposite the angle $B$, and $AB$ is the hypotenuse, so $AH = AB\\sin B$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute and evaluate the altitude",
          "workingLatex": "AH = 11 \\sin(58^\\circ) = 11 \\times 0.84805 = 9.3285 \\text{ cm}",
          "explanation": "This is the height of the triangle measured from $A$ straight down to the base $BC$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Note the foot position for context",
          "workingLatex": "BH = AB \\cos B = 11 \\times 0.52992 = 5.8291 \\text{ cm}",
          "explanation": "The adjacent side $BH$ locates the foot of the altitude along $BC$. It is not strictly needed for the area but confirms the geometry is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Choose the sine rule for the base BC",
          "workingLatex": "\\frac{BC}{\\sin A} = \\frac{AB}{\\sin C}",
          "explanation": "For the area we need the base $BC$. It lies opposite the angle $A$, while the known side $AB$ lies opposite $C$, so the sine rule links them.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for BC",
          "workingLatex": "BC = \\frac{AB \\sin A}{\\sin C}",
          "explanation": "Multiplying through by $\\sin A$ isolates the base length.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute and evaluate",
          "workingLatex": "BC = \\frac{11 \\sin(78^\\circ)}{\\sin(44^\\circ)} = \\frac{10.760}{0.69466} = 15.489 \\text{ cm}",
          "explanation": "This is the full length of the base along which the altitude stands.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Area from base and height",
          "workingLatex": "\\text{Area} = \\tfrac12 \\cdot BC \\cdot AH",
          "explanation": "With a base and its perpendicular height both known, the classic $\\tfrac12 \\times \\text{base} \\times \\text{height}$ gives the area, combining the right-angle result with the sine-rule result.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Substitute and evaluate",
          "workingLatex": "\\text{Area} = \\tfrac12 (15.489)(9.3285) = 72.245 \\text{ cm}^2",
          "explanation": "Using the unrounded base and height keeps the area accurate.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Verify with the sine area formula",
          "workingLatex": "\\text{Area} = \\tfrac12 \\cdot AB \\cdot BC \\sin B = \\tfrac12 (11)(15.489)\\sin(58^\\circ)",
          "explanation": "An independent check uses two sides and the included angle at $B$, which does not rely on the altitude at all.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Confirm the match",
          "workingLatex": "\\text{Area} = 72.245 \\text{ cm}^2",
          "explanation": "Both routes give the same area, confirming the height and base are correct.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sanity check the height",
          "workingLatex": "AH = 9.33 < AB = 11",
          "explanation": "The altitude must be shorter than the slant side $AB$ from which it drops, and it is, so the geometry is sound.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the rounded answers",
          "workingLatex": "AH \\approx 9.33 \\text{ cm}, \\quad \\text{Area} \\approx 72.2 \\text{ cm}^2",
          "explanation": "Both quantities are rounded to three significant figures for the final answer.",
          "diagram": null
        }
      ],
      "finalAnswer": "(a) $AH \\approx 9.33$ cm. (b) Area $\\approx 72.2$ cm$^2$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "elevation",
      "sine-rule"
    ],
    "questionText": "Two observers $A$ and $B$ stand on level ground $50$ m apart, with $B$ between $A$ and the foot $T$ of a vertical tower. The angle of elevation of the top $P$ of the tower is $26^\\circ$ from $A$ and $40^\\circ$ from $B$. Find the height of the tower, giving your answer to 3 significant figures.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Plan the two-stage method",
          "workingLatex": "\\triangle ABP \\;(\\text{sine rule}) \\;\\rightarrow\\; BP \\;\\rightarrow\\; PT = BP \\sin 40^\\circ",
          "explanation": "We work in the slant triangle $ABP$ formed by the two observers and the tower top. Finding the slant distance $BP$ by the sine rule, then dropping to right-angle trig, gives the vertical height $PT$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Angle at A in triangle ABP",
          "workingLatex": "\\angle PAB = 26^\\circ",
          "explanation": "Because $A$, $B$ and $T$ lie in a straight line on the ground, the line $AB$ points along the horizontal from $A$. So the angle between $AB$ and the line of sight $AP$ is just the elevation, $26^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Angle at B in triangle ABP",
          "workingLatex": "\\angle PBA = 180^\\circ - 40^\\circ = 140^\\circ",
          "explanation": "At $B$ the elevation of $P$ above the ground (toward $T$) is $40^\\circ$. But inside triangle $ABP$ we need the angle on the other side, back toward $A$, which is the supplement of $40^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Third angle of the triangle",
          "workingLatex": "\\angle APB = 180^\\circ - 26^\\circ - 140^\\circ = 14^\\circ",
          "explanation": "The angle sum of triangle $ABP$ gives the angle at $P$. This small angle sits opposite the known baseline $AB$, which is the key to the sine rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Sine rule for the slant distance BP",
          "workingLatex": "\\frac{BP}{\\sin(\\angle PAB)} = \\frac{AB}{\\sin(\\angle APB)}",
          "explanation": "$BP$ lies opposite the angle at $A$, and the known baseline $AB$ lies opposite the angle at $P$. Pairing opposite sides and angles gives the sine rule.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Rearrange for BP",
          "workingLatex": "BP = \\frac{AB \\sin(26^\\circ)}{\\sin(14^\\circ)}",
          "explanation": "Isolating $BP$ leaves a single division to evaluate.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Substitute the values",
          "workingLatex": "BP = \\frac{50 \\sin(26^\\circ)}{\\sin(14^\\circ)} = \\frac{50 \\times 0.43837}{0.24192}",
          "explanation": "The small angle $14^\\circ$ in the denominator makes $BP$ noticeably larger than the $50\\text{ m}$ baseline.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate BP",
          "workingLatex": "BP = \\frac{21.919}{0.24192} = 90.602 \\text{ m}",
          "explanation": "This is the slant distance from observer $B$ up to the top of the tower. We keep it unrounded for the height step.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Drop to right-angle trig for the height",
          "workingLatex": "PT = BP \\sin(40^\\circ)",
          "explanation": "In the right triangle $BPT$ (right angle at the foot $T$), the height $PT$ is opposite the $40^\\circ$ elevation and $BP$ is the hypotenuse, so $PT = BP\\sin 40^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the height",
          "workingLatex": "PT = 90.602 \\times 0.64279 = 58.238 \\text{ m}",
          "explanation": "This is the vertical height of the tower above the ground.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Verify with a direct relation",
          "workingLatex": "h(\\cot 26^\\circ - \\cot 40^\\circ) = AB",
          "explanation": "An independent check: the horizontal distances are $h\\cot 26^\\circ$ from $A$ and $h\\cot 40^\\circ$ from $B$, and their difference is the baseline $50\\text{ m}$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve the check",
          "workingLatex": "h = \\frac{50}{2.0503 - 1.1918} = \\frac{50}{0.85855} = 58.238 \\text{ m}",
          "explanation": "This shortcut reproduces exactly the same height, confirming the sine-rule route was correct.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sanity check the size",
          "workingLatex": "58.2 > AB = 50, \\quad \\text{elevation grows } 26^\\circ \\to 40^\\circ",
          "explanation": "The tower is taller than the baseline, and the elevation rightly increases as the observer moves closer, so the answer is physically sensible.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Round to 3 significant figures",
          "workingLatex": "h \\approx 58.2 \\text{ m}",
          "explanation": "Rounding only the final height keeps the full accuracy of the calculation.",
          "diagram": null
        }
      ],
      "finalAnswer": "The height of the tower is $\\approx 58.2$ m."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q061",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "value",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "quadratic"
    ],
    "questionText": "In triangle $ABC$, $AB = x\\text{ cm}$, $AC = (x-3)\\text{ cm}$ and the included angle $A = 60^\\circ$. The side $BC = 7\\text{ cm}$. Find the value of $x$, and hence the exact area of the triangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known information",
          "workingLatex": "AB = x,\\quad AC = x-3,\\quad \\angle A = 60^\\circ,\\quad BC = 7",
          "explanation": "The side $BC$ sits opposite the known angle $A$, while $AB$ and $AC$ are the two sides that enclose $A$. That is exactly the arrangement the cosine rule connects.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the cosine rule",
          "workingLatex": "BC^2 = AB^2 + AC^2 - 2\\,AB\\cdot AC\\cos A",
          "explanation": "The cosine rule relates the side opposite an angle to the other two sides and that angle, which lets us build an equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the expressions",
          "workingLatex": "7^2 = x^2 + (x-3)^2 - 2x(x-3)\\cos 60^\\circ",
          "explanation": "Putting the algebraic sides straight into the rule turns a geometric fact into an algebra problem we can solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the exact cosine",
          "workingLatex": "\\cos 60^\\circ = \\tfrac12",
          "explanation": "Because $60^\\circ$ is a standard angle its cosine is exactly one half, which keeps every later line free of decimals.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Insert the value",
          "workingLatex": "49 = x^2 + (x-3)^2 - 2x(x-3)\\cdot\\tfrac12",
          "explanation": "Replacing the cosine and evaluating $7^2$ gives a single equation whose only unknown is $x$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the product term",
          "workingLatex": "2x(x-3)\\cdot\\tfrac12 = x(x-3) = x^2 - 3x",
          "explanation": "The factor of $2$ and the $\\tfrac12$ cancel, so the messy middle term collapses to a simple quadratic expression.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the square",
          "workingLatex": "(x-3)^2 = x^2 - 6x + 9",
          "explanation": "Expanding lets us gather all the $x^2$, $x$ and constant terms together in the next line.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine everything",
          "workingLatex": "49 = x^2 + x^2 - 6x + 9 - (x^2 - 3x)",
          "explanation": "Substituting both simplified pieces back gathers the whole right-hand side ready to be tidied.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect like terms",
          "workingLatex": "49 = x^2 - 3x + 9",
          "explanation": "Two of the three $x^2$ terms survive as one, and the $x$ terms combine, leaving a neat quadratic on the right.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange to standard form",
          "workingLatex": "x^2 - 3x - 40 = 0",
          "explanation": "Bringing everything to one side gives the familiar $ax^2+bx+c=0$ shape that we can factorise.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise",
          "workingLatex": "(x-8)(x+5) = 0",
          "explanation": "We need two numbers multiplying to $-40$ and adding to $-3$; those are $-8$ and $+5$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Read off the roots",
          "workingLatex": "x = 8 \\quad\\text{or}\\quad x = -5",
          "explanation": "Setting each bracket to zero gives the two candidate values for $x$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Reject the invalid root",
          "workingLatex": "x = 8",
          "explanation": "A length cannot be negative, and $x=-5$ would make both $AB$ and $AC$ negative, so only $x=8$ is a genuine triangle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the sides",
          "workingLatex": "AB = 8,\\quad AC = 5,\\quad BC = 7",
          "explanation": "The three lengths are all positive and satisfy the triangle inequality since $5+7>8$, so the triangle is valid.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify with the cosine rule",
          "workingLatex": "8^2 + 5^2 - 2\\cdot 8\\cdot 5\\cdot\\tfrac12 = 64 + 25 - 40 = 49 = 7^2",
          "explanation": "Feeding the found sides back into the cosine rule reproduces $BC=7$, confirming the solution is consistent.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Find the exact area",
          "workingLatex": "\\text{Area} = \\tfrac12\\cdot 8\\cdot 5\\sin 60^\\circ = 20\\cdot\\tfrac{\\sqrt3}{2} = 10\\sqrt3",
          "explanation": "With both enclosing sides and the included angle known, the $\\tfrac12 ab\\sin C$ formula gives the area exactly using $\\sin 60^\\circ=\\tfrac{\\sqrt3}{2}$.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 8$, so the sides are $8\\text{ cm}$, $5\\text{ cm}$ and $7\\text{ cm}$, and the triangle has exact area $10\\sqrt3\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q062",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "exact-values"
    ],
    "questionText": "In triangle $PQR$, the sides $PQ = 6\\text{ cm}$ and $PR = 10\\text{ cm}$ enclose an angle $P = 60^\\circ$. Find the exact length of $QR$ and the exact area of the triangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify the data",
          "workingLatex": "PQ = 6,\\quad PR = 10,\\quad \\angle P = 60^\\circ",
          "explanation": "We know two sides and the angle trapped between them, so the unknown third side $QR$ is exactly what the cosine rule finds.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the cosine rule for $QR$",
          "workingLatex": "QR^2 = PQ^2 + PR^2 - 2\\,PQ\\cdot PR\\cos P",
          "explanation": "$QR$ is opposite the known angle $P$, so it plays the role of the side on the left of the cosine rule.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the numbers",
          "workingLatex": "QR^2 = 6^2 + 10^2 - 2\\cdot 6\\cdot 10\\cos 60^\\circ",
          "explanation": "Placing the two sides and the angle into the rule sets up a single arithmetic line for $QR^2$.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the exact cosine",
          "workingLatex": "\\cos 60^\\circ = \\tfrac12",
          "explanation": "Keeping $\\cos 60^\\circ$ as the exact fraction $\\tfrac12$ ensures the final surd is exact rather than rounded.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Insert the value",
          "workingLatex": "QR^2 = 36 + 100 - 120\\cdot\\tfrac12",
          "explanation": "Evaluating the squares and the product $2\\cdot6\\cdot10=120$ leaves a simple subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify",
          "workingLatex": "QR^2 = 136 - 60 = 76",
          "explanation": "Combining the terms gives the exact value of $QR^2$ as a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Take the square root",
          "workingLatex": "QR = \\sqrt{76}",
          "explanation": "The side length is the positive square root, which we now simplify into surd form.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Simplify the surd",
          "workingLatex": "\\sqrt{76} = \\sqrt{4\\cdot 19} = 2\\sqrt{19}",
          "explanation": "Splitting out the perfect-square factor $4$ pulls a $2$ outside the root, giving the tidiest exact form.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the length",
          "workingLatex": "QR = 2\\sqrt{19}\\text{ cm}",
          "explanation": "This is the exact third side; no rounding is needed.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Write the area formula",
          "workingLatex": "\\text{Area} = \\tfrac12\\,PQ\\cdot PR\\sin P",
          "explanation": "With two sides and their included angle, the $\\tfrac12 ab\\sin C$ formula gives the area directly.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the exact sine",
          "workingLatex": "\\sin 60^\\circ = \\tfrac{\\sqrt3}{2}",
          "explanation": "As with the cosine, using the exact value of $\\sin 60^\\circ$ keeps the area exact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "\\text{Area} = \\tfrac12\\cdot 6\\cdot 10\\cdot\\tfrac{\\sqrt3}{2}",
          "explanation": "Inserting both sides and the exact sine sets up the final simplification.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the area",
          "workingLatex": "\\text{Area} = 30\\cdot\\tfrac{\\sqrt3}{2} = 15\\sqrt3",
          "explanation": "Since $\\tfrac12\\cdot6\\cdot10=30$, multiplying by $\\tfrac{\\sqrt3}{2}$ gives the exact area $15\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sanity check the side",
          "workingLatex": "2\\sqrt{19}\\approx 8.72,\\qquad |10-6| = 4 < 8.72 < 16 = 10+6",
          "explanation": "The third side lies between the difference and sum of the other two, so the triangle inequality holds and the answer is believable.",
          "diagram": null
        }
      ],
      "finalAnswer": "$QR = 2\\sqrt{19}\\text{ cm}$ (about $8.72\\text{ cm}$) and the exact area is $15\\sqrt3\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q063",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "area-formula",
      "cosine-rule"
    ],
    "questionText": "In triangle $ABC$, the sides $CA = 15\\text{ cm}$ and $CB$ enclose an angle $C = 60^\\circ$. The area of the triangle is $30\\sqrt3\\text{ cm}^2$. Find the length $CB$, the length of the third side $AB$, and the perimeter of the triangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "\\angle C = 60^\\circ,\\quad CA = 15,\\quad \\text{Area} = 30\\sqrt3",
          "explanation": "The area involves the two sides around angle $C$, one of which ($CB$) is unknown, so the area formula gives an equation for it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area formula",
          "workingLatex": "\\text{Area} = \\tfrac12\\,CA\\cdot CB\\sin C",
          "explanation": "The $\\tfrac12 ab\\sin C$ formula uses the two sides enclosing the angle, which is exactly the pair $CA$ and $CB$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known values",
          "workingLatex": "30\\sqrt3 = \\tfrac12\\cdot 15\\cdot CB\\cdot\\sin 60^\\circ",
          "explanation": "Putting in the area and the known side leaves a single equation with $CB$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the exact sine",
          "workingLatex": "\\sin 60^\\circ = \\tfrac{\\sqrt3}{2}",
          "explanation": "The exact value keeps the surds matched on both sides so they cancel cleanly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Insert the value",
          "workingLatex": "30\\sqrt3 = \\tfrac12\\cdot 15\\cdot CB\\cdot\\tfrac{\\sqrt3}{2}",
          "explanation": "Now every constant is explicit and we can gather the numerical coefficient of $CB$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the coefficient",
          "workingLatex": "30\\sqrt3 = \\tfrac{15\\sqrt3}{4}\\,CB",
          "explanation": "Multiplying $\\tfrac12\\cdot15\\cdot\\tfrac{\\sqrt3}{2}$ gives $\\tfrac{15\\sqrt3}{4}$ as the factor in front of $CB$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Solve for $CB$",
          "workingLatex": "CB = \\frac{30\\sqrt3\\times 4}{15\\sqrt3} = \\frac{120\\sqrt3}{15\\sqrt3} = 8",
          "explanation": "The $\\sqrt3$ factors cancel top and bottom, leaving a clean whole-number length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the second side",
          "workingLatex": "CB = 8\\text{ cm}",
          "explanation": "This is the unknown side that produces the required area.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Set up the cosine rule for $AB$",
          "workingLatex": "AB^2 = CA^2 + CB^2 - 2\\,CA\\cdot CB\\cos C",
          "explanation": "The third side $AB$ is opposite angle $C$, so the cosine rule finds it now that both enclosing sides are known.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Substitute",
          "workingLatex": "AB^2 = 15^2 + 8^2 - 2\\cdot 15\\cdot 8\\cos 60^\\circ",
          "explanation": "Placing the two sides and the angle into the rule gives an arithmetic expression for $AB^2$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the exact cosine",
          "workingLatex": "\\cos 60^\\circ = \\tfrac12",
          "explanation": "The standard exact value again removes any need for a calculator.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Insert the value",
          "workingLatex": "AB^2 = 225 + 64 - 240\\cdot\\tfrac12",
          "explanation": "Evaluating the squares and $2\\cdot15\\cdot8=240$ leaves a simple subtraction.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify",
          "workingLatex": "AB^2 = 289 - 120 = 169",
          "explanation": "Combining the terms gives a perfect square, which promises a whole-number side.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Take the root",
          "workingLatex": "AB = \\sqrt{169} = 13",
          "explanation": "The positive root gives the exact third side.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the perimeter",
          "workingLatex": "P = 15 + 8 + 13 = 36",
          "explanation": "Adding the three sides gives the total distance around the triangle.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Verify the area",
          "workingLatex": "\\tfrac12\\cdot 15\\cdot 8\\cdot\\tfrac{\\sqrt3}{2} = 60\\cdot\\tfrac{\\sqrt3}{2}? = 30\\sqrt3\\ \\checkmark",
          "explanation": "Recomputing the area with $CB=8$ returns the given $30\\sqrt3$, confirming the whole solution is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$CB = 8\\text{ cm}$, the third side $AB = 13\\text{ cm}$, and the perimeter is $36\\text{ cm}$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q064",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 6,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "proof"
    ],
    "questionText": "A triangle has sides of length $3\\text{ cm}$, $5\\text{ cm}$ and $7\\text{ cm}$. Show that its largest angle is exactly $120^\\circ$, and find the exact area of the triangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Locate the largest angle",
          "workingLatex": "\\text{Sides } 3,\\,5,\\,7;\\quad \\text{longest side} = 7",
          "explanation": "In any triangle the biggest angle sits opposite the longest side, so the angle we want faces the side of length $7$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Name the target angle",
          "workingLatex": "\\text{Let }\\theta\\text{ be the angle opposite the side } 7",
          "explanation": "Giving the angle a symbol lets us apply the cosine rule in its angle-finding form.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Rearrange the cosine rule for the angle",
          "workingLatex": "\\cos\\theta = \\frac{3^2 + 5^2 - 7^2}{2\\cdot 3\\cdot 5}",
          "explanation": "When all three sides are known, rearranging the cosine rule isolates $\\cos\\theta$ using the two sides that meet at the angle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the numerator",
          "workingLatex": "3^2 + 5^2 - 7^2 = 9 + 25 - 49 = -15",
          "explanation": "A negative numerator already signals an obtuse angle, which is what we expect for the largest angle here.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the denominator",
          "workingLatex": "2\\cdot 3\\cdot 5 = 30",
          "explanation": "This is twice the product of the two sides that enclose $\\theta$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Simplify the fraction",
          "workingLatex": "\\cos\\theta = \\frac{-15}{30} = -\\tfrac12",
          "explanation": "The ratio reduces exactly to $-\\tfrac12$, a value tied to a well-known angle.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Identify the exact angle",
          "workingLatex": "\\cos\\theta = -\\tfrac12 \\;\\Rightarrow\\; \\theta = 120^\\circ",
          "explanation": "The only angle between $0^\\circ$ and $180^\\circ$ with cosine $-\\tfrac12$ is $120^\\circ$, so the result is exact, not approximate.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the conclusion",
          "workingLatex": "\\theta = 120^\\circ",
          "explanation": "This proves the required result: the largest angle really is exactly $120^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Check it is the largest",
          "workingLatex": "120^\\circ > 90^\\circ \\text{ (obtuse), so the other two angles are acute}",
          "explanation": "Only one angle of a triangle can be obtuse, so an obtuse angle is automatically the largest, which fits it being opposite the longest side.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the area",
          "workingLatex": "\\text{Area} = \\tfrac12\\cdot 3\\cdot 5\\sin 120^\\circ",
          "explanation": "Using the two shorter sides and their included angle $\\theta=120^\\circ$, the $\\tfrac12 ab\\sin C$ formula gives the area.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the exact sine",
          "workingLatex": "\\sin 120^\\circ = \\tfrac{\\sqrt3}{2}",
          "explanation": "Since $120^\\circ$ is a standard angle, its sine is exactly $\\tfrac{\\sqrt3}{2}$, keeping the area exact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute",
          "workingLatex": "\\text{Area} = \\tfrac12\\cdot 3\\cdot 5\\cdot\\tfrac{\\sqrt3}{2}",
          "explanation": "Inserting the exact sine sets up the final simplification.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Simplify the area",
          "workingLatex": "= \\tfrac{15}{2}\\cdot\\tfrac{\\sqrt3}{2} = \\tfrac{15\\sqrt3}{4}",
          "explanation": "Multiplying the fractions gives the exact area in surd form.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Verify the remaining angles",
          "workingLatex": "\\sin A = \\tfrac{3\\sin 120^\\circ}{7} = \\tfrac{3\\sqrt3}{14}\\Rightarrow A\\approx 21.8^\\circ,\\; B\\approx 38.2^\\circ,\\; 120^\\circ+21.8^\\circ+38.2^\\circ = 180^\\circ",
          "explanation": "Using the sine rule for the smaller angles, all three angles sum to $180^\\circ$, confirming the triangle is consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "The largest angle (opposite the side of $7\\text{ cm}$) is exactly $120^\\circ$, and the exact area is $\\dfrac{15\\sqrt3}{4}\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q065",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "problem-solving"
    ],
    "questionText": "A delivery drone must travel from warehouse $A$ to customer $C$. Route 1 flies via a relay point $B$: $A$ to $B$ is $10\\text{ km}$ and $B$ to $C$ is $6\\text{ km}$, with $\\angle ABC = 120^\\circ$. Route 2 flies directly from $A$ to $C$. Determine which route is shorter and by how much.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the length of Route 1",
          "workingLatex": "\\text{Route 1 (via } B) = AB + BC = 10 + 6 = 16\\text{ km}",
          "explanation": "Route 1 is just the two legs added together, since the drone follows both straight segments.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Recognise Route 2 needs $AC$",
          "workingLatex": "\\text{Route 2} = AC",
          "explanation": "The direct route is the single side $AC$ of triangle $ABC$, which we do not yet know.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set up the cosine rule",
          "workingLatex": "AC^2 = AB^2 + BC^2 - 2\\,AB\\cdot BC\\cos(\\angle ABC)",
          "explanation": "$AC$ lies opposite the known angle at $B$, so the cosine rule uses the two legs and that angle to find it.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Substitute the values",
          "workingLatex": "AC^2 = 10^2 + 6^2 - 2\\cdot 10\\cdot 6\\cos 120^\\circ",
          "explanation": "Both legs and the included angle drop straight into the rule.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the exact cosine",
          "workingLatex": "\\cos 120^\\circ = -\\tfrac12",
          "explanation": "The angle is obtuse, so its cosine is negative; using $-\\tfrac12$ keeps the arithmetic exact.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Insert the value",
          "workingLatex": "AC^2 = 100 + 36 - 120\\cdot\\left(-\\tfrac12\\right)",
          "explanation": "The negative cosine turns the last term into an addition, which lengthens the direct distance.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Simplify",
          "workingLatex": "AC^2 = 136 + 60 = 196",
          "explanation": "Combining the terms gives a perfect square, so the direct distance is a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Take the root",
          "workingLatex": "AC = \\sqrt{196} = 14\\text{ km}",
          "explanation": "The direct flight from $A$ to $C$ is exactly $14\\text{ km}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State Route 2",
          "workingLatex": "\\text{Route 2 (direct)} = 14\\text{ km}",
          "explanation": "This is the length of the single straight leg.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compare the routes",
          "workingLatex": "16\\text{ km} > 14\\text{ km}",
          "explanation": "Route 1 is longer than Route 2, so the direct flight is the shorter option.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the difference",
          "workingLatex": "16 - 14 = 2\\text{ km}",
          "explanation": "Subtracting the two distances gives how much shorter the direct route is.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Check the triangle inequality",
          "workingLatex": "|10-6| = 4 < 14 < 16 = 10 + 6",
          "explanation": "The direct distance lies between the difference and sum of the legs, so the triangle is valid and the figure is believable.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Check the obtuse-angle logic",
          "workingLatex": "\\angle ABC = 120^\\circ \\text{ obtuse} \\Rightarrow AC \\text{ is the longest side};\\ 14 > 10 > 6",
          "explanation": "An obtuse angle forces the opposite side to be the longest, which agrees with $AC=14$ exceeding both legs.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Express the saving",
          "workingLatex": "\\frac{2}{16}\\times 100\\% = 12.5\\%",
          "explanation": "Comparing the saving to Route 1 shows the direct route trims one eighth of the distance.",
          "diagram": null
        }
      ],
      "finalAnswer": "The direct route (Route 2) is $14\\text{ km}$ compared with $16\\text{ km}$ via $B$, so flying directly is shorter by $2\\text{ km}$ (a $12.5\\%$ saving)."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q066",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "angle",
    "tags": [
      "triangle-trig",
      "area-formula",
      "ambiguous-case"
    ],
    "questionText": "In triangle $ABC$, $AB = 9\\text{ cm}$, $AC = 4\\text{ cm}$ and the area is $9\\sqrt3\\text{ cm}^2$. Find the two possible sizes of angle $A$, and the corresponding lengths of $BC$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known data",
          "workingLatex": "AB = 9,\\quad AC = 4,\\quad \\text{Area} = 9\\sqrt3",
          "explanation": "The two given sides are the pair that enclose angle $A$, so the area formula will pin down $\\sin A$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the area formula",
          "workingLatex": "\\text{Area} = \\tfrac12\\,AB\\cdot AC\\sin A",
          "explanation": "The $\\tfrac12 ab\\sin C$ formula uses exactly the two sides meeting at $A$ and the angle between them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute",
          "workingLatex": "9\\sqrt3 = \\tfrac12\\cdot 9\\cdot 4\\sin A",
          "explanation": "Inserting the area and the two sides leaves $\\sin A$ as the only unknown.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Simplify the coefficient",
          "workingLatex": "9\\sqrt3 = 18\\sin A",
          "explanation": "Since $\\tfrac12\\cdot9\\cdot4=18$, the equation reduces to a single term in $\\sin A$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for the sine",
          "workingLatex": "\\sin A = \\frac{9\\sqrt3}{18} = \\frac{\\sqrt3}{2}",
          "explanation": "Dividing gives an exact value of the sine, matching a standard angle.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find both angles",
          "workingLatex": "A = 60^\\circ \\quad\\text{or}\\quad A = 120^\\circ",
          "explanation": "Sine is positive in both the first and second quadrants, so within a triangle the angle can be acute or obtuse; this is why the angle appears twice.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Note both are valid",
          "workingLatex": "0^\\circ < 60^\\circ < 180^\\circ,\\quad 0^\\circ < 120^\\circ < 180^\\circ",
          "explanation": "Each value is a genuine triangle angle, so two different triangles share the same two sides and area.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Case 1: set up the cosine rule",
          "workingLatex": "\\text{If } A = 60^\\circ:\\quad BC^2 = 9^2 + 4^2 - 2\\cdot 9\\cdot 4\\cos 60^\\circ",
          "explanation": "With the angle fixed, $BC$ (opposite $A$) follows from the cosine rule.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the exact cosine",
          "workingLatex": "\\cos 60^\\circ = \\tfrac12",
          "explanation": "The acute case uses the positive cosine, which shortens $BC$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute the first length",
          "workingLatex": "BC^2 = 81 + 16 - 72\\cdot\\tfrac12 = 97 - 36 = 61 \\Rightarrow BC = \\sqrt{61}",
          "explanation": "The acute triangle gives $BC=\\sqrt{61}\\approx 7.81\\text{ cm}$, exact in surd form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Case 2: set up the cosine rule",
          "workingLatex": "\\text{If } A = 120^\\circ:\\quad BC^2 = 81 + 16 - 72\\cos 120^\\circ",
          "explanation": "The obtuse case reuses the same two sides but with the larger angle.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Use the exact cosine",
          "workingLatex": "\\cos 120^\\circ = -\\tfrac12",
          "explanation": "The negative cosine turns the last term into an addition, lengthening $BC$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Compute the second length",
          "workingLatex": "BC^2 = 97 + 36 = 133 \\Rightarrow BC = \\sqrt{133}",
          "explanation": "The obtuse triangle gives $BC=\\sqrt{133}\\approx 11.53\\text{ cm}$, again exact.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Confirm both give the stated area",
          "workingLatex": "\\tfrac12\\cdot 9\\cdot 4\\sin 60^\\circ = \\tfrac12\\cdot 9\\cdot 4\\sin 120^\\circ = 9\\sqrt3",
          "explanation": "Because $\\sin 60^\\circ = \\sin 120^\\circ$, both triangles have the identical area $9\\sqrt3$, exactly as required.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the two solutions together",
          "workingLatex": "(A, BC) = (60^\\circ,\\ \\sqrt{61})\\ \\text{or}\\ (120^\\circ,\\ \\sqrt{133})",
          "explanation": "Pairing each angle with its length makes the two possible triangles explicit.",
          "diagram": null
        }
      ],
      "finalAnswer": "Two triangles fit: $A = 60^\\circ$ with $BC = \\sqrt{61}\\text{ cm}\\approx 7.81\\text{ cm}$, or $A = 120^\\circ$ with $BC = \\sqrt{133}\\text{ cm}\\approx 11.53\\text{ cm}$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q067",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "length",
    "tags": [
      "triangle-trig",
      "sine-rule",
      "circumcircle"
    ],
    "questionText": "Triangle $ABC$ is inscribed in a circle. Angle $A = 45^\\circ$, angle $B = 60^\\circ$ and $BC = 8\\text{ cm}$. Find the radius of the circle, the exact length of $AC$, and the exact area of the triangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find the third angle",
          "workingLatex": "\\angle C = 180^\\circ - 45^\\circ - 60^\\circ = 75^\\circ",
          "explanation": "The angles of a triangle sum to $180^\\circ$, so the remaining angle is fixed and will be needed for the area.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Use the extended sine rule",
          "workingLatex": "\\frac{a}{\\sin A} = 2R",
          "explanation": "The side over the sine of its opposite angle equals the circle's diameter, which links the triangle to its circumcircle.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the known pair",
          "workingLatex": "\\frac{8}{\\sin 45^\\circ} = 2R",
          "explanation": "$BC=8$ is opposite angle $A=45^\\circ$, so this pair directly gives the diameter.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the exact sine",
          "workingLatex": "\\sin 45^\\circ = \\tfrac{\\sqrt2}{2}",
          "explanation": "Keeping the surd exact lets the radius come out in exact form.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the diameter",
          "workingLatex": "2R = \\frac{8}{\\tfrac{\\sqrt2}{2}} = \\frac{16}{\\sqrt2} = 8\\sqrt2",
          "explanation": "Dividing by a fraction and rationalising gives the diameter as a tidy surd.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the radius",
          "workingLatex": "R = 4\\sqrt2\\text{ cm}",
          "explanation": "Halving the diameter gives the circumradius exactly.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $AC$ with the sine rule",
          "workingLatex": "AC = b = 2R\\sin B = 8\\sqrt2\\sin 60^\\circ",
          "explanation": "$AC$ is opposite angle $B$, so multiplying the diameter by $\\sin B$ gives its length.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Use the exact sine",
          "workingLatex": "\\sin 60^\\circ = \\tfrac{\\sqrt3}{2}",
          "explanation": "The standard value keeps $AC$ exact.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Simplify $AC$",
          "workingLatex": "AC = 8\\sqrt2\\cdot\\tfrac{\\sqrt3}{2} = 4\\sqrt6",
          "explanation": "Multiplying the surds gives $AC = 4\\sqrt6\\approx 9.80\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Set up the area",
          "workingLatex": "\\text{Area} = \\tfrac12\\,a\\,b\\sin C = \\tfrac12\\cdot 8\\cdot 4\\sqrt6\\sin 75^\\circ",
          "explanation": "The two known sides $BC$ and $AC$ enclose angle $C$, so the $\\tfrac12 ab\\sin C$ formula applies.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Use the exact sine of $75^\\circ$",
          "workingLatex": "\\sin 75^\\circ = \\frac{\\sqrt6 + \\sqrt2}{4}",
          "explanation": "The exact value of $\\sin 75^\\circ$ (from $45^\\circ+30^\\circ$) keeps the area exact.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Substitute and tidy",
          "workingLatex": "\\text{Area} = 16\\sqrt6\\cdot\\frac{\\sqrt6 + \\sqrt2}{4} = 4\\sqrt6(\\sqrt6 + \\sqrt2)",
          "explanation": "Simplifying $\\tfrac12\\cdot8\\cdot4\\sqrt6=16\\sqrt6$ and dividing by $4$ leaves a single product to expand.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Expand the bracket",
          "workingLatex": "= 4\\left(6 + \\sqrt{12}\\right) = 4\\left(6 + 2\\sqrt3\\right)",
          "explanation": "Multiplying $\\sqrt6$ through gives $6$ and $\\sqrt{12}=2\\sqrt3$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Simplify the area",
          "workingLatex": "= 24 + 8\\sqrt3 \\approx 37.86",
          "explanation": "This is the exact area of the triangle in surd form.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find $AB$ for a check",
          "workingLatex": "AB = c = 2R\\sin 75^\\circ = 8\\sqrt2\\cdot\\tfrac{\\sqrt6+\\sqrt2}{4} = 4 + 4\\sqrt3",
          "explanation": "The third side follows from the sine rule and gives an independent way to test the area.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Verify the area another way",
          "workingLatex": "\\tfrac12\\,a\\,c\\sin B = \\tfrac12\\cdot 8(4 + 4\\sqrt3)\\tfrac{\\sqrt3}{2} = 24 + 8\\sqrt3\\ \\checkmark",
          "explanation": "Using a different pair of sides and angle reproduces the same area, confirming the result is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "The circumradius is $R = 4\\sqrt2\\text{ cm}$, $AC = 4\\sqrt6\\text{ cm}\\approx 9.80\\text{ cm}$, and the exact area is $\\left(24 + 8\\sqrt3\\right)\\text{ cm}^2\\approx 37.86\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q068",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "area",
    "tags": [
      "triangle-trig",
      "exact-values",
      "area-formula"
    ],
    "questionText": "In triangle $ABC$, angle $B = 45^\\circ$, angle $C = 30^\\circ$ and $AB = 6\\sqrt2\\text{ cm}$. By dropping the perpendicular from $A$ to $BC$, find the exact length of $BC$ and the exact area of the triangle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List what is known",
          "workingLatex": "\\angle B = 45^\\circ,\\quad \\angle C = 30^\\circ,\\quad AB = 6\\sqrt2",
          "explanation": "The two base angles differ, so splitting the triangle with an altitude creates two right-angled triangles with the special angles $45^\\circ$ and $30^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Find the apex angle",
          "workingLatex": "\\angle A = 180^\\circ - 45^\\circ - 30^\\circ = 105^\\circ",
          "explanation": "Knowing all three angles confirms the shape, though the altitude method needs only the base angles.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Drop the perpendicular",
          "workingLatex": "AD \\perp BC,\\quad D\\text{ on } BC",
          "explanation": "The foot $D$ splits $BC$ into two segments and makes $\\triangle ABD$ a $45^\\circ$ right triangle and $\\triangle ACD$ a $30^\\circ$ right triangle.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Find the height in $\\triangle ABD$",
          "workingLatex": "AD = AB\\sin 45^\\circ",
          "explanation": "In the right triangle at $B$, the side opposite the $45^\\circ$ angle is the height $AD$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Use the exact sine",
          "workingLatex": "\\sin 45^\\circ = \\tfrac{\\sqrt2}{2}",
          "explanation": "The exact value combines neatly with $AB=6\\sqrt2$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Compute the height",
          "workingLatex": "AD = 6\\sqrt2\\cdot\\tfrac{\\sqrt2}{2} = 6",
          "explanation": "The two $\\sqrt2$ factors multiply to $2$, cancelling the denominator and giving a clean height of $6\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find $BD$",
          "workingLatex": "BD = AB\\cos 45^\\circ = 6\\sqrt2\\cdot\\tfrac{\\sqrt2}{2} = 6",
          "explanation": "In a $45^\\circ$ right triangle the two legs are equal, so the horizontal part $BD$ also equals $6$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Relate $DC$ to the height",
          "workingLatex": "\\tan 30^\\circ = \\frac{AD}{DC} \\Rightarrow DC = \\frac{AD}{\\tan 30^\\circ}",
          "explanation": "In the right triangle at $C$, the tangent links the opposite height $AD$ to the adjacent base $DC$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Use the exact tangent",
          "workingLatex": "\\tan 30^\\circ = \\frac{1}{\\sqrt3}",
          "explanation": "The standard exact value produces a surd length for $DC$.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Compute $DC$",
          "workingLatex": "DC = \\frac{6}{1/\\sqrt3} = 6\\sqrt3",
          "explanation": "Dividing by $\\tfrac{1}{\\sqrt3}$ multiplies by $\\sqrt3$, giving $DC = 6\\sqrt3\\text{ cm}$.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the two segments",
          "workingLatex": "BC = BD + DC = 6 + 6\\sqrt3 = 6(1 + \\sqrt3)",
          "explanation": "The full base is the sum of the two pieces created by the foot of the altitude.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "State $BC$ exactly",
          "workingLatex": "BC = 6(1 + \\sqrt3)\\text{ cm} \\approx 16.39",
          "explanation": "This is the exact length of the base, expressed as a factored surd.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Set up the area",
          "workingLatex": "\\text{Area} = \\tfrac12\\,BC\\cdot AD = \\tfrac12\\cdot 6(1 + \\sqrt3)\\cdot 6",
          "explanation": "With the base $BC$ and the perpendicular height $AD$ both known, the basic area formula applies.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Simplify the area",
          "workingLatex": "= 18(1 + \\sqrt3) = 18 + 18\\sqrt3 \\approx 49.18",
          "explanation": "Multiplying out gives the exact area in surd form.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Verify with $\\tfrac12 ab\\sin C$",
          "workingLatex": "\\tfrac12\\cdot 6\\sqrt2\\cdot 6(1 + \\sqrt3)\\sin 45^\\circ = \\tfrac12\\cdot 6\\sqrt2\\cdot 6(1 + \\sqrt3)\\cdot\\tfrac{\\sqrt2}{2} = 18(1 + \\sqrt3)\\ \\checkmark",
          "explanation": "Recomputing the area from two sides and the included angle at $B$ gives the same value, confirming the answer.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Cross-check $AC$",
          "workingLatex": "AC = \\frac{AD}{\\sin 30^\\circ} = \\frac{6}{1/2} = 12",
          "explanation": "The $30^\\circ$ right triangle gives $AC=12$, consistent with the $30$-$60$-$90$ ratios, which reinforces that the figure is correct.",
          "diagram": null
        }
      ],
      "finalAnswer": "$BC = 6(1 + \\sqrt3)\\text{ cm}\\approx 16.39\\text{ cm}$ and the exact area is $\\left(18 + 18\\sqrt3\\right)\\text{ cm}^2\\approx 49.18\\text{ cm}^2$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q069",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "description",
    "tags": [
      "triangle-trig",
      "bearings",
      "navigation"
    ],
    "questionText": "A surveyor walks three legs, each of length $10\\text{ km}$: first on a bearing of $060^\\circ$, then on a bearing of $120^\\circ$, then on a bearing of $060^\\circ$. Find the distance and bearing of the finishing point from the starting point.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Choose a method",
          "workingLatex": "\\text{Resolve each leg into East } (E) \\text{ and North } (N) \\text{ components}",
          "explanation": "Breaking every leg into eastward and northward parts lets the separate legs be added, since components in the same direction combine simply.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Components of leg 1",
          "workingLatex": "E_1 = 10\\sin 60^\\circ,\\quad N_1 = 10\\cos 60^\\circ",
          "explanation": "A bearing is measured clockwise from North, so the East part uses sine and the North part uses cosine of the bearing.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Evaluate leg 1",
          "workingLatex": "(E_1, N_1) = \\left(10\\cdot\\tfrac{\\sqrt3}{2},\\ 10\\cdot\\tfrac12\\right) = (5\\sqrt3,\\ 5)",
          "explanation": "Using exact values for $60^\\circ$ keeps the components precise.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Components of leg 2",
          "workingLatex": "E_2 = 10\\sin 120^\\circ,\\quad N_2 = 10\\cos 120^\\circ",
          "explanation": "The bearing $120^\\circ$ points south-east, so its North component will be negative.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate leg 2",
          "workingLatex": "(E_2, N_2) = \\left(10\\cdot\\tfrac{\\sqrt3}{2},\\ 10\\cdot(-\\tfrac12)\\right) = (5\\sqrt3,\\ -5)",
          "explanation": "Since $\\cos 120^\\circ = -\\tfrac12$, this leg moves the surveyor south while still going east.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Components of leg 3",
          "workingLatex": "(E_3, N_3) = (5\\sqrt3,\\ 5)",
          "explanation": "Leg 3 repeats the bearing $060^\\circ$, so its components match leg 1.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Total East component",
          "workingLatex": "E = 5\\sqrt3 + 5\\sqrt3 + 5\\sqrt3 = 15\\sqrt3",
          "explanation": "All three legs push east by the same amount, so the eastward displacement triples.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Total North component",
          "workingLatex": "N = 5 - 5 + 5 = 5",
          "explanation": "The middle leg cancels one of the northward moves, leaving a small net displacement north.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Apply Pythagoras",
          "workingLatex": "d = \\sqrt{E^2 + N^2} = \\sqrt{(15\\sqrt3)^2 + 5^2}",
          "explanation": "The straight-line distance is the hypotenuse of the right triangle formed by the total East and North displacements.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Square the components",
          "workingLatex": "(15\\sqrt3)^2 = 675,\\qquad 5^2 = 25",
          "explanation": "Squaring removes the surd, giving whole numbers to add.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add and root",
          "workingLatex": "d = \\sqrt{675 + 25} = \\sqrt{700}",
          "explanation": "Summing the squares gives $700$ under the root.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Simplify the distance",
          "workingLatex": "d = \\sqrt{100\\cdot 7} = 10\\sqrt7 \\approx 26.46\\text{ km}",
          "explanation": "Extracting the perfect square $100$ gives the exact distance $10\\sqrt7\\text{ km}$.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Set up the bearing",
          "workingLatex": "\\tan\\theta = \\frac{E}{N} = \\frac{15\\sqrt3}{5} = 3\\sqrt3",
          "explanation": "Both displacements are positive, so the finish lies in the north-east quadrant and the bearing is measured from North using $\\tan\\theta = E/N$.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the angle",
          "workingLatex": "\\theta = \\arctan(3\\sqrt3) = \\arctan(5.196) \\approx 79.1^\\circ",
          "explanation": "Taking the inverse tangent gives the angle clockwise from North.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the bearing",
          "workingLatex": "\\text{Bearing} = 079^\\circ\\ (\\text{nearest degree})",
          "explanation": "Bearings are written as three figures, so the result is quoted as $079^\\circ$.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Sanity check",
          "workingLatex": "10\\sqrt7 \\approx 26.46 < 30 = 10+10+10,\\quad E>0,\\ N>0 \\Rightarrow 0^\\circ<\\theta<90^\\circ",
          "explanation": "The straight-line distance is less than the total path walked, and both components being positive confirms the bearing lies between North and East, so the answer is reasonable.",
          "diagram": null
        }
      ],
      "finalAnswer": "The finishing point is $10\\sqrt7\\text{ km}\\approx 26.5\\text{ km}$ from the start, on a bearing of $079^\\circ$."
    }
  },
  {
    "id": "al.y1.pure.triangle-trig.q070",
    "level": "A-Level Maths",
    "topic": "Year 1 Pure",
    "subtopic": "Triangle trigonometry",
    "subtopicId": "al.y1.pure.triangle-trig",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "value",
    "tags": [
      "triangle-trig",
      "cosine-rule",
      "area-formula"
    ],
    "questionText": "In triangle $ABC$, $AC = x\\text{ cm}$, $AB = (x+5)\\text{ cm}$ and the included angle $A = 60^\\circ$. The side $BC = 7\\text{ cm}$. Find $x$, then compute the exact area of the triangle and the size of its largest angle.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "List the known information",
          "workingLatex": "AC = x,\\quad AB = x+5,\\quad \\angle A = 60^\\circ,\\quad BC = 7",
          "explanation": "$BC$ is opposite the known angle $A$, and $AC$, $AB$ enclose $A$, so the cosine rule builds an equation in $x$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write the cosine rule",
          "workingLatex": "BC^2 = AC^2 + AB^2 - 2\\,AC\\cdot AB\\cos A",
          "explanation": "This relates the side opposite $A$ to the two sides enclosing it and the angle between them.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Substitute the expressions",
          "workingLatex": "7^2 = x^2 + (x+5)^2 - 2x(x+5)\\cos 60^\\circ",
          "explanation": "Placing the algebraic sides into the rule converts the geometry into an equation we can solve.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Use the exact cosine",
          "workingLatex": "\\cos 60^\\circ = \\tfrac12",
          "explanation": "The standard value simplifies the product term neatly.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Simplify the last term",
          "workingLatex": "49 = x^2 + (x+5)^2 - x(x+5)",
          "explanation": "The factor of $2$ and the $\\tfrac12$ cancel, so the cosine term becomes $x(x+5)$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Expand the square",
          "workingLatex": "(x+5)^2 = x^2 + 10x + 25",
          "explanation": "Expanding prepares the terms to be gathered.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Expand the product",
          "workingLatex": "x(x+5) = x^2 + 5x",
          "explanation": "This is the term to be subtracted from the rest.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Combine everything",
          "workingLatex": "49 = x^2 + x^2 + 10x + 25 - (x^2 + 5x)",
          "explanation": "Substituting both expansions collects the whole right-hand side.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Collect like terms",
          "workingLatex": "49 = x^2 + 5x + 25",
          "explanation": "Two of the $x^2$ terms remain as one and the $x$ terms combine, leaving a quadratic.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Rearrange",
          "workingLatex": "x^2 + 5x - 24 = 0",
          "explanation": "Bringing everything to one side gives the standard quadratic form.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Factorise",
          "workingLatex": "(x + 8)(x - 3) = 0",
          "explanation": "Two numbers multiplying to $-24$ and adding to $5$ are $+8$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Solve and reject",
          "workingLatex": "x = 3 \\quad (x = -8 \\text{ rejected})",
          "explanation": "A length must be positive, so only $x=3$ gives a valid triangle.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the sides",
          "workingLatex": "AC = 3,\\quad AB = 8,\\quad BC = 7",
          "explanation": "All three are positive and satisfy the triangle inequality, confirming a genuine triangle.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Find the exact area",
          "workingLatex": "\\text{Area} = \\tfrac12\\cdot 3\\cdot 8\\sin 60^\\circ = 12\\cdot\\tfrac{\\sqrt3}{2} = 6\\sqrt3",
          "explanation": "With the two enclosing sides and the included angle, the $\\tfrac12 ab\\sin C$ formula gives the area exactly.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Find the largest angle",
          "workingLatex": "\\cos C = \\frac{AC^2 + BC^2 - AB^2}{2\\,AC\\cdot BC} = \\frac{9 + 49 - 64}{2\\cdot 3\\cdot 7} = \\frac{-6}{42} = -\\tfrac17",
          "explanation": "The largest angle faces the longest side $AB = 8$, so it sits at $C$; the negative cosine confirms it is obtuse.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "Evaluate the angle",
          "workingLatex": "C = \\arccos\\!\\left(-\\tfrac17\\right) \\approx 98.2^\\circ",
          "explanation": "The inverse cosine gives the obtuse angle opposite the longest side.",
          "diagram": null
        },
        {
          "stepNumber": 17,
          "description": "Check the angle sum",
          "workingLatex": "A = 60^\\circ,\\ C \\approx 98.2^\\circ,\\ B \\approx 21.8^\\circ,\\quad \\text{sum} = 180^\\circ",
          "explanation": "The three angles add to $180^\\circ$, confirming the triangle and the largest-angle calculation are consistent.",
          "diagram": null
        }
      ],
      "finalAnswer": "$x = 3$, giving sides $3\\text{ cm}$, $8\\text{ cm}$ and $7\\text{ cm}$; the exact area is $6\\sqrt3\\text{ cm}^2$ and the largest angle is $\\arccos\\!\\left(-\\tfrac17\\right)\\approx 98.2^\\circ$."
    }
  }
];
