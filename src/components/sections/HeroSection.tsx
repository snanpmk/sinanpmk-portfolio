"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PORTFOLIO_DATA } from "@/constants/data";
import { FaDownload, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { BlurImage } from "@/components/ui/BlurImage";
import { RevealText } from "@/components/ui/RevealText";
import { Magnetic } from "@/components/ui/MagneticButton";
import { fadeUp, staggerContainer, EASE, DUR } from "@/lib/motion";

export function HeroSection() {
  const { name, title, microProof, image } = PORTFOLIO_DATA.hero;
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
      <div className="select-none-deco hidden lg:block absolute bottom-[10%] right-[2%] text-[8vw] font-serif italic text-white/2.5 pointer-events-none tracking-tighter">
        React &amp; Next js
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-8">

          {/* Main Text Content */}
          <motion.div
            className="flex-1 z-20 w-full text-center lg:text-left"
            style={{ y: y1 }}
            variants={staggerContainer(0.12, 0.15)}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-5 justify-center lg:justify-start">
              <span className="w-8 h-px bg-primary/40" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500">
                {title}
              </span>
            </motion.div>

            <h1 className="editorial-heading text-[length:var(--text-fluid-display)] mb-8">
              <RevealText inheritVariants>Crafting scalable</RevealText>
              <RevealText inheritVariants>
                <span className="italic font-serif relative inline-block">
                  React applications.
                  <motion.svg
                    width="100%" height="15" viewBox="0 0 300 20" fill="none"
                    className="absolute -bottom-2 left-0 w-full overflow-visible"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 1.1, ease: EASE.inOut }}
                  >
                    <motion.path
                      d="M5 15C50 5 250 5 295 15"
                      stroke="var(--primary)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.35"
                    />
                  </motion.svg>
                </span>
              </RevealText>
            </h1>

            <div className="max-w-xl mx-auto lg:mx-0 space-y-8">
              <motion.p variants={fadeUp} className="text-[length:var(--text-fluid-lead)] text-neutral-300 leading-relaxed">
                I&apos;m <span className="text-white font-medium">Sinan PMK</span>, a{" "}
                <span className="text-white font-medium">React &amp; Next.js Developer</span>{" "}
                with <span className="text-white font-medium">2+ years of experience</span>{" "}
                building production-grade fintech, healthcare and SaaS applications.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Magnetic strength={0.25}>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="rounded-none uppercase tracking-widest text-xs font-bold"
                  >
                    Explore Work
                  </Button>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-none uppercase tracking-widest text-xs font-bold gap-2"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <FaDownload className="w-3.5 h-3.5 text-primary" />
                    Resume
                  </Button>
                </Magnetic>

                <div className="flex items-center gap-3 ml-2">
                  {PORTFOLIO_DATA.socialLinks?.map((social) => {
                    const Icon = social.icon === 'FaLinkedin' ? FaLinkedin :
                      social.icon === 'FaGithub' ? FaGithub :
                        social.icon === 'FaWhatsapp' ? FaWhatsapp : FaLinkedin;
                    return (
                      <Magnetic key={social.name} strength={0.4}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className={`flex transition-all opacity-70 hover:opacity-100 p-2.5 border rounded-full ${social.color} ${social.borderColor} ${social.hoverBg} ${social.hoverBorder}`}
                        >
                          <Icon size={18} />
                        </a>
                      </Magnetic>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Visual Piece — Editorial Frame */}
          <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
            <motion.div
              style={{ y: y2, scale: scale2 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: DUR.slower, ease: EASE.out, delay: 0.2 }}
              className="relative group"
            >
              {/* Signature Frame */}
              <div className="human-border p-3 md:p-4 bg-neutral-900 shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-1000">
                <div className="relative w-56 h-72 sm:w-72 sm:h-96 md:w-80 md:h-[420px] overflow-hidden">
                  <BlurImage
                    src={image}
                    alt={name}
                    fill
                    priority
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
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
              transition={{ delay: 1.5, duration: DUR.slow, ease: EASE.out }}
              className="select-none-deco hidden 2xl:block absolute -right-56 top-1/2 -rotate-90 origin-center"
            >
              <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-white/20 whitespace-nowrap">
                {microProof}
              </span>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="select-none-deco absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: DUR.slow, ease: EASE.out }}
        >
          Scroll
        </motion.span>

        {/* Drip line */}
        <div className="relative w-px h-10 overflow-hidden">
          {/* Static track */}
          <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent" />
          {/* Animated drip */}
          <motion.div
            className="absolute left-0 w-px bg-linear-to-b from-transparent via-primary to-transparent"
            initial={{ top: "-100%", height: "100%" }}
            animate={{ top: "100%" }}
            transition={{
              duration: 1.2,
              ease: EASE.inOut,
              repeat: Infinity,
              repeatDelay: 0.6,
              delay: 2.4,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
