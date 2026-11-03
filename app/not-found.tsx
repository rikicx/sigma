import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/icons";
import { nav, routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <Container className="relative">
        <span className="eyebrow text-accent">Erro 404</span>
        <h1 className="display-lg mt-5 max-w-2xl text-balance text-ink">
          Essa página não existe mais, ou nunca existiu.
        </h1>
        <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-graphite">
          O endereço pode ter mudado. Escolha por onde continuar:
        </p>

        <ul className="mt-10 grid max-w-2xl gap-px border border-line bg-line sm:grid-cols-2">
          <li>
            <Link
              href={routes.home}
              className="group flex items-center justify-between bg-paper-pure px-6 py-5 text-[15px] font-medium text-ink"
            >
              Início
              <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center justify-between bg-paper-pure px-6 py-5 text-[15px] font-medium text-ink"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
