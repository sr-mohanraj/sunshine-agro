import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { IndustriesMarquee } from "@/components/home/IndustriesMarquee";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { WhyYeast } from "@/components/home/WhyYeast";
import { Applications } from "@/components/home/Applications";
import { FacilityStrip } from "@/components/home/FacilityStrip";
import { LeadershipNote } from "@/components/home/LeadershipNote";
import { CtaBand } from "@/components/CtaBand";

// Overrides only `description`: the layout's title, OG and Twitter tags stay
// as the shared defaults, but the homepage gets its own tightened snippet
// rather than inheriting company.description, which runs to 258 characters
// and would be truncated mid-sentence in a Google result.
export const metadata: Metadata = {
  description:
    "Inactive dried yeast and feed supplements for aqua, poultry, swine and cattle. ISO 9001:2015 certified manufacturer, Chennai and Erode, since 2003.",
};

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
