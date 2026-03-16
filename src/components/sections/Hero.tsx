"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="noise-texture relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Main glow background — concentric circles + blue radiance */}
      <Image
        src="/images/why/taos-glow-bg-illustration.svg"
        alt=""
        width={1436}
        height={1239}
        priority
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[140%] max-w-none -translate-x-1/2 -translate-y-[40%] opacity-60 md:w-[110%]"
      />

      {/* Pricing rings — decorative concentric circles */}
      <Image
        src="/images/pricing-illustration.svg"
        alt=""
        width={334}
        height={334}
        priority
        className="animate-float pointer-events-none absolute right-[8%] top-[15%] h-auto w-48 opacity-25 md:w-72"
      />

      {/* Floating icon glow — left side accent */}
      <Image
        src="/images/why/floating-icon-illustration.svg"
        alt=""
        width={646}
        height={600}
        priority
        className="pointer-events-none absolute -left-20 bottom-[10%] h-auto w-64 opacity-30 md:w-96"
      />

      {/* Dot mesh background */}
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-30" />

      {/* Grid overlay */}
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-25" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp}>
          <span className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
            AI-Powered Digital Agency
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          We Build{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            AI-Powered
          </span>{" "}
          Digital Experiences
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl"
        >
          Promotional Videos. Campaign Design. SEO. Web Solutions.
          <br className="hidden sm:block" />
          We transform brands with cutting-edge AI creativity.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <GlowButton href="#cta" variant="primary">
            Start Your Project
          </GlowButton>
          <GlowButton href="#portfolio" variant="secondary">
            View Our Work
          </GlowButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border border-zinc-600 p-1"
          >
            <div className="mx-auto h-2 w-1 rounded-full bg-indigo-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
