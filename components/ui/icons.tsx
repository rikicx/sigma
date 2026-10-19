import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "square" as const,
  "aria-hidden": true,
};

/** Ícones abstratos: geometria técnica, sem metáfora óbvia de "TI". */
export const icons = {
  gauge: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M5 23a11 11 0 1 1 22 0" />
      <path d="M16 23L23 13" />
      <circle cx="16" cy="23" r="1.8" fill="currentColor" stroke="none" />
      <path d="M8 18.5l1.6.9M24 18.5l-1.6.9M16 8v2" strokeOpacity="0.5" />
    </svg>
  ),
  brackets: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M11 7L4 16l7 9" />
      <path d="M21 7l7 9-7 9" />
      <path d="M13 20h6" />
      <path d="M13 14h6" strokeOpacity="0.5" />
    </svg>
  ),
  windows: (props: IconProps) => (
    <svg {...base} {...props}>
      <rect x="4" y="5" width="11" height="10" />
      <rect x="17" y="5" width="11" height="10" strokeOpacity="0.45" />
      <rect x="4" y="17" width="11" height="10" strokeOpacity="0.45" />
      <rect x="17" y="17" width="11" height="10" />
    </svg>
  ),
  shield: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M16 3l11 4v9c0 6.4-4.6 10.4-11 13C9.6 26.4 5 22.4 5 16V7l11-4Z" />
      <path d="M11 16l3.5 3.5L22 12" strokeOpacity="0.55" />
    </svg>
  ),
  advisory: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M4 26V6M4 26h24" strokeOpacity="0.35" />
      <path d="M8 21l6-7 5 4 8-11" />
      <circle cx="14" cy="14" r="1.8" fill="currentColor" stroke="none" />
      <circle cx="19" cy="18" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  office: (props: IconProps) => (
    <svg {...base} {...props}>
      <rect x="4" y="5" width="11" height="9" />
      <rect x="17" y="5" width="11" height="9" strokeOpacity="0.4" />
      <rect x="4" y="16" width="11" height="9" strokeOpacity="0.4" />
      <rect x="17" y="16" width="11" height="9" />
      <path d="M15 9.5h2M9.5 14v2M22.5 14v2" strokeOpacity="0.4" />
    </svg>
  ),
  device: (props: IconProps) => (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="19" height="14" />
      <path d="M3 24h26" />
      <rect x="24" y="12" width="6" height="9" strokeOpacity="0.45" />
      <path d="M8 11h9M8 15h6" strokeOpacity="0.45" />
    </svg>
  ),
  server: (props: IconProps) => (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="24" height="7" />
      <rect x="4" y="13" width="24" height="7" />
      <rect x="4" y="22" width="24" height="7" strokeOpacity="0.4" />
      <path d="M8 7.5h1M8 16.5h1M8 25.5h1" />
      <path d="M22 7.5h3M22 16.5h3" strokeOpacity="0.45" />
    </svg>
  ),
  key: (props: IconProps) => (
    <svg {...base} {...props}>
      <circle cx="10" cy="16" r="5.5" />
      <path d="M15.5 16H28M23 16v4.5M27 16v3" />
      <circle cx="10" cy="16" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  database: (props: IconProps) => (
    <svg {...base} {...props}>
      <ellipse cx="16" cy="7.5" rx="10" ry="3.5" />
      <path d="M6 7.5v17c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5v-17" />
      <path d="M6 13.2c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5M6 18.9c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5" strokeOpacity="0.45" />
    </svg>
  ),
  code: (props: IconProps) => (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="26" height="22" strokeOpacity="0.4" />
      <path d="M3 10h26" strokeOpacity="0.4" />
      <path d="M12 15l-4 3.5 4 3.5M20 15l4 3.5-4 3.5M17.5 13.5l-3 10" />
    </svg>
  ),
  diagram: (props: IconProps) => (
    <svg {...base} {...props}>
      <rect x="11" y="3" width="10" height="7" />
      <rect x="3" y="22" width="10" height="7" />
      <rect x="19" y="22" width="10" height="7" />
      <path d="M16 10v6M8 22v-6h16v6" strokeOpacity="0.5" />
    </svg>
  ),
  gantt: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M4 4v24h24" strokeOpacity="0.35" />
      <rect x="8" y="7" width="10" height="4" />
      <rect x="13" y="14" width="12" height="4" />
      <rect x="10" y="21" width="8" height="4" strokeOpacity="0.5" />
    </svg>
  ),
  support: (props: IconProps) => (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="11" strokeOpacity="0.35" />
      <circle cx="16" cy="16" r="4.5" />
      <path d="M16 5v6.5M16 20.5V27M5 16h6.5M20.5 16H27" />
    </svg>
  ),
} as const;

export function CheckMark(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 8.4l3.4 3.4L13 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function CrossMark(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.06.8.82-2.99-.19-.31a8.04 8.04 0 0 1-1.24-4.29c0-4.46 3.63-8.08 8.09-8.08Zm-2.4 4.1c-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.2.93 2.36c.12.15 1.6 2.45 3.89 3.43.54.24.97.38 1.3.48.55.17 1.05.15 1.44.09.44-.07 1.35-.55 1.54-1.09.19-.54.19-1 .14-1.1-.06-.09-.21-.15-.43-.26-.23-.12-1.35-.67-1.55-.74-.21-.08-.36-.12-.51.11-.15.22-.59.74-.72.89-.13.15-.27.17-.49.06-.23-.12-.96-.36-1.83-1.13-.68-.6-1.13-1.35-1.27-1.57-.13-.23-.01-.35.1-.46.1-.1.23-.27.34-.4.12-.14.15-.24.23-.39.07-.15.04-.28-.02-.4-.06-.11-.51-1.23-.7-1.69-.18-.44-.37-.38-.51-.39h-.44Z" />
    </svg>
  );
}
