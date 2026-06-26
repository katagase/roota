import type { LucideIcon } from "lucide-react";

type Variant = "problem" | "feature";

const styles: Record<Variant, { bar: string; tile: string; glyph: string }> = {
  problem: { bar: "bg-roota-navy", tile: "bg-roota-navy-tint", glyph: "text-roota-navy" },
  feature: { bar: "bg-roota-green", tile: "bg-roota-green-tint", glyph: "text-roota-green-strong" },
};

/**
 * Unified card for every icon section.
 * 色=意味：problem=ネイビー / feature=グリーン。アイコンは48pxティント地タイルに乗せる。
 * オレンジは「開発予定」バッジ専用。
 */
export function RootaCard({
  variant = "feature",
  icon: Icon,
  title,
  desc,
  badge,
}: {
  variant?: Variant;
  icon: LucideIcon;
  title: string;
  desc: string;
  badge?: string;
}) {
  const s = styles[variant];
  return (
    <article className="group h-full overflow-hidden rounded-xl border-[0.5px] border-roota-border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/5">
      <div className={`h-1 ${s.bar}`} />
      <div className="relative p-5">
        {badge && (
          <span className="absolute right-3.5 top-3.5 rounded-md bg-roota-warning px-2 py-0.5 text-[11px] font-semibold text-roota-warning-text">
            {badge}
          </span>
        )}
        <div className={`mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl ${s.tile}`}>
          <Icon className={`h-6 w-6 ${s.glyph}`} strokeWidth={1.75} />
        </div>
        <h3 className="mb-1.5 text-[15px] font-semibold text-roota-navy">{title}</h3>
        <p className="text-[13px] leading-relaxed text-roota-body">{desc}</p>
      </div>
    </article>
  );
}
