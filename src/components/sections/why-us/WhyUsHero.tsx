"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { staggerContainer, fadeInUp, slideInRight } from "@/lib/motion";
import { GlowButton } from "@/components/ui/GlowButton";

const stats = [
  { value: "200+", label: "Projects" },
  { value: "98%", label: "Satisfaction" },
  { value: "3×", label: "Avg. ROI" },
];

export function WhyUsHero() {
  return (
    <section className="noise-texture relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-36">
      {/* Background illustrations */}
      <Image
        src="/images/taos-glow-bg-illustration.svg"
        alt=""
        width={1436}
        height={1239}
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[130%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40"
      />
      <Image
        src="/images/section-center-illustration.svg"
        alt=""
        width={646}
        height={600}
        className="pointer-events-none absolute -right-20 top-16 h-auto w-72 opacity-20 md:w-96"
      />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-indigo-600/8 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[350px] w-[350px] rounded-full bg-violet-600/6 blur-[90px]" />
      </div>
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-20" />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span
              variants={fadeInUp}
              className="mb-5 inline-block rounded-full border border-indigo-500/25 bg-indigo-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400"
            >
              Why vibevisuals.art
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              The AI Agency{" "}
              <span className="bg-gradient-to-br from-indigo-300 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Built for Results
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              We don&apos;t just deliver deliverables — we deliver outcomes. Every
              project is engineered with AI precision, human creativity, and a
              relentless focus on measurable impact.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <GlowButton href="/#cta" variant="primary">
                Start Your Project
              </GlowButton>
              <GlowButton href="/#portfolio" variant="secondary">
                View Our Work
              </GlowButton>
            </motion.div>

            {/* Inline stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex gap-8 border-t border-white/5 pt-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-3xl font-bold text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image collage */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass-card relative overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/why-us/ai-workspace.jpg"
                    alt="AI digital workspace"
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="glass-card relative overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/why-us/team-collab.jpg"
                    alt="Team collaboration"
                    width={400}
                    height={200}
                    className="h-32 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="glass-card relative overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/why-us/data-analytics.jpg"
                    alt="Data analytics dashboard"
                    width={400}
                    height={200}
                    className="h-32 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="glass-card relative overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/why-us/digital-marketing.jpg"
                    alt="Digital marketing results"
                    width={400}
                    height={280}
                    className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-6 bottom-12 rounded-2xl px-5 py-3 shadow-xl shadow-black/30"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-400">
                  <Rocket className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AI-Powered</div>
                  <div className="text-xs text-zinc-500">Always on, always scaling</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
