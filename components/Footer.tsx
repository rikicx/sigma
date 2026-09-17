import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";
import { ArrowRight, WhatsAppIcon } from "./ui/icons";
import { contact, nav, solutions } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900 pt-16 pb-10">
      <div
        className="grid-technical-dark absolute inset-0 opacity-60"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-white/50">
              Consultoria em licenciamento, soluções Microsoft e suporte corporativo para
              empresas que precisam decidir tecnologia com clareza e previsibilidade.
            </p>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-[13px] font-medium text-white transition-colors hover:border-accent-bright/50 hover:bg-white/5"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-accent-bright" />
              Atendimento no WhatsApp
            </a>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-[14px] text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 text-accent-bright transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Soluções">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
              Soluções
            </h2>
            <ul className="mt-5 space-y-3">
              {solutions.map((solution) => (
                <li key={solution.id}>
                  <a
                    href={`#${solution.id}`}
                    className="text-[14px] text-white/65 transition-colors hover:text-white"
                  >
                    {solution.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
              Contato
            </h2>
            {/* ⚠️ TROCAR AQUI: dados herdados do site atual — validar antes do go-live. */}
            <ul className="mt-5 space-y-4 text-[14px] text-white/65">
              <li>
                <a
                  href={contact.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {contact.address.street}
                <br />
                {contact.address.district} — {contact.address.city}/{contact.address.state}
                <br />
                CEP {contact.address.zip}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-[0.1em] text-white/35">
            © {year} Sigma Brasil. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[11px] tracking-[0.1em] text-white/25">
            Consultoria · Licenciamento · Soluções Microsoft
          </p>
        </div>
      </Container>
    </footer>
  );
}
