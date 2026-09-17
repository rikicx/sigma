"use client";

import { useCallback, useEffect, useState } from "react";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";
import { ArrowRight } from "./ui/icons";
import { nav } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ${
        scrolled
          ? "border-b border-line/80 bg-paper/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-20 md:h-24"
          }`}
        >
          <a
            href="#topo"
            onClick={close}
            aria-label="Sigma Brasil — início"
            className="shrink-0"
          >
            <Logo tone={scrolled ? "light" : "dark"} />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative text-[13.5px] font-medium tracking-[-0.01em] transition-colors ${
                  scrolled
                    ? "text-graphite hover:text-ink"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className={`group hidden items-center gap-2 px-5 py-3 text-[13px] font-medium tracking-[-0.01em] transition-all duration-300 sm:inline-flex ${
                scrolled
                  ? "bg-ink text-white hover:bg-accent"
                  : "bg-white text-ink hover:bg-accent-bright"
              }`}
            >
              Solicitar consultoria
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className={`flex h-11 w-11 items-center justify-center lg:hidden ${
                scrolled || open ? "text-ink" : "text-white"
              }`}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`grid-technical absolute inset-x-0 top-full origin-top overflow-hidden border-b border-line bg-paper transition-all duration-400 lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav aria-label="Principal — mobile" className="flex flex-col py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex items-center justify-between border-b border-line/70 py-4 text-lg font-medium tracking-[-0.02em] text-ink"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-accent" />
              </a>
            ))}
            <a
              href="#contato"
              onClick={close}
              className="mt-5 mb-6 inline-flex items-center justify-center gap-2 bg-ink px-5 py-4 text-sm font-medium text-white"
            >
              Solicitar consultoria
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
