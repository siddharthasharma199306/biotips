// components/AnimatedCounter.tsx

"use client";

import { animate, motion, useInView, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  to: number;
  suffix?: string;
  duration?: number;
};

const AnimatedCounter = ({
  to,
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, duration, isInView, to]);

  return (
    <motion.span
      ref={ref}
      className="text-4xl font-bold text-primary lg:text-5xl"
    >
      {displayValue}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
