import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/AboutSection";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Vendemos licenças Microsoft e antivírus corporativo tratando cada venda como decisão técnica, com atendimento consultivo e acompanhamento contínuo.",
  alternates: { canonical: "/sobre" },
};

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Somos parceiros de decisão, não só fornecedores de licença."
        description="Mais do que entregar software, ajudamos a decidir o que contratar, em que quantidade e por quê — e continuamos por perto depois da compra."
        crumbs={[{ label: "Sobre" }]}
      />
      <AboutSection />
      <FinalCTA />
    </>
  );
}
