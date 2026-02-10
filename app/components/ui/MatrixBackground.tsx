"use client";

import { useEffect, useRef } from "react";

interface MatrixBackgroundProps {
  className?: string;
  opacity?: number;
}

export default function MatrixBackground({
  className = "",
  opacity = 0.05,
}: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars = "0123456789ABCDEF";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = `rgba(5, 5, 5, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
      ctx.font = `${fontSize}px "Space Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
      style={{ opacity: 1 }}
    />
  );
}
