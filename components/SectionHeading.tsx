import clsx from "clsx";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  inverted = false,
  className,
}: Props) {
  return (
    <Reveal
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={clsx("eyebrow mb-3", inverted && "text-sun-300")}>{eyebrow}</p>
      )}
      <h2
        className={clsx(
          "font-display text-[clamp(1.75rem,4vw,2.85rem)] font-bold leading-[1.1] tracking-[-0.02em]",
          inverted ? "text-bone-100" : "text-ink-900 dark:text-bone-100"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed sm:text-[17px]",
            inverted ? "text-bone-200/75" : "text-ink-500 dark:text-bone-200/75"
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
