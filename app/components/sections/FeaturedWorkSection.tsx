"use client";

import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "@/app/data/content";

export default function FeaturedWorkSection() {
  return (
    <section id="work" className="px-6 py-12">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">Work</h2>
          <p className="mt-3 text-lg text-gray-400 max-w-xl">
            Two products, built end to end and running in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full"
            >
              {cs.thumbnail && (
                <div
                  className="relative w-full h-48 bg-gray-900/50 overflow-hidden border-b"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <Image
                    src={cs.thumbnail}
                    alt={cs.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                    {cs.title}
                    {cs.liveUrl && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(cs.liveUrl, "_blank", "noopener,noreferrer");
                        }}
                        aria-label={`Open ${cs.title} live site`}
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </button>
                    )}
                  </h3>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{cs.status}</span>
                </div>
                <p className="text-lg text-gray-300 leading-snug">{cs.tagline}</p>
                <p className="text-gray-400 leading-relaxed">{cs.summary}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {cs.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                  Read the case study
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
