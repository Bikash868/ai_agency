"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Palette,
  Search,
  Code2,
  ArrowRight,
  TrendingUp,
  Star,
} from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const CYCLE_MS = 3500;

const services = [
  {
    id: "web",
    tabLabel: "Web & Mobile",
    word: "web & mobile apps",
    headline: "Built to Perform at Scale",
    description:
      "Modern, AI-integrated web applications with 95+ Lighthouse scores. Fast to build, architected to scale with your business.",
    Icon: Code2,
    accentGlow: "rgba(6,182,212,0.14)",
    iconCls: "bg-cyan-500/12 text-cyan-400",
    borderCls: "border-cyan-500/20",
    metrics: [
      { value: "95+", label: "Lighthouse Score" },
      { value: "50+", label: "Brands Served" },
    ],
    tags: ["Next.js Apps", "React Native", "E-Commerce", "SaaS Platforms"],
  },
  {
    id: "video",
    tabLabel: "AI Videos",
    word: "AI videos",
    headline: "Videos That Stop the Scroll",
    description:
      "AI-generated video campaigns that drive 4× higher engagement. From brand films to social reels, delivered in days — not weeks.",
    Icon: Video,
    accentGlow: "rgba(99,102,241,0.18)",
    iconCls: "bg-indigo-500/12 text-indigo-400",
    borderCls: "border-indigo-500/20",
    metrics: [
      { value: "4×", label: "Engagement Boost" },
      { value: "5 days", label: "Avg. Delivery" },
    ],
    tags: ["Brand Films", "Social Reels", "Product Videos", "Ad Campaigns"],
  },
  {
    id: "design",
    tabLabel: "Design",
    word: "bold design",
    headline: "Design That Converts",
    description:
      "AI-augmented campaign visuals and poster design that stand out in crowded feeds and drive measurable click-through rates.",
    Icon: Palette,
    accentGlow: "rgba(139,92,246,0.18)",
    iconCls: "bg-violet-500/12 text-violet-400",
    borderCls: "border-violet-500/20",
    metrics: [
      { value: "200+", label: "Campaigns Delivered" },
      { value: "3×", label: "Avg. CTR Lift" },
    ],
    tags: ["Poster Series", "Social Graphics", "Brand Identity", "Ad Creatives"],
  },
  {
    id: "seo",
    tabLabel: "SEO",
    word: "SEO growth",
    headline: "Rank. Traffic. Revenue.",
    description:
      "Data-driven SEO that doubles organic traffic in 90 days. Every optimization tied to revenue impact, not vanity metrics.",
    Icon: Search,
    accentGlow: "rgba(16,185,129,0.14)",
    iconCls: "bg-emerald-500/12 text-emerald-400",
    borderCls: "border-emerald-500/20",
    metrics: [
      { value: "2×", label: "Organic Traffic" },
      { value: "90 days", label: "Avg. Timeframe" },
    ],
    tags: ["Technical SEO", "Content Strategy", "Link Building", "Core Web Vitals"],
  },
];

const heroStats = [
  { value: "200+", label: "Projects" },
  { value: "98%", label: "Satisfaction" },
  { value: "3×", label: "Avg. ROI" },
];

const avatars = [
  { initials: "NX", bg: "bg-indigo-600" },
  { initials: "BF", bg: "bg-violet-600" },
  { initials: "OR", bg: "bg-emerald-600" },
  { initials: "LS", bg: "bg-cyan-700" },
];

