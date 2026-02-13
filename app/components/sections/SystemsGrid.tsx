"use client";

import { motion } from "framer-motion";
import { SYSTEMS_PROJECTS } from "@/app/data/content";
import Image from "next/image";

const STATUS_STYLES = {
  LIVE: "bg-green-500/10 text-green-400 border-green-500/20",
  BETA: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  SHIPPED: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  ALPHA: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default function SystemsGrid() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Recent Work</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Production systems serving real users
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SYSTEMS_PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Thumbnail */}
              {project.thumbnail && (
                <div className="relative w-full h-48 bg-gray-900/50 overflow-hidden border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              )}

              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm text-gray-400 font-medium">
                      {project.subtitle}
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      STATUS_STYLES[project.status as keyof typeof STATUS_STYLES]
                    }`}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 text-sm font-semibold text-blue-400">
                  <span className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    <span>View Live Demo</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
