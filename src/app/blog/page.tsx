import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/ContentPageLayout";
import { BLOG_POSTS } from "@/lib/blog";

const SITE_URL = "https://www.airmets.com";

export const metadata: Metadata = {
  title: "UAS & Aerial Media Blog | Airmets",
  description:
    "Guides on FAA Part 107 compliance, real estate aerial marketing, airspace planning, and professional drone production across Southern California.",
  keywords: [
    "UAS blog",
    "drone photography tips",
    "FAA Part 107 guide",
    "real estate aerial media",
    "LAANC airspace",
    "commercial drone workflow",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Airmets Blog — UAS & Aerial Media Insights",
    description: "Expert articles on commercial drone operations, aerial marketing, and production workflows.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Airmets Blog",
  description: "UAS operations, aerial media, and Southern California production insights from Airmets.",
  url: `${SITE_URL}/blog`,
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
  })),
};

export default function BlogIndexPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <ContentPageLayout
      eyebrow="Blog"
      title="UAS & Aerial Media Insights"
      subtitle="Practical guides on FAA Part 107 compliance, real estate aerial marketing, airspace planning, and professional production workflows for Southern California clients."
      backHref="/"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      <div className="space-y-6">
        {sorted.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-air-border bg-air-card/50 p-6 transition hover:border-air-red/30"
          >
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-air-muted">
              <span className="text-air-red">{post.category}</span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>{post.readMinutes} min read</span>
            </div>
            <h2 className="font-display mb-3 text-2xl font-bold text-white">
              <Link href={`/blog/${post.slug}`} className="transition hover:text-air-red">
                {post.title}
              </Link>
            </h2>
            <p className="mb-4 text-air-silver">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-air-red transition hover:gap-3"
            >
              Read article <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>

      <section className="rounded-2xl border border-air-border bg-air-card p-6 text-center">
        <h2 className="font-display mb-2 text-xl font-bold text-white">Need aerial media for your project?</h2>
        <p className="mb-4 text-sm text-air-muted">
          Browse our{" "}
          <Link href="/service-area" className="text-air-red hover:underline">
            Southern California service area
          </Link>{" "}
          or request a quote for your property.
        </p>
        <Link
          href="/#contact"
          className="touch-target inline-flex items-center justify-center rounded-full bg-air-red px-8 py-3 text-sm font-bold uppercase tracking-wider text-white"
        >
          Get Quote
        </Link>
      </section>
    </ContentPageLayout>
  );
}