"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function TerminalButton({
  children,
  onClick,
  href,
  className = "",
  variant = "primary",
}: TerminalButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center
    px-8 py-4 font-mono text-sm uppercase tracking-widest
    border transition-all duration-300 cursor-pointer
    overflow-hidden group
  `;

  const variantStyles = {
    primary: `
      border-[#00FF41] text-[#00FF41] bg-transparent
      hover:bg-[#00FF41]/10 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]
    `,
    secondary: `
      border-[#FAFF00] text-[#FAFF00] bg-transparent
      hover:bg-[#FAFF00]/10 hover:shadow-[0_0_20px_rgba(250,255,0,0.3)]
    `,
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{
          background: [
            "linear-gradient(90deg, transparent 0%, rgba(0,255,65,0.1) 50%, transparent 100%)",
          ],
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
