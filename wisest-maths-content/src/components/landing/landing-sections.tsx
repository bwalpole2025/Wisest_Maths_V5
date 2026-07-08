import { AppLink } from "@/components/app-link";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { subtopics, stats } from "@/lib/question-summaries";
import { SubtopicCard } from "@/components/subtopic-card";
import { Reveal } from "@/components/reveal";
import { MathText } from "@/components/math";
import { HeroPreview } from "@/components/hero-preview";

const pillars = [
  {
    label: "01 · THE GOAL",
    title: "Understanding should feel effortless.",
    body: "Every solution is written to teach the reasoning — calm, clear, and never Socratic. Students see the working and grasp the intuition behind each step.",
  },
  {
    label: "02 · THE METHOD",
    title: "One elegant step at a time.",
    body: "Questions unfold into numbered steps with KaTeX typesetting, calibrated difficulty, and verified final answers — like a textbook, only nicer.",
    showPreview: true,
  },
  {
    label: "03 · THE RESULT",
    title: "Everyone else gives answers. We teach thinking.",
    body: "Most resources stop at the mark scheme. Wisest Maths is designed to make every idea click — from quadratics to vectors, proofs to probability.",
  },
];

export function LandingSections() {
  return (
    <>
      <section className="landing-section landing-section-y bg-landing-light">
        <div className="mx-auto max-w-6xl space-y-28 sm:space-y-32 lg:space-y-40">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06}>
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  p.showPreview && i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={p.showPreview && i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-landing-navy/45">
                    {p.label}
                  </span>
                  <h2 className="mt-5 max-w-md font-serif text-3xl leading-[1.12] tracking-tight text-landing-navy sm:text-4xl lg:text-[2.65rem]">
                    {p.title}
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-[1.75] text-landing-navy/60 sm:text-[17px]">
                    {p.body}
                  </p>
                </div>
                {p.showPreview && (
                  <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <HeroPreview />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="landing-section border-y border-landing-navy/[0.06] bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-16">
          {[
            { n: stats.total, label: "Questions", icon: Layers },
            { n: stats.subtopics, label: "Subtopics", icon: CheckCircle2 },
            { n: stats.steps.toLocaleString(), label: "Solution steps", icon: CheckCircle2 },
          ].map((s) => (
            <Reveal key={s.label}>
              <div className="text-center">
                <s.icon className="mx-auto h-5 w-5 text-landing-electric" />
                <div className="mt-5 font-serif text-4xl tracking-tight text-landing-navy sm:text-5xl">
                  {s.n}
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-landing-navy/45">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="landing-section landing-section-y bg-landing-light">
        <div className="mx-auto max-w-6xl">
          <Reveal className="landing-section-header flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-landing-navy/45">
                The curriculum
              </span>
              <h2 className="mt-5 font-serif text-3xl leading-[1.12] tracking-tight text-landing-navy sm:text-4xl lg:text-[2.65rem]">
                {stats.subtopics} subtopics, fully solved
              </h2>
            </div>
            <AppLink
              href="/questions"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-landing-navy/55 transition-colors hover:text-landing-navy"
            >
              Browse everything
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </AppLink>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {subtopics.slice(0, 6).map((s, i) => (
              <SubtopicCard key={s.id} subtopic={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section bg-landing-navy px-6 py-28 sm:py-32 lg:py-36">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            Ready to make every step make sense?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-[1.75] text-white/65 sm:mt-8 sm:text-[17px]">
            Pick a subtopic and start with a worked example. The maths renders like a textbook —
            <MathText
              text=" e.g. $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$"
              className="whitespace-nowrap text-white/85"
            />{" "}
            — only nicer.
          </p>
          <AppLink href="/questions" className="landing-lime-btn mt-10 gap-2 sm:mt-12">
            Start solving now
            <ArrowRight className="h-4 w-4" />
          </AppLink>
        </Reveal>
      </section>
    </>
  );
}
