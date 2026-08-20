import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Clock,
  Download,
  FlaskConical,
  Package,
  Thermometer,
} from "lucide-react";
import { PRODUCTS, getProduct } from "@/lib/products";
import { categoryLabel, speciesLabel } from "@/lib/taxonomy";
import { SITE_URL } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { ProductColumn } from "@/components/products/ProductColumn";
import { ProductGallery } from "@/components/products/ProductGallery";
import { SpecTable } from "@/components/products/SpecTable";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};

  // metaDescription is written for a search snippet; summary is written for
  // on-page reading and runs longer, so it's kept for the JSON-LD description
  // below rather than for the truncation-sensitive meta and OG tags.
  const description = product.metaDescription ?? product.summary;

  return {
    title: `${product.name} — ${product.subtitle}`,
    description,
    openGraph: {
      title: `${product.name} — ${product.subtitle}`,
      description,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const gallery = product.gallery ?? [{ src: product.image, alt: product.imageAlt }];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    category: categoryLabel(product.category),
    image: `${SITE_URL}${product.image}`,
    brand: { "@type": "Brand", name: "Sunshine Agro Products" },
    manufacturer: { "@type": "Organization", name: "Sunshine Agro Products" },
  };

  const facts = [
    product.packing && { icon: Package, label: "Packing", value: product.packing },
    product.shelfLife && { icon: Clock, label: "Shelf life", value: product.shelfLife },
    product.storage && { icon: Thermometer, label: "Storage", value: product.storage },
    product.appearance && {
      icon: FlaskConical,
      label: "Appearance",
      value: product.appearance,
    },
  ].filter(Boolean) as { icon: typeof Package; label: string; value: string }[];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={categoryLabel(product.category)}
        title={
          <>
            {product.name}
            {product.trademark && (
              <sup className="ml-1 align-super text-[0.32em] font-semibold text-sun-300">
                TM
              </sup>
            )}
            <span className="mt-2 block font-display text-[0.42em] font-semibold tracking-[-0.01em] text-sun-300">
              {product.subtitle}
            </span>
          </>
        }
        lead={product.summary}
        image={product.image}
        imageAlt=""
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <section className="bg-bone-100 py-14 dark:bg-ink-900 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[330px_minmax(0,1fr)]">
          <ProductColumn />

          <div className="min-w-0">
            {/* Overview: gallery beside the positioning statement and key facts. */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <Reveal>
                <ProductGallery images={gallery} name={product.name} />
              </Reveal>

              <Reveal delay={0.08}>
                <ul className="flex flex-wrap gap-1.5">
                  {product.species.map((s) => (
                    <li
                      key={s}
                      className="rounded-md bg-leaf-50 px-2.5 py-1 text-[11.5px] font-medium text-leaf-600 dark:bg-leaf-800/40 dark:text-leaf-200"
                    >
                      {speciesLabel(s)}
                    </li>
                  ))}
                </ul>

                {product.pitch && (
                  <p className="mt-5 text-[15px] leading-relaxed text-ink-600 dark:text-bone-200/75">
                    {product.pitch}
                  </p>
                )}

                {(product.ingredients || product.microbial) && (
                  <dl className="mt-6 space-y-3 rounded-xl bg-bone-200/70 p-4 dark:bg-ink-800">
                    {product.ingredients && (
                      <div>
                        <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400 dark:text-bone-200/45">
                          Ingredients
                        </dt>
                        <dd className="mt-1 text-sm text-ink-800 dark:text-bone-100">
                          {product.ingredients}
                        </dd>
                      </div>
                    )}
                    {product.microbial && (
                      <div>
                        <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400 dark:text-bone-200/45">
                          Microbial study
                        </dt>
                        <dd className="mt-1 font-mono text-sm text-ink-800 dark:text-bone-100">
                          {product.microbial}
                        </dd>
                      </div>
                    )}
                  </dl>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={`/contact?intent=enquiry&product=${product.slug}`}>
                    Enquire about {product.name}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                  {product.documents?.map((doc) => (
                    <Button key={doc.href} href={doc.href} variant="outline" external>
                      <Download className="h-4 w-4" aria-hidden />
                      {doc.label}
                    </Button>
                  ))}
                </div>
              </Reveal>
            </div>

            {facts.length > 0 && (
              <Reveal delay={0.05}>
                {/* auto-fit, not a fixed 4 columns: products carry different
                    numbers of facts, and a fixed count leaves the container
                    background showing through as an empty grey cell. */}
                <dl className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 dark:border-ink-700 dark:bg-ink-700">
                  {facts.map((f) => (
                    <div key={f.label} className="bg-bone-100 p-5 dark:bg-ink-900">
                      <dt className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400 dark:text-bone-200/45">
                        <f.icon className="h-3.5 w-3.5 text-sun-500" aria-hidden />
                        {f.label}
                      </dt>
                      <dd className="mt-2 text-[13.5px] leading-snug text-ink-800 dark:text-bone-100">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}

            {product.benefits && product.benefits.length > 0 && (
              <Section title="Advantages">
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-ink-600 dark:text-bone-200/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {product.indications && product.indications.length > 0 && (
              <Section title="Indicated for">
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {product.indications.map((c) => (
                    <li
                      key={c}
                      className="flex gap-2.5 text-sm text-ink-600 dark:text-bone-200/75"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun-500" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] text-ink-400 dark:text-bone-200/50">
                  Animal feed supplement — not for medicinal use. Use under the advice
                  of a veterinarian or animal nutritionist.
                </p>
              </Section>
            )}

            {product.specs && product.specs.length > 0 && (
              <Section title="Typical composition">
                {/* A lone spec group stretched across three columns reads as an
                    unfinished row, so a single table is capped and left-aligned. */}
                <div
                  className={
                    product.specs.length === 1
                      ? "grid max-w-xl gap-4"
                      : "grid gap-4 md:grid-cols-2 xl:grid-cols-3"
                  }
                >
                  {product.specs.map((g) => (
                    <SpecTable key={g.group} group={g} />
                  ))}
                </div>
                {product.specSheetOnRequest && (
                  <p className="mt-4 text-[13px] text-ink-400 dark:text-bone-200/50">
                    Batch-specific certificates of analysis are issued with every
                    consignment.{" "}
                    <Link
                      href={`/contact?intent=coa&product=${product.slug}`}
                      className="focus-ring rounded font-medium text-sun-600 underline underline-offset-4 dark:text-sun-300"
                    >
                      Request the current COA
                    </Link>
                    .
                  </p>
                )}
              </Section>
            )}

            {product.aminoAcids && (
              <Section title="Amino acid profile">
                <div className="overflow-x-auto rounded-xl border border-ink-100 dark:border-ink-700">
                  <table className="w-full min-w-[420px] border-collapse text-sm">
                    <thead>
                      <tr className="bg-ink-900 text-bone-100">
                        {product.aminoAcids.columns.map((c, i) => (
                          <th
                            key={c}
                            scope="col"
                            className={`px-4 py-2.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] ${
                              i === 0 ? "text-left" : "text-right"
                            }`}
                          >
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-100 dark:divide-ink-700">
                      {product.aminoAcids.rows.map((row) => (
                        <tr
                          key={row[0]}
                          className="bg-bone-100 even:bg-bone-200/60 dark:bg-ink-900 dark:even:bg-ink-800/60"
                        >
                          {row.map((cell, i) => (
                            <td
                              key={i}
                              className={`px-4 py-2 ${
                                i === 0
                                  ? "text-left text-ink-600 dark:text-bone-200/75"
                                  : "text-right font-mono text-[13px] text-ink-900 dark:text-bone-100"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {product.aminoAcids.footnote && (
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-400 dark:text-bone-200/45">
                    {product.aminoAcids.footnote}
                  </p>
                )}
              </Section>
            )}

            {product.dosage && product.dosage.length > 0 && (
              <Section title="Dosage & application">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="overflow-hidden rounded-xl border border-ink-100 dark:border-ink-700">
                    <p className="border-b border-ink-100 bg-bone-200/70 px-4 py-2.5 font-display text-[13px] font-bold text-ink-900 dark:border-ink-700 dark:bg-ink-800 dark:text-bone-100">
                      Inclusion rate
                    </p>
                    <dl className="divide-y divide-ink-100 dark:divide-ink-700">
                      {product.dosage.map((d) => (
                        <div
                          key={d.k}
                          className="flex items-baseline justify-between gap-4 px-4 py-2.5 text-sm"
                        >
                          <dt className="text-ink-500 dark:text-bone-200/65">{d.k}</dt>
                          <dd className="shrink-0 text-right font-mono text-[13px] font-medium text-sun-600 dark:text-sun-300">
                            {d.v}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="space-y-5">
                    {product.inclusionAlt && (
                      <div>
                        <p className="font-display text-[13px] font-bold text-ink-900 dark:text-bone-100">
                          As a percentage of total feed
                        </p>
                        <ul className="mt-2.5 space-y-1.5">
                          {product.inclusionAlt.map((line) => (
                            <li
                              key={line}
                              className="text-[13.5px] leading-relaxed text-ink-500 dark:text-bone-200/65"
                            >
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(product.applicationMethods || product.application) && (
                      <div>
                        <p className="font-display text-[13px] font-bold text-ink-900 dark:text-bone-100">
                          Application method
                        </p>
                        <ul className="mt-2.5 space-y-1.5">
                          {(product.applicationMethods ?? [product.application!]).map(
                            (line) => (
                              <li
                                key={line}
                                className="flex gap-2.5 text-[13.5px] leading-relaxed text-ink-500 dark:text-bone-200/65"
                              >
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sun-500" />
                                {line}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {product.claims && (
                      <ul className="flex flex-wrap gap-2">
                        {product.claims.map((c) => (
                          <li
                            key={c}
                            className="rounded-full border border-leaf-200 px-3 py-1.5 text-[12px] font-medium text-leaf-600 dark:border-leaf-700 dark:text-leaf-200"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Section>
            )}

            {product.analysis && product.analysis.length > 0 && (
              <Section title="Analytical results">
                <div className="overflow-x-auto rounded-xl border border-ink-100 dark:border-ink-700">
                  <table className="w-full min-w-[520px] border-collapse text-sm">
                    <thead>
                      <tr className="bg-ink-900 text-bone-100">
                        <th
                          scope="col"
                          className="px-4 py-2.5 text-left font-mono text-[10.5px] font-medium uppercase tracking-[0.12em]"
                        >
                          Parameter
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2.5 text-right font-mono text-[10.5px] font-medium uppercase tracking-[0.12em]"
                        >
                          Result
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2.5 text-right font-mono text-[10.5px] font-medium uppercase tracking-[0.12em]"
                        >
                          Testing method
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-100 dark:divide-ink-700">
                      {product.analysis.map((row) => (
                        <tr
                          key={row.k}
                          className="bg-bone-100 even:bg-bone-200/60 dark:bg-ink-900 dark:even:bg-ink-800/60"
                        >
                          <td className="px-4 py-2 text-ink-600 dark:text-bone-200/75">
                            {row.k}
                          </td>
                          <td className="px-4 py-2 text-right font-mono text-[13px] text-ink-900 dark:text-bone-100">
                            {row.v}
                          </td>
                          <td className="px-4 py-2 text-right font-mono text-[12px] text-ink-400 dark:text-bone-200/50">
                            {row.m}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {product.analysisNote && (
                  <p className="mt-3 text-[12.5px] leading-relaxed text-ink-400 dark:text-bone-200/50">
                    {product.analysisNote}
                  </p>
                )}
              </Section>
            )}

            {product.animalUseOnly && (
              <Reveal className="mt-10 flex gap-3 rounded-xl border border-sun-200 bg-sun-50 p-4 dark:border-sun-700/50 dark:bg-sun-900/20">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-sun-600 dark:text-sun-300" aria-hidden />
                <p className="text-[13px] leading-relaxed text-ink-700 dark:text-bone-200/75">
                  Animal use only — not for human consumption. Contains no antibiotics
                  and no hormones. Store over pallets, away from insects; use no hooks
                  when handling bags.
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to trial ${product.name}?`}
        lead="Send us your species, target inclusion rate and pack size. We will quote against it and dispatch a trial quantity from Erode."
      />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="mt-12 border-t border-ink-100 pt-10 dark:border-ink-700">
      <h2 className="mb-5 font-display text-xl font-bold tracking-[-0.015em] text-ink-900 dark:text-bone-100">
        {title}
      </h2>
      {children}
    </Reveal>
  );
}
