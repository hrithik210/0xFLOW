"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SERVICES = [
  "MVPs that ship in weeks",
  "automations that scale infinitely",
  "full-stack apps for millions",
  "AI solutions that think ahead"
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-6">
            We build{" "}
            <div className="inline-block h-[1.2em] align-bottom relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute left-0 right-0 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent"
                >
                  {SERVICES[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-medium"
        >
          We're a technical agency that transforms ideas into production-grade software.
          Fast execution. Zero compromises.
        </motion.p>

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
            href="#services"
            className="px-8 py-4 border-2 border-black text-black text-lg font-semibold rounded-full hover:bg-gray-50 transition-all"
          >
            View Services
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
            <div className="text-2xl font-bold text-black">48hrs</div>
            <div>First prototype</div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-black">4+</div>
            <div>Active products</div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-black">100%</div>
            <div>Client satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
