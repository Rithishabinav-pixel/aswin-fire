import Reveal from "@/components/ui/Reveal";
import StatCounter from "@/components/ui/StatCounter";
import { company } from "@/data/company";
import styles from "./KeyNumbers.module.css";

const stats = [
  { value: company.foundedYearsAgo, label: "Years of fire protection engineering" },
  { value: company.projectsCompleted, label: "Projects designed, installed and commissioned" },
  { value: company.clientsServed, label: `Clients across ${company.sectorsServed} sectors` },
  { value: company.statesServed, label: "States served across India" },
];

export default function KeyNumbers() {
  return (
    <section className="section--tight">
      <div className={`container ${styles.grid}`}>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className={styles.stat}>
            <span className={styles.value}>
              <StatCounter value={s.value} />
            </span>
            <p className={styles.label}>{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
