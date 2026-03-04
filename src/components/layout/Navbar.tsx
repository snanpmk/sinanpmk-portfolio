"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaHome, FaUser, FaBriefcase, FaCode, FaMicrochip, FaEnvelope } from "react-icons/fa";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
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

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "hero", icon: FaHome, label: "Home" },
    { id: "about", icon: FaUser, label: "About" },
    { id: "experience", icon: FaBriefcase, label: "Experience" },
    { id: "projects", icon: FaCode, label: "Projects" },
    { id: "skills", icon: FaMicrochip, label: "Skills" },
  ];

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-8 pointer-events-auto">
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "p-2 transition-all duration-300 relative group",
            activeSection === item.id ? "text-emerald-400 scale-125" : "text-neutral-500 hover:text-white"
          )}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <item.icon className="w-5 h-5" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 px-2 py-1 rounded bg-neutral-900 border border-white/10 text-[10px] uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {item.label}
          </span>
          
          {/* Active Dot Indication */}
          {activeSection === item.id && (
            <motion.div
              layoutId="activeDot"
              className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-emerald-400 rounded-full"
            />
          )}
        </Link>
      ))}
    </nav>
  );
}
