import type { Metadata } from "next";
import { NewslettersHero } from "@/components/sections/newsletters/NewslettersHero";
import { NewslettersFeatured } from "@/components/sections/newsletters/NewslettersFeatured";
import { NewslettersGrid } from "@/components/sections/newsletters/NewslettersGrid";
import { NewslettersSubscribe } from "@/components/sections/newsletters/NewslettersSubscribe";

export const metadata: Metadata = {
  title: "Newsletters",
  description:
    "Stay ahead with vibevisuals.art insights. AI trends, design tips, SEO strategies, and digital marketing news delivered straight to your inbox.",
};

export default function NewslettersPage() {
  return (
    <>
      <NewslettersHero />
      <NewslettersFeatured />
      <NewslettersGrid />
      <NewslettersSubscribe />
    </>
  );
}
