import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { antivirusTopics } from "@/lib/site";

export function AntivirusSection() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="antivirus-titulo">
      <Container>
        <SectionHeading
          eyebrow="Kaspersky"
          title={<span id="antivirus-titulo">Licenciamento Kaspersky para empresas</span>}
          description="A conta do antivírus é por dispositivo — e quase sempre está errada: sobra licença de máquina aposentada e falta cobertura em servidor novo. Conferimos isso com você antes da renovação, não depois."
        />

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
          {antivirusTopics.map((topic, index) => (
            <Reveal key={topic.id} delay={index * 80}>
              <article className="h-full bg-paper-pure p-8 md:p-10">
                <h3 className="text-[20px] font-medium leading-snug tracking-[-0.022em] text-ink">
                  {topic.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-graphite">
                  {topic.text}
                </p>
                <ul className="mt-6 space-y-2">
                  {topic.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-mute"
                    >
                      <span aria-hidden="true" className="h-1 w-1 bg-accent/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 max-w-2xl text-[13.5px] leading-relaxed text-mute">
            Kaspersky é marca registrada da Kaspersky Lab. Atuamos na venda e no
            dimensionamento das licenças.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
