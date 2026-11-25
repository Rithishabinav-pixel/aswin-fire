import styles from "./LogoMarquee.module.css";

export default function LogoMarquee({ items }) {
  const doubled = [...items, ...items];

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((label, i) => (
          <span className={styles.item} key={`${label}-${i}`}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
