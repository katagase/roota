import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { IconArrowRight, IconClipboard, IconCheckBadge, IconLock, IconKey } from "../icons";

const ITEMS = [
  {
    icon: IconClipboard,
    title: "「あの決まり、どこ?」",
    body: "出張申請のたび、社内資料を漁って探している",
  },
  {
    icon: IconCheckBadge,
    title: "「これで合ってる?」",
    body: "メールや報告書、提出前に毎回ひとりで不安",
  },
  {
    icon: IconLock,
    title: "外に出せない情報",
    body: "顧客情報や契約情報を、クラウドAIに預けられない",
  },
  {
    icon: IconKey,
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
            <Reveal key={item.title} delay={i * 90} as="article">
              <div className="group h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/60">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex items-start gap-3 rounded-2xl border border-green-600/20 bg-green-500/5 p-6 text-navy-900">
            <IconArrowRight className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />
            <p className="text-base font-bold sm:text-lg">
              「探す・作る・守る」を、情報を外に出さず、社内で完結して解決します。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
