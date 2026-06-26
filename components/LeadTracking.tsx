"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 `generate_lead` event whenever a CTA that links to the
 * KTGS contact page is clicked (資料請求 / お問い合わせ). Captures all CTAs
 * (header / hero / pricing / closing) without modifying each button.
 * In GA4, mark `generate_lead` as a key event to count it as a conversion.
 */
export function LeadTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (!href.includes("ktgs.llc/contact")) return;
      window.gtag?.("event", "generate_lead", {
        link_url: href,
        cta_text: (a.textContent || "").trim().slice(0, 60),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
