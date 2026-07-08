import { subtopics } from "@/lib/questions";
import { Reveal } from "@/components/reveal";
import { LandingFeaturesPanel } from "@/components/landing/landing-features-panel";

export function LandingFeatures() {
  const searchItems = subtopics.map((s) => ({
    slug: s.slug,
    name: s.name,
    topic: s.topic,
    level: s.level,
    blurb: s.blurb,
    count: s.count,
    gradient: s.gradient,
  }));

  return (
    <section className="landing-section pointer-events-none relative z-20 -mt-14 bg-landing-light pb-28 pt-4 sm:-mt-20 sm:pb-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <LandingFeaturesPanel items={searchItems} />
        </Reveal>
      </div>
    </section>
  );
}
