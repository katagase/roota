import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { IconCheck } from "../icons";

const CLOUD = [
  "「学習には使わない」は選べても…",
  "利用のたび、データを外部のAI基盤へ送る必要がある",
  "自社の管理が及ばない場所に、機密情報を預けることになる",
];

const ROOTA = [
  "データを外部に送らない。御社の環境・国内の閉域で完結",
  "情報を“預ける”工程そのものが無い",
  "海外製AIに情報を出したくない——その方針のまま、AIを使える",
];

export function Difference() {
  return (
    <section className="bg-green-500/8 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Data policy"
          title={
            <>
              「学習しない」より、
              <br className="sm:hidden" />
              <span className="text-green-600">「渡さない」。</span>
            </>
          }
          description="「お客様のデータは学習に使いません」——多くのクラウドAIはそう約束します。でも、情報を“外部のAIに預ける”ことに変わりはありません。ROOTAは、そもそも渡しません。"
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {/* クラウド前提のAI */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-navy-900">クラウド前提のAI</h3>
              <p className="mt-1 text-xs text-navy-900/45">
                ChatGPT・Gemini、企業向けの Azure OpenAI など
              </p>
              <ul className="mt-6 space-y-4">
                {CLOUD.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-navy-900/65">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold leading-none text-red-500">
                      ×
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* ROOTA */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-xl shadow-green-900/10 ring-2 ring-green-600">
              <h3 className="text-lg font-black text-green-700">ROOTA</h3>
              <p className="mt-1 text-xs text-navy-900/45">情報を外に出さない、社内ナレッジAI</p>
              <ul className="mt-6 space-y-4">
                {ROOTA.map((r) => (
                  <li key={r} className="flex gap-3 text-sm font-medium text-navy-900/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-bold leading-relaxed text-navy-900 sm:text-xl">
            論点は「学習されるか」ではなく、「そもそも渡すか、渡さないか」。
            <br className="hidden sm:block" />
            <span className="text-green-600">ROOTAは、渡さない側のAIです。</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
