import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import styles from "./SolutionCard.module.css";

export default function SolutionCard({ solution, index, delay = 0 }) {
  return (
    <Reveal delay={delay} style={{ height: "100%" }}>
      <Link href={`/solutions/${solution.slug}`} className={styles.card}>
        {typeof index === "number" ? (
          <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
        ) : null}
        <span className={styles.iconWrap}>
          <Icon name={solution.icon} size={26} />
        </span>
        <h3 className={styles.title}>{solution.shortName}</h3>
        <p className={styles.text}>{solution.oneLiner}</p>
        <span className={styles.link}>
          Explore <Icon name="arrow-right" size={15} strokeWidth={2.25} />
        </span>
      </Link>
    </Reveal>
  );
}
