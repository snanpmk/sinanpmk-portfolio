"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlurImage } from "@/components/ui/BlurImage";
import { PORTFOLIO_DATA } from "@/constants/data";
import { fadeUp, staggerContainer, VIEWPORT, DUR, EASE } from "@/lib/motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function TestimonialsSection() {
  const testimonials = PORTFOLIO_DATA.testimonials;

  // Hooks must run before any early return.
  const [activeIndex, setActiveIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const active = testimonials[activeIndex];

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
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: DUR.fast, ease: EASE.out }}
                className="w-full"
              >
                <GlassCard
                  variant="liquid"
                  className="p-8 relative min-h-[400px] flex flex-col justify-between"
                >
                  <div>
                    <FaQuoteLeft className="text-primary/40 text-3xl mb-6" />
                    <p className="text-lg text-neutral-200 leading-relaxed italic mb-8">
                      &ldquo;{active.content}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <BlurImage
                        src={active.image}
                        alt={active.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-black text-white text-sm uppercase tracking-tight">
                        {active.name}
                      </h4>
                      <p className="text-primary font-mono text-[10px] font-black uppercase tracking-widest">
                        {active.role}
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
              aria-label="Previous testimonial"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 transition-all duration-500 rounded-full ${i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-white/10'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Desktop View: 3-Column Grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index: number) => (
            <motion.div key={index} variants={fadeUp} className="group/card h-full">
              <GlassCard
                variant="liquid"
                tilt
                className="p-10 h-full flex flex-col justify-between border-white/10 hover:border-primary/30 transition-colors duration-700"
              >
                <div>
                  <FaQuoteLeft className="text-primary/30 text-4xl mb-6 group-hover/card:text-primary/60 transition-colors duration-500" />
                  <p className="text-lg text-neutral-200 leading-relaxed italic mb-8">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover/card:border-primary/50 transition-colors duration-500">
                    <BlurImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-base tracking-tight leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary font-mono text-[10px] font-black uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
