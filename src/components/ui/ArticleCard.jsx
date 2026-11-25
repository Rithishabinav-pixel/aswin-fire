import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import styles from "./ArticleCard.module.css";

export default function ArticleCard({ post, delay = 0 }) {
  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <Link href={`/resources/blog/${post.slug}`} className={styles.card}>
        <div className={styles.meta}>
          <Icon name="clock" size={14} />
          {post.readTime}
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <span className={styles.link}>
          Read article <Icon name="arrow-right" size={15} strokeWidth={2.25} />
        </span>
      </Link>
    </Reveal>
  );
}
