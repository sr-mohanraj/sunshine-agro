import type { Metadata } from "next";
import Image from "next/image";
import { Award, FileCheck2, Microscope, ShieldCheck } from "lucide-react";
import company from "@/data/company.json";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Quality & Certifications — ISO 9001:2015",
  description:
    "ISO 9001:2015 certification, registered trade mark, and independent certificates of analysis from the TANUVAS feed laboratory at Namakkal.",
};

const CREDENTIALS = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015",
    meta: "Certificate No. E20250218146",
    body: "Assessed by Royal Assessments Pvt. Ltd. against ISO 9001:2015 Quality Management Systems, covering manufacture of poultry, aqua and cattle feed supplements and livestock nutrients. Certified 06/02/2025, valid to 05/02/2028, with annual surveillance. RAPL is accredited by EGAC, a member of the International Accreditation Forum and signatory to the MLA.",
    image: "/images/certificates/iso-9001-2015.jpg",
    imageAlt: "ISO 9001:2015 management system certificate issued to Sunshine Agro Products",
    doc: "/docs/iso-9001-2015.pdf",
  },
  {
    icon: FileCheck2,
    title: "Certificate of Analysis",
    meta: "TANUVAS, Namakkal — Lab Ref. 21772",
    body: "Nutrimins-DMM assayed by the Animal Feed Analytical and Quality Assurance Laboratory, Veterinary College and Research Institute, Tamil Nadu Veterinary and Animal Sciences University. Proximates, macro and trace minerals, plus a full mycotoxin panel — aflatoxins B1/B2/G1/G2, ochratoxin, T-2 toxin, citrinin and zearalenone — all not detected.",
    image: "/images/certificates/nutrimins-coa.jpg",
    imageAlt: "TANUVAS certificate of analysis for Nutrimins-DMM cattle feed",
  },
  {
    icon: Award,
    title: "Registered trade mark",
    meta: "Trade Mark No. 4064646, Class 31",
    body: "Nutrimins-DMM is registered with the Trade Marks Registry, Government of India under the Trade Marks Act 1999, covering foodstuffs and beverages for animals. Registered 23 January 2019.",
    image: "/images/certificates/brochure-front.jpg",
    imageAlt: "Trade mark registration certificate for Nutrimins-DMM",
  },
  {
    icon: Microscope,
    title: "Method of analysis",
    meta: "AOAC and standard lab procedures",
    body: "Nutriments-MDY is released against a published method of analysis — total nitrogen by AOAC 984.13, protein by AOAC 990.03, total ash by AOAC 942.05, pH by AOAC 973.04, with heavy metals absent by spectrometry and a microbial panel run to the Compendium of Methods for Microbial Examination of Feed.",
    image: "/images/certificates/method-of-analysis.jpg",
    imageAlt: "Sunshine Agro Products method of analysis sheet for Nutriments-MDY",
  },
];

const CHECKS = [
  { k: "Heavy metals", v: "Absent", m: "Spectrometry" },
  { k: "Total bacterial count", v: "< 35 000 cfu/g", m: "Method 5, 1992" },
  { k: "E. coli & Salmonella", v: "Absent", m: "Method 3 & 4, 1992" },
  { k: "Moulds", v: "< 300 cfu/g", m: "Method 6, 2004" },
  { k: "Aflatoxins B1/B2/G1/G2", v: "Not detected", m: "In-house, TANUVAS" },
  { k: "Ochratoxin, T-2, Citrinin, Zearalenone", v: "Not detected", m: "In-house, TANUVAS" },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Every claim on this site has a document behind it."
        lead="We publish the certificate numbers, the testing methods and the laboratories. If a number matters to your formulation, you should be able to verify it without taking our word for it."
        image="/images/facility/export-pallets.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
      />

      <section className="bg-bone-100 py-20 dark:bg-ink-900 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications and independent testing."
          />

          <div className="mt-12 space-y-6">
            {CREDENTIALS.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 0.06}
                className="card grid gap-6 overflow-hidden p-6 sm:grid-cols-[minmax(0,1fr)_200px] sm:items-start sm:gap-8 sm:p-8 lg:grid-cols-[minmax(0,1fr)_260px]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sun-gradient text-ink-900">
                      <c.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink-900 dark:text-bone-100">
                        {c.title}
                      </h3>
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-sun-600 dark:text-sun-300">
                        {c.meta}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-bone-200/70">
                    {c.body}
                  </p>
                  {c.doc && (
                    <Button href={c.doc} variant="outline" size="sm" className="mt-5" external>
                      View certificate (PDF)
                    </Button>
                  )}
                </div>

                <a
                  href={c.image}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring group relative block aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-ink-100 dark:ring-ink-600"
                >
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 200px, 92vw"
                    className="bg-white object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone-200 py-20 dark:bg-ink-800 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Release criteria"
            title="What we test before a batch leaves the plant."
            lead="Contaminant and microbial limits applied across the yeast lines, alongside the proximate analysis published on each product page."
          />

          <div className="mt-10 overflow-x-auto rounded-2xl border border-ink-100 dark:border-ink-700">
            <table className="w-full min-w-[540px] border-collapse text-sm">
              <thead>
                <tr className="bg-ink-900 text-bone-100">
                  <th
                    scope="col"
                    className="px-5 py-3 text-left font-mono text-[10.5px] font-medium uppercase tracking-[0.12em]"
                  >
                    Parameter
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-right font-mono text-[10.5px] font-medium uppercase tracking-[0.12em]"
                  >
                    Limit / result
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-right font-mono text-[10.5px] font-medium uppercase tracking-[0.12em]"
                  >
                    Method
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100 dark:divide-ink-700">
                {CHECKS.map((row) => (
                  <tr
                    key={row.k}
                    className="bg-bone-100 even:bg-bone-200/60 dark:bg-ink-900 dark:even:bg-ink-800/60"
                  >
                    <td className="px-5 py-2.5 text-ink-600 dark:text-bone-200/75">{row.k}</td>
                    <td className="px-5 py-2.5 text-right font-mono text-[13px] font-medium text-leaf-600 dark:text-leaf-300">
                      {row.v}
                    </td>
                    <td className="px-5 py-2.5 text-right font-mono text-[12px] text-ink-400 dark:text-bone-200/50">
                      {row.m}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Reveal delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { k: "ISO certificate", v: company.registration.iso },
              { k: "Valid until", v: company.registration.isoValidUntil },
              { k: "GSTIN", v: company.registration.gstin },
            ].map((row) => (
              <div
                key={row.k}
                className="rounded-xl border border-ink-100 bg-bone-100 p-5 dark:border-ink-700 dark:bg-ink-900"
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400 dark:text-bone-200/45">
                  {row.k}
                </p>
                <p className="mt-1.5 text-[13.5px] leading-snug text-ink-800 dark:text-bone-100">
                  {row.v}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Need a batch-specific certificate of analysis?"
        lead="Send us the batch number printed on your bag and we will issue the COA for that consignment."
      />
    </>
  );
}
