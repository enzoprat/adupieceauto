import type { ProductIcon } from "@/data/productCategories";

type IconProps = {
  name: ProductIcon | UtilityIcon;
  className?: string;
};

export type UtilityIcon =
  | "bolt"
  | "tag"
  | "pin"
  | "garage"
  | "calendar"
  | "shield"
  | "phone"
  | "mail"
  | "clock"
  | "arrow"
  | "check";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<string, React.ReactNode> = {
  // Produits
  brake: (
    <>
      <circle cx="12" cy="12" r="8" {...stroke} />
      <circle cx="12" cy="12" r="3" {...stroke} />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" {...stroke} />
    </>
  ),
  filter: (
    <>
      <path d="M4 5h16l-6 7v6l-4 2v-8L4 5z" {...stroke} />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="8" width="16" height="9" rx="1.5" {...stroke} />
      <path d="M19 11h2v3h-2M7 6v2M13 6v2" {...stroke} />
      <path d="M8 12h3M9.5 10.5v3" {...stroke} />
    </>
  ),
  light: (
    <>
      <path d="M4 9a6 6 0 0 1 6-6h2a6 6 0 0 1 0 12h-2a6 6 0 0 1-6-6z" {...stroke} />
      <path d="M16 7l4-2M16 11h4M16 15l4 2" {...stroke} />
    </>
  ),
  oil: (
    <>
      <path d="M5 14a5 5 0 0 0 10 0c0-3-5-8-5-8s-5 5-5 8z" {...stroke} />
      <path d="M15 9h3l2 2v4" {...stroke} />
    </>
  ),
  consumable: (
    <>
      <path d="M8 3h8v4l-1 1v13H9V8L8 7V3z" {...stroke} />
      <path d="M9 11h6" {...stroke} />
    </>
  ),
  wiper: (
    <>
      <path d="M4 18h16" {...stroke} />
      <path d="M7 18l5-12 1 1-3 11" {...stroke} />
    </>
  ),
  clutch: (
    <>
      <circle cx="12" cy="12" r="8" {...stroke} />
      <circle cx="12" cy="12" r="2.5" {...stroke} />
      <path d="M12 4l1.5 4M12 20l-1.5-4M4 12l4 1.5M20 12l-4-1.5" {...stroke} />
    </>
  ),
  suspension: (
    <>
      <path d="M9 3h6M9 21h6" {...stroke} />
      <path d="M10 4c4 2-4 4 0 6s-4 4 0 6 -4 4 0 6" {...stroke} />
    </>
  ),
  timing: (
    <>
      <circle cx="8" cy="8" r="3.5" {...stroke} />
      <circle cx="16" cy="16" r="3.5" {...stroke} />
      <path d="M10.5 10.5l3 3M11 6h7v6M13 18H6v-6" {...stroke} />
    </>
  ),
  tire: (
    <>
      <circle cx="12" cy="12" r="8" {...stroke} />
      <circle cx="12" cy="12" r="3.5" {...stroke} />
      <path d="M12 4.5v4M12 15.5v4M4.5 12h4M15.5 12h4" {...stroke} />
    </>
  ),
  utility: (
    <>
      <path d="M3 7h11v8H3zM14 9h3l3 3v3h-6z" {...stroke} />
      <circle cx="7" cy="17" r="1.6" {...stroke} />
      <circle cx="17" cy="17" r="1.6" {...stroke} />
    </>
  ),
  care: (
    <>
      <path d="M7 8h6l4 4v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8z" {...stroke} />
      <path d="M9 8V5h3v3M10 12h4M10 15h4" {...stroke} />
    </>
  ),
  custom: (
    <>
      <path
        d="M14.5 5.5a3.5 3.5 0 0 0-4.7 4.4l-5 5L6 17l5-5a3.5 3.5 0 0 0 4.4-4.7L13 9.5 11.5 8l2-2z"
        {...stroke}
      />
    </>
  ),
  // Utilitaires
  bolt: <path d="M13 3L5 13h5l-1 8 8-11h-5l1-7z" {...stroke} />,
  tag: (
    <>
      <path d="M4 12V5h7l9 9-7 7-9-9z" {...stroke} />
      <circle cx="8" cy="8.5" r="1.3" {...stroke} />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" {...stroke} />
      <circle cx="12" cy="10" r="2.5" {...stroke} />
    </>
  ),
  garage: (
    <>
      <path d="M3 10l9-5 9 5v10H3z" {...stroke} />
      <path d="M7 20v-6h10v6M7 16h10" {...stroke} />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="1.5" {...stroke} />
      <path d="M4 9h16M8 3v4M16 3v4" {...stroke} />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" {...stroke} />
      <path d="M9 12l2 2 4-4" {...stroke} />
    </>
  ),
  phone: (
    <path
      d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V18a2 2 0 0 1-2.2 2A15 15 0 0 1 3 6.2 2 2 0 0 1 5 4z"
      {...stroke}
    />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" {...stroke} />
      <path d="M4 7l8 6 8-6" {...stroke} />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" {...stroke} />
      <path d="M12 8v4l3 2" {...stroke} />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" {...stroke} />,
  check: <path d="M5 12l4 4 10-10" {...stroke} />,
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] ?? null}
    </svg>
  );
}
