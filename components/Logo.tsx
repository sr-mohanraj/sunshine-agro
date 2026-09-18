import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

/**
 * The logo mark is orange line art drawn for a black background, so it always
 * sits on a dark tile, the way it appears on the company's own artwork.
 */
export function Logo({ dark = false, link = true }: { dark?: boolean; link?: boolean }) {
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded bg-ink">
        <Image
          src="/images/brand/mark.png"
          alt=""
          width={493}
          height={772}
          className="h-8 w-auto"
          priority
        />
      </span>
      <span className="leading-tight">
        <span
          className={clsx(
            "block font-display text-lg font-semibold",
            dark ? "text-white" : "text-ink-900"
          )}
        >
          Sunshine Agro Products
        </span>
        <span className={clsx("hidden text-xs sm:block", dark ? "text-ink-300" : "text-ink-400")}>
          Aqua, poultry &amp; livestock nutrition
        </span>
      </span>
    </>
  );

  const cls = "flex items-center gap-3";
  if (!link) return <div className={cls}>{content}</div>;
  return (
    <Link href="/" className={clsx(cls, "focus-ring rounded")} aria-label="Sunshine Agro Products, home">
      {content}
    </Link>
  );
}
