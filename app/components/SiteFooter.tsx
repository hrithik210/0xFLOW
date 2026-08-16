import { SITE } from "@/app/data/content";

export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-gray-400">
          <span className="font-bold text-white">{SITE.name}</span> © {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-6">
          {SITE.socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
