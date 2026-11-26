"use client";

import { useState } from "react";
import ClientLogoCard from "@/components/ui/ClientLogoCard";
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
          <ClientLogoCard client={c} delay={(i % 8) * 40} key={`${active}-${c.name}`} />
        ))}
      </div>
    </div>
  );
}
