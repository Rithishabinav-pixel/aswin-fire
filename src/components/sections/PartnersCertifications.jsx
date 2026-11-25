import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { company } from "@/data/company";
import styles from "./PartnersCertifications.module.css";

export default function PartnersCertifications() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Partners & certifications"
          title="Trusted products, certified processes"
        />
        <div className={styles.grid} style={{ marginTop: "2.5rem" }}>
          <Reveal>
            <p className={styles.label}>Technology partners</p>
            <div className={styles.brandRow}>
              {company.brands.map((b) => (
                <span className={styles.brandChip} key={b}>
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.label}>Certifications & registrations</p>
            <div className={styles.badgeRow}>
              {company.certifications.map((c) => (
                <span className={styles.badge} key={c.label}>
                  <Icon name="shield-check" size={16} />
                  {c.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
