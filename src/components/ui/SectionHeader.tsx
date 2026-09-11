"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/RevealText";
import { fadeUp, staggerContainer, VIEWPORT, DUR, EASE } from "@/lib/motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`flex flex-col mb-16 md:mb-24 text-left ${className}`}
    >
      <RevealText inheritVariants>
        <h2 className="text-[length:var(--text-fluid-heading)] font-extrabold tracking-tighter text-white mb-2">
          {title}
        </h2>
      </RevealText>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-primary font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Rule draws itself outward from the left. */}
      <motion.div
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: DUR.slow, ease: EASE.out } },
        }}
        className="h-1 w-20 origin-left bg-linear-to-r from-primary to-primary/30 rounded-full"
      />
    </motion.div>
  );
}
