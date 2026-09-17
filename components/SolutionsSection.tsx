import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { icons, ArrowRight } from "./ui/icons";
import { solutions } from "@/lib/site";

export function SolutionsSection() {
  return (
    <section
      id="solucoes"
      className="relative scroll-mt-24 bg-paper-dim/60 py-24 md:py-32"
      aria-labelledby="solucoes-titulo"
    >
      <div className="grid-technical mask-fade-b absolute inset-0 opacity-70" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Soluções"
          title={<span id="solucoes-titulo">Frentes de atuação da Sigma Brasil.</span>}
          description="Consultoria, licenciamento e suporte tratados como um único raciocínio: o que a empresa usa hoje, o que vai precisar amanhã e qual composição sustenta os dois cenários."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = icons[solution.icon];
            return (
              <Reveal key={solution.id} delay={index * 60}>
                <article
                  id={solution.id}
                  className="group relative flex h-full flex-col border border-line bg-paper-pure p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_24px_60px_-32px_rgba(8,9,10,0.35)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center border border-line text-graphite transition-colors duration-500 group-hover:border-accent/40 group-hover:text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-8 text-[20px] font-medium leading-snug tracking-[-0.022em] text-ink">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-graphite">
                    {solution.text}
                  </p>

                  <ul className="mt-6 mb-auto flex flex-wrap gap-x-4 gap-y-2">
                    {solution.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-mute"
                      >
                        <span className="h-1 w-1 bg-accent/70" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contato"
                    className="mt-8 inline-flex items-center gap-2 border-t border-line pt-6 text-[13px] font-medium text-ink transition-colors duration-300 group-hover:text-accent"
                  >
                    Entender solução
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="sr-only"> — {solution.title}</span>
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
