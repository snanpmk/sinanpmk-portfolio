"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
    } catch (err: any) {
      showToast('error', err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionContainer id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto"
      >
        <SectionHeader title="Get in Touch." />
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <p className="text-neutral-400 leading-relaxed mb-8 max-w-md">
              Whether you have a question, a project in mind, or just want to say hi, I will try my best to get back to you!
            </p>
            <div className="space-y-6 text-neutral-300 text-sm mt-8">
              <p className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-emerald-400/80 group-hover:bg-emerald-500/10 transition-colors">
                  <FaEnvelope className="text-base" />
                </span>
                <span className="text-base text-neutral-300">pmksinan@gmail.com</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-emerald-400/80 group-hover:bg-emerald-500/10 transition-colors">
                  <FaPhone className="text-base" />
                </span>
                <span className="text-base text-neutral-300">+91 7736689774</span>
              </p>
              <p className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-emerald-400/80 group-hover:bg-emerald-500/10 transition-colors">
                  <FaMapMarkerAlt className="text-base" />
                </span>
                <span className="text-base text-neutral-300">Kozhikode, Kerala</span>
              </p>
            </div>
          </div>
          
          <GlassCard variant="liquid" className="flex-1 p-8 md:p-10 w-full backdrop-blur-3xl shadow-emerald-500/5">
            <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-neutral-200">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-sans placeholder:text-neutral-600"
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
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-sans placeholder:text-neutral-600"
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
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none font-sans placeholder:text-neutral-600"
                  placeholder="What's on your mind?"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={loading}
                className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-black font-black uppercase tracking-widest py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </GlassCard>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
