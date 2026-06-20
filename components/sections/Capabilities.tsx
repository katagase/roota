import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { IconBadge } from "../IconBadge";
import { IconSearch, IconPen, IconCheckBadge } from "../icons";

const CAPS = [
  {
    n: "1",
    icon: IconSearch,
    tag: "探す",
    variant: "blue" as const,
    body: "散らばった規程・マニュアルを、聞くだけで即検索。出典付きで根拠まで確認できます。",
  },
  {
    n: "2",
    icon: IconPen,
    tag: "作る",
    variant: "green" as const,
    body: "会議の議事録から月次報告書のたたき台まで。定型業務のアウトプットを自動で作成します。",
  },
  {
    n: "3",
    icon: IconCheckBadge,
    tag: "守る",
    variant: "navy" as const,
    body: "提出前に自社のルールでチェック。記入漏れやミスを、未然に防ぎます。",
  },
];

export function Capabilities() {
  return (
    <section id="features" className="bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What ROOTA can do"
          title={
            <>
              探す。<span className="text-green-600">作る。</span>守る。
            </>
          }
          description="Geminiのように問いかけるだけ。答えるのは、貴社の知識。すべて社内で完結します。"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CAPS.map((cap, i) => (
            <Reveal key={cap.tag} delay={i * 110} as="article">
              <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/5">
                <span className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-mist leading-none ring-1 ring-navy-900/8">
                  <span className="text-[8px] font-bold tracking-wider text-navy-900/50">POINT</span>
                  <span className="text-lg font-black text-navy-900">{cap.n}</span>
                </span>
                <IconBadge
                  icon={cap.icon}
                  variant={cap.variant}
                  className="mt-6 h-16 w-16"
                  iconClassName="h-8 w-8"
                />
                <h3 className="mt-5 text-2xl font-black text-navy-900">{cap.tag}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/65">{cap.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
