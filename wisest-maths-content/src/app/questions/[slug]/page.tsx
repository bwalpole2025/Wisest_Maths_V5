import { Suspense } from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getSubtopicBySlug, subtopics } from "@/lib/question-summaries";
import { parentTopicForSubtopicId } from "@/lib/curriculum";
import { loadSubtopic } from "@/data/questions/registry";
import { AppLink } from "@/components/app-link";
import { QuestionListSkeleton } from "@/components/link-skeletons";
import { Reveal } from "@/components/reveal";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const QuestionList = dynamic(
  () => import("@/components/question-list").then((m) => m.QuestionList),
  { loading: () => <QuestionListSkeleton /> },
);

export function generateStaticParams() {
  return subtopics.map((s) => ({ slug: s.slug }));
}

export default async function SubtopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const subtopic = getSubtopicBySlug(slug);
  if (!subtopic) notFound();

  const questions = await loadSubtopic(slug);
  const parentTopic = parentTopicForSubtopicId(subtopic.id);
  const backHref = parentTopic?.href ?? "/questions";
  const backLabel = parentTopic?.name ?? "Question Bank";

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <Reveal>
          <AppLink href={backHref} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> {backLabel}
          </AppLink>
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
              <h1 className="mt-1 font-serif text-3xl font-normal tracking-tight text-landing-navy sm:text-4xl">{subtopic.name}</h1>
              <p className="mt-2 max-w-xl text-muted-foreground">{subtopic.blurb}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-black/[0.08] bg-landing-light px-3 py-1 text-sm font-semibold text-landing-navy">{subtopic.count} questions</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">{subtopic.easy} Easy</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">{subtopic.intermediate} Intermediate</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700 ring-1 ring-inset ring-rose-200">{subtopic.hard} Hard</span>
          </div>
        </Reveal>

        <div className="mt-12">
          <Suspense fallback={<QuestionListSkeleton />}>
            <QuestionList questions={questions} />
          </Suspense>
        </div>
      </section>

      <Footer />
    </>
  );
}
