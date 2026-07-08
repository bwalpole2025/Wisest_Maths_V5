import { LandingHero } from "@/components/landing/landing-hero";
import { LandingFeatures } from "@/components/landing/landing-features";
import { LandingSections } from "@/components/landing/landing-sections";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative z-10">
      <LandingHero />
      <LandingFeatures />
      <LandingSections />
      <Footer />
    </div>
  );
}
