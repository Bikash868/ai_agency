"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/motion";
import { portfolioItems } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  "Video Production": "from-indigo-500 to-blue-500",
  "Web Design": "from-violet-500 to-purple-500",
  "Campaign Design": "from-blue-500 to-cyan-500",
  "SEO Optimization": "from-emerald-500 to-teal-500",
  "Web & AI Solutions": "from-rose-500 to-pink-500",
};

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-24 md:py-32">
      {/* Floating icon glow — center behind grid */}
      <Image
        src="/images/why/floating-icon-illustration.svg"
        alt=""
        width={646}
        height={600}
        className="pointer-events-none absolute left-1/2 top-1/3 h-auto w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-20"
      />

      {/* Page illustration glow — top right */}
      <Image
        src="/images/page-illustration.svg"
        alt=""
        width={1440}
        height={427}
        className="pointer-events-none absolute -right-20 top-0 h-auto w-[700px] opacity-15"
      />

      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-30" />

      <SectionWrapper>
        <SectionHeading
          label="Our Work"
          title="Featured Projects"
          description="A showcase of our latest AI-powered digital creations that deliver real impact and results."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl border border-indigo-500/10 bg-surface"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className={`h-full w-full bg-gradient-to-br ${
                    categoryColors[item.category] || "from-indigo-500 to-violet-500"
                  } opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-30`}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid-overlay h-full w-full opacity-40" />
                  <div className="absolute text-5xl font-bold text-white/[.06]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-indigo-400">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{item.category}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
