import Reveal from "./Reveal";
import Button from "./Button";
import styles from "./CTABand.module.css";

export default function CTABand({
  title,
  text,
  primary = { label: "Get a Quote", href: "/contact" },
  secondary,
}) {
  return (
    <Reveal as="div" className={styles.band}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {text ? <p className={styles.text}>{text}</p> : null}
      </div>
      <div className={styles.actions}>
        {primary ? (
          <Button href={primary.href} variant="primary">
            {primary.label}
          </Button>
        ) : null}
        {secondary ? (
          <Button href={secondary.href} variant="onDark" showIcon={false}>
            {secondary.label}
          </Button>
        ) : null}
      </div>
    </Reveal>
  );
}
