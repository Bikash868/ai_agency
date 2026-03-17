"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";

const team = [
  {
    name: "Aria Nolan",
    role: "Creative Director",
    bio: "10+ years crafting visual identities for tech-forward brands. AI-native creative since 2021.",
    avatar: "/assets/team/aria.jpg",
    social: { x: "#", li: "#" },
  },
  {
    name: "Leo Park",
    role: "Head of AI Production",
    bio: "Former ML engineer turned creative technologist. Architect of our AI video pipeline.",
    avatar: "/assets/team/leo.jpg",
    social: { x: "#", li: "#" },
  },
  {
    name: "Fatima Al-Rashid",
    role: "SEO & Growth Strategist",
    bio: "Data-obsessed SEO lead with a track record of doubling organic traffic for 30+ brands.",
    avatar: "/assets/team/fatima.jpg",
    social: { x: "#", li: "#" },
  },
  {
    name: "Kai Torres",
    role: "Lead Web Engineer",
    bio: "Full-stack engineer specialising in performant, design-perfect Next.js applications.",
    avatar: "/assets/team/kai.jpg",
    social: { x: "#", li: "#" },
  },
];

export function WhyUsTeam() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />
      {/* Illustration accent */}
      <Image
        src="/images/why/taos-glow-bg-illustration.svg"
        alt=""
        width={1436}
        height={1239}
        className="pointer-events-none absolute left-1/2 bottom-0 h-auto w-[80%] max-w-none -translate-x-1/2 opacity-15"
      />
      <div className="absolute left-1/2 bottom-0 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/5 blur-[90px]" />

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
            The Team
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
          >
            Humans Powering the AI
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-xl text-base text-zinc-400 md:text-lg"
          >
            Behind every great AI output is a strategic mind. Meet the people shaping how your brand is seen.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="glass-card group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{member.bio}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={member.social.x}
                    aria-label="Twitter / X"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-zinc-500 transition-all hover:border-indigo-500/30 hover:text-indigo-400"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={member.social.li}
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 text-zinc-500 transition-all hover:border-indigo-500/30 hover:text-indigo-400"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
