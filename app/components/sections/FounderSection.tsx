"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  { label: "Github", href: "https://github.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function FounderSection() {
  return (
    <section id="founder" className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 grayscale border-2 border-black rounded-full overflow-hidden">
             <Image
                src="/placeholder-founder.jpg"
                alt="Hrithik Nayak"
                fill
                className="object-cover"
              />
          </div>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Hrithik Nayak
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-8 block">
          Editor-in-Chief & Lead Architect
        </span>

        <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-800 mb-12 italic">
          "The future belongs to the autonomous. We are here to document the transition and build the infrastructure that powers it."
        </p>

        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white px-2 py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="border-t border-black pt-8">
           <p className="font-mono text-xs text-gray-400 uppercase">
             San Francisco &middot; Bengaluru &middot; New York
           </p>
        </div>
      </div>
    </section>
  );
}
