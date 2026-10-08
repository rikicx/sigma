import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductsSection } from "@/components/ProductsSection";
import { BuyingSteps } from "@/components/BuyingSteps";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Licenças Microsoft para empresas",
  description:
    "Venda de licenças Microsoft para empresas: Windows, Windows Pro, Office e Windows Server, com dimensionamento por uso real e apoio na ativação.",
  alternates: { canonical: "/licencas-microsoft" },
};

export default function LicencasMicrosoft() {
  return (
    <>
      <PageHero
        title="Licenças Microsoft para empresas, na medida da operação."
        description="Windows, Windows Pro, Office e Windows Server. Antes de mandar o orçamento, entendemos quantos usuários, quantos dispositivos e quais servidores existem — é isso que define a licença correta e o custo real."
        crumbs={[{ label: "Licenças Microsoft" }]}
      />
      <ProductsSection />
      <BuyingSteps />
      <FinalCTA
        title="Precisa de licenças Microsoft?"
        text="Conte quantos computadores e usuários a empresa tem e devolvemos a recomendação com as opções e o custo de cada uma."
      />
    </>
  );
}
