"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";
import { newsletterIssues } from "@/lib/newsletters-data";

// Display all issues except the featured one (index 0)
const issues = newsletterIssues.slice(1);

const tagColors: Record<string, string> = {
  SEO: "bg-emerald-500/15 text-emerald-400",
  Design: "bg-violet-500/15 text-violet-400",
  Video: "bg-blue-500/15 text-blue-400",
  Web: "bg-cyan-500/15 text-cyan-400",
  "AI Trends": "bg-indigo-500/15 text-indigo-400",
  Strategy: "bg-rose-500/15 text-rose-400",
};

export function NewslettersGrid() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-20" />

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
            Archive
          </motion.span>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Past Issues
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {issues.map((issue) => (
            <motion.article
              key={issue.slug}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/newsletters/${issue.slug}`}
                className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={issue.image}
                    alt={issue.title}
                    width={600}
                    height={300}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tagColors[issue.tag] ?? "bg-indigo-500/15 text-indigo-400"}`}>
                      {issue.tag}
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-white/60 backdrop-blur-md">
                      {issue.issue}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-xs text-zinc-600">{issue.date}</p>
                  <h3 className="text-base font-bold leading-snug text-white transition-colors group-hover:text-indigo-300">
                    {issue.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{issue.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-zinc-600">
                      <Clock className="h-3 w-3" />
                      {issue.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-indigo-400 transition-all group-hover:gap-2">
                      Read
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
