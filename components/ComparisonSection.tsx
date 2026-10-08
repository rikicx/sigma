import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { CheckMark, CrossMark, ArrowRight } from "./ui/icons";
import { comparison } from "@/lib/site";

export function ComparisonSection() {
  return (
    <section
      id="comparativo"
      className="relative border-t border-line py-24 md:py-32"
      aria-labelledby="comparativo-titulo"
    >
      <Container className="relative">
        <SectionHeading
          align="center"
          title={
            <span id="comparativo-titulo">
              A mesma compra, com dois resultados diferentes.
            </span>
          }
          description="A diferença entre contratar software e estruturar uma decisão de tecnologia aparece no custo, no risco e na tranquilidade da renovação seguinte."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <article className="h-full rounded-lg border border-line bg-paper-pure/70 p-8 md:p-10">
              <header className="flex items-center justify-between border-b border-line pb-6">
                <h3 className="text-[18px] font-medium tracking-[-0.02em] text-graphite">
                  Comprar software sem consultoria
                </h3>
                <span className="eyebrow text-mute-soft">Cenário A</span>
              </header>
              <ul className="mt-8 space-y-5">
                {comparison.without.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-line-strong text-mute">
                      <CrossMark className="h-3 w-3" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-mute">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="relative h-full overflow-hidden rounded-lg bg-ink p-8 md:p-10">
              <div
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-[90px]"
                aria-hidden="true"
              />
              <div className="relative">
                <header className="flex items-center justify-between border-b border-white/10 pb-6">
                  <h3 className="text-[18px] font-medium tracking-[-0.02em] text-white">
                    Comprar com a Sigma Brasil
                  </h3>
                  <span className="eyebrow text-brand-red-bright">
                    Cenário B
                  </span>
                </header>
                <ul className="mt-8 space-y-5">
                  {comparison.with.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-brand-red text-white">
                        <CheckMark className="h-3 w-3" />
                      </span>
                      <span className="text-[15px] leading-relaxed text-white/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="group mt-10 inline-flex items-center gap-2 border-t border-white/10 pt-6 text-[13px] font-medium text-white"
                >
                  Começar pelo diagnóstico
                  <ArrowRight className="h-3.5 w-3.5 text-accent-bright transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
