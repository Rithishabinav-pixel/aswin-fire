import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import styles from "./IndustryCard.module.css";

export default function IndustryCard({ industry, href, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link href={href ?? `/industries#${industry.slug}`} className={styles.card} id={href ? undefined : industry.slug}>
        <span className={styles.pattern} aria-hidden="true" />
        <span className={styles.iconWrap}>
          <Icon name={industry.icon} size={22} />
        </span>
        <h3 className={styles.title}>{industry.name}</h3>
        <p className={styles.text}>{industry.summary}</p>
      </Link>
    </Reveal>
  );
}
