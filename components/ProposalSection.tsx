import Image from "next/image";
import Link from "next/link";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { ArrowRight } from "./ui/icons";
import { routes } from "@/lib/site";

/**
 * Home: complemento do hero. Recebe o parágrafo da proposta, que saiu da
 * primeira dobra para aliviar o texto, e traz fotos de mulheres trabalhando
 * com tecnologia (pedido do cliente, 03/11/2026).
 *
 * Fotos do Pexels (licença gratuita, uso comercial): 3861958 e 8117407. São
 * banco de imagens, então o texto não as apresenta como a equipe da Sigma.
 */
export function ProposalSection() {
  return (
    <section
      id="proposta"
      className="scroll-mt-20 bg-paper py-20 md:py-28"
      aria-labelledby="proposta-titulo"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-ink">
                <Image
                  src="/equipe/mulher-ti-monitores.jpg"
                  alt="Profissional de TI trabalhando diante de dois monitores com código e um notebook"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-[70%_40%]"
                />
              </div>
            </Reveal>
            {/* a segunda foto avança sobre a primeira; a borda da cor do fundo
                separa as duas sem precisar de sombra pesada */}
            <Reveal delay={120}>
              <div className="relative -mt-14 ml-auto aspect-[3/2] w-[58%] overflow-hidden rounded-lg border-[6px] border-paper bg-ink sm:-mt-20">
                <Image
                  src="/equipe/mulheres-trabalhando-escritorio.jpg"
                  alt="Duas mulheres trabalhando em notebooks numa mesa de escritório"
                  fill
                  sizes="(max-width: 1024px) 58vw, 32vw"
                  className="object-cover object-[40%_45%]"
                />
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <span className="eyebrow text-accent">Como trabalhamos</span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="proposta-titulo"
                className="mt-5 display-lg text-balance text-ink"
              >
                Uma proposta clara para decidir com segurança.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-lg text-pretty text-[15.5px] leading-relaxed text-graphite">
                Você recebe uma proposta clara, com as alternativas disponíveis,
                os respectivos custos e nossa recomendação técnica, tudo
                explicado de forma simples, objetiva e transparente, para que
                você tome a melhor decisão com segurança.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <Link
                href={routes.consultoria}
                className="group mt-9 inline-flex items-center gap-2.5 text-sm font-medium tracking-[-0.01em] text-accent transition-colors hover:text-brand-red"
              >
                Conheça a consultoria
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
