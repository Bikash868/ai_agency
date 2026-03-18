import type { Metadata } from "next";
import { WhyUsHero } from "@/components/sections/why-us/WhyUsHero";
import { WhyUsStats } from "@/components/sections/why-us/WhyUsStats";
import { WhyUsAISpeed } from "@/components/sections/why-us/WhyUsAISpeed";
import { WhyUsDifferentiators } from "@/components/sections/why-us/WhyUsDifferentiators";
import { WhyUsTestimonials } from "@/components/sections/why-us/WhyUsTestimonials";
import { WhyUsTeam } from "@/components/sections/why-us/WhyUsTeam";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why vibevisuals.art is the AI digital agency of choice. Unmatched creativity, proven results, and AI-first strategies that deliver real growth.",
};

export default function WhyUsPage() {
  return (
    <>
      <WhyUsHero />
      <WhyUsStats />
      <WhyUsAISpeed />
      <WhyUsDifferentiators />
      <WhyUsTestimonials />
      <WhyUsTeam />
      <CTA />
    </>
  );
}
