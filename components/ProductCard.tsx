import { icons, WhatsAppIcon } from "./ui/icons";
import { whatsappLink, type Product } from "@/lib/site";

/**
 * Card de produto com peça visual no topo.
 *
 * Não usamos caixa nem logo oficial dos produtos (marca de terceiros e sem
 * arquivo autorizado): a peça é um painel no azul da marca com o ícone do
 * produto em escala grande, o que dá a cada item uma "capa" própria sem sair
 * da identidade.
 *
 * O botão de orçamento abre o WhatsApp com o nome do produto já na mensagem.
 * `data-cta`/`data-produto` ficam prontos para o evento de conversão no GA4.
 */
export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const Icon = icons[product.icon];
  const href = whatsappLink(
    `Olá, gostaria de um orçamento de ${product.title} com a Sigma Brasil.`,
  );

  return (
    <article
      id={compact ? undefined : product.id}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-lg border border-mist-line bg-white transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-30px_rgba(22,48,110,0.45)]"
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-accent via-accent to-accent-deep ${
          compact ? "h-24 sm:h-28" : "h-36"
        }`}
      >
        <div
          aria-hidden="true"
          className="grid-technical-dark absolute inset-0 opacity-60 [background-size:24px_24px]"
        />
        <Icon
          aria-hidden="true"
          className={`absolute text-white/[0.09] transition-transform duration-700 group-hover:scale-110 ${
            compact
              ? "-bottom-6 -right-4 h-32 w-32"
              : "-bottom-8 -right-6 h-44 w-44"
          }`}
        />
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-[3px] w-10 bg-brand-red-bright transition-all duration-500 group-hover:w-full"
        />
        <span className="absolute left-4 right-4 top-4 truncate text-[10px] sm:left-5 sm:text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/75">
          {product.family}
        </span>
        <span className="absolute bottom-4 left-4 flex sm:left-5 h-11 w-11 items-center justify-center rounded-md border border-white/25 bg-white/10 text-white backdrop-blur-sm">
          <Icon className="h-6 w-6" />
        </span>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-4 sm:p-5" : "p-6 md:p-7"}`}>
        <h3
          className={`font-medium leading-snug tracking-[-0.022em] text-ink ${
            compact ? "text-[16px] sm:text-[18px]" : "text-[20px]"
          }`}
        >
          {product.title}
        </h3>

        {compact ? null : (
          <>
            <p className="mt-3 text-[14.5px] leading-relaxed text-graphite">
              {product.text}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {product.points.map((point) => (
                <li
                  key={point}
                  className="rounded-md bg-mist px-2.5 py-1 text-[12px] font-medium text-accent"
                >
                  {point}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className={`mt-auto ${compact ? "pt-5" : "pt-7"}`}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-orcamento"
            data-produto={product.id}
            aria-label={`Solicitar orçamento de ${product.title} pelo WhatsApp`}
            className={`flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
              compact
                ? "border border-accent/25 text-accent hover:border-accent hover:bg-accent hover:text-white"
                : "bg-accent text-white hover:bg-brand-red"
            }`}
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            {compact ? (
              <>
                <span className="sm:hidden">Orçamento</span>
                <span className="hidden sm:inline">Solicitar orçamento</span>
              </>
            ) : (
              "Solicitar orçamento"
            )}
          </a>
        </div>
      </div>
    </article>
  );
}
