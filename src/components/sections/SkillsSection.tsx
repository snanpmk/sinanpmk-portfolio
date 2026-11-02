"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInLeft, scaleIn, staggerContainer, VIEWPORT } from "@/lib/motion";
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiRedux, SiReactquery, SiBootstrap, SiReactrouter, SiAxios,
  SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens,
  SiGit, SiGithub, SiGithubactions, SiDigitalocean, SiClaude, SiPostman, SiFirebase, SiRazorpay, SiTwilio
} from "react-icons/si";
import { FaLaptopCode, FaCubes } from "react-icons/fa";
import type { IconType } from "react-icons";
import { TbApi, TbSitemap, TbShieldLock, TbBroadcast, TbGauge, TbMicrophone, TbSparkles } from "react-icons/tb";
import { SiGooglegemini, SiVercel } from "react-icons/si";

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  // Languages
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCss, color: "#1572B6" },

  // Frontend
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Vite": { icon: SiVite, color: "#646CFF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Redux": { icon: SiRedux, color: "#764ABC" },
  "Redux Toolkit": { icon: SiRedux, color: "#764ABC" },
  "React Query": { icon: SiReactquery, color: "#FF4154" },
  "TanStack Query": { icon: SiReactquery, color: "#FF4154" },

  // Engineering
  "Frontend Architecture": { icon: TbSitemap, color: "#A891FF" },
  "RBAC": { icon: TbShieldLock, color: "#A891FF" },
  "Real-time UIs (SSE)": { icon: TbBroadcast, color: "#A891FF" },
  "REST API Integration": { icon: TbApi, color: "#A891FF" },
  "Performance Optimization": { icon: TbGauge, color: "#A891FF" },

  // AI
  "LLM Integration (Gemini)": { icon: SiGooglegemini, color: "#88F9C0" },
  "Speech-to-Text (Sarvam AI)": { icon: TbMicrophone, color: "#88F9C0" },
  "AI-assisted Development": { icon: TbSparkles, color: "#88F9C0" },
  "CI/CD": { icon: SiGithubactions, color: "#2088FF" },
  "Vercel": { icon: SiVercel, color: "#FFFFFF" },
  "Zustand": { icon: FaCubes, color: "#B4761C" },
  "Bootstrap": { icon: SiBootstrap, color: "#7952B3" },
  "React Router": { icon: SiReactrouter, color: "#CA4245" },
  "Axios": { icon: SiAxios, color: "#5A29E4" },
  "Responsive Design": { icon: FaLaptopCode, color: "#6366f1" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "RESTful APIs": { icon: TbApi, color: "#6366f1" },
  "JWT Authentication": { icon: SiJsonwebtokens, color: "#FFFFFF" },

  // Tools
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#FFFFFF" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "DigitalOcean": { icon: SiDigitalocean, color: "#0080FF" },
  "Claude Code": { icon: SiClaude, color: "#88F9C0" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "Razorpay": { icon: SiRazorpay, color: "#008ECC" },
  "Twilio": { icon: SiTwilio, color: "#F22F46" },
};

export function SkillsSection() {
  const categories = Object.entries(PORTFOLIO_DATA.skills);

  return (
    <SectionContainer id="skills">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Expertise." />

        <div className="space-y-24">
          {categories.map(([category, skills], ci) => (
            <div key={category} className="space-y-8">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="flex items-center gap-6"
              >
                <span className="font-mono text-xs text-indigo-soft/70">{String(ci + 1).padStart(2, "0")}</span>
                <h3 className={`font-display text-xl md:text-2xl font-bold uppercase tracking-[0.12em] whitespace-nowrap ${category.startsWith("AI") ? "text-mint" : "text-white"}`}>
                  {category}
                </h3>
                <div className="h-px w-full bg-linear-to-r from-indigo/50 to-transparent" />
              </motion.div>

              <motion.div
                variants={staggerContainer(0.03)}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {skills.map((skill: string, i: number) => {
                  const data = skillIcons[skill] || { icon: null, color: "#A891FF" };
                  const Icon = data.icon;

                  return (
                    <motion.div key={i} variants={scaleIn}>
                      <GlassCard
                        variant="liquid"
                        interactive
                        className="group/skill p-6 h-full flex flex-col items-center justify-center gap-4 hover:border-indigo/60 hover:-translate-y-1 transition-all duration-500 isolate"
                      >
                        <div
                          className="relative z-10 w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover/skill:scale-110"
                          style={{ color: data.color }}
                        >
                          {Icon ? (
                            <Icon className="w-8 h-8 md:w-10 md:h-10 filter drop-shadow-[0_0_8px_currentColor]" />
                          ) : (
                            <span className="text-2xl font-black">{skill[0]}</span>
                          )}
                        </div>

                        <p className="relative z-10 text-[10px] md:text-xs font-black uppercase tracking-widest text-neutral-400 group-hover/skill:text-white transition-colors text-center leading-tight">
                          {skill}
                        </p>

                        {/* Brand Glow Background */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300 blur-2xl"
                          style={{ background: data.color }}
                        />
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
