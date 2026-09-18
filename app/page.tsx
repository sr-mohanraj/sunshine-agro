import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import company from "@/data/company.json";
import { CERTIFICATES, PRODUCTS } from "@/lib/products";
import { telHref } from "@/lib/site";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  description:
    "Inactive dried yeast and feed supplements for aqua, poultry and livestock, made in Erode, Tamil Nadu. ISO 9001:2015, GMP+, FAMI-QS and HACCP certificates.",
};

const FACTS = [
  { k: "Established", v: `${company.founded}, Chennai` },
  { k: "Manufacturing unit", v: "Erode, Tamil Nadu" },
  { k: "Production capacity", v: company.capacity },
  { k: "Certificates", v: "ISO 9001:2015, GMP+, FAMI-QS, HACCP, GMP, Halal" },
];

const PLANT_PHOTOS = [
  { src: "/images/facility/blending-hall.jpg", alt: "Mixing vessels and a hopper on the production floor", caption: "Mixing vessels" },
  { src: "/images/facility/milling-line.jpg", alt: "Screw conveyor and milling equipment in the plant", caption: "Conveyor and mill" },
  { src: "/images/facility/export-pallets.jpg", alt: "Bags stacked and strapped on pallets in the warehouse", caption: "Palletised bags" },
];

export default function HomePage() {
  const { mobiles, email } = company.contact;

  return (
    <>
      <section className="bg-bone-200">
        <div className="container-page grid items-center gap-8 py-10 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Inactive dried yeast and feed supplements for aqua, poultry and livestock
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-600">
              Sunshine Agro Products was established in {company.founded} in Chennai. Our manufacturing unit is
              at Erode, with a production capacity of {company.capacity}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-primary">
                See our products
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact us
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-ink-100 bg-white">
            <Image
              src="/images/products/mdy-bag.jpg"
              alt="Nutriments-MDY 25 kg bag, front and back"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-ink-100">
        <div className="container-page">
          <dl className="grid grid-cols-2 gap-px bg-ink-100 md:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.k} className="bg-white px-3 py-4 sm:px-4">
                <dt className="text-xs text-ink-400">{f.k}</dt>
                <dd className="mt-1 text-sm font-semibold text-ink-900">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2 className="text-2xl font-semibold md:text-3xl">Our products</h2>
            <Link href="/products" className="link inline-block py-1.5 text-sm">
              All products
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone-200 py-12 md:py-16">
        <div className="container-page grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">About us</h2>
            <p className="mt-4 text-ink-600">
              We make specialised feed supplements for aqua, poultry and livestock nutrition. Each product is
              developed by first defining the problem, then looking at nutrition, animal physiology and field
              performance.
            </p>
            <p className="mt-3 text-ink-600">
              Results are confirmed in field trials. We have tie-ups with a few universities, veterinary
              colleges and research centres, and trials are followed up on commercial farms in different
              climates and locations.
            </p>
            <p className="mt-4">
              <Link href="/about" className="link font-semibold">
                More about us
              </Link>
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/facility/warehouse-wide.jpg"
              alt="Bags stacked on pallets in the warehouse"
              fill
              sizes="(min-width: 768px) 45vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page">
          <h2 className="text-2xl font-semibold md:text-3xl">Certificates</h2>
          <p className="mt-3 max-w-2xl text-ink-600">
            Copies of each certificate, with the issuing body, number and validity, are on the{" "}
            <Link href="/quality" className="link">
              quality page
            </Link>
            .
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="table-plain min-w-[560px]">
              <thead>
                <tr>
                  <th scope="col">Certificate</th>
                  <th scope="col">Issued by</th>
                  <th scope="col">Valid until</th>
                </tr>
              </thead>
              <tbody>
                {CERTIFICATES.map((c) => (
                  <tr key={c.id}>
                    <td>
                      <Link href={`/quality#${c.id}`} className="link">
                        {c.title}
                      </Link>
                    </td>
                    <td>{c.issuer.split(",")[0]}</td>
                    <td>{c.validUntil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-bone-200 py-12 md:py-16">
        <div className="container-page">
          <h2 className="text-2xl font-semibold md:text-3xl">Industries we serve</h2>
          <ul className="mt-4 grid gap-x-8 gap-y-1 text-ink-700 sm:grid-cols-2 lg:grid-cols-3">
            {company.industries.map((i) => (
              <li key={i} className="border-b border-ink-200 py-2">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2 className="text-2xl font-semibold md:text-3xl">Our plant at Erode</h2>
            <Link href="/manufacturing" className="link inline-block py-1.5 text-sm">
              More about manufacturing
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {PLANT_PHOTOS.map((p) => (
              <figure key={p.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-bone-200">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 30vw, 92vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-sm text-ink-500">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-100 bg-bone-200">
        <div className="container-page flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">Prices and orders</h2>
            <p className="mt-1 text-ink-600">
              Call{" "}
              <a href={telHref(mobiles[0])} className="link">
                {mobiles[0]}
              </a>{" "}
              or write to{" "}
              <a href={`mailto:${email}`} className="link break-all">
                {email}
              </a>
              .
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary self-start md:self-auto">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
