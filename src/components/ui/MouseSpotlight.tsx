"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from "framer-motion";

/**
 * Cursor-following ambient light.
 *
 * Position is held in motion values rather than React state, so moving the mouse
 * never re-renders the tree — framer-motion writes the gradient straight to the
 * node. Only mounts on devices that actually have a hovering pointer.
 */
export function MouseSpotlight() {
  const [hasPointer, setHasPointer] = useState(false);
  const prefersReduced = useReducedMotion();

  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const smoothX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasPointer(mq.matches);

    const onChange = (e: MediaQueryListEvent) => setHasPointer(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!hasPointer || prefersReduced) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [hasPointer, prefersReduced, x, y]);

  const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, var(--glow-cursor), transparent 80%)`;

  if (!hasPointer || prefersReduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30"
      style={{ background }}
    />
  );
}
