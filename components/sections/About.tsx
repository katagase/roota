import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { IconCheck } from "../icons";

const KNOWLEDGE = [
  { title: "社内規程・マニュアル・手順書", desc: "「どこに書いてある?」を、その場で。" },
  { title: "FAQ・議事録・過去案件資料", desc: "現場とベテランの知見を蓄積。" },
  { title: "契約関連文書", desc: "閉域で、安全に取り込み。" },
  { title: "対話で、必要なときに引き出せる", desc: "覚えさせて、あとは聞くだけ。" },
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
          description="一般的なAIは世の中の知識に答えます。ROOTAが答えるのは、御社の知識。規程・マニュアル・過去案件まで覚えさせて、必要なときに引き出せます。"
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

        {/* ROOTAが覚える御社の知識（ポジティブに提示。比較表は差別化セクションに集約） */}
        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-green-600/15 bg-mist p-7 sm:p-9">
            <p className="text-center text-sm font-bold tracking-wide text-green-700">
              ROOTAが“覚える”、御社の知識
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {KNOWLEDGE.map((k) => (
                <div
                  key={k.title}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-navy-900/5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-900">{k.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-navy-900/55">{k.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 rounded-2xl border border-green-600/20 bg-green-500/8 p-8 text-center">
            <p className="text-xl font-black text-navy-900 sm:text-2xl">
              つまり ROOTA は、
              <span className="text-green-600">閉域で動かせる Google のオープンモデル「Gemma」</span>
              を採用。
            </p>
            <p className="mt-3 text-sm text-navy-900/65 sm:text-base">
              情報を外に出さないまま、Googleが公開する技術を活用できます。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
