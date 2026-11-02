"use client";

import { motion } from 'framer-motion';

/**
 * Ambient light. Indigo carries the mood; a single faint mint bloom adds a
 * hint of life without competing with the mint accents in the content.
 */
export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-onyx">
      {/* Indigo aurora — top left */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="gpu absolute top-[-25%] left-[-15%] w-[70%] h-[60%] rounded-full bg-indigo/40 blur-[90px] md:blur-[170px]"
      />
      {/* Indigo — bottom right */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="gpu absolute bottom-[-20%] right-[-15%] w-[60%] h-[55%] rounded-full bg-indigo/35 blur-[90px] md:blur-[170px]"
      />
      {/* Mint — small and faint */}
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="gpu hidden md:block absolute top-[35%] right-[12%] w-[22%] h-[28%] rounded-full bg-mint blur-[160px]"
      />

      {/* Indigo grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,49,251,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(99,49,251,0.07)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_top,black_20%,transparent_75%)]" />

      {/* Grain */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}
