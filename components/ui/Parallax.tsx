"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Parallax contínuo de conteúdo.
 *
 * Diferente do Reveal, que dispara uma vez, aqui o elemento se move enquanto
 * atravessa a viewport — é o que dá a sensação de profundidade no scroll.
 *
 * Um único rAF compartilhado por todos os elementos da página, e só os que
 * estão visíveis entram na conta (IntersectionObserver). Em
 * prefers-reduced-motion nada se mexe.
 */

type Entry = { el: HTMLElement; speed: number; fade: boolean };

const active = new Set<Entry>();
let loop = 0;
let reduced = false;

function tick() {
  loop = 0;
  const vh = window.innerHeight;
  active.forEach(({ el, speed, fade }) => {
    const rect = el.getBoundingClientRect();
    // -1 (entrando por baixo) → 0 (centro) → 1 (saindo por cima)
    const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
    const clamped = Math.max(-1.4, Math.min(1.4, progress));
    el.style.transform = `translate3d(0, ${(clamped * speed).toFixed(2)}px, 0)`;
    if (fade) {
      el.style.opacity = String(Math.max(0.25, 1 - Math.abs(clamped) * 0.55));
    }
  });
  if (active.size > 0) loop = requestAnimationFrame(tick);
}

function schedule() {
  if (!loop && active.size > 0 && !reduced) loop = requestAnimationFrame(tick);
}

export function Parallax({
  children,
  speed = 40,
  fade = false,
  className = "",
  as,
}: {
  children: ReactNode;
  /** Deslocamento em px entre o topo e a base da viewport. Negativo inverte. */
  speed?: number;
  fade?: boolean;
  className?: string;
  as?: ElementType;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const entry: Entry = { el, speed, fade };
    const observer = new IntersectionObserver(
      ([intersection]) => {
        if (intersection.isIntersecting) {
          active.add(entry);
          schedule();
        } else {
          active.delete(entry);
        }
      },
      { rootMargin: "20% 0px 20% 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      active.delete(entry);
    };
  }, [speed, fade]);

  return (
    <Tag ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </Tag>
  );
}
