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
    "Sigma Brasil: licenças Microsoft (Windows Pro, Office, Windows Server, SQL Server, Visual Studio, Visio e Project) e antivírus Kaspersky para empresas, com consultoria em licenciamento.",
} as const;

/** ⚠️ TROCAR AQUI: confirmar WhatsApp comercial. Este consta na página de contato do site antigo. */
const whatsappNumber = "5521997041294";

/** Link de WhatsApp com mensagem pronta — usado nos botões de orçamento por produto. */
export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const contact = {
  /** E-mails confirmados pelo cliente em 01/10/2026. */
  emailVendas: "vendas@sigmabrasil.com",
  /** ⚠️ TROCAR AQUI: telefone novo prometido pelo cliente. Este é o do site antigo. */
  phone: "(21) 3942-8787",
  phoneHref: "tel:+552139428787",
  whatsapp: "(21) 99704-1294",
  whatsappHref: whatsappLink(
    "Olá, gostaria de falar com a Sigma Brasil sobre licenciamento de software.",
  ),
  /** Endereços das filiais confirmados pelo cliente em 03/11/2026. */
  offices: [
    {
      city: "Rio de Janeiro",
      street: "Rua México, 31, sala 703",
      district: "Centro",
      state: "RJ",
      zip: "20031-904",
      country: "BR",
    },
    {
      city: "São Paulo",
      street: "Rua Pires da Mota, 565, sala 3",
      district: "Aclimação",
      state: "SP",
      zip: "01529-001",
      country: "BR",
    },
  ],
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

export const heroIndicators = [
  "Licenças Microsoft",
  "Antivírus Kaspersky",
  "Consultoria em licenciamento",
  "Suporte a empresas",
] as const;

/* ------------------------------------------------------------------ */
/* Licenças Microsoft                                                  */
/* ------------------------------------------------------------------ */

export type Product = {
  id: string;
  title: string;
  /** categoria curta, mostrada sobre a peça visual do card */
  family: string;
  text: string;
  points: readonly string[];
  icon: "windows" | "office" | "server" | "key" | "database" | "code" | "diagram" | "gantt";
  /** foto conceitual do topo do card (Unsplash, licença gratuita), em /public/produtos */
  image: string;
  imageAlt: string;
};

/**
 * Portfólio Microsoft comercializado pela Sigma (confirmado pelo cliente em
 * 19/10/2026). A linha Microsoft 365 não é trabalhada e não deve aparecer.
 */
export const products: readonly Product[] = [
  {
    id: "windows-pro",
    title: "Windows Pro",
    family: "Sistema operacional",
    text: "A edição profissional do Windows para os computadores da empresa: ingresso em domínio, criptografia BitLocker e políticas de grupo, recursos que a edição doméstica não tem.",
    points: ["Estações de trabalho", "Gestão em domínio", "BitLocker"],
    icon: "windows",
    image: "/produtos/windows-pro.jpg",
    imageAlt: "Notebook aberto sobre uma mesa de trabalho",
  },
  {
    id: "office",
    title: "Office",
    family: "Produtividade",
    text: "Word, Excel, PowerPoint e, conforme a edição, Outlook — instalados no computador e licenciados por dispositivo.",
    points: ["Licença por dispositivo", "Instalado no desktop"],
    icon: "office",
    image: "/produtos/office.jpg",
    imageAlt: "Mãos digitando em um notebook com uma planilha aberta",
  },
  {
    id: "windows-server",
    title: "Windows Server",
    family: "Servidores",
    text: "Sistema operacional dos servidores da empresa, licenciado por núcleo. A edição Datacenter atende ambientes com muitas máquinas virtuais no mesmo servidor.",
    points: ["Licença por núcleo", "Edição Datacenter", "Virtualização"],
    icon: "server",
    image: "/produtos/windows-server.jpg",
    imageAlt: "Corredor de uma sala de servidores com racks dos dois lados",
  },
  {
    id: "cals",
    title: "CALs de acesso",
    family: "Acesso ao servidor",
    text: "Licenças de acesso de cliente que cada usuário ou dispositivo precisa para se conectar ao servidor. Escolher entre CAL de usuário e de dispositivo muda o custo.",
    points: ["CAL de usuário", "CAL de dispositivo"],
    icon: "key",
    image: "/produtos/cals.jpg",
    imageAlt: "Equipe trabalhando em computadores em um escritório",
  },
  {
    id: "sql-server",
    title: "SQL Server",
    family: "Banco de dados",
    text: "Banco de dados dos sistemas da empresa, licenciado por núcleo ou no modelo servidor + CAL. A escolha do modelo é o que mais pesa no orçamento.",
    points: ["Por núcleo", "Servidor + CAL"],
    icon: "database",
    image: "/produtos/sql-server.jpg",
    imageAlt: "Cabos de rede conectados a um servidor",
  },
  {
    id: "visual-studio",
    title: "Visual Studio",
    family: "Desenvolvimento",
    text: "Ambiente de desenvolvimento para as equipes que criam e mantêm os sistemas da empresa, licenciado por desenvolvedor.",
    points: ["Por desenvolvedor", "Equipes de software"],
    icon: "code",
    image: "/produtos/visual-studio.jpg",
    imageAlt: "Tela de computador com código-fonte",
  },
  {
    id: "visio",
    title: "Visio",
    family: "Diagramas",
    text: "Fluxogramas, organogramas e diagramas de processos e de rede, licenciado para quem desenha.",
    points: ["Processos e fluxos", "Diagramas de rede"],
    icon: "diagram",
    image: "/produtos/visio.jpg",
    imageAlt: "Duas pessoas desenhando um diagrama em um quadro branco",
  },
  {
    id: "project",
    title: "Project",
    family: "Gestão de projetos",
    text: "Planejamento de cronogramas, recursos e prazos para quem coordena projetos na empresa.",
    points: ["Cronogramas", "Recursos e prazos"],
    icon: "gantt",
    image: "/produtos/project.jpg",
    imageAlt: "Notas adesivas organizadas em um quadro de planejamento",
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
    title: "Contratos difíceis de entender",
    text: "Termos, métricas e regras de uso que mudam de programa para programa e raramente são explicados em linguagem de negócio.",
  },
  {
    title: "Licenças incompatíveis com a operação",
    text: "Versões contratadas que não conversam com o número de usuários, de dispositivos ou com o modo como a empresa realmente trabalha.",
  },
  {
    title: "Gastos desnecessários",
    text: "Licenças duplicadas, recursos pagos e nunca usados, upgrades feitos por insegurança e não por necessidade.",
  },
  {
    title: "Falta de previsibilidade",
    text: "Renovações que chegam sem aviso e orçamentos de tecnologia que mudam de patamar sem explicação clara.",
  },
  {
    title: "Riscos de compliance",
    text: "Ambientes com licenciamento incorreto ou mal documentado, expostos a questionamentos em auditoria.",
  },
  {
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
    text: "Windows Pro, Office, Windows Server, CALs, SQL Server, Visual Studio, Visio e Project dentro de um mesmo raciocínio de licenciamento.",
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
  { label: "Filiais", value: "Rio de Janeiro e São Paulo" },
  { label: "Modelo", value: "Atendimento consultivo e continuado" },
] as const;
