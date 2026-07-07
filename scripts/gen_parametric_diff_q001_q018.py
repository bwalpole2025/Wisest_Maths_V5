#!/usr/bin/env python3
"""Generate parametric differentiation questions q001-q018 as TypeScript."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from question_ts import read_questions_file, write_questions_ts

OUTPUT = Path(
    "/Users/benjaminwalpole/Wisest_Maths_V5/wisest-maths-content/src/data/questions/"
    "a-level-maths/year-2-pure/parametric-differentiation-q001-q018.ts"
)

SUBTOPIC = "Parametric differentiation"
SUBTOPIC_ID = "al.y2.pure.parametric-differentiation"
LEVEL = "A-Level Maths"
TOPIC = "Year 2 Pure"


def q(
    num: int,
    difficulty: str,
    marks: int,
    answer_type: str,
    tags: list[str],
    question_text: str,
    steps: list[dict],
    final_answer: str,
) -> dict:
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
        "workedSolution": {
            "steps": [
                {
                    "stepNumber": i + 1,
                    "description": s["description"],
                    "workingLatex": s["workingLatex"],
                    "explanation": s["explanation"],
                    "diagram": None,
                }
                for i, s in enumerate(steps)
            ],
            "finalAnswer": final_answer,
        },
    }


questions = [
    # q001 Easy – dy/dx in terms of t (polynomial)
    q(
        1,
        "Easy",
        3,
        "expression",
        ["parametric", "gradient", "chain-rule"],
        "A curve has parametric equations $x = 2t$ and $y = t^{2}$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
        [
            {
                "description": "Recall the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "When $x$ and $y$ are both given in terms of a parameter $t$, the gradient is found by dividing the rate of change of $y$ with respect to $t$ by the rate of change of $x$ with respect to $t$.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 2",
                "explanation": "Differentiating $x = 2t$ with respect to $t$ gives a constant, because $x$ increases by $2$ for every unit increase in $t$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 2t",
                "explanation": "Differentiating $y = t^{2}$ uses the power rule: bring the power down and reduce the index by one.",
            },
            {
                "description": "Substitute into the formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{2}",
                "explanation": "Placing $dy/dt = 2t$ and $dx/dt = 2$ into the quotient gives a fraction ready to simplify.",
            },
            {
                "description": "Cancel the common factor",
                "workingLatex": "\\frac{dy}{dx} = t",
                "explanation": "The factor of $2$ cancels in the numerator and denominator, leaving a simple expression in $t$.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = t",
                "explanation": "The gradient at any point on the curve depends only on the parameter value $t$.",
            },
        ],
        "$\\dfrac{dy}{dx} = t$.",
    ),
    # q002 Easy – gradient at a point
    q(
        2,
        "Easy",
        4,
        "numeric",
        ["parametric", "gradient", "substitution"],
        "A curve is defined by $x = t^{3}$ and $y = t^{2}$. Find the value of $\\dfrac{dy}{dx}$ when $t = 1$.",
        [
            {
                "description": "State the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "The gradient at a point on a parametric curve is the ratio of the two derivatives with respect to the parameter.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 3t^{2}",
                "explanation": "Applying the power rule to $t^{3}$ gives $3t^{2}$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 2t",
                "explanation": "The derivative of $t^{2}$ is $2t$.",
            },
            {
                "description": "Write dy/dx in terms of t",
                "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3t^{2}} = \\frac{2}{3t}",
                "explanation": "One factor of $t$ cancels from the numerator and denominator, giving a cleaner expression before substituting.",
            },
            {
                "description": "Substitute t = 1",
                "workingLatex": "\\frac{dy}{dx} = \\frac{2}{3(1)} = \\frac{2}{3}",
                "explanation": "Replacing $t$ with $1$ evaluates the gradient at the point on the curve corresponding to $t = 1$.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = \\frac{2}{3}",
                "explanation": "The tangent at this point rises less steeply than a line of gradient $1$, since $\\dfrac{2}{3} < 1$.",
            },
        ],
        "When $t = 1$, $\\dfrac{dy}{dx} = \\dfrac{2}{3}$.",
    ),
    # q003 Easy – gradient at a point (linear x)
    q(
        3,
        "Easy",
        3,
        "numeric",
        ["parametric", "gradient", "substitution"],
        "A curve has parametric equations $x = t + 1$ and $y = t^{2} - 3$. Find $\\dfrac{dy}{dx}$ when $t = 2$.",
        [
            {
                "description": "Recall the formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "Both coordinates depend on $t$, so we differentiate each with respect to $t$ and divide.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 1",
                "explanation": "The derivative of $t + 1$ is $1$, so $x$ changes at a constant rate as $t$ increases.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 2t",
                "explanation": "Differentiating $t^{2} - 3$ gives $2t$; the constant $-3$ disappears on differentiation.",
            },
            {
                "description": "Form dy/dx",
                "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{1} = 2t",
                "explanation": "Dividing by $1$ leaves the expression unchanged, so the gradient is simply $2t$.",
            },
            {
                "description": "Substitute t = 2",
                "workingLatex": "\\frac{dy}{dx} = 2(2) = 4",
                "explanation": "At $t = 2$, the tangent to the curve has gradient $4$.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = 4",
                "explanation": "A gradient of $4$ means $y$ increases by $4$ for every unit increase in $x$ near this point.",
            },
        ],
        "When $t = 2$, $\\dfrac{dy}{dx} = 4$.",
    ),
    # q004 Easy – reciprocal gradient
    q(
        4,
        "Easy",
        3,
        "expression",
        ["parametric", "gradient", "powers"],
        "A curve is given by $x = 3t^{2}$ and $y = t$. Find $\\dfrac{dy}{dx}$ in terms of $t$, where $t \\neq 0$.",
        [
            {
                "description": "State the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "This formula converts derivatives with respect to $t$ into the gradient with respect to $x$.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 6t",
                "explanation": "Differentiating $3t^{2}$ gives $6t$ using the power rule.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 1",
                "explanation": "The derivative of $y = t$ is $1$.",
            },
            {
                "description": "Substitute into the formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{1}{6t}",
                "explanation": "Dividing $dy/dt$ by $dx/dt$ gives the gradient as a fraction in $t$.",
            },
            {
                "description": "Note the domain restriction",
                "workingLatex": "t \\neq 0",
                "explanation": "The expression is valid only when $dx/dt = 6t \\neq 0$, so $t$ cannot be zero.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = \\frac{1}{6t}",
                "explanation": "As $t$ increases, the gradient decreases in magnitude, reflecting how steeply $y$ changes relative to $x$.",
            },
        ],
        "$\\dfrac{dy}{dx} = \\dfrac{1}{6t}$.",
    ),
    # q005 Easy – trig parametric
    q(
        5,
        "Easy",
        4,
        "numeric",
        ["parametric", "trigonometry", "gradient"],
        "A curve has parametric equations $x = \\cos t$ and $y = \\sin t$. Find $\\dfrac{dy}{dx}$ when $t = \\dfrac{\\pi}{4}$.",
        [
            {
                "description": "State the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "Even with trigonometric equations, the same chain-rule ratio applies.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = -\\sin t",
                "explanation": "The derivative of $\\cos t$ is $-\\sin t$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = \\cos t",
                "explanation": "The derivative of $\\sin t$ is $\\cos t$.",
            },
            {
                "description": "Write dy/dx in terms of t",
                "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t",
                "explanation": "Dividing $\\cos t$ by $-\\sin t$ gives $-\\cot t$, which is a compact form before substituting.",
            },
            {
                "description": "Substitute t = π/4",
                "workingLatex": "\\frac{dy}{dx} = -\\cot\\!\\left(\\frac{\\pi}{4}\\right) = -1",
                "explanation": "At $t = \\dfrac{\\pi}{4}$, $\\cot t = 1$, so the gradient is $-1$.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = -1",
                "explanation": "A gradient of $-1$ means the tangent makes a $45^{\\circ}$ angle below the positive $x$-direction.",
            },
        ],
        "When $t = \\dfrac{\\pi}{4}$, $\\dfrac{dy}{dx} = -1$.",
    ),
    # q006 Easy – equation of tangent
    q(
        6,
        "Easy",
        5,
        "equation",
        ["parametric", "tangent", "straight-line"],
        "A curve has parametric equations $x = 2t + 1$ and $y = t^{2} + 4$. Find the equation of the tangent to the curve at the point where $t = 1$. Give your answer in the form $y = mx + c$.",
        [
            {
                "description": "Find x at t = 1",
                "workingLatex": "x = 2(1) + 1 = 3",
                "explanation": "Substituting $t = 1$ into the $x$-equation gives the horizontal coordinate of the point.",
            },
            {
                "description": "Find y at t = 1",
                "workingLatex": "y = (1)^{2} + 4 = 5",
                "explanation": "Using the same $t = 1$ in the $y$-equation gives the matching vertical coordinate.",
            },
            {
                "description": "Differentiate x and y with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 2, \\qquad \\frac{dy}{dt} = 2t",
                "explanation": "These derivatives tell us how fast $x$ and $y$ change as $t$ changes.",
            },
            {
                "description": "Find the gradient at t = 1",
                "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{2} = t, \\qquad \\text{at } t = 1: \\; m = 1",
                "explanation": "The gradient of the tangent equals $\\dfrac{dy}{dx}$ evaluated at $t = 1$.",
            },
            {
                "description": "Use point-gradient form",
                "workingLatex": "y - 5 = 1(x - 3)",
                "explanation": "A line with gradient $m$ through $(x_{1}, y_{1})$ satisfies $y - y_{1} = m(x - x_{1})$.",
            },
            {
                "description": "Rearrange to y = mx + c",
                "workingLatex": "y = x + 2",
                "explanation": "Adding $5$ to both sides and simplifying gives the tangent in the required form.",
            },
        ],
        "The tangent has equation $y = x + 2$.",
    ),
    # q007 Easy – gradient at a point
    q(
        7,
        "Easy",
        3,
        "numeric",
        ["parametric", "gradient", "substitution"],
        "A curve is defined by $x = t^{2}$ and $y = 2t$. Find $\\dfrac{dy}{dx}$ when $t = 3$.",
        [
            {
                "description": "State the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "We differentiate both parametric equations with respect to $t$ and divide.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 2t",
                "explanation": "The power rule gives $2t$ from $t^{2}$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 2",
                "explanation": "The derivative of $2t$ is the constant $2$.",
            },
            {
                "description": "Simplify dy/dx",
                "workingLatex": "\\frac{dy}{dx} = \\frac{2}{2t} = \\frac{1}{t}",
                "explanation": "Cancelling the factor of $2$ gives a simple expression in $t$.",
            },
            {
                "description": "Substitute t = 3",
                "workingLatex": "\\frac{dy}{dx} = \\frac{1}{3}",
                "explanation": "At $t = 3$, the tangent has gradient $\\dfrac{1}{3}$.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = \\frac{1}{3}",
                "explanation": "The small positive gradient reflects that $y$ increases slowly compared with $x$ at this point.",
            },
        ],
        "When $t = 3$, $\\dfrac{dy}{dx} = \\dfrac{1}{3}$.",
    ),
    # q008 Easy – cubic in y
    q(
        8,
        "Easy",
        3,
        "expression",
        ["parametric", "gradient", "polynomial"],
        "A curve has parametric equations $x = t$ and $y = t^{3} - 2t$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
        [
            {
                "description": "Recall the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "Because $x$ itself equals $t$, the parameter acts like the $x$-coordinate directly.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 1",
                "explanation": "Since $x = t$, differentiating gives $1$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 3t^{2} - 2",
                "explanation": "Differentiating each term of $t^{3} - 2t$ gives $3t^{2} - 2$.",
            },
            {
                "description": "Substitute into the formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2} - 2}{1}",
                "explanation": "With $dx/dt = 1$, the quotient reduces to $dy/dt$ alone.",
            },
            {
                "description": "Simplify",
                "workingLatex": "\\frac{dy}{dx} = 3t^{2} - 2",
                "explanation": "Dividing by $1$ means the gradient equals $dy/dt$ directly in this case.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = 3t^{2} - 2",
                "explanation": "The gradient is a quadratic in $t$, so it changes smoothly as we move along the curve.",
            },
        ],
        "$\\dfrac{dy}{dx} = 3t^{2} - 2$.",
    ),
    # q009 Easy – gradient at a point
    q(
        9,
        "Easy",
        3,
        "numeric",
        ["parametric", "gradient", "substitution"],
        "A curve is given by $x = 4t$ and $y = t^{2} - 1$. Find the gradient of the curve when $t = -1$.",
        [
            {
                "description": "State the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "The gradient is found from the ratio of the two parametric derivatives.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 4",
                "explanation": "The derivative of $4t$ is the constant $4$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 2t",
                "explanation": "Differentiating $t^{2} - 1$ gives $2t$.",
            },
            {
                "description": "Write dy/dx in terms of t",
                "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{4} = \\frac{t}{2}",
                "explanation": "Simplifying the fraction gives the gradient as a simple function of $t$.",
            },
            {
                "description": "Substitute t = -1",
                "workingLatex": "\\frac{dy}{dx} = \\frac{-1}{2} = -\\frac{1}{2}",
                "explanation": "At $t = -1$, the tangent slopes downward with gradient $-\\dfrac{1}{2}$.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = -\\frac{1}{2}",
                "explanation": "The negative gradient confirms the curve is decreasing at this point.",
            },
        ],
        "When $t = -1$, the gradient is $-\\dfrac{1}{2}$.",
    ),
    # q010 Easy – gradient at a point
    q(
        10,
        "Easy",
        4,
        "numeric",
        ["parametric", "gradient", "substitution"],
        "A curve has parametric equations $x = t^{2} + 1$ and $y = t^{3}$. Find $\\dfrac{dy}{dx}$ when $t = 1$.",
        [
            {
                "description": "State the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "We need both derivatives with respect to $t$ before forming the ratio.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 2t",
                "explanation": "The derivative of $t^{2} + 1$ is $2t$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 3t^{2}",
                "explanation": "Differentiating $t^{3}$ gives $3t^{2}$.",
            },
            {
                "description": "Simplify dy/dx",
                "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2}}{2t} = \\frac{3t}{2}",
                "explanation": "One factor of $t$ cancels, leaving $\\dfrac{3t}{2}$.",
            },
            {
                "description": "Substitute t = 1",
                "workingLatex": "\\frac{dy}{dx} = \\frac{3(1)}{2} = \\frac{3}{2}",
                "explanation": "At $t = 1$, the tangent has gradient $\\dfrac{3}{2}$.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = \\frac{3}{2}",
                "explanation": "A gradient greater than $1$ means the curve is rising steeply at this point.",
            },
        ],
        "When $t = 1$, $\\dfrac{dy}{dx} = \\dfrac{3}{2}$.",
    ),
    # q011 Easy – trig with double angle
    q(
        11,
        "Easy",
        5,
        "numeric",
        ["parametric", "trigonometry", "gradient"],
        "A curve is defined by $x = \\sin t$ and $y = \\cos 2t$. Find $\\dfrac{dy}{dx}$ when $t = \\dfrac{\\pi}{6}$.",
        [
            {
                "description": "State the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "The chain rule links the derivatives with respect to $t$ to the gradient with respect to $x$.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = \\cos t",
                "explanation": "The derivative of $\\sin t$ is $\\cos t$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = -2\\sin 2t",
                "explanation": "Using the chain rule on $\\cos 2t$ gives $-2\\sin 2t$.",
            },
            {
                "description": "Evaluate dx/dt and dy/dt at t = π/6",
                "workingLatex": "\\frac{dx}{dt} = \\cos\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}, \\qquad \\frac{dy}{dt} = -2\\sin\\!\\left(\\frac{\\pi}{3}\\right) = -\\sqrt{3}",
                "explanation": "At $t = \\dfrac{\\pi}{6}$, we substitute into the exact trigonometric values: $\\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}$ and $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$.",
            },
            {
                "description": "Form the gradient",
                "workingLatex": "\\frac{dy}{dx} = \\frac{-\\sqrt{3}}{\\sqrt{3}/2} = -2",
                "explanation": "Dividing by $\\dfrac{\\sqrt{3}}{2}$ is the same as multiplying by $\\dfrac{2}{\\sqrt{3}}$, which gives $-2$.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = -2",
                "explanation": "The tangent at $t = \\dfrac{\\pi}{6}$ is steep, with $y$ decreasing twice as fast as $x$ increases locally.",
            },
        ],
        "When $t = \\dfrac{\\pi}{6}$, $\\dfrac{dy}{dx} = -2$.",
    ),
    # q012 Easy – general expression
    q(
        12,
        "Easy",
        4,
        "expression",
        ["parametric", "gradient", "polynomial"],
        "A curve has parametric equations $x = t^{3} - t$ and $y = t^{2}$. Find $\\dfrac{dy}{dx}$ in terms of $t$, where $3t^{2} - 1 \\neq 0$.",
        [
            {
                "description": "State the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "The formula applies whenever $dx/dt \\neq 0$, so the gradient is defined.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 3t^{2} - 1",
                "explanation": "Differentiating $t^{3} - t$ term by term gives $3t^{2} - 1$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 2t",
                "explanation": "The derivative of $t^{2}$ is $2t$.",
            },
            {
                "description": "Substitute into the formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3t^{2} - 1}",
                "explanation": "The gradient is the ratio of these two expressions.",
            },
            {
                "description": "Identify where the gradient is undefined",
                "workingLatex": "3t^{2} - 1 = 0 \\implies t = \\pm \\frac{1}{\\sqrt{3}}",
                "explanation": "When $dx/dt = 0$, the parametric formula breaks down and the tangent is vertical rather than having a finite gradient.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = \\frac{2t}{3t^{2} - 1}",
                "explanation": "For all other values of $t$, this expression gives the gradient of the curve.",
            },
        ],
        "$\\dfrac{dy}{dx} = \\dfrac{2t}{3t^{2} - 1}$.",
    ),
    # q013 Intermediate – equation of tangent
    q(
        13,
        "Intermediate",
        6,
        "equation",
        ["parametric", "tangent", "straight-line"],
        "A curve has parametric equations $x = t^{2}$ and $y = t^{3} - 3t$. Find the equation of the tangent to the curve at the point where $t = 2$. Give your answer in the form $ax + by + c = 0$ where $a$, $b$ and $c$ are integers.",
        [
            {
                "description": "Find x at t = 2",
                "workingLatex": "x = (2)^{2} = 4",
                "explanation": "Substituting $t = 2$ into $x = t^{2}$ gives the $x$-coordinate of the point.",
            },
            {
                "description": "Find y at t = 2",
                "workingLatex": "y = (2)^{3} - 3(2) = 8 - 6 = 2",
                "explanation": "Using the same $t = 2$ in the $y$-equation gives the matching $y$-coordinate.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 2t",
                "explanation": "Differentiating $t^{2}$ gives $2t$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 3t^{2} - 3",
                "explanation": "Differentiating $t^{3} - 3t$ gives $3t^{2} - 3$.",
            },
            {
                "description": "Find the gradient at t = 2",
                "workingLatex": "\\frac{dy}{dx} = \\frac{3t^{2} - 3}{2t}, \\qquad \\text{at } t = 2: \\; m = \\frac{3(4) - 3}{4} = \\frac{9}{4}",
                "explanation": "Substituting $t = 2$ into both derivatives gives the tangent gradient $\\dfrac{9}{4}$.",
            },
            {
                "description": "Use point-gradient form",
                "workingLatex": "y - 2 = \\frac{9}{4}(x - 4)",
                "explanation": "The tangent line passes through $(4, 2)$ with gradient $\\dfrac{9}{4}$.",
            },
            {
                "description": "Clear fractions",
                "workingLatex": "4y - 8 = 9x - 36",
                "explanation": "Multiplying both sides by $4$ removes the fraction and makes rearrangement easier.",
            },
            {
                "description": "Rearrange to integer form",
                "workingLatex": "9x - 4y - 28 = 0",
                "explanation": "Collecting all terms on one side gives the equation in the required form with integer coefficients.",
            },
            {
                "description": "Verify the point lies on the line",
                "workingLatex": "9(4) - 4(2) - 28 = 36 - 8 - 28 = 0",
                "explanation": "Substituting $(4, 2)$ into the equation confirms the tangent passes through the correct point.",
            },
        ],
        "The tangent has equation $9x - 4y - 28 = 0$.",
    ),
    # q014 Intermediate – equation of normal (trig)
    q(
        14,
        "Intermediate",
        7,
        "equation",
        ["parametric", "normal", "trigonometry"],
        "A curve has parametric equations $x = 2\\cos t$ and $y = \\sin t$. Find the equation of the normal to the curve at the point where $t = \\dfrac{\\pi}{3}$. Give your answer in the form $y = mx + c$, simplifying surds.",
        [
            {
                "description": "Find x at t = π/3",
                "workingLatex": "x = 2\\cos\\!\\left(\\frac{\\pi}{3}\\right) = 2 \\times \\frac{1}{2} = 1",
                "explanation": "Substituting $t = \\dfrac{\\pi}{3}$ into the $x$-equation gives the horizontal coordinate.",
            },
            {
                "description": "Find y at t = π/3",
                "workingLatex": "y = \\sin\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}",
                "explanation": "Using the same parameter value gives the vertical coordinate of the point on the curve.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = -2\\sin t",
                "explanation": "Differentiating $2\\cos t$ gives $-2\\sin t$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = \\cos t",
                "explanation": "The derivative of $\\sin t$ is $\\cos t$.",
            },
            {
                "description": "Find the tangent gradient at t = π/3",
                "workingLatex": "\\frac{dy}{dx} = \\frac{\\cos t}{-2\\sin t}, \\qquad \\text{at } t = \\frac{\\pi}{3}: \\; \\frac{dy}{dx} = \\frac{1/2}{-2 \\times \\sqrt{3}/2} = -\\frac{1}{2\\sqrt{3}}",
                "explanation": "Substituting $\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$ and $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$ gives the tangent gradient.",
            },
            {
                "description": "Find the normal gradient",
                "workingLatex": "m_{\\text{normal}} = -\\frac{1}{dy/dx} = 2\\sqrt{3}",
                "explanation": "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal of the tangent gradient.",
            },
            {
                "description": "Form the normal equation",
                "workingLatex": "y - \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}(x - 1)",
                "explanation": "Using point-gradient form with the point $(1, \\dfrac{\\sqrt{3}}{2})$ and gradient $2\\sqrt{3}$.",
            },
            {
                "description": "Rearrange to y = mx + c",
                "workingLatex": "y = 2\\sqrt{3}\\,x - 2\\sqrt{3} + \\frac{\\sqrt{3}}{2} = 2\\sqrt{3}\\,x - \\frac{3\\sqrt{3}}{2}",
                "explanation": "Expanding and combining the constant terms gives the normal in the form $y = mx + c$.",
            },
            {
                "description": "State the final equation",
                "workingLatex": "y = 2\\sqrt{3}\\,x - \\frac{3\\sqrt{3}}{2}",
                "explanation": "The normal is perpendicular to the tangent and passes through $\\left(1, \\dfrac{\\sqrt{3}}{2}\\right)$.",
            },
        ],
        "The normal has equation $y = 2\\sqrt{3}\\,x - \\dfrac{3\\sqrt{3}}{2}$.",
    ),
    # q015 Intermediate – horizontal tangent
    q(
        15,
        "Intermediate",
        5,
        "numeric",
        ["parametric", "horizontal-tangent", "stationary-point"],
        "A curve has parametric equations $x = t^{2} + 2t$ and $y = t^{3}$. Find the value of $t$ at which the curve has a horizontal tangent.",
        [
            {
                "description": "State the condition for a horizontal tangent",
                "workingLatex": "\\text{Horizontal tangent} \\iff \\frac{dy}{dx} = 0",
                "explanation": "A horizontal tangent has zero gradient, which means $\\dfrac{dy}{dx} = 0$.",
            },
            {
                "description": "Write the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "This links the gradient to the two derivatives with respect to the parameter.",
            },
            {
                "description": "Relate dy/dx = 0 to the parametric derivatives",
                "workingLatex": "\\frac{dy}{dx} = 0 \\iff \\frac{dy}{dt} = 0 \\quad (\\text{provided } dx/dt \\neq 0)",
                "explanation": "Since $\\dfrac{dy}{dx} = \\dfrac{dy/dt}{dx/dt}$, the gradient is zero when the numerator $dy/dt$ is zero and the denominator is non-zero.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 3t^{2}",
                "explanation": "Differentiating $t^{3}$ gives $3t^{2}$.",
            },
            {
                "description": "Solve dy/dt = 0",
                "workingLatex": "3t^{2} = 0 \\implies t = 0",
                "explanation": "The only solution is $t = 0$.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 2t + 2",
                "explanation": "Differentiating $t^{2} + 2t$ gives $2t + 2$, which we need to verify is non-zero at the candidate value.",
            },
            {
                "description": "Verify dx/dt ≠ 0 at t = 0",
                "workingLatex": "\\text{at } t = 0: \\; \\frac{dx}{dt} = 2 \\neq 0",
                "explanation": "Checking that $dx/dt \\neq 0$ confirms we have a genuine horizontal tangent rather than a singular point where both derivatives vanish.",
            },
            {
                "description": "State the value of t",
                "workingLatex": "t = 0",
                "explanation": "At $t = 0$, the curve has a stationary point with a horizontal tangent.",
            },
            {
                "description": "Find the coordinates at t = 0",
                "workingLatex": "x = 0, \\qquad y = 0",
                "explanation": "Substituting $t = 0$ into both parametric equations locates the point with the horizontal tangent at the origin.",
            },
        ],
        "The curve has a horizontal tangent when $t = 0$.",
    ),
    # q016 Intermediate – vertical tangent
    q(
        16,
        "Intermediate",
        5,
        "expression",
        ["parametric", "vertical-tangent"],
        "A curve has parametric equations $x = t^{3} - 3t$ and $y = t^{2}$. Find the values of $t$ at which the curve has a vertical tangent.",
        [
            {
                "description": "State the condition for a vertical tangent",
                "workingLatex": "\\text{Vertical tangent} \\iff \\frac{dx}{dt} = 0 \\text{ and } \\frac{dy}{dt} \\neq 0",
                "explanation": "A vertical tangent occurs when $x$ is momentarily stationary with respect to $t$ but $y$ is still changing, making $\\dfrac{dy}{dx}$ undefined (infinite gradient).",
            },
            {
                "description": "Recall the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "When $dx/dt = 0$ and $dy/dt \\neq 0$, the ratio is undefined, corresponding to an infinite gradient.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 3t^{2} - 3 = 3(t^{2} - 1)",
                "explanation": "Factorising helps us solve $dx/dt = 0$ efficiently.",
            },
            {
                "description": "Solve dx/dt = 0",
                "workingLatex": "3(t^{2} - 1) = 0 \\implies t^{2} = 1 \\implies t = 1 \\text{ or } t = -1",
                "explanation": "Setting $dx/dt = 0$ gives two candidate values of $t$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 2t",
                "explanation": "We need $dy/dt \\neq 0$ at the candidate values to confirm vertical tangents.",
            },
            {
                "description": "Check dy/dt at t = 1",
                "workingLatex": "t = 1: \\; \\frac{dy}{dt} = 2 \\neq 0",
                "explanation": "At $t = 1$, $y$ is still changing while $x$ is stationary, so the tangent is vertical.",
            },
            {
                "description": "Check dy/dt at t = -1",
                "workingLatex": "t = -1: \\; \\frac{dy}{dt} = -2 \\neq 0",
                "explanation": "At $t = -1$, the same condition holds, giving a second vertical tangent.",
            },
            {
                "description": "State the values of t",
                "workingLatex": "t = 1 \\text{ and } t = -1",
                "explanation": "Both parameter values produce vertical tangents on the curve.",
            },
            {
                "description": "Find the coordinates at each value",
                "workingLatex": "t = 1: \\; (x, y) = (1 - 3,\\, 1) = (-2,\\, 1), \\qquad t = -1: \\; (x, y) = (-1 + 3,\\, 1) = (2,\\, 1)",
                "explanation": "Substituting each $t$-value into the parametric equations gives the two points where the vertical tangents occur.",
            },
        ],
        "The curve has vertical tangents when $t = 1$ and $t = -1$.",
    ),
    # q017 Intermediate – rational parametric (powers of t)
    q(
        17,
        "Intermediate",
        6,
        "expression",
        ["parametric", "gradient", "algebraic-fractions"],
        "A curve has parametric equations $x = t + \\dfrac{1}{t}$ and $y = t - \\dfrac{1}{t}$, where $t > 0$. Find $\\dfrac{dy}{dx}$ in terms of $t$.",
        [
            {
                "description": "State the parametric derivative formula",
                "workingLatex": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
                "explanation": "We differentiate each equation with respect to $t$ and form the ratio.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 1 - \\frac{1}{t^{2}}",
                "explanation": "The derivative of $t$ is $1$, and the derivative of $t^{-1}$ is $-t^{-2}$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 1 + \\frac{1}{t^{2}}",
                "explanation": "The derivative of $-t^{-1}$ is $+t^{-2}$.",
            },
            {
                "description": "Write dy/dx as a fraction",
                "workingLatex": "\\frac{dy}{dx} = \\frac{1 + 1/t^{2}}{1 - 1/t^{2}}",
                "explanation": "Substituting the two derivatives gives a fraction with $t^{2}$ in the denominators.",
            },
            {
                "description": "Multiply numerator and denominator by t²",
                "workingLatex": "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
                "explanation": "Multiplying top and bottom by $t^{2}$ clears the fractional terms and gives a simpler expression.",
            },
            {
                "description": "Note the restriction",
                "workingLatex": "\\text{Defined for } t > 0 \\text{ with } t \\neq 1",
                "explanation": "The gradient is undefined when $t = 1$ because $dx/dt = 0$ there, corresponding to a vertical tangent.",
            },
            {
                "description": "Verify dx/dt at t = 1",
                "workingLatex": "\\text{at } t = 1: \\; \\frac{dx}{dt} = 1 - 1 = 0",
                "explanation": "This confirms that $t = 1$ is excluded because the parametric gradient formula breaks down there.",
            },
            {
                "description": "State the result",
                "workingLatex": "\\frac{dy}{dx} = \\frac{t^{2} + 1}{t^{2} - 1}",
                "explanation": "For all valid $t$, this gives the gradient of the curve in terms of the parameter.",
            },
            {
                "description": "Check the sign for t > 1",
                "workingLatex": "\\text{For } t > 1: \\; t^{2} - 1 > 0 \\implies \\frac{dy}{dx} > 0",
                "explanation": "When $t > 1$, both numerator and denominator are positive, so the curve rises as $x$ increases.",
            },
        ],
        "$\\dfrac{dy}{dx} = \\dfrac{t^{2} + 1}{t^{2} - 1}$, for $t > 0$ with $t \\neq 1$.",
    ),
    # q018 Intermediate – equation of normal
    q(
        18,
        "Intermediate",
        6,
        "equation",
        ["parametric", "normal", "straight-line"],
        "A curve has parametric equations $x = t^{2}$ and $y = 4t - t^{2}$. Find the equation of the normal to the curve at the point where $t = 1$. Give your answer in the form $y = mx + c$.",
        [
            {
                "description": "Find x at t = 1",
                "workingLatex": "x = (1)^{2} = 1",
                "explanation": "Substituting $t = 1$ into $x = t^{2}$ gives the $x$-coordinate.",
            },
            {
                "description": "Find y at t = 1",
                "workingLatex": "y = 4(1) - (1)^{2} = 3",
                "explanation": "Using the same $t = 1$ in the $y$-equation gives the $y$-coordinate $(1, 3)$.",
            },
            {
                "description": "Differentiate x with respect to t",
                "workingLatex": "\\frac{dx}{dt} = 2t",
                "explanation": "Differentiating $t^{2}$ gives $2t$.",
            },
            {
                "description": "Differentiate y with respect to t",
                "workingLatex": "\\frac{dy}{dt} = 4 - 2t",
                "explanation": "Differentiating $4t - t^{2}$ gives $4 - 2t$.",
            },
            {
                "description": "Find the tangent gradient at t = 1",
                "workingLatex": "\\frac{dy}{dx} = \\frac{4 - 2t}{2t}, \\qquad \\text{at } t = 1: \\; \\frac{dy}{dx} = \\frac{2}{2} = 1",
                "explanation": "Substituting $t = 1$ gives a tangent gradient of $1$.",
            },
            {
                "description": "Find the normal gradient",
                "workingLatex": "m_{\\text{normal}} = -\\frac{1}{1} = -1",
                "explanation": "The normal gradient is the negative reciprocal of the tangent gradient.",
            },
            {
                "description": "Form the normal equation",
                "workingLatex": "y - 3 = -1(x - 1)",
                "explanation": "Using point-gradient form through $(1, 3)$ with gradient $-1$.",
            },
            {
                "description": "Rearrange to y = mx + c",
                "workingLatex": "y = -x + 4",
                "explanation": "Simplifying gives the normal in the required form.",
            },
            {
                "description": "State the final equation",
                "workingLatex": "y = -x + 4",
                "explanation": "The normal through $(1, 3)$ with gradient $-1$ is perpendicular to the tangent of gradient $1$.",
            },
        ],
        "The normal has equation $y = -x + 4$.",
    ),
]


def validate(questions: list[dict]) -> None:
    assert len(questions) == 18, f"Expected 18 questions, got {len(questions)}"
    easy = sum(1 for qn in questions if qn["difficulty"] == "Easy")
    inter = sum(1 for qn in questions if qn["difficulty"] == "Intermediate")
    assert easy == 12, f"Expected 12 Easy, got {easy}"
    assert inter == 6, f"Expected 6 Intermediate, got {inter}"

    for qn in questions:
        steps = qn["workedSolution"]["steps"]
        n = len(steps)
        diff = qn["difficulty"]
        if diff == "Easy":
            assert 6 <= n <= 9, f"{qn['id']}: Easy needs 6-9 steps, got {n}"
        else:
            assert 9 <= n <= 13, f"{qn['id']}: Intermediate needs 9-13 steps, got {n}"
        for s in steps:
            assert s["diagram"] is None
            assert s["description"] and s["workingLatex"] and s["explanation"]
        assert qn["questionDiagram"] is None
        assert qn["subtopicId"] == SUBTOPIC_ID


validate(questions)

write_questions_ts(
    OUTPUT,
    questions,
    batch_label="Parametric differentiation q001–q018",
)
print(f"Wrote {len(questions)} questions to {OUTPUT}")

loaded = read_questions_file(OUTPUT)
assert len(loaded) == 18
print("Verified: 18 objects in saved TypeScript batch")
