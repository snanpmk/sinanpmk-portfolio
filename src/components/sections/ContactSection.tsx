"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Magnetic } from "@/components/ui/MagneticButton";
import { fadeUp, fadeInLeft, fadeInRight, staggerContainer, VIEWPORT } from "@/lib/motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { showToast } from "@/components/ui/Toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) {
      showToast('error', "Please enter your name.");
      return false;
    }
    if (!formData.email.trim()) {
      showToast('error', "Please enter your email.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast('error', "Please enter a valid email address.");
      return false;
    }
    if (!formData.message.trim()) {
      showToast('error', "Please enter a message.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        showToast('success', "Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      showToast('error', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionContainer id="contact">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Get in Touch." />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          <motion.div variants={fadeInLeft} className="flex-1">
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-md text-[length:var(--text-fluid-lead)]">
              Whether you have a question, a project in mind, or just want to say hi, I will try my best to get back to you!
            </p>
            <motion.div variants={staggerContainer(0.08)} className="space-y-6 text-neutral-300 text-sm mt-8">
              <motion.p variants={fadeUp} className="flex items-center gap-4 group/row">
                <span className="w-10 h-10 rounded-full bg-indigo/10 flex items-center justify-center border border-indigo/30 text-indigo-soft group-hover/row:bg-mint/10 group-hover/row:border-mint/40 group-hover/row:text-mint transition-colors duration-300">
                  <FaEnvelope className="text-base" />
                </span>
                <span className="text-base text-neutral-300">pmksinan@gmail.com</span>
              </motion.p>
              <motion.p variants={fadeUp} className="flex items-center gap-4 group/row">
                <span className="w-10 h-10 rounded-full bg-indigo/10 flex items-center justify-center border border-indigo/30 text-indigo-soft group-hover/row:bg-mint/10 group-hover/row:border-mint/40 group-hover/row:text-mint transition-colors duration-300">
                  <FaPhone className="text-base" />
                </span>
                <span className="text-base text-neutral-300">+91 7736689774</span>
              </motion.p>
              <motion.p variants={fadeUp} className="flex items-center gap-4 group/row">
                <span className="w-10 h-10 rounded-full bg-indigo/10 flex items-center justify-center border border-indigo/30 text-indigo-soft group-hover/row:bg-mint/10 group-hover/row:border-mint/40 group-hover/row:text-mint transition-colors duration-300">
                  <FaMapMarkerAlt className="text-base" />
                </span>
                <span className="text-base text-neutral-300">Kozhikode, Kerala</span>
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInRight} className="flex-1 w-full">
          <GlassCard variant="liquid" interactive className="p-8 md:p-10 w-full backdrop-blur-3xl ">
            <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-neutral-200">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-onyx/60 border border-indigo/25 rounded-xl px-4 py-4 text-white hover:border-indigo/50 focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/40 transition-all font-sans placeholder:text-neutral-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-neutral-200">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-onyx/60 border border-indigo/25 rounded-xl px-4 py-4 text-white hover:border-indigo/50 focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/40 transition-all font-sans placeholder:text-neutral-600"
                  placeholder="yourname@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-neutral-200">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-onyx/60 border border-indigo/25 rounded-xl px-4 py-4 text-white hover:border-indigo/50 focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/40 transition-all resize-none font-sans placeholder:text-neutral-600"
                  placeholder="What's on your mind?"
                />
              </div>

              <Magnetic strength={0.18} className="w-full">
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full rounded-full uppercase tracking-widest text-xs font-bold"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Magnetic>
            </form>
          </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
