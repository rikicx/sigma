import Link from "next/link";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, WhatsAppIcon, icons } from "./ui/icons";
import { antivirusTopics, routes, whatsappLink } from "@/lib/site";

/**
 * Home: Kaspersky como linha própria, separada do portfólio Microsoft.
 * Faixa cinza para se distinguir da seção anterior; o vermelho da marca marca
 * a linha de segurança, como já acontecia no card antigo.
 */
export function KasperskyLine() {
  const Shield = icons.shield;

  return (
    <section
      id="antivirus-kaspersky"
      className="scroll-mt-20 border-y border-fog-line bg-fog py-20 md:py-28"
      aria-labelledby="kaspersky-titulo"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <h2
                id="kaspersky-titulo"
                className="display-lg text-balance text-ink"
              >
                Antivírus Kaspersky
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-6 max-w-[52ch] text-pretty text-base leading-relaxed text-graphite md:text-lg">
                Proteção para as estações de trabalho e os servidores da
                empresa, licenciada pelo número real de dispositivos. A
                renovação quem acompanha somos nós.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={whatsappLink(
                    "Olá, gostaria de um orçamento de antivírus Kaspersky com a Sigma Brasil.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-orcamento"
                  data-produto="kaspersky"
                  className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-brand-red px-7 py-4 text-sm font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-accent"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Solicitar orçamento
                </a>
                <Link
                  href={routes.antivirus}
                  className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg border border-line-strong bg-white/60 px-7 py-4 text-sm font-medium tracking-[-0.01em] text-ink transition-colors duration-300 hover:border-ink hover:bg-white"
                >
                  Ver antivírus corporativo
                  <ArrowRight className="h-4 w-4 text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-lg border border-fog-line bg-white">
              <div className="relative h-32 overflow-hidden bg-ink md:h-36">
                <div
                  aria-hidden="true"
                  className="grid-technical-dark absolute inset-0 opacity-70 [background-size:24px_24px]"
                />
                <Shield
                  aria-hidden="true"
                  className="absolute -bottom-10 -right-6 h-48 w-48 text-white/[0.07]"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[3px] w-full bg-brand-red-bright"
                />
                <span className="absolute left-6 top-5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/75">
                  Kaspersky para empresas
                </span>
                <span className="absolute bottom-5 left-6 flex h-11 w-11 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white">
                  <Shield className="h-6 w-6" />
                </span>
              </div>
              <ul className="divide-y divide-fog-line">
                {antivirusTopics.map((topic) => (
                  <li key={topic.id} className="flex gap-4 px-6 py-5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-red"
                    />
                    <div>
                      <h3 className="text-[16.5px] font-medium tracking-[-0.02em] text-ink">
                        {topic.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-graphite">
                        {topic.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
