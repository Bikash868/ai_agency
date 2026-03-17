"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { scaleIn, staggerContainer } from "@/lib/motion";
import { portfolioItems } from "@/lib/constants";

const categoryAccents: Record<string, string> = {
  "Video Production":  "bg-indigo-500/8",
  "Web Design":        "bg-violet-500/8",
  "Campaign Design":   "bg-blue-500/8",
  "SEO Optimization":  "bg-emerald-500/8",
  "Web & AI Solutions":"bg-rose-500/8",
};

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/images/why/floating-icon-illustration.svg"
        alt=""
        width={646}
        height={600}
        className="pointer-events-none absolute left-1/2 top-1/3 h-auto w-[550px] -translate-x-1/2 -translate-y-1/2 opacity-15"
      />
      <Image
        src="/images/page-illustration.svg"
        alt=""
        width={1440}
        height={427}
        className="pointer-events-none absolute -right-20 top-0 h-auto w-[700px] opacity-10"
      />
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-20" />

      <SectionWrapper>
        <SectionHeading
          label="Our Work"
          title="Featured Projects"
          description="A showcase of our latest AI-powered digital creations that deliver real impact and results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioItems.map((item, i) => (
            <motion.article
              key={item.title}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="glass-card group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className={`h-full w-full transition-all duration-500 group-hover:scale-110 ${
                    categoryAccents[item.category] ?? "bg-indigo-500/8"
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid-overlay h-full w-full opacity-30" />
                  <div className="absolute text-6xl font-bold text-white/[.04]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-md">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-indigo-300">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-500">{item.category}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
