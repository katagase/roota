"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CONTACT_URL } from "@/lib/site";

const NAV = [
  { href: "/#problem", label: "課題" },
  { href: "/#about", label: "ROOTAとは" },
  { href: "/#features", label: "できること" },
  { href: "/#security", label: "セキュリティ" },
  { href: "/#pricing", label: "料金" },
  { href: "/#faq", label: "FAQ" },
  { href: CONTACT_URL, label: "資料請求", external: true },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-navy-900/5 bg-white/95 px-5 shadow-[0_8px_30px_rgba(15,31,61,0.08)] backdrop-blur-md sm:h-[68px] lg:px-7">
        <a href="/" className="shrink-0" aria-label="ROOTA トップへ">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm font-medium text-navy-900/75 transition-colors hover:text-green-600"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-green-500 hover:shadow-md"
          >
            資料請求・お問い合わせ
          </a>
        </nav>

        <button
          type="button"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-all ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl bg-white/97 shadow-lg backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-[28rem] border border-navy-900/5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setOpen(false)}
              className="border-b border-navy-900/5 py-3.5 text-sm font-medium text-navy-900/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="my-3 rounded-full bg-green-600 px-5 py-3 text-center text-sm font-bold text-white"
          >
            資料請求・お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
}
