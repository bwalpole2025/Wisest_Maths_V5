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

/* ------------------------------------------------- statistics chart helpers */

/** "Nice" tick step (1/2/2.5/5 × 10ᵏ) for an axis running 0 → maxVal. */
function niceTicksFromZero(maxVal: number, target = 5): number[] {
  if (!(maxVal > 0)) return [0];
  const raw = maxVal / target;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 2.5 ? 2.5 : norm <= 5 ? 5 : 10) * mag;
  const out: number[] = [];
  for (let t = 0; t <= maxVal + step * 1e-6; t += step) out.push(Number(t.toFixed(6)));
  return out;
}

/** "Nice" ticks across an arbitrary [min,max] range. */
function niceAxisTicks(min: number, max: number, target = 8): number[] {
  const span = max - min;
  if (!(span > 0)) return [min];
  const raw = span / target;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 2.5 ? 2.5 : norm <= 5 ? 5 : 10) * mag;
  const start = Math.ceil(min / step - 1e-9) * step;
  const out: number[] = [];
  for (let t = start; t <= max + step * 1e-6; t += step) out.push(Number(t.toFixed(6)));
  return out;
}

/** Numeral for an axis tick: integers plainly, else trimmed decimal, proper minus glyph. */
function fmtNum(t: number): string {
  const r = Math.round(t);
  let s = Math.abs(t - r) < 1e-9 ? `${Math.abs(r)}` : `${Math.abs(t)}`;
  if (s.includes(".")) s = s.replace(/0+$/, "").replace(/\.$/, "");
  return t < 0 ? `${MINUS}${s}` : s;
}

/** Axis title as upright text (units/words), e.g. "time (s)". */
function axisTitleTex(label?: string): string {
  return label ? `\\text{${label}}` : "";
}

/* --------------------------------------------------------------- box plot */

function BoxPlotFigure({ spec }: { spec: Extract<DiagramSpec, { kind: "boxPlot" }> }) {
  const { axisMin, axisMax } = spec;
  const outliers = spec.outliers ?? [];
  const W = 470;
  const P = 46;
  const x = (v: number) => P + ((v - axisMin) / (axisMax - axisMin)) * (W - 2 * P);
  const cy = 74; // vertical centre of the box band
  const bh = 34; // box half-height
  const axisY = 168;
  const numeralsY = axisY + 22;
  const H = spec.showValues ? numeralsY + 40 : numeralsY + 24;
  const ticks = niceAxisTicks(axisMin, axisMax, 8);

  const cross = (cx: number, cyv: number, r = 5) => (
    <>
      <line x1={cx - r} y1={cyv - r} x2={cx + r} y2={cyv + r} stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <line x1={cx - r} y1={cyv + r} x2={cx + r} y2={cyv - r} stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
    </>
  );

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* faint vertical grid down to the axis */}
      {ticks.map((t) => (
        <line key={`gv${t}`} x1={x(t)} x2={x(t)} y1={cy - bh - 14} y2={axisY} stroke={GRID} strokeWidth={1} />
      ))}

      {/* whiskers */}
      <line x1={x(spec.whiskerLow)} x2={x(spec.q1)} y1={cy} y2={cy} stroke={INK} strokeWidth={1.6} />
      <line x1={x(spec.q3)} x2={x(spec.whiskerHigh)} y1={cy} y2={cy} stroke={INK} strokeWidth={1.6} />
      <line x1={x(spec.whiskerLow)} x2={x(spec.whiskerLow)} y1={cy - bh * 0.5} y2={cy + bh * 0.5} stroke={INK} strokeWidth={1.6} />
      <line x1={x(spec.whiskerHigh)} x2={x(spec.whiskerHigh)} y1={cy - bh * 0.5} y2={cy + bh * 0.5} stroke={INK} strokeWidth={1.6} />

      {/* the box (Q1–Q3) with the median line — the accent element */}
      <rect x={x(spec.q1)} y={cy - bh} width={x(spec.q3) - x(spec.q1)} height={2 * bh} fill={ACCENT_FILL} stroke={ACCENT} strokeWidth={1.8} />
      <line x1={x(spec.median)} x2={x(spec.median)} y1={cy - bh} y2={cy + bh} stroke={ACCENT} strokeWidth={2.6} />

      {/* outliers as crosses */}
      {outliers.map((o, i) => (
        <g key={`o${i}`}>{cross(x(o), cy)}</g>
      ))}

      {/* optional value labels above the plot */}
      {spec.showValues &&
        [spec.whiskerLow, spec.q1, spec.median, spec.q3, spec.whiskerHigh].map((v, i) => (
          <TexLabel key={`v${i}`} tex={rationalTex(v)} x={x(v)} y={cy - bh - 12} size={12} color={INK_SOFT} w={60} />
        ))}

      {/* number-line axis */}
      <line x1={P - 6} x2={W - P + 6} y1={axisY} y2={axisY} stroke={INK} strokeWidth={1.4} />
      <AxisArrows x1={P - 6} x2={W - P + 6} y={axisY} />
      {ticks.map((t) => (
        <line key={`tk${t}`} x1={x(t)} x2={x(t)} y1={axisY - 4} y2={axisY + 4} stroke={INK} strokeWidth={1.1} />
      ))}
      {ticks.map((t) => (
        <text key={`n${t}`} x={x(t)} y={numeralsY} textAnchor="middle" fontFamily={SERIF} fontSize={12} fill={INK_SOFT}>
          {fmtNum(t)}
        </text>
      ))}
      <text x={W - P + 10} y={axisY - 7} fontFamily={ITALIC} fontStyle="italic" fontSize={13} fill={INK_SOFT}>x</text>

      {/* axis title (units) */}
      {spec.axisLabel && <TexLabel tex={axisTitleTex(spec.axisLabel)} x={W / 2} y={numeralsY + 20} size={13} color={INK_SOFT} w={260} />}
    </svg>
  );
}

/* -------------------------------------------------------------- histogram */

