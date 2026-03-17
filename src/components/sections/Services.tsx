"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { fadeInUp } from "@/lib/motion";
import { services } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      {/* Left glow illustration */}
      <Image
        src="/images/why/works-left-illustration.svg"
        alt=""
        width={639}
        height={679}
        className="pointer-events-none absolute -left-40 top-0 h-auto w-[500px] opacity-40"
      />
      {/* Right network illustration */}
      <Image
        src="/images/why/network-right-illustration.svg"
        alt=""
        width={681}
        height={727}
        className="pointer-events-none absolute -right-32 bottom-0 h-auto w-[450px] opacity-30"
      />

      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-40" />

      <SectionWrapper>
        <SectionHeading
          label="What We Do"
          title="Services That Drive Results"
          description="From AI-generated videos to full-scale web solutions, we deliver digital experiences that set your brand apart."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="grid-overlay pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-40" />

              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-colors duration-300 group-hover:bg-indigo-500/20">
                  <ServiceIcon icon={service.icon} className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </div>

              <div className="pointer-events-none absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-indigo-500/5 blur-xl transition-all duration-300 group-hover:bg-indigo-500/10" />
            </motion.article>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
