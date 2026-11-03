import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { differentials } from "@/lib/site";

export function DifferentialsSection() {
  const [featured, ...rest] = differentials;

  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-20 border-b border-fog-line bg-fog py-24 md:py-32"
      aria-labelledby="diferenciais-titulo"
    >
      <Container>
        <SectionHeading
          title={
            <span id="diferenciais-titulo">
              Tecnologia com precisão técnica e atendimento humano.
            </span>
          }
          description="Decisão de licenciamento é decisão de negócio. Nosso papel é dar clareza suficiente para que ela seja tomada com segurança, e continuar por perto depois dela."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-fog-line bg-white p-9 lg:p-10">
              <div className="relative">
                <h3 className="display-md text-balance text-ink">
                  {featured.title}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-graphite">
                  {featured.text}
                </p>
              </div>
              <div
                className="relative mt-12 flex items-end gap-1"
                aria-hidden="true"
              >
                {[28, 44, 60, 76, 92].map((height, i) => (
                  <span
                    key={height}
                    className={`w-6 ${i === 4 ? "bg-accent" : "bg-line-strong"}`}
                    style={{ height }}
                  />
                ))}
              </div>
            </article>
          </Reveal>

          <div className="grid gap-px border border-fog-line bg-fog-line sm:grid-cols-2 lg:col-span-2 rounded-lg overflow-hidden">
            {rest.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="group h-full bg-white p-8 transition-colors duration-500 hover:bg-paper-pure">
                  <div className="flex items-start gap-4">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent transition-transform duration-500 group-hover:scale-150"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-[17px] font-medium leading-snug tracking-[-0.02em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-graphite">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
