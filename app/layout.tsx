import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
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
  title: "0xFLOW | Fluid Intelligence",
  description: "Engineering velocity for the next generation of systems. MVP development, automations, and AI solutions.",
  keywords: ["AI agency", "Intelligence", "Software Development", "MVP", "0xFLOW"],
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
            <div className="ambient-glow" style={{ top: '-10%', left: '-10%', opacity: 0.4 }}></div>
            <div className="ambient-glow" style={{ bottom: '-10%', right: '-10%', opacity: 0.3, background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(5, 5, 5, 0) 70%)' }}></div>
        </div>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
