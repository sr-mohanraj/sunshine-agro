import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ProductColumn } from "@/components/products/ProductColumn";
import { CatalogClient } from "@/components/products/CatalogClient";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — Inactive Dried Yeast, Probiotics, Mineral Mixes & Oral Gels",
  description:
    "Nutriments-MDY dried yeast, Sunshine Aqua+ probiotic, Nutrimins-DMM mineral mix and Sun Calci Gold oral gel — full specs, dosages and pricing on request.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="Feed supplements built on molasses-grown yeast."
        lead="Every line below is manufactured at our own Erode plant under an ISO 9001:2015 quality system. Typical analyses, dosages and packing are published in full — no “available on enquiry” for the numbers that matter."
        image="/images/facility/warehouse-pallets.jpg"
        imageAlt=""
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <section className="bg-bone-100 py-14 dark:bg-ink-900 sm:py-20">
        {/* grid-cols-1 is load-bearing: with no explicit mobile track the single
            implicit column sizes to max-content and blows past the viewport. */}
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[330px_minmax(0,1fr)]">
          <ProductColumn />
          <div className="min-w-0">
            <CatalogClient products={PRODUCTS} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
