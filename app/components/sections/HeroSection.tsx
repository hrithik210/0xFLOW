"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HEADERS = [
  "We engineer systems",
  "We ship products", 
  "We solve problems"
];

const DESCRIPTIONS = [
  "From concept to production in weeks, not months. We build scalable solutions that handle millions of users.",
  "AI-powered automation, full-stack applications, and intelligent systems that drive real business value.",
  "Modern architectures designed for growth. Clean code. Zero technical debt. Maximum impact."
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HEADERS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="max-w-6xl mx-auto text-center z-10">
        {/* Animated Headline */}
        <div className="mb-8 h-[200px] md:h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                {HEADERS[currentIndex]}
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Animated Description */}
        <div className="mb-12 h-[120px] md:h-[100px] flex items-start justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-medium leading-relaxed"
            >
              {DESCRIPTIONS[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@0xflow.dev"
            className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Start a Project
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            View Work
          </a>
        </motion.div>

        {/* Stats/Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm text-gray-500"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">6+</div>
            <div className="text-gray-400">Production systems</div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">Fast</div>
            <div className="text-gray-400">Time to market</div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">Modern</div>
            <div className="text-gray-400">Tech stack</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
