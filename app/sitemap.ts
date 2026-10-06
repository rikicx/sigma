import type { MetadataRoute } from "next";
import { site, routes } from "@/lib/site";

/** Só entram páginas indexáveis. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: routes.home, priority: 1 },
    { path: routes.licencas, priority: 0.9 },
    { path: routes.antivirus, priority: 0.9 },
    { path: routes.consultoria, priority: 0.8 },
    { path: routes.sobre, priority: 0.6 },
    { path: routes.contato, priority: 0.7 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
