import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { WhatsAppIcon } from "./ui/icons";
import { contact } from "@/lib/site";

const channels = [
  {
    label: "Comercial",
    value: contact.emailVendas,
    href: `mailto:${contact.emailVendas}`,
    hint: "Orçamento, licenças e renovação",
  },
  {
    // ⚠️ TROCAR AQUI: telefone novo prometido pelo cliente (o atual é o do site antigo).
    label: "Telefone",
    value: contact.phone,
    href: contact.phoneHref,
    hint: "Atendimento em horário comercial",
  },
  {
    // ⚠️ TROCAR AQUI: confirmar o WhatsApp comercial.
    label: "WhatsApp",
    value: contact.whatsapp,
    href: contact.whatsappHref,
    hint: "Resposta rápida para dúvidas objetivas",
  },
];

export function ContactChannels() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="canais-titulo">
      <Container>
        <h2 id="canais-titulo" className="sr-only">
          Canais de contato
        </h2>

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 rounded-lg overflow-hidden">
          {channels.map((channel, index) => (
            <Reveal
              key={channel.label}
              delay={index * 70}
              // com três canais, o comercial ocupa a linha inteira e não sobra buraco na grade
              className={index === 0 ? "sm:col-span-2" : ""}
            >
              {/* a célula inteira é o alvo: no celular o link sozinho tinha
                  17px de altura, abaixo do mínimo de toque */}
              <a
                href={channel.href}
                {...(channel.label === "WhatsApp"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group block h-full bg-paper-pure px-8 py-7 transition-colors hover:bg-white"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                  {channel.label}
                </span>
                <span className="mt-3 flex items-center gap-2 text-[17px] font-medium tracking-[-0.02em] text-ink transition-colors group-hover:text-accent">
                  {channel.label === "WhatsApp" && (
                    <WhatsAppIcon className="h-4 w-4 text-accent" />
                  )}
                  {channel.value}
                </span>
                <span className="mt-2 block text-[13.5px] text-graphite">
                  {channel.hint}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {contact.offices.map((office) => (
              <div key={office.city} className="bg-paper-pure px-8 py-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                  Filial {office.city}
                </span>
                <address className="mt-3 not-italic text-[15px] leading-relaxed text-ink">
                  {office.street}, {office.district}
                  <br />
                  {office.city}/{office.state}, CEP {office.zip}
                </address>
              </div>
            ))}
          </div>
        </Reveal>

        {/*
          ⚠️ PENDENTE: formulário de contato.
          O site antigo tinha um formulário do Criador de Sites da Locaweb, que não
          migra junto. Quando o escopo for aprovado, ele entra aqui, com envio pelo
          servidor, entregando em vendas@.
        */}
      </Container>
    </section>
  );
}
