"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Fundo do hero: loop de 12,6 s (escritório → servidores → equipe), sem áudio.
 *
 * A capa é uma imagem com `priority` e é ela que conta como LCP: o vídeo só
 * entra depois da hidratação, então não segura a primeira pintura. Quem pediu
 * menos movimento ou economia de dados fica só com a capa.
 *
 * Vídeos do Pexels (licença gratuita, uso comercial): 7581202, 1085656 e
 * 8865690. Montagem e compressão com ffmpeg — arquivos em /public/hero.
 */
export function HeroVideo() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection?.saveData === true;
    if (!reduce && !saveData) setPlayVideo(true);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Image
        src="/hero/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {playVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/hero-poster.jpg"
        >
          <source src="/hero/hero.webm" type="video/webm" />
          <source src="/hero/hero.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
