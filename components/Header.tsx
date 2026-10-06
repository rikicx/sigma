"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";
import { ArrowRight } from "./ui/icons";
import { nav, routes } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled || open
          ? "border-b border-line bg-paper shadow-[0_1px_0_0_rgba(8,9,10,0.03),0_8px_24px_-18px_rgba(8,9,10,0.25)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-20 md:h-24"
          }`}
        >
          <Link href={routes.home} onClick={close} aria-label="Sigma Brasil — início">
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative text-[13.5px] font-medium tracking-[-0.01em] transition-colors ${
                    active ? "text-ink" : "text-graphite hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={routes.contato}
              className="group hidden items-center gap-2 bg-ink px-5 py-3 text-[13px] font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-accent sm:inline-flex"
            >
              Solicitar orçamento
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
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

      <div
        id="menu-mobile"
        className={`absolute inset-x-0 top-full origin-top overflow-hidden border-b border-line bg-paper transition-all duration-500 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav aria-label="Principal — mobile" className="flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex items-center justify-between border-b border-line/70 py-4 text-lg font-medium tracking-[-0.02em] text-ink"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-accent" />
              </Link>
            ))}
            <Link
              href={routes.contato}
              onClick={close}
              className="mt-5 mb-6 inline-flex items-center justify-center gap-2 bg-ink px-5 py-4 text-sm font-medium text-white"
            >
              Solicitar orçamento
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
