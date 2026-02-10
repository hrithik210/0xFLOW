"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface MinimalButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function MinimalButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: MinimalButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide border transition-all duration-200";
    
  const variants = {
    primary: "bg-black text-white border-black hover:bg-white hover:text-black",
    secondary: "bg-transparent text-black border-black/20 hover:border-black",
  };

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
