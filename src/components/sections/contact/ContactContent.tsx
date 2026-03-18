"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Send, MessageSquare, Calendar, Rocket,
  CheckCircle2, Mail, Phone, MapPin, Clock, Twitter, Linkedin,
  Instagram, Star,
} from "lucide-react";
import { fadeInUp, fadeIn, scaleIn, staggerContainer, staggerFast, slideInLeft, slideInRight } from "@/lib/motion";

// ── Data ─────────────────────────────────────────────────────────────────────

const services = [
  "AI Promotional Videos",
  "Poster & Campaign Design",
  "SEO Optimization",
  "Web Design & Development",
  "AI Solutions & Automation",
  "Product Consulting",
  "Other",
];

const journeySteps = [
  {
    step: 1,
    icon: Send,
    title: "You Submit",
    desc: "Share your project details & vision",
  },
  {
    step: 2,
    icon: MessageSquare,
    title: "We Respond",
    desc: "Reply within 24 hours",
  },
  {
    step: 3,
    icon: Calendar,
    title: "Strategy Call",
    desc: "Deep-dive & plan together",
  },
  {
    step: 4,
    icon: Rocket,
    title: "We Launch",
    desc: "Deliver, deploy & grow",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechVenture Solutions",
    role: "CEO & Founder",
    initials: "RK",
    color: "bg-indigo-600",
    review:
      "The team built our custom CRM from scratch in just 8 weeks. Their developers really understand Indian business needs. The solution has saved us 15+ hours per week.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Digital Growth Hub",
    role: "Marketing Director",
    initials: "PS",
    color: "bg-violet-600",
    review:
      "They crafted a complete digital strategy, not just SEO. Our organic traffic is up 300% in 4 months. The team really knows the Indian market!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "EduSmart Technologies",
    role: "Founder & Director",
    initials: "AP",
    color: "bg-sky-600",
    review:
      "From design to deployment, everyone was professional and responsive. The mobile app is a hit with our students and parents. Perfect partner for digital transformation.",
    rating: 5,
  },
  {
    name: "Vikram Reddy",
    company: "RetailNext India",
    role: "CTO",
    initials: "VR",
    color: "bg-emerald-600",
    review:
      "The QR commerce platform transformed our retail business. Customers love how easy it is. Sales jumped 250% in the first quarter. Best tech investment we've made!",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    company: "Analytics Pro India",
    role: "Product Manager",
    initials: "SI",
    color: "bg-rose-600",
    review:
      "The AI analytics interface is both beautiful and powerful. Their designers understand data visualization at a deep level. Our clients are blown away by the insights!",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    company: "StartupBengaluru",
    role: "Co-Founder",
    initials: "AM",
    color: "bg-amber-600",
    review:
      "They took our rough idea and turned it into a polished product. Communication was smooth, deadlines were met, and quality exceeded expectations.",
    rating: 5,
  },
  {
    name: "Anjali Desai",
    company: "HealthFirst Solutions",
    role: "Operations Head",
    initials: "AD",
    color: "bg-teal-600",
    review:
      "They understood our healthcare workflows and built a custom analytics dashboard that saves us hours daily. The support team is always there when we need them.",
    rating: 5,
  },
  {
    name: "Karthik Krishnan",
    company: "Creative Hub Studio",
    role: "Creative Director",
    initials: "KK",
    color: "bg-purple-600",
    review:
      "The graphics team handled all our branding, poster designs, and digital campaigns. The creativity and attention to detail is outstanding. Our brand identity has never looked better.",
    rating: 5,
  },
];

