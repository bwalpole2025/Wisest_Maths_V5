# Performance & 60fps Rules — Mobile-First Optimisation

**Core Principles** (from Wisest Maths Blueprint):
- For Mafs: wrap expensive mathematical functions in useMemo before passing to Plot components:
  const transformedFn = useMemo(() => (x: number) => baseFn(x - a) + b, [a, b]);
- For JSXGraph: never put board objects in React state or dependency arrays.
- Always set explicit viewBox on <Mafs> and use CSS aspect-ratio: 1 / 1 on JSXGraph containers to prevent reflows.
- Use pointer-events-none on Rive layers so they do not interfere with draggable points.

**Additional Optimisations**:
- Tree-shake unused Mafs/Plot components via modern bundlers (Vite/Webpack).
- Lazy-load heavy JSXGraph widgets when possible.
- Ensure ResizeObserver is not needed by enforcing strict aspect-ratio containers.
- Test on lower-tier mobile devices — target true 60fps during continuous dragging.

**Common Pitfalls to Avoid**:
- Passing raw functions to Mafs Plot without memoization → unnecessary re-renders
- Missing freeBoard cleanup → memory leaks on component unmount
- Auto-scaling viewBox → layout shifts and dropped frames

**Examples from Blueprint**:
- VectorFieldExploration: useMemo on the xy callback
- GraphTransformation: memoized transformedFn

Combine with the responsive-aspect-ratio skill for perfect mobile/desktop behaviour.