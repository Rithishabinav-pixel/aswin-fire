import Reveal from "@/components/ui/Reveal";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import styles from "./PageHero.module.css";

export default function PageHero({ eyebrow, title, subtitle, breadcrumbs }) {
  return (
    <>
      <section className={styles.hero}>
        <span className={`blueprint-grid ${styles.pattern}`} aria-hidden="true" />
        <span className={styles.glow} aria-hidden="true" />
        <div className={`container ${styles.inner}`}>
          {eyebrow ? <Reveal as="p" className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</Reveal> : null}
          <Reveal as="h1" delay={60} className={styles.title}>
            {title}
          </Reveal>
          {subtitle ? (
            <Reveal as="p" delay={120} className={styles.subtitle}>
              {subtitle}
            </Reveal>
          ) : null}
        </div>
      </section>
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
    </>
  );
}
