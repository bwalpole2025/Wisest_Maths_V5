import katex from "katex";
import type { Diagram as DiagramSpec } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * <Diagram> — renders a diagram spec as a clean, print-quality "textbook plate":
 * a white background, near-black ink, a faint square math grid, labelled axes,
 * and every equation typeset beside its graph in the Computer Modern (KaTeX)
 * math font — the look of a figure lifted straight out of a LaTeX / TikZ
 * document. The plate stays light in both themes, the way a printed figure
 * would. No external deps beyond KaTeX (already loaded).
 *
 * Conventions (kept consistent across every diagram kind):
 *   • white plate, near-black ink, single blue accent for the "answer"
 *   • faint square grid behind the drawing
 *   • axes drawn with arrowheads and labelled ("x"/"y" on 2-D graphs, "x" on
 *     1-D number lines, "O" at the origin)
 *   • the equation / inequality typeset beside the graph in the math font
 */

/* ------------------------------------------------------------------ palette */

const INK = "#111827"; // near-black structural lines & curves
const INK_SOFT = "#4b5563"; // secondary ink (numerals, axis letters)
const ACCENT = "#1d4ed8"; // the "answer" — solution set / highlighted region
const ACCENT_FILL = "rgba(29,78,216,0.10)";
const ACCENT_BAND = "rgba(29,78,216,0.06)";
const CURVE = "#1f2937"; // plotted curves
const GRID = "rgba(17,24,39,0.07)"; // faint square math grid
const GRID_STRONG = "rgba(17,24,39,0.13)"; // integer gridlines

const SERIF = '"KaTeX_Main","Latin Modern Roman","CMU Serif",Georgia,"Times New Roman",serif';
const ITALIC = '"KaTeX_Math","Latin Modern Roman","CMU Serif",Georgia,serif';
const MINUS = "−"; // proper minus glyph for axis numerals

/* ------------------------------------------------ number → LaTeX helpers */

/** Format a value as LaTeX: integers plainly, simple fractions as \tfrac, else 2dp. */
function rationalTex(v: number): string {
  const neg = v < 0;
  const a = Math.abs(v);
  if (Math.abs(a - Math.round(a)) < 1e-9) return `${neg ? "-" : ""}${Math.round(a)}`;
  for (let q = 2; q <= 12; q++) {
    const p = a * q;
    if (Math.abs(p - Math.round(p)) < 1e-6) return `${neg ? "-" : ""}\\tfrac{${Math.round(p)}}{${q}}`;
  }
  return `${neg ? "-" : ""}${a.toFixed(2)}`;
}

/** A single (x − r) factor, sign-aware; the r = 0 factor collapses to "x". */
function factorTex(r: number): string {
  if (Math.abs(r) < 1e-9) return "x";
  const t = rationalTex(Math.abs(r));
  return r > 0 ? `(x - ${t})` : `(x + ${t})`;
}

/** The equation of the drawn parabola, e.g. y = (x + 2)(x - 3) or y = -(x-1)(x-4). */
function parabolaEqTex(r1: number, r2: number, opensUp: boolean): string {
  return `y = ${opensUp ? "" : "-"}${factorTex(r1)}${factorTex(r2)}`;
}

/** Turn a loose label string ("x ≤ -1/2", "x < -1 or x > 3") into real LaTeX. */
function texify(raw: string): string {
  if (!raw) return "";
  const s = raw.trim();
  if (/^[A-Za-z][A-Za-z\s]*$/.test(s)) return `\\text{${s}}`;
  return s
    .replace(/≤/g, "\\le ")
    .replace(/≥/g, "\\ge ")
    .replace(/≠/g, "\\ne ")
    .replace(/×/g, "\\times ")
    .replace(/·/g, "\\cdot ")
    .replace(/[−–]/g, "-")
    .replace(/⇔/g, "\\Leftrightarrow ")
    .replace(/⇒/g, "\\Rightarrow ")
    .replace(/⇐/g, "\\Leftarrow ")
    .replace(/∞/g, "\\infty ")
    .replace(/\bor\b/g, "\\ \\text{or}\\ ")
    .replace(/\band\b/g, "\\ \\text{and}\\ ")
    .replace(/(-?\d+)\/(\d+)/g, "\\tfrac{$1}{$2}");
}

