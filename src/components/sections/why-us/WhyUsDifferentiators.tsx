"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";

const differentiators = [
  {
    number: "01",
    title: "AI-First by Default",
    description:
      "Unlike agencies that bolt AI on as an afterthought, every workflow we build starts with AI. From brief to delivery, intelligence is embedded at every step — making your projects faster, smarter, and more consistent.",
    image: "/assets/why-us/ai-first.jpg",
    imageAlt: "AI technology visualization",
  },
  {
    number: "02",
    title: "Creative + Data — Always Together",
    description:
      "Great visuals without strategy are just decoration. We pair bold creative direction with data-driven insights so every design decision, every video frame, and every SEO move has a measurable reason behind it.",
    image: "/assets/why-us/data-analytics.jpg",
    imageAlt: "Data analytics dashboard",
  },
  {
    number: "03",
    title: "Velocity Without Compromise",
    description:
      "Our AI-augmented processes cut production timelines by up to 70% compared to traditional agencies — without sacrificing quality. You get premium output at startup speed.",
    image: "/assets/why-us/digital-marketing.jpg",
    imageAlt: "Fast-moving digital workflow",
  },
];

export function WhyUsDifferentiators() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />
      {/* Illustration accent */}
      <Image
        src="/images/why/network-right-illustration.svg"
        alt=""
        width={800}
        height={700}
        className="pointer-events-none absolute -right-40 top-1/4 h-auto w-[500px] opacity-10"
      />
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16 text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-4 inline-block rounded-full border border-indigo-500/25 bg-indigo-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            What Sets Us Apart
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Not Just Another Agency
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 md:text-lg"
          >
            Here&apos;s exactly why brands that choose vibevisuals.art don&apos;t go back.
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.number}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text */}
              <motion.div
                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                className={i % 2 === 1 ? "lg:col-start-2" : ""}
              >
                <span className="mb-4 inline-block bg-gradient-to-br from-white/20 to-white/5 bg-clip-text text-5xl font-bold text-transparent">
                  {item.number}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={i % 2 === 0 ? slideInRight : slideInLeft}
                className={`relative ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <div className="glass-card relative overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={700}
                    height={420}
                    className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
                </div>
                <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-indigo-500/3 blur-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
