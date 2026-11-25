import Reveal from "./Reveal";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  as: Tag = "h2",
  className = "",
}) {
  const classes = [
    styles.wrap,
    align === "center" ? styles.center : "",
    light ? styles.light : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Reveal className={classes}>
      {eyebrow ? <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p> : null}
      <Tag className={styles.title}>{title}</Tag>
      {description ? <p className={styles.description}>{description}</p> : null}
    </Reveal>
  );
}
