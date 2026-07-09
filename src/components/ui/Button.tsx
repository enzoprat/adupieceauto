import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-racing/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-racing text-white shadow-[0_8px_24px_-8px_rgba(225,6,0,0.6)] hover:bg-racing-dark hover:shadow-glow",
  outline:
    "border border-white/15 text-white hover:border-racing hover:text-white hover:bg-white/[0.04]",
  ghost: "text-mute hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props;
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
