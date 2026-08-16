import { NextResponse } from "next/server";
import {
  COMPANY_NAME,
  HERO,
  SERVICES,
  PROCESS,
  CASE_STUDIES,
  FOUNDER,
  SITE,
} from "@/app/data/content";

export async function GET() {
  const markdown = `
# ${COMPANY_NAME}

> ${HERO.headline}

${HERO.subheadline}

---

## Services

${SERVICES.map((s) => `### ${s.title}
${s.description}`).join("\n\n")}

---

## How working together goes

${PROCESS.map((step) => `### ${step.title}
${step.description}`).join("\n\n")}

---

## Case Studies

${CASE_STUDIES.map(
  (cs) => `### ${cs.title} (${cs.status})
**${cs.tagline}**

${cs.summary}

Role: ${cs.role}
Stack: ${cs.stack.join(", ")}
${cs.liveUrl ? `Live: ${cs.liveUrl}` : ""}

Outcomes:
${cs.outcomes.map((o) => `- ${o}`).join("\n")}

Full case study: ${SITE.url}/work/${cs.slug}`
).join("\n\n")}

---

## Founder: ${FOUNDER.name}

${FOUNDER.bio}

### Connect

${FOUNDER.socials.map((social) => `- [${social.label}](${social.href})`).join("\n")}
- Email: ${SITE.email}
`.trim();

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
