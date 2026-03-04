import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col mb-24 text-left ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-primary font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            {subtitle}
          </p>
        )}
        <div className="h-1 w-20 bg-primary rounded-full" />
      </motion.div>
    </div>
  );
}
