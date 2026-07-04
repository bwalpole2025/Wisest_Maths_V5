import { notFound } from "next/navigation";
import { getSubtopics, plural } from "@/lib/curriculum";
import { Crumbs, LevelHeader, CardGrid, SubtopicGridCard } from "@/components/curriculum";
import { Footer } from "@/components/footer";

export default async function TopicPage({
  params,
}: {
  params: Promise<{ qual: string; split: string; module: string; topic: string }>;
}) {
  const { qual, split, module, topic } = await params;
  const data = getSubtopics(qual, split, module, topic);
  if (!data) notFound();
  const { qual: q, split: sp, module: m, topic: t, subtopics } = data;
  const live = subtopics.filter((s) => s.live).length;

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <Crumbs
          trail={[
            { label: "Curriculum", href: "/curriculum" },
            { label: q.label, href: `/curriculum/${q.slug}` },
            { label: sp.label, href: `/curriculum/${q.slug}/${sp.slug}` },
            { label: m.label, href: `/curriculum/${q.slug}/${sp.slug}/${m.slug}` },
            { label: t.name },
          ]}
        />
        <LevelHeader
          eyebrow={`${q.label} · ${sp.label} · ${m.label}`}
          title={t.name}
          blurb={
            live > 0
              ? `${plural(subtopics.length, "subtopic")}. Open a live one for its full bank of 70 exam-style questions with step-by-step worked solutions.`
              : `${plural(subtopics.length, "subtopic")} in this topic — question banks are on the way.`
          }
        />
        <CardGrid>
          {subtopics.map((s, i) => (
            <SubtopicGridCard key={s.id} s={s} index={i} />
          ))}
        </CardGrid>
      </section>
      <Footer />
    </>
  );
}
