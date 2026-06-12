"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { IconQuote } from "../icons";

type Case = { q: string; effect: string };

const GROUPS: { key: string; label: string; heading: string; cases: Case[] }[] = [
  {
    key: "hr",
    label: "総務・人事",
    heading: "バックオフィスの「探す」を、聞くだけで。",
    cases: [
      { q: "出張旅費規程の上限と、精算の締日・手順を教えて", effect: "規程を漁る手間をなくし、申請ミスを防ぐ" },
      { q: "慶弔休暇の取得条件と、申請の方法は?", effect: "制度の確認をその場で。問い合わせ対応を削減" },
      { q: "リモート勤務・時短勤務の申請ルールは?", effect: "就業規則を即参照。人事への細かい質問が減る" },
      { q: "新入社員の受け入れで必要な手続きリストを作成して", effect: "受け入れ時のタスク漏れを防ぎ、業務を効率化" },
    ],
  },
  {
    key: "fin",
    label: "経理・管理",
    heading: "判断と書類づくりを、ベテラン頼みから卒業。",
    cases: [
      { q: "経費精算で、交際費として認められる範囲は?", effect: "判断基準を即確認。差し戻しや確認漏れを防ぐ" },
      { q: "稟議申請の、金額別の決裁ルートを教えて", effect: "手続きの属人化を解消し、誰でも迷わず申請できる" },
      { q: "あの取引先との契約、過去の条件と更新時の注意点は?", effect: "過去の案件・契約情報を即座に引き当てる" },
      { q: "月次報告書のフォーマットの場所と、作成時のチェックポイントは?", effect: "ベテランの頭の中にある作成のコツをナレッジ化する" },
    ],
  },
];

export function UseCases() {
  const [active, setActive] = useState(0);
  const group = GROUPS[active];

  return (
    <section className="bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="活用シーン"
          title="現場の「知りたい」に、その場で答える。"
          description="部門ごとの実際の問いかけと、その効果。ROOTAは日々の業務にそのまま溶け込みます。"
        />

        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-navy-900/10 bg-white p-1.5 shadow-sm">
            {GROUPS.map((g, i) => (
              <button
                key={g.key}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                  active === i
                    ? "bg-navy-900 text-white shadow"
                    : "text-navy-900/60 hover:text-navy-900"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </Reveal>

        <p className="mt-8 text-center text-xl font-bold text-navy-900 sm:text-2xl">
          <span className="text-green-600">{group.label}</span>
          <span className="mx-3 text-navy-900/30">──</span>
          {group.heading}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {group.cases.map((c, i) => (
            <Reveal key={c.q} delay={i * 70} as="article">
              <div className="flex h-full gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-900/5 transition-shadow hover:shadow-lg">
                <IconQuote className="h-8 w-8 shrink-0 text-green-500" />
                <div>
                  <p className="font-bold text-navy-900">「{c.q}」</p>
                  <p className="mt-4 border-t border-navy-900/8 pt-3 text-sm text-navy-900/60">
                    <span className="font-bold text-green-600">効果</span>　{c.effect}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
