import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { CATEGORIES } from "@/lib/taxonomy";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/products/ProductCard";

export function ProductShowcase() {
  return (
    <section id="products" className="bg-bone-100 py-20 dark:bg-ink-900 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The range"
            title={
              <>
                Five product lines,
                <br className="hidden sm:block" /> one fermentation platform.
              </>
            }
            lead="Everything we make starts from the same place — Saccharomyces cerevisiae grown on cane molasses. What changes is how it is finished: whole inactivated cell, live yeast culture, multi-strain consortium, or a mineral carrier for ruminants."
          />
          <Reveal delay={0.15}>
            <Link
              href="/products"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-sun-500 hover:text-sun-600 dark:border-white/20 dark:text-bone-100 dark:hover:border-sun-400 dark:hover:text-sun-300"
            >
              Full catalogue
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        {/* Category strip: orients a first-time visitor before they hit the grid. */}
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <Reveal
              as="li"
              key={cat.id}
              delay={i * 0.06}
              className="rounded-xl border border-ink-100 bg-bone-200/60 p-4 dark:border-ink-700 dark:bg-ink-800/60"
            >
              <p className="font-display text-[13.5px] font-bold text-ink-900 dark:text-bone-100">
                {cat.label}
              </p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-400 dark:text-bone-200/55">
                {cat.blurb}
              </p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal as="div" key={product.slug} delay={(i % 3) * 0.08}>
              <ProductCard product={product} priority={i < 3} className="h-full" />
            </Reveal>
          ))}

          {/* Sixth cell keeps the 3-column grid balanced and doubles as a CTA. */}
          <Reveal
            delay={0.16}
            className="hidden rounded-2xl border border-dashed border-ink-200 p-8 dark:border-ink-600 xl:flex xl:flex-col xl:justify-center"
          >
            <p className="font-display text-xl font-bold leading-snug text-ink-900 dark:text-bone-100">
              Need a blend to your own specification?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-bone-200/65">
              We run private-label and custom-inclusion batches out of the Erode
              plant — send us your target analysis and pack size.
            </p>
            <Link
              href="/contact?intent=custom"
              className="focus-ring mt-6 inline-flex items-center gap-2 self-start rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-bone-100 transition-colors hover:bg-ink-700 dark:bg-bone-100 dark:text-ink-900 dark:hover:bg-bone-300"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
