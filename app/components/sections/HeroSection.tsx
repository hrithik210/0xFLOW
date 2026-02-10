"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="relative pt-12 pb-12 border-b-4 border-black border-double">
      <div className="max-w-7xl mx-auto px-6">
        {/* Masthead Meta */}
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8 font-mono text-xs uppercase tracking-widest">
          <span>Vol. 1, Issue 01</span>
          <span>{currentDate}</span>
          <span>Silicon Valley &middot; Global</span>
        </div>

        {/* Masthead Title */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] leading-[0.8] font-black font-serif tracking-tighter text-black mb-4"
          >
            0xFLOW
          </motion.h1>
          <div className="border-t border-b border-black py-2 mb-12">
            <p className="text-center font-serif italic text-lg md:text-xl">
              "The Intelligence Age is Here."
            </p>
          </div>
        </div>

        {/* Hero Content - Newspaper Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-200 pb-12">
          {/* Main Story */}
          <div className="md:col-span-8 md:border-r md:border-gray-200 md:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="font-mono text-xs bg-black text-white px-2 py-1 mb-4 inline-block">
                LEAD STORY
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                Engineering Velocity in the Age of Autonomy
              </h2>
              <div className="flex gap-4 font-mono text-xs text-gray-500 mb-8 items-center">
                <span className="uppercase tracking-widest">By Hrithik Nayak</span>
                <span className="w-12 h-px bg-gray-300"></span>
                <span>5 Min Read</span>
              </div>
              
              <div className="prose prose-lg font-serif text-gray-700 leading-relaxed md:columns-2 gap-8">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                  We are witnessing a fundamental shift in how software is conceived and constructed.
                  Traditional development cycles are obsolete. The new standard is fluid, adaptive, and
                  powered by autonomous intelligence.
                </p>
                <p>
                  0xFLOW exists to bridge this gap. We don't just write code; we architect systems
                  that think, learn, and evolve. From rapid MVP deployment to full-scale AI agent swarms,
                  our mission is to deliver engineering velocity that feels like magic.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                 <a href="#capabilities" className="font-bold text-lg hover:underline decoration-2 underline-offset-4">
                   Continue Reading &rarr;
                 </a>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="mb-12">
              <h3 className="font-sans font-bold text-sm uppercase tracking-widest border-b-2 border-black pb-2 mb-4">
                In This Issue
              </h3>
              <ul className="space-y-6">
                <li className="group cursor-pointer">
                  <span className="text-gray-400 font-mono text-xs block mb-1">P. 02</span>
                  <h4 className="font-serif text-xl font-bold group-hover:underline">The Death of Static Code</h4>
                  <p className="text-sm text-gray-500 mt-1">Why dynamic systems are taking over.</p>
                </li>
                <li className="group cursor-pointer">
                  <span className="text-gray-400 font-mono text-xs block mb-1">P. 05</span>
                  <h4 className="font-serif text-xl font-bold group-hover:underline">Agent Swarms 101</h4>
                  <p className="text-sm text-gray-500 mt-1">Orchestrating intelligence at scale.</p>
                </li>
                <li className="group cursor-pointer">
                  <span className="text-gray-400 font-mono text-xs block mb-1">P. 08</span>
                  <h4 className="font-serif text-xl font-bold group-hover:underline">The 0xFLOW Manifesto</h4>
                  <p className="text-sm text-gray-500 mt-1">Our principles for building the future.</p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 text-center">
              <h4 className="font-serif text-2xl font-bold mb-2">Start a Project</h4>
              <p className="text-sm text-gray-600 mb-4">Ready to engineer the impossible?</p>
              <a href="mailto:hello@0xflow.dev" className="inline-block border border-black px-6 py-2 text-sm font-bold hover:bg-black hover:text-white transition-colors uppercase tracking-widest">
                Contact Office
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
