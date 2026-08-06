import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const SPECIES = [
  {
    id: "shrimp",
    name: "Shrimp & Prawns",
    dose: "2–5 kg / ton",
    inclusion: "2.5 – 5.0 % of total feed",
    note: "Survival and FCR through the critical DOC 30–60 window, without live bacteria in the pond.",
  },
  {
    id: "fish",
    name: "Fish",
    dose: "1–3 kg / ton",
    inclusion: "2.5 – 5.0 % of total feed",
    note: "Natural yeast occurrence in healthy fish makes this a low-risk, high-palatability inclusion.",
  },
  {
    id: "poultry",
    name: "Poultry — broilers & layers",
    dose: "1–3 kg / ton",
    inclusion: "1.0 – 2.5 % of total feed",
    note: "Gut integrity and weight gain; the powder survives standard pelleting temperatures.",
  },
  {
    id: "swine",
    name: "Swine — piglets & sows",
    dose: "2–5 kg / ton",
    inclusion: "2.5 – 5.0 % of total feed",
    note: "Post-weaning transition support, with ME swine at 3276 kcal/kg and TDN of 78 %.",
  },
  {
    id: "cattle",
    name: "Cattle — beef & dairy",
    dose: "1–3 kg / ton",
    inclusion: "250 g / head / day",
    note: "Yeast is used in ruminant feeding to reduce oxygen levels in the rumen and stabilise fermentation.",
  },
  {
    id: "pet",
    name: "Pet food — dog & cat",
    dose: "2–5 kg / ton",
    inclusion: "2.5 – 5.0 % of total feed",
    note: "A natural palatant that lifts intake in dry kibble without synthetic flavouring.",
  },
];

export function Applications() {
  return (
    <section className="bg-bone-200 py-20 dark:bg-ink-800 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Dosage & application"
          title="One ingredient, six species, six inclusion rates."
          lead="These are the rates printed on our bags and brochures. Both columns are given because feed millers dose by kg per ton, while integrators and farms often work in percentage of total feed."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-ink-100 bg-bone-100 dark:border-ink-700 dark:bg-ink-900">
          {/* Column headers only make sense at width; on phones each row becomes
              a self-labelling stacked block instead. */}
          <div className="hidden grid-cols-12 gap-4 border-b border-ink-100 px-6 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400 dark:border-ink-700 dark:text-bone-200/40 md:grid">
            <p className="col-span-3">Species</p>
            <p className="col-span-2">kg per ton</p>
            <p className="col-span-3">% of total feed</p>
            <p className="col-span-4">Why it works</p>
          </div>

          <ul className="divide-y divide-ink-100 dark:divide-ink-700">
            {SPECIES.map((s, i) => (
              <Reveal
                as="li"
                key={s.id}
                delay={i * 0.05}
                className="grid gap-2 px-5 py-5 transition-colors hover:bg-bone-200/60 dark:hover:bg-white/[0.03] sm:px-6 md:grid-cols-12 md:items-center md:gap-4"
              >
                <p className="font-display text-[15px] font-bold text-ink-900 dark:text-bone-100 md:col-span-3">
                  {s.name}
                </p>
                <p className="font-mono text-sm text-sun-600 dark:text-sun-300 md:col-span-2">
                  <span className="mr-2 font-sans text-[11px] uppercase tracking-wider text-ink-400 dark:text-bone-200/40 md:hidden">
                    Dose
                  </span>
                  {s.dose}
                </p>
                <p className="font-mono text-sm text-ink-600 dark:text-bone-200/75 md:col-span-3">
                  <span className="mr-2 font-sans text-[11px] uppercase tracking-wider text-ink-400 dark:text-bone-200/40 md:hidden">
                    Inclusion
                  </span>
                  {s.inclusion}
                </p>
                <p className="text-[13px] leading-relaxed text-ink-400 dark:text-bone-200/55 md:col-span-4">
                  {s.note}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="mt-6">
          <p className="text-[13px] text-ink-400 dark:text-bone-200/50">
            Rates shown are for Nutriments-MDY. Per-product dosages differ —{" "}
            <Link
              href="/products"
              className="focus-ring rounded font-medium text-sun-600 underline underline-offset-4 hover:text-sun-700 dark:text-sun-300"
            >
              see each spec sheet
              <ArrowRight className="ml-1 inline h-3.5 w-3.5" aria-hidden />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
