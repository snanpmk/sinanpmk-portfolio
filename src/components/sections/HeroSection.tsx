"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { Button } from "@/components/ui/Button";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function HeroSection() {
  const { name, title, tagline, headline, microProof, image } = PORTFOLIO_DATA.hero;

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-10 md:pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 w-full">
          
          {/* Social Links (Left Strip) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden xl:flex flex-col gap-8 text-neutral-400"
          >
            {PORTFOLIO_DATA.socialLinks?.map((social) => {
              const Icon = social.icon === 'FaLinkedin' ? FaLinkedin : 
                          social.icon === 'FaGithub' ? FaGithub : 
                          social.icon === 'FaWhatsapp' ? FaWhatsapp : FaLinkedin;
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-emerald-500 font-mono text-xs md:text-sm font-black uppercase tracking-[0.4em]"
            >
              {title}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-2 text-white"
            >
              I'm {name}.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 py-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-cyan-300 tracking-tight"
            >
              {headline}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 mb-8 max-w-xl"
            >
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-medium">
                {tagline}
              </p>
            </motion.div>

            {/* Social Links (Mobile/Tablet - below tagline) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex xl:hidden gap-6 text-neutral-400 mb-10 w-full justify-center md:justify-start"
            >
              {PORTFOLIO_DATA.socialLinks?.map((social) => {
                const Icon = social.icon === 'FaLinkedin' ? FaLinkedin : 
                            social.icon === 'FaGithub' ? FaGithub : 
                            social.icon === 'FaWhatsapp' ? FaWhatsapp : FaLinkedin;
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <Button 
                className="group relative bg-emerald-500 hover:bg-emerald-400 text-black font-black px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:-translate-y-1"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-4 border-white/10 hover:bg-white/5 text-white font-bold rounded-xl"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FaDownload className="mr-2 w-4 h-4 text-emerald-500" />
                Resume
              </Button>
            </motion.div>
          </div>

          {/* Image (Right Side) */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0, 0.71, 0.2, 1.01] }}
              className="order-1 md:order-2 relative flex justify-center md:justify-end"
            >
              {/* Soft background glow */}
              {/* <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full scale-150 opacity-50" /> */}
              
              <div 
                className="relative w-38 h-38 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] overflow-hidden bg-emerald-500/5 border-2 border-emerald-500/10"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  animation: 'blob 10s ease-in-out infinite alternate'
                }}
              >
                <Image 
                  src={image} 
                  alt={name}
                  fill
                  priority
                  sizes="(max-width: 640px) 14rem, (max-width: 768px) 18rem, 400px" 
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
                />
              </div>
            </motion.div>
          )}

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}} />
    </section>
  );
}
