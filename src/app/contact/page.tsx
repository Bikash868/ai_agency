import type { Metadata } from "next";
import { ContactContent } from "@/components/sections/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Let's Connect | VibeVisuals",
  description:
    "Get in touch with the VibeVisuals team. We respond within 24 hours to discuss your project, demo our products, or answer any questions.",
  openGraph: {
    title: "Contact VibeVisuals — Let's Connect",
    description: "Tell us about your project and we'll get back to you within 24 hours.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
