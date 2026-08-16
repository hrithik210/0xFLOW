export const COMPANY_NAME = "0xFLOW";

export const SITE = {
  name: "0xFLOW",
  url: "https://oxflow.studio",
  email: "hrithik@oxflow.studio",
  // TODO: replace with the real Cal.com booking URL
  calLink: "https://cal.com/hrithik-qkktvp/20min",
  ctaLabel: "Book a call",
  socials: [
    { label: "GitHub", href: "https://github.com/hrithik210" },
    // TODO: replace with real profile URLs
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hrithik-b2a622259/" },
    { label: "X", href: "https://x.com/hrithik_018" },
  ],
};

export const HERO = {
  headline: "From validated idea to production, end to end.",
  subheadline:
    "0xFLOW is a founder-led studio. I scope, build, and ship your product, then keep it running in production.",
  primaryCta: { label: SITE.ctaLabel, href: SITE.calLink },
  secondaryCta: { label: "See the work", href: "#work" },
};

export const PROCESS = [
  {
    title: "Fit call",
    description:
      "Twenty minutes on what you're building. If I'm not the right person for it, I'll say so on the call.",
  },
  {
    title: "Scope and milestones",
    description:
      "A fixed scope with milestone pricing before any code. You know what ships, when, and what it costs.",
  },
  {
    title: "Build and hand off",
    description:
      "I build with regular demos, ship to production, and hand over something your team can actually run.",
  },
];

export const SERVICES = [
  {
    title: "Product builds",
    description:
      "You have a validated idea and need it real. I take it from scope to a production V1: auth, payments, AI, and the unglamorous parts that make software dependable.",
  },
  {
    title: "Internal software and AI tools",
    description:
      "Custom tools for established businesses. Software built around how your team actually works, with AI where it earns its place.",
  },
  {
    title: "Workflow automation",
    description:
      "The busywork between your tools, automated. n8n or Zapier where that is enough, owned code where it is not.",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  thumbnail?: string;
  status: string;
  role: string;
  timeline: string;
  stack: string[];
  liveUrl?: string;
  sections: { heading: string; body: string[] }[];
  outcomes: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "creator-os",
    title: "Creator OS",
    tagline: "The financial back office for creators, run over text message.",
    liveUrl:"https://creatorconcierge.cc/",
    summary:
      "As founding engineer for Everbloom, I took Creator OS from zero to production: an AI system that reads invoices, answers over SMS, and moves real money once the creator confirms.",
    // TODO: add screenshot at public/work/creator-os.png, then set thumbnail: "/work/creator-os.png"
    status: "In production",
    role: "Founding engineer, freelance for Everbloom",
    timeline: "2025 to present",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Plaid", "Twilio", "Claude"],
    sections: [
      {
        heading: "The problem",
        body: [
          "Creators run serious businesses out of a Gmail inbox. Brand-deal invoices arrive buried in email threads, payments live in a banking app, and nobody knows the real cash position on any given day.",
          "Everbloom wanted a financial back office that works where creators already are: their text messages.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "Creator OS watches a creator's inbox, reads incoming invoices with AI, and asks over SMS: studio rent invoice for $1,800, pay it? A plain-English reply pays it through Stripe.",
          "It tracks outgoing invoices too, watches the bank feed through Plaid, and closes an invoice automatically when the matching deposit lands. The AI never moves money on its own; every payment waits for the creator's explicit confirmation.",
        ],
      },
      {
        heading: "How it shipped",
        body: [
          "I joined as the founding engineer and owned the build from the first commit: product decisions, data model, banking and payments integrations, the SMS agent, and the internal dashboard the Everbloom team operates from.",
          "Along the way it replaced a pile of fragile no-code automations with owned, tested software.",
        ],
      },
    ],
    outcomes: [
      "In production, with real creators moving real money",
      "Inbox to paid invoice without leaving SMS",
      "Automatic bank reconciliation for money in and money out",
      "Replaced no-code duct tape with owned, tested software",
    ],
  },
  {
    slug: "astro-dadi",
    title: "Astro Dadi",
    tagline: "Vedic astrology with conversational depth.",
    summary:
      "My own consumer AI product, live at astrodadi.com: real Vedic birth charts computed from scratch, read to you by an AI astrologer that knows your chart.",
    // TODO: add screenshot at public/work/astro-dadi.png, then set thumbnail: "/work/astro-dadi.png"
    status: "Live",
    role: "Founder and engineer",
    timeline: "2026, live and operated",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Swiss Ephemeris", "Razorpay", "AI SDK"],
    liveUrl: "https://astrodadi.com",
    sections: [
      {
        heading: "The problem",
        body: [
          "Most astrology apps generate the same twelve horoscopes for everyone. People who take Vedic astrology seriously want readings grounded in their actual birth chart, and until now the only way to get that was a personal astrologer.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "Astro Dadi computes a real classical kundli from your birth date, time, and place, the same math a traditional astrologer works from.",
          "Then you talk to Dadi, an AI astrologer that reads your specific chart: divisional charts, dasha timelines, yogas, and doshas, in English or Hinglish. Daily readings, detailed chart views, and paid subscription plans round out the product.",
        ],
      },
      {
        heading: "How it shipped",
        body: [
          "I built and run the entire product solo: the astrology computation engine, the AI conversation layer, subscriptions and billing, and the backend that also serves the native mobile app.",
        ],
      },
    ],
    outcomes: [
      "Live at astrodadi.com with paid subscription plans",
      "Chart math verified against established reference tables",
      "One codebase serves the web app and the native mobile app",
      "Built and operated end to end by one engineer",
    ],
  },
];

export const FOUNDER = {
  name: "Hrithik Nayak",
  title: "Founder, 0xFLOW",
  // TODO: add headshot at public/hrithik.jpg
  image: "/hrithik.jpg",
  bio: "I'm an AI-first software engineer. As founding engineer for Everbloom I took Creator OS from zero to production, and I build and run Astro Dadi, my own live consumer AI product. 0xFLOW is how I do that for you: one engineer who owns the whole build, start to finish.",
  socials: SITE.socials,
};

export const FINAL_CTA = {
  headline: "Have something validated that needs building?",
  body: "Twenty minutes. Bring what you're building, and I'll tell you honestly if I'm the right person for it.",
};
