"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel border-b-0" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-tight text-white">
            0xFLOW
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#projects" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              Work
            </Link>
            <Link href="#founder" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </div>

          {/* CTA */}
          <a
            href="mailto:hello@0xflow.dev"
            className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
