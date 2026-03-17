"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";
import { newsletterIssues } from "@/lib/newsletters-data";

const featured = newsletterIssues[0];

const tagColors: Record<string, string> = {
  SEO: "bg-emerald-500/15 text-emerald-400",
  Design: "bg-violet-500/15 text-violet-400",
  Video: "bg-blue-500/15 text-blue-400",
  Web: "bg-cyan-500/15 text-cyan-400",
  "AI Trends": "bg-indigo-500/15 text-indigo-400",
  Strategy: "bg-rose-500/15 text-rose-400",
};

export function NewslettersFeatured() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-4 inline-block rounded-full border border-indigo-500/25 bg-indigo-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            Latest Issue
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Featured Edition
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="glass-card overflow-hidden rounded-3xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <motion.div variants={slideInLeft} className="relative overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                width={900}
                height={600}
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 lg:bg-gradient-to-r" />
            </motion.div>

            {/* Content */}
            <motion.div variants={slideInRight} className="flex flex-col justify-center p-10 md:p-14">
              <div className="mb-4 flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tagColors[featured.tag] ?? "bg-indigo-500/15 text-indigo-400"}`}>
                  {featured.tag}
                </span>
                <span className="text-xs text-zinc-500">{featured.issue} · {featured.date}</span>
              </div>
              <h3 className="text-2xl font-bold leading-snug text-white md:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{featured.excerpt}</p>
              <div className="mt-8 flex items-center gap-5">
                <Link
                  href={`/newsletters/${featured.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500"
                >
                  Read Full Issue
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
