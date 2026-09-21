/**
 * Dados centrais do site Sigma Brasil.
 *
 * ⚠️ TROCAR AQUI: os dados de contato abaixo foram extraídos do site atual
 * (sigmario.com.br). Confirme com o cliente antes de publicar — especialmente
 * e-mail institucional, número de WhatsApp e endereço.
 */

export const site = {
  name: "Sigma Brasil",
  legalName: "Sigma Brasil — Consultoria e Soluções em Tecnologia",
  // ⚠️ Domínio canônico (canonical, Open Graph, sitemap, JSON-LD).
  // sigmario.com.br é o único domínio confirmado do cliente. NÃO usar
  // sigmabrasil.com.br: pertence a outra empresa (produtos para laboratório).
  // Se a marca ganhar domínio próprio, troque aqui e veja o README (301).
  url: "https://sigmario.com.br",
  description:
    "Consultoria em licenciamento de software, soluções Microsoft, Windows, Office, Windows Server e suporte corporativo para empresas.",
} as const;

export const contact = {
  // ⚠️ TROCAR AQUI se houver e-mail novo para a marca Sigma Brasil.
  email: "adm@sigmario.net",
  phone: "(21) 3942-8787",
  phoneHref: "tel:+552139428787",
  // ⚠️ TROCAR AQUI: número real de WhatsApp comercial (formato internacional).
  whatsapp: "+55 21 3942-8787",
  whatsappHref:
    "https://wa.me/552139428787?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Sigma%20Brasil%20sobre%20licenciamento%20de%20software.",
  address: {
    street: "Rua México, 31",
    district: "Centro",
    city: "Rio de Janeiro",
    state: "RJ",
    zip: "20031-144",
    country: "BR",
  },
} as const;

export const nav = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Licenciamento", href: "#metodo" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export const heroIndicators = [
  "Consultoria em licenciamento",
  "Soluções Microsoft",
  "Suporte corporativo",
  "Atendimento especializado",
] as const;

export const problems = [
  {
    code: "01",
    title: "Contratos difíceis de entender",
    text: "Termos, métricas e regras de uso que mudam de programa para programa e raramente são explicados em linguagem de negócio.",
  },
  {
    code: "02",
    title: "Licenças incompatíveis com a operação",
    text: "Planos contratados que não conversam com o número de usuários, dispositivos ou com o modo como a empresa realmente trabalha.",
  },
  {
    code: "03",
    title: "Gastos desnecessários",
    text: "Assinaturas duplicadas, recursos pagos e nunca usados, upgrades feitos por insegurança e não por necessidade.",
  },
  {
    code: "04",
    title: "Falta de previsibilidade",
    text: "Renovações que chegam sem aviso e orçamentos de tecnologia que mudam de patamar sem explicação clara.",
  },
  {
    code: "05",
    title: "Riscos de compliance",
    text: "Ambientes com licenciamento incorreto ou mal documentado, expostos a questionamentos em auditoria.",
  },
  {
    code: "06",
    title: "Mudanças constantes da Microsoft",
    text: "Políticas de licenciamento revisadas periodicamente, exigindo acompanhamento contínuo para não perder o passo.",
  },
] as const;

export type Solution = {
  id: string;
  title: string;
  text: string;
  points: readonly string[];
  icon: "advisory" | "office" | "device" | "server" | "support";
};

export const solutions: readonly Solution[] = [
  {
    id: "consultoria-licenciamento",
    title: "Consultoria em Licenciamento",
    text: "Diagnóstico, dimensionamento e recomendação da melhor estrutura de licenças para a empresa.",
    points: ["Sizing por uso real", "Cenários comparativos", "Projeção de crescimento"],
    icon: "advisory",
  },
  {
    id: "windows",
    title: "Windows e Windows Pro",
    text: "Licenciamento do sistema operacional para empresas que precisam de segurança, mobilidade e gestão eficiente dos dispositivos.",
    points: ["Parque padronizado", "Segurança de endpoint", "Mobilidade corporativa"],
    icon: "device",
  },
  {
    id: "office",
    title: "Office",
    text: "Pacote de produtividade instalado no computador — Word, Excel, PowerPoint e Outlook — licenciado por dispositivo.",
    points: ["Licença por dispositivo", "Produtividade no desktop", "Atualização de versão"],
    icon: "office",
  },
  {
    id: "windows-server",
    title: "Windows Server",
    text: "Estruturação de ambientes corporativos, servidores, virtualização e necessidades de datacenter.",
    points: ["CALs e métricas", "Virtualização", "Ambientes híbridos"],
    icon: "server",
  },
  {
    id: "suporte-tecnico",
    title: "Suporte e Orientação Técnica",
    text: "Atendimento próximo para reduzir dúvidas, retrabalho e decisões erradas.",
    points: ["Canal direto", "Orientação consultiva", "Acompanhamento contínuo"],
    icon: "support",
  },
];

export const methodSteps = [
  {
    step: "01",
    title: "Entendimento",
    text: "Mapeamos o cenário atual, necessidades, usuários, dispositivos e objetivos da empresa.",
    meta: "Diagnóstico",
  },
  {
    step: "02",
    title: "Dimensionamento",
    text: "Criamos cenários de licenciamento considerando uso real, crescimento e custo-benefício.",
    meta: "Sizing",
  },
  {
    step: "03",
    title: "Recomendação",
    text: "Indicamos a melhor composição de soluções, evitando excesso, falta ou incompatibilidade.",
    meta: "Decisão",
  },
  {
    step: "04",
    title: "Implementação",
    text: "Apoiamos a contratação, ativação e organização das soluções.",
    meta: "Execução",
  },
  {
    step: "05",
    title: "Acompanhamento",
    text: "Mantemos suporte consultivo para ajustes, dúvidas e evolução do ambiente.",
    meta: "Continuidade",
  },
] as const;

export const differentials = [
  {
    title: "Linguagem simples para decisões complexas",
    text: "Traduzimos regras de licenciamento em critérios de negócio: o que muda no custo, no risco e na operação.",
  },
  {
    title: "Atendimento rápido e consultivo",
    text: "Canal direto com quem entende do assunto, sem fila de tickets para tirar uma dúvida objetiva.",
  },
  {
    title: "Foco em economia e adequação",
    text: "A recomendação certa é a que cobre a necessidade real — sem excesso contratado por precaução.",
  },
  {
    title: "Parceria de longo prazo",
    text: "Acompanhamos renovações, mudanças de política e crescimento do ambiente ao longo do tempo.",
  },
  {
    title: "Conhecimento em soluções Microsoft",
    text: "Windows, Office e Windows Server dentro de um mesmo raciocínio de licenciamento.",
  },
  {
    title: "Orientação para empresas em crescimento",
    text: "Estruturas que suportam novos usuários, filiais e sistemas sem recomeçar a decisão do zero.",
  },
  {
    title: "Menos desperdício, mais previsibilidade",
    text: "Cenários claros de custo para planejar o orçamento de tecnologia com antecedência.",
  },
] as const;

export const comparison = {
  without: [
    "Risco de contratar licenças erradas",
    "Dificuldade para comparar planos",
    "Pouca previsibilidade de custo",
    "Mais dúvidas técnicas em aberto",
    "Maior chance de desperdício",
  ],
  with: [
    "Diagnóstico consultivo",
    "Cenários claros de decisão",
    "Licenciamento adequado ao uso",
    "Apoio técnico e comercial",
    "Melhor controle e segurança",
  ],
} as const;
