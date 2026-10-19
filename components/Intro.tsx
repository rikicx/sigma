"use client";

import { useEffect, useState } from "react";
import { Logo } from "./ui/Logo";

type Phase = "draw" | "open" | "done";

/** quando a cortina começa a abrir: o desenho do logo termina por volta de 1,6 s */
const OPEN_AT = 1700;
/** duração da cortina (igual à transição em globals.css) */
const OPEN_FOR = 1000;

/**
 * Abertura do site: o logo se desenha sobre fundo branco e a tela se abre ao
 * meio, como cortina, revelando o site que já está montado por trás.
 *
 * Roda uma vez por sessão e nunca com reduced-motion. Quem decide é o script
 * inline do layout, antes da primeira pintura (`html[data-intro]`): o overlay
 * vem no HTML do servidor, mas o CSS só o mostra com esse atributo — sem JS
 * ou em visita repetida ele não aparece, nem por um quadro.
 *
 * Enquanto a abertura roda, a entrada do hero fica pausada e só começa quando
 * a cortina abre (ver `html[data-intro] .hero-rise` no globals.css).
 */
export function Intro() {
  const [phase, setPhase] = useState<Phase>("draw");

  useEffect(() => {
    const html = document.documentElement;
    if (!html.dataset.intro) {
      setPhase("done");
      return;
    }

    html.style.overflow = "hidden";
    const open = window.setTimeout(() => {
      setPhase("open");
      delete html.dataset.intro;
      html.style.overflow = "";
    }, OPEN_AT);
    const done = window.setTimeout(() => {
      setPhase("done");
      try {
        sessionStorage.setItem("sigma:intro", "1");
      } catch {
        /* storage bloqueado: a abertura volta na próxima visita, sem prejuízo */
      }
    }, OPEN_AT + OPEN_FOR);

    return () => {
      window.clearTimeout(open);
      window.clearTimeout(done);
      html.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div aria-hidden="true" className="intro" data-phase={phase}>
      <div className="intro-panel intro-panel-l" />
      <div className="intro-panel intro-panel-r" />
      <div className="intro-mark">
        <Logo animated step={55} className="h-auto w-[min(64vw,420px)]" />
      </div>
    </div>
  );
}
