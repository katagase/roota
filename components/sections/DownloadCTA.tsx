"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { IconCheck, IconArrowRight } from "../icons";

/** Where the brochure PDF lives. Drop the file at public/roota-document.pdf */
const PDF_URL = "/roota-document.pdf";

const INSIDE = [
  "汎用AIとの比較と、Gemma 採用の理由",
  "総務・経理など部門別の活用シーン",
  "システム構成・セキュリティ構成図",
  "料金プランと導入ステップ",
  "今後の開発ロードマップ",
];

function startDownload() {
  const a = document.createElement("a");
  a.href = PDF_URL;
  a.download = "ROOTA_サービス資料.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function DownloadCTA() {
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      company: String(fd.get("company") ?? ""),
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
    };

    setSubmitting(true);
    try {
      // リード情報を通知（失敗してもダウンロードは妨げない）
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // ネットワーク障害等は握りつぶし、ダウンロードは続行
    } finally {
      setSubmitting(false);
      setDone(true);
      startDownload();
    }
  };

  return (
    <section id="download" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-navy-900/8 bg-mist shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: pitch + what's inside */}
            <Reveal className="p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                Document
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight tracking-[0.01em] text-navy-900 sm:text-4xl">
                3分でわかる、
                <br />
                ROOTA サービス資料
              </h2>
              <p className="mt-5 text-base leading-loose text-navy-900/65">
                「自社で使えるか」を判断するための情報を、1冊にまとめました。検討メンバーへの共有にもどうぞ。
                <span className="font-bold text-navy-900">無料・登録1分。</span>
              </p>

              <ul className="mt-7 space-y-3">
                {INSIDE.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-navy-900/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={120} className="border-t border-navy-900/8 bg-white p-8 sm:p-12 lg:border-l lg:border-t-0">
              {done ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                    <IconCheck className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-navy-900">
                    ダウンロードを開始しました
                  </h3>
                  <p className="mt-3 text-sm text-navy-900/60">
                    自動で始まらない場合は
                    <a href={PDF_URL} download className="font-bold text-green-600 underline">
                      こちら
                    </a>
                    から。
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex h-full flex-col">
                  <h3 className="text-lg font-black text-navy-900">資料をダウンロード（無料）</h3>
                  <div className="mt-6 grid grid-cols-1 gap-4">
                    <Field label="会社名" name="company" placeholder="株式会社ルータ" required />
                    <Field label="お名前" name="name" placeholder="山田 太郎" required />
                    <Field
                      label="メールアドレス"
                      name="email"
                      type="email"
                      placeholder="you@example.co.jp"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-900/20 transition-all hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "送信中…" : "資料をダウンロード"}
                    {!submitting && (
                      <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>
                  <p className="mt-4 text-center text-xs text-navy-900/45">
                    送信いただいた情報は、お問い合わせ対応の目的にのみ利用します。
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-bold text-navy-900/80">
      {label}
      {required && <span className="ml-1 text-green-600">*</span>}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-navy-900/15 bg-mist px-4 py-3 text-sm font-normal outline-none transition-colors placeholder:text-navy-900/35 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20"
      />
    </label>
  );
}
