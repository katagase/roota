import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { IconCheck } from "../icons";

const GENERAL = [
  "インターネット上の膨大な一般知識",
  "誰でも調べられる公開情報",
  "御社の社内規程・契約書・FAQは知らない",
];
const ROOTA = [
  "社内規程・マニュアル・手順書",
  "FAQ・議事録・過去案件資料",
  "契約関連文書（閉域で安全に）",
  "対話形式で、必要な時に引き出せる",
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What is ROOTA"
          title={
            <>
              <span className="text-navy-900/40">一般的なAIは、知っている。</span>
              <br />
              ROOTAは、<span className="text-green-600">覚えている。</span>
            </>
          }
          description="一般的なAIは世の中の知識に答えます。ROOTAが答えるのは、御社の知識。Googleが公開するオープンAIモデル「Gemma」を、情報を外に出さず社内で動かします。"
        />

        <Reveal className="mt-7 flex justify-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-green-600/20 bg-green-500/8 px-6 py-2.5 text-center text-sm text-navy-900/70">
            <span>
              <span className="font-black tracking-wide text-green-600">ROOT</span>
              <span className="text-navy-900/50">（根）</span>
              <span className="px-1.5 font-bold text-navy-900/40">×</span>
              <span className="font-black tracking-wide text-navy-900">AI</span>
            </span>
            <span className="text-navy-900/55">
              ── 組織の知識に根を張り、必要なときに引き出す。
            </span>
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-navy-900/8 bg-mist p-8">
              <h3 className="text-lg font-bold text-navy-900/70">一般的なAIが持つ知識</h3>
              <ul className="mt-6 space-y-4">
                {GENERAL.map((g, i) => (
                  <li key={g} className="flex gap-3 text-sm text-navy-900/65">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-900/30" />
                    <span className={i === GENERAL.length - 1 ? "text-red-400" : ""}>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-2xl bg-green-600 p-8 shadow-xl shadow-green-900/20">
              <h3 className="text-lg font-bold text-white">ROOTAが蓄積する知識</h3>
              <ul className="mt-6 space-y-4">
                {ROOTA.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-white/95">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-8 rounded-2xl border border-green-600/20 bg-green-500/8 p-8 text-center">
            <p className="text-xl font-black text-navy-900 sm:text-2xl">
              つまり ROOTA は、<span className="text-green-600">閉域で動かせる Google のオープンモデル「Gemma」</span>を採用。
            </p>
            <p className="mt-3 text-sm text-navy-900/65 sm:text-base">
              情報を外に出さないという御社の要件を満たしたまま、Googleが公開する技術を活用できます。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
