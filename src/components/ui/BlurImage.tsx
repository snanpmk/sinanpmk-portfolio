"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * next/image wrapper that fades in from a blurred, desaturated state once the
 * bitmap has decoded — so cards resolve smoothly instead of popping in.
 *
 * `onLoad` fires for cached images too (unlike relying on an intersection
 * trigger), so a repeat visitor doesn't get stuck on the placeholder.
 */
export function BlurImage({ className, alt, ...props }: ImageProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <Image
            {...props}
            alt={alt}
            onLoad={() => setLoaded(true)}
            className={cn(
                "transition-[opacity,filter,transform] duration-700 ease-out",
                loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-xl scale-[1.03]",
                className
            )}
        />
    );
}
