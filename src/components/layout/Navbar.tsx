"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";
import { GlowButton } from "@/components/ui/GlowButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  // Hash anchor links are navigation shortcuts, never "active" destinations
  const isActive = (href: string) => {
    if (href.startsWith("/#") || href === "#") return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-indigo-500/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
            V
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            vibevisuals<span className="text-indigo-400">.art</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-white ${
                isActive(link.href) ? "text-white" : "text-zinc-400"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-indigo-500 to-violet-500"
                />
              )}
            </Link>
          ))}
          <GlowButton href="/#cta" className="text-xs">
            Start a Project
          </GlowButton>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-6 bg-white"
          />
          <motion.span
            animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-[2px] w-6 bg-white"
          />
          <motion.span
            animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-6 bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden border-t border-indigo-500/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-indigo-500/10 hover:text-white ${
                    isActive(link.href)
                      ? "bg-indigo-500/10 text-white"
                      : "text-zinc-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3">
                <GlowButton href="/#cta" className="w-full text-center">
                  Start a Project
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
