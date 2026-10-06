import Link from "next/link";
import { site } from "@/lib/site";

export type Crumb = { label: string; href?: string };

/** Breadcrumb visível + JSON-LD BreadcrumbList para as páginas internas. */
export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  const trail: Crumb[] = [{ label: "Início", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href === "/" ? "" : item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Trilha de navegação">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-2">
                {item.href && !last ? (
                  <Link href={item.href} className="transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                ) : (
                  <span className={last ? "text-ink" : undefined} aria-current={last ? "page" : undefined}>
                    {item.label}
                  </span>
                )}
                {!last && (
                  <span aria-hidden="true" className="text-line-strong">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
