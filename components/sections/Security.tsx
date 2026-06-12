import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { IconLock, IconUsers, IconEyeOff } from "../icons";

const PROMISES = [
  {
    icon: IconLock,
    iconBg: "bg-navy-900",
    title: "① 外部送信ゼロ",
    body: "入力・回答・会話履歴・覚えさせた文書まで、あらゆるデータが社外に出ません。外部のAIサービスへ通信することは一切ありません。",
  },
  {
    icon: IconUsers,
    iconBg: "bg-green-600",
    title: "② 会社ごとに完全分離",
    body: "会話・ナレッジ・利用者情報を、会社・部門ごとにしっかり分離。他社の文書が回答に混ざることは、仕組み上ありません。",
  },
  {
    icon: IconEyeOff,
    iconBg: "bg-navy-700",
    title: "③ 会話本文は誰も覗かない",
    body: "管理者にも運営者にも、会話の中身を見る画面はありません。把握できるのは利用回数や利用量などの記録だけです。",
  },
];

export function Security() {
  return (
    <section id="security" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Security & privacy"
          title={
            <>
              ROOTAの、<span className="text-green-600">3つの約束。</span>
            </>
          }
          description="完全クローズド環境・出典つきの回答・社内ナレッジの蓄積。情報を守りながら、安心してAIを使えます。"
        />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} as="article">
              <div className="h-full rounded-2xl border border-navy-900/8 bg-mist p-8">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full ${p.iconBg} text-white`}>
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/60">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <p className="mt-10 text-center text-base font-bold text-green-600">
            ご希望に応じて、御社のサーバー内だけで運用することも可能。すべて社内で完結します。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
