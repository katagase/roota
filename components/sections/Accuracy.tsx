import { Database, ListChecks, Quote } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { RootaCard } from "../RootaCard";

const POINTS = [
  {
    icon: Database,
    title: "正解を、覚えさせる",
    body: "社内規程・マニュアル・確定済みの情報を登録。御社の“正”が、答えの土台になります。",
  },
  {
    icon: ListChecks,
    title: "正解を、根拠に答える",
    body: "一般論で推測しません。御社の情報だけを根拠に、回答を組み立てます。",
  },
  {
    icon: Quote,
    title: "出典で、確かめられる",
    body: "参照元を提示。AIの“言いっぱなし”を防ぎ、誤りにすぐ気づけます。",
  },
];

export function Accuracy() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Accuracy"
          title={
            <>
              正解を入れるほど、
              <br className="sm:hidden" />
              <span className="text-green-600">正解</span>が返る。
            </>
          }
          description="AIの答えの精度は、賢さよりも“何を根拠にするか”で決まります。ROOTAは御社の正解データ（社内規程・確定情報）を根拠に、出典つきで回答。もっともらしい推測ではなく、確かめられる答えを返します。"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <RootaCard icon={p.icon} title={p.title} desc={p.body} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-bold leading-relaxed text-navy-900 sm:text-xl">
            “正しい情報”を入れるほど、返ってくる答えも正確になる。
            <br className="hidden sm:block" />
            <span className="text-green-600">精度の主導権は、御社の側にあります。</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
