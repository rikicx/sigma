import Link from "next/link";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Parallax } from "./ui/Parallax";
import { ArrowRight } from "./ui/icons";
import { routes } from "@/lib/site";

const highlights = [
  {
    title: "Dimensionamento antes da compra",
    text: "Quantos usuários, quantos dispositivos, quais servidores — a conta é feita antes do orçamento.",
  },
  {
    title: "Linguagem simples",
    text: "Regras de licenciamento traduzidas no que importa: custo, risco e operação.",
  },
  {
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
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
                <span className="eyebrow text-accent">O diferencial</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-5 text-balance text-ink">
                Licença todo mundo vende. Explicar a decisão, não.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-lg text-pretty text-[15.5px] leading-relaxed text-graphite">
                Comprar software sem orientação custa caro de dois jeitos: pagando
                pelo que ninguém usa ou descobrindo tarde que faltou licença. Nosso
                trabalho é eliminar os dois cenários antes de você assinar.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <Link
                href={routes.consultoria}
                className="group mt-9 inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-accent"
              >
                Conhecer o método Sigma
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </Parallax>

          {/* bloco único em azul da marca; no hover, uma fumaça vermelha sobe
              por trás do texto */}
          <ul className="grid divide-y divide-white/10 overflow-hidden bg-accent">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <li className="group relative h-full overflow-hidden px-8 py-8">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-10 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
                  >
                    <span className="absolute left-[18%] top-1/2 h-44 w-2/3 -translate-y-1/2 rounded-full bg-brand-red/70 blur-3xl" />
                    <span className="absolute right-[6%] top-0 h-36 w-1/2 rounded-full bg-brand-red-bright/40 blur-3xl" />
                  </span>

                  <span
                    aria-hidden="true"
                    className="relative block h-px w-8 bg-white/35 transition-all duration-500 group-hover:w-16 group-hover:bg-white"
                  />
                  <h3 className="relative mt-5 text-[17px] font-medium tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-[14.5px] leading-relaxed text-white/70 transition-colors duration-500 group-hover:text-white/90">
                    {item.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
