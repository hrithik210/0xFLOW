import { SERVICES } from "@/app/data/content";

export default function CapabilitiesSection() {
  return (
    <section id="services" className="px-6 py-12">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">What I do</h2>
        </div>

        <div className="divide-y divide-white/10">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12 py-10 first:pt-0"
            >
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-[65ch]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
