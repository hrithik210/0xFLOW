"use client";

import { motion } from "framer-motion";
import { HERO } from "@/app/data/content";

export default function HeroSection() {
  return (
    <section className="px-6 pt-44 md:pt-52 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-white max-w-3xl">
            {HERO.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
            {HERO.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href={HERO.primaryCta.href}
              className="px-7 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-center"
            >
              {HERO.primaryCta.label}
            </a>
            <a
              href={HERO.secondaryCta.href}
              className="px-7 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors text-center"
            >
              {HERO.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
