import { Header } from "./Header";
import { Footer } from "./sections/Footer";
import { BackToTop } from "./BackToTop";

/** Shared chrome for sub-pages (会社概要 / プライバシー / 利用規約). */
export function PageShell({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28">
        {/* page header strip */}
        <section className="bg-mist">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
              {eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-[0.01em] text-navy-900 sm:text-4xl">
              {title}
            </h1>
            {updated && (
              <p className="mt-4 text-xs text-navy-900/50">最終改定日：{updated}</p>
            )}
          </div>
        </section>

        {/* body */}
        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">{children}</div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

/** Lightweight prose styling (no typography plugin needed). */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="leading-loose text-navy-900/75
        [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy-900
        [&_h2:first-child]:mt-0
        [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-bold [&_h3]:text-navy-900
        [&_p]:my-4 [&_p]:text-sm sm:[&_p]:text-[15px]
        [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
        [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6
        [&_li]:text-sm sm:[&_li]:text-[15px]
        [&_a]:font-medium [&_a]:text-green-600 [&_a]:underline
        [&_dl]:mt-2 [&_dl]:divide-y [&_dl]:divide-navy-900/8 [&_dl]:overflow-hidden [&_dl]:rounded-2xl [&_dl]:border [&_dl]:border-navy-900/8
        [&_dt]:bg-mist [&_dt]:px-5 [&_dt]:py-4 [&_dt]:text-sm [&_dt]:font-bold [&_dt]:text-navy-900
        [&_dd]:px-5 [&_dd]:py-4 [&_dd]:text-sm [&_dd]:text-navy-900/75
        [&_table]:my-5 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-xl [&_table]:text-sm
        [&_thead]:bg-mist
        [&_th]:border [&_th]:border-navy-900/10 [&_th]:px-4 [&_th]:py-2.5 [&_th]:text-left [&_th]:font-bold [&_th]:text-navy-900
        [&_td]:border [&_td]:border-navy-900/10 [&_td]:px-4 [&_td]:py-2.5 [&_td]:align-top [&_td]:text-navy-900/75"
    >
      {children}
    </div>
  );
}
