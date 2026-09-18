"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export function ProductGallery({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-ink-100 bg-white">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, (min-width: 768px) 45vw, 92vw"
          className="object-contain"
        />
      </div>

      {images.length > 1 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1} of ${images.length}: ${img.alt}`}
                aria-pressed={i === index}
                className={clsx(
                  "focus-ring relative block h-14 w-[4.5rem] overflow-hidden rounded border bg-white",
                  i === index ? "border-sun-600 ring-1 ring-sun-600" : "border-ink-200 hover:border-ink-400"
                )}
              >
                <Image src={img.src} alt="" fill sizes="72px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