function HistogramFigure({ spec }: { spec: Extract<DiagramSpec, { kind: "histogram" }> }) {
  const bars = spec.bars;
  const xMin = Math.min(...bars.map((b) => b.x0));
  const xMax = Math.max(...bars.map((b) => b.x1));
  const fdMax = Math.max(...bars.map((b) => b.freqDensity));
  const yTicks = niceTicksFromZero(fdMax, 5);
  const yTop = yTicks[yTicks.length - 1];
  const boundaries = Array.from(new Set(bars.flatMap((b) => [b.x0, b.x1]))).sort((a, b) => a - b);

  const W = 470;
  const PL = 52;
  const PR = 22;
  const PT = 30;
  const PB = 54;
  const H = 300;
  const axisY = H - PB;
  const x = (v: number) => PL + ((v - xMin) / (xMax - xMin)) * (W - PL - PR);
  const y = (v: number) => axisY - (v / yTop) * (axisY - PT);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* horizontal grid at y-ticks */}
      {yTicks.map((t) => (
        <line key={`gh${t}`} x1={PL} x2={W - PR} y1={y(t)} y2={y(t)} stroke={t === 0 ? GRID_STRONG : GRID} strokeWidth={1} />
      ))}
      {/* vertical grid at class boundaries */}
      {boundaries.map((b) => (
        <line key={`gv${b}`} x1={x(b)} x2={x(b)} y1={PT} y2={axisY} stroke={GRID} strokeWidth={1} />
      ))}

      {/* bars */}
      {bars.map((b, i) => (
        <rect key={`b${i}`} x={x(b.x0)} y={y(b.freqDensity)} width={x(b.x1) - x(b.x0)} height={axisY - y(b.freqDensity)} fill={ACCENT_FILL} stroke={ACCENT} strokeWidth={1.6} />
      ))}

      {/* y-axis */}
      <line x1={PL} x2={PL} y1={PT - 10} y2={axisY} stroke={INK} strokeWidth={1.4} />
      <VArrow x={PL} yTop={PT - 10} />
      {yTicks.map((t) => (
        <g key={`yt${t}`}>
          <line x1={PL - 4} x2={PL} y1={y(t)} y2={y(t)} stroke={INK} strokeWidth={1.1} />
          <text x={PL - 8} y={y(t) + 4} textAnchor="end" fontFamily={SERIF} fontSize={12} fill={INK_SOFT}>{fmtNum(t)}</text>
        </g>
      ))}

      {/* x-axis */}
      <line x1={PL} x2={W - PR} y1={axisY} y2={axisY} stroke={INK} strokeWidth={1.4} />
      <AxisArrows x1={PL} x2={W - PR} y={axisY} />
      {boundaries.map((b) => (
        <g key={`xt${b}`}>
          <line x1={x(b)} x2={x(b)} y1={axisY} y2={axisY + 4} stroke={INK} strokeWidth={1.1} />
          <text x={x(b)} y={axisY + 18} textAnchor="middle" fontFamily={SERIF} fontSize={12} fill={INK_SOFT}>{fmtNum(b)}</text>
        </g>
      ))}

      {/* axis titles */}
      <TexLabel tex={axisTitleTex(spec.yAxisLabel ?? "frequency density")} x={PL - 2} y={PT - 20} align="left" size={12} color={INK_SOFT} w={220} />
      {spec.xAxisLabel && <TexLabel tex={axisTitleTex(spec.xAxisLabel)} x={(PL + W - PR) / 2} y={axisY + 38} size={13} color={INK_SOFT} w={260} />}
    </svg>
  );
}

/* -------------------------------------------------- cumulative frequency */

