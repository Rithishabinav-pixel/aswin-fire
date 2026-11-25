import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import { projects, getProjectBySlug } from "@/data/projects";
import styles from "./CaseStudy.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Every slug is enumerated above and fully prerendered, so this route is
// already static HTML in production; opt out of the dev-only instant-nav
// validation rather than fragmenting a small, fully static template.
export const instant = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.systems[0]} for ${project.client}, ${project.location.split(",")[0]}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        eyebrow={project.industryLabel}
        title={`${project.systems[0]} for ${project.client}, ${project.location.split(",")[0]}`}
        subtitle={project.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.client },
        ]}
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <Reveal className={styles.body}>
            <h2>The challenge</h2>
            <p>{project.challenge}</p>
            <h2>Our solution</h2>
            <p>{project.solution}</p>
            <h2>The result</h2>
            <p>{project.result}</p>

            {project.gallery ? (
              <div className={styles.gallery} aria-hidden="true">
                {Array.from({ length: project.gallery }).map((_, i) => (
                  <span className={styles.galleryTile} key={i} />
                ))}
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={100} as="aside" className={styles.sidebar}>
            <div className={styles.sideRow}>
              <span className={styles.sideLabel}>Client</span>
              <span className={styles.sideValue}>{project.client}</span>
            </div>
            <div className={styles.sideRow}>
              <span className={styles.sideLabel}>Location</span>
              <span className={styles.sideValue}>{project.location}</span>
            </div>
            <div className={styles.sideRow}>
              <span className={styles.sideLabel}>Industry</span>
              <span className={styles.sideValue}>{project.industryLabel}</span>
            </div>
            <div className={styles.sideRow}>
              <span className={styles.sideLabel}>Systems</span>
              <span className={`${styles.sideValue} ${styles.tagWrap}`}>
                {project.systems.map((s) => (
                  <span className={styles.tag} key={s}>
                    {s}
                  </span>
                ))}
              </span>
            </div>
            <div className={styles.sideRow}>
              <span className={styles.sideLabel}>Scope</span>
              <span className={`${styles.sideValue} ${styles.tagWrap}`}>
                {project.scope.map((s) => (
                  <span className={styles.tag} key={s}>
                    {s}
                  </span>
                ))}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CTABand
            title="Planning a similar project?"
            text="Tell our engineers about your site and we'll put together a code-compliant proposal."
            primary={{ label: "Start a Conversation", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
