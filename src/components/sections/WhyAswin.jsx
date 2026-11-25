import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import styles from "./WhyAswin.module.css";

const reasons = [
  {
    title: "One accountable partner",
    text: "Site survey, design, supply, installation, testing, commissioning, handover and AMC, all under one contract.",
  },
  {
    title: "Specialists in critical environments",
    text: "Hospitals, data centres, control rooms, power plants and switchyards, where downtime is not an option.",
  },
  {
    title: "Engineered to code",
    text: "Designs follow NFPA, FM, UL and NBC India, with documentation ready for fire NOC and audits.",
  },
  {
    title: "Proven international products",
    text: "Systems from leading global manufacturers, including ANSUL, Inergen and Sapphire suppression lines.",
  },
];

export default function WhyAswin() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.sticky}>
          <SectionHeading
            eyebrow="Why Aswin"
            title="Why facility heads and consultants choose Aswin"
          />
        </div>
        <div className={styles.list}>
          {reasons.map((r, i) => (
            <Reveal as="div" delay={i * 90} className={styles.row} key={r.title}>
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.rowTitle}>{r.title}</h3>
                <p className={styles.rowText}>{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
