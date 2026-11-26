import Link from "next/link";
import Image from "next/image";
import styles from "./BrandLogo.module.css";

export default function BrandLogo({ onDark = false, showSub = true, onClick, className = "" }) {
  return (
    <Link
      href="/"
      className={`${styles.logo} ${onDark ? styles.onDark : ""} ${className}`.trim()}
      onClick={onClick}
    >
      <span className={styles.mark}>
        <Image src="/brand/icon.png" alt="Aswin Fire" fill sizes="38px" style={{ objectFit: "contain" }} priority />
      </span>
      <span>
        <span className={styles.text}>Aswin Fire</span>
        {showSub ? <span className={styles.sub}>Fire &amp; Life Safety</span> : null}
      </span>
    </Link>
  );
}
