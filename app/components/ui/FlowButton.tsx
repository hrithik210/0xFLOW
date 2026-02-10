"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface FlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function FlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: FlowButtonProps) {
  const baseStyles =
    "relative px-8 py-4 font-mono text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 group";
  const variants = {
    primary: "text-white bg-transparent border border-[#00f0ff]/30 hover:border-[#00f0ff]",
    secondary: "text-white/70 bg-transparent border border-white/10 hover:border-white/30",
  };

  const Content = () => (
    <>
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/10 to-[#7000ff]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        <Content />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      <Content />
    </button>
  );
}
