import type { LucideIcon } from "lucide-react";
import {
  HeartHandshake,
  Users,
  HandCoins,
  Building2,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "../Reveal";

type Case = {
  icon: LucideIcon;
  name: string;
  body: string;
  ai: string;
  human: string;
  effect: string;
};

const CASES: Case[] = [
  {
    icon: HeartHandshake,
    name: "介護（ケアマネジメント）",
    body: "アセスメント・面談メモ・利用者情報を取り込み、標準様式のケアプラン原案や記録の下書きを作成。",
    ai: "情報整理・要約、第1〜2表や記録・連絡文のドラフト",
    human: "ケアマネが内容を確認し、最終決定",
    effect: "ケアマネの書類作成工数を削減",
  },
  {
    icon: Users,
    name: "労務・社会保険",
    body: "勤怠・給与・社保データを突合し、計算の前さばきや就業規則・36協定のチェック観点を整理。",
    ai: "数値突合・差異検出・チェック観点の洗い出し",
    human: "社労士が確認・判断",
    effect: "社労士との往復・確認工数を削減",
  },
  {
    icon: HandCoins,
    name: "補助金・助成金の申請支援",
    body: "公募要領と自社情報を突合し、要件適合チェックと申請書・事業計画のドラフトを作成。",
    ai: "要件チェック・必要書類の洗い出し・申請書下書き",
    human: "専門家（行政書士・社労士等）が最終確認",
    effect: "申請準備の工数を削減",
  },
  {
    icon: Building2,
    name: "不動産（重要事項説明）",
    body: "物件資料・調査結果を取り込み、重要事項説明書のドラフトや契約チェックの前さばき。",
    ai: "資料突合・記載漏れ検出・ドラフト",
    human: "宅建士が説明内容を最終確認",
    effect: "書類作成・確認の往復を効率化",
  },
  {
    icon: Headphones,
    name: "コールセンター品質・コンプラ点検",
    body: "通話を社内で取り込み、応対品質の採点・要約・コンプラ観点の検出を自動で前さばき。",
    ai: "文字起こし・採点ドラフト・違反候補の抽出",
    human: "SV・管理者が確認し、評価を確定",
    effect: "SVの点検工数を削減",
  },
  {
    icon: ShieldCheck,
    name: "保険代理店の事務・募集文書",
    body: "申込書・事故報告・募集文書の作成補助と、コンプラ観点の前チェックを整理。",
    ai: "記載突合・必要項目チェック・ドラフト",
    human: "有資格者・引受側が最終判断",
    effect: "事務・確認工数を削減",
  },
];

export function IndustryUseCases() {
  return (
    <section id="industry" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <span className="inline-block rounded-full bg-roota-green-tint px-3.5 py-1.5 text-[13px] font-bold tracking-wide text-roota-green-strong">
            個別開発の活用例 ─ 業界別
          </span>
          <h3 className="mt-3.5 text-2xl font-black leading-[1.35] tracking-[0.01em] text-navy-900 sm:text-[1.75rem]">
            判断は人が、<span className="text-green-600">下ごしらえはAIが。</span>
          </h3>
          <p className="mt-4 max-w-3xl text-[15px] leading-[1.9] text-navy-900/60">
            様式が決まっていて、複数の資料を突き合わせ、最後は専門家が判を押す——そんな業務ほど、AIエージェントとの伴走が効きます。AIが情報整理とドラフトまでを担い、最終判断は人に残す。データは社内で取り込み、外に出さない構成です。
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col rounded-2xl border-[0.5px] border-roota-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-roota-green">
                  <c.icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h4 className="mt-4 text-[16px] font-bold leading-relaxed text-roota-navy">
                  {c.name}
                </h4>
                <p className="mt-2 text-[13px] leading-[1.8] text-roota-body">{c.body}</p>

                <div className="mt-4 flex-1 rounded-xl bg-green-500/5 p-3.5">
                  <div>
                    <span className="block text-[11px] font-bold tracking-wide text-roota-green-strong">
                      AI（下ごしらえ）
                    </span>
                    <span className="mt-0.5 block text-[12px] leading-relaxed text-roota-navy/85">
                      {c.ai}
                    </span>
                  </div>
                  <div className="mt-2.5 border-t border-roota-border/60 pt-2.5">
                    <span className="block text-[11px] font-bold tracking-wide text-roota-navy">
                      人（判断）
                    </span>
                    <span className="mt-0.5 block text-[12px] leading-relaxed text-roota-navy/85">
                      {c.human}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2.5 border-t border-dashed border-roota-border pt-4">
                  <span className="shrink-0 rounded bg-roota-green px-2 py-1 text-[11px] font-bold tracking-wide text-white">
                    効果
                  </span>
                  <span className="text-[13px] font-semibold leading-snug text-roota-navy">
                    {c.effect}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-navy-900/40">
          ※ 効果は業務内容・データ整備状況により異なり、成果を保証するものではありません。最終的な判断・責任は各分野の有資格者・担当者が担います。
        </p>
      </div>
    </section>
  );
}
