import { Reveal } from "../Reveal";
import { IconGift, IconShield, IconCheck } from "../icons";

const SPECS = [
  { k: "費用", v: "無償（共有プランにてお試し）" },
  { k: "対象", v: "総務・管理部門の皆さま（～10名）" },
  { k: "期間", v: "1ヶ月間" },
  { k: "登録データ", v: "社内規程・FAQ・手順書" },
];

const DATA = [
  "企業ごとに分離して保存。他社からは見えません",
  "国内のクローズド環境で処理し、外部へ送信しません",
  "お試し終了後は、登録データを削除します",
];

const SUPPORT = [
  "キックオフでデータ投入・初期設定",
  "週1回の振り返り（よく効く質問を一緒に発見）",
  "最終日に効果レポートをご提出",
];

export function Trial() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
              <IconGift className="h-8 w-8" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-[0.01em] text-navy-900 sm:text-4xl">
            まずは、無料でお試しください。
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-loose text-navy-900/60">
            「何に使えるか分からない」——その答えを、私たちが伴走しながら一緒に見つけます。
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* specs */}
          <Reveal>
            <div className="space-y-3">
              {SPECS.map((s) => (
                <div
                  key={s.k}
                  className="flex items-center gap-4 rounded-xl border border-navy-900/8 bg-mist px-6 py-4"
                >
                  <span className="w-24 shrink-0 text-sm font-bold text-green-600">{s.k}</span>
                  <span className="text-sm text-navy-900/80">{s.v}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* data + support */}
          <Reveal delay={120}>
            <div className="space-y-5">
              <div className="rounded-2xl border border-navy-900/8 bg-mist p-6">
                <p className="flex items-center gap-2 font-bold text-navy-900">
                  <IconShield className="h-5 w-5 text-green-600" />
                  データの取り扱い
                </p>
                <ul className="mt-4 space-y-3">
                  {DATA.map((d, i) => (
                    <li key={d} className="flex gap-2.5 text-sm text-navy-900/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                      <span className={i === DATA.length - 1 ? "font-bold text-navy-900" : ""}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-green-600 p-6">
                <p className="font-bold text-white">伴走支援の内容</p>
                <ul className="mt-4 space-y-3">
                  {SUPPORT.map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm text-white/95">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
