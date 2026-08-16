import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, SITE } from "@/app/data/content";
import Navigation from "@/app/components/Navigation";
import CTASection from "@/app/components/sections/CTASection";
import SiteFooter from "@/app/components/SiteFooter";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | ${SITE.name}`,
    description: cs.summary,
    ...(cs.thumbnail ? { openGraph: { images: cs.thumbnail } } : {}),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <article className="px-6 pt-32 pb-12">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/#work"
              className="text-sm font-semibold text-gray-400 hover:text-white transition-colors"
            >
              Back to all work
            </Link>

            <header className="mt-8">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                {cs.title}
              </h1>
              <p className="mt-4 text-xl text-gray-300 leading-snug">{cs.tagline}</p>

              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-6 text-sm">
                <div>
                  <dt className="text-gray-500">Role</dt>
                  <dd className="text-white mt-1">{cs.role}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Timeline</dt>
                  <dd className="text-white mt-1">{cs.timeline}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Status</dt>
                  <dd className="text-white mt-1">{cs.status}</dd>
                </div>
              </dl>
            </header>

            {cs.thumbnail && (
              <div className="relative w-full aspect-video mt-10 rounded-2xl overflow-hidden bg-gray-900/50">
                <Image src={cs.thumbnail} alt={cs.title} fill className="object-cover" />
              </div>
            )}

            {cs.sections.map((section) => (
              <section key={section.heading} className="mt-12">
                <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-gray-400 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section className="mt-12 glass-panel rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white">Outcomes</h2>
              <ul className="mt-4 space-y-3">
                {cs.outcomes.map((outcome) => (
                  <li key={outcome} className="text-gray-300 leading-relaxed">
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              {cs.stack.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {cs.liveUrl && (
              <a
                href={cs.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors"
              >
                Visit {cs.title}
              </a>
            )}
          </div>
        </article>

        <CTASection />
        <SiteFooter />
      </main>
    </>
  );
}
