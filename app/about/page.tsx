import type { Metadata } from "next";
import Image from "next/image";
import { Building2, FlaskConical, GraduationCap, Target } from "lucide-react";
import company from "@/data/company.json";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Two decades in animal nutrition",
  description:
    "Sunshine Agro Products was established in 2003 at Chennai. An ISO 9001:2015 certified manufacturer of feed supplements for aqua, poultry, swine and livestock nutrition.",
};

const PILLARS = [
  {
    icon: FlaskConical,
    title: "Research applied to tradition",
    body: "We believe in furthering traditional knowledge through research — applying modern parameters, confirming results in field trials, and standardising products so every batch behaves like the last.",
  },
  {
    icon: Target,
    title: "Problems defined before products",
    body: "Products are developed by clearly defining the problem first, then working through nutrition concepts, animal physiology and field performance rather than starting from a formulation.",
  },
  {
    icon: GraduationCap,
    title: "University and veterinary tie-ups",
    body: "We have tie-up arrangements with renowned universities, veterinary colleges and research centres for trials, followed up on commercial farms in diverse climates and geographies.",
  },
  {
    icon: Building2,
    title: "Our own manufacturing",
    body: "Corporate office in Chennai, manufacturing at Erode — a facility rated at 100 metric tons per day, which means capacity and schedule are ours to commit.",
  },
];

const TIMELINE = [
  {
    year: "2003",
    title: "Founded in Chennai",
    body: "Sunshine Agro Products is established at Tondiarpet, Chennai, supplying feed additives to the Tamil Nadu aqua and poultry trade.",
  },
  {
    year: "2019",
    title: "Trade mark registered",
    body: "Nutrimins-DMM registered under Trade Mark No. 4064646 in Class 31 with the Trade Marks Registry, Government of India.",
  },
  {
    year: "2019",
    title: "Independent assay at TANUVAS",
    body: "Nutrimins-DMM assayed by the Animal Feed Analytical and Quality Assurance Laboratory, Veterinary College and Research Institute, Namakkal — full mycotoxin panel not detected.",
  },
  {
    year: "2023",
    title: "Vannamei field project",
    body: "A vannamei shrimp project run on our own yeast supplements proved them to the south Indian shrimp market — feed intake, FCR and metabolism held through the culture.",
  },
  {
    year: "2025",
    title: "ISO 9001:2015 recertified",
    body: "Certificate E20250218146 issued covering manufacture of poultry, aqua and cattle feed supplements and livestock nutrients. Valid to February 2028.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Established 2003. Still run by the person who signs the COA."
        lead={company.description}
        image="/images/facility/production-floor.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-bone-100 py-20 dark:bg-ink-900 sm:py-28">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-16">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Who we are"
              title="A feed additives company that grew up inside the industry it serves."
            />
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-600 dark:text-bone-200/75">
              <p>
                Sunshine Agro Products was established in 2003 at Chennai, Tamil Nadu.
                We offer specialised feed supplements for aqua, poultry and livestock
                nutrition, and through intensive field experience our products have
                helped the animal feed industry improve profitability.
              </p>
              <p>
                The aqua farming industry is one of the most sensitive there is — every
                external and internal factor affects the yield. That is the reason our
                core purpose has stayed narrow: contribute an antibiotic-free supplement
                the industry can build a crop around, and manufacture it to a government
                standard rather than to a price point.
              </p>
              <p>
                Our experienced team understands the nuances of handling different
                products and maintaining their quality through the process. Two decades
                of track record in the Indian aqua and poultry industry sit behind every
                consignment that leaves Erode.
              </p>
            </div>

            <dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.07}>
                  <dt className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun-gradient text-ink-900">
                      <p.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-display text-[15px] font-bold leading-snug text-ink-900 dark:text-bone-100">
                      {p.title}
                    </span>
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-bone-200/65">
                    {p.body}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/5]">
                <Image
                  src={company.proprietor.image}
                  alt={`${company.proprietor.name}, ${company.proprietor.role}`}
                  fill
                  sizes="(min-width: 1024px) 460px, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-sun-600 dark:text-sun-300">
                  {company.proprietor.role}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-ink-900 dark:text-bone-100">
                  {company.proprietor.name}
                </p>
                <blockquote className="mt-4 border-l-2 border-sun-500 pl-4 text-sm leading-relaxed text-ink-500 dark:text-bone-200/70">
                  {company.proprietor.quote}
                </blockquote>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone-200 py-20 dark:bg-ink-800 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Track record"
            title="Milestones worth putting a date against."
            lead="Not a company history — just the checkpoints a buyer can verify independently."
          />

          <ol className="mt-12 space-y-0">
            {TIMELINE.map((item, i) => (
              <Reveal
                as="li"
                key={`${item.year}-${item.title}`}
                delay={i * 0.06}
                className="relative grid gap-2 border-l-2 border-ink-100 pb-10 pl-8 last:pb-0 dark:border-ink-700 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6"
              >
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-sun-gradient ring-4 ring-bone-200 dark:ring-ink-800" />
                <p className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-sun-600 dark:text-sun-300">
                  {item.year}
                </p>
                <div>
                  <h3 className="font-display text-[15px] font-bold text-ink-900 dark:text-bone-100">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-bone-200/65">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bone-100 py-20 dark:bg-ink-900 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries served"
            title="Where our products end up."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {company.industriesServed.map((industry, i) => (
              <Reveal
                as="li"
                key={industry}
                delay={i * 0.05}
                className="rounded-xl border border-ink-100 bg-bone-200/60 px-5 py-4 text-sm font-medium text-ink-700 dark:border-ink-700 dark:bg-ink-800/60 dark:text-bone-200/80"
              >
                {industry}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
