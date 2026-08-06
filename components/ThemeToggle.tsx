"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

export function ThemeToggle({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The server has no idea which theme the client resolves to, so the icon can
  // only be chosen after hydration; until then render a same-size placeholder
  // to keep the header from shifting.
  useEffect(() => setMounted(true), []);

  const dark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={clsx(
        "focus-ring flex h-11 w-11 items-center justify-center rounded-full transition-colors",
        inverted
          ? "text-white/85 hover:bg-white/15 hover:text-white"
          : "text-ink-600 hover:bg-ink-50 dark:text-bone-200 dark:hover:bg-white/10",
        className
      )}
    >
      {mounted ? (
        dark ? (
          <Sun className="h-[18px] w-[18px]" aria-hidden />
        ) : (
          <Moon className="h-[18px] w-[18px]" aria-hidden />
        )
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
