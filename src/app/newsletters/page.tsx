import type { Metadata } from "next";
import { NewslettersHero } from "@/components/sections/newsletters/NewslettersHero";
import { NewslettersFeatured } from "@/components/sections/newsletters/NewslettersFeatured";
import { NewslettersGrid } from "@/components/sections/newsletters/NewslettersGrid";
import { NewslettersSubscribe } from "@/components/sections/newsletters/NewslettersSubscribe";

export const metadata: Metadata = {
  title: "AI & Marketing Newsletters — vibevisuals.art Insights",
  description:
    "Stay ahead with vibevisuals.art insights. AI trends, design tips, SEO strategies, and digital marketing news for Indian businesses — free in your inbox.",
  keywords: [
    "AI marketing newsletter India",
    "digital marketing insights India",
    "SEO tips newsletter",
    "AI design newsletter",
    "vibevisuals newsletter",
    "business growth tips India",
  ],
  alternates: { canonical: "https://vibevisuals.art/newsletters" },
  openGraph: {
    title: "AI & Marketing Newsletters — vibevisuals.art Insights",
    description:
      "AI trends, design tips, SEO strategies and digital marketing news for Indian businesses — free weekly.",
    type: "website",
    url: "https://vibevisuals.art/newsletters",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "vibevisuals.art Newsletters" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Marketing Newsletters — vibevisuals.art",
    description: "AI trends, design tips & SEO strategies for Indian businesses — free weekly.",
    images: ["/og.png"],
  },
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
