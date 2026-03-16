"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {label && (
        <motion.span
          variants={fadeInUp}
          className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-400"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
