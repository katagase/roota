import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

// Latin / numerals — crisper than Noto's Latin for prices, labels, "POINT", etc.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roota.ktgs.llc"),
  title: "ROOTA｜組織の知識に、根を張るAI。完全クローズドの社内ナレッジAI",
  description:
    "情報を外に出さない、中小企業のための社内ナレッジAI。Googleが公開するオープンモデル「Gemma」を採用。月額5万円・初期構築20万円から。探す・作る・守るを社内で完結。",
  openGraph: {
    title: "ROOTA｜組織の知識に、根を張るAI。",
    description:
      "情報を外に出さない、中小企業のための社内ナレッジAI。完全クローズドな環境で、貴社の知識を安全に活用します。",
    url: "https://roota.ktgs.llc",
    siteName: "ROOTA",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROOTA｜組織の知識に、根を張るAI。",
    description:
      "情報を外に出さない、中小企業のための社内ナレッジAI。完全クローズドな環境で、貴社の知識を安全に活用します。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
