import { notFound } from "next/navigation";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/ui/CTABand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Accordion from "@/components/ui/Accordion";
import ProjectCard from "@/components/ui/ProjectCard";
import { solutions, getSolutionBySlug } from "@/data/solutions";
import { projects } from "@/data/projects";
import styles from "./SolutionDetail.module.css";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

// Every slug is enumerated above and fully prerendered, so this route is
// already static HTML in production; opt out of the dev-only instant-nav
// validation rather than fragmenting a small, fully static template.
export const instant = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: solution.seoTitle,
    description: solution.metaDescription,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionDetailPage({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const hasApplications = solution.systems?.some((s) => s.applications);
  const related = (solution.relatedProjectSlugs || [])
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={solution.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: solution.shortName },
        ]}
      />

      <section className="section">
        <div className={`container ${styles.introGrid}`}>
          <Reveal as="p" className={styles.introText}>
            {solution.intro}
          </Reveal>
          <Reveal delay={100} className={styles.sideCard}>
            <p className={styles.sideCardTitle}>Why Aswin</p>
            <div className={styles.sideList}>
              {(solution.whyAswin || [
                "In-house design and installation teams",
                "Systems engineered to NFPA, FM, UL and NBC India",
                "One partner from survey through AMC",
              ]).map((item) => (
                <div className={styles.sideItem} key={item}>
                  <Icon name="check-circle" size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {solution.systems ? (
        <section className="section section--tight section--warm">
          <div className="container">
            <SectionHeading eyebrow="Systems we deliver" title="What we design and install" />
            <div className={styles.systemsWrap}>
              <table className={styles.systemsTable}>
                <thead>
                  <tr>
                    <th>System</th>
                    <th>What it does</th>
                    {hasApplications ? <th>Typical applications</th> : null}
                  </tr>
                </thead>
                <tbody>
                  {solution.systems.map((s) => (
                    <tr key={s.name}>
                      <td className={styles.systemName}>{s.name}</td>
                      <td>{s.what}</td>
                      {hasApplications ? <td>{s.applications || "—"}</td> : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      {solution.integration ? (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Integration" title="Works with your other systems" description={solution.integration} />
          </div>
        </section>
      ) : null}

      {solution.specialistApplications ? (
        <section className="section section--tight">
          <div className="container">
            <SectionHeading eyebrow="Specialist applications" title="Where this matters most" />
            <div className={styles.chipRow}>
              {solution.specialistApplications.map((a) => (
                <span className={styles.chip} key={a}>
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {solution.whereItMatters ? (
        <section className="section section--tight">
          <div className="container">
            <SectionHeading eyebrow="Where it matters most" title="Built for the highest-risk spaces" />
            <div className={styles.chipRow}>
              {solution.whereItMatters.map((a) => (
                <span className={styles.chip} key={a}>
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {solution.scope ? (
        <section className="section section--warm">
          <div className="container">
            <SectionHeading eyebrow="Our scope" title="What's included, start to finish" />
            <div className={styles.scopeGrid}>
              {solution.scope.map((item) => (
                <div className={styles.scopeItem} key={item}>
                  <Icon name="check" size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Related projects" title="Proof in the field" />
            <div className={styles.relatedGrid} style={{ marginTop: "2.5rem" }}>
              {related.map((p, i) => (
                <ProjectCard project={p} delay={i * 70} key={p.slug} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {solution.faqs ? (
        <section className="section section--tight section--warm">
          <div className="container">
            <SectionHeading eyebrow="FAQs" title="Common questions" />
            <div style={{ marginTop: "2rem" }}>
              <Accordion items={solution.faqs.map((f) => ({ q: f.q, a: f.a }))} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <CTABand
            title={solution.ctaText}
            primary={{ label: "Request a Quote", href: "/contact" }}
            secondary={{ label: "Talk to an Engineer", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
