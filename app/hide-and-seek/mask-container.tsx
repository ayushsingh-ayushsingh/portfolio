"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type MousePosition = {
  x: number | null;
  y: number | null;
};

interface MaskContainerProps {
  children?: React.ReactNode;
  revealText?: React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 1200,
  className,
}: MaskContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: null,
    y: null,
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    node.addEventListener("mousemove", handleMouseMove);
    return () => node.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen w-screen", className)}
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      }}
      transition={{ backgroundColor: { duration: 0.3 } }}
    >
      {/* MASKED LAYER */}
      <motion.div
        className="
          pointer-events-none
          absolute inset-0
          flex items-center justify-center
          text-6xl
          mask-[url(/mask.svg)]
          mask-no-repeat
          dark:bg-white bg-black
        "
        animate={{
          maskPosition:
            mousePosition.x !== null && mousePosition.y !== null
              ? `${mousePosition.x - maskSize / 2}px ${
                  mousePosition.y - maskSize / 2
                }px`
              : "0px 0px",
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        {/* overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 dark:bg-white/50" />
      </motion.div>

      {/* CONTENT */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-10 flex h-full w-full items-center justify-center"
      >
        {children}
      </div>

      {/* REVEAL TEXT */}
      <div className="absolute inset-0 flex items-center justify-center">
        {revealText}
      </div>
    </motion.div>
  );
};
