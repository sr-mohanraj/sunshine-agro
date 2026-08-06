"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import type { GalleryImage } from "@/lib/types";

export function ProductGallery({
  images,
  name,
}: {
  images: GalleryImage[];
  name: string;
}) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-50 ring-1 ring-ink-100 dark:bg-ink-700 dark:ring-ink-600">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(min-width: 1024px) 46vw, 92vw"
          className="animate-fade-up object-cover"
        />
      </div>

      {images.length > 1 && (
        <div
          className="scrollbar-none mt-3 flex gap-3 overflow-x-auto pb-1"
          role="tablist"
          aria-label={`${name} images`}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={img.alt}
              onClick={() => setIndex(i)}
              className={clsx(
                "focus-ring relative h-16 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition-all sm:h-20 sm:w-24",
                i === index
                  ? "ring-sun-500"
                  : "opacity-65 ring-transparent hover:opacity-100"
              )}
            >
              <Image src={img.src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      <p className="mt-3 text-[12.5px] leading-relaxed text-ink-400 dark:text-bone-200/50">
        {current.alt}
      </p>
    </div>
  );
}