const panelVariants = {
  enter: { opacity: 0, y: 20, scale: 0.97, filter: "blur(4px)" },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 260, damping: 28 },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.97,
    filter: "blur(4px)",
    transition: { duration: 0.22, ease: "easeIn" as const },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.06, type: "spring" as const, stiffness: 300, damping: 24 },
  }),
};

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((p) => (p + 1) % services.length),
      CYCLE_MS
    );
    return () => clearInterval(id);
  }, [paused]);

  const svc = services[active];

  return (
    <section className="noise-texture relative flex min-h-screen items-center overflow-hidden">
      {/* Background illustrations */}
      <Image
        src="/images/taos-glow-bg-illustration.svg"
        alt=""
        width={1436}
        height={1239}
        priority
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[130%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-50 md:w-[100%]"
      />
      <Image
        src="/images/section-center-illustration.svg"
        alt=""
        width={646}
        height={600}
        priority
        className="pointer-events-none absolute -bottom-16 -left-24 h-auto w-64 opacity-20 md:w-80"
      />
      <Image
        src="/images/pricing-illustration.svg"
        alt=""
        width={334}
        height={334}
        priority
        className="animate-float pointer-events-none absolute right-[4%] top-[12%] h-auto w-36 opacity-12 md:w-52"
      />
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-25" />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />

      {/* ── Layout ── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-4 py-28 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-36"
      >

        {/* ═══════════════ LEFT ═══════════════ */}
        <div>
          {/* — Badge with live pulse dot — */}
          <motion.div variants={fadeInUp} className="mb-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
              </span>
              AI-Powered Digital Agency
            </span>
          </motion.div>

          {/* — Headline with animated cycling word — */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]"
          >
            <span className="text-white">We craft </span>
            {/*
              Fixed-height container so the layout never reflows when the word changes.
              The width is `max-content` so it expands with the longest word.
            */}
            <span
              className="relative inline-block overflow-hidden align-[-0.12em]"
              style={{ minWidth: "6ch" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={svc.word}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-110%", opacity: 0 }}
                  transition={{ type: "spring" as const, stiffness: 300, damping: 28 }}
                  className="inline-block bg-gradient-to-br from-indigo-300 via-indigo-400 to-violet-400 bg-clip-text text-transparent"
                >
                  {svc.word}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            <span className="text-zinc-200">that deliver results.</span>
          </motion.h1>

          {/* — Description — */}
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-[440px] text-base leading-relaxed text-zinc-400"
          >
            From AI-generated video to search dominance — we build digital
            experiences engineered for impact. Select a service to explore.
          </motion.p>

          {/* — Compact stats strip — */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex overflow-hidden rounded-2xl border border-white/7 bg-white/3"
          >
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-1 flex-col items-center py-3.5 ${
                  i < heroStats.length - 1 ? "border-r border-white/7" : ""
                }`}
              >
                <span className="text-xl font-bold text-white">{s.value}</span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* — Service tab strip — */}
          <motion.div
            variants={fadeInUp}
            className="mt-7"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Tab row */}
            <div className="relative flex gap-0 rounded-2xl border border-white/7 bg-white/3 p-1">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => { setActive(i); setPaused(true); }}
                  className={`relative flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-medium transition-colors duration-200 ${
                    active === i ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {active === i && (
                    <motion.span
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-xl bg-white/8"
                      transition={{ type: "spring" as const, stiffness: 380, damping: 32 }}
                    />
                  )}
                  <s.Icon
                    className={`relative z-10 h-3.5 w-3.5 shrink-0 transition-colors ${
                      active === i ? "text-indigo-400" : "text-zinc-600"
                    }`}
                    strokeWidth={1.8}
                  />
                  <span className="relative z-10 hidden sm:inline">{s.tabLabel}</span>
                </button>
              ))}
            </div>

            {/* Thin auto-progress bar below tabs */}
            {/* <div className="mt-2 h-[2px] overflow-hidden rounded-full bg-white/5">
              <motion.div
                key={`bar-${active}`}
                className="h-full origin-left rounded-full bg-indigo-500/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: paused ? 0 : 1 }}
                transition={{ duration: CYCLE_MS / 1000, ease: "linear" as const }}
              />
            </div> */}
          </motion.div>

          {/* — CTA row — */}
          {/* <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <GlowButton href="/#cta" variant="primary">
              Start Your Project
            </GlowButton>
            <GlowButton href="/#portfolio" variant="secondary">
              View Our Work
            </GlowButton>
          </motion.div> */}

          {/* — Social proof: avatar stack + star rating — */}
          <motion.div
            variants={fadeInUp}
            className="mt-7 flex items-center gap-4"
          >
            {/* Overlapping initials */}
            <div className="flex -space-x-2.5">
              {avatars.map((a) => (
                <div
                  key={a.initials}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-background text-[10px] font-bold text-white ring-0 ${a.bg}`}
                >
                  {a.initials}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-7 w-px bg-white/8" />

            {/* Stars + caption */}
            <div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-indigo-400 text-indigo-400" />
                ))}
                <span className="ml-1.5 text-xs font-semibold text-white">5.0</span>
              </div>
              <p className="mt-0.5 text-[11px] text-zinc-500">
                Trusted by <span className="text-zinc-300 font-medium">50+ brands</span> worldwide
              </p>
            </div>
          </motion.div>

          {/* — Scroll indicator — */}
          {/* <motion.div
            variants={fadeInUp}
            className="mt-10 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-8 w-5 items-center justify-center rounded-full border border-zinc-700/60"
            >
              <div className="h-1.5 w-0.5 rounded-full bg-indigo-400" />
            </motion.div>
            <span className="text-[11px] uppercase tracking-widest text-zinc-600">
              Scroll to explore
            </span>
          </motion.div> */}
        </div>

        {/* ═══════════════ RIGHT: Dynamic service panel ═══════════════ */}
        <div
          className="relative hidden lg:block"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={svc.id}
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`glass-card relative overflow-hidden rounded-3xl border p-8 ${svc.borderCls}`}
            >
              {/* Ambient glow per service */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full blur-3xl"
                style={{ background: svc.accentGlow }}
              />
              <div
                className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full blur-2xl"
                style={{ background: svc.accentGlow }}
              />

              <div className="relative z-10">
                {/* Icon + headline */}
                <div className="mb-5 flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${svc.iconCls}`}>
                    <svc.Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                      {svc.tabLabel}
                    </p>
                    <h2 className="mt-0.5 text-xl font-bold text-white">
                      {svc.headline}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-zinc-400">
                  {svc.description}
                </p>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {svc.metrics.map((m) => (
                    <div key={m.label} className="glass-subtle rounded-2xl p-4">
                      <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                        <TrendingUp className="h-3 w-3" strokeWidth={2} />
                        {m.label}
                      </div>
                      <div className="mt-1 text-2xl font-bold text-white">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {svc.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      custom={i}
                      variants={tagVariants}
                      initial="hidden"
                      animate="visible"
                      className="rounded-lg border border-white/7 bg-white/4 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href="/#services"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 20 }}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
                >
                  See full service details
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Step dots */}
          <div className="mt-5 flex justify-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setPaused(true); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  active === i ? "w-6 bg-indigo-400" : "w-1.5 bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
