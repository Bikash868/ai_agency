"use client";

import { motion } from "framer-motion";
import {
  Package,
  Star,
  TrendingUp,
  Zap,
  Award,
  BrainCircuit,
} from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const stats = [
  { value: "200+", label: "Projects Delivered", icon: Package },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "3×", label: "Average Client ROI", icon: TrendingUp },
  { value: "24h", label: "Typical Turnaround", icon: Zap },
  { value: "50+", label: "Brands Elevated", icon: Award },
  { value: "10+", label: "AI Tools Mastered", icon: BrainCircuit },
];

export function WhyUsStats() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="glass-card group flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-colors duration-300 group-hover:bg-indigo-500/15 group-hover:text-indigo-300">
                <s.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-2xl font-bold text-transparent">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs leading-tight text-zinc-500">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
