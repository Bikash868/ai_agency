"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart2,
  ShoppingCart,
  GraduationCap,
  Building2,
  Globe,
  Smartphone,
  ArrowRight,
  Clock,
  CheckCircle2,
  Sparkles,
  Video,
  Palette,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/motion";
import { products } from "@/lib/product-data";
import type { Product } from "@/lib/product-data";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  BarChart2,
  ShoppingCart,
  GraduationCap,
  Building2,
  Globe,
  Smartphone,
  Sparkles,
  Video,
  Palette,
};

// Curated Unsplash images matched to each product's context
const cardImages: Record<string, string> = {
  viora:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=480&fit=crop&q=85",
  metamart:
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=480&fit=crop&q=85",
  vibecreate:
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&h=480&fit=crop&q=85",
  "eschool-management":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&h=480&fit=crop&q=85",
  growthengine:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=480&fit=crop&q=85",
};

// ── Card animation variants ────────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 24,
      delay: i * 0.12,
    },
  }),
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = iconMap[product.iconName] ?? BarChart2;
  const highlights = product.features.slice(0, 3);
  const imgSrc = cardImages[product.id];

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ y: { type: "spring", stiffness: 300, damping: 28 }, scale: { duration: 0.2 } }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/6 bg-zinc-950/60 backdrop-blur-xl"
      style={{
        boxShadow: "0 1px 1px rgba(255,255,255,0.03) inset, 0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      {/* ═══════ Colored glow border on hover ═══════ */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 0 1px ${product.theme.glow.replace("0.18", "0.5")}, 0 0 48px ${product.theme.glow.replace("0.18", "0.12")}`,
        }}
      />

      {/* ═══════ HEADER — full-bleed image ═══════ */}
      <div className="relative h-52 overflow-hidden">
        {/* Image zooms in on hover */}
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        )}

        {/* Product-color tint overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
          style={{
            background: `linear-gradient(160deg, ${product.theme.glow.replace("0.18", "0.55")} 0%, transparent 55%)`,
          }}
        />

        {/* Darken bottom → blends with card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

        {/* Shimmer sweep */}
        <div className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/8 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[300%]" />

        {/* Category badge — top left */}
        <div className="absolute left-4 top-4 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/70 backdrop-blur-md">
            {product.category}
          </span>
        </div>

        {/* Coming soon / index — top right */}
        <div className="absolute right-4 top-4 z-10">
          {product.comingSoon ? (
            <span className="flex items-center gap-1.5 rounded-full border border-amber-500/35 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-400 backdrop-blur-md">
              <Clock className="h-3 w-3" strokeWidth={2} />
              Coming Soon
            </span>
          ) : (
            <span className="rounded-full border border-white/12 bg-black/40 px-3 py-1.5 text-[10px] font-bold text-white/35 backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        {/* Floating icon pill — bottom-left */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-black/50 text-white/70 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </div>
        </div>
      </div>

      {/* ═══════ BODY ═══════ */}
      <div className="flex flex-1 flex-col p-7">
        {/* Title + tagline */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-white/90">
            {product.title}
          </h3>
          <p className={`mt-1 text-sm font-medium ${product.theme.iconText}`}>{product.tagline}</p>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-zinc-400 line-clamp-2">{product.shortDescription}</p>

        {/* Feature highlights */}
        <ul className="mb-6 space-y-2.5">
          {highlights.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <CheckCircle2
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-400/60"
                strokeWidth={2.2}
              />
              <span className="text-[13px] leading-snug text-zinc-400">{f}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="mb-5 h-px w-full bg-white/5" />

        {/* Platforms + CTA row */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          {/* Platform chips */}
          <div className="flex flex-wrap gap-2">
            {product.platforms.map((p) => (
              <span
                key={p}
                className="flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/4 px-2.5 py-1.5 text-[11px] font-medium text-zinc-400"
              >
                {p.includes("Mobile") ? (
                  <Smartphone className="h-3 w-3 shrink-0" strokeWidth={1.8} />
                ) : (
                  <Globe className="h-3 w-3 shrink-0" strokeWidth={1.8} />
                )}
                {p}
              </span>
            ))}
          </div>

          {/* CTA button */}
          {product.comingSoon ? (
            <span className="cursor-default rounded-xl border border-white/8 bg-white/4 px-4 py-2.5 text-xs font-medium text-zinc-500">
              Notify Me
            </span>
          ) : (
            <Link
              href={`/products/${product.id}`}
              className="group/btn flex items-center gap-1.5 rounded-xl border border-indigo-500/20 bg-indigo-500/8 px-4 py-2.5 text-xs font-semibold text-indigo-300 transition-all duration-200 hover:border-indigo-500/35 hover:bg-indigo-500/14 hover:text-indigo-200"
              onClick={(e) => e.stopPropagation()}
            >
              Explore
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                strokeWidth={2.2}
              />
            </Link>
          )}
        </div>
      </div>

      {/* Clickable overlay (whole card = link) */}
      {!product.comingSoon && (
        <Link
          href={`/products/${product.id}`}
          className="absolute inset-0 z-0 rounded-3xl"
          aria-label={`Explore ${product.title}`}
          tabIndex={-1}
        />
      )}
    </motion.article>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-24 md:py-32">
      {/* ── Background layers ── */}
      <Image
        src="/images/floating-icon-illustration.svg"
        alt=""
        width={646}
        height={600}
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-8"
      />
      <Image
        src="/images/taos-glow-bg-illustration.svg"
        alt=""
        width={1436}
        height={1239}
        className="pointer-events-none absolute -right-48 -top-24 h-auto w-[800px] opacity-6"
      />
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-20" />

      <SectionWrapper>
        {/* ── Heading ── */}
        <SectionHeading
          label="Our Products"
          title="Built for Real Results"
          description="End-to-end SaaS products crafted by our team — designed to solve real business problems with AI-first thinking."
        />

        {/* ── 2 × 2 Product grid ── */}
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <p className="text-center text-sm text-zinc-600">
            All products are built and maintained by the VibeVisuals team.{" "}
            <Link
              href="/#cta"
              className="text-indigo-400 underline underline-offset-4 transition-colors hover:text-indigo-300"
            >
              Custom solutions available.
            </Link>
          </p>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
