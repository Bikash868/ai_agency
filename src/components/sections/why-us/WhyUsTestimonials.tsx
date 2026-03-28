"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "What separates them is that they genuinely understand AI. Not just tools — the strategy. Our campaign felt effortless and the ROI speaks for itself.",
    name: "David Kim",
    title: "Growth Lead, Vero Analytics",
    avatar: "/assets/testimonials/david.jpg",
    rating: 5,
  },
  {
    quote:
      "We run a small café in Indore and never thought we needed a proper brand. Vibe Visuals made us a reel and a poster series — our footfall went up 40% in just one month. Best decision we made!",
    name: "Ravi Sharma",
    title: "Owner, Chai & Co. Café",
    avatar: "/assets/testimonials/david.jpg",
    rating: 5,
  },
  {
    quote:
      "My mehndi studio in Nagpur was getting no online enquiries. They shot a short promo video, designed my Instagram posts, and set up my Google listing. Now I get 15–20 bookings a week from Instagram alone!",
    name: "Pushpa",
    title: "Founder, Pushpa Mehndi Arts",
    avatar: "/assets/testimonials/sarah.jpg",
    rating: 4.5,
  },
  {
    quote:
      "We sell hardware and construction tools online from Surat. Vibe Visuals redesigned our product listing images and ran a targeted ad campaign — our monthly orders doubled within 6 weeks.",
    name: "Ketan Patel",
    title: "Co-Founder, BoltKart Hardware",
    avatar: "",
    rating: 5,
  },
  {
    quote:
      "I have a boutique in Jaipur selling handloom fabrics. They created beautiful reels showcasing my products and helped me reach customers across India. Online sales went from near zero to ₹2L a month!",
    name: "Meena Agarwal",
    title: "Owner, Rangrez Boutique",
    avatar: "/assets/testimonials/anya.jpg",
    rating: 4,
  },
  {
    quote:
      "Our tiffin service in Pune was word-of-mouth only. Vibe Visuals built us a simple website and ran WhatsApp-friendly promotional videos. We now have 120 daily subscribers — up from 35.",
    name: "Ashok Kulkarni",
    title: "Founder, Ghar Ka Khana Tiffins",
    avatar: "",
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
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-indigo-500/20"
                    />
                  ) : (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 ring-2 ring-indigo-500/20 text-sm font-bold text-indigo-300">
                      {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </div>
                  )}
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
