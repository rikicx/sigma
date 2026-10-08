import Link from "next/link";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Parallax } from "./ui/Parallax";
import { HeroVisual } from "./HeroVisual";
import { ArrowRight } from "./ui/icons";
import { heroIndicators, routes } from "@/lib/site";

/** Primeira dobra da home: clara, curta e com a oferta explícita. */
export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-red" />
                </span>
                <span className="eyebrow text-accent">Licenças · Antivírus · Consultoria</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display-xl mt-7 text-balance text-ink">
                Licenças Microsoft e antivírus para empresas, com quem explica a decisão.
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-graphite md:text-lg">
                A Sigma Brasil vende e dimensiona o software que a sua operação precisa —
                sem licença sobrando, sem licença faltando e sem contrato que ninguém
                entende.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={routes.contato}
                  className="group inline-flex items-center justify-center gap-2.5 bg-accent px-7 py-4 text-sm font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-accent-deep"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href={routes.licencas}
                  className="group inline-flex items-center justify-center gap-2.5 border border-line-strong px-7 py-4 text-sm font-medium tracking-[-0.01em] text-ink transition-colors duration-300 hover:border-ink hover:bg-paper"
                >
                  Ver licenças
                  <ArrowRight className="h-4 w-4 text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Parallax speed={-70} minWidth={1024}>
            <Reveal delay={180} className="flex justify-center lg:justify-end">
              <HeroVisual tone="light" />
            </Reveal>
          </Parallax>
        </div>

        <Parallax speed={26} minWidth={768}>
          <Reveal delay={280}>
            <ul className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {heroIndicators.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-paper-pure px-6 py-5"
              >
                <span className="font-mono text-[10px] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] font-medium tracking-[-0.01em] text-ink">
                  {item}
                </span>
              </li>
            ))}
            </ul>
          </Reveal>
        </Parallax>
      </Container>
    </section>
  );
}
