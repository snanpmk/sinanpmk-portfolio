"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Heavy Blurred Blobs */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-15%] w-[50%] h-[50%] md:w-[60%] md:h-[60%] rounded-full bg-blue-700/8 md:bg-blue-700/12 blur-[60px] md:blur-[160px]" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.1, 0.06],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] md:w-[60%] md:h-[60%] rounded-full bg-primary/8 md:bg-primary/12 blur-[60px] md:blur-[160px]" 
      />
      
      {/* Hide this center-ish blob on mobile to keep it dark */}
      <motion.div 
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className=" md:block absolute bottom-[20%] left-[10%] w-[40%] h-[40%] rounded-full bg-blue-800/8 blur-[160px]" 
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.02)_1px,transparent_1px)] bg-size-[70px_70px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
      
      {/* Grain/Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}
