"use client";

import { useState } from "react";
import Image from "next/image";

interface GlitchImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function GlitchImage({
  src,
  alt,
  width,
  height,
  className = "",
}: GlitchImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="relative z-10 grayscale transition-all duration-300"
        style={{
          filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
        }}
      />

      {isHovered && (
        <>
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            className="absolute inset-0 z-20 opacity-50"
            style={{
              filter: "grayscale(100%)",
              mixBlendMode: "multiply",
              animation: "glitch-1 0.3s infinite",
              transform: "translate(2px, -2px)",
              clipPath: "inset(10% 0 30% 0)",
            }}
          />
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            className="absolute inset-0 z-20 opacity-50"
            style={{
              filter: "hue-rotate(90deg)",
              mixBlendMode: "screen",
              animation: "glitch-2 0.3s infinite",
              transform: "translate(-2px, 2px)",
              clipPath: "inset(30% 0 10% 0)",
            }}
          />
          <div
            className="absolute inset-0 z-30 mix-blend-color-dodge opacity-30"
            style={{
              background: "linear-gradient(transparent 50%, rgba(0, 255, 65, 0.1) 50%)",
              backgroundSize: "100% 4px",
            }}
          />
        </>
      )}
    </div>
  );
}
