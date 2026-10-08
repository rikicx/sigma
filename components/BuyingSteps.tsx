import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { buyingSteps } from "@/lib/site";

/** Página de licenças: como funciona a compra, em três passos. */
export function BuyingSteps() {
  return (
    <section className="relative border-t border-line py-20 md:py-28">
      <Container className="relative">
        <SectionHeading
          title="Três passos até a licença certa"
          description="Sem formulário longo e sem catálogo para o cliente decifrar sozinho."
        />

        <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3 rounded-lg overflow-hidden">
          {buyingSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 90}>
              <li className="h-full bg-paper-pure p-8 md:p-10">
                <span className="font-mono text-[11px] tracking-[0.18em] text-accent">
                  {step.step}
                </span>
                <h3 className="mt-4 text-[19px] font-medium tracking-[-0.022em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-graphite">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
