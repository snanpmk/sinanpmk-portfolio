"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/RevealText";
import { fadeUp, staggerContainer, VIEWPORT, DUR, EASE } from "@/lib/motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/** Titles end with "." by convention — that period is rendered in mint. */
export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  const hasDot = title.endsWith(".");
  const text = hasDot ? title.slice(0, -1) : title;

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`flex flex-col mb-16 md:mb-24 text-left ${className}`}
    >
      <RevealText inheritVariants>
        <h2 className="font-display text-[length:var(--text-fluid-heading)] font-bold tracking-[-0.04em] text-white mb-3">
          {text}
          {hasDot && <span className="text-mint">.</span>}
        </h2>
      </RevealText>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-indigo-soft font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Indigo rule with a mint tip, drawn outward from the left. */}
      <motion.div
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: DUR.slow, ease: EASE.out } },
        }}
        className="flex items-center h-1 w-24 origin-left"
      >
        <span className="h-full flex-1 bg-indigo rounded-l-full" />
        <span className="h-full w-4 bg-mint rounded-r-full" />
      </motion.div>
    </motion.div>
  );
}
