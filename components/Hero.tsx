import Link from "next/link";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Parallax } from "./ui/Parallax";
import { HeroVisual } from "./HeroVisual";
import { ArrowRight } from "./ui/icons";
import { heroIndicators, routes } from "@/lib/site";

/**
 * Primeira dobra da home.
 *
 * O título deixou de dividir a linha com a peça Σ e passou a ocupar a largura
 * cheia: é o que permite a escala grande sem espremer a medida. A peça foi
 * para o canto direito, atrás do conteúdo, e o texto de apoio desceu para uma
 * coluna estreita abaixo do título.
 *
 * A entrada é uma sequência só, no primeiro load: título, frase de apoio,
 * botões e indicadores, nessa ordem — ver `hero-rise` no globals.css.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 pb-10 lg:min-h-[92vh] lg:justify-center lg:pt-28 lg:pb-12">
      {/* a peça fica atrás do conteúdo, encostada na direita.
          A centragem vertical mora no contêiner e o parallax no filho: os dois
          escrevem em `transform`, e juntos um apagava o outro. */}
      <div className="pointer-events-none absolute right-2 top-1/2 hidden w-[400px] -translate-y-1/2 lg:block xl:right-[4%] xl:w-[470px]">
        <Parallax speed={-60} minWidth={1024}>
          <HeroVisual tone="light" />
        </Parallax>
      </div>

      <Container className="relative flex flex-1 flex-col">
        <div className="flex flex-1 flex-col lg:block">
          <div className="flex flex-1 flex-col justify-center lg:block">
            <div className="hero-rise flex items-center gap-3" style={{ "--d": "0ms" } as React.CSSProperties}>
              <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              <span className="eyebrow text-accent">
                Licenças · Antivírus · Consultoria
              </span>
            </div>

            {/* a medida fica no elemento que tem o tamanho do display: em ch
                no h1 ela seria calculada sobre o corpo de 16px */}
            <h1 className="mt-7 text-balance text-ink">
              <span
                className="hero-rise display-hero block max-w-[15ch]"
                style={{ "--d": "90ms" } as React.CSSProperties}
              >
                Licenças Microsoft e antivírus para a sua empresa.
              </span>
              <span
                className="hero-rise mt-4 block max-w-[26ch] text-[1.15rem] font-normal leading-snug tracking-[-0.015em] text-graphite lg:mt-5 lg:text-[1.6rem]"
                style={{ "--d": "260ms" } as React.CSSProperties}
              >
                Primeiro a conta. Depois a proposta.
              </span>
            </h1>

            <p
              className="hero-rise mt-7 max-w-[46ch] text-pretty text-base leading-relaxed text-graphite lg:mt-8 lg:text-[17px]"
              style={{ "--d": "380ms" } as React.CSSProperties}
            >
              Fazemos a conta antes da compra: quantos usuários, quantos
              dispositivos, quais servidores. Você recebe as opções, o custo de
              cada uma e a recomendação — em português, não em contrato.
            </p>
          </div>

          <div
            className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10"
            style={{ "--d": "500ms" } as React.CSSProperties}
          >
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
        </div>

        <Parallax speed={26} minWidth={768} className="hidden lg:block">
          <ul
            className="hero-rise mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
            style={{ "--d": "620ms" } as React.CSSProperties}
          >
            {heroIndicators.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-paper-pure px-5 py-4 lg:px-6 lg:py-5"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-accent/60" />
                <span className="text-[14px] font-medium tracking-[-0.01em] text-ink">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Parallax>
      </Container>
    </section>
  );
}
