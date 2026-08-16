import { PROCESS } from "@/app/data/content";

export default function ProcessSection() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">How working together goes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {PROCESS.map((step) => (
            <div key={step.title}>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
