"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, CheckCircle2, Smartphone, Globe,
  TrendingUp, X, Zap, BarChart2, ShoppingCart, GraduationCap,
  Building2, Users, BrainCircuit, ShieldCheck, Table2, Activity,
  Sparkles, Video, Palette,
} from "lucide-react";
import type { Product } from "@/lib/product-data";
import {
  fadeInUp, fadeIn, scaleIn, slideInLeft, slideInRight,
  staggerContainer, staggerFast,
} from "@/lib/motion";

// ── Icon map ──────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  BarChart2, ShoppingCart, GraduationCap, Building2, Globe, Smartphone,
  Users, BrainCircuit, ShieldCheck, Table2, Activity, TrendingUp, Zap,
  Sparkles, Video, Palette,
};
function getIcon(name: string) { return iconMap[name] ?? Zap; }

// ── Header images (Unsplash) per product ─────────────────────────────────────
const headerImages: Record<string, string> = {
  viora:        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=500&fit=crop&q=85",
  metamart:     "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&h=500&fit=crop&q=85",
  vibecreate:   "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400&h=500&fit=crop&q=85",
  growthengine: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&h=500&fit=crop&q=85",
};

// ── Motion helpers ────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp} initial="hidden" whileInView="visible"
      viewport={{ once: true, amount: 0.08 }} transition={{ delay }}
      className={className}
    >{children}</motion.div>
  );
}

function SubHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <FadeIn className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">{subtitle}</p>
      )}
    </FadeIn>
  );
}

