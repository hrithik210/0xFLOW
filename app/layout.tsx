import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScrollProvider from "./providers/SmoothScrollProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oxflow.studio"),
  title: "0xFLOW | Founder-led product studio",
  description:
    "0xFLOW takes products from validated idea to production, end to end: full-stack builds, AI systems, internal tools, and workflow automation.",
  openGraph: {
    images: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans relative">
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="ambient-glow" style={{ top: "-10%", left: "-10%", opacity: 0.25 }}></div>
        </div>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
