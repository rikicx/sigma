"use client";

import { useEffect, useRef } from "react";

/**
 * Malha Σ: representação abstrata do símbolo integrado a uma grade de
 * infraestrutura. Parallax leve no scroll e no movimento do mouse — sem
 * bibliotecas, apenas transform + rAF.
 */
export function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);

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
      className="pointer-events-none relative aspect-square w-full max-w-[380px] [--px:0] [--py:0] [--sy:0] sm:max-w-[560px]"
    >
      {/* anel externo */}
      <div
        className="absolute inset-[6%] rounded-full border border-white/[0.06]"
        style={{
          transform:
            "translate3d(calc(var(--px) * 14px), calc(var(--py) * 14px - var(--sy) * 0.04px), 0)",
        }}
      />
      <div
        className="absolute inset-[18%] rounded-full border border-white/[0.05]"
        style={{
          transform:
            "translate3d(calc(var(--px) * -10px), calc(var(--py) * -10px - var(--sy) * 0.02px), 0)",
        }}
      />

      {/* malha + Σ */}
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        style={{
          transform:
            "translate3d(calc(var(--px) * 18px), calc(var(--py) * 18px - var(--sy) * 0.06px), 0)",
        }}
      >
        <defs>
          <linearGradient id="sigmaStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
            <stop offset="55%" stopColor="#22d3e4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.28" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#22d3e4" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#22d3e4" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="280" r="250" fill="url(#glow)" />

        {/* camadas horizontais (o "somatório") */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line
            key={i}
            x1={120 + i * 6}
            x2={480 - i * 6}
            y1={140 + i * 42}
            y2={140 + i * 42}
            stroke="#ffffff"
            strokeOpacity={0.07}
            strokeWidth="1"
          />
        ))}

        {/* conexões animadas */}
        <path
          className="conn-line"
          d="M120 182 L300 300 L480 182"
          stroke="#22d3e4"
          strokeOpacity="0.45"
          strokeWidth="1"
          fill="none"
        />
        <path
          className="conn-line"
          d="M120 434 L300 300 L480 434"
          stroke="#22d3e4"
          strokeOpacity="0.3"
          strokeWidth="1"
          fill="none"
          style={{ animationDelay: "-3s" }}
        />

        {/* Σ abstrato */}
        <path
          d="M425 150 H185 L300 300 L185 450 H425"
          fill="none"
          stroke="url(#sigmaStroke)"
          strokeWidth="10"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M425 150 H185"
          fill="none"
          stroke="#22d3e4"
          strokeWidth="10"
          strokeLinecap="square"
          strokeOpacity="0.9"
        />

        {/* nós */}
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
            fill="#22d3e4"
            className="animate-[var(--animate-pulse-node)]"
            style={{ animationDelay: `${i * 0.6}s`, transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
      </svg>

      {/* módulos flutuantes — rótulos técnicos, sem números inventados */}
      <FloatingModule
        label="Windows"
        meta="Sistema operacional"
        className="left-[-4%] top-[16%]"
        depth={26}
      />
      <FloatingModule
        label="Windows Server"
        meta="Infraestrutura"
        className="right-[-6%] top-[40%]"
        depth={-32}
      />
      <FloatingModule
        label="Office"
        meta="Produtividade"
        className="bottom-[9%] left-[4%]"
        depth={18}
      />
    </div>
  );
}

function FloatingModule({
  label,
  meta,
  className,
  depth,
}: {
  label: string;
  meta: string;
  className: string;
  depth: number;
}) {
  return (
    <div
      className={`absolute hidden md:block ${className} animate-[var(--animate-drift)]`}
      style={{
        transform: `translate3d(calc(var(--px) * ${depth}px), calc(var(--py) * ${depth}px - var(--sy) * 0.08px), 0)`,
      }}
    >
      <div className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md">
        <span className="h-6 w-px bg-accent-bright/70" />
        <span className="flex flex-col">
          <span className="text-[13px] font-medium tracking-[-0.01em] text-white/90">
            {label}
          </span>
          <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
            {meta}
          </span>
        </span>
      </div>
    </div>
  );
}
