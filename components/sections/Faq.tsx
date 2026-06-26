"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const FAQS: { q: string; a: string }[] = [
  {
    q: "「完全クローズド」とは、どういう意味ですか？",
    a: "社内文書・会話・音声などの登録データを外部のAIサービスへ一切送信せず、御社の管理環境内（共有・占有は国内データセンター、自社設置は御社施設内）だけで処理することを指します。ユーザーの招待やパスワードの設定も管理者が行い、通知メールも含めて外部への送信はありません。",
  },
  {
    q: "入力したデータがAIの学習に使われることはありますか？",
    a: "ありません。登録データをAIモデルの再学習・学習データに利用することはありません。蓄積するのは「御社の知識」であって、AIが勝手に学ぶことはありません。",
  },
  {
    q: "ChatGPT や Azure OpenAI と何が違いますか？",
    a: "クラウド前提のAIは「学習に使わない」と謳っていても、利用のたびにデータを外部のAI基盤へ“預ける”必要があります。ROOTAはそもそもデータを外部に渡さず、御社の環境内で完結します。海外のAIに自社の情報を渡したくない企業のためのAIです。",
  },
  {
    q: "どのAIモデルを使っていますか？",
    a: "文章生成・画像理解にGoogleが公開するオープンモデル「Gemma」、音声認識・文字起こしに「Whisper」、検索に日本語特化の「Ruri」を採用しています。いずれも当社が管理する環境内で動作します。",
  },
  {
    q: "料金はどのくらいですか？",
    a: "共有タイプは初期20万円〜・月額5万円〜、占有タイプは初期250万円〜・月額10万円、自社設置タイプは初期500万円〜・保守5万円/月です。いずれも税別・最低価格で、GPU/LLMサーバーの市況により変動します。正確な金額はお見積りでご案内します。",
  },
  {
    q: "オンプレミス（自社設置）に対応していますか？",
    a: "対応しています。「自社設置タイプ」では御社の施設内にサーバーを設置し、データもモデルもすべて御社側で管理できます。全社・大規模での利用にも適しています。",
  },
  {
    q: "専用のAIエージェントは作れますか？",
    a: "作れます。メール下書き・議事録整形・稟議ドラフト・問い合わせ対応などのテンプレートからすぐ作成できるほか、御社の業務に合わせた専用エージェントを無料で個別開発し、運用まで伴走します。",
  },
  {
    q: "無料で試せますか？導入までどのくらいかかりますか？",
    a: "無料のお試し（伴走支援つき）をご用意しています。総務・管理部門などで規程・FAQを登録して効果を体感いただき、評価のうえ本番運用へ。まずは小さく試して、効果を確かめてから拡張できます。",
  },
  {
    q: "既存の社内文書（規程・マニュアル）はそのまま使えますか？",
    a: "はい。社内規程・マニュアル・手順書・FAQ・議事録・契約関連文書などをそのまま登録でき、回答は参照元を出典つきで提示します。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-900/8 bg-mist">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-bold text-navy-900">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-white transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-loose text-navy-900/70">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="よくある質問" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f) => (
            <Reveal key={f.q}>
              <FaqItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