function CumulativeFrequencyFigure({ spec }: { spec: Extract<DiagramSpec, { kind: "cumulativeFrequency" }> }) {
  const pts = spec.origin !== undefined ? [{ x: spec.origin, cf: 0 }, ...spec.points] : [...spec.points];
  const xMin = pts[0].x;
  const xMax = pts[pts.length - 1].x;
  const cfMax = Math.max(...pts.map((p) => p.cf));
  const yTicks = niceTicksFromZero(cfMax, 5);
  const yTop = yTicks[yTicks.length - 1];
  const xTicks = Array.from(new Set(pts.map((p) => p.x))).sort((a, b) => a - b);

  const W = 470;
  const PL = 52;
  const PR = 22;
  const PT = 26;
  const PB = 54;
  const H = 310;
  const axisY = H - PB;
  const x = (v: number) => PL + ((v - xMin) / (xMax - xMin)) * (W - PL - PR);
  const y = (v: number) => axisY - (v / yTop) * (axisY - PT);

  // x on the polyline at a given cumulative frequency (linear interpolation)
  const xAtCf = (cf: number): number | null => {
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i];
      const b = pts[i + 1];
      if ((cf >= a.cf && cf <= b.cf) || (cf <= a.cf && cf >= b.cf)) {
        if (b.cf === a.cf) return a.x;
        return a.x + ((cf - a.cf) / (b.cf - a.cf)) * (b.x - a.x);
      }
    }
    return null;
  };

  const curve = pts.map((p) => `${x(p.x)},${y(p.cf)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* grid */}
      {yTicks.map((t) => (
        <line key={`gh${t}`} x1={PL} x2={W - PR} y1={y(t)} y2={y(t)} stroke={t === 0 ? GRID_STRONG : GRID} strokeWidth={1} />
      ))}
      {xTicks.map((t) => (
        <line key={`gv${t}`} x1={x(t)} x2={x(t)} y1={PT} y2={axisY} stroke={GRID} strokeWidth={1} />
      ))}

      {/* read-off guides (dashed accent) */}
      {(spec.readoffs ?? []).map((r, i) => {
        const xr = xAtCf(r.cf);
        if (xr === null) return null;
        return (
          <g key={`ro${i}`}>
            <line x1={PL} y1={y(r.cf)} x2={x(xr)} y2={y(r.cf)} stroke={ACCENT} strokeWidth={1.3} strokeDasharray="4 3" />
            <line x1={x(xr)} y1={y(r.cf)} x2={x(xr)} y2={axisY} stroke={ACCENT} strokeWidth={1.3} strokeDasharray="4 3" />
            <circle cx={x(xr)} cy={y(r.cf)} r={3.5} fill={ACCENT} />
            {r.label && <TexLabel tex={r.label} x={x(xr)} y={y(r.cf) - 12} size={12} color={ACCENT} w={70} chip />}
          </g>
        );
      })}

      {/* the cumulative frequency curve + points */}
      <polyline points={curve} fill="none" stroke={CURVE} strokeWidth={2} strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={`p${i}`} cx={x(p.x)} cy={y(p.cf)} r={2.8} fill={CURVE} />
      ))}

      {/* y-axis */}
      <line x1={PL} x2={PL} y1={PT - 10} y2={axisY} stroke={INK} strokeWidth={1.4} />
      <VArrow x={PL} yTop={PT - 10} />
      {yTicks.map((t) => (
        <g key={`yt${t}`}>
          <line x1={PL - 4} x2={PL} y1={y(t)} y2={y(t)} stroke={INK} strokeWidth={1.1} />
          <text x={PL - 8} y={y(t) + 4} textAnchor="end" fontFamily={SERIF} fontSize={12} fill={INK_SOFT}>{fmtNum(t)}</text>
        </g>
      ))}

      {/* x-axis */}
      <line x1={PL} x2={W - PR} y1={axisY} y2={axisY} stroke={INK} strokeWidth={1.4} />
      <AxisArrows x1={PL} x2={W - PR} y={axisY} />
      {xTicks.map((t) => (
        <g key={`xt${t}`}>
          <line x1={x(t)} x2={x(t)} y1={axisY} y2={axisY + 4} stroke={INK} strokeWidth={1.1} />
          <text x={x(t)} y={axisY + 18} textAnchor="middle" fontFamily={SERIF} fontSize={12} fill={INK_SOFT}>{fmtNum(t)}</text>
        </g>
      ))}

      {/* axis titles */}
      <TexLabel tex={axisTitleTex(spec.yAxisLabel ?? "cumulative frequency")} x={PL - 2} y={PT - 18} align="left" size={12} color={INK_SOFT} w={240} />
      {spec.xAxisLabel && <TexLabel tex={axisTitleTex(spec.xAxisLabel)} x={(PL + W - PR) / 2} y={axisY + 38} size={13} color={INK_SOFT} w={260} />}
    </svg>
  );
}

/* ----------------------------------------------------------------- scatter */

function ScatterFigure({ spec }: { spec: Extract<DiagramSpec, { kind: "scatter" }> }) {
  const pts = spec.points;
  const line = spec.line;
  const predict = spec.predict;

  // --- x-range: from data (+ prediction), padded, then snapped to nice ticks.
  const xsData = [...pts.map((p) => p.x), ...(predict ? [predict.x] : [])];
  const rawXmin = Math.min(...xsData);
  const rawXmax = Math.max(...xsData);
  const padX = (rawXmax - rawXmin || Math.abs(rawXmax) || 1) * 0.08;
  const xTicks = niceAxisTicks(rawXmin - padX, rawXmax + padX, 6);
  const xMin = spec.xMin ?? Math.min(rawXmin - padX, xTicks[0]);
  const xMax = spec.xMax ?? Math.max(rawXmax + padX, xTicks[xTicks.length - 1]);

  // --- y-range: data (+ prediction) AND the line's endpoints, so the line stays in-frame.
  const lineY = (v: number) => (line ? line.a + line.b * v : 0);
  const ysData = [
    ...pts.map((p) => p.y),
    ...(predict ? [predict.y] : []),
    ...(line ? [lineY(xMin), lineY(xMax)] : []),
  ];
  const rawYmin = Math.min(...ysData);
  const rawYmax = Math.max(...ysData);
  const padY = (rawYmax - rawYmin || Math.abs(rawYmax) || 1) * 0.1;
  const yTicks = niceAxisTicks(rawYmin - padY, rawYmax + padY, 6);
  const yMin = spec.yMin ?? Math.min(rawYmin - padY, yTicks[0]);
  const yMax = spec.yMax ?? Math.max(rawYmax + padY, yTicks[yTicks.length - 1]);

  const W = 470;
  const PL = 54;
  const PR = 24;
  const PT = 26;
  const PB = 54;
  const H = 320;
  const axisY = H - PB;
  const x = (v: number) => PL + ((v - xMin) / (xMax - xMin)) * (W - PL - PR);
  const y = (v: number) => axisY - ((v - yMin) / (yMax - yMin)) * (axisY - PT);

  const cross = (cx: number, cyv: number, r = 4) => (
    <>
      <line x1={cx - r} y1={cyv - r} x2={cx + r} y2={cyv + r} stroke={CURVE} strokeWidth={1.5} strokeLinecap="round" />
      <line x1={cx - r} y1={cyv + r} x2={cx + r} y2={cyv - r} stroke={CURVE} strokeWidth={1.5} strokeLinecap="round" />
    </>
  );

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* grid */}
      {yTicks.map((t) => (
        <line key={`gh${t}`} x1={PL} x2={W - PR} y1={y(t)} y2={y(t)} stroke={GRID} strokeWidth={1} />
      ))}
      {xTicks.map((t) => (
        <line key={`gv${t}`} x1={x(t)} x2={x(t)} y1={PT} y2={axisY} stroke={GRID} strokeWidth={1} />
      ))}

      {/* least-squares regression line (the accent element) */}
      {line && (
        <line
          x1={x(xMin)}
          y1={y(lineY(xMin))}
          x2={x(xMax)}
          y2={y(lineY(xMax))}
          stroke={ACCENT}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
      )}

      {/* prediction read-off with dashed guides to both axes */}
      {predict && (
        <g>
          <line x1={PL} y1={y(predict.y)} x2={x(predict.x)} y2={y(predict.y)} stroke={ACCENT} strokeWidth={1.3} strokeDasharray="4 3" />
          <line x1={x(predict.x)} y1={y(predict.y)} x2={x(predict.x)} y2={axisY} stroke={ACCENT} strokeWidth={1.3} strokeDasharray="4 3" />
          <circle cx={x(predict.x)} cy={y(predict.y)} r={4} fill={ACCENT} />
          {predict.label && <TexLabel tex={predict.label} x={x(predict.x)} y={y(predict.y) - 13} size={12} color={ACCENT} w={90} chip />}
        </g>
      )}

      {/* data points as crosses */}
      {pts.map((p, i) => (
        <g key={`pt${i}`}>{cross(x(p.x), y(p.y))}</g>
      ))}

      {/* y-axis */}
      <line x1={PL} x2={PL} y1={PT - 10} y2={axisY} stroke={INK} strokeWidth={1.4} />
      <VArrow x={PL} yTop={PT - 10} />
      {yTicks.map((t) => (
        <g key={`yt${t}`}>
          <line x1={PL - 4} x2={PL} y1={y(t)} y2={y(t)} stroke={INK} strokeWidth={1.1} />
          <text x={PL - 8} y={y(t) + 4} textAnchor="end" fontFamily={SERIF} fontSize={12} fill={INK_SOFT}>{fmtNum(t)}</text>
        </g>
      ))}

      {/* x-axis */}
      <line x1={PL} x2={W - PR} y1={axisY} y2={axisY} stroke={INK} strokeWidth={1.4} />
      <AxisArrows x1={PL} x2={W - PR} y={axisY} />
      {xTicks.map((t) => (
        <g key={`xt${t}`}>
          <line x1={x(t)} x2={x(t)} y1={axisY} y2={axisY + 4} stroke={INK} strokeWidth={1.1} />
          <text x={x(t)} y={axisY + 18} textAnchor="middle" fontFamily={SERIF} fontSize={12} fill={INK_SOFT}>{fmtNum(t)}</text>
        </g>
      ))}

      {/* axis titles */}
      {spec.yAxisLabel && <TexLabel tex={axisTitleTex(spec.yAxisLabel)} x={PL - 2} y={PT - 16} align="left" size={12} color={INK_SOFT} w={240} />}
      {spec.xAxisLabel && <TexLabel tex={axisTitleTex(spec.xAxisLabel)} x={(PL + W - PR) / 2} y={axisY + 38} size={13} color={INK_SOFT} w={280} />}
    </svg>
  );
}

/* --------------------------------------------------------------- Venn / tree */

/** Deterministic, SSR-stable id from a seed string (for per-diagram clip/mask ids). */
function hashId(seed: string): string {
  let h = 5381;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) + h + seed.charCodeAt(i)) >>> 0;
  return "vd" + h.toString(36);
}

const HI_FILL = "rgba(29,78,216,0.16)"; // region shading for Venn highlights

function Venn2Figure({ spec }: { spec: Extract<DiagramSpec, { kind: "venn2" }> }) {
  const W = 460;
  const H = 300;
  const uid = hashId([spec.setALabel, spec.setBLabel, spec.onlyA, spec.both, spec.onlyB, spec.outside ?? ""].join("|"));
  const rx = 24, ry = 24, rw = W - 48, rh = H - 48;
  const cy = ry + rh / 2 + 4;
  const r = 92;
  const cxA = W / 2 - 46;
  const cxB = W / 2 + 46;
  const hi = new Set(spec.highlight ?? []);
  const idA = `${uid}A`, idB = `${uid}B`, idNotA = `${uid}na`, idNotB = `${uid}nb`, idOut = `${uid}o`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id={idA}><circle cx={cxA} cy={cy} r={r} /></clipPath>
        <clipPath id={idB}><circle cx={cxB} cy={cy} r={r} /></clipPath>
        <mask id={idNotB}><rect x={0} y={0} width={W} height={H} fill="white" /><circle cx={cxB} cy={cy} r={r} fill="black" /></mask>
        <mask id={idNotA}><rect x={0} y={0} width={W} height={H} fill="white" /><circle cx={cxA} cy={cy} r={r} fill="black" /></mask>
        <mask id={idOut}><rect x={0} y={0} width={W} height={H} fill="white" /><circle cx={cxA} cy={cy} r={r} fill="black" /><circle cx={cxB} cy={cy} r={r} fill="black" /></mask>
      </defs>

      {/* highlight shading */}
      {hi.has("outside") && <rect x={rx} y={ry} width={rw} height={rh} fill={HI_FILL} mask={`url(#${idOut})`} />}
      {hi.has("onlyA") && <g clipPath={`url(#${idA})`} mask={`url(#${idNotB})`}><rect x={0} y={0} width={W} height={H} fill={HI_FILL} /></g>}
      {hi.has("onlyB") && <g clipPath={`url(#${idB})`} mask={`url(#${idNotA})`}><rect x={0} y={0} width={W} height={H} fill={HI_FILL} /></g>}
      {hi.has("both") && <g clipPath={`url(#${idA})`}><circle cx={cxB} cy={cy} r={r} fill={HI_FILL} /></g>}

      {/* universal rectangle + circles */}
      <rect x={rx} y={ry} width={rw} height={rh} fill="none" stroke={INK} strokeWidth={1.4} />
      <circle cx={cxA} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={1.6} />
      <circle cx={cxB} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={1.6} />

      {/* set labels */}
      <TexLabel tex={spec.setALabel} x={cxA - r * 0.72} y={cy - r * 0.78} size={16} color={INK} w={40} />
      <TexLabel tex={spec.setBLabel} x={cxB + r * 0.72} y={cy - r * 0.78} size={16} color={INK} w={40} />
      {spec.universalLabel && <TexLabel tex={spec.universalLabel} x={rx + 14} y={ry + 14} size={14} color={INK_SOFT} w={40} />}

      {/* region values */}
      {spec.onlyA !== "" && <TexLabel tex={spec.onlyA} x={cxA - r * 0.46} y={cy} size={15} color={INK} w={80} />}
      {spec.both !== "" && <TexLabel tex={spec.both} x={(cxA + cxB) / 2} y={cy} size={15} color={INK} w={80} />}
      {spec.onlyB !== "" && <TexLabel tex={spec.onlyB} x={cxB + r * 0.46} y={cy} size={15} color={INK} w={80} />}
      {spec.outside && <TexLabel tex={spec.outside} x={rx + rw - 22} y={ry + rh - 16} size={14} color={INK_SOFT} w={70} />}
    </svg>
  );
}

