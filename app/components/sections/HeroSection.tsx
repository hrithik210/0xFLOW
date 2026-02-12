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
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8 font-mono text-xs uppercase tracking-widest">
          <span>{HERO_CONTENT.masthead.issue}</span>
          <span>{currentDate}</span>
          <span>{HERO_CONTENT.masthead.location}</span>
        </div>

        {/* Masthead Title */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] leading-[0.8] font-black font-serif tracking-tighter text-black mb-4"
          >
            {COMPANY_NAME}
          </motion.h1>
          <div className="border-t border-b border-black py-2 mb-12">
            <p className="text-center font-serif italic text-lg md:text-xl">
              "{HERO_CONTENT.masthead.quote}"
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
                {HERO_CONTENT.leadStory.label}
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                {HERO_CONTENT.leadStory.title}
              </h2>
              <div className="flex gap-4 font-mono text-xs text-gray-500 mb-8 items-center">
                <span className="uppercase tracking-widest">By {HERO_CONTENT.leadStory.author}</span>
                <span className="w-12 h-px bg-gray-300"></span>
                <span>{HERO_CONTENT.leadStory.readTime}</span>
              </div>
              
              <div className="prose prose-lg font-serif text-gray-700 leading-relaxed md:columns-2 gap-8">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                  {HERO_CONTENT.leadStory.content[0]}
                </p>
                {HERO_CONTENT.leadStory.content.slice(1).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
                {HERO_CONTENT.sidebar.title}
              </h3>
              <ul className="space-y-6">
                {HERO_CONTENT.sidebar.items.map((item, index) => (
                  <li key={index} className="group cursor-pointer">
                    <span className="text-gray-400 font-mono text-xs block mb-1">{item.page}</span>
                    <h4 className="font-serif text-xl font-bold group-hover:underline">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 p-6 text-center">
              <h4 className="font-serif text-2xl font-bold mb-2">{HERO_CONTENT.cta.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{HERO_CONTENT.cta.subtitle}</p>
              <a href={HERO_CONTENT.cta.link} className="inline-block border border-black px-6 py-2 text-sm font-bold hover:bg-black hover:text-white transition-colors uppercase tracking-widest">
                {HERO_CONTENT.cta.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
