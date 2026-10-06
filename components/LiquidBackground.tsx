"use client";

import { useEffect, useRef } from "react";
import { BRAZIL_PATH } from "@/lib/brazil";

/**
 * Cena de fundo do site: metal líquido procedural em WebGL.
 *
 * Um único canvas fixo atrás de todo o conteúdo. O shader gera faixas que
 * fluem e se dobram (domain warping), com normal calculada por diferenças
 * finitas e specular — é isso que dá volume e leitura de cromo, em vez de
 * gradiente chapado.
 *
 * O scroll empurra o campo (parallax real, com amplitude grande), o ponteiro
 * inclina a luz e o tempo mantém um movimento lento de respiração.
 *
 * Sem biblioteca. Resolução limitada a 1.25x DPR, render pausado com a aba
 * oculta e desligado em prefers-reduced-motion (fica um quadro estático).
 */

const VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2 uRes;
uniform float uTime;
uniform float uScroll;    // 0..1 progresso da página
uniform vec2 uPointer;    // -0.5..0.5
uniform float uQuality;   // 1.0 desktop, 0.0 dispositivo fraco
out vec4 fragColor;

const vec3 PAPER  = vec3(0.961, 0.957, 0.945);   // off-white da página
const vec3 SILVER = vec3(0.755, 0.775, 0.805);
const vec3 NAVY   = vec3(0.086, 0.188, 0.431);   // azul da marca
const vec3 RED    = vec3(0.851, 0.169, 0.122);   // vermelho da marca

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = rot(0.5) * p * 2.03;
    a *= 0.5;
  }
  return v;
}

/** Superfície: lençol de metal dobrado em fitas largas. */
float surface(vec2 p) {
  float t = uTime * 0.05;
  vec2 q = vec2(fbm(p * 0.6 + vec2(0.0, t)), fbm(p * 0.6 + vec2(3.1, -t * 0.7)));
  float ribs = sin(p.x * 0.75 + p.y * 0.42 + q.x * 2.6 + t * 0.4);
  float fold = sin(p.y * 0.55 - p.x * 0.3 + q.y * 2.2 - t * 0.3);
  return ribs * 0.34 + fold * 0.26 + fbm(p * 0.35) * 0.3;
}

vec3 surfaceNormal(vec2 p, float e) {
  float h = surface(p);
  float hx = surface(p + vec2(e, 0.0));
  float hz = surface(p + vec2(0.0, e));
  return normalize(vec3(h - hx, e * 1.6, h - hz));
}

