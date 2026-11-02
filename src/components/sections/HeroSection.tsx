"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PORTFOLIO_DATA } from "@/constants/data";
import { FaDownload, FaLinkedin, FaGithub, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { Magnetic } from "@/components/ui/MagneticButton";
import { fadeUp, staggerContainer, EASE, DUR } from "@/lib/motion";

const socialIcon = (icon: string) =>
  icon === "FaGithub" ? FaGithub : icon === "FaWhatsapp" ? FaWhatsapp : FaLinkedin;

/** Skills shown in the scrolling strip under the hero. */
const MARQUEE = [
  ...PORTFOLIO_DATA.skills.frontend.slice(0, 6),
  "Frontend architecture",
  "AI integration",
  "Real-time UIs",
  "TypeScript",
];

export function HeroSection() {
  const { title, location, microProof } = PORTFOLIO_DATA.hero;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const yTiles = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between pt-32 md:pt-40 overflow-hidden noise-overlay"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center">
        <motion.div
          style={{ y: yText }}
          variants={staggerContainer(0.12, 0.15)}
          initial="hidden"
          animate="visible"
        >
          {/* Status line */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-8 md:mb-10">
            <span className="w-8 h-px bg-indigo" />
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.25em] text-indigo-soft/80">
              {title} — {location}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="editorial-heading text-[length:var(--text-fluid-display)] text-white mb-12 md:mb-16">
            <RevealText inheritVariants>Crafting scalable</RevealText>
            <RevealText inheritVariants>
              React{" "}
              <span className="font-serif italic font-normal tracking-[-0.02em] text-mint relative inline-block pr-2">
                applications.
                <motion.svg
                  width="100%" height="15" viewBox="0 0 300 20" fill="none" preserveAspectRatio="none"
                  className="absolute -bottom-1 md:-bottom-2 left-0 w-full overflow-visible"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 1.1, ease: EASE.inOut }}
                >
                  <motion.path
                    d="M5 15C50 5 250 5 295 15"
                    stroke="var(--indigo)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </RevealText>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-end">
            {/* Intro + actions */}
            <div className="lg:col-span-6 space-y-8">
              <motion.p variants={fadeUp} className="text-[length:var(--text-fluid-lead)] text-neutral-300 leading-relaxed max-w-xl">
                I&apos;m <span className="text-white font-medium">Sinan PMK</span>, a{" "}
                <span className="text-white font-medium">frontend engineer</span> with{" "}
                <span className="text-white font-medium">3 years</span> designing large-scale
                healthcare and fintech systems in React and Next.js — and integrating{" "}
                <span className="text-mint">AI</span> into the products I ship and the way I build them.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <Magnetic strength={0.25}>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    className="rounded-full uppercase tracking-widest text-xs font-bold gap-3 group"
                  >
                    Explore Work
                    <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Magnetic>

                <Magnetic strength={0.25}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full uppercase tracking-widest text-xs font-bold gap-2"
                    onClick={() => window.open("/resume.pdf", "_blank")}
                  >
                    <FaDownload className="w-3.5 h-3.5 text-indigo-soft" />
                    Resume
                  </Button>
                </Magnetic>

                <div className="flex items-center gap-2 sm:ml-2">
                  {PORTFOLIO_DATA.socialLinks?.map((social) => {
                    const Icon = socialIcon(social.icon);
                    return (
                      <Magnetic key={social.name} strength={0.4}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="flex p-3 rounded-full border border-indigo/30 text-neutral-300 hover:text-mint hover:border-mint/40 hover:bg-mint/5 transition-colors duration-300"
                        >
                          <Icon size={17} />
                        </a>
                      </Magnetic>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Proof tiles — indigo carries the weight, mint marks what's live */}
            <motion.div
              style={{ y: yTiles }}
              variants={staggerContainer(0.1, 0.5)}
              className="lg:col-span-6 grid grid-cols-2 gap-3 md:gap-4"
            >
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-3xl bg-indigo p-6 md:p-7 min-h-[150px] flex flex-col justify-between"
              >
                <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-white/10 blur-2xl" />
                <span className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-white leading-none">
                  3<span className="text-mint text-2xl md:text-3xl align-top ml-1">yrs</span>
                </span>
                <span className="text-xs md:text-sm font-medium text-white/80 leading-snug">
                  building large-scale React &amp; Next.js systems
                </span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-3xl border border-indigo/30 bg-surface p-6 md:p-7 min-h-[150px] flex flex-col justify-between"
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-indigo-soft">Focus</span>
                <div className="font-display text-lg md:text-xl font-semibold text-white leading-tight">
                  Healthcare<br />Fintech<br /><span className="text-mint">AI features</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="col-span-2 rounded-3xl border border-mint/20 bg-linear-to-r from-mint/[0.07] to-transparent p-6 md:p-7 flex items-start gap-4"
              >
                <span className="mt-1.5 relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-mint animate-ping-soft" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
                </span>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-mint mb-2">Now building</p>
                  <p className="text-sm md:text-base text-neutral-200 leading-relaxed">{microProof}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Skills strip — a tilted indigo band */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: DUR.slow, ease: EASE.out }}
        className="relative mt-20 md:mt-24 mb-10 -mx-4 -rotate-2 select-none-deco"
        aria-hidden
      >
        <div className="bg-indigo py-4 md:py-5 overflow-hidden shadow-[0_0_60px_rgba(99,49,251,0.45)]">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {MARQUEE.map((item) => (
                  <span key={`${copy}-${item}`} className="flex items-center">
                    <span className="font-display text-xl md:text-3xl font-semibold uppercase tracking-tight text-white whitespace-nowrap px-6 md:px-8">
                      {item}
                    </span>
                    <span className="text-mint text-lg md:text-2xl">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
