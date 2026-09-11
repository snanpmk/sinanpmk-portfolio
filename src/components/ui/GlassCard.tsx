"use client";

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { usePointerGlow } from "@/hooks/usePointerGlow"

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "panel" | "subtle" | "liquid";
  /** Pointer-tracked specular highlight. */
  interactive?: boolean;
  /** Perspective tilt following the pointer. Implies `interactive`. */
  tilt?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", interactive = false, tilt = false, children, ...props }, ref) => {
    const isLiquid = variant === "liquid";
    const isInteractive = interactive || tilt;

    const { ref: glowRef, handlers, glowStyle, tiltStyle } = usePointerGlow({ tilt });

    // Merge the forwarded ref with the one the pointer hook needs.
    const setRefs = React.useCallback(
      (node: HTMLDivElement | null) => {
        glowRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [glowRef, ref]
    );

    // `isolate` creates a stacking context so the decorative layers can sit at
    // -z-10: above the card's background, below its content. That lets children
    // render as direct layout children (no wrapper div), so layout classes on
    // the card — `flex items-center`, grid, etc. — still apply to them.
    const classes = cn(
      "rounded-2xl transition-all duration-500 relative isolate",
      {
        "glass": variant === "default",
        "glass-panel": variant === "panel",
        "bg-white/5 border border-white/10": variant === "subtle",
        "border border-white/15 shadow-2xl overflow-hidden group/liquid rim-light": isLiquid,
      },
      className
    );

    const liquidStyle = isLiquid
      ? {
        background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)',
        backdropFilter: 'blur(24px)',
      }
      : undefined;

    const inner = (
      <>
        {isLiquid && (
          <>
            {/* Liquid Glass Highlight (Rim Light) */}
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-white/15 to-transparent opacity-40 pointer-events-none" />

            {/* Animated Shine Effect */}
            <div className="absolute inset-0 -z-10 -translate-x-full group-hover/liquid:translate-x-full transition-transform duration-1200 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-25 pointer-events-none" />
          </>
        )}

        {/* Pointer-tracked specular highlight */}
        {isInteractive && (
          <motion.div
            aria-hidden
            style={glowStyle}
            className="absolute inset-0 -z-10 pointer-events-none rounded-[inherit]"
          />
        )}

        {children}
      </>
    );

    if (!isInteractive) {
      return (
        <div ref={setRefs} className={classes} style={liquidStyle} {...props}>
          {inner}
        </div>
      );
    }

    return (
      <motion.div
        ref={setRefs}
        className={cn(classes, "gpu")}
        style={{ ...liquidStyle, ...tiltStyle }}
        {...handlers}
        {...(props as React.ComponentProps<typeof motion.div>)}
      >
        {inner}
      </motion.div>
    );
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }
