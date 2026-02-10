"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 255, 65, 0.15)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`
  );

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{ background }}
      />
      {children}
    </motion.div>
  );
}
