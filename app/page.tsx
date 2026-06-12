import { Header } from "@/components/Header";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Security } from "@/components/sections/Security";
import { Pricing } from "@/components/sections/Pricing";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

// Deep-dive sections moved into the downloadable brochure to keep the page short:
// UseCases, Minutes, Roadmap, Voices, Trial, Steps, the Gemini comparison table
// and the full system/security diagram. Their components still live under
// components/sections/ and can be re-added here at any time.

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <About />
        <Capabilities />
        <Security />
        <Pricing />
        <DownloadCTA />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
