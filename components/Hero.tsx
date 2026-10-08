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
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 pb-10 lg:min-h-[92vh] lg:justify-center lg:pt-32 lg:pb-20">
      <Container className="relative flex flex-1 flex-col">
        <div className="grid flex-1 items-stretch gap-8 lg:flex-none lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div className="flex max-w-2xl flex-col lg:block">
            {/* texto centralizado no espaço livre, botões ancorados na base */}
            <div className="flex flex-1 flex-col justify-center lg:block">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="relative flex h-1.5 w-1.5"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-50" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-red" />
                  </span>
                  <span className="eyebrow text-accent">
                    Licenças · Antivírus · Consultoria
                  </span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="display-xl mt-7 text-balance text-ink">
                  Licenças Microsoft e antivírus para a sua empresa, sem pagar
                  pelo que não se usa.
                </h1>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-graphite lg:mt-7 lg:text-lg">
                  Fazemos a conta antes da compra: quantos usuários, quantos
                  dispositivos, quais servidores. Você recebe as opções, o custo
                  de cada uma e a recomendação — em português, não em contrato.
                </p>
              </Reveal>
            </div>

            <Reveal delay={220}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-9">
                <Link
                  href={routes.contato}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-accent px-7 py-4 text-sm font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-accent-deep"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href={routes.licencas}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-line-strong px-7 py-4 text-sm font-medium tracking-[-0.01em] text-ink transition-colors duration-300 hover:border-ink hover:bg-paper"
                >
                  Ver licenças
                  <ArrowRight className="h-4 w-4 text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* no celular a peça só empurrava o conteúdo para baixo e competia com
              o mapa do fundo; a partir do desktop ela volta */}
          <Parallax speed={-70} minWidth={1024} className="hidden lg:block">
            <Reveal delay={180} className="flex justify-center lg:justify-end">
              <HeroVisual tone="light" />
            </Reveal>
          </Parallax>
        </div>

        <Parallax speed={26} minWidth={768} className="hidden lg:block">
          <Reveal delay={280}>
            <ul className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 rounded-lg overflow-hidden">
              {heroIndicators.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-paper-pure px-5 py-4 lg:px-6 lg:py-5"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 bg-accent/60"
                  />
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
