export type Difficulty = "Easy" | "Intermediate" | "Hard";

/* ------------------------------------------------------------- mechanics */

/** Direction of a force / motion arrow in a mechanics figure. */
export type MechDir = "up" | "down" | "left" | "right";

/** A labelled mass. `label` is raw LaTeX (e.g. "5\\,\\text{kg}", "m_A"). */
export interface MechMass {
  label: string;
}

/** One body in a horizontal "train" of connected bodies. */
export interface MechBody {
  /** Raw-LaTeX label drawn on the body (e.g. "A", "2\\,\\text{kg}"). */
  label: string;
  /** Visual style. Default "block". */
  shape?: "car" | "engine" | "trailer" | "block" | "particle";
}

/** How two consecutive bodies are joined. */
export type MechConnector = "string" | "rod" | "bar" | "coupling" | "contact";

/** An external force arrow acting on a body in a "train" scene. */
export interface MechForce {
  /** Index into `bodies` the force acts on. */
  body: number;
  dir: MechDir;
  /** Raw-LaTeX label (e.g. "T", "3000\\,\\text{N}", "\\mu R"). */
  label: string;
  /** Draw in the blue accent — the force being solved for. */
  accent?: boolean;
}

/** The four connected-particles diagram archetypes. */
export type MechScene =
  | {
      /** Two masses hanging either side of a single fixed pulley (Atwood machine). */
      scene: "atwood";
      /** Pulley mount. Default "ceiling". */
      mount?: "ceiling" | "beam";
      left: MechMass;
      right: MechMass;
      /** Which mass is accelerating downward — drawn with accent motion arrows. */
      descending?: "left" | "right";
      /** Draw the weight arrow under each mass. */
      showWeights?: boolean;
      /** One string segment hangs slack (e.g. after a mass lands) — drawn dashed. */
      slackSide?: "left" | "right";
    }
  | {
      /** A mass on a horizontal table joined by a string over an edge pulley to a hanging mass. */
      scene: "tablePulley";
      table: MechMass & { rough?: boolean };
      hanging: MechMass;
      /** Which edge the pulley sits at. Default "right". */
      pulleySide?: "left" | "right";
      /** Draw tension arrows (T) on both string segments. */
      showTension?: boolean;
      /** Draw weight arrows under each mass. */
      showWeights?: boolean;
    }
  | {
      /** A row of connected bodies on a surface: car+trailer, engine+trucks, blocks, joined particles. */
      scene: "train";
      bodies: MechBody[];
      /** Connector between consecutive bodies; length = bodies.length − 1. Default all "string". */
      connectors?: MechConnector[];
      /** External force arrows. */
      forces?: MechForce[];
      /** Acceleration arrow drawn above the row. */
      accel?: { dir: "left" | "right"; label?: string };
      /** Draw the ground line + hatching. Default true. */
      ground?: boolean;
    }
  | {
      /** A lift/elevator: a car on a cable, optionally holding a person. */
      scene: "lift";
      /** Draw a person standing inside the car. */
      person?: boolean;
      /** Cable to the ceiling carrying this tension label (omit ⇒ no cable). */
      cable?: string;
      /** Floor-reaction label on the person (e.g. "R"). */
      reaction?: string;
      /** Weight label (e.g. "mg", "80g"). */
      weight?: string;
      /** Acceleration arrow beside the car. */
      accel?: { dir: "up" | "down"; label?: string };
    };

/**
 * MAFS diagram specs — small, self-contained visual archetypes rendered as SVG
 * by <Diagram>. Attached to a question (`questionDiagram`) or a single solution
 * step (`SolutionStep.diagram`) at the decisive moment. `null` when none.
 */
