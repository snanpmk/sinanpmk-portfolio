import * as React from "react"
import { cn } from "@/lib/utils"

const GlassCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "panel" | "subtle" | "liquid" }
>(({ className, variant = "default", children, ...props }, ref) => {
  const isLiquid = variant === "liquid";

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl transition-all duration-500 relative",
        {
          "glass": variant === "default",
          "glass-panel": variant === "panel",
          "bg-white/5 border border-white/10": variant === "subtle",
          "border border-white/15 shadow-2xl overflow-hidden group/liquid": isLiquid,
        },
        className
      )}
      style={isLiquid ? {
        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        backdropFilter: 'blur(24px)',
      } : undefined}
      {...props}
    >
      {isLiquid && (
        <>
          {/* Liquid Glass Highlight (Rim Light) */}
          <div className="absolute inset-0 bg-linear-to-b from-white/15 to-transparent opacity-40 pointer-events-none z-0" />
          
          {/* Animated Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover/liquid:translate-x-full transition-transform duration-1200 ease-in-out bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-25 pointer-events-none z-0" />
          
          {/* Inner Content Wrapper to keep it above z-0 layers */}
          <div className="relative z-10 w-full h-full">
            {children}
          </div>
        </>
      )}
      {!isLiquid && children}
    </div>
  )
})
GlassCard.displayName = "GlassCard"

export { GlassCard }
