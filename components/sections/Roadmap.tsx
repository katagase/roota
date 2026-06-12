import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { IconMic, IconRobot, IconPhone } from "../icons";

const ITEMS = [
  {
    icon: IconMic,
    iconBg: "bg-navy-900",
    title: "議事録自動作成",
    body: "会議の録音から、要点・決定事項を整理した議事録を自動で作成。",
  },
  {
    icon: IconRobot,
    iconBg: "bg-green-600",
    title: "AIエージェント",
    body: "定型業務を任せられる業務特化アシスタントを、御社の環境内で作成。",
  },
  {
    icon: IconPhone,
    iconBg: "bg-navy-700",
    title: "専用スマホアプリ",
    body: "外出先・移動中でも、スマホから手軽に。（現在もモバイル対応のWebで利用可能）",
  },
];

export function Roadmap() {
  return (
    <section className="bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="今後の展開"
          title="ROOTAは、これからも進化します。"
          description="ご導入後も機能が広がります。以下は開発中・今後の提供予定です。"
        />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} as="article">
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy-900/5">
                <div className="flex items-start justify-between">
                  <span className="rounded-md bg-amber-600 px-3 py-1 text-xs font-bold text-white">
                    開発予定
                  </span>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.iconBg} text-white`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/60">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-navy-900/40">
          ※ 開発中の機能です。提供時期・仕様は変更になる場合があります。
        </p>
      </div>
    </section>
  );
}
