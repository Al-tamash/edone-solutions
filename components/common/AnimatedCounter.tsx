"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Create spring animation for smooth counting
  const count = useSpring(from, {
    stiffness: 50,
    damping: 30,
    restSpeed: 0.5,
  });

  // Transform count to rounded number
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      count.set(to);
      setHasAnimated(true);
    }
  }, [isInView, to, count, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
