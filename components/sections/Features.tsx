import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import {
  IconSearch,
  IconBrain,
  IconDatabase,
  IconCheckBadge,
  IconPen,
  IconUsers,
  IconKey,
  IconClipboard,
  IconLock,
  IconMic,
  IconRobot,
  IconPhone,
} from "../icons";

type Feature = {
  icon: typeof IconSearch;
  bg: string;
  title: string;
  body: string;
  soon?: boolean;
};

const FEATURES: Feature[] = [
  { icon: IconSearch, bg: "bg-navy-900", title: "ナレッジ検索（出典つき）", body: "規程・マニュアル・FAQを、聞くだけで出典つきで回答。" },
  { icon: IconBrain, bg: "bg-green-600", title: "対話で質問", body: "知りたいことを聞くだけ。社内の知識から答えます。" },
  { icon: IconDatabase, bg: "bg-navy-900", title: "文書の登録・管理", body: "規程・議事録・契約文書などをまとめて管理。" },
  { icon: IconCheckBadge, bg: "bg-green-600", title: "書類・メールのチェック", body: "提出前に自社ルールで点検。記入漏れ・ミスを防止。" },
  { icon: IconPen, bg: "bg-navy-900", title: "たたき台の自動作成", body: "報告書・メールの下書きを自動で作成。" },
  { icon: IconUsers, bg: "bg-green-600", title: "会社・部門ごとに分離", body: "データを構造的に分離。他社の文書は混ざりません。" },
  { icon: IconKey, bg: "bg-navy-900", title: "権限・ユーザー管理", body: "利用者と権限を柔軟に設定できます。" },
  { icon: IconClipboard, bg: "bg-green-600", title: "利用状況の把握", body: "件数・利用量などの記録を確認（会話の中身は非公開）。" },
  { icon: IconLock, bg: "bg-navy-900", title: "完全クローズド運用", body: "外部送信ゼロ。御社の環境・国内の閉域で完結。" },
  { icon: IconMic, bg: "bg-navy-900", title: "議事録自動作成", body: "会議音声から、要点・決定事項を自動で議事録化。", soon: true },
  { icon: IconRobot, bg: "bg-green-600", title: "AIエージェント", body: "定型業務を任せられる、業務特化アシスタント。", soon: true },
  { icon: IconPhone, bg: "bg-navy-900", title: "iPhone / Android アプリ", body: "専用アプリで外出先でも。（現在もモバイルWeb対応）", soon: true },
];

export function Features() {
  return (
    <section id="feature-list" className="bg-green-500/8 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="機能一覧"
          description="「探す・作る・守る」を支える機能群。リリースに向けて拡張を進めています。"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 70} as="article">
              <div className="group relative h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {f.soon && (
                  <span className="absolute right-4 top-4 rounded-md bg-amber-600 px-2.5 py-0.5 text-[10px] font-bold text-white">
                    開発予定
                  </span>
                )}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.bg} text-white`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-bold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-navy-900/45">
          ※「開発予定」はリリースに向けて開発中の機能です。提供時期・仕様は変更になる場合があります。
        </p>
      </div>
    </section>
  );
}
