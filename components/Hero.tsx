import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { HeroVisual } from "./HeroVisual";
import { ArrowRight } from "./ui/icons";
import { heroIndicators } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-ink pt-32 pb-0 md:pt-36"
      aria-labelledby="hero-titulo"
    >
      {/* malha técnica de fundo */}
      <div className="grid-technical-dark mask-fade-radial absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-[-20%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
                </span>
                <span className="eyebrow text-white/50">
                  Consultoria · Licenciamento · Soluções Microsoft
                </span>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1 id="hero-titulo" className="display-xl mt-8 text-balance text-white">
                Tecnologia corporativa com licenciamento{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">correto</span>
                  <span
                    className="absolute inset-x-0 bottom-1 z-0 h-[0.18em] bg-accent/70"
                    aria-hidden="true"
                  />
                </span>
                , seguro e preparado para crescer.
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-white/60 md:text-lg">
                A Sigma Brasil ajuda empresas a escolher, dimensionar e implementar
                soluções de software com clareza, economia e suporte especializado.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contato"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white px-7 py-4 text-sm font-medium tracking-[-0.01em] text-ink transition-colors duration-300 hover:bg-accent-bright"
                >
                  Solicitar consultoria
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#solucoes"
                  className="group inline-flex items-center justify-center gap-2.5 border border-white/15 px-7 py-4 text-sm font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
                >
                  Conhecer soluções
                  <ArrowRight className="h-4 w-4 opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="flex justify-center lg:justify-end">
            <HeroVisual />
          </Reveal>
        </div>

        {/* indicadores de valor */}
        <Reveal delay={320}>
          <ul className="mt-16 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {heroIndicators.map((item, index) => (
              <li
                key={item}
                className={`group flex items-center gap-3 border-white/10 py-6 lg:py-7 ${
                  index !== 0 ? "border-t sm:border-t-0 lg:border-l lg:pl-7" : ""
                } ${index === 1 ? "sm:border-l sm:pl-7" : ""} ${
                  index === 2 ? "sm:border-t sm:border-l-0 sm:pl-0 lg:border-l lg:pl-7" : ""
                } ${index === 3 ? "sm:border-t sm:border-l sm:pl-7" : ""}`}
              >
                <span className="font-mono text-[10px] text-accent-bright/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] font-medium tracking-[-0.01em] text-white/75 transition-colors duration-300 group-hover:text-white">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>

      {/* transição para a seção clara */}
      <div className="mt-16 md:mt-20" aria-hidden="true" />
    </section>
  );
}
