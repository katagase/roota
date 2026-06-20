import type { SVGProps } from "react";

type IconCmp = (p: SVGProps<SVGSVGElement>) => React.ReactElement;
export type IconVariant = "green" | "teal" | "navy" | "blue" | "slate" | "amber";

const GRAD: Record<IconVariant, string> = {
  green: "from-green-400 to-green-600 shadow-green-900/25",
  teal: "from-teal-400 to-teal-600 shadow-teal-900/25",
  navy: "from-navy-600 to-navy-900 shadow-navy-900/30",
  blue: "from-sky-400 to-blue-600 shadow-blue-900/25",
  slate: "from-slate-400 to-slate-600 shadow-slate-900/25",
  amber: "from-amber-400 to-amber-600 shadow-amber-900/25",
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
  variant?: IconVariant;
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
