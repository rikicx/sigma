"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { contact } from "@/lib/site";

/**
 * Rio e São Paulo em traço que se desenha sozinho conforme a seção sobe.
 *
 * Cada path recebe pathLength="1", então o dash vira matemática simples:
 * strokeDashoffset = 1 - progresso. Cada traço tem a sua janela dentro do
 * progresso da seção, o que faz o desenho aparecer em ordem, como se
 * estivesse sendo riscado à mão.
 */

/** Progresso local de um traço dentro do progresso geral da seção. */
function seg(p: number, start: number, end: number) {
  return Math.max(0, Math.min(1, (p - start) / (end - start)));
}

function useDrawProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const compute = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      // começa quando a seção entra pela base e termina ao chegar no meio da tela
      const raw = (vh * 0.92 - rect.top) / (vh * 0.62);
      setProgress(Math.max(0, Math.min(1, raw)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, progress };
}

type StrokeProps = { p: number; from: number; to: number; accent?: boolean };

function dash(p: number, from: number, to: number) {
  return { strokeDasharray: 1, strokeDashoffset: 1 - seg(p, from, to) };
}

/** Cristo Redentor: pedestal, manto, braços abertos e cabeça. */
function CristoRedentor({ p }: { p: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    pathLength: 1,
    vectorEffect: "non-scaling-stroke" as const,
  };
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full text-ink" aria-hidden="true">
      {/* morro */}
      <path
        {...common}
        d="M20 250 C 90 242, 120 230, 168 224 L 232 224 C 284 230, 318 242, 380 250"
        strokeOpacity="0.28"
        style={dash(p, 0, 0.25)}
      />
      {/* pedestal */}
      <path {...common} d="M170 224 L170 198 L230 198 L230 224" style={dash(p, 0.18, 0.4)} />
      <path {...common} d="M176 198 L176 184 L224 184 L224 198" style={dash(p, 0.24, 0.45)} />
      {/* manto */}
      <path {...common} d="M178 184 L184 106" style={dash(p, 0.3, 0.58)} />
      <path {...common} d="M222 184 L216 106" style={dash(p, 0.3, 0.58)} />
      <path {...common} d="M178 184 L222 184" strokeOpacity="0.5" style={dash(p, 0.34, 0.5)} />
      {/* braços */}
      <path
        {...common}
        d="M184 106 L86 114"
        style={dash(p, 0.42, 0.74)}
      />
      <path
        {...common}
        d="M216 106 L314 114"
        style={dash(p, 0.42, 0.74)}
      />
      <path {...common} d="M184 120 L88 126" strokeOpacity="0.55" style={dash(p, 0.48, 0.8)} />
      <path {...common} d="M216 120 L312 126" strokeOpacity="0.55" style={dash(p, 0.48, 0.8)} />
      {/* mãos */}
      <path {...common} d="M86 114 L82 126 L88 126" style={dash(p, 0.7, 0.86)} />
      <path {...common} d="M314 114 L318 126 L312 126" style={dash(p, 0.7, 0.86)} />
      {/* ombros e cabeça */}
      <path {...common} d="M184 106 C 190 96, 210 96, 216 106" style={dash(p, 0.56, 0.78)} />
      <path {...common} d="M200 96 L200 88" style={dash(p, 0.68, 0.8)} />
      <circle
        {...common}
        cx="200"
        cy="78"
        r="10"
        style={dash(p, 0.72, 0.95)}
      />
    </svg>
  );
}

/** MASP: os dois pórticos, o vão livre e a caixa suspensa. */
function Masp({ p }: { p: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "square" as const,
    pathLength: 1,
    vectorEffect: "non-scaling-stroke" as const,
  };
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full text-ink" aria-hidden="true">
      {/* chão e vão livre */}
      <path {...common} d="M30 240 L370 240" strokeOpacity="0.28" style={dash(p, 0, 0.2)} />
      {/* pilares: dois pares, do chão até a viga */}
      <path {...common} d="M78 240 L78 56" style={dash(p, 0.12, 0.42)} />
      <path {...common} d="M92 240 L92 56" style={dash(p, 0.14, 0.44)} />
      <path {...common} d="M308 240 L308 56" style={dash(p, 0.12, 0.42)} />
      <path {...common} d="M322 240 L322 56" style={dash(p, 0.14, 0.44)} />
      {/* viga superior */}
      <path {...common} d="M66 56 L334 56" style={dash(p, 0.34, 0.6)} />
      <path {...common} d="M66 70 L334 70" style={dash(p, 0.36, 0.64)} />
      <path {...common} d="M66 56 L66 70" style={dash(p, 0.4, 0.5)} />
      <path {...common} d="M334 56 L334 70" style={dash(p, 0.4, 0.5)} />
      {/* tirantes que seguram a caixa */}
      <path {...common} d="M140 70 L140 100" strokeOpacity="0.45" style={dash(p, 0.48, 0.6)} />
      <path {...common} d="M260 70 L260 100" strokeOpacity="0.45" style={dash(p, 0.48, 0.6)} />
      {/* caixa suspensa */}
      <path {...common} d="M100 100 L300 100 L300 168 L100 168 Z" style={dash(p, 0.52, 0.82)} />
      {/* viga inferior, sob a caixa */}
      <path {...common} d="M86 174 L314 174" style={dash(p, 0.62, 0.84)} />
      <path {...common} d="M100 134 L300 134" strokeOpacity="0.35" style={dash(p, 0.72, 0.9)} />
      {/* montantes da fachada */}
      {[135, 170, 205, 240, 275].map((x, i) => (
        <path
          key={x}
          {...common}
          d={`M${x} 100 L${x} 168`}
          strokeOpacity="0.28"
          style={dash(p, 0.74 + i * 0.03, 0.92 + i * 0.015)}
        />
      ))}
    </svg>
  );
}

export function CitiesSection() {
  const { ref, progress } = useDrawProgress();

  const cities = [
    {
      name: "Rio de Janeiro",
      landmark: "Cristo Redentor",
      // ⚠️ TROCAR AQUI: endereço confirmado do escritório do Rio.
      detail: `${contact.address.street} — ${contact.address.district}`,
      drawing: <CristoRedentor p={progress} />,
    },
    {
      name: "São Paulo",
      landmark: "MASP",
      // ⚠️ PENDENTE: endereço e telefone de São Paulo não foram informados.
      detail: "Atendimento para empresas na capital e região",
      drawing: <Masp p={progress} />,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative border-y border-line py-20 md:py-28"
      aria-labelledby="cidades-titulo"
    >
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
              <span className="eyebrow text-accent">Onde atendemos</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="cidades-titulo" className="display-lg mt-5 text-balance text-ink">
              Rio de Janeiro e São Paulo.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-pretty text-[15.5px] leading-relaxed text-graphite">
              Duas praças, o mesmo time e o mesmo critério técnico para dimensionar
              licenças, antivírus e renovações.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
          {cities.map((city) => (
            <div key={city.name} className="bg-paper-pure px-8 pt-8 pb-10 md:px-10">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[19px] font-medium tracking-[-0.022em] text-ink">
                  {city.name}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
                  {city.landmark}
                </span>
              </div>
              <p className="mt-2 text-[14px] text-graphite">{city.detail}</p>
              <div className="mt-6 aspect-[400/260] w-full">{city.drawing}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
