"use client";

import { motion } from "framer-motion";
import { TICKER_HEADLINES } from "@/app/data/content";

export default function IntelligenceTicker() {
  const duplicatedHeadlines = [...TICKER_HEADLINES, ...TICKER_HEADLINES];

  return (
    <section className="py-3 border-b border-black bg-black text-white overflow-hidden relative z-20">
      <div className="flex items-center">
        <div className="bg-white text-black text-xs font-bold px-4 py-1 mr-4 uppercase tracking-widest whitespace-nowrap">
          Latest Intel
        </div>
        <div className="flex whitespace-nowrap overflow-hidden w-full" aria-hidden="true">
          <div className="flex animate-marquee">
            {duplicatedHeadlines.map((headline, index) => (
              <div key={index} className="flex items-center mx-8">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest">
                  {headline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
