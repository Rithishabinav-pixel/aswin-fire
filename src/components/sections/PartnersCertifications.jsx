import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import ClientLogoCard from "@/components/ui/ClientLogoCard";
import Slider from "@/components/ui/Slider";
import { company } from "@/data/company";
import { partnerLogos } from "@/data/partners";
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
            <div className={styles.partnerGrid}>
              {partnerLogos.map((p) => (
                <ClientLogoCard client={p} key={p.name} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className={styles.label}>Certifications & registrations</p>
            <div className={styles.certSliderWrap}>
              <Slider
                ariaLabel="Certifications and registrations"
                autoPlay
                interval={4500}
                slides={company.certifications.map((c) => (
                  <div className={styles.certSlide} key={c.label}>
                    <span className={styles.certIcon}>
                      <Icon name="shield-check" size={26} />
                    </span>
                    <div>
                      <h3 className={styles.certTitle}>{c.label}</h3>
                      <p className={styles.certNote}>{c.note}</p>
                    </div>
                  </div>
                ))}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
