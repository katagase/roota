import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { IconUsers, IconShield, IconServer, IconCheck } from "../icons";

const PLANS = [
  {
    icon: IconUsers,
    name: "共有タイプ",
    recommended: true,
    initial: "20万円",
    price: "月額 5万円",
    sub: "～10名／追加 5,000円/名",
    features: ["初期費用をおさえて始められる", "構築・運用の手間は不要", "データは企業ごとに分離"],
  },
  {
    icon: IconShield,
    name: "占有タイプ",
    recommended: false,
    initial: "200万円",
    price: "月額 5万円",
    sub: "～10名／追加 5,000円/名",
    features: ["御社専用の環境", "データもモデルも他社と完全分離", "より高い分離性を求める方へ"],
  },
  {
    icon: IconServer,
    name: "自社設置タイプ",
    recommended: false,
    initial: "500万円",
    price: "保守 3万円/月",
    sub: "ユーザー数 無制限",
    features: ["御社の施設内に設置", "すべて自社で管理できる", "全社・大規模での利用向け"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="料金プラン"
          title={
            <>
              3つのプラン。中小企業には
              <span className="text-green-600">共有タイプ</span>がおすすめ。
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110} as="article">
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.recommended
                    ? "bg-green-500/8 text-navy-900 shadow-xl shadow-green-900/10 ring-2 ring-green-600 lg:-translate-y-2"
                    : "bg-white text-navy-900 shadow-sm ring-1 ring-navy-900/5 hover:shadow-xl"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-5 py-1.5 text-xs font-bold text-white shadow-lg">
                    おすすめ
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      plan.recommended ? "bg-green-600 text-white" : "bg-navy-900 text-white"
                    }`}
                  >
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black">{plan.name}</h3>
                </div>

                <div className="mt-6">
                  <p className="text-xs text-navy-900/50">
                    初期費用
                  </p>
                  <p className="text-3xl font-black">{plan.initial}</p>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-bold">{plan.price}</p>
                  <p className="text-xs text-navy-900/50">
                    {plan.sub}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3 border-t border-current/10 pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span className="text-navy-900/70">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                    plan.recommended
                      ? "bg-green-600 text-white hover:bg-green-500"
                      : "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  }`}
                >
                  このプランで相談する
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-green-600 px-10 py-3.5 text-sm font-bold text-green-600 transition-colors hover:bg-green-600 hover:text-white"
          >
            まずは無料お試しで相談する
          </a>
        </Reveal>
      </div>
    </section>
  );
}
