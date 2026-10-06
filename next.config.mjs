/**
 * Redirecionamentos 301 das URLs do site antigo (sigmario.com.br, feito no
 * Criador de Sites da Locaweb) para as páginas equivalentes do site novo.
 *
 * Mapa levantado do sitemap.xml e dos links do site antigo. Cada URL aparece
 * com e sem barra final porque o sitemap antigo indexou as versões com barra.
 */
const legacyRoutes = [
  { from: "/home", to: "/" },
  { from: "/servicos", to: "/licencas-microsoft" },
  { from: "/nosso-diferencial", to: "/consultoria" },
  { from: "/contato", to: "/contato" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // O Next normaliza /rota/ → /rota (308) ANTES das regras abaixo, o que criaria
  // uma cadeia 308 → 301 justamente nas URLs indexadas.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return legacyRoutes
      .filter(({ from, to }) => from !== to)
      .flatMap(({ from, to }) => [
        { source: from, destination: to, statusCode: 301 },
        { source: `${from}/`, destination: to, statusCode: 301 },
      ]);
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
