import { ClipboardCheck, FileSearch, Headset } from "lucide-react";
import { Reveal } from "../Reveal";
import { IconCheck } from "../icons";

const POINTS = [
  "作り方はレクチャー。テンプレートから、ご自身で何個でも作成できます（無料）",
  "専用エージェントの個別開発：最初の1つは無料／2つ目以降は1個 30,000円（税別）",
  "業務ヒアリングから運用まで、伴走して改善",
];

const USE_CASES = [
  {
    icon: ClipboardCheck,
    title: "ISMS・セキュリティチェック回答",
    body: "自社のISMS対応状況とSaaS仕様書を学習。顧客から届くチェックシートを入れるだけで回答ドラフトを作成。「営業が受けて、エンジニアが書く」をそのまま自動化します。",
    effect: "エンジニアの回答工数を削減",
  },
  {
    icon: FileSearch,
    title: "契約レビューの前さばき",
    body: "自社の過去契約・社内規程・チェック観点を学習し、顧問弁護士のチェック前に確認ポイントを整理。法的な判断はせず、弁護士レビューの“前さばき”として使います。",
    effect: "弁護士レビュー前の論点整理を効率化",
  },
  {
    icon: Headset,
    title: "コールセンターのレポート自動化",
    body: "PBXの通話明細を社内で取り込み、クライアント別のKPIレポートを自動作成。毎月の集計・作成業務を自動化します。",
    effect: "SVのレポート作成工数を削減",
  },
];

export function Agent() {
  return (
    <section id="agent" className="bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* copy */}
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">AI Agent</p>
            <h2 className="mt-3 text-[1.9rem] font-black leading-[1.3] tracking-[0.01em] text-navy-900 sm:text-4xl">
              あなたの業務に、
              <br className="hidden sm:block" />
              伴走する<span className="text-green-600">AIエージェント</span>。
            </h2>
            <p className="mt-6 text-base leading-loose text-navy-900/65">
              メール下書き・議事録整形・稟議ドラフト・商談メモの整理まで、よく使う業務はテンプレートからすぐに。さらに、御社の業務に合わせた専用エージェントを、私たちが個別に開発します。
            </p>

            <div className="mt-7 rounded-2xl border border-green-600/20 bg-green-500/8 p-6">
              <p className="text-lg font-black text-navy-900">
                最初の1つは、<span className="text-green-600">無料。</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
                御社の業務に合わせた専用エージェントを、まず1つ私たちが個別開発。運用に伴走しながら現場で効くまで育てます。2つ目以降は1個 30,000円（税別）でご依頼いただけます。
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-navy-900/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* product screenshot */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/20 ring-1 ring-navy-900/10">
              <div className="flex items-center gap-1.5 bg-navy-900 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="ml-3 text-[11px] text-white/40">ROOTA — AIエージェント</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/agent-screen.png"
                alt="ROOTA のAIエージェント：テンプレートから業務別エージェントを作成する画面"
                width={1600}
                height={827}
                className="block w-full"
              />
            </div>
            <p className="mt-3 text-center text-xs text-navy-900/40">
              ※ 画面はイメージです。テンプレートは順次追加されます。
            </p>
          </Reveal>
        </div>

        {/* use cases — 個別開発の活用例 */}
        <div className="mt-20 sm:mt-24">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                Use cases
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-[0.01em] text-navy-900 sm:text-3xl">
                個別開発の、<span className="text-green-600">活用例。</span>
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-navy-900/60">
                御社の業務に合わせて、ここまで踏み込んだエージェントも開発できます。
                <br className="hidden sm:block" />
                実際に効果が出ている活用例の一部です。
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {USE_CASES.map((u, i) => (
              <Reveal key={u.title} delay={i * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border-[0.5px] border-roota-border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/5">
                  <div className="h-1 bg-roota-green" />
                  <div className="flex h-full flex-col p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-roota-green-tint">
                      <u.icon className="h-6 w-6 text-roota-green-strong" strokeWidth={1.75} />
                    </div>
                    <h4 className="mt-3.5 text-[15px] font-semibold text-roota-navy">{u.title}</h4>
                    <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-roota-body">
                      {u.body}
                    </p>
                    <div className="mt-4 flex items-start gap-2 rounded-lg bg-roota-green-tint px-3 py-2.5">
                      <span className="shrink-0 rounded bg-roota-green px-1.5 py-0.5 text-[10px] font-bold text-white">
                        効果
                      </span>
                      <span className="text-[12px] font-semibold leading-snug text-roota-green-strong">
                        {u.effect}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-navy-900/40">
            ※ 活用例です。効果は業務内容・データの整備状況により異なります。
          </p>
        </div>
      </div>
    </section>
  );
}
