import type { LucideIcon } from "lucide-react";
import {
  Search,
  MessageCircle,
  Bot,
  Database,
  KeyRound,
  BarChart3,
  Lock,
  Users,
  ScrollText,
  MonitorSmartphone,
  Smartphone,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

type Feature = { icon: LucideIcon; title: string; desc: string; tag: string; soon?: boolean };

const FEATURES: Feature[] = [
  {
    tag: "探す・聞く",
    icon: Search,
    title: "ナレッジ検索（出典つき）",
    desc: "規程・マニュアル・FAQを、聞くだけで出典つきで回答。",
  },
  {
    tag: "探す・聞く",
    icon: MessageCircle,
    title: "対話で質問",
    desc: "知りたいことを聞くだけ。社内の知識から答えます。",
  },
  {
    tag: "作る・守る",
    icon: Bot,
    title: "AIエージェント",
    desc: "御社の業務に合わせて定型業務を自動化。テンプレ自作も、個別開発も可能です。",
  },
  {
    tag: "管理",
    icon: Database,
    title: "文書の登録・管理",
    desc: "規程・議事録・契約文書などをまとめて管理。",
  },
  {
    tag: "管理",
    icon: KeyRound,
    title: "権限・ユーザー管理",
    desc: "利用者と権限を、管理者が柔軟に設定。",
  },
  {
    tag: "管理",
    icon: BarChart3,
    title: "利用状況の把握",
    desc: "件数・利用量などをダッシュボードで確認（会話の中身は非公開）。",
  },
  {
    tag: "セキュリティ",
    icon: Lock,
    title: "完全クローズド運用",
    desc: "外部送信ゼロ。御社の環境・国内の閉域で完結。",
  },
  {
    tag: "セキュリティ",
    icon: Users,
    title: "会社・部門ごとに分離",
    desc: "データを構造的に分離。他社の文書は混ざりません。",
  },
  {
    tag: "セキュリティ",
    icon: ScrollText,
    title: "操作ログ（監査）",
    desc: "操作記録を保全。誰が何をしたかを後から追えます。",
  },
  {
    tag: "利用環境",
    icon: MonitorSmartphone,
    title: "ブラウザ／モバイルWeb対応",
    desc: "PC・スマホのブラウザから、今すぐ利用できます。",
  },
  {
    tag: "利用環境",
    icon: Smartphone,
    title: "iPhone / Android アプリ",
    desc: "専用アプリで外出先でも。",
    soon: true,
  },
];

function FeatureTile({ f }: { f: Feature }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border-[0.5px] border-roota-border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/5">
      <div className="h-1 bg-roota-green" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-roota-navy-tint px-2 py-0.5 text-[10px] font-bold tracking-wide text-roota-navy/65">
            {f.tag}
          </span>
          {f.soon && (
            <span className="rounded-md bg-roota-warning px-2 py-0.5 text-[10px] font-semibold text-roota-warning-text">
              開発予定
            </span>
          )}
        </div>
        <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-roota-green-tint">
          <f.icon className="h-[22px] w-[22px] text-roota-green-strong" strokeWidth={1.75} />
        </div>
        <h3 className="mt-3 text-[15px] font-semibold text-roota-navy">{f.title}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-roota-body">{f.desc}</p>
      </div>
    </article>
  );
}

export function Features() {
  return (
    <section id="feature-list" className="bg-green-500/8 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="機能一覧"
          description="「探す・作る・守る」を支える機能群です。各タイルの用途タグで整理しています。リリースに向けて拡張中。"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 60}>
              <FeatureTile f={f} />
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
