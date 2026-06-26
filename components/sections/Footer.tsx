import { LogoStacked } from "../Logo";
import { CONTACT_URL } from "@/lib/site";

const LINKS = [
  { href: "/#problem", label: "課題" },
  { href: "/#about", label: "ROOTAとは" },
  { href: "/#features", label: "できること" },
  { href: "/#security", label: "セキュリティ" },
  { href: "/#pricing", label: "料金プラン" },
  { href: "/#faq", label: "よくある質問" },
  { href: CONTACT_URL, label: "資料請求", external: true },
  { href: CONTACT_URL, label: "お問い合わせ", external: true },
];

const SOCIAL = [
  {
    label: "X",
    href: "#",
    path: "M18.9 3H21l-6.6 7.5L22 21h-6l-4.7-6.1L5.9 21H3.8l7-8L2.6 3h6.1l4.2 5.6L18.9 3Zm-1 16h1.2L8.2 4.1H6.9L17.9 19Z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.5A2.5 2.5 0 0 0 2.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.5a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12Zm-12 3V9l5 3-5 3Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z",
  },
];

export function Footer() {
  return (
    <footer className="bg-white">
      {/* Accent band — SEEED-style closing strip */}
      <div className="bg-green-600 py-7 text-center">
        <p className="px-5 text-base font-bold text-white sm:text-lg">
          組織の知識に、根を張るAI。情報を守りながら、AIを使う時代へ。
        </p>
      </div>

      {/* Centered brand block */}
      <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8">
        <div className="flex justify-center">
          <LogoStacked className="h-24" />
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-900/60 transition-colors hover:border-green-600 hover:text-green-600"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm text-navy-900/60 transition-colors hover:text-green-600"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Operating company */}
      <div className="border-t border-navy-900/8">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs leading-relaxed text-navy-900/55 lg:px-8">
          <p>
            <span className="font-bold text-navy-900/75">運営会社：</span>
            ケーティージーエス合同会社（KTGS）
          </p>
          <p className="mt-1.5">
            ROOTAは<span className="font-bold text-navy-900/75">株式会社ノウデル</span>が開発した製品です。
            KTGSは総代理店として、導入・運用保守を担っています。
          </p>
        </div>
      </div>

      {/* Trademark / non-endorsement notice */}
      <div className="border-t border-navy-900/8">
        <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
          <p className="text-center text-[11px] leading-relaxed text-navy-900/40">
            Powered by Gemma. Gemma is provided under and subject to the{" "}
            <a
              href="https://ai.google.dev/gemma/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-navy-900/70"
            >
              Gemma Terms of Use
            </a>
. 「Gemma」「Google」は Google LLC の商標です。本サービスは Google による提供・承認・後援を受けたものではありません。記載の会社名・製品名は各社の商標または登録商標です。
          </p>
        </div>
      </div>

      <div className="border-t border-navy-900/8 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 text-xs text-navy-900/45 sm:flex-row sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} ケーティージーエス合同会社（KTGS）</p>
          <div className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-navy-900/70">
              プライバシーポリシー
            </a>
            <a href="/terms" className="transition-colors hover:text-navy-900/70">
              利用規約
            </a>
            <a
              href="https://ktgs.llc/about"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-navy-900/70"
            >
              会社概要
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
