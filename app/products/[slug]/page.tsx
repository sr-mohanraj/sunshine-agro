import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import company from "@/data/company.json";
import { PRODUCTS, getProduct } from "@/lib/products";
import { SITE_URL, telHref } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import { SpecTable } from "@/components/products/SpecTable";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  const title = `${product.name}, ${product.type.toLowerCase()}`;
  return {
    title,
    description: product.metaDescription,
    openGraph: {
      title,
      description: product.metaDescription,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 border-t border-ink-100 pt-8">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-ink-700 sm:columns-2 sm:gap-x-10">
      {items.map((item) => (
        <li key={item} className="break-inside-avoid">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `${SITE_URL}${product.image}`,
    brand: { "@type": "Brand", name: company.name },
    manufacturer: { "@type": "Organization", name: company.name },
  };

  const facts = [
    { k: "Suitable for", v: product.species.join(", ") },
    product.packing && { k: "Packing", v: product.packing },
    product.shelfLife && { k: "Shelf life", v: product.shelfLife },
    product.storage && { k: "Storage", v: product.storage },
  ].filter(Boolean) as { k: string; v: string }[];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title={
          <>
            {product.name}
            {product.trademark && <sup className="ml-1 text-base font-normal text-ink-400">TM</sup>}
          </>
        }
        lead={product.subtitle}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <div className="container-page grid grid-cols-1 gap-10 py-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <ProductSidebar activeSlug={product.slug} className="order-2 lg:order-1" />

        <div className="order-1 min-w-0 lg:order-2">
          <div className="grid gap-8 md:grid-cols-2">
            <ProductGallery images={product.gallery} />
            <div>
              <p className="text-ink-700">{product.summary}</p>
              <dl className="mt-5 divide-y divide-ink-100 border-y border-ink-100 text-sm">
                {facts.map((f) => (
                  <div key={f.k} className="grid grid-cols-[7rem_1fr] gap-3 py-2.5">
                    <dt className="text-ink-400">{f.k}</dt>
                    <dd className="text-ink-800">{f.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/contact?product=${product.slug}`} className="btn btn-primary">
                  Enquire about {product.name}
                </Link>
                <a href={telHref(company.contact.mobiles[0])} className="btn btn-outline">
                  Call {company.contact.mobiles[0]}
                </a>
              </div>
            </div>
          </div>

          {product.description && (
            <Section title="About this product">
              <div className="max-w-3xl space-y-3 text-ink-700">
                {product.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Section>
          )}

          {product.benefits && (
            <Section title="Benefits">
              <BulletList items={product.benefits} />
            </Section>
          )}

          {product.specs && (
            <Section title="Composition">
              <div
                className={
                  product.specs.length === 1 ? "max-w-md" : "grid gap-8 md:grid-cols-2"
                }
              >
                {product.specs.map((g) => (
                  <SpecTable key={g.title} group={g} />
                ))}
              </div>
            </Section>
          )}

          {product.aminoAcids && (
            <Section title="Amino acids (typical)">
              <div className="overflow-x-auto">
                <table className="table-plain min-w-[420px] max-w-xl">
                  <thead>
                    <tr>
                      {product.aminoAcids.columns.map((c, i) => (
                        <th key={c} scope="col" className={i === 0 ? "" : "text-right"}>
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.aminoAcids.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => (
                          <td key={i} className={i === 0 ? "" : "text-right tabular-nums"}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {product.aminoAcids.footnote && (
                <p className="mt-2 text-sm text-ink-400">{product.aminoAcids.footnote}</p>
              )}
            </Section>
          )}

          {product.dosage && (
            <Section title={product.dosageTitle ?? "Dosage"}>
              <div className="overflow-x-auto">
                <table className="table-plain max-w-2xl">
                  <tbody>
                    {product.dosage.map((d) => (
                      <tr key={d.k}>
                        <td className="w-2/5">{d.k}</td>
                        <td className="font-medium text-ink-900">{d.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {product.methods && (
                <div className="mt-5">
                  <h3 className="mb-2 text-base font-semibold">Application method</h3>
                  <ul className="list-disc space-y-1 pl-5 text-ink-700">
                    {product.methods.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Section>
          )}

          {product.conditions && (
            <Section title="Conditions listed on the label">
              <BulletList items={product.conditions} />
            </Section>
          )}

          {product.analysis && (
            <Section title="Analysis results">
              <div className="overflow-x-auto">
                <table className="table-plain min-w-[480px] max-w-2xl">
                  <thead>
                    <tr>
                      <th scope="col">Parameter</th>
                      <th scope="col">Result</th>
                      <th scope="col">Test method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.analysis.map((r) => (
                      <tr key={r.k}>
                        <td>{r.k}</td>
                        <td className="tabular-nums">{r.v}</td>
                        <td className="text-ink-500">{r.m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {product.analysisNote && <p className="mt-2 text-sm text-ink-400">{product.analysisNote}</p>}
            </Section>
          )}

          {product.aboutYeast && (
            <Section title="About yeast">
              <BulletList items={product.aboutYeast} />
            </Section>
          )}

          {product.cautions && (
            <div className="mt-10 border-l-4 border-sun-600 bg-sun-50 p-4 text-sm text-ink-800">
              {product.cautions.map((c) => (
                <p key={c}>{c}</p>
              ))}
            </div>
          )}

          {product.documents && (
            <Section title="Documents">
              <ul className="space-y-1.5">
                {product.documents.map((d) => (
                  <li key={d.href}>
                    <a href={d.href} target="_blank" rel="noreferrer noopener" className="link">
                      {d.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>
      </div>
    </>
  );
}
