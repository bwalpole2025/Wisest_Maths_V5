import { notFound } from "next/navigation";
import { getModules, plural } from "@/lib/curriculum";
import { Crumbs, LevelHeader, CardGrid, NavCard } from "@/components/curriculum";
import { Footer } from "@/components/footer";

export default async function SplitPage({
  params,
}: {
  params: Promise<{ qual: string; split: string }>;
}) {
  const { qual, split } = await params;
  const data = getModules(qual, split);
  if (!data) notFound();
  const { qual: q, split: sp, modules } = data;

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <Crumbs
          trail={[
            { label: "Curriculum", href: "/curriculum" },
            { label: q.label, href: `/curriculum/${q.slug}` },
            { label: sp.label },
          ]}
        />
        <LevelHeader
          eyebrow={`${q.label} · ${sp.label}`}
          title="Choose a module"
          blurb={`${modules.length} modules. Each holds the topics and subtopics for this part of the course.`}
        />
        <CardGrid>
          {modules.map((m, i) => (
            <NavCard
              key={m.slug}
              index={i}
              href={`/curriculum/${q.slug}/${sp.slug}/${m.slug}`}
              grad={m.grad}
              tile={<span className="text-xl leading-none">{m.glyph}</span>}
              title={m.label}
              foot={`${plural(m.topics, "topic")} · ${plural(m.subtopics, "subtopic")}${m.live ? ` · ${m.live} live` : ""}`}
              cta="Open"
            />
          ))}
        </CardGrid>
      </section>
      <Footer />
    </>
  );
}
