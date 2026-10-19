import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ConsultiveStrip } from "@/components/ConsultiveStrip";
import { MicrosoftPortfolio } from "@/components/MicrosoftPortfolio";
import { KasperskyLine } from "@/components/KasperskyLine";
import { CitiesSection } from "@/components/CitiesSection";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Sigma Brasil | Licenças Microsoft, Antivírus e Consultoria",
  description:
    "Sigma Brasil: licenças Microsoft (Windows Pro, Office, Windows Server, SQL Server, Visual Studio, Visio e Project) e antivírus Kaspersky para empresas, com consultoria em licenciamento.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ConsultiveStrip />
      <MicrosoftPortfolio />
      <KasperskyLine />
      <CitiesSection />
      <FinalCTA />
    </>
  );
}
