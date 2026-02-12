"use client";

import { motion } from "framer-motion";
import { SYSTEMS_PROJECTS } from "@/app/data/content";

export default function SystemsGrid() {
  return (
    <section id="systems" className="py-24 px-6 border-b border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-16 border-b-2 border-black pb-4">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-tight">
            Feature Stories
          </h2>
          <span className="flex-grow ml-4 h-px bg-gray-300"></span>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {SYSTEMS_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pb-16 border-b border-gray-200 last:border-0 grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs font-bold uppercase border border-black px-2 py-1 inline-block mb-4">
                  {project.subtitle}
                </span>
                <div className="font-serif text-sm italic text-gray-500">
                  Project ID: {project.id}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-mono text-gray-400 uppercase">#{tag}</span>
                   ))}
                </div>
              </div>
              
              <div className="md:col-span-9">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 hover:underline cursor-pointer">
                  {project.headline}
                </h3>
                <p className="font-serif text-xl text-gray-600 leading-relaxed max-w-3xl mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-red-600 font-bold uppercase animate-pulse">
                    ● {project.status}
                  </span>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white px-2 transition-colors">
                    Read Case Study
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
