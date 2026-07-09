# KaTeX Live Equation Rules — High-Performance Typography

**Core Principles** (from Wisest Maths Blueprint):
- Import TeX from '@matejmazur/react-katex' and 'katex/dist/katex.min.css'
- Every dynamic equation must use a String.raw template literal so backslashes are preserved:
  const equation = String.raw`f(x) = (x - ${a.toFixed(2)})^2 + ${b.toFixed(2)}`;
- Always bind the math to React state variables so it updates instantly as the user drags points or sliders.
- Use .toFixed(2) (or .toFixed(1) for angles) to prevent floating-point jitter and cumulative layout shift.

**Best Practices**:
- Wrap in <div className="..."> <TeX block math={equation} /> </div> for clean layout.
- Pass custom macros via KaTeX config props if your curriculum uses non-standard notation.
- Combine with Mafs/JSXGraph state so the equation updates synchronously with the graphics.

**Common Pitfalls to Avoid**:
- Do not use MathJax — it is asynchronous and causes layout shifts on mobile.
- Do not concatenate strings manually — always use String.raw to avoid escaping issues.
- Do not update KaTeX on every render without proper memoization.

**Examples from Blueprint**:
- GraphTransformation widget: live \( f(x) = (x - ${a.toFixed(1)})^2 + ${b.toFixed(1)} \)
- AngleAtCenterTheorem: live angle displays `${centerAngle.toFixed(1)}^\circ`

Every widget that displays changing values must follow this pattern.