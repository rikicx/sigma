import Link from "next/link";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";
import { ArrowRight, WhatsAppIcon } from "./ui/icons";
import { contact, nav, routes } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-900 pt-16 pb-10">
      <div
        className="grid-technical-dark absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.3fr]">
          <div>
            <Logo tone="dark" className="h-9 w-auto" />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-white/50">
              Vendemos licenças Microsoft e antivírus corporativo com
              consultoria em licenciamento, para empresas que precisam decidir
              com clareza.
            </p>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:border-brand-red-bright/60 hover:bg-white/5"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-accent-bright" />
              Atendimento no WhatsApp
            </a>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href={routes.home}
                  className="inline-block py-2 text-[14px] text-white/65 transition-colors hover:text-white"
                >
                  Início
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 py-2 text-[14px] text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowRight className="h-3 w-3 -translate-x-1 text-accent-bright opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
              Contato
            </h2>
            <ul className="mt-5 space-y-4 text-[14px] text-white/65">
              <li>
                <a
                  href={`mailto:${contact.emailVendas}`}
                  className="inline-block py-2 transition-colors hover:text-white"
                >
                  {contact.emailVendas}
                </a>
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                  Comercial
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${contact.emailGerencia}`}
                  className="inline-block py-2 transition-colors hover:text-white"
                >
                  {contact.emailGerencia}
                </a>
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                  Gerência
                </span>
              </li>
              <li>
                {/* ⚠️ TROCAR AQUI: telefone novo prometido pelo cliente. */}
                <a
                  href={contact.phoneHref}
                  className="inline-block py-2 transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="leading-relaxed">
                {contact.address.street}
                <br />
                {contact.address.district} — {contact.address.city}/
                {contact.address.state}
                <br />
                CEP {contact.address.zip}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.1em] text-white/60">
            © {year} Sigma Brasil. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[11px] tracking-[0.1em] text-white/55">
            Licenças Microsoft · Antivírus · Consultoria
          </p>
        </div>
      </Container>
    </footer>
  );
}
