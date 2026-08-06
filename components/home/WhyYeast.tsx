import Image from "next/image";
import { Beaker, Layers, Microscope, ShieldOff } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const POINTS = [
  {
    icon: Microscope,
    title: "Cells 20–300× larger than bacteria",
    body: "Yeast are unicellular fungi. The sheer cell size is what gives the cell wall its surface area — and its capacity to bind pathogens in the gut lumen.",
  },
  {
    icon: ShieldOff,
    title: "Unaffected by antibiotics",
    body: "Because yeasts are fungi, in-feed antibacterials leave them intact. The supplement keeps working through a medicated ration.",
  },
  {
    icon: Layers,
    title: "β-glucan cell wall",
    body: "The wall structure is built from β-glucans, which act as immuno-stimulants rather than as a nutrient the animal simply digests and forgets.",
  },
  {
    icon: Beaker,
    title: "Best natural source of B vitamins",
    body: "Inactive yeast is a great protein source with a good amino acid balance and sufficient Lysine, Methionine and Threonine, plus naturally occurring B vitamins.",
  },
];

export function WhyYeast() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-bone-100 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-sun-radial" aria-hidden />

      <div className="container-page relative grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            inverted
            eyebrow="The science"
            title={
              <>
                Why <span className="text-gradient-sun">Saccharomyces cerevisiae</span>{" "}
                earns its place in the ration.
              </>
            }
            lead={
              <>
                &ldquo;Saccharomyces&rdquo; is Latinised Greek for sugar fungus;
                &ldquo;cerevisiae&rdquo; is Latin for &ldquo;of beer&rdquo;. It is a budding
                yeast humans have used in baking and brewing since antiquity — and, grown on
                cane molasses and inactivated, it is one of the most reliable functional
                ingredients available to a feed formulator.
              </>
            }
          />

          <dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <dt className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun-gradient text-ink-900">
                    <p.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-display text-[15px] font-bold leading-snug text-bone-100">
                    {p.title}
                  </span>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-bone-200/65">{p.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/products/nutriments-mdy.jpg"
              alt="Nutriments-MDY inactive dried yeast — a light brown, uniformly fine powder"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
          </div>

          {/* Floating spec card over the photograph — a print-brochure move that
              still reads well on a phone because it stacks below the image edge. */}
          <div className="relative -mt-10 ml-4 mr-4 rounded-2xl border border-white/12 bg-ink-800/90 p-5 backdrop-blur-xl sm:ml-8 sm:p-6 lg:absolute lg:bottom-6 lg:left-6 lg:right-auto lg:mt-0 lg:w-72">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-sun-300">
              Microbial study
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-bone-100">
              35 × 10³ <span className="text-base font-medium text-bone-200/60">cfu/g</span>
            </p>
            <p className="mt-1 text-[13px] text-bone-200/60">
              Saccharomyces cerevisiae, 100% of the cell mass — no carriers, no fillers.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
