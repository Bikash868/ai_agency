"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlowButton } from "@/components/ui/GlowButton";
import { fadeInUp } from "@/lib/motion";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 md:py-32">
      <SectionWrapper>
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/10 bg-surface px-6 py-20 text-center md:px-16 md:py-28">
          {/* Pricing-top comet glow */}
          <Image
            src="/images/pricing-illustration-top.svg"
            alt=""
            width={396}
            height={328}
            className="pointer-events-none absolute -right-8 -top-8 h-auto w-80 opacity-40"
          />

          {/* Page illustration — left bottom */}
          <Image
            src="/images/page-illustration.svg"
            alt=""
            width={1440}
            height={427}
            className="pointer-events-none absolute -left-40 bottom-0 h-auto w-[600px] rotate-180 opacity-15"
          />

          {/* Concentric rings — center */}
          <Image
            src="/images/pricing-illustration.svg"
            alt=""
            width={334}
            height={334}
            className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-64 -translate-x-1/2 -translate-y-1/2 opacity-20"
          />

          <div className="dot-mesh pointer-events-none absolute inset-0 rounded-3xl opacity-20" />

          <div className="relative z-10">
            <motion.span
              variants={fadeInUp}
              className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-indigo-400"
            >
              Let&apos;s Create Together
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
            >
              Ready to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Elevate
              </span>{" "}
              Your Brand?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-xl text-base text-zinc-400 md:text-lg"
            >
              Transform your digital presence with AI-powered creativity.
              Let&apos;s build something extraordinary together.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <GlowButton href="mailto:hello@vibevisuals.art" variant="primary">
                Start Your Project
              </GlowButton>
              <GlowButton href="#services" variant="secondary">
                Explore Services
              </GlowButton>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
