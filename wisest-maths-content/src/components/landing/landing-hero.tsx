import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ParticleGlobe } from "@/components/landing/particle-globe";

export function LandingHero() {
  return (
    <section className="landing-hero-bg relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 bottom-[12%] top-[26%] z-0 sm:bottom-[10%] sm:top-[24%]">
        <ParticleGlobe className="h-full w-full" sizeMultiplier={6} />
      </div>

      <div className="relative z-30 mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center px-6 pb-44 pt-28 text-center sm:px-8 sm:pt-32 lg:pt-36">
        <div className="flex w-full flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-black/20 px-5 py-2 text-[13px] font-medium text-white/85 backdrop-blur-md">
              <span className="rounded-full bg-[#d0f100] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#001033]">
                New
              </span>
              Full A-Level Maths curriculum with worked solutions
            </div>
          </Reveal>

          <Reveal delay={0.07}>
            <h1 className="mt-10 max-w-[16ch] font-serif text-[2.35rem] font-normal leading-[1.08] tracking-[-0.025em] text-white sm:mt-12 sm:max-w-none sm:text-[3.25rem] lg:text-[3.65rem] lg:leading-[1.06]">
              Understand everything that happens after the question.
            </h1>
          </Reveal>

          <Reveal delay={0.13}>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.7] text-white/70 sm:mt-10 sm:text-[17px]">
              Exam-style questions with intuitive, step-by-step worked solutions — so every idea
              actually clicks, not just the final mark.
            </p>
          </Reveal>

          <Reveal delay={0.19}>
            <Link
              href="/questions"
              className="landing-lime-btn mt-10 min-w-[220px] px-9 py-3.5 text-[15px] sm:mt-12"
            >
              Explore the question bank
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-6 pb-14 pt-8 text-center sm:pb-20">
        <Reveal delay={0.28}>
          <p className="font-serif text-[1.75rem] tracking-[-0.02em] text-[#001033]/80 sm:text-[2.1rem]">
            Learn more, stress less.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
