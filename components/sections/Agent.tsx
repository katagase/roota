import { Reveal } from "../Reveal";
import { IconCheck } from "../icons";

const POINTS = [
  "作り方はレクチャー。テンプレートから、ご自身で何個でも作成できます（無料）",
  "専用エージェントの個別開発：最初の1つは無料／2つ目以降は1個 30,000円（税別）",
  "業務ヒアリングから運用まで、伴走して改善",
];

export function Agent() {
  return (
    <section id="agent" className="bg-white py-24 sm:py-28">
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
      </div>
    </section>
  );
}
