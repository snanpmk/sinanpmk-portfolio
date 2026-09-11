import type { Variants } from "framer-motion";

/**
 * Shared motion language.
 *
 * Every section imports from here so the whole page moves on one set of curves and
 * durations instead of each component inventing its own timing.
 */

/** Easing curves. `out` is the signature decelerate — soft landing, no overshoot. */
export const EASE = {
    out: [0.16, 1, 0.3, 1],
    inOut: [0.65, 0, 0.35, 1],
    entrance: [0.22, 1, 0.36, 1],
} as const;

/** Duration scale, in seconds. */
export const DUR = {
    fast: 0.35,
    base: 0.6,
    slow: 0.9,
    slower: 1.2,
} as const;

/** Springs for pointer-driven effects (tilt, magnetic, spotlight). */
export const SPRING = {
    soft: { stiffness: 150, damping: 20, mass: 0.5 },
    snappy: { stiffness: 300, damping: 30, mass: 0.4 },
} as const;

/**
 * Default viewport config for scroll reveals.
 * The negative bottom margin holds the reveal until the element is meaningfully
 * on screen, rather than firing the instant its top edge crosses the fold.
 */
export const VIEWPORT = {
    once: true,
    amount: 0.2,
    margin: "0px 0px -10% 0px",
} as const;

/** Looser viewport for tall elements that would otherwise never hit `amount`. */
export const VIEWPORT_TALL = {
    once: true,
    amount: 0.1,
    margin: "0px 0px -5% 0px",
} as const;

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DUR.base, ease: EASE.out },
    },
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: DUR.base, ease: EASE.out } },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0, transition: { duration: DUR.base, ease: EASE.out } },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0, transition: { duration: DUR.base, ease: EASE.out } },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: DUR.base, ease: EASE.out },
    },
};

/**
 * Masked line reveal — the child rises out from behind an `overflow-hidden`
 * parent. Pair with <RevealText>, which supplies the clipping wrapper.
 */
export const maskReveal: Variants = {
    hidden: { y: "110%" },
    visible: {
        y: "0%",
        transition: { duration: DUR.slow, ease: EASE.entrance },
    },
};

/**
 * Parent orchestrator. Children with the `hidden`/`visible` variant names above
 * inherit their timing from here — so no child should set its own `delay`.
 */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
    hidden: {},
    visible: {
        transition: { staggerChildren: stagger, delayChildren },
    },
});
