import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Nutriments-MDY inactive dried yeast, Sunshine Aqua+ probiotic, Nutrimins-DMM mineral mix and Sun Calci Gold oral gel. Specifications and dosage for each.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Products"
        lead="Select a product to see its composition, dosage and packing."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <div className="container-page grid grid-cols-1 gap-10 py-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <ProductSidebar className="hidden lg:block" />
        <div className="grid gap-5 sm:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 2} />
          ))}
        </div>
      </div>
    </>
  );
}
