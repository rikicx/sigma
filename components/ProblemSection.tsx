import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { problems } from "@/lib/site";

export function ProblemSection() {
  return (
    <section
      id="problema"
      className="relative py-24 md:py-32"
      aria-labelledby="problema-titulo"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            title={
              <span id="problema-titulo">
                Licenciamento de software não deveria ser uma decisão no escuro.
              </span>
            }
          />
          <Reveal delay={120}>
            <p className="max-w-sm text-pretty text-[15px] leading-relaxed text-graphite lg:text-right">
              Traduzimos cenário técnico e proposta comercial em uma decisão
              simples: o que contratar, quanto custa e o que acontece se não for
              assim.
            </p>
          </Reveal>
        </div>

        {/* lista com fio, não grade de seis caixas idênticas: são sintomas de
            um mesmo problema, não seis produtos */}
        <dl className="mt-14 grid gap-x-16 border-t border-line sm:grid-cols-2">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delay={(index % 2) * 60}>
              <div className="group border-b border-line py-7">
                <dt className="flex items-baseline gap-3 text-[18px] font-medium leading-snug tracking-[-0.022em] text-ink">
                  <span
                    aria-hidden="true"
                    className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-brand-red/70 transition-transform duration-500 group-hover:scale-150"
                  />
                  {problem.title}
                </dt>
                <dd className="mt-2.5 pl-[1.125rem] text-[14.5px] leading-relaxed text-graphite">
                  {problem.text}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
