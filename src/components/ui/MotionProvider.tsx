"use client";

import { MotionConfig } from "framer-motion";
import { EASE, DUR } from "@/lib/motion";

/**
 * Global motion defaults.
 *
 * `reducedMotion="user"` makes every framer-motion animation in the tree honour the
 * OS "reduce motion" setting, so individual components don't each need a guard.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: DUR.base, ease: EASE.out }}>
      {children}
    </MotionConfig>
  );
}
