/**
 * Conteúdo e dados centrais do site Sigma Brasil.
 * Fonte única de verdade: alterar aqui reflete em todas as páginas.
 */

export const site = {
  name: "Sigma Brasil",
  legalName: "Sigma Brasil — Licenciamento Microsoft, Antivírus e Consultoria",
  /** Domínio registrado pelo cliente em 17/09/2026, com e-mail Titan já ativo. */
  url: "https://sigmabrasil.com",
  description:
    "Venda de licenças Microsoft e antivírus corporativo com consultoria em licenciamento: Windows, Windows Server, Office e suporte para empresas.",
} as const;

export const contact = {
  /** E-mails confirmados pelo cliente em 01/10/2026. */
  emailVendas: "vendas@sigmabrasil.com",
  emailGerencia: "gerencia@sigmabrasil.com",
  /** ⚠️ TROCAR AQUI: telefone novo prometido pelo cliente. Este é o do site antigo. */
  phone: "(21) 3942-8787",
  phoneHref: "tel:+552139428787",
  /** ⚠️ TROCAR AQUI: confirmar WhatsApp comercial. Este consta na página de contato do site antigo. */
  whatsapp: "(21) 99704-1294",
  whatsappHref:
    "https://wa.me/5521997041294?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Sigma%20Brasil%20sobre%20licenciamento%20de%20software.",
  address: {
    street: "Rua México, 31",
    district: "Centro",
    city: "Rio de Janeiro",
    state: "RJ",
    zip: "20031-144",
    country: "BR",
  },
} as const;

export const routes = {
  home: "/",
  licencas: "/licencas-microsoft",
  antivirus: "/antivirus",
  consultoria: "/consultoria",
  sobre: "/sobre",
  contato: "/contato",
} as const;

export const nav = [
  { label: "Licenças Microsoft", href: routes.licencas },
  { label: "Antivírus", href: routes.antivirus },
  { label: "Consultoria", href: routes.consultoria },
  { label: "Sobre", href: routes.sobre },
  { label: "Contato", href: routes.contato },
] as const;

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const offers = [
  {
    id: "licencas",
    eyebrow: "Software",
    title: "Licenças Microsoft",
    text: "Windows, Windows Pro, Office e Windows Server para empresas, com orientação sobre a quantidade e o tipo de licença que a operação realmente precisa.",
    items: ["Windows e Windows Pro", "Office", "Windows Server"],
    href: routes.licencas,
    cta: "Ver licenças Microsoft",
    icon: "windows" as const,
  },
  {
    id: "antivirus",
    eyebrow: "Segurança",
    title: "Antivírus corporativo",
    text: "Licenciamento Kaspersky para os computadores e servidores da empresa, dimensionado por número de dispositivos e com renovação acompanhada de perto.",
    items: ["Kaspersky", "Estações e servidores", "Renovações"],
    href: routes.antivirus,
    cta: "Ver antivírus corporativo",
    icon: "shield" as const,
  },
] as const;

export const heroIndicators = [
  "Licenças Microsoft",
  "Antivírus corporativo",
  "Consultoria em licenciamento",
  "Suporte a empresas",
] as const;

/* ------------------------------------------------------------------ */
/* Licenças Microsoft                                                  */
/* ------------------------------------------------------------------ */

export type Product = {
  id: string;
  title: string;
  text: string;
  points: readonly string[];
  icon: "device" | "office" | "server";
};

export const products: readonly Product[] = [
  {
    id: "windows",
    title: "Windows e Windows Pro",
    text: "Licenciamento do sistema operacional para os computadores da empresa, com os recursos de segurança e gestão que a versão Pro oferece em relação à versão doméstica.",
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
    text: "Licenciamento de servidores corporativos, incluindo as licenças de acesso (CALs) por usuário ou por dispositivo e cenários de virtualização.",
    points: ["CALs e métricas", "Virtualização", "Ambientes híbridos"],
    icon: "server",
  },
];

export const buyingSteps = [
  {
    step: "01",
    title: "Conte o cenário",
    text: "Quantos computadores, quantos usuários, quais servidores e o que já existe licenciado hoje.",
  },
  {
    step: "02",
    title: "Receba a recomendação",
    text: "Indicamos a composição de licenças adequada, com as alternativas e o que muda em cada uma.",
  },
  {
    step: "03",
    title: "Compre e ative",
    text: "Acompanhamos a aquisição, a ativação e a organização das licenças no ambiente da empresa.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Antivírus                                                           */
/* ------------------------------------------------------------------ */

/**
 * ⚠️ CONFIRMAR COM O CLIENTE: quais linhas/edições Kaspersky são trabalhadas
 * (ex.: linha para pequenas empresas × linha corporativa com console de gestão).
 * Enquanto não vier a resposta, o texto fala do que é verdade em qualquer caso:
 * licenciamento por dispositivo, estações e servidores, e renovação.
 */
export const antivirusTopics = [
  {
    id: "estacoes",
    title: "Estações de trabalho",
    text: "Licenciamento para os computadores usados pela equipe no dia a dia, contados por dispositivo e com validade acompanhada.",
    points: ["Contagem por dispositivo", "Desktops e notebooks"],
  },
  {
    id: "servidores",
    title: "Servidores",
    text: "Proteção para os servidores que sustentam arquivos, sistemas e serviços internos da empresa.",
    points: ["Ambientes corporativos", "Cobertura do servidor"],
  },
  {
    id: "renovacao",
    title: "Renovação e ampliação",
    text: "Acompanhamos o vencimento das licenças e o crescimento do parque, para o ambiente não ficar descoberto nem pagar por dispositivo que não existe mais.",
    points: ["Aviso de vencimento", "Ajuste de quantidade"],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Consultoria                                                         */
/* ------------------------------------------------------------------ */

export const problems = [
  {
    code: "01",
    title: "Contratos difíceis de entender",
    text: "Termos, métricas e regras de uso que mudam de programa para programa e raramente são explicados em linguagem de negócio.",
  },
  {
    code: "02",
    title: "Licenças incompatíveis com a operação",
    text: "Versões contratadas que não conversam com o número de usuários, de dispositivos ou com o modo como a empresa realmente trabalha.",
  },
  {
    code: "03",
    title: "Gastos desnecessários",
    text: "Licenças duplicadas, recursos pagos e nunca usados, upgrades feitos por insegurança e não por necessidade.",
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
    "Dificuldade para comparar versões",
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

/* ------------------------------------------------------------------ */
/* Sobre                                                               */
/* ------------------------------------------------------------------ */

export const pillars = [
  { label: "Atuação", value: "Licenciamento, antivírus e consultoria" },
  { label: "Especialidade", value: "Soluções Microsoft para empresas" },
  { label: "Base", value: `${contact.address.city} — ${contact.address.state}` },
  { label: "Modelo", value: "Atendimento consultivo e continuado" },
] as const;
