"use client";

import { motion } from "framer-motion";
import { COMPANY_NAME, HERO_CONTENT } from "@/app/data/content";

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
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
          <span>{HERO_CONTENT.masthead.issue}</span>
          <span>{currentDate}</span>
          <span>{HERO_CONTENT.masthead.location}</span>
        </div>

        {/* Masthead Title */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-7xl md:text-[9rem] leading-none font-black font-serif tracking-tighter text-black mb-6"
          >
            {COMPANY_NAME}
          </motion.h1>
          <div className="border-t border-b border-black py-3 mb-16">
            <p className="text-center font-serif italic text-xl md:text-2xl text-gray-800">
              "{HERO_CONTENT.masthead.quote}"
            </p>
          </div>
        </div>

        {/* Hero Content - Newspaper Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 border-b border-gray-200 pb-16">
          {/* Main Story */}
          <div className="md:col-span-8 md:border-r md:border-gray-200 md:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
            >
              <span className="font-mono text-xs bg-black text-white px-2 py-1 mb-6 inline-block tracking-wider">
                {HERO_CONTENT.leadStory.label}
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-[1.1] text-balance">
                {HERO_CONTENT.leadStory.title}
              </h2>
              <div className="flex gap-4 font-mono text-xs text-gray-500 mb-10 items-center border-t border-b border-gray-100 py-3">
                <span className="uppercase tracking-widest font-bold text-black">By {HERO_CONTENT.leadStory.author}</span>
                <span className="w-px h-4 bg-gray-300"></span>
                <span>{HERO_CONTENT.leadStory.readTime}</span>
              </div>
              
              <div className="prose prose-xl font-serif text-gray-800 leading-relaxed md:columns-2 gap-12">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-4 first-letter:mt-[-12px]">
                  {HERO_CONTENT.leadStory.content[0]}
                </p>
                {HERO_CONTENT.leadStory.content.slice(1).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-gray-200">
                 <a href="#capabilities" className="group flex items-center gap-2 font-bold text-lg">
                   <span className="group-hover:underline decoration-2 underline-offset-4">Continue Reading</span>
                   <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                 </a>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="mb-16">
              <h3 className="font-sans font-bold text-sm uppercase tracking-widest border-b-2 border-black pb-3 mb-6">
                {HERO_CONTENT.sidebar.title}
              </h3>
              <ul className="space-y-8">
                {HERO_CONTENT.sidebar.items.map((item, index) => (
                  <li key={index} className="group cursor-pointer">
                    <span className="text-gray-400 font-mono text-xs block mb-2">{item.page}</span>
                    <h4 className="font-serif text-2xl font-bold group-hover:underline leading-tight mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.subtitle}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 p-8 text-center border border-gray-200">
              <h4 className="font-serif text-3xl font-bold mb-3">{HERO_CONTENT.cta.title}</h4>
              <p className="text-sm text-gray-600 mb-6 font-medium">{HERO_CONTENT.cta.subtitle}</p>
              <a href={HERO_CONTENT.cta.link} className="inline-block bg-black text-white border border-black px-8 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors uppercase tracking-widest">
                {HERO_CONTENT.cta.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
