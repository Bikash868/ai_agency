import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductById } from "@/lib/product-data";
import { ProductDetailContent } from "@/components/sections/products/ProductDetailContent";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  const url = `https://vibevisuals.art/products/${id}`;
  const desc = product.heroDescription.slice(0, 160);
  return {
    title: `${product.title} — ${product.tagline} | vibevisuals.art`,
    description: product.shortDescription,
    keywords: [
      product.title,
      product.category,
      "AI software India",
      "vibevisuals products",
      "digital tools India",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${product.title} — ${product.tagline}`,
      description: desc,
      type: "website",
      url,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: product.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} — ${product.tagline}`,
      description: desc,
      images: ["/og.png"],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.title,
    description: product.shortDescription,
    applicationCategory: "BusinessApplication",
    operatingSystem: product.platforms?.join(", ") ?? "Web",
    url: `https://vibevisuals.art/products/${id}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    author: { "@type": "Organization", name: "vibevisuals.art", url: "https://vibevisuals.art" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailContent product={product} />
    </>
  );
}
