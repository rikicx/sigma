import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * Título de seção.
 *
 * Sem rótulo em caixa alta acima do título: esse "eyebrow" aparecia em 18
 * lugares do site e é justamente o maneirismo que entrega página gerada por
 * IA. Quem separa as seções agora é a hierarquia — tamanho, peso e espaço.
 * O único kicker que sobrou no site é o do hero, e ele é escopo de marca.
 */
export function SectionHeading({
  title,
  description,
  tone = "light",
  align = "left",
  className = "",
}: {
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
        <h2
          className={`display-lg text-balance ${isDark ? "text-white" : "text-ink"}`}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={90}>
          <p
            className={`mt-6 max-w-[62ch] text-pretty text-base leading-relaxed md:text-lg ${
              align === "center" ? "mx-auto" : ""
            } ${isDark ? "text-white/65" : "text-graphite"}`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
