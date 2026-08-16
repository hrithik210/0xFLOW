import { FINAL_CTA, SITE } from "@/app/data/content";
import CopyEmailButton from "../CopyEmailButton";

export default function CTASection() {
  return (
    <section className="px-6 py-12 pb-24">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-12">
        <h2 className="text-3xl md:text-4xl font-black text-white max-w-2xl">
          {FINAL_CTA.headline}
        </h2>
        <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl">{FINAL_CTA.body}</p>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <a
            href={SITE.calLink}
            className="px-7 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-center"
          >
            {SITE.ctaLabel}
          </a>
          <div className="text-sm text-gray-500">
            or write to me: <CopyEmailButton />
          </div>
        </div>
      </div>
    </section>
  );
}
