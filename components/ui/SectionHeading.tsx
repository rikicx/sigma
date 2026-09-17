import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      <Reveal>
        <div
          className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          <span
            aria-hidden="true"
            className={`h-px w-8 ${isDark ? "bg-accent-bright/60" : "bg-accent/50"}`}
          />
          <span className={`eyebrow ${isDark ? "text-accent-bright" : "text-accent"}`}>
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`display-lg mt-5 text-balance ${isDark ? "text-white" : "text-ink"}`}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={150}>
          <p
            className={`mt-6 max-w-2xl text-pretty text-base leading-relaxed md:text-lg ${
              align === "center" ? "mx-auto" : ""
            } ${isDark ? "text-white/60" : "text-graphite"}`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
