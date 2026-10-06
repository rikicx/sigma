import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { problems } from "@/lib/site";

export function ProblemSection() {
  return (
    <section id="problema" className="relative py-24 md:py-32" aria-labelledby="problema-titulo">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="O problema"
            title={
              <span id="problema-titulo">
                Licenciamento de software não deveria ser uma decisão no escuro.
              </span>
            }
          />
          <Reveal delay={120}>
            <p className="max-w-sm text-pretty text-[15px] leading-relaxed text-graphite lg:text-right">
              A Sigma Brasil traduz cenários técnicos e comerciais em decisões simples,
              seguras e economicamente inteligentes.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal key={problem.code} delay={index * 70}>
              <article className="group relative h-full bg-paper-pure p-8 transition-colors duration-500 hover:bg-white lg:p-10">
                <span
                  className="absolute inset-x-0 top-0 h-px w-0 bg-brand-red transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-6">
                  <h3 className="max-w-[16ch] text-[19px] font-medium leading-snug tracking-[-0.02em] text-ink">
                    {problem.title}
                  </h3>
                  <span className="font-mono text-[11px] text-mute-soft transition-colors duration-500 group-hover:text-accent">
                    {problem.code}
                  </span>
                </div>
                <p className="mt-5 text-[14.5px] leading-relaxed text-graphite">
                  {problem.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
