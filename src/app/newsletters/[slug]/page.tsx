import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { getNewsletterBySlug, newsletterIssues } from "@/lib/newsletters-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsletterIssues.map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const issue = getNewsletterBySlug(slug);
  if (!issue) return { title: "Not Found" };
  const url = `https://vibevisuals.art/newsletters/${slug}`;
  return {
    title: `${issue.title} | vibevisuals.art`,
    description: issue.excerpt,
    keywords: [
      issue.tag,
      "AI marketing India",
      "digital marketing newsletter",
      "vibevisuals.art",
      "SEO tips India",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: issue.title,
      description: issue.excerpt,
      type: "article",
      url,
      publishedTime: issue.date,
      authors: ["vibevisuals.art"],
      images: [{ url: issue.image.startsWith("/") ? `https://vibevisuals.art${issue.image}` : issue.image, width: 1200, height: 630, alt: issue.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: issue.title,
      description: issue.excerpt,
      images: [issue.image.startsWith("/") ? `https://vibevisuals.art${issue.image}` : issue.image],
    },
  };
}

export default async function NewsletterDetailPage({ params }: Props) {
  const { slug } = await params;
  const issue = getNewsletterBySlug(slug);
  if (!issue) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: issue.title,
    description: issue.excerpt,
    author: { "@type": "Organization", name: "vibevisuals.art", url: "https://vibevisuals.art" },
    publisher: {
      "@type": "Organization",
      name: "vibevisuals.art",
      logo: { "@type": "ImageObject", url: "https://vibevisuals.art/images/logo.png" },
    },
    url: `https://vibevisuals.art/newsletters/${slug}`,
    mainEntityOfPage: `https://vibevisuals.art/newsletters/${slug}`,
    image: issue.image.startsWith("/") ? `https://vibevisuals.art${issue.image}` : issue.image,
  };

  const tagColors: Record<string, string> = {
    SEO: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    Design: "bg-violet-500/15 text-violet-400 border-violet-500/20",
    Video: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    Web: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
    "AI Trends": "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
    Strategy: "bg-rose-500/15 text-rose-400 border-rose-500/20",
  };

  return (
    <main className="min-h-screen bg-background pb-24 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Subtle background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/5 blur-[100px]" />
        <div className="grid-overlay absolute inset-0 opacity-15" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/newsletters"
          className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-indigo-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Newsletters
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                tagColors[issue.tag] ?? "bg-indigo-500/15 text-indigo-400 border-indigo-500/20"
              }`}
            >
              {issue.tag}
            </span>
            <span className="text-xs text-zinc-600">{issue.issue}</span>
          </div>

          <h1 className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl">
            {issue.title}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg">
            {issue.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/5 pt-6 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {issue.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {issue.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5" />
              {issue.tag}
            </span>
          </div>
        </header>

        {/* Hero image */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-white/5">
          <Image
            src={issue.image}
            alt={issue.title}
            width={900}
            height={500}
            className="h-72 w-full object-cover sm:h-96"
            priority
          />
        </div>

        {/* Article body */}
        <article className="prose-custom">
          {/* Intro */}
          <p className="mb-10 text-base leading-relaxed text-zinc-300 md:text-lg">
            {issue.content.intro}
          </p>

          {/* Sections */}
          {issue.content.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
                {section.heading}
              </h2>
              <p className="text-base leading-relaxed text-zinc-400">
                {section.body}
              </p>
            </section>
          ))}

          {/* Divider */}
          <hr className="my-10 border-white/5" />

          {/* Conclusion */}
          <div className="rounded-2xl border border-indigo-500/10 bg-indigo-500/5 p-6 backdrop-blur-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Takeaway
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-300">
              {issue.content.conclusion}
            </p>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/5 bg-surface/60 p-8 text-center backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Never miss an issue
          </p>
          <h3 className="mt-2 text-xl font-bold text-white">
            Get insights like this in your inbox every week
          </h3>
          <Link
            href="/newsletters#subscribe"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500"
          >
            Subscribe Free
          </Link>
        </div>

        {/* Back nav */}
        <div className="mt-10 text-center">
          <Link
            href="/newsletters"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            View all issues
          </Link>
        </div>
      </div>
    </main>
  );
}
