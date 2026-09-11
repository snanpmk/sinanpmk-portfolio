"use client";

import { useCallback, useRef } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { SPRING } from "@/lib/motion";

/**
 * Magnetic hover — the element drifts toward the cursor and springs back on exit.
 *
 * Pointer-driven via motion values (no re-renders). Automatically inert for
 * reduced-motion users and on touch devices, where `pointerenter` from a tap
 * would otherwise leave the element stuck off-centre.
 */
export function useMagnetic(strength = 0.35) {
    const ref = useRef<HTMLDivElement>(null);
    const prefersReduced = useReducedMotion();

    const xRaw = useMotionValue(0);
    const yRaw = useMotionValue(0);
    const x = useSpring(xRaw, SPRING.snappy);
    const y = useSpring(yRaw, SPRING.snappy);

    const onPointerMove = useCallback(
        (e: React.PointerEvent<HTMLDivElement>) => {
            const el = ref.current;
            // `pointerType` guard keeps this desktop-only.
            if (!el || prefersReduced || e.pointerType !== "mouse") return;

            const rect = el.getBoundingClientRect();
            xRaw.set((e.clientX - (rect.left + rect.width / 2)) * strength);
            yRaw.set((e.clientY - (rect.top + rect.height / 2)) * strength);
        },
        [prefersReduced, strength, xRaw, yRaw]
    );

    const onPointerLeave = useCallback(() => {
        xRaw.set(0);
        yRaw.set(0);
    }, [xRaw, yRaw]);

    return {
        ref,
        handlers: { onPointerMove, onPointerLeave },
        style: { x, y },
    };
}
