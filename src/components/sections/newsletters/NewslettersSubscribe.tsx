"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, BarChart3, Palette, Video, ShieldCheck, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const perks = [
  { icon: BrainCircuit, text: "Weekly AI tool breakdowns & tutorials" },
  { icon: BarChart3, text: "Data-driven SEO & growth strategies" },
  { icon: Palette, text: "Design trends & creative inspiration" },
  { icon: Video, text: "Video production tips & AI workflows" },
  { icon: ShieldCheck, text: "No spam. Unsubscribe in one click." },
];

export function NewslettersSubscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="subscribe" className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/images/why/taos-glow-bg-illustration.svg"
        alt=""
        width={1436}
        height={1239}
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-full -translate-x-1/2 -translate-y-1/2 opacity-25"
      />
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card rounded-3xl p-10 text-center md:p-16"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-5 inline-block rounded-full border border-indigo-500/25 bg-indigo-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400"
          >
            Never Miss an Issue
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Join{" "}
            <span className="bg-gradient-to-br from-indigo-300 to-violet-400 bg-clip-text text-transparent">
              2,400+ subscribers
            </span>{" "}
            ahead of the curve
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-400"
          >
            Every week, straight to your inbox: the strategies, tools, and ideas that the best AI-powered brands are actually using.
          </motion.p>

          {/* Perks */}
          <motion.ul variants={fadeInUp} className="mx-auto mt-8 max-w-sm space-y-2.5 text-left">
            {perks.map((p) => (
              <li key={p.text} className="flex items-center gap-3 text-sm text-zinc-400">
                <p.icon className="h-4 w-4 shrink-0 text-indigo-400" strokeWidth={1.5} />
                {p.text}
              </li>
            ))}
          </motion.ul>

          {/* Form */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-md"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass-subtle rounded-xl border border-indigo-500/20 px-6 py-5 text-center"
              >
                <CheckCircle2 className="mx-auto mb-2 h-7 w-7 text-indigo-400" />
                <p className="font-bold text-white">You&apos;re in!</p>
                <p className="mt-1 text-xs text-zinc-400">Check your inbox for your first issue.</p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 rounded-xl border border-white/8 bg-white/4 px-5 py-3.5 text-sm text-white placeholder:text-zinc-500 backdrop-blur-sm focus:border-indigo-500/40 focus:outline-none focus:ring-1 focus:ring-indigo-500/25"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="shrink-0 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-500"
                >
                  Subscribe Free
                </motion.button>
              </div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
