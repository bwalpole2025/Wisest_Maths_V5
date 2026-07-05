import { Question } from "@/lib/types";

export const questions: Question[] = [
{
  "id": "al.y1.mech.variable-acceleration.q001",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["variable-acceleration", "differentiation", "velocity", "displacement", "power-rule"],
  "questionText": "A particle moves in a straight line so that its displacement from a fixed point $O$ is given by $s = t^3 - 2t^2 + 5$, where $s$ is in metres and $t$ is in seconds. Find the velocity $v = \\frac{\\mathrm{d}s}{\\mathrm{d}t}$ as a function of $t$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down what is given and what is required.",
        "workingLatex": "s = t^3 - 2t^2 + 5, \\quad v = ?",
        "explanation": "We are told how the displacement $s$ depends on time, and we want the velocity. Velocity measures how quickly displacement is changing, so it is the rate of change of $s$ with respect to $t$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the link between velocity and displacement.",
        "workingLatex": "v = \\frac{\\mathrm{d}s}{\\mathrm{d}t}",
        "explanation": "Differentiating displacement with respect to time gives velocity. This is the calculus version of 'velocity is the rate at which position changes'.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the power rule we will use on each term.",
        "workingLatex": "\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(t^n\\right) = n\\,t^{n-1}",
        "explanation": "The power rule lets us differentiate each term separately: bring the power down to the front as a multiplier, then reduce the power by one.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Differentiate the term $t^3$.",
        "workingLatex": "\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(t^3\\right) = 3t^2",
        "explanation": "The power $3$ comes down to multiply, and the new power is $3-1 = 2$, giving $3t^2$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Differentiate the term $-2t^2$.",
        "workingLatex": "\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(-2t^2\\right) = -4t",
        "explanation": "Multiply the coefficient $-2$ by the power $2$ to get $-4$, and reduce the power to $1$, giving $-4t$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Differentiate the constant term $5$.",
        "workingLatex": "\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(5\\right) = 0",
        "explanation": "A constant does not change as time passes, so its rate of change is zero. Constants always vanish when we differentiate.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Combine the differentiated terms to write the velocity.",
        "workingLatex": "v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 3t^2 - 4t",
        "explanation": "Adding the results of each term together gives the full expression for the velocity at any time $t$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 3t^2 - 4t \\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q002",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "differentiation", "velocity", "substitution", "power-rule"],
  "questionText": "A particle moves in a straight line with displacement $s = 4t^2 + 3t$ metres at time $t$ seconds. Find the velocity of the particle when $t = 2\\ \\text{s}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down what is given and what is required.",
        "workingLatex": "s = 4t^2 + 3t, \\quad v \\text{ at } t = 2",
        "explanation": "We know the displacement as a function of time and want the velocity at a specific instant. First we find velocity in general, then substitute the given time.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the link between velocity and displacement.",
        "workingLatex": "v = \\frac{\\mathrm{d}s}{\\mathrm{d}t}",
        "explanation": "Velocity is the rate of change of displacement, which we obtain by differentiating $s$ with respect to $t$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Differentiate the term $4t^2$.",
        "workingLatex": "\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(4t^2\\right) = 8t",
        "explanation": "Multiply the coefficient $4$ by the power $2$ to get $8$, then reduce the power by one to leave $8t$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Differentiate the term $3t$.",
        "workingLatex": "\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(3t\\right) = 3",
        "explanation": "The term $3t$ is $3t^1$; bringing the power $1$ down leaves the constant $3$. A term that is linear in $t$ differentiates to its coefficient.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the general expression for the velocity.",
        "workingLatex": "v = 8t + 3",
        "explanation": "Combining the two differentiated terms gives the velocity at any time $t$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute $t = 2$ into the velocity expression.",
        "workingLatex": "v = 8(2) + 3",
        "explanation": "We want the velocity at the specific moment $t = 2\\ \\text{s}$, so we replace $t$ with $2$ in the formula.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate to find the velocity.",
        "workingLatex": "v = 16 + 3 = 19",
        "explanation": "Working out the arithmetic gives the velocity of $19\\ \\text{m s}^{-1}$ at that instant.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 19 \\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q003",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "expression",
  "tags": ["variable-acceleration", "differentiation", "acceleration", "velocity", "power-rule"],
  "questionText": "The velocity of a particle moving in a straight line is $v = 3t^2 - 4t$, where $v$ is in $\\text{m s}^{-1}$ and $t$ is in seconds. Find the acceleration $a = \\frac{\\mathrm{d}v}{\\mathrm{d}t}$ as a function of $t$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
        {
                "stepNumber": 1,
                "description": "Write down what is given and required",
                "workingLatex": "v = 3t^2 - 4t,\\qquad a = ?",
                "explanation": "We are given the velocity as a function of time and asked for the acceleration. Knowing exactly what we start from and what we want keeps the method focused.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "Recall the link between acceleration and velocity",
                "workingLatex": "a = \\frac{\\mathrm dv}{\\mathrm dt}",
                "explanation": "Acceleration is the rate at which velocity changes, which is precisely the derivative of velocity with respect to time. So differentiating $v$ will give $a$.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "State the power rule",
                "workingLatex": "\\frac{\\mathrm d}{\\mathrm dt}\\left(kt^n\\right) = kn\\,t^{n-1}",
                "explanation": "Each term is a power of $t$ multiplied by a constant, so we bring the power down as a multiplier and reduce the index by one. Applying this term by term keeps the differentiation tidy.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Differentiate the term $3t^2$",
                "workingLatex": "\\frac{\\mathrm d}{\\mathrm dt}(3t^2) = 6t",
                "explanation": "The power 2 comes down to multiply the 3, giving 6, and the index drops to 1. This term becomes $6t$.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Differentiate the term $-4t$",
                "workingLatex": "\\frac{\\mathrm d}{\\mathrm dt}(-4t) = -4",
                "explanation": "A term linear in $t$ differentiates to its constant coefficient, because $t^1$ becomes $t^0 = 1$. So $-4t$ becomes $-4$.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Combine the terms",
                "workingLatex": "a = 6t - 4\\ \\text{m s}^{-2}",
                "explanation": "Adding the derivatives of the separate terms gives the whole acceleration as a function of time.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Interpret the result",
                "workingLatex": "a(0) = -4,\\qquad a(2) = 8",
                "explanation": "The acceleration is not constant: it changes with time. At $t=0$ it is $-4\\ \\text{m s}^{-2}$ and later becomes positive, which tells us the particle is first slowing in the positive direction before speeding up.",
                "diagram": null
        }
],
    "finalAnswer": "$a = 6t - 4 \\ \\text{m s}^{-2}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q004",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "differentiation", "acceleration", "substitution", "power-rule"],
  "questionText": "A particle moves in a straight line with velocity $v = 6t - t^2$, where $v$ is in $\\text{m s}^{-1}$ and $t$ is in seconds. Find the acceleration of the particle when $t = 1\\ \\text{s}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down what is given and what is required.",
        "workingLatex": "v = 6t - t^2, \\quad a \\text{ at } t = 1",
        "explanation": "We know the velocity as a function of time and want the acceleration at one specific instant. We find acceleration in general first, then substitute the time.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the link between acceleration and velocity.",
        "workingLatex": "a = \\frac{\\mathrm{d}v}{\\mathrm{d}t}",
        "explanation": "Acceleration is the rate of change of velocity, so we differentiate $v$ with respect to $t$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Differentiate the term $6t$.",
        "workingLatex": "\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(6t\\right) = 6",
        "explanation": "The term $6t$ is linear in $t$, so differentiating leaves its coefficient $6$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Differentiate the term $-t^2$.",
        "workingLatex": "\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(-t^2\\right) = -2t",
        "explanation": "Bring the power $2$ down to multiply the coefficient $-1$, giving $-2$, and reduce the power to one to leave $-2t$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the general expression for the acceleration.",
        "workingLatex": "a = 6 - 2t",
        "explanation": "Combining the differentiated terms gives the acceleration at any time $t$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Substitute $t = 1$ into the acceleration expression.",
        "workingLatex": "a = 6 - 2(1)",
        "explanation": "We want the acceleration at the moment $t = 1\\ \\text{s}$, so we replace $t$ with $1$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate to find the acceleration.",
        "workingLatex": "a = 6 - 2 = 4",
        "explanation": "The arithmetic gives an acceleration of $4\\ \\text{m s}^{-2}$ at that instant.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 4 \\ \\text{m s}^{-2}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q005",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["variable-acceleration", "integration", "velocity", "constant-of-integration", "initial-conditions"],
  "questionText": "A particle moves in a straight line with acceleration $a = 6t\\ \\text{m s}^{-2}$. Given that the velocity is $v = 2\\ \\text{m s}^{-1}$ when $t = 0$, find $v$ as a function of $t$ by integration.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down what is given and what is required.",
        "workingLatex": "a = 6t, \\quad v = 2 \\text{ when } t = 0, \\quad v(t) = ?",
        "explanation": "We know the acceleration and one value of the velocity. To go from acceleration back to velocity we reverse differentiation, which means we integrate.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall that velocity is the integral of acceleration.",
        "workingLatex": "v = \\int a \\, \\mathrm{d}t = \\int 6t \\, \\mathrm{d}t",
        "explanation": "Since differentiating velocity gives acceleration, integrating acceleration recovers velocity. Integration undoes differentiation.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate $6t$ using the reverse power rule.",
        "workingLatex": "v = 3t^2 + C",
        "explanation": "Raise the power by one to get $t^2$ and divide by the new power $2$: $6t$ becomes $\\frac{6t^2}{2} = 3t^2$. We add a constant $C$ because integration cannot know any fixed starting value on its own.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the initial condition $v = 2$ at $t = 0$.",
        "workingLatex": "2 = 3(0)^2 + C",
        "explanation": "The constant $C$ is fixed by using the known velocity at a known time. Substituting $t = 0$ and $v = 2$ lets us solve for $C$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the constant of integration.",
        "workingLatex": "C = 2",
        "explanation": "Since $3(0)^2 = 0$, the equation reduces to $2 = C$, so the constant is $2$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the complete velocity function.",
        "workingLatex": "v = 3t^2 + 2",
        "explanation": "Putting the value of $C$ back into the expression gives the velocity at any time $t$, matching the required starting velocity.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 3t^2 + 2 \\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q006",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["variable-acceleration", "integration", "displacement", "constant-of-integration", "initial-conditions"],
  "questionText": "A particle starts at the origin, so that $s = 0$ when $t = 0$, and moves in a straight line with velocity $v = 4t\\ \\text{m s}^{-1}$. Find the displacement $s$ as a function of $t$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down what is given and what is required.",
        "workingLatex": "v = 4t, \\quad s = 0 \\text{ when } t = 0, \\quad s(t) = ?",
        "explanation": "We know the velocity and the starting position. To recover displacement from velocity we reverse differentiation, so we integrate.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall that displacement is the integral of velocity.",
        "workingLatex": "s = \\int v \\, \\mathrm{d}t = \\int 4t \\, \\mathrm{d}t",
        "explanation": "Because differentiating displacement gives velocity, integrating velocity recovers displacement.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate $4t$ using the reverse power rule.",
        "workingLatex": "s = 2t^2 + C",
        "explanation": "Raise the power by one to get $t^2$ and divide by the new power $2$: $4t$ becomes $\\frac{4t^2}{2} = 2t^2$. The constant $C$ accounts for the unknown starting position.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the initial condition $s = 0$ at $t = 0$.",
        "workingLatex": "0 = 2(0)^2 + C",
        "explanation": "The particle starts at the origin, so substituting $t = 0$ and $s = 0$ pins down the constant.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the constant of integration.",
        "workingLatex": "C = 0",
        "explanation": "Since $2(0)^2 = 0$, the equation gives $0 = C$, so the constant is zero. Starting at the origin makes the constant vanish here.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the complete displacement function.",
        "workingLatex": "s = 2t^2",
        "explanation": "With $C = 0$, the displacement at any time $t$ is simply $2t^2$ metres.",
        "diagram": null
      }
    ],
    "finalAnswer": "$s = 2t^2 \\ \\text{m}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q007",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "expression",
  "tags": ["variable-acceleration", "differentiation", "velocity", "acceleration", "second-derivative"],
  "questionText": "A particle moves in a straight line with displacement $s = 2t^3 - 5t$ metres at time $t$ seconds. Find expressions for the velocity and the acceleration of the particle.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down what is given and what is required.",
        "workingLatex": "s = 2t^3 - 5t, \\quad v = ?, \\quad a = ?",
        "explanation": "We are given the displacement and need both velocity and acceleration. Velocity comes from differentiating once, and acceleration from differentiating again.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the link between velocity and displacement.",
        "workingLatex": "v = \\frac{\\mathrm{d}s}{\\mathrm{d}t}",
        "explanation": "Differentiating displacement with respect to time gives velocity, the rate at which position changes.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Differentiate $s$ term by term to find the velocity.",
        "workingLatex": "v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 6t^2 - 5",
        "explanation": "For $2t^3$, bring the power $3$ down to give $6t^2$; for $-5t$, the linear term differentiates to its coefficient $-5$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall the link between acceleration and velocity.",
        "workingLatex": "a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = \\frac{\\mathrm{d}^2s}{\\mathrm{d}t^2}",
        "explanation": "Acceleration is the rate of change of velocity, so we differentiate the velocity we just found. This is the same as differentiating $s$ twice.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Differentiate $v$ term by term to find the acceleration.",
        "workingLatex": "a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 12t",
        "explanation": "For $6t^2$, bring the power $2$ down to give $12t$; the constant $-5$ differentiates to zero, so only $12t$ remains.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State both required expressions clearly.",
        "workingLatex": "v = 6t^2 - 5, \\quad a = 12t",
        "explanation": "We now have velocity and acceleration as functions of time, obtained by differentiating the displacement once and then twice.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 6t^2 - 5 \\ \\text{m s}^{-1}, \\quad a = 12t \\ \\text{m s}^{-2}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q008",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "at-rest", "velocity", "solving-equations", "kinematics"],
  "questionText": "A particle moves in a straight line with velocity $v = 12 - 3t$, where $v$ is in $\\text{m s}^{-1}$ and $t$ is in seconds. Find the time at which the particle is momentarily at rest.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down what is given and what is required.",
        "workingLatex": "v = 12 - 3t, \\quad t \\text{ when at rest} = ?",
        "explanation": "We know the velocity as a function of time and want the moment the particle is at rest. We need to translate 'at rest' into a mathematical condition.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Interpret the condition 'momentarily at rest'.",
        "workingLatex": "\\text{at rest} \\Rightarrow v = 0",
        "explanation": "Being at rest means the particle is not moving at that instant, so its velocity is exactly zero. This gives us an equation to solve.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Set the velocity equal to zero.",
        "workingLatex": "12 - 3t = 0",
        "explanation": "We replace $v$ with $0$ in the velocity expression, since we want the time at which the velocity vanishes.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Rearrange to isolate the term in $t$.",
        "workingLatex": "3t = 12",
        "explanation": "Adding $3t$ to both sides moves it to the right, leaving a simple equation to solve for $t$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $t$.",
        "workingLatex": "t = \\frac{12}{3} = 4",
        "explanation": "Dividing both sides by $3$ gives the time at which the velocity is zero.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the answer with units.",
        "workingLatex": "t = 4 \\ \\text{s}",
        "explanation": "The particle is momentarily at rest $4$ seconds after the motion begins.",
        "diagram": null
      }
    ],
    "finalAnswer": "$t = 4 \\ \\text{s}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q009",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "written",
  "tags": ["variable-acceleration", "differentiation", "velocity", "at-rest", "solving-equations"],
  "questionText": "A particle moves in a straight line with displacement $s = t^2 - 6t + 8$ metres at time $t$ seconds. Find the velocity as a function of $t$, and hence find the time at which $v = 0$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down what is given and what is required.",
        "workingLatex": "s = t^2 - 6t + 8, \\quad v = ?, \\quad t \\text{ when } v = 0",
        "explanation": "We are given the displacement and need the velocity, then the time when the velocity is zero. We start by differentiating to find velocity.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the link between velocity and displacement.",
        "workingLatex": "v = \\frac{\\mathrm{d}s}{\\mathrm{d}t}",
        "explanation": "Velocity is the rate of change of displacement, so we differentiate $s$ with respect to $t$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Differentiate $s$ term by term.",
        "workingLatex": "v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 2t - 6",
        "explanation": "For $t^2$ bring the power down to get $2t$; for $-6t$ the linear term gives $-6$; and the constant $8$ differentiates to zero.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set the velocity equal to zero.",
        "workingLatex": "2t - 6 = 0",
        "explanation": "The velocity is zero at the instant the particle is momentarily at rest, so we solve the equation $v = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Rearrange to isolate the term in $t$.",
        "workingLatex": "2t = 6",
        "explanation": "Adding $6$ to both sides collects the constant on the right, leaving a simple equation in $t$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for $t$.",
        "workingLatex": "t = \\frac{6}{2} = 3",
        "explanation": "Dividing both sides by $2$ gives the time at which the velocity is zero.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State both required results.",
        "workingLatex": "v = 2t - 6, \\quad v = 0 \\text{ at } t = 3 \\ \\text{s}",
        "explanation": "The velocity is $2t - 6$, and it is zero $3$ seconds into the motion.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 2t - 6 \\ \\text{m s}^{-1}$, and $v = 0$ when $t = 3 \\ \\text{s}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q010",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "written",
  "tags": ["variable-acceleration", "integration", "constant-acceleration", "suvat", "constant-of-integration"],
  "questionText": "A particle moves in a straight line with constant acceleration $a = 4\\ \\text{m s}^{-2}$. Given that $v = 1\\ \\text{m s}^{-1}$ at $t = 0$, integrate to find $v$ as a function of $t$, and note that the result matches the constant-acceleration formula $v = u + at$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down what is given and what is required.",
        "workingLatex": "a = 4, \\quad v = 1 \\text{ when } t = 0, \\quad v(t) = ?",
        "explanation": "We know the constant acceleration and the starting velocity. To recover velocity from acceleration we reverse differentiation, so we integrate.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall that velocity is the integral of acceleration.",
        "workingLatex": "v = \\int a \\, \\mathrm{d}t = \\int 4 \\, \\mathrm{d}t",
        "explanation": "Integrating acceleration with respect to time gives velocity, because integration undoes the differentiation that turns velocity into acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate the constant $4$ with respect to $t$.",
        "workingLatex": "v = 4t + C",
        "explanation": "Integrating a constant $4$ gives $4t$, since the constant multiplies the variable $t$. The constant of integration $C$ accounts for the unknown starting velocity.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the initial condition $v = 1$ at $t = 0$.",
        "workingLatex": "1 = 4(0) + C \\Rightarrow C = 1",
        "explanation": "Substituting the known velocity at $t = 0$ fixes the constant. Since $4(0) = 0$, we find $C = 1$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Write the complete velocity function.",
        "workingLatex": "v = 4t + 1",
        "explanation": "Putting $C = 1$ back into the expression gives the velocity at any time $t$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Compare with the constant-acceleration formula.",
        "workingLatex": "v = u + at = 1 + 4t",
        "explanation": "With initial velocity $u = 1$ and acceleration $a = 4$, the standard formula gives $v = 1 + 4t$, exactly the same as our integrated result. This shows the calculus method and the suvat formula agree when the acceleration is constant.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 4t + 1 \\ \\text{m s}^{-1}$, which matches $v = u + at$ with $u = 1$ and $a = 4$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q011",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "expression",
  "tags": ["variable-acceleration", "differentiation", "second-derivative", "acceleration"],
  "questionText": "A particle moves in a straight line so that its displacement from a fixed point is $s = t^3 - 3t$ metres at time $t$ seconds. Find the acceleration $a = \\dfrac{\\mathrm{d}^2 s}{\\mathrm{d}t^2}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down the displacement expression.",
        "workingLatex": "s = t^3 - 3t",
        "explanation": "We begin from displacement because acceleration is obtained by differentiating displacement twice with respect to time. Having the expression clearly in front of us keeps the two differentiations organised.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall that velocity is the first derivative of displacement.",
        "workingLatex": "v = \\frac{\\mathrm{d}s}{\\mathrm{d}t}",
        "explanation": "Velocity measures how fast displacement is changing at each instant, so it is the rate of change of $s$ with respect to time. This is the first step on the way to acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Differentiate $s$ term by term using the power rule.",
        "workingLatex": "v = \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(t^3 - 3t\\right) = 3t^2 - 3",
        "explanation": "The power rule multiplies by the old power and lowers it by one, so $t^3$ becomes $3t^2$ and $-3t$ becomes $-3$. This gives the velocity at any time $t$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Recall that acceleration is the derivative of velocity.",
        "workingLatex": "a = \\frac{\\mathrm{d}v}{\\mathrm{d}t}",
        "explanation": "Acceleration measures how fast velocity is changing, so we differentiate the velocity we just found. This is the same as differentiating displacement a second time.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Differentiate $v$ to obtain the acceleration.",
        "workingLatex": "a = \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(3t^2 - 3\\right) = 6t",
        "explanation": "Applying the power rule again, $3t^2$ becomes $6t$ and the constant $-3$ differentiates to $0$ because a constant does not change. This leaves the acceleration in terms of $t$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the acceleration.",
        "workingLatex": "a = 6t \\ \\text{m s}^{-2}",
        "explanation": "The acceleration depends on time, which is exactly what 'variable acceleration' means. Larger values of $t$ give a larger acceleration.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 6t \\ \\text{m s}^{-2}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q012",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "differentiation", "acceleration", "evaluate"],
  "questionText": "A particle moves in a straight line with velocity $v = 5t^2 - 2t + 1$ (in $\\text{m s}^{-1}$) at time $t$ seconds. Find the acceleration when $t = 3\\ \\text{s}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down the velocity expression.",
        "workingLatex": "v = 5t^2 - 2t + 1",
        "explanation": "We start from velocity because acceleration is the rate at which velocity changes, so a single differentiation will give what we need.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the link between acceleration and velocity.",
        "workingLatex": "a = \\frac{\\mathrm{d}v}{\\mathrm{d}t}",
        "explanation": "Acceleration is defined as the derivative of velocity with respect to time, so differentiating $v$ tells us how the velocity is changing at each instant.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Differentiate the velocity term by term.",
        "workingLatex": "a = \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(5t^2 - 2t + 1\\right) = 10t - 2",
        "explanation": "Using the power rule, $5t^2$ becomes $10t$, $-2t$ becomes $-2$, and the constant $+1$ differentiates to $0$. This gives a formula for the acceleration at any time.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute the required time $t = 3$.",
        "workingLatex": "a = 10(3) - 2",
        "explanation": "The question asks for the acceleration at one specific moment, so we replace $t$ with $3$ in the acceleration formula.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the arithmetic.",
        "workingLatex": "a = 30 - 2 = 28",
        "explanation": "Carrying out the multiplication and subtraction gives the numerical value of the acceleration at $t = 3\\ \\text{s}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State the acceleration with units.",
        "workingLatex": "a = 28 \\ \\text{m s}^{-2}",
        "explanation": "Acceleration is measured in metres per second squared, so we attach those units to the final value.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 28 \\ \\text{m s}^{-2}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q013",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "expression",
  "tags": ["variable-acceleration", "integration", "constant-of-integration", "initial-conditions"],
  "questionText": "A particle moves in a straight line with acceleration $a = 2t - 4$ (in $\\text{m s}^{-2}$) at time $t$ seconds. Given that $v = 3\\ \\text{m s}^{-1}$ when $t = 0$, find $v(t)$ by integration.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down the acceleration and the direction of working.",
        "workingLatex": "a = 2t - 4, \\qquad v = \\int a \\,\\mathrm{d}t",
        "explanation": "We are going from acceleration back to velocity, which reverses differentiation. Integration is the tool that undoes differentiation, so velocity is the integral of acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Set up the integral for velocity.",
        "workingLatex": "v = \\int \\left(2t - 4\\right)\\,\\mathrm{d}t",
        "explanation": "Integrating the acceleration expression will produce a formula for velocity, apart from an unknown constant that we will fix using the given information.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate term by term using the power rule for integration.",
        "workingLatex": "v = t^2 - 4t + C",
        "explanation": "For integration we raise the power by one and divide by the new power, so $2t$ becomes $t^2$ and $-4$ becomes $-4t$. The $+C$ represents any constant velocity that would vanish on differentiating.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the initial condition $v = 3$ at $t = 0$.",
        "workingLatex": "3 = (0)^2 - 4(0) + C",
        "explanation": "The constant $C$ is not yet known, but the given starting velocity pins it down. Substituting the known values of $v$ and $t$ turns the equation into one we can solve for $C$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the constant of integration.",
        "workingLatex": "3 = C \\quad\\Rightarrow\\quad C = 3",
        "explanation": "With $t = 0$ every term containing $t$ disappears, leaving $C$ equal to the initial velocity of $3\\ \\text{m s}^{-1}$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the complete velocity function.",
        "workingLatex": "v = t^2 - 4t + 3",
        "explanation": "Putting the value of $C$ back into the integrated expression gives the velocity at any time $t$, now fully determined by the starting condition.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = t^2 - 4t + 3 \\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q014",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["variable-acceleration", "integration", "displacement", "initial-conditions"],
  "questionText": "A particle starts at the origin and moves in a straight line with velocity $v = 3t^2$ (in $\\text{m s}^{-1}$) at time $t$ seconds. Find its displacement $s(t)$ from the origin.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the relationship between displacement and velocity.",
        "workingLatex": "s = \\int v \\,\\mathrm{d}t",
        "explanation": "Displacement is recovered from velocity by integration, because integration reverses the differentiation that turns $s$ into $v$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Set up the integral.",
        "workingLatex": "s = \\int 3t^2 \\,\\mathrm{d}t",
        "explanation": "Substituting the given velocity into the integral prepares us to find the displacement formula, with a constant to be fixed by the starting position.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate using the power rule.",
        "workingLatex": "s = t^3 + C",
        "explanation": "Raising the power by one and dividing by the new power turns $3t^2$ into $\\tfrac{3}{3}t^3 = t^3$. The $+C$ accounts for the unknown starting position.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the initial condition: at the origin means $s = 0$ when $t = 0$.",
        "workingLatex": "0 = (0)^3 + C",
        "explanation": "'Starts at the origin' tells us the displacement is zero at the start, so substituting $t = 0$ and $s = 0$ lets us find $C$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the constant.",
        "workingLatex": "C = 0",
        "explanation": "Because both the starting position and the $t^3$ term are zero at $t = 0$, the constant of integration is zero here.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the displacement function.",
        "workingLatex": "s = t^3",
        "explanation": "With $C = 0$, the displacement from the origin is simply $t^3$ metres at time $t$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$s = t^3 \\ \\text{m}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q015",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["variable-acceleration", "differentiation", "velocity", "sign-interpretation"],
  "questionText": "A particle moves in a straight line so that its displacement from a fixed point is $s = 10t - t^2$ metres at time $t$ seconds. Find the velocity when $t = 4\\ \\text{s}$ and explain what the sign of your answer means.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down the displacement expression.",
        "workingLatex": "s = 10t - t^2",
        "explanation": "We start from displacement because velocity is its rate of change, so one differentiation will give the velocity.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "State that velocity is the derivative of displacement.",
        "workingLatex": "v = \\frac{\\mathrm{d}s}{\\mathrm{d}t}",
        "explanation": "Velocity measures how quickly the displacement is changing at any instant, so it is found by differentiating $s$ with respect to time.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Differentiate term by term.",
        "workingLatex": "v = 10 - 2t",
        "explanation": "The power rule turns $10t$ into $10$ and $-t^2$ into $-2t$. This gives the velocity at any time $t$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Substitute $t = 4$.",
        "workingLatex": "v = 10 - 2(4)",
        "explanation": "We want the velocity at one particular moment, so we replace $t$ with $4$ in the velocity formula.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate.",
        "workingLatex": "v = 10 - 8 = 2 \\ \\text{m s}^{-1}",
        "explanation": "Carrying out the arithmetic gives the velocity at $t = 4\\ \\text{s}$, complete with its units.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Interpret the sign of the velocity.",
        "workingLatex": "v = +2 \\ \\text{m s}^{-1} > 0",
        "explanation": "A positive velocity means the particle is moving in the direction of increasing $s$, that is, in the positive direction away from the fixed point. A negative value would have meant it was travelling the other way.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 2 \\ \\text{m s}^{-1}$; the sign is positive, so the particle is moving in the positive direction (the direction of increasing $s$)."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q016",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "written",
  "tags": ["variable-acceleration", "differentiation", "acceleration", "at-rest"],
  "questionText": "A particle moves in a straight line with velocity $v = 2t - 6$ (in $\\text{m s}^{-1}$) at time $t$ seconds. Find the acceleration, and find the time at which the particle is at rest.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down the velocity expression.",
        "workingLatex": "v = 2t - 6",
        "explanation": "The velocity is our starting point: differentiating it gives acceleration, and setting it to zero gives the moment of rest.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Differentiate to find the acceleration.",
        "workingLatex": "a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 2",
        "explanation": "Acceleration is the rate of change of velocity, so we differentiate $v$. Here $2t$ becomes $2$ and the constant $-6$ becomes $0$, giving a constant acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the meaning of 'at rest'.",
        "workingLatex": "v = 0",
        "explanation": "A particle is at rest at the instant its velocity is zero. So to find that moment we set the velocity expression equal to zero.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set the velocity to zero.",
        "workingLatex": "2t - 6 = 0",
        "explanation": "Replacing $v$ with $0$ turns the problem into an equation for the time $t$ at which the particle momentarily stops.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $t$.",
        "workingLatex": "2t = 6 \\quad\\Rightarrow\\quad t = 3",
        "explanation": "Adding $6$ to both sides and dividing by $2$ isolates $t$, giving the time when the particle is at rest.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "State both answers with units.",
        "workingLatex": "a = 2 \\ \\text{m s}^{-2}, \\qquad t = 3 \\ \\text{s}",
        "explanation": "The acceleration is a constant $2\\ \\text{m s}^{-2}$, and the particle is instantaneously at rest at $t = 3\\ \\text{s}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$a = 2 \\ \\text{m s}^{-2}$; the particle is at rest at $t = 3 \\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q017",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["variable-acceleration", "integration", "constant-of-integration", "velocity"],
  "questionText": "A particle moves in a straight line with acceleration $a = 6t - 2$ (in $\\text{m s}^{-2}$) at time $t$ seconds. Given that $v = 0$ when $t = 0$, integrate to find $v(t)$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State that velocity is the integral of acceleration.",
        "workingLatex": "v = \\int a \\,\\mathrm{d}t",
        "explanation": "To move from acceleration back to velocity we integrate, since integration undoes the differentiation that links $v$ to $a$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Set up the integral.",
        "workingLatex": "v = \\int \\left(6t - 2\\right)\\,\\mathrm{d}t",
        "explanation": "Substituting the given acceleration prepares us to integrate and produce a velocity formula, up to a constant fixed by the initial condition.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate term by term.",
        "workingLatex": "v = 3t^2 - 2t + C",
        "explanation": "Raising each power by one and dividing, $6t$ integrates to $3t^2$ and $-2$ integrates to $-2t$. The $+C$ allows for an unknown starting velocity.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the initial condition $v = 0$ at $t = 0$.",
        "workingLatex": "0 = 3(0)^2 - 2(0) + C",
        "explanation": "The starting velocity is given as zero, so substituting $t = 0$ and $v = 0$ lets us determine the constant of integration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the constant.",
        "workingLatex": "C = 0",
        "explanation": "With $t = 0$ the terms in $t$ vanish, leaving $C = 0$ because the particle begins from rest.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the velocity function.",
        "workingLatex": "v = 3t^2 - 2t",
        "explanation": "Placing $C = 0$ back into the integral gives the velocity at any time $t$, fully fixed by the starting condition.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 3t^2 - 2t \\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q018",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 2,
  "answerType": "expression",
  "tags": ["variable-acceleration", "differentiation", "velocity", "power-rule"],
  "questionText": "A particle moves in a straight line so that its displacement from a fixed point is $s = \\tfrac{1}{4}t^4 - t^2$ metres at time $t$ seconds. Find the velocity $v = \\dfrac{\\mathrm{d}s}{\\mathrm{d}t}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
        {
                "stepNumber": 1,
                "description": "Write down the displacement expression",
                "workingLatex": "s = \\tfrac14 t^4 - t^2",
                "explanation": "This is the position of the particle at time $t$. We will differentiate it to find how fast the position is changing.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "State that velocity is the derivative of displacement",
                "workingLatex": "v = \\frac{\\mathrm ds}{\\mathrm dt}",
                "explanation": "Velocity measures the rate of change of position, so it is the derivative of $s$ with respect to $t$.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "State the power rule",
                "workingLatex": "\\frac{\\mathrm d}{\\mathrm dt}\\left(kt^n\\right) = kn\\,t^{n-1}",
                "explanation": "Both terms are constants times powers of $t$, so we differentiate each by bringing the power down and reducing the index by one.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Differentiate the first term",
                "workingLatex": "\\frac{\\mathrm d}{\\mathrm dt}\\left(\\tfrac14 t^4\\right) = \\tfrac14\\cdot 4\\,t^3 = t^3",
                "explanation": "The power 4 multiplies the coefficient $\\tfrac14$ to give 1, and the index drops to 3, leaving $t^3$.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Differentiate the second term",
                "workingLatex": "\\frac{\\mathrm d}{\\mathrm dt}(-t^2) = -2t",
                "explanation": "The power 2 comes down to give $-2$, and the index drops to 1, giving $-2t$.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Combine to write the velocity",
                "workingLatex": "v = t^3 - 2t\\ \\text{m s}^{-1}",
                "explanation": "Summing the two derivatives gives the velocity as a function of time.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Sense-check the expression",
                "workingLatex": "v = t\\left(t^2 - 2\\right),\\qquad v(0) = 0",
                "explanation": "Factorising shows the velocity is zero at $t=0$ and at $t=\\sqrt2$, which is consistent with the particle starting momentarily at rest — a quick confidence check on the answer.",
                "diagram": null
        }
],
    "finalAnswer": "$v = t^3 - 2t \\ \\text{m s}^{-1}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q019",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 3,
  "answerType": "expression",
  "tags": ["variable-acceleration", "integration", "displacement", "initial-conditions"],
  "questionText": "A particle starts at the origin and moves in a straight line with velocity $v = 8 - 2t$ (in $\\text{m s}^{-1}$) at time $t$ seconds. Find the displacement $s(t)$ from the origin.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State that displacement is the integral of velocity.",
        "workingLatex": "s = \\int v \\,\\mathrm{d}t",
        "explanation": "To recover displacement from velocity we integrate, because integration reverses the differentiation that turns $s$ into $v$.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Set up the integral.",
        "workingLatex": "s = \\int \\left(8 - 2t\\right)\\,\\mathrm{d}t",
        "explanation": "Substituting the given velocity gets us ready to integrate and find a displacement formula, with a constant fixed by the starting position.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate term by term.",
        "workingLatex": "s = 8t - t^2 + C",
        "explanation": "Raising each power by one and dividing, $8$ integrates to $8t$ and $-2t$ integrates to $-t^2$. The $+C$ represents the unknown starting position.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the initial condition: at the origin means $s = 0$ when $t = 0$.",
        "workingLatex": "0 = 8(0) - (0)^2 + C",
        "explanation": "Because the particle starts at the origin its displacement is zero at $t = 0$, so we substitute those values to find $C$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the constant.",
        "workingLatex": "C = 0",
        "explanation": "With every $t$ term vanishing at $t = 0$, the constant equals the starting displacement, which is zero here.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Write the displacement function.",
        "workingLatex": "s = 8t - t^2",
        "explanation": "Putting $C = 0$ back into the integral gives the displacement from the origin at any time $t$.",
        "diagram": null
      }
    ],
    "finalAnswer": "$s = 8t - t^2 \\ \\text{m}$"
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q020",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Easy",
  "marks": 4,
  "answerType": "written",
  "tags": ["variable-acceleration", "differentiation", "at-rest", "quadratic"],
  "questionText": "A particle moves in a straight line so that its displacement from a fixed point is $s = t^3 - 6t^2 + 9t$ metres at time $t$ seconds. Find the velocity, and find the two times at which the particle is at rest.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Write down the displacement expression.",
        "workingLatex": "s = t^3 - 6t^2 + 9t",
        "explanation": "We start from displacement because velocity is its derivative, and the times at rest are where that velocity is zero.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Differentiate to find the velocity.",
        "workingLatex": "v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 3t^2 - 12t + 9",
        "explanation": "Applying the power rule to each term gives the velocity: $t^3$ becomes $3t^2$, $-6t^2$ becomes $-12t$, and $9t$ becomes $9$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Use the condition for the particle being at rest.",
        "workingLatex": "v = 0 \\quad\\Rightarrow\\quad 3t^2 - 12t + 9 = 0",
        "explanation": "The particle is at rest whenever its velocity is zero, so we set the velocity expression equal to zero to find those times.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Simplify the quadratic by dividing through by 3.",
        "workingLatex": "t^2 - 4t + 3 = 0",
        "explanation": "Every term shares a factor of $3$, so dividing by $3$ gives a simpler quadratic that is easier to factorise without changing its roots.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Factorise the quadratic.",
        "workingLatex": "(t - 1)(t - 3) = 0",
        "explanation": "We look for two numbers that multiply to $3$ and add to $-4$, namely $-1$ and $-3$. This factorised form makes the solutions easy to read off.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the two times.",
        "workingLatex": "t = 1 \\quad \\text{or} \\quad t = 3",
        "explanation": "A product is zero only when one of its factors is zero, so setting each bracket to zero gives the two instants at which the particle is momentarily at rest.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the results.",
        "workingLatex": "v = 3t^2 - 12t + 9 \\ \\text{m s}^{-1}, \\qquad t = 1\\ \\text{s}, \\ t = 3\\ \\text{s}",
        "explanation": "The velocity function is $3t^2 - 12t + 9$, and the particle is at rest at $t = 1\\ \\text{s}$ and $t = 3\\ \\text{s}$, where it changes direction.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 3t^2 - 12t + 9 \\ \\text{m s}^{-1}$; the particle is at rest at $t = 1 \\ \\text{s}$ and $t = 3 \\ \\text{s}$."
  }
},
  {
    "id": "al.y1.mech.variable-acceleration.q021",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Easy",
    "marks": 4,
    "answerType": "expression",
    "tags": ["variable-acceleration", "integration", "initial-conditions", "kinematics"],
    "questionText": "A particle moves in a straight line with acceleration $a = 12t - 6 \\ \\text{m s}^{-2}$. When $t = 0$ its velocity is $v = 4 \\ \\text{m s}^{-1}$ and its displacement is $s = 0 \\ \\text{m}$. Find expressions for the velocity $v(t)$ and the displacement $s(t)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Identify how velocity relates to acceleration.",
          "workingLatex": "v = \\int a \\ \\mathrm dt",
          "explanation": "Acceleration is the rate of change of velocity, so velocity is the accumulated effect of acceleration over time. Reversing the derivative means integrating with respect to $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate the acceleration to get velocity.",
          "workingLatex": "v = \\int (12t - 6) \\ \\mathrm dt = 6t^2 - 6t + C",
          "explanation": "Integrating each term raises its power by one and divides by the new power: $12t$ becomes $6t^2$ and $-6$ becomes $-6t$. The constant $C$ captures the unknown starting velocity.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the initial velocity to find C.",
          "workingLatex": "4 = 6(0)^2 - 6(0) + C \\implies C = 4",
          "explanation": "The condition $v = 4$ at $t = 0$ pins down the constant. Substituting $t = 0$ removes every term except $C$, so $C$ must equal the given starting velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "State the velocity expression.",
          "workingLatex": "v = 6t^2 - 6t + 4",
          "explanation": "With the constant known, this is the complete rule for the velocity at any time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Identify how displacement relates to velocity.",
          "workingLatex": "s = \\int v \\ \\mathrm dt",
          "explanation": "Velocity is the rate of change of displacement, so displacement is found by integrating the velocity, exactly one step further along the same chain.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Integrate the velocity to get displacement.",
          "workingLatex": "s = \\int (6t^2 - 6t + 4) \\ \\mathrm dt = 2t^3 - 3t^2 + 4t + C",
          "explanation": "Integrating term by term gives $2t^3$, $-3t^2$ and $4t$. A new constant of integration appears, representing the unknown starting position.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Use the initial displacement to find C.",
          "workingLatex": "0 = 2(0)^3 - 3(0)^2 + 4(0) + C \\implies C = 0",
          "explanation": "The particle starts at $s = 0$, so substituting $t = 0$ shows the constant is zero here.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "State the displacement expression.",
          "workingLatex": "s = 2t^3 - 3t^2 + 4t",
          "explanation": "This completes the pair of formulae, giving position and velocity at any time from the acceleration and the starting conditions.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 6t^2 - 6t + 4 \\ \\text{m s}^{-1}$ and $s = 2t^3 - 3t^2 + 4t \\ \\text{m}$"
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q022",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Easy",
    "marks": 3,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "at-rest", "factorising", "kinematics"],
    "questionText": "A particle moves in a straight line with velocity $v = t^2 - 4t + 3 \\ \\text{m s}^{-1}$, where $t \\ge 0$ is the time in seconds. Find the two times at which the particle is instantaneously at rest.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Translate 'at rest' into an equation.",
          "workingLatex": "v = 0",
          "explanation": "A particle is at rest when it is momentarily not moving, which means its velocity is zero. So we set the velocity expression equal to zero.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Write down the equation to solve.",
          "workingLatex": "t^2 - 4t + 3 = 0",
          "explanation": "Replacing $v$ with $0$ turns the physics question into a quadratic equation for the time $t$.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic.",
          "workingLatex": "(t - 1)(t - 3) = 0",
          "explanation": "We look for two numbers that multiply to $+3$ and add to $-4$; these are $-1$ and $-3$, giving this factorisation.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the zero product principle.",
          "workingLatex": "t - 1 = 0 \\quad \\text{or} \\quad t - 3 = 0",
          "explanation": "If a product of two factors is zero, at least one factor must be zero. This splits the problem into two simple equations.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Solve for each time.",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = 3",
          "explanation": "Each factor gives a valid time, and both are positive so both are physically allowed in this motion.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "State the conclusion.",
          "workingLatex": "t = 1 \\ \\text{s} \\quad \\text{and} \\quad t = 3 \\ \\text{s}",
          "explanation": "The particle stops momentarily at these two instants, which is typical when it moves forward, reverses, then moves forward again.",
          "diagram": null
        }
      ],
      "finalAnswer": "$t = 1 \\ \\text{s}$ and $t = 3 \\ \\text{s}$"
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q023",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["variable-acceleration", "differentiation", "at-rest", "kinematics"],
    "questionText": "A particle moves in a straight line so that its displacement from the origin is $s = t^3 - 6t^2 + 9t + 4 \\ \\text{m}$, where $t \\ge 0$ is the time in seconds. Find expressions for the velocity and the acceleration, and find the times at which the velocity is zero.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Relate velocity to displacement.",
          "workingLatex": "v = \\frac{\\mathrm ds}{\\mathrm dt}",
          "explanation": "Velocity measures how quickly displacement changes, so it is the derivative of the displacement with respect to time.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the displacement.",
          "workingLatex": "v = 3t^2 - 12t + 9",
          "explanation": "Differentiating term by term multiplies by the power and reduces it by one: $t^3 \\to 3t^2$, $-6t^2 \\to -12t$, $9t \\to 9$, and the constant $4$ disappears since a fixed offset does not affect speed.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Relate acceleration to velocity.",
          "workingLatex": "a = \\frac{\\mathrm dv}{\\mathrm dt}",
          "explanation": "Acceleration measures how quickly velocity changes, so it is one further derivative from the velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Differentiate the velocity.",
          "workingLatex": "a = 6t - 12",
          "explanation": "Differentiating $3t^2 - 12t + 9$ gives $6t - 12$; the constant term drops out just as before.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set the velocity to zero.",
          "workingLatex": "3t^2 - 12t + 9 = 0",
          "explanation": "The velocity is zero when the particle is momentarily at rest, so we solve this equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Divide through by the common factor.",
          "workingLatex": "t^2 - 4t + 3 = 0",
          "explanation": "Every term shares a factor of $3$; dividing by it leaves a simpler quadratic with the same roots.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Factorise.",
          "workingLatex": "(t - 1)(t - 3) = 0",
          "explanation": "We need two numbers multiplying to $3$ and summing to $-4$, namely $-1$ and $-3$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Solve for the times.",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = 3",
          "explanation": "Setting each factor to zero gives the two instants at which the velocity vanishes; both are non-negative and therefore valid.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the results.",
          "workingLatex": "v = 3t^2 - 12t + 9, \\quad a = 6t - 12, \\quad t = 1 \\ \\text{s}, \\ 3 \\ \\text{s}",
          "explanation": "These give the full velocity and acceleration rules together with the two rest times, describing the particle's motion completely.",
          "diagram": null
        }
      ],
      "finalAnswer": "$v = 3t^2 - 12t + 9 \\ \\text{m s}^{-1}$, $a = 6t - 12 \\ \\text{m s}^{-2}$; velocity is zero at $t = 1 \\ \\text{s}$ and $t = 3 \\ \\text{s}$"
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q024",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "at-rest", "differentiation", "kinematics"],
    "questionText": "A particle moves in a straight line with velocity $v = 3t^2 - 12t + 9 \\ \\text{m s}^{-1}$, where $t \\ge 0$ is the time in seconds. Find the times at which the particle is at rest, and the acceleration at each of those times.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Set the velocity to zero.",
          "workingLatex": "3t^2 - 12t + 9 = 0",
          "explanation": "The particle is at rest when its velocity is zero, so we begin by solving this equation for $t$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Simplify by dividing out the common factor.",
          "workingLatex": "t^2 - 4t + 3 = 0",
          "explanation": "All three terms are divisible by $3$; removing that factor makes the quadratic easier to factorise without changing its roots.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the quadratic.",
          "workingLatex": "(t - 1)(t - 3) = 0",
          "explanation": "Two numbers that multiply to $3$ and add to $-4$ are $-1$ and $-3$, giving this factorised form.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Read off the rest times.",
          "workingLatex": "t = 1 \\quad \\text{or} \\quad t = 3",
          "explanation": "Each factor set to zero gives a time at which the particle is momentarily still.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Find the acceleration by differentiating.",
          "workingLatex": "a = \\frac{\\mathrm dv}{\\mathrm dt} = 6t - 12",
          "explanation": "Acceleration is the rate of change of velocity, so we differentiate the velocity expression to obtain a rule for $a$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the acceleration at the first rest time.",
          "workingLatex": "a(1) = 6(1) - 12 = -6",
          "explanation": "Substituting $t = 1$ gives the acceleration there. The negative sign means the velocity is decreasing as the particle comes to rest and begins to reverse.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the acceleration at the second rest time.",
          "workingLatex": "a(3) = 6(3) - 12 = 6",
          "explanation": "Substituting $t = 3$ gives a positive acceleration, meaning the velocity is increasing again as the particle stops and moves forward once more.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Interpret the signs.",
          "workingLatex": "a(1) = -6, \\quad a(3) = +6",
          "explanation": "The opposite signs make physical sense: at $t = 1$ the particle turns from forward to backward motion, and at $t = 3$ it turns from backward to forward.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answers.",
          "workingLatex": "t = 1 \\ \\text{s}: a = -6 \\ \\text{m s}^{-2}; \\quad t = 3 \\ \\text{s}: a = 6 \\ \\text{m s}^{-2}",
          "explanation": "This gives both rest times together with the acceleration acting at each instant.",
          "diagram": null
        }
      ],
      "finalAnswer": "At rest at $t = 1 \\ \\text{s}$ (where $a = -6 \\ \\text{m s}^{-2}$) and $t = 3 \\ \\text{s}$ (where $a = 6 \\ \\text{m s}^{-2}$)"
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q025",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "expression",
    "tags": ["variable-acceleration", "integration", "initial-conditions", "kinematics"],
    "questionText": "A particle moves in a straight line with acceleration $a = 6t - 4 \\ \\text{m s}^{-2}$. When $t = 0$ its velocity is $v = 1 \\ \\text{m s}^{-1}$ and its displacement is $s = 0 \\ \\text{m}$. Find an expression for the displacement $s(t)$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
                "stepNumber": 1,
                "description": "Decide to integrate the acceleration",
                "workingLatex": "v = \\int a\\,\\mathrm dt",
                "explanation": "Velocity is the integral of acceleration, so integrating $a$ with respect to $t$ recovers $v$. Because integration reverses differentiation, an unknown constant appears.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "Integrate $a = 6t - 4$",
                "workingLatex": "v = 3t^2 - 4t + C_1",
                "explanation": "Raising each power by one and dividing gives $3t^2$ and $-4t$; the constant $C_1$ stands for any information lost when the original velocity was differentiated to $a$.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "Apply the initial velocity condition",
                "workingLatex": "v(0) = 1 \\;\\Rightarrow\\; C_1 = 1",
                "explanation": "At $t=0$ the velocity is $1$, and every term with $t$ vanishes, so $C_1$ must equal 1. This pins down the constant.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Write the full velocity expression",
                "workingLatex": "v = 3t^2 - 4t + 1",
                "explanation": "With the constant known, the velocity is completely determined for all $t$.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Integrate the velocity to find displacement",
                "workingLatex": "s = \\int v\\,\\mathrm dt = t^3 - 2t^2 + t + C_2",
                "explanation": "Displacement is the integral of velocity, so we integrate again, once more introducing a constant $C_2$.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Apply the initial displacement condition",
                "workingLatex": "s(0) = 0 \\;\\Rightarrow\\; C_2 = 0",
                "explanation": "At $t=0$ the displacement is 0, and all the $t$ terms vanish, forcing $C_2 = 0$.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "State the displacement expression",
                "workingLatex": "s = t^3 - 2t^2 + t",
                "explanation": "This is the position of the particle at any time $t$.",
                "diagram": null
        },
        {
                "stepNumber": 8,
                "description": "Verify by differentiating back",
                "workingLatex": "\\frac{\\mathrm ds}{\\mathrm dt} = 3t^2 - 4t + 1 = v,\\quad \\frac{\\mathrm d^2 s}{\\mathrm dt^2} = 6t - 4 = a",
                "explanation": "Differentiating the answer once returns the velocity and twice returns the given acceleration, confirming both integrations are correct.",
                "diagram": null
        },
        {
                "stepNumber": 9,
                "description": "Sanity-check the initial values",
                "workingLatex": "s(0) = 0,\\qquad v(0) = 1",
                "explanation": "Substituting $t=0$ reproduces the stated starting conditions, so the constants have been applied correctly.",
                "diagram": null
        }
],
      "finalAnswer": "$s = t^3 - 2t^2 + t \\ \\text{m}$"
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q026",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "maximum-velocity", "differentiation", "kinematics"],
    "questionText": "A particle moves in a straight line with velocity $v = 4t - t^2 \\ \\text{m s}^{-1}$, where $t \\ge 0$ is the time in seconds. Find the maximum velocity of the particle and the time at which it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
                "stepNumber": 1,
                "description": "Recognise the condition for maximum velocity",
                "workingLatex": "\\text{max } v \\;\\Rightarrow\\; \\frac{\\mathrm dv}{\\mathrm dt} = 0",
                "explanation": "Velocity is greatest at a turning point of the $v$–$t$ relationship, where its rate of change — the acceleration — is momentarily zero.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "Differentiate the velocity to get the acceleration",
                "workingLatex": "a = \\frac{\\mathrm dv}{\\mathrm dt} = 4 - 2t",
                "explanation": "Differentiating $v = 4t - t^2$ term by term gives the acceleration as a function of time.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "Set the acceleration to zero",
                "workingLatex": "4 - 2t = 0",
                "explanation": "At the maximum the acceleration vanishes, so we solve this equation for the time.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Solve for the time",
                "workingLatex": "t = 2\\ \\text{s}",
                "explanation": "Rearranging gives $t = 2$, the instant at which the velocity stops increasing and is about to decrease.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Confirm it is a maximum",
                "workingLatex": "\\frac{\\mathrm da}{\\mathrm dt} = -2 < 0",
                "explanation": "The acceleration is decreasing through zero (it goes from positive to negative), so the velocity is indeed at a maximum, not a minimum.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Evaluate the velocity at this time",
                "workingLatex": "v(2) = 4(2) - 2^2 = 8 - 4 = 4",
                "explanation": "Substituting $t=2$ into the velocity gives the greatest value it reaches.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Check with nearby values",
                "workingLatex": "v(1) = 3,\\qquad v(3) = 3",
                "explanation": "Just before and just after $t=2$ the velocity is smaller (3 each), which supports 4 being the peak.",
                "diagram": null
        },
        {
                "stepNumber": 8,
                "description": "Interpret the motion",
                "workingLatex": "\\text{speeds up to } t=2, \\text{ then slows}",
                "explanation": "The particle accelerates until $t=2$, reaches its fastest of $4\\ \\text{m s}^{-1}$, and then decelerates — the natural shape of a downward parabola in $v$.",
                "diagram": null
        },
        {
                "stepNumber": 9,
                "description": "State the conclusion",
                "workingLatex": "v_{\\max} = 4\\ \\text{m s}^{-1}\\ \\text{at } t = 2\\ \\text{s}",
                "explanation": "The maximum velocity is $4\\ \\text{m s}^{-1}$, occurring at $t = 2\\ \\text{s}$.",
                "diagram": null
        }
],
      "finalAnswer": "Maximum velocity $= 4 \\ \\text{m s}^{-1}$ at $t = 2 \\ \\text{s}$"
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q027",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "at-rest", "differentiation", "position"],
    "questionText": "A particle moves in a straight line so that its displacement from the origin is $s = 2t^3 - 9t^2 + 12t \\ \\text{m}$, where $t \\ge 0$ is the time in seconds. Find the times at which the particle is instantaneously at rest, and its position at each of those times.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
                "stepNumber": 1,
                "description": "Recall what 'at rest' means",
                "workingLatex": "\\text{at rest} \\iff v = 0",
                "explanation": "A particle is momentarily at rest when its velocity is zero, so we first need the velocity as a function of time.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "Differentiate to find the velocity",
                "workingLatex": "v = \\frac{\\mathrm ds}{\\mathrm dt} = 6t^2 - 18t + 12",
                "explanation": "Differentiating the displacement term by term gives the velocity.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "Set the velocity to zero",
                "workingLatex": "6t^2 - 18t + 12 = 0",
                "explanation": "The rest times are the solutions of $v = 0$.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Divide out the common factor",
                "workingLatex": "t^2 - 3t + 2 = 0",
                "explanation": "Dividing through by 6 leaves a simpler quadratic with the same roots, which is easier to factorise.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Factorise",
                "workingLatex": "(t - 1)(t - 2) = 0",
                "explanation": "We need two numbers multiplying to 2 and adding to 3, namely 1 and 2.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Read off the rest times",
                "workingLatex": "t = 1\\ \\text{s} \\quad \\text{or} \\quad t = 2\\ \\text{s}",
                "explanation": "Both roots are positive, so the particle is at rest at these two instants.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Find the position at the first rest time",
                "workingLatex": "s(1) = 2 - 9 + 12 = 5\\ \\text{m}",
                "explanation": "Substituting $t=1$ into the displacement gives the particle's position at the first stop.",
                "diagram": null
        },
        {
                "stepNumber": 8,
                "description": "Find the position at the second rest time",
                "workingLatex": "s(2) = 16 - 36 + 24 = 4\\ \\text{m}",
                "explanation": "Substituting $t=2$ gives the position at the second stop.",
                "diagram": null
        },
        {
                "stepNumber": 9,
                "description": "Interpret the motion",
                "workingLatex": "5\\ \\text{m} \\to 4\\ \\text{m}: \\text{ the particle reverses}",
                "explanation": "Between the two stops the position falls from 5 m to 4 m, so the particle moved forward, halted, then came back — the velocity changed sign, which is why there are two rest instants.",
                "diagram": null
        },
        {
                "stepNumber": 10,
                "description": "State the final answers",
                "workingLatex": "t = 1\\ \\text{s}\\ (s = 5\\ \\text{m}),\\quad t = 2\\ \\text{s}\\ (s = 4\\ \\text{m})",
                "explanation": "The particle is at rest at $t=1\\ \\text{s}$ at $5\\ \\text{m}$ and at $t=2\\ \\text{s}$ at $4\\ \\text{m}$.",
                "diagram": null
        }
],
      "finalAnswer": "At rest at $t = 1 \\ \\text{s}$ (position $5 \\ \\text{m}$) and $t = 2 \\ \\text{s}$ (position $4 \\ \\text{m}$)"
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q028",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "at-rest", "integration", "distance"],
    "questionText": "A particle moves in a straight line with velocity $v = 15 - 2t - t^2 \\ \\text{m s}^{-1}$, where $t \\ge 0$ is the time in seconds. Starting from $s = 0$, find the time at which the particle comes to rest and the distance it has travelled up to that instant.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
                "stepNumber": 1,
                "description": "Recall what 'at rest' means",
                "workingLatex": "\\text{at rest} \\iff v = 0",
                "explanation": "The particle stops when its velocity is zero, so we set the velocity expression equal to zero.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "Set the velocity to zero and rearrange",
                "workingLatex": "15 - 2t - t^2 = 0 \\;\\Rightarrow\\; t^2 + 2t - 15 = 0",
                "explanation": "Multiplying through by $-1$ puts the quadratic in the usual form with a positive leading term, ready to factorise.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "Factorise the quadratic",
                "workingLatex": "(t + 5)(t - 3) = 0",
                "explanation": "Two numbers multiplying to $-15$ and adding to $2$ are $5$ and $-3$.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Select the physically valid root",
                "workingLatex": "t = 3\\ \\text{s}\\quad(\\text{reject } t = -5)",
                "explanation": "Time cannot be negative, so we discard $t=-5$ and keep $t=3\\ \\text{s}$ as the moment the particle comes to rest.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Check the sign of the velocity on the interval",
                "workingLatex": "v(1) = 15 - 2 - 1 = 12 > 0",
                "explanation": "On $0 \\le t < 3$ the velocity is positive, so the particle keeps moving in one direction without reversing.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Relate distance to displacement here",
                "workingLatex": "\\text{no reversal} \\Rightarrow \\text{distance} = \\int_0^3 v\\,\\mathrm dt",
                "explanation": "Because the velocity does not change sign, the distance travelled equals the displacement, which is the integral of velocity over the interval.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Find the antiderivative of the velocity",
                "workingLatex": "\\int (15 - 2t - t^2)\\,\\mathrm dt = 15t - t^2 - \\tfrac13 t^3",
                "explanation": "Integrating each term raises its power by one and divides by the new power.",
                "diagram": null
        },
        {
                "stepNumber": 8,
                "description": "Evaluate at the limits",
                "workingLatex": "\\left[15t - t^2 - \\tfrac13 t^3\\right]_0^3",
                "explanation": "We substitute the upper limit $t=3$; the lower limit $t=0$ contributes nothing.",
                "diagram": null
        },
        {
                "stepNumber": 9,
                "description": "Compute the distance",
                "workingLatex": "45 - 9 - 9 = 27\\ \\text{m}",
                "explanation": "Working out the terms gives a total distance of $27\\ \\text{m}$.",
                "diagram": null
        },
        {
                "stepNumber": 10,
                "description": "State the conclusion",
                "workingLatex": "t = 3\\ \\text{s},\\qquad \\text{distance} = 27\\ \\text{m}",
                "explanation": "The particle comes to rest at $t = 3\\ \\text{s}$, having travelled $27\\ \\text{m}$.",
                "diagram": null
        }
],
      "finalAnswer": "Comes to rest at $t = 3 \\ \\text{s}$, having travelled $27 \\ \\text{m}$"
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q029",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Intermediate",
    "marks": 5,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "maximum-velocity", "integration", "initial-conditions"],
    "questionText": "A particle moves in a straight line with acceleration $a = 12 - 6t \\ \\text{m s}^{-2}$. When $t = 0$ the particle is at rest. Find the maximum velocity of the particle and the time at which it occurs.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
                "stepNumber": 1,
                "description": "Decide to integrate the acceleration",
                "workingLatex": "v = \\int a\\,\\mathrm dt",
                "explanation": "Velocity is the integral of acceleration, and integrating introduces a constant that the initial condition will fix.",
                "diagram": null
        },
        {
                "stepNumber": 2,
                "description": "Integrate $a = 12 - 6t$",
                "workingLatex": "v = 12t - 3t^2 + C",
                "explanation": "Raising each power by one and dividing gives $12t$ and $-3t^2$, plus the constant of integration $C$.",
                "diagram": null
        },
        {
                "stepNumber": 3,
                "description": "Apply the initial condition",
                "workingLatex": "v(0) = 0 \\;\\Rightarrow\\; C = 0",
                "explanation": "The particle starts at rest, so at $t=0$ the velocity is 0, which forces $C = 0$.",
                "diagram": null
        },
        {
                "stepNumber": 4,
                "description": "Write the velocity expression",
                "workingLatex": "v = 12t - 3t^2",
                "explanation": "With the constant known, the velocity is fully determined.",
                "diagram": null
        },
        {
                "stepNumber": 5,
                "description": "Use the condition for maximum velocity",
                "workingLatex": "\\frac{\\mathrm dv}{\\mathrm dt} = a = 0",
                "explanation": "The velocity peaks where its rate of change, the acceleration, is zero — and we already have $a = 12 - 6t$.",
                "diagram": null
        },
        {
                "stepNumber": 6,
                "description": "Solve for the time",
                "workingLatex": "12 - 6t = 0 \\;\\Rightarrow\\; t = 2\\ \\text{s}",
                "explanation": "Setting the acceleration to zero and solving gives the time of maximum velocity.",
                "diagram": null
        },
        {
                "stepNumber": 7,
                "description": "Confirm it is a maximum",
                "workingLatex": "\\frac{\\mathrm da}{\\mathrm dt} = -6 < 0",
                "explanation": "The acceleration passes from positive to negative, so the velocity is at a maximum there rather than a minimum.",
                "diagram": null
        },
        {
                "stepNumber": 8,
                "description": "Evaluate the velocity at this time",
                "workingLatex": "v(2) = 12(2) - 3(2)^2 = 24 - 12 = 12",
                "explanation": "Substituting $t=2$ into the velocity gives its greatest value.",
                "diagram": null
        },
        {
                "stepNumber": 9,
                "description": "Check with nearby values",
                "workingLatex": "v(1) = 9,\\qquad v(3) = 9",
                "explanation": "Just before and after $t=2$ the velocity is 9, comfortably below 12, confirming the peak.",
                "diagram": null
        },
        {
                "stepNumber": 10,
                "description": "State the conclusion",
                "workingLatex": "v_{\\max} = 12\\ \\text{m s}^{-1}\\ \\text{at } t = 2\\ \\text{s}",
                "explanation": "The maximum velocity is $12\\ \\text{m s}^{-1}$, reached at $t = 2\\ \\text{s}$.",
                "diagram": null
        }
],
      "finalAnswer": "Maximum velocity $= 12 \\ \\text{m s}^{-1}$ at $t = 2 \\ \\text{s}$"
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q030",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Intermediate",
    "marks": 6,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "total-distance", "integration", "sign-change"],
    "questionText": "A particle moves in a straight line with velocity $v = t^2 - 5t + 6 \\ \\text{m s}^{-1}$, where $t \\ge 0$ is the time in seconds. Find the total distance travelled by the particle between $t = 0$ and $t = 4$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find where the velocity is zero.",
          "workingLatex": "t^2 - 5t + 6 = (t - 2)(t - 3) = 0 \\implies t = 2, \\ 3",
          "explanation": "Total distance requires knowing where the particle changes direction, which happens where the velocity is zero. Factorising gives the turning times $t = 2$ and $t = 3$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Determine the sign of the velocity on each interval.",
          "workingLatex": "v(1) = 2 > 0, \\quad v(2.5) = -0.25 < 0, \\quad v(3.5) = 0.75 > 0",
          "explanation": "Testing a point in each of the intervals $[0,2]$, $[2,3]$ and $[3,4]$ shows the velocity is positive, then negative, then positive. The middle interval is where the particle moves backward, so distances must be handled interval by interval.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the displacement function by integrating.",
          "workingLatex": "s(t) = \\int (t^2 - 5t + 6) \\ \\mathrm dt = \\frac{t^3}{3} - \\frac{5t^2}{2} + 6t",
          "explanation": "Integrating the velocity gives the displacement, which we can evaluate at the interval endpoints. The constant is irrelevant here because we only use differences.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Evaluate the displacement at the key times.",
          "workingLatex": "s(0) = 0, \\ s(2) = \\tfrac{14}{3}, \\ s(3) = \\tfrac{9}{2}, \\ s(4) = \\tfrac{16}{3}",
          "explanation": "Substituting each time: $s(2) = \\tfrac{8}{3} - 10 + 12 = \\tfrac{14}{3}$, $s(3) = 9 - \\tfrac{45}{2} + 18 = \\tfrac{9}{2}$, $s(4) = \\tfrac{64}{3} - 40 + 24 = \\tfrac{16}{3}$. These are the positions at the ends of each interval.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Distance on the first interval.",
          "workingLatex": "\\left| s(2) - s(0) \\right| = \\left| \\tfrac{14}{3} - 0 \\right| = \\tfrac{14}{3}",
          "explanation": "On $[0,2]$ the velocity is positive, so the particle moves forward by $\\tfrac{14}{3} \\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Distance on the second interval.",
          "workingLatex": "\\left| s(3) - s(2) \\right| = \\left| \\tfrac{9}{2} - \\tfrac{14}{3} \\right| = \\left| -\\tfrac{1}{6} \\right| = \\tfrac{1}{6}",
          "explanation": "On $[2,3]$ the velocity is negative, so the displacement is negative. We take the magnitude because distance ignores direction; the particle backtracks by $\\tfrac{1}{6} \\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Distance on the third interval.",
          "workingLatex": "\\left| s(4) - s(3) \\right| = \\left| \\tfrac{16}{3} - \\tfrac{9}{2} \\right| = \\left| \\tfrac{5}{6} \\right| = \\tfrac{5}{6}",
          "explanation": "On $[3,4]$ the velocity is positive again, so the particle moves forward by $\\tfrac{5}{6} \\ \\text{m}$.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Add the three distances.",
          "workingLatex": "\\text{Total} = \\tfrac{14}{3} + \\tfrac{1}{6} + \\tfrac{5}{6} = \\tfrac{28}{6} + \\tfrac{1}{6} + \\tfrac{5}{6} = \\tfrac{34}{6} = \\tfrac{17}{3}",
          "explanation": "Total distance is the sum of the magnitudes on each interval. Writing everything over $6$ makes the addition clean, giving $\\tfrac{34}{6} = \\tfrac{17}{3}$.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "State the final answer.",
          "workingLatex": "\\text{Total distance} = \\frac{17}{3} \\approx 5.67 \\ \\text{m}",
          "explanation": "Because the particle reversed between $t = 2$ and $t = 3$, this total distance is greater than the net displacement, exactly as expected when the velocity changes sign.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total distance $= \\dfrac{17}{3} \\approx 5.67 \\ \\text{m}$"
    }
  },
{
  "id": "al.y1.mech.variable-acceleration.q031",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "differentiation", "minimum-velocity", "kinematics"],
  "questionText": "A particle moves in a straight line so that its displacement from a fixed origin is $s = t^3 - 12t + 5$ metres at time $t$ seconds. Find the minimum velocity of the particle.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify what is given and the tool needed.",
        "workingLatex": "s = t^3 - 12t + 5",
        "explanation": "Velocity is how fast the position changes, so it is the derivative of the displacement. Before we can talk about a smallest velocity, we first need velocity as a function of time.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Differentiate the displacement to obtain the velocity.",
        "workingLatex": "v = \\dfrac{\\mathrm ds}{\\mathrm dt} = 3t^2 - 12 \\ \\text{m s}^{-1}",
        "explanation": "Bringing each power down and reducing it by one gives the velocity. The constant $5$ disappears because a fixed starting position does not affect how fast the particle moves.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Recognise that the velocity itself changes with time.",
        "workingLatex": "v(t) = 3t^2 - 12",
        "explanation": "The velocity is a function of $t$, so it has its own smallest value. Finding that value is an ordinary minimisation problem applied to $v$ instead of to $s$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use the fact that velocity is stationary where acceleration is zero.",
        "workingLatex": "a = \\dfrac{\\mathrm dv}{\\mathrm dt}",
        "explanation": "A minimum of the velocity occurs where it stops decreasing and begins increasing, i.e. where its rate of change is zero. The rate of change of velocity is the acceleration, so we set $a = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Differentiate the velocity to get the acceleration.",
        "workingLatex": "a = 6t \\ \\text{m s}^{-2}",
        "explanation": "Differentiating $3t^2 - 12$ gives $6t$. This tells us how the velocity is changing at any moment.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve $a = 0$ to locate the candidate minimum.",
        "workingLatex": "6t = 0 \\ \\Rightarrow \\ t = 0 \\ \\text{s}",
        "explanation": "Setting the acceleration to zero finds the instant when the velocity is momentarily neither rising nor falling, the candidate for the minimum.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Confirm this is a minimum.",
        "workingLatex": "\\dfrac{\\mathrm da}{\\mathrm dt} = 6 > 0",
        "explanation": "Because the acceleration is increasing through zero (from negative to positive), the velocity falls then rises, which is exactly the shape of a minimum. Equivalently, $v = 3t^2 - 12$ is an upward parabola.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Substitute $t = 0$ into the velocity.",
        "workingLatex": "v(0) = 3(0)^2 - 12 = -12 \\ \\text{m s}^{-1}",
        "explanation": "Putting the critical time back into the velocity gives the actual minimum. The negative sign shows the particle is moving in the negative direction at this instant.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the minimum velocity.",
        "workingLatex": "v_{\\min} = -12 \\ \\text{m s}^{-1}",
        "explanation": "This is the lowest value the velocity ever takes; at every other time the particle is moving less negatively or positively.",
        "diagram": null
      }
    ],
    "finalAnswer": "Minimum velocity $= -12 \\ \\text{m s}^{-1}$ (occurring at $t = 0 \\ \\text{s}$)."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q032",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "integration", "total-distance", "sign-change", "kinematics"],
  "questionText": "A particle moves in a straight line with velocity $v = 3t^2 - 24t + 36 \\ \\text{m s}^{-1}$ at time $t$ seconds. Find the total distance travelled by the particle in the first $6$ seconds.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Interpret the question: total distance, not displacement.",
        "workingLatex": "v = 3t^2 - 24t + 36 \\ \\text{m s}^{-1}",
        "explanation": "Total distance adds up how far the particle actually travels. If it reverses direction, part of the trip cancels in the displacement but still counts as distance, so we must find any turning points first.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find when the velocity is zero (possible direction changes).",
        "workingLatex": "3t^2 - 24t + 36 = 0",
        "explanation": "The particle can only change direction where its velocity passes through zero, so these times split the motion into stretches that are each entirely forwards or entirely backwards.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve the quadratic.",
        "workingLatex": "3(t^2 - 8t + 12) = 3(t-2)(t-6) = 0 \\ \\Rightarrow \\ t = 2, \\ 6",
        "explanation": "Factorising shows the velocity vanishes at $t = 2$ and $t = 6$, both inside the interval, so we expect a reversal at $t = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the sign of the velocity on each stretch.",
        "workingLatex": "0 \\le t < 2: \\ v > 0; \\qquad 2 < t \\le 6: \\ v < 0",
        "explanation": "Testing a value in each interval ($t=1$ gives $v = 15 > 0$; $t = 4$ gives $v = -12 < 0$) shows the particle moves forwards then backwards, confirming a genuine change of direction at $t = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the velocity to get a displacement function.",
        "workingLatex": "s = \\int (3t^2 - 24t + 36)\\,\\mathrm dt = t^3 - 12t^2 + 36t + C",
        "explanation": "Position is the accumulated velocity, so we integrate. We may take $C = 0$ and measure position from the starting point, since only differences in $s$ matter for distance.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the position at the start.",
        "workingLatex": "s(0) = 0 \\ \\text{m}",
        "explanation": "Anchoring the start at the origin makes the later positions easy to compare.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the position at $t = 2$.",
        "workingLatex": "s(2) = 8 - 48 + 72 = 32 \\ \\text{m}",
        "explanation": "At $t = 2$ the particle has moved $32 \\ \\text{m}$ in the positive direction, which is as far forward as it gets before turning back.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the position at $t = 6$.",
        "workingLatex": "s(6) = 216 - 432 + 216 = 0 \\ \\text{m}",
        "explanation": "By $t = 6$ the particle is back at the origin, so its displacement over the whole $6 \\ \\text{s}$ is zero, which is exactly why we cannot use displacement for the distance.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Distance for the first stretch.",
        "workingLatex": "|s(2) - s(0)| = |32 - 0| = 32 \\ \\text{m}",
        "explanation": "Over $[0,2]$ the particle travels a straight $32 \\ \\text{m}$ forwards; the absolute value just guards against sign issues.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Distance for the second stretch.",
        "workingLatex": "|s(6) - s(2)| = |0 - 32| = 32 \\ \\text{m}",
        "explanation": "Over $[2,6]$ it retraces $32 \\ \\text{m}$ back to the origin. Taking the magnitude counts this returning journey as positive distance.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Add the stretches for the total distance.",
        "workingLatex": "32 + 32 = 64 \\ \\text{m}",
        "explanation": "Summing the distances of each one-directional stretch gives the true length of the path travelled.",
        "diagram": null
      }
    ],
    "finalAnswer": "Total distance travelled $= 64 \\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q033",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "integration", "initial-conditions", "return-to-origin"],
  "questionText": "A particle moves in a straight line with acceleration $a = 4 - 2t \\ \\text{m s}^{-2}$ at time $t$ seconds. When $t = 0$ the particle is at the origin with velocity $0$. Find the time, other than $t = 0$, at which the particle returns to the origin.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the plan: integrate acceleration up to displacement.",
        "workingLatex": "a = 4 - 2t \\ \\text{m s}^{-2}",
        "explanation": "We are given acceleration but asked about position, so we integrate once to reach velocity and again to reach displacement, fixing each constant with the given starting conditions.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the acceleration to find velocity.",
        "workingLatex": "v = \\int (4 - 2t)\\,\\mathrm dt = 4t - t^2 + C_1",
        "explanation": "Integrating reverses differentiation to recover velocity; the constant $C_1$ represents the velocity the particle already had at the start.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the condition $v = 0$ at $t = 0$.",
        "workingLatex": "0 = 4(0) - 0^2 + C_1 \\ \\Rightarrow \\ C_1 = 0",
        "explanation": "The particle starts from rest, which pins down the constant exactly.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the velocity.",
        "workingLatex": "v = 4t - t^2 \\ \\text{m s}^{-1}",
        "explanation": "This is the velocity at any time, ready to be integrated for position.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the velocity to find displacement.",
        "workingLatex": "s = \\int (4t - t^2)\\,\\mathrm dt = 2t^2 - \\tfrac13 t^3 + C_2",
        "explanation": "Integrating velocity accumulates position over time; $C_2$ records the starting position.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Apply the condition $s = 0$ at $t = 0$.",
        "workingLatex": "0 = 2(0)^2 - \\tfrac13 (0)^3 + C_2 \\ \\Rightarrow \\ C_2 = 0",
        "explanation": "The particle starts at the origin, so the constant is zero and $s$ is measured from that origin.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "State the displacement.",
        "workingLatex": "s = 2t^2 - \\tfrac13 t^3 \\ \\text{m}",
        "explanation": "This gives the position relative to the origin at any later time.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Set the displacement to zero to find the return.",
        "workingLatex": "2t^2 - \\tfrac13 t^3 = 0",
        "explanation": "Returning to the origin means the position is zero again, so we solve $s = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Factorise.",
        "workingLatex": "t^2\\left(2 - \\tfrac13 t\\right) = 0",
        "explanation": "Taking out the common factor $t^2$ separates the trivial start from the genuine return time.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Solve, discarding the start.",
        "workingLatex": "t = 0 \\ (\\text{start}) \\quad \\text{or} \\quad 2 - \\tfrac13 t = 0 \\ \\Rightarrow \\ t = 6 \\ \\text{s}",
        "explanation": "The root $t = 0$ is just the launch instant; the meaningful answer is the later time when the particle comes back to the origin.",
        "diagram": null
      }
    ],
    "finalAnswer": "The particle returns to the origin at $t = 6 \\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q034",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 4,
  "answerType": "written",
  "tags": ["variable-acceleration", "differentiation", "acceleration", "kinematics"],
  "questionText": "A particle moves in a straight line so that its displacement from the origin is $s = \\tfrac13 t^3 - t^2$ metres at time $t$ seconds. Find expressions for the velocity $v$ and the acceleration $a$, and find the time at which the acceleration is zero.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Note the relationships to be used.",
        "workingLatex": "s = \\tfrac13 t^3 - t^2, \\quad v = \\dfrac{\\mathrm ds}{\\mathrm dt}, \\quad a = \\dfrac{\\mathrm dv}{\\mathrm dt}",
        "explanation": "Displacement, velocity and acceleration form a chain linked by differentiation: differentiate once for velocity, and again for acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Differentiate the first term of $s$.",
        "workingLatex": "\\dfrac{\\mathrm d}{\\mathrm dt}\\left(\\tfrac13 t^3\\right) = t^2",
        "explanation": "Bringing the power $3$ down and dividing by $3$ leaves $t^2$, so the fraction $\\tfrac13$ is chosen precisely to give a tidy result.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Differentiate the second term and combine to get $v$.",
        "workingLatex": "\\dfrac{\\mathrm d}{\\mathrm dt}(-t^2) = -2t \\ \\Rightarrow \\ v = t^2 - 2t \\ \\text{m s}^{-1}",
        "explanation": "Differentiating $-t^2$ gives $-2t$; combining the two pieces gives the velocity at any time.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Interpret the velocity briefly.",
        "workingLatex": "v = t(t - 2)",
        "explanation": "Factorising shows the velocity is zero at $t = 0$ and $t = 2$; a helpful check on the algebra, though not needed for the acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Differentiate the first term of $v$.",
        "workingLatex": "\\dfrac{\\mathrm d}{\\mathrm dt}(t^2) = 2t",
        "explanation": "Differentiating the velocity gives the acceleration; the $t^2$ term contributes $2t$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Differentiate the second term and combine to get $a$.",
        "workingLatex": "\\dfrac{\\mathrm d}{\\mathrm dt}(-2t) = -2 \\ \\Rightarrow \\ a = 2t - 2 \\ \\text{m s}^{-2}",
        "explanation": "The $-2t$ term contributes $-2$, giving the full acceleration as a function of time.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Set the acceleration to zero.",
        "workingLatex": "2t - 2 = 0",
        "explanation": "The acceleration is zero when the velocity is momentarily neither increasing nor decreasing, so we solve this equation.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Solve for $t$.",
        "workingLatex": "2t = 2 \\ \\Rightarrow \\ t = 1 \\ \\text{s}",
        "explanation": "Dividing through by $2$ gives the single time at which the acceleration vanishes.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Collect the results.",
        "workingLatex": "v = t^2 - 2t, \\quad a = 2t - 2, \\quad a = 0 \\text{ at } t = 1 \\ \\text{s}",
        "explanation": "Gathering the three requested quantities gives a complete answer to the question.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = t^2 - 2t \\ \\text{m s}^{-1}$, $\\ a = 2t - 2 \\ \\text{m s}^{-2}$, and $a = 0$ at $t = 1 \\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q035",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "differentiation", "minimum-velocity", "acceleration"],
  "questionText": "A particle moves in a straight line with velocity $v = 2t^2 - 8t + 6 \\ \\text{m s}^{-1}$ at time $t$ seconds. Find the minimum velocity of the particle and the acceleration at the instant the velocity is a minimum.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the goal.",
        "workingLatex": "v = 2t^2 - 8t + 6 \\ \\text{m s}^{-1}",
        "explanation": "We want the least value of the velocity and the acceleration at that same moment. Since velocity is a function of time, it has a minimum we can find with calculus.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the condition for a minimum.",
        "workingLatex": "\\text{minimum of } v \\ \\Rightarrow \\ \\dfrac{\\mathrm dv}{\\mathrm dt} = 0",
        "explanation": "To minimise any smooth quantity we look for where its rate of change is zero; here that rate of change is the acceleration, which neatly ties the two parts of the question together.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Differentiate the velocity to find the acceleration.",
        "workingLatex": "a = \\dfrac{\\mathrm dv}{\\mathrm dt} = 4t - 8 \\ \\text{m s}^{-2}",
        "explanation": "The acceleration is the rate of change of velocity, and it is zero at the velocity's turning point.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set the acceleration to zero.",
        "workingLatex": "4t - 8 = 0",
        "explanation": "The minimum velocity occurs where the velocity stops falling and starts rising, i.e. where the acceleration is zero.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for $t$.",
        "workingLatex": "t = 2 \\ \\text{s}",
        "explanation": "This is the time at which the velocity reaches its extreme value.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Confirm it is a minimum.",
        "workingLatex": "\\dfrac{\\mathrm da}{\\mathrm dt} = 4 > 0",
        "explanation": "The acceleration increases through zero, so the velocity curves upward here, a minimum rather than a maximum. Equivalently $v$ is an upward parabola.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute $t = 2$ into the velocity.",
        "workingLatex": "v(2) = 2(2)^2 - 8(2) + 6 = 8 - 16 + 6 = -2 \\ \\text{m s}^{-1}",
        "explanation": "Putting the critical time back into the velocity gives the actual minimum; the negative sign means the particle is moving backwards at its slowest overall point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Find the acceleration at that instant.",
        "workingLatex": "a(2) = 4(2) - 8 = 0 \\ \\text{m s}^{-2}",
        "explanation": "This is the key idea: at the exact instant the velocity is smallest, the velocity is momentarily unchanging, so the acceleration must be zero.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the results.",
        "workingLatex": "v_{\\min} = -2 \\ \\text{m s}^{-1}, \\quad a = 0 \\ \\text{m s}^{-2}",
        "explanation": "Both requested quantities are found; the zero acceleration is a direct consequence of being at the minimum of the velocity.",
        "diagram": null
      }
    ],
    "finalAnswer": "Minimum velocity $= -2 \\ \\text{m s}^{-1}$ (at $t = 2 \\ \\text{s}$); the acceleration there is $0 \\ \\text{m s}^{-2}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q036",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "integration", "initial-conditions", "distance", "at-rest"],
  "questionText": "A particle moves in a straight line with acceleration $a = 6t \\ \\text{m s}^{-2}$ at time $t$ seconds. When $t = 0$ the particle has velocity $-9 \\ \\text{m s}^{-1}$. Find the time at which the particle is instantaneously at rest, and the distance travelled up to that instant.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the plan.",
        "workingLatex": "a = 6t \\ \\text{m s}^{-2}, \\quad v(0) = -9 \\ \\text{m s}^{-1}",
        "explanation": "Acceleration is given, so we integrate once for velocity using the initial velocity, then integrate again for position to measure distance.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the acceleration to find velocity.",
        "workingLatex": "v = \\int 6t\\,\\mathrm dt = 3t^2 + C",
        "explanation": "Integrating the acceleration recovers the velocity; the constant is the velocity the particle already had at $t = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the initial velocity.",
        "workingLatex": "3(0)^2 + C = -9 \\ \\Rightarrow \\ C = -9",
        "explanation": "The given starting velocity fixes the constant, so the velocity function is fully determined.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the velocity.",
        "workingLatex": "v = 3t^2 - 9 \\ \\text{m s}^{-1}",
        "explanation": "The particle starts moving in the negative direction and speeds up as the $3t^2$ term grows.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find when the particle is at rest.",
        "workingLatex": "3t^2 - 9 = 0 \\ \\Rightarrow \\ t^2 = 3",
        "explanation": "The particle is instantaneously at rest when its velocity is zero, which happens when $3t^2$ balances the $9$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for $t$.",
        "workingLatex": "t = \\sqrt{3} \\approx 1.73 \\ \\text{s}",
        "explanation": "Only the positive root is physical, since time runs forwards from zero.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate the velocity to find position.",
        "workingLatex": "s = \\int (3t^2 - 9)\\,\\mathrm dt = t^3 - 9t + C_2, \\quad C_2 = 0",
        "explanation": "Position is the integral of velocity; measuring displacement from the start lets us take $C_2 = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Check for a change of direction.",
        "workingLatex": "0 \\le t < \\sqrt{3}: \\ 3t^2 - 9 < 0",
        "explanation": "Across the whole interval the velocity stays negative, so the particle moves steadily in one direction and never doubles back; distance will therefore equal the magnitude of the displacement.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the position at $t = \\sqrt3$.",
        "workingLatex": "s(\\sqrt3) = (\\sqrt3)^3 - 9\\sqrt3 = 3\\sqrt3 - 9\\sqrt3 = -6\\sqrt3",
        "explanation": "Using $(\\sqrt3)^3 = (\\sqrt3)^2 \\cdot \\sqrt3 = 3\\sqrt3$, the position works out to $-6\\sqrt3$, a negative value as expected for backward motion.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the distance travelled.",
        "workingLatex": "\\text{distance} = |-6\\sqrt3 - 0| = 6\\sqrt3 \\approx 10.4 \\ \\text{m}",
        "explanation": "Since there was no reversal, the distance is just how far the position has moved from the origin, i.e. the magnitude of $s$.",
        "diagram": null
      }
    ],
    "finalAnswer": "The particle is at rest at $t = \\sqrt3 \\approx 1.73 \\ \\text{s}$; the distance travelled is $6\\sqrt3 \\approx 10.4 \\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q037",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "integration", "maximum-displacement", "kinematics"],
  "questionText": "A particle starts at the origin and moves in a straight line with velocity $v = 12t - 3t^2 \\ \\text{m s}^{-1}$ at time $t$ seconds. Find the maximum displacement of the particle from the origin.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the goal.",
        "workingLatex": "v = 12t - 3t^2 \\ \\text{m s}^{-1}, \\quad s(0) = 0",
        "explanation": "We need the greatest distance the particle gets from its starting point.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Recall the condition for maximum displacement.",
        "workingLatex": "s \\text{ maximum} \\ \\Rightarrow \\ \\dfrac{\\mathrm ds}{\\mathrm dt} = v = 0",
        "explanation": "Displacement is greatest where it stops increasing, which is where its derivative, the velocity, is zero. That is the moment the particle turns around.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve $v = 0$.",
        "workingLatex": "12t - 3t^2 = 3t(4 - t) = 0 \\ \\Rightarrow \\ t = 0, \\ 4",
        "explanation": "The velocity vanishes at launch and again at $t = 4$; the later one is where the particle stops moving away.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Identify which root is the maximum.",
        "workingLatex": "t < 4: \\ v > 0; \\quad t > 4: \\ v < 0",
        "explanation": "Before $t = 4$ the particle moves away from the origin and after it moves back, so $t = 4$ gives the greatest displacement.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Integrate the velocity to find position.",
        "workingLatex": "s = \\int (12t - 3t^2)\\,\\mathrm dt = 6t^2 - t^3 + C",
        "explanation": "Integrating velocity gives position; the constant is the starting position.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Apply $s = 0$ at $t = 0$.",
        "workingLatex": "6(0)^2 - 0^3 + C = 0 \\ \\Rightarrow \\ C = 0",
        "explanation": "Starting at the origin makes the constant zero, so $s$ measures displacement from the origin directly.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the position at $t = 4$.",
        "workingLatex": "s(4) = 6(4)^2 - (4)^3 = 96 - 64 = 32 \\ \\text{m}",
        "explanation": "Substituting the turning time gives the furthest position the particle reaches from the origin.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Sanity check the sign.",
        "workingLatex": "s(4) = 32 > 0",
        "explanation": "The positive value confirms the particle has moved $32 \\ \\text{m}$ in the positive direction before turning back.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the maximum displacement.",
        "workingLatex": "s_{\\max} = 32 \\ \\text{m}",
        "explanation": "This is the maximum displacement from the origin, achieved at $t = 4 \\ \\text{s}$.",
        "diagram": null
      }
    ],
    "finalAnswer": "Maximum displacement from the origin $= 32 \\ \\text{m}$ (at $t = 4 \\ \\text{s}$)."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q038",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "written",
  "tags": ["variable-acceleration", "distance", "displacement", "turning-point", "kinematics"],
  "questionText": "A particle moves in a straight line so that its displacement from the origin is $s = 4t - t^2$ metres at time $t$ seconds. Find the distance travelled in the first $3$ seconds and compare it with the displacement over the same time.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Differentiate to find the velocity.",
        "workingLatex": "v = \\dfrac{\\mathrm ds}{\\mathrm dt} = 4 - 2t \\ \\text{m s}^{-1}",
        "explanation": "Differentiating the position gives the velocity, which tells us when and where the particle changes direction.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find the turning point.",
        "workingLatex": "4 - 2t = 0 \\ \\Rightarrow \\ t = 2 \\ \\text{s}",
        "explanation": "The particle reverses where its velocity is zero; this splits the $3 \\ \\text{s}$ into a forward stretch and a backward stretch.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Check the sign of the velocity either side.",
        "workingLatex": "t < 2: \\ v > 0; \\quad t > 2: \\ v < 0",
        "explanation": "It moves forwards for the first $2 \\ \\text{s}$ and backwards afterwards, so distance and displacement will differ.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Position at the start.",
        "workingLatex": "s(0) = 4(0) - 0^2 = 0 \\ \\text{m}",
        "explanation": "Anchoring the start at the origin makes later comparisons easy.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Position at the turning point.",
        "workingLatex": "s(2) = 4(2) - 2^2 = 8 - 4 = 4 \\ \\text{m}",
        "explanation": "At $t = 2$ the particle is $4 \\ \\text{m}$ forward, its furthest point in this interval.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Position at the end.",
        "workingLatex": "s(3) = 4(3) - 3^2 = 12 - 9 = 3 \\ \\text{m}",
        "explanation": "By $t = 3$ it has slipped back to $3 \\ \\text{m}$ from the origin.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Compute the displacement.",
        "workingLatex": "\\text{displacement} = s(3) - s(0) = 3 - 0 = 3 \\ \\text{m}",
        "explanation": "Displacement is just the net change in position, ignoring the detour the particle took.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Distance for the forward stretch.",
        "workingLatex": "|s(2) - s(0)| = |4 - 0| = 4 \\ \\text{m}",
        "explanation": "The forward journey covers $4 \\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Distance for the backward stretch.",
        "workingLatex": "|s(3) - s(2)| = |3 - 4| = 1 \\ \\text{m}",
        "explanation": "The backward journey covers $1 \\ \\text{m}$; taking the magnitude counts it as positive distance.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Total distance travelled.",
        "workingLatex": "4 + 1 = 5 \\ \\text{m}",
        "explanation": "Adding the two one-directional stretches gives the true length of the path.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Compare distance with displacement.",
        "workingLatex": "\\text{distance } 5 \\ \\text{m} \\; > \\; \\text{displacement } 3 \\ \\text{m}",
        "explanation": "They differ by $2 \\ \\text{m}$, twice the $1 \\ \\text{m}$ the particle backtracked, because displacement cancels the return trip while distance does not.",
        "diagram": null
      }
    ],
    "finalAnswer": "Distance travelled $= 5 \\ \\text{m}$, displacement $= 3 \\ \\text{m}$ (they differ because the particle reverses direction at $t = 2 \\ \\text{s}$)."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q039",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "written",
  "tags": ["variable-acceleration", "integration", "minimum-velocity", "position", "initial-conditions"],
  "questionText": "A particle moves in a straight line with acceleration $a = 2t - 6 \\ \\text{m s}^{-2}$ at time $t$ seconds. Its initial velocity is $5 \\ \\text{m s}^{-1}$ and it is at the origin when $t = 0$. Find the minimum velocity of the particle and its position at that instant.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the plan.",
        "workingLatex": "a = 2t - 6, \\quad v(0) = 5, \\quad s(0) = 0",
        "explanation": "Integrate the acceleration for velocity using the initial velocity, find where the velocity is least, then integrate again for the position there.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the acceleration to find velocity.",
        "workingLatex": "v = \\int (2t - 6)\\,\\mathrm dt = t^2 - 6t + C_1",
        "explanation": "Velocity is the integral of acceleration; the constant is the initial velocity.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the initial velocity.",
        "workingLatex": "0 - 0 + C_1 = 5 \\ \\Rightarrow \\ C_1 = 5",
        "explanation": "The given starting velocity fixes the constant.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the velocity.",
        "workingLatex": "v = t^2 - 6t + 5 \\ \\text{m s}^{-1}",
        "explanation": "This is the velocity at any time; being an upward parabola in $t$, it has a genuine minimum.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find where the velocity is a minimum.",
        "workingLatex": "a = 2t - 6 = 0 \\ \\Rightarrow \\ t = 3 \\ \\text{s}",
        "explanation": "The velocity is smallest where it stops decreasing, i.e. where the acceleration is zero.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Confirm it is a minimum.",
        "workingLatex": "\\dfrac{\\mathrm da}{\\mathrm dt} = 2 > 0",
        "explanation": "The acceleration rises through zero, so the velocity dips to a minimum here rather than a maximum.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the minimum velocity.",
        "workingLatex": "v(3) = 3^2 - 6(3) + 5 = 9 - 18 + 5 = -4 \\ \\text{m s}^{-1}",
        "explanation": "Substituting gives the minimum velocity; the negative sign shows the particle is moving backwards at this instant.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the velocity to find position.",
        "workingLatex": "s = \\int (t^2 - 6t + 5)\\,\\mathrm dt = \\tfrac13 t^3 - 3t^2 + 5t + C_2",
        "explanation": "Position is the integral of velocity; measuring from the origin will set $C_2 = 0$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Apply $s = 0$ at $t = 0$.",
        "workingLatex": "s(0) = 0 \\ \\Rightarrow \\ C_2 = 0",
        "explanation": "Starting at the origin removes the constant.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Evaluate the position at $t = 3$.",
        "workingLatex": "s(3) = \\tfrac13(27) - 3(9) + 5(3) = 9 - 27 + 15 = -3 \\ \\text{m}",
        "explanation": "At the moment of minimum velocity the particle is $3 \\ \\text{m}$ on the negative side of the origin.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "State the results.",
        "workingLatex": "v_{\\min} = -4 \\ \\text{m s}^{-1} \\text{ at } t = 3 \\ \\text{s}, \\quad s = -3 \\ \\text{m}",
        "explanation": "These are the two requested quantities: the least velocity and where the particle is when it occurs.",
        "diagram": null
      }
    ],
    "finalAnswer": "Minimum velocity $= -4 \\ \\text{m s}^{-1}$ (at $t = 3 \\ \\text{s}$); the particle's position then is $s = -3 \\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q040",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "written",
  "tags": ["variable-acceleration", "integration", "displacement", "total-distance", "kinematics"],
  "questionText": "A particle starts at the origin and moves in a straight line with velocity $v = t^3 - 4t \\ \\text{m s}^{-1}$ at time $t$ seconds. Find its displacement at $t = 2 \\ \\text{s}$ and the total distance travelled in the first $2$ seconds.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the plan.",
        "workingLatex": "v = t^3 - 4t \\ \\text{m s}^{-1}, \\quad s(0) = 0",
        "explanation": "Displacement is the integral of velocity. For total distance we must also check whether the velocity changes sign inside the interval, which would signal a reversal.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the velocity to find position.",
        "workingLatex": "s = \\int (t^3 - 4t)\\,\\mathrm dt = \\tfrac14 t^4 - 2t^2 + C",
        "explanation": "Integrating the velocity gives the position; the constant is the starting position.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply $s = 0$ at $t = 0$.",
        "workingLatex": "s(0) = 0 \\ \\Rightarrow \\ C = 0",
        "explanation": "The particle starts at the origin, so $C = 0$ and $s$ measures displacement from there.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Evaluate the displacement at $t = 2$.",
        "workingLatex": "s(2) = \\tfrac14(2)^4 - 2(2)^2 = \\tfrac{16}{4} - 8 = 4 - 8 = -4 \\ \\text{m}",
        "explanation": "Substituting $t = 2$ gives the net change in position: the particle ends $4 \\ \\text{m}$ on the negative side of the origin.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Factorise the velocity to locate its zeros.",
        "workingLatex": "v = t^3 - 4t = t(t-2)(t+2)",
        "explanation": "Factorising reveals the velocity's zeros at $t = -2, 0, 2$, the only places it can change sign.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Check the sign of the velocity on $(0,2)$.",
        "workingLatex": "0 < t < 2: \\ t > 0, \\ (t-2) < 0, \\ (t+2) > 0 \\ \\Rightarrow \\ v < 0",
        "explanation": "A positive times a negative times a positive is negative, so the velocity is negative throughout the interval, for example $v(1) = 1 - 4 = -3$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Confirm there is no reversal inside the interval.",
        "workingLatex": "v = 0 \\text{ only at } t = 0 \\text{ and } t = 2 \\ (\\text{endpoints})",
        "explanation": "The velocity is zero only at the two ends, not inside, so the particle moves in a single direction the whole time and never doubles back.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Deduce the total distance.",
        "workingLatex": "\\text{distance} = |s(2) - s(0)| = |-4 - 0| = 4 \\ \\text{m}",
        "explanation": "Because there is no reversal within the first $2 \\ \\text{s}$, the total distance simply equals the magnitude of the displacement.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State both results.",
        "workingLatex": "\\text{displacement} = -4 \\ \\text{m}, \\quad \\text{distance} = 4 \\ \\text{m}",
        "explanation": "The particle travels $4 \\ \\text{m}$, all in the negative direction, ending $4 \\ \\text{m}$ from where it started; the velocity only turns positive after $t = 2$.",
        "diagram": null
      }
    ],
    "finalAnswer": "Displacement at $t = 2 \\ \\text{s}$ is $-4 \\ \\text{m}$; total distance in the first $2$ seconds is $4 \\ \\text{m}$ (the velocity is negative throughout, becoming zero only at $t = 2$)."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q041",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "tags": ["variable-acceleration", "integration", "velocity", "calculus-kinematics"],
  "questionText": "A particle moving in a straight line has acceleration $a = 3t^2 - 12\\ \\text{m s}^{-2}$, and $v = 0$ when $t = 0$. Find an expression for the velocity $v(t)$, and the time $t > 0$ at which the acceleration is zero.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Connect acceleration to velocity.",
        "workingLatex": "a = \\dfrac{\\mathrm dv}{\\mathrm dt} \\quad\\Rightarrow\\quad v = \\int a\\,\\mathrm dt",
        "explanation": "Acceleration is the rate of change of velocity, so velocity is recovered by reversing the differentiation: we integrate the acceleration with respect to time.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Set up the integral.",
        "workingLatex": "v = \\int (3t^2 - 12)\\,\\mathrm dt",
        "explanation": "We substitute the given acceleration into the integral. Integrating a polynomial term by term is straightforward once it is written out like this.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate term by term.",
        "workingLatex": "v = t^3 - 12t + C",
        "explanation": "Using the rule that raising the power by one and dividing by the new power, $3t^2$ integrates to $t^3$ and $-12$ integrates to $-12t$. The constant $C$ appears because integration always leaves an unknown starting value.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Use the initial condition to find $C$.",
        "workingLatex": "0 = (0)^3 - 12(0) + C \\quad\\Rightarrow\\quad C = 0",
        "explanation": "We know $v = 0$ when $t = 0$. Substituting this pins down the constant, so the expression describes this particular particle rather than a whole family of possibilities.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the velocity.",
        "workingLatex": "v = t^3 - 12t",
        "explanation": "With the constant found, we have a clean formula for the velocity at any time. This answers the first part of the question.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Set the acceleration to zero.",
        "workingLatex": "a = 3t^2 - 12 = 0",
        "explanation": "The second part asks when the acceleration vanishes, so we return to the given acceleration and set it equal to zero.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Rearrange for $t^2$.",
        "workingLatex": "3t^2 = 12 \\quad\\Rightarrow\\quad t^2 = 4",
        "explanation": "Adding $12$ to both sides and dividing by $3$ isolates $t^2$, which is the natural intermediate step before taking a square root.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Take the square root.",
        "workingLatex": "t = \\pm 2",
        "explanation": "Taking the square root gives two possibilities, but time is measured forward from the start, so a negative value has no physical meaning here.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Select the valid time.",
        "workingLatex": "t = 2\\ \\text{s} \\quad (t > 0)",
        "explanation": "We keep only the positive root, giving the instant at which the acceleration momentarily reaches zero.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = t^3 - 12t\\ \\text{m s}^{-1}$; the acceleration is zero at $t = 2\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q042",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "total-distance", "integration", "displacement"],
  "questionText": "A particle moves in a straight line so that its velocity is $v = 6t - 3t^2\\ \\text{m s}^{-1}$, and it starts at the origin. Find the total distance travelled in the first $3\\ \\text{s}$. (The velocity is zero at $t = 2$.)",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Recognise why direction matters.",
        "workingLatex": "\\text{distance} \\neq \\text{displacement when } v \\text{ changes sign}",
        "explanation": "Total distance counts every metre travelled regardless of direction. If the particle reverses, we must handle each leg separately, so first we find where the velocity changes sign.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Factorise the velocity.",
        "workingLatex": "v = 6t - 3t^2 = 3t(2 - t)",
        "explanation": "Factorising makes the roots obvious. The velocity is zero exactly when one of the factors is zero.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find where the velocity is zero.",
        "workingLatex": "3t(2 - t) = 0 \\quad\\Rightarrow\\quad t = 0,\\ t = 2",
        "explanation": "Within the interval $0 \\le t \\le 3$ the interior sign change happens at $t = 2$, so the journey splits there.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the sign on each part.",
        "workingLatex": "0 < t < 2:\\ v > 0 \\qquad 2 < t < 3:\\ v < 0",
        "explanation": "Testing a value in each interval shows the particle first moves forward, then backward. This confirms we must treat the two legs separately.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the displacement function.",
        "workingLatex": "s = \\int (6t - 3t^2)\\,\\mathrm dt = 3t^2 - t^3 \\quad (s = 0 \\text{ at } t = 0)",
        "explanation": "Integrating the velocity gives displacement. Since the particle starts at the origin, the constant of integration is zero.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate positions at the key times.",
        "workingLatex": "s(0) = 0,\\quad s(2) = 12 - 8 = 4,\\quad s(3) = 27 - 27 = 0",
        "explanation": "Knowing the position at the start, the turning point, and the end lets us measure each leg by simple subtraction.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Measure the first leg.",
        "workingLatex": "s(2) - s(0) = 4 - 0 = 4\\ \\text{m}",
        "explanation": "From $t = 0$ to $t = 2$ the particle moves forward a distance of $4\\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Measure the second leg.",
        "workingLatex": "s(3) - s(2) = 0 - 4 = -4\\ \\text{m}",
        "explanation": "From $t = 2$ to $t = 3$ the displacement is $-4\\ \\text{m}$: the particle travels $4\\ \\text{m}$ back the other way.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Add the magnitudes.",
        "workingLatex": "\\text{total distance} = |4| + |-4| = 8\\ \\text{m}",
        "explanation": "Because distance ignores direction, we add the sizes of the two legs rather than letting them cancel, giving the total ground covered.",
        "diagram": null
      }
    ],
    "finalAnswer": "$8\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q043",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "written",
  "tags": ["variable-acceleration", "differentiation", "at-rest", "motion-description"],
  "questionText": "A particle moves in a straight line so that its displacement from a fixed point is $s = 2t^3 - 15t^2 + 24t + 3\\ \\text{m}$. Find the times when the particle is instantaneously at rest, state its velocity at those instants, and describe the motion.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Relate velocity to displacement.",
        "workingLatex": "v = \\dfrac{\\mathrm ds}{\\mathrm dt}",
        "explanation": "Velocity is the rate of change of displacement, so differentiating the position function gives the velocity at any time.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Differentiate the displacement.",
        "workingLatex": "v = 6t^2 - 30t + 24",
        "explanation": "Differentiating term by term, $2t^3$ gives $6t^2$, $-15t^2$ gives $-30t$, $24t$ gives $24$, and the constant disappears.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Factorise the velocity.",
        "workingLatex": "v = 6(t^2 - 5t + 4) = 6(t - 1)(t - 4)",
        "explanation": "Taking out the common factor of $6$ and factorising the quadratic reveals the times when the velocity is zero.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve for the rest instants.",
        "workingLatex": "6(t - 1)(t - 4) = 0 \\quad\\Rightarrow\\quad t = 1,\\ t = 4",
        "explanation": "Being at rest means the velocity is zero. The two solutions give the exact times the particle is momentarily stationary.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "State the velocity at those instants.",
        "workingLatex": "v(1) = 0,\\qquad v(4) = 0",
        "explanation": "By definition, at rest means zero velocity, so at both instants the velocity is exactly $0\\ \\text{m s}^{-1}$. This confirms our roots are consistent.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Examine the sign of the velocity.",
        "workingLatex": "t < 1:\\ v > 0 \\qquad 1 < t < 4:\\ v < 0 \\qquad t > 4:\\ v > 0",
        "explanation": "Checking a value in each region shows how the direction of travel changes, which is what we need to describe the motion.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Find the positions at the rest instants.",
        "workingLatex": "s(1) = 2 - 15 + 24 + 3 = 14,\\quad s(4) = 128 - 240 + 96 + 3 = -13",
        "explanation": "Substituting the two times into the position function tells us where the reversals happen, giving a concrete picture of the journey.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Describe the motion.",
        "workingLatex": "\\text{forward} \\to \\text{rest at } s = 14 \\to \\text{backward} \\to \\text{rest at } s = -13 \\to \\text{forward}",
        "explanation": "The particle moves in the positive direction, slows to rest at $t = 1$ (position $14\\ \\text{m}$), reverses and moves negatively until $t = 4$ (position $-13\\ \\text{m}$), then reverses again and moves positively.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Summarise the result.",
        "workingLatex": "\\text{at rest at } t = 1\\ \\text{s and } t = 4\\ \\text{s, both with } v = 0",
        "explanation": "Collecting the findings gives a full account: the two rest times, the zero velocities, and the direction changes that shape the motion.",
        "diagram": null
      }
    ],
    "finalAnswer": "At rest at $t = 1\\ \\text{s}$ and $t = 4\\ \\text{s}$, with $v = 0$ at both. The particle moves forward to $s = 14\\ \\text{m}$, reverses back to $s = -13\\ \\text{m}$, then moves forward again."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q044",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "integration", "maximum-speed", "displacement"],
  "questionText": "A particle moves in a straight line with acceleration $a = 10 - 2t\\ \\text{m s}^{-2}$. It starts from rest at the origin, so $v = 0$ and $s = 0$ when $t = 0$. Find the maximum speed and the displacement at the instant the acceleration is zero.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Integrate acceleration to get velocity.",
        "workingLatex": "v = \\int (10 - 2t)\\,\\mathrm dt = 10t - t^2 + C",
        "explanation": "Velocity is the integral of acceleration. Integrating each term raises the power by one and divides by it, leaving a constant to be found.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply the initial velocity.",
        "workingLatex": "0 = 10(0) - (0)^2 + C \\quad\\Rightarrow\\quad C = 0 \\quad\\Rightarrow\\quad v = 10t - t^2",
        "explanation": "The particle starts from rest, so $v = 0$ at $t = 0$. This forces the constant to be zero and gives the velocity formula.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Locate the maximum speed.",
        "workingLatex": "\\text{max speed where } \\dfrac{\\mathrm dv}{\\mathrm dt} = a = 0",
        "explanation": "Speed is greatest where the velocity stops increasing, which is exactly where the acceleration is zero. So we set the acceleration to zero.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve for the time.",
        "workingLatex": "10 - 2t = 0 \\quad\\Rightarrow\\quad t = 5",
        "explanation": "Solving gives the instant the velocity peaks. Up to this time the particle is speeding up; after it, it slows down.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Confirm it is a maximum.",
        "workingLatex": "a = 10 - 2t \\text{ goes } + \\to - \\text{ through } t = 5",
        "explanation": "The acceleration changes from positive to negative as time passes $5\\ \\text{s}$, so the velocity turns from rising to falling, confirming a maximum.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the maximum speed.",
        "workingLatex": "v(5) = 10(5) - (5)^2 = 50 - 25 = 25\\ \\text{m s}^{-1}",
        "explanation": "Substituting $t = 5$ into the velocity formula gives the greatest speed the particle reaches.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate velocity to get displacement.",
        "workingLatex": "s = \\int (10t - t^2)\\,\\mathrm dt = 5t^2 - \\tfrac13 t^3 + C",
        "explanation": "Displacement is the integral of velocity. Integrating each term again introduces a constant that the starting position will fix.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Apply the initial position.",
        "workingLatex": "0 = 5(0)^2 - \\tfrac13 (0)^3 + C \\quad\\Rightarrow\\quad C = 0",
        "explanation": "The particle starts at the origin, so $s = 0$ at $t = 0$, making the constant zero.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the displacement at $t = 5$.",
        "workingLatex": "s(5) = 5(25) - \\tfrac13 (125) = 125 - \\dfrac{125}{3} = \\dfrac{250}{3}",
        "explanation": "Substituting $t = 5$ gives the displacement at the very instant the acceleration reaches zero.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State the results.",
        "workingLatex": "v_{\\max} = 25\\ \\text{m s}^{-1},\\qquad s = \\dfrac{250}{3} \\approx 83.3\\ \\text{m}",
        "explanation": "Both required quantities are now found: the peak speed and the displacement reached at that moment.",
        "diagram": null
      }
    ],
    "finalAnswer": "Maximum speed $25\\ \\text{m s}^{-1}$ at $t = 5\\ \\text{s}$; displacement $\\dfrac{250}{3} \\approx 83.3\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q045",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 6,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "total-distance", "integration", "sign-change"],
  "questionText": "A particle moves in a straight line with velocity $v = t^2 - 6t + 5\\ \\text{m s}^{-1}$. Find the total distance travelled between $t = 0$ and $t = 6\\ \\text{s}$. (The velocity is zero at $t = 1$ and $t = 5$.)",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan for direction changes.",
        "workingLatex": "\\text{total distance} = \\sum |\\text{signed displacements between roots}|",
        "explanation": "Where the velocity changes sign the particle reverses, so we must integrate over each stretch separately and add the magnitudes, otherwise the legs would cancel.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Factorise the velocity.",
        "workingLatex": "v = t^2 - 6t + 5 = (t - 1)(t - 5)",
        "explanation": "Factorising shows the velocity is zero at $t = 1$ and $t = 5$, which are the two points where the direction can change.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Determine the sign on each interval.",
        "workingLatex": "(0,1):\\ v > 0 \\quad (1,5):\\ v < 0 \\quad (5,6):\\ v > 0",
        "explanation": "Testing a value in each interval shows the particle moves forward, then backward, then forward, so the journey splits into three legs.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the displacement function.",
        "workingLatex": "s = \\int (t^2 - 6t + 5)\\,\\mathrm dt = \\tfrac13 t^3 - 3t^2 + 5t",
        "explanation": "Integrating the velocity gives displacement. We take the constant as zero and use differences, so its value does not matter for distances between times.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate at the boundary times.",
        "workingLatex": "s(0) = 0,\\ \\ s(1) = \\tfrac73,\\ \\ s(5) = -\\tfrac{25}{3},\\ \\ s(6) = -6",
        "explanation": "Computing the position at each key time lets us measure every leg by simple subtraction. For example $s(1) = \\tfrac13 - 3 + 5 = \\tfrac73$.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "First leg displacement.",
        "workingLatex": "s(1) - s(0) = \\tfrac73 - 0 = \\tfrac73\\ \\text{m}",
        "explanation": "On $[0,1]$ the particle moves forward $\\tfrac73\\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Second leg displacement.",
        "workingLatex": "s(5) - s(1) = -\\tfrac{25}{3} - \\tfrac73 = -\\tfrac{32}{3}\\ \\text{m}",
        "explanation": "On $[1,5]$ the displacement is negative, so the particle travels $\\tfrac{32}{3}\\ \\text{m}$ backward.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Third leg displacement.",
        "workingLatex": "s(6) - s(5) = -6 - \\left(-\\tfrac{25}{3}\\right) = \\tfrac73\\ \\text{m}",
        "explanation": "On $[5,6]$ the particle moves forward again, covering $\\tfrac73\\ \\text{m}$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Add the magnitudes.",
        "workingLatex": "\\tfrac73 + \\tfrac{32}{3} + \\tfrac73 = \\dfrac{46}{3}\\ \\text{m} \\approx 15.3\\ \\text{m}",
        "explanation": "Summing the sizes of the three legs, ignoring their signs, gives the total ground covered over the six seconds.",
        "diagram": null
      }
    ],
    "finalAnswer": "$\\dfrac{46}{3} \\approx 15.3\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q046",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "integration", "minimum-velocity", "turning-point"],
  "questionText": "A particle moves in a straight line with acceleration $a = 12t - 24\\ \\text{m s}^{-2}$. Its velocity is $20\\ \\text{m s}^{-1}$ when $t = 0$. Find the minimum velocity and the time at which it occurs.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Integrate acceleration for velocity.",
        "workingLatex": "v = \\int (12t - 24)\\,\\mathrm dt = 6t^2 - 24t + C",
        "explanation": "Velocity is the integral of acceleration. Integrating each term gives the shape of the velocity, with a constant to be fixed by the starting condition.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply the initial velocity.",
        "workingLatex": "20 = 6(0)^2 - 24(0) + C \\quad\\Rightarrow\\quad C = 20",
        "explanation": "We are told $v = 20$ at $t = 0$. Substituting this determines the constant, giving the exact velocity of this particle.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "State the velocity.",
        "workingLatex": "v = 6t^2 - 24t + 20",
        "explanation": "This is an upward-opening parabola in $t$, so it has a single lowest point, which is the minimum velocity we are looking for.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the turning point of the velocity.",
        "workingLatex": "\\dfrac{\\mathrm dv}{\\mathrm dt} = a = 12t - 24 = 0",
        "explanation": "The velocity is smallest where its rate of change (the acceleration) is zero, so we set the acceleration equal to zero.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the time.",
        "workingLatex": "12t = 24 \\quad\\Rightarrow\\quad t = 2",
        "explanation": "Solving gives the instant at which the velocity reaches its turning point.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Confirm it is a minimum.",
        "workingLatex": "a = 12t - 24 \\text{ goes } - \\to + \\text{ through } t = 2",
        "explanation": "The acceleration changes from negative to positive at $t = 2$, so the velocity stops falling and starts rising: this is a minimum, matching the upward parabola.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute the time.",
        "workingLatex": "v(2) = 6(2)^2 - 24(2) + 20 = 24 - 48 + 20",
        "explanation": "Putting $t = 2$ into the velocity formula gives the value at the lowest point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Compute the minimum velocity.",
        "workingLatex": "v(2) = -4\\ \\text{m s}^{-1}",
        "explanation": "The arithmetic gives $-4$. The negative sign means the particle is momentarily moving in the negative direction at this instant.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the result.",
        "workingLatex": "v_{\\min} = -4\\ \\text{m s}^{-1} \\text{ at } t = 2\\ \\text{s}",
        "explanation": "The minimum velocity and the time it occurs answer the question fully.",
        "diagram": null
      }
    ],
    "finalAnswer": "Minimum velocity $-4\\ \\text{m s}^{-1}$, occurring at $t = 2\\ \\text{s}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q047",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "differentiation", "at-rest", "position"],
  "questionText": "A particle moves in a straight line so that its displacement from a fixed origin is $s = t^3 - 9t^2 + 24t\\ \\text{m}$. Find the position of the particle at the two instants when it is momentarily at rest.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Relate velocity to displacement.",
        "workingLatex": "v = \\dfrac{\\mathrm ds}{\\mathrm dt}",
        "explanation": "Velocity is the rate of change of position, so differentiating the displacement gives the velocity we need to test for rest.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Differentiate the displacement.",
        "workingLatex": "v = 3t^2 - 18t + 24",
        "explanation": "Differentiating term by term: $t^3$ gives $3t^2$, $-9t^2$ gives $-18t$, and $24t$ gives $24$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Factor out the common term.",
        "workingLatex": "v = 3(t^2 - 6t + 8)",
        "explanation": "Taking out the factor of $3$ simplifies the quadratic inside, making it easier to factorise.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Factorise the quadratic.",
        "workingLatex": "v = 3(t - 2)(t - 4)",
        "explanation": "The numbers $2$ and $4$ multiply to $8$ and add to $6$, so the quadratic factors cleanly, exposing the roots.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the rest times.",
        "workingLatex": "3(t - 2)(t - 4) = 0 \\quad\\Rightarrow\\quad t = 2,\\ t = 4",
        "explanation": "Being momentarily at rest means the velocity is zero, so these two times are exactly when the particle stops.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Position at $t = 2$.",
        "workingLatex": "s(2) = (2)^3 - 9(2)^2 + 24(2) = 8 - 36 + 48",
        "explanation": "Substituting the first rest time into the displacement formula gives where the particle is at that instant.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Compute the first position.",
        "workingLatex": "s(2) = 20\\ \\text{m}",
        "explanation": "The arithmetic gives $20\\ \\text{m}$ from the origin at the first stop.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Position at $t = 4$.",
        "workingLatex": "s(4) = (4)^3 - 9(4)^2 + 24(4) = 64 - 144 + 96",
        "explanation": "Substituting the second rest time gives the position at the second stop.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Compute the second position.",
        "workingLatex": "s(4) = 16\\ \\text{m}",
        "explanation": "This gives $16\\ \\text{m}$ from the origin. The particle advanced to $20\\ \\text{m}$, then moved back to $16\\ \\text{m}$ between the two stops.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "State both positions.",
        "workingLatex": "s = 20\\ \\text{m} \\ \\text{and}\\ s = 16\\ \\text{m}",
        "explanation": "These are the two required positions where the particle is momentarily at rest.",
        "diagram": null
      }
    ],
    "finalAnswer": "The particle is at $20\\ \\text{m}$ (at $t = 2\\ \\text{s}$) and at $16\\ \\text{m}$ (at $t = 4\\ \\text{s}$)."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q048",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "differentiation", "maximum-height", "projectile"],
  "questionText": "A ball is thrown vertically upward so that its height above the throwing point is $h = 20t - 5t^2\\ \\text{m}$. Using calculus, find its velocity, the time at which it reaches maximum height, and the maximum height.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Relate velocity to height.",
        "workingLatex": "v = \\dfrac{\\mathrm dh}{\\mathrm dt}",
        "explanation": "The velocity is the rate at which height changes, so differentiating the height formula with respect to time gives the velocity.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Differentiate the height.",
        "workingLatex": "v = 20 - 10t\\ \\text{m s}^{-1}",
        "explanation": "Differentiating $20t$ gives $20$ and $-5t^2$ gives $-10t$. This is the velocity at any time during the flight.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Condition for maximum height.",
        "workingLatex": "\\text{at the top: } v = 0",
        "explanation": "At its highest point the ball stops rising for an instant before falling, so its velocity is momentarily zero there.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set the velocity to zero.",
        "workingLatex": "20 - 10t = 0",
        "explanation": "Setting the velocity to zero locates the exact time when the ball is at the top of its path.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve for the time.",
        "workingLatex": "10t = 20 \\quad\\Rightarrow\\quad t = 2\\ \\text{s}",
        "explanation": "Solving gives the time to reach the highest point.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Confirm it is a maximum.",
        "workingLatex": "a = \\dfrac{\\mathrm dv}{\\mathrm dt} = -10\\ \\text{m s}^{-2} < 0",
        "explanation": "The acceleration is negative throughout (gravity pulling down), so the velocity is always decreasing and this turning point is indeed a maximum of height.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Substitute into the height.",
        "workingLatex": "h(2) = 20(2) - 5(2)^2 = 40 - 20",
        "explanation": "Putting $t = 2$ into the height formula gives how high the ball rises.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Compute the maximum height.",
        "workingLatex": "h(2) = 20\\ \\text{m}",
        "explanation": "The arithmetic gives a maximum height of $20\\ \\text{m}$ above the throwing point.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State all results.",
        "workingLatex": "v = 20 - 10t,\\quad t = 2\\ \\text{s},\\quad h_{\\max} = 20\\ \\text{m}",
        "explanation": "Collecting the answers gives the velocity formula, the time at the top, and the greatest height reached.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 20 - 10t\\ \\text{m s}^{-1}$; maximum height reached at $t = 2\\ \\text{s}$; maximum height $= 20\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q049",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "integration", "at-rest", "distance"],
  "questionText": "A particle starts at the origin and moves in a straight line with velocity $v = 9 - t^2\\ \\text{m s}^{-1}$. Find the distance travelled before it first comes momentarily to rest.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Link distance to velocity.",
        "workingLatex": "v = \\dfrac{\\mathrm ds}{\\mathrm dt} \\quad\\Rightarrow\\quad s = \\int v\\,\\mathrm dt",
        "explanation": "Velocity is the rate of change of position, so integrating the velocity recovers the displacement. As long as the direction does not change, that displacement is also the distance travelled.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find when the particle first stops.",
        "workingLatex": "v = 9 - t^2 = 0",
        "explanation": "The particle is momentarily at rest when its velocity is zero, so we set the velocity to zero to find that time.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Solve for the time.",
        "workingLatex": "t^2 = 9 \\quad\\Rightarrow\\quad t = 3\\ \\text{s}",
        "explanation": "Taking the positive square root gives the first time the particle stops, since time runs forward from the start.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Check the velocity keeps one sign.",
        "workingLatex": "0 \\le t < 3:\\ t^2 < 9 \\ \\Rightarrow\\ v > 0",
        "explanation": "Throughout $[0,3)$ the velocity stays positive, so the particle never reverses. This means distance travelled equals the displacement, and we can integrate directly.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the distance integral.",
        "workingLatex": "\\text{distance} = \\int_0^3 (9 - t^2)\\,\\mathrm dt",
        "explanation": "Distance is the integral of velocity over the interval. Because the velocity does not change sign, this single integral gives the answer directly.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the antiderivative.",
        "workingLatex": "\\int (9 - t^2)\\,\\mathrm dt = 9t - \\tfrac13 t^3",
        "explanation": "Integrating term by term, $9$ gives $9t$ and $-t^2$ gives $-\\tfrac13 t^3$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate at the upper limit.",
        "workingLatex": "\\left[9t - \\tfrac13 t^3\\right]_{t=3} = 9(3) - \\tfrac13 (27) = 27 - 9",
        "explanation": "Substituting the upper limit $t = 3$ into the antiderivative gives the accumulated displacement up to that point.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Subtract the lower limit.",
        "workingLatex": "(27 - 9) - 0 = 18",
        "explanation": "The lower limit $t = 0$ contributes zero, so the definite integral is simply the value at $t = 3$.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the distance.",
        "workingLatex": "\\text{distance} = 18\\ \\text{m}",
        "explanation": "The particle travels $18\\ \\text{m}$ before it first comes momentarily to rest.",
        "diagram": null
      }
    ],
    "finalAnswer": "$18\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q050",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Intermediate",
  "marks": 5,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "integration", "maximum-displacement", "at-rest"],
  "questionText": "A particle moves in a straight line with acceleration $a = 6 - 6t\\ \\text{m s}^{-2}$. It starts from rest at the origin, so $v = 0$ and $s = 0$ when $t = 0$. Find the maximum displacement and the time at which it occurs.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Integrate acceleration for velocity.",
        "workingLatex": "v = \\int (6 - 6t)\\,\\mathrm dt = 6t - 3t^2 + C",
        "explanation": "Velocity is the integral of acceleration. Integrating each term produces the velocity shape with a constant to be determined.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Apply the initial velocity.",
        "workingLatex": "0 = 6(0) - 3(0)^2 + C \\quad\\Rightarrow\\quad C = 0 \\quad\\Rightarrow\\quad v = 6t - 3t^2",
        "explanation": "The particle starts from rest, so $v = 0$ at $t = 0$, forcing the constant to zero and giving the velocity.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Integrate velocity for displacement.",
        "workingLatex": "s = \\int (6t - 3t^2)\\,\\mathrm dt = 3t^2 - t^3 + C",
        "explanation": "Displacement is the integral of velocity. Again a constant appears, to be fixed by the starting position.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the initial position.",
        "workingLatex": "0 = 3(0)^2 - (0)^3 + C \\quad\\Rightarrow\\quad C = 0 \\quad\\Rightarrow\\quad s = 3t^2 - t^3",
        "explanation": "Since the particle starts at the origin, $s = 0$ at $t = 0$, so the constant is zero.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Condition for maximum displacement.",
        "workingLatex": "\\dfrac{\\mathrm ds}{\\mathrm dt} = v = 0",
        "explanation": "Displacement is greatest where it stops increasing, i.e. where its rate of change (the velocity) is zero. So we set the velocity to zero.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Solve for the time.",
        "workingLatex": "6t - 3t^2 = 3t(2 - t) = 0 \\quad\\Rightarrow\\quad t = 0,\\ t = 2",
        "explanation": "The solution $t = 0$ is the starting instant, so the meaningful turning point is $t = 2$.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Confirm it is a maximum.",
        "workingLatex": "v > 0 \\text{ for } t < 2, \\quad v < 0 \\text{ for } t > 2",
        "explanation": "The velocity is positive before $t = 2$ and negative after, so the displacement rises then falls: $t = 2$ gives a maximum, not a minimum.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the displacement.",
        "workingLatex": "s(2) = 3(2)^2 - (2)^3 = 12 - 8 = 4\\ \\text{m}",
        "explanation": "Substituting $t = 2$ into the displacement formula gives the furthest the particle reaches from the origin.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the result.",
        "workingLatex": "s_{\\max} = 4\\ \\text{m at } t = 2\\ \\text{s}",
        "explanation": "The maximum displacement and the time it occurs answer the question completely.",
        "diagram": null
      }
    ],
    "finalAnswer": "Maximum displacement $4\\ \\text{m}$, occurring at $t = 2\\ \\text{s}$."
  }
},
{
    "id": "al.y1.mech.variable-acceleration.q051",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Hard",
    "marks": 7,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "total-distance", "differentiation", "displacement-velocity"],
    "questionText": "A particle moves in a straight line so that its displacement from the origin after $t$ seconds is $s = t^3 - 6t^2 + 9t$ metres. The velocity is zero at $t = 1$ and $t = 3$. Find the total distance travelled during the first $3$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the link between displacement and velocity.",
          "workingLatex": "v = \\dfrac{\\mathrm ds}{\\mathrm dt}",
          "explanation": "Velocity measures how quickly displacement is changing, so it is the derivative of $s$ with respect to time. We need $v$ because the sign of the velocity tells us which direction the particle is moving.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Differentiate the displacement to obtain the velocity.",
          "workingLatex": "v = \\dfrac{\\mathrm ds}{\\mathrm dt} = 3t^2 - 12t + 9 \\ \\text{m s}^{-1}",
          "explanation": "Bringing down each power and reducing it by one turns $t^3 \\to 3t^2$, $-6t^2 \\to -12t$ and $9t \\to 9$. This expression now gives the velocity at any instant.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Set the velocity to zero to find the turning moments of the motion.",
          "workingLatex": "3t^2 - 12t + 9 = 0 \\ \\Rightarrow\\ 3(t^2 - 4t + 3) = 0",
          "explanation": "The particle is momentarily at rest whenever $v = 0$. These instants are important because the particle can only reverse direction where its velocity passes through zero.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise to confirm the times at rest.",
          "workingLatex": "3(t - 1)(t - 3) = 0 \\ \\Rightarrow\\ t = 1 \\ \\text{s}, \\ t = 3 \\ \\text{s}",
          "explanation": "Factorising confirms the two given rest times. These split the journey into pieces, and within each piece the velocity keeps one fixed sign.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split the interval and test the sign of the velocity on each part.",
          "workingLatex": "\\text{Intervals: } [0,1] \\text{ and } [1,3]",
          "explanation": "The two rest times at $t=1$ (and the endpoint $t=3$) divide the first $3$ seconds into $[0,1]$ and $[1,3]$. Checking the velocity sign on each part tells us whether the particle moves forwards or backwards there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test a point in the first sub-interval.",
          "workingLatex": "v(0) = 3(0)^2 - 12(0) + 9 = 9 > 0",
          "explanation": "At $t=0$ the velocity is positive, so on $[0,1]$ the particle moves in the positive direction. Distance and displacement agree in sign here.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test a point in the second sub-interval.",
          "workingLatex": "v(2) = 3(4) - 12(2) + 9 = 12 - 24 + 9 = -3 < 0",
          "explanation": "At $t=2$ the velocity is negative, so on $[1,3]$ the particle moves backwards. This is exactly why we cannot simply subtract the end displacements: the two legs partly cancel.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the displacement at the start.",
          "workingLatex": "s(0) = 0^3 - 6(0)^2 + 9(0) = 0 \\ \\text{m}",
          "explanation": "The particle begins at the origin. We record each key displacement so we can measure how far it travels on each leg.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the displacement at the first rest time.",
          "workingLatex": "s(1) = 1 - 6 + 9 = 4 \\ \\text{m}",
          "explanation": "By $t=1$ the particle has reached $4$ m from the origin. This is the furthest forward point of the first leg, since the velocity vanishes here.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the displacement at the end of the motion.",
          "workingLatex": "s(3) = 27 - 54 + 27 = 0 \\ \\text{m}",
          "explanation": "At $t=3$ the particle is back at the origin. Its net displacement is zero, but it has clearly moved, so the distance travelled is not zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Find the distance covered on the first leg.",
          "workingLatex": "|s(1) - s(0)| = |4 - 0| = 4 \\ \\text{m}",
          "explanation": "Since the velocity keeps one sign on $[0,1]$, the distance is just the size of the change in displacement over that interval: $4$ m forwards.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the distance covered on the second leg.",
          "workingLatex": "|s(3) - s(1)| = |0 - 4| = 4 \\ \\text{m}",
          "explanation": "On $[1,3]$ the particle moves back from $4$ m to the origin, covering another $4$ m. We take the absolute value so that this backward motion still counts as positive distance.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add the distances from every leg.",
          "workingLatex": "\\text{Total distance} = 4 + 4 = 8 \\ \\text{m}",
          "explanation": "Total distance is the sum of the distances covered on each leg, regardless of direction. Adding the two positive amounts gives the true path length.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the result and contrast with displacement.",
          "workingLatex": "\\text{Distance} = 8 \\ \\text{m}, \\quad \\text{Displacement} = 0 \\ \\text{m}",
          "explanation": "The particle travels $8$ m in total even though it finishes where it started. Distance measures the whole path, while displacement measures only the net change in position.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total distance travelled $= 8 \\ \\text{m}$ (net displacement is $0$ m)."
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q052",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "total-distance", "integration", "velocity-time"],
    "questionText": "A particle moves in a straight line with velocity $v = 3t^2 - 18t + 24 \\ \\text{m s}^{-1}$ at time $t$ seconds, and starts from the origin. The velocity is zero at $t = 2$ and $t = 4$. Find the total distance travelled during the first $5$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall how to recover displacement from velocity.",
          "workingLatex": "s = \\int v \\,\\mathrm dt",
          "explanation": "Displacement is the accumulated effect of velocity over time, so integrating $v$ gives a formula for $s$. We will need $s$ at several times to measure each leg of the journey.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate the velocity.",
          "workingLatex": "s = \\int (3t^2 - 18t + 24)\\,\\mathrm dt = t^3 - 9t^2 + 24t + C",
          "explanation": "Raising each power by one and dividing by the new power reverses the differentiation. The constant $C$ is unknown until we use the starting position.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Apply the initial condition to fix the constant.",
          "workingLatex": "s(0) = 0 \\ \\Rightarrow\\ C = 0, \\quad s = t^3 - 9t^2 + 24t",
          "explanation": "The particle starts at the origin, so $s = 0$ when $t = 0$. Substituting shows $C = 0$, giving a clean expression for displacement.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Factorise the velocity to find the rest times.",
          "workingLatex": "v = 3(t^2 - 6t + 8) = 3(t - 2)(t - 4) = 0 \\ \\Rightarrow\\ t = 2, \\ 4",
          "explanation": "The velocity is zero exactly where the particle can turn around. Confirming the roots at $t=2$ and $t=4$ tells us where the direction of travel may change.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Divide the interval into pieces with constant velocity sign.",
          "workingLatex": "\\text{Intervals: } [0,2], \\ [2,4], \\ [4,5]",
          "explanation": "The rest times $t=2$ and $t=4$ break the first $5$ seconds into three parts. On each part the velocity keeps a single sign, so distance and displacement match in magnitude there.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Determine the velocity sign on each sub-interval.",
          "workingLatex": "v(0) = 24 > 0, \\quad v(3) = 27 - 54 + 24 = -3 < 0, \\quad v(5) = 75 - 90 + 24 = 9 > 0",
          "explanation": "Testing one time in each interval shows the particle moves forwards, then backwards, then forwards. The middle backward leg is what makes the distance exceed the net displacement.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the displacement at the start.",
          "workingLatex": "s(0) = 0 \\ \\text{m}",
          "explanation": "Recording the starting position gives a baseline for measuring the first leg.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the displacement at $t = 2$.",
          "workingLatex": "s(2) = 8 - 36 + 48 = 20 \\ \\text{m}",
          "explanation": "By $t=2$ the particle has moved $20$ m forward. This is a turning point of the motion because the velocity is zero there.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the displacement at $t = 4$.",
          "workingLatex": "s(4) = 64 - 144 + 96 = 16 \\ \\text{m}",
          "explanation": "During the backward leg the particle slips from $20$ m to $16$ m. It has not returned to the origin, just retreated a little.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the displacement at $t = 5$.",
          "workingLatex": "s(5) = 125 - 225 + 120 = 20 \\ \\text{m}",
          "explanation": "In the final forward leg the particle advances from $16$ m back out to $20$ m. Now we have every position needed to measure the three legs.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Distance on the first leg.",
          "workingLatex": "|s(2) - s(0)| = |20 - 0| = 20 \\ \\text{m}",
          "explanation": "With the velocity positive throughout $[0,2]$, the distance is simply the forward change in displacement.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Distance on the second leg.",
          "workingLatex": "|s(4) - s(2)| = |16 - 20| = 4 \\ \\text{m}",
          "explanation": "On $[2,4]$ the particle moves backwards by $4$ m. Taking the absolute value counts this retreat as positive distance rather than letting it cancel.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Distance on the third leg.",
          "workingLatex": "|s(5) - s(4)| = |20 - 16| = 4 \\ \\text{m}",
          "explanation": "On $[4,5]$ the particle moves forward $4$ m again. Each leg contributes its own positive amount to the total.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Sum the three leg distances.",
          "workingLatex": "\\text{Total distance} = 20 + 4 + 4 = 28 \\ \\text{m}",
          "explanation": "Adding the absolute distances from all three legs gives the full length of the path travelled in the first $5$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "State the answer and compare with net displacement.",
          "workingLatex": "\\text{Distance} = 28 \\ \\text{m}, \\quad \\text{Net displacement} = s(5) - s(0) = 20 \\ \\text{m}",
          "explanation": "The distance $28$ m exceeds the net displacement $20$ m by exactly twice the backward leg, which is the hallmark of motion that reverses partway through.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total distance travelled $= 28 \\ \\text{m}$ (net displacement $= 20 \\ \\text{m}$)."
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q053",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "total-distance", "integration", "acceleration-velocity"],
    "questionText": "A particle moves in a straight line with acceleration $a = 6t - 18 \\ \\text{m s}^{-2}$. At $t = 0$ it has velocity $24 \\ \\text{m s}^{-1}$ and displacement $s = 0$. Find the total distance travelled during the first $6$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Recall the link between acceleration and velocity.",
          "workingLatex": "v = \\int a \\,\\mathrm dt",
          "explanation": "Acceleration is the rate of change of velocity, so integrating $a$ builds the velocity back up. We start here because only $a$ is given, but the direction of travel is decided by $v$.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Integrate the acceleration.",
          "workingLatex": "v = \\int (6t - 18)\\,\\mathrm dt = 3t^2 - 18t + C_1",
          "explanation": "Reversing the differentiation gives a quadratic velocity. The constant $C_1$ is the leftover we fix using the known velocity at the start.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Use the initial velocity to find the constant.",
          "workingLatex": "v(0) = 24 \\ \\Rightarrow\\ C_1 = 24, \\quad v = 3t^2 - 18t + 24",
          "explanation": "At $t=0$ the velocity is $24 \\ \\text{m s}^{-1}$, which pins down $C_1 = 24$. Now the velocity is completely known.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Integrate the velocity to find displacement.",
          "workingLatex": "s = \\int (3t^2 - 18t + 24)\\,\\mathrm dt = t^3 - 9t^2 + 24t + C_2",
          "explanation": "Integrating once more turns velocity into displacement. A second constant $C_2$ appears, set by the starting position.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Apply the initial displacement.",
          "workingLatex": "s(0) = 0 \\ \\Rightarrow\\ C_2 = 0, \\quad s = t^3 - 9t^2 + 24t",
          "explanation": "Since the particle starts at the origin, $C_2 = 0$. We now have full formulas for both $v$ and $s$.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Find the rest times by factorising the velocity.",
          "workingLatex": "3t^2 - 18t + 24 = 3(t - 2)(t - 4) = 0 \\ \\Rightarrow\\ t = 2, \\ 4",
          "explanation": "The particle can only reverse where $v = 0$. Factorising locates these turning instants at $t=2$ and $t=4$.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Split the interval and check velocity signs.",
          "workingLatex": "v(0) = 24 > 0, \\quad v(3) = 27 - 54 + 24 = -3 < 0, \\quad v(5) = 75 - 90 + 24 = 9 > 0",
          "explanation": "The rest times cut $[0,6]$ into $[0,2]$, $[2,4]$ and $[4,6]$. Sign checks show forward, backward, then forward motion, so the legs will partly cancel unless we treat them separately.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the displacement at the start.",
          "workingLatex": "s(0) = 0 \\ \\text{m}",
          "explanation": "The origin is our baseline for measuring the first forward leg.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the displacement at $t = 2$.",
          "workingLatex": "s(2) = 8 - 36 + 48 = 20 \\ \\text{m}",
          "explanation": "By $t=2$ the particle is $20$ m along, at the end of its first forward leg.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the displacement at $t = 4$.",
          "workingLatex": "s(4) = 64 - 144 + 96 = 16 \\ \\text{m}",
          "explanation": "The backward leg carries the particle from $20$ m to $16$ m, a modest retreat of $4$ m.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the displacement at $t = 6$.",
          "workingLatex": "s(6) = 216 - 324 + 144 = 36 \\ \\text{m}",
          "explanation": "In the last leg the particle surges forward from $16$ m to $36$ m. Every needed position is now known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Distance on $[0,2]$.",
          "workingLatex": "|s(2) - s(0)| = |20 - 0| = 20 \\ \\text{m}",
          "explanation": "With $v>0$ on this interval, the distance is the size of the forward change in displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Distance on $[2,4]$.",
          "workingLatex": "|s(4) - s(2)| = |16 - 20| = 4 \\ \\text{m}",
          "explanation": "The backward leg covers $4$ m. The absolute value counts this as positive distance instead of allowing it to subtract.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Distance on $[4,6]$.",
          "workingLatex": "|s(6) - s(4)| = |36 - 16| = 20 \\ \\text{m}",
          "explanation": "The final forward leg adds $20$ m. Each leg contributes its own positive length.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Add the three leg distances.",
          "workingLatex": "\\text{Total distance} = 20 + 4 + 20 = 44 \\ \\text{m}",
          "explanation": "Summing the positive distances from all three legs gives the true path length over the first $6$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State the answer and contrast with displacement.",
          "workingLatex": "\\text{Distance} = 44 \\ \\text{m}, \\quad \\text{Net displacement} = 36 \\ \\text{m}",
          "explanation": "The total distance $44$ m is greater than the net displacement $36$ m by twice the short backward leg, confirming the particle doubled back before continuing.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total distance travelled $= 44 \\ \\text{m}$ (net displacement $= 36 \\ \\text{m}$)."
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q054",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": ["variable-acceleration", "total-distance", "times-at-rest", "integration"],
    "questionText": "A particle moves in a straight line with velocity $v = t^2 - 7t + 10 \\ \\text{m s}^{-1}$ at time $t$ seconds, starting from the origin. Find the two times at which it is at rest, and the total distance travelled between $t = 0$ and $t = 6$.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Find when the particle is at rest.",
          "workingLatex": "v = 0 \\ \\Rightarrow\\ t^2 - 7t + 10 = 0",
          "explanation": "A particle is at rest when its velocity is zero. Solving this equation gives the instants where the particle pauses, which are also where it may change direction.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise to find the rest times.",
          "workingLatex": "(t - 2)(t - 5) = 0 \\ \\Rightarrow\\ t = 2 \\ \\text{s}, \\ t = 5 \\ \\text{s}",
          "explanation": "The quadratic factorises neatly, giving the two rest times. Both lie inside the interval $[0,6]$, so both matter when we split the journey.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the velocity to obtain displacement.",
          "workingLatex": "s = \\int (t^2 - 7t + 10)\\,\\mathrm dt = \\tfrac{1}{3}t^3 - \\tfrac{7}{2}t^2 + 10t + C",
          "explanation": "Displacement is the integral of velocity. We keep the fractions exact so the later evaluations stay accurate.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Fix the constant using the starting position.",
          "workingLatex": "s(0) = 0 \\ \\Rightarrow\\ C = 0, \\quad s = \\tfrac{1}{3}t^3 - \\tfrac{7}{2}t^2 + 10t",
          "explanation": "The particle starts at the origin, so $C = 0$. Now we can compute displacement at any of the key times.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Split the interval and check velocity signs.",
          "workingLatex": "v(0) = 10 > 0, \\quad v(3) = 9 - 21 + 10 = -2 < 0, \\quad v(6) = 36 - 42 + 10 = 4 > 0",
          "explanation": "The rest times $t=2$ and $t=5$ divide $[0,6]$ into three parts. Sign checks reveal forward, backward, then forward motion, so we handle each leg separately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the displacement at $t = 0$.",
          "workingLatex": "s(0) = 0 \\ \\text{m}",
          "explanation": "This is the baseline position at the start of the motion.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the displacement at $t = 2$.",
          "workingLatex": "s(2) = \\tfrac{8}{3} - 14 + 20 = \\tfrac{8}{3} + 6 = \\tfrac{26}{3} \\ \\text{m}",
          "explanation": "Working with the common denominator $3$ keeps the arithmetic exact: $\\tfrac{8}{3} + \\tfrac{18}{3} = \\tfrac{26}{3}$. This is the end of the first forward leg.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the displacement at $t = 5$.",
          "workingLatex": "s(5) = \\tfrac{125}{3} - \\tfrac{175}{2} + 50 = \\tfrac{250 - 525 + 300}{6} = \\tfrac{25}{6} \\ \\text{m}",
          "explanation": "Putting everything over $6$ gives $\\tfrac{25}{6}$. The particle has slipped back from $\\tfrac{26}{3} = \\tfrac{52}{6}$ during the backward leg.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the displacement at $t = 6$.",
          "workingLatex": "s(6) = 72 - 126 + 60 = 6 \\ \\text{m}",
          "explanation": "In the final forward leg the particle advances from $\\tfrac{25}{6}$ m to $6$ m. All key positions are now known.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance on $[0,2]$.",
          "workingLatex": "\\left|s(2) - s(0)\\right| = \\left|\\tfrac{26}{3} - 0\\right| = \\tfrac{26}{3} \\ \\text{m}",
          "explanation": "The velocity is positive here, so the distance is the forward change in displacement, $\\tfrac{26}{3}$ m.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Distance on $[2,5]$.",
          "workingLatex": "\\left|s(5) - s(2)\\right| = \\left|\\tfrac{25}{6} - \\tfrac{52}{6}\\right| = \\tfrac{27}{6} = \\tfrac{9}{2} \\ \\text{m}",
          "explanation": "On the backward leg the particle covers $\\tfrac{9}{2}$ m. The absolute value ensures this retreat adds to, rather than subtracts from, the total.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Distance on $[5,6]$.",
          "workingLatex": "\\left|s(6) - s(5)\\right| = \\left|6 - \\tfrac{25}{6}\\right| = \\left|\\tfrac{36 - 25}{6}\\right| = \\tfrac{11}{6} \\ \\text{m}",
          "explanation": "The final forward leg covers $\\tfrac{11}{6}$ m. Now every leg has a positive length.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Sum the leg distances over a common denominator.",
          "workingLatex": "\\text{Total} = \\tfrac{52}{6} + \\tfrac{27}{6} + \\tfrac{11}{6} = \\tfrac{90}{6} = 15 \\ \\text{m}",
          "explanation": "Writing every distance over $6$ makes the addition clean: $52 + 27 + 11 = 90$, and $\\tfrac{90}{6} = 15$. The fractions combine to a whole number.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer and compare with displacement.",
          "workingLatex": "\\text{Rest at } t = 2, \\ 5 \\ \\text{s}; \\quad \\text{Distance} = 15 \\ \\text{m}; \\quad \\text{Net displacement} = 6 \\ \\text{m}",
          "explanation": "The particle is at rest at $t=2$ s and $t=5$ s, travels $15$ m in total, yet ends only $6$ m from the origin because of the backward middle leg.",
          "diagram": null
        }
      ],
      "finalAnswer": "At rest at $t = 2 \\ \\text{s}$ and $t = 5 \\ \\text{s}$; total distance $= 15 \\ \\text{m}$ (net displacement $= 6 \\ \\text{m}$)."
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q055",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": ["variable-acceleration", "minimum-velocity", "total-distance", "integration"],
    "questionText": "A particle moves in a straight line with acceleration $a = 2t - 8 \\ \\text{m s}^{-2}$. At $t = 0$ it has velocity $12 \\ \\text{m s}^{-1}$ and displacement $s = 0$. Find the time at which the velocity is a minimum and its minimum value, and the total distance travelled during the first $8$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the acceleration to find velocity.",
          "workingLatex": "v = \\int (2t - 8)\\,\\mathrm dt = t^2 - 8t + C_1",
          "explanation": "Velocity is the integral of acceleration. The constant $C_1$ is fixed by the known velocity at the start.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the initial velocity.",
          "workingLatex": "v(0) = 12 \\ \\Rightarrow\\ C_1 = 12, \\quad v = t^2 - 8t + 12",
          "explanation": "Substituting $t=0$ and $v=12$ gives $C_1 = 12$. The velocity is now fully determined.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find when the velocity is a minimum.",
          "workingLatex": "\\dfrac{\\mathrm dv}{\\mathrm dt} = a = 2t - 8 = 0 \\ \\Rightarrow\\ t = 4 \\ \\text{s}",
          "explanation": "The velocity is smallest where its rate of change, the acceleration, is zero. Because $a$ changes from negative to positive there, $t=4$ gives a minimum, not a maximum.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the minimum velocity.",
          "workingLatex": "v(4) = 16 - 32 + 12 = -4 \\ \\text{m s}^{-1}",
          "explanation": "Substituting $t=4$ gives the least velocity, $-4 \\ \\text{m s}^{-1}$. The negative sign means the particle is moving backwards at its most negative velocity.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the velocity to find displacement.",
          "workingLatex": "s = \\int (t^2 - 8t + 12)\\,\\mathrm dt = \\tfrac{1}{3}t^3 - 4t^2 + 12t + C_2",
          "explanation": "Integrating velocity gives displacement. The new constant $C_2$ is set by the initial position.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the initial displacement.",
          "workingLatex": "s(0) = 0 \\ \\Rightarrow\\ C_2 = 0, \\quad s = \\tfrac{1}{3}t^3 - 4t^2 + 12t",
          "explanation": "The particle starts at the origin, so $C_2 = 0$. Now displacement can be found at any key time.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the rest times by factorising the velocity.",
          "workingLatex": "t^2 - 8t + 12 = (t - 2)(t - 6) = 0 \\ \\Rightarrow\\ t = 2, \\ 6",
          "explanation": "The particle turns where $v = 0$. The roots $t=2$ and $t=6$ mark where the direction of travel may switch.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Split the interval and check velocity signs.",
          "workingLatex": "v(0) = 12 > 0, \\quad v(4) = -4 < 0, \\quad v(8) = 64 - 64 + 12 = 12 > 0",
          "explanation": "The rest times divide $[0,8]$ into $[0,2]$, $[2,6]$ and $[6,8]$. The signs show forward, backward, then forward motion, so we treat each leg on its own.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the displacement at $t = 0$ and $t = 2$.",
          "workingLatex": "s(0) = 0, \\quad s(2) = \\tfrac{8}{3} - 16 + 24 = \\tfrac{8}{3} + 8 = \\tfrac{32}{3} \\ \\text{m}",
          "explanation": "Keeping thirds exact, $\\tfrac{8}{3} + \\tfrac{24}{3} = \\tfrac{32}{3}$. This is the furthest point of the first forward leg.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the displacement at $t = 6$.",
          "workingLatex": "s(6) = 72 - 144 + 72 = 0 \\ \\text{m}",
          "explanation": "The backward leg carries the particle all the way back to the origin by $t=6$. Its displacement is momentarily zero again.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the displacement at $t = 8$.",
          "workingLatex": "s(8) = \\tfrac{512}{3} - 256 + 96 = \\tfrac{512 - 480}{3} = \\tfrac{32}{3} \\ \\text{m}",
          "explanation": "The final forward leg brings the particle back out to $\\tfrac{32}{3}$ m. All key positions are now recorded.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Distance on $[0,2]$.",
          "workingLatex": "\\left|s(2) - s(0)\\right| = \\left|\\tfrac{32}{3} - 0\\right| = \\tfrac{32}{3} \\ \\text{m}",
          "explanation": "The velocity is positive on this leg, so the distance equals the forward change in displacement.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Distance on $[2,6]$.",
          "workingLatex": "\\left|s(6) - s(2)\\right| = \\left|0 - \\tfrac{32}{3}\\right| = \\tfrac{32}{3} \\ \\text{m}",
          "explanation": "On the backward leg the particle retraces the whole $\\tfrac{32}{3}$ m back to the origin. The absolute value keeps this positive.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Distance on $[6,8]$.",
          "workingLatex": "\\left|s(8) - s(6)\\right| = \\left|\\tfrac{32}{3} - 0\\right| = \\tfrac{32}{3} \\ \\text{m}",
          "explanation": "The final forward leg again covers $\\tfrac{32}{3}$ m. Each of the three legs happens to be the same length here.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Sum the three leg distances.",
          "workingLatex": "\\text{Total distance} = \\tfrac{32}{3} + \\tfrac{32}{3} + \\tfrac{32}{3} = \\tfrac{96}{3} = 32 \\ \\text{m}",
          "explanation": "Three equal legs of $\\tfrac{32}{3}$ m add to $\\tfrac{96}{3} = 32$ m, a whole number. This is the full path length.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State all results.",
          "workingLatex": "\\text{Min velocity } -4 \\ \\text{m s}^{-1} \\text{ at } t = 4 \\ \\text{s}; \\quad \\text{Distance} = 32 \\ \\text{m}",
          "explanation": "The velocity reaches its minimum of $-4 \\ \\text{m s}^{-1}$ at $t=4$ s, and the particle travels $32$ m in total, even though it ends only $\\tfrac{32}{3}$ m from the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum velocity $-4 \\ \\text{m s}^{-1}$ at $t = 4 \\ \\text{s}$; total distance travelled $= 32 \\ \\text{m}$."
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q056",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "total-distance", "cubic-velocity", "integration"],
    "questionText": "A particle starts at the origin and moves in a straight line with velocity $v = t^3 - 6t^2 + 8t \\ \\text{m s}^{-1}$ at time $t$ seconds. The velocity is zero at $t = 0$, $t = 2$ and $t = 4$. Find the total distance travelled during the first $4$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Factorise the velocity to confirm the rest times.",
          "workingLatex": "v = t^3 - 6t^2 + 8t = t(t^2 - 6t + 8) = t(t - 2)(t - 4)",
          "explanation": "Taking out the common factor $t$ and factorising the quadratic reveals the roots directly. These are the instants where the particle is momentarily at rest and may turn around.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Read off the rest times.",
          "workingLatex": "v = 0 \\ \\Rightarrow\\ t = 0, \\ 2, \\ 4",
          "explanation": "The velocity vanishes at $t=0$, $2$ and $4$. Within the interval $[0,4]$ the two interior roots at $t=2$ and $t=4$ mark direction changes.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Integrate the velocity to find displacement.",
          "workingLatex": "s = \\int (t^3 - 6t^2 + 8t)\\,\\mathrm dt = \\tfrac{1}{4}t^4 - 2t^3 + 4t^2 + C",
          "explanation": "Integrating each term of the cubic gives a quartic displacement. The constant $C$ is fixed by the starting position.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Apply the initial condition.",
          "workingLatex": "s(0) = 0 \\ \\Rightarrow\\ C = 0, \\quad s = \\tfrac{1}{4}t^4 - 2t^3 + 4t^2",
          "explanation": "The particle starts at the origin, so $C = 0$. We can now evaluate displacement at the key times.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Set out the plan for total distance.",
          "workingLatex": "\\text{Total distance} = \\sum \\left| \\Delta s \\text{ on each interval where } v \\text{ keeps one sign} \\right|",
          "explanation": "Because the particle reverses at $t=2$, its forward and backward motions partly cancel in the net displacement. To get the true path length we must split at the rest time, measure each leg, and add the sizes of those changes.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Test the velocity sign on the first sub-interval $[0,2]$.",
          "workingLatex": "v(1) = 1 - 6 + 8 = 3 > 0",
          "explanation": "At $t=1$ the velocity is positive, so on $[0,2]$ the particle moves in the positive direction. Distance and change in displacement agree in sign here.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Test the velocity sign on the second sub-interval $[2,4]$.",
          "workingLatex": "v(3) = 27 - 54 + 24 = -3 < 0",
          "explanation": "At $t=3$ the velocity is negative, so on $[2,4]$ the particle moves backwards. This is exactly why we cannot simply subtract the end displacements: the legs oppose each other.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the displacement at $t = 0$.",
          "workingLatex": "s(0) = 0 \\ \\text{m}",
          "explanation": "The origin is the baseline from which we measure the first leg.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the displacement at $t = 2$.",
          "workingLatex": "s(2) = \\tfrac{16}{4} - 2(8) + 4(4) = 4 - 16 + 16 = 4 \\ \\text{m}",
          "explanation": "By $t=2$ the particle is $4$ m from the origin. This is the turning point at the end of the forward leg.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the displacement at $t = 4$.",
          "workingLatex": "s(4) = \\tfrac{256}{4} - 2(64) + 4(16) = 64 - 128 + 64 = 0 \\ \\text{m}",
          "explanation": "By $t=4$ the particle has returned exactly to the origin. Its net displacement over the whole interval is zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Distance on $[0,2]$.",
          "workingLatex": "|s(2) - s(0)| = |4 - 0| = 4 \\ \\text{m}",
          "explanation": "With the velocity positive throughout, the distance is the forward change in displacement, $4$ m.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Distance on $[2,4]$.",
          "workingLatex": "|s(4) - s(2)| = |0 - 4| = 4 \\ \\text{m}",
          "explanation": "On the backward leg the particle retraces $4$ m back to the origin. The absolute value keeps this as positive distance.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Add the two leg distances.",
          "workingLatex": "\\text{Total distance} = 4 + 4 = 8 \\ \\text{m}",
          "explanation": "Summing the two positive legs gives the full path length travelled over the first $4$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "State the answer and contrast with displacement.",
          "workingLatex": "\\text{Distance} = 8 \\ \\text{m}, \\quad \\text{Net displacement} = 0 \\ \\text{m}",
          "explanation": "The particle travels $8$ m yet finishes back at the origin. This shows clearly why distance, which counts every metre of the path, differs from the net displacement of zero.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total distance travelled $= 8 \\ \\text{m}$ (net displacement $= 0$ m)."
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q057",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "total-distance", "integration", "acceleration-velocity"],
    "questionText": "A particle moves in a straight line with acceleration $a = 12 - 6t \\ \\text{m s}^{-2}$. At $t = 0$ it has velocity $0 \\ \\text{m s}^{-1}$ and displacement $s = 0$. Given that the velocity changes sign during the motion, find the total distance travelled in the first $5$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the acceleration to find velocity.",
          "workingLatex": "v = \\int (12 - 6t)\\,\\mathrm dt = 12t - 3t^2 + C_1",
          "explanation": "Velocity is the integral of acceleration. The constant $C_1$ is fixed by the velocity at the start.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the initial velocity.",
          "workingLatex": "v(0) = 0 \\ \\Rightarrow\\ C_1 = 0, \\quad v = 12t - 3t^2",
          "explanation": "The particle starts from rest, so $C_1 = 0$. The velocity is now fully known.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the rest times by factorising the velocity.",
          "workingLatex": "v = 12t - 3t^2 = 3t(4 - t) = 0 \\ \\Rightarrow\\ t = 0, \\ 4",
          "explanation": "Factoring out $3t$ shows the velocity is zero at $t=0$ (the start) and $t=4$. The interior root $t=4$ is where the velocity changes sign.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Determine the velocity sign on each part of $[0,5]$.",
          "workingLatex": "v(1) = 12 - 3 = 9 > 0, \\quad v(5) = 60 - 75 = -15 < 0",
          "explanation": "Before $t=4$ the velocity is positive, so the particle moves forwards; after $t=4$ it is negative, so the particle moves backwards. This sign change is the reason distance exceeds displacement.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the velocity to find displacement.",
          "workingLatex": "s = \\int (12t - 3t^2)\\,\\mathrm dt = 6t^2 - t^3 + C_2",
          "explanation": "Integrating velocity gives displacement. The constant $C_2$ is fixed by the starting position.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the initial displacement.",
          "workingLatex": "s(0) = 0 \\ \\Rightarrow\\ C_2 = 0, \\quad s = 6t^2 - t^3",
          "explanation": "The particle starts at the origin, so $C_2 = 0$. Displacement can now be evaluated at the key times.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the displacement at $t = 0$.",
          "workingLatex": "s(0) = 0 \\ \\text{m}",
          "explanation": "The origin is our baseline for measuring the forward leg.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the displacement at $t = 4$.",
          "workingLatex": "s(4) = 6(16) - 64 = 96 - 64 = 32 \\ \\text{m}",
          "explanation": "By $t=4$ the particle reaches $32$ m from the origin. This is the furthest forward point, since the velocity is zero here before reversing.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the displacement at $t = 5$.",
          "workingLatex": "s(5) = 6(25) - 125 = 150 - 125 = 25 \\ \\text{m}",
          "explanation": "During the backward leg the particle slips from $32$ m to $25$ m. Both key positions of the return leg are now known.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance on the forward leg $[0,4]$.",
          "workingLatex": "|s(4) - s(0)| = |32 - 0| = 32 \\ \\text{m}",
          "explanation": "With the velocity positive throughout, the distance equals the forward change in displacement, $32$ m.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Distance on the backward leg $[4,5]$.",
          "workingLatex": "|s(5) - s(4)| = |25 - 32| = 7 \\ \\text{m}",
          "explanation": "On the backward leg the particle covers $7$ m. The absolute value counts this retreat as positive distance rather than letting it cancel the forward leg.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Add the two leg distances.",
          "workingLatex": "\\text{Total distance} = 32 + 7 = 39 \\ \\text{m}",
          "explanation": "Summing the two positive legs gives the true path length over the first $5$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer and contrast with displacement.",
          "workingLatex": "\\text{Distance} = 39 \\ \\text{m}, \\quad \\text{Net displacement} = 25 \\ \\text{m}",
          "explanation": "The distance $39$ m exceeds the net displacement $25$ m by twice the backward leg, exactly as expected when the velocity changes sign once.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total distance travelled $= 39 \\ \\text{m}$ (net displacement $= 25 \\ \\text{m}$)."
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q058",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "written",
    "tags": ["variable-acceleration", "total-distance", "differentiation", "at-rest"],
    "questionText": "A particle starts at the origin and moves in a straight line with displacement $s = t^4 - 8t^2$ metres for $t \\ge 0$. Find its velocity, the time (for $t > 0$) at which it is momentarily at rest, and the total distance travelled during the first $3$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Differentiate the displacement to find velocity.",
          "workingLatex": "v = \\dfrac{\\mathrm ds}{\\mathrm dt} = 4t^3 - 16t \\ \\text{m s}^{-1}",
          "explanation": "Velocity is the derivative of displacement. Differentiating $t^4 \\to 4t^3$ and $-8t^2 \\to -16t$ gives the velocity at any instant.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Factorise the velocity.",
          "workingLatex": "v = 4t^3 - 16t = 4t(t^2 - 4) = 4t(t - 2)(t + 2)",
          "explanation": "Taking out $4t$ and using the difference of two squares fully factorises the velocity. This makes the times at rest easy to read off.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the time at rest for $t > 0$.",
          "workingLatex": "v = 0 \\ \\Rightarrow\\ t = 0, \\ 2, \\ -2; \\quad \\text{for } t > 0: \\ t = 2 \\ \\text{s}",
          "explanation": "The root $t=-2$ is rejected because time cannot be negative, and $t=0$ is the start. So the only moment the particle is momentarily at rest for $t>0$ is $t=2$ s.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Test the velocity sign on the first sub-interval $[0,2]$.",
          "workingLatex": "v(1) = 4(1)^3 - 16(1) = 4 - 16 = -12 < 0",
          "explanation": "At $t=1$ the velocity is negative, so on $[0,2]$ the particle moves backwards. This is a striking start: it recedes from the origin before ever moving forwards.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Test the velocity sign on the second sub-interval $[2,3]$.",
          "workingLatex": "v(2.5) = 4(2.5)^3 - 16(2.5) = 62.5 - 40 = 22.5 > 0",
          "explanation": "At $t=2.5$ the velocity is positive, so on $[2,3]$ the particle moves forwards. The direction reverses at $t=2$, so the two legs must be measured separately.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the displacement at $t = 0$.",
          "workingLatex": "s(0) = 0^4 - 8(0)^2 = 0 \\ \\text{m}",
          "explanation": "The particle begins at the origin, our baseline for measuring the first leg.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the displacement at $t = 2$.",
          "workingLatex": "s(2) = 2^4 - 8(2)^2 = 16 - 32 = -16 \\ \\text{m}",
          "explanation": "By $t=2$ the particle is at $-16$ m, having moved backwards. This is the most negative point, since the velocity is zero here before reversing.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the displacement at $t = 3$.",
          "workingLatex": "s(3) = 3^4 - 8(3)^2 = 81 - 72 = 9 \\ \\text{m}",
          "explanation": "By $t=3$ the particle has swung forward to $+9$ m. All key positions are now known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Distance on the first leg $[0,2]$.",
          "workingLatex": "|s(2) - s(0)| = |-16 - 0| = 16 \\ \\text{m}",
          "explanation": "The velocity is negative throughout $[0,2]$, so the particle moves $16$ m backwards. The absolute value records this as $16$ m of distance.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance on the second leg $[2,3]$.",
          "workingLatex": "|s(3) - s(2)| = |9 - (-16)| = |25| = 25 \\ \\text{m}",
          "explanation": "On $[2,3]$ the particle moves forwards from $-16$ m to $+9$ m, covering $25$ m. It must first undo the backward $16$ m and then advance a further $9$ m.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Add the two leg distances.",
          "workingLatex": "\\text{Total distance} = 16 + 25 = 41 \\ \\text{m}",
          "explanation": "Summing the two positive legs gives the full path length over the first $3$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Find the net displacement for comparison.",
          "workingLatex": "s(3) - s(0) = 9 - 0 = 9 \\ \\text{m}",
          "explanation": "The net displacement is just the change in position from start to finish, $9$ m forwards. It is far smaller than the distance because the early backward leg is later undone.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State all results.",
          "workingLatex": "v = 4t^3 - 16t; \\ \\text{rest at } t = 2 \\ \\text{s}; \\ \\text{Distance} = 41 \\ \\text{m}; \\ \\text{Net displacement} = 9 \\ \\text{m}",
          "explanation": "The velocity is $4t^3 - 16t$, the particle is momentarily at rest at $t=2$ s, and it travels $41$ m in total even though it ends only $9$ m from the origin because it first moved backwards.",
          "diagram": null
        }
      ],
      "finalAnswer": "Velocity $v = 4t^3 - 16t \\ \\text{m s}^{-1}$; momentarily at rest at $t = 2 \\ \\text{s}$; total distance travelled $= 41 \\ \\text{m}$ (net displacement $= 9 \\ \\text{m}$)."
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q059",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Hard",
    "marks": 8,
    "answerType": "numeric",
    "tags": ["variable-acceleration", "total-distance", "integration", "velocity-time"],
    "questionText": "A particle moves in a straight line with velocity $v = 3t^2 - 30t + 72 \\ \\text{m s}^{-1}$ at time $t$ seconds, starting from the origin. The velocity is zero at $t = 4$ and $t = 6$. Find the total distance travelled during the first $8$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the velocity to find displacement.",
          "workingLatex": "s = \\int (3t^2 - 30t + 72)\\,\\mathrm dt = t^3 - 15t^2 + 72t + C",
          "explanation": "Displacement is the integral of velocity. We integrate term by term and keep the constant $C$ until the starting position fixes it.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the initial condition.",
          "workingLatex": "s(0) = 0 \\ \\Rightarrow\\ C = 0, \\quad s = t^3 - 15t^2 + 72t",
          "explanation": "The particle starts at the origin, so $C = 0$. The displacement formula is now complete.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Factorise the velocity to confirm the rest times.",
          "workingLatex": "v = 3(t^2 - 10t + 24) = 3(t - 4)(t - 6) = 0 \\ \\Rightarrow\\ t = 4, \\ 6",
          "explanation": "The particle can only reverse where $v = 0$. Confirming the roots $t=4$ and $t=6$ tells us where the direction of travel may change.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Split the interval and check velocity signs.",
          "workingLatex": "v(0) = 72 > 0, \\quad v(5) = 75 - 150 + 72 = -3 < 0, \\quad v(8) = 192 - 240 + 72 = 24 > 0",
          "explanation": "The rest times cut $[0,8]$ into $[0,4]$, $[4,6]$ and $[6,8]$. The signs show forward, backward, then forward motion, so each leg is handled separately.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Evaluate the displacement at $t = 0$.",
          "workingLatex": "s(0) = 0 \\ \\text{m}",
          "explanation": "The origin is the baseline for measuring the first forward leg.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Evaluate the displacement at $t = 4$.",
          "workingLatex": "s(4) = 64 - 240 + 288 = 112 \\ \\text{m}",
          "explanation": "By $t=4$ the particle has advanced to $112$ m, at the end of its first forward leg.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Evaluate the displacement at $t = 6$.",
          "workingLatex": "s(6) = 216 - 540 + 432 = 108 \\ \\text{m}",
          "explanation": "During the backward leg the particle slips from $112$ m to $108$ m, a small retreat of $4$ m.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Evaluate the displacement at $t = 8$.",
          "workingLatex": "s(8) = 512 - 960 + 576 = 128 \\ \\text{m}",
          "explanation": "In the final forward leg the particle advances from $108$ m to $128$ m. Every needed position is now known.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Distance on $[0,4]$.",
          "workingLatex": "|s(4) - s(0)| = |112 - 0| = 112 \\ \\text{m}",
          "explanation": "With the velocity positive throughout, the distance is the forward change in displacement, $112$ m.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Distance on $[4,6]$.",
          "workingLatex": "|s(6) - s(4)| = |108 - 112| = 4 \\ \\text{m}",
          "explanation": "The backward leg covers $4$ m. The absolute value counts this retreat as positive distance instead of subtracting it.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Distance on $[6,8]$.",
          "workingLatex": "|s(8) - s(6)| = |128 - 108| = 20 \\ \\text{m}",
          "explanation": "The final forward leg adds $20$ m. Each leg now has its own positive length.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Sum the three leg distances.",
          "workingLatex": "\\text{Total distance} = 112 + 4 + 20 = 136 \\ \\text{m}",
          "explanation": "Adding the positive distances from all three legs gives the full path length over the first $8$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "State the answer and contrast with displacement.",
          "workingLatex": "\\text{Distance} = 136 \\ \\text{m}, \\quad \\text{Net displacement} = 128 \\ \\text{m}",
          "explanation": "The distance $136$ m exceeds the net displacement $128$ m by twice the small backward leg, confirming the particle briefly reversed before continuing forward.",
          "diagram": null
        }
      ],
      "finalAnswer": "Total distance travelled $= 136 \\ \\text{m}$ (net displacement $= 128 \\ \\text{m}$)."
    }
  },
  {
    "id": "al.y1.mech.variable-acceleration.q060",
    "level": "A-Level Maths",
    "topic": "Year 1 Mechanics",
    "subtopic": "Variable acceleration",
    "subtopicId": "al.y1.mech.variable-acceleration",
    "difficulty": "Hard",
    "marks": 9,
    "answerType": "written",
    "tags": ["variable-acceleration", "minimum-velocity", "total-distance", "integration"],
    "questionText": "A particle moves in a straight line with acceleration $a = 6t - 12 \\ \\text{m s}^{-2}$. At $t = 0$ it has velocity $9 \\ \\text{m s}^{-1}$ and displacement $s = 0$. Find the minimum velocity and the total distance travelled during the first $4$ seconds.",
    "questionDiagram": null,
    "workedSolution": {
      "steps": [
        {
          "stepNumber": 1,
          "description": "Integrate the acceleration to find velocity.",
          "workingLatex": "v = \\int (6t - 12)\\,\\mathrm dt = 3t^2 - 12t + C_1",
          "explanation": "Velocity is the integral of acceleration. The constant $C_1$ is fixed by the known velocity at the start.",
          "diagram": null
        },
        {
          "stepNumber": 2,
          "description": "Apply the initial velocity.",
          "workingLatex": "v(0) = 9 \\ \\Rightarrow\\ C_1 = 9, \\quad v = 3t^2 - 12t + 9",
          "explanation": "Substituting $t=0$ and $v=9$ gives $C_1 = 9$. The velocity is now fully determined.",
          "diagram": null
        },
        {
          "stepNumber": 3,
          "description": "Find the time of minimum velocity.",
          "workingLatex": "\\dfrac{\\mathrm dv}{\\mathrm dt} = a = 6t - 12 = 0 \\ \\Rightarrow\\ t = 2 \\ \\text{s}",
          "explanation": "The velocity is smallest where the acceleration is zero. Since $a$ goes from negative to positive there, $t=2$ gives a minimum of the velocity.",
          "diagram": null
        },
        {
          "stepNumber": 4,
          "description": "Compute the minimum velocity.",
          "workingLatex": "v(2) = 3(4) - 12(2) + 9 = 12 - 24 + 9 = -3 \\ \\text{m s}^{-1}",
          "explanation": "Substituting $t=2$ gives the least velocity, $-3 \\ \\text{m s}^{-1}$. The negative sign shows the particle is moving backwards at this instant.",
          "diagram": null
        },
        {
          "stepNumber": 5,
          "description": "Integrate the velocity to find displacement.",
          "workingLatex": "s = \\int (3t^2 - 12t + 9)\\,\\mathrm dt = t^3 - 6t^2 + 9t + C_2",
          "explanation": "Integrating velocity gives displacement. The constant $C_2$ is fixed by the starting position.",
          "diagram": null
        },
        {
          "stepNumber": 6,
          "description": "Apply the initial displacement.",
          "workingLatex": "s(0) = 0 \\ \\Rightarrow\\ C_2 = 0, \\quad s = t^3 - 6t^2 + 9t",
          "explanation": "The particle starts at the origin, so $C_2 = 0$. Now displacement can be evaluated at the key times.",
          "diagram": null
        },
        {
          "stepNumber": 7,
          "description": "Find the rest times by factorising the velocity.",
          "workingLatex": "3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t - 1)(t - 3) = 0 \\ \\Rightarrow\\ t = 1, \\ 3",
          "explanation": "The particle turns where $v = 0$. The roots $t=1$ and $t=3$ mark where the direction of travel may change.",
          "diagram": null
        },
        {
          "stepNumber": 8,
          "description": "Split the interval and check velocity signs.",
          "workingLatex": "v(0) = 9 > 0, \\quad v(2) = -3 < 0, \\quad v(4) = 48 - 48 + 9 = 9 > 0",
          "explanation": "The rest times divide $[0,4]$ into $[0,1]$, $[1,3]$ and $[3,4]$. The signs show forward, backward, then forward motion, so each leg is measured on its own.",
          "diagram": null
        },
        {
          "stepNumber": 9,
          "description": "Evaluate the displacement at $t = 0$ and $t = 1$.",
          "workingLatex": "s(0) = 0, \\quad s(1) = 1 - 6 + 9 = 4 \\ \\text{m}",
          "explanation": "The particle moves forward to $4$ m by $t=1$, the end of the first forward leg.",
          "diagram": null
        },
        {
          "stepNumber": 10,
          "description": "Evaluate the displacement at $t = 3$.",
          "workingLatex": "s(3) = 27 - 54 + 27 = 0 \\ \\text{m}",
          "explanation": "The backward leg carries the particle all the way back to the origin by $t=3$, so its displacement is momentarily zero.",
          "diagram": null
        },
        {
          "stepNumber": 11,
          "description": "Evaluate the displacement at $t = 4$.",
          "workingLatex": "s(4) = 64 - 96 + 36 = 4 \\ \\text{m}",
          "explanation": "In the final forward leg the particle advances from the origin back out to $4$ m. Every key position is now known.",
          "diagram": null
        },
        {
          "stepNumber": 12,
          "description": "Distance on $[0,1]$.",
          "workingLatex": "|s(1) - s(0)| = |4 - 0| = 4 \\ \\text{m}",
          "explanation": "With the velocity positive here, the distance is the forward change in displacement, $4$ m.",
          "diagram": null
        },
        {
          "stepNumber": 13,
          "description": "Distance on $[1,3]$.",
          "workingLatex": "|s(3) - s(1)| = |0 - 4| = 4 \\ \\text{m}",
          "explanation": "On the backward leg the particle retraces the $4$ m back to the origin. The absolute value keeps this positive.",
          "diagram": null
        },
        {
          "stepNumber": 14,
          "description": "Distance on $[3,4]$.",
          "workingLatex": "|s(4) - s(3)| = |4 - 0| = 4 \\ \\text{m}",
          "explanation": "The final forward leg again covers $4$ m. Here all three legs happen to be the same length.",
          "diagram": null
        },
        {
          "stepNumber": 15,
          "description": "Sum the three leg distances.",
          "workingLatex": "\\text{Total distance} = 4 + 4 + 4 = 12 \\ \\text{m}",
          "explanation": "Adding the three equal positive legs gives the full path length over the first $4$ seconds.",
          "diagram": null
        },
        {
          "stepNumber": 16,
          "description": "State all results.",
          "workingLatex": "\\text{Min velocity } -3 \\ \\text{m s}^{-1} \\text{ at } t = 2 \\ \\text{s}; \\quad \\text{Distance} = 12 \\ \\text{m}; \\quad \\text{Net displacement} = 4 \\ \\text{m}",
          "explanation": "The velocity reaches its minimum of $-3 \\ \\text{m s}^{-1}$ at $t=2$ s, and the particle travels $12$ m in total, even though it finishes only $4$ m from the origin.",
          "diagram": null
        }
      ],
      "finalAnswer": "Minimum velocity $-3 \\ \\text{m s}^{-1}$ (at $t = 2 \\ \\text{s}$); total distance travelled $= 12 \\ \\text{m}$ (net displacement $= 4 \\ \\text{m}$)."
    }
  },
{
  "id": "al.y1.mech.variable-acceleration.q061",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "tags": ["variable-acceleration", "total-distance", "average-speed", "integration", "calculus-of-motion"],
  "questionText": "A particle moves in a straight line with velocity $v = t^2 - 8t + 12 \\ \\text{m s}^{-1}$ at time $t$ seconds. Find the total distance travelled in the first $7\\ \\text{s}$ and the average speed over that time.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Identify the given information and the strategy.",
        "workingLatex": "v = t^2 - 8t + 12, \\quad 0 \\le t \\le 7",
        "explanation": "We are told velocity as a function of time. Distance travelled is not the same as displacement whenever the particle changes direction, so before integrating we must locate every instant at which the velocity is zero. Total distance is then built from the displacement on each interval between those instants.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Find when the particle is instantaneously at rest.",
        "workingLatex": "v = 0 \\Rightarrow t^2 - 8t + 12 = (t-2)(t-6) = 0 \\Rightarrow t = 2 \\text{ or } t = 6",
        "explanation": "The particle reverses direction only where its velocity passes through zero. Factorising the quadratic gives the two turning instants inside the interval $0 \\le t \\le 7$, which split the motion into three legs.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Check the sign of the velocity on each leg.",
        "workingLatex": "0<t<2:\\ v>0; \\quad 2<t<6:\\ v<0; \\quad 6<t<7:\\ v>0",
        "explanation": "Between consecutive roots a continuous velocity keeps one sign. Testing a point in each interval (or using the shape of an upward parabola) shows the particle moves forward, then backward, then forward again, so the middle leg's displacement will be negative.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the velocity to obtain the displacement function.",
        "workingLatex": "s = \\int v \\,\\mathrm dt = \\int (t^2 - 8t + 12)\\,\\mathrm dt = \\frac{t^3}{3} - 4t^2 + 12t + C",
        "explanation": "Displacement is the accumulation of velocity over time, so we integrate. The constant $C$ is fixed by the starting position.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Apply the initial condition.",
        "workingLatex": "s(0) = 0 \\Rightarrow C = 0 \\Rightarrow s = \\frac{t^3}{3} - 4t^2 + 12t",
        "explanation": "Taking the starting point as the origin sets $C=0$. This choice does not affect distances (they are differences of $s$), but it keeps the numbers clean.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the displacement at the ends of the first leg.",
        "workingLatex": "s(0)=0, \\quad s(2) = \\frac{8}{3} - 16 + 24 = \\frac{32}{3}",
        "explanation": "The first leg ends at $t=2$. Evaluating the position there tells us how far the particle has moved forward before it first stops.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the displacement at t = 6.",
        "workingLatex": "s(6) = \\frac{216}{3} - 4(36) + 72 = 72 - 144 + 72 = 0",
        "explanation": "By $t=6$ the particle has returned exactly to the origin: in terms of position the backward leg has cancelled the forward leg, though not in terms of distance.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the displacement at t = 7.",
        "workingLatex": "s(7) = \\frac{343}{3} - 4(49) + 84 = \\frac{343}{3} - 112 = \\frac{7}{3}",
        "explanation": "The final leg runs to $t=7$. This position lets us measure the last forward stretch.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Distance on the first leg [0, 2].",
        "workingLatex": "|s(2)-s(0)| = \\left|\\frac{32}{3}-0\\right| = \\frac{32}{3}",
        "explanation": "On a leg where the velocity keeps one sign, distance equals the magnitude of the change in position. Here the particle moves $\\tfrac{32}{3}$ m forward.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Distance on the second leg [2, 6].",
        "workingLatex": "|s(6)-s(2)| = \\left|0-\\frac{32}{3}\\right| = \\frac{32}{3}",
        "explanation": "Although the net displacement here is negative, distance is always positive: the particle physically travels $\\tfrac{32}{3}$ m back.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Distance on the third leg [6, 7].",
        "workingLatex": "|s(7)-s(6)| = \\left|\\frac{7}{3}-0\\right| = \\frac{7}{3}",
        "explanation": "The final forward stretch adds a further $\\tfrac{7}{3}$ m.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Add the three leg distances.",
        "workingLatex": "\\text{total distance} = \\frac{32}{3} + \\frac{32}{3} + \\frac{7}{3} = \\frac{71}{3} \\approx 23.7 \\ \\text{m}",
        "explanation": "Total distance is the sum of the individual leg distances. Taking absolute values guarantees the backward motion adds to, rather than cancels, the forward motion.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Compute the average speed.",
        "workingLatex": "\\text{average speed} = \\frac{\\text{total distance}}{\\text{time}} = \\frac{71/3}{7} = \\frac{71}{21} \\approx 3.38 \\ \\text{m s}^{-1}",
        "explanation": "Average speed uses total distance (not displacement) divided by the whole time interval of 7 s. This is what a speedometer would average, ignoring direction.",
        "diagram": null
      }
    ],
    "finalAnswer": "Total distance $= \\dfrac{71}{3} \\approx 23.7\\ \\text{m}$; average speed $= \\dfrac{71}{21} \\approx 3.38\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q062",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "tags": ["variable-acceleration", "greatest-speed", "greatest-displacement", "integration", "kinematics"],
  "questionText": "A particle starts from rest at the origin and moves in a straight line with acceleration $a = 6 - 2t \\ \\text{m s}^{-2}$ at time $t$ seconds. Find the greatest speed, the greatest displacement, and the total distance travelled during the first $6\\ \\text{s}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set out the plan.",
        "workingLatex": "a = 6 - 2t, \\quad v(0)=0, \\quad s(0)=0",
        "explanation": "Acceleration is given, so we build up to velocity by one integration and to displacement by a second. The two 'from rest at the origin' conditions supply the constants.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the acceleration to find velocity.",
        "workingLatex": "v = \\int a\\,\\mathrm dt = \\int (6-2t)\\,\\mathrm dt = 6t - t^2 + C_1",
        "explanation": "Velocity is the running total of acceleration, so integrating $a$ recovers $v$ up to a constant.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the initial velocity.",
        "workingLatex": "v(0)=0 \\Rightarrow C_1 = 0 \\Rightarrow v = 6t - t^2",
        "explanation": "Starting from rest means $v=0$ at $t=0$, which forces the constant to be zero.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Find the rest instants.",
        "workingLatex": "v = t(6-t) = 0 \\Rightarrow t = 0 \\text{ or } t = 6",
        "explanation": "Factorising shows the particle is momentarily at rest at the very start and again at $t=6$ s, the end of the interval of interest.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Determine the sign of the velocity in between.",
        "workingLatex": "0 < t < 6 \\Rightarrow t > 0 \\text{ and } 6 - t > 0 \\Rightarrow v > 0",
        "explanation": "Both factors are positive throughout the interior, so the velocity never changes sign: the particle always moves in the positive direction and never reverses.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Locate the greatest speed using the acceleration.",
        "workingLatex": "\\text{max speed where } a = 0: \\quad 6 - 2t = 0 \\Rightarrow t = 3",
        "explanation": "Speed is greatest at a turning point of $v$, that is where its derivative, the acceleration, is zero. This gives $t=3$ s.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Confirm it is a maximum.",
        "workingLatex": "a > 0 \\text{ for } t<3, \\quad a < 0 \\text{ for } t>3",
        "explanation": "The acceleration switches from positive to negative at $t=3$, so the velocity rises then falls, confirming a maximum rather than a minimum.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the greatest speed.",
        "workingLatex": "v(3) = 6(3) - 3^2 = 18 - 9 = 9 \\ \\text{m s}^{-1}",
        "explanation": "Substituting $t=3$ into the velocity gives the peak value the particle reaches.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the velocity to find displacement.",
        "workingLatex": "s = \\int v\\,\\mathrm dt = \\int (6t - t^2)\\,\\mathrm dt = 3t^2 - \\frac{t^3}{3} + C_2",
        "explanation": "A second integration converts velocity into position.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Apply the initial position.",
        "workingLatex": "s(0)=0 \\Rightarrow C_2 = 0 \\Rightarrow s = 3t^2 - \\frac{t^3}{3}",
        "explanation": "Starting at the origin sets the second constant to zero.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Identify where the displacement is greatest.",
        "workingLatex": "\\frac{\\mathrm ds}{\\mathrm dt}=v=0 \\text{ at } t=6, \\ v>0 \\text{ before}",
        "explanation": "Because the velocity stays positive until $t=6$, the position keeps increasing right up to that instant, so the greatest displacement occurs at $t=6$ s, not at $t=3$ where only the speed peaks.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the greatest displacement.",
        "workingLatex": "s(6) = 3(36) - \\frac{216}{3} = 108 - 72 = 36 \\ \\text{m}",
        "explanation": "This is how far from the origin the particle gets at the end of its forward journey.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the total distance.",
        "workingLatex": "\\text{no reversal} \\Rightarrow \\text{distance} = |s(6)-s(0)| = 36 \\ \\text{m}",
        "explanation": "Since the velocity never changed sign, the particle only ever moved forward: the total distance travelled equals the net displacement, $36$ m.",
        "diagram": null
      }
    ],
    "finalAnswer": "Greatest speed $=9\\ \\text{m s}^{-1}$ (at $t=3$ s); greatest displacement $=36\\ \\text{m}$ (at $t=6$ s); total distance $=36\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q063",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "tags": ["variable-acceleration", "two-particles", "equal-velocity", "displacement", "integration"],
  "questionText": "Two particles $P$ and $Q$ leave the origin at $t=0$ and move along the same straight line. Their velocities are $v_P = 3t^2 \\ \\text{m s}^{-1}$ and $v_Q = 12t - 9 \\ \\text{m s}^{-1}$. Find the time(s) at which they have equal velocity, and the time (other than $t=0$) at which they are level.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set up the two motions.",
        "workingLatex": "v_P = 3t^2, \\quad v_Q = 12t - 9, \\quad s_P(0)=s_Q(0)=0",
        "explanation": "Both particles start at the origin. 'Equal velocity' compares the two velocity expressions; 'level' compares the two displacement expressions, so we will need both.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Write down the equal-velocity condition.",
        "workingLatex": "3t^2 = 12t - 9",
        "explanation": "The particles have the same velocity exactly when their velocity functions are equal; we set them equal and solve.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Rearrange into a standard quadratic.",
        "workingLatex": "3t^2 - 12t + 9 = 0 \\Rightarrow t^2 - 4t + 3 = 0",
        "explanation": "Bringing everything to one side and dividing by the common factor 3 simplifies the algebra without changing the roots.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Solve for the equal-velocity times.",
        "workingLatex": "(t-1)(t-3) = 0 \\Rightarrow t = 1 \\text{ s or } t = 3 \\text{ s}",
        "explanation": "There are two separate instants where the particles momentarily share the same velocity, even though their speeds differ in between.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Interpret the equal-velocity instants.",
        "workingLatex": "t = 1 \\ \\text{s}, \\ t = 3 \\ \\text{s} \\ (\\text{both } \\ge 0, \\text{ valid})",
        "explanation": "Both solutions are non-negative, so both are physically meaningful. Between them P (whose $t^2$ growth steepens) and Q (linear) trade the lead in speed, matching velocity at the two crossing instants.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate to find P's displacement.",
        "workingLatex": "s_P = \\int 3t^2\\,\\mathrm dt = t^3 + C_P, \\quad s_P(0)=0 \\Rightarrow s_P = t^3",
        "explanation": "Position is the integral of velocity; starting at the origin makes the constant zero.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Integrate to find Q's displacement.",
        "workingLatex": "s_Q = \\int (12t-9)\\,\\mathrm dt = 6t^2 - 9t + C_Q, \\quad s_Q(0)=0 \\Rightarrow s_Q = 6t^2 - 9t",
        "explanation": "The same reasoning gives Q's position, again with a zero constant because Q also starts at the origin.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Set up the 'level' condition.",
        "workingLatex": "s_P = s_Q \\Rightarrow t^3 = 6t^2 - 9t",
        "explanation": "Two particles are level when they occupy the same position, that is when their displacement functions are equal.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Collect the terms into a cubic.",
        "workingLatex": "t^3 - 6t^2 + 9t = 0",
        "explanation": "Moving everything to one side prepares the equation for factorising.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Factorise the cubic.",
        "workingLatex": "t(t^2 - 6t + 9) = t(t-3)^2 = 0",
        "explanation": "A common factor of $t$ comes out first, and the remaining quadratic is a perfect square. The repeated factor $(t-3)^2$ is significant.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Read off the solutions.",
        "workingLatex": "t = 0 \\ (\\text{start}) \\quad \\text{or} \\quad t = 3 \\text{ s (double root)}",
        "explanation": "The root $t=0$ is just the shared starting point. The only other time they are level is $t=3$ s.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Interpret the repeated root.",
        "workingLatex": "(t-3)^2 = 0 \\Rightarrow s_P = s_Q \\text{ and } v_P = v_Q \\text{ at } t = 3",
        "explanation": "A repeated root means the position graphs touch rather than cross at $t=3$: the particles are level with equal velocity there (consistent with the equal-velocity result), so neither truly overtakes the other at that instant.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Verify by evaluating both positions at t = 3.",
        "workingLatex": "s_P(3) = 27, \\quad s_Q(3) = 6(9) - 27 = 54 - 27 = 27",
        "explanation": "Both particles are $27$ m from the origin at $t=3$ s, confirming they are level exactly there.",
        "diagram": null
      }
    ],
    "finalAnswer": "Equal velocity at $t=1\\ \\text{s}$ and $t=3\\ \\text{s}$; they are level again (other than $t=0$) at $t=3\\ \\text{s}$, both $27\\ \\text{m}$ from the origin."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q064",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "written",
  "tags": ["variable-acceleration", "instantaneous-rest", "total-distance", "cubic-velocity", "integration"],
  "questionText": "A particle moves in a straight line with velocity $v = 2t^3 - 15t^2 + 24t \\ \\text{m s}^{-1}$ at time $t$ seconds. Find the times ($t>0$) at which it is instantaneously at rest, and the total distance travelled between the first two such instants. Give answers to 3 significant figures where not exact.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set out the approach.",
        "workingLatex": "v = 2t^3 - 15t^2 + 24t",
        "explanation": "The particle is at rest whenever $v=0$. We find those instants, decide the sign of $v$ between the first two, then integrate to measure the distance covered on that leg.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Take out the common factor.",
        "workingLatex": "v = t\\,(2t^2 - 15t + 24)",
        "explanation": "Factoring out $t$ immediately gives one rest instant, $t=0$, and leaves a quadratic for the others.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Split into the two factors.",
        "workingLatex": "t = 0 \\quad \\text{or} \\quad 2t^2 - 15t + 24 = 0",
        "explanation": "$t=0$ is the launch instant. The two rest instants for $t>0$ come from the quadratic factor.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Apply the quadratic formula.",
        "workingLatex": "t = \\frac{15 \\pm \\sqrt{15^2 - 4\\cdot 2\\cdot 24}}{2\\cdot 2} = \\frac{15 \\pm \\sqrt{33}}{4}",
        "explanation": "The discriminant $225-192=33$ is positive but not a perfect square, so the roots are irrational and we keep the surd form for accuracy.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the two positive rest instants.",
        "workingLatex": "t_1 = \\frac{15-\\sqrt{33}}{4} \\approx 2.31 \\ \\text{s}, \\quad t_2 = \\frac{15+\\sqrt{33}}{4} \\approx 5.19 \\ \\text{s}",
        "explanation": "These are the first two instants (after the start) at which the particle is momentarily at rest, quoted to 3 significant figures.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Identify the first two rest instants after the start.",
        "workingLatex": "t_1 \\approx 2.31 \\ \\text{s} \\ < \\ t_2 \\approx 5.19 \\ \\text{s}",
        "explanation": "Ordered by time, these are the first and second instants for $t>0$ at which the particle stops. The required distance is what it covers on the single leg joining them.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Determine the sign of the velocity between them.",
        "workingLatex": "\\text{at } t = 3: \\ v = 54 - 135 + 72 = -9 < 0",
        "explanation": "A single test point between $t_1$ and $t_2$ fixes the sign for the whole leg, since the velocity cannot change sign without another root. The particle moves in the negative direction throughout, so distance is just the magnitude of the net displacement on this leg.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Integrate the velocity to find position.",
        "workingLatex": "s = \\int (2t^3 - 15t^2 + 24t)\\,\\mathrm dt = \\frac{t^4}{2} - 5t^3 + 12t^2 + C",
        "explanation": "Integrating gives position. Taking $s=0$ at $t=0$ makes $C=0$; the constant would cancel anyway when we subtract positions.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "State the position function.",
        "workingLatex": "s(t) = \\frac{t^4}{2} - 5t^3 + 12t^2",
        "explanation": "We now evaluate this at the two rest instants, using the full-accuracy (unrounded) values of $t_1$ and $t_2$ to avoid rounding error.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Position at the first rest instant.",
        "workingLatex": "s(t_1) = s(2.3139\\ldots) \\approx 16.638 \\ \\text{m}",
        "explanation": "This is how far the particle has travelled forward before it first comes to rest.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Position at the second rest instant.",
        "workingLatex": "s(t_2) = s(5.1861\\ldots) \\approx -12.982 \\ \\text{m}",
        "explanation": "Having reversed, the particle ends this leg on the negative side of the origin.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Distance on the leg between the two rest instants.",
        "workingLatex": "d = |s(t_2) - s(t_1)| = |-12.982 - 16.638| = 29.620",
        "explanation": "Because the velocity kept one sign between $t_1$ and $t_2$, the distance travelled is simply the magnitude of the change in position over that leg.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "State the distance to 3 significant figures.",
        "workingLatex": "d \\approx 29.6 \\ \\text{m}",
        "explanation": "This is the total distance travelled between the first two rest instants.",
        "diagram": null
      }
    ],
    "finalAnswer": "At rest ($t>0$) at $t=\\dfrac{15-\\sqrt{33}}{4}\\approx 2.31\\ \\text{s}$ and $t=\\dfrac{15+\\sqrt{33}}{4}\\approx 5.19\\ \\text{s}$; total distance between them $\\approx 29.6\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q065",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "tags": ["variable-acceleration", "maximum-velocity", "integration", "displacement", "kinematics"],
  "questionText": "A particle moves in a straight line with acceleration $a = 12t - 2t^2 \\ \\text{m s}^{-2}$, and has velocity $0$ when $t=0$. Taking $s=0$ at $t=0$, find the time at which the velocity is greatest, the greatest velocity, and the displacement at that instant.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan the two integrations.",
        "workingLatex": "a = 12t - 2t^2, \\quad v(0)=0, \\quad s(0)=0",
        "explanation": "Acceleration is given. One integration gives velocity, a second gives displacement; the initial conditions pin down each constant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the acceleration.",
        "workingLatex": "v = \\int (12t - 2t^2)\\,\\mathrm dt = 6t^2 - \\frac{2t^3}{3} + C_1",
        "explanation": "Velocity is the accumulated acceleration.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the initial velocity.",
        "workingLatex": "v(0)=0 \\Rightarrow C_1 = 0 \\Rightarrow v = 6t^2 - \\frac{2t^3}{3}",
        "explanation": "Starting from rest forces the constant to vanish.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Set the condition for greatest velocity.",
        "workingLatex": "v \\text{ is greatest where } \\frac{\\mathrm dv}{\\mathrm dt} = a = 0",
        "explanation": "Velocity reaches a turning point where its rate of change, the acceleration, is zero. This is the standard condition for maximum (or minimum) velocity.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Solve a = 0.",
        "workingLatex": "12t - 2t^2 = 2t(6 - t) = 0 \\Rightarrow t = 0 \\text{ or } t = 6",
        "explanation": "Factorising gives two candidate instants; we must decide which gives the maximum.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Classify the stationary points of the velocity.",
        "workingLatex": "a > 0 \\text{ for } 0<t<6, \\quad a < 0 \\text{ for } t>6",
        "explanation": "The acceleration is positive up to $t=6$ then negative, so the velocity rises to a peak at $t=6$. At $t=0$ the velocity is a minimum (it is zero and about to increase).",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Select the maximising time.",
        "workingLatex": "t = 6 \\ \\text{s}",
        "explanation": "The greatest velocity therefore occurs at $t=6$ s, not at $t=0$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the greatest velocity.",
        "workingLatex": "v(6) = 6(36) - \\frac{2(216)}{3} = 216 - 144 = 72 \\ \\text{m s}^{-1}",
        "explanation": "Substituting $t=6$ gives the peak velocity.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Note the direction of motion.",
        "workingLatex": "v = \\tfrac{2}{3}t^2(9 - t) \\ge 0 \\text{ for } 0 \\le t \\le 6",
        "explanation": "Rewriting $v = 6t^2 - \\tfrac{2}{3}t^3 = \\tfrac{2}{3}t^2(9-t)$ shows it is non-negative up to $t=9$; in particular the particle moves steadily forward over $0\\le t\\le 6$, so its displacement there is also the distance travelled.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Integrate the velocity to find displacement.",
        "workingLatex": "s = \\int \\left(6t^2 - \\frac{2t^3}{3}\\right)\\mathrm dt = 2t^3 - \\frac{t^4}{6} + C_2",
        "explanation": "A second integration turns velocity into position.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Apply the initial position.",
        "workingLatex": "s(0)=0 \\Rightarrow C_2 = 0 \\Rightarrow s = 2t^3 - \\frac{t^4}{6}",
        "explanation": "Measuring position from the start point sets the second constant to zero.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Evaluate the displacement at t = 6.",
        "workingLatex": "s(6) = 2(216) - \\frac{1296}{6} = 432 - 216 = 216 \\ \\text{m}",
        "explanation": "This is the particle's position at the moment its velocity is greatest.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Summarise the state at that instant.",
        "workingLatex": "t = 6: \\ v = 72 \\ \\text{m s}^{-1}, \\ s = 216 \\ \\text{m}",
        "explanation": "At the instant of greatest velocity the particle is $216$ m from its start, moving at $72\\ \\text{m s}^{-1}$; beyond this time the acceleration becomes negative and the velocity would begin to fall.",
        "diagram": null
      }
    ],
    "finalAnswer": "Greatest velocity at $t=6\\ \\text{s}$; greatest velocity $=72\\ \\text{m s}^{-1}$; displacement then $=216\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q066",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "tags": ["variable-acceleration", "total-distance", "average-velocity", "differentiation", "calculus-of-motion"],
  "questionText": "A particle moves in a straight line so that its displacement from the origin is $s = t^3 - 7.5t^2 + 12t \\ \\text{m}$ at time $t$ seconds. Find the total distance travelled in the first $4\\ \\text{s}$ and the average velocity over that time.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Differentiate to obtain the velocity.",
        "workingLatex": "v = \\frac{\\mathrm ds}{\\mathrm dt} = 3t^2 - 15t + 12",
        "explanation": "Here we are given position directly, so velocity comes from differentiating rather than integrating. We need $v$ to find where the particle turns around.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Factorise the velocity.",
        "workingLatex": "v = 3(t^2 - 5t + 4) = 3(t-1)(t-4)",
        "explanation": "Factorising exposes the instants of rest, $t=1$ and $t=4$, which is exactly what the shape of the motion requires.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Identify the relevant turning instant in the interval.",
        "workingLatex": "0 \\le t \\le 4: \\ v = 0 \\text{ at } t = 1 \\ (t=4 \\text{ is the endpoint})",
        "explanation": "Only $t=1$ lies strictly inside the interval, so the motion splits into two legs, $[0,1]$ and $[1,4]$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Determine the sign of the velocity on each leg.",
        "workingLatex": "t=0.5:\\ v>0; \\quad t=2:\\ v = 3(1)(-2) = -6 < 0",
        "explanation": "Testing a point in each leg shows the particle first moves forward (to $t=1$) then backward (from $t=1$ to $t=4$), so the second leg's displacement is negative.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Evaluate the position at the start.",
        "workingLatex": "s(0) = 0",
        "explanation": "The position formula gives the starting point, which we take as the reference.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Evaluate the position at t = 1.",
        "workingLatex": "s(1) = 1 - 7.5 + 12 = 5.5 \\ \\text{m}",
        "explanation": "This is the furthest-forward point, reached just as the particle first comes to rest.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Evaluate the position at t = 4.",
        "workingLatex": "s(4) = 64 - 7.5(16) + 48 = 64 - 120 + 48 = -8 \\ \\text{m}",
        "explanation": "By the end of the interval the particle has swung back past the origin to $-8$ m.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Distance on the first leg.",
        "workingLatex": "|s(1) - s(0)| = |5.5 - 0| = 5.5 \\ \\text{m}",
        "explanation": "On the forward leg the distance is simply how far the position increased.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Distance on the second leg.",
        "workingLatex": "|s(4) - s(1)| = |-8 - 5.5| = 13.5 \\ \\text{m}",
        "explanation": "The particle travels from $+5.5$ m to $-8$ m, a distance of $13.5$ m; we take the magnitude so the backward motion still counts positively.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Total distance travelled.",
        "workingLatex": "\\text{total distance} = 5.5 + 13.5 = 19 \\ \\text{m}",
        "explanation": "Summing the two leg distances gives the total path length in the first 4 seconds.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Compute the net displacement.",
        "workingLatex": "s(4) - s(0) = -8 - 0 = -8 \\ \\text{m}",
        "explanation": "Average velocity uses displacement (the straight-line change in position), not the total distance.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Compute the average velocity.",
        "workingLatex": "\\text{average velocity} = \\frac{-8}{4} = -2 \\ \\text{m s}^{-1}",
        "explanation": "Dividing displacement by the time interval gives an average velocity of $-2\\ \\text{m s}^{-1}$; the negative sign shows the particle ends up on the negative side of where it started.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Contrast distance and displacement.",
        "workingLatex": "\\text{avg speed} = \\frac{19}{4} = 4.75 \\ne |{-2}| = |\\text{avg velocity}|",
        "explanation": "Because the particle reverses direction, the total distance (19 m) exceeds the magnitude of the displacement (8 m); this is why the average speed and the size of the average velocity differ.",
        "diagram": null
      }
    ],
    "finalAnswer": "Total distance $=19\\ \\text{m}$; average velocity $=-2\\ \\text{m s}^{-1}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q067",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "written",
  "tags": ["variable-acceleration", "total-distance", "instantaneous-rest", "integration", "kinematics"],
  "questionText": "A particle moves in a straight line with velocity $v = 12 + 4t - t^2 \\ \\text{m s}^{-1}$ at time $t$ seconds. Find the time ($t>0$) at which it is at rest, and the total distance travelled between $t=0$ and $t=8\\ \\text{s}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "State the plan.",
        "workingLatex": "v = 12 + 4t - t^2, \\quad 0 \\le t \\le 8",
        "explanation": "Velocity is given. To get total distance we locate the rest instant in the interval, integrate to find position, then add the distances of the forward and backward legs separately.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Factorise the velocity.",
        "workingLatex": "v = -(t^2 - 4t - 12) = -(t-6)(t+2)",
        "explanation": "Writing $v$ in factored form makes its roots obvious; the leading minus sign reminds us the parabola opens downward.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the rest instant for t > 0.",
        "workingLatex": "v = 0 \\Rightarrow t = 6 \\ (t = -2 \\text{ rejected})",
        "explanation": "Only $t=6$ s is physically relevant; $t=-2$ is before the motion starts. So the particle reverses just once in the interval, at $t=6$.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Determine the sign of the velocity on each leg.",
        "workingLatex": "t = 0:\\ v = 12 > 0; \\quad t = 8:\\ v = 12 + 32 - 64 = -20 < 0",
        "explanation": "Test points confirm the particle moves forward on $[0,6]$ and backward on $[6,8]$, so the two legs must be measured separately.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Split the interval at the reversal.",
        "workingLatex": "[0,8] = [0,6] \\cup [6,8]",
        "explanation": "The single sign change at $t=6$ divides the motion into two legs; we will find the distance on each and add them.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Integrate the velocity to find position.",
        "workingLatex": "s = \\int (12 + 4t - t^2)\\,\\mathrm dt = 12t + 2t^2 - \\frac{t^3}{3} + C",
        "explanation": "Integrating velocity gives displacement; the constant is fixed by the starting position.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Apply the initial condition.",
        "workingLatex": "s(0) = 0 \\Rightarrow C = 0 \\Rightarrow s = 12t + 2t^2 - \\frac{t^3}{3}",
        "explanation": "Taking the origin as the start point makes $C=0$.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the position at the reversal.",
        "workingLatex": "s(6) = 72 + 72 - \\frac{216}{3} = 144 - 72 = 72 \\ \\text{m}",
        "explanation": "At $t=6$ the particle is $72$ m forward, the furthest point of its outward journey.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the position at the end.",
        "workingLatex": "s(8) = 96 + 128 - \\frac{512}{3} = 224 - \\frac{512}{3} = \\frac{160}{3} \\ \\text{m}",
        "explanation": "By $t=8$ the particle has retreated to $\\tfrac{160}{3}\\approx 53.3$ m, still positive but nearer the origin.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Distance on the forward leg.",
        "workingLatex": "|s(6) - s(0)| = |72 - 0| = 72 \\ \\text{m}",
        "explanation": "The outward leg contributes its full $72$ m.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Distance on the return leg.",
        "workingLatex": "|s(8) - s(6)| = \\left|\\frac{160}{3} - 72\\right| = \\left|-\\frac{56}{3}\\right| = \\frac{56}{3} \\ \\text{m}",
        "explanation": "On the way back the particle covers $\\tfrac{56}{3}\\approx 18.7$ m; the magnitude ensures this backward travel adds to the total.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Total distance travelled.",
        "workingLatex": "\\text{total distance} = 72 + \\frac{56}{3} = \\frac{216 + 56}{3} = \\frac{272}{3} \\approx 90.7 \\ \\text{m}",
        "explanation": "Adding the two leg distances gives the whole path length between $t=0$ and $t=8$.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Contrast with net displacement.",
        "workingLatex": "\\text{net displacement} = s(8) = \\frac{160}{3} \\approx 53.3 \\ \\text{m} < 90.7 \\ \\text{m}",
        "explanation": "The net displacement ($\\tfrac{160}{3}$ m) is smaller than the total distance because the return leg cancels part of the outward displacement but still adds to the distance travelled.",
        "diagram": null
      }
    ],
    "finalAnswer": "At rest ($t>0$) at $t=6\\ \\text{s}$; total distance from $t=0$ to $t=8$ is $\\dfrac{272}{3}\\approx 90.7\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q068",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Hard",
  "marks": 8,
  "answerType": "numeric",
  "tags": ["variable-acceleration", "total-distance", "integration", "initial-velocity", "instantaneous-rest"],
  "questionText": "A particle moves in a straight line with acceleration $a = 6t - 24 \\ \\text{m s}^{-2}$. When $t=0$ its velocity is $36\\ \\text{m s}^{-1}$ and $s=0$. Find the total distance travelled until the particle first returns to instantaneous rest.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Set out the method.",
        "workingLatex": "a = 6t - 24, \\quad v(0) = 36, \\quad s(0) = 0",
        "explanation": "Acceleration is given with a non-zero initial velocity. We integrate to velocity, find when the particle first stops, then integrate to position to measure how far it travelled up to that instant.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the acceleration.",
        "workingLatex": "v = \\int (6t - 24)\\,\\mathrm dt = 3t^2 - 24t + C_1",
        "explanation": "Velocity is the integral of acceleration; the constant carries the initial-velocity information.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Apply the initial velocity.",
        "workingLatex": "v(0) = 36 \\Rightarrow C_1 = 36 \\Rightarrow v = 3t^2 - 24t + 36",
        "explanation": "Substituting $t=0,\\ v=36$ fixes the constant. Note the particle starts already moving, unlike a 'from rest' problem.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Factorise the velocity.",
        "workingLatex": "v = 3(t^2 - 8t + 12) = 3(t-2)(t-6)",
        "explanation": "Factorising reveals the two rest instants, $t=2$ and $t=6$ s.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Check the factorisation.",
        "workingLatex": "3(0-2)(0-6) = 3(12) = 36 = v(0) \\ \\checkmark",
        "explanation": "Substituting $t=0$ back reproduces the given initial velocity, confirming the algebra is correct.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Identify the first return to rest.",
        "workingLatex": "\\text{first } v = 0 \\text{ at } t = 2 \\ \\text{s}",
        "explanation": "'First returns to instantaneous rest' means the earliest positive time the velocity is zero, which is $t=2$ s.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Check the sign of the velocity before t = 2.",
        "workingLatex": "0 \\le t < 2: \\ v = 3(t-2)(t-6) > 0",
        "explanation": "For $t<2$ both $(t-2)<0$ and $(t-6)<0$, so their product is positive: the velocity stays positive all the way to $t=2$. There is no direction change on this leg.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Describe the motion on this leg.",
        "workingLatex": "a = 6t - 24 < 0 \\text{ for } t < 4",
        "explanation": "The acceleration is negative throughout $[0,2]$, so the particle is decelerating: it moves forward but slows down, reaching zero velocity at $t=2$ without ever going backward.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Integrate the velocity to find position.",
        "workingLatex": "s = \\int (3t^2 - 24t + 36)\\,\\mathrm dt = t^3 - 12t^2 + 36t + C_2",
        "explanation": "A second integration gives displacement.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Apply the initial position.",
        "workingLatex": "s(0) = 0 \\Rightarrow C_2 = 0 \\Rightarrow s = t^3 - 12t^2 + 36t",
        "explanation": "Starting at the origin sets the constant to zero.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Evaluate the position at t = 2.",
        "workingLatex": "s(2) = 8 - 48 + 72 = 32 \\ \\text{m}",
        "explanation": "This is the particle's position at the moment it first comes to rest.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Note the nature of this position.",
        "workingLatex": "v > 0 \\text{ before } t=2, \\ v < 0 \\text{ after} \\Rightarrow s(2) \\text{ is a local maximum}",
        "explanation": "The velocity changes from positive to negative at $t=2$, so the particle is at its furthest forward point there; beyond $t=2$ it would start returning.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Convert to distance travelled.",
        "workingLatex": "\\text{no reversal on } [0,2] \\Rightarrow \\text{distance} = |s(2) - s(0)| = 32 \\ \\text{m}",
        "explanation": "Because the velocity kept one sign throughout $[0,2]$, the total distance equals the net displacement, $32$ m.",
        "diagram": null
      }
    ],
    "finalAnswer": "The particle first comes to rest at $t=2\\ \\text{s}$, having travelled $32\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q069",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "written",
  "tags": ["variable-acceleration", "return-to-origin", "greatest-displacement", "total-distance", "integration"],
  "questionText": "A particle starts from rest at the origin and moves in a straight line with acceleration $a = 4 - 2t \\ \\text{m s}^{-2}$ at time $t$ seconds. Find the time (other than $t=0$) at which it returns to the origin, the greatest displacement reached, and the total distance travelled up to the moment it returns.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Plan the two integrations.",
        "workingLatex": "a = 4 - 2t, \\quad v(0)=0, \\quad s(0)=0",
        "explanation": "From the acceleration we integrate once for velocity and again for position. 'From rest at the origin' gives both constants as zero.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Integrate the acceleration.",
        "workingLatex": "v = \\int (4 - 2t)\\,\\mathrm dt = 4t - t^2 + C_1, \\quad v(0)=0 \\Rightarrow C_1 = 0",
        "explanation": "Velocity accumulates from acceleration; starting from rest sets the constant to zero, giving $v = 4t - t^2$.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Find the rest instants.",
        "workingLatex": "v = t(4 - t) = 0 \\Rightarrow t = 0 \\text{ or } t = 4",
        "explanation": "The particle is momentarily at rest at the start and again at $t=4$ s, where it will be turning around.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "Integrate the velocity to find position.",
        "workingLatex": "s = \\int (4t - t^2)\\,\\mathrm dt = 2t^2 - \\frac{t^3}{3} + C_2, \\quad s(0)=0 \\Rightarrow C_2 = 0",
        "explanation": "A second integration gives displacement; starting at the origin makes $C_2=0$.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Set up the return-to-origin condition.",
        "workingLatex": "s = 0 \\Rightarrow 2t^2 - \\frac{t^3}{3} = 0",
        "explanation": "The particle is back at the origin whenever its displacement is zero again.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Factorise and solve.",
        "workingLatex": "t^2\\left(2 - \\frac{t}{3}\\right) = 0 \\Rightarrow t = 0 \\text{ or } t = 6",
        "explanation": "The repeated factor $t^2$ gives the start; the other factor gives the return time. So the particle comes back to the origin at $t=6$ s.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Locate the greatest displacement.",
        "workingLatex": "\\text{max } s \\text{ where } v = 0: \\ t = 4 \\ \\text{s}",
        "explanation": "Displacement is greatest at a turning point of $s$, that is where $v=0$. Of the two rest instants, $t=4$ is the one in the interior of the motion.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Confirm it is a maximum.",
        "workingLatex": "v > 0 \\text{ for } 0<t<4, \\quad v < 0 \\text{ for } 4<t<6",
        "explanation": "The velocity is positive before $t=4$ and negative after, so the particle moves out, stops, then returns, confirming $t=4$ gives the maximum displacement.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the greatest displacement.",
        "workingLatex": "s(4) = 2(16) - \\frac{64}{3} = 32 - \\frac{64}{3} = \\frac{32}{3} \\approx 10.7 \\ \\text{m}",
        "explanation": "This is the furthest the particle gets from the origin before turning back.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Confirm the return position.",
        "workingLatex": "s(6) = 2(36) - \\frac{216}{3} = 72 - 72 = 0 \\ \\text{m}",
        "explanation": "Checking $s(6)=0$ verifies the particle really is back at the origin at $t=6$.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Distance on the outward leg.",
        "workingLatex": "|s(4) - s(0)| = \\frac{32}{3} \\ \\text{m}",
        "explanation": "On the way out the particle covers $\\tfrac{32}{3}$ m.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Distance on the return leg.",
        "workingLatex": "|s(6) - s(4)| = \\left|0 - \\frac{32}{3}\\right| = \\frac{32}{3} \\ \\text{m}",
        "explanation": "Coming back it covers the same $\\tfrac{32}{3}$ m in the opposite direction.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Total distance up to the return.",
        "workingLatex": "\\text{total distance} = \\frac{32}{3} + \\frac{32}{3} = \\frac{64}{3} \\approx 21.3 \\ \\text{m}",
        "explanation": "Adding the outward and return distances gives the total path length, even though the net displacement over this time is zero.",
        "diagram": null
      }
    ],
    "finalAnswer": "Returns to the origin at $t=6\\ \\text{s}$; greatest displacement $=\\dfrac{32}{3}\\approx 10.7\\ \\text{m}$ (at $t=4$ s); total distance $=\\dfrac{64}{3}\\approx 21.3\\ \\text{m}$."
  }
},
{
  "id": "al.y1.mech.variable-acceleration.q070",
  "level": "A-Level Maths",
  "topic": "Year 1 Mechanics",
  "subtopic": "Variable acceleration",
  "subtopicId": "al.y1.mech.variable-acceleration",
  "difficulty": "Hard",
  "marks": 9,
  "answerType": "written",
  "tags": ["variable-acceleration", "differentiation", "instantaneous-rest", "total-distance", "kinematics"],
  "questionText": "A particle moves in a straight line so that its displacement from a fixed point is $s = 2t^3 - 12t^2 + 18t + 5 \\ \\text{m}$ at time $t$ seconds. Find expressions for the velocity $v$ and acceleration $a$, the two instants at which the particle is at rest and its position at each, and the total distance travelled in the first $4\\ \\text{s}$.",
  "questionDiagram": null,
  "workedSolution": {
    "steps": [
      {
        "stepNumber": 1,
        "description": "Differentiate the position to find velocity.",
        "workingLatex": "v = \\frac{\\mathrm ds}{\\mathrm dt} = 6t^2 - 24t + 18",
        "explanation": "Velocity is the rate of change of position, so we differentiate the given $s(t)$ once.",
        "diagram": null
      },
      {
        "stepNumber": 2,
        "description": "Differentiate again to find acceleration.",
        "workingLatex": "a = \\frac{\\mathrm dv}{\\mathrm dt} = 12t - 24",
        "explanation": "Acceleration is the rate of change of velocity, obtained by differentiating a second time.",
        "diagram": null
      },
      {
        "stepNumber": 3,
        "description": "Factorise the velocity.",
        "workingLatex": "v = 6(t^2 - 4t + 3) = 6(t-1)(t-3)",
        "explanation": "Factorising locates the rest instants, where the velocity is zero.",
        "diagram": null
      },
      {
        "stepNumber": 4,
        "description": "State the rest instants.",
        "workingLatex": "v = 0 \\Rightarrow t = 1 \\text{ s or } t = 3 \\text{ s}",
        "explanation": "These are the two moments the particle is momentarily at rest, both inside the first 4 seconds.",
        "diagram": null
      },
      {
        "stepNumber": 5,
        "description": "Find the position at the first rest instant.",
        "workingLatex": "s(1) = 2 - 12 + 18 + 5 = 13 \\ \\text{m}",
        "explanation": "Substituting $t=1$ into $s$ gives the location of the first stopping point.",
        "diagram": null
      },
      {
        "stepNumber": 6,
        "description": "Find the position at the second rest instant.",
        "workingLatex": "s(3) = 54 - 108 + 54 + 5 = 5 \\ \\text{m}",
        "explanation": "Substituting $t=3$ gives the second stopping point; the particle has moved back between these two rests.",
        "diagram": null
      },
      {
        "stepNumber": 7,
        "description": "Determine the sign of the velocity on each leg.",
        "workingLatex": "(0,1):\\ v>0; \\quad (1,3):\\ v<0; \\quad (3,4):\\ v>0",
        "explanation": "With rests at $t=1$ and $t=3$, the interval $[0,4]$ splits into three legs; testing a point in each (or using the upward parabola shape) shows forward, backward, then forward motion.",
        "diagram": null
      },
      {
        "stepNumber": 8,
        "description": "Evaluate the position at the start.",
        "workingLatex": "s(0) = 5 \\ \\text{m}",
        "explanation": "The constant term shows the particle begins $5$ m from the fixed point, not at it.",
        "diagram": null
      },
      {
        "stepNumber": 9,
        "description": "Evaluate the position at the end.",
        "workingLatex": "s(4) = 128 - 192 + 72 + 5 = 13 \\ \\text{m}",
        "explanation": "This is where the particle is at $t=4$ s, the end of the interval.",
        "diagram": null
      },
      {
        "stepNumber": 10,
        "description": "Distance on the first leg [0, 1].",
        "workingLatex": "|s(1) - s(0)| = |13 - 5| = 8 \\ \\text{m}",
        "explanation": "The particle moves forward $8$ m before its first stop.",
        "diagram": null
      },
      {
        "stepNumber": 11,
        "description": "Distance on the second leg [1, 3].",
        "workingLatex": "|s(3) - s(1)| = |5 - 13| = 8 \\ \\text{m}",
        "explanation": "It then moves back $8$ m; the magnitude keeps this contribution positive.",
        "diagram": null
      },
      {
        "stepNumber": 12,
        "description": "Distance on the third leg [3, 4].",
        "workingLatex": "|s(4) - s(3)| = |13 - 5| = 8 \\ \\text{m}",
        "explanation": "Finally it moves forward another $8$ m.",
        "diagram": null
      },
      {
        "stepNumber": 13,
        "description": "Add the three leg distances.",
        "workingLatex": "\\text{total distance} = 8 + 8 + 8 = 24 \\ \\text{m}",
        "explanation": "Summing the absolute displacements of the three legs gives the total distance travelled in the first 4 seconds, much more than the net displacement of $s(4)-s(0)=8$ m.",
        "diagram": null
      }
    ],
    "finalAnswer": "$v = 6t^2 - 24t + 18$, $a = 12t - 24$; at rest at $t=1\\ \\text{s}$ (position $13\\ \\text{m}$) and $t=3\\ \\text{s}$ (position $5\\ \\text{m}$); total distance in first 4 s $=24\\ \\text{m}$."
  }
},
];
