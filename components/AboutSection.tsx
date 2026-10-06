import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { pillars } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="sobre-conteudo">
      <Container>
        <h2 id="sobre-conteudo" className="sr-only">
          Sobre a Sigma Brasil
        </h2>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-pretty text-lg leading-relaxed text-ink md:text-xl md:leading-relaxed">
                A Sigma Brasil vende licenças de software e antivírus para empresas — e
                trata cada venda como uma decisão técnica, não como um pedido de catálogo.
              </p>
              <p className="mt-6 text-pretty text-[15.5px] leading-relaxed text-graphite">
                Isso começa por entender a operação: quantas pessoas trabalham, quais
                dispositivos existem, quais servidores sustentam o negócio e o que já está
                licenciado hoje. Só então falamos de versão, quantidade e custo. É o que
                evita os dois erros mais comuns: pagar por software que ninguém usa e
                descobrir, no pior momento, que faltava licença.
              </p>
              <p className="mt-6 text-pretty text-[15.5px] leading-relaxed text-graphite">
                Trabalhamos com linguagem simples para assuntos complexos. As regras de
                licenciamento mudam com frequência, e acompanhar essas mudanças é
                responsabilidade nossa, não da equipe do cliente. O resultado que buscamos
                é previsível: o ambiente certo, pelo custo adequado, sem risco de
                compliance e preparado para o próximo passo da empresa.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-1">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="bg-paper-pure px-7 py-6">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                    {pillar.label}
                  </dt>
                  <dd className="mt-2 text-[15px] font-medium tracking-[-0.01em] text-ink">
                    {pillar.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
