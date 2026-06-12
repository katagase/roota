import { Reveal } from "../Reveal";
import { IconMic, IconClipboard, IconPen, IconDatabase, IconShield, IconCheck, IconSearch } from "../icons";

const FLOW = [
  { icon: IconMic, title: "会議音声", body: "録音ファイルをアップロード" },
  { icon: IconClipboard, title: "自動で文字起こし", body: "社内のAIが処理します" },
  { icon: IconPen, title: "議事録に整理", body: "要点・決定事項を自動で抽出" },
  { icon: IconDatabase, title: "ナレッジに蓄積", body: "あとから対話で検索可能" },
];

const POINTS = [
  { icon: IconShield, title: "機微情報も外に出さない", body: "人事・経営・契約の会議も、録音を外部に出さず社内で処理" },
  { icon: IconCheck, title: "誰がやっても同じ品質", body: "決まった型で出力。新人でもベテランと同じ議事録に" },
  { icon: IconSearch, title: "作って終わりにしない", body: "議事録はそのまま検索対象。「先週決まったことは?」に即答" },
];

export function Minutes() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-sm font-bold tracking-wider text-green-600">作る — 議事録自動作成</p>
            <span className="rounded-md bg-amber-600 px-3 py-1 text-xs font-bold text-white">
              開発予定
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-black tracking-[0.01em] text-navy-900 sm:text-4xl">
            会議の音声から、議事録を自動で。
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy-900/65">
            録音をアップロードすれば、要点と決定事項を整理した議事録を自動作成。そのまま社内ナレッジに蓄積されます。
          </p>
        </Reveal>

        {/* flow */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FLOW.map((step, i) => (
            <Reveal key={step.title} delay={i * 100} as="article">
              <div className="relative h-full rounded-2xl bg-mist p-7 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-white">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm text-navy-900/55">{step.body}</p>
                {i < FLOW.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl font-bold text-green-500 lg:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* points */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} as="article">
              <div className="flex h-full gap-4 rounded-2xl border border-green-600/15 bg-green-500/5 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">{p.title}</h4>
                  <p className="mt-2 text-sm text-navy-900/60">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-navy-900/40">
          ※ 本機能は開発中です。提供時期・仕様は変更になる場合があります。
        </p>
      </div>
    </section>
  );
}
