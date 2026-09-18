import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import company from "@/data/company.json";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Sunshine Agro Products was established in 2003 in Chennai. We make feed supplements for aqua, poultry and livestock nutrition at our unit in Erode.",
};

export default function AboutPage() {
  const { addresses, proprietor } = company;

  return (
    <>
      <PageHeader
        title="About us"
        lead={`Established in ${company.founded} in Chennai, Tamil Nadu.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
      />

      <section className="py-12">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-ink-700">
            <p>
              Sunshine Agro Products is an animal feed additives company offering specialised feed
              supplements for aqua, poultry and livestock nutrition. Through our field experience, our
              products have helped the animal feed industry improve its profitability.
            </p>
            <p>
              We believe in furthering traditional knowledge through research: applying modern parameters,
              confirming results in field trials and standardising products for assured quality. Products
              are developed by clearly defining the problem and understanding the nutrition, animal
              physiology and field performance involved.
            </p>
            <p>
              We have tie-up arrangements with a few renowned universities, veterinary colleges and research
              centres for conducting trials. These are followed up on commercial farms in diverse climates
              and geographical locations, including other countries, to confirm results.
            </p>
            <p>
              Our own facility is at Erode, with a production capacity of {company.capacity}. The corporate
              office is in Chennai. Our track record covers two decades of contribution to the aqua and
              poultry industry in India.
            </p>
          </div>
          <div className="relative aspect-[4/3] self-start overflow-hidden rounded-md">
            <Image
              src="/images/facility/milling-line.jpg"
              alt="Screw conveyor and milling equipment at the Erode plant"
              fill
              sizes="(min-width: 768px) 45vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-bone-200 py-12">
        <div className="container-page grid gap-8 md:grid-cols-[14rem_1fr] md:items-start">
          <figure>
            <Image
              src={proprietor.photo}
              alt={`${proprietor.name}, ${proprietor.role}`}
              width={900}
              height={1125}
              sizes="224px"
              className="h-auto w-44 rounded-md md:w-56"
            />
            <figcaption className="mt-2 text-sm text-ink-500">
              {proprietor.name}, {proprietor.role}
            </figcaption>
          </figure>
          <div className="max-w-2xl space-y-4 text-ink-700">
            <h2 className="text-2xl font-semibold md:text-3xl">Chairman&rsquo;s vision</h2>
            <p>
              The core purpose of our enterprise is to contribute an antibiotic-free supplement to the aqua
              industry. The aqua farming industry is one of the most sensitive industries, because every
              external or internal factor affects the yield.
            </p>
            <p>
              At Sunshine Agro Products we make sure that the products we manufacture meet government
              standards. Our experienced team understands the nuances of handling different products and
              maintaining their quality through the process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <h2 className="text-2xl font-semibold md:text-3xl">Industries we serve</h2>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {company.industries.map((i) => (
              <li key={i} className="border-b border-ink-100 py-2 text-ink-700">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink-100 bg-bone-200 py-12">
        <div className="container-page">
          <h2 className="text-2xl font-semibold md:text-3xl">Our offices</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {[addresses.office, addresses.plant].map((a) => (
              <address key={a.label} className="not-italic text-ink-700">
                <p className="font-semibold text-ink-900">{a.label}</p>
                {a.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </address>
            ))}
          </div>
          <p className="mt-6">
            <Link href="/contact" className="link font-semibold">
              Contact details
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
