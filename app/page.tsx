import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { IndustriesMarquee } from "@/components/home/IndustriesMarquee";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { WhyYeast } from "@/components/home/WhyYeast";
import { Applications } from "@/components/home/Applications";
import { FacilityStrip } from "@/components/home/FacilityStrip";
import { LeadershipNote } from "@/components/home/LeadershipNote";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductShowcase />
      <WhyYeast />
      <Applications />
      <FacilityStrip />
      <IndustriesMarquee />
      <LeadershipNote />
      <CtaBand />
    </>
  );
}
