import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProblemSection } from "@/components/ProblemSection";
import { MethodSection } from "@/components/MethodSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Consultoria em licenciamento de software",
  description:
    "Consultoria em licenciamento: diagnóstico do ambiente, dimensionamento por uso real, recomendação, apoio na implementação e acompanhamento das renovações.",
  alternates: { canonical: "/consultoria" },
};

export default function Consultoria() {
  return (
    <>
      <PageHero
        eyebrow="Consultoria"
        title="A parte que transforma uma compra de software em uma decisão."
        description="Licenciamento tem métrica, regra e prazo. A consultoria existe para que a empresa compre o que usa, entenda o que assinou e não seja surpreendida na renovação nem na auditoria."
        crumbs={[{ label: "Consultoria" }]}
      />
      <ProblemSection />
      <MethodSection />
      <ComparisonSection />
      <DifferentialsSection />
      <FinalCTA
        title="Quer revisar o licenciamento da sua empresa?"
        text="Começamos pelo diagnóstico: o que existe hoje, o que é usado de fato e o que pode ser ajustado."
      />
    </>
  );
}
