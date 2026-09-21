/**
 * Redirecionamentos 301 das URLs do site antigo (sigmario.com.br, feito no
 * Criador de Sites da Locaweb) para as seções da nova landing page.
 *
 * Mapa levantado do sitemap.xml e dos links do site antigo em 21/09/2026.
 * Cada URL antiga aparece com e sem barra final porque o sitemap antigo
 * indexou as versões com barra (/servicos/) — assim as duas chegam ao destino
 * em um único salto, sem cadeia 308 → 301.
 */
const legacyRoutes = [
  { from: "/home", to: "/" },
  { from: "/servicos", to: "/#solucoes" },
  { from: "/nosso-diferencial", to: "/#diferenciais" },
  { from: "/contato", to: "/#contato" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // O Next normaliza /rota/ → /rota (308) ANTES das regras abaixo, o que criaria
  // uma cadeia 308 → 301 justamente nas URLs indexadas. Desligado porque o site
  // é uma página única; se surgirem novas rotas, reavaliar.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return legacyRoutes.flatMap(({ from, to }) => [
      { source: from, destination: to, statusCode: 301 },
      { source: `${from}/`, destination: to, statusCode: 301 },
    ]);
  },
};

export default nextConfig;
