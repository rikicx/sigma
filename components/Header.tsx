"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";
import { ArrowRight, WhatsAppIcon } from "./ui/icons";
import { contact, nav, routes } from "@/lib/site";

/** O logo se desenha uma vez por carregamento, e só na home. */
let logoJaDesenhou = false;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [desenhaLogo, setDesenhaLogo] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (logoJaDesenhou || window.location.pathname !== "/") return;
    logoJaDesenhou = true;
    setDesenhaLogo(true);
  }, []);

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

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        open
          ? "border-b border-transparent bg-transparent"
          : scrolled
            ? "border-b border-line bg-paper shadow-[0_1px_0_0_rgba(11,15,28,0.03),0_8px_24px_-18px_rgba(11,15,28,0.25)]"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* a barra fica acima do painel do menu: sem isso o overlay cobre a logo */}
      <Container className="relative z-50">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-20 md:h-24"
          }`}
        >
          <Link
            href={routes.home}
            onClick={close}
            aria-label="Sigma Brasil — início"
            className="-my-2 inline-flex py-2"
          >
            <Logo
              tone={open ? "dark" : "light"}
              animated={desenhaLogo && !open}
              className="h-8 w-auto md:h-9"
            />
          </Link>

          <nav
            aria-label="Principal"
            className="hidden items-center gap-7 lg:flex"
          >
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
            {/* no celular o botão de orçamento não cabe: fica o atalho do WhatsApp */}
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-cabecalho"
              aria-label="Solicitar orçamento pelo WhatsApp"
              className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-300 sm:hidden ${
                open ? "pointer-events-none opacity-0" : "bg-accent text-white"
              }`}
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <Link
              href={routes.contato}
              className="group hidden items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[13px] font-medium tracking-[-0.01em] text-white transition-colors duration-300 hover:bg-brand-red sm:inline-flex"
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
              className={`relative z-50 flex h-11 w-11 items-center justify-center transition-colors duration-300 lg:hidden ${
                open ? "text-white" : "text-ink"
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

      {/* Menu mobile: tela cheia em azul da marca, itens entrando um a um */}
      <div
        id="menu-mobile"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-accent transition-opacity duration-500 ease-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden="true"
          className={`grid-technical-dark absolute inset-0 opacity-25 transition-opacity duration-700 ${
            open ? "opacity-25" : "opacity-0"
          }`}
        />

        <Container className="relative flex h-full flex-col justify-between pt-28 pb-10">
          <nav aria-label="Principal — mobile">
            <ul>
              {nav.map((item, index) => (
                <li
                  key={item.href}
                  style={{
                    transitionDelay: open ? `${140 + index * 70}ms` : "0ms",
                  }}
                  className={`border-b border-white/10 transition-all duration-500 ease-out ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className="flex-1 text-[27px] font-medium leading-none tracking-[-0.03em] text-white">
                      {item.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand-red-bright transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            style={{
              transitionDelay: open ? `${160 + nav.length * 70}ms` : "0ms",
            }}
            className={`transition-all duration-500 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <Link
              href={routes.contato}
              onClick={close}
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 text-sm font-medium text-accent transition-colors hover:bg-brand-red hover:text-white"
            >
              Solicitar orçamento
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <div className="mt-7 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">
              <a
                href={`mailto:${contact.emailVendas}`}
                className="inline-block py-2 transition-colors hover:text-white"
              >
                {contact.emailVendas}
              </a>
              <a
                href={contact.phoneHref}
                className="inline-block py-2 transition-colors hover:text-white"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
