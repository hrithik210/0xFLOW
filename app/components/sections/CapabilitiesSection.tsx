"use client";

import { motion } from "framer-motion";
import { CAPABILITIES, COMPANY_NAME } from "@/app/data/content";

export default function CapabilitiesSection() {
  return (
    <section className="py-24 px-6 border-b border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-12 border-b-2 border-black pb-4">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-tight">
            Opinion & Analysis
          </h2>
          <span className="flex-grow ml-4 h-px bg-gray-300"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`md:border-r border-gray-200 md:pr-12 last:border-0`}
            >
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4 block">
                {cap.title}
              </span>
              <h3 className="font-serif text-2xl font-bold mb-4 leading-tight">
                {cap.headline}
              </h3>
              <p className="font-serif text-gray-700 leading-relaxed text-justify">
                <span className="font-bold mr-1 text-black">{COMPANY_NAME} —</span>
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
