"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeUp, staggerContainer, VIEWPORT, VIEWPORT_TALL } from "@/lib/motion";
import { FaBriefcase, FaCode, FaChalkboardTeacher, FaExternalLinkAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

const roleIcons: Record<string, IconType> = {
  "Frontend Engineer": FaCode,
  "Software Developer (Frontend)": FaCode,
  "Frontend Developer": FaCode,
  "Frontend Web Developer": FaBriefcase,
  "Tutor": FaChalkboardTeacher,
};

export function ExperienceSection() {
  return (
    <SectionContainer id="experience">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Experience." />

        <div className="space-y-4">
          {PORTFOLIO_DATA.experience.map((exp, index) => {
            const Icon = roleIcons[exp.role] || FaBriefcase;
            const isFirst = index === 0;
            const link = "link" in exp ? exp.link : undefined;
            const note = "companyNote" in exp ? exp.companyNote : undefined;

            return (
              <motion.div
                key={index}
                variants={staggerContainer(0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_TALL}
                className="group relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-0 md:gap-8 items-stretch">
                  {/* Serial Number & Vertical Path */}
                  <div className="relative flex flex-row md:flex-col items-center md:items-start pt-4 md:pt-8 gap-4 md:gap-0">
                    <motion.span
                      variants={fadeUp}
                      className="select-none-deco font-display text-4xl md:text-6xl font-bold text-outline group-hover:[-webkit-text-stroke-color:var(--mint)] transition-all duration-500"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.span>
                    <div className="h-px w-12 md:h-full md:w-px bg-indigo/25 md:ml-6 mt-0 md:mt-4 group-hover:bg-indigo/60 transition-colors duration-500" />
                  </div>

                  {/* Main Content Slab */}
                  <motion.div variants={fadeUp} className="relative py-4 md:py-8">
                    <GlassCard
                      variant="liquid"
                      interactive
                      className="rounded-2xl md:rounded-3xl p-6 md:p-10 transition-all duration-700"
                    >
                      {/* Top Bar */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">
                              {exp.role}
                            </h3>
                            {isFirst && (
                              <span className="px-2.5 py-1 text-[9px] font-black bg-mint text-onyx rounded-full tracking-widest">
                                CURRENT
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-neutral-300 font-medium">
                            <span className="flex items-center gap-2">
                              <Icon className="text-indigo-soft" />
                              {link ? (
                                <a
                                  href={link}
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
                          {note && (
                            <p className="mt-2 text-xs font-mono uppercase tracking-[0.15em] text-indigo-soft/80">{note}</p>
                          )}
                        </div>

                        <div className="text-right">
                          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-black">{exp.location}</p>
                        </div>
                      </div>

                      {/* Description List */}
                      <motion.div
                        variants={staggerContainer(0.05)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                        className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12"
                      >
                        <ul className="space-y-4">
                          {exp.description.map((desc, i) => (
                            <motion.li variants={fadeUp} key={i} className="flex items-start gap-4">
                              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo shrink-0 shadow-[0_0_8px_var(--indigo)]" />
                              <p className="text-neutral-200 leading-relaxed text-[15px] font-normal">
                                {desc}
                              </p>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Tech Stack Dock */}
                        <motion.div variants={fadeUp} className="space-y-4">
                          <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Tech Ecosystem</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className={`px-3 py-1.5 text-[11px] font-mono font-bold rounded-full border transition-all duration-300 cursor-default ${/AI|Gemini/.test(tech) ? "text-mint bg-mint/10 border-mint/30" : "text-indigo-soft bg-indigo/10 border-indigo/25 hover:border-indigo/60 hover:bg-indigo/20"}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Accent Corner Glow */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo/15 rounded-full blur-3xl group-hover:bg-indigo/35 transition-all duration-700" />
                    </GlassCard>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
