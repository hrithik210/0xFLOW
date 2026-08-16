"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/app/data/content";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="text-2xl font-black tracking-tight text-white">
            <Image src="/logo1.png" alt={SITE.name} width={112} height={32} className="h-7 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#work" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/#services" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/#founder" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </div>

          <a
            href={SITE.calLink}
            className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-all"
          >
            {SITE.ctaLabel}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
