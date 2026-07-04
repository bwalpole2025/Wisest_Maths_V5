import { notFound } from "next/navigation";
import { getSplits } from "@/lib/curriculum";
import { Crumbs, LevelHeader, CardGrid, NavCard } from "@/components/curriculum";
import { Footer } from "@/components/footer";

export default async function QualPage({ params }: { params: Promise<{ qual: string }> }) {
  const { qual } = await params;
  const data = getSplits(qual);
  if (!data) notFound();
  const { qual: q, splits } = data;

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-36">
        <Crumbs trail={[{ label: "Curriculum", href: "/curriculum" }, { label: q.label }]} />
        <LevelHeader
          eyebrow={q.label}
          title={q.splitKind === "tier" ? "Choose a tier" : "Choose a year"}
          blurb={q.blurb}
        />
        <CardGrid cols={2}>
          {splits.map((sp, i) => (
            <NavCard
              key={sp.slug}
              index={i}
              href={`/curriculum/${q.slug}/${sp.slug}`}
              grad={sp.grad}
              tile={
                <span className="font-display text-sm font-bold">
                  {q.splitKind === "tier" ? sp.label[0] : sp.slug.replace("year-", "Y")}
                </span>
              }
              kicker={q.label}
              title={sp.label}
              blurb={sp.blurb}
              foot={`${sp.modules} modules · ${sp.subtopics} subtopics${sp.live ? ` · ${sp.live} live` : ""}`}
              cta="Browse"
            />
          ))}
        </CardGrid>
      </section>
      <Footer />
    </>
  );
}
