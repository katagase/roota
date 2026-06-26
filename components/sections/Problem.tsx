import { ArrowRight, FileSearch, ListChecks, Lock, ScanSearch } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { RootaCard } from "../RootaCard";

const ITEMS = [
  {
    icon: FileSearch,
    title: "「あの決まり、どこ?」",
    body: "出張申請のたび、社内資料を漁って探している",
  },
  {
    icon: ListChecks,
    title: "「これで合ってる?」",
    body: "メールや報告書、提出前に毎回ひとりで不安",
  },
  {
    icon: Lock,
    title: "外に出せない情報",
    body: "顧客情報や契約情報を、クラウドAIに預けられない",
  },
  {
    icon: ScanSearch,
    title: "品質が人まかせ",
    body: "書類の出来は人によってバラバラ、ベテラン頼み",
  },
];

export function Problem() {
  return (
    <section id="problem" className="bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="よくある課題"
          title="AIは使いたい。でも、社内の情報は外に出せない。"
          description="多くの中小企業が、「探す手間」「書類への自信のなさ」、そしてセキュリティの不安からAI活用に踏み切れずにいます。ROOTAは、まさにこの課題のために生まれました。"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <RootaCard variant="problem" icon={item.icon} title={item.title} desc={item.body} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex items-start gap-3 rounded-2xl border border-green-600/20 bg-green-500/5 p-6 text-navy-900">
            <ArrowRight className="mt-0.5 h-6 w-6 shrink-0 text-green-600" strokeWidth={1.75} />
            <p className="text-base font-bold sm:text-lg">
              「探す・作る・守る」を、情報を外に出さず、社内で完結して解決します。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
