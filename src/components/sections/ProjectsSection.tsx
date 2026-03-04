"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <div className="max-w-7xl mx-auto md:px-0">
        <SectionHeader title="Featured Work." />
        
        <div className="space-y-32 md:space-y-56">
          {PORTFOLIO_DATA.projects.map((project: any, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-0`}
              >
                {/* Background Large Index */}
                <span className={`absolute -top-20 ${isEven ? 'left-0' : 'right-0'} text-[10rem] md:text-[15rem] font-black text-white/5 select-none pointer-events-none tracking-tighter`}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>

                {/* Project Image Container */}
                <div className="w-full md:w-[65%] relative group">
                  <div className="relative overflow-hidden rounded-3xl aspect-video border border-white/10 shadow-3xl bg-neutral-900 group-hover:border-emerald-500/20 transition-all duration-700">
                    {project.isConfidential ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(at_top_right,var(--tw-gradient-stops))] from-emerald-500/15 via-neutral-950 to-neutral-950 px-6 text-center">
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-emerald-500/5 flex items-center justify-center border border-emerald-500/20 mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-700 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                          <FaLock className="w-6 h-6 md:w-10 md:h-10 text-emerald-500" />
                        </div>
                        <div className="space-y-2 md:space-y-4">
                          <h4 className="text-white font-black text-lg md:text-3xl tracking-tighter uppercase font-mono">
                            Confidential Project
                          </h4>
                          <p className="text-emerald-500 font-mono text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] opacity-80">
                            Enterprise Financial Architecture
                          </p>
                          <div className="pt-2 md:pt-4">
                            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-full text-[9px] md:text-xs text-neutral-400 font-black uppercase tracking-widest border border-white/5 backdrop-blur-sm">
                              Screenshots Restricted by NDA
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, 65vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                        {/* Image Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
                      </>
                    )}
                  </div>
                </div>

                {/* Floating Content Card (Liquid Glass) */}
                <div className={`w-full md:w-[45%] md:absolute ${isEven ? 'md:-right-12' : 'md:-left-12'} z-30`}>
                  <GlassCard 
                    variant="liquid" 
                    className="p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-700"
                  >
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="text-emerald-500 font-mono text-xs mb-3 font-bold uppercase tracking-[0.2em]">{project.company}</p>
                          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-2 group-hover:text-emerald-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-emerald-400/80 font-mono text-xs md:text-sm font-bold tracking-tight mb-4">{project.tagline}</p>
                        </div>
                        {project.github && (
                          <div className="flex gap-3">
                            <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-emerald-500 hover:text-black rounded-full transition-all duration-300 border border-white/10 shrink-0">
                              <FaGithub className="w-5 h-5" />
                            </a>
                          </div>
                        )}
                      </div>

                      <p className="text-neutral-200 text-base md:text-lg leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Integrated Tech Dock */}
                      <div className="space-y-3 pt-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Built With</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech: string, i: number) => (
                            <span 
                              key={i} 
                              className="px-3 py-1.5 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/20 transition-all cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        {project.link && (
                          <div className="w-full sm:w-auto">
                            {project.isConfidential || project.link === "#" ? (
                              <button 
                                disabled
                                className="w-full sm:w-auto px-10 py-4 bg-white/5 text-neutral-500 font-black uppercase tracking-widest text-[11px] rounded-xl flex items-center justify-center gap-2 cursor-not-allowed border border-white/5 opacity-60"
                              >
                                NDA Protected
                                <FaLock className="w-3 h-3" />
                              </button>
                            ) : (
                              <a href={project.link} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-black uppercase tracking-widest text-[11px] transition-all flex items-center justify-center gap-2 rounded-xl group/btn shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                  Live Demo
                                  <FaExternalLinkAlt className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </button>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                      
                      {/* Interaction hint */}
                      <div className="hidden md:flex items-center gap-2 text-neutral-500 text-[10px] uppercase tracking-widest font-black mt-4">
                        <div className="h-px w-8 bg-neutral-800" />
                        <span>Case Study Overview</span>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