function Venn3Figure({ spec }: { spec: Extract<DiagramSpec, { kind: "venn3" }> }) {
  const W = 460;
  const H = 360;
  const rx = 22, ry = 22, rw = W - 44, rh = H - 44;
  const cx = W / 2;
  const cy = ry + rh / 2 + 2;
  const o = 52; // centre-to-circle offset
  const r = 96;
  const A = { x: cx, y: cy - o };
  const B = { x: cx - o * 0.866, y: cy + o * 0.5 };
  const C = { x: cx + o * 0.866, y: cy + o * 0.5 };
  const L = (tex: string, x: number, y: number, soft = false) =>
    tex !== "" ? <TexLabel tex={tex} x={x} y={y} size={14} color={soft ? INK_SOFT : INK} w={64} /> : null;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      <rect x={rx} y={ry} width={rw} height={rh} fill="none" stroke={INK} strokeWidth={1.4} />
      <circle cx={A.x} cy={A.y} r={r} fill="none" stroke={INK} strokeWidth={1.6} />
      <circle cx={B.x} cy={B.y} r={r} fill="none" stroke={INK} strokeWidth={1.6} />
      <circle cx={C.x} cy={C.y} r={r} fill="none" stroke={INK} strokeWidth={1.6} />

      {/* set labels just outside each circle */}
      <TexLabel tex={spec.setALabel} x={A.x} y={A.y - r - 12} size={16} color={INK} w={40} />
      <TexLabel tex={spec.setBLabel} x={B.x - r * 0.78} y={B.y + r * 0.82} size={16} color={INK} w={40} />
      <TexLabel tex={spec.setCLabel} x={C.x + r * 0.78} y={C.y + r * 0.82} size={16} color={INK} w={40} />
      {spec.universalLabel && <TexLabel tex={spec.universalLabel} x={rx + 14} y={ry + 14} size={14} color={INK_SOFT} w={40} />}

      {/* region values (approximate centroids) */}
      {L(spec.onlyA, A.x, A.y - r * 0.42)}
      {L(spec.onlyB, B.x - r * 0.42, B.y + r * 0.34)}
      {L(spec.onlyC, C.x + r * 0.42, C.y + r * 0.34)}
      {L(spec.AB, cx - o * 0.92, cy - o * 0.16)}
      {L(spec.AC, cx + o * 0.92, cy - o * 0.16)}
      {L(spec.BC, cx, cy + o * 0.98)}
      {L(spec.ABC, cx, cy + o * 0.18)}
      {spec.outside ? L(spec.outside, rx + rw - 24, ry + rh - 16, true) : null}
    </svg>
  );
}