// ── Reusable illustration layer ───────────────────────────────────────────────
function Illus({
  src, alt = "", width, height, className,
}: {
  src: string; alt?: string; width: number; height: number; className: string;
}) {
  return (
    <Image
      src={src} alt={alt} width={width} height={height}
      className={`pointer-events-none select-none ${className}`}
    />
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export function ProductDetailContent({ product }: { product: Product }) {
  const Icon = getIcon(product.iconName);
  const heroImg = headerImages[product.id];

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ══ GLOBAL PAGE BACKGROUND ══════════════════════════════════════════ */}
      {/* Summary-grid texture across the whole page */}
      <Illus
        src="/images/summary-grid-bg.png" width={1920} height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-15" />

      {/* Fixed indigo ambient blob */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">

        {/* ── Breadcrumb ────────────────────────────────────────────────── */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-10">
          <Link
            href="/#portfolio"
            className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-indigo-400"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={2} />
            Back to Products
          </Link>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <div className="relative mb-24 overflow-hidden rounded-3xl">
          {/* Section illustrations */}
          <Illus
            src="/images/floating-icon-illustration.svg" width={646} height={600}
            className="absolute -right-16 -top-8 h-auto w-[420px] opacity-[0.08]"
          />
          <Illus
            src="/images/page-illustration.svg" width={1440} height={427}
            className="absolute -left-20 bottom-0 h-auto w-[600px] opacity-[0.06]"
          />

          {/* Glass wrapper — illustrations bleed through */}
          <motion.div
            variants={staggerContainer} initial="hidden" animate="visible"
            className="glass-frosted relative z-10 overflow-hidden rounded-3xl"
          >
            {/* Banner image */}
            {heroImg && (
              <motion.div variants={fadeIn} className="relative h-52 overflow-hidden md:h-64">
                <Image
                  src={heroImg} alt={product.title} fill priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-transparent to-transparent" />
              </motion.div>
            )}

            <div className="p-8 md:p-10">
              {/* Icon + meta */}
              <motion.div variants={fadeInUp} className="mb-6 flex flex-wrap items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-indigo-500/10 text-indigo-300 shadow-lg shadow-indigo-500/10">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      {product.category}
                    </span>
                    {product.comingSoon && (
                      <span className="rounded-full border border-amber-500/25 bg-amber-500/8 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400/80">
                        Coming Soon
                      </span>
                    )}
                    {product.platforms.map((p) => (
                      <span key={p} className="flex items-center gap-1.5 rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs text-zinc-400">
                        {p.includes("Mobile") ? <Smartphone className="h-3 w-3" strokeWidth={1.8} /> : <Globe className="h-3 w-3" strokeWidth={1.8} />}
                        {p}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">{product.title}</h1>
                  <p className="mt-2 text-lg font-medium text-zinc-400">{product.tagline}</p>
                </div>
              </motion.div>

              <motion.p variants={fadeInUp} className="mb-8 max-w-4xl text-base leading-relaxed text-zinc-400 md:text-lg">
                {product.heroDescription}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30">
                  {product.comingSoon ? "Join the Waitlist" : "Request Demo"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
                </Link>
                <Link href="/#cta" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-7 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/8">
                  Contact Sales
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative mb-24 overflow-hidden">
          {/* Section illustration — page-illustration top-right */}
          <Illus
            src="/images/page-illustration.svg" width={1440} height={427}
            className="absolute -right-32 top-0 h-auto w-[680px] opacity-20"
          />
          <Illus
            src="/images/grid-taos.png" width={1200} height={1200}
            className="absolute left-0 top-1/2 h-auto w-[500px] -translate-y-1/2 opacity-100"
          />

          <div className="relative z-10">
            <SubHeading title="How It Works" />
            <motion.div
              variants={staggerContainer} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {product.howItWorks.map((step, i) => (
                <motion.div
                  key={step.step} variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }}
                  className="glass-frosted relative overflow-hidden rounded-2xl p-6"
                >
                  <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/8 blur-2xl" />
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/15 bg-indigo-500/8 text-sm font-bold text-indigo-300">
                    {String(step.step).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{step.description}</p>
                  <div className="pointer-events-none absolute bottom-3 right-4 select-none text-5xl font-black text-white/[.025]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            BUSINESS IMPACT
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative mb-24 overflow-hidden">
          {/* network illustration — right side */}
          <Illus
            src="/images/network-right-illustration.svg" width={800} height={700}
            className="absolute left-0 top-1/2 h-auto w-[500px] -translate-y-1/2 opacity-[0.12]"
          />
          {/* <Illus
            src="/images/section-center-illustration.svg" width={900} height={800}
            className="absolute left-1/2 top-1/3 h-auto w-[400px] opacity-20"
          /> */}

          <div className="relative z-10">
            <SubHeading
              title={product.businessImpact.title}
              subtitle={product.businessImpact.description}
            />
            <motion.div
              variants={staggerContainer} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid gap-5 md:grid-cols-2"
            >
              {product.businessImpact.impacts.map((impact, i) => (
                <motion.div
                  key={impact.title}
                  variants={i % 2 === 0 ? slideInLeft : slideInRight}
                  className="glass-frosted overflow-hidden rounded-2xl p-7"
                >
                  <h3 className="mb-5 flex items-center gap-2.5 text-base font-bold text-white">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-indigo-500/15 bg-indigo-500/8 text-indigo-400">
                      <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    {impact.title}
                  </h3>
                  <div className="space-y-3">
                    {/* Before — muted */}
                    <div className="rounded-xl border border-white/6 bg-white/[0.03] p-4">
                      <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                        <X className="h-3 w-3" strokeWidth={2.5} />Before
                      </p>
                      <p className="text-sm text-zinc-400">{impact.before}</p>
                    </div>
                    {/* After — soft indigo */}
                    <div className="rounded-xl border border-indigo-500/15 bg-indigo-500/[0.05] p-4">
                      <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-indigo-500/50">
                        <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />After
                      </p>
                      <p className="text-sm text-zinc-300">{impact.after}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            KEY BENEFITS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative mb-24 overflow-hidden">
          <Illus
            src="/images/key-diff-right-illustration.svg" width={900} height={800}
            className="absolute -right-16 top-0 h-auto w-[480px] opacity-[0.1]"
          />
          <Illus
            src="/images/floating-icon-illustration.svg" width={646} height={600}
            className="absolute -left-20 bottom-0 h-auto w-[360px] opacity-[0.06]"
          />

          <div className="relative z-10">
            <SubHeading title="Key Benefits" />
            <motion.div
              variants={staggerContainer} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {product.benefits.map((benefit) => {
                const BIcon = getIcon(benefit.iconName);
                return (
                  <motion.div
                    key={benefit.title} variants={scaleIn}
                    whileHover={{ y: -5 }} transition={{ duration: 0.2 }}
                    className="glass-frosted group rounded-2xl p-6"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/6 bg-white/[0.04] text-zinc-300 transition-all duration-300 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/8 group-hover:text-indigo-300">
                      <BIcon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <h3 className="mb-2 text-sm font-bold text-white">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FEATURES INCLUDED
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative mb-24 overflow-hidden">
          <Illus
            src="/images/section-center-illustration.svg" width={1000} height={800}
            className="absolute left-1/3 top-1/2 h-auto w-[400px] opacity-50"
          />

          <div className="relative z-10">
            <SubHeading title="Features Included" />
            <FadeIn>
              <div className="glass-frosted rounded-2xl p-8 md:p-10">
                <motion.div
                  variants={staggerFast} initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  className="grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3"
                >
                  {product.features.map((feature) => (
                    <motion.div key={feature} variants={fadeInUp} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400/60" strokeWidth={2} />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            PRICING PLANS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative mb-24 overflow-hidden">
          <Illus
            src="/images/pricing-illustration-top.svg" width={1440} height={427}
            className="absolute -top-10 left-0 right-0 h-auto w-full opacity-50"
          />
          <Illus
            src="/images/pricing-illustration.svg" width={800} height={600}
            className="absolute -bottom-10 right-0 h-auto w-[500px] opacity-20"
          />
          <Illus
            src="/images/grid-taos.png" width={1200} height={1200}
            className="absolute right-0 top-0 h-auto w-[400px] opacity-10"
          />

          <div className="relative z-10">
            <SubHeading title="Pricing Plans" />
            <motion.div
              variants={staggerContainer} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {product.pricing.map((plan, i) => {
                const isPopular = i === 1;
                return (
                  <motion.div
                    key={plan.name} variants={scaleIn}
                    whileHover={{ y: -6 }} transition={{ duration: 0.22 }}
                    className={`glass-frosted relative flex flex-col overflow-hidden rounded-2xl p-8 transition-all ${
                      isPopular ? "ring-1 ring-indigo-500/30 shadow-xl shadow-indigo-500/8" : ""
                    }`}
                  >
                    {/* Popular glow */}
                    {isPopular && (
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-indigo-500/[0.04]" />
                    )}
                    {isPopular && (
                      <div className="absolute right-5 top-5 z-10">
                        <span className="rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-300">
                          Popular
                        </span>
                      </div>
                    )}

                    <h3 className="relative text-lg font-bold text-white">{plan.name}</h3>
                    <p className="relative mt-1 text-xs text-zinc-500">{plan.description}</p>
                    <p className="relative mt-5 text-3xl font-bold text-white">{plan.price}</p>

                    <ul className="relative my-7 flex-1 space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-400/60" strokeWidth={2.2} />
                          <span className="text-sm text-zinc-400">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`relative block rounded-xl py-3 text-center text-sm font-semibold transition-all duration-200 ${
                        isPopular
                          ? "bg-indigo-600 text-white hover:bg-indigo-500"
                          : "border border-white/8 bg-white/[0.03] text-zinc-300 hover:border-white/15 hover:bg-white/7"
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            PERFECT FOR
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative mb-24 overflow-hidden">
          <Illus
            src="/images/network-right-illustration.svg" width={800} height={700}
            className="absolute -left-24 top-1/2 h-auto w-[400px] -translate-y-1/2 opacity-80"
          />

          <div className="relative z-10">
            <SubHeading title="Perfect For" />
            <motion.div
              variants={staggerFast} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {product.idealFor.map((biz) => (
                <motion.span
                  key={biz} variants={scaleIn} whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all hover:border-indigo-500/20 hover:bg-indigo-500/6 hover:text-zinc-200"
                >
                  {biz}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CTA
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden">
          {/* CTA illustrations */}
          <Illus
            src="/images/taos-glow-bg-illustration.svg" width={1436} height={1239}
            className="absolute left-1/2 top-1/2 h-auto w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.1]"
          />
          <Illus
            src="/images/grid-beyond-workflow.png" width={1200} height={900}
            className="absolute inset-0 h-full w-full object-cover opacity-[0.05]"
          />
          <Illus
            src="/images/section-center-illustration.svg" width={646} height={600}
            className="absolute -right-16 -bottom-8 h-auto w-[360px] opacity-20"
          />

          <FadeIn>
            <div className="glass-frosted relative z-10 overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-24">
              {/* Inner glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

              <div className="relative mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/8 bg-indigo-500/10 text-indigo-300">
                <Icon className="h-8 w-8" strokeWidth={1.4} />
              </div>

              <h2 className="relative mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
                Ready to get started with{" "}
                <span className="bg-gradient-to-br from-indigo-300 to-violet-400 bg-clip-text text-transparent">
                  {product.title}
                </span>?
              </h2>

              <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
                Join forward-thinking businesses already using {product.title}. Get started today and experience the difference.
              </p>

              <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30"
                >
                  {product.comingSoon ? "Join the Waitlist" : "Request a Demo"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
                </Link>
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-8 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-all hover:border-white/18 hover:bg-white/7"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
