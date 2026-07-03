import Link from "next/link";
import { Library, Layers3, ListChecks, Flame, ArrowRight } from "lucide-react";
import { stats, subtopics } from "@/lib/questions";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/ui";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const tiles = [
  { icon: Library, label: "Total questions", value: stats.total, sub: "fully worked", tint: "from-violet-500/20 to-indigo-500/10 text-violet-300" },
  { icon: Layers3, label: "Subtopics", value: stats.subtopics, sub: "Year 1 Pure", tint: "from-sky-500/20 to-cyan-500/10 text-sky-300" },
  { icon: ListChecks, label: "Solution steps", value: stats.steps.toLocaleString(), sub: "with intuition", tint: "from-emerald-500/20 to-teal-500/10 text-emerald-300" },
  { icon: Flame, label: "Hard questions", value: stats.hard, sub: "for stretch", tint: "from-rose-500/20 to-orange-500/10 text-rose-300" },
];

export default function DashboardPage() {
  const diff = [
    { label: "Easy", value: stats.easy, color: "bg-emerald-400", text: "text-emerald-300" },
    { label: "Intermediate", value: stats.intermediate, color: "bg-amber-400", text: "text-amber-300" },
    { label: "Hard", value: stats.hard, color: "bg-rose-400", text: "text-rose-300" },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <Reveal>
          <SectionLabel>Dashboard</SectionLabel>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Your maths, at a glance
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            An overview of the whole question bank — coverage, difficulty balance and everything ready to solve.
          </p>
        </Reveal>

        {/* stat tiles */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.06}>
              <div className="glass card-glow h-full rounded-3xl p-6">
                <span className={cn("grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br", t.tint)}>
                  <t.icon className="h-5 w-5" />
                </span>
                <div className="mt-5 font-display text-4xl font-bold tracking-tight">{t.value}</div>
                <div className="mt-1 text-sm font-medium">{t.label}</div>
                <div className="text-xs text-muted-foreground">{t.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* difficulty + progress */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass flex h-full flex-col rounded-3xl p-7">
              <h2 className="font-display text-lg font-semibold tracking-tight">Difficulty balance</h2>
              <p className="mt-1 text-sm text-muted-foreground">How the {stats.total} questions are distributed.</p>

              <div className="mt-7 flex h-3 overflow-hidden rounded-full bg-white/[0.06]">
                {diff.map((d) => (
                  <span key={d.label} className={cn(d.color, "opacity-90")} style={{ width: `${(d.value / stats.total) * 100}%` }} />
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {diff.map((d) => (
                  <div key={d.label} className="flex items-center justify-between">
                    <span className="flex items-center gap-2.5 text-sm">
                      <span className={cn("h-2.5 w-2.5 rounded-full", d.color)} />
                      {d.label}
                    </span>
                    <span className="flex items-baseline gap-2">
                      <span className={cn("font-display text-xl font-bold", d.text)}>{d.value}</span>
                      <span className="text-xs text-muted-foreground">{Math.round((d.value / stats.total) * 100)}%</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass flex h-full flex-col rounded-3xl p-7">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-lg font-semibold tracking-tight">Coverage by subtopic</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Each subtopic is complete at 70 questions.</p>
                </div>
                <Link href="/questions" className="hidden items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:flex">
                  All <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 space-y-4">
                {subtopics.map((s) => (
                  <Link key={s.id} href={`/questions/${s.slug}`} className="group block">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium transition-colors group-hover:text-foreground">{s.name}</span>
                      <span className="text-xs text-muted-foreground">{s.count}/70</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                      <div className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-500", s.gradient)} style={{ width: `${(s.count / 70) * 100}%` }} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
