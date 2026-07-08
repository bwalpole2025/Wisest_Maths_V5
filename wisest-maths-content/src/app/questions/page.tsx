import { subtopics, stats } from "@/lib/question-summaries";
import { SubtopicBrowser } from "@/components/subtopic-browser";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/ui";
import { Footer } from "@/components/footer";

export default function QuestionBankPage() {
  const tabs = subtopics.map((s) => ({
    slug: s.slug,
    name: s.name,
    gradient: s.gradient,
    count: s.count,
  }));

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <Reveal>
          <SectionLabel>Question Bank</SectionLabel>
          <h1 className="mt-5 font-serif text-4xl font-normal tracking-tight text-landing-navy sm:text-5xl">
            Every question, fully solved
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Switch between {stats.subtopics} subtopics below — each set of questions is loaded on demand.
            Filter by difficulty or search by keyword, tag or id, then open any one for the full solution.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <SubtopicBrowser tabs={tabs} initialSlug={subtopics[0].slug} />
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
