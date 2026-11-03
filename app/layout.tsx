import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LiquidBackground } from "@/components/LiquidBackground";
import { Intro } from "@/components/Intro";
import { site, contact } from "@/lib/site";

/**
 * Archivo: grotesca de uso institucional, com acentuação latina bem resolvida.
 * Serve tanto para os títulos quanto para os rótulos em caixa alta — o site
 * deixou de usar uma monoespaçada, que dava ar de terminal.
 */
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sigma Brasil | Licenças Microsoft, Antivírus e Consultoria",
    template: "%s | Sigma Brasil",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Sigma Brasil | Licenças Microsoft, Antivírus e Consultoria",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigma Brasil | Licenças Microsoft, Antivírus e Consultoria",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "light",
};

/** Schema único da organização; cada página interna adiciona seu BreadcrumbList. */
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organizacao`,
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.url,
  email: contact.emailVendas,
  telephone: contact.phone,
  areaServed: "BR",
  address: contact.offices.map((office) => ({
    "@type": "PostalAddress",
    streetAddress: office.street,
    addressLocality: office.city,
    addressRegion: office.state,
    postalCode: office.zip,
    addressCountry: office.country,
  })),
  knowsAbout: [
    "Licenças Microsoft",
    "Windows Pro",
    "Office",
    "Windows Server",
    "CALs de acesso",
    "SQL Server",
    "Visual Studio",
    "Visio",
    "Project",
    "Antivírus Kaspersky",
    "Consultoria em licenciamento de software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={archivo.variable}>
      <body className="antialiased">
        {/* marca que o JS está ativo: sem isso o conteúdo nasce visível, sem depender de hidratação.
            Também decide, antes da primeira pintura, se a abertura roda (1ª visita da sessão,
            sem reduced-motion) — assim o overlay nunca pisca para quem já viu. */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`(function(){var h=document.documentElement;h.dataset.js="1";try{if(sessionStorage.getItem("sigma:intro")||matchMedia("(prefers-reduced-motion: reduce)").matches)return;h.dataset.intro="1"}catch(e){}})()`}
        </Script>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <Intro />
        <LiquidBackground />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </body>
    </html>
  );
}
