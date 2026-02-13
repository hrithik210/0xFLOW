"use client";

import { motion } from "framer-motion";
import { CAPABILITIES } from "@/app/data/content";

export default function CapabilitiesSection() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">What we build</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
              className="group glass-card rounded-2xl p-8 hover:border-white/20 transition-all cursor-pointer hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="flex items-start gap-6">
                {/* Content */}
                <div className="flex-1">
                  <div className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">
                    {service.title}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">
                    {service.headline}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-white">
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
