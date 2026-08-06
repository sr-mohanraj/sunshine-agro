import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "outlineOnDark";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-sun-gradient text-ink-900 font-semibold shadow-[0_6px_20px_-6px_rgba(242,106,33,0.6)] hover:brightness-105 active:brightness-95",
  secondary:
    "bg-ink-900 text-bone-100 hover:bg-ink-700 dark:bg-bone-100 dark:text-ink-900 dark:hover:bg-bone-300",
  // Follows the page theme - only use on surfaces that flip with it.
  outline:
    "border border-ink-900/20 text-ink-800 hover:border-sun-500 hover:text-sun-600 dark:border-white/25 dark:text-bone-200 dark:hover:border-sun-400 dark:hover:text-sun-300",
  // Fixed light-on-dark. Hero plates and CTA bands stay dark in both themes, so
  // a theme-reactive outline would render dark-on-dark in light mode.
  outlineOnDark:
    "border border-white/25 text-bone-100 hover:border-sun-400 hover:bg-white/5 hover:text-sun-300",
  ghost:
    "text-ink-700 hover:bg-ink-50 dark:text-bone-200 dark:hover:bg-white/10",
};

const SIZES: Record<Size, string> = {
  sm: "h-10 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-7 text-[15px]",
};

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  ...rest
}: Props) {
  const classes = clsx(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer noopener">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
