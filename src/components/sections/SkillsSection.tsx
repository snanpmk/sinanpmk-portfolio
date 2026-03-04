"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiRedux, SiBootstrap, SiReactrouter, SiAxios,
  SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens,
  SiGit, SiGithub, SiPostman, SiFirebase, SiRazorpay, SiTwilio
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const skillIcons: Record<string, { icon: any, color: string }> = {
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
          {categories.map(([category, skills], catIndex) => (
            <div key={category} className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="flex items-center gap-6"
              >
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">
                  {category}
                </h3>
                <div className="h-px w-full bg-linear-to-r from-primary/20 to-transparent" />
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill: string, i: number) => {
                  const data = skillIcons[skill] || { icon: null, color: "#6366f1" };
                  const Icon = data.icon;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (catIndex * skills.length + i) * 0.02 }}
                    >
                      <GlassCard
                        variant="liquid"
                        className="group/skill p-6 h-full flex flex-col items-center justify-center gap-4 border-white/5 hover:border-white/20 transition-all duration-300 isolate"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
