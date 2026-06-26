import { Search, Pencil, ShieldCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const CAPS = [
  {
    n: "1",
    icon: Search,
    tag: "探す",
    body: "散らばった規程・マニュアルを、聞くだけで即検索。出典付きで根拠まで確認できます。",
  },
  {
    n: "2",
    icon: Pencil,
    tag: "作る",
    body: "会議の議事録から月次報告書のたたき台まで。定型業務のアウトプットを自動で作成します。",
  },
  {
    n: "3",
    icon: ShieldCheck,
    tag: "守る",
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
          description="問いかけるだけ。答えるのは、貴社の知識。すべて社内で完結します。"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CAPS.map((cap, i) => (
            <Reveal key={cap.tag} delay={i * 110}>
              <article className="group h-full overflow-hidden rounded-xl border-[0.5px] border-roota-border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/5">
                <div className="h-1 bg-roota-green" />
                <div className="p-7">
                  <span className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-roota-navy-tint leading-none">
                    <span className="text-[8px] font-bold tracking-wider text-roota-navy/60">
                      POINT
                    </span>
                    <span className="text-base font-black text-roota-navy">{cap.n}</span>
                  </span>
                  <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-roota-green-tint">
                    <cap.icon className="h-6 w-6 text-roota-green-strong" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-2xl font-black text-roota-navy">{cap.tag}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-roota-body">{cap.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
