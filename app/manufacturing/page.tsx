import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: "Manufacturing — 100 MT/day facility at Erode",
  description:
    "Inside the Sunshine Agro Products manufacturing unit at Erode, Tamil Nadu: blending, milling, packing and a finished-goods store rated at 100 metric tons per day.",
};

const STEPS = [
  {
    n: "01",
    title: "Molasses fermentation",
    body: "Saccharomyces cerevisiae is propagated on sugar cane molasses — the substrate that gives Nutriments-MDY its name and its B-vitamin profile.",
  },
  {
    n: "02",
    title: "Inactivation & drying",
    body: "Cells are inactivated and dried to a light brown thin powder at 8 % maximum moisture, which is what makes the material shelf-stable for 12 months without a preservative.",
  },
  {
    n: "03",
    title: "Milling & sizing",
    body: "The dried mass is milled to a free-flowing particle size that disperses evenly through a mixer and survives pellet mill and extruder conditions.",
  },
  {
    n: "04",
    title: "Blending",
    body: "Mineral and multi-strain lines are blended in dedicated stainless vessels on epoxy-sealed floors, with each batch tied to a batch number and manufacturing date.",
  },
  {
    n: "05",
    title: "Packing",
    body: "25 kg and 40 kg HDPE paper bags with an inner liner, printed with composition, dosages, batch number and manufacturing date on the bag itself.",
  },
  {
    n: "06",
    title: "Palletising & dispatch",
    body: "Bags are stacked on wooden pallets, shrink-wrapped and strapped, then held in the finished-goods store for scheduled dispatch or container stuffing.",
  },
];

const GALLERY = [
  {
    src: "/images/facility/blending-hall.jpg",
    alt: "Two stainless steel blending vessels and a charging hopper on a blue epoxy floor",
    caption: "Blending vessels, epoxy-sealed floor",
  },
  {
    src: "/images/facility/milling-line.jpg",
    alt: "Inclined screw conveyor feeding a pulveriser in the milling hall",
    caption: "Milling and conveying line",
  },
  {
    src: "/images/facility/mixing-vessels.jpg",
    alt: "Mixing vessels with a stainless charging hopper alongside",
    caption: "Charging hopper and mixers",
  },
  {
    src: "/images/facility/production-floor.jpg",
    alt: "Wide view of the production hall with mixing equipment along the far wall",
    caption: "Production hall",
  },
  {
    src: "/images/facility/warehouse-pallets.jpg",
    alt: "Rows of 25 kg bags stacked on wooden pallets inside the finished goods warehouse",
    caption: "Finished goods store",
  },
  {
    src: "/images/facility/export-pallets.jpg",
    alt: "Shrink-wrapped and strapped pallets staged beside an open shipping container",
    caption: "Palletised and staged for dispatch",
  },
  {
    src: "/images/facility/container-stuffing.jpg",
    alt: "Pallets of bagged product loaded into a shipping container",
    caption: "Container stuffing",
  },
  {
    src: "/images/facility/warehouse-wide.jpg",
    alt: "Wide view across the warehouse floor with multiple pallet stacks",
    caption: "Warehouse capacity",
  },
];

export default function ManufacturingPage() {
  const plant = company.addresses[1];

  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Our own plant. Our own schedule."
        lead="Sunshine Agro has its own facility at Erode and a corporate office in Chennai. We are one of the pioneer yeast manufacturing companies in India, with an advanced facility rated at 100 metric tons per day."
        image="/images/facility/milling-line.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing" }]}
      />

      <section className="border-b border-ink-100 bg-bone-200 dark:border-ink-700 dark:bg-ink-800">
        <div className="container-page grid gap-px py-0 sm:grid-cols-3">
          {[
            { k: "Production capacity", v: "100 MT / day" },
            { k: "Plant location", v: `${plant.city}, ${plant.state}` },
            { k: "Quality system", v: "ISO 9001:2015" },
          ].map((s) => (
            <div key={s.k} className="px-1 py-8 sm:px-4 sm:py-10">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-400 dark:text-bone-200/45">
                {s.k}
              </p>
              <p className="mt-2 font-display text-xl font-bold text-ink-900 dark:text-bone-100 sm:text-2xl">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bone-100 py-20 dark:bg-ink-900 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Process"
            title="From molasses to a palletised consignment."
            lead="Six stages, each with its own hall and its own record. The batch number printed on the bag traces back through every one of them."
          />

          <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={(i % 3) * 0.08}
                className="card relative overflow-hidden p-6"
              >
                <span
                  className="pointer-events-none absolute -right-2 -top-4 font-display text-[5rem] font-extrabold leading-none text-ink-900/[0.045] dark:text-white/[0.05]"
                  aria-hidden
                >
                  {step.n}
                </span>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-sun-600 dark:text-sun-300">
                  Step {step.n}
                </p>
                <h3 className="mt-2 font-display text-[17px] font-bold text-ink-900 dark:text-bone-100">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500 dark:text-bone-200/65">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bone-200 py-20 dark:bg-ink-800 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Inside the unit"
            title="The plant, unedited."
            lead="Photographs from the Erode facility — blending, milling, storage and dispatch."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((shot, i) => (
              <Reveal
                as="figure"
                key={shot.src}
                delay={(i % 4) * 0.06}
                className="group overflow-hidden rounded-2xl bg-bone-100 dark:bg-ink-900"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400 dark:text-bone-200/45">
                  {shot.caption}
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone-100 py-20 dark:bg-ink-900 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Packing"
              title="What arrives at your mill."
              lead="Every bag carries its own specification. Composition, dosage table, application method, storage caution, batch number and manufacturing date are printed on the sack — not on a label that can peel off in a humid store."
            />
            <dl className="mt-8 space-y-4">
              {[
                { k: "Bulk lines", v: "25 kg & 40 kg HDPE paper bags with inner liner" },
                { k: "Farm packs", v: "1 kg packs for Sunshine Aqua+; 300 g bottles for Sun Calci Gold" },
                { k: "Palletising", v: "Wooden pallets, shrink-wrapped and strapped" },
                { k: "Handling", v: "Use no hooks; stack over pallets, away from insects" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex flex-col gap-1 border-b border-ink-100 pb-4 dark:border-ink-700 sm:flex-row sm:justify-between sm:gap-6"
                >
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400 dark:text-bone-200/45">
                    {row.k}
                  </dt>
                  <dd className="text-sm text-ink-800 dark:text-bone-100 sm:max-w-sm sm:text-right">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/products/bag-front.jpg"
                alt="Front panel of a 25 kg Nutriments-MDY bag showing ingredients and composition"
                fill
                sizes="(min-width: 1024px) 23vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/products/bag-back.jpg"
                alt="Back panel of a 25 kg Nutriments-MDY bag showing advantages and dosages"
                fill
                sizes="(min-width: 1024px) 23vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want to see the plant before you buy?"
        lead="Customers and their technical teams are welcome at Erode. Tell us when, and we will arrange the visit."
      />
    </>
  );
}
