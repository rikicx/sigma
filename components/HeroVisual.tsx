"use client";

import { useEffect, useRef } from "react";

type Tone = "light" | "dark";

const palette = {
  light: {
    ring: "rgba(11,15,28,0.08)",
    line: "#0b0f1c",
    lineOpacity: 0.07,
    sigmaFrom: "rgba(11,15,28,0.9)",
    sigmaMid: "#16306e",
    sigmaTo: "rgba(11,15,28,0.18)",
    accent: "#16306e",
    brandRed: "#c9241a",
    paper: "#f5f4f1",
    glow: "#16306e",
    moduleBorder: "border-line",
    moduleBg: "bg-paper-pure/80",
    moduleTitle: "text-ink",
    moduleMeta: "text-mute",
  },
  dark: {
    ring: "rgba(255,255,255,0.06)",
    line: "#ffffff",
    lineOpacity: 0.07,
    sigmaFrom: "rgba(255,255,255,0.92)",
    sigmaMid: "#7da0ee",
    sigmaTo: "rgba(255,255,255,0.28)",
    accent: "#7da0ee",
    brandRed: "#ff5f52",
    paper: "#0b0f1c",
    glow: "#7da0ee",
    moduleBorder: "border-white/10",
    moduleBg: "bg-white/[0.04]",
    moduleTitle: "text-white/90",
    moduleMeta: "text-white/40",
  },
} as const;

/**
 * Malha Σ: o símbolo como camadas somadas sobre uma grade de infraestrutura.
 * Parallax leve no scroll e no mouse, só com transform + rAF.
 */
export function HeroVisual({ tone = "light" }: { tone?: Tone }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const c = palette[tone];

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let scrollY = 0;

    const render = () => {
      frame = 0;
      node.style.setProperty("--px", pointerX.toFixed(3));
      node.style.setProperty("--py", pointerY.toFixed(3));
      node.style.setProperty("--sy", scrollY.toFixed(2));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onPointer = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width - 0.5;
      pointerY = (event.clientY - rect.top) / rect.height - 0.5;
      schedule();
    };
    const onScroll = () => {
      scrollY = Math.min(window.scrollY, 900);
      schedule();
    };

    onScroll();
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none relative aspect-square w-full max-w-[360px] [--px:0] [--py:0] [--sy:0] sm:max-w-[520px]"
    >
      <div
        className="absolute inset-[8%] rounded-full border"
        style={{
          borderColor: c.ring,
          transform:
            "translate3d(calc(var(--px) * 34px), calc(var(--py) * 30px - var(--sy) * 0.22px), 0) rotate(calc(var(--sy) * 0.012deg))",
        }}
      />

      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        style={{
          transform:
            "translate3d(calc(var(--px) * 46px), calc(var(--py) * 40px - var(--sy) * 0.34px), 0) scale(calc(1 + var(--sy) * 0.00016))",
        }}
      >
        <defs>
          <radialGradient id={`glow-${tone}`} cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor={c.glow} stopOpacity="0.14" />
            <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="300" r="250" fill={`url(#glow-${tone})`} />

        {/* camadas somadas: a base conceitual do Σ, bem discretas */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={i}
            x1={146 + i * 5}
            x2={454 - i * 5}
            y1={176 + i * 50}
            y2={176 + i * 50}
            stroke={c.line}
            strokeOpacity={0.05}
            strokeWidth="1"
          />
        ))}

        {/* eco em fio: a mesma forma, deslocada, como linha de construção */}
        <path
          d="M446 126 H146 L292 300 L146 474 H446"
          fill="none"
          stroke={c.accent}
          strokeOpacity="0.14"
          strokeWidth="1"
          strokeLinejoin="miter"
        />

        {/* Σ: traço firme, junções em esquadro, sem sombra */}
        <path
          d="M452 140 H160 L300 300 L160 460 H452"
          fill="none"
          stroke={c.accent}
          strokeWidth="13"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />

        {/* terminal vermelho: um trecho curto da barra superior, como na marca */}
        <path
          d="M452 140 H388"
          fill="none"
          stroke={c.brandRed}
          strokeWidth="13"
          strokeLinecap="butt"
        />

        {/* vértice: anel fino com núcleo sólido */}
        <circle cx="300" cy="300" r="20" fill="none" stroke={c.accent} strokeOpacity="0.3" strokeWidth="1" />
        <circle cx="300" cy="300" r="5.5" fill={c.accent} />

        {/* eixo técnico pelo vértice */}
        <line x1="72" y1="300" x2="246" y2="300" stroke={c.accent} strokeOpacity="0.16" strokeWidth="1" />
        <line x1="354" y1="300" x2="528" y2="300" stroke={c.accent} strokeOpacity="0.16" strokeWidth="1" />

        {/* pulso discreto no terminal inferior */}
        <circle
          cx="452"
          cy="460"
          r="5"
          fill={c.brandRed}
          className="animate-[var(--animate-pulse-node)]"
          style={{ transformOrigin: "452px 460px" }}
        />
      </svg>

      <FloatingModule
        tone={tone}
        label="Windows"
        meta="Sistema operacional"
        className="left-[-4%] top-[18%]"
        depth={24}
      />
      <FloatingModule
        tone={tone}
        label="Antivírus"
        meta="Segurança"
        className="right-[-6%] top-[42%]"
        depth={-30}
      />
      <FloatingModule
        tone={tone}
        label="Windows Server"
        meta="Infraestrutura"
        className="bottom-[10%] left-[2%]"
        depth={18}
      />
    </div>
  );
}

function FloatingModule({
  tone,
  label,
  meta,
  className,
  depth,
}: {
  tone: Tone;
  label: string;
  meta: string;
  className: string;
  depth: number;
}) {
  const c = palette[tone];
  return (
    <div
      className={`absolute hidden md:block ${className} animate-[var(--animate-drift)]`}
      style={{
        transform: `translate3d(calc(var(--px) * ${depth * 2.4}px), calc(var(--py) * ${depth * 2}px - var(--sy) * ${0.1 + Math.abs(depth) * 0.012}px), 0)`,
      }}
    >
      <div
        className={`flex items-center gap-3 border ${c.moduleBorder} ${c.moduleBg} px-4 py-3 backdrop-blur-md`}
      >
        <span className="h-6 w-px" style={{ backgroundColor: c.accent }} />
        <span className="flex flex-col">
          <span
            className={`text-[13px] font-medium tracking-[-0.01em] ${c.moduleTitle}`}
          >
            {label}
          </span>
          <span
            className={`mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] ${c.moduleMeta}`}
          >
            {meta}
          </span>
        </span>
      </div>
    </div>
  );
}
