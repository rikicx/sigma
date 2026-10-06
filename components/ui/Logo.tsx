/**
 * ⚠️ TROCAR AQUI: LOGO DA SIGMA BRASIL
 *
 * Por enquanto a marca aparece apenas como assinatura tipográfica.
 * Para aplicar o logo definitivo:
 *   1. coloque o arquivo em `public/logo.svg` (versão escura) e, se houver
 *      versão para fundo escuro, `public/logo-branco.svg`;
 *   2. substitua o bloco marcado abaixo por algo como:
 *
 *      <img
 *        src={tone === "dark" ? "/logo-branco.svg" : "/logo.svg"}
 *        alt="Sigma Brasil"
 *        className="h-8 w-auto"
 *      />
 *
 *   3. se o logo já contiver o nome da empresa, remova o wordmark de texto.
 */
export function Logo({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* ↓ bloco a ser substituído pelo arquivo do logo ↓ */}
      <span className="flex flex-col leading-none">
        {/* assinatura provisória no espírito da arte institucional:
            "Sigma" em azul-marinho, "Brasil" em vermelho */}
        <span className="text-[16px] font-semibold tracking-[-0.025em]">
          <span className={tone === "dark" ? "text-white" : "text-accent"}>Sigma</span>{" "}
          <span className={tone === "dark" ? "text-brand-red-bright" : "text-brand-red"}>
            Brasil
          </span>
        </span>
        <span
          className={`mt-1 font-mono text-[9px] uppercase tracking-[0.22em] ${
            tone === "dark" ? "text-white/45" : "text-mute"
          }`}
        >
          Tecnologia corporativa
        </span>
      </span>
      {/* ↑ bloco a ser substituído pelo arquivo do logo ↑ */}
    </span>
  );
}