export type Diagram =
  | {
      kind: "numberLineRay";
      min: number;
      max: number;
      endpoint: number;
      direction: "left" | "right";
      closed: boolean;
      label?: string;
      caption?: string;
      alt: string;
    }
  | {
      kind: "numberLineInterval";
      min: number;
      max: number;
      lower: number;
      upper: number;
      lowerClosed: boolean;
      upperClosed: boolean;
      label?: string;
      caption?: string;
      alt: string;
    }
  | {
      kind: "signFlipMirror";
      min: number;
      max: number;
      beforeEndpoint: number;
      beforeDirection: "left" | "right";
      beforeClosed: boolean;
      beforeLabel: string;
      afterEndpoint: number;
      afterDirection: "left" | "right";
      afterClosed: boolean;
      afterLabel: string;
      caption?: string;
      alt: string;
    }
  | {
      kind: "parabolaRegion";
      r1: number;
      r2: number;
      opensUp: boolean;
      region: "interior" | "exterior";
      rootsClosed: boolean;
      label?: string;
      caption?: string;
      alt: string;
    }
  | {
      kind: "discriminantTriad";
      highlight: Array<"two" | "equal" | "none">;
      caption?: string;
      alt: string;
    }
  | {
      kind: "intersectionStack";
      min: number;
      max: number;
      rows: Array<{
        label: string;
        intervals: Array<{
          from: number | null;
          to: number | null;
          fromClosed?: boolean;
          toClosed?: boolean;
        }>;
        highlight?: boolean;
      }>;
      caption?: string;
      alt: string;
    }
  | {
      /** Horizontal box-and-whisker plot on a single number-line axis. */
      kind: "boxPlot";
      axisMin: number;
      axisMax: number;
      q1: number;
      median: number;
      q3: number;
      /** Whisker ends = smallest / largest values that are NOT outliers. */
      whiskerLow: number;
      whiskerHigh: number;
      /** Values plotted individually as crosses beyond the whiskers. */
      outliers?: number[];
      axisLabel?: string;
      /** Print the five key values beneath the plot. */
      showValues?: boolean;
      caption?: string;
      alt: string;
    }
  | {
      /** Histogram with frequency density on the y-axis (bars may have unequal widths). */
      kind: "histogram";
      bars: Array<{ x0: number; x1: number; freqDensity: number }>;
      xAxisLabel?: string;
      /** Defaults to "frequency density". */
      yAxisLabel?: string;
      caption?: string;
      alt: string;
    }
  | {
      /** Cumulative frequency graph: (upper class boundary, cumulative frequency) points joined up. */
      kind: "cumulativeFrequency";
      /** Ascending in both x and cf. */
      points: Array<{ x: number; cf: number }>;
      /** x-value where cf = 0 (lowest class boundary); prepended as (origin, 0) if given. */
      origin?: number;
      xAxisLabel?: string;
      /** Defaults to "cumulative frequency". */
      yAxisLabel?: string;
      /** Dashed read-off guides: a line at this cf across to the curve then down to the x-axis. */
      readoffs?: Array<{ cf: number; label?: string }>;
      caption?: string;
      alt: string;
    }
  | {
      /** Scatter diagram for bivariate data, with an optional least-squares line and prediction read-off. */
      kind: "scatter";
      /** The plotted bivariate data points. */
      points: Array<{ x: number; y: number }>;
      /** Optional least-squares regression line y = a + b·x, drawn across the visible x-range. */
      line?: { a: number; b: number };
      /** Optional highlighted prediction point with dashed guides to both axes (interpolation/extrapolation). */
      predict?: { x: number; y: number; label?: string };
      /** Optional explicit axis bounds; otherwise derived from the data (with a small margin). */
      xMin?: number;
      xMax?: number;
      yMin?: number;
      yMax?: number;
      xAxisLabel?: string;
      yAxisLabel?: string;
      caption?: string;
      alt: string;
    }
  | {
      /** Two-set Venn diagram inside a universal-set rectangle. Region values are LaTeX (counts or probabilities). */
      kind: "venn2";
      setALabel: string;
      setBLabel: string;
      /** Region contents as raw LaTeX, e.g. "12" or "\\tfrac{3}{10}". Blank string leaves a region empty. */
      onlyA: string;
      both: string;
      onlyB: string;
      outside?: string;
      universalLabel?: string;
      /** Regions to shade with the blue accent. */
      highlight?: Array<"onlyA" | "both" | "onlyB" | "outside">;
      caption?: string;
      alt: string;
    }
  | {
      /** Three-set Venn diagram (8 regions) inside a universal-set rectangle. Region values are LaTeX. */
      kind: "venn3";
      setALabel: string;
      setBLabel: string;
      setCLabel: string;
      onlyA: string;
      onlyB: string;
      onlyC: string;
      /** Pairwise-only regions (in the two named sets but not the third). */
      AB: string;
      AC: string;
      BC: string;
      /** Centre region, in all three. */
      ABC: string;
      outside?: string;
      universalLabel?: string;
      highlight?: Array<"onlyA" | "onlyB" | "onlyC" | "AB" | "AC" | "BC" | "ABC" | "outside">;
      caption?: string;
      alt: string;
    }
  | {
      /** Probability tree, up to two stages. Branch probabilities are raw LaTeX (e.g. "\\tfrac{3}{5}"). */
      kind: "probTree";
      branches: Array<{
        label: string;
        prob: string;
        children?: Array<{
          label: string;
          prob: string;
          /** Optional outcome text + combined probability shown at the leaf. */
          outcome?: string;
          result?: string;
          /** Draw this root→leaf path in the accent colour. */
          highlight?: boolean;
        }>;
      }>;
      caption?: string;
      alt: string;
    }
  | {
      /** Probability distribution of a discrete random variable as a vertical stick/line chart. */
      kind: "probDist";
      /** Each value of X with its probability as raw LaTeX (e.g. "\\tfrac{1}{6}" or "0.2"). */
      values: Array<{ x: number | string; p: string }>;
      /** Defaults to "x". */
      xAxisLabel?: string;
      /** Defaults to "P(X = x)". */
      yAxisLabel?: string;
      /** x-values to draw in the blue accent (e.g. the ones making up an event). */
      highlight?: Array<number | string>;
      caption?: string;
      alt: string;
    }
  | {
      /** General Cartesian function graph on labelled x–y axes: one or more curves,
       *  marked points, asymptotes and an optional y = x mirror line. Used for
       *  "functions and their graphs" and "(further) transformations". */
      kind: "functionGraph";
      /** Viewport in graph coordinates. */
      xMin: number;
      xMax: number;
      yMin: number;
      yMax: number;
      curves: Array<{
        /** Explicit polyline through these points — for lines, piecewise-defined
         *  functions, modulus-of-linear (V shapes) and any bespoke curve. */
        points?: Array<{ x: number; y: number }>;
        /** OR a sampled standard curve  y = a·g(b(x − c)) + d  (the renderer does the maths). */
        fn?: {
          base:
            | "line"
            | "parab"
            | "cubic"
            | "recip"
            | "recipSq"
            | "sqrt"
            | "exp"
            | "ln"
            | "sin"
            | "cos";
          a?: number;
          b?: number;
          c?: number;
          d?: number;
          /** Plot |f(x)| — reflect the part below the x-axis upward. */
          outerAbs?: boolean;
          /** Plot f(|x|) — mirror the x ≥ 0 part into x < 0. */
          innerAbs?: boolean;
        };
        /** ink = given/original (near-black), accent = the answer/transformed (blue), soft = auxiliary. */
        color?: "ink" | "accent" | "soft";
        dashed?: boolean;
        /** TeX label placed near the curve, e.g. "y=f(x)" or "y=|f(x)|". */
        label?: string;
        /** Graph-coordinate anchor for the label (defaults to a curve endpoint). */
        labelAt?: { x: number; y: number };
        /** Open circles at the polyline ends (restricted domain). */
        openStart?: boolean;
        openEnd?: boolean;
      }>;
      /** Marked points: intercepts, vertices, key/invariant coordinates. */
      points?: Array<{
        x: number;
        y: number;
        label?: string;
        /** Hollow (excluded) rather than filled. */
        open?: boolean;
        color?: "ink" | "accent" | "soft";
      }>;
      /** Dashed asymptotes: vertical (x = at) or horizontal (y = at). */
      asymptotes?: Array<{ dir: "v" | "h"; at: number; label?: string }>;
      /** Draw the dashed mirror line y = x (inverse-function questions). */
      mirrorLine?: boolean;
      /** Defaults to "x". */
      xAxisLabel?: string;
      /** Defaults to "y". */
      yAxisLabel?: string;
      /** Optional integer tick spacing overrides (otherwise chosen automatically). */
      xTickStep?: number;
      yTickStep?: number;
      caption?: string;
      alt: string;
    }
  | {
      /** A pre-rendered figure (e.g. a Manim-generated SVG) served from public/. */
      kind: "image";
      /** Path under public/, e.g. "/mechanics/al.y1.mech.forces-newton.q003.svg". */
      src: string;
      caption?: string;
      alt: string;
    }
  | {
      /** Text-only "what to sketch" note for diagrams we don't render as SVG (e.g. bespoke geometry). */
      kind: "descriptive";
      type?: string;
      description: string;
      elements?: unknown[];
      caption?: string;
      alt?: string;
    }
  | ({
      /** A native-SVG mechanics figure (force/pulley/lift diagram). See MechScene. */
      kind: "mechanics";
      caption?: string;
      alt: string;
    } & MechScene);

export interface SolutionStep {
  stepNumber: number;
  description: string;
  workingLatex: string;
  explanation: string;
  diagram: Diagram | null;
}

export interface WorkedSolution {
  steps: SolutionStep[];
  finalAnswer: string;
}

export interface Question {
  id: string;
  level: string;
  topic: string;
  subtopic: string;
  subtopicId: string;
  difficulty: Difficulty;
  marks: number;
  answerType: string;
  tags: string[];
  questionText: string;
  questionDiagram: Diagram | null;
  workedSolution: WorkedSolution;
}
