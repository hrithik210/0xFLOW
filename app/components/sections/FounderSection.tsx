import Image from "next/image";
import { FOUNDER } from "@/app/data/content";

export default function FounderSection() {
  return (
    <section id="founder" className="px-6 py-12">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden bg-gray-900/50">
            <Image src={FOUNDER.image} alt={FOUNDER.name} fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white">{FOUNDER.name}</h2>
            <p className="text-blue-400 font-semibold mt-1">{FOUNDER.title}</p>
            <p className="text-gray-400 leading-relaxed mt-5 max-w-[65ch]">{FOUNDER.bio}</p>
            <div className="flex flex-wrap gap-6 mt-6">
              {FOUNDER.socials.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
