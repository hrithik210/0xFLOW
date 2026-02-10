"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className = "", hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
      className={`
        relative overflow-hidden
        bg-white/[0.03] backdrop-blur-xl
        border border-white/[0.05]
        shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
        rounded-2xl
        transition-colors duration-500
        hover:bg-white/[0.05] hover:border-white/[0.1]
        hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative z-10 p-6 md:p-8 h-full">
        {children}
      </div>
    </motion.div>
  );
}
