import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { icons } from "./ui/icons";
import { products } from "@/lib/site";

/** Página de licenças: os produtos Microsoft trabalhados pela Sigma. */
export function ProductsSection() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="produtos-titulo">
      <Container>
        <SectionHeading
          title={<span id="produtos-titulo">O que licenciamos</span>}
          description="Cada licença tem uma métrica própria — por dispositivo, por usuário, por servidor. É isso que define o custo e o que pode dar errado numa auditoria."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product, index) => {
            const Icon = icons[product.icon];
            return (
              <Reveal key={product.id} delay={index * 80}>
                <article
                  id={product.id}
                  className="flex h-full flex-col border border-line bg-paper-pure p-8 transition-colors duration-500 hover:border-ink/15"
                >
                  <span className="flex h-12 w-12 items-center justify-center border border-line text-graphite">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-8 text-[20px] font-medium leading-snug tracking-[-0.022em] text-ink">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-graphite">
                    {product.text}
                  </p>
                  <ul className="mt-6 mb-auto flex flex-wrap gap-x-4 gap-y-2">
                    {product.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-mute"
                      >
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 bg-accent/70"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