function ProbTreeFigure({ spec }: { spec: Extract<DiagramSpec, { kind: "probTree" }> }) {
  type Leaf = { i: number; b: (typeof spec.branches)[number]; c: NonNullable<(typeof spec.branches)[number]["children"]>[number] | null; y: number };
  const leaves: Leaf[] = [];
  spec.branches.forEach((b, i) => {
    const kids = b.children && b.children.length ? b.children : [null];
    kids.forEach((c) => leaves.push({ i, b, c, y: 0 }));
  });
  const twoLevel = spec.branches.some((b) => b.children && b.children.length);
  const nLeaves = leaves.length;
  const W = 520;
  const top = 28;
  const H = Math.max(180, nLeaves * 46 + top);
  const rootX = 34;
  const l1X = twoLevel ? 196 : 300;
  const l2X = 330;
  // spread leaves evenly across [top, H-top]
  leaves.forEach((lf, k) => (lf.y = top + (k + 0.5) * ((H - 2 * top) / nLeaves)));
  const rootY = H / 2;
  const l1nodes = spec.branches.map((b, i) => {
    const ys = leaves.filter((lf) => lf.i === i).map((lf) => lf.y);
    return { i, b, y: ys.reduce((a, c) => a + c, 0) / ys.length };
  });

  const branch = (x1: number, y1: number, x2: number, y2: number, prob: string, hot: boolean) => (
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={hot ? ACCENT : INK} strokeWidth={hot ? 2.2 : 1.4} />
      <TexLabel tex={prob} x={x1 + (x2 - x1) * 0.5} y={y1 + (y2 - y1) * 0.5 - 9} size={12.5} color={hot ? ACCENT : INK_SOFT} w={70} chip />
    </>
  );

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* level-1 branches */}
      {l1nodes.map((n) => {
        const hot = !!(n.b.children && n.b.children.every((c) => c.highlight)) || false;
        return (
          <g key={`l1${n.i}`}>
            {branch(rootX + 6, rootY, l1X, n.y, n.b.prob, hot)}
            <TexLabel tex={n.b.label} x={l1X + 16} y={n.y} size={14} color={INK} w={40} />
          </g>
        );
      })}
      {/* level-2 branches */}
      {twoLevel &&
        leaves.map((lf, k) => {
          if (!lf.c) return null;
          const n = l1nodes[lf.i];
          const hot = !!lf.c.highlight;
          return (
            <g key={`l2${k}`}>
              {branch(l1X + 22, n.y, l2X, lf.y, lf.c.prob, hot)}
              <TexLabel tex={lf.c.label} x={l2X + 14} y={lf.y} size={14} color={INK} w={36} />
              {(lf.c.outcome || lf.c.result) && (
                <TexLabel
                  tex={`${lf.c.outcome ? `\\text{${lf.c.outcome}}` : ""}${lf.c.outcome && lf.c.result ? "\\;=\\;" : ""}${lf.c.result ?? ""}`}
                  x={l2X + 44}
                  y={lf.y}
                  align="left"
                  size={13}
                  color={hot ? ACCENT : INK_SOFT}
                  w={150}
                />
              )}
            </g>
          );
        })}
      {/* root node */}
      <circle cx={rootX} cy={rootY} r={3} fill={INK} />
      {/* level-1 nodes */}
      {l1nodes.map((n) => (
        <circle key={`n1${n.i}`} cx={l1X} cy={n.y} r={2.6} fill={INK} />
      ))}
      {twoLevel && leaves.map((lf, k) => (lf.c ? <circle key={`n2${k}`} cx={l2X} cy={lf.y} r={2.6} fill={INK} /> : null))}
    </svg>
  );
}

/* ------------------------------------------------ discrete probability dist */

/** Parse a probability given as raw LaTeX ("\\tfrac{1}{6}", "3/10", "0.2") to a number. */
function probToNum(s: string): number {
  let m = s.match(/^\\[dt]?frac\{(-?\d+(?:\.\d+)?)\}\{(-?\d+(?:\.\d+)?)\}$/);
  if (m) return parseFloat(m[1]) / parseFloat(m[2]);
  m = s.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/);
  if (m) return parseFloat(m[1]) / parseFloat(m[2]);
  const f = parseFloat(s);
  return isFinite(f) ? f : 0;
}

function ProbDistFigure({ spec }: { spec: Extract<DiagramSpec, { kind: "probDist" }> }) {
  const vals = spec.values;
  const n = vals.length;
  const heights = vals.map((v) => probToNum(v.p));
  const pMax = Math.max(...heights, 0.0001);
  const yTicks = niceTicksFromZero(pMax, 5);
  // Guarantee the top tick covers pMax (nice-rounding can fall short, e.g. 1/6 → 0.15).
  const yStep = yTicks.length > 1 ? yTicks[1] - yTicks[0] : pMax;
  while (yTicks[yTicks.length - 1] < pMax - 1e-9) yTicks.push(Number((yTicks[yTicks.length - 1] + yStep).toFixed(6)));
  const yTop = yTicks[yTicks.length - 1];
  const hi = new Set((spec.highlight ?? []).map((h) => String(h)));

  const W = 470;
  const PL = 56;
  const PR = 24;
  const PT = 26;
  const PB = 54;
  const H = 300;
  const axisY = H - PB;
  const plotW = W - PL - PR;
  const xPos = (i: number) => PL + ((i + 0.5) / n) * plotW;
  const y = (v: number) => axisY - (v / yTop) * (axisY - PT);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* horizontal grid at probability ticks */}
      {yTicks.map((t) => (
        <line key={`gh${t}`} x1={PL} x2={W - PR} y1={y(t)} y2={y(t)} stroke={t === 0 ? GRID_STRONG : GRID} strokeWidth={1} />
      ))}

      {/* sticks + dots */}
      {vals.map((v, i) => {
        const hot = hi.has(String(v.x));
        const col = hot ? ACCENT : CURVE;
        return (
          <g key={`s${i}`}>
            <line x1={xPos(i)} x2={xPos(i)} y1={axisY} y2={y(heights[i])} stroke={col} strokeWidth={hot ? 2.6 : 2} />
            <circle cx={xPos(i)} cy={y(heights[i])} r={hot ? 4 : 3.2} fill={col} />
            {/* probability label above each stick */}
            <TexLabel tex={v.p} x={xPos(i)} y={y(heights[i]) - 12} size={12} color={hot ? ACCENT : INK_SOFT} w={64} />
          </g>
        );
      })}

      {/* y-axis */}
      <line x1={PL} x2={PL} y1={PT - 10} y2={axisY} stroke={INK} strokeWidth={1.4} />
      <VArrow x={PL} yTop={PT - 10} />
      {yTicks.map((t) => (
        <g key={`yt${t}`}>
          <line x1={PL - 4} x2={PL} y1={y(t)} y2={y(t)} stroke={INK} strokeWidth={1.1} />
          <text x={PL - 8} y={y(t) + 4} textAnchor="end" fontFamily={SERIF} fontSize={12} fill={INK_SOFT}>{fmtNum(t)}</text>
        </g>
      ))}

      {/* x-axis */}
      <line x1={PL} x2={W - PR} y1={axisY} y2={axisY} stroke={INK} strokeWidth={1.4} />
      <AxisArrows x1={PL} x2={W - PR} y={axisY} />
      {vals.map((v, i) => (
        <g key={`xt${i}`}>
          <line x1={xPos(i)} x2={xPos(i)} y1={axisY} y2={axisY + 4} stroke={INK} strokeWidth={1.1} />
          <TexLabel tex={String(v.x)} x={xPos(i)} y={axisY + 16} size={12.5} color={INK_SOFT} w={48} />
        </g>
      ))}

      {/* axis titles (rendered as math so P, X render italic) */}
      <TexLabel tex={spec.yAxisLabel ?? "P(X = x)"} x={PL - 4} y={PT - 14} align="left" size={12.5} color={INK_SOFT} w={120} />
      <TexLabel tex={spec.xAxisLabel ?? "x"} x={(PL + W - PR) / 2} y={axisY + 38} size={13} color={INK_SOFT} w={120} />
    </svg>
  );
}

