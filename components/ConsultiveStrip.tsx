"use client";

import Link from "next/link";
import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Parallax } from "./ui/Parallax";
import { ArrowRight, icons } from "./ui/icons";
import { routes } from "@/lib/site";

const highlights = [
  {
    icon: "gauge" as const,
    title: "Dimensionamento antes da compra",
    text: "Quantos usuários, quantos dispositivos, quais servidores — a conta é feita antes do orçamento.",
  },
  {
    icon: "brackets" as const,
    title: "Linguagem simples",
    text: "Regras de licenciamento traduzidas no que importa: custo, risco e operação.",
  },
  {
    icon: "support" as const,
    title: "Acompanhamento depois",
    text: "Renovação, mudança de política e crescimento do ambiente seguem acompanhados.",
  },
];

/** Home: a consultoria como diferencial da venda, com link para a página dedicada. */
export function ConsultiveStrip() {
  return (
    <section className="relative border-y border-line py-20 md:py-28">
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Parallax speed={38} minWidth={1024}>
            <Reveal>
              <h2 className="display-lg text-balance text-ink">
                Licença todo mundo vende. Explicar a decisão, não.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-lg text-pretty text-[15.5px] leading-relaxed text-graphite">
                Comprar software sem orientação custa caro de dois jeitos:
                pagando pelo que ninguém usa ou descobrindo tarde que faltou
                licença. Nosso trabalho é eliminar os dois cenários antes de
                você assinar.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <Link
                href={routes.consultoria}
                className="group mt-8 inline-flex items-center gap-2 py-2 text-[14px] font-medium text-ink transition-colors hover:text-accent"
              >
                Conhecer o método Sigma
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </Parallax>

          {/* bloco único em azul da marca; a fumaça vermelha segue o cursor */}
          <ul className="grid divide-y divide-white/10 overflow-hidden bg-accent">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <HighlightItem item={item} />
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/** Item do bloco: o brilho vermelho nasce na posição do ponteiro. */
function HighlightItem({ item }: { item: (typeof highlights)[number] }) {
  const ref = useRef<HTMLLIElement>(null);
  const Icon = icons[item.icon];

  const follow = (event: ReactPointerEvent<HTMLLIElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <li
      ref={ref}
      onPointerMove={follow}
      className="group relative h-full overflow-hidden px-8 py-8 [--mx:50%] [--my:50%]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/70 opacity-0 blur-[48px] transition-opacity duration-500 ease-out group-hover:opacity-100"
        style={{ left: "var(--mx)", top: "var(--my)" }}
      />

      <div className="relative flex items-start gap-5">
        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white/80 transition-colors duration-500 group-hover:border-white/50 group-hover:text-white">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-[21px] font-medium leading-snug tracking-[-0.025em] text-white md:text-[22px]">
            {item.title}
          </h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-white/70 transition-colors duration-500 group-hover:text-white/90">
            {item.text}
          </p>
        </div>
      </div>
    </li>
  );
}
