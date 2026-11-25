"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import styles from "./ClientLogoWall.module.css";

export default function ClientLogoWall({ sectors }) {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...sectors.map((s) => s.sector)];

  const clients = active === "All"
    ? sectors.flatMap((s) => s.clients)
    : sectors.find((s) => s.sector === active)?.clients || [];

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            className={styles.tab}
            data-active={active === t}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {clients.map((c, i) => (
          <Reveal as="div" delay={(i % 8) * 40} className={styles.logo} key={`${active}-${c}`}>
            {c}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
