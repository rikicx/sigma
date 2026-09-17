"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { methodSteps } from "@/lib/site";

export function MethodSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    let frame = 0;
    const compute = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.25;
      const raw = (start - rect.top) / (start - end + rect.height * 0.35);
      setProgress(Math.min(1, Math.max(0, raw)));
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

  const activeIndex = Math.min(
    methodSteps.length - 1,
    Math.floor(progress * methodSteps.length),
  );

  return (
    <section
      id="metodo"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 md:py-32"
      aria-labelledby="metodo-titulo"
    >
      <div className="grid-technical-dark mask-fade-b absolute inset-0" aria-hidden="true" />
      <div
        className="absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[150px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Método Sigma"
          tone="dark"
          title={
            <span id="metodo-titulo">
              Um método claro para decisões melhores em tecnologia.
            </span>
          }
          description="Cada etapa existe para remover uma incerteza específica — do mapeamento do ambiente à continuidade do suporte depois da contratação."
        />

        <div ref={trackRef} className="relative mt-20">
          {/* trilho horizontal (desktop) */}
          <div
            className="absolute left-0 right-0 top-[15px] hidden h-px bg-white/10 lg:block"
            aria-hidden="true"
          >
            <div
              className="h-px bg-linear-to-r from-accent-bright to-accent transition-[width] duration-300 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          {/* trilho vertical (mobile) */}
          <div
            className="absolute bottom-6 left-[15px] top-2 w-px bg-white/10 lg:hidden"
            aria-hidden="true"
          >
            <div
              className="w-px bg-linear-to-b from-accent-bright to-accent transition-[height] duration-300 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6">
            {methodSteps.map((item, index) => {
              const active = index <= activeIndex;
              return (
                <li key={item.step} className="relative pl-12 lg:pl-0">
                  <Reveal delay={index * 80}>
                    <span
                      className={`absolute left-[8px] top-[8px] flex h-3.5 w-3.5 items-center justify-center transition-colors duration-500 lg:left-0 ${
                        active ? "bg-accent-bright" : "bg-ink-600"
                      }`}
                      aria-hidden="true"
                    >
                      <span
                        className={`h-1.5 w-1.5 transition-colors duration-500 ${
                          active ? "bg-ink" : "bg-white/30"
                        }`}
                      />
                    </span>

                    <div className="lg:pt-12">
                      <span
                        className={`font-mono text-[11px] tracking-[0.18em] transition-colors duration-500 ${
                          active ? "text-accent-bright" : "text-white/30"
                        }`}
                      >
                        {item.step} — {item.meta}
                      </span>
                      <h3 className="mt-3 text-[20px] font-medium tracking-[-0.022em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-white/55">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
