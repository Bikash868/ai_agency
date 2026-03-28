import type { Metadata } from "next";
import { WhyUsHero } from "@/components/sections/why-us/WhyUsHero";
import { WhyUsStats } from "@/components/sections/why-us/WhyUsStats";
import { WhyUsAISpeed } from "@/components/sections/why-us/WhyUsAISpeed";
import { WhyUsDifferentiators } from "@/components/sections/why-us/WhyUsDifferentiators";
import { WhyUsTestimonials } from "@/components/sections/why-us/WhyUsTestimonials";
import { WhyUsTeam } from "@/components/sections/why-us/WhyUsTeam";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Why Choose vibevisuals.art — AI Agency That Delivers",
  description:
    "Discover why 200+ brands choose vibevisuals.art. AI-first workflows, up to 85% faster delivery, 3× average ROI, and results proven across Indian businesses.",
  keywords: [
    "why choose AI agency India",
    "best digital agency India",
    "AI agency results",
    "fast creative agency India",
    "AI marketing agency Bengaluru",
    "vibevisuals.art reviews",
  ],
  alternates: { canonical: "https://vibevisuals.art/why-us" },
  openGraph: {
    title: "Why Choose vibevisuals.art — AI Agency That Delivers",
    description:
      "200+ brands, 85% faster delivery, 3× ROI. See exactly why vibevisuals.art is India's top AI digital agency.",
    type: "website",
    url: "https://vibevisuals.art/why-us",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Why vibevisuals.art" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose vibevisuals.art — AI Agency That Delivers",
    description: "200+ brands, 85% faster delivery, 3× ROI. India's top AI digital agency.",
    images: ["/og.png"],
  },
};

export default function WhyUsPage() {
  return (
    <>
      <WhyUsHero />
      <WhyUsStats />
      <WhyUsAISpeed />
      <WhyUsDifferentiators />
      <WhyUsTestimonials />
      {/* <WhyUsTeam /> */}
      <CTA />
    </>
  );
}
