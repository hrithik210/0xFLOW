import HeroSection from "./components/sections/HeroSection";
import SystemsGrid from "./components/sections/SystemsGrid";
import IntelligenceTicker from "./components/sections/IntelligenceTicker";
import CapabilitiesSection from "./components/sections/CapabilitiesSection";
import FounderSection from "./components/sections/FounderSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <HeroSection />
      <IntelligenceTicker />
      <SystemsGrid />
      <div id="capabilities">
        <CapabilitiesSection />
      </div>
      <FounderSection />

      <footer className="py-12 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-sm text-gray-400">
            <span className="text-black font-bold">0xFLOW</span> © {new Date().getFullYear()}
          </div>
          <div className="font-mono text-xs text-gray-400 tracking-widest uppercase">
            Fluid Intelligence / Agency v2.1
          </div>
        </div>
      </footer>
    </main>
  );
}
