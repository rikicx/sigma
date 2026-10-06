import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LiquidBackground } from "@/components/LiquidBackground";
import { site, contact } from "@/lib/site";

const display = Geist({ subsets: ["latin"], display: "swap", variable: "--font-display" });
const technical = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-technical",
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
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    postalCode: contact.address.zip,
    addressCountry: contact.address.country,
  },
  knowsAbout: [
    "Licenças Microsoft",
    "Windows e Windows Pro",
    "Windows Server",
    "Office",
    "Antivírus corporativo",
    "Consultoria em licenciamento de software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${display.variable} ${technical.variable}`}
    >
      <body className="antialiased">
        {/* marca que o JS está ativo: sem isso o conteúdo nasce visível, sem depender de hidratação */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.dataset.js="1"`}
        </Script>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:text-white"
        >
          Pular para o conteúdo
        </a>
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
