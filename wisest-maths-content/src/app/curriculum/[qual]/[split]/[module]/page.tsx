import { notFound } from "next/navigation";
import { getTopics, plural } from "@/lib/curriculum";
import { Crumbs, LevelHeader, CardGrid, NavCard } from "@/components/curriculum";
import { Footer } from "@/components/footer";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ qual: string; split: string; module: string }>;
}) {
  const { qual, split, module } = await params;
  const data = getTopics(qual, split, module);
  if (!data) notFound();
  const { qual: q, split: sp, module: m, topics } = data;

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <Crumbs
          trail={[
            { label: "Curriculum", href: "/curriculum" },
            { label: q.label, href: `/curriculum/${q.slug}` },
            { label: sp.label, href: `/curriculum/${q.slug}/${sp.slug}` },
            { label: m.label },
          ]}
        />
        <LevelHeader
          eyebrow={`${q.label} · ${sp.label} · ${m.label}`}
          title="Topics"
          blurb={`${plural(topics.length, "topic")} in ${m.label}. Open one to see its subtopics and question banks.`}
        />
        <CardGrid prefetchHrefs={topics.map((t) => `/curriculum/${q.slug}/${sp.slug}/${m.slug}/${t.slug}`)}>
          {topics.map((t, i) => (
            <NavCard
              key={t.slug}
              index={i}
              href={`/curriculum/${q.slug}/${sp.slug}/${m.slug}/${t.slug}`}
              grad={t.grad}
              tile={<span className="font-display text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>}
              title={t.name}
              foot={`${plural(t.subtopics, "subtopic")}${t.live ? ` · ${t.live} live` : ""}`}
              cta="Open"
            />
          ))}
        </CardGrid>
      </section>
      <Footer />
    </>
  );
}
