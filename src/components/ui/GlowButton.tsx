"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const MotionLink = motion.create(Link);

export function GlowButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: GlowButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer";

  const styles = {
    primary:
      "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 hover:shadow-indigo-500/30",
    secondary:
      "border border-white/10 text-zinc-200 backdrop-blur-sm bg-white/4 hover:bg-white/8 hover:border-white/20",
  };

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    className: `${base} ${styles[variant]} ${className}`,
  };

  const glow = variant === "primary" && (
    <span className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-indigo-400/10 blur-sm" />
  );

  if (href) {
    return (
      <MotionLink href={href} {...motionProps}>
        {glow}
        <span className="relative z-10">{children}</span>
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {glow}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
