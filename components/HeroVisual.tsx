"use client";

import { useEffect, useRef } from "react";

type Tone = "light" | "dark";

const palette = {
  light: {
    ring: "rgba(8,9,10,0.08)",
    line: "#08090a",
    lineOpacity: 0.07,
    sigmaFrom: "rgba(8,9,10,0.9)",
    sigmaMid: "#0c93a4",
    sigmaTo: "rgba(8,9,10,0.18)",
    accent: "#0c93a4",
    glow: "#0c93a4",
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
    sigmaMid: "#22d3e4",
    sigmaTo: "rgba(255,255,255,0.28)",
    accent: "#22d3e4",
    glow: "#22d3e4",
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
          <linearGradient id={`sigmaStroke-${tone}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c.sigmaFrom} />
            <stop offset="58%" stopColor={c.sigmaMid} />
            <stop offset="100%" stopColor={c.sigmaTo} />
          </linearGradient>
          <radialGradient id={`glow-${tone}`} cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor={c.glow} stopOpacity="0.16" />
            <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="280" r="250" fill={`url(#glow-${tone})`} />

        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={i}
            x1={120 + i * 6}
            x2={480 - i * 6}
            y1={140 + i * 42}
            y2={140 + i * 42}
            stroke={c.line}
            strokeOpacity={c.lineOpacity}
            strokeWidth="1"
          />
        ))}

        <path
          className="conn-line"
          d="M120 182 L300 300 L480 182"
          stroke={c.accent}
          strokeOpacity="0.4"
          strokeWidth="1"
          fill="none"
        />
        <path
          className="conn-line"
          d="M120 434 L300 300 L480 434"
          stroke={c.accent}
          strokeOpacity="0.28"
          strokeWidth="1"
          fill="none"
          style={{ animationDelay: "-3s" }}
        />

        <path
          d="M425 150 H185 L300 300 L185 450 H425"
          fill="none"
          stroke={`url(#sigmaStroke-${tone})`}
          strokeWidth="9"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M425 150 H185"
          fill="none"
          stroke={c.accent}
          strokeWidth="9"
          strokeLinecap="square"
          strokeOpacity="0.9"
        />

        {[
          [185, 150],
          [425, 150],
          [300, 300],
          [185, 450],
          [425, 450],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="4.5"
            fill={c.accent}
            className="animate-[var(--animate-pulse-node)]"
            style={{ animationDelay: `${i * 0.6}s`, transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
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