/** Ambiente de estúdio falso: branco em cima, prata no horizonte, teal embaixo. */
vec3 env(vec3 d, vec3 lightDir) {
  float up = clamp(d.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 c = mix(SILVER, vec3(1.0), smoothstep(0.18, 0.88, up));
  c = mix(c, NAVY, smoothstep(0.42, 0.0, up) * 0.16);
  // softbox: a faixa de luz que cria o brilho alongado do cromo
  float key = pow(max(dot(d, lightDir), 0.0), 20.0);
  c += vec3(1.0) * key * 0.9;
  float rim = pow(max(dot(d, normalize(vec3(-0.7, 0.2, -0.6))), 0.0), 8.0);
  c += vec3(0.80, 0.88, 1.0) * rim * 0.22;
  // faísca quente do vermelho da marca, só na borda oposta
  float warm = pow(max(dot(d, normalize(vec3(0.75, -0.1, -0.5))), 0.0), 10.0);
  c = mix(c, RED, warm * 0.1);
  return c;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;

  float s = uScroll;

  // câmera: avança pela superfície conforme a página rola (parallax real)
  vec3 ro = vec3(uPointer.x * 0.8, 1.35 + uPointer.y * 0.35, -2.6 + s * 9.0);
  vec3 ta = vec3(uPointer.x * 0.4, 0.15, ro.z + 3.2);
  vec3 fw = normalize(ta - ro);
  vec3 rt = normalize(cross(vec3(0.0, 1.0, 0.0), fw));
  vec3 up = cross(fw, rt);
  vec3 rd = normalize(p.x * rt + p.y * up + 1.5 * fw);

  vec3 lightDir = normalize(vec3(-0.5 + uPointer.x, 0.72, 0.45));

  // raymarching do campo de altura
  float t = 0.4;
  float hit = -1.0;
  vec3 pos = vec3(0.0);
  int steps = uQuality > 0.5 ? 62 : 34;
  for (int i = 0; i < 70; i++) {
    if (i >= steps) break;
    vec3 q = ro + rd * t;
    float d = q.y - surface(q.xz);
    if (d < 0.0022 * t) { hit = t; pos = q; break; }
    t += max(d * 0.55, 0.02);
    if (t > 16.0) break;
  }

  vec3 col = PAPER;

  if (hit > 0.0) {
    vec3 n = surfaceNormal(pos.xz, 0.045 + hit * 0.004);
    vec3 refl = reflect(rd, n);
    float fres = pow(1.0 - clamp(dot(-rd, n), 0.0, 1.0), 3.2);

    vec3 metal = env(refl, lightDir);
    // specular curto = aresta brilhante, a assinatura do cromo
    float spec = pow(max(dot(normalize(lightDir - rd), n), 0.0), 160.0);
    metal += vec3(1.0) * spec * 1.4;
    metal = mix(metal, vec3(1.0), fres * 0.5);

    // névoa branca com a distância: a peça nasce do branco da página
    float fog = smoothstep(1.9, 12.0, hit);
    col = mix(metal, PAPER, fog);
  }

  // o recorte do mapa já define onde a peça existe; aqui só se tira um pouco
  // de força do lado esquerdo, onde mora a tipografia
  float side = mix(0.72, 1.0, smoothstep(0.04, 0.6, uv.x));
  col = mix(PAPER, col, side);

  fragColor = vec4(col, 1.0);
}`;

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", {
      antialias: false,
      alpha: false,
      powerPreference: "low-power",
    });
    if (!gl) {
      // Sem WebGL2 o canvas fica invisível e o fundo branco do html assume.
      canvas.style.display = "none";
      return;
    }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram();
    if (!vs || !fs || !program) {
      canvas.style.display = "none";
      return;
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      canvas.style.display = "none";
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uScroll = gl.getUniformLocation(program, "uScroll");
    const uPointer = gl.getUniformLocation(program, "uPointer");
    const uQuality = gl.getUniformLocation(program, "uQuality");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // telas pequenas e aparelhos sem força recebem menos passos de raymarching
    const quality = window.innerWidth >= 900 && !/Mobi|Android/i.test(navigator.userAgent) ? 1 : 0;
    const renderScale = quality ? 0.62 : 0.5;

    let scroll = 0;
    let scrollTarget = 0;
    let pointerX = 0;
    let pointerY = 0;
    let pointerTargetX = 0;
    let pointerTargetY = 0;
    let raf = 0;
    let running = true;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.1);
      const w = Math.floor(window.innerWidth * dpr * renderScale);
      const h = Math.floor(window.innerHeight * dpr * renderScale);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const readScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollTarget = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const onPointer = (event: PointerEvent) => {
      pointerTargetX = event.clientX / window.innerWidth - 0.5;
      pointerTargetY = event.clientY / window.innerHeight - 0.5;
    };

    const draw = () => {
      raf = 0;
      if (!running) return;

      // suavização: o fundo persegue o scroll, não gruda nele
      scroll += (scrollTarget - scroll) * 0.08;
      pointerX += (pointerTargetX - pointerX) * 0.05;
      pointerY += (pointerTargetY - pointerY) * 0.05;

      const mask = maskRef.current;
      if (mask) {
        mask.style.transform = `translate3d(0, ${(-scroll * 90).toFixed(1)}px, 0) scale(${(1 + scroll * 0.1).toFixed(3)})`;
      }

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, reduced ? 0 : (performance.now() - start) / 1000);
      gl.uniform1f(uScroll, scroll);
      gl.uniform2f(uPointer, reduced ? 0 : pointerX, reduced ? 0 : pointerY);
      gl.uniform1f(uQuality, quality);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const schedule = () => {
      if (!raf && running) raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) schedule();
    };

    resize();
    readScroll();
    scroll = scrollTarget;
    draw();

    window.addEventListener("resize", () => {
      resize();
      readScroll();
      schedule();
    });
    window.addEventListener("scroll", () => {
      readScroll();
      schedule();
    }, { passive: true });
    if (!reduced) window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  /**
   * O metal só aparece dentro do contorno do país: a máscara é o mapa, com uma
   * borda suavizada para a silhueta não ficar recortada como adesivo.
   */
  const mask = `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'><defs><filter id='s' x='-10%' y='-10%' width='120%' height='120%'><feGaussianBlur stdDeviation='9'/></filter></defs><path d='${BRAZIL_PATH}' fill='white' filter='url(%23s)'/></svg>`,
  )}")`;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-paper">
      <div
        ref={maskRef}
        /* inset dá respiro ao redor do país; "contain" faz o mapa caber tanto
           em tela larga (limitado pela altura) quanto estreita (pela largura) */
        className="absolute inset-[4%] md:inset-[6%]"
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "60% 46%",
          WebkitMaskPosition: "60% 46%",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
      >
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>
    </div>
  );
}
