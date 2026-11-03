import Link from "next/link";
import { Container } from "./ui/Container";
import { Parallax } from "./ui/Parallax";
import { HeroVideo } from "./HeroVideo";
import { ArrowRight, WhatsAppIcon } from "./ui/icons";
import { contact, heroIndicators, routes } from "@/lib/site";

/**
 * Primeira dobra da home.
 *
 * A abertura apresenta a empresa — quem é a Sigma Brasil e como ela trabalha.
 * Os produtos ficam para as seções seguintes (feedback do cliente, 19/10/2026).
 * O parágrafo da proposta desceu para a ProposalSection, logo abaixo, para
 * aliviar a primeira dobra.
 *
 * Fundo em vídeo (pessoas trabalhando, servidores) sob um degradê do azul para
 * o vermelho da marca, com o texto em branco. O texto fica à esquerda, onde o
 * degradê é mais denso, e uma base escura embaixo garante o contraste dos
 * indicadores em qualquer quadro do vídeo.
 *
 * A entrada é uma sequência só, no primeiro load: título, frase de apoio,
 * botões e indicadores, nessa ordem — ver `hero-rise` no globals.css.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-accent-deep">
      <HeroVideo />
      {/* degradê da marca: azul denso à esquerda, vermelho à direita */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-accent-deep/95 via-accent/80 to-brand-red/75"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-ink/30"
      />

      {/* Centragem no viewport: dois espaçadores dividem a sobra por igual,
          um em cima e outro embaixo. A base é 0px, não 0%: com a seção só
          com altura mínima, 0% vira "auto" e o de baixo levava a altura dos
          indicadores a mais. Padding nunca vai no espaçador (somaria à base);
          fica no conteúdo. O de cima tem a altura mínima do cabeçalho; o de
          baixo carrega os indicadores e, em tela baixa, cresce até eles
          caberem — o texto sobe, sem sobreposição. */}
      <div aria-hidden="true" className="min-h-24 flex-[1_1_0px]" />

      <Container className="relative">
        {/* no desktop o bloco ocupa metade da largura (pedido do cliente) e o
            título escala para que "Sigma Brasil." preencha essa metade:
            a coluna é (contêiner − 80px de respiro) / 2, e a linha mede
            ~5,5× o corpo da fonte — daí o /11 */}
        <div className="lg:w-1/2">
          <div>
            <div className="hero-rise flex items-center gap-3" style={{ "--d": "0ms" } as React.CSSProperties}>
              <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red-bright opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-red-bright" />
              </span>
              <span className="eyebrow text-white/85">Quem somos</span>
            </div>

            {/* a medida fica no elemento que tem o tamanho do display: em ch
                no h1 ela seria calculada sobre o corpo de 16px */}
            <h1 className="mt-7 text-balance text-white">
              <span
                className="hero-rise display-hero block max-w-[15ch] lg:max-w-none lg:text-[clamp(5rem,calc((min(100vw,1280px)-80px)/11),6.8rem)]"
                style={{ "--d": "90ms" } as React.CSSProperties}
              >
                {/* quebra fixa: a linha de baixo é a mais longa e define a largura */}
                Somos a <br />
                Sigma Brasil.
              </span>
              <span
                className="hero-rise mt-4 block max-w-[26ch] lg:max-w-none text-[1.15rem] font-normal leading-snug tracking-[-0.015em] text-white/85 lg:mt-5 lg:text-[1.6rem]"
                style={{ "--d": "260ms" } as React.CSSProperties}
              >
                Licenciamento de software e consultoria para empresas.
              </span>
            </h1>

            <p
              className="hero-rise mt-7 max-w-[46ch] lg:max-w-none text-pretty text-base leading-relaxed text-white/80 lg:mt-8 lg:text-[17px]"
              style={{ "--d": "380ms" } as React.CSSProperties}
            >
              Comercializamos licenças Microsoft e soluções de segurança
              Kaspersky com uma abordagem consultiva, focada nas necessidades
              reais da sua empresa. Antes de elaborar o orçamento, analisamos a
              quantidade de usuários, dispositivos e servidores para identificar
              as opções mais adequadas ao seu ambiente de TI.
            </p>
          </div>

          <div
            className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10"
            style={{ "--d": "500ms" } as React.CSSProperties}
          >
            <Link
              href={routes.contato}
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-white px-7 py-4 text-sm font-medium tracking-[-0.01em] text-accent transition-colors duration-300 hover:bg-brand-red hover:text-white"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/35 bg-white/10 px-7 py-4 text-sm font-medium tracking-[-0.01em] text-white backdrop-blur-sm transition-colors duration-300 hover:border-white hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </Container>

      <div className="relative flex min-h-10 flex-[1_1_0px] flex-col justify-end">
        <Container className="hidden pt-6 pb-8 lg:block">
          <Parallax speed={26} minWidth={768}>
            <ul
              className="hero-rise grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4"
              style={{ "--d": "620ms" } as React.CSSProperties}
            >
              {heroIndicators.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-ink/25 px-5 py-4 lg:px-6 lg:py-5"
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-brand-red-bright" />
                  <span className="text-[14px] font-medium tracking-[-0.01em] text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Parallax>
        </Container>
      </div>
    </section>
  );
}
