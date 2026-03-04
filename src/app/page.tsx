import dynamic from 'next/dynamic';
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";

const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection").then(mod => mod.ExperienceSection), { ssr: true });
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection").then(mod => mod.ProjectsSection), { ssr: true });
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection").then(mod => mod.SkillsSection), { ssr: true });
const EducationSection = dynamic(() => import("@/components/sections/EducationSection").then(mod => mod.EducationSection), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(mod => mod.TestimonialsSection), { ssr: true });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(mod => mod.ContactSection), { ssr: true });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
