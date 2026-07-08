import Link from "next/link";
import { ArrowRight, BookOpen, Search, Sparkles, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";

const features = [
  {
    icon: BookOpen,
    color: "bg-[#e8f5e9] text-[#2e7d32]",
    title: "Understand",
    body: "Every step explained with calm, intuitive reasoning — the working and the why behind it.",
  },
  {
    icon: Target,
    color: "bg-[#fff8e1] text-[#f9a825]",
    title: "Practice",
    body: "Exam-style questions at Easy, Intermediate and Hard — each with the right depth of working.",
  },
  {
    icon: Sparkles,
    color: "bg-[#e3f2fd] text-[#1565c0]",
    title: "Master",
    body: "Full curriculum coverage with machine-verified answers, so what you learn is correct.",
  },
];

export function LandingFeatures() {
  return (
    <section className="landing-section relative z-20 -mt-14 bg-landing-light pb-28 pt-4 sm:-mt-20 sm:pb-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="landing-feature-card overflow-hidden rounded-[1.35rem]">
            <div className="flex border-b border-black/[0.06] px-8 pt-7 sm:px-10">
              <span className="border-b-2 border-landing-navy pb-4 pr-8 text-sm font-semibold text-landing-navy">
                The gist
              </span>
              <span className="pb-4 text-sm font-medium text-landing-navy/40">Discover</span>
            </div>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-black/[0.06] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-landing-navy/40">
                  Features
                </p>
                <div className="mt-8 space-y-3">
                  {features.map((f) => (
                    <div
                      key={f.title}
                      className="flex gap-4 rounded-2xl p-4 transition-colors hover:bg-landing-sky/35 sm:p-5"
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${f.color}`}
                      >
                        <f.icon className="h-[18px] w-[18px]" />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-[15px] font-semibold text-landing-navy sm:text-base">
                          {f.title}
                        </h3>
                        <p className="mt-2 text-[13px] leading-[1.65] text-landing-navy/55 sm:text-sm">
                          {f.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-landing-navy/40">
                  Discover
                </p>
                <div className="mt-8 rounded-2xl border border-black/[0.08] bg-[#f8f9fc] p-4">
                  <div className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-3">
                    <Search className="h-4 w-4 shrink-0 text-landing-navy/30" />
                    <span className="text-[13px] text-landing-navy/40 sm:text-sm">
                      Search subtopics, topics, or concepts…
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 text-landing-electric" />
                    <span className="text-sm font-semibold text-landing-navy">Get answers</span>
                  </div>
                  <p className="mt-3 text-sm leading-[1.65] text-landing-navy/55">
                    Browse the full A-Level Maths curriculum with worked solutions for every
                    question.
                  </p>
                  <Link
                    href="/curriculum"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-landing-electric hover:text-landing-blue"
                  >
                    Open curriculum
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
