import Image from "next/image";
import Reveal from "./Reveal";
import styles from "./ClientLogoCard.module.css";

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ClientLogoCard({ client, delay = 0 }) {
  return (
    <Reveal delay={delay} className={styles.card}>
      {client.logo ? (
        <span className={styles.imgWrap}>
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            sizes="200px"
            style={{ objectFit: "contain" }}
          />
        </span>
      ) : (
        <span className={styles.placeholder}>
          <span className={styles.initials}>{getInitials(client.name)}</span>
          <span className={styles.placeholderName}>{client.name}</span>
        </span>
      )}
    </Reveal>
  );
}
