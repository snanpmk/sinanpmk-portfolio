"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Adjust rootMargin so a section counts as active while it owns the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-20% 0px -20% 0px", threshold: 0 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center items-center transition-all duration-700",
        scrolled
          ? "py-4 backdrop-blur-md bg-neutral-950/40"
          : "py-8 bg-transparent"
      )}
    >
      <div className="flex items-center gap-10">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-500",
                isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
              )}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (!element) return;
                const y = element.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              {item.label}

              {/* Single dot marks the active section — the only chrome in the bar. */}
              {isActive && (
                <motion.span
                  layoutId="navDot"
                  className="absolute -bottom-2 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
