import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <Link href={`/projects/${project.slug}`} className={styles.card}>
        <div className={styles.media}>
          <span className={styles.mediaGrid} aria-hidden="true" />
          <span className={styles.industryTag}>{project.industryLabel}</span>
        </div>
        <div className={styles.body}>
          <h3 className={styles.client}>{project.client}</h3>
          <p className={styles.location}>{project.location}</p>
          <div className={styles.tags}>
            {project.systems.slice(0, 3).map((s) => (
              <span className={styles.tag} key={s}>
                {s}
              </span>
            ))}
          </div>
          <span className={styles.link}>
            Read case study <Icon name="arrow-right" size={15} strokeWidth={2.25} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
