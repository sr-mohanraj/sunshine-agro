import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import company from "@/data/company.json";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "Our manufacturing unit at Erode has a production capacity of 100 metric tons per day. Photos of the plant, packing and export loading.",
};

// Captions describe only what can be seen in each photograph.
const PHOTOS = [
  { src: "/images/facility/blending-hall.jpg", alt: "Two round steel vessels and a hopper on a blue floor", caption: "Mixing vessels and hopper" },
  { src: "/images/facility/milling-line.jpg", alt: "Inclined screw conveyor and milling equipment", caption: "Screw conveyor and milling equipment" },
  { src: "/images/facility/mixing-vessels.jpg", alt: "Steel mixing vessels beside a small mixer", caption: "Mixing vessels" },
  { src: "/images/facility/warehouse-wide.jpg", alt: "Stacks of bags on wooden pallets in the warehouse", caption: "Bags stacked on pallets in the warehouse" },
  { src: "/images/facility/export-pallets.jpg", alt: "Strapped pallets of bags in the warehouse", caption: "Palletised bags" },
  { src: "/images/facility/container-stuffing.jpg", alt: "Pallets of bags loaded inside a shipping container", caption: "Bags loaded into a container" },
];

const PACKING = [
  { k: "Nutriments-MDY", v: "25 kg and 40 kg HDPE paper bags with liner" },
  { k: "Nutrimins-DMM", v: "25 kg bags" },
  { k: "Sun Calci Gold", v: "300 g bottle" },
];

export default function ManufacturingPage() {
  const plant = company.addresses.plant;

  return (
    <>
      <PageHeader
        title="Manufacturing"
        lead={`Our manufacturing unit is at Erode, Tamil Nadu, with a production capacity of ${company.capacity}.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Manufacturing" }]}
      />

      <section className="py-12">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-ink-700">
            <p>
              Sunshine Agro Products has its own facility at Erode and a corporate office in Chennai. We are
              considered one of the pioneer yeast manufacturing companies in India.
            </p>
            <p>
              Our track record covers two decades of contribution to the aqua and poultry industry in India.
              The unit holds ISO 9001:2015, GMP+, FAMI-QS, GMP, HACCP and Halal certificates. Copies are on
              the{" "}
              <Link href="/quality" className="link">
                quality page
              </Link>
              .
            </p>
          </div>
          <address className="self-start rounded-md border border-ink-100 bg-bone-200 p-5 not-italic text-ink-700">
            <p className="font-semibold text-ink-900">{plant.label}</p>
            {plant.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </address>
        </div>
      </section>

      <section className="bg-bone-200 py-12">
        <div className="container-page">
          <h2 className="text-2xl font-semibold md:text-3xl">Photos of the plant</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTOS.map((p) => (
              <figure key={p.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-sm text-ink-500">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-semibold md:text-3xl">Packing and dispatch</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="table-plain">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Packing</th>
                </tr>
              </thead>
              <tbody>
                {PACKING.map((r) => (
                  <tr key={r.k}>
                    <td>{r.k}</td>
                    <td>{r.v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-ink-700">
            For export consignments, bags are stacked on pallets and loaded into containers. The 25 kg bags
            print the batch number and manufacturing date on the bag, with the instruction &ldquo;use no
            hooks&rdquo;.
          </p>
        </div>
      </section>
    </>
  );
}
