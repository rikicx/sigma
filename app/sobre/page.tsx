import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/AboutSection";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A Sigma Brasil vende licenças Microsoft e antivírus corporativo tratando cada venda como decisão técnica, com atendimento consultivo e acompanhamento contínuo.",
  alternates: { canonical: "/sobre" },
};

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Parceira consultiva, não apenas fornecedora de licenças."
        description="Mais do que entregar software, ajudamos empresas a decidir o que contratar, em que quantidade e por quê."
        crumbs={[{ label: "Sobre" }]}
      />
      <AboutSection />
      <FinalCTA />
    </>
  );
}
