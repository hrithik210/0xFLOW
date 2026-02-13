"use client";

import { motion } from "framer-motion";
import { FOUNDER_CONTENT } from "@/app/data/content";

export default function FounderSection() {
  return (
    <section id="founder" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">
            "{FOUNDER_CONTENT.quote}"
          </p>
          <div className="text-lg font-semibold">{FOUNDER_CONTENT.name}</div>
          <div className="text-gray-600">{FOUNDER_CONTENT.title}</div>
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
              className="px-6 py-3 border-2 border-gray-300 rounded-full font-semibold hover:border-black hover:bg-black hover:text-white transition-all"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
