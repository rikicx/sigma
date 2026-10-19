"use client";

/**
 * Logo da Sigma Brasil, em vetor, inline.
 *
 * Fica inline (e não como <img>) por dois motivos: a cor muda conforme o
 * fundo e o traço é animado na chegada da home.
 *
 * O arquivo original é feito de formas preenchidas, não de traços — então o
 * "auto desenho" não sai de graça. O que se faz aqui é riscar o CONTORNO de
 * cada forma com stroke e dash, e trazer o preenchimento logo atrás, com o
 * contorno sumindo no fim. Daí a sensação de desenho à mão.
 *
 * Cores do arquivo: #062d58 (azul) e #e70012 (vermelho). Sobre fundo escuro o
 * azul desaparece (1,1:1), então a variante `dark` troca azul por branco e usa
 * um vermelho mais aberto.
 */

type Tone = "light" | "dark";

/** d = contorno, red = parte vermelha do logo, order = ordem do desenho. */
const PATHS: { d: string; red?: boolean; order: number }[] = [
  // A (lockup)
  {
    order: 4,
    d: "M 323 16 L 345 72 L 322 72 L 317 58 L 291 58 L 286 72 L 266 72 L 267 65 L 274 51 L 275 45 L 280 36 L 292 3 L 318 3 Z M 307 28 L 306 23 L 304 22 L 297 41 L 297 45 L 313 45 Z",
  },
  // I
  { order: 1, d: "M 99 3 L 113 3 L 113 72 L 93 72 L 93 3 Z" },
  // S
  {
    order: 0,
    d: "M 52 2 C 73 2 87 14 88 26 L 67 26 C 67 18 62 15 54 15 C 46 15 42 19 45 25 C 48 30 64 31 76 37 C 87 43 90 50 87 61 C 83 72 71 75 55 75 C 34 75 23 65 22 50 L 44 50 C 45 58 49 62 56 62 C 64 62 68 58 67 52 C 66 47 55 44 42 41 C 27 37 21 29 24 17 C 27 7 37 2 52 2 Z",
  },
  // G
  {
    order: 2,
    d: "M 153 2 C 174 2 187 13 188 26 L 165 26 C 164 18 160 15 153 15 C 142 15 137 23 137 38 L 137 46 C 137 59 142 63 153 63 C 162 63 166 57 166 49 L 153 49 L 153 32 L 188 32 L 188 45 C 188 64 176 74 153 74 C 130 74 117 61 117 39 C 117 15 130 2 153 2 Z",
  },
  // M (bloco vermelho)
  {
    order: 3,
    red: true,
    d: "M 192 2 L 264 2 L 264 72 L 192 72 Z M 197 14 L 227 36 L 258 14 L 258 62 L 241 62 C 247 59 250 54 250 47 L 250 30 L 227 46 L 206 30 L 206 47 C 206 55 209 59 215 62 L 197 62 Z",
  },
  // traço superior
  {
    order: 5,
    d: "M 2 105 C 34 87 80 76 123 77 C 159 77 189 82 211 90 C 174 82 143 80 117 81 C 75 81 32 91 2 105 Z",
  },
  // B R A S I L
  {
    order: 7,
    red: true,
    d: "M 216 77 L 228 77 C 235 77 239 79.52 239 82.88 C 239 85.4 237 87.08 234 87.92 C 238 88.76 240 90.44 240 92.96 C 240 96.32 236 98 229 98 L 216 98 Z M 223 81.2 L 228 81.2 C 231 81.2 232 82.04 232 83.72 C 232 85.4 230 86.24 228 86.24 L 223 86.24 Z M 223 90.44 L 229 90.44 C 232 90.44 233 91.28 233 92.96 C 233 94.64 231 94.64 229 94.64 L 223 94.64 Z",
  },
  {
    order: 8,
    red: true,
    d: "M 243 77 L 256 77 C 263 77 266 80.36 266 84.56 C 266 87.92 264 90.44 260 91.28 L 266 98 L 257 98 L 252 92.12 L 250 92.12 L 250 98 L 243 98 Z M 250 81.2 L 255 81.2 C 258 81.2 259 82.04 259 84.56 C 259 86.24 257 87.08 255 87.08 L 250 87.08 Z",
  },
  {
    order: 9,
    red: true,
    d: "M 269 98 L 279 77 L 286 77 L 296 98 L 288 98 L 286 93.8 L 278 93.8 L 276 98 Z M 280 88.76 L 284 88.76 L 282 82.88 Z",
  },
  {
    order: 10,
    red: true,
    d: "M 308 77 C 315 77 319 79.52 319 83.72 L 312 83.72 C 312 82.04 310 81.2 307 81.2 C 304 81.2 303 82.04 303 83.72 C 303 85.4 306 86.24 310 87.08 C 317 87.92 320 89.6 320 92.96 C 320 97.16 315 98.84 308 98.84 C 301 98.84 297 96.32 297 92.12 L 304 92.12 C 304 93.8 306 94.64 309 94.64 C 312 94.64 313 93.8 313 92.96 C 313 91.28 310 91.28 306 90.44 C 300 89.6 297 87.92 297 83.72 C 297 79.52 301 77 308 77 Z",
  },
  { order: 11, red: true, d: "M 322 77 L 329 77 L 329 98 L 322 98 Z" },
  { order: 12, red: true, d: "M 334 77 L 341 77 L 341 92.96 L 353 92.96 L 353 98 L 334 98 Z" },
  // traço inferior
  {
    order: 6,
    d: "M 27 106 C 67 89 105 81 137 83 C 166 84 190 89 211 95 C 170 87 145 86 126 87 C 87 87 55 94 27 106 Z",
  },
];

const CORES = {
  light: { base: "#062d58", red: "#e70012" },
  dark: { base: "#ffffff", red: "#ef3b30" },
} as const;

export function Logo({
  tone = "light",
  animated = false,
  step = 85,
  className = "h-8 w-auto",
}: {
  tone?: Tone;
  /** Risca o contorno e preenche depois. Só na chegada da home. */
  animated?: boolean;
  /** intervalo entre o início de cada forma no desenho, em ms */
  step?: number;
  className?: string;
}) {
  const cor = CORES[tone];

  return (
    <svg
      viewBox="0 0 358 108"
      role="img"
      aria-label="Sigma Brasil"
      className={`${className} ${animated ? "logo-draw" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {PATHS.map((p, i) => {
        const c = p.red ? cor.red : cor.base;
        return (
          <path
            key={i}
            d={p.d}
            fill={c}
            stroke={c}
            fillRule="evenodd"
            pathLength={1}
            style={{ "--d": `${p.order * step}ms` } as React.CSSProperties}
          />
        );
      })}
    </svg>
  );
}
