"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap, Clock, CheckCircle2, Sparkles, BrainCircuit,
  ArrowRight, TimerOff, Hourglass,
} from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion";

const comparisons = [
  { task: "Promotional Video",     traditional: "2–3 weeks", ai: "2–3 days",  saving: "80% faster" },
  { task: "Campaign Poster Batch", traditional: "5–7 days",  ai: "Same day",  saving: "Same day"   },
  { task: "SEO Content Pack",      traditional: "2 weeks",   ai: "3 days",    saving: "70% faster" },
  { task: "Brand Identity Kit",    traditional: "3–4 weeks", ai: "~1 week",   saving: "65% faster" },
  { task: "Ad Creative Set (×10)", traditional: "1 week",    ai: "24 hours",  saving: "85% faster" },
];

const capabilities = [
  { Icon: Sparkles,     text: "Instant AI-generated first drafts" },
  { Icon: BrainCircuit, text: "Automated revision cycles" },
  { Icon: Zap,          text: "Same-day turnaround on creatives" },
  { Icon: CheckCircle2, text: "Quality checks baked into every pipeline" },
  { Icon: TimerOff,     text: "No endless back-and-forth" },
  { Icon: Clock,        text: "24 h delivery on standard requests" },
];

export function WhyUsAISpeed() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background layers */}
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-20" />
      <Image
        src="/images/section-center-illustration.svg" alt=""
        width={646} height={600}
        className="pointer-events-none absolute -right-24 top-0 h-auto w-[420px] opacity-[0.2]"
      />
      <Image
        src="/images/taos-glow-bg-illustration.svg" alt=""
        width={1436} height={1239}
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
      />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-indigo-500/8 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-violet-500/6 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            <Zap className="h-3.5 w-3.5" strokeWidth={2} />
            AI-Powered Speed
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            We Use AI So{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
              You Don&apos;t Wait
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg"
          >
            Traditional agencies make you wait weeks for every revision. We&apos;ve rebuilt every
            creative workflow with AI at the core — so your campaigns go live in days, not months.
          </motion.p>
        </motion.div>

        {/* ── Main content: comparison table + capabilities ── */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Left — comparison table with progress bars */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="glass-frosted overflow-hidden rounded-3xl"
          >
            {/* Table header */}
            <div className="grid grid-cols-[1fr_140px_140px] border-b border-white/6 px-6 py-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Task</span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600">
                <Hourglass className="h-3.5 w-3.5" strokeWidth={2} />
                Traditional
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
                With Our AI
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/4">
              {comparisons.map((row, i) => (
                <motion.div
                  key={row.task}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
                  className="group grid grid-cols-[1fr_140px_140px] items-center px-6 py-4 transition-colors duration-200 hover:bg-white/[0.025]"
                >
                  {/* Task + saving badge */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-zinc-200">{row.task}</span>
                    <span className="hidden rounded-full border border-indigo-500/20 bg-indigo-500/8 px-2 py-0.5 text-[10px] font-semibold text-indigo-300 sm:inline-block">
                      {row.saving}
                    </span>
                  </div>

                  {/* Traditional */}
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 shrink-0 text-zinc-700" strokeWidth={1.6} />
                    <span className="text-xs text-zinc-600 line-through">{row.traditional}</span>
                  </div>

                  {/* AI */}
                  <div className="flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 shrink-0 text-indigo-400" strokeWidth={2} />
                    <span className="text-xs font-semibold text-indigo-300">{row.ai}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer bar */}
            <div className="flex items-center justify-between border-t border-white/6 bg-indigo-500/[0.04] px-6 py-4">
              <span className="text-xs text-zinc-500">Average across all project types</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                <Zap className="h-3 w-3" strokeWidth={2.5} />
                Up to 85% faster
              </span>
            </div>

            {/* Conclusion */}
            <div className="px-6 py-6">
              {/* Tagline */}
              <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                While competitors are still scheduling kickoff calls, your campaign is already live.
                Our AI-augmented pipelines eliminate the bottlenecks that make traditional agencies slow —
                no handoffs, no idle waiting, no compromised quality.
              </p>

              {/* Mini stat row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "< 24 h", label: "First draft delivered" },
                  { value: "0",      label: "Unnecessary back-and-forths" },
                  { value: "100%",   label: "AI-augmented workflows" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-xl border border-white/6 bg-white/[0.03] px-3 py-3 text-center">
                    <div className="bg-gradient-to-br from-indigo-300 to-violet-400 bg-clip-text text-lg font-bold text-transparent">
                      {value}
                    </div>
                    <div className="mt-0.5 text-[10px] leading-tight text-zinc-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — capabilities + promise card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* What AI enables */}
            <div className="glass-frosted rounded-3xl p-7">
              <h3 className="mb-5 text-base font-bold text-white">What Our AI Stack Enables</h3>
              <ul className="space-y-3.5">
                {capabilities.map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-zinc-400">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Promise card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="glass-frosted relative overflow-hidden rounded-3xl p-7"
            >
              <Image
                src="/images/page-illustration.svg" alt=""
                width={1440} height={427}
                className="pointer-events-none absolute -bottom-2 left-0 h-auto w-full opacity-[0.08]"
              />
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-500/15 blur-2xl" />

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
                  <Zap className="h-6 w-6 text-indigo-300" strokeWidth={1.6} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Your first draft in 24 hours. Guaranteed.
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                  Send us your brief today and we&apos;ll deliver an AI-generated first draft by
                  tomorrow — no waiting weeks just to see a concept.
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  Start your project
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom highlight strip ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-2xl border border-indigo-500/15 bg-gradient-to-r from-indigo-500/[0.06] via-violet-500/[0.04] to-indigo-500/[0.06] px-8 py-6"
        >
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10">
              <BrainCircuit className="h-6 w-6 text-indigo-300" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-white">
                Every project is AI-augmented from day one.
              </p>
              <p className="mt-0.5 text-sm text-zinc-400">
                From brief to final delivery — our pipelines use AI at every step so you spend
                less time waiting and more time growing.
              </p>
            </div>
            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500"
            >
              Get a Free Brief Review
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
