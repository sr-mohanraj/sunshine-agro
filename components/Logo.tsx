import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  inverted?: boolean;
  className?: string;
  /** Render as a plain block rather than a link (for footers / menus). */
  static?: boolean;
};

export function Logo({ inverted = false, className, static: isStatic }: Props) {
  const content = (
    <>
      <Image
        src="/images/brand/mark.png"
        alt=""
        width={493}
        height={772}
        priority
        className="h-9 w-auto shrink-0 sm:h-10"
      />
      <span className="flex flex-col leading-none">
        <span
          className={clsx(
            "font-display text-[15px] font-bold uppercase tracking-[0.06em] sm:text-base",
            inverted ? "text-bone-100" : "text-ink-900 dark:text-bone-100"
          )}
        >
          Sunshine Agro
        </span>
        <span
          className={clsx(
            "mt-1 font-mono text-[9.5px] uppercase tracking-[0.24em] sm:text-[10px]",
            inverted ? "text-sun-300" : "text-sun-600 dark:text-sun-300"
          )}
        >
          Products
        </span>
      </span>
    </>
  );

  const classes = clsx("focus-ring flex items-center gap-2.5 rounded-lg", className);

  if (isStatic) return <div className={classes}>{content}</div>;

  return (
    <Link href="/" className={classes} aria-label="Sunshine Agro Products — home">
      {content}
    </Link>
  );
}
