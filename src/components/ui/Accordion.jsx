"use client";

import { useState } from "react";
import Icon from "./Icon";
import styles from "./Accordion.module.css";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className={styles.item} data-open={open} key={item.q}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              <span>{item.q}</span>
              <span className={styles.iconWrap}>
                <Icon name="plus" size={16} strokeWidth={2.25} />
              </span>
            </button>
            <div className={styles.panel}>
              <div className={styles.panelInner}>
                <p className={styles.answer}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