/* ------------------------------------------------------------- mechanics */

type MechSpec = Extract<DiagramSpec, { kind: "mechanics" }>;
type MechScene<S extends string> = Extract<MechSpec, { scene: S }>;

const STEEL = "#e5e7eb"; // body fill
const STEEL_DK = "#cbd5e1"; // body fill (second shade)

/** Raw-LaTeX label placed in the SVG (no texify — the caller writes exact TeX). */
function MLabel({
  tex,
  x,
  y,
  size = 14,
  color = INK,
  align = "center",
  w = 120,
  chip = false,
}: {
  tex: string;
  x: number;
  y: number;
  size?: number;
  color?: string;
  align?: "center" | "left" | "right";
  w?: number;
  chip?: boolean;
}) {
  if (!tex) return null;
  const html = katex.renderToString(tex, { throwOnError: false, strict: false, output: "html", displayMode: false });
  const h = /frac|_|\^/.test(tex) ? size * 2 : size * 1.55;
  const left = align === "center" ? x - w / 2 : align === "left" ? x : x - w;
  const justify = align === "center" ? "center" : align === "left" ? "flex-start" : "flex-end";
  return (
    <foreignObject x={left} y={y - h / 2} width={w} height={h} style={{ overflow: "visible" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: justify, width: `${w}px`, height: `${h}px`, fontSize: `${size}px`, lineHeight: 1, color }}>
        <span style={chip ? { background: "rgba(255,255,255,0.9)", padding: "0 3px", borderRadius: 3 } : undefined} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </foreignObject>
  );
}

/** A vector arrow with a clean head at (x2,y2). */
function Vec({ x1, y1, x2, y2, color = INK, width = 1.8, dashed = false }: { x1: number; y1: number; x2: number; y2: number; color?: string; width?: number; dashed?: boolean }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const hs = 7;
  const a1 = ang + Math.PI - 0.42;
  const a2 = ang + Math.PI + 0.42;
  return (
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dashed ? "5 3" : undefined} />
      <path
        d={`M ${x2 + hs * Math.cos(a1)} ${y2 + hs * Math.sin(a1)} L ${x2} ${y2} L ${x2 + hs * Math.cos(a2)} ${y2 + hs * Math.sin(a2)}`}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
}

/** A pulley wheel with a hub. */
function Pulley({ cx, cy, r = 15 }: { cx: number; cy: number; r?: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r={r} fill="#ffffff" stroke={INK} strokeWidth={1.8} />
      <circle cx={cx} cy={cy} r={2.4} fill={INK} />
    </>
  );
}

/** A fixed surface: a solid line with short 45° hatch ticks on one side. */
function Hatch({ x1, x2, y, dir = "down", n = 14 }: { x1: number; x2: number; y: number; dir?: "up" | "down"; n?: number }) {
  const dy = dir === "down" ? 7 : -7;
  const ticks: React.ReactNode[] = [];
  for (let i = 0; i < n; i++) {
    const x = x1 + ((x2 - x1) * (i + 0.5)) / n;
    ticks.push(<line key={i} x1={x} y1={y} x2={x - 7} y2={y + dy} stroke={INK_SOFT} strokeWidth={1} />);
  }
  return (
    <>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={INK} strokeWidth={1.6} />
      {ticks}
    </>
  );
}

/** Draw a force arrow anchored at a body edge, pointing outward, with its label past the tip. */
function ForceArrow({ x, y, dir, len = 34, label, color = INK, accent = false }: { x: number; y: number; dir: "up" | "down" | "left" | "right"; len?: number; label: string; color?: string; accent?: boolean }) {
  const col = accent ? ACCENT : color;
  const w = accent ? 2.4 : 1.8;
  const d = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[dir];
  const x2 = x + d[0] * len;
  const y2 = y + d[1] * len;
  // label just beyond the tip, offset off the shaft
  const lx = dir === "left" ? x2 - 4 : dir === "right" ? x2 + 4 : x2;
  const ly = dir === "up" ? y2 - 10 : dir === "down" ? y2 + 10 : y2 - 11;
  const lalign = dir === "left" ? "right" : dir === "right" ? "left" : "center";
  return (
    <>
      <Vec x1={x} y1={y} x2={x2} y2={y2} color={col} width={w} />
      <MLabel tex={label} x={lx} y={ly} size={13} color={col} align={lalign as "left" | "right" | "center"} w={90} />
    </>
  );
}

/* --- scene: Atwood machine (two masses, one pulley) --- */
function AtwoodFigure({ spec }: { spec: MechScene<"atwood"> }) {
  const W = 340;
  const H = 320;
  const cx = W / 2;
  const ceilingY = 24;
  const pr = 20;
  const pcy = 78;
  const boxW = 40;
  const boxH = 40;
  const lx = cx - pr; // left string x (left tangent)
  const rx = cx + pr; // right string x
  const mid = 150;
  const off = 34;
  const leftTop = spec.descending === "left" ? mid + off : spec.descending === "right" ? mid - off : mid;
  const rightTop = spec.descending === "right" ? mid + off : spec.descending === "left" ? mid - off : mid;
  const beam = spec.mount === "beam";

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* ceiling / beam + mount */}
      {beam ? <rect x={cx - 60} y={ceilingY} width={120} height={12} fill={STEEL_DK} stroke={INK} strokeWidth={1.4} /> : <Hatch x1={cx - 70} x2={cx + 70} y={ceilingY} dir="up" />}
      <line x1={cx} y1={beam ? ceilingY + 12 : ceilingY} x2={cx} y2={pcy - pr} stroke={INK} strokeWidth={1.6} />
      <Pulley cx={cx} cy={pcy} r={pr} />

      {/* strings */}
      <line x1={lx} y1={pcy} x2={lx} y2={leftTop} stroke={INK} strokeWidth={1.4} strokeDasharray={spec.slackSide === "left" ? "5 3" : undefined} />
      <line x1={rx} y1={pcy} x2={rx} y2={rightTop} stroke={INK} strokeWidth={1.4} strokeDasharray={spec.slackSide === "right" ? "5 3" : undefined} />

      {/* masses */}
      <rect x={lx - boxW / 2} y={leftTop} width={boxW} height={boxH} rx={4} fill={STEEL} stroke={INK} strokeWidth={1.6} />
      <rect x={rx - boxW / 2} y={rightTop} width={boxW} height={boxH} rx={4} fill={STEEL} stroke={INK} strokeWidth={1.6} />
      <MLabel tex={spec.left.label} x={lx} y={leftTop + boxH / 2} size={13} w={boxW + 30} />
      <MLabel tex={spec.right.label} x={rx} y={rightTop + boxH / 2} size={13} w={boxW + 30} />

      {/* weights */}
      {spec.showWeights && (
        <>
          <ForceArrow x={lx} y={leftTop + boxH} dir="down" len={26} label={spec.left.label.replace(/\\,\\text\{kg\}/, "g")} />
          <ForceArrow x={rx} y={rightTop + boxH} dir="down" len={26} label={spec.right.label.replace(/\\,\\text\{kg\}/, "g")} />
        </>
      )}

      {/* acceleration arrows */}
      {spec.descending === "left" && (
        <>
          <ForceArrow x={lx - boxW / 2 - 12} y={leftTop + boxH / 2} dir="down" len={30} label="a" accent />
          <ForceArrow x={rx + boxW / 2 + 12} y={rightTop + boxH / 2} dir="up" len={30} label="a" accent />
        </>
      )}
      {spec.descending === "right" && (
        <>
          <ForceArrow x={rx + boxW / 2 + 12} y={rightTop + boxH / 2} dir="down" len={30} label="a" accent />
          <ForceArrow x={lx - boxW / 2 - 12} y={leftTop + boxH / 2} dir="up" len={30} label="a" accent />
        </>
      )}
    </svg>
  );
}

