"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "intelligence",
    title: "INTELLIGENCE",
    subtitle: "AI/ML Systems",
    items: [
      "Agent Architectures",
      "LLM Fine-tuning",
      "RAG Pipelines",
      "Embedding Systems",
      "Inference Optimization",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "infrastructure",
    title: "INFRASTRUCTURE",
    subtitle: "Backend & DevOps",
    items: [
      "Real-time Systems",
      "Edge Computing",
      "API Architecture",
      "Database Design",
      "Cloud Native",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    id: "decentralization",
    title: "DECENTRALIZATION",
    subtitle: "Web3 & Blockchain",
    items: [
      "Smart Contracts",
      "DeFi Protocols",
      "Token Engineering",
      "On-chain Analytics",
      "Wallet Integration",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#00FF41] tracking-widest">
            {"//"} CORE_COMPETENCIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            What We Build
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative p-8 border border-white/5 rounded-lg bg-[#0a0a0a] transition-all duration-500 ${
                hoveredId !== null && hoveredId !== service.id
                  ? "opacity-30"
                  : "opacity-100"
              } ${hoveredId === service.id ? "border-[#00FF41]/30" : ""}`}
            >
              <div className="text-[#00FF41] mb-6">{service.icon}</div>

              <span className="font-mono text-xs text-white/40 tracking-widest">
                {service.subtitle}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-6">{service.title}</h3>

              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + itemIndex * 0.05 }}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00FF41]/50 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
