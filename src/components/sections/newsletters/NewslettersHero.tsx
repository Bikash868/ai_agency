"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, slideInRight } from "@/lib/motion";

export function NewslettersHero() {
  return (
    <section className="noise-texture relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Illustrations */}
      <Image
        src="/images/why/taos-glow-bg-illustration.svg"
        alt=""
        width={1436}
        height={1239}
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[130%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-35"
      />
      <Image
        src="/images/pricing-illustration.svg"
        alt=""
        width={334}
        height={334}
        className="pointer-events-none absolute right-[5%] top-[10%] h-auto w-40 opacity-15 md:w-56"
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-indigo-600/7 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-violet-600/5 blur-[90px]" />
      </div>
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-20" />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span
              variants={fadeInUp}
              className="mb-5 inline-block rounded-full border border-indigo-500/25 bg-indigo-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400"
            >
              vibevisuals.art Insights
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Stay Ahead of the{" "}
              <span className="bg-gradient-to-br from-indigo-300 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                AI Curve
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              Weekly dispatches on AI trends, design innovations, SEO strategies, and digital marketing secrets — curated by the team building AI-powered brands every day.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex max-w-md items-center gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/8 bg-white/4 px-5 py-3 text-sm text-white placeholder:text-zinc-500 backdrop-blur-sm focus:border-indigo-500/40 focus:outline-none focus:ring-1 focus:ring-indigo-500/25"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="shrink-0 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-500"
              >
                Subscribe
              </motion.button>
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-3 text-xs text-zinc-600">
              No spam. Unsubscribe anytime. 2,400+ subscribers.
            </motion.p>
          </motion.div>

          {/* Right: Stacked covers */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:block"
          >
            <div className="relative h-[440px]">
              {[
                {
                  src: "/assets/newsletters/hero-1.jpg",
                  alt: "Data insights newsletter",
                  cls: "absolute left-0 top-0 w-52 rotate-[-6deg]",
                },
                {
                  src: "/assets/newsletters/hero-2.jpg",
                  alt: "AI trends newsletter",
                  cls: "absolute left-28 top-8 w-52 rotate-[2deg]",
                },
                {
                  src: "/assets/newsletters/hero-3.jpg",
                  alt: "Web development newsletter",
                  cls: "absolute left-56 top-2 w-52 rotate-[8deg]",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                  whileHover={{ y: -8, zIndex: 10, scale: 1.02 }}
                  className={`${card.cls} glass-card overflow-hidden rounded-2xl shadow-2xl shadow-black/40 transition-all duration-300`}
                >
                  <Image src={card.src} alt={card.alt} width={500} height={350} className="h-72 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
