import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Layers, Gauge, CheckCircle2, Compass } from "lucide-react";
import { subtopics, stats } from "@/lib/questions";
import { SubtopicCard } from "@/components/subtopic-card";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/ui";
import { MathText } from "@/components/math";
import { Footer } from "@/components/footer";
import { HeroPreview } from "@/components/hero-preview";

const features = [
  {
    icon: Layers,
    title: "Full worked solutions",
    body: "Every question unfolds into calm, numbered steps — the working and the intuition behind it.",
  },
  {
    icon: Gauge,
    title: "Calibrated difficulty",
    body: "Easy, Intermediate and Hard, each with the right depth of reasoning and step count.",
  },
  {
    icon: Sparkles,
    title: "Flawless math rendering",
    body: "KaTeX typesets every expression crisply — inline and in beautiful display blocks.",
  },
  {
    icon: CheckCircle2,
    title: "Verified correctness",
    body: "Answers are machine-checked, so what you learn from is right, down to the last sign.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-6 pt-40 sm:pt-48">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <SectionLabel>A-Level Maths · Year 1 Pure</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.03] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Master maths, <br />
                <span className="gradient-text">one elegant step</span> <br />
                at a time.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
                A beautifully crafted bank of {stats.total} exam-style questions with intuitive,
                step-by-step worked solutions — so every idea actually clicks.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/questions"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
                >
                  Explore the question bank
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
                >
                  <Compass className="h-4 w-4" /> View dashboard
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  [stats.total, "Questions"],
                  [stats.subtopics, "Subtopics"],
                  [stats.steps.toLocaleString(), "Solution steps"],
                ].map(([n, l]) => (
                  <div key={l as string}>
                    <div className="font-display text-3xl font-bold tracking-tight">{n}</div>
                    <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={30}>
            <HeroPreview />
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Why it feels different</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Designed for understanding, not just answers
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Each solution is written to teach the reasoning — calm, clear and never Socratic.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="glass card-glow group h-full rounded-3xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-sky-500/10 text-violet-300 transition-colors group-hover:text-violet-200">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SUBTOPICS */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>The curriculum</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {stats.subtopics} subtopics, fully solved
            </h2>
          </div>
          <Link
            href="/questions"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Browse everything
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subtopics.map((s, i) => (
            <SubtopicCard key={s.id} subtopic={s} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-32 max-w-6xl px-6">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-4xl px-8 py-16 text-center sm:px-16">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-500/30 blur-[100px]" />
            <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-sky-500/25 blur-[100px]" />
            <div className="relative">
              <BookOpen className="mx-auto h-8 w-8 text-violet-300" />
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Ready to make every step make sense?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Pick a subtopic and start with a worked example. The maths renders like a textbook —
                <MathText text=" e.g. $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$" className="whitespace-nowrap" /> — only nicer.
              </p>
              <Link
                href="/questions"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                Start solving now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
