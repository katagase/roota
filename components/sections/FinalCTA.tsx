import { Reveal } from "../Reveal";
import { LogoStacked } from "../Logo";
import { IconArrowRight } from "../icons";
import { CONTACT_URL } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 text-white sm:py-28"
      style={{
        background:
          "linear-gradient(135deg, #34ac75 0%, #2e9e6b 45%, #1f7a52 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-white/10" />
        <div className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-white/10" />
        <div className="absolute right-40 bottom-10 h-64 w-64 rounded-full bg-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="text-base text-white/75 sm:text-lg">
            情報を外へ出してAIを使う時代から、
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[0.01em] sm:text-5xl">
            情報を守りながら、AIを使う時代へ。
          </h2>
          <p className="mt-6 text-base text-white/85 sm:text-lg">
            外部に預けるのではなく、自社で育てるAIへ。まずは資料で、ROOTAのすべてを。
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 text-base font-bold text-green-700 shadow-lg transition-all hover:bg-white/90"
            >
              資料請求（無料）
              <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-9 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              無料お試し・お問い合わせ
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-16 flex justify-center">
          <LogoStacked className="h-16" white />
        </Reveal>
      </div>
    </section>
  );
}
