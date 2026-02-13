"use client";

import { motion } from "framer-motion";
import { TICKER_HEADLINES } from "@/app/data/content";

export default function IntelligenceTicker() {
  const duplicatedHeadlines = [...TICKER_HEADLINES, ...TICKER_HEADLINES, ...TICKER_HEADLINES];

  return (
    <section className="py-4 border-y glass-panel overflow-hidden relative z-20" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="flex whitespace-nowrap" aria-hidden="true">
        <div className="flex animate-marquee">
          {duplicatedHeadlines.map((headline, index) => (
            <div key={index} className="flex items-center mx-6">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-4 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              <span className="font-semibold text-sm uppercase tracking-wide text-gray-300">
                {headline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
