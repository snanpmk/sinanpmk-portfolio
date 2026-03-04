"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaCalendarAlt } from "react-icons/fa";

export function EducationSection() {
  if (!PORTFOLIO_DATA.education || PORTFOLIO_DATA.education.length === 0) return null;

  return (
    <SectionContainer id="education">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto"
      >
        <SectionHeader title="Education." />
        
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 top-0 bottom-0 w-px bg-emerald-500/40"></div>
          
          <div className="flex flex-col gap-12 sm:gap-0">
            {PORTFOLIO_DATA.education.map((edu, index) => {
              const isOnLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center justify-between w-full sm:mb-20 flex-col sm:flex-row">
                  
                  {/* Timeline Dot (Desktop & Mobile) */}
                  <div 
                    className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-0 z-10" 
                    style={{ top: '6px' }}
                  ></div>
                  
                  {/* Left Box (Even indexes) */}
                  <div className={`w-full sm:w-[calc(50%-3rem)] ${isOnLeft ? 'sm:text-left sm:flex sm:justify-end' : 'sm:opacity-0 sm:invisible'} pl-16 sm:pl-0 order-2 sm:order-1`}>
                    {isOnLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="sm:w-80 text-left"
                      >
                        <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-neutral-400 text-base mb-4 leading-relaxed">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-neutral-400 font-medium justify-start">
                          <FaCalendarAlt className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Right Box (Odd indexes) */}
                  <div className={`w-full sm:w-[calc(50%-3rem)] ${!isOnLeft ? 'sm:text-left' : 'sm:opacity-0 sm:invisible'} pl-16 sm:pl-0 order-3 sm:order-2`}>
                    {!isOnLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="sm:w-80 text-left"
                      >
                        <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-neutral-400 text-base mb-4 leading-relaxed">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-neutral-400 font-medium justify-start">
                          <FaCalendarAlt className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
