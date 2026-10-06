import type { ReactNode } from "react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Breadcrumbs, type Crumb } from "./ui/Breadcrumbs";

/** Cabeçalho das páginas internas: claro, curto e com trilha de navegação. */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: readonly Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative border-b border-line pt-32 pb-16 md:pt-40 md:pb-20">
      <Container className="relative">
        <Reveal>
          <Breadcrumbs items={crumbs} />
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-8 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
            <span className="eyebrow text-accent">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <h1 className="display-lg mt-5 max-w-3xl text-balance text-ink">{title}</h1>
        </Reveal>
        <Reveal delay={170}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-graphite md:text-lg">
            {description}
          </p>
        </Reveal>
        {children ? <Reveal delay={230}>{children}</Reveal> : null}
      </Container>
    </section>
  );
}
