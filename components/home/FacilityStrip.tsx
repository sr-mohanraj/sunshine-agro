import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const SHOTS = [
  {
    src: "/images/facility/blending-hall.jpg",
    alt: "Stainless steel blending vessels on an epoxy-coated production floor at the Erode plant",
    caption: "Blending hall",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/facility/milling-line.jpg",
    alt: "Screw conveyor and pulveriser feeding the milling line",
    caption: "Milling & conveying",
    span: "",
  },
  {
    src: "/images/facility/mixing-vessels.jpg",
    alt: "Mixing vessels and a charging hopper in the production area",
    caption: "Mixing & charging",
    span: "",
  },
  {
    src: "/images/facility/warehouse-wide.jpg",
    alt: "Finished 25 kg bags stacked on wooden pallets across the warehouse floor",
    caption: "Finished goods store",
    span: "sm:col-span-2",
  },
];

export function FacilityStrip() {
  return (
    <section className="bg-bone-100 py-20 dark:bg-ink-900 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Manufacturing"
            title="A 100 MT-per-day plant at Erode."
            lead="Our own facility — not a toll manufacturer. Epoxy-sealed floors, dedicated blending and milling halls, and a finished-goods store that lets us hold stock for scheduled dispatch rather than making customers wait on a batch."
          />
          <Reveal delay={0.15}>
            <Link
              href="/manufacturing"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-sun-500 hover:text-sun-600 dark:border-white/20 dark:text-bone-100 dark:hover:border-sun-400 dark:hover:text-sun-300"
            >
              Inside the plant
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[180px] gap-4 sm:auto-rows-[200px] sm:grid-cols-4">
          {SHOTS.map((shot, i) => (
            <Reveal
              key={shot.src}
              delay={i * 0.07}
              className={`group relative overflow-hidden rounded-2xl ${shot.span}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 640px) 45vw, 92vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/85 to-transparent p-4 pt-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-bone-100">
                  {shot.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
