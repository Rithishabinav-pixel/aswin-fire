import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import StatCounter from "@/components/ui/StatCounter";
import { company } from "@/data/company";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <span className="blueprint-grid" style={{ position: "absolute", inset: 0 }} />
        <span className={styles.glow1} />
        <span className={styles.glow2} />
      </div>

      <div className={`container ${styles.content}`}>
        <div>
          <Reveal>
            <p className={`eyebrow ${styles.eyebrow}`}>Fire &amp; life-safety engineering</p>
          </Reveal>
          <Reveal delay={80} as="h1" className={styles.title}>
            End-to-end fire protection engineering for{" "}
            <span className={styles.titleAccent}>hospitals, industry</span> and critical
            infrastructure
          </Reveal>
          <Reveal delay={160} as="p" className={styles.subtitle}>
            From design and supply to installation, commissioning and annual maintenance —
            one accountable partner for code-compliant fire and life-safety systems across
            South India.
          </Reveal>
          <Reveal delay={240} className={styles.ctaRow}>
            <Button href="/contact" variant="primary">
              Get a Quote
            </Button>
            <Button href="/contact#survey" variant="onDark" showIcon={false}>
              Book a Free Site Survey
            </Button>
          </Reveal>
        </div>

        <Reveal delay={200} className={styles.sidePanel}>
          <p className={styles.sidePanelLabel}>Engineering at a glance</p>
          <div className={styles.sidePanelGrid}>
            <div className={styles.sidePanelStat}>
              <span className={styles.sidePanelValue}>
                <StatCounter value={company.foundedYearsAgo} />
              </span>
              <span className={styles.sidePanelKey}>Years of fire protection engineering</span>
            </div>
            <div className={styles.sidePanelStat}>
              <span className={styles.sidePanelValue}>
                <StatCounter value={company.projectsCompleted} />
              </span>
              <span className={styles.sidePanelKey}>Projects designed &amp; commissioned</span>
            </div>
            <div className={styles.sidePanelStat}>
              <span className={styles.sidePanelValue}>
                <StatCounter value={company.clientsServed} />
              </span>
              <span className={styles.sidePanelKey}>
                Clients across {company.sectorsServed} sectors
              </span>
            </div>
            <div className={styles.sidePanelStat}>
              <span className={styles.sidePanelValue}>
                <StatCounter value={company.statesServed} />
              </span>
              <span className={styles.sidePanelKey}>States served across India</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className={`container ${styles.scrollCue}`}>
        <span className={styles.scrollLine} />
        Designed to NFPA, FM, UL &amp; National Building Code of India
      </div>
    </section>
  );
}
