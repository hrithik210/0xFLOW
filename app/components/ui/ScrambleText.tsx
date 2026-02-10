"use client";

import { useScramble } from "use-scramble";
import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  tick?: number;
  step?: number;
  scramble?: number;
  seed?: number;
  chance?: number;
  overdrive?: boolean;
  overflow?: boolean;
}

export default function ScrambleText({
  text,
  className = "",
  speed = 0.6,
  tick = 1,
  step = 1,
  scramble = 4,
  seed = 2,
  chance = 0.8,
  overdrive = true,
  overflow = true,
}: ScrambleTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, replay } = useScramble({
    text: isVisible ? text : "",
    speed,
    tick,
    step,
    scramble,
    seed,
    chance,
    overdrive,
    overflow,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      replay();
    }
  }, [isVisible, replay]);

  return <span ref={ref} className={className} />;
}
