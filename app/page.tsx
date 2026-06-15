import { Header } from "@/components/Header";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Difference } from "@/components/sections/Difference";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Features } from "@/components/sections/Features";
import { Security } from "@/components/sections/Security";
import { Pricing } from "@/components/sections/Pricing";
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
        <Difference />
        <About />
        <Capabilities />
        <Features />
        <Security />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
