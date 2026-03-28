import type { Metadata } from "next";
import { ContactContent } from "@/components/sections/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Project | vibevisuals.art",
  description:
    "Get in touch with vibevisuals.art. We respond within 24 hours. Discuss AI videos, campaign design, SEO, or web projects — Bengaluru-based, serving clients across India.",
  keywords: [
    "contact AI digital agency India",
    "hire digital agency Bengaluru",
    "get AI marketing quote India",
    "vibevisuals contact",
    "schedule demo AI agency",
    "start AI project India",
  ],
  alternates: { canonical: "https://vibevisuals.art/contact" },
  openGraph: {
    title: "Contact vibevisuals.art — Start Your Project Today",
    description:
      "We respond within 24 hours. Tell us about your project and get a first draft faster than any traditional agency.",
    type: "website",
    url: "https://vibevisuals.art/contact",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Contact vibevisuals.art" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact vibevisuals.art — Start Your Project Today",
    description: "24-hour response guaranteed. AI videos, design, SEO & web — Bengaluru-based agency.",
    images: ["/og.png"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
