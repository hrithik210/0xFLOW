"use client";

import { motion } from "framer-motion";
import { CAPABILITIES } from "@/app/data/content";

const ICONS = {
  "MVP Development": "⚡",
  "Intelligent Automations": "🔄",
  "Full-Stack Applications": "🌐",
  "AI & Agentic Solutions": "🤖"
};

export default function CapabilitiesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">What we build</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Production-grade solutions that scale with your business
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((service, index) => (
            <motion.div
              key={service.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-black transition-all cursor-pointer hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0">
                  {ICONS[service.headline as keyof typeof ICONS] || "●"}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {service.title}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-700 transition-colors">
                    {service.headline}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
