"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  withDotMesh?: boolean;
  withGrid?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  withDotMesh = false,
  withGrid = false,
}: SectionWrapperProps) {
  const Tag = id ? "section" : "div";

  return (
    <Tag id={id} className={`relative ${id ? "py-24 md:py-32" : ""} ${className}`}>
      {withDotMesh && (
        <div className="dot-mesh pointer-events-none absolute inset-0 opacity-40" />
      )}
      {withGrid && (
        <div className="grid-overlay pointer-events-none absolute inset-0 opacity-50" />
      )}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </Tag>
  );
}
