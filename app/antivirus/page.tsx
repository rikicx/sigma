import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AntivirusSection } from "@/components/AntivirusSection";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Antivírus corporativo",
  description:
    "Licenciamento Kaspersky para empresas: antivírus para estações de trabalho e servidores, dimensionado por número de dispositivos, com renovação acompanhada.",
  alternates: { canonical: "/antivirus" },
};

export default function Antivirus() {
  return (
    <>
      <PageHero
        eyebrow="Antivírus"
        title="Antivírus Kaspersky para estações e servidores."
        description="Licenciamos pelo número real de dispositivos da empresa e acompanhamos a renovação, para o ambiente nunca ficar descoberto sem ninguém perceber."
        crumbs={[{ label: "Antivírus" }]}
      />
      <AntivirusSection />
      <FinalCTA
        title="Precisa proteger os computadores da empresa?"
        text="Diga quantos dispositivos e servidores existem e retornamos com as opções disponíveis."
      />
    </>
  );
}
