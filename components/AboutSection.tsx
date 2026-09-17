import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { contact } from "@/lib/site";

const pillars = [
  { label: "Atuação", value: "Consultoria em tecnologia corporativa" },
  { label: "Especialidade", value: "Licenciamento e soluções Microsoft" },
  { label: "Base", value: `${contact.address.city} — ${contact.address.state}` },
  { label: "Modelo", value: "Atendimento consultivo e continuado" },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative scroll-mt-20 py-24 md:py-32"
      aria-labelledby="sobre-titulo"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
                <span className="eyebrow text-accent">Sobre</span>
              </div>
              <h2 id="sobre-titulo" className="display-lg mt-5 text-balance text-ink">
                Parceira consultiva, não apenas fornecedora de licenças.
              </h2>

              <div className="relative mt-12 border border-line bg-paper-pure p-8">
                <span className="eyebrow text-accent">A soma das partes</span>
                <p className="mt-5 text-[15px] leading-relaxed text-graphite">
                  Entendimento do negócio, domínio das regras de licenciamento e
                  continuidade no atendimento. É a soma dessas três partes que transforma
                  uma compra de software em uma decisão de tecnologia.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:pt-16">
              <p className="text-pretty text-lg leading-relaxed text-ink md:text-xl md:leading-relaxed">
                A Sigma Brasil nasceu para apoiar empresas na escolha, contratação e uso
                inteligente de soluções de tecnologia.
              </p>
              <p className="mt-6 text-pretty text-[15.5px] leading-relaxed text-graphite">
                Mais do que fornecer software, atuamos como parceira consultiva para
                simplificar decisões, reduzir desperdícios e garantir que cada solução
                esteja alinhada ao momento e ao crescimento de cada negócio. Isso começa
                por entender a operação — quantas pessoas, quais dispositivos, quais
                sistemas, qual projeção — antes de falar em plano, contrato ou renovação.
              </p>
              <p className="mt-6 text-pretty text-[15.5px] leading-relaxed text-graphite">
                Trabalhamos com linguagem simples para assuntos complexos. As regras de
                licenciamento mudam com frequência; a responsabilidade de acompanhar essas
                mudanças é nossa, não da sua equipe. O resultado que buscamos é previsível:
                o ambiente certo, pelo custo adequado, sem risco de compliance e preparado
                para o próximo passo da empresa.
              </p>

              <dl className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div key={pillar.label} className="bg-paper-pure px-6 py-5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                      {pillar.label}
                    </dt>
                    <dd className="mt-2 text-[14.5px] font-medium tracking-[-0.01em] text-ink">
                      {pillar.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
