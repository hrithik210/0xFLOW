import HeroSection from "./components/sections/HeroSection";
import SystemsGrid from "./components/sections/SystemsGrid";
import IntelligenceTicker from "./components/sections/IntelligenceTicker";
import CapabilitiesSection from "./components/sections/CapabilitiesSection";
import FounderSection from "./components/sections/FounderSection";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <IntelligenceTicker />
        <CapabilitiesSection />
        <SystemsGrid />
        <FounderSection />

        <footer className="py-12 px-6 border-t glass-panel" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-400">
              <span className="font-bold text-white">0xFLOW</span> © {new Date().getFullYear()}
            </div>
            <div className="text-sm text-gray-500">
              Fluid Intelligence. Concrete Results.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
