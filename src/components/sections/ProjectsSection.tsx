"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { BlurImage } from "@/components/ui/BlurImage";
import { Magnetic } from "@/components/ui/MagneticButton";
import { fadeUp, scaleIn, staggerContainer, VIEWPORT_TALL } from "@/lib/motion";
import { FaExternalLinkAlt, FaLock } from "react-icons/fa";

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <div className="max-w-7xl mx-auto md:px-0">
        <SectionHeader title="Featured Work." />

        <div className="space-y-28 md:space-y-40">
          {PORTFOLIO_DATA.projects.map((project, index: number) => {
            const isEven = index % 2 === 0;
            const link = "link" in project ? project.link : undefined;
            const isConfidential = "isConfidential" in project && project.isConfidential;

            return (
              <motion.div
                key={index}
                variants={staggerContainer(0.12)}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_TALL}
                className={`group relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-0`}
              >
                {/* Background Large Index */}
                <motion.span
                  variants={fadeUp}
                  className={`select-none-deco absolute -top-14 md:-top-20 ${isEven ? '-left-2 md:-left-6' : '-right-2 md:-right-6'} font-display text-[7rem] md:text-[12rem] lg:text-[14rem] font-bold text-outline pointer-events-none tracking-tighter leading-none`}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </motion.span>

                {/* Project Image Container */}
                <motion.div variants={scaleIn} className="w-full md:w-[62%] relative">
                  <div className="relative overflow-hidden rounded-3xl aspect-video border border-indigo/25 shadow-[0_30px_80px_-30px_rgba(99,49,251,0.6)] bg-surface group-hover:border-indigo/60 transition-colors duration-700">
                    <BlurImage
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 62vw"
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04]"
                    />
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-onyx/90 via-indigo/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Floating Content Card (Liquid Glass) */}
                <motion.div
                  variants={fadeUp}
                  className={`w-full md:w-[46%] lg:w-[44%] md:absolute ${isEven ? 'md:right-0 lg:-right-6' : 'md:left-0 lg:-left-6'} z-30`}
                >
                  <GlassCard
                    variant="liquid"
                    tilt
                    className="p-6 md:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-indigo/50 transition-colors duration-700"
                  >
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="text-indigo-soft font-mono text-xs mb-3 font-bold uppercase tracking-[0.2em]">{project.company}</p>
                          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-[-0.04em] leading-none mb-3">
                            {project.title}
                          </h3>
                          <p className="text-mint font-mono text-xs md:text-sm font-bold tracking-tight mb-4">{project.tagline}</p>
                        </div>
                      </div>

                      <p className="text-neutral-200 text-[15px] md:text-base leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Integrated Tech Dock */}
                      <div className="space-y-3 pt-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Built With</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech: string, i: number) => (
                            <span
                              key={i}
                              className={`px-3 py-1.5 text-[11px] font-mono font-bold rounded-full border transition-all duration-300 cursor-default ${/AI|Gemini/.test(tech) ? "text-mint bg-mint/10 border-mint/30" : "text-indigo-soft bg-indigo/10 border-indigo/25 hover:border-indigo/60 hover:bg-indigo/20"}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {link && (
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <div className="w-full sm:w-auto">
                            {isConfidential || link === "#" ? (
                              <button
                                disabled
                                className="w-full sm:w-auto px-10 py-4 bg-indigo/10 text-indigo-soft/70 font-black uppercase tracking-widest text-[11px] rounded-full flex items-center justify-center gap-2 cursor-not-allowed border border-indigo/20"
                              >
                                NDA Protected
                                <FaLock className="w-3 h-3" />
                              </button>
                            ) : (
                              <Magnetic strength={0.2}>
                                <a href={link} target="_blank" rel="noreferrer" className="block w-full sm:w-auto">
                                  <button className="w-full sm:w-auto px-10 py-4 bg-mint hover:bg-white text-onyx font-black uppercase tracking-widest text-[11px] transition-all flex items-center justify-center gap-2 rounded-full group/btn shadow-[0_0_25px_var(--primary-glow)]">
                                    Live Demo
                                    <FaExternalLinkAlt className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                  </button>
                                </a>
                              </Magnetic>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Interaction hint */}
                      <div className="hidden md:flex items-center gap-2 text-neutral-500 text-[10px] uppercase tracking-widest font-black mt-4">
                        <div className="h-px w-8 bg-indigo/40" />
                        <span>Case Study Overview</span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
