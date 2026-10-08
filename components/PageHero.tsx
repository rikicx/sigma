import type { ReactNode } from "react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Breadcrumbs, type Crumb } from "./ui/Breadcrumbs";

/** Cabeçalho das páginas internas: claro, curto e com trilha de navegação. */
export function PageHero({
  title,
  description,
  crumbs,
  children,
}: {
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
          <h1 className="display-lg mt-8 max-w-3xl text-balance text-ink">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={170}>
          <p className="mt-6 max-w-[62ch] text-pretty text-base leading-relaxed text-graphite md:text-lg">
            {description}
          </p>
        </Reveal>
        {children ? <Reveal delay={230}>{children}</Reveal> : null}
      </Container>
    </section>
  );
}
