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
        className="max-w-7xl mx-auto md:px-12 text-left"
      >
        <SectionHeader title="About Me." />
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 mt-12 items-start">
          <GlassCard 
            variant="liquid"
            className="p-8 md:p-12 backdrop-blur-md"
          >
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-primary font-mono text-xs font-black uppercase tracking-widest">Identity</p>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">Frontend Developer.</h3>
              </div>
              
              <div className="space-y-6 text-neutral-200 text-lg leading-relaxed font-normal">
                {about.summary.map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))}
                <p className="text-neutral-400 text-base font-medium border-l-2 border-primary/20 pl-4">
                  {about.specialization}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-wrap gap-12">
                <div>
                  <p className="text-white font-black text-xs uppercase tracking-widest mb-2 opacity-50">Current Focus</p>
                  <p className="text-primary text-base font-bold">Production-Grade React Systems</p>
                </div>
                <div>
                  <p className="text-white font-black text-xs uppercase tracking-widest mb-2 opacity-50">Looking For</p>
                  <p className="text-white text-base font-bold">{about.lookingFor}</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="flex flex-col gap-6 w-full lg:min-w-[320px]">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] opacity-40 pl-2">Engineering Principles</h4>
            <div className="flex flex-col gap-4">
              {about.principles.map((principle, index) => {
                const Icon = principleIcons[principle] || FaCheckCircle;
                return (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard 
                      variant="liquid" 
                      className="p-5 flex items-center gap-5 border-white/5 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-white font-black text-sm tracking-tight uppercase">{principle}</span>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
