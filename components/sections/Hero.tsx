import { IconArrowRight, IconShield } from "../icons";
import { CONTACT_URL } from "@/lib/site";

/**
 * Three-column photo hero (SEEED-style).
 * Drop `public/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` to fill the columns.
 *
 * Per-column framing knobs (all three source photos are landscape, so a tall
 * column over-zooms with plain `cover`):
 *   size     — zoom. "cover" = fill. "auto NN%" = NN% of column height
 *              → smaller NN = more "引き" (zoomed out), larger = more "寄り".
 *   position — which part shows / where the (vertical) slack sits.
 */
const COLUMNS = [
  { img: "/hero-1.jpg", fallback: "#26424f", size: "cover", position: "50% 30%" },
  { img: "/hero-2.jpg", fallback: "#1d3540", size: "cover", position: "50% 28%" },
  { img: "/hero-3.jpg", fallback: "#2a4a57", size: "cover", position: "44% 30%" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      {/* photo columns */}
      <div className="absolute inset-0 grid grid-cols-3" aria-hidden>
        {COLUMNS.map((c, i) => (
          <div
            key={i}
            style={{
              backgroundColor: c.fallback,
              backgroundImage: `url(${c.img})`,
              backgroundSize: c.size,
              backgroundPosition: c.position,
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

      {/* Legibility overlay — darken the centre (behind the headline) while
         keeping the side portraits bright, plus a faint green wash at the foot
         and a light unifying tint so the three columns read as one band. */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background: [
            "radial-gradient(ellipse 78% 60% at 50% 47%, rgba(8,16,32,0.62) 0%, rgba(8,16,32,0.22) 55%, rgba(8,16,32,0) 78%)",
            "linear-gradient(180deg, rgba(8,16,32,0.30) 0%, rgba(8,16,32,0) 22%)",
            "linear-gradient(180deg, rgba(8,16,32,0) 62%, rgba(46,158,107,0.34) 100%)",
            "linear-gradient(0deg, rgba(11,21,40,0.14), rgba(11,21,40,0.14))",
          ].join(","),
        }}
      />

      {/* content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-16 text-center text-white lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
          <IconShield className="h-4 w-4" />
          学習しない、ではなく渡さない。
        </span>

        <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-black leading-[1.18] tracking-[0.12em] drop-shadow-sm sm:text-6xl lg:text-7xl">
          組織の知識に、
          <br />
          <span className="text-green-400">根を張る</span>AI。
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          情報を外に出さない。Googleが公開するオープンモデル「Gemma」を採用。
          <br className="hidden sm:block" />
          中小企業のための、完全クローズドな社内ナレッジAIです。
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-9 py-4 text-base font-bold text-white shadow-lg shadow-black/20 transition-all hover:bg-green-500"
          >
            資料請求（無料）
            <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-9 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            無料お試しの相談
          </a>
        </div>

        <p className="mt-10 text-sm text-white/75">
          月額5万円から、初期構築20万円ではじめられます
        </p>
      </div>
    </section>
  );
}
