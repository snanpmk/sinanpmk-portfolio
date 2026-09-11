"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, scaleIn, staggerContainer, VIEWPORT } from "@/lib/motion";
import { FaCheckCircle, FaRocket, FaCode, FaDraftingCompass, FaCube, FaUniversalAccess } from "react-icons/fa";
import type { IconType } from "react-icons";

const principleIcons: Record<string, IconType> = {
  "Performance": FaRocket,
  "Architecture": FaDraftingCompass,
  "Clean Code": FaCode,
  "Accessibility": FaUniversalAccess,
  "SSR / SSG": FaRocket,
  "Code Splitting": FaCube,
  "Clean State": FaCube,
};

export function AboutSection() {
  const about = PORTFOLIO_DATA.about;

  return (
    <SectionContainer id="about">
      <div className="max-w-7xl mx-auto md:px-12">
        <SectionHeader title="About Me." />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.div variants={scaleIn}>
            <GlassCard
              variant="liquid"
              interactive
              className="p-8 md:p-12 backdrop-blur-md text-left"
            >
              <motion.div
                variants={staggerContainer(0.1)}
                className="space-y-6 text-neutral-200 text-[length:var(--text-fluid-lead)] leading-relaxed font-normal"
              >
                {about.summary.map((paragraph: string, i: number) => (
                  <motion.p key={i} variants={fadeUp}>{paragraph}</motion.p>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 pt-8 border-t border-white/5">
                <div className="flex flex-wrap gap-x-8 gap-y-6 items-start">
                  <div className="flex-1 min-w-[200px]">
                    <p className="text-white font-black text-xs uppercase tracking-widest mb-2 opacity-50">Looking For</p>
                    <p className="text-white text-base font-bold">{about.lookingFor}</p>
                  </div>

                  <div className="flex-1 min-w-[250px]">
                    <p className="text-white font-black text-xs uppercase tracking-widest mb-3 opacity-50">Core Strengths</p>
                    <div className="flex flex-wrap gap-2">
                      {about.principles.map((principle) => {
                        const Icon = principleIcons[principle] || FaCheckCircle;
                        return (
                          <div
                            key={principle}
                            className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-primary/15 hover:bg-primary/20 hover:border-primary/40 transition-colors duration-300"
                          >
                            <Icon className="w-3 h-3" />
                            {principle}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
