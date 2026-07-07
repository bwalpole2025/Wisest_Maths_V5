#!/usr/bin/env python3
"""Generate parametric differentiation questions q019-q035 as TypeScript."""

import json
import math
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from question_ts import write_questions_ts

OUTPUT = "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/a-level-maths/year-2-pure/parametric-differentiation-q019-q035.ts"

SUBTOPIC = "Parametric differentiation"
SUBTOPIC_ID = "al.y2.pure.parametric-differentiation"
LEVEL = "A-Level Maths"
TOPIC = "Year 2 Pure"


def step(n, desc, latex, expl):
    return {
        "stepNumber": n,
        "description": desc,
        "workingLatex": latex,
        "explanation": expl,
        "diagram": None,
    }


def q(
    num,
    difficulty,
    marks,
    answer_type,
    tags,
    question_text,
    steps,
    final_answer,
):
    return {
        "id": f"{SUBTOPIC_ID}.q{num:03d}",
        "level": LEVEL,
        "topic": TOPIC,
        "subtopic": SUBTOPIC,
        "subtopicId": SUBTOPIC_ID,
        "difficulty": difficulty,
        "marks": marks,
        "answerType": answer_type,
        "tags": tags,
        "questionText": question_text,
        "questionDiagram": None,
        "workedSolution": {"steps": steps, "finalAnswer": final_answer},
    }


