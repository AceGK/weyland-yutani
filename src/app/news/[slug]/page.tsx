import { notFound } from "next/navigation";
import posts from "@/lib/newsPosts.json";
import Page from "@/components/post/Page";
import type { Metadata } from "next";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://weyland-yutani.vercel.app/news/${post.slug}`,
      images: [{ url: post.image || "/og-thumbnail.jpg" }],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: [post.image || "/og-thumbnail.jpg"],
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = posts.find((p: Post) => p.slug === slug);

  if (!post) return notFound();

  return (
    <Page
      title={post.title}
      date={post.date}
      content={post.content}
      image={post.image}
    />
  );
}
