"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface MagneticProps {
    children: React.ReactNode;
    className?: string;
    /** 0 = inert, 1 = element tracks the cursor exactly. */
    strength?: number;
}

/**
 * Wraps any control so it drifts toward the cursor on hover.
 * Renders a plain inline-block wrapper — it doesn't alter the child's own styling.
 */
export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
    const { ref, handlers, style } = useMagnetic(strength);

    return (
        <motion.div
            ref={ref}
            style={style}
            {...handlers}
            className={cn("inline-block will-change-transform", className)}
        >
            {children}
        </motion.div>
    );
}
