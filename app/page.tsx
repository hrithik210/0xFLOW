import HeroSection from "./components/sections/HeroSection";
import FeaturedWorkSection from "./components/sections/FeaturedWorkSection";
import CapabilitiesSection from "./components/sections/CapabilitiesSection";
import ProcessSection from "./components/sections/ProcessSection";
import FounderSection from "./components/sections/FounderSection";
import CTASection from "./components/sections/CTASection";
import Navigation from "./components/Navigation";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedWorkSection />
        <CapabilitiesSection />
        <ProcessSection />
        <FounderSection />
        <CTASection />
        <SiteFooter />
      </main>
    </>
  );
}
