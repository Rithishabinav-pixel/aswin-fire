import Image from "next/image";
import styles from "./LogoMarquee.module.css";

// Accepts plain label strings, or {name, logo} objects for real logo images.
export default function LogoMarquee({ items }) {
  const doubled = [...items, ...items];

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => {
          const isImage = typeof item === "object" && item?.logo;
          const label = isImage ? item.name : item;
          return isImage ? (
            <span className={styles.imageItem} key={`${label}-${i}`}>
              <Image
                src={item.logo}
                alt={`${label} logo`}
                fill
                sizes="120px"
                style={{ objectFit: "contain" }}
              />
            </span>
          ) : (
            <span className={styles.item} key={`${label}-${i}`}>
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
