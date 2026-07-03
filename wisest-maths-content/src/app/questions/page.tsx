import { allQuestions, subtopics, stats } from "@/lib/questions";
import { QuestionList } from "@/components/question-list";
import { SubtopicCard } from "@/components/subtopic-card";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/ui";
import { Footer } from "@/components/footer";

export default function QuestionBankPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <Reveal>
          <SectionLabel>Question Bank</SectionLabel>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Every question, fully solved
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Browse {stats.total} questions across {stats.subtopics} subtopics. Filter by difficulty or search by
            keyword, tag or id — then open any one for the full step-by-step solution.
          </p>
        </Reveal>

        {/* subtopic quick-jump */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subtopics.map((s, i) => (
            <SubtopicCard key={s.id} subtopic={s} index={i} />
          ))}
        </div>

        {/* full searchable list */}
        <div className="mt-16">
          <Reveal>
            <h2 className="mb-6 font-display text-2xl font-bold tracking-tight">All questions</h2>
          </Reveal>
          <QuestionList questions={allQuestions} />
        </div>
      </section>

      <Footer />
    </>
  );
}
