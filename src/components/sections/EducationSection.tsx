"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeInLeft, fadeInRight, staggerContainer, VIEWPORT_TALL, DUR, EASE } from "@/lib/motion";
import { FaCalendarAlt } from "react-icons/fa";

export function EducationSection() {
  const education = PORTFOLIO_DATA.education;
  if (!education || education.length === 0) return null;

  return (
    <SectionContainer id="education">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Education." />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_TALL}
          className="relative"
        >
          {/* Central line — draws downward as the section enters. */}
          <motion.div
            variants={{
              hidden: { scaleY: 0 },
              visible: { scaleY: 1, transition: { duration: DUR.slower, ease: EASE.out } },
            }}
            className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px origin-top bg-linear-to-b from-indigo via-indigo/40 to-transparent"
          />

          <div className="flex flex-col gap-12 sm:gap-0">
            {education.map((edu, index) => {
              const isOnLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex w-full flex-col items-start sm:mb-20 sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* Timeline dot */}
                  <motion.span
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: { scale: 1, opacity: 1, transition: { duration: DUR.fast, ease: EASE.out } },
                    }}
                    className="absolute left-6 top-[6px] z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-mint ring-4 ring-indigo/40 shadow-[0_0_16px_var(--primary-glow)] sm:left-1/2"
                  />

                  {/*
                   * One card, placed into the left or right half by order + margin.
                   * (Previously this markup was duplicated and one copy hidden.)
                   */}
                  <motion.div
                    variants={isOnLeft ? fadeInLeft : fadeInRight}
                    className={`w-full pl-16 text-left sm:w-[calc(50%-3rem)] sm:pl-0 ${isOnLeft ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                      }`}
                  >
                    <h3 className="mb-2 font-display text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="mb-4 text-base leading-relaxed text-neutral-400">{edu.institution}</p>
                    <div
                      className={`flex items-center gap-2 text-sm font-medium text-neutral-400 ${isOnLeft ? "justify-start sm:justify-end" : "justify-start"
                        }`}
                    >
                      <FaCalendarAlt className="h-4 w-4 text-indigo-soft" />
                      <span className="font-mono">{edu.period}</span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
