import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactChannels } from "@/components/ContactChannels";
import { site, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Sigma Brasil: orçamento de licenças Microsoft e antivírus pelo comercial, WhatsApp, telefone ou e-mail.",
  alternates: { canonical: "/contato" },
};

const contactPageLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contato — Sigma Brasil",
  url: `${site.url}/contato`,
  mainEntity: {
    "@type": "Organization",
    "@id": `${site.url}/#organizacao`,
    name: site.name,
    email: contact.emailVendas,
    telephone: contact.phone,
  },
};

export default function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com o comercial da Sigma Brasil."
        description="Para orçamento de licenças ou antivírus, conte o cenário: quantos computadores, quantos usuários e quais servidores. Assim a resposta já vem com as opções e o custo."
        crumbs={[{ label: "Contato" }]}
      />
      <ContactChannels />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLd) }}
      />
    </>
  );
}
