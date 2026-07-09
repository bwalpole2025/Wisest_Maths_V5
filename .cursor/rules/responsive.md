
### 7. `07-responsive.md` (mobile-first accessibility & layout)

```markdown
# Responsive, Accessibility & Layout Rules — Mobile-First Design

**Core Principles** (from Wisest Maths Blueprint):
- Every canvas container must use `aspect-ratio: 1 / 1` (or explicit width/height) so JSXGraph and Mafs maintain mathematical proportions on any device.
- Mafs viewBox must be explicitly set to prevent auto-scaling layout shifts.
- All draggable elements (MovablePoint, gliders) must be keyboard-accessible and have proper ARIA labels.
- Rive layers must use `pointer-events-none` so they never block interaction with the maths canvas.

**Mobile-First Requirements**:
- Test every widget at viewport widths 320px–768px — ensure 60fps dragging on lower-tier devices.
- Use Tailwind responsive classes (flex, grid, max-w-2xl, etc.) for surrounding UI.
- Ensure high contrast for KaTeX and grid lines.

**Accessibility Checklist** (always verify):
- Keyboard navigation for movable points (arrow keys + Enter to confirm)
- Screen-reader friendly labels on interactive elements
- Focus management when Rive animations trigger
- No flashing or strobing effects in Rive celebrations

**Common Pitfalls to Avoid**:
- Fixed pixel widths on canvases → breaks on mobile
- Missing cleanup on JSXGraph → memory leaks on rapid navigation
- Rive animations blocking pointer events → user cannot drag points

**Examples from Blueprint**:
- GraphTransformation widget wrapped in flex-col with max-w-2xl
- JSXGraph div with `w-full aspect-square border-2 ...`

Combine with performance-60fps skill for perfect cross-device experience.