"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <motion.div
        className="absolute inset-0 bg-particles opacity-40"
        animate={
          reduceMotion
            ? { opacity: 0.4 }
            : { backgroundPosition: ["0px 0px", "120px 80px"] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 18, repeat: Infinity, repeatType: "mirror" }
        }
      />
      <motion.div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/30 blur-[90px]"
        animate={
          reduceMotion
            ? { opacity: 0.6 }
            : { x: [0, 40, -10], y: [0, -30, 20], opacity: [0.5, 0.8, 0.6] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 12, repeat: Infinity, repeatType: "mirror" }
        }
      />
      <motion.div
        className="absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-400/30 blur-[110px]"
        animate={
          reduceMotion
            ? { opacity: 0.6 }
            : { x: [0, -60, 20], y: [0, 20, -30], opacity: [0.4, 0.7, 0.5] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 14, repeat: Infinity, repeatType: "mirror" }
        }
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-400/30 blur-[90px]"
        animate={
          reduceMotion
            ? { opacity: 0.6 }
            : { x: [0, -30, 25], y: [0, 30, -15], opacity: [0.3, 0.6, 0.4] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 16, repeat: Infinity, repeatType: "mirror" }
        }
      />
    </div>
  );
}
