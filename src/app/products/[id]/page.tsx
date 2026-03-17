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
  return {
    title: `${product.title} — ${product.tagline} | VibeVisuals`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} — ${product.tagline}`,
      description: product.heroDescription.slice(0, 160),
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  return <ProductDetailContent product={product} />;
}
