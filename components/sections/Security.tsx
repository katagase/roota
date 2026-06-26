import { Lock, Users, EyeOff } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { RootaCard } from "../RootaCard";

const PROMISES = [
  {
    icon: Lock,
    title: "① 外部送信ゼロ",
    body: "入力・回答・会話履歴・覚えさせた文書まで、あらゆるデータが社外に出ません。外部のAIサービスへ通信することは一切ありません。",
  },
  {
    icon: Users,
    title: "② 会社ごとに完全分離",
    body: "会話・ナレッジ・利用者情報を、会社・部門ごとにしっかり分離。他社の文書が回答に混ざることは、仕組み上ありません。",
  },
  {
    icon: EyeOff,
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
            <Reveal key={p.title} delay={i * 100}>
              <RootaCard icon={p.icon} title={p.title} desc={p.body} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <p className="mt-10 text-center text-base font-bold text-green-600">
            通知メールも含め、外部への送信はありません。すべて御社の環境内で完結します。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
