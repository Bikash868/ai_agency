"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blurIn, fadeInUp, staggerContainer } from "@/lib/motion";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHero({
  label,
  title,
  titleAccent,
  description,
  imageSrc,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="noise-texture relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
      </div>
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-25" />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid gap-12 ${imageSrc ? "lg:grid-cols-2 lg:items-center" : ""}`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeInUp}
              className="mb-5 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-400"
            >
              {label}
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              {title}{" "}
              {titleAccent && (
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  {titleAccent}
                </span>
              )}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              {description}
            </motion.p>
          </motion.div>

          {imageSrc && (
            <motion.div
              variants={blurIn}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-indigo-500/10">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={640}
                  height={420}
                  className="h-[420px] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              </div>
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-indigo-500/5 blur-2xl" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
