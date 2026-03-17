"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "vibevisuals.art transformed our product launch. The AI-generated video campaign drove a 4× increase in engagement in the first week — we've never seen anything like it.",
    name: "Sarah Chen",
    title: "Head of Marketing, Nexora Tech",
    avatar: "/assets/testimonials/sarah.jpg",
    rating: 5,
  },
  {
    quote:
      "Their SEO work doubled our organic traffic in 90 days. But what really impressed me was how they tied every optimization to actual business metrics, not just rankings.",
    name: "Marcus Rivera",
    title: "CEO, BuildFast SaaS",
    avatar: "/assets/testimonials/marcus.jpg",
    rating: 5,
  },
  {
    quote:
      "We've worked with four agencies before. vibevisuals.art is the only one that delivered on time, on brand, and with a result we were genuinely proud to show our board.",
    name: "Priya Mehta",
    title: "CMO, Orbis Ventures",
    avatar: "/assets/testimonials/priya.jpg",
    rating: 5,
  },
  {
    quote:
      "The poster series they designed became our most-shared social content ever. Pure quality — visually stunning and strategically sharp at the same time.",
    name: "James Okafor",
    title: "Brand Director, Lumio Studio",
    avatar: "/assets/testimonials/james.jpg",
    rating: 5,
  },
  {
    quote:
      "Incredible speed without cutting corners. They rebuilt our entire web presence in three weeks — clean code, great performance, and it looks like a million dollars.",
    name: "Anya Petrov",
    title: "Founder, GridSpace",
    avatar: "/assets/testimonials/anya.jpg",
    rating: 5,
  },
  {
    quote:
      "What separates them is that they genuinely understand AI. Not just tools — the strategy. Our campaign felt effortless and the ROI speaks for itself.",
    name: "David Kim",
    title: "Growth Lead, Vero Analytics",
    avatar: "/assets/testimonials/david.jpg",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-indigo-400 text-indigo-400" />
      ))}
    </div>
  );
}

export function WhyUsTestimonials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-20" />
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-600/5 blur-[110px]" />

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
            Client Stories
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Don&apos;t Take Our Word for It
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-xl text-base text-zinc-400 md:text-lg"
          >
            Real outcomes from real brands. Every result below started with a single conversation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="relative z-10">
                <StarRating count={t.rating} />
                <p className="mt-5 text-sm leading-relaxed text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-6">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-indigo-500/20"
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
