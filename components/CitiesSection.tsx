"use client";

import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Parallax } from "./ui/Parallax";
import { contact } from "@/lib/site";

/**
 * Atuação nacional, com as filiais do Rio e de São Paulo em fotografia tratada.
 *
 * As imagens entram em duotone azul-marinho (dessaturadas + camada da cor da
 * marca em mix-blend-color), o que tira o ar de banco de imagens e amarra à
 * identidade. No hover a cor volta, a foto avança e a régua vermelha corre sob
 * o nome da cidade. No scroll, a imagem desliza dentro do quadro.
 *
 * ⚠️ LICENÇA DAS IMAGENS: confirmar o direito de uso das duas fotos antes de
 * publicar. Arquivos em /public/cidades.
 */

const cities = [
  {
    name: "Rio de Janeiro",
    landmark: "Cristo Redentor",
    detail: `${contact.offices[0].street}, ${contact.offices[0].district}`,
    src: "/cidades/rio-cristo-redentor.jpg",
    alt: "Cristo Redentor no alto do Corcovado, com a cidade do Rio de Janeiro e o mar ao fundo",
    width: 800,
    height: 1200,
    // janela mais baixa na foto: o Cristo sobe no quadro e a cidade entra embaixo
    focus: "object-[50%_52%]",
  },
  {
    name: "São Paulo",
    landmark: "Ponte Estaiada",
    // ⚠️ PENDENTE: telefone de São Paulo não foi informado.
    detail: `${contact.offices[1].street}, ${contact.offices[1].district}`,
    src: "/cidades/sao-paulo-ponte-estaiada.jpg",
    alt: "Ponte Octávio Frias de Oliveira sobre a Marginal Pinheiros, com os edifícios da Berrini ao fundo, em São Paulo",
    width: 900,
    height: 1200,
    // a ponte fica na metade inferior da foto
    focus: "object-[55%_62%]",
  },
];

export function CitiesSection() {
  return (
    <section
      className="relative border-y border-line py-20 md:py-28"
      aria-labelledby="cidades-titulo"
    >
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2
              id="cidades-titulo"
              className="display-lg text-balance text-ink"
            >
              Atuação em todo o Brasil
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-pretty text-[15.5px] leading-relaxed text-graphite">
              Com filiais no Rio de Janeiro e em São Paulo, atendemos empresas
              em todo o território nacional, oferecendo soluções em
              licenciamento Microsoft e segurança Kaspersky.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cities.map((city, index) => (
            <Reveal key={city.name} delay={index * 110}>
              <article className="group relative overflow-hidden rounded-lg bg-ink">
                {/* altura em vh com teto: a moldura nunca passa de meia tela,
                    independentemente do tamanho do monitor */}
                <div className="relative h-[clamp(260px,48vh,460px)] overflow-hidden">
                  <Parallax
                    speed={22}
                    minWidth={768}
                    className="absolute inset-[-7%]"
                  >
                    <Image
                      src={city.src}
                      alt={city.alt}
                      width={city.width}
                      height={city.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`h-full w-full scale-[1.02] object-cover ${city.focus} grayscale contrast-[1.08] transition-[transform,filter] duration-[900ms] ease-out group-hover:scale-[1.08] group-hover:grayscale-0 group-hover:contrast-100`}
                      priority={false}
                    />
                  </Parallax>

                  {/* duotone da marca: some no hover e devolve a cor da foto */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-accent/70 mix-blend-color transition-opacity duration-[900ms] group-hover:opacity-0"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-accent/25 transition-opacity duration-[900ms] group-hover:opacity-0"
                  />
                  {/* base escura para o texto ter contraste em qualquer foto */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/85 via-ink/25 to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                      {city.landmark}
                    </span>
                    <h3 className="mt-2 text-[24px] font-medium tracking-[-0.025em] text-white">
                      {city.name}
                    </h3>
                    {/* régua que corre no hover */}
                    <span
                      aria-hidden="true"
                      className="mt-4 block h-px w-10 bg-brand-red-bright transition-all duration-700 ease-out group-hover:w-full"
                    />
                    <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/75">
                      {city.detail}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
