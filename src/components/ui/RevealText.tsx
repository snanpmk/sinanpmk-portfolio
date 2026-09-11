"use client";

import { motion } from "framer-motion";
import { maskReveal, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
    children: React.ReactNode;
    className?: string;
    /** Wrapper element — use a block tag that matches the surrounding layout. */
    as?: "div" | "span";
    delay?: number;
    /** Drive from a parent's variant orchestration instead of its own viewport trigger. */
    inheritVariants?: boolean;
}

/**
 * Masked line reveal: the child slides up from behind a clipping wrapper, so the
 * text appears to rise out of the page rather than fade into it.
 *
 * The wrapper needs `overflow-hidden` plus a little vertical padding, otherwise
 * descenders (g, y, p) and italic overhangs get sheared off at the clip edge.
 */
export function RevealText({
    children,
    className,
    as = "div",
    delay = 0,
    inheritVariants = false,
}: RevealTextProps) {
    const Wrapper = as === "span" ? motion.span : motion.div;

    const triggerProps = inheritVariants
        ? {}
        : { initial: "hidden" as const, whileInView: "visible" as const, viewport: VIEWPORT };

    return (
        <Wrapper
            className={cn("overflow-hidden", as === "span" ? "inline-block" : "block", className)}
            style={{ paddingBottom: "0.12em", marginBottom: "-0.12em" }}
            {...triggerProps}
        >
            <motion.span
                className="block will-change-transform"
                variants={maskReveal}
                transition={delay ? { delay } : undefined}
            >
                {children}
            </motion.span>
        </Wrapper>
    );
}
