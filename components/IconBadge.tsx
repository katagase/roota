import type { SVGProps } from "react";

type IconCmp = (p: SVGProps<SVGSVGElement>) => React.ReactElement;
type Variant = "navy" | "green";

const GRAD: Record<Variant, string> = {
  navy: "from-navy-600 to-navy-900 shadow-navy-900/30",
  green: "from-green-400 to-green-600 shadow-green-900/25",
};

/**
 * Gradient icon "chip" — gives the line icons more visual weight
 * (gradient fill, soft colored shadow, glossy inset edge, bolder stroke).
 */
export function IconBadge({
  icon: Icon,
  variant = "navy",
  className = "h-14 w-14",
  iconClassName = "h-7 w-7",
}: {
  icon: IconCmp;
  variant?: Variant;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ring-1 ring-inset ring-white/20 ${GRAD[variant]} ${className}`}
    >
      {/* top highlight for a subtle glossy look */}
      <span className="pointer-events-none absolute inset-x-1.5 top-1 h-1/3 rounded-full bg-white/15 blur-[6px]" />
      <Icon className={`relative ${iconClassName}`} strokeWidth={2} />
    </span>
  );
}
