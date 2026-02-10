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
  return (
    <html lang="en" className="light">
      <body className={`${spaceMono.variable} ${playfair.variable} antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
