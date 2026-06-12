import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { IconQuote } from "../icons";

const VOICES = [
  {
    body: "出張申請の細かい決まり、いちいち社内の資料を漁って探すのが面倒で…ローカルで検索できないかな。",
    who: "ある中小企業さま",
    tag: "探す",
  },
  {
    body: "個人情報をマスクして相談している手間が、まるごと要らなくなる。",
    who: "顧問税理士さま",
    tag: "守る・クローズド",
  },
  {
    body: "人では気づきにくい項目の漏れも、先に拾ってくれそうだね。",
    who: "顧問税理士さま",
    tag: "守る",
  },
];

export function Voices() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Voices" title="現場から、こんな声が届いています。" />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {VOICES.map((v, i) => (
            <Reveal key={v.body} delay={i * 110} as="article">
              <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-mist p-8">
                <IconQuote className="h-9 w-9 text-green-500" />
                <p className="mt-5 flex-1 text-base leading-relaxed text-navy-900/80">{v.body}</p>
                <div className="mt-6 border-t border-navy-900/10 pt-4">
                  <p className="text-sm text-navy-900/60">— {v.who}</p>
                  <span className="mt-2 inline-block rounded-md bg-green-600 px-3 py-1 text-xs font-bold text-white">
                    {v.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-navy-900/40">
          ※ 製品コンセプトに対して寄せられた声・想定される活用例です。
        </p>
      </div>
    </section>
  );
}
