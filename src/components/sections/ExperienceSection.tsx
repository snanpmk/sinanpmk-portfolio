"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { FaBriefcase, FaCode, FaChalkboardTeacher, FaExternalLinkAlt } from "react-icons/fa";

const roleIcons: Record<string, any> = {
  "Frontend Engineer": FaCode,
  "Frontend Web Developer": FaBriefcase,
  "Tutor": FaChalkboardTeacher,
};

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <SectionHeader title="Experience." />

        <div className="space-y-4">
          {PORTFOLIO_DATA.experience.map((exp, index) => {
            const Icon = roleIcons[exp.role] || FaBriefcase;
            const isFirst = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-0 md:gap-8 items-stretch">
                  {/* Serial Number & Vertical Path */}
                  <div className="relative flex flex-row md:flex-col items-center md:items-start pt-4 md:pt-8 gap-4 md:gap-0">
                    <span className="text-4xl md:text-5xl font-black text-white/10 group-hover:text-primary/20 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-12 md:h-full md:w-px bg-white/5 md:ml-6 mt-0 md:mt-4 group-hover:bg-primary/30 transition-colors" />
                  </div>

                  {/* Main Content Slab */}
                  <div className="relative py-4 md:py-8">
                    <GlassCard
                      variant="liquid"
                      className="rounded-2xl md:rounded-3xl p-6 md:p-10 transition-all duration-700"
                    >
                      {/* Top Bar */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                              {exp.role}
                            </h3>
                            {isFirst && (
                              <span className="px-2 py-1 text-[9px] font-black bg-primary text-black rounded-sm tracking-widest">
                                CURRENT
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-neutral-300 font-medium">
                            <span className="flex items-center gap-2">
                              <Icon className="text-primary" />
                              {(exp as any).link ? (
                                <a
                                  href={(exp as any).link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                  {exp.company}
                                  <FaExternalLinkAlt className="text-[10px] text-neutral-400 group-hover:text-primary/70 transition-colors" />
                                </a>
                              ) : (
                                exp.company
                              )}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-neutral-700 hidden md:block" />
                            <span className="text-sm font-mono text-neutral-400">{exp.duration}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-black">{exp.location}</p>
                        </div>
                      </div>

                      {/* Description List */}
                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
                        <ul className="space-y-4">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                              <p className="text-neutral-200 leading-relaxed text-[15px] font-normal">
                                {desc}
                              </p>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Dock */}
                        <div className="space-y-4">
                          <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Tech Ecosystem</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 text-[11px] font-mono font-bold text-primary bg-primary/10 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Accent Corner Glow */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                    </GlassCard>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionContainer>
  );
}

