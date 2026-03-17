import type { Variants } from "framer-motion";

const spring = { type: "spring", stiffness: 300, damping: 30 } as const;
const springGentle = { type: "spring", stiffness: 200, damping: 25 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...springGentle },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...spring },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...spring },
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -5, scale: 0.96 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { ...springGentle },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 12 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};
