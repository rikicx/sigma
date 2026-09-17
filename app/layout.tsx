import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site, contact } from "@/lib/site";

const display = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const technical = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-technical",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sigma Brasil | Consultoria em Licenciamento e Soluções Microsoft",
    template: "%s | Sigma Brasil",
  },
  description: site.description,
  keywords: [
    "consultoria em licenciamento",
    "licenciamento Microsoft",
    "soluções Microsoft para empresas",
    "Windows Server",
    "Microsoft 365",
    "software corporativo",
    "tecnologia para empresas",
    "suporte corporativo",
    "licenciamento por volume",
    "Office para empresas",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Sigma Brasil | Consultoria em Licenciamento e Soluções Microsoft",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigma Brasil | Consultoria em Licenciamento e Soluções Microsoft",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.url,
  email: contact.email,
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
    "Consultoria em licenciamento de software",
    "Licenciamento Microsoft",
    "Microsoft 365",
    "Windows Server",
    "Licenciamento por volume",
    "Suporte corporativo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${technical.variable}`}>
      <body className="antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
