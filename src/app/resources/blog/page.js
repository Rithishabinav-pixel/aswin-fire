import PageHero from "@/components/sections/PageHero";
import ArticleCard from "@/components/ui/ArticleCard";
import { blogPosts } from "@/data/blog";
import styles from "../Resources.module.css";

export const metadata = {
  title: "Fire Safety Guides & Articles | Aswin Fire System",
  description:
    "Practical guides on fire protection systems, codes and maintenance from Aswin Fire's engineering team.",
  alternates: { canonical: "/resources/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides and articles from our engineers"
        subtitle="Practical, plain-English explainers written for facility managers, consultants and building owners."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog" },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map((p, i) => (
              <ArticleCard post={p} delay={i * 60} key={p.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
