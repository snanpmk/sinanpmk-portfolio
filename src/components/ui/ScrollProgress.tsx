"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin reading-progress bar pinned to the top of the viewport.
 * Scales a single element on the X axis — compositor-only, no layout work.
 */
export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 180,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-linear-to-r from-indigo via-indigo to-mint"
        />
    );
}
