import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { LeadTracking } from "@/components/LeadTracking";

const GA_ID = "G-NE1PJ2ZYQ3";

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
  alternates: { canonical: "/" },
  keywords: [
    "社内ナレッジAI",
    "社内AI",
    "クローズドAI",
    "オンプレAI",
    "RAG",
    "Gemma",
    "セキュアAI",
    "中小企業 AI",
    "社内文書 検索 AI",
    "AIエージェント",
  ],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://roota.ktgs.llc/#org",
      name: "ケーティージーエス合同会社（KTGS）",
      url: "https://ktgs.llc",
      email: "office360@ktgs.llc",
    },
    {
      "@type": "WebSite",
      "@id": "https://roota.ktgs.llc/#website",
      url: "https://roota.ktgs.llc",
      name: "ROOTA",
      inLanguage: "ja",
      publisher: { "@id": "https://roota.ktgs.llc/#org" },
    },
    {
      "@type": ["SoftwareApplication", "Product"],
      name: "ROOTA",
      url: "https://roota.ktgs.llc",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "情報を外に出さない、中小企業のための完全クローズドな社内ナレッジAI。Googleが公開するオープンモデル「Gemma」を採用し、社内文書を根拠に出典つきで回答します。",
      brand: { "@id": "https://roota.ktgs.llc/#org" },
      offers: {
        "@type": "Offer",
        price: "50000",
        priceCurrency: "JPY",
        description: "共有タイプ 月額5万円〜（初期構築20万円〜）",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <LeadTracking />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google tag (gtag.js) — Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
