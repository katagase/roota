import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const STEPS = [
  {
    n: "1",
    bg: "bg-navy-700",
    label: "STEP 1",
    title: "無料お試し",
    body: "総務・管理部門で、規程・FAQを登録してPoC。実際の業務で効果を体感。",
  },
  {
    n: "2",
    bg: "bg-green-600",
    label: "STEP 2",
    title: "効果を評価",
    body: "問い合わせ削減・検索時間短縮・ナレッジ共有を数字で確認。",
  },
  {
    n: "3",
    bg: "bg-navy-900",
    label: "STEP 3",
    title: "本番運用・全社へ",
    body: "共有プランで本番開始。必要に応じて占有・自社設置へ拡張も可能。",
  },
];

export function Steps() {
  return (
    <section id="flow" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="導入ステップ"
          title="小さく試して、効果を確かめ、本番へ。"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 120} as="article">
              <div className="relative h-full rounded-2xl bg-mist p-8">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${step.bg} text-2xl font-black text-white`}
                  >
                    {step.n}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-green-600">{step.label}</p>
                    <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-navy-900/60">{step.body}</p>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl font-bold text-green-500 md:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
