import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { SEOSection } from "@/components/sections/SEOSection";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "vibevisuals.art — AI-Powered Digital Agency India",
  description:
    "India's leading AI digital agency based in Bengaluru. We create AI promotional videos, campaign designs, SEO strategies, and web solutions delivered in days, not weeks.",
  keywords: [
    "AI digital agency India",
    "AI promotional videos Bengaluru",
    "digital marketing agency India",
    "campaign poster design AI",
    "SEO agency India",
    "web design agency Bengaluru",
    "AI content creation",
    "social media marketing India",
    "brand design agency India",
    "vibevisuals.art",
  ],
  alternates: { canonical: "https://vibevisuals.art" },
  openGraph: {
    title: "vibevisuals.art — AI-Powered Digital Agency India",
    description:
      "India's leading AI digital agency. AI promotional videos, campaign designs, SEO and web solutions — delivered fast.",
    type: "website",
    url: "https://vibevisuals.art",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "vibevisuals.art — AI Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "vibevisuals.art — AI-Powered Digital Agency India",
    description:
      "India's leading AI digital agency. AI videos, campaign designs, SEO & web solutions delivered in days.",
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <SEOSection />
      <CTA />
    </>
  );
}
