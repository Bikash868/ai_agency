"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink, ShoppingBag, Sparkles, Globe, ArrowRight,
  CheckCircle2, Palette, Code2, Smartphone,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

// ── Project data ──────────────────────────────────────────────────────────────
const projects = [
  {
    id: "lumiere",
    name: "Lumière",
    tagline: "Premium E-Commerce Experience",
    url: "https://lumiere.vibevisuals.art/",
    displayUrl: "lumiere.vibevisuals.art",
    category: "E-Commerce",
    status: "Live",
    description:
      "A luxury e-commerce storefront built for high-end product discovery. Clean UI, smooth animations, and a curated shopping experience designed to convert.",
    highlights: [
      "Conversion-focused product layouts",
      "Smooth scroll & micro-animations",
      "Mobile-first responsive design",
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    accent: { gradient: "from-violet-600/20 to-indigo-600/20", border: "border-violet-500/20", badge: "bg-violet-500/10 text-violet-300 border-violet-500/20", dot: "bg-violet-400" },
    Icon: ShoppingBag,
    illustration: "/images/pricing-illustration.svg",
  },
  {
    id: "pushpa-mehndi",
    name: "Pushpa Mehndi Arts",
    tagline: "Mehndi Artist Booking Platform",
    url: "https://pushpa-mehndi.vibevisuals.art/",
    displayUrl: "pushpa-mehndi.vibevisuals.art",
    category: "Service Booking",
    status: "Live",
    description:
      "An elegant booking website for a master mehndi artist in Bhubaneswar with 15+ years of experience. Features a design gallery, service packages, and a seamless booking flow.",
    highlights: [
      "Online appointment booking system",
      "Design gallery with 5 bridal collections",
      "Pricing tiers from ₹3,500 – ₹15,000",
    ],
    tech: ["React", "Tailwind CSS", "Responsive Design"],
    accent: { gradient: "from-rose-600/20 to-orange-600/20", border: "border-rose-500/20", badge: "bg-rose-500/10 text-rose-300 border-rose-500/20", dot: "bg-rose-400" },
    Icon: Palette,
    illustration: "/images/floating-icon-illustration.svg",
  },
  {
    id: "indigo-animations",
    name: "IndiGo — Born to Fly",
    tagline: "Airline Brand Animation Showcase",
    url: "https://indigo-animations.vibevisuals.art/",
    displayUrl: "indigo-animations.vibevisuals.art",
    category: "Motion & Animation",
    status: "Live",
    description:
      "A stunning animated brand experience for IndiGo Airlines. High-fidelity motion design and scroll-driven animations that capture the energy and identity of one of India's largest carriers.",
    highlights: [
      "Scroll-driven cinematic animations",
      "Brand-accurate IndiGo visual identity",
      "Smooth performance across all devices",
    ],
    tech: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
    accent: { gradient: "from-sky-600/20 to-indigo-600/20", border: "border-sky-500/20", badge: "bg-sky-500/10 text-sky-300 border-sky-500/20", dot: "bg-sky-400" },
    Icon: Sparkles,
    illustration: "/images/page-illustration.svg",
  },
];

// ── Stat bar ──────────────────────────────────────────────────────────────────
const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "3",    label: "Live Projects Showcased" },
  { value: "24 h", label: "Average Turnaround" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ── Page background ── */}
      <Image src="/images/taos-glow-bg-illustration.svg" alt="" width={1436} height={1239}
        className="pointer-events-none absolute -top-40 left-1/2 h-auto w-[900px] -translate-x-1/2 opacity-[0.06]" />
      <Image src="/images/summary-grid-bg.png" alt="" width={1920} height={1080}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.04]" />
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-15" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-indigo-500/6 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-violet-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">

        {/* ── Back link ── */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-12">
          <Link href="/" className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-indigo-400">
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={2} />
            Back to Home
          </Link>
        </motion.div>

        {/* ── Hero ── */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mb-20">
          <motion.span variants={fadeInUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
            </span>
            Ongoing Work
          </motion.span>

          <motion.h1 variants={fadeInUp}
            className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Live{" "}
            <span className="bg-gradient-to-br from-indigo-300 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
              Client Projects
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-2xl text-lg leading-relaxed text-zinc-400">
            Real websites, real businesses, live on the internet. Here&apos;s a look at what we&apos;ve built recently for our clients — click through to see the live site.
          </motion.p>
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-20 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeInUp}
              className="glass-frosted rounded-2xl px-5 py-4 text-center">
              <div className="bg-gradient-to-br from-indigo-300 to-violet-400 bg-clip-text text-2xl font-bold text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Project cards ── */}
        <div className="space-y-10">
          {projects.map((p, i) => {
            const Icon = p.Icon;
            return (
              <motion.div
                key={p.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="glass-frosted group relative overflow-hidden rounded-3xl"
                >
                  {/* Illustration bg */}
                  <Image src={p.illustration} alt="" width={600} height={500}
                    className="pointer-events-none absolute -right-16 -top-10 h-auto w-[360px] opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.12]" />

                  {/* Gradient tint band */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="relative z-10 grid gap-6 p-5 sm:gap-8 sm:p-8 md:grid-cols-[1fr_300px] md:p-10">

                    {/* ── Left: info ── */}
                    <div className="flex flex-col">
                      {/* Top row */}
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        {/* Icon */}
                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${p.accent.gradient.includes("violet") ? "border-violet-500/20 bg-violet-500/10" : "border-rose-500/20 bg-rose-500/10"}`}>
                          <Icon className={`h-5 w-5 ${p.accent.gradient.includes("violet") ? "text-violet-300" : "text-rose-300"}`} strokeWidth={1.6} />
                        </div>
                        {/* Category */}
                        <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${p.accent.badge}`}>
                          {p.category}
                        </span>
                        {/* Live badge */}
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-0.5 text-xs font-semibold text-emerald-400">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                          Live
                        </span>
                      </div>

                      <h2 className="mb-1.5 text-2xl font-bold text-white md:text-3xl">{p.name}</h2>
                      <p className="mb-1.5 text-sm font-medium text-zinc-400">{p.tagline}</p>
                      <p className="mb-5 text-sm leading-relaxed text-zinc-500">{p.description}</p>

                      {/* Highlights */}
                      <ul className="mb-6 space-y-2">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-zinc-400">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-400" strokeWidth={2} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="mt-auto flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span key={t} className="rounded-lg border border-white/6 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-zinc-400">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ── Right: URL card ── */}
                    <div className="flex min-w-0 flex-col gap-4">
                      {/* Browser chrome + iframe preview */}
                      <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#0a0b18]">
                        {/* Chrome bar */}
                        <div className="flex items-center gap-2 border-b border-white/6 bg-white/[0.03] px-3 py-2.5">
                          <div className="flex gap-1.5">
                            {["bg-red-500/70","bg-yellow-500/70","bg-green-500/70"].map((c) => (
                              <span key={c} className={`h-2 w-2 rounded-full ${c}`} />
                            ))}
                          </div>
                          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-white/6 bg-black/30 px-2 py-0.5">
                            <Globe className="h-2.5 w-2.5 shrink-0 text-zinc-600" strokeWidth={1.6} />
                            <span className="truncate text-[9px] text-zinc-500">{p.displayUrl}</span>
                          </div>
                        </div>

                        {/* Scaled iframe viewport */}
                        <div className="relative h-[140px] w-full overflow-hidden sm:h-[188px]">
                          <iframe
                            src={p.url}
                            title={p.name}
                            scrolling="no"
                            loading="lazy"
                            className="absolute left-0 top-0 pointer-events-none border-none w-[1510px] sm:w-[1280px]"
                            style={{
                              height: "800px",
                              transform: "scale(0.234)",
                              transformOrigin: "0 0",
                            }}
                          />
                          {/* Click-through overlay that opens the real site */}
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition-all duration-300 hover:bg-black/40 group/overlay"
                            aria-label={`Open ${p.name}`}
                          >
                            <span className="flex translate-y-2 items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/overlay:translate-y-0 group-hover/overlay:opacity-100">
                              <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
                              Open live site
                            </span>
                          </a>
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 sm:px-6"
                      >
                        <ExternalLink className="h-4 w-4 shrink-0" strokeWidth={2} />
                        Visit Live Site
                        <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1" strokeWidth={2} />
                      </a>

                      <Link href="/contact"
                        className="flex items-center justify-center gap-1.5 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-zinc-400 transition-all hover:border-white/16 hover:text-zinc-200 sm:px-6">
                        <Sparkles className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                        Build something like this
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-3xl border border-indigo-500/15 bg-gradient-to-r from-indigo-500/[0.06] via-violet-500/[0.04] to-indigo-500/[0.06] px-5 py-10 text-center sm:px-8"
        >
          <Image src="/images/page-illustration.svg" alt="" width={1440} height={427}
            className="pointer-events-none absolute -bottom-2 left-0 h-auto w-full opacity-[0.06]" />
          <div className="relative">
            <div className="mb-2 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/8 px-3 py-1 text-xs font-semibold text-indigo-400">
                <Code2 className="h-3.5 w-3.5" strokeWidth={2} />
                Your project could be next
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Ready to go live?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-zinc-400">
              We design and develop fast, beautiful websites for businesses across India. Share your idea — we&apos;ll have a first draft ready in 24 hours.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500">
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
              </Link>
              <Link href="/why-us"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium text-zinc-300 transition-all hover:border-white/20">
                <Smartphone className="h-4 w-4" strokeWidth={1.6} />
                See Why Clients Choose Us
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
