import { notFound } from "next/navigation";
import posts from "@/lib/newsPosts.json";
import Page from "@/components/post/Page";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function NewsPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p: Post) => p.slug === params.slug);

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
