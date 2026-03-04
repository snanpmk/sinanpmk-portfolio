"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/constants/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative z-10 mt-20">
      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      {/* Background with blur and subtle gradient */}
      <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xl -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-6xl py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="text-xl font-bold tracking-tighter bg-linear-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.hero.name.split(' ')[0]}<span className="text-emerald-500">.</span>
            </Link>
            <p className="text-neutral-500 text-sm flex items-center gap-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {PORTFOLIO_DATA.socialLinks?.map((social) => {
              const Icon = social.icon === 'FaLinkedin' ? FaLinkedin : 
                           social.icon === 'FaGithub' ? FaGithub : 
                           social.icon === 'FaWhatsapp' ? FaWhatsapp : FaLinkedin;
                           
              return (
                <Link 
                  key={social.name}
                  href={social.url}
                  target={social.name === 'WhatsApp' ? undefined : "_blank"}
                  rel={social.name === 'WhatsApp' ? undefined : "noopener noreferrer"}
                  className={`p-3 rounded-full bg-white/5 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300 group ${
                    social.name === 'LinkedIn' ? 'hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/20' : ''
                  }`}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              );
            })}
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300">
              <FaArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-xs tracking-widest uppercase font-medium">Top</span>
          </button>
          
        </div>
      </div>
    </footer>
  );
}
