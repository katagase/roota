import type { LucideIcon } from "lucide-react";
import {
  Search,
  MessageCircle,
  Bot,
  Check,
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
import { RootaCard } from "../RootaCard";

type Feature = { icon: LucideIcon; title: string; body: string; soon?: boolean };

const SEARCH: Feature[] = [
  { icon: Search, title: "ナレッジ検索（出典つき）", body: "規程・マニュアル・FAQを、聞くだけで出典つきで回答。" },
  { icon: MessageCircle, title: "対話で質問", body: "知りたいことを聞くだけ。社内の知識から答えます。" },
];

const AGENT_TASKS: { title: string; body: string; soon?: boolean }[] = [
  { title: "たたき台の自動作成", body: "報告書・メールの下書きを自動で。" },
  { title: "書類・メールのチェック", body: "提出前に自社ルールで点検し、ミスを防止。" },
  { title: "議事録の自動作成", body: "会議音声から、要点・決定事項を整理。", soon: true },
];

const MANAGE: Feature[] = [
  { icon: Database, title: "文書の登録・管理", body: "規程・議事録・契約文書などをまとめて管理。" },
  { icon: KeyRound, title: "権限・ユーザー管理", body: "利用者と権限を、管理者が柔軟に設定。" },
  { icon: BarChart3, title: "利用状況の把握", body: "件数・利用量などをダッシュボードで確認（会話の中身は非公開）。" },
];

const SECURITY: Feature[] = [
  { icon: Lock, title: "完全クローズド運用", body: "外部送信ゼロ。御社の環境・国内の閉域で完結。" },
  { icon: Users, title: "会社・部門ごとに分離", body: "データを構造的に分離。他社の文書は混ざりません。" },
  { icon: ScrollText, title: "操作ログ（監査）", body: "操作記録を保全。誰が何をしたかを後から追えます。" },
];

const ENVIRONMENT: Feature[] = [
  { icon: MonitorSmartphone, title: "ブラウザ／モバイルWeb対応", body: "PC・スマホのブラウザから、今すぐ利用できます。" },
  { icon: Smartphone, title: "iPhone / Android アプリ", body: "専用アプリで外出先でも。", soon: true },
];

function CategoryHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="flex items-center gap-2.5">
        <span className="h-4 w-1 rounded-full bg-roota-green" />
        <h3 className="text-base font-bold text-roota-navy">{children}</h3>
      </div>
    </Reveal>
  );
}

function TileGrid({ items }: { items: Feature[] }) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => (
        <Reveal key={f.title} delay={(i % 3) * 70}>
          <RootaCard
            icon={f.icon}
            title={f.title}
            desc={f.body}
            badge={f.soon ? "開発予定" : undefined}
          />
        </Reveal>
      ))}
    </div>
  );
}

function AgentFeatured() {
  return (
    <Reveal>
      <article className="overflow-hidden rounded-xl border-[0.5px] border-roota-border bg-white transition-all duration-300 hover:shadow-lg hover:shadow-navy-900/5">
        <div className="h-1 bg-roota-green" />
        <div className="grid gap-6 p-6 sm:p-7 md:grid-cols-2 md:gap-8">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-roota-green-tint">
              <Bot className="h-6 w-6 text-roota-green-strong" strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-roota-navy">
                業務に伴走するAIエージェント
              </h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-roota-body">
                御社の業務に合わせて個別開発（初回無料・以降1個30,000円）。テンプレートから自作することもできます。
              </p>
            </div>
          </div>
          <div className="md:border-l md:border-roota-border md:pl-8">
            <p className="text-[11px] font-bold tracking-wider text-roota-navy/45">
              たとえば、こんな業務を自動化
            </p>
            <ul className="mt-3 space-y-3">
              {AGENT_TASKS.map((t) => (
                <li key={t.title} className="flex gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-roota-green" strokeWidth={2.5} />
                  <div>
                    <p className="text-[13px] font-semibold text-roota-navy">
                      {t.title}
                      {t.soon && (
                        <span className="ml-2 inline-block rounded bg-roota-warning px-1.5 py-0.5 align-middle text-[10px] font-semibold text-roota-warning-text">
                          開発予定
                        </span>
                      )}
                    </p>
                    <p className="text-[12px] leading-relaxed text-roota-body">{t.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Features() {
  return (
    <section id="feature-list" className="bg-green-500/8 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="機能一覧"
          description="「探す・作る・守る」を支える機能群を、用途別にまとめました。リリースに向けて拡張を進めています。"
        />

        <div className="mt-14 space-y-12">
          <div>
            <CategoryHeading>AIで、探す・聞く</CategoryHeading>
            <TileGrid items={SEARCH} />
          </div>

          <div>
            <CategoryHeading>AIエージェントで、作る・守る</CategoryHeading>
            <div className="mt-5">
              <AgentFeatured />
            </div>
          </div>

          <div>
            <CategoryHeading>管理・ダッシュボード</CategoryHeading>
            <TileGrid items={MANAGE} />
          </div>

          <div>
            <CategoryHeading>セキュリティ</CategoryHeading>
            <TileGrid items={SECURITY} />
          </div>

          <div>
            <CategoryHeading>利用環境</CategoryHeading>
            <TileGrid items={ENVIRONMENT} />
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-navy-900/45">
          ※「開発予定」はリリースに向けて開発中の機能です。提供時期・仕様は変更になる場合があります。
        </p>
      </div>
    </section>
  );
}
