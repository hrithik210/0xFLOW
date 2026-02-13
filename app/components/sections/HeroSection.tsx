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
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Headline */}
        <div className="mb-8 h-[200px] md:h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tight"
            >
              {HEADERS[currentIndex]}
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
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed"
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
            className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-black text-black text-lg font-semibold rounded-full hover:bg-gray-50 transition-all"
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
            <div className="text-2xl font-bold text-black">6+</div>
            <div>Production systems</div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-black">Fast</div>
            <div>Time to market</div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-black">Modern</div>
            <div>Tech stack</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
