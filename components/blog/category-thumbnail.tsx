import type { SVGProps } from "react";

/**
 * One icon + treatment per blog category, replacing the empty gradient
 * placeholder on the blog index grid. Pure CSS/SVG, no image assets -
 * scales to any number of posts without per-post design work.
 *
 * Add a new category by adding one entry to `CATEGORY_STYLES` below;
 * unknown categories fall back to the neutral "Default" treatment
 * instead of rendering blank.
 */

type IconProps = SVGProps<SVGSVGElement>;

function ProductIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </svg>
  );
}

function PricingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M9 9h3.5a1.8 1.8 0 0 1 0 3.6H10a1.8 1.8 0 0 0 0 3.6H15" />
    </svg>
  );
}

function ComplianceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ComparisonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M8 4v13a2 2 0 0 0 2 2h6" />
      <path d="M5 7l3-3 3 3" />
      <path d="M16 20V7a2 2 0 0 0-2-2H8" />
      <path d="M19 17l-3 3-3-3" />
    </svg>
  );
}

function TrustSafetyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="6" y="10" width="12" height="10" rx="1.5" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

function DefaultIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <path d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  );
}

type CategoryStyle = {
  Icon: (props: IconProps) => React.ReactElement;
  /** Tailwind classes for the card background */
  bg: string;
  /** Tailwind classes for the icon color */
  icon: string;
};

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  Product: { Icon: ProductIcon, bg: "bg-navy", icon: "text-gold" },
  Pricing: { Icon: PricingIcon, bg: "bg-gold", icon: "text-navy" },
  Compliance: {
    Icon: ComplianceIcon,
    bg: "bg-surface border border-navy/25",
    icon: "text-navy",
  },
  Comparison: {
    Icon: ComparisonIcon,
    bg: "bg-surface border border-gold/50",
    icon: "text-gold-dark",
  },
  "Trust & Safety": { Icon: TrustSafetyIcon, bg: "bg-navy", icon: "text-white" },
};

const DEFAULT_STYLE: CategoryStyle = {
  Icon: DefaultIcon,
  bg: "bg-gradient-to-br from-navy/10 to-slate/20",
  icon: "text-navy/40",
};

export function CategoryThumbnail({ category }: { category: string }) {
  const style = CATEGORY_STYLES[category] ?? DEFAULT_STYLE;
  const { Icon } = style;

  return (
    <div
      className={`flex aspect-video items-center justify-center overflow-hidden ${style.bg}`}
      aria-hidden="true"
    >
      <Icon className={`h-9 w-9 ${style.icon}`} />
    </div>
  );
}
