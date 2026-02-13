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

        <div className="grid grid-cols-1 gap-24">
          {SYSTEMS_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="pb-20 border-b border-gray-200 last:border-0 grid grid-cols-1 md:grid-cols-12 gap-12 group"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs font-bold uppercase border border-black px-2 py-1 inline-block mb-4 hover:bg-black hover:text-white transition-colors cursor-default">
                  {project.subtitle}
                </span>
                <div className="font-serif text-sm italic text-gray-400 mb-2">
                  ID: {project.id}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-mono text-gray-500 uppercase bg-gray-100 px-2 py-1">#{tag}</span>
                   ))}
                </div>
              </div>
              
              <div className="md:col-span-9">
                <h3 className="font-serif text-5xl md:text-6xl font-bold mb-8 cursor-pointer group-hover:text-gray-700 transition-colors leading-[1.1]">
                  {project.headline}
                </h3>
                <p className="font-serif text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mb-8">
                  {project.description}
                </p>
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-red-600 font-bold uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                    {project.status}
                  </span>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="font-bold text-sm uppercase tracking-widest hover:underline decoration-2 underline-offset-4 transition-all">
                    Read Intelligence Brief &rarr;
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
