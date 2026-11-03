import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { ProductCard } from "./ProductCard";
import { products } from "@/lib/site";

/** Página de licenças: o portfólio Microsoft trabalhado pela Sigma. */
export function ProductsSection() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="produtos-titulo">
      <Container>
        <SectionHeading
          title={<span id="produtos-titulo">O que licenciamos</span>}
          description="Cada licença tem uma métrica própria: por dispositivo, por usuário ou por núcleo. É isso que define o custo e o que pode dar errado numa auditoria."
        />

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <li key={product.id}>
              <Reveal delay={(index % 4) * 70} className="h-full">
                <ProductCard product={product} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
