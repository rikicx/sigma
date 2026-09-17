import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, WhatsAppIcon } from "./ui/icons";
import { contact } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 md:py-32"
      aria-labelledby="cta-titulo"
    >
      <div className="grid-technical-dark mask-fade-radial absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-[150px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-accent-bright/60" aria-hidden="true" />
              <span className="eyebrow text-accent-bright">Próximo passo</span>
              <span className="h-px w-8 bg-accent-bright/60" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 id="cta-titulo" className="display-lg mt-6 text-balance text-white">
              Sua empresa está usando a tecnologia certa — ou apenas pagando por ela?
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-white/60 md:text-lg">
              Converse com a Sigma Brasil e entenda como estruturar licenças, softwares e
              soluções corporativas com mais clareza, segurança e economia.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${contact.email}?subject=Solicita%C3%A7%C3%A3o%20de%20consultoria%20%E2%80%94%20Sigma%20Brasil`}
                className="group inline-flex w-full items-center justify-center gap-2.5 bg-white px-7 py-4 text-sm font-medium tracking-[-0.01em] text-ink transition-colors duration-300 hover:bg-accent-bright sm:w-auto"
              >
                Solicitar consultoria
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2.5 border border-white/15 px-7 py-4 text-sm font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5 sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4 text-accent-bright" />
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-14 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
              {[
                { label: "Telefone", value: contact.phone, href: contact.phoneHref },
                { label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
                {
                  label: "Endereço",
                  value: `${contact.address.street} — ${contact.address.district}`,
                  href: undefined,
                },
              ].map((item) => (
                <div key={item.label} className="bg-ink px-6 py-6 text-left">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-[14.5px] font-medium text-white transition-colors hover:text-accent-bright"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="mt-2 block text-[14.5px] font-medium text-white">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
