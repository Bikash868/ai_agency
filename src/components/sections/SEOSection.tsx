"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/motion";

const trustPoints = [
  {
    metric: "200+",
    label: "Projects Delivered",
    description:
      "Successful AI-powered campaigns and digital solutions for brands worldwide.",
  },
  {
    metric: "98%",
    label: "Client Satisfaction",
    description:
      "Consistently exceeding expectations with quality, speed, and creative excellence.",
  },
  {
    metric: "3x",
    label: "Average ROI",
    description:
      "Our AI-driven strategies deliver measurable returns on every marketing dollar invested.",
  },
  {
    metric: "24h",
    label: "Turnaround Time",
    description:
      "Rapid delivery powered by AI without compromising on quality or attention to detail.",
  },
];

export function SEOSection() {
  return (
    <section id="seo" className="relative overflow-hidden py-24 md:py-32">
      {/* Key-diff glow — right side accent */}
      <Image
        src="/images/why/key-diff-right-illustration.svg"
        alt=""
        width={495}
        height={461}
        className="pointer-events-none absolute -right-16 top-20 h-auto w-[400px] opacity-30"
      />

      {/* Works-left glow — left accent for bottom card */}
      <Image
        src="/images/why/works-left-illustration.svg"
        alt=""
        width={639}
        height={679}
        className="pointer-events-none absolute -left-48 bottom-0 h-auto w-[500px] opacity-25"
      />

      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />

      <SectionWrapper>
        <SectionHeading
          label="Why Choose Us"
          title="Built for Performance & Trust"
          description="We combine AI innovation with proven digital strategies to deliver solutions that perform, scale, and convert."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <motion.div
              key={point.label}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl border border-indigo-500/10 bg-surface p-8 text-center transition-all duration-300 hover:border-indigo-500/25"
            >
              <div className="grid-overlay pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative z-10">
                <div className="mb-3 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent">
                  {point.metric}
                </div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-white">
                  {point.label}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="relative mt-20 overflow-hidden rounded-2xl border border-indigo-500/10 bg-surface p-10 md:p-14"
        >
          <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative z-10 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                AI-First Digital Agency
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                At vibevisuals.art, we harness the power of artificial
                intelligence to craft digital experiences that are not only
                visually stunning but also strategically optimized for maximum
                performance.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Our team combines creative expertise with cutting-edge AI tools
                to deliver promotional videos, campaign designs, SEO strategies,
                and web solutions that drive real, measurable business growth.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Our Expertise Includes
              </h3>
              <ul className="space-y-3">
                {[
                  "AI-Generated Video Production & Editing",
                  "Brand Identity & Campaign Design",
                  "Technical SEO & Content Strategy",
                  "Custom Web Development & AI Integration",
                  "Performance Marketing & Analytics",
                  "Conversion Rate Optimization",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-400">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