questions = [
    # q019 Easy: dy/dx at specific t, x=t², y=t³
    q(
        19,
        "Easy",
        3,
        "numeric",
        ["parametric differentiation", "gradient", "dy/dx"],
        "A curve $C$ has parametric equations $x = t^{2}$ and $y = t^{3}$. Find the gradient of the tangent to $C$ at the point where $t = 2$.",
        [
            step(
                1,
                "Recall the parametric gradient formula",
                "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "When $x$ and $y$ are both given in terms of $t$, the chain rule gives the gradient as the ratio of the two rates of change with respect to $t$.",
            ),
            step(
                2,
                "Differentiate $x$ with respect to $t$",
                "\\frac{dx}{dt} = 2t",
                "Differentiating $t^{2}$ with respect to $t$ brings the power down and reduces the index by one.",
            ),
            step(
                3,
                "Differentiate $y$ with respect to $t$",
                "\\frac{dy}{dt} = 3t^{2}",
                "The same power rule applies to $y = t^{3}$, giving a factor of $3$ and a power of $t^{2}$.",
            ),
            step(
                4,
                "Form $\\frac{dy}{dx}$ in terms of $t$",
                "\\frac{dy}{dx} = \\frac{3t^{2}}{2t} = \\frac{3t}{2}",
                "Dividing the two derivatives and cancelling one factor of $t$ gives a simple expression for the gradient at any value of $t$.",
            ),
            step(
                5,
                "Substitute $t = 2$",
                "\\frac{dy}{dx} = \\frac{3(2)}{2} = 3",
                "Putting $t = 2$ into the simplified formula gives the gradient at the required point on the curve.",
            ),
            step(
                6,
                "State the gradient",
                "\\frac{dy}{dx} = 3",
                "The tangent to the curve at $t = 2$ has gradient $3$, meaning $y$ increases three times as fast as $x$ at that instant.",
            ),
        ],
        "The gradient at $t = 2$ is $\\dfrac{dy}{dx} = 3$.",
    ),
    # q020 Easy: dy/dx at t=-1, linear x
    q(
        20,
        "Easy",
        3,
        "numeric",
        ["parametric differentiation", "gradient", "substitution"],
        "A curve has parametric equations $x = 2t + 1$ and $y = t^{2} - 3$. Find $\\dfrac{dy}{dx}$ when $t = -1$.",
        [
            step(
                1,
                "State the parametric gradient rule",
                "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "The gradient is found by dividing how fast $y$ changes with $t$ by how fast $x$ changes with $t$.",
            ),
            step(
                2,
                "Differentiate $x$ with respect to $t$",
                "\\frac{dx}{dt} = 2",
                "Since $x = 2t + 1$ is linear in $t$, its rate of change is the constant coefficient $2$.",
            ),
            step(
                3,
                "Differentiate $y$ with respect to $t$",
                "\\frac{dy}{dt} = 2t",
                "Differentiating $t^{2} - 3$ gives $2t$; the constant $-3$ disappears.",
            ),
            step(
                4,
                "Write $\\frac{dy}{dx}$ in terms of $t$",
                "\\frac{dy}{dx} = \\frac{2t}{2} = t",
                "Dividing by the constant $2$ cancels, so the gradient equals $t$ at every point on the curve.",
            ),
            step(
                5,
                "Substitute $t = -1$",
                "\\frac{dy}{dx} = -1",
                "At $t = -1$ the gradient is $-1$, so the tangent slopes downward at $45^{\\circ}$.",
            ),
            step(
                6,
                "State the answer",
                "\\frac{dy}{dx} = -1",
                "A gradient of $-1$ means that as $x$ increases, $y$ decreases at the same rate.",
            ),
        ],
        "$\\dfrac{dy}{dx} = -1$ when $t = -1$.",
    ),
    # q021 Easy: trig pair
    q(
        21,
        "Easy",
        4,
        "numeric",
        ["parametric differentiation", "trigonometry", "gradient"],
        "A curve is defined by $x = \\cos t$ and $y = \\sin 2t$. Find the gradient of the tangent when $t = \\dfrac{\\pi}{6}$.",
        [
            step(
                1,
                "Recall the parametric gradient formula",
                "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "For trigonometric parametric equations we still differentiate each coordinate with respect to $t$ and divide.",
            ),
            step(
                2,
                "Differentiate $x$ with respect to $t$",
                "\\frac{dx}{dt} = -\\sin t",
                "The derivative of $\\cos t$ is $-\\sin t$; the minus sign is important for the final gradient.",
            ),
            step(
                3,
                "Differentiate $y$ with respect to $t$",
                "\\frac{dy}{dt} = 2\\cos 2t",
                "Using the chain rule on $\\sin 2t$ gives $2\\cos 2t$.",
            ),
            step(
                4,
                "Evaluate $\\frac{dx}{dt}$ at $t = \\frac{\\pi}{6}$",
                "\\frac{dx}{dt} = -\\sin\\frac{\\pi}{6} = -\\frac{1}{2}",
                "At $t = \\frac{\\pi}{6}$ (i.e.\\ $30^{\\circ}$), $\\sin t = \\frac{1}{2}$, so the horizontal rate of change is negative.",
            ),
            step(
                5,
                "Evaluate $\\frac{dy}{dt}$ at $t = \\frac{\\pi}{6}$",
                "\\frac{dy}{dt} = 2\\cos\\frac{\\pi}{3} = 2 \\times \\frac{1}{2} = 1",
                "Since $2t = \\frac{\\pi}{3}$, we use $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.",
            ),
            step(
                6,
                "Divide to find the gradient",
                "\\frac{dy}{dx} = \\frac{1}{-\\frac{1}{2}} = -2",
                "A positive numerator divided by a negative denominator gives a negative gradient.",
            ),
            step(
                7,
                "State the gradient",
                "\\frac{dy}{dx} = -2",
                "The tangent at $t = \\frac{\\pi}{6}$ has gradient $-2$, sloping steeply downward.",
            ),
        ],
        "The gradient at $t = \\dfrac{\\pi}{6}$ is $\\dfrac{dy}{dx} = -2$.",
    ),
    # q022 Easy: simplify dy/dx
    q(
        22,
        "Easy",
        3,
        "expression",
        ["parametric differentiation", "simplify", "gradient"],
        "A curve $C$ has parametric equations $x = t^{3}$ and $y = t^{2}$. Find $\\dfrac{dy}{dx}$ in terms of $t$, giving your answer in its simplest form.",
        [
            step(
                1,
                "State the parametric gradient rule",
                "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "We differentiate both coordinates with respect to $t$ and then divide.",
            ),
            step(
                2,
                "Differentiate $x$ with respect to $t$",
                "\\frac{dx}{dt} = 3t^{2}",
                "The power rule on $t^{3}$ gives $3t^{2}$.",
            ),
            step(
                3,
                "Differentiate $y$ with respect to $t$",
                "\\frac{dy}{dt} = 2t",
                "Differentiating $t^{2}$ gives $2t$.",
            ),
            step(
                4,
                "Form the ratio",
                "\\frac{dy}{dx} = \\frac{2t}{3t^{2}}",
                "Substituting the two derivatives into the gradient formula gives a fraction that can be simplified.",
            ),
            step(
                5,
                "Cancel the common factor of $t$",
                "\\frac{dy}{dx} = \\frac{2}{3t}",
                "One factor of $t$ cancels from numerator and denominator, leaving a cleaner expression valid for $t \\neq 0$.",
            ),
            step(
                6,
                "State the simplified gradient",
                "\\frac{dy}{dx} = \\frac{2}{3t}",
                "The gradient depends inversely on $t$: as $t$ grows, the tangent becomes flatter.",
            ),
        ],
        "$\\dfrac{dy}{dx} = \\dfrac{2}{3t}$ (for $t \\neq 0$).",
    ),
    # q023 Easy: horizontal tangent
    q(
        23,
        "Easy",
        4,
        "expression",
        ["parametric differentiation", "horizontal tangent", "stationary point"],
        "A curve has parametric equations $x = t^{2} + 1$ and $y = t^{3} - 12t$. Find the values of $t$ for which the tangent to the curve is horizontal.",
        [
            step(
                1,
                "State the condition for a horizontal tangent",
                "\\frac{dy}{dx} = 0 \\quad \\Leftrightarrow \\quad \\frac{dy}{dt} = 0 \\text{ (when } \\frac{dx}{dt} \\neq 0 \\text{)}",
                "A horizontal tangent has zero gradient. In parametric form this means the vertical rate of change is zero while the horizontal rate is non-zero.",
            ),
            step(
                2,
                "Differentiate $y$ with respect to $t$",
                "\\frac{dy}{dt} = 3t^{2} - 12",
                "Differentiating $t^{3} - 12t$ term by term gives $3t^{2} - 12$.",
            ),
            step(
                3,
                "Set $\\frac{dy}{dt}$ equal to zero",
                "3t^{2} - 12 = 0",
                "We solve for the values of $t$ where the vertical motion momentarily stops.",
            ),
            step(
                4,
                "Rearrange the equation",
                "3t^{2} = 12 \\quad \\Rightarrow \\quad t^{2} = 4",
                "Dividing both sides by $3$ isolates $t^{2}$.",
            ),
            step(
                5,
                "Solve for $t$",
                "t = \\pm 2",
                "Taking square roots gives two values: $t = 2$ and $t = -2$.",
            ),
            step(
                6,
                "Check that $\\frac{dx}{dt} \\neq 0$ at these values",
                "\\frac{dx}{dt} = 2t; \\quad \\text{at } t = \\pm 2, \\ \\frac{dx}{dt} = \\pm 4 \\neq 0",
                "At both values the horizontal rate is non-zero, so the tangent is genuinely horizontal rather than vertical or undefined.",
            ),
            step(
                7,
                "State the values of $t$",
                "t = 2 \\quad \\text{or} \\quad t = -2",
                "The curve has horizontal tangents at these two parameter values.",
            ),
        ],
        "The tangent is horizontal when $t = 2$ or $t = -2$.",
    ),
    # q024 Easy: tangent equation
    q(
        24,
        "Easy",
        4,
        "expression",
        ["parametric differentiation", "tangent", "straight line"],
        "A curve has parametric equations $x = 5t$ and $y = t^{2} + 4$. Find the equation of the tangent to the curve at the point where $t = 1$, giving your answer in the form $ax + by + c = 0$ where $a$, $b$ and $c$ are integers.",
        [
            step(
                1,
                "Find the coordinates at $t = 1$",
                "x = 5(1) = 5, \\quad y = (1)^{2} + 4 = 5",
                "The tangent passes through the point $(5,\\,5)$ on the curve.",
            ),
            step(
                2,
                "Differentiate to find the gradient",
                "\\frac{dx}{dt} = 5, \\quad \\frac{dy}{dt} = 2t",
                "We need both derivatives to form $\\frac{dy}{dx}$.",
            ),
            step(
                3,
                "Evaluate the gradient at $t = 1$",
                "\\frac{dy}{dx} = \\frac{2(1)}{5} = \\frac{2}{5}",
                "The tangent has gradient $\\frac{2}{5}$ at the point $(5,\\,5)$.",
            ),
            step(
                4,
                "Write the tangent in point-gradient form",
                "y - 5 = \\frac{2}{5}(x - 5)",
                "Using $y - y_{1} = m(x - x_{1})$ with $m = \\frac{2}{5}$ and $(x_{1},\\,y_{1}) = (5,\\,5)$.",
            ),
            step(
                5,
                "Clear the fraction",
                "5(y - 5) = 2(x - 5)",
                "Multiplying both sides by $5$ removes the denominator.",
            ),
            step(
                6,
                "Expand and rearrange",
                "5y - 25 = 2x - 10 \\quad \\Rightarrow \\quad 2x - 5y + 15 = 0",
                "Collecting terms on one side gives the required integer-coefficient form.",
            ),
            step(
                7,
                "State the tangent equation",
                "2x - 5y + 15 = 0",
                "This is the equation of the line touching the curve at $(5,\\,5)$.",
            ),
        ],
        "The tangent has equation $2x - 5y + 15 = 0$.",
    ),
    # q025 Intermediate: tangent at t=2
    q(
        25,
        "Intermediate",
        5,
        "expression",
        ["parametric differentiation", "tangent", "cubic"],
        "A curve $C$ has parametric equations $x = t^{2} - 2t$ and $y = t^{3}$. Find the equation of the tangent to $C$ at the point where $t = 2$.",
        [
            step(
                1,
                "Find the coordinates when $t = 2$",
                "x = (2)^{2} - 2(2) = 0, \\quad y = (2)^{3} = 8",
                "Substituting $t = 2$ into both parametric equations gives the point $(0,\\,8)$.",
            ),
            step(
                2,
                "Differentiate $x$ with respect to $t$",
                "\\frac{dx}{dt} = 2t - 2",
                "Differentiating $t^{2} - 2t$ gives $2t - 2$.",
            ),
            step(
                3,
                "Differentiate $y$ with respect to $t$",
                "\\frac{dy}{dt} = 3t^{2}",
                "The derivative of $t^{3}$ is $3t^{2}$.",
            ),
            step(
                4,
                "Evaluate both derivatives at $t = 2$",
                "\\frac{dx}{dt} = 2, \\quad \\frac{dy}{dt} = 12",
                "At $t = 2$ the curve is moving horizontally at rate $2$ and vertically at rate $12$.",
            ),
            step(
                5,
                "Find the gradient of the tangent",
                "\\frac{dy}{dx} = \\frac{12}{2} = 6",
                "Dividing the vertical rate by the horizontal rate gives gradient $6$.",
            ),
            step(
                6,
                "Write the tangent using point-gradient form",
                "y - 8 = 6(x - 0)",
                "The tangent passes through $(0,\\,8)$ with gradient $6$.",
            ),
            step(
                7,
                "Simplify to slope-intercept form",
                "y = 6x + 8",
                "Expanding and rearranging gives a clear equation for the tangent line.",
            ),
            step(
                8,
                "Verify the point lies on the line",
                "8 = 6(0) + 8 \\quad \\checkmark",
                "Substituting $x = 0$ returns $y = 8$, confirming the line passes through the point of tangency.",
            ),
            step(
                9,
                "State the tangent equation",
                "y = 6x + 8",
                "This line touches the curve at $(0,\\,8)$ with the correct gradient.",
            ),
        ],
        "The tangent at $t = 2$ has equation $y = 6x + 8$.",
    ),
    # q026 Intermediate: normal
    q(
        26,
        "Intermediate",
        5,
        "expression",
        ["parametric differentiation", "normal", "perpendicular"],
        "A curve has parametric equations $x = t^{2}$ and $y = t^{3} - 3t$. Find the equation of the normal to the curve at the point where $t = 2$.",
        [
            step(
                1,
                "Find the coordinates at $t = 2$",
                "x = 4, \\quad y = 8 - 6 = 2",
                "The normal passes through the point $(4,\\,2)$ on the curve.",
            ),
            step(
                2,
                "Differentiate $x$ and $y$ with respect to $t$",
                "\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^{2} - 3",
                "Both derivatives are needed to find the tangent gradient first.",
            ),
            step(
                3,
                "Evaluate the derivatives at $t = 2$",
                "\\frac{dx}{dt} = 4, \\quad \\frac{dy}{dt} = 12 - 3 = 9",
                "At $t = 2$ the horizontal and vertical rates are $4$ and $9$ respectively.",
            ),
            step(
                4,
                "Find the tangent gradient",
                "\\frac{dy}{dx} = \\frac{9}{4}",
                "The tangent slopes upward with gradient $\\frac{9}{4}$.",
            ),
            step(
                5,
                "Find the normal gradient",
                "m_{\\text{normal}} = -\\frac{4}{9}",
                "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of $\\frac{9}{4}$.",
            ),
            step(
                6,
                "Write the normal equation",
                "y - 2 = -\\frac{4}{9}(x - 4)",
                "Using point-gradient form with the normal slope and the point $(4,\\,2)$.",
            ),
            step(
                7,
                "Clear the fraction",
                "9(y - 2) = -4(x - 4)",
                "Multiplying through by $9$ gives integer coefficients.",
            ),
            step(
                8,
                "Expand and rearrange",
                "9y - 18 = -4x + 16 \\quad \\Rightarrow \\quad 4x + 9y - 34 = 0",
                "Collecting all terms on one side gives a neat final form.",
            ),
            step(
                9,
                "State the normal equation",
                "4x + 9y - 34 = 0",
                "This line is perpendicular to the tangent at $(4,\\,2)$.",
            ),
        ],
        "The normal at $t = 2$ has equation $4x + 9y - 34 = 0$.",
    ),
    # q027 Intermediate: find t for given gradient
    q(
        27,
        "Intermediate",
        5,
        "expression",
        ["parametric differentiation", "gradient", "quadratic"],
        "A curve has parametric equations $x = t^{2} + t$ and $y = t^{3}$. Find the values of $t$ for which the gradient of the tangent is $2$.",
        [
            step(
                1,
                "Differentiate $x$ and $y$ with respect to $t$",
                "\\frac{dx}{dt} = 2t + 1, \\quad \\frac{dy}{dt} = 3t^{2}",
                "These give the rates of change needed in the gradient formula.",
            ),
            step(
                2,
                "Write $\\frac{dy}{dx}$ in terms of $t$",
                "\\frac{dy}{dx} = \\frac{3t^{2}}{2t + 1}",
                "The gradient at any point depends on the value of $t$ through this fraction.",
            ),
            step(
                3,
                "Set the gradient equal to $2$",
                "\\frac{3t^{2}}{2t + 1} = 2",
                "We solve for the parameter values where the tangent has the required slope.",
            ),
            step(
                4,
                "Clear the fraction",
                "3t^{2} = 2(2t + 1)",
                "Cross-multiplying removes the denominator (valid when $2t + 1 \\neq 0$).",
            ),
            step(
                5,
                "Expand and rearrange into standard form",
                "3t^{2} = 4t + 2 \\quad \\Rightarrow \\quad 3t^{2} - 4t - 2 = 0",
                "Collecting terms on one side gives a quadratic in $t$.",
            ),
            step(
                6,
                "Apply the quadratic formula",
                "t = \\frac{4 \\pm \\sqrt{16 + 24}}{6} = \\frac{4 \\pm \\sqrt{40}}{6}",
                "Here $a = 3$, $b = -4$, $c = -2$, so the discriminant is $16 + 24 = 40$.",
            ),
            step(
                7,
                "Simplify the surd",
                "t = \\frac{4 \\pm 2\\sqrt{10}}{6} = \\frac{2 \\pm \\sqrt{10}}{3}",
                "Factorising $\\sqrt{40} = 2\\sqrt{10}$ and cancelling a factor of $2$ gives the exact values.",
            ),
            step(
                8,
                "Check the denominator is non-zero",
                "\\text{At } t = \\frac{2 \\pm \\sqrt{10}}{3}, \\ 2t + 1 \\neq 0",
                "Neither root makes $2t + 1 = 0$, so both solutions are valid.",
            ),
            step(
                9,
                "State the values of $t$",
                "t = \\frac{2 + \\sqrt{10}}{3} \\quad \\text{or} \\quad t = \\frac{2 - \\sqrt{10}}{3}",
                "There are two points on the curve where the tangent has gradient $2$.",
            ),
        ],
        "$t = \\dfrac{2 + \\sqrt{10}}{3}$ or $t = \\dfrac{2 - \\sqrt{10}}{3}$.",
    ),
    # q028 Intermediate: vertical tangent
    q(
        28,
        "Intermediate",
        4,
        "expression",
        ["parametric differentiation", "vertical tangent", "stationary point"],
        "A curve has parametric equations $x = t^{3} - 3t$ and $y = t^{2}$. Find the values of $t$ at which the tangent to the curve is vertical.",
        [
            step(
                1,
                "State the condition for a vertical tangent",
                "\\frac{dx}{dt} = 0 \\quad \\text{and} \\quad \\frac{dy}{dt} \\neq 0",
                "A vertical tangent occurs when the horizontal rate of change is zero but the vertical rate is not, making $\\frac{dy}{dx}$ undefined.",
            ),
            step(
                2,
                "Differentiate $x$ with respect to $t$",
                "\\frac{dx}{dt} = 3t^{2} - 3",
                "Differentiating $t^{3} - 3t$ gives $3t^{2} - 3$.",
            ),
            step(
                3,
                "Set $\\frac{dx}{dt}$ equal to zero",
                "3t^{2} - 3 = 0",
                "We find where the curve momentarily stops moving horizontally.",
            ),
            step(
                4,
                "Factorise the quadratic",
                "3(t^{2} - 1) = 0",
                "Taking out the common factor of $3$ leaves a difference of two squares.",
            ),
            step(
                5,
                "Solve for $t$",
                "t^{2} = 1 \\quad \\Rightarrow \\quad t = \\pm 1",
                "Taking square roots gives two candidate values: $t = 1$ and $t = -1$.",
            ),
            step(
                6,
                "Differentiate $y$ with respect to $t$",
                "\\frac{dy}{dt} = 2t",
                "We also need the vertical rate of change to confirm the tangent is vertical rather than a cusp.",
            ),
            step(
                7,
                "Check $\\frac{dy}{dt}$ at $t = 1$",
                "\\frac{dy}{dt} = 2 \\neq 0",
                "Since the vertical rate is non-zero at $t = 1$, the tangent is indeed vertical.",
            ),
            step(
                8,
                "Check $\\frac{dy}{dt}$ at $t = -1$",
                "\\frac{dy}{dt} = -2 \\neq 0",
                "The same holds at $t = -1$, confirming a vertical tangent there too.",
            ),
            step(
                9,
                "Find the coordinates at each value",
                "t = 1: \\ (-2,\\,1); \\quad t = -1: \\ (2,\\,1)",
                "Substituting back gives the two points on the curve where the tangent is vertical.",
            ),
            step(
                10,
                "State the values of $t$",
                "t = 1 \\quad \\text{or} \\quad t = -1",
                "The curve has vertical tangents at these two parameter values.",
            ),
        ],
        "The tangent is vertical when $t = 1$ or $t = -1$.",
    ),
    # q029 Intermediate: (t + 1/t) style
    q(
        29,
        "Intermediate",
        4,
        "expression",
        ["parametric differentiation", "simplify", "reciprocal"],
        "A curve has parametric equations $x = t + \\dfrac{1}{t}$ and $y = t - \\dfrac{1}{t}$, where $t \\neq 0$. Find $\\dfrac{dy}{dx}$ in terms of $t$, giving your answer in its simplest form.",
        [
            step(
                1,
                "Rewrite using negative indices",
                "x = t + t^{-1}, \\quad y = t - t^{-1}",
                "Writing $\\frac{1}{t}$ as $t^{-1}$ makes differentiation straightforward.",
            ),
            step(
                2,
                "Differentiate $x$ with respect to $t$",
                "\\frac{dx}{dt} = 1 - t^{-2} = 1 - \\frac{1}{t^{2}}",
                "The derivative of $t^{-1}$ is $-t^{-2}$.",
            ),
            step(
                3,
                "Differentiate $y$ with respect to $t$",
                "\\frac{dy}{dt} = 1 + t^{-2} = 1 + \\frac{1}{t^{2}}",
                "The minus sign in $y$ becomes a plus when differentiating $-t^{-1}$.",
            ),
            step(
                4,
                "Form the ratio $\\frac{dy}{dx}$",
                "\\frac{dy}{dx} = \\frac{1 + \\frac{1}{t^{2}}}{1 - \\frac{1}{t^{2}}}",
                "Substituting the two derivatives into the gradient formula.",
            ),
            step(
                5,
                "Multiply numerator and denominator by $t^{2}$",
                "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
                "Clearing fractions by multiplying top and bottom by $t^{2}$ gives a much cleaner expression.",
            ),
            step(
                6,
                "Note where the gradient is undefined",
                "t^{2} - 1 = 0 \\Rightarrow t = \\pm 1",
                "At $t = \\pm 1$ the denominator vanishes, corresponding to vertical tangents on the curve.",
            ),
            step(
                7,
                "State the simplified gradient",
                "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
                "This compact form shows how the gradient varies with $t$.",
            ),
            step(
                8,
                "Interpret the result",
                "\\text{Gradient } > 1 \\text{ when } |t| > 1; \\quad \\text{gradient } < -1 \\text{ when } 0 < |t| < 1",
                "The expression reveals that the gradient is always either greater than $1$ or less than $-1$ (when defined).",
            ),
            step(
                9,
                "Confirm the answer is fully simplified",
                "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
                "No further factorisation is possible; this is the simplest form in $t$.",
            ),
        ],
        "$\\dfrac{dy}{dx} = \\dfrac{t^{2} + 1}{t^{2} - 1}$ (for $t \\neq 0$ and $t \\neq \\pm 1$).",
    ),
    # q030 Intermediate: trig tangent
    q(
        30,
        "Intermediate",
        5,
        "expression",
        ["parametric differentiation", "trigonometry", "tangent"],
        "A curve has parametric equations $x = 2\\cos t$ and $y = 3\\sin t$. Find the equation of the tangent to the curve at the point where $t = \\dfrac{\\pi}{3}$.",
        [
            step(
                1,
                "Find the coordinates at $t = \\frac{\\pi}{3}$",
                "x = 2\\cos\\frac{\\pi}{3} = 1, \\quad y = 3\\sin\\frac{\\pi}{3} = \\frac{3\\sqrt{3}}{2}",
                "Using exact trigonometric values, the point of tangency is $\\left(1,\\,\\frac{3\\sqrt{3}}{2}\\right)$.",
            ),
            step(
                2,
                "Differentiate $x$ with respect to $t$",
                "\\frac{dx}{dt} = -2\\sin t",
                "The derivative of $2\\cos t$ is $-2\\sin t$.",
            ),
            step(
                3,
                "Differentiate $y$ with respect to $t$",
                "\\frac{dy}{dt} = 3\\cos t",
                "The derivative of $3\\sin t$ is $3\\cos t$.",
            ),
            step(
                4,
                "Evaluate the derivatives at $t = \\frac{\\pi}{3}$",
                "\\frac{dx}{dt} = -2 \\cdot \\frac{\\sqrt{3}}{2} = -\\sqrt{3}, \\quad \\frac{dy}{dt} = 3 \\cdot \\frac{1}{2} = \\frac{3}{2}",
                "Substituting $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$ and $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.",
            ),
            step(
                5,
                "Find the tangent gradient",
                "\\frac{dy}{dx} = \\frac{3/2}{-\\sqrt{3}} = -\\frac{3}{2\\sqrt{3}} = -\\frac{\\sqrt{3}}{2}",
                "Rationalising the denominator gives a neater gradient of $-\\frac{\\sqrt{3}}{2}$.",
            ),
            step(
                6,
                "Write the tangent in point-gradient form",
                "y - \\frac{3\\sqrt{3}}{2} = -\\frac{\\sqrt{3}}{2}(x - 1)",
                "Using the point $\\left(1,\\,\\frac{3\\sqrt{3}}{2}\\right)$ and gradient $-\\frac{\\sqrt{3}}{2}$.",
            ),
            step(
                7,
                "Clear the fraction",
                "2y - 3\\sqrt{3} = -\\sqrt{3}(x - 1)",
                "Multiplying both sides by $2$ simplifies the algebra.",
            ),
            step(
                8,
                "Expand and rearrange",
                "2y - 3\\sqrt{3} = -\\sqrt{3}\\,x + \\sqrt{3} \\quad \\Rightarrow \\quad \\sqrt{3}\\,x + 2y - 4\\sqrt{3} = 0",
                "Collecting terms gives the tangent equation in the required form.",
            ),
            step(
                9,
                "State the tangent equation",
                "\\sqrt{3}\\,x + 2y - 4\\sqrt{3} = 0",
                "This line touches the ellipse-like curve at the given point.",
            ),
        ],
        "The tangent at $t = \\dfrac{\\pi}{3}$ has equation $\\sqrt{3}\\,x + 2y - 4\\sqrt{3} = 0$.",
    ),
    # q031 Intermediate: gradient at specific t, x=t²-4
    q(
        31,
        "Intermediate",
        4,
        "numeric",
        ["parametric differentiation", "gradient", "cubic"],
        "A curve has parametric equations $x = t^{2} - 4$ and $y = t^{3} + 1$. Find the gradient of the tangent at the point where $t = 3$.",
        [
            step(
                1,
                "Recall the parametric gradient formula",
                "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "We differentiate both coordinates with respect to $t$ and divide.",
            ),
            step(
                2,
                "Differentiate $x$ with respect to $t$",
                "\\frac{dx}{dt} = 2t",
                "The derivative of $t^{2} - 4$ is $2t$.",
            ),
            step(
                3,
                "Differentiate $y$ with respect to $t$",
                "\\frac{dy}{dt} = 3t^{2}",
                "Differentiating $t^{3} + 1$ gives $3t^{2}$.",
            ),
            step(
                4,
                "Evaluate $\\frac{dx}{dt}$ at $t = 3$",
                "\\frac{dx}{dt} = 6",
                "At $t = 3$ the horizontal rate of change is $6$.",
            ),
            step(
                5,
                "Evaluate $\\frac{dy}{dt}$ at $t = 3$",
                "\\frac{dy}{dt} = 27",
                "At $t = 3$ the vertical rate of change is $27$.",
            ),
            step(
                6,
                "Divide to find the gradient",
                "\\frac{dy}{dx} = \\frac{27}{6} = \\frac{9}{2}",
                "The tangent at $t = 3$ has gradient $\\frac{9}{2}$.",
            ),
            step(
                7,
                "Confirm the point on the curve",
                "(x,\\,y) = (5,\\,28) \\text{ when } t = 3",
                "Checking coordinates helps verify we are evaluating at the correct point: $x = 9 - 4 = 5$ and $y = 27 + 1 = 28$.",
            ),
            step(
                8,
                "State the gradient",
                "\\frac{dy}{dx} = \\frac{9}{2}",
                "A gradient of $\\frac{9}{2} = 4.5$ means the tangent rises steeply.",
            ),
            step(
                9,
                "Interpret the result",
                "\\text{The tangent at } (5,\\,28) \\text{ rises } 9 \\text{ units for every } 2 \\text{ units across}",
                "The fractional gradient $\\frac{9}{2}$ describes how steeply the curve is climbing at $t = 3$.",
            ),
        ],
        "The gradient at $t = 3$ is $\\dfrac{dy}{dx} = \\dfrac{9}{2}$.",
    ),
    # q032 Intermediate: tangent meets x-axis
    q(
        32,
        "Intermediate",
        6,
        "coordinates",
        ["parametric differentiation", "tangent", "intersection"],
        "A curve has parametric equations $x = t^{2}$ and $y = t^{3}$. The tangent to the curve at the point where $t = 2$ meets the $x$-axis at the point $P$. Find the coordinates of $P$.",
        [
            step(
                1,
                "Find the coordinates at $t = 2$",
                "x = 4, \\quad y = 8",
                "The tangent is drawn at the point $(4,\\,8)$ on the curve.",
            ),
            step(
                2,
                "Differentiate and find the gradient",
                "\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^{2}",
                "Both derivatives are needed for the gradient formula.",
            ),
            step(
                3,
                "Evaluate the gradient at $t = 2$",
                "\\frac{dy}{dx} = \\frac{3(4)}{2(2)} = \\frac{12}{4} = 3",
                "The tangent has gradient $3$ at $(4,\\,8)$.",
            ),
            step(
                4,
                "Write the equation of the tangent",
                "y - 8 = 3(x - 4) \\quad \\Rightarrow \\quad y = 3x - 4",
                "Using point-gradient form and simplifying gives the tangent line equation.",
            ),
            step(
                5,
                "Set $y = 0$ to find the $x$-axis intersection",
                "0 = 3x - 4",
                "On the $x$-axis the $y$-coordinate is zero.",
            ),
            step(
                6,
                "Solve for $x$",
                "3x = 4 \\quad \\Rightarrow \\quad x = \\frac{4}{3}",
                "The tangent crosses the $x$-axis when $x = \\frac{4}{3}$.",
            ),
            step(
                7,
                "Write the coordinates of $P$",
                "P = \\left(\\frac{4}{3},\\, 0\\right)",
                "The point where the tangent meets the $x$-axis is $\\left(\\frac{4}{3},\\,0\\right)$.",
            ),
            step(
                8,
                "Verify $P$ lies on the tangent",
                "0 = 3 \\cdot \\frac{4}{3} - 4 = 4 - 4 = 0 \\quad \\checkmark",
                "Substituting $x = \\frac{4}{3}$ into $y = 3x - 4$ gives $y = 0$, confirming the intersection.",
            ),
            step(
                9,
                "State the answer",
                "P = \\left(\\frac{4}{3},\\, 0\\right)",
                "Point $P$ is where the tangent line cuts the $x$-axis.",
            ),
        ],
        "$P = \\left(\\dfrac{4}{3},\\, 0\\right)$.",
    ),
    # q033 Intermediate: normal at t=1
    q(
        33,
        "Intermediate",
        5,
        "expression",
        ["parametric differentiation", "normal", "tangent"],
        "A curve has parametric equations $x = t^{2} + 1$ and $y = t^{3} + t$. Find the equation of the normal to the curve at the point where $t = 1$, giving your answer in the form $ax + by = c$ where $a$, $b$ and $c$ are integers.",
        [
            step(
                1,
                "Find the coordinates at $t = 1$",
                "x = 2, \\quad y = 2",
                "The normal passes through $(2,\\,2)$ on the curve.",
            ),
            step(
                2,
                "Differentiate $x$ and $y$ with respect to $t$",
                "\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^{2} + 1",
                "These derivatives determine the tangent gradient.",
            ),
            step(
                3,
                "Evaluate at $t = 1$",
                "\\frac{dx}{dt} = 2, \\quad \\frac{dy}{dt} = 4",
                "At $t = 1$ both rates of change are positive.",
            ),
            step(
                4,
                "Find the tangent gradient",
                "\\frac{dy}{dx} = \\frac{4}{2} = 2",
                "The tangent at $(2,\\,2)$ has gradient $2$.",
            ),
            step(
                5,
                "Find the normal gradient",
                "m_{\\text{normal}} = -\\frac{1}{2}",
                "The normal gradient is the negative reciprocal of $2$.",
            ),
            step(
                6,
                "Write the normal equation",
                "y - 2 = -\\frac{1}{2}(x - 2)",
                "Point-gradient form with slope $-\\frac{1}{2}$ through $(2,\\,2)$.",
            ),
            step(
                7,
                "Clear the fraction",
                "2(y - 2) = -(x - 2)",
                "Multiplying by $2$ removes the denominator.",
            ),
            step(
                8,
                "Expand and rearrange",
                "2y - 4 = -x + 2 \\quad \\Rightarrow \\quad x + 2y = 6",
                "Collecting terms gives the required integer form.",
            ),
            step(
                9,
                "State the normal equation",
                "x + 2y = 6",
                "This line is perpendicular to the tangent at $(2,\\,2)$.",
            ),
        ],
        "The normal has equation $x + 2y = 6$.",
    ),
    # q034 Intermediate: exponential parametric
    q(
        34,
        "Intermediate",
        4,
        "numeric",
        ["parametric differentiation", "exponential", "gradient"],
        "A curve has parametric equations $x = e^{t}$ and $y = e^{2t}$. Find the value of $\\dfrac{dy}{dx}$ at the point where $t = 0$.",
        [
            step(
                1,
                "Recall the parametric gradient formula",
                "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "Even with exponential functions, the same parametric rule applies.",
            ),
            step(
                2,
                "Differentiate $x$ with respect to $t$",
                "\\frac{dx}{dt} = e^{t}",
                "The derivative of $e^{t}$ is $e^{t}$ itself.",
            ),
            step(
                3,
                "Differentiate $y$ with respect to $t$ using the chain rule",
                "\\frac{dy}{dt} = 2e^{2t}",
                "Differentiating $e^{2t}$ gives $2e^{2t}$ by the chain rule.",
            ),
            step(
                4,
                "Form $\\frac{dy}{dx}$ in terms of $t$",
                "\\frac{dy}{dx} = \\frac{2e^{2t}}{e^{t}} = 2e^{t}",
                "Dividing and using the index law $e^{2t}/e^{t} = e^{t}$ simplifies the expression.",
            ),
            step(
                5,
                "Substitute $t = 0$",
                "\\frac{dy}{dx} = 2e^{0} = 2(1) = 2",
                "Since $e^{0} = 1$, the gradient at $t = 0$ is exactly $2$.",
            ),
            step(
                6,
                "Confirm the point on the curve",
                "(x,\\,y) = (1,\\,1) \\text{ when } t = 0",
                "At $t = 0$, both $e^{0} = 1$, so the point is $(1,\\,1)$.",
            ),
            step(
                7,
                "Interpret the gradient",
                "\\text{At } (1,\\,1), \\text{ the curve rises twice as fast as it moves right}",
                "A gradient of $2$ means that for each unit increase in $x$, $y$ increases by $2$ units (locally).",
            ),
            step(
                8,
                "State the answer",
                "\\frac{dy}{dx} = 2",
                "The tangent at $t = 0$ has gradient $2$.",
            ),
            step(
                9,
                "Note the general pattern",
                "\\frac{dy}{dx} = 2e^{t} \\text{ grows as } t \\text{ increases}",
                "Because both coordinates are exponential, the gradient increases without bound as $t$ grows.",
            ),
        ],
        "$\\dfrac{dy}{dx} = 2$ at $t = 0$.",
    ),
    # q035 Intermediate: find t for given gradient, two values
    q(
        35,
        "Intermediate",
        5,
        "expression",
        ["parametric differentiation", "gradient", "quadratic"],
        "A curve has parametric equations $x = t^{2}$ and $y = 2t^{3} - 3t$. Find the values of $t$ for which the gradient of the tangent is $\\dfrac{3}{2}$.",
        [
            step(
                1,
                "Differentiate $x$ and $y$ with respect to $t$",
                "\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 6t^{2} - 3",
                "These rates of change feed into the gradient formula.",
            ),
            step(
                2,
                "Write $\\frac{dy}{dx}$ in terms of $t$",
                "\\frac{dy}{dx} = \\frac{6t^{2} - 3}{2t}",
                "The gradient depends on $t$ through this rational expression.",
            ),
            step(
                3,
                "Set the gradient equal to $\\frac{3}{2}$",
                "\\frac{6t^{2} - 3}{2t} = \\frac{3}{2}",
                "We solve for the parameter values giving the required slope.",
            ),
            step(
                4,
                "Clear the fractions",
                "2(6t^{2} - 3) = 3(2t)",
                "Cross-multiplying (valid when $t \\neq 0$) removes both denominators.",
            ),
            step(
                5,
                "Expand both sides",
                "12t^{2} - 6 = 6t",
                "Multiplying out gives a quadratic equation.",
            ),
            step(
                6,
                "Rearrange into standard form",
                "12t^{2} - 6t - 6 = 0 \\quad \\Rightarrow \\quad 2t^{2} - t - 1 = 0",
                "Dividing by $6$ simplifies the coefficients.",
            ),
            step(
                7,
                "Factorise the quadratic",
                "(2t + 1)(t - 1) = 0",
                "The quadratic factors neatly into two linear terms.",
            ),
            step(
                8,
                "Solve for $t$",
                "t = 1 \\quad \\text{or} \\quad t = -\\frac{1}{2}",
                "Setting each factor to zero gives the two parameter values.",
            ),
            step(
                9,
                "Verify both solutions are valid",
                "\\text{At } t = 1 \\text{ and } t = -\\tfrac{1}{2}, \\ 2t \\neq 0",
                "Neither value makes the denominator zero, so both give genuine tangents with gradient $\\frac{3}{2}$.",
            ),
            step(
                10,
                "State the values of $t$",
                "t = 1 \\quad \\text{or} \\quad t = -\\frac{1}{2}",
                "There are two points on the curve where the tangent has gradient $\\frac{3}{2}$.",
            ),
        ],
        "$t = 1$ or $t = -\\dfrac{1}{2}$.",
    ),
]

# Validation
assert len(questions) == 17
ids = [q["id"] for q in questions]
assert ids == [f"{SUBTOPIC_ID}.q{n:03d}" for n in range(19, 36)]

easy = sum(1 for q in questions if q["difficulty"] == "Easy")
inter = sum(1 for q in questions if q["difficulty"] == "Intermediate")
assert easy == 6 and inter == 11

for qn in questions:
    steps = qn["workedSolution"]["steps"]
    diff = qn["difficulty"]
    lo, hi = (6, 9) if diff == "Easy" else (9, 13)
    n = len(steps)
    assert lo <= n <= hi, f"{qn['id']}: {n} steps (expected {lo}-{hi})"
    for s in steps:
        assert s["diagram"] is None
        assert all(k in s for k in ("stepNumber", "description", "workingLatex", "explanation"))

write_questions_ts(
    OUTPUT,
    questions,
    batch_label="Parametric differentiation q019–q035",
)
print(f"Wrote {len(questions)} questions to {OUTPUT}")
print(f"Easy: {easy}, Intermediate: {inter}")
for qn in questions:
    print(f"  {qn['id']}: {len(qn['workedSolution']['steps'])} steps")
