import Link from "next/link";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Parallax } from "./ui/Parallax";
import { SectionHeading } from "./ui/SectionHeading";
import { icons, ArrowRight } from "./ui/icons";
import { offers } from "@/lib/site";

/** Home: as duas frentes comerciais, em destaque e com caminho para a página própria. */
export function OffersSection() {
  return (
    <section id="o-que-vendemos" className="py-20 md:py-28" aria-labelledby="ofertas-titulo">
      <Container>
        <SectionHeading
          eyebrow="O que vendemos"
          title={<span id="ofertas-titulo">Duas frentes, um mesmo cuidado na escolha.</span>}
          description="Software e segurança para o ambiente corporativo, licenciados pelo uso real da empresa."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {offers.map((offer, index) => {
            const Icon = icons[offer.icon];
            return (
              <Parallax key={offer.id} speed={index === 0 ? 34 : -22}>
                <Reveal delay={index * 90}>
                <Link
                  href={offer.href}
                  className="group flex h-full flex-col border border-line bg-paper-pure p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_24px_60px_-34px_rgba(8,9,10,0.35)] md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center border border-line text-graphite transition-colors duration-500 group-hover:border-accent/40 group-hover:text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="eyebrow text-mute-soft">{offer.eyebrow}</span>
                  </div>

                  <h3 className="display-md mt-8 text-ink">{offer.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-graphite">{offer.text}</p>

                  <ul className="mt-7 mb-auto space-y-2">
                    {offer.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[14px] text-graphite">
                        <span aria-hidden="true" className="h-1 w-1 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-9 inline-flex items-center gap-2 border-t border-line pt-6 text-[13px] font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                    {offer.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  </Link>
                </Reveal>
              </Parallax>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