/* --- scene: mass on a table, string over an edge pulley, hanging mass --- */
function TablePulleyFigure({ spec }: { spec: MechScene<"tablePulley"> }) {
  const W = 420;
  const H = 300;
  const flip = spec.pulleySide === "left";
  const Ts = 132; // table surface y
  const tableL = 44;
  const tableR = 320;
  const edgeX = tableR; // pulley at right edge (mirrored below if flip)
  const pr = 13;
  const boxW = 56;
  const boxH = 34;
  const aCx = (tableL + tableR) / 2 - 26;
  const stringY = Ts - boxH / 2;
  const Btop = Ts + 54;
  const Bh = 36;

  const inner = (
    <>
      {/* table top + legs (fixed) */}
      <Hatch x1={tableL} x2={tableR} y={Ts} dir="down" n={16} />
      <line x1={tableL + 14} y1={Ts} x2={tableL + 14} y2={Ts + 66} stroke={INK} strokeWidth={1.6} />
      <line x1={tableR - 14} y1={Ts} x2={tableR - 14} y2={Ts + 66} stroke={INK} strokeWidth={1.6} />
      {/* rough surface texture */}
      {spec.table.rough &&
        Array.from({ length: 12 }).map((_, i) => {
          const x = aCx - boxW / 2 + (boxW * i) / 11;
          return <line key={i} x1={x} y1={Ts} x2={x - 4} y2={Ts - 4} stroke={INK_SOFT} strokeWidth={0.9} />;
        })}

      {/* mass A on the table */}
      <rect x={aCx - boxW / 2} y={Ts - boxH} width={boxW} height={boxH} rx={4} fill={STEEL} stroke={INK} strokeWidth={1.6} />
      <MLabel tex={spec.table.label} x={aCx} y={Ts - boxH / 2} size={13} w={boxW + 20} />

      {/* pulley + string */}
      <Pulley cx={edgeX} cy={stringY} r={pr} />
      <line x1={aCx + boxW / 2} y1={stringY} x2={edgeX} y2={stringY} stroke={INK} strokeWidth={1.4} />
      <line x1={edgeX + pr} y1={stringY} x2={edgeX + pr} y2={Btop} stroke={INK} strokeWidth={1.4} />

      {/* hanging mass B */}
      <rect x={edgeX + pr - boxW / 2} y={Btop} width={boxW} height={Bh} rx={4} fill={STEEL} stroke={INK} strokeWidth={1.6} />
      <MLabel tex={spec.hanging.label} x={edgeX + pr} y={Btop + Bh / 2} size={13} w={boxW + 20} />

      {/* tension arrows */}
      {spec.showTension && (
        <>
          <ForceArrow x={aCx + boxW / 2 + 2} y={stringY} dir="right" len={26} label="T" />
          <ForceArrow x={edgeX + pr} y={Btop - 2} dir="up" len={26} label="T" />
        </>
      )}
      {/* weights */}
      {spec.showWeights && <ForceArrow x={edgeX + pr} y={Btop + Bh} dir="down" len={28} label={spec.hanging.label.replace(/\\,\\text\{kg\}/, "g")} />}
    </>
  );

  // mirror horizontally for a left-edge pulley
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {flip ? <g transform={`translate(${W},0) scale(-1,1)`}>{inner}</g> : inner}
    </svg>
  );
}

