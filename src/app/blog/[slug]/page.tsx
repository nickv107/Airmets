import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentPageLayout } from "@/components/ContentPageLayout";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog";

const SITE_URL = "https://www.airmets.com";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article Not Found | Airmets Blog" };
  }

  return {
    title: `${post.title} | Airmets Blog`,
    description: post.seoDescription,
    keywords: [post.category, "UAS", "drone photography", "Southern California", "FAA Part 107"],
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.seoDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "Airmets" },
    publisher: { "@type": "Organization", name: "Airmets", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <ContentPageLayout
      eyebrow={post.category}
      title={post.title}
      subtitle={post.excerpt}
      backHref="/blog"
      backLabel="Blog"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <p className="text-sm text-air-muted">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
        {" · "}
        {post.readMinutes} min read
      </p>

      {post.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="font-display mb-4 text-2xl font-bold text-white">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-4">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <section className="rounded-2xl border border-air-border bg-air-card p-6">
        <h2 className="font-display mb-3 text-xl font-bold text-white">Related Resources</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/service-area" className="text-air-red hover:underline">
              Southern California service area
            </Link>
          </li>
          <li>
            <Link href="/services/drone-aerial" className="text-air-red hover:underline">
              Drone aerial photography services
            </Link>
          </li>
          <li>
            <Link href="/services/general-photography" className="text-air-red hover:underline">
              General photography services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-air-red hover:underline">
              All blog articles
            </Link>
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-air-red/30 bg-air-card p-8 text-center">
        <h2 className="font-display mb-3 text-2xl font-bold text-white">Ready to plan your mission?</h2>
        <p className="mb-6 text-air-silver">
          Tell us about your property, timeline, and deliverables. We typically respond within one business day.
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