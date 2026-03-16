"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function GlowButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-bold tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40",
    secondary:
      "border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400/50",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "primary" && (
        <span className="animate-glow-pulse pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/20 to-violet-500/20 blur-sm" />
      )}
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