/** A KaTeX-typeset label placed in the SVG via <foreignObject>. */
function TexLabel({
  tex,
  x,
  y,
  w = 220,
  size = 15,
  color = INK,
  align = "center",
  chip = false,
}: {
  tex: string;
  x: number; // anchor point (see align)
  y: number; // vertical centre
  w?: number;
  size?: number;
  color?: string;
  align?: "center" | "left" | "right";
  chip?: boolean;
}) {
  if (!tex) return null;
  const t = texify(tex);
  const html = katex.renderToString(t, { throwOnError: false, strict: false, output: "html", displayMode: false });
  const h = /frac/.test(t) ? size * 2.2 : size * 1.5;
  const left = align === "center" ? x - w / 2 : align === "left" ? x : x - w;
  const justify = align === "center" ? "center" : align === "left" ? "flex-start" : "flex-end";
  return (
    <foreignObject x={left} y={y - h / 2} width={w} height={h} style={{ overflow: "visible" }}>
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: justify, width: `${w}px`, height: `${h}px`, fontSize: `${size}px`, lineHeight: 1, color }}
      >
        <span
          style={chip ? { background: "rgba(255,255,255,0.88)", padding: "1px 5px", borderRadius: "4px" } : undefined}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </foreignObject>
  );
}

/** Double-headed axis arrow tips. */
function AxisArrows({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <>
      <path d={`M ${x2 - 7} ${y - 4} L ${x2} ${y} L ${x2 - 7} ${y + 4}`} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M ${x1 + 7} ${y - 4} L ${x1} ${y} L ${x1 + 7} ${y + 4}`} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}
function VArrow({ x, yTop }: { x: number; yTop: number }) {
  return <path d={`M ${x - 4} ${yTop + 7} L ${x} ${yTop} L ${x + 4} ${yTop + 7}`} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />;
}

/* -------------------------------------------------------------- number lines */

interface Interval {
  from: number | null;
  to: number | null;
  fromClosed?: boolean;
  toClosed?: boolean;
}
interface Row {
  label?: string;
  intervals: Interval[];
  highlight?: boolean;
}

function tickValues(min: number, max: number): number[] {
  const lo = Math.ceil(min);
  const hi = Math.floor(max);
  const span = hi - lo;
  const step = span > 14 ? 2 : 1;
  const out: number[] = [];
  for (let t = lo; t <= hi; t += step) out.push(t);
  return out;
}

const VW = 460;
const PADX = 44;

function NumberLineFigure({ min, max, rows }: { min: number; max: number; rows: Row[] }) {
  const x = (v: number) => PADX + ((v - min) / (max - min)) * (VW - 2 * PADX);
  const topPad = 18;
  const labelToAxis = 30;
  const rowGap = 78;
  const axisY = (i: number) => topPad + labelToAxis + i * rowGap;
  const lastAxis = axisY(rows.length - 1);
  const numeralsY = lastAxis + 26;
  const H = numeralsY + 12;
  const ticks = tickValues(min, max);
  const single = rows.length === 1;
  const gridTop = topPad + 6;
  const gridBottom = lastAxis + 8;

  return (
    <svg viewBox={`0 0 ${VW} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* faint square math grid: verticals at integers + evenly-pitched horizontals */}
      {ticks.map((t) => (
        <line key={`gv${t}`} x1={x(t)} x2={x(t)} y1={gridTop} y2={gridBottom} stroke={GRID_STRONG} strokeWidth={1} />
      ))}
      {(() => {
        const pitch = x(ticks[1] ?? min + 1) - x(ticks[0] ?? min);
        const lines: React.ReactNode[] = [];
        for (let gy = gridBottom; gy >= gridTop; gy -= pitch) lines.push(<line key={`gh${gy}`} x1={PADX} x2={VW - PADX} y1={gy} y2={gy} stroke={GRID} strokeWidth={1} />);
        return lines;
      })()}

      {rows.map((row, i) => {
        const y = axisY(i);
        const on = single || row.highlight;
        const color = on ? ACCENT : INK;
        return (
          <g key={i}>
            {row.highlight && !single && (
              <rect x={PADX - 14} y={y - labelToAxis + 4} width={VW - 2 * (PADX - 14)} height={rowGap - 12} rx={8} fill={ACCENT_BAND} />
            )}

            {/* the equation/inequality, typeset beside (top-left of) its line */}
            {row.label && <TexLabel tex={row.label} x={PADX} y={y - 19} align="left" color={on ? ACCENT : INK} size={15} />}

            {/* the number line */}
            <line x1={PADX} x2={VW - PADX} y1={y} y2={y} stroke={INK} strokeWidth={1.4} />
            <AxisArrows x1={PADX} x2={VW - PADX} y={y} />
            {ticks.map((t) => (
              <line key={`tick${i}-${t}`} x1={x(t)} x2={x(t)} y1={y - 4} y2={y + 4} stroke={INK} strokeWidth={1.1} />
            ))}

            {/* bold solution segment(s) */}
            {row.intervals.map((iv, j) => {
              const leftInf = iv.from === null;
              const rightInf = iv.to === null;
              const xa = leftInf ? PADX + 2 : x(iv.from as number);
              const xb = rightInf ? VW - PADX - 2 : x(iv.to as number);
              return (
                <g key={j}>
                  <line x1={xa} x2={xb} y1={y} y2={y} stroke={color} strokeWidth={3.5} />
                  {rightInf && <path d={`M ${xb - 2} ${y - 6} L ${xb + 8} ${y} L ${xb - 2} ${y + 6} Z`} fill={color} />}
                  {leftInf && <path d={`M ${xa + 2} ${y - 6} L ${xa - 8} ${y} L ${xa + 2} ${y + 6} Z`} fill={color} />}
                </g>
              );
            })}

            {/* endpoints: hollow = open, filled = closed */}
            {row.intervals.flatMap((iv, j) => {
              const marks: React.ReactNode[] = [];
              if (iv.from !== null)
                marks.push(<circle key={`${j}a`} cx={x(iv.from)} cy={y} r={5} stroke={color} strokeWidth={1.8} fill={iv.fromClosed ? color : "#ffffff"} />);
              if (iv.to !== null)
                marks.push(<circle key={`${j}b`} cx={x(iv.to)} cy={y} r={5} stroke={color} strokeWidth={1.8} fill={iv.toClosed ? color : "#ffffff"} />);
              return marks;
            })}

            {/* x-axis label on the bottom line */}
            {i === rows.length - 1 && <text x={VW - PADX + 10} y={y + 4} fontFamily={ITALIC} fontStyle="italic" fontSize={14} fill={INK_SOFT}>x</text>}
          </g>
        );
      })}

      {/* shared numerals under the bottom axis */}
      {ticks.map((t) => (
        <text key={`n${t}`} x={x(t)} y={numeralsY} textAnchor="middle" fontFamily={SERIF} fontSize={13} fill={INK_SOFT}>
          {t < 0 ? `${MINUS}${Math.abs(t)}` : `${t}`}
        </text>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ parabola */

function ParabolaRegion({ spec }: { spec: Extract<DiagramSpec, { kind: "parabolaRegion" }> }) {
  const r1 = Math.min(spec.r1, spec.r2);
  const r2 = Math.max(spec.r1, spec.r2);
  const s = spec.opensUp ? 1 : -1;
  // always include the origin so both axes are visible & labelled
  const xmin = Math.min(r1, 0) - 1.5;
  const xmax = Math.max(r2, 0) + 1.5;
  const f = (x: number) => s * (x - r1) * (x - r2);
  let ymax = 0.1;
  for (let x = xmin; x <= xmax; x += 0.02) ymax = Math.max(ymax, Math.abs(f(x)));

  const Wp = 470;
  const Hp = 310;
  const P = 42;
  const sx = (x: number) => P + ((x - xmin) / (xmax - xmin)) * (Wp - 2 * P);
  const sy = (y: number) => Hp / 2 - (y / ymax) * (Hp / 2 - P);
  const axisY = sy(0);
  const yAxisX = sx(0);
  const pitch = sx(1) - sx(0); // px per unit x — used for square grid cells

  const samples: string[] = [];
  for (let x = xmin; x <= xmax + 1e-9; x += (xmax - xmin) / 220) samples.push(`${sx(x)},${sy(f(x))}`);

  const areaPath = (a: number, b: number) => {
    const pts: string[] = [`${sx(a)},${axisY}`];
    for (let x = a; x <= b + 1e-9; x += (b - a) / 80) pts.push(`${sx(x)},${sy(f(x))}`);
    pts.push(`${sx(b)},${axisY}`);
    return `M ${pts.join(" L ")} Z`;
  };

  const interior = spec.region === "interior";
  const closed = spec.rootsClosed;
  const intX = tickValues(xmin, xmax);

  return (
    <svg viewBox={`0 0 ${Wp} ${Hp}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* faint square math grid */}
      {intX.map((t) => (
        <line key={`gx${t}`} x1={sx(t)} x2={sx(t)} y1={P - 12} y2={Hp - P + 12} stroke={t === 0 ? GRID_STRONG : GRID} strokeWidth={1} />
      ))}
      {(() => {
        const lines: React.ReactNode[] = [];
        for (let gy = axisY; gy >= P - 12; gy -= pitch) lines.push(<line key={`up${gy}`} x1={P - 12} x2={Wp - P + 12} y1={gy} y2={gy} stroke={Math.abs(gy - axisY) < 0.5 ? GRID_STRONG : GRID} strokeWidth={1} />);
        for (let gy = axisY + pitch; gy <= Hp - P + 12; gy += pitch) lines.push(<line key={`dn${gy}`} x1={P - 12} x2={Wp - P + 12} y1={gy} y2={gy} stroke={GRID} strokeWidth={1} />);
        return lines;
      })()}

      {/* shaded solution region between curve and axis */}
      {interior ? (
        <path d={areaPath(r1, r2)} fill={ACCENT_FILL} />
      ) : (
        <>
          <path d={areaPath(xmin, r1)} fill={ACCENT_FILL} />
          <path d={areaPath(r2, xmax)} fill={ACCENT_FILL} />
        </>
      )}

      {/* y-axis */}
      <line x1={yAxisX} x2={yAxisX} y1={P - 12} y2={Hp - P + 12} stroke={INK} strokeWidth={1.4} />
      <VArrow x={yAxisX} yTop={P - 12} />
      <text x={yAxisX + 8} y={P - 4} fontFamily={ITALIC} fontStyle="italic" fontSize={14} fill={INK_SOFT}>y</text>

      {/* x-axis */}
      <line x1={P - 12} x2={Wp - P + 12} y1={axisY} y2={axisY} stroke={INK} strokeWidth={1.4} />
      <AxisArrows x1={P - 12} x2={Wp - P + 12} y={axisY} />
      <text x={Wp - P + 8} y={axisY - 8} fontFamily={ITALIC} fontStyle="italic" fontSize={14} fill={INK_SOFT}>x</text>
      <text x={yAxisX - 12} y={axisY + 16} fontFamily={SERIF} fontSize={12} fill={INK_SOFT}>O</text>

      {/* the parabola */}
      <polyline points={samples.join(" ")} fill="none" stroke={CURVE} strokeWidth={2} strokeLinejoin="round" />

      {/* equation of the curve, typeset beside the graph */}
      <TexLabel tex={parabolaEqTex(r1, r2, spec.opensUp)} x={P} y={spec.opensUp ? Hp - P + 2 : P + 6} align="left" size={14} chip color={CURVE} w={240} />

      {/* solution projected onto the x-axis */}
      {interior ? (
        <line x1={sx(r1)} x2={sx(r2)} y1={axisY} y2={axisY} stroke={ACCENT} strokeWidth={3.5} />
      ) : (
        <>
          <line x1={P - 2} x2={sx(r1)} y1={axisY} y2={axisY} stroke={ACCENT} strokeWidth={3.5} />
          <line x1={sx(r2)} x2={Wp - P + 2} y1={axisY} y2={axisY} stroke={ACCENT} strokeWidth={3.5} />
          <path d={`M ${P - 2} ${axisY - 6} L ${P - 12} ${axisY} L ${P - 2} ${axisY + 6} Z`} fill={ACCENT} />
          <path d={`M ${Wp - P + 2} ${axisY - 6} L ${Wp - P + 12} ${axisY} L ${Wp - P + 2} ${axisY + 6} Z`} fill={ACCENT} />
        </>
      )}

      {/* roots, marked and labelled in the math font */}
      {[r1, r2].map((r, i) => (
        <g key={i}>
          <circle cx={sx(r)} cy={axisY} r={5} stroke={ACCENT} strokeWidth={1.8} fill={closed ? ACCENT : "#ffffff"} />
          {Math.abs(r) > 1e-9 && <TexLabel tex={rationalTex(r)} x={sx(r)} y={axisY + 18} size={13} color={INK} w={60} />}
        </g>
      ))}
    </svg>
  );
}

/* --------------------------------------------------------- discriminant triad */

function DiscriminantTriad({ spec }: { spec: Extract<DiagramSpec, { kind: "discriminantTriad" }> }) {
  const panels: { key: "two" | "equal" | "none"; label: string; roots: number[]; shift: number }[] = [
    { key: "two", label: "\\Delta > 0", roots: [-1, 1], shift: 0 },
    { key: "equal", label: "\\Delta = 0", roots: [0, 0], shift: 1 },
    { key: "none", label: "\\Delta < 0", roots: [], shift: 1.4 },
  ];
  const pw = 156;
  const gap = 6;
  const ph = 186;
  const P = 20;
  const top = 26; // room for the shared equation title
  const axisY = ph - 46;

  return (
    <svg viewBox={`0 0 ${pw * 3 + gap * 2} ${ph}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* shared equation, typeset beside (above) the panels */}
      <TexLabel tex={"y = ax^2 + bx + c"} x={6} y={13} align="left" size={13} color={CURVE} w={200} />

      {panels.map((panel, idx) => {
        const ox = idx * (pw + gap);
        const on = spec.highlight.includes(panel.key);
        const [a, b] = panel.roots.length ? [panel.roots[0], panel.roots[1]] : [0, 0];
        const f = (x: number) => (x - a) * (x - b) + panel.shift;
        const xmin = -2.4, xmax = 2.4;
        let ymax = 0.6;
        for (let x = xmin; x <= xmax; x += 0.05) ymax = Math.max(ymax, Math.abs(f(x)));
        const sx = (x: number) => ox + P + ((x - xmin) / (xmax - xmin)) * (pw - 2 * P);
        const sy = (y: number) => axisY - 14 - (y / ymax) * (axisY - top - 22);
        const cx0 = sx(0);
        const pts: string[] = [];
        for (let x = xmin; x <= xmax + 1e-9; x += (xmax - xmin) / 120) pts.push(`${sx(x)},${sy(f(x))}`);
        return (
          <g key={panel.key}>
            {on && <rect x={ox + 3} y={top - 6} width={pw - 6} height={ph - top - 2} rx={10} fill={ACCENT_BAND} stroke={ACCENT} strokeOpacity={0.35} strokeWidth={1.2} />}
            {/* faint grid + axes */}
            {[-2, -1, 1, 2].map((t) => (
              <line key={t} x1={sx(t)} x2={sx(t)} y1={top} y2={axisY + 8} stroke={GRID} strokeWidth={1} />
            ))}
            <line x1={cx0} x2={cx0} y1={top} y2={axisY + 8} stroke={INK} strokeWidth={1.1} />
            <VArrow x={cx0} yTop={top} />
            <line x1={ox + P - 6} x2={ox + pw - P + 6} y1={axisY} y2={axisY} stroke={INK} strokeWidth={1.2} />
            <path d={`M ${ox + pw - P + 6 - 6} ${axisY - 3.5} L ${ox + pw - P + 6} ${axisY} L ${ox + pw - P + 6 - 6} ${axisY + 3.5}`} fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
            <text x={ox + pw - P + 10} y={axisY - 5} fontFamily={ITALIC} fontStyle="italic" fontSize={11} fill={INK_SOFT}>x</text>
            <text x={cx0 + 6} y={top + 8} fontFamily={ITALIC} fontStyle="italic" fontSize={11} fill={INK_SOFT}>y</text>
            {/* curve + roots */}
            <polyline points={pts.join(" ")} fill="none" stroke={on ? ACCENT : CURVE} strokeWidth={2} strokeLinejoin="round" />
            {panel.roots.map((r, i) => (
              <circle key={i} cx={sx(r)} cy={axisY} r={3.6} fill={on ? ACCENT : INK} />
            ))}
            <TexLabel tex={panel.label} x={ox + pw / 2} y={ph - 16} size={15} color={on ? ACCENT : INK} />
          </g>
        );
      })}
    </svg>
  );
}

/* ---------------------------------------------------------------- dispatcher */

function toRows(spec: DiagramSpec): { min: number; max: number; rows: Row[] } | null {
  switch (spec.kind) {
    case "numberLineRay":
      return {
        min: spec.min,
        max: spec.max,
        rows: [
          {
            label: spec.label,
            intervals: [
              spec.direction === "left"
                ? { from: null, to: spec.endpoint, toClosed: spec.closed }
                : { from: spec.endpoint, to: null, fromClosed: spec.closed },
            ],
          },
        ],
      };
    case "numberLineInterval":
      return {
        min: spec.min,
        max: spec.max,
        rows: [
          {
            label: spec.label,
            intervals: [{ from: spec.lower, to: spec.upper, fromClosed: spec.lowerClosed, toClosed: spec.upperClosed }],
          },
        ],
      };
    case "signFlipMirror":
      return {
        min: spec.min,
        max: spec.max,
        rows: [
          {
            label: spec.beforeLabel,
            intervals: [
              spec.beforeDirection === "left"
                ? { from: null, to: spec.beforeEndpoint, toClosed: spec.beforeClosed }
                : { from: spec.beforeEndpoint, to: null, fromClosed: spec.beforeClosed },
            ],
          },
          {
            label: spec.afterLabel,
            highlight: true,
            intervals: [
              spec.afterDirection === "left"
                ? { from: null, to: spec.afterEndpoint, toClosed: spec.afterClosed }
                : { from: spec.afterEndpoint, to: null, fromClosed: spec.afterClosed },
            ],
          },
        ],
      };
    case "intersectionStack":
      return { min: spec.min, max: spec.max, rows: spec.rows };
    default:
      return null;
  }
}

/* Frame: a white "plate" that stays light in both themes, like a printed figure. */
function Plate({ children, caption, alt, className }: { children: React.ReactNode; caption?: string; alt?: string; className?: string }) {
  return (
    <figure className={cn("my-5 flex flex-col items-center", className)}>
      <div className="w-full max-w-[500px] rounded-xl border border-black/10 bg-white px-4 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_8px_24px_-12px_rgba(0,0,0,0.25)]">
        {children}
      </div>
      {caption && (
        <figcaption className="mt-2.5 max-w-[460px] text-center text-xs italic leading-snug text-muted-foreground" style={{ fontFamily: SERIF }}>
          {caption}
        </figcaption>
      )}
      {alt && <span className="sr-only">{alt}</span>}
    </figure>
  );
}

export function Diagram({ spec, className }: { spec: DiagramSpec; className?: string }) {
  if (spec.kind === "descriptive") {
    const items = (spec.elements ?? [])
      .map((e) => {
        if (typeof e === "string") return e;
        if (e && typeof e === "object") {
          const o = e as Record<string, unknown>;
          const head = (o.label ?? o.shape ?? "") as string;
          const note = (o.note ?? o.description ?? o.sides ?? "") as string;
          return [head, note].filter(Boolean).join(" — ");
        }
        return "";
      })
      .filter(Boolean);
    return (
      <figure className={cn("my-5 flex flex-col items-center", className)}>
        <div className="w-full max-w-[500px] rounded-xl border border-black/10 bg-white px-5 py-4 text-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_8px_24px_-12px_rgba(0,0,0,0.25)]" style={{ fontFamily: SERIF }}>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Figure</div>
          <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">{spec.description}</p>
          {items.length > 0 && (
            <ul className="mt-2 list-disc space-y-0.5 pl-5 text-[13px] text-neutral-600">
              {items.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          )}
        </div>
        {spec.caption && (
          <figcaption className="mt-2.5 max-w-[460px] text-center text-xs italic leading-snug text-muted-foreground" style={{ fontFamily: SERIF }}>
            {spec.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  let body: React.ReactNode;
  if (spec.kind === "parabolaRegion") body = <ParabolaRegion spec={spec} />;
  else if (spec.kind === "discriminantTriad") body = <DiscriminantTriad spec={spec} />;
  else {
    const rows = toRows(spec);
    body = rows ? <NumberLineFigure min={rows.min} max={rows.max} rows={rows.rows} /> : null;
  }

  return (
    <Plate caption={spec.caption} alt={spec.alt} className={className}>
      {body}
    </Plate>
  );
}
