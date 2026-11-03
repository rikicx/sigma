import Link from "next/link";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "./ui/icons";
import { products, routes } from "@/lib/site";

/** Home: o portfólio Microsoft em vitrine, cada produto com orçamento direto. */
export function MicrosoftPortfolio() {
  return (
    <section
      id="licencas-microsoft"
      className="scroll-mt-20 py-20 md:py-28"
      aria-labelledby="portfolio-titulo"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title={<span id="portfolio-titulo">Licenças Microsoft</span>}
            description="Do sistema operacional das estações ao banco de dados dos servidores. Cada produto tem uma métrica própria (por dispositivo, por usuário ou por núcleo), e é ela que define o custo."
          />
          <Reveal delay={120} className="shrink-0">
            <Link
              href={routes.licencas}
              className="group inline-flex items-center gap-2 py-2 text-[14px] font-medium text-ink transition-colors hover:text-accent"
            >
              Ver detalhes de cada licença
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {products.map((product, index) => (
            <li key={product.id}>
              <Reveal delay={(index % 4) * 70} className="h-full">
                <ProductCard product={product} compact />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
