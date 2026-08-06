import Image from "next/image";
import { Quote } from "lucide-react";
import company from "@/data/company.json";
import { Reveal } from "@/components/Reveal";

export function LeadershipNote() {
  const { proprietor } = company;

  return (
    <section className="bg-bone-200 py-20 dark:bg-ink-800 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:gap-10 sm:text-left">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-ink-100 dark:ring-ink-600 sm:h-32 sm:w-32">
            <Image
              src={proprietor.image}
              alt={`${proprietor.name}, ${proprietor.role} of Sunshine Agro Products`}
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>

          <div>
            <Quote className="mx-auto h-7 w-7 text-sun-500 sm:mx-0" aria-hidden />
            <blockquote className="mt-4 font-display text-[clamp(1.15rem,2.4vw,1.6rem)] font-semibold leading-snug tracking-[-0.015em] text-ink-900 dark:text-bone-100">
              {proprietor.quote}
            </blockquote>
            <p className="mt-5 text-sm font-semibold text-ink-800 dark:text-bone-100">
              {proprietor.name}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sun-600 dark:text-sun-300">
              {proprietor.role} · Sunshine Agro Products
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
