'use client';

import { useState } from "react";
import Header from "@/components/header";
import Card from "@/components/post/Card";
import posts from "@/lib/newsPosts.json";
import styles from "./styles.module.scss"; 
import Button from "@/components/button";

export default function NewsIndexPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3); // load 3 at a time
  };

  return (
    <main className={styles.container}>
      <Header title="News" backgroundImage="/images/1.jpeg" />
      <section className={styles.newsGrid}>
        {visiblePosts.map((post) => (
          <Card
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
          />
        ))}
      </section>
      {hasMore && (
        <div className={styles.loadMoreWrapper}>
          <Button onClick={loadMore}>
            View More
          </Button>
        </div>
      )}
    </main>
  );
}