/* --- scene: a horizontal row of connected bodies --- */
function TrainFigure({ spec }: { spec: MechScene<"train"> }) {
  const W = 470;
  const groundY = 188;
  const showGround = spec.ground !== false;
  const shapeW: Record<string, number> = { car: 66, engine: 66, trailer: 56, block: 46, particle: 20 };
  const shapeH: Record<string, number> = { car: 42, engine: 46, trailer: 36, block: 34, particle: 20 };
  const gap = 30;
  const bodies = spec.bodies;
  const widths = bodies.map((b) => shapeW[b.shape ?? "block"]);
  const connectors = spec.connectors ?? bodies.slice(1).map(() => "string" as const);
  // contact connectors mean the two bodies touch (no gap)
  const gaps: number[] = bodies.slice(1).map((_, i) => (connectors[i] === "contact" ? 0 : gap));
  const totalW = widths.reduce((a, c) => a + c, 0) + gaps.reduce((a, c) => a + c, 0);
  let cursor = (W - totalW) / 2;
  const rects = bodies.map((b, i) => {
    const w = widths[i];
    const h = shapeH[b.shape ?? "block"];
    const x = cursor;
    cursor += w + (gaps[i] ?? 0);
    return { x, w, h, top: groundY - h, cxv: x + w / 2, cy: groundY - h / 2, b };
  });

  const wheel = (cx: number, cy: number) => <circle cx={cx} cy={cy} r={5} fill="#ffffff" stroke={INK} strokeWidth={1.5} />;

  return (
    <svg viewBox={`0 0 ${W} ${H_TRAIN}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* ground */}
      {showGround && <Hatch x1={20} x2={W - 20} y={groundY} dir="down" n={22} />}

      {/* connectors */}
      {rects.slice(1).map((r, i) => {
        const l = rects[i];
        const y = groundY - Math.min(l.h, r.h) / 2;
        const x1 = l.x + l.w;
        const x2 = r.x;
        const c = connectors[i];
        if (c === "contact") return null;
        if (c === "rod" || c === "bar" || c === "coupling") {
          return (
            <g key={i}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke={INK} strokeWidth={2.4} />
              <line x1={x1} y1={y - 4} x2={x1} y2={y + 4} stroke={INK} strokeWidth={1.6} />
              <line x1={x2} y1={y - 4} x2={x2} y2={y + 4} stroke={INK} strokeWidth={1.6} />
            </g>
          );
        }
        return <line key={i} x1={x1} y1={y} x2={x2} y2={y} stroke={INK} strokeWidth={1.4} />;
      })}

      {/* bodies */}
      {rects.map((r, i) => {
        const shape = r.b.shape ?? "block";
        if (shape === "particle") {
          return (
            <g key={i}>
              <circle cx={r.cxv} cy={groundY - 10} r={9} fill={INK} />
              <MLabel tex={r.b.label} x={r.cxv} y={groundY - 30} size={13} w={60} />
            </g>
          );
        }
        return (
          <g key={i}>
            <rect x={r.x} y={r.top} width={r.w} height={r.h} rx={5} fill={i % 2 ? STEEL_DK : STEEL} stroke={INK} strokeWidth={1.6} />
            <MLabel tex={r.b.label} x={r.cxv} y={r.cy} size={13} w={r.w + 16} />
            {(shape === "car" || shape === "engine" || shape === "trailer") && (
              <>
                {wheel(r.x + r.w * 0.24, groundY)}
                {wheel(r.x + r.w * 0.76, groundY)}
              </>
            )}
          </g>
        );
      })}

      {/* forces: vertical ones on the body; horizontal ones drawn above the body
          (staggered by direction) with a light leader, so they never overlap
          neighbouring bodies or the connectors — standard textbook style. */}
      {(spec.forces ?? []).map((f, i) => {
        const r = rects[f.body];
        if (!r) return null;
        if (f.dir === "up") return <ForceArrow key={i} x={r.cxv} y={r.top} dir="up" len={32} label={f.label} accent={f.accent} />;
        if (f.dir === "down") return <ForceArrow key={i} x={r.cxv} y={groundY} dir="down" len={30} label={f.label} accent={f.accent} />;
        const col = f.accent ? ACCENT : INK;
        const level = f.dir === "left" ? r.top - 36 : r.top - 14;
        const endX = f.dir === "right" ? r.cxv + 36 : r.cxv - 36;
        return (
          <g key={i}>
            <line x1={r.cxv} y1={r.top} x2={r.cxv} y2={level} stroke={col} strokeWidth={1} strokeDasharray="2 2" opacity={0.5} />
            <Vec x1={r.cxv} y1={level} x2={endX} y2={level} color={col} width={f.accent ? 2.4 : 1.8} />
            <MLabel tex={f.label} x={f.dir === "right" ? endX + 4 : endX - 4} y={level - 10} align={f.dir === "right" ? "left" : "right"} size={13} color={col} w={92} />
          </g>
        );
      })}

      {/* acceleration */}
      {spec.accel && (
        <ForceArrow x={spec.accel.dir === "right" ? W - 90 : 90} y={28} dir={spec.accel.dir} len={44} label={spec.accel.label ?? "a"} accent />
      )}
    </svg>
  );
}

/* --- scene: a lift on a cable, optionally with a person --- */
function LiftFigure({ spec }: { spec: MechScene<"lift"> }) {
  const W = 300;
  const H = 340;
  const cx = W / 2;
  const ceilingY = 22;
  const carX = cx - 66;
  const carTop = 116;
  const carW = 132;
  const carH = 150;
  const floorY = carTop + carH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }} role="img" preserveAspectRatio="xMidYMid meet">
      {/* ceiling + cable */}
      {spec.cable && (
        <>
          <Hatch x1={cx - 54} x2={cx + 54} y={ceilingY} dir="up" />
          <line x1={cx} y1={ceilingY} x2={cx} y2={carTop} stroke={INK} strokeWidth={1.5} />
        </>
      )}

      {/* the car */}
      <rect x={carX} y={carTop} width={carW} height={carH} rx={6} fill="#ffffff" stroke={INK} strokeWidth={2} />
      <line x1={carX + 6} y1={floorY - 6} x2={carX + carW - 6} y2={floorY - 6} stroke={INK_SOFT} strokeWidth={1.2} />

      {/* person */}
      {spec.person && (
        <g stroke={INK} strokeWidth={1.8} fill="none" strokeLinecap="round">
          <circle cx={cx} cy={carTop + 54} r={10} fill={STEEL} />
          <line x1={cx} y1={carTop + 64} x2={cx} y2={floorY - 34} />
          <line x1={cx} y1={carTop + 74} x2={cx - 16} y2={carTop + 92} />
          <line x1={cx} y1={carTop + 74} x2={cx + 16} y2={carTop + 92} />
          <line x1={cx} y1={floorY - 34} x2={cx - 14} y2={floorY - 8} />
          <line x1={cx} y1={floorY - 34} x2={cx + 14} y2={floorY - 8} />
        </g>
      )}

      {/* cable tension */}
      {spec.cable && <ForceArrow x={cx} y={carTop} dir="up" len={40} label={spec.cable} accent />}
      {/* reaction on the person from the floor */}
      {spec.reaction && spec.person && <ForceArrow x={cx + 30} y={floorY - 8} dir="up" len={40} label={spec.reaction} />}
      {/* weight */}
      {spec.weight && <ForceArrow x={spec.person ? cx : cx} y={spec.person ? carTop + 66 : floorY} dir="down" len={40} label={spec.weight} />}
      {/* acceleration */}
      {spec.accel && <ForceArrow x={carX + carW + 34} y={carTop + carH / 2} dir={spec.accel.dir} len={44} label={spec.accel.label ?? "a"} accent />}
    </svg>
  );
}

const H_TRAIN = 236;

function MechanicsFigure({ spec }: { spec: MechSpec }) {
  switch (spec.scene) {
    case "atwood":
      return <AtwoodFigure spec={spec} />;
    case "tablePulley":
      return <TablePulleyFigure spec={spec} />;
    case "train":
      return <TrainFigure spec={spec} />;
    case "lift":
      return <LiftFigure spec={spec} />;
    default:
      return null;
  }
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

  if (spec.kind === "image") {
    return (
      <Plate caption={spec.caption} alt={spec.alt} className={className}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={spec.src} alt={spec.alt} style={{ width: "100%", height: "auto", display: "block" }} />
      </Plate>
    );
  }

  let body: React.ReactNode;
  if (spec.kind === "parabolaRegion") body = <ParabolaRegion spec={spec} />;
  else if (spec.kind === "discriminantTriad") body = <DiscriminantTriad spec={spec} />;
  else if (spec.kind === "boxPlot") body = <BoxPlotFigure spec={spec} />;
  else if (spec.kind === "histogram") body = <HistogramFigure spec={spec} />;
  else if (spec.kind === "cumulativeFrequency") body = <CumulativeFrequencyFigure spec={spec} />;
  else if (spec.kind === "scatter") body = <ScatterFigure spec={spec} />;
  else if (spec.kind === "venn2") body = <Venn2Figure spec={spec} />;
  else if (spec.kind === "venn3") body = <Venn3Figure spec={spec} />;
  else if (spec.kind === "probTree") body = <ProbTreeFigure spec={spec} />;
  else if (spec.kind === "probDist") body = <ProbDistFigure spec={spec} />;
  else if (spec.kind === "mechanics") body = <MechanicsFigure spec={spec} />;
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
