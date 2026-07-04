import { getQualifications } from "@/lib/curriculum";
import { Crumbs, LevelHeader, CardGrid, NavCard } from "@/components/curriculum";
import { Footer } from "@/components/footer";

export default function CurriculumPage() {
  const quals = getQualifications();
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <Crumbs trail={[{ label: "Curriculum" }]} />
        <LevelHeader
          eyebrow="Wisest Maths"
          title="Choose your qualification"
          blurb="The whole maths curriculum, broken into modules, topics and subtopics. Every subtopic opens its full question bank with step-by-step worked solutions."
        />
        <CardGrid>
          {quals.map((q, i) => (
            <NavCard
              key={q.slug}
              index={i}
              href={`/curriculum/${q.slug}`}
              grad={q.grad}
              tile={<span className="font-display text-xs font-bold tracking-tight">{q.mono}</span>}
              kicker={q.splitLabels}
              title={q.label}
              blurb={q.blurb}
              foot={`${q.total} subtopics${q.live ? ` · ${q.live} live` : ""}`}
              cta="Open"
            />
          ))}
        </CardGrid>
      </section>
      <Footer />
    </>
  );
}
