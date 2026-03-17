"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/motion";
import { processSteps } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 md:py-32">
      {/* Problem illustration — large glow behind timeline */}
      <Image
        src="/images/why/problem-illustration.svg"
        alt=""
        width={834}
        height={827}
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-25"
      />

      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-40" />

      <SectionWrapper>
        <SectionHeading
          label="How We Work"
          title="Our Proven Process"
          description="A streamlined four-step approach that takes your project from concept to launch with precision and efficiency."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-[1px] bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className={`flex items-start gap-8 md:gap-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="glass-card inline-block rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5">
                    <span className="mb-3 inline-block text-3xl font-bold text-white/25">
                      {step.step}
                    </span>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 hidden md:flex md:items-center md:justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.4 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-500/50 bg-background"
                  >
                    <div className="h-3 w-3 rounded-full bg-indigo-500" />
                  </motion.div>
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
