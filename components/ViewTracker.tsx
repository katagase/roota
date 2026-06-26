"use client";

import { useEffect, useRef } from "react";

/**
 * Fires a GA4 event once when this marker scrolls into view.
 * Drop it inside a section to measure "セクション到達".
 */
export function ViewTracker({ eventName }: { eventName: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          window.gtag?.("event", eventName, { page_path: window.location.pathname });
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eventName]);

  return <span ref={ref} aria-hidden className="block h-px w-px" />;
}
