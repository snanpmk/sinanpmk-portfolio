"use client";

import { useCallback, useRef } from "react";
import { useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";

interface Options {
    /** Adds a perspective tilt that follows the pointer. */
    tilt?: boolean;
    /** Max tilt in degrees. */
    maxTilt?: number;
    /** Radius of the specular highlight, in px. */
    glowSize?: number;
}

/**
 * Pointer-tracked specular highlight (and optional 3D tilt) for a card.
 *
 * Everything runs through motion values, so pointer movement never triggers a
 * React re-render — the values are written straight to the DOM by framer-motion.
 */
export function usePointerGlow({ tilt = false, maxTilt = 6, glowSize = 420 }: Options = {}) {
    const ref = useRef<HTMLDivElement>(null);
    const prefersReduced = useReducedMotion();

    // Highlight position, in element-local px.
    const glowX = useMotionValue(-9999);
    const glowY = useMotionValue(-9999);
    const glowOpacity = useSpring(0, SPRING.soft);

    // Tilt, normalised to -0.5..0.5 before being scaled to degrees.
    const tiltXRaw = useMotionValue(0);
    const tiltYRaw = useMotionValue(0);
    const rotateX = useSpring(tiltXRaw, SPRING.soft);
    const rotateY = useSpring(tiltYRaw, SPRING.soft);

    const onPointerMove = useCallback(
        (e: React.PointerEvent<HTMLDivElement>) => {
            const el = ref.current;
            if (!el || prefersReduced) return;

            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            glowX.set(x);
            glowY.set(y);

            if (tilt) {
                // Invert X so the card leans toward the cursor, not away from it.
                tiltXRaw.set(-((y / rect.height) - 0.5) * 2 * maxTilt);
                tiltYRaw.set(((x / rect.width) - 0.5) * 2 * maxTilt);
            }
        },
        [glowX, glowY, tilt, tiltXRaw, tiltYRaw, maxTilt, prefersReduced]
    );

    const onPointerEnter = useCallback(() => {
        if (!prefersReduced) glowOpacity.set(1);
    }, [glowOpacity, prefersReduced]);

    const onPointerLeave = useCallback(() => {
        glowOpacity.set(0);
        tiltXRaw.set(0);
        tiltYRaw.set(0);
    }, [glowOpacity, tiltXRaw, tiltYRaw]);

    const glowBackground = useMotionTemplate`radial-gradient(${glowSize}px circle at ${glowX}px ${glowY}px, var(--glow-card), transparent 70%)`;

    return {
        ref,
        handlers: { onPointerMove, onPointerEnter, onPointerLeave },
        glowStyle: { background: glowBackground, opacity: glowOpacity },
        tiltStyle: tilt && !prefersReduced ? { rotateX, rotateY, transformPerspective: 1200 } : undefined,
    };
}