// ── Testimonial card ──────────────────────────────────────────────────────────
function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="glass-frosted w-80 shrink-0 rounded-2xl p-6">
      <div className="mb-4 flex items-center gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-indigo-400 text-indigo-400" />
        ))}
      </div>
      <p className="mb-5 text-sm leading-relaxed text-zinc-400 line-clamp-4">{`"${t.review}"`}</p>
      <div className="flex items-center gap-3">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${t.color}`}>
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-zinc-500">{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  );
}

// ── Input shared style ────────────────────────────────────────────────────────
const inputCls =
  "w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 backdrop-blur-sm transition-all duration-200 outline-none focus:border-indigo-500/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-indigo-500/25";

// ── Main component ────────────────────────────────────────────────────────────
export function ContactContent() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", service: services[0], message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync active step with the traveling-dot animation.
  // Dot travels 0→100% in 6000 ms, then repeats after 1800 ms pause → 7800 ms cycle.
  // Each of the 3 segments is equal, so the dot reaches badge i at i/3 × 6000 ms.
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const TRAVEL = 6000;
    const CYCLE  = 7800;
    // ms at which the dot touches each badge (0-indexed)
    const arrivals = [0, Math.round(TRAVEL / 3), Math.round((2 * TRAVEL) / 3), TRAVEL];

    let timers: ReturnType<typeof setTimeout>[] = [];

    function runCycle() {
      timers.forEach(clearTimeout);
      timers = [];
      arrivals.forEach((t, i) => {
        timers.push(setTimeout(() => setActiveStep(i), t));
      });
      // Brief "none active" gap during the repeat-delay pause
      timers.push(setTimeout(() => setActiveStep(-1), TRAVEL + 200));
    }

    runCycle();
    const interval = setInterval(runCycle, CYCLE);
    return () => { clearInterval(interval); timers.forEach(clearTimeout); };
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\nService: ${form.service}\n\nMessage:\n${form.message}`;
    const mailto = `mailto:sales.vibevisuals@gmail.com?subject=${encodeURIComponent(`Project Inquiry: ${form.service}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ════════════ PAGE-LEVEL BACKGROUND ════════════ */}
      <Image src="/images/taos-glow-bg-illustration.svg" alt="" width={1436} height={1239}
        className="pointer-events-none absolute -top-32 left-1/2 h-auto w-[900px] -translate-x-1/2 opacity-[0.07]" />
      <Image src="/images/pricing-illustration-top.svg" alt="" width={1920} height={1080}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="dot-mesh pointer-events-none absolute inset-0 opacity-15" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-500/6 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">

        {/* ── Breadcrumb ── */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-12">
          <Link href="/" className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-indigo-400">
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={2} />
            Back to Home
          </Link>
        </motion.div>

        {/* ════════════ HERO ════════════ */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative mb-24">
          <Image src="/images/page-illustration.svg" alt="" width={1440} height={427}
            className="pointer-events-none absolute -left-20 bottom-0 h-auto w-[500px] opacity-[0.06]" />

          <motion.div variants={fadeInUp} className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="mb-5 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-br from-indigo-300 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-2xl text-lg leading-relaxed text-zinc-400">
            Fill out the form below and we&apos;ll get back to you within 24 hours to discuss how we can bring your vision to life.
          </motion.p>
        </motion.div>

        {/* ════════════ JOURNEY STEPS ════════════ */}
        <section className="relative mb-24 overflow-hidden">
          <Image src="/images/page-illustration.svg" alt="" width={1440} height={427}
            className="pointer-events-none absolute -right-20 top-0 h-auto w-[600px] opacity-[0.08]" />

          <div className="relative z-10">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">Your Journey With Us</h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-zinc-400">A simple 4-step process from idea to launch</p>
            </motion.div>

            {/* Timeline */}
            <div className="relative grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">

              {/* ── Full-width progress rail (sits behind badges) ── */}
              <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[22px] z-0 hidden h-px overflow-visible bg-white/6 sm:block">
                {/* Base dashed line */}
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <line x1="0" y1="0.5" x2="100%" y2="0.5"
                    stroke="rgba(255,255,255,0.07)" strokeWidth="1"
                    strokeDasharray="6 5" />
                </svg>
                {/* Animated fill */}
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-500/70 via-violet-500/50 to-indigo-400/30"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear", repeat: Infinity, repeatDelay: 1.8 }}
                />
                {/* Traveling glow dot */}
                <motion.div
                  className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 shadow-[0_0_14px_4px_rgba(99,102,241,0.55)]"
                  initial={{ left: "0%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 6, ease: "linear", repeat: Infinity, repeatDelay: 1.8 }}
                />
              </div>

              {journeySteps.map((s, i) => {
                const Icon = s.icon;
                const isActive = activeStep === i;
                const isLast   = i === journeySteps.length - 1;
                return (
                  <motion.div
                    key={s.step}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col items-center text-center"
                  >
                    {/* Badge on the rail */}
                    <div className="relative z-10 mb-6">
                      <motion.div
                        animate={isActive ? {
                          boxShadow: "0 0 0 8px rgba(99,102,241,0.18), 0 0 22px rgba(99,102,241,0.35)",
                          borderColor: "rgba(99,102,241,0.80)",
                        } : {
                          boxShadow: "0 0 0 6px rgba(99,102,241,0.05)",
                          borderColor: "rgba(99,102,241,0.28)",
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex h-11 w-11 items-center justify-center rounded-full border bg-[#0c0d1e]"
                        style={{ borderWidth: 1 }}
                      >
                        <motion.span
                          animate={{ color: isActive ? "#a5b4fc" : "#818cf8" }}
                          transition={{ duration: 0.3 }}
                          className="text-sm font-bold tracking-tight"
                        >
                          {String(s.step).padStart(2, "0")}
                        </motion.span>
                      </motion.div>
                      {/* Burst ring when active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            key="burst"
                            initial={{ opacity: 0.7, scale: 0.9 }}
                            animate={{ opacity: 0, scale: 1.7 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="absolute inset-0 rounded-full border border-indigo-400/60"
                          />
                        )}
                      </AnimatePresence>
                      {/* Steady pulse on last step */}
                      {isLast && !isActive && (
                        <span className="absolute inset-0 rounded-full border border-indigo-400/30 animate-ping opacity-30" />
                      )}
                    </div>

                    {/* Card */}
                    <motion.div
                      animate={isActive ? {
                        backgroundColor: "rgba(99,102,241,0.07)",
                        borderColor: "rgba(99,102,241,0.28)",
                        boxShadow: "0 0 28px rgba(99,102,241,0.14), inset 0 1px 0 rgba(165,180,252,0.06)",
                        y: -6,
                      } : {
                        backgroundColor: "rgba(10,12,30,0.32)",
                        borderColor: "rgba(255,255,255,0.07)",
                        boxShadow: "none",
                        y: 0,
                      }}
                      whileHover={{ y: isActive ? -8 : -4 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative w-full overflow-hidden rounded-2xl border px-5 py-6 backdrop-blur-[22px]"
                    >
                      {/* Ambient glow */}
                      <motion.div
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="pointer-events-none absolute -top-6 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-2xl"
                      />

                      {/* Icon container */}
                      <motion.div
                        animate={isActive ? {
                          backgroundColor: "rgba(99,102,241,0.12)",
                          borderColor: "rgba(99,102,241,0.25)",
                          color: "#a5b4fc",
                        } : {
                          backgroundColor: "rgba(255,255,255,0.04)",
                          borderColor: "rgba(255,255,255,0.08)",
                          color: "#71717a",
                        }}
                        transition={{ duration: 0.35 }}
                        className="relative mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </motion.div>

                      <motion.h3
                        animate={{ color: isActive ? "#e0e7ff" : "#ffffff" }}
                        transition={{ duration: 0.3 }}
                        className="mb-1.5 text-sm font-semibold"
                      >
                        {s.title}
                      </motion.h3>
                      <p className="text-xs leading-relaxed text-zinc-500">{s.desc}</p>

                      {/* Bottom progress bar — fills when active */}
                      <div className="mt-5 h-px w-full overflow-hidden rounded-full bg-white/4">
                        <motion.div
                          animate={{ width: isActive ? "100%" : "0%" }}
                          transition={{ duration: isActive ? 5.6 : 0.2, ease: "linear" }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500/70 to-violet-400/50"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════════ FORM + INFO ════════════ */}
        <section className="relative mb-28 overflow-hidden">
          <Image src="/images/network-right-illustration.svg" alt="" width={800} height={700}
            className="pointer-events-none absolute -right-20 top-1/2 h-auto w-[460px] -translate-y-1/2 opacity-[0.1]" />
          <Image src="/images/key-diff-right-illustration.svg" alt="" width={900} height={800}
            className="pointer-events-none absolute -left-24 bottom-0 h-auto w-[380px] opacity-[0.06]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_380px]">

            {/* ── FORM ── */}
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="glass-frosted rounded-3xl p-8 md:p-10"
                  >
                    <h2 className="mb-7 text-2xl font-bold text-white">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">Your Name *</label>
                          <input name="name" type="text" required value={form.name} onChange={handleChange}
                            className={inputCls} placeholder="Vikram Singh" />
                        </div>
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">Email Address *</label>
                          <input name="email" type="email" required value={form.email} onChange={handleChange}
                            className={inputCls} placeholder="vikram@company.com" />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">Company</label>
                          <input name="company" type="text" value={form.company} onChange={handleChange}
                            className={inputCls} placeholder="Your Company (optional)" />
                        </div>
                        <div>
                          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">Service Interested In *</label>
                          <select name="service" required value={form.service} onChange={handleChange}
                            className={inputCls + " cursor-pointer"}>
                            {services.map((s) => <option key={s} value={s} className="bg-zinc-900">{s}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-500">Your Message *</label>
                        <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                          className={inputCls + " resize-none"} placeholder="Tell us about your project, goals, and timeline..." />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={submitting}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-indigo-600 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 disabled:opacity-60"
                      >
                        {submitting ? (
                          <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />Processing...</>
                        ) : (
                          <><Send className="h-4 w-4" strokeWidth={2} />Send Message</>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-frosted flex flex-col items-center rounded-3xl p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-indigo-500/25 bg-indigo-500/10"
                    >
                      <CheckCircle2 className="h-10 w-10 text-indigo-400" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="mb-3 text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="mb-8 max-w-sm text-sm leading-relaxed text-zinc-400">
                      Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:bg-white/8"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── CONTACT INFO ── */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-5"
            >
              {/* Info card */}
              <div className="glass-frosted rounded-3xl p-8">
                <h3 className="mb-6 text-lg font-bold text-white">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "sales.vibevisuals@gmail.com", href: "mailto:sales.vibevisuals@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+91 7849063040", href: "tel:+91 7849063040" },
                    { icon: MapPin, label: "Location", value: "Bengaluru, India", href: null },
                    { icon: Clock, label: "Hours", value: "Mon – Fri · 9am – 6pm IST", href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3.5">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/6 bg-white/[0.04] text-zinc-400">
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-zinc-300 transition-colors hover:text-indigo-300">{value}</a>
                        ) : (
                          <p className="text-sm text-zinc-300">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social card */}
              <div className="glass-frosted rounded-3xl p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-600">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Twitter, href: "#", label: "Twitter" },
                    { Icon: Linkedin, href: "#", label: "LinkedIn" },
                    { Icon: Instagram, href: "https://www.instagram.com/vibevisuals.art/", label: "Instagram" },
                  ].map(({ Icon, href, label }) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-zinc-400 transition-all hover:border-indigo-500/25 hover:bg-indigo-500/8 hover:text-indigo-300">
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick response promise */}
              <div className="glass-frosted relative overflow-hidden rounded-3xl p-6">
                <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-indigo-500/10 blur-2xl" />
                <div className="relative flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">24-Hour Response</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                      We personally review every inquiry and respond within one business day.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ════════════ TESTIMONIALS ════════════ */}
        <section className="relative overflow-hidden">
          <Image src="/images/pricing-illustration.svg" alt="" width={800} height={600}
            className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" />

          <div className="relative z-10">
            <motion.div
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold text-white md:text-4xl">Trusted by Industry Leaders</h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-zinc-400">See what our partners say about working with us</p>
            </motion.div>

            {/* Row 1 — left scroll */}
            <div className="mb-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="animate-marquee flex gap-5">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={i} t={t} />
                ))}
              </div>
            </div>

            {/* Row 2 — right scroll */}
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="animate-marquee-reverse flex gap-5">
                {[...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials.slice(4), ...testimonials.slice(0, 4)].map((t, i) => (
                  <TestimonialCard key={i} t={t} />
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mt-14 flex flex-col items-center gap-4 text-center"
            >
              <p className="text-sm text-zinc-500">Ready to become our next success story?</p>
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
              </motion.button>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
