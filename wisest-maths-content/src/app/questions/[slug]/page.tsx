import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { subtopics, getSubtopicBySlug, getQuestionsBySubtopicSlug } from "@/lib/questions";
import { QuestionList } from "@/components/question-list";
import { Reveal } from "@/components/reveal";
import { DifficultyBadge } from "@/components/ui";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return subtopics.map((s) => ({ slug: s.slug }));
}

export default async function SubtopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const subtopic = getSubtopicBySlug(slug);
  const questions = getQuestionsBySubtopicSlug(slug);
  if (!subtopic) notFound();

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <Reveal>
          <Link href="/questions" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Question Bank
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-6 flex items-start gap-4">
            <span className={cn("grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-1 ring-white/20", subtopic.gradient)}>
              <span className="font-display text-lg font-bold">{String(subtopic.order).padStart(2, "0")}</span>
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {subtopic.level} · {subtopic.topic}
              </p>
              <h1 className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">{subtopic.name}</h1>
              <p className="mt-2 max-w-xl text-muted-foreground">{subtopic.blurb}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm font-semibold">{subtopic.count} questions</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/30">{subtopic.easy} Easy</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-semibold text-amber-300 ring-1 ring-inset ring-amber-400/30">{subtopic.intermediate} Intermediate</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-sm font-semibold text-rose-300 ring-1 ring-inset ring-rose-400/30">{subtopic.hard} Hard</span>
          </div>
        </Reveal>

        <div className="mt-12">
          <QuestionList questions={questions} />
        </div>
      </section>

      <Footer />
    </>
  );
}
