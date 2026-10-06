import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { OffersSection } from "@/components/OffersSection";
import { ConsultiveStrip } from "@/components/ConsultiveStrip";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Sigma Brasil | Licenças Microsoft, Antivírus e Consultoria",
  description:
    "Venda de licenças Microsoft e antivírus corporativo com consultoria em licenciamento: Windows, Windows Server, Office e suporte para empresas.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <OffersSection />
      <ConsultiveStrip />
      <FinalCTA />
    </>
  );
}
