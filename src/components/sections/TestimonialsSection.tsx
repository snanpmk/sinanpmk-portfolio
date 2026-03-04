"use client";

import Image from "next/image";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/constants/data";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function TestimonialsSection() {
  const testimonials = PORTFOLIO_DATA.testimonials;
  if (!testimonials || testimonials.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <SectionContainer id="testimonials">
      <div className="max-w-[1600px] mx-auto md:px-12">
        <SectionHeader title="What People Say." />
        
        {/* Mobile View: Animated Carousel */}
        <div className="md:hidden relative px-2 py-10">
          <div className="min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <GlassCard 
                  variant="liquid" 
                  className="p-8 relative min-h-[400px] flex flex-col justify-between"
                >
                  <div>
                    <FaQuoteLeft className="text-emerald-500/40 text-3xl mb-6" />
                    <p className="text-lg text-neutral-200 leading-relaxed italic mb-8">
                      "{testimonials[activeIndex].content || (testimonials[activeIndex] as any).quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/20">
                      <Image 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name || (testimonials[activeIndex] as any).author} 
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-black text-white text-sm uppercase tracking-tight">
                        {testimonials[activeIndex].name || (testimonials[activeIndex] as any).author}
                      </h4>
                      <p className="text-emerald-500 font-mono text-[10px] font-black uppercase tracking-widest">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${i === activeIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-white/10'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Desktop View: 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <GlassCard 
                variant="liquid" 
                className="p-10 h-full flex flex-col justify-between group-hover:border-emerald-500/30 transition-all duration-700"
              >
                <div>
                  <FaQuoteLeft className="text-emerald-500/30 text-4xl mb-6 group-hover:text-emerald-500/60 transition-colors" />
                  <p className="text-lg text-neutral-200 leading-relaxed italic mb-8">
                    "{testimonial.content || testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name || testimonial.author} 
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-base tracking-tight leading-tight">
                      {testimonial.name || testimonial.author}
                    </h4>
                    <p className="text-emerald-500 font-mono text-[10px] font-black uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
