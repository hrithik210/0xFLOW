"use client";

import { motion } from "framer-motion";
import { FOUNDER_CONTENT } from "@/app/data/content";

export default function FounderSection() {
  return (
    <section id="founder" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 glass-panel p-12 rounded-3xl"
        >
          <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-8 text-white">
            "{FOUNDER_CONTENT.quote}"
          </p>
          <div className="text-lg font-semibold text-blue-400">{FOUNDER_CONTENT.name}</div>
          <div className="text-gray-400">{FOUNDER_CONTENT.title}</div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-8"
        >
          {FOUNDER_CONTENT.socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 rounded-full font-semibold text-white hover:bg-white hover:text-black transition-all"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
