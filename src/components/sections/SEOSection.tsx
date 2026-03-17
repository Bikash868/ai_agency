"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/motion";

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

const expertise = [
  "AI-Generated Video Production & Editing",
  "Brand Identity & Campaign Design",
  "Technical SEO & Content Strategy",
  "Custom Web Development & AI Integration",
  "Performance Marketing & Analytics",
  "Conversion Rate Optimization",
];

export function SEOSection() {
  return (
    <section id="seo" className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/images/why/key-diff-right-illustration.svg"
        alt=""
        width={495}
        height={461}
        className="pointer-events-none absolute -right-16 top-20 h-auto w-[380px] opacity-20"
      />
      <Image
        src="/images/why/works-left-illustration.svg"
        alt=""
        width={639}
        height={679}
        className="pointer-events-none absolute -left-48 bottom-0 h-auto w-[450px] opacity-18"
      />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />

      <SectionWrapper>
        <SectionHeading
          label="Why Choose Us"
          title="Built for Performance & Trust"
          description="We combine AI innovation with proven digital strategies to deliver solutions that perform, scale, and convert."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustPoints.map((point) => (
            <motion.div
              key={point.label}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="relative z-10">
                <div className="mb-3 bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-4xl font-bold text-transparent">
                  {point.metric}
                </div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-white">
                  {point.label}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-500">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="glass-card relative mt-16 overflow-hidden rounded-2xl p-10 md:p-14"
        >
          <div className="grid-overlay pointer-events-none absolute inset-0 opacity-15" />
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
                {expertise.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-400">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
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
