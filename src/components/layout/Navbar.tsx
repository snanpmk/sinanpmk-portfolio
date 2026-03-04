"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll state for navbar blur
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for active sections
    const sections = ["hero", "about", "experience", "projects", "skills", "contact"];

    // Adjust rootMargin to account for top navbar on desktop and bottom on mobile
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Top Nav */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center items-center transition-all duration-300",
          scrolled ? "py-4 backdrop-blur-xl bg-neutral-950/80 border-b border-white/5 shadow-lg shadow-black/20" : "py-6 bg-transparent border-b border-transparent"
        )}
      >
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "relative text-xs font-bold uppercase tracking-widest transition-colors duration-300 py-2",
                activeSection === item.id ? "text-primary" : "text-neutral-400 hover:text-white"
              )}
              onClick={(e) => {
                e.preventDefault();
                // Add offset for the top navbar
                const element = document.getElementById(item.id);
                if (element) {
                  const y = element.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              {item.label}

              {/* Active Underline */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="desktopActiveLine"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

    </>
  );
}
