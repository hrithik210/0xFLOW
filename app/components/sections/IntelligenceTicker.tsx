"use client";

import { motion } from "framer-motion";
import { TICKER_HEADLINES } from "@/app/data/content";

export default function IntelligenceTicker() {
  const duplicatedHeadlines = [...TICKER_HEADLINES, ...TICKER_HEADLINES, ...TICKER_HEADLINES];

  return (
    <section className="py-4 border-y border-gray-200 bg-white overflow-hidden">
      <div className="flex whitespace-nowrap" aria-hidden="true">
        <div className="flex animate-marquee">
          {duplicatedHeadlines.map((headline, index) => (
            <div key={index} className="flex items-center mx-6">
              <span className="w-1.5 h-1.5 bg-black rounded-full mr-4"></span>
              <span className="font-semibold text-sm uppercase tracking-wide">
                {headline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
