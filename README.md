# Sigma Brasil — site institucional

Landing page institucional da **Sigma Brasil** (novo posicionamento da Sigma Rio):
consultoria em licenciamento, soluções Microsoft e suporte corporativo.

Stack: **Next.js 16 (App Router) + React + TypeScript + Tailwind CSS v4**.
Sem bibliotecas de animação — todo o movimento é CSS + IntersectionObserver.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3210
npm run build   # build de produção
```

## Deploy na Vercel

O projeto é 100% estático (prerender). Basta importar o repositório na Vercel —
nenhuma variável de ambiente é necessária. `site.url` em `lib/site.ts` define o
domínio canônico (canonical, OG, sitemap e JSON-LD).

## Domínio e redirecionamentos 301

As URLs do site antigo são redirecionadas em `next.config.mjs`, com 301 de
salto único, com e sem barra final:

| URL antiga | Destino |
| --- | --- |
| `/home` | `/` |
| `/servicos/` | `/#solucoes` |
| `/nosso-diferencial/` | `/#diferenciais` |
| `/contato/` | `/#contato` |

`skipTrailingSlashRedirect` está ligado para evitar a cadeia 308 → 301 do Next.

**Virada de DNS de `sigmario.com.br`** (DNS no Registro.br; o domínio não tem MX):

1. Na Vercel, adicione `sigmario.com.br` (primário) e `www.sigmario.com.br`
   (redirect para o primário, status 301).
2. No Registro.br: registro `A` de `@` e `CNAME` de `www` com os valores que a
   Vercel mostrar na tela de domínios.
3. Não altere nada em `sigmario.net`: é lá que está o e-mail (`adm@sigmario.net`).
4. No Google Search Console, reenvie `https://sigmario.com.br/sitemap.xml`.

Se a marca ganhar um domínio novo, `sigmario.com.br` continua no mesmo projeto
da Vercel redirecionando para ele, e a mudança é informada no Search Console
com a ferramenta "Mudança de endereço".

## Onde trocar as informações

Todo o conteúdo editorial e os dados de contato ficam em **`lib/site.ts`**.
Os pontos que precisam de validação do cliente estão marcados com `⚠️ TROCAR AQUI`:

| Item | Valor atual (herdado de sigmario.com.br) |
| --- | --- |
| E-mail | `adm@sigmario.net` |
| Telefone | `(21) 3942-8787` |
| WhatsApp | mesmo número do telefone — **confirmar número comercial** |
| Endereço | Rua México, 31 — Centro, Rio de Janeiro/RJ, CEP 20031-144 |
| Domínio | `https://sigmario.com.br` — ver seção "Domínio e redirecionamentos 301" |
| Logo | **ainda não aplicado** — ver `components/ui/Logo.tsx` |

### Aplicar o logo

> **A marca no site é um placeholder.** O que aparece hoje é texto
> ("Sigma" em azul + "Brasil" em vermelho), não um arquivo de logo. Procure por
> `data-placeholder="logo"` para achar todos os pontos de uso.

A marca aparece hoje só como assinatura tipográfica ("Sigma Brasil" + subtítulo).
Para aplicar o arquivo definitivo, coloque o logo em `public/logo.svg` (e, se
houver, `public/logo-branco.svg` para fundo escuro) e substitua o bloco marcado em
`components/ui/Logo.tsx` — as instruções estão no comentário no topo do arquivo.
O header e o rodapé usam o mesmo componente, então basta editar em um lugar.

O favicon foi removido: adicione `app/icon.svg` (ou `app/icon.png`, 512×512) com
o símbolo do logo e o Next gera as tags automaticamente.

O CTA "Solicitar consultoria" abre o cliente de e-mail com assunto preenchido.
Para trocar por um formulário, substitua o `href` em `components/FinalCTA.tsx`.

## Estrutura

```
app/
  layout.tsx        metadata SEO, fontes, JSON-LD (ProfessionalService)
  page.tsx          composição das seções
  globals.css       design tokens, utilitários (malha técnica, reveal, tipografia)
  (favicon: adicione `app/icon.svg` ou `app/icon.png` com o logo definitivo)
  sitemap.ts / robots.ts
components/
  Header.tsx        header fixo que encolhe e ganha blur no scroll + menu mobile
  Hero.tsx          primeira dobra
  HeroVisual.tsx    malha Σ com parallax (scroll + mouse), sem dependências
  ProblemSection.tsx
  SolutionsSection.tsx
  MethodSection.tsx timeline com trilho que preenche conforme o scroll
  DifferentialsSection.tsx
  ComparisonSection.tsx
  AboutSection.tsx
  FinalCTA.tsx
  Footer.tsx
  ui/               Container, Reveal, SectionHeading, Logo (wordmark), icons
lib/site.ts         conteúdo + contato (fonte única de verdade)
```

## Design system

- **Conceito:** "Malha Σ" — o símbolo como camadas somadas sobre um grid de
  infraestrutura. Fundo claro com blocos escuros estratégicos (hero, método,
  CTA final, rodapé).
- **Cores:** `#08090a` (ink), `#f5f6f6` (paper), escala de grafites,
  acento único teal-cyan `#0c93a4` (claro) / `#22d3e4` (escuro).
- **Tipografia:** Geist (display, tracking negativo em títulos) + Geist Mono
  (micro-labels técnicos).
- **Tokens:** definidos em `@theme` no `globals.css` — trocar a cor de acento
  em um único lugar atualiza o site inteiro.

## Acessibilidade e performance

- Hierarquia de headings h1 → h2 → h3, landmarks e `aria-label` nas navegações.
- Skip link, foco visível, `prefers-reduced-motion` desliga animações e reveals.
- Zero imagens de banco de imagens: todo o visual é SVG/CSS.

## Restrições de conteúdo

O site **não** cita números, clientes, cases, certificações, selos, prêmios,
depoimentos ou parcerias formais. As provas usadas são qualitativas
("consultoria em licenciamento", "atendimento consultivo", "soluções Microsoft").
Ao evoluir o conteúdo, mantenha esse critério.
