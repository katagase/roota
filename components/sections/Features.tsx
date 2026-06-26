import type { LucideIcon } from "lucide-react";
import {
  Search,
  MessageCircle,
  Database,
  ListChecks,
  Pencil,
  Users,
  KeyRound,
  BarChart3,
  Lock,
  Mic,
  Bot,
  Smartphone,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { RootaCard } from "../RootaCard";

type Feature = { icon: LucideIcon; title: string; body: string; soon?: boolean };

const FEATURES: Feature[] = [
  { icon: Search, title: "ナレッジ検索（出典つき）", body: "規程・マニュアル・FAQを、聞くだけで出典つきで回答。" },
  { icon: MessageCircle, title: "対話で質問", body: "知りたいことを聞くだけ。社内の知識から答えます。" },
  { icon: Database, title: "文書の登録・管理", body: "規程・議事録・契約文書などをまとめて管理。" },
  { icon: ListChecks, title: "書類・メールのチェック", body: "提出前に自社ルールで点検。記入漏れ・ミスを防止。" },
  { icon: Pencil, title: "たたき台の自動作成", body: "報告書・メールの下書きを自動で作成。" },
  { icon: Users, title: "会社・部門ごとに分離", body: "データを構造的に分離。他社の文書は混ざりません。" },
  { icon: KeyRound, title: "権限・ユーザー管理", body: "利用者と権限を柔軟に設定できます。" },
  { icon: BarChart3, title: "利用状況の把握", body: "件数・利用量などの記録を確認（会話の中身は非公開）。" },
  { icon: Lock, title: "完全クローズド運用", body: "外部送信ゼロ。御社の環境・国内の閉域で完結。" },
  { icon: Mic, title: "議事録自動作成", body: "会議音声から、要点・決定事項を自動で議事録化。", soon: true },
  { icon: Bot, title: "AIエージェント", body: "テンプレートから自分で作成（無料）。専用設計の個別開発は初回無料・以降1個30,000円。" },
  { icon: Smartphone, title: "iPhone / Android アプリ", body: "専用アプリで外出先でも。（現在もモバイルWeb対応）", soon: true },
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
            <Reveal key={f.title} delay={(i % 4) * 70}>
              <RootaCard
                icon={f.icon}
                title={f.title}
                desc={f.body}
                badge={f.soon ? "開発予定" : undefined}
              />
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
