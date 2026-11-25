import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { getSolutionBySlug } from "@/data/solutions";
import styles from "./Article.module.css";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

// Every slug is enumerated above and fully prerendered, so this route is
// already static HTML in production.
export const instant = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/resources/blog/${post.slug}` },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedSolution = post.relatedSolutionSlug ? getSolutionBySlug(post.relatedSolutionSlug) : null;

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={post.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog", href: "/resources/blog" },
          { label: post.title },
        ]}
      />

      <section className="section">
        <div className="container">
          <Reveal as="article" className={styles.article}>
            <div className={styles.meta}>
              <span>
                <Icon name="clock" size={14} /> {post.readTime}
              </span>
              <span>By Aswin Engineering Team</span>
            </div>

            {post.blocks.map((block, i) => {
              if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
              if (block.type === "ul") {
                return (
                  <ul key={i}>
                    {block.items.map((item) => (
                      <li key={item}>
                        <Icon name="check" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}

            {relatedSolution ? (
              <div className={styles.relatedBox}>
                <div>
                  <strong>Explore {relatedSolution.shortName}</strong>
                  <p style={{ color: "var(--ink-500)", fontSize: "0.9375rem", marginTop: "0.25rem" }}>
                    {relatedSolution.oneLiner}
                  </p>
                </div>
                <Button href={`/solutions/${relatedSolution.slug}`} variant="secondary" size="sm">
                  View solution
                </Button>
              </div>
            ) : null}
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CTABand
            title="Have a question about your facility?"
            text="Our engineers can review your current setup and recommend what to do next."
            primary={{ label: "Request a Quote", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
