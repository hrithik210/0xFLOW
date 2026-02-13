"use client";

import { motion } from "framer-motion";
import { SYSTEMS_PROJECTS } from "@/app/data/content";

const STATUS_STYLES = {
  LIVE: "bg-green-100 text-green-700 border-green-200",
  BETA: "bg-blue-100 text-blue-700 border-blue-200",
  SHIPPED: "bg-purple-100 text-purple-700 border-purple-200",
  ALPHA: "bg-orange-100 text-orange-700 border-orange-200",
};

export default function SystemsGrid() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Recent Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Production systems serving real users
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SYSTEMS_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-black transition-all cursor-pointer hover:shadow-lg"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm text-gray-500 font-medium">
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
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Case Study</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
