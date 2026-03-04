"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PORTFOLIO_DATA } from "@/constants/data";
import { FaDownload, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const { name, title, tagline, microProof, image } = PORTFOLIO_DATA.hero;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax: larger travel distance makes the layered depth effect clearly visible on desktop
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-32 md:pt-40 md:pb-40 px-6 md:px-12 overflow-hidden noise-overlay"
    >
      {/* Decorative editorial background text — pushed down so it doesn't overlap headline */}
      <div className="hidden lg:block absolute bottom-[10%] right-[2%] text-[8vw] font-black text-white/2.5 select-none pointer-events-none tracking-tighter italic">
        React &amp; Next js
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-8">

          {/* Main Text Content */}
          <motion.div
            className="flex-1 z-20 w-full text-center lg:text-left"
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-5 justify-center lg:justify-start">
              <span className="w-8 h-px bg-primary/40" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500">
                {title}
              </span>
            </div>

            <h1 className="editorial-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8">
              Crafting scalable <br />
              <span className="italic font-serif relative inline-block">
                React applications.
                <motion.svg
                  width="100%" height="15" viewBox="0 0 300 20" fill="none"
                  className="absolute -bottom-2 left-0 w-full"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                >
                  <path d="M5 15C50 5 250 5 295 15" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                </motion.svg>
              </span>
            </h1>

            <div className="max-w-xl mx-auto lg:mx-0 space-y-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I'm <span className="text-white font-medium">Sinan PMK</span>, a{" "}
                <span className="text-white font-medium">React &amp; Next.js Developer</span>{" "}
                with <span className="text-white font-medium">2+ years of experience</span>{" "}
                building scalable, high-performance web applications.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-none uppercase tracking-widest text-xs font-bold"
                >
                  Explore Work
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-none uppercase tracking-widest text-xs font-bold gap-2"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <FaDownload className="w-3.5 h-3.5 text-primary" />
                  Resume
                </Button>

                <div className="flex items-center gap-3 ml-2">
                  {PORTFOLIO_DATA.socialLinks?.map((social) => {
                    const Icon = social.icon === 'FaLinkedin' ? FaLinkedin :
                      social.icon === 'FaGithub' ? FaGithub :
                        social.icon === 'FaWhatsapp' ? FaWhatsapp : FaLinkedin;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-all opacity-70 hover:opacity-100 p-2.5 border rounded-full ${social.color} ${social.borderColor} ${social.hoverBg} ${social.hoverBorder}`}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual Piece — Editorial Frame */}
          <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
            <motion.div
              style={{ y: y2, scale: scale2 }}
              initial={{ opacity: 0, x: 0, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 10 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Signature Frame */}
              <div className="human-border p-3 md:p-4 bg-neutral-900 shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-1000">
                <div className="relative w-56 h-72 sm:w-72 sm:h-96 md:w-80 md:h-[420px] overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    priority
                    sizes="(max-width: 640px) 14rem, (max-width: 768px) 18rem, 20rem"
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
                </div>

                {/* Annotation */}
                <div className="mt-3 pt-3 border-t border-white/5 font-mono text-[9px] text-neutral-600 flex justify-between items-center">
                  <span className="text-primary/70 text-xs font-medium">Sinan Pmk</span>
                  <span className="italic">React Developer</span>
                </div>
              </div>

              {/* Compositional offset circle */}
              <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 border border-primary/20 rounded-full" />
            </motion.div>

            {/* microProof sidebar — only on xl screens where there's room */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="hidden xl:block absolute -right-36 top-1/2 -rotate-90 origin-center"
            >
              <span className="text-[10px] uppercase font-mono tracking-[0.5em] text-white/20 whitespace-nowrap">
                {microProof}
              </span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}

