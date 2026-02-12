import type { Metadata } from "next";
import { Space_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./providers/SmoothScrollProvider";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "0xFLOW | The Intelligence Age",
  description: "The premier publication and agency for the autonomous era. Engineering velocity for the next generation of systems.",
  keywords: ["AI agency", "Intelligence", "Newspaper", "Autonomous Systems", "0xFLOW"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Agency",
    "name": "0xFLOW",
    "url": "https://0xflow.dev",
    "logo": "https://0xflow.dev/logo.png",
    "description": "The premier publication and agency for the autonomous era.",
    "founder": {
      "@type": "Person",
      "name": "Hrithik Nayak",
      "jobTitle": "Editor-in-Chief & Lead Architect"
    },
    "sameAs": [
      "https://github.com",
      "https://twitter.com",
      "https://linkedin.com"
    ]
  };

  return (
    <html lang="en" className="light">
      <body className={`${spaceMono.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
