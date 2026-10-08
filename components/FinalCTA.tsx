import Link from "next/link";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, WhatsAppIcon } from "./ui/icons";
import { contact, routes } from "@/lib/site";

export function FinalCTA({
  title = "Precisa de licenças ou antivírus para a sua empresa?",
  text = "Diga quantos computadores e usuários a empresa tem. Devolvemos as opções, o custo de cada uma e o que muda entre elas.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-24" aria-labelledby="cta-titulo">
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 id="cta-titulo" className="display-md text-balance text-white">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-white/60">
              {text}
            </p>
          </Reveal>
          <Reveal delay={170}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={routes.contato}
                className="group inline-flex w-full items-center justify-center gap-2.5 bg-white px-7 py-4 text-sm font-medium tracking-[-0.01em] text-ink transition-colors duration-300 hover:bg-brand-red-bright hover:text-white sm:w-auto"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 border border-white/15 px-7 py-4 text-sm font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5 sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4 text-accent-bright" />
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-[13px] text-white/40">
              Ou escreva para{" "}
              <a
                href={`mailto:${contact.emailVendas}`}
                className="text-white/70 underline underline-offset-4 transition-colors hover:text-accent-bright"
              >
                {contact.emailVendas}
              </a>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
