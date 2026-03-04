"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaCheckCircle, FaRocket, FaCode, FaDraftingCompass, FaCube, FaUniversalAccess } from "react-icons/fa";

export function AboutSection() {
  const principleIcons: Record<string, any> = {
    "Performance": FaRocket,
    "Architecture": FaDraftingCompass,
    "Clean Code": FaCode,
    "Accessibility": FaUniversalAccess,
    "SSR / SSG": FaRocket,
    "Code Splitting": FaCube,
    "Clean State": FaCube,
  };

  const about = PORTFOLIO_DATA.about;

  return (
    <SectionContainer id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto md:px-12 text-center"
      >
        <SectionHeader title="About Me." />

        <GlassCard
          variant="liquid"
          className="p-8 md:p-12 backdrop-blur-md mt-12 text-left"
        >
          <div className="space-y-6 text-neutral-200 text-lg leading-relaxed font-normal">
            {about.summary.map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
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
                      <div key={principle} className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        <Icon className="w-3 h-3" />
                        {principle}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </SectionContainer>
  );
}
