"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { MathText, MathBlock } from "@/components/math";
import { DifficultyBadge } from "@/components/ui";

const steps = [
  { d: "Factorise the quadratic.", w: "x^2 - 5x + 6 = (x-2)(x-3)" },
  { d: "Apply the zero-product rule.", w: "x - 2 = 0 \\ \\text{ or } \\ x - 3 = 0" },
  { d: "Solve each equation.", w: "x = 2 \\ \\text{ or } \\ x = 3" },
];

export function HeroPreview() {
  return (
    <div className="relative">
      {/* floating chips */}
      <motion.div
        className="absolute -left-6 top-10 z-20 hidden sm:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Answer verified
        </div>
      </motion.div>
      <motion.div
        className="absolute -right-4 bottom-16 z-20 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -2 }}
      >
        <div className="glass flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold">
          <Sparkles className="h-4 w-4 text-violet-300" /> KaTeX typeset
        </div>
      </motion.div>

      <motion.div
        whileHover={{ rotateX: 0, rotateY: 0 }}
        style={{ transformPerspective: 1200 }}
        className="glass card-glow relative rounded-4xl p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">quadratics · q001</span>
          <DifficultyBadge level="Easy" />
        </div>

        <p className="mt-4 text-[15px] font-medium leading-relaxed text-foreground">
          <MathText text="Solve the equation $x^2 - 5x + 6 = 0$ by factorising." />
        </p>

        <div className="mt-5 space-y-2.5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.25, duration: 0.5 }}
              className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-sky-500 text-[11px] font-bold text-white">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{s.d}</p>
                <div className="mt-1 text-sm text-foreground">
                  <MathBlock tex={s.w} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.07] p-3"
        >
          <div className="text-[11px] font-semibold uppercase tracking-widest text-emerald-300/80">Final answer</div>
          <div className="mt-1 text-sm text-foreground">
            <MathText text="$x = 2$ or $x = 3$" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
