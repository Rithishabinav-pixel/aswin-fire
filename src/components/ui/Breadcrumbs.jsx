import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: item.href } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={`container ${styles.nav}`}>
      <ol className={styles.list}>
        {items.map((item, i) => (
          <li key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            {i > 0 ? <span className={styles.sep}>/</span> : null}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
