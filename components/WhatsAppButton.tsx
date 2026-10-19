"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./ui/icons";
import { contact } from "@/lib/site";

/**
 * Botão flutuante de WhatsApp: entra depois da primeira dobra, canto inferior
 * direito. No desktop o rótulo fica sempre à mostra — o cliente pediu acesso
 * fácil ao WhatsApp; no celular fica só o ícone para não cobrir o conteúdo.
 */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      data-cta="whatsapp-flutuante"
      className={`group fixed bottom-6 right-6 z-40 flex items-center rounded-lg bg-accent text-white shadow-[0_18px_40px_-16px_rgba(8,9,10,0.55)] transition-all duration-500 hover:bg-accent-deep md:bottom-8 md:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="hidden whitespace-nowrap pl-5 text-[13.5px] font-medium tracking-[-0.01em] md:inline">
        Orçamento pelo WhatsApp
      </span>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <WhatsAppIcon className="h-6 w-6 text-white transition-transform duration-500 group-hover:scale-110" />
      </span>
      <span
        className="absolute inset-x-0 top-0 h-px bg-brand-red-bright/70"
        aria-hidden="true"
      />
    </a>
  );
}
